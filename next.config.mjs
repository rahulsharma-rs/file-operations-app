/** @type {import('next').NextConfig} */

// 🔒 HARD-CODE Open OnDemand base path
// Only used if specifically set in environment, otherwise default to OOD path for local dev
const basePath = process.env.PASSENGER_BASE_URI || '/pun/dev/file-manager'

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
