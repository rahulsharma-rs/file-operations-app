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

/* __next_internal_action_entry_do_not_use__ [{"0020d9d54704edd74264ab2de83e04253236b91dab":"getTrashFiles","003e338349fc9faaffdb7fe8784c42cb98899ec388":"getRecentFiles","007b570a57785f01535b5d375be38cb258aa44d016":"getFavorites","00c89052df53b78dcb1d808ba92feca4271fe45d8e":"getDataPath","00f724b4ca412bcb595c35212354467d12f2529459":"getOutgoingShares","40099588628f710f4d9e22c199e98f338eb465781b":"getSharedFiles","400bd08efdc740ce9ea47f88e1cd6d94740f49bb3a":"toggleFavorite","401016ed009895c71125b90a9a126e5e434cc70c02":"moveToTrash","405b43a83ec49cfc8833ff9ccc7168ddaf28b37aee":"getFileAcls","4063674ce88a1bf79c623dec06a38c03dffdff242f":"getRelativePath","4063d695a9e853e52488e4eae429ab5f3c0eb3e216":"getFiles","4082fd6d6c6f40bf76de86e0df85c7a7e0c9fa9f91":"uploadFile","4085ad2e2fe1bf148e66865890f87db6e185f5411a":"deleteItem","40983b261685df111a29469abdca7b2d96a175a6e5":"permanentDelete","40c1481f0c0aea852a62ccf66004dcd7fd9ef6f7a9":"searchUsers","40d16576a1197cb79f87d426537e25047357caad19":"getFileShares","40e2810abb4df32d98f4fe01b4a2c23c5578905f69":"restoreFromTrash","6047e3679e96dac23760dad3649b0526b947378009":"removeFileAccess","60484b10479f56499b8d2807bd2ec3adfa3701149b":"moveItem","604d4be896ae4ef055605db17161a7003806ef5633":"renameItem","609ff9fef701996ebb30337f0573aa84a15e364c28":"createFolder","60e19c8c998f07a6ca71d9eb820622f55035e0d360":"changePermissions","60f535c6df1a1d9b470e0d25988d8759c27e1030c2":"unshareFile","70c646fe7379a2a2d65c23cd27673dff057d09f365":"shareFile"},"",""] */ __turbopack_context__.s([
    "changePermissions",
    ()=>changePermissions,
    "createFolder",
    ()=>createFolder,
    "deleteItem",
    ()=>deleteItem,
    "getDataPath",
    ()=>getDataPath,
    "getFavorites",
    ()=>getFavorites,
    "getFileAcls",
    ()=>getFileAcls,
    "getFileShares",
    ()=>getFileShares,
    "getFiles",
    ()=>getFiles,
    "getOutgoingShares",
    ()=>getOutgoingShares,
    "getRecentFiles",
    ()=>getRecentFiles,
    "getRelativePath",
    ()=>getRelativePath,
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
    "removeFileAccess",
    ()=>removeFileAccess,
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
const ALLOWED_ROOTS = [
    __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].homedir(),
    '/data',
    '/scratch',
    '/gpfs',
    '/fs1',
    '/project',
    '/work',
    '/lstr'
];
async function getFiles(currentPathSegments) {
    try {
        // Construct path from segments. 
        // We resolve (...) segments relative to BASE_PATH (Home).
        // If segments are ['..', '..', 'data'], it resolves to /data
        const relativePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(...currentPathSegments);
        const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(BASE_PATH, relativePath);
        const resolvedPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(fullPath);
        // Security Check: 
        // Allow if it is within Home OR starts with any of the allowed HPC roots.
        // We strictly block sensitive system roots to prevent accidentally enumerating /proc or /etc
        const isAllowed = ALLOWED_ROOTS.some((root)=>resolvedPath.startsWith(root)) || resolvedPath !== '/' && ![
            '/etc',
            '/var',
            '/usr',
            '/bin',
            '/sbin',
            '/proc',
            '/sys',
            '/boot'
        ].some((restricted)=>resolvedPath.startsWith(restricted));
        if (!isAllowed) {
            // Check for explicit allowed roots failed, and it hit a restricted block list or is root.
            // Actually, the logic above is: OR (NOT restricted). 
            // So if it's /data (not restricted), it passes.
            // If it's /etc (restricted), it fails unless it was in ALLOWED_ROOTS (unlikely).
            // Double check safety:
            if (resolvedPath === '/' || resolvedPath.startsWith('/etc') || resolvedPath.startsWith('/proc')) {
                throw new Error("Access denied: Restricted system directory");
            }
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
async function getRelativePath(targetPath) {
    const rel = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].relative(BASE_PATH, targetPath);
    if (rel === '') return [];
    return rel.split(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].sep);
}
async function getDataPath() {
    const username = __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].userInfo().username;
    const dataPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join('/data/user', username);
    // Ensure this path exists, if not maybe fallback to /data?
    // user said "path on my HPC is /data/user/$USER", so we assume it exists
    // Calculate relative path from Home (BASE_PATH)
    const rel = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].relative(BASE_PATH, dataPath);
    if (rel === '') return [];
    return rel.split(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].sep);
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
async function shareFile(sourcePath, targetUsername, permission = 'read') {
    // Validate target user exists
    if (!await userExists(targetUsername)) {
        return {
            success: false,
            message: `User '${targetUsername}' does not exist on this system.`
        };
    }
    try {
        // --- ACL IMPLEMENTATION ---
        // Grant Read/Execute permissions to the target user on the source file/folder
        // using 'setfacl'. This allows the target user to access the file directly via its full path.
        // We do NOT create symlinks or 'hpc_shared' directories as per user request.
        // Determine permissions string
        // read: rx (needs x for directories to list contents)
        // write: rwx (needs w to create/delete)
        const aclPerms = permission === 'write' ? 'rwx' : 'rx';
        // Determine if directory for recursive flag
        const stats = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].stat(sourcePath);
        const recursiveFlag = stats.isDirectory() ? '-R' : '';
        // ...
        try {
            // 1. Apply ACL to the target file/folder
            // Command: setfacl -R -m u:targetUser:rwx /path/to/source
            await execAsync(`setfacl ${recursiveFlag} -m u:${targetUsername}:${aclPerms} "${sourcePath}"`);
            // 2. Ensure Traversal Access (+x) on parent directories
            // If the shared file is deep inside /data/user/alice/foo/bar,
            // bob needs +x on /data/user/alice, /data/user/alice/foo to reach it.
            // We ONLY do this for directories OWNED by the current user (e.g. inside Home or /data/user/$USER).
            const currentUser = __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].userInfo().username;
            const userRoots = [
                __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].homedir(),
                __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join('/data/user', currentUser),
                __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join('/scratch', currentUser)
            ];
            let currentDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(sourcePath);
            // Walk up until we hit a system root or run out of path
            while(currentDir !== '/' && currentDir !== '.'){
                // Check if we are inside a user root
                const isInsideUserRoot = userRoots.some((root)=>currentDir.startsWith(root));
                if (!isInsideUserRoot) break; // Stop if we go above user's space (e.g. /data/user)
                try {
                    // Grant execute (x) ONLY. This allows traversal but not listing (r) or writing (w).
                    // This is minimal privilege to reach the shared content.
                    await execAsync(`setfacl -m u:${targetUsername}:x "${currentDir}"`);
                } catch (e) {
                    console.warn(`Failed to set traversal ACL on ${currentDir}:`, e);
                // Continue anyway, maybe it already works or we aren't owner (though we checked root)
                }
                currentDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(currentDir);
            }
            return {
                success: true,
                message: `Access granted to ${targetUsername} (${permission}). Traversal permissions updated.`
            };
        } catch (aclError) {
            console.error("ACL Error:", aclError);
            // If setfacl fails (e.g. local mac), we return error since this is the ONLY mechanism now.
            if (("TURBOPACK compile-time value", "development") === 'development' && __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].platform() === 'darwin') {
                return {
                    success: true,
                    message: `[DEV] Simulating ACL grant (${aclPerms}) to ${targetUsername} for ${sourcePath}`
                };
            }
            //TURBOPACK unreachable
            ;
        }
    } catch (error) {
        console.error("Error sharing file:", error);
        return {
            success: false,
            message: error.message || "Failed to share file"
        };
    }
}
async function getFileAcls(filePath) {
    try {
        if (!isPathAllowed(filePath)) throw new Error("Access denied");
        const { stdout } = await execAsync(`getfacl -p "${filePath}"`);
        const lines = stdout.split('\n');
        const acls = [];
        for (const line of lines){
            // Regex to find "user:username:rwx" entries. 
            // Note: "user::rwx" is owner, "user:bob:rwx" is named user.
            const match = line.match(/^user:([^:]+):([rwx-]+)/);
            if (match) {
                const username = match[1];
                const permsStr = match[2];
                // Filter out empty username if regex matches user:: (which it shouldnt due to + but safer to check)
                if (username) {
                    const permissions = permsStr.includes('w') ? 'write' : 'read';
                    acls.push({
                        username,
                        permissions
                    });
                }
            }
        }
        // Mock for mac dev
        if (acls.length === 0 && ("TURBOPACK compile-time value", "development") === 'development' && __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].platform() === 'darwin') {
            return [
                {
                    username: 'esaghapo',
                    permissions: 'read'
                },
                {
                    username: 'mcwyatt',
                    permissions: 'write'
                }
            ];
        }
        return acls;
    } catch (e) {
        console.error("getfacl error:", e);
        return [];
    }
}
async function removeFileAccess(filePath, username) {
    try {
        if (!isPathAllowed(filePath)) throw new Error("Access denied");
        await execAsync(`setfacl -x u:${username} "${filePath}"`);
        return {
            success: true,
            message: `Removed access for ${username}`
        };
    } catch (e) {
        if (("TURBOPACK compile-time value", "development") === 'development' && __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].platform() === 'darwin') {
            return {
                success: true,
                message: `[DEV] Removed ACL for ${username}`
            };
        }
        //TURBOPACK unreachable
        ;
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
        // Optimization: Use system `find` command to avoid slow recursive Node.js calls / 502 timeouts
        // maxdepth 4: Limit traversal depth
        // -type f: Only files
        // -mtime -7: Modified in last 7 days
        // -not -path '*/.*': Exclude hidden files
        // Exclude common heavy directories like node_modules, Library
        const cmd = `find . -maxdepth 4 -not -path '*/.*' -not -path '*/node_modules/*' -not -path '*/Library/*' -mtime -7 -type f | head -n 50`;
        try {
            const { stdout } = await execAsync(cmd, {
                cwd: BASE_PATH,
                timeout: 5000 // 5 second timeout protection
            });
            const relativePaths = stdout.trim().split('\n').filter((p)=>p.length > 0);
            const files = await Promise.all(relativePaths.map(async (relPath)=>{
                try {
                    // find output is relative to CWD (BASE_PATH). e.g. "./Documents/foo.txt"
                    const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(BASE_PATH, relPath);
                    const stats = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].stat(fullPath);
                    const name = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(fullPath);
                    let type = 'file';
                    if (name.endsWith('.sh') || name.endsWith('.py')) type = 'script';
                    else if (name.endsWith('.csv') || name.endsWith('.json')) type = 'data';
                    else if (name.endsWith('.zip') || name.endsWith('.tar') || name.endsWith('.gz')) type = 'archive';
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
                    };
                } catch (e) {
                    return null;
                }
            }));
            return files.filter((f)=>f !== null).sort((a, b)=>new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime());
        } catch (execError) {
            console.error("Exec find error:", execError);
            return [];
        }
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
// Helper to validate paths
function isPathAllowed(targetPath) {
    const resolvedPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(targetPath);
    return ALLOWED_ROOTS.some((root)=>resolvedPath.startsWith(root)) || resolvedPath !== '/' && ![
        '/etc',
        '/var',
        '/usr',
        '/bin',
        '/sbin',
        '/proc',
        '/sys',
        '/boot'
    ].some((restricted)=>resolvedPath.startsWith(restricted));
}
async function moveItem(sourcePath, targetPath) {
    try {
        // Security check
        if (!isPathAllowed(sourcePath) || !isPathAllowed(targetPath)) {
            throw new Error("Access denied: One or more paths are outside allowed directories");
        }
        const fileName = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(sourcePath);
        const destPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(targetPath, fileName);
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].rename(sourcePath, destPath);
        } catch (e) {
            // Handle Cross-Device Link error (EXDEV) by Copy + Delete
            if (e.code === 'EXDEV') {
                // Node 16.7+ supports fs.cp for recursive copy
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].cp(sourcePath, destPath, {
                    recursive: true
                });
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].rm(sourcePath, {
                    recursive: true,
                    force: true
                });
            } else {
                throw e;
            }
        }
        return {
            success: true,
            message: `Moved to ${destPath}`
        };
    } catch (error) {
        console.error("Move error:", error);
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
    getRelativePath,
    getDataPath,
    shareFile,
    getFileAcls,
    removeFileAccess,
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRelativePath, "4063674ce88a1bf79c623dec06a38c03dffdff242f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDataPath, "00c89052df53b78dcb1d808ba92feca4271fe45d8e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(shareFile, "70c646fe7379a2a2d65c23cd27673dff057d09f365", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFileAcls, "405b43a83ec49cfc8833ff9ccc7168ddaf28b37aee", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(removeFileAccess, "6047e3679e96dac23760dad3649b0526b947378009", null);
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
    "00c89052df53b78dcb1d808ba92feca4271fe45d8e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDataPath"],
    "00f724b4ca412bcb595c35212354467d12f2529459",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOutgoingShares"],
    "40099588628f710f4d9e22c199e98f338eb465781b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSharedFiles"],
    "400bd08efdc740ce9ea47f88e1cd6d94740f49bb3a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toggleFavorite"],
    "405b43a83ec49cfc8833ff9ccc7168ddaf28b37aee",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFileAcls"],
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
    "6047e3679e96dac23760dad3649b0526b947378009",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeFileAccess"],
    "60484b10479f56499b8d2807bd2ec3adfa3701149b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["moveItem"],
    "604d4be896ae4ef055605db17161a7003806ef5633",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renameItem"],
    "609ff9fef701996ebb30337f0573aa84a15e364c28",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createFolder"],
    "60e19c8c998f07a6ca71d9eb820622f55035e0d360",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["changePermissions"],
    "60f535c6df1a1d9b470e0d25988d8759c27e1030c2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unshareFile"],
    "70c646fe7379a2a2d65c23cd27673dff057d09f365",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shareFile"]
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