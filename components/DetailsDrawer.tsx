
"use client"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { FileItem } from "@/app/types"
import { Separator } from "@/components/ui/separator"
import {
    FileText,
    Folder,
    Download,
    Copy,
    HardDrive,
    Calendar,
    User,
    CheckCircle2,
    Clock,

    Shield,
    FileCode,
    Database,
    Archive,
    Share2
} from "lucide-react"
import { getFileShares } from "@/app/actions"
import { useEffect, useState } from "react"

interface DetailsDrawerProps {
    isOpen: boolean
    onClose: () => void
    file: FileItem | null
    onCopyPath: (file: FileItem) => void
    onDownload: (file: FileItem) => void
    onShare: (file: FileItem) => void
}

export function DetailsDrawer({ isOpen, onClose, file, onCopyPath, onDownload, onShare }: DetailsDrawerProps) {
    const [shares, setShares] = useState<string[]>([])

    useEffect(() => {
        const loadShares = async () => {
            if (file && isOpen) {
                setShares([])
                const sharedUsers = await getFileShares(file.path)
                setShares(sharedUsers)
            }
        }
        loadShares()
    }, [file, isOpen])

    if (!file) return null

    const getIcon = (type: FileItem['type']) => {
        switch (type) {
            case 'folder': return <Folder className="h-10 w-10 text-blue-500" />
            case 'script': return <FileCode className="h-10 w-10 text-green-500" />
            case 'data': return <Database className="h-10 w-10 text-yellow-500" />
            case 'archive': return <Archive className="h-10 w-10 text-orange-500" />
            default: return <FileText className="h-10 w-10 text-gray-500" />
        }
    }

    const formatSize = (bytes: number) => {
        if (bytes === 0) return "-"
        const k = 1024
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetHeader className="mb-6">
                    <div className="flex items-center gap-4">
                        {getIcon(file.type)}
                        <div>
                            <SheetTitle className="text-xl break-all">{file.name}</SheetTitle>
                            <SheetDescription>
                                {file.path}
                            </SheetDescription>
                        </div>
                    </div>
                </SheetHeader>

                <div className="space-y-6">
                    <div className="flex gap-2">
                        <Button className="flex-1 gap-2" onClick={() => onDownload(file)}>
                            <Download className="h-4 w-4" />
                            Download
                        </Button>
                        <Button variant="outline" className="flex-1 gap-2" onClick={() => onCopyPath(file)}>
                            <Copy className="h-4 w-4" />
                            Copy Path
                        </Button>
                    </div>
                    <Button variant="secondary" className="w-full gap-2" onClick={() => onShare(file)}>
                        <Share2 className="h-4 w-4" />
                        Share (Symlink)
                    </Button>

                    {shares.length > 0 && (
                        <div>
                            <div className="text-sm font-medium mb-2">Shared with</div>
                            <div className="flex flex-wrap gap-2">
                                {shares.map(user => (
                                    <div key={user} className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1">
                                        <User className="h-3 w-3" />
                                        {user}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <Separator />

                    <div className="space-y-4">
                        <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Details</h3>

                        <div className="grid grid-cols-[24px_1fr_1fr] gap-4 items-center">
                            <HardDrive className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Size</span>
                            <span className="text-sm">{formatSize(file.sizeBytes)}</span>

                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Owner / Group</span>
                            <span className="text-sm">{file.owner} : {file.group}</span>

                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Modified</span>
                            <span className="text-sm">{new Date(file.modifiedAt).toLocaleDateString()}</span>

                            <Shield className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Permissions</span>
                            <code className="text-xs bg-muted p-1 rounded font-mono">{file.permissions}</code>

                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Type</span>
                            <span className="text-sm capitalize">{file.type}</span>
                        </div>
                    </div>
                </div>

                <SheetFooter className="mt-8">
                    {/* Add footer if needed */}
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
