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
            case 'folder': return <Folder className="h-8 w-8 text-blue-400 fill-blue-400/20" />
            case 'script': return <FileCode className="h-8 w-8 text-green-400" />
            case 'data': return <Database className="h-8 w-8 text-yellow-400" />
            case 'archive': return <Archive className="h-8 w-8 text-orange-400" />
            default: return <FileText className="h-8 w-8 text-slate-400" />
        }
    }

    const formatSize = (bytes: number) => {
        if (bytes === 0) return "-"
        const k = 1024
        const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
    }

    if (viewMode === 'grid') {
        return (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 pb-20">
                {files.map((file) => (
                    <div
                        key={file.id}
                        className="group relative flex flex-col items-center p-4 rounded-xl border border-border/40 bg-card/30 hover:bg-card/80 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 cursor-pointer animate-fade-in"
                        onClick={() => onFileSelect(file)}
                        onDoubleClick={(e) => {
                            e.stopPropagation()
                            if (file.type === 'folder') onFolderNavigate(file.id)
                        }}
                    >
                        <div
                            className="mb-4 p-4 rounded-full bg-secondary/50 group-hover:bg-primary/10 transition-colors duration-300"
                            onClick={(e) => {
                                if (file.type === 'folder') {
                                    e.stopPropagation()
                                    onFolderNavigate(file.id)
                                }
                            }}
                        >
                            {getIcon(file.type)}
                        </div>
                        <span className="text-sm font-medium text-center truncate w-full px-2 text-foreground/90 group-hover:text-primary transition-colors" title={file.name}>
                            {file.name}
                        </span>
                        <span className="text-xs text-muted-foreground mt-1 font-mono">
                            {formatSize(file.sizeBytes)}
                        </span>

                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100 duration-200">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0 rounded-full bg-background/50 hover:bg-primary hover:text-primary-foreground backdrop-blur-sm shadow-sm">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="glass-card">
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
                                    <DropdownMenuItem onClick={() => onCopyPath(file)}>
                                        <Copy className="mr-2 h-4 w-4" /> Copy Path
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => toast("Permissions", { description: file.permissions })}>
                                        <Shield className="mr-2 h-4 w-4" /> Permissions
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-destructive focus:text-destructive" onClick={() => onDelete(file.id)}>
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
        <div className="rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm overflow-hidden shadow-sm">
            <Table>
                <TableHeader className="bg-muted/30">
                    <TableRow className="hover:bg-transparent border-border/40">
                        <TableHead className="w-[40%] cursor-pointer hover:text-primary transition-colors h-12" onClick={() => onSort('name')}>
                            Name {sortConfig.column === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                        </TableHead>
                        <TableHead className="cursor-pointer hover:text-primary transition-colors h-12" onClick={() => onSort('owner')}>
                            Owner
                        </TableHead>
                        <TableHead className="cursor-pointer hover:text-primary transition-colors h-12" onClick={() => onSort('modifiedAt')}>
                            Last Modified
                        </TableHead>
                        <TableHead className="cursor-pointer hover:text-primary transition-colors h-12" onClick={() => onSort('sizeBytes')}>
                            Size
                        </TableHead>
                        <TableHead className="w-[50px] h-12"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {files.map((file) => (
                        <TableRow
                            key={file.id}
                            className="cursor-pointer hover:bg-muted/40 border-border/40 transition-colors group"
                            onClick={() => onFileSelect(file)}
                            onDoubleClick={(e) => {
                                e.stopPropagation()
                                if (file.type === 'folder') onFolderNavigate(file.id)
                            }}
                        >
                            <TableCell className="font-medium py-3">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="cursor-pointer transition-transform group-hover:scale-110"
                                        onClick={(e) => {
                                            if (file.type === 'folder') {
                                                e.stopPropagation()
                                                onFolderNavigate(file.id)
                                            }
                                        }}
                                    >
                                        {/* Smaller icons for list view */}
                                        {file.type === 'folder' && <Folder className="h-5 w-5 text-blue-400 fill-blue-400/20" />}
                                        {file.type === 'script' && <FileCode className="h-5 w-5 text-green-400" />}
                                        {file.type === 'data' && <Database className="h-5 w-5 text-yellow-400" />}
                                        {file.type === 'archive' && <Archive className="h-5 w-5 text-orange-400" />}
                                        {['folder', 'script', 'data', 'archive'].indexOf(file.type) === -1 && <FileText className="h-5 w-5 text-slate-400" />}
                                    </div>
                                    <span className="group-hover:text-primary transition-colors">{file.name}</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-muted-foreground">{file.owner}</TableCell>
                            <TableCell className="text-muted-foreground">{new Date(file.modifiedAt).toLocaleDateString()}</TableCell>
                            <TableCell className="text-muted-foreground font-mono text-xs">{formatSize(file.sizeBytes)}</TableCell>
                            <TableCell onClick={(e) => e.stopPropagation()}>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="sr-only">Open menu</span>
                                            <MoreVertical className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="glass-card">
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
                                        <DropdownMenuItem className="text-destructive focus:text-destructive" onClick={() => onDelete(file.id)}>
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
