const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

// ---- Passenger / Open OnDemand detection ----
const isOOD = !!process.env.PASSENGER_BASE_URI

// ---- HARD-CODE Passenger environment safely ----
if (isOOD) {
    process.env.NODE_ENV = 'production'
    process.env.NEXT_TELEMETRY_DISABLED = '1'
}

// ---- Dev mode only if explicitly running locally ----
const dev = process.env.NODE_ENV === 'development'

// ---- Host / Port ----
const hostname = '0.0.0.0'
const port = parseInt(process.env.PORT, 10) || 3000

async function startServer() {
    console.log(`Starting server on port ${port}`)
    console.log(`NODE_ENV=${process.env.NODE_ENV}`)
    console.log(`dev=${dev}`)
    console.log(`PASSENGER_BASE_URI=${process.env.PASSENGER_BASE_URI || '(none)'}`)

    // IMPORTANT: do NOT manually load next.config.mjs
    const app = next({ dev, hostname, port })
    const handle = app.getRequestHandler()

    await app.prepare()

    createServer(async (req, res) => {
        try {
            const parsedUrl = parse(req.url, true)
            await handle(req, res, parsedUrl)
        } catch (err) {
            console.error('Error handling request:', err)
            res.statusCode = 500
            res.end('Internal Server Error')
        }
    })
        .once('error', (err) => {
            console.error('Server error:', err)
            process.exit(1)
        })
        .listen(port, () => {
            console.log(`> Ready (Passenger=${isOOD})`)
        })
}

startServer().catch((err) => {
    console.error('Failed to start server:', err)
    process.exit(1)
})
