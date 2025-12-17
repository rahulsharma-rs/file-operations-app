/** @type {import('next').NextConfig} */
const isOOD = process.env.PASSENGER_BASE_URI ? true : false
const basePath = process.env.PASSENGER_BASE_URI || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Open OnDemand runs app under a sub-path
  basePath: basePath,
  // Ensure assets are loaded from the correct subpath
  assetPrefix: basePath,

  // Hide the "N" dev indicator
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
  // Standalone output is often easier for deployment but conflicts with valid custom server usage locally sometimes.
  // We'll trust the standard build for now as we use app.js.
  // output: 'standalone',
}

export default nextConfig
