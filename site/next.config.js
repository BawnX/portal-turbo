/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

const withTM = require('next-transpile-modules')(['ui'])

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es"
  }
})

// module.exports = nextConfig
