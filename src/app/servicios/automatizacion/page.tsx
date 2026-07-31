import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Automatización de Procesos para Pymes",
    description:
        "Automatizamos facturas, documentos, seguimiento de clientes y reportes de tu pyme. Precio cerrado, sin permanencia y auditoría gratis de 30 minutos.",
    alternates: { canonical: "https://automatizatelo.com/servicios/automatizacion" },
    openGraph: {
        title: "Automatización de Procesos para Pymes",
        description: "Los flujos repetitivos de tu negocio, funcionando solos. Facturas, clientes, reportes.",
        url: "https://automatizatelo.com/servicios/automatizacion",
    },
};

const faqs = [
    {
        question: "¿Qué procesos de mi empresa se pueden automatizar?",
        answer: "Los más habituales: la entrada de facturas y albaranes, el seguimiento de clientes y leads, las respuestas a consultas repetitivas, los avisos y recordatorios, y los informes periódicos. En la auditoría gratuita repasamos tu operativa y te digo cuáles darían retorno primero.",
    },
    {
        question: "¿Cómo funciona la automatización de facturas?",
        answer: "Llega una factura, un albarán o un PDF a tu email, y el sistema lee automáticamente el proveedor, el importe, la fecha y los conceptos, y los registra donde tú trabajes: tu Excel, tu CRM o tu programa de contabilidad. Sin picar datos a mano y sin errores de tecleo.",
    },
    {
        question: "¿Podéis generar facturas, albaranes e informes automáticamente?",
        answer: "Sí. El sistema genera tus documentos — facturas, albaranes, presupuestos, informes en PDF — desde tus propios datos, con tu plantilla y tu marca, y los envía o archiva automáticamente. Lo hacemos en producción: por ejemplo, informes de paciente con diseño propio en el panel de una clínica.",
    },
    {
        question: "¿Con qué herramientas trabajáis? ¿Tengo que cambiar las mías?",
        answer: "Trabajamos con las principales plataformas de automatización del mercado o con desarrollo a medida, según lo que tu caso necesite — no nos casamos con ninguna. Y no tienes que cambiar tus herramientas: conectamos las que ya usas (email, WhatsApp, hojas de cálculo, CRM, plataformas de pago).",
    },
    {
        question: "¿Cuánto cuesta automatizar un proceso?",
        answer: "Una automatización concreta (por ejemplo, la entrada de facturas) desde 500€ con precio cerrado. Automatizar varios procesos del negocio, desde 2.000€. Siempre sin permanencia y con el código y los datos en tu propiedad.",
    },
    {
        question: "¿Cuánto se tarda?",
        answer: "Una automatización puntual suele estar funcionando en unas 2 semanas. Proyectos con varios procesos, según alcance — el plazo se cierra antes de empezar, igual que el precio.",
    },
];

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
    })),
};

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automatización de procesos para pymes",
    "serviceType": "Automatización de procesos de negocio con IA",
    "description": "Automatización de facturas y documentos (lectura y generación), citas y reservas, seguimiento de clientes, avisos, reportes y cumplimiento para pymes. Con la herramienta adecuada o desarrollo a medida.",
    "url": "https://automatizatelo.com/servicios/automatizacion",
    "areaServed": "ES",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
        "telephone": "+34678399182",
    },
};

const flujos = [
    {
        num: "01",
        icon: "fa-file-invoice",
        titulo: "Facturas y documentos, en los dos sentidos",
        desc: "Los que llegan se leen solos y sus datos entran en tu sistema; y los que emites — facturas, albaranes, presupuestos, informes — se generan solos desde tus datos, con tu plantilla. La estrella de la casa: te la contamos entera más abajo.",
        ancla: "#facturas",
    },
    {
        num: "02",
        icon: "fa-calendar-check",
        titulo: "Citas y reservas que se gestionan solas",
        desc: "Confirmaciones, recordatorios 24h antes y lista de espera automática que reofrece los huecos liberados — el mismo sistema que gestiona a diario la agenda de una clínica real.",
    },
    {
        num: "03",
        icon: "fa-user-clock",
        titulo: "Seguimiento de clientes y leads",
        desc: "Cada contacto recibe respuesta en minutos y su seguimiento no depende de la memoria de nadie: recordatorios, secuencias y estados automáticos.",
    },
    {
        num: "04",
        icon: "fa-bell",
        titulo: "Avisos y comunicaciones",
        desc: "Confirmaciones, recordatorios y notificaciones internas por email o WhatsApp, disparadas por lo que pasa en tu negocio — no por alguien que se acuerda.",
    },
    {
        num: "05",
        icon: "fa-chart-column",
        titulo: "Reportes e informes automáticos",
        desc: "El informe semanal que montabas a mano cada lunes, generado y enviado solo — con métricas por equipo, área o servicio, como los paneles que construimos para clínicas y despachos.",
    },
    {
        num: "06",
        icon: "fa-shield-halved",
        titulo: "Cumplimiento y trazabilidad",
        desc: "Registro automático de acciones, purgas de datos por plazos de retención y documentación RGPD generada — el cumplimiento deja de depender de acordarse.",
    },
];

export default function AutomatizacionPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header />

            {/* Hero editorial */}
            <section style={{
                padding: "9rem 0 3.5rem",
                background: "radial-gradient(circle at 20% 20%, rgba(234, 88, 12, 0.07) 0%, transparent 55%)",
            }}>
                <div className="container">
                    <span className="kicker-mono">
                        <i className="fa-solid fa-gears" style={{ marginRight: "0.6rem" }}></i>
                        Servicio · Barcelona y toda España
                    </span>
                    <h1 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(2.2rem, 6vw, 3.6rem)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        color: "var(--color-text-main)",
                        margin: "1rem 0 1.2rem",
                    }}>
                        Automatización de procesos:{" "}<br />
                        <span style={{ color: "var(--color-primary)" }}>recupera +10 horas a la semana</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 600 }}>
                        Las tareas repetitivas de tu pyme — facturas, seguimiento, avisos, informes —
                        funcionando solas. Con la herramienta que tu caso necesite, o a medida:
                        lo que te convenga a ti, no lo que me convenga vender.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.02rem", padding: "1rem 2.25rem" }}>
                        Auditoría gratis de 30 minutos
                    </Link>
                </div>
            </section>

            {/* Qué es + answer capsule */}
            <section style={{ padding: "4rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="kicker-mono">Qué es</span>
                    <p style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
                        fontWeight: 600,
                        lineHeight: 1.35,
                        color: "var(--color-text-main)",
                        margin: "1rem 0 1.2rem",
                        letterSpacing: "-0.01em",
                    }}>
                        Automatizar procesos es hacer que las tareas repetitivas de tu negocio se
                        ejecuten solas, sin errores y sin robarle horas a tu equipo.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        En una pyme española típica, entre facturas, seguimientos, avisos e informes se
                        van <strong style={{ color: "var(--color-text-main)" }}>más de 10 horas a la semana</strong> de
                        trabajo que una máquina hace mejor. Ese es el tiempo que recuperamos.
                    </p>
                </div>
            </section>

            {/* Los 4 flujos — filas editoriales */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Qué automatizamos</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Los cuatro flujos que más tiempo devuelven
                        </h2>
                    </div>

                    {flujos.map((f) => (
                        <div key={f.num} className="au-fila">
                            <span className="mono-label" style={{ color: "var(--color-text-muted)" }}>{f.num}</span>
                            <i className={`fa-solid ${f.icon}`} style={{ color: "var(--color-primary)", fontSize: "1.4rem" }}></i>
                            <div>
                                <h3 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
                                    fontWeight: 600,
                                    color: "var(--color-text-main)",
                                    marginBottom: "0.35rem",
                                    lineHeight: 1.25,
                                }}>
                                    {f.titulo}
                                </h3>
                                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, margin: 0, maxWidth: 640 }}>
                                    {f.desc}
                                    {f.ancla && (
                                        <>
                                            {" "}
                                            <a href={f.ancla} style={{ color: "var(--color-primary)", fontWeight: 600 }}>Ver cómo funciona ↓</a>
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sección estrella: facturas y documentos — franja terracota */}
            <section id="facturas" style={{ padding: "4.5rem 0", background: "linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)" }}>
                <div className="container" style={{ maxWidth: 960 }}>
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Automatizar facturas y documentos</span>
                    <h2 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                        fontWeight: 600,
                        color: "#faf6ef",
                        margin: "0.8rem 0 2rem",
                        lineHeight: 1.2,
                    }}>
                        Los que llegan se leen solos. Los que emites, se generan solos.
                    </h2>

                    <div className="au-doble">
                        {/* De entrada */}
                        <div>
                            <span className="mono-label" style={{ color: "#f6c39c" }}>→ De entrada</span>
                            <p style={{ color: "rgba(250,246,239,0.88)", lineHeight: 1.75, margin: "0.8rem 0 1.4rem" }}>
                                Llega una factura, un albarán o cualquier PDF a tu email — y el sistema lee
                                el proveedor, el importe, la fecha y los conceptos, y los registra donde tú
                                trabajes: tu hoja de cálculo, tu CRM o tu contabilidad. Nadie vuelve a picar
                                datos a mano.
                            </p>
                            <ul className="au-pasos">
                                <li><span>01</span> Llega el documento (email, foto o carpeta)</li>
                                <li><span>02</span> La IA extrae los datos que importan</li>
                                <li><span>03</span> Se registran en tu sistema, sin manos</li>
                            </ul>
                        </div>

                        {/* De salida */}
                        <div>
                            <span className="mono-label" style={{ color: "#f6c39c" }}>← De salida</span>
                            <p style={{ color: "rgba(250,246,239,0.88)", lineHeight: 1.75, margin: "0.8rem 0 1.4rem" }}>
                                Tus facturas, albaranes, presupuestos e informes se generan solos desde tus
                                datos, con tu plantilla y tu marca, y se envían a quien toca. Como los
                                informes con diseño propio que genera el panel que construimos para una
                                clínica real.
                            </p>
                            <ul className="au-pasos">
                                <li><span>01</span> Ocurre el hecho (venta, cita, cierre de mes)</li>
                                <li><span>02</span> El sistema genera el documento con tu plantilla</li>
                                <li><span>03</span> Se envía y se archiva solo</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Preguntas frecuentes
                        </h2>
                    </div>
                    {faqs.map((f) => (
                        <details key={f.question} className="au-faq">
                            <summary>
                                <span>{f.question}</span>
                                <i className="fas fa-chevron-down"></i>
                            </summary>
                            <p style={{ padding: "0 0.4rem 1.5rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0, maxWidth: 720 }}>{f.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* CTA final en melocotón */}
            <section style={{ padding: "4.5rem 0", background: "#f8dfc6", textAlign: "center" }}>
                <div className="container">
                    <p style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)",
                        fontWeight: 600,
                        color: "#1c1917",
                        lineHeight: 1.2,
                        margin: "0 0 1rem",
                        letterSpacing: "-0.02em",
                    }}>
                        ¿Qué proceso automatizamos primero?
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        Me cuentas cómo trabajas y te lo digo en 30 minutos — gratis y sin compromiso.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir mi auditoría gratuita
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .au-fila {
                    display: grid;
                    grid-template-columns: 3rem 2.4rem 1fr;
                    gap: 1rem;
                    align-items: baseline;
                    padding: 1.5rem 0.3rem;
                    border-top: 1px solid var(--color-border);
                }
                .au-fila:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .au-doble {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                }
                .au-pasos {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.7rem;
                }
                .au-pasos li {
                    display: flex;
                    align-items: baseline;
                    gap: 0.8rem;
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.5;
                    font-size: 0.95rem;
                }
                .au-pasos li span {
                    font-family: var(--font-display, serif);
                    font-size: 1.3rem;
                    font-weight: 600;
                    color: #f6c39c;
                    flex-shrink: 0;
                }
                @media (max-width: 800px) {
                    .au-doble {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                }
                .au-faq {
                    border-top: 1px solid var(--color-border);
                }
                .au-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .au-faq summary {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    padding: 1.3rem 0.4rem;
                    cursor: pointer;
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.05rem, 2vw, 1.3rem);
                    font-weight: 600;
                    color: var(--color-text-main);
                    line-height: 1.3;
                    transition: color 0.2s ease, padding-left 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .au-faq summary::-webkit-details-marker {
                    display: none;
                }
                .au-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .au-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .au-faq[open] summary i {
                    transform: rotate(180deg);
                }
                @media (max-width: 600px) {
                    .au-fila {
                        grid-template-columns: 1fr;
                        gap: 0.4rem;
                    }
                }
            `}</style>
        </main>
    );
}
