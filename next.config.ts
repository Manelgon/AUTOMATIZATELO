import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'serincosol.com',
      },
      {
        protocol: 'https',
        hostname: 'afcademia.com',
      },
    ],
  },
};

export default nextConfig;
