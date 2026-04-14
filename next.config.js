/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict Mode double-mounts components in dev, which causes WebGL context
  // loss when Spline/Three.js is used (Chrome blocks the second context).
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
