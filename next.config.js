/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    newNextLinkBehavior: true
  },
  trailingSlash: false
}

module.exports = nextConfig;
