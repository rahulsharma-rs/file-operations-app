module.exports = [
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/app/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0020d9d54704edd74264ab2de83e04253236b91dab":"getTrashFiles","003e338349fc9faaffdb7fe8784c42cb98899ec388":"getRecentFiles","007b570a57785f01535b5d375be38cb258aa44d016":"getFavorites","00f724b4ca412bcb595c35212354467d12f2529459":"getOutgoingShares","40099588628f710f4d9e22c199e98f338eb465781b":"getSharedFiles","400bd08efdc740ce9ea47f88e1cd6d94740f49bb3a":"toggleFavorite","401016ed009895c71125b90a9a126e5e434cc70c02":"moveToTrash","4063d695a9e853e52488e4eae429ab5f3c0eb3e216":"getFiles","4082fd6d6c6f40bf76de86e0df85c7a7e0c9fa9f91":"uploadFile","4085ad2e2fe1bf148e66865890f87db6e185f5411a":"deleteItem","40983b261685df111a29469abdca7b2d96a175a6e5":"permanentDelete","40c1481f0c0aea852a62ccf66004dcd7fd9ef6f7a9":"searchUsers","40d16576a1197cb79f87d426537e25047357caad19":"getFileShares","40e2810abb4df32d98f4fe01b4a2c23c5578905f69":"restoreFromTrash","60484b10479f56499b8d2807bd2ec3adfa3701149b":"moveItem","604d4be896ae4ef055605db17161a7003806ef5633":"renameItem","609ff9fef701996ebb30337f0573aa84a15e364c28":"createFolder","60c646fe7379a2a2d65c23cd27673dff057d09f365":"shareFile","60e19c8c998f07a6ca71d9eb820622f55035e0d360":"changePermissions","60f535c6df1a1d9b470e0d25988d8759c27e1030c2":"unshareFile"},"",""] */ __turbopack_context__.s([
    "changePermissions",
    ()=>changePermissions,
    "createFolder",
    ()=>createFolder,
    "deleteItem",
    ()=>deleteItem,
    "getFavorites",
    ()=>getFavorites,
    "getFileShares",
    ()=>getFileShares,
    "getFiles",
    ()=>getFiles,
    "getOutgoingShares",
    ()=>getOutgoingShares,
    "getRecentFiles",
    ()=>getRecentFiles,
    "getSharedFiles",
    ()=>getSharedFiles,
    "getTrashFiles",
    ()=>getTrashFiles,
    "moveItem",
    ()=>moveItem,
    "moveToTrash",
    ()=>moveToTrash,
    "permanentDelete",
    ()=>permanentDelete,
    "renameItem",
    ()=>renameItem,
    "restoreFromTrash",
    ()=>restoreFromTrash,
    "searchUsers",
    ()=>searchUsers,
    "shareFile",
    ()=>shareFile,
    "toggleFavorite",
    ()=>toggleFavorite,
    "unshareFile",
    ()=>unshareFile,
    "uploadFile",
    ()=>uploadFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/os [external] (os, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/child_process [external] (child_process, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const BASE_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].homedir();
async function getFiles(currentPathSegments) {
    try {
        const relativePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(...currentPathSegments);
        const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(BASE_PATH, relativePath);
        // Security check: Ensure we don't escape home directory (basic check)
        if (!fullPath.startsWith(BASE_PATH)) {
            throw new Error("Access denied: Cannot traverse above home directory");
        }
        const entries = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readdir(fullPath, {
            withFileTypes: true
        });
        const files = await Promise.all(entries.map(async (entry)=>{
            try {
                const entryPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(fullPath, entry.name);
                const stats = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].stat(entryPath);
                let type = 'file';
                if (entry.isDirectory()) type = 'folder';
                else if (entry.name.endsWith('.sh') || entry.name.endsWith('.py')) type = 'script';
                else if (entry.name.endsWith('.csv') || entry.name.endsWith('.json')) type = 'data';
                else if (entry.name.endsWith('.zip') || entry.name.endsWith('.tar') || entry.name.endsWith('.gz')) type = 'archive';
                // Permission string simulation (Node fs doesn't give "rwx" string directly easily across platforms, 
                // but we can approximate from mode)
                const perms = (stats.mode & parseInt('777', 8)).toString(8) // simple octal
                ;
                return {
                    id: entryPath,
                    name: entry.name,
                    type: type,
                    path: entryPath,
                    owner: await getUsername(stats.uid),
                    group: String(stats.gid),
                    modifiedAt: stats.mtime.toISOString(),
                    sizeBytes: stats.size,
                    permissions: `0${perms}` // Mocking the rwx string is complex, showing octal for now
                };
            } catch (e) {
                return null;
            }
        }));
        return files.filter((f)=>f !== null);
    } catch (error) {
        console.error("Error reading directory:", error);
        return [];
    }
}
;
;
const execAsync = __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["default"].promisify(__TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__["exec"]);
const usernameCache = new Map();
async function getUsername(uid) {
    if (usernameCache.has(uid)) return usernameCache.get(uid);
    try {
        const { stdout } = await execAsync(`id -nu ${uid}`);
        const name = stdout.trim();
        usernameCache.set(uid, name);
        return name;
    } catch (e) {
        return String(uid);
    }
}
async function userExists(username) {
    try {
        await execAsync(`id -u ${username}`);
        return true;
    } catch (error) {
        return false;
    }
}
async function shareFile(sourcePath, targetUsername) {
    // Validate target user exists
    if (!await userExists(targetUsername)) {
        return {
            success: false,
            message: `User '${targetUsername}' does not exist on this system.`
        };
    }
    try {
        const sharedRoot = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(__TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].homedir(), 'hpc_shared');
        const targetUserDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(sharedRoot, targetUsername);
        // Ensure shared directories exist
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(targetUserDir, {
            recursive: true
        });
        const sourceName = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(sourcePath);
        const destPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(targetUserDir, sourceName);
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].symlink(sourcePath, destPath);
            return {
                success: true,
                message: `Successfully shared with ${targetUsername}`
            };
        } catch (e) {
            if (e.code === 'EEXIST') {
                return {
                    success: false,
                    message: `Already shared with ${targetUsername}`
                };
            }
            throw e;
        }
    } catch (error) {
        console.error("Error sharing file:", error);
        return {
            success: false,
            message: error.message || "Failed to share file"
        };
    }
}
async function getFileShares(filePath) {
    try {
        const sharedRoot = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(__TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].homedir(), 'hpc_shared');
        // Scan all user directories in shared root
        try {
            const userDirs = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readdir(sharedRoot, {
                withFileTypes: true
            });
            const shares = [];
            for (const userDir of userDirs){
                if (!userDir.isDirectory()) continue;
                const userPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(sharedRoot, userDir.name);
                try {
                    const links = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readdir(userPath);
                    for (const link of links){
                        const linkPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(userPath, link);
                        try {
                            const target = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readlink(linkPath);
                            if (target === filePath) {
                                shares.push(userDir.name);
                            }
                        } catch (e) {
                        // Not a symlink or other error, ignore
                        }
                    }
                } catch (e) {
                // Cannot read user dir, ignore
                }
            }
            return shares;
        } catch (e) {
            // Shared root likely doesn't exist yet
            return [];
        }
    } catch (error) {
        console.error("Error getting shares:", error);
        return [];
    }
}
async function getSharedFiles(currentPathSegments) {
    try {
        const currentUser = __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].userInfo().username;
        const sharedRoot = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(__TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].homedir(), 'hpc_shared', currentUser);
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(sharedRoot, {
            recursive: true
        });
        const relativePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(...currentPathSegments);
        const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(sharedRoot, relativePath);
        // Security check
        if (!fullPath.startsWith(sharedRoot)) {
            throw new Error("Access denied: Cannot traverse above shared root");
        }
        const entries = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readdir(fullPath, {
            withFileTypes: true
        });
        const files = await Promise.all(entries.map(async (entry)=>{
            try {
                const entryPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(fullPath, entry.name);
                const stats = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].stat(entryPath);
                let type = 'file';
                if (entry.isDirectory()) type = 'folder';
                // For shared files, we might want to know who shared it (the link owner usually)
                // but lstat on the link itself in the parent dir might be needed if we want link info.
                // For now, presenting the target file info is fine.
                // Determine type extension logic same as getFiles
                if (!entry.isDirectory()) {
                    if (entry.name.endsWith('.sh') || entry.name.endsWith('.py')) type = 'script';
                    else if (entry.name.endsWith('.csv') || entry.name.endsWith('.json')) type = 'data';
                    else if (entry.name.endsWith('.zip') || entry.name.endsWith('.tar') || entry.name.endsWith('.gz')) type = 'archive';
                }
                const perms = (stats.mode & parseInt('777', 8)).toString(8);
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
                };
            } catch (e) {
                return null;
            }
        }));
        return files.filter((f)=>f !== null);
    } catch (error) {
        console.error("Error getting shared files:", error);
        return [];
    }
}
async function getOutgoingShares() {
    try {
        const sharedRoot = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(__TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].homedir(), 'hpc_shared');
        const myHome = __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].homedir();
        // Map of sourcePath -> { sharedWith: [] }
        const shareMap = new Map();
        try {
            const userDirs = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readdir(sharedRoot, {
                withFileTypes: true
            });
            for (const userDir of userDirs){
                if (!userDir.isDirectory()) continue;
                const userPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(sharedRoot, userDir.name);
                try {
                    const links = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readdir(userPath);
                    for (const link of links){
                        const linkPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(userPath, link);
                        try {
                            const target = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readlink(linkPath);
                            // Check if target is inside my home directory (or belongs to me)
                            // Ideally check if I own the target file
                            if (target.startsWith(myHome)) {
                                if (!shareMap.has(target)) {
                                    shareMap.set(target, []);
                                }
                                shareMap.get(target)?.push({
                                    username: userDir.name,
                                    linkPath
                                });
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
            const results = [];
            for (const [filePath, shares] of shareMap.entries()){
                try {
                    const stats = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].stat(filePath);
                    const name = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(filePath);
                    let type = 'file';
                    if (stats.isDirectory()) type = 'folder';
                    else if (name.endsWith('.sh') || name.endsWith('.py')) type = 'script';
                    else if (name.endsWith('.csv') || name.endsWith('.json')) type = 'data';
                    else if (name.endsWith('.zip') || name.endsWith('.tar') || name.endsWith('.gz')) type = 'archive';
                    const perms = (stats.mode & parseInt('777', 8)).toString(8);
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
                        sharedWith: shares.map((s)=>({
                                username: s.username,
                                permissions: 'read-only'
                            }))
                    });
                } catch (e) {
                // File might have been deleted but link exists
                }
            }
            return results;
        } catch (e) {
            return [];
        }
    } catch (error) {
        console.error("Error getting outgoing shares:", error);
        return [];
    }
}
async function unshareFile(targetUsername, fileName) {
    try {
        const sharedLinkPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(__TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].homedir(), 'hpc_shared', targetUsername, fileName);
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].unlink(sharedLinkPath);
        return {
            success: true,
            message: `Unshared ${fileName} with ${targetUsername}`
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || "Failed to unshare"
        };
    }
}
async function changePermissions(filePath, mode) {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].chmod(filePath, mode);
        return {
            success: true,
            message: `Updated permissions for ${__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(filePath)}`
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || "Failed to change permissions"
        };
    }
}
async function uploadFile(formData) {
    try {
        const file = formData.get('file');
        const currentPathSegments = JSON.parse(formData.get('pathSegments'));
        if (!file) {
            throw new Error("No file provided");
        }
        const buffer = Buffer.from(await file.arrayBuffer());
        const relativePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(...currentPathSegments);
        const targetDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(BASE_PATH, relativePath);
        if (!targetDir.startsWith(BASE_PATH)) {
            throw new Error("Access denied");
        }
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(targetDir, file.name), buffer);
        return {
            success: true,
            message: `Uploaded ${file.name}`
        };
    } catch (error) {
        console.error("Upload error:", error);
        return {
            success: false,
            message: error.message || "Upload failed"
        };
    }
}
async function createFolder(pathSegments, folderName) {
    try {
        const relativePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(...pathSegments);
        const targetDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(BASE_PATH, relativePath, folderName);
        if (!targetDir.startsWith(BASE_PATH)) {
            throw new Error("Access denied");
        }
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(targetDir);
        return {
            success: true,
            message: `Created folder ${folderName}`
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || "Failed to create folder"
        };
    }
}
async function deleteItem(itemPath) {
    return moveToTrash(itemPath) // Default to trash
    ;
}
const TRASH_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(__TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].homedir(), '.hpc_trash');
async function moveToTrash(itemPath) {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(TRASH_PATH, {
            recursive: true
        });
        const timestamp = Date.now();
        const trashName = `${__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(itemPath)}_${timestamp}`;
        const trashPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(TRASH_PATH, trashName);
        // Store metadata for restoration
        const metadata = {
            originalPath: itemPath,
            deletedAt: new Date().toISOString()
        };
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(`${trashPath}.meta`, JSON.stringify(metadata));
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].rename(itemPath, trashPath);
        return {
            success: true,
            message: `Moved to trash`
        };
    } catch (error) {
        console.error("Trash error:", error);
        return {
            success: false,
            message: error.message || "Failed to move to trash"
        };
    }
}
async function getTrashFiles() {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(TRASH_PATH, {
            recursive: true
        });
        const entries = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readdir(TRASH_PATH);
        const files = await Promise.all(entries.map(async (entry)=>{
            if (entry.endsWith('.meta')) return null;
            try {
                const entryPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(TRASH_PATH, entry);
                const stats = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].stat(entryPath);
                const name = entry.split('_').slice(0, -1).join('_') || entry // Attempt to recover name
                ;
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
                };
            } catch (e) {
                return null;
            }
        }));
        return files.filter((f)=>f !== null);
    } catch (e) {
        return [];
    }
}
async function restoreFromTrash(trashPath) {
    try {
        // Try to read metadata
        const metaPath = `${trashPath}.meta`;
        let targetPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(__TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].homedir(), __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(trashPath).split('_').slice(0, -1).join('_'));
        try {
            const metaContent = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(metaPath, 'utf-8');
            const metadata = JSON.parse(metaContent);
            targetPath = metadata.originalPath;
        } catch (e) {
        // Fallback used above
        }
        // Check if target exists
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].access(targetPath);
            return {
                success: false,
                message: "Original location occupied. Rename or move file first."
            };
        } catch (e) {
        // Good, target doesn't exist
        }
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].rename(trashPath, targetPath);
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].unlink(metaPath);
        } catch (e) {} // Delete meta if exists
        return {
            success: true,
            message: "Restored successfully"
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || "Failed to restore"
        };
    }
}
async function permanentDelete(itemPath) {
    try {
        if (!itemPath.startsWith(TRASH_PATH)) {
            throw new Error("Access denied: Can only permanent delete from trash");
        }
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].rm(itemPath, {
            recursive: true,
            force: true
        });
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].unlink(`${itemPath}.meta`);
        } catch (e) {}
        return {
            success: true,
            message: "Permanently deleted"
        };
    } catch (error) {
        return {
            success: false,
            message: error.message
        };
    }
}
async function getRecentFiles() {
    try {
        const recentFiles = [];
        const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
        async function walk(dir, depth) {
            if (depth > 4) return; // Limit depth
            try {
                const entries = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readdir(dir);
                for (const entry of entries){
                    if (entry.startsWith('.') || entry === 'node_modules' || entry === 'Library') continue;
                    const entryPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dir, entry);
                    try {
                        const stats = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].stat(entryPath);
                        if (stats.isDirectory()) {
                            await walk(entryPath, depth + 1);
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
                                });
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
        await walk(BASE_PATH, 0);
        return recentFiles.sort((a, b)=>new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime()).slice(0, 50);
    } catch (e) {
        console.error("Recent files error:", e);
        return [];
    }
}
async function renameItem(currentPath, newName) {
    try {
        const dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(currentPath);
        const newPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dir, newName);
        // Security check
        if (!newPath.startsWith(BASE_PATH)) throw new Error("Access denied");
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].rename(currentPath, newPath);
        return {
            success: true,
            message: `Renamed to ${newName}`
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || "Failed to rename"
        };
    }
}
async function moveItem(sourcePath, targetPath) {
    try {
        // Security check
        if (!sourcePath.startsWith(BASE_PATH) || !targetPath.startsWith(BASE_PATH)) {
            throw new Error("Access denied");
        }
        const fileName = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(sourcePath);
        // If targetPath is a directory, append filename. If it doesn't exist or is file, assume full path.
        // For simplicity in this app, let's assume targetPath is the destination FOLDER.
        const destPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(targetPath, fileName);
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].rename(sourcePath, destPath);
        return {
            success: true,
            message: `Moved to ${targetPath}`
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || "Failed to move"
        };
    }
}
const FAVORITES_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(__TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].homedir(), '.hpc_favorites.json');
async function toggleFavorite(itemPath) {
    try {
        let favorites = [];
        try {
            const data = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(FAVORITES_PATH, 'utf-8');
            favorites = JSON.parse(data);
        } catch (e) {
        // No file yet
        }
        const idx = favorites.indexOf(itemPath);
        let isFavorite = false;
        if (idx >= 0) {
            favorites.splice(idx, 1); // Remove
            isFavorite = false;
        } else {
            favorites.push(itemPath); // Add
            isFavorite = true;
        }
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(FAVORITES_PATH, JSON.stringify(favorites));
        return {
            success: true,
            message: isFavorite ? "Added to favorites" : "Removed from favorites",
            isFavorite
        };
    } catch (error) {
        return {
            success: false,
            message: "Failed to update favorites",
            isFavorite: false
        };
    }
}
async function getFavorites() {
    try {
        let favoritesPaths = [];
        try {
            const data = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(FAVORITES_PATH, 'utf-8');
            favoritesPaths = JSON.parse(data);
        } catch (e) {
            return [];
        }
        const files = await Promise.all(favoritesPaths.map(async (filePath)=>{
            try {
                const stats = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].stat(filePath);
                return {
                    id: filePath,
                    name: __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(filePath),
                    type: stats.isDirectory() ? 'folder' : 'file',
                    path: filePath,
                    owner: await getUsername(stats.uid),
                    group: String(stats.gid),
                    modifiedAt: stats.mtime.toISOString(),
                    sizeBytes: stats.size,
                    permissions: 'rw-r--r--'
                };
            } catch (e) {
                return null // File might have been deleted
                ;
            }
        }));
        return files.filter((f)=>f !== null);
    } catch (e) {
        return [];
    }
}
async function searchUsers(query) {
    if (!query || query.length < 2) return [];
    try {
        try {
            const { stdout } = await execAsync(`getent passwd | grep -i "${query}" | head -n 20`);
            if (stdout) {
                return stdout.trim().split('\n').map((line)=>{
                    const parts = line.split(':');
                    return {
                        username: parts[0],
                        uid: parts[2],
                        gid: parts[3]
                    };
                });
            }
        } catch (e) {}
        try {
            const { stdout } = await execAsync(`dscl . -list /Users | grep -i "${query}" | head -n 20`);
            if (stdout) {
                return stdout.trim().split('\n').map((line)=>({
                        username: line.trim()
                    }));
            }
        } catch (e) {}
        return [];
    } catch (error) {
        console.error("Search users error:", error);
        return [];
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getFiles,
    shareFile,
    getFileShares,
    getSharedFiles,
    getOutgoingShares,
    unshareFile,
    changePermissions,
    uploadFile,
    createFolder,
    deleteItem,
    moveToTrash,
    getTrashFiles,
    restoreFromTrash,
    permanentDelete,
    getRecentFiles,
    renameItem,
    moveItem,
    toggleFavorite,
    getFavorites,
    searchUsers
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFiles, "4063d695a9e853e52488e4eae429ab5f3c0eb3e216", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(shareFile, "60c646fe7379a2a2d65c23cd27673dff057d09f365", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFileShares, "40d16576a1197cb79f87d426537e25047357caad19", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSharedFiles, "40099588628f710f4d9e22c199e98f338eb465781b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOutgoingShares, "00f724b4ca412bcb595c35212354467d12f2529459", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(unshareFile, "60f535c6df1a1d9b470e0d25988d8759c27e1030c2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(changePermissions, "60e19c8c998f07a6ca71d9eb820622f55035e0d360", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(uploadFile, "4082fd6d6c6f40bf76de86e0df85c7a7e0c9fa9f91", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createFolder, "609ff9fef701996ebb30337f0573aa84a15e364c28", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteItem, "4085ad2e2fe1bf148e66865890f87db6e185f5411a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(moveToTrash, "401016ed009895c71125b90a9a126e5e434cc70c02", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTrashFiles, "0020d9d54704edd74264ab2de83e04253236b91dab", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(restoreFromTrash, "40e2810abb4df32d98f4fe01b4a2c23c5578905f69", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(permanentDelete, "40983b261685df111a29469abdca7b2d96a175a6e5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRecentFiles, "003e338349fc9faaffdb7fe8784c42cb98899ec388", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(renameItem, "604d4be896ae4ef055605db17161a7003806ef5633", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(moveItem, "60484b10479f56499b8d2807bd2ec3adfa3701149b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleFavorite, "400bd08efdc740ce9ea47f88e1cd6d94740f49bb3a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFavorites, "007b570a57785f01535b5d375be38cb258aa44d016", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(searchUsers, "40c1481f0c0aea852a62ccf66004dcd7fd9ef6f7a9", null);
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0020d9d54704edd74264ab2de83e04253236b91dab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTrashFiles"],
    "003e338349fc9faaffdb7fe8784c42cb98899ec388",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRecentFiles"],
    "007b570a57785f01535b5d375be38cb258aa44d016",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFavorites"],
    "00f724b4ca412bcb595c35212354467d12f2529459",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOutgoingShares"],
    "40099588628f710f4d9e22c199e98f338eb465781b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSharedFiles"],
    "400bd08efdc740ce9ea47f88e1cd6d94740f49bb3a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toggleFavorite"],
    "4063d695a9e853e52488e4eae429ab5f3c0eb3e216",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFiles"],
    "4082fd6d6c6f40bf76de86e0df85c7a7e0c9fa9f91",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadFile"],
    "4085ad2e2fe1bf148e66865890f87db6e185f5411a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteItem"],
    "40983b261685df111a29469abdca7b2d96a175a6e5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["permanentDelete"],
    "40c1481f0c0aea852a62ccf66004dcd7fd9ef6f7a9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["searchUsers"],
    "40d16576a1197cb79f87d426537e25047357caad19",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFileShares"],
    "40e2810abb4df32d98f4fe01b4a2c23c5578905f69",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["restoreFromTrash"],
    "60484b10479f56499b8d2807bd2ec3adfa3701149b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["moveItem"],
    "604d4be896ae4ef055605db17161a7003806ef5633",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renameItem"],
    "609ff9fef701996ebb30337f0573aa84a15e364c28",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createFolder"],
    "60c646fe7379a2a2d65c23cd27673dff057d09f365",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shareFile"],
    "60e19c8c998f07a6ca71d9eb820622f55035e0d360",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["changePermissions"],
    "60f535c6df1a1d9b470e0d25988d8759c27e1030c2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unshareFile"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__066dbcc0._.js.map