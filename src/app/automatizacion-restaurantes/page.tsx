import type { Metadata } from "next";
import SectorPage, { SectorPageProps } from "@/components/SectorPage";
import { buildSectorSchema } from "@/lib/sectorSchema";

export const metadata: Metadata = {
    title: "Automatización para Restaurantes | Reservas, pedidos y WhatsApp 24/7",
    description: "Automatiza reservas, pedidos, confirmaciones por WhatsApp y reportes para tu restaurante. Sin dobles reservas, sin llamadas perdidas. Auditoría gratis.",
    alternates: { canonical: "https://automatizatelo.com/automatizacion-restaurantes" },
    openGraph: {
        title: "Automatización para Restaurantes con IA",
        description: "Gestiona reservas y pedidos 24/7 sin que nadie tenga que descolgar el teléfono.",
        url: "https://automatizatelo.com/automatizacion-restaurantes",
    },
};

const props: SectorPageProps = {
    sector: "Restaurantes",
    sectorSlug: "automatizacion-restaurantes",
    icon: "fa-utensils",
    color: "#f97316",
    heroKicker: "Restaurantes y hostelería",
    heroTitle: <>Automatiza tu restaurante: <span className="premium-gradient">reservas, pedidos y WhatsApp 24/7</span></>,
    heroSubtitle: "Cero dobles reservas, cero llamadas perdidas, cero pedidos olvidados. Un sistema que gestiona tu sala mientras tu equipo cocina.",
    painPoints: [
        { icon: "fa-phone-slash", text: "Llamadas de reservas que pierdes en hora punta" },
        { icon: "fa-calendar-xmark", text: "Dobles reservas y mesas en blanco" },
        { icon: "fa-comment-dots", text: "Mensajes de WhatsApp sin contestar" },
        { icon: "fa-clipboard", text: "Pedidos copiados a mano desde la web" },
        { icon: "fa-bell-slash", text: "Recordatorios manuales (o nunca enviados)" },
        { icon: "fa-chart-line", text: "Sin datos reales de ocupación, ticket medio o no-shows" },
    ],
    solutions: [
        { icon: "fa-calendar-check", title: "Bot de reservas 24/7", description: "Tus clientes reservan por WhatsApp o web en 30s. Confirmación instantánea + recordatorio el día anterior. Reduce no-shows hasta un 60%." },
        { icon: "fa-utensils", title: "Pedidos a domicilio sin fricción", description: "Web → cocina → repartidor → cliente. Todo conectado, todo automático. Tu equipo solo cocina." },
        { icon: "fa-headset", title: "Atención al cliente en WhatsApp", description: "Bot que responde menú, horarios, alérgenos, ubicación. Deriva a humano solo cuando hace falta." },
        { icon: "fa-chart-pie", title: "Reportes operativos semanales", description: "Cada lunes recibes ocupación, ticket medio, no-shows y top platos. Datos para decidir, no intuición." },
    ],
    results: [
        { stat: "−60%", label: "No-shows con recordatorios automáticos" },
        { stat: "24/7", label: "Reservas sin necesidad de personal" },
        { stat: "+15h", label: "Liberadas a la semana en sala" },
    ],
    faqs: [
        { question: "¿Funciona con mi software de TPV/reservas actual?", answer: "Conectamos con la mayoría de TPVs (CoverManager, ElTenedor, Mr.Wonderful, Bookline, etc.) y sistemas de pedidos. Si usas algo digital, normalmente se integra." },
        { question: "¿Cuánto tarda en estar operativo?", answer: "Un sistema básico de reservas + WhatsApp suele estar listo en 2-3 semanas. Soluciones completas con pedidos y reportes, 4-6 semanas." },
        { question: "¿Qué pasa si un cliente quiere hablar con una persona?", answer: "El bot detecta consultas complejas y deriva automáticamente al móvil o email de tu equipo, dentro del horario que definas." },
        { question: "¿Cuánto cuesta?", answer: "Desde 500€ para un bot de reservas básico, 2.000€ para sistema con pedidos y reportes. Auditoría gratis para decirte qué necesitas tú." },
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
