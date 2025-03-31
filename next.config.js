/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cpt-webp',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
