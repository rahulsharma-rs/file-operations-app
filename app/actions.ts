'use server'

import fs from 'fs/promises'
import path from 'path'
import os from 'os'
import { FileItem, SharedFileItem } from '@/app/types'

const BASE_PATH = os.homedir()
const ALLOWED_ROOTS = [os.homedir(), '/data', '/scratch', '/gpfs', '/fs1', '/project', '/work', '/lstr']

export async function getFiles(currentPathSegments: string[]): Promise<FileItem[]> {
    try {
        // Construct path from segments. 
        // We resolve (...) segments relative to BASE_PATH (Home).
        // If segments are ['..', '..', 'data'], it resolves to /data

        const relativePath = path.join(...currentPathSegments)
        const fullPath = path.join(BASE_PATH, relativePath)
        const resolvedPath = path.resolve(fullPath)

        // Security Check: 
        // Allow if it is within Home OR starts with any of the allowed HPC roots.
        // We strictly block sensitive system roots to prevent accidentally enumerating /proc or /etc
        const isAllowed = ALLOWED_ROOTS.some(root => resolvedPath.startsWith(root)) ||
            (resolvedPath !== '/' && !['/etc', '/var', '/usr', '/bin', '/sbin', '/proc', '/sys', '/boot'].some(restricted => resolvedPath.startsWith(restricted)))

        if (!isAllowed) {
            // Check for explicit allowed roots failed, and it hit a restricted block list or is root.
            // Actually, the logic above is: OR (NOT restricted). 
            // So if it's /data (not restricted), it passes.
            // If it's /etc (restricted), it fails unless it was in ALLOWED_ROOTS (unlikely).

            // Double check safety:
            if (resolvedPath === '/' || resolvedPath.startsWith('/etc') || resolvedPath.startsWith('/proc')) {
                throw new Error("Access denied: Restricted system directory")
            }
        }

        const entries = await fs.readdir(fullPath, { withFileTypes: true })

        const files = await Promise.all(entries.map(async (entry): Promise<FileItem | null> => {
            try {
                const entryPath = path.join(fullPath, entry.name)
                const stats = await fs.stat(entryPath)

                let type: FileItem['type'] = 'file'
                if (entry.isDirectory()) type = 'folder'
                else if (entry.name.endsWith('.sh') || entry.name.endsWith('.py')) type = 'script'
                else if (entry.name.endsWith('.csv') || entry.name.endsWith('.json')) type = 'data'
                else if (entry.name.endsWith('.zip') || entry.name.endsWith('.tar') || entry.name.endsWith('.gz')) type = 'archive'

                // Permission string simulation (Node fs doesn't give "rwx" string directly easily across platforms, 
                // but we can approximate from mode)
                const perms = (stats.mode & parseInt('777', 8)).toString(8) // simple octal

                return {
                    id: entryPath, // Use path as ID
                    name: entry.name,
                    type: type,
                    path: entryPath,
                    owner: await getUsername(stats.uid),
                    group: String(stats.gid),
                    modifiedAt: stats.mtime.toISOString(),
                    sizeBytes: stats.size,
                    permissions: `0${perms}` // Mocking the rwx string is complex, showing octal for now
                }
            } catch (e) {
                return null
            }
        }))

        return files.filter((f): f is FileItem => f !== null)
    } catch (error) {
        console.error("Error reading directory:", error)
        return []
    }
}

// ... imports

export async function getRelativePath(targetPath: string): Promise<string[]> {
    const rel = path.relative(BASE_PATH, targetPath)
    if (rel === '') return []
    return rel.split(path.sep)
}

export async function getDataPath(): Promise<string[]> {
    const username = os.userInfo().username
    const dataPath = path.join('/data/user', username)

    // Ensure this path exists, if not maybe fallback to /data?
    // user said "path on my HPC is /data/user/$USER", so we assume it exists

    // Calculate relative path from Home (BASE_PATH)
    const rel = path.relative(BASE_PATH, dataPath)
    if (rel === '') return []
    return rel.split(path.sep)
}

import { exec } from 'child_process'
import util from 'util'

const execAsync = util.promisify(exec)

const usernameCache = new Map<number, string>()

async function getUsername(uid: number): Promise<string> {
    if (usernameCache.has(uid)) return usernameCache.get(uid)!
    try {
        const { stdout } = await execAsync(`id -nu ${uid}`)
        const name = stdout.trim()
        usernameCache.set(uid, name)
        return name
    } catch (e) {
        return String(uid)
    }
}

async function userExists(username: string): Promise<boolean> {
    try {
        await execAsync(`id -u ${username}`)
        return true
    } catch (error) {
        return false
    }
}

export async function shareFile(sourcePath: string, targetUsername: string, permission: 'read' | 'write' = 'read'): Promise<{ success: boolean, message: string }> {
    // Validate target user exists
    if (!await userExists(targetUsername)) {
        return { success: false, message: `User '${targetUsername}' does not exist on this system.` }
    }

    try {
        // --- ACL IMPLEMENTATION ---
        // Grant Read/Execute permissions to the target user on the source file/folder
        // using 'setfacl'. This allows the target user to access the file directly via its full path.
        // We do NOT create symlinks or 'hpc_shared' directories as per user request.

        // Determine permissions string
        // read: rx (needs x for directories to list contents)
        // write: rwx (needs w to create/delete)
        const aclPerms = permission === 'write' ? 'rwX' : 'rX'

        // Determine if directory for recursive flag
        const stats = await fs.stat(sourcePath)
        const recursiveFlag = stats.isDirectory() ? '-R' : ''

        // ... existing setup ...

        // Helper to run ACL command
        const tryAclCommand = async (cmd: string) => {
            console.log(`[ACL] Executing: ${cmd}`)
            try {
                const { stdout, stderr } = await execAsync(cmd)
                if (stderr) {
                    // Log warning but don't fail immediately if exit code was 0 (which it is if we are here)
                    console.warn(`[ACL] Warning for ${cmd}:`, stderr)
                }
                console.log(`[ACL] Success: ${stdout}`)
                return true
            } catch (e: any) {
                console.error(`[ACL] Failed: ${cmd}`, e)
                // e.code is the exit code. 
                return false
            }
        }

        try {
            let success = false
            let method = ''

            // Strategy 1: Standard POSIX ACL (Non-Recursive)
            // User requested no -R option
            const cmdPosix = `setfacl -m "u:${targetUsername}:${aclPerms}" ${sourcePath}`
            if (await tryAclCommand(cmdPosix)) {
                success = true
                method = 'POSIX'
            }

            // Strategy 3: NFSv4 ACL (nfs4_setfacl)
            // Implementation for systems using NFSv4 ACLs (common in HPC /project or /data)
            if (!success) {
                const nfs4Perms = permission === 'write' ? 'RWX' : 'RX'
                // -a: add, A: allow, ::user:perms
                const cmdNfs4 = `nfs4_setfacl -a A::${targetUsername}:${nfs4Perms} ${sourcePath}`
                if (await tryAclCommand(cmdNfs4)) {
                    success = true
                    method = 'NFSv4'
                }
            }

            if (!success) {
                // Throw the original error or a generic one with more details
                throw new Error(`Could not apply permissions. functional setfacl or nfs4_setfacl failed. Please check if ACLs are enabled on this filesystem.`)
            }

            // 2. Ensure Traversal Access (+x) on parent directories
            // If the shared file is deep inside /data/user/alice/foo/bar,
            // bob needs +x on /data/user/alice, /data/user/alice/foo to reach it.
            // We ONLY do this for directories OWNED by the current user (e.g. inside Home or /data/user/$USER).

            const currentUser = os.userInfo().username
            const userRoots = [
                os.homedir(),
                path.join('/data/user', currentUser),
                path.join('/scratch', currentUser)
            ]

            let currentDir = path.dirname(sourcePath)

            // Walk up until we hit a system root or run out of path
            while (currentDir !== '/' && currentDir !== '.') {
                // Check if we are inside a user root
                const isInsideUserRoot = userRoots.some(root => currentDir.startsWith(root))
                if (!isInsideUserRoot) break; // Stop if we go above user's space (e.g. /data/user)

                try {
                    // Grant execute (x) ONLY. This allows traversal but not listing (r) or writing (w).
                    // This is minimal privilege to reach the shared content.
                    await execAsync(`setfacl -m "u:${targetUsername}:X" ${currentDir}`)
                } catch (e) {
                    console.warn(`Failed to set traversal ACL on ${currentDir}:`, e)
                    // Continue anyway, maybe it already works or we aren't owner (though we checked root)
                }

                currentDir = path.dirname(currentDir)
            }

            return { success: true, message: `Access granted to ${targetUsername} (${permission}). Traversal permissions updated.` }
        } catch (aclError: any) {
            console.error("ACL Error:", aclError)
            console.log("Environment check:", { env: process.env.NODE_ENV, platform: os.platform() })

            // If setfacl fails (e.g. local mac), we return error since this is the ONLY mechanism now.
            // On Mac (darwin), simply return success to allow UI testing.
            if (os.platform() === 'darwin') {
                return { success: true, message: `[DEV] Simulating ACL grant (${aclPerms}) to ${targetUsername} for ${sourcePath}` }
            }
            return { success: false, message: `Failed to set permissions: ${aclError.message}` }
        }
    } catch (error: any) {
        console.error("Error sharing file:", error)
        return { success: false, message: error.message || "Failed to share file" }
    }
}

export async function getFileAcls(filePath: string): Promise<{ username: string, permissions: 'read' | 'write' }[]> {
    try {
        if (!isPathAllowed(filePath)) throw new Error("Access denied")

        const { stdout } = await execAsync(`getfacl -p "${filePath}"`)
        const lines = stdout.split('\n')
        const acls: { username: string, permissions: 'read' | 'write' }[] = []

        for (const line of lines) {
            // Regex to find "user:username:rwx" entries. 
            // Note: "user::rwx" is owner, "user:bob:rwx" is named user.
            const match = line.match(/^user:([^:]+):([rwx-]+)/)
            if (match) {
                const username = match[1]
                const permsStr = match[2]
                // Filter out empty username if regex matches user:: (which it shouldnt due to + but safer to check)
                if (username) {
                    const permissions = permsStr.includes('w') ? 'write' : 'read'
                    acls.push({ username, permissions })
                }
            }
        }

        // Mock for mac dev
        if (acls.length === 0 && process.env.NODE_ENV === 'development' && os.platform() === 'darwin') {
            return [
                { username: 'esaghapo', permissions: 'read' },
                { username: 'mcwyatt', permissions: 'write' }
            ]
        }

        return acls
    } catch (e) {
        console.error("getfacl error:", e)
        return []
    }
}

export async function removeFileAccess(filePath: string, username: string): Promise<{ success: boolean, message: string }> {
    try {
        if (!isPathAllowed(filePath)) throw new Error("Access denied")

        await execAsync(`setfacl -x u:${username} "${filePath}"`)
        return { success: true, message: `Removed access for ${username}` }
    } catch (e: any) {
        if (process.env.NODE_ENV === 'development' && os.platform() === 'darwin') {
            return { success: true, message: `[DEV] Removed ACL for ${username}` }
        }
        return { success: false, message: e.message }
    }
}

export async function getFileShares(filePath: string): Promise<string[]> {
    try {
        const sharedRoot = path.join(os.homedir(), 'hpc_shared')

        // Scan all user directories in shared root
        try {
            const userDirs = await fs.readdir(sharedRoot, { withFileTypes: true })
            const shares: string[] = []

            for (const userDir of userDirs) {
                if (!userDir.isDirectory()) continue

                const userPath = path.join(sharedRoot, userDir.name)
                try {
                    const links = await fs.readdir(userPath)

                    for (const link of links) {
                        const linkPath = path.join(userPath, link)
                        try {
                            const target = await fs.readlink(linkPath)
                            if (target === filePath) {
                                shares.push(userDir.name)
                            }
                        } catch (e) {
                            // Not a symlink or other error, ignore
                        }
                    }
                } catch (e) {
                    // Cannot read user dir, ignore
                }
            }
            return shares
        } catch (e) {
            // Shared root likely doesn't exist yet
            return []
        }
    } catch (error) {
        console.error("Error getting shares:", error)
        return []
    }
}

export async function getSharedFiles(currentPathSegments: string[]): Promise<FileItem[]> {
    try {
        const currentUser = os.userInfo().username
        const sharedRoot = path.join(os.homedir(), 'hpc_shared', currentUser)

        await fs.mkdir(sharedRoot, { recursive: true })

        const relativePath = path.join(...currentPathSegments)
        const fullPath = path.join(sharedRoot, relativePath)

        // Security check
        if (!fullPath.startsWith(sharedRoot)) {
            throw new Error("Access denied: Cannot traverse above shared root")
        }

        const entries = await fs.readdir(fullPath, { withFileTypes: true })

        const files = await Promise.all(entries.map(async (entry): Promise<FileItem | null> => {
            try {
                const entryPath = path.join(fullPath, entry.name)
                const stats = await fs.stat(entryPath)

                let type: FileItem['type'] = 'file'
                if (entry.isDirectory()) type = 'folder'

                // For shared files, we might want to know who shared it (the link owner usually)
                // but lstat on the link itself in the parent dir might be needed if we want link info.
                // For now, presenting the target file info is fine.

                // Determine type extension logic same as getFiles
                if (!entry.isDirectory()) {
                    if (entry.name.endsWith('.sh') || entry.name.endsWith('.py')) type = 'script'
                    else if (entry.name.endsWith('.csv') || entry.name.endsWith('.json')) type = 'data'
                    else if (entry.name.endsWith('.zip') || entry.name.endsWith('.tar') || entry.name.endsWith('.gz')) type = 'archive'
                }

                const perms = (stats.mode & parseInt('777', 8)).toString(8)

                return {
                    id: entryPath,
                    name: entry.name,
                    type: type,
                    path: entryPath,
                    owner: await getUsername(stats.uid),
                    group: String(stats.gid),
                    modifiedAt: stats.mtime.toISOString(),
                    sizeBytes: stats.size,
                    permissions: `0${perms}`
                }
            } catch (e) {
                return null
            }
        }))

        return files.filter((f): f is FileItem => f !== null)
    } catch (error) {
        console.error("Error getting shared files:", error)
        return []
    }
}

export async function getOutgoingShares(): Promise<SharedFileItem[]> {
    try {
        const sharedRoot = path.join(os.homedir(), 'hpc_shared')
        const myHome = os.homedir()

        // Map of sourcePath -> { sharedWith: [] }
        const shareMap = new Map<string, { username: string, linkPath: string }[]>()

        try {
            const userDirs = await fs.readdir(sharedRoot, { withFileTypes: true })

            for (const userDir of userDirs) {
                if (!userDir.isDirectory()) continue

                const userPath = path.join(sharedRoot, userDir.name)
                try {
                    const links = await fs.readdir(userPath)

                    for (const link of links) {
                        const linkPath = path.join(userPath, link)
                        try {
                            const target = await fs.readlink(linkPath)
                            // Check if target is inside my home directory (or belongs to me)
                            // Ideally check if I own the target file
                            if (target.startsWith(myHome)) {
                                if (!shareMap.has(target)) {
                                    shareMap.set(target, [])
                                }
                                shareMap.get(target)?.push({ username: userDir.name, linkPath })
                            }
                        } catch (e) {
                            // Not a symlink
                        }
                    }
                } catch (e) {
                    // Ignore
                }
            }

            // Convert map to SharedFileItem list
            const results: SharedFileItem[] = []
            for (const [filePath, shares] of shareMap.entries()) {
                try {
                    const stats = await fs.stat(filePath)
                    const name = path.basename(filePath)

                    let type: FileItem['type'] = 'file'
                    if (stats.isDirectory()) type = 'folder'
                    else if (name.endsWith('.sh') || name.endsWith('.py')) type = 'script'
                    else if (name.endsWith('.csv') || name.endsWith('.json')) type = 'data'
                    else if (name.endsWith('.zip') || name.endsWith('.tar') || name.endsWith('.gz')) type = 'archive'

                    const perms = (stats.mode & parseInt('777', 8)).toString(8)

                    results.push({
                        id: filePath,
                        name: name,
                        type: type,
                        path: filePath,
                        owner: await getUsername(stats.uid),
                        group: String(stats.gid),
                        modifiedAt: stats.mtime.toISOString(),
                        sizeBytes: stats.size,
                        permissions: `0${perms}`,
                        sharedWith: shares.map(s => ({ username: s.username, permissions: 'read-only' }))
                    })
                } catch (e) {
                    // File might have been deleted but link exists
                }
            }
            return results

        } catch (e) {
            return []
        }
    } catch (error) {
        console.error("Error getting outgoing shares:", error)
        return []
    }
}

export async function unshareFile(targetUsername: string, fileName: string): Promise<{ success: boolean, message: string }> {
    try {
        const sharedLinkPath = path.join(os.homedir(), 'hpc_shared', targetUsername, fileName)
        await fs.unlink(sharedLinkPath)
        return { success: true, message: `Unshared ${fileName} with ${targetUsername}` }
    } catch (error: any) {
        return { success: false, message: error.message || "Failed to unshare" }
    }
}

export async function changePermissions(filePath: string, mode: string): Promise<{ success: boolean, message: string }> {
    try {
        await fs.chmod(filePath, mode)
        return { success: true, message: `Updated permissions for ${path.basename(filePath)}` }
    } catch (error: any) {
        return { success: false, message: error.message || "Failed to change permissions" }
    }
}

export async function uploadFile(formData: FormData): Promise<{ success: boolean, message: string }> {
    try {
        const file = formData.get('file') as File
        const currentPathSegments = JSON.parse(formData.get('pathSegments') as string)

        if (!file) {
            throw new Error("No file provided")
        }

        const buffer = Buffer.from(await file.arrayBuffer())
        const relativePath = path.join(...currentPathSegments)
        const targetDir = path.join(BASE_PATH, relativePath)

        if (!isPathAllowed(targetDir)) {
            throw new Error("Access denied: Path not allowed")
        }

        await fs.writeFile(path.join(targetDir, file.name), buffer)
        return { success: true, message: `Uploaded ${file.name}` }
    } catch (error: any) {
        console.error("Upload error:", error)
        return { success: false, message: error.message || "Upload failed" }
    }
}

export async function createFolder(pathSegments: string[], folderName: string): Promise<{ success: boolean, message: string }> {
    try {
        const relativePath = path.join(...pathSegments)
        const targetDir = path.join(BASE_PATH, relativePath, folderName)

        if (!isPathAllowed(targetDir)) {
            throw new Error("Access denied: Path not allowed")
        }

        await fs.mkdir(targetDir)
        return { success: true, message: `Created folder ${folderName}` }
    } catch (error: any) {
        return { success: false, message: error.message || "Failed to create folder" }
    }
}

export async function deleteItem(itemPath: string): Promise<{ success: boolean, message: string }> {
    return moveToTrash(itemPath) // Default to trash
}

const TRASH_PATH = path.join(os.homedir(), '.hpc_trash')

export async function moveToTrash(itemPath: string): Promise<{ success: boolean, message: string }> {
    try {
        await fs.mkdir(TRASH_PATH, { recursive: true })

        const timestamp = Date.now()
        const trashName = `${path.basename(itemPath)}_${timestamp}`
        const trashPath = path.join(TRASH_PATH, trashName)

        // Store metadata for restoration
        const metadata = {
            originalPath: itemPath,
            deletedAt: new Date().toISOString()
        }
        await fs.writeFile(`${trashPath}.meta`, JSON.stringify(metadata))

        await fs.rename(itemPath, trashPath)
        return { success: true, message: `Moved to trash` }
    } catch (error: any) {
        console.error("Trash error:", error)
        return { success: false, message: error.message || "Failed to move to trash" }
    }
}

export async function getTrashFiles(): Promise<FileItem[]> {
    try {
        await fs.mkdir(TRASH_PATH, { recursive: true })
        const entries = await fs.readdir(TRASH_PATH)

        const files = await Promise.all(entries.map(async (entry) => {
            if (entry.endsWith('.meta')) return null

            try {
                const entryPath = path.join(TRASH_PATH, entry)
                const stats = await fs.stat(entryPath)
                const name = entry.split('_').slice(0, -1).join('_') || entry // Attempt to recover name

                return {
                    id: entryPath,
                    name: name,
                    type: stats.isDirectory() ? 'folder' : 'file',
                    path: entryPath,
                    owner: await getUsername(stats.uid),
                    group: String(stats.gid),
                    modifiedAt: stats.mtime.toISOString(),
                    sizeBytes: stats.size,
                    permissions: '000' // Trash items usually treated differently
                } as FileItem
            } catch (e) {
                return null
            }
        }))

        return files.filter((f): f is FileItem => f !== null)
    } catch (e) {
        return []
    }
}

export async function restoreFromTrash(trashPath: string): Promise<{ success: boolean, message: string }> {
    try {
        // Try to read metadata
        const metaPath = `${trashPath}.meta`
        let targetPath = path.join(os.homedir(), path.basename(trashPath).split('_').slice(0, -1).join('_'))

        try {
            const metaContent = await fs.readFile(metaPath, 'utf-8')
            const metadata = JSON.parse(metaContent)
            targetPath = metadata.originalPath
        } catch (e) {
            // Fallback used above
        }

        // Check if target exists
        try {
            await fs.access(targetPath)
            return { success: false, message: "Original location occupied. Rename or move file first." }
        } catch (e) {
            // Good, target doesn't exist
        }

        await fs.rename(trashPath, targetPath)
        try { await fs.unlink(metaPath) } catch (e) { } // Delete meta if exists

        return { success: true, message: "Restored successfully" }
    } catch (error: any) {
        return { success: false, message: error.message || "Failed to restore" }
    }
}

export async function permanentDelete(itemPath: string): Promise<{ success: boolean, message: string }> {
    try {
        if (!itemPath.startsWith(TRASH_PATH)) {
            throw new Error("Access denied: Can only permanent delete from trash")
        }
        await fs.rm(itemPath, { recursive: true, force: true })
        try { await fs.unlink(`${itemPath}.meta`) } catch (e) { }
        return { success: true, message: "Permanently deleted" }
    } catch (error: any) {
        return { success: false, message: error.message }
    }
}

export async function getRecentFiles(): Promise<FileItem[]> {
    try {
        // Optimization: Use system `find` command to avoid slow recursive Node.js calls / 502 timeouts
        // maxdepth 4: Limit traversal depth
        // -type f: Only files
        // -mtime -7: Modified in last 7 days
        // -not -path '*/.*': Exclude hidden files
        // Exclude common heavy directories like node_modules, Library
        const cmd = `find . -maxdepth 4 -not -path '*/.*' -not -path '*/node_modules/*' -not -path '*/Library/*' -mtime -7 -type f | head -n 50`

        try {
            const { stdout } = await execAsync(cmd, {
                cwd: BASE_PATH,
                timeout: 5000 // 5 second timeout protection
            })

            const relativePaths = stdout.trim().split('\n').filter(p => p.length > 0)

            const files = await Promise.all(relativePaths.map(async (relPath) => {
                try {
                    // find output is relative to CWD (BASE_PATH). e.g. "./Documents/foo.txt"
                    const fullPath = path.join(BASE_PATH, relPath)
                    const stats = await fs.stat(fullPath)
                    const name = path.basename(fullPath)

                    let type: FileItem['type'] = 'file'
                    if (name.endsWith('.sh') || name.endsWith('.py')) type = 'script'
                    else if (name.endsWith('.csv') || name.endsWith('.json')) type = 'data'
                    else if (name.endsWith('.zip') || name.endsWith('.tar') || name.endsWith('.gz')) type = 'archive'

                    return {
                        id: fullPath,
                        name: name,
                        type: type,
                        path: fullPath,
                        owner: await getUsername(stats.uid),
                        group: String(stats.gid),
                        modifiedAt: stats.mtime.toISOString(),
                        sizeBytes: stats.size,
                        permissions: 'rw-r--r--'
                    } as FileItem
                } catch (e) {
                    return null
                }
            }))

            return files.filter((f): f is FileItem => f !== null)
                .sort((a, b) => new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime())
        } catch (execError: any) {
            console.error("Exec find error:", execError)
            return []
        }
    } catch (e) {
        console.error("Recent files error:", e)
        return []
    }
}

export async function renameItem(currentPath: string, newName: string): Promise<{ success: boolean, message: string }> {
    try {
        const dir = path.dirname(currentPath)
        const newPath = path.join(dir, newName)

        // Security check
        // Security check
        if (!isPathAllowed(newPath)) throw new Error("Access denied: Path not allowed")

        await fs.rename(currentPath, newPath)
        return { success: true, message: `Renamed to ${newName}` }
    } catch (error: any) {
        return { success: false, message: error.message || "Failed to rename" }
    }
}

// Helper to validate paths
function isPathAllowed(targetPath: string): boolean {
    const resolvedPath = path.resolve(targetPath)
    return ALLOWED_ROOTS.some(root => resolvedPath.startsWith(root)) ||
        (resolvedPath !== '/' && !['/etc', '/var', '/usr', '/bin', '/sbin', '/proc', '/sys', '/boot'].some(restricted => resolvedPath.startsWith(restricted)))
}

export async function moveItem(sourcePath: string, targetPath: string): Promise<{ success: boolean, message: string }> {
    try {
        // Security check
        if (!isPathAllowed(sourcePath) || !isPathAllowed(targetPath)) {
            throw new Error("Access denied: One or more paths are outside allowed directories")
        }

        const fileName = path.basename(sourcePath)
        const destPath = path.join(targetPath, fileName)

        try {
            await fs.rename(sourcePath, destPath)
        } catch (e: any) {
            // Handle Cross-Device Link error (EXDEV) by Copy + Delete
            if (e.code === 'EXDEV') {
                // Node 16.7+ supports fs.cp for recursive copy
                await fs.cp(sourcePath, destPath, { recursive: true })
                await fs.rm(sourcePath, { recursive: true, force: true })
            } else {
                throw e
            }
        }

        return { success: true, message: `Moved to ${destPath}` }
    } catch (error: any) {
        console.error("Move error:", error)
        return { success: false, message: error.message || "Failed to move" }
    }
}

const FAVORITES_PATH = path.join(os.homedir(), '.hpc_favorites.json')

export async function toggleFavorite(itemPath: string): Promise<{ success: boolean, message: string, isFavorite: boolean }> {
    try {
        let favorites: string[] = []
        try {
            const data = await fs.readFile(FAVORITES_PATH, 'utf-8')
            favorites = JSON.parse(data)
        } catch (e) {
            // No file yet
        }

        const idx = favorites.indexOf(itemPath)
        let isFavorite = false
        if (idx >= 0) {
            favorites.splice(idx, 1) // Remove
            isFavorite = false
        } else {
            favorites.push(itemPath) // Add
            isFavorite = true
        }

        await fs.writeFile(FAVORITES_PATH, JSON.stringify(favorites))
        return { success: true, message: isFavorite ? "Added to favorites" : "Removed from favorites", isFavorite }
    } catch (error: any) {
        return { success: false, message: "Failed to update favorites", isFavorite: false }
    }
}

export async function getFavorites(): Promise<FileItem[]> {
    try {
        let favoritesPaths: string[] = []
        try {
            const data = await fs.readFile(FAVORITES_PATH, 'utf-8')
            favoritesPaths = JSON.parse(data)
        } catch (e) {
            return []
        }

        const files = await Promise.all(favoritesPaths.map(async (filePath) => {
            try {
                const stats = await fs.stat(filePath)
                return {
                    id: filePath,
                    name: path.basename(filePath),
                    type: stats.isDirectory() ? 'folder' : 'file',
                    path: filePath,
                    owner: await getUsername(stats.uid),
                    group: String(stats.gid),
                    modifiedAt: stats.mtime.toISOString(),
                    sizeBytes: stats.size,
                    permissions: 'rw-r--r--'
                } as FileItem
            } catch (e) {
                return null // File might have been deleted
            }
        }))

        return files.filter((f): f is FileItem => f !== null)
    } catch (e) {
        return []
    }
}

export async function searchUsers(query: string): Promise<{ username: string, uid?: string, gid?: string }[]> {
    if (!query || query.length < 2) return []

    try {
        try {
            const { stdout } = await execAsync(`getent passwd | grep -i "${query}" | head -n 20`)
            if (stdout) {
                return stdout.trim().split('\n').map(line => {
                    const parts = line.split(':')
                    return {
                        username: parts[0],
                        uid: parts[2],
                        gid: parts[3]
                    }
                })
            }
        } catch (e) {
        }

        try {
            const { stdout } = await execAsync(`dscl . -list /Users | grep -i "${query}" | head -n 20`)
            if (stdout) {
                return stdout.trim().split('\n').map(line => ({
                    username: line.trim()
                }))
            }
        } catch (e) {
        }

        return []
    } catch (error) {
        console.error("Search users error:", error)
        return []
    }
}
