'use server'

import fs from 'fs/promises'
import path from 'path'
import os from 'os'
import { FileItem, SharedFileItem } from '@/app/types'

const BASE_PATH = os.homedir()

export async function getFiles(currentPathSegments: string[]): Promise<FileItem[]> {
    try {
        const relativePath = path.join(...currentPathSegments)
        const fullPath = path.join(BASE_PATH, relativePath)

        // Security check: Ensure we don't escape home directory (basic check)
        if (!fullPath.startsWith(BASE_PATH)) {
            throw new Error("Access denied: Cannot traverse above home directory")
        }

        const entries = await fs.readdir(fullPath, { withFileTypes: true })

        const files = await Promise.all(entries.map(async (entry) => {
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

export async function shareFile(sourcePath: string, targetUsername: string): Promise<{ success: boolean, message: string }> {
    // Validate target user exists
    if (!await userExists(targetUsername)) {
        return { success: false, message: `User '${targetUsername}' does not exist on this system.` }
    }

    try {
        const sharedRoot = path.join(os.homedir(), 'hpc_shared')
        const targetUserDir = path.join(sharedRoot, targetUsername)

        // Ensure shared directories exist
        await fs.mkdir(targetUserDir, { recursive: true })

        const sourceName = path.basename(sourcePath)
        const destPath = path.join(targetUserDir, sourceName)

        try {
            await fs.symlink(sourcePath, destPath)
            return { success: true, message: `Successfully shared with ${targetUsername}` }
        } catch (e: any) {
            if (e.code === 'EEXIST') {
                return { success: false, message: `Already shared with ${targetUsername}` }
            }
            throw e
        }
    } catch (error: any) {
        console.error("Error sharing file:", error)
        return { success: false, message: error.message || "Failed to share file" }
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

        const files = await Promise.all(entries.map(async (entry) => {
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

        if (!targetDir.startsWith(BASE_PATH)) {
            throw new Error("Access denied")
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

        if (!targetDir.startsWith(BASE_PATH)) {
            throw new Error("Access denied")
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
        const recentFiles: FileItem[] = []
        const oneWeekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000)

        async function walk(dir: string, depth: number) {
            if (depth > 4) return // Limit depth

            try {
                const entries = await fs.readdir(dir)
                for (const entry of entries) {
                    if (entry.startsWith('.') || entry === 'node_modules' || entry === 'Library') continue

                    const entryPath = path.join(dir, entry)
                    try {
                        const stats = await fs.stat(entryPath)

                        if (stats.isDirectory()) {
                            await walk(entryPath, depth + 1)
                        } else {
                            if (stats.mtimeMs > oneWeekAgo) {
                                recentFiles.push({
                                    id: entryPath,
                                    name: entry,
                                    type: 'file',
                                    path: entryPath,
                                    owner: await getUsername(stats.uid),
                                    group: String(stats.gid),
                                    modifiedAt: stats.mtime.toISOString(),
                                    sizeBytes: stats.size,
                                    permissions: 'rw-r--r--'
                                })
                            }
                        }
                    } catch (e) {
                        // Ignore specific file access errors
                    }
                }
            } catch (e) {
                // Ignore directory access errors
            }
        }

        await walk(BASE_PATH, 0)

        return recentFiles
            .sort((a, b) => new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime())
            .slice(0, 50)
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
        if (!newPath.startsWith(BASE_PATH)) throw new Error("Access denied")

        await fs.rename(currentPath, newPath)
        return { success: true, message: `Renamed to ${newName}` }
    } catch (error: any) {
        return { success: false, message: error.message || "Failed to rename" }
    }
}

export async function moveItem(sourcePath: string, targetPath: string): Promise<{ success: boolean, message: string }> {
    try {
        // Security check
        if (!sourcePath.startsWith(BASE_PATH) || !targetPath.startsWith(BASE_PATH)) {
            throw new Error("Access denied")
        }

        const fileName = path.basename(sourcePath)
        // If targetPath is a directory, append filename. If it doesn't exist or is file, assume full path.
        // For simplicity in this app, let's assume targetPath is the destination FOLDER.
        const destPath = path.join(targetPath, fileName)

        await fs.rename(sourcePath, destPath)
        return { success: true, message: `Moved to ${targetPath}` }
    } catch (error: any) {
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
