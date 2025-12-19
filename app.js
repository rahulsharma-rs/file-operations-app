const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

// Detect Passenger / Open OnDemand
const isOOD = process.env.PASSENGER_BASE_URI ? true : false

// Force production under Passenger
if (isOOD) {
    process.env.NODE_ENV = 'production'
    process.env.NEXT_TELEMETRY_DISABLED = '1'
}

const dev = process.env.NODE_ENV !== 'production' // Better check since we might set production above
const hostname = '0.0.0.0'
const port = parseInt(process.env.PORT, 10) || 3000

async function startServer() {
    console.log('Starting Next.js under Open OnDemand')
    console.log('Base path: /pun/dev/file-manager')
    const username = require('os').userInfo().username
    console.log(`Current User: ${username}`)
    console.log(`NODE_ENV=${process.env.NODE_ENV}, dev=${dev}`)

    // Log startup to persistent debug file
    logSystemInfo()

    const app = next({ dev, hostname, port })
    const handle = app.getRequestHandler()

    await app.prepare()

    createServer(async (req, res) => {
        try {
            const parsedUrl = parse(req.url, true)
            await handle(req, res, parsedUrl)
        } catch (err) {
            console.error(err)
            res.statusCode = 500
            res.end('Internal Server Error')
        }
    }).listen(port, () => {
        console.log(`> Ready via Passenger`)
    })
}

function logSystemInfo() {
    try {
        const fs = require('fs')
        const path = require('path')
        const os = require('os')
        const userInfo = os.userInfo()
        const logPath = path.join(os.homedir(), 'hpc_app_debug.log')

        const logData = {
            timestamp: new Date().toISOString(),
            process: {
                pid: process.pid,
                uid: process.getuid ? process.getuid() : 'N/A',
                gid: process.getgid ? process.getgid() : 'N/A',
                cwd: process.cwd(),
                execPath: process.execPath,
                version: process.version
            },
            user: {
                username: userInfo.username,
                uid: userInfo.uid,
                gid: userInfo.gid,
                shell: userInfo.shell,
                homedir: userInfo.homedir
            },
            environment: {
                USER: process.env.USER,
                LOGNAME: process.env.LOGNAME,
                HOME: process.env.HOME,
                NODE_ENV: process.env.NODE_ENV,
                PASSENGER_BASE_URI: process.env.PASSENGER_BASE_URI,
                // Add any other relevant OOD/Passenger vars if known, getting all might be too much noise
            }
        }

        const msg = JSON.stringify(logData, null, 2) + '\n----------------------------------------\n'
        fs.appendFileSync(logPath, msg)
        console.log(`[Startup] Detailed system info logged to ${logPath}`)
    } catch (err) {
        console.error('[Startup] Failed to write system info log:', err)
    }
}

startServer().catch(err => {
    console.error('Failed to start server:', err)
    process.exit(1)
})
