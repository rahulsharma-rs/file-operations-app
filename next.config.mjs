/** @type {import('next').NextConfig} */
const nextConfig = {
  // Open OnDemand runs app under a sub-path
  basePath: process.env.PASSENGER_BASE_URI || '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Standalone output is often easier for deployment
  output: 'standalone',
}

export default nextConfig
