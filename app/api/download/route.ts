
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import os from 'os'
import { Readable } from 'stream'

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const filePath = searchParams.get('path')

    if (!filePath) {
        return new NextResponse("Missing path", { status: 400 })
    }

    const homeDir = os.homedir()
    // Validate path is within home (simple check)
    // Note: real app should handle symlinks carefully, but 'startsWith' provides basic containment.
    if (!filePath.startsWith(homeDir)) {
        return new NextResponse("Access denied", { status: 403 })
    }

    try {
        const stats = await fs.promises.stat(filePath)
        if (!stats.isFile()) {
            return new NextResponse("Not a file", { status: 400 })
        }

        const stream = fs.createReadStream(filePath)

        // Convert Node stream to Web ReadableStream
        // @ts-ignore
        const readable = Readable.toWeb(stream) as ReadableStream

        const headers = new Headers()
        headers.set('Content-Disposition', `attachment; filename="${path.basename(filePath)}"`)
        headers.set('Content-Length', stats.size.toString())

        return new NextResponse(readable, {
            headers
        })

    } catch (e) {
        console.error(e)
        return new NextResponse("File not found", { status: 404 })
    }
}
