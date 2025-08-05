
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scitechdaily.com',
      },
      {
        protocol: 'https',
        hostname: 'elearn.nptel.ac.in',
      },
      {
        protocol: 'https',
        hostname: 'www.scnsoft.com',
      }
    ],
  },
};

export default nextConfig;
