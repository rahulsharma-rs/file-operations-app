import { exec, execFile } from 'child_process'
import util from 'util'
import fs from 'fs/promises'
import path from 'path'
import os from 'os'

const execAsync = util.promisify(exec) as (command: string, options?: any) => Promise<{ stdout: string, stderr: string }>
const execFileAsync = util.promisify(execFile) as (file: string, args: string[] | undefined | null, options?: any) => Promise<{ stdout: string, stderr: string }>

/**
 * Executes a shell command and logs it to a persistent file for debugging.
 */
export async function execWithLog(command: string, options: any = {}): Promise<{ stdout: string, stderr: string }> {
    const logPath = path.join(os.homedir(), 'hpc_app_debug.log')
    const timestamp = new Date().toISOString()

    // Log Command
    try {
        const cmdLog = `[${timestamp}] [CMD] ${command}\n`
        await fs.appendFile(logPath, cmdLog)
    } catch (e) { /* worst case ignore logging error */ }

    try {
        const { stdout, stderr } = await execAsync(command, options)

        // Log Output
        try {
            const outLog = `[${timestamp}] [OUT] ${stdout.trim().substring(0, 500)}${stdout.length > 500 ? '...' : ''}\n`
            await fs.appendFile(logPath, outLog)
            if (stderr) {
                const errLog = `[${timestamp}] [ERR] ${stderr.trim()}\n`
                await fs.appendFile(logPath, errLog)
            }
        } catch (e) { /* ignore */ }

        return { stdout, stderr }
    } catch (error: any) {
        // Log Failure
        try {
            const failLog = `[${timestamp}] [FAIL] ${error.message}\n`
            await fs.appendFile(logPath, failLog)
        } catch (e) { /* ignore */ }
        throw error
    }
}

/**
 * Centralized logging helper.
 * Logs to console and to a persistent file in the home directory.
 */
export async function logSystemEvent(level: 'INFO' | 'CMD' | 'OUT' | 'ERR' | 'FAIL' | 'SUCCESS', message: string) {
    const logPath = path.join(os.homedir(), 'hpc_app_debug.log')
    const timestamp = new Date().toISOString()
    const hostname = os.hostname()

    // Format: [2023-10-27T10:00:00Z] [my-host] [INFO] Message
    const logLine = `[${timestamp}] [${hostname}] [${level}] ${message}\n`

    // Write to file (ignore errors to prevent crash loops)
    try {
        await fs.appendFile(logPath, logLine)
    } catch (e) { /* ignore */ }

    // Also log to console for dev visibility
    if (level === 'ERR' || level === 'FAIL') {
        console.error(logLine.trim())
    } else {
        console.log(logLine.trim())
    }
}

/**
 * Executes a file with arguments safely and logs it.
 */
export async function execFileWithLog(file: string, args: string[], options: any = {}): Promise<{ stdout: string, stderr: string }> {
    // Log Command
    await logSystemEvent('CMD', `${file} ${JSON.stringify(args)} (start)`)

    try {
        const { stdout, stderr } = await execFileAsync(file, args, options)

        // Log Output (truncated)
        await logSystemEvent('OUT', stdout.trim().substring(0, 500) + (stdout.length > 500 ? '...' : ''))

        if (stderr) {
            await logSystemEvent('ERR', stderr.trim())
        }

        return { stdout, stderr }
    } catch (error: any) {
        // Log Failure
        await logSystemEvent('FAIL', `Command failed: ${error.message}`)
        throw error
    }
}

interface AclCapability {
    type: 'posix' | 'none'
    verifiedAt: number
}

// Cache capabilities by directory path
const capabilityCache = new Map<string, AclCapability>()

let cachedUser: string | null = null
let pendingUserRequest: Promise<string> | null = null

export async function getExecutionUser(): Promise<string> {
    if (cachedUser) return cachedUser
    if (pendingUserRequest) return pendingUserRequest

    pendingUserRequest = (async () => {
        try {
            const { stdout } = await execWithLog('whoami')
            cachedUser = stdout.trim()
            return cachedUser
        } catch (e) {
            return os.userInfo().username
        } finally {
            pendingUserRequest = null
        }
    })()

    return pendingUserRequest
}

export async function checkOwnership(targetPath: string): Promise<boolean> {
    try {
        const stats = await fs.stat(targetPath)
        const currentUser = await getExecutionUser()

        // precise check might need uid mapping, but text-based check relies on `id -nu`
        const { stdout } = await execWithLog(`id -nu ${stats.uid}`)
        const ownerName = stdout.trim()

        return ownerName === currentUser
    } catch (e) {
        console.error(`Ownership check failed for ${targetPath}:`, e)
        return false
    }
}

export async function probeAclSupport(targetPath: string): Promise<AclCapability['type']> {
    const dir = path.dirname(targetPath)

    if (capabilityCache.has(dir)) {
        return capabilityCache.get(dir)!.type
    }

    let capability: AclCapability['type'] = 'none'

    try {
        // Only check for POSIX ACL support via getfacl
        await execWithLog(`getfacl "${targetPath}"`)
        capability = 'posix'
    } catch (e) {
        capability = 'none'
    }

    capabilityCache.set(dir, { type: capability, verifiedAt: Date.now() })
    return capability
}

// Helper to get raw permission string
export function getPermString(perm: 'read' | 'write' | 'traverse' | 'none'): string {
    if (perm === 'write') return 'rwX'
    if (perm === 'read') return 'rX'
    if (perm === 'traverse') return 'X'
    return ''
}

import { insertJob, updateJobStatus } from './db'

export async function submitAclJob(targetPath: string, user: string, permission: 'read' | 'write' | 'traverse' | 'none', recursive: boolean = false): Promise<{ success: boolean, message: string }> {
    const aclType = await probeAclSupport(targetPath)

    if (aclType === 'none') {
        return { success: false, message: `ACLs not supported on ${targetPath}` }
    }

    const permString = getPermString(permission)
    const mode = permission === 'none' ? 'remove' : 'set'
    const scriptPath = path.join(process.cwd(), 'scripts', 'apply_acl.sh')

    // 1. Create Job Record
    let jobId: number
    try {
        jobId = await insertJob({
            type: mode === 'remove' ? 'acl_remove' : 'acl_add',
            target_path: targetPath,
            target_user: user,
            permissions: permString,
            slurm_job_id: null,
            status: 'pending'
        })
    } catch (e) {
        console.error("Failed to insert job record:", e)
        return { success: false, message: "Failed to record job" }
    }

    // 2. Submit to Slurm
    try {
        // Args: User, Path, Perms, Mode
        const args = [scriptPath, user, targetPath, permString, mode]
        const { stdout } = await execFileWithLog('sbatch', args)

        // Parse Job ID from stdout "Submitted batch job 12345"
        const match = stdout.match(/Submitted batch job (\d+)/)
        const slurmId = match ? match[1] : 'unknown'

        console.log(`[ACL Job] Submitted job ${slurmId} for ${user} on ${targetPath} (${mode})`)
        await updateJobStatus(jobId, 'submitted', slurmId)
        return { success: true, message: `Job submitted (ID: ${slurmId})` }
    } catch (e: any) {
        console.error("Slurm submission failed:", e)

        // Handle local dev fallback (sbatch not found)
        if (e.message && e.message.includes('ENOENT')) {
            console.warn("sbatch not found, assuming local dev. Marking as fake-success for testing.")
            await updateJobStatus(jobId, 'completed (local-mock)', 'local-dev')
            return { success: true, message: "Locally mocked success (sbatch not found)" }
        }

        await updateJobStatus(jobId, 'failed')
        return { success: false, message: "Failed to submit Slurm job" }
    }
}
