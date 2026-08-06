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
      // Giro a implantación de IA (ago-2026): sectores retirados del foco
      {
        source: '/automatizacion-clinicas',
        destination: '/',
        permanent: true,
      },
      {
        source: '/automatizacion-ecommerce',
        destination: '/',
        permanent: true,
      },
      // URLs de la web antigua que Google aún recuerda (404 en Search Console)
      {
        source: '/servicios/desarrollo-web-crm',
        destination: '/servicios/paneles',
        permanent: true,
      },
      {
        source: '/servicios/ia-chatbots',
        destination: '/servicios/chatbots',
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
