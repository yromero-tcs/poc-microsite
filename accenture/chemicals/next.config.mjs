/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: './',
  transpilePackages: ['@poc-microsite/components'],
  images: {
    unoptimized: true
  },
};

export default nextConfig;
