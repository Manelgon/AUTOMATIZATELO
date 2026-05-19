import type { Metadata } from "next";
import SectorPage, { SectorPageProps } from "@/components/SectorPage";
import { buildSectorSchema } from "@/lib/sectorSchema";

export const metadata: Metadata = {
    title: "Automatización para Empresas de Servicios | CRM, leads y seguimiento IA",
    description: "Automatiza captación, seguimiento de leads, propuestas y facturación para tu empresa de servicios. Cada lead respondido en menos de 5 minutos. Auditoría gratis.",
    alternates: { canonical: "https://automatizatelo.com/automatizacion-empresas-servicios" },
    openGraph: {
        title: "Automatización para Empresas de Servicios B2B",
        description: "Cada lead respondido en menos de 5 min. Seguimiento automático hasta cierre.",
        url: "https://automatizatelo.com/automatizacion-empresas-servicios",
    },
};

const props: SectorPageProps = {
    sector: "Empresas de Servicios",
    sectorSlug: "automatizacion-empresas-servicios",
    icon: "fa-briefcase",
    color: "#22c55e",
    heroKicker: "Servicios profesionales y B2B",
    heroTitle: <>Automatiza tu empresa de servicios: <span className="premium-gradient">cierra más leads sin contratar a nadie</span></>,
    heroSubtitle: "Captación, calificación, propuesta, seguimiento y facturación — todo conectado y automático. Cada lead recibe respuesta en menos de 5 minutos, 24/7.",
    painPoints: [
        { icon: "fa-user-clock", text: "Leads que esperan días para una primera respuesta" },
        { icon: "fa-clipboard-list", text: "Propuestas redactadas a mano una por una" },
        { icon: "fa-rotate-left", text: "Seguimientos que dependen de la memoria del comercial" },
        { icon: "fa-file-invoice-dollar", text: "Facturación manual mes a mes" },
        { icon: "fa-database", text: "Datos del cliente repartidos en Excel, email y memoria" },
        { icon: "fa-chart-line", text: "Sin métricas reales de pipeline ni ratios de cierre" },
    ],
    solutions: [
        { icon: "fa-bolt", title: "Captación y respuesta en menos de 5 minutos", description: "Lead llega → entra en CRM → IA califica → envía email personalizado + agenda llamada. Sin esperar al comercial." },
        { icon: "fa-file-contract", title: "Propuestas generadas en 1 clic", description: "Plantillas inteligentes que se rellenan solas según los datos del lead. Una propuesta profesional en 2 min, no 2h." },
        { icon: "fa-bell", title: "Seguimientos automáticos hasta cierre", description: "Secuencias por email + WhatsApp que se adaptan a la fase del lead. No se pierde nadie, no se hostiga a nadie." },
        { icon: "fa-receipt", title: "Facturación recurrente automática", description: "Cuotas mensuales, hitos por proyecto, recordatorios de impago. Tu cuenta de explotación al día sin tocar Excel." },
    ],
    results: [
        { stat: "<5 min", label: "Tiempo medio primera respuesta a lead" },
        { stat: "+25%", label: "Ratio de cierre con seguimiento automático" },
        { stat: "−12h", label: "Liberadas al comercial cada semana" },
    ],
    faqs: [
        { question: "¿Con qué CRMs trabajáis?", answer: "HubSpot, Pipedrive, Zoho, Salesforce, Notion como CRM, y CRMs custom vía API. Si tu equipo ya usa algo, lo aprovechamos antes que cambiarlo." },
        { question: "¿La IA puede calificar leads correctamente?", answer: "Sí, con reglas que tú defines (sector, tamaño empresa, presupuesto, urgencia) más enriquecimiento automático con datos públicos. La IA descarta cold leads y eleva los calientes." },
        { question: "¿Funciona para autónomos o solo empresas grandes?", answer: "Funciona para ambos. Para autónomos lo simplificamos: 1 flujo, 1 herramienta CRM, 1 secuencia. Para empresas, integraciones más complejas." },
        { question: "¿Cuánto cuesta?", answer: "Desde 500€ para flujo de captación + respuesta automática. Sistema CRM completo desde 2.000€. Auditoría gratis para tu caso." },
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
