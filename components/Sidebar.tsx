
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
import { ShareDialog } from "./ShareDialog"
import { UserSearchDialog } from "./UserSearchDialog"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    activeView?: string
    onNavigate?: (view: string) => void
    onNewItem: (type: 'folder' | 'file' | 'script' | 'upload') => void
}

export function Sidebar({ className, activeView = "home", onNavigate, onNewItem }: SidebarProps) {
    const navItems = [
        { name: "Home", icon: Home, id: "home" },
        { name: "Data", icon: FolderPlus, id: "data" },
        { name: "Shared Projects", icon: Users, id: "shared" },
        { name: "Recent Files", icon: Clock, id: "recent" },
        { name: "Favorites", icon: Star, id: "favorites" },
        { name: "Trash", icon: Trash2, id: "trash" },
    ]

    return (
        <div className={cn("pb-12 w-64 border-r min-h-screen glass flex flex-col transition-all duration-300", className)}>
            <div className="space-y-4 py-4 flex-1">
                <div className="px-3 py-2">
                    <div className="mb-8 px-4 flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                            <span className="text-primary font-bold text-lg">DL</span>
                        </div>
                        <h2 className="text-xl font-bold tracking-tight text-foreground/90">DataLens</h2>
                    </div>

                    <div className="mb-6 px-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="w-full justify-start gap-2 shadow-lg hover:shadow-primary/20 transition-all bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                                    <Plus className="h-5 w-5" />
                                    <span className="font-semibold">New Item</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 glass-card p-2" align="start">
                                <DropdownMenuItem onClick={() => onNewItem('folder')} className="cursor-pointer">
                                    <FolderPlus className="mr-2 h-4 w-4 text-primary" />
                                    <span>New Folder</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="bg-border/50" />
                                <DropdownMenuItem onClick={() => onNewItem('upload')} className="cursor-pointer">
                                    <Upload className="mr-2 h-4 w-4 text-blue-400" />
                                    <span>File Upload</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => onNewItem('upload')} className="cursor-pointer">
                                    <Upload className="mr-2 h-4 w-4 text-blue-400" />
                                    <span>Folder Upload</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="bg-border/50" />
                                <DropdownMenuItem onClick={() => onNewItem('script')} className="cursor-pointer">
                                    <FilePlus className="mr-2 h-4 w-4 text-yellow-400" />
                                    <span>New Script (.sh)</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => onNewItem('script')} className="cursor-pointer">
                                    <FilePlus className="mr-2 h-4 w-4 text-yellow-400" />
                                    <span>New Script (.py)</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="space-y-1">
                        {navItems.map((item) => (
                            <Button
                                key={item.id}
                                variant="ghost"
                                className={cn(
                                    "w-full justify-start relative overflow-hidden transition-all duration-300",
                                    activeView === item.id
                                        ? "bg-primary/10 text-primary font-semibold shadow-sm hover:bg-primary/15"
                                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                                )}
                                onClick={() => onNavigate?.(item.id)}
                            >
                                {activeView === item.id && (
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
                                )}
                                <item.icon className={cn("mr-3 h-5 w-5 transition-colors", activeView === item.id ? "text-primary" : "text-muted-foreground")} />
                                {item.name}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className="p-4 border-t border-border/40">
                 <div className="bg-secondary/20 rounded-lg p-3">
                     <div className="flex items-center justify-between mb-2">
                         <span className="text-xs font-medium text-muted-foreground">Storage</span>
                         <span className="text-xs font-medium text-muted-foreground">45%</span>
                     </div>
                     <Progress value={45} className="h-1.5" />
                     <div className="flex justify-between mt-1">
                         <span className="text-[10px] text-muted-foreground">45 GB</span>
                         <span className="text-[10px] text-muted-foreground">100 GB</span>
                     </div>
                 </div>
             </div> */}

            <div className="p-4 border-t border-border/40">
                <UserSearchDialog />
            </div>
        </div>
    )
}
