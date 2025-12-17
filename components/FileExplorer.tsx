"use client"
import { useState, useEffect, useRef, useCallback } from "react"
import { Sidebar } from "./Sidebar"
import { FileList } from "./FileList"
import { DetailsDrawer } from "./DetailsDrawer"
import { ShareDialog } from "./ShareDialog"
import { getFiles, shareFile, getSharedFiles, getOutgoingShares, unshareFile, changePermissions, uploadFile, createFolder, deleteItem, getTrashFiles, permanentDelete, restoreFromTrash, getRecentFiles, renameItem, moveItem, toggleFavorite, getFavorites } from "@/app/actions"
import { FileItem, SharedFileItem } from "@/app/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { X, Lock, Unlock } from "lucide-react"
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
import { Search, LayoutGrid, List as ListIcon, Info, ChevronUp } from "lucide-react"

export function FileExplorer() {
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
    const [currentCategory, setCurrentCategory] = useState<'home' | 'shared' | 'favorites' | 'trash' | 'recent'>('home')
    const [outgoingShares, setOutgoingShares] = useState<SharedFileItem[]>([])
    const [sharedTab, setSharedTab] = useState("incoming")

    // Reset path when category changes
    useEffect(() => {
        setCurrentPath([])
    }, [currentCategory])

    // Get unique owners
    const owners = Array.from(new Set(files.map(f => f.owner)))

    // Initial load and path navigation
    const loadFiles = useCallback(async () => {
        // Debug
        toast(`Loading category: ${currentCategory}`)

        // Clear files to prevent stale view
        setFiles([])

        let fetchedFiles: FileItem[] = []
        if (currentCategory === 'shared') {
            if (sharedTab === 'incoming') {
                fetchedFiles = await getSharedFiles(currentPath)
                setFiles(fetchedFiles)
            } else {
                const outgoing = await getOutgoingShares()
                setOutgoingShares(outgoing)
                setFiles(outgoing)
            }
        } else if (currentCategory === 'trash') {
            const trashFiles = await getTrashFiles()
            setFiles(trashFiles)
        } else if (currentCategory === 'recent') {
            const recent = await getRecentFiles()
            setFiles(recent)
        } else if (currentCategory === 'favorites') {
            const favs = await getFavorites()
            setFiles(favs)
        } else {
            fetchedFiles = await getFiles(currentPath)
            setFiles(fetchedFiles)
        }
    }, [currentPath, currentCategory, sharedTab, setFiles])

    useEffect(() => {
        loadFiles()
    }, [loadFiles])


    // Filter files based on search and current logic (mocked)
    // In a real app this would query the backend based on path
    // Filter files logic
    const filteredFiles = files.filter(file => {
        const matchesSearch = file.name.toLowerCase().includes(textSearch.toLowerCase())
        const matchesOwner = ownerFilter === "all" || file.owner === ownerFilter
        const matchesType = typeFilter === "all" ||
            (typeFilter === 'folder' && file.type === 'folder') ||
            (typeFilter === 'script' && file.type === 'script') ||
            (typeFilter === 'data' && file.type === 'data')

        // Category filter simulation
        if (currentCategory === 'trash') {
            // In a real app, we'd check if file.deletedAt is set.
            // For now, let's just show no files to simulate 'empty trash' or maybe filtered out ones
            // But to show "Refinement" I'll just say:
            return false // Empty trash for now, or we could add a 'isDeleted' flag to mockData.
        }

        // Shared projects simulation
        if (currentCategory === 'shared') {
            return matchesSearch && matchesOwner && matchesType && file.group === 'researchers'
        }

        // Recent simulation
        if (currentCategory === 'recent') {
            // Show all but maybe sorted by time.
            return matchesSearch && matchesOwner && matchesType
        }

        return matchesSearch && matchesOwner && matchesType
    }).sort((a, b) => {
        // Special modified filter handling (overrides column sort for simplicity if strictly enforcing the dropdown logic)
        // However, usually detailed table sort and a "view" dropdown might conflict.
        // The requirement says "Modified dropdown (Newest, Oldest)".
        // Let's make the modified dropdown set the primary sort to 'modifiedAt'.

        let aValue = a[sortConfig.column as keyof FileItem]
        let bValue = b[sortConfig.column as keyof FileItem]

        if (modifiedFilter !== 'custom') {
            // If we are strictly using the dropdown, we might ignore the table header sort or sync them.
            // For this implementation, I will let the specific modified dropdown take precedence for 'modifiedAt' sorting
            // but if the user clicks a header, we might want to respect that.
            // A cleaner approach for "Newest/Oldest" dropdown is:
            // It effectively sets column='modifiedAt' and direction='desc'/'asc'.
        }

        if (aValue === undefined || bValue === undefined) return 0

        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1
        return 0
    })

    // Update sort when Modified dropdown changes
    const handleModifiedFilterChange = (value: string) => {
        setModifiedFilter(value)
        if (value === 'newest') {
            setSortConfig({ column: 'modifiedAt', direction: 'desc' })
        } else if (value === 'oldest') {
            setSortConfig({ column: 'modifiedAt', direction: 'asc' })
        }
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

            const result = await createFolder(currentPath, name)
            if (result.success) {
                toast.success(result.message)
                const items = await getFiles(currentPath)
                setFiles(items)
            } else {
                toast.error(result.message)
            }
            return
        }

        // Mock remaining types for now or implement file creation action similarly if needed
        const newItem: FileItem = {
            id: Math.random().toString(36).substr(2, 9),
            name: `new_${type}.${type === 'script' ? 'sh' : 'txt'}`,
            type: type as any,
            path: `/home/rahul/new_${type}`,
            owner: 'rahul',
            group: 'researchers',
            modifiedAt: new Date().toISOString(),
            sizeBytes: 0,
            permissions: '-rw-r--r--'
        }
        setFiles([newItem, ...files])
        toast(`Created new ${type} (Mocked)`)
    }

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return

        const formData = new FormData()
        formData.append('file', file)
        formData.append('pathSegments', JSON.stringify(currentPath))

        toast.promise(uploadFile(formData), {
            loading: 'Uploading...',
            success: (data) => {
                // Refresh files
                getFiles(currentPath).then(setFiles)
                return data.message
            },
            error: 'Upload failed'
        })

        // Reset input
        if (fileInputRef.current) fileInputRef.current.value = ''
    }

    const handleDelete = async (fileId: string) => {
        const file = files.find(f => f.id === fileId)
        if (!file) return

        const confirm = window.confirm(`Are you sure you want to delete ${file.name}?`)
        if (!confirm) return

        const result = await deleteItem(file.path)

        if (result.success) {
            setFiles(files.filter(f => f.id !== fileId))
            toast.success(result.message)
            if (selectedFile?.id === fileId) {
                setSelectedFile(null)
                setIsDetailsOpen(false)
            }
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
        // Trigger download via API
        window.open(`/api/download?path=${encodeURIComponent(file.path)}`, '_blank')
    }

    // New handler for Move
    const handleMove = async (file: FileItem) => {
        const destination = window.prompt("Enter destination folder path (e.g. /home/user/Backup):")
        if (!destination) return

        const res = await moveItem(file.path, destination)
        if (res.success) {
            toast.success(res.message)
            loadFiles()
        } else {
            toast.error(res.message)
        }
    }

    // New handler for Favorite
    const handleFavorite = async (file: FileItem) => {
        const res = await toggleFavorite(file.path)
        toast(res.message)
        if (currentCategory === 'favorites') {
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
                loading: 'Creating symlink...',
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
        const confirm = window.confirm(`Stop sharing ${fileName} with ${username}?`)
        if (!confirm) return

        const result = await unshareFile(username, fileName)
        if (result.success) {
            toast.success(result.message)
            // Refresh list
            const outgoing = await getOutgoingShares()
            setOutgoingShares(outgoing)
            setFiles(outgoing)
        } else {
            toast.error(result.message)
        }
    }

    const handlePermissionChange = async (file: FileItem, mode: string) => {
        const result = await changePermissions(file.path, mode)
        if (result.success) {
            toast.success(result.message)
            // Refresh
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
        <div className="flex h-screen bg-background overflow-hidden">
            <Sidebar
                className="hidden md:block w-64 flex-shrink-0"
                currentCategory={currentCategory}
                onCategoryChange={(cat) => setCurrentCategory(cat as any)}
                onNewItem={handleNewItem}
            />

            <div className="flex-1 flex flex-col min-w-0 h-full">
                {/* Header */}
                <header className="border-b bg-card p-4 space-y-4">
                    <div className="flex items-center justify-between gap-4">
                        <h1 className="text-xl font-semibold truncate capitalize">
                            {currentCategory === 'home' ? (currentPath.length > 0 ? currentPath[currentPath.length - 1] : "Home") : currentCategory}
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
                    {currentCategory === 'shared' ? (
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
                    ) : currentCategory === 'trash' ? (
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

            <ShareDialog
                isOpen={isShareOpen}
                onClose={() => setIsShareOpen(false)}
                onConfirm={handleShareConfirm}
                file={fileToShare}
            />
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                className="hidden"
            />
        </div>
    )
}
