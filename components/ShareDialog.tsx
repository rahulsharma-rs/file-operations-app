"use client"

import { useState, useEffect } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { FileItem } from "@/app/types"
import { getFileAcls, removeFileAccess, shareFile } from "@/app/actions"
import { Loader2, Trash2, UserPlus, UserX } from "lucide-react"
import { toast } from "sonner"

interface ShareDialogProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: (username: string, permission: 'read' | 'write') => Promise<void>
    file: FileItem | null
}

export function ShareDialog({ isOpen, onClose, onConfirm, file }: ShareDialogProps) {
    const [username, setUsername] = useState("")
    const [permission, setPermission] = useState<'read' | 'write'>('read')
    const [isLoading, setIsLoading] = useState(false)
    const [currentShares, setCurrentShares] = useState<{ username: string, permissions: 'read' | 'write' }[]>([])
    const [loadingShares, setLoadingShares] = useState(false)

    // Load shares when dialog opens
    useEffect(() => {
        if (isOpen && file) {
            setUsername("")
            setPermission('read')
            loadShares()
        }
    }, [isOpen, file])

    const loadShares = async () => {
        if (!file) return
        setLoadingShares(true)
        try {
            const shares = await getFileAcls(file.path)
            setCurrentShares(shares)
        } catch (e) {
            console.error(e)
        } finally {
            setLoadingShares(false)
        }
    }

    const handleConfirm = async () => {
        if (!username.trim()) return

        setIsLoading(true)
        try {
            await onConfirm(username, permission)
            // Reload shares to show the new one
            await loadShares()
            setUsername("")
            toast.success(`Shared with ${username}`)
        } catch (error) {
            // Error handling usually done in parent, but we can do it here too
        } finally {
            setIsLoading(false)
        }
    }

    const handleRemoveAccess = async (userToRemove: string) => {
        if (!file) return
        if (!confirm(`Are you sure you want to stop sharing with ${userToRemove}?`)) return

        try {
            const res = await removeFileAccess(file.path, userToRemove)
            if (res.success) {
                toast.success(res.message)
                loadShares()
            } else {
                toast.error(res.message)
            }
        } catch (e) {
            toast.error("Failed to remove access")
        }
    }

    const handleUpdatePermission = async (targetUser: string, newPerm: 'read' | 'write') => {
        if (!file) return
        // We reuse shareFile to overwrite permissions
        try {
            const res = await shareFile(file.path, targetUser, newPerm)
            if (res.success) {
                toast.success(`Updated permission for ${targetUser}`)
                loadShares()
            } else {
                toast.error(res.message)
            }
        } catch (e) {
            toast.error("Failed to update permission")
        }
    }

    if (!file) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Manage Access</DialogTitle>
                    <DialogDescription>
                        Manage who has access to {file.type === 'folder' ? 'folder' : 'file'}: <span className="font-medium text-foreground">{file.name}</span>
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    {/* Add New Share */}
                    <div className="bg-secondary/20 p-4 rounded-lg space-y-3">
                        <Label className="text-sm font-semibold">Add People</Label>
                        <div className="flex gap-2">
                            <Input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter username (e.g. blazerid)"
                                className="flex-1 bg-background"
                                onKeyDown={(e) => e.key === "Enter" && handleConfirm()}
                            />
                            <select
                                value={permission}
                                onChange={(e) => setPermission(e.target.value as 'read' | 'write')}
                                className="h-10 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            >
                                <option value="read">Read</option>
                                <option value="write">Read/Write</option>
                            </select>
                            <Button onClick={handleConfirm} disabled={!username.trim() || isLoading}>
                                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <UserPlus className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>

                    {/* Current Shares List */}
                    <div className="space-y-3">
                        <Label className="text-sm font-semibold">Current Access</Label>
                        <div className="rounded-md border border-border/50 divide-y divide-border/50 min-h-[100px] max-h-[300px] overflow-y-auto">
                            {loadingShares ? (
                                <div className="p-8 text-center text-muted-foreground flex justify-center">
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                </div>
                            ) : currentShares.length === 0 ? (
                                <div className="p-8 text-center text-muted-foreground text-sm">
                                    No custom permissions set (only owner).
                                </div>
                            ) : (
                                currentShares.map((share) => (
                                    <div key={share.username} className="flex items-center justify-between p-3 hover:bg-muted/50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold uppercase">
                                                {share.username.substring(0, 2)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium leading-none">{share.username}</p>
                                                <p className="text-xs text-muted-foreground mt-1">
                                                    {share.permissions === 'write' ? 'Can edit' : 'Can view'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <select
                                                value={share.permissions}
                                                onChange={(e) => handleUpdatePermission(share.username, e.target.value as 'read' | 'write')}
                                                className="h-8 rounded-md border border-input bg-transparent px-2 text-xs focus-visible:outline-none"
                                            >
                                                <option value="read">Read</option>
                                                <option value="write">Read/Write</option>
                                            </select>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                                onClick={() => handleRemoveAccess(share.username)}
                                            >
                                                <UserX className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>
                        Close
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
