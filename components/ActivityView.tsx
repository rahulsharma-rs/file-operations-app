import { useState, useEffect } from 'react'
import { getJobHistory, revokeJob } from '@/app/actions'
import { JobRecord } from '@/app/lib/db'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { RotateCcw, RefreshCw } from 'lucide-react'
import { toast } from 'sonner'

export function ActivityView() {
    const [jobs, setJobs] = useState<JobRecord[]>([])
    const [loading, setLoading] = useState(true)

    const loadJobs = async () => {
        setLoading(true)
        try {
            const history = await getJobHistory()
            setJobs(history)
        } catch (e) {
            console.error("Failed to load jobs", e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadJobs()
    }, [])

    const handleUndo = async (job: JobRecord) => {
        if (!confirm("This will submit a new job to reverse this action. Continue?")) return

        const res = await revokeJob(job.id, job.type, job.target_path, job.target_user)
        if (res.success) {
            toast.success(res.message)
            loadJobs()
        } else {
            toast.error(res.message)
        }
    }

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Job Activity</h2>
                <Button variant="outline" size="sm" onClick={loadJobs}>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refresh
                </Button>
            </div>

            <div className="border rounded-md">
                <table className="w-full text-sm">
                    <thead className="bg-muted text-muted-foreground">
                        <tr>
                            <th className="p-3 text-left">Time</th>
                            <th className="p-3 text-left">Action</th>
                            <th className="p-3 text-left">Target</th>
                            <th className="p-3 text-left">User</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Slurm ID</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map(job => (
                            <tr key={job.id} className="border-t hover:bg-muted/50">
                                <td className="p-3 whitespace-nowrap">
                                    {new Date(job.created_at).toLocaleString()}
                                </td>
                                <td className="p-3">
                                    <Badge variant={job.type === 'acl_add' ? 'default' : 'destructive'}>
                                        {job.type === 'acl_add' ? 'Share' : 'Unshare'}
                                    </Badge>
                                </td>
                                <td className="p-3 font-mono text-xs truncate max-w-[200px]" title={job.target_path}>
                                    {job.target_path}
                                </td>
                                <td className="p-3">{job.target_user}</td>
                                <td className="p-3">
                                    <Badge variant={job.status === 'failed' ? 'destructive' : 'secondary'}>
                                        {job.status}
                                    </Badge>
                                </td>
                                <td className="p-3 font-mono">{job.slurm_job_id || '-'}</td>
                                <td className="p-3">
                                    {job.type === 'acl_add' && (
                                        <Button size="icon" variant="ghost" title="Undo Share" onClick={() => handleUndo(job)}>
                                            <RotateCcw className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                                        </Button>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {jobs.length === 0 && !loading && (
                            <tr>
                                <td colSpan={7} className="p-8 text-center text-muted-foreground">
                                    No activity recorded yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
