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

interface ShareDialogProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: (username: string) => Promise<void> // Confirm is async
    file: FileItem | null
}

export function ShareDialog({ isOpen, onClose, onConfirm, file }: ShareDialogProps) {
    const [username, setUsername] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    // Reset username when dialog opens
    useEffect(() => {
        if (isOpen) setUsername("")
    }, [isOpen])

    const handleConfirm = async () => {
        if (!username.trim()) return

        setIsLoading(true)
        try {
            await onConfirm(username)
            onClose()
        } catch (error) {
            // Error handling should be done by parent (e.g. showing toast), 
            // but we ensure we stop loading state if error happens here or just finish.
            // Actually parent catches error for Toast, so we usually just finish.
        } finally {
            setIsLoading(false)
        }
    }

    if (!file) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Share File</DialogTitle>
                    <DialogDescription>
                        Create a symlink for <b>{file.name}</b> in another user's shared folder.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="col-span-3"
                            placeholder="e.g. alice"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleConfirm()
                            }}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose} disabled={isLoading}>
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm} disabled={!username.trim() || isLoading}>
                        {isLoading ? "Sharing..." : "Share"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
