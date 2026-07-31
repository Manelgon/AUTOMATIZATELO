export const dynamic = "force-static";

const content = `# Automatizatelo

> Agencia de automatización con IA para pymes, con base en Barcelona y servicio en toda España. Dirigida por Manel Méndez González. Chatbots de WhatsApp, CRM y paneles a medida, y flujos automatizados con precio cerrado, pago por hitos y sin permanencia. Auditoría gratuita de 30 minutos.

Datos clave:
- Contacto: info@automatizatelo.com · +34 678 39 91 82
- Precios públicos: automatización puntual desde 500 €, sistema de negocio desde 2.000 €, automatización completa desde 8.000 €
- El cliente conserva el código y los datos de todo lo que construimos
- Herramientas según el caso: no dependemos de una sola plataforma

## Páginas principales

- [Inicio](https://automatizatelo.com/): qué automatizamos, metodología en 5 pasos, precios y preguntas frecuentes
- [Blog](https://automatizatelo.com/blog): guías prácticas sobre automatización e IA para pymes

## Soluciones por sector

- [Automatización para clínicas y salud](https://automatizatelo.com/automatizacion-clinicas): agenda automática, recordatorios de citas y reducción de citas perdidas
- [Automatización para e-commerce](https://automatizatelo.com/automatizacion-ecommerce): seguimiento de pedidos y soporte automático
- [Automatización para empresas de servicios](https://automatizatelo.com/automatizacion-empresas-servicios): CRM y seguimiento automático de leads
- [Automatización para administradores de fincas](https://automatizatelo.com/automatizacion-administradores-fincas): panel de incidencias, comunicaciones con vecinos y documentación, en uso diario en despachos reales desde enero de 2026

## Servicios

- [Automatización de procesos](https://automatizatelo.com/servicios/automatizacion): facturas y documentos sin picar datos (y generación automática de los tuyos), seguimiento de clientes, avisos y reportes automáticos
- [Formación en IA para empresas](https://automatizatelo.com/servicios/formacion-ia-empresas): talleres in-company, gobernanza y cursos e-learning (SCORM); cubre la alfabetización en IA que exige el art. 4 del Reglamento Europeo de IA
- [Casos de éxito](https://automatizatelo.com/casos-de-exito): sistemas reales en producción, con detalle de problema, solución y resultados

## Quién está detrás

- [Sobre Manel Méndez González](https://automatizatelo.com/sobre-mi): fundador de Automatizatelo; sistemas reales en producción para clínicas, administración de fincas, selección de personal y formación

## Legal

- [Aviso legal](https://automatizatelo.com/aviso-legal)
- [Protección de datos](https://automatizatelo.com/proteccion-datos)
`;

export function GET() {
    return new Response(content, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
}
