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
      },
      { protocol: 'https', hostname: 'static.wikia.nocookie.net' },
      { protocol: 'https', hostname: 'cdn.discordapp.com' }
    ]
  }
}

module.exports = nextConfig
