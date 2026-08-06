import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async redirects() {
    // Mapa completo v1 -> v2: ninguna URL del sitio viejo muere en 404.
    return [
      { source: '/automatizacion-restaurantes', destination: '/', permanent: true },
      { source: '/automatizacion-clinicas', destination: '/', permanent: true },
      { source: '/automatizacion-ecommerce', destination: '/', permanent: true },
      { source: '/automatizacion-academias', destination: '/sectores/academias', permanent: true },
      { source: '/automatizacion-administradores-fincas', destination: '/sectores/administradores-fincas', permanent: true },
      { source: '/automatizacion-empresas-servicios', destination: '/sistemas', permanent: true },
      { source: '/automatizacion-reclutamiento-rrhh', destination: '/sectores/rrhh', permanent: true },
      { source: '/casos-de-exito', destination: '/casos', permanent: true },
      { source: '/formacion-ia-centros-educativos', destination: '/formacion/centros-educativos', permanent: true },
      { source: '/formacion-ia-despachos', destination: '/sectores/despachos', permanent: true },
      { source: '/formacion-ia-directivos', destination: '/formacion/directivos', permanent: true },
      { source: '/formacion-obligatoria-ai-act', destination: '/formacion/ai-act', permanent: true },
      { source: '/servicios/auditoria-ia', destination: '/cumplimiento', permanent: true },
      { source: '/servicios/automatizacion', destination: '/sistemas', permanent: true },
      { source: '/servicios/automatizacion-ventas', destination: '/sistemas/ventas', permanent: true },
      { source: '/servicios/chatbots', destination: '/sistemas/chatbots-whatsapp', permanent: true },
      { source: '/servicios/chatbots-whatsapp', destination: '/sistemas/chatbots-whatsapp', permanent: true },
      { source: '/servicios/desarrollo-web-crm', destination: '/sistemas/crm', permanent: true },
      { source: '/servicios/paneles', destination: '/sistemas/paneles', permanent: true },
      { source: '/servicios/extraccion-datos-documentos', destination: '/sistemas/documentos', permanent: true },
      { source: '/servicios/formacion-ia-empresas', destination: '/formacion', permanent: true },
      { source: '/servicios/ia-chatbots', destination: '/sistemas/chatbots-whatsapp', permanent: true },
      { source: '/servicios/implantacion-crm', destination: '/sistemas/crm', permanent: true },
      { source: '/servicios/implantacion-ia', destination: '/cumplimiento', permanent: true },
      { source: '/servicios/integracion-sistemas', destination: '/sistemas/integracion', permanent: true },
      { source: '/servicios/produccion-cursos-scorm', destination: '/formacion', permanent: true },
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
