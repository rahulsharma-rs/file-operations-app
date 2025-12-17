
"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
    Home,
    Users,
    Clock,
    Star,
    Trash2,
    Plus,
    FolderPlus,
    FilePlus,
    Upload,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    activeView?: string
    onNavigate?: (view: string) => void
    onNewItem: (type: 'folder' | 'file' | 'script' | 'upload') => void
}

export function Sidebar({ className, activeView = "home", onNavigate, onNewItem }: SidebarProps) {
    const navItems = [
        { name: "Home", icon: Home, id: "home" },
        { name: "Shared Projects", icon: Users, id: "shared" },
        { name: "Recent Files", icon: Clock, id: "recent" },
        { name: "Favorites", icon: Star, id: "favorites" },
        { name: "Trash", icon: Trash2, id: "trash" },
    ]

    return (
        <div className={cn("pb-12 w-64 border-r min-h-screen bg-card", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <div className="mb-6 px-4">
                        <h2 className="text-xl font-bold tracking-tight mb-4">DataLens RC Explorer</h2>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="w-full justify-start gap-2 shadow-md" size="lg">
                                    <Plus className="h-5 w-5" />
                                    New
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="start">
                                <DropdownMenuItem onClick={() => onNewItem('folder')}>
                                    <FolderPlus className="mr-2 h-4 w-4" />
                                    <span>New Folder</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => onNewItem('upload')}>
                                    <Upload className="mr-2 h-4 w-4" />
                                    <span>File Upload</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => onNewItem('upload')}>
                                    <Upload className="mr-2 h-4 w-4" />
                                    <span>Folder Upload</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => onNewItem('script')}>
                                    <FilePlus className="mr-2 h-4 w-4" />
                                    <span>New Script (.sh)</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => onNewItem('script')}>
                                    <FilePlus className="mr-2 h-4 w-4" />
                                    <span>New Script (.py)</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="space-y-1">
                        {navItems.map((item) => (
                            <Button
                                key={item.id}
                                variant={activeView === item.id ? "secondary" : "ghost"}
                                className={cn(
                                    "w-full justify-start",
                                    activeView === item.id && "font-semibold"
                                )}
                                onClick={() => onNavigate?.(item.id)}
                            >
                                <item.icon className="mr-2 h-4 w-4" />
                                {item.name}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
