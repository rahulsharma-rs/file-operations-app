
"use client"

import { FileItem } from "@/app/types"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
    MoreVertical,
    Folder,
    FileText,
    FileCode,
    Database,
    Archive,
    Download,
    Pencil,
    Move,
    Trash2,

    Copy,
    Shield,
    Share2,
    Star
} from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

interface FileListProps {
    files: FileItem[]
    onFileSelect: (file: FileItem) => void
    onFolderNavigate: (folderId: string) => void
    onSort: (column: string) => void
    sortConfig: { column: string, direction: 'asc' | 'desc' }
    viewMode: 'list' | 'grid'
    onRename: (id: string) => void
    onDelete: (id: string) => void
    onCopyPath: (file: FileItem) => void
    onDownload: (file: FileItem) => void
    onShare: (file: FileItem) => void
    onMove: (file: FileItem) => void
    onFavorite: (file: FileItem) => void
}

export function FileList({
    files,
    onFileSelect,
    onFolderNavigate,
    onSort,
    sortConfig,
    viewMode,
    onRename,
    onDelete,
    onCopyPath,
    onDownload,
    onShare,
    onMove,
    onFavorite
}: FileListProps) {

    const getIcon = (type: FileItem['type']) => {
        switch (type) {
            case 'folder': return <Folder className="h-6 w-6 text-blue-500 fill-blue-500/20" />
            case 'script': return <FileCode className="h-6 w-6 text-green-500" />
            case 'data': return <Database className="h-6 w-6 text-yellow-500" />
            case 'archive': return <Archive className="h-6 w-6 text-orange-500" />
            default: return <FileText className="h-6 w-6 text-gray-500" />
        }
    }

    const formatSize = (bytes: number) => {
        if (bytes === 0) return "-"
        const k = 1024
        const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
    }

    // Double click logic wrapper to prevent single click firing on double click if needed,
    // but for now simple separation is fine. List vs Grid handled below.

    if (viewMode === 'grid') {
        return (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {files.map((file) => (
                    <div
                        key={file.id}
                        className="group relative flex flex-col items-center p-4 border rounded-xl hover:bg-muted/50 cursor-pointer transition-colors"
                        onClick={() => onFileSelect(file)}
                        onDoubleClick={(e) => {
                            e.stopPropagation()
                            if (file.type === 'folder') onFolderNavigate(file.id)
                        }}
                    >
                        <div
                            className="mb-3 p-3 bg-muted/30 rounded-full group-hover:bg-background transition-colors"
                            onClick={(e) => {
                                if (file.type === 'folder') {
                                    e.stopPropagation()
                                    onFolderNavigate(file.id)
                                }
                            }}
                        >
                            {getIcon(file.type)}
                        </div>
                        <span className="text-sm font-medium text-center truncate w-full px-2" title={file.name}>
                            {file.name}
                        </span>
                        <span className="text-xs text-muted-foreground mt-1">
                            {formatSize(file.sizeBytes)}
                        </span>

                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-6 w-6 p-0">
                                        <MoreVertical className="h-3 w-3" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => onShare(file)}>
                                        <Share2 className="mr-2 h-4 w-4" /> Share
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => onDownload(file)}>
                                        <Download className="mr-2 h-4 w-4" /> Download
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => onRename(file.id)}>
                                        <Pencil className="mr-2 h-4 w-4" /> Rename
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Move className="mr-2 h-4 w-4" /> Move
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => onCopyPath(file)}>
                                        <Copy className="mr-2 h-4 w-4" /> Copy Path
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => toast("Permissions", { description: file.permissions })}>
                                        <Shield className="mr-2 h-4 w-4" /> Permissions
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-600" onClick={() => onDelete(file.id)}>
                                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[40%] cursor-pointer hover:bg-muted/50" onClick={() => onSort('name')}>
                            Name {sortConfig.column === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                        </TableHead>
                        <TableHead className="cursor-pointer hover:bg-muted/50" onClick={() => onSort('owner')}>
                            Owner
                        </TableHead>
                        <TableHead className="cursor-pointer hover:bg-muted/50" onClick={() => onSort('modifiedAt')}>
                            Last Modified
                        </TableHead>
                        <TableHead className="cursor-pointer hover:bg-muted/50" onClick={() => onSort('sizeBytes')}>
                            Size
                        </TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {files.map((file) => (
                        <TableRow
                            key={file.id}
                            className="cursor-pointer"
                            onClick={() => onFileSelect(file)}
                            onDoubleClick={(e) => {
                                e.stopPropagation()
                                if (file.type === 'folder') onFolderNavigate(file.id)
                            }}
                        >
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="cursor-pointer"
                                        onClick={(e) => {
                                            if (file.type === 'folder') {
                                                e.stopPropagation()
                                                onFolderNavigate(file.id)
                                            }
                                        }}
                                    >
                                        {getIcon(file.type)}
                                    </div>
                                    <span>{file.name}</span>
                                </div>
                            </TableCell>
                            <TableCell>{file.owner}</TableCell>
                            <TableCell>{new Date(file.modifiedAt).toLocaleDateString()}</TableCell>
                            <TableCell>{formatSize(file.sizeBytes)}</TableCell>
                            <TableCell onClick={(e) => e.stopPropagation()}>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <span className="sr-only">Open menu</span>
                                            <MoreVertical className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={() => onShare(file)}>
                                            <Share2 className="mr-2 h-4 w-4" /> Share
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => onDownload(file)}>
                                            <Download className="mr-2 h-4 w-4" /> Download
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => onRename(file.id)}>
                                            <Pencil className="mr-2 h-4 w-4" /> Rename
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => onMove(file)}>
                                            <Move className="mr-2 h-4 w-4" /> Move
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => onFavorite(file)}>
                                            <Star className="mr-2 h-4 w-4" /> Favorite
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => onCopyPath(file)}>
                                            <Copy className="mr-2 h-4 w-4" /> Copy Path
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={(e) => {
                                            e.stopPropagation()
                                            toast("Permissions", { description: file.permissions })
                                        }}>
                                            <Shield className="mr-2 h-4 w-4" /> Permissions
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="text-red-600" onClick={() => onDelete(file.id)}>
                                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
