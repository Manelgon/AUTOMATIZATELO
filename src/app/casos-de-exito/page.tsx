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

            {/* Encabezado editorial */}
            <section style={{
                paddingTop: "9rem",
                paddingBottom: "1rem",
                background: "radial-gradient(circle at 20% 20%, rgba(234, 88, 12, 0.06) 0%, transparent 50%)",
            }}>
                <div className="container">
                    <span className="kicker-mono">Casos de éxito</span>
                    <h1 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        color: "var(--color-text-main)",
                        margin: "1rem 0 1rem",
                    }}>
                        Sistemas en producción, <span style={{ color: "var(--color-primary)" }}>no promesas</span>
                    </h1>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, fontSize: "1.1rem", maxWidth: 600, margin: 0 }}>
                        Esto es lo que he construido para negocios reales — con lo que hacía daño,
                        lo que montamos y lo que se puede comprobar.
                    </p>
                </div>
            </section>

            {/* Casos como bloques editoriales */}
            <section style={{ padding: "2.5rem 0 4rem", flexGrow: 1 }}>
                <div className="container">
                    {casos.map((caso, i) => (
                        <article key={caso.titulo} className="ce-bloque">
                            <div className="ce-meta">
                                <span className="mono-label" style={{ color: "var(--color-text-muted)" }}>
                                    {String(i + 1).padStart(2, "0")} / {String(casos.length).padStart(2, "0")}
                                </span>
                                <span className="mono-label" style={{ color: "var(--color-primary)" }}>
                                    {caso.sector}
                                </span>
                                {caso.url ? (
                                    <a href={caso.url} target="_blank" rel="noopener noreferrer" className="ce-cliente">
                                        {caso.cliente} ↗
                                    </a>
                                ) : (
                                    <span className="ce-cliente" style={{ cursor: "default" }}>{caso.cliente}</span>
                                )}
                            </div>

                            <h2 style={{
                                fontFamily: "var(--font-display, serif)",
                                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                                fontWeight: 600,
                                lineHeight: 1.2,
                                color: "var(--color-text-main)",
                                margin: "1rem 0 1.6rem",
                                maxWidth: 820,
                            }}>
                                {caso.titulo}
                            </h2>

                            <div className="ce-cuerpo">
                                <div>
                                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
                                        <strong style={{ color: "var(--color-text-main)" }}>El problema:</strong> {caso.problema}
                                    </p>
                                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
                                        <strong style={{ color: "var(--color-text-main)" }}>La solución:</strong> {caso.solucion}
                                    </p>
                                </div>
                                <ul className="ce-resultados">
                                    {caso.resultados.map((r) => (
                                        <li key={r}>
                                            <i className="fa-solid fa-check"></i>
                                            {r}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA final en melocotón */}
            <section style={{ padding: "4.5rem 0", background: "#f8dfc6" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <p style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)",
                        fontWeight: 600,
                        color: "#1c1917",
                        lineHeight: 1.2,
                        margin: "0 0 1.8rem",
                        letterSpacing: "-0.02em",
                    }}>
                        ¿Quieres saber qué automatizaríamos en tu negocio?
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pide tu auditoría gratuita de 30 minutos
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .ce-bloque {
                    border-top: 1px solid var(--color-border);
                    padding: 2.6rem 0;
                }
                .ce-bloque:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .ce-meta {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 0.8rem 1.5rem;
                }
                .ce-cliente {
                    font-family: var(--font-display, serif);
                    font-size: 1.05rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                }
                a.ce-cliente:hover {
                    color: var(--color-primary);
                }
                .ce-cuerpo {
                    display: grid;
                    grid-template-columns: 1.1fr 0.9fr;
                    gap: 2.5rem;
                    align-items: start;
                }
                .ce-resultados {
                    list-style: none;
                    padding: 1.4rem 1.6rem;
                    margin: 0;
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-md);
                    display: flex;
                    flex-direction: column;
                    gap: 0.7rem;
                }
                .ce-resultados li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.7rem;
                    color: var(--color-text-muted);
                    line-height: 1.55;
                    font-size: 0.95rem;
                }
                .ce-resultados i {
                    color: var(--color-primary);
                    margin-top: 0.25rem;
                    font-size: 0.8rem;
                    flex-shrink: 0;
                }
                @media (max-width: 900px) {
                    .ce-cuerpo {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                }
            `}</style>
        </main>
    );
}
