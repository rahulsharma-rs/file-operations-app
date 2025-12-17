/** @type {import('next').NextConfig} */

// 🔒 HARD-CODE Open OnDemand base path
const OOD_BASE_PATH = '/pun/dev/file-manager'

// Allow local override if needed
const basePath = process.env.NEXT_BASE_PATH || OOD_BASE_PATH

const nextConfig = {
  basePath,
  assetPrefix: basePath,

  images: {
    unoptimized: true,
  },

  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
