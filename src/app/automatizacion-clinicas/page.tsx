import type { Metadata } from "next";
import SectorPage, { SectorPageProps } from "@/components/SectorPage";
import { buildSectorSchema } from "@/lib/sectorSchema";

export const metadata: Metadata = {
    title: "Automatización para Clínicas y Centros de Salud | Citas y recordatorios IA",
    description: "Automatiza citas, recordatorios SMS/WhatsApp, encuestas post-visita y reportes para tu clínica. Reduce ausencias hasta un 70%. Auditoría gratis.",
    alternates: { canonical: "https://automatizatelo.com/automatizacion-clinicas" },
    openGraph: {
        title: "Automatización para Clínicas y Centros Sanitarios",
        description: "Cero citas olvidadas, cero huecos vacíos en agenda. Tus pacientes confirman solos.",
        url: "https://automatizatelo.com/automatizacion-clinicas",
    },
};

const props: SectorPageProps = {
    sector: "Clínicas",
    sectorSlug: "automatizacion-clinicas",
    icon: "fa-stethoscope",
    color: "#6366f1",
    heroKicker: "Clínicas y centros de salud",
    heroTitle: <>Automatiza tu clínica: <span className="premium-gradient">cero ausencias, cero huecos vacíos</span></>,
    heroSubtitle: "Citas que se confirman solas, recordatorios automáticos por SMS o WhatsApp y encuestas post-visita. Cumple con LOPD-GDD desde el primer día.",
    painPoints: [
        { icon: "fa-calendar-times", text: "Pacientes que no aparecen y dejan hueco vacío" },
        { icon: "fa-phone-volume", text: "Recepción saturada de llamadas para confirmar" },
        { icon: "fa-envelope-open", text: "Recordatorios manuales que se olvidan" },
        { icon: "fa-file-medical", text: "Solicitudes de cita por canales descoordinados" },
        { icon: "fa-star-half-stroke", text: "Sin encuestas de satisfacción ni reseñas Google" },
        { icon: "fa-shield-halved", text: "Dudas sobre cumplimiento RGPD y datos sanitarios" },
    ],
    solutions: [
        { icon: "fa-calendar-check", title: "Agenda inteligente con recordatorios", description: "El paciente confirma o cancela desde el SMS/WhatsApp. Si cancela, el hueco se ofrece al siguiente en lista de espera. Reduce ausencias hasta un 70%." },
        { icon: "fa-whatsapp", title: "Solicitud de cita por WhatsApp", description: "El bot ofrece huecos disponibles según el profesional y servicio. Si es una consulta médica, deriva a recepción humana." },
        { icon: "fa-star", title: "Encuestas y reseñas automáticas", description: "Tras la visita, el paciente recibe encuesta + invitación a dejar reseña en Google. Más reputación local sin esfuerzo." },
        { icon: "fa-lock", title: "Conforme LOPD-GDD desde el día 1", description: "Almacenamiento en servidores europeos, cifrado en tránsito y reposo, consentimientos explícitos. Cumplimiento por diseño." },
    ],
    results: [
        { stat: "−70%", label: "Reducción de no-shows" },
        { stat: "+3★", label: "Más reseñas Google al mes" },
        { stat: "20h", label: "Liberadas a recepción cada semana" },
    ],
    faqs: [
        { question: "¿Es compatible con mi software de gestión (Doctoralia, Doctoplus, etc.)?", answer: "Sí. Integramos con los principales softwares clínicos del mercado vía API o webhook. Si tu sistema no expone API, podemos hacerlo a través de calendarios compartidos." },
        { question: "¿Cumple con la normativa de datos sanitarios?", answer: "Sí. Diseñamos las automatizaciones cumpliendo LOPD-GDD y RGPD. Los datos sanitarios se almacenan cifrados y los consentimientos se gestionan de forma trazable." },
        { question: "¿Puede gestionar varios profesionales y especialidades?", answer: "Sí. Multi-agenda con reglas por profesional, especialidad, duración de cita y huecos predefinidos. Los pacientes solo ven lo que pueden reservar." },
        { question: "¿Cuánto cuesta?", answer: "Desde 500€ para una clínica con un profesional. Soluciones multi-agenda con reseñas e integración avanzada, desde 2.000€. Auditoría gratis para tu caso." },
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
