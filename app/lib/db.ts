
import path from 'path'
import os from 'os'
import fs from 'fs/promises'
import { existsSync } from 'fs'

// New File-Based DB Path
const DB_FILE = path.join(os.homedir(), '.file-manager-jobs.jsonl')
const LOG_PATH = path.join(os.homedir(), 'hpc_app_debug.log')

// Replicate logging to avoid circular dependency with hpc.ts
async function logDbEvent(level: 'INFO' | 'ERR', message: string) {
    const timestamp = new Date().toISOString()
    const logLine = `[${timestamp}] [DB] [${level}] ${message}\n`
    try {
        await fs.appendFile(LOG_PATH, logLine)
    } catch (e) {
        console.error("Failed to write to debug log:", e)
    }
}

export type JobRecord = {
    id: number
    type: 'acl_add' | 'acl_remove'
    target_path: string
    target_user: string
    permissions: string | null
    slurm_job_id: string | null
    status: string
    created_at: string
}

// Ensure DB file exists
async function ensureDbFile() {
    if (!existsSync(DB_FILE)) {
        try {
            await fs.writeFile(DB_FILE, '')
            await logDbEvent('INFO', `Created new job history file at ${DB_FILE}`)
        } catch (e: any) {
            await logDbEvent('ERR', `Failed to create job history file: ${e.message}`)
        }
    }
}

// Initialize on module load (fire and forget)
ensureDbFile()

export async function insertJob(job: Omit<JobRecord, 'id' | 'created_at'>): Promise<number> {
    const id = Date.now() // Simple distinct ID for this use case
    const record: JobRecord = {
        ...job,
        id,
        created_at: new Date().toISOString()
    }

    try {
        const line = JSON.stringify(record) + '\n'
        await fs.appendFile(DB_FILE, line)
        await logDbEvent('INFO', `Inserted job ${id} (${job.type})`)
        return id
    } catch (e: any) {
        await logDbEvent('ERR', `Failed to insert job ${id}: ${e.message}`)
        throw e
    }
}

export async function updateJobStatus(id: number, status: string, slurmId?: string): Promise<void> {
    try {
        // We append an "update" record. 
        // Logic: The reader must merge these. 
        // For simplicity in this append-only model, we write a special "update" entry
        // OR we just write the full modified record (which is easier for 'getJobs' deduplication if we just pick the latest by ID).
        // Let's go with: Write a partial update object that we manually merge on read.

        const updateRecord = {
            id,
            is_update: true,
            status,
            slurm_job_id: slurmId,
            updated_at: new Date().toISOString()
        }

        const line = JSON.stringify(updateRecord) + '\n'
        await fs.appendFile(DB_FILE, line)
        await logDbEvent('INFO', `Updated job ${id} status to ${status}`)
    } catch (e: any) {
        await logDbEvent('ERR', `Failed to update job ${id}: ${e.message}`)
        throw e
    }
}

export async function getJobs(): Promise<JobRecord[]> {
    try {
        await ensureDbFile()
        const content = await fs.readFile(DB_FILE, 'utf-8')
        const lines = content.split('\n').filter(line => line.trim().length > 0)

        const jobMap = new Map<number, JobRecord>()

        for (const line of lines) {
            try {
                const data = JSON.parse(line)

                if (data.is_update) {
                    // It's an update to an existing job
                    if (jobMap.has(data.id)) {
                        const existing = jobMap.get(data.id)!
                        jobMap.set(data.id, {
                            ...existing,
                            status: data.status,
                            slurm_job_id: data.slurm_job_id || existing.slurm_job_id
                        })
                    }
                } else {
                    // It's a new job record (or a full re-write if we supported that)
                    jobMap.set(data.id, data)
                }
            } catch (e) {
                // corrupt line, ignore
            }
        }

        // Return array sorted by creation date descending
        return Array.from(jobMap.values())
            .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

    } catch (e: any) {
        await logDbEvent('ERR', `Failed to read jobs: ${e.message}`)
        return []
    }
}
