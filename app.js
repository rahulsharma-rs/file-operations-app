const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')


const dev = process.env.NODE_ENV === 'development'
const hostname = 'localhost'
const port = parseInt(process.env.PORT, 10) || 3000

async function startServer() {
    console.log(`Starting server on port ${port} (dev=${dev})`)

    // Dynamically import the ESM config
    const conf = (await import('./next.config.mjs')).default

    const app = next({ dev, hostname, port, conf })
    const handle = app.getRequestHandler()

    await app.prepare()

    createServer(async (req, res) => {
        try {
            const parsedUrl = parse(req.url, true)
            await handle(req, res, parsedUrl)
        } catch (err) {
            console.error('Error occurred handling', req.url, err)
            res.statusCode = 500
            res.end('internal server error')
        }
    })
        .once('error', (err) => {
            console.error(err)
            process.exit(1)
        })
        .listen(port, () => {
            console.log(`> Ready on http://${hostname}:${port}`)
        })
}

startServer().catch(err => {
    console.error('Failed to start server:', err)
    process.exit(1)
})
