
"use client"
import { useState, useEffect, useRef, useCallback } from "react"
import { Sidebar } from "./Sidebar"
import { FileList } from "./FileList"
import { DetailsDrawer } from "./DetailsDrawer"
import { ShareDialog } from "./ShareDialog"
import {
    getFiles,
    shareFile,
    getSharedFiles,
    getOutgoingShares,
    unshareFile,
    changePermissions,
    uploadFile as uploadFileAction,
    createFolder as createFolderAction,
    deleteItem,
    getTrashFiles,
    permanentDelete,
    restoreFromTrash,
    getRecentFiles,
    renameItem,
    moveItem,
    toggleFavorite,
    getFavorites
} from "@/app/actions"
import { FileItem, SharedFileItem } from "@/app/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { X, Lock, Unlock, Search, LayoutGrid, List as ListIcon, Info, ChevronUp } from "lucide-react"
import { toast } from "sonner"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
    BreadcrumbPage
} from "@/components/ui/breadcrumb"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function FileExplorer() {
    const [currentView, setCurrentView] = useState('home')
    const [currentPath, setCurrentPath] = useState<string[]>([])
    const [files, setFiles] = useState<FileItem[]>([])
    const [selectedFile, setSelectedFile] = useState<FileItem | null>(null)
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)
    const [isShareOpen, setIsShareOpen] = useState(false)
    const [fileToShare, setFileToShare] = useState<FileItem | null>(null)
    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list')
    const [sortConfig, setSortConfig] = useState<{ column: string, direction: 'asc' | 'desc' }>({
        column: 'name',
        direction: 'asc'
    })

    const [textSearch, setTextSearch] = useState("")
    const [ownerFilter, setOwnerFilter] = useState("all")
    const [modifiedFilter, setModifiedFilter] = useState("all")
    const [typeFilter, setTypeFilter] = useState("all")
    const [outgoingShares, setOutgoingShares] = useState<SharedFileItem[]>([])
    const [sharedTab, setSharedTab] = useState("incoming")

    // Reset path when view changes
    useEffect(() => {
        setCurrentPath([])
    }, [currentView])

    // Get unique owners
    const owners = Array.from(new Set(files.map(f => f.owner)))

    // Initial load and path navigation
    const loadFiles = useCallback(async () => {
        setFiles([]) // Clear to prevent stale view

        try {
            let fetchedFiles: FileItem[] = []
            if (currentView === 'shared') {
                if (sharedTab === 'incoming') {
                    fetchedFiles = await getSharedFiles(currentPath)
                    setFiles(fetchedFiles)
                } else {
                    const outgoing = await getOutgoingShares()
                    setOutgoingShares(outgoing)
                    setFiles(outgoing)
                }
            } else if (currentView === 'trash') {
                const trashFiles = await getTrashFiles()
                setFiles(trashFiles)
            } else if (currentView === 'recent') {
                const recent = await getRecentFiles()
                setFiles(recent)
            } else if (currentView === 'favorites') {
                const favs = await getFavorites()
                setFiles(favs)
            } else {
                fetchedFiles = await getFiles(currentPath)
                setFiles(fetchedFiles)
            }
        } catch (e) {
            console.error(e)
            toast.error("Failed to load files")
        }
    }, [currentPath, currentView, sharedTab])

    useEffect(() => {
        loadFiles()
    }, [loadFiles])


    // Filter files
    const filteredFiles = files.filter(file => {
        const matchesSearch = file.name.toLowerCase().includes(textSearch.toLowerCase())
        const matchesOwner = ownerFilter === "all" || file.owner === ownerFilter
        const matchesType = typeFilter === "all" ||
            (typeFilter === 'folder' && file.type === 'folder') ||
            (typeFilter === 'script' && file.type === 'script') ||
            (typeFilter === 'data' && file.type === 'data')

        // Special view filters
        if (currentView === 'shared') {
            // Incoming shared files usually keep their group or have specific metadata
            // For now, accept all that come from the API
            return matchesSearch && matchesOwner && matchesType
        }

        return matchesSearch && matchesOwner && matchesType
    }).sort((a, b) => {
        let aValue = a[sortConfig.column as keyof FileItem]
        let bValue = b[sortConfig.column as keyof FileItem]

        if (modifiedFilter === 'newest') {
            // Forced override handled by effect, but as backup:
            if (sortConfig.column !== 'modifiedAt') return 0
        }

        if (aValue === undefined || bValue === undefined) return 0
        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
        return 0
    })

    const handleModifiedFilterChange = (value: string) => {
        setModifiedFilter(value)
        if (value === 'newest') {
            setSortConfig({ column: 'modifiedAt', direction: 'desc' })
        } else if (value === 'oldest') {
            setSortConfig({ column: 'modifiedAt', direction: 'asc' })
        }
    }

    const handleNavigate = (view: string) => {
        setCurrentView(view)
        setCurrentPath([])
        setSelectedFile(null)
    }

    const handleFileSelect = (file: FileItem) => {
        setSelectedFile(file)
        setIsDetailsOpen(true)
    }

    const handleFolderNavigate = (folderId: string) => {
        const folder = files.find(f => f.id === folderId)
        if (folder) {
            setCurrentPath([...currentPath, folder.name])
        }
    }

    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleNewItem = async (type: 'folder' | 'file' | 'script' | 'upload') => {
        if (type === 'upload') {
            fileInputRef.current?.click()
            return
        }

        if (type === 'folder') {
            const name = prompt("Enter folder name:")
            if (!name) return

            const result = await createFolderAction(currentPath, name)
            if (result.success) {
                toast.success(result.message)
                loadFiles()
            } else {
                toast.error(result.message)
            }
            return
        }

        // Handling script creation could go here (mocked for now or added to actions)
        toast.info("Script creation not fully implemented yet")
    }

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return

        const formData = new FormData()
        formData.append('file', file)
        formData.append('pathSegments', JSON.stringify(currentPath))

        toast.promise(uploadFileAction(formData), {
            loading: 'Uploading...',
            success: (data) => {
                loadFiles()
                return data.message
            },
            error: 'Upload failed'
        })

        if (fileInputRef.current) fileInputRef.current.value = ''
    }

    const handleDelete = async (fileId: string) => {
        const file = files.find(f => f.id === fileId)
        if (!file) return

        if (!window.confirm(`Are you sure you want to delete ${file.name}?`)) return

        const result = await deleteItem(file.path)
        if (result.success) {
            toast.success(result.message)
            // Optimistic update or reload
            setFiles(current => current.filter(f => f.id !== fileId))
            if (selectedFile?.id === fileId) setIsDetailsOpen(false)
        } else {
            toast.error(result.message)
        }
    }

    const handleRename = async (fileId: string) => {
        const file = files.find(f => f.id === fileId)
        if (!file) return

        const newName = window.prompt("Enter new name:", file.name)
        if (newName && newName !== file.name) {
            const res = await renameItem(file.path, newName)
            if (res.success) {
                toast.success(res.message)
                loadFiles()
            } else {
                toast.error(res.message)
            }
        }
    }

    const handleCopyPath = (file: FileItem) => {
        navigator.clipboard.writeText(file.path)
        toast("Path copied to clipboard")
    }

    const handleDownload = (file: FileItem) => {
        window.open(`/api/download?path=${encodeURIComponent(file.path)}`, '_blank')
    }

    const handleMove = async (file: FileItem) => {
        const destination = window.prompt("Enter destination folder path:")
        if (!destination) return

        const res = await moveItem(file.path, destination)
        if (res.success) {
            toast.success(res.message)
            loadFiles()
        } else {
            toast.error(res.message)
        }
    }

    const handleFavorite = async (file: FileItem) => {
        const res = await toggleFavorite(file.path)
        toast(res.message)
        if (currentView === 'favorites') {
            loadFiles()
        }
    }

    const handleShare = (file: FileItem) => {
        setFileToShare(file)
        setIsShareOpen(true)
    }

    const handleShareConfirm = async (username: string) => {
        if (!fileToShare) return

        await new Promise<void>((resolve, reject) => {
            toast.promise(shareFile(fileToShare.path, username), {
                loading: 'Sharing...',
                success: (data) => {
                    resolve()
                    if (data.success) return data.message
                    throw new Error(data.message)
                },
                error: (err) => {
                    reject(err)
                    return err.message
                }
            })
        })
    }

    const handleUnshare = async (username: string, fileName: string) => {
        if (!window.confirm(`Stop sharing ${fileName} with ${username}?`)) return

        const result = await unshareFile(username, fileName)
        if (result.success) {
            toast.success(result.message)
            const outgoing = await getOutgoingShares()
            setOutgoingShares(outgoing)
            setFiles(outgoing)
        } else {
            toast.error(result.message)
        }
    }

    const handlePermissionChange = async (file: SharedFileItem, mode: string) => {
        const result = await changePermissions(file.path, mode)
        if (result.success) {
            toast.success(result.message)
            const outgoing = await getOutgoingShares()
            setOutgoingShares(outgoing)
            setFiles(outgoing)
        } else {
            toast.error(result.message)
        }
    }

    const handleSort = (column: string) => {
        setSortConfig(current => ({
            column,
            direction: current.column === column && current.direction === 'asc' ? 'desc' : 'asc'
        }))
    }

    return (
        <div className="flex h-screen bg-background overflow-hidden main-layout">
            <Sidebar
                className="hidden md:block w-64 flex-shrink-0"
                activeView={currentView}
                onNavigate={handleNavigate}
                onNewItem={handleNewItem}
            />

            <div className="flex-1 flex flex-col min-w-0 h-full">
                {/* Header */}
                <header className="border-b bg-card p-4 space-y-4">
                    <div className="flex items-center justify-between gap-4">
                        <h1 className="text-xl font-semibold truncate capitalize">
                            {currentView === 'home' ? (currentPath.length > 0 ? currentPath[currentPath.length - 1] : "Home") : currentView}
                        </h1>

                        <div className="flex items-center gap-2">
                            <div className="relative w-64">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search files..."
                                    className="pl-8"
                                    value={textSearch}
                                    onChange={(e) => setTextSearch(e.target.value)}
                                />
                            </div>

                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                                className={isDetailsOpen ? "bg-muted" : ""}
                            >
                                <Info className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1 overflow-x-auto">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink
                                            className="cursor-pointer"
                                            onClick={() => setCurrentPath([])}
                                        >
                                            Home
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    {currentPath.map((folder, index) => (
                                        <div key={index} className="flex items-center">
                                            <BreadcrumbSeparator />
                                            <BreadcrumbItem>
                                                {index === currentPath.length - 1 ? (
                                                    <BreadcrumbPage>{folder}</BreadcrumbPage>
                                                ) : (
                                                    <BreadcrumbLink
                                                        className="cursor-pointer"
                                                        onClick={() => setCurrentPath(currentPath.slice(0, index + 1))}
                                                    >
                                                        {folder}
                                                    </BreadcrumbLink>
                                                )}
                                            </BreadcrumbItem>
                                        </div>
                                    ))}
                                </BreadcrumbList>
                            </Breadcrumb>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-6 w-6"
                                disabled={currentPath.length === 0}
                                onClick={() => {
                                    const newPath = [...currentPath]
                                    newPath.pop()
                                    setCurrentPath(newPath)
                                }}
                            >
                                <ChevronUp className="h-4 w-4" />
                            </Button>
                        </div>

                        <div className="flex items-center gap-2">
                            <Select value={typeFilter} onValueChange={setTypeFilter}>
                                <SelectTrigger className="w-[120px] h-8 text-xs">
                                    <SelectValue placeholder="Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Types</SelectItem>
                                    <SelectItem value="folder">Folders</SelectItem>
                                    <SelectItem value="script">Scripts</SelectItem>
                                    <SelectItem value="data">Data</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select value={ownerFilter} onValueChange={setOwnerFilter}>
                                <SelectTrigger className="w-[140px] h-8 text-xs">
                                    <SelectValue placeholder="Owner/Group" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Owners</SelectItem>
                                    {owners.map(owner => (
                                        <SelectItem key={owner} value={owner}>{owner}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Select value={modifiedFilter} onValueChange={handleModifiedFilterChange}>
                                <SelectTrigger className="w-[120px] h-8 text-xs">
                                    <SelectValue placeholder="Modified" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="newest">Newest</SelectItem>
                                    <SelectItem value="oldest">Oldest</SelectItem>
                                </SelectContent>
                            </Select>

                            <div className="flex items-center border rounded-md bg-background">
                                <Button
                                    variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                                    size="sm"
                                    className="h-8 px-2 rounded-none rounded-l-md"
                                    onClick={() => setViewMode('list')}
                                >
                                    <ListIcon className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                                    size="sm"
                                    className="h-8 px-2 rounded-none rounded-r-md"
                                    onClick={() => setViewMode('grid')}
                                >
                                    <LayoutGrid className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 overflow-auto p-6">
                    {currentView === 'shared' ? (
                        <Tabs value={sharedTab} onValueChange={setSharedTab} className="w-full">
                            <TabsList className="mb-4">
                                <TabsTrigger value="incoming">Shared with Me</TabsTrigger>
                                <TabsTrigger value="outgoing">Shared by Me</TabsTrigger>
                            </TabsList>

                            <TabsContent value="incoming">
                                <FileList
                                    files={filteredFiles}
                                    onFileSelect={handleFileSelect}
                                    onFolderNavigate={handleFolderNavigate}
                                    onSort={handleSort}
                                    sortConfig={sortConfig}
                                    viewMode={viewMode}
                                    onDelete={handleDelete}
                                    onRename={handleRename}
                                    onCopyPath={handleCopyPath}
                                    onDownload={handleDownload}
                                    onShare={handleShare}
                                    onMove={handleMove}
                                    onFavorite={handleFavorite}
                                />
                            </TabsContent>

                            <TabsContent value="outgoing">
                                <div className="rounded-md border">
                                    <table className="w-full caption-bottom text-sm">
                                        <thead className="[&_tr]:border-b">
                                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">File</th>
                                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Shared With</th>
                                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Permissions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="[&_tr:last-child]:border-0">
                                            {outgoingShares.map((file) => (
                                                <tr key={file.id} className="border-b transition-colors hover:bg-muted/50">
                                                    <td className="p-4 align-middle font-medium">{file.name}</td>
                                                    <td className="p-4 align-middle">
                                                        <div className="flex flex-wrap gap-2">
                                                            {file.sharedWith.map((share, idx) => (
                                                                <Badge key={idx} variant="secondary" className="gap-1 pr-1">
                                                                    {share.username}
                                                                    <button
                                                                        onClick={() => handleUnshare(share.username, file.name)}
                                                                        className="ml-1 rounded-full p-0.5 hover:bg-destructive hover:text-destructive-foreground"
                                                                    >
                                                                        <X className="h-3 w-3" />
                                                                    </button>
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </td>
                                                    <td className="p-4 align-middle">
                                                        <div className="flex items-center gap-2">
                                                            <Button size="icon" variant="ghost" onClick={() => handlePermissionChange(file, '444')}>
                                                                <Lock className={`h-4 w-4 ${file.permissions === '0444' ? 'text-orange-500' : ''}`} />
                                                            </Button>
                                                            <Button size="icon" variant="ghost" onClick={() => handlePermissionChange(file, '644')}>
                                                                <Unlock className={`h-4 w-4 ${file.permissions === '0644' ? 'text-green-500' : ''}`} />
                                                            </Button>
                                                            <span className="text-xs text-muted-foreground">{file.permissions}</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                            {outgoingShares.length === 0 && (
                                                <tr>
                                                    <td colSpan={3} className="p-4 text-center text-muted-foreground">
                                                        You haven't shared any files yet.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </TabsContent>
                        </Tabs>
                    ) : currentView === 'trash' ? (
                        <div className="border rounded-md">
                            <table className="w-full">
                                <thead className="bg-muted">
                                    <tr>
                                        <th className="text-left p-2">File</th>
                                        <th className="text-left p-2">Deleted At</th>
                                        <th className="text-left p-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {files.map((file) => (
                                        <tr key={file.id} className="border-t">
                                            <td className="p-2 flex items-center gap-2">
                                                <span>{file.type === 'folder' ? '📁' : '📄'}</span>
                                                {file.name}
                                            </td>
                                            <td className="p-2 text-sm text-muted-foreground">
                                                {new Date(file.modifiedAt).toLocaleString()}
                                            </td>
                                            <td className="p-2 flex gap-2">
                                                <Button size="sm" variant="outline" onClick={async () => {
                                                    const res = await restoreFromTrash(file.path)
                                                    if (res.success) {
                                                        toast.success(res.message)
                                                        loadFiles()
                                                    } else {
                                                        toast.error(res.message)
                                                    }
                                                }}>Restore</Button>
                                                <Button size="sm" variant="destructive" onClick={async () => {
                                                    if (!confirm("Permanently delete?")) return
                                                    const res = await permanentDelete(file.path)
                                                    if (res.success) {
                                                        toast.success(res.message)
                                                        loadFiles()
                                                    } else {
                                                        toast.error(res.message)
                                                    }
                                                }}>Delete Forever</Button>
                                            </td>
                                        </tr>
                                    ))}
                                    {files.length === 0 && (
                                        <tr><td colSpan={3} className="p-4 text-center text-muted-foreground">Trash is empty</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <FileList
                            files={filteredFiles}
                            onFileSelect={handleFileSelect}
                            onFolderNavigate={handleFolderNavigate}
                            onSort={handleSort}
                            sortConfig={sortConfig}
                            viewMode={viewMode}
                            onDelete={handleDelete}
                            onRename={handleRename}
                            onCopyPath={handleCopyPath}
                            onDownload={handleDownload}
                            onShare={handleShare}
                            onMove={handleMove}
                            onFavorite={handleFavorite}
                        />
                    )}
                </main>
            </div>

            <DetailsDrawer
                isOpen={isDetailsOpen}
                onClose={() => setIsDetailsOpen(false)}
                file={selectedFile}
                onCopyPath={handleCopyPath}
                onDownload={handleDownload}
                onShare={handleShare}
            />

            {/* Placeholder for ShareDialog if it exists or we can mock it inside the file if needed 
                Assuming ShareDialog is a real component
            */}
            {isShareOpen && fileToShare && (
                <ShareDialog
                    isOpen={isShareOpen}
                    onClose={() => setIsShareOpen(false)}
                    onConfirm={handleShareConfirm}
                    file={fileToShare}
                />
            )}

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                className="hidden"
            />
        </div>
    )
}
