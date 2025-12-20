import sqlite3 from 'sqlite3'
import path from 'path'
import os from 'os'
import fs from 'fs'

const DB_PATH = path.join(os.homedir(), '.file-manager.db')

// Ensure db file exists or create it
if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, '')
}

const db = new sqlite3.Database(DB_PATH)

// Configure timeout for SQLite to wait for locks (30 seconds)
db.configure('busyTimeout', 30000)

// Initialize schema
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS jobs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT NOT NULL,
            target_path TEXT NOT NULL,
            target_user TEXT NOT NULL,
            permissions TEXT,
            slurm_job_id TEXT,
            status TEXT DEFAULT 'pending',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `)
})

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

export function insertJob(job: Omit<JobRecord, 'id' | 'created_at'>): Promise<number> {
    return new Promise((resolve, reject) => {
        db.run(
            `INSERT INTO jobs (type, target_path, target_user, permissions, slurm_job_id, status) VALUES (?, ?, ?, ?, ?, ?)`,
            [job.type, job.target_path, job.target_user, job.permissions, job.slurm_job_id, job.status],
            function (err) {
                if (err) reject(err)
                else resolve(this.lastID)
            }
        )
    })
}

export function updateJobStatus(id: number, status: string, slurmId?: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const sql = slurmId
            ? `UPDATE jobs SET status = ?, slurm_job_id = ? WHERE id = ?`
            : `UPDATE jobs SET status = ? WHERE id = ?`
        const params = slurmId ? [status, slurmId, id] : [status, id]

        db.run(sql, params, (err) => {
            if (err) reject(err)
            else resolve()
        })
    })
}

export function getJobs(): Promise<JobRecord[]> {
    return new Promise((resolve, reject) => {
        db.all<JobRecord>(`SELECT * FROM jobs ORDER BY created_at DESC`, (err, rows) => {
            if (err) reject(err)
            else resolve(rows)
        })
    })
}
