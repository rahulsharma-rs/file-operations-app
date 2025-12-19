import { exec } from 'child_process'
import util from 'util'
import fs from 'fs/promises'
import path from 'path'
import os from 'os'

const execAsync = util.promisify(exec)

interface AclCapability {
    type: 'nfs4' | 'posix' | 'none'
    verifiedAt: number
}

// Cache capabilities by directory path
const capabilityCache = new Map<string, AclCapability>()

export async function getExecutionUser(): Promise<string> {
    try {
        const { stdout } = await execAsync('whoami')
        return stdout.trim()
    } catch (e) {
        // Fallback to os.userInfo if whoami fails
        return os.userInfo().username
    }
}

export async function checkOwnership(targetPath: string): Promise<boolean> {
    try {
        const stats = await fs.stat(targetPath)
        const currentUser = await getExecutionUser()

        // precise check might need uid mapping, but text-based check relies on `id -nu`
        const { stdout } = await execAsync(`id -nu ${stats.uid}`)
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
        // Probe 1: Check if NFSv4 ACLs are supported
        // We use nfs4_getfacl as a probe. If it returns 0, it likely works.
        try {
            await execAsync(`nfs4_getfacl "${targetPath}"`)
            capability = 'nfs4'
        } catch (e) {
            // Failed, try POSIX
            try {
                // getfacl works on most FS, but let's see if it returns valid ACLs
                await execAsync(`getfacl "${targetPath}"`)
                capability = 'posix'
            } catch (ex) {
                // Both failed
                capability = 'none'
            }
        }
    } catch (e) {
        capability = 'none'
    }

    capabilityCache.set(dir, { type: capability, verifiedAt: Date.now() })
    return capability
}

// Helper to get raw permission string
function getPermString(type: 'posix' | 'nfs4', perm: 'read' | 'write' | 'traverse' | 'none'): string {
    if (type === 'posix') {
        if (perm === 'write') return 'rwX'
        if (perm === 'read') return 'rX'
        if (perm === 'traverse') return 'X'
        return ''
    } else {
        if (perm === 'write') return 'RWX'
        if (perm === 'read') return 'RX'
        if (perm === 'traverse') return 'X'
        return 'none'
    }
}

export async function applyAcl(targetPath: string, user: string, permission: 'read' | 'write' | 'traverse' | 'none', recursive: boolean = false): Promise<boolean> {
    const aclType = await probeAclSupport(targetPath)

    // Graceful fallback if denied or not supported is handled by returning false
    if (aclType === 'none') {
        console.warn(`ACLs not supported on ${targetPath}`)
        return false
    }

    const recFlag = recursive ? '-R' : ''
    const permString = getPermString(aclType, permission)

    try {
        if (aclType === 'nfs4') {
            if (permission === 'none') {
                // Naive remove attempts for NFSv4 rely on parsing or -x with precise entry
                return false;
            }

            // A: allow
            const cmd = `nfs4_setfacl ${recFlag} -a A::${user}:${permString} "${targetPath}"`
            await execAsync(cmd)
            return true
        } else if (aclType === 'posix') {
            if (permission === 'none') {
                // Remove
                await execAsync(`setfacl ${recFlag} -x u:${user} "${targetPath}"`)
                return true
            }

            const cmd = `setfacl ${recFlag} -m u:${user}:${permString} "${targetPath}"`
            await execAsync(cmd)
            return true
        }
    } catch (e) {
        console.error(`Failed to apply ${aclType} ACL on ${targetPath}:`, e)
        return false
    }

    return false
}
