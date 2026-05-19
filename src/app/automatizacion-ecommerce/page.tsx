import type { Metadata } from "next";
import SectorPage, { SectorPageProps } from "@/components/SectorPage";
import { buildSectorSchema } from "@/lib/sectorSchema";

export const metadata: Metadata = {
    title: "Automatización para E-commerce | Seguimiento, soporte IA y recuperación de carritos",
    description: "Automatiza seguimiento de pedidos, soporte al cliente con IA, recuperación de carritos y emails post-venta. Más ventas con menos personal. Auditoría gratis.",
    alternates: { canonical: "https://automatizatelo.com/automatizacion-ecommerce" },
    openGraph: {
        title: "Automatización para E-commerce con IA",
        description: "Más ventas, menos tickets de soporte, cero carritos abandonados.",
        url: "https://automatizatelo.com/automatizacion-ecommerce",
    },
};

const props: SectorPageProps = {
    sector: "E-commerce",
    sectorSlug: "automatizacion-ecommerce",
    icon: "fa-bag-shopping",
    color: "#0ea5e9",
    heroKicker: "Tiendas online",
    heroTitle: <>Automatiza tu tienda online: <span className="premium-gradient">+ventas, –tickets de soporte</span></>,
    heroSubtitle: "Recupera carritos abandonados con IA, responde dudas de pedidos en segundos y conecta tu tienda con tu CRM sin que se pierda un solo cliente.",
    painPoints: [
        { icon: "fa-cart-arrow-down", text: "Carritos abandonados que no recuperas" },
        { icon: "fa-headset", text: "Tickets de soporte repetitivos ('¿dónde está mi pedido?')" },
        { icon: "fa-envelopes-bulk", text: "Emails post-venta manuales o inexistentes" },
        { icon: "fa-rotate", text: "Devoluciones gestionadas a mano una por una" },
        { icon: "fa-link-slash", text: "Tienda, CRM y email marketing desconectados" },
        { icon: "fa-star", text: "Reseñas de producto que nunca llegan a pedirse" },
    ],
    solutions: [
        { icon: "fa-cart-shopping", title: "Recuperación de carritos con IA", description: "Email + WhatsApp personalizado en función del producto abandonado. Cupón solo si es necesario. Recupera entre 10-25% de carritos perdidos." },
        { icon: "fa-comments", title: "Bot de soporte multicanal", description: "Estado del pedido, política de devoluciones, tallas, stock — el bot resuelve el 70% de tickets. Tu equipo solo atiende lo complejo." },
        { icon: "fa-envelope-circle-check", title: "Flujos post-venta automáticos", description: "Confirmación → seguimiento envío → pedido entregado → reseña → cross-sell. Todo sin tocar un email manual." },
        { icon: "fa-database", title: "Tienda ↔ CRM ↔ email marketing conectados", description: "Sincronización en tiempo real entre Shopify/WooCommerce/PrestaShop, tu CRM y Mailchimp/Klaviyo/Brevo." },
    ],
    results: [
        { stat: "+15%", label: "Carritos recuperados con flujos IA" },
        { stat: "−70%", label: "Tickets de soporte manual" },
        { stat: "×2", label: "Reseñas de producto recogidas" },
    ],
    faqs: [
        { question: "¿Funciona con Shopify, WooCommerce y PrestaShop?", answer: "Sí, son las 3 plataformas que más automatizamos. También Magento, BigCommerce y tiendas custom vía API. Si vendes online, lo integramos." },
        { question: "¿Cuánto puedo recuperar de carritos abandonados?", answer: "Depende del sector y ticket medio. Tiendas que pasan de no tener flujo a tener uno bien diseñado suelen recuperar entre el 10-25% de los carritos abandonados en los primeros 90 días." },
        { question: "¿El bot puede gestionar devoluciones?", answer: "Sí. Recoge motivo, foto si es necesaria, genera la etiqueta de devolución y notifica al equipo logístico. Cliente y operario alineados sin emails de ida y vuelta." },
        { question: "¿Cuánto cuesta?", answer: "Desde 500€ para una recuperación de carritos básica. Sistema completo (carritos + soporte + post-venta + CRM) desde 2.000€. Auditoría gratis." },
    ],
};

const schema = buildSectorSchema(props);

export default function Page() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <SectorPage {...props} />
        </>
    );
}
