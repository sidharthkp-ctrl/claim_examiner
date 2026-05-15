/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@neutrinos/claims-ui'],
  turbopack: {
    resolveAlias: {
      '@neutrinos/claims-ui': './packages/claims-ui/dist/index.js',
    },
  },
}

export default nextConfig
