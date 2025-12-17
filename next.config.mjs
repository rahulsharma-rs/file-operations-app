/** @type {import('next').NextConfig} */

// Open OnDemand provides this automatically
const basePath = process.env.PASSENGER_BASE_URI || ''

const nextConfig = {
  basePath,
  assetPrefix: basePath,

  // Required for HPC / OOD
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
