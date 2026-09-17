import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // La demo del curso vive fuera de public/ para que no se sirva sin puerta.
  // Vercel no la ve al trazar el bundle: hay que decírselo a mano.
  outputFileTracingIncludes: {
    '/demo/ia-para-la-pyme/curso/[[...ruta]]': ['./private/demo-curso/**/*'],
  },
  async redirects() {
    // Mapa completo v1 -> v2: ninguna URL del sitio viejo muere en 404.
    return [
      // Search Console (may-ago 2026): estas tres viejas siguen recibiendo
      // impresiones — 321 solo las de restaurantes — y aterrizaban en la home,
      // que no habla de nada de eso. Cada una va ahora a la pieza que resuelve
      // lo que buscan: reservas y citas al bot, pedidos al ciclo de ventas.
      // La de restaurantes ya tiene destino propio: el artículo que responde
      // exactamente lo que se busca — cómo automatizar las reservas.
      { source: '/automatizacion-restaurantes', destination: '/blog/como-automatizar-las-reservas-de-un-restaurante', permanent: true },
      { source: '/automatizacion-clinicas', destination: '/sistemas/chatbots-whatsapp', permanent: true },
      { source: '/automatizacion-ecommerce', destination: '/sistemas/ventas', permanent: true },
      { source: '/automatizacion-academias', destination: '/sectores/academias', permanent: true },
      { source: '/automatizacion-administradores-fincas', destination: '/sectores/administradores-fincas', permanent: true },
      { source: '/automatizacion-empresas-servicios', destination: '/sistemas', permanent: true },
      { source: '/automatizacion-reclutamiento-rrhh', destination: '/sectores/rrhh', permanent: true },
      { source: '/casos-de-exito', destination: '/casos', permanent: true },
      { source: '/formacion-ia-centros-educativos', destination: '/formacion', permanent: true }, // destino original: /formacion/centros-educativos (ver bloque «Educación oculta»)
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
      // --- Educación oculta (sep-2026) -------------------------------------
      // La oferta para centros educativos y alumnado se ha retirado de
      // producción (src/lib/flags.ts · EDUCACION_VISIBLE). Las páginas siguen
      // en el repo pero devuelven 404, así que los enlaces antiguos y lo ya
      // indexado se llevan a /formacion en vez de morir en un 404.
      // Para recuperar la línea: poner el flag en true y BORRAR este bloque.
      { source: '/formacion/centros-educativos', destination: '/formacion', permanent: true },
      { source: '/formacion/alumnado', destination: '/formacion', permanent: true },
      // ---------------------------------------------------------------------
      // Fusion ago-2026: como-trabajo vive dentro de sobre-mi
      { source: '/como-trabajo', destination: '/sobre-mi', permanent: true },
      // La demo nació en /demo-curso y se mudó a /demo/<curso>: los enlaces
      // que ya se enviaron a clientes siguen funcionando.
      { source: '/demo-curso', destination: '/demo/ia-para-la-pyme', permanent: true },
      { source: '/demo-curso/curso/:ruta*', destination: '/demo/ia-para-la-pyme/curso/:ruta*', permanent: true },
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
