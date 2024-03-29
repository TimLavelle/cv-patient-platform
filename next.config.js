/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'kh'],
    defaultLocale: 'en',
  },
  experimental: {
    newNextLinkBehavior: true,
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"]
  },
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
}

module.exports = nextConfig;
