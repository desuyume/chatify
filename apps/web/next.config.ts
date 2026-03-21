import type { NextConfig } from 'next'
import path from 'path'

const scssPath = path.resolve('./src/assets/scss')

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'static-cdn.jtvnw.net',
        port: '',
        pathname: '/**'
      }
      // {
      //   protocol: 'https',
      //   hostname: 's3.ru1.storage.beget.cloud',
      //   port: '',
      //   pathname: '/**'
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.chatify.ru',
      //   port: '',
      //   pathname: '/**'
      // }
    ]
  },
  sassOptions: {
    loadPaths: [scssPath],
    additionalData: `@use 'core' as *;`
  }
}

export default nextConfig
