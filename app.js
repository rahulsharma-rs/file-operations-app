const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

// Detect Passenger / Open OnDemand
const isOOD = true // 🔒 hardcode for this deployment

// Force production under Passenger
if (isOOD) {
    process.env.NODE_ENV = 'production'
    process.env.NEXT_TELEMETRY_DISABLED = '1'
}

const dev = process.env.NODE_ENV === 'development'
const hostname = '0.0.0.0'
const port = parseInt(process.env.PORT, 10) || 3000

async function startServer() {
    console.log('Starting Next.js under Open OnDemand')
    console.log('Base path: /pun/dev/file-manager')
    console.log(`Current User: ${require('os').userInfo().username}`)
    console.log(`NODE_ENV=${process.env.NODE_ENV}, dev=${dev}`)

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

startServer().catch(err => {
    console.error('Failed to start server:', err)
    process.exit(1)
})
