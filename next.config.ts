import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      // Sector retirado: la URL vieja (indexada) redirige de forma permanente al home
      {
        source: '/automatizacion-restaurantes',
        destination: '/',
        permanent: true,
      },
    ];
  },
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
