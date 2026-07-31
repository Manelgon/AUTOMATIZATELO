import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Casos de Éxito Reales de Automatización con IA",
    description:
        "Sistemas de automatización con IA funcionando en producción: panel de administración de fincas, bot de citas para clínica, SaaS con portal de empleo y más. Casos reales, no promesas.",
    alternates: { canonical: "https://automatizatelo.com/casos-de-exito" },
};

interface Caso {
    sector: string;
    cliente: string;
    titulo: string;
    problema: string;
    solucion: string;
    resultados: string[];
    url?: string;
}

const casos: Caso[] = [
    {
        sector: "Administración de fincas",
        cliente: "Serincosol",
        url: "https://serincosol.com/",
        titulo: "Panel de gestión que lleva la administración diaria de un despacho de fincas",
        problema:
            "Incidencias de vecinos por teléfono y email sin sistema, documentación dispersa y seguimiento manual de cada comunidad.",
        solucion:
            "Panel de gestión a medida: incidencias, comunicaciones con vecinos y documentación de cada comunidad en un solo sitio.",
        resultados: [
            "En producción y uso diario desde enero de 2026",
            "Todas las incidencias registradas y con seguimiento — nada se pierde en un email",
            "El equipo gestiona su día a día completo desde el panel",
        ],
    },
    {
        sector: "Coaching y selección de personal",
        cliente: "Henkoaching — Jennifer Cervera",
        url: "https://henkoaching.com/",
        titulo: "SaaS completo con portal de empleo propio para una consultora de selección",
        problema:
            "Gestionar candidatos y procesos de selección con herramientas genéricas que no encajaban con su forma de trabajar, sin portal propio donde publicar ofertas.",
        solucion:
            "Plataforma a medida: portal de empleo propio, dashboard de gestión, informes y reportes. Además de su web y posicionamiento SEO.",
        resultados: [
            "Portal de empleo propio sin pagar licencias de software genérico",
            "Candidatos, ofertas y procesos centralizados en su plataforma",
            "El código y los datos son suyos, como en todos nuestros proyectos",
        ],
    },
    {
        sector: "Clínicas y salud",
        cliente: "Clínica estética en Ibiza",
        titulo: "Asistente de WhatsApp con IA que agenda las citas de la clínica él solo",
        problema:
            "Recepción saturada al teléfono, citas perdidas por no contestar a tiempo y recordatorios manuales.",
        solucion:
            "Asistente de IA por WhatsApp conectado a la agenda real: propone huecos disponibles, confirma la cita, envía recordatorios y gestiona la lista de espera. Panel interno para el equipo con agenda por profesional.",
        resultados: [
            "Citas agendadas por WhatsApp 24/7 sin intervención humana",
            "Recordatorios automáticos 24h antes con confirmación del paciente",
            "Lista de espera automática: si se libera un hueco, se ofrece a quien esperaba",
            "Cumplimiento RGPD sanitario: consentimientos, registro de auditoría y derechos ARCO",
        ],
    },
    {
        sector: "Educación y comedores escolares",
        cliente: "Empresa de comedores escolares en Cataluña",
        titulo: "Bot de WhatsApp que gestiona las ausencias del comedor de cientos de familias",
        problema:
            "Cada mañana, avalancha de llamadas y mensajes de familias avisando ausencias, con el riesgo de cocinar menús de más o de menos.",
        solucion:
            "Bot de WhatsApp con IA que atiende a las familias: registra ausencias, responde preguntas frecuentes y escala a una persona cuando hace falta.",
        resultados: [
            "Las familias avisan por WhatsApp a cualquier hora, sin llamadas",
            "Ausencias registradas automáticamente en el sistema",
            "Preguntas frecuentes respondidas al momento, sin colapsar a la administración",
        ],
    },
    {
        sector: "Formación online",
        cliente: "AFCademia",
        url: "https://afcademia.com/",
        titulo: "Panel de gestión y automatización para una academia de formación online",
        problema:
            "Gestión de alumnos, contenidos y comunicaciones repartida entre varias herramientas desconectadas.",
        solucion:
            "Panel de gestión a medida para la academia y automatización de sus procesos, además de producción de cursos e-learning (SCORM).",
        resultados: [
            "Gestión de la academia centralizada en su propio panel",
            "Cursos publicados en plataformas e-learning estándar",
        ],
    },
];

export default function CasosDeExitoPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />

            <div className="container" style={{ marginTop: "8rem", paddingBottom: "5rem", maxWidth: 980, flexGrow: 1 }}>
                <h1 className="section-title" style={{ marginBottom: "0.5rem" }}>
                    Casos de <span className="premium-gradient">éxito</span>
                </h1>
                <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
                    Sistemas funcionando en producción, no promesas. Esto es lo que hemos construido
                    para negocios reales.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    {casos.map((caso) => (
                        <article
                            key={caso.titulo}
                            style={{
                                background: "var(--color-card-bg)",
                                border: "1px solid var(--color-border)",
                                borderRadius: "var(--radius-lg)",
                                boxShadow: "var(--shadow-card)",
                                padding: "2rem",
                            }}
                        >
                            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.8rem", marginBottom: "1rem" }}>
                                <span style={{
                                    fontSize: "0.75rem", fontWeight: 700,
                                    padding: "0.25rem 0.7rem", borderRadius: 999,
                                    background: "rgba(249,115,22,0.1)", color: "var(--color-primary)",
                                    textTransform: "uppercase", letterSpacing: "0.04em",
                                }}>
                                    {caso.sector}
                                </span>
                                {caso.url ? (
                                    <a href={caso.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-text-muted)", textDecoration: "none" }}>
                                        {caso.cliente} ↗
                                    </a>
                                ) : (
                                    <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-text-muted)" }}>
                                        {caso.cliente}
                                    </span>
                                )}
                            </div>

                            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--color-text-main)", margin: "0 0 1.2rem" }}>
                                {caso.titulo}
                            </h2>

                            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "0.8rem" }}>
                                <strong style={{ color: "var(--color-text-main)" }}>El problema:</strong> {caso.problema}
                            </p>
                            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                                <strong style={{ color: "var(--color-text-main)" }}>La solución:</strong> {caso.solucion}
                            </p>

                            <ul style={{ paddingLeft: 0, margin: 0, listStyle: "none" }}>
                                {caso.resultados.map((r) => (
                                    <li key={r} style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "0.4rem" }}>
                                        <i className="fa-solid fa-check" style={{ color: "var(--color-primary)", marginRight: "0.6rem" }} />
                                        {r}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div style={{ textAlign: "center", marginTop: "3rem" }}>
                    <p style={{ color: "var(--color-text-muted)", marginBottom: "1.2rem", fontSize: "1.05rem" }}>
                        ¿Quieres saber qué automatizaríamos en tu negocio?
                    </p>
                    <Link
                        href="/#contact"
                        className="btn btn-primary"
                        style={{ background: "var(--color-primary)", color: "#fff", textDecoration: "none", padding: "0.9rem 1.8rem", borderRadius: 12, fontWeight: 700, display: "inline-block" }}
                    >
                        Pide tu auditoría gratuita de 30 minutos
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
