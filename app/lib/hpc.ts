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
 * Executes a file with arguments safely and logs it.
 */
export async function execFileWithLog(file: string, args: string[], options: any = {}): Promise<{ stdout: string, stderr: string }> {
    const logPath = path.join(os.homedir(), 'hpc_app_debug.log')
    const timestamp = new Date().toISOString()

    // Log Command
    try {
        // Log in a way that shows individual args
        const cmdLog = `[${timestamp}] [CMD] ${file} ${JSON.stringify(args)}\n`
        await fs.appendFile(logPath, cmdLog)
    } catch (e) { /* worst case ignore logging error */ }

    try {
        const { stdout, stderr } = await execFileAsync(file, args, options)

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
function getPermString(perm: 'read' | 'write' | 'traverse' | 'none'): string {
    if (perm === 'write') return 'rwX'
    if (perm === 'read') return 'rX'
    if (perm === 'traverse') return 'X'
    return ''
}

export async function applyAcl(targetPath: string, user: string, permission: 'read' | 'write' | 'traverse' | 'none', recursive: boolean = false): Promise<boolean> {
    const aclType = await probeAclSupport(targetPath)

    if (aclType === 'none') {
        console.warn(`ACLs not supported on ${targetPath}`)
        return false
    }

    // recursive flag is unused for POSIX setfacl here as we removed -R
    // but keeping signature same for compatibility

    const permString = getPermString(permission)

    try {
        if (permission === 'none') {
            // Remove
            await execFileWithLog('setfacl', ['-x', `u:${user}`, targetPath])
            return true
        }

        // Set
        await execFileWithLog('setfacl', ['-m', `u:${user}:${permString}`, targetPath])
        return true
    } catch (e) {
        console.error(`Failed to apply POSIX ACL on ${targetPath}:`, e)
        return false
    }
}
