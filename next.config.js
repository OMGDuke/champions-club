/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.callofduty.com'
      },
      {
        protocol: 'https',
        hostname: 'avatars.akamai.steamstatic.com'
      }
    ]
  }
}

module.exports = nextConfig
