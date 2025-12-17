"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, User, Loader2, Copy } from "lucide-react"
import { searchUsers } from "@/app/actions"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

export function UserSearchDialog() {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState("")
    const [results, setResults] = useState<{ username: string, uid?: string, gid?: string }[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!query.trim()) return

        setIsLoading(true)
        try {
            const users = await searchUsers(query)
            setResults(users)
        } catch (error) {
            toast.error("Failed to search users")
        } finally {
            setIsLoading(false)
        }
    }

    const copyUser = (username: string) => {
        navigator.clipboard.writeText(username)
        toast.success(`Copied ${username} to clipboard`)
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" className="w-full justify-start gap-2 px-2 text-muted-foreground hover:text-primary">
                    <Search className="h-4 w-4" />
                    <span>Find Users</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md glass-card">
                <DialogHeader>
                    <DialogTitle>Find Users</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                    <form onSubmit={handleSearch} className="flex gap-2">
                        <Input
                            placeholder="Search by username..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="bg-secondary/50"
                        />
                        <Button type="submit" disabled={isLoading || !query.trim()}>
                            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                        </Button>
                    </form>

                    <div className="space-y-2 max-h-[300px] overflow-y-auto">
                        {results.length > 0 ? (
                            results.map((user) => (
                                <div
                                    key={user.username}
                                    className="flex items-center justify-between p-3 rounded-lg border border-border/40 bg-secondary/20 hover:bg-secondary/40 transition-colors group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <User className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm">{user.username}</div>
                                            {user.uid && <div className="text-xs text-muted-foreground">UID: {user.uid}</div>}
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
                                        onClick={() => copyUser(user.username)}
                                    >
                                        <Copy className="h-3 w-3" />
                                    </Button>
                                </div>
                            ))
                        ) : query && !isLoading ? (
                            <div className="text-center py-8 text-muted-foreground text-sm">
                                No users found
                            </div>
                        ) : null}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
