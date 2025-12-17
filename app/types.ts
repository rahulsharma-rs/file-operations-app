export interface FileItem {
    id: string
    name: string
    type: "folder" | "file" | "script" | "data" | "archive" | "upload"
    path: string
    owner: string
    group: string
    modifiedAt: string
    sizeBytes: number
    permissions: string
}

export interface SharedFileItem extends FileItem {
    sharedWith: { username: string, permissions: string }[]
}
