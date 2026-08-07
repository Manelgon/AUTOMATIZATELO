import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SistemasTabs from "@/components/SistemasTabs";

export const metadata: Metadata = {
    title: "Paneles y Dashboards a Medida para Pymes",
    description:
        "Paneles de gestión a medida: clientes, incidencias, agenda y métricas en un solo sitio. En uso diario en despachos reales. Desde 2.000€, el código es tuyo.",
    alternates: { canonical: "https://automatizatelo.com/sistemas/paneles" },
    openGraph: {
        title: "Tu negocio entero, en un panel hecho para ti",
        description: "Sin licencias por usuario, sin adaptarte tú al software: el panel se adapta a tu negocio. El código es tuyo.",
        url: "https://automatizatelo.com/sistemas/paneles",
    },
};

const faqs = [
    {
        question: "¿Por qué un panel a medida en vez de un software del mercado?",
        answer: "Porque el software del mercado te obliga a trabajar como él quiere, cobra por usuario para siempre y trae cien funciones que no usas. Un panel a medida hace exactamente lo que tu negocio necesita, lo pagas una vez, y el código y los datos son tuyos. Cuando el genérico te encaja, te lo digo y te ahorras el proyecto — pero cuando no encaja, adaptarte tú al software sale más caro que hacerlo a tu medida.",
    },
    {
        question: "¿Esto está probado en negocios reales?",
        answer: "Sí — es de lo que más construyo. Despachos de administración de fincas gestionan su día a día (incidencias, comunicaciones con vecinos, documentación) en paneles míos desde enero de 2026; una academia online gestiona su operación en otro; y una clínica estética lleva agenda, historia clínica y cumplimiento RGPD sanitario en el suyo. Los tienes en casos de éxito.",
    },
    {
        question: "¿Cuánto cuesta un panel a medida?",
        answer: "Un panel de gestión entra normalmente en el proyecto de automatización de área, desde 2.000€; uno que cubra toda la operación de la empresa, en el rango del proyecto integral desde 8.000€. Precio y plazo cerrados por escrito antes de empezar, pago por hitos y sin cuotas por usuario.",
    },
    {
        question: "¿Y cuando quiera cambiar algo dentro de un año?",
        answer: "El panel es tuyo: código, datos y accesos. Puedes evolucionarlo conmigo (mantenimiento opcional), con tu equipo o con cualquier otro desarrollador — está documentado para eso. Sin rehenes: esa es la diferencia con el software de alquiler.",
    },
    {
        question: "¿Se conecta con lo que ya usamos?",
        answer: "Esa es la gracia: el panel se integra con tu facturación, tu agenda, tu WhatsApp o tu web para que los datos entren solos y no haya que picar nada dos veces. Un panel donde hay que meter todo a mano es una hoja de cálculo con pretensiones.",
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
    "name": "Paneles y dashboards de gestión a medida",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "areaServed": "España",
    "description": "Paneles de gestión a medida para pymes: clientes, incidencias, agenda, documentación y métricas en un solo sitio, integrados con las herramientas existentes. Desde 2.000€, propiedad del cliente.",
};

const capacidades = [
    {
        num: "01",
        titulo: "Todo tu negocio en un sitio",
        desc: "Clientes, incidencias, agenda, documentos y tareas — se acabó saltar entre cinco herramientas y tres hojas de cálculo para saber qué está pasando.",
    },
    {
        num: "02",
        titulo: "Los datos entran solos",
        desc: "Integrado con tu facturación, tu email, tu WhatsApp o tu web: lo que llega se registra sin que nadie lo pique. La IA clasifica y prioriza por ti.",
    },
    {
        num: "03",
        titulo: "Métricas que se entienden",
        desc: "Lo que necesitas ver para decidir — facturación, carga de trabajo, incidencias abiertas — en tiempo real y sin montar informes a mano.",
    },
    {
        num: "04",
        titulo: "Tuyo, con sus papeles en regla",
        desc: "Código y datos en tu propiedad, accesos por rol y cumplimiento RGPD desde el diseño. Sin licencias por usuario ni letra pequeña.",
    },
];

export default function PanelesPage() {
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
                        <i className="fa-solid fa-chart-line" style={{ marginRight: "0.6rem" }}></i>
                        Paneles y dashboards a medida
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
                        Tu negocio entero,{" "}<br />
                        <span style={{ color: "var(--color-primary)" }}>en un panel hecho para ti</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 640 }}>
                        No te adaptes tú al software: que el software se adapte a tu negocio.
                        Paneles de gestión a medida que ya usan a diario despachos, academias
                        y clínicas — y que son propiedad de quien los paga.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.02rem", padding: "1rem 2.25rem" }}>
                        Contarte mi caso — 30 min gratis
                    </Link>
                </div>
            </section>

            {/* Salta entre las piezas de sistemas sin volver atras */}
            <SistemasTabs />

            {/* Answer capsule */}
            <section style={{ padding: "4rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="kicker-mono">En corto</span>
                    <p style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
                        fontWeight: 600,
                        lineHeight: 1.35,
                        color: "var(--color-text-main)",
                        margin: "1rem 0 1.2rem",
                        letterSpacing: "-0.01em",
                    }}>
                        Paneles de control y dashboards personalizados desde 2.000€: clientes,
                        incidencias, agenda y métricas de tu negocio en un solo sitio, integrados
                        con lo que ya usas. Sin licencias por usuario, y el código y los datos son tuyos.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        En producción real: despachos de administración de fincas los usan a diario
                        desde enero de 2026, y también una academia online y una clínica estética
                        con su historia clínica y su RGPD sanitario.
                    </p>
                </div>
            </section>

            {/* Qué hace — franja terracota */}
            <section style={{ padding: "4.5rem 0", background: "linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Qué hace</span>
                    <h2 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                        fontWeight: 600,
                        color: "#faf6ef",
                        margin: "0.8rem 0 2rem",
                        lineHeight: 1.2,
                    }}>
                        El centro de mando de tu pyme
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                        {capacidades.map((c) => (
                            <div key={c.num}>
                                <span className="mono-label" style={{ color: "#f6c39c" }}>{c.num}</span>
                                <h3 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "1.25rem",
                                    fontWeight: 600,
                                    color: "#faf6ef",
                                    margin: "0.5rem 0 0.5rem",
                                    lineHeight: 1.3,
                                }}>
                                    {c.titulo}
                                </h3>
                                <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.6, margin: 0, fontSize: "0.95rem" }}>
                                    {c.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.7, marginTop: "2rem", maxWidth: 720 }}>
                        Los paneles reales, con problema y resultados, en{" "}
                        <Link href="/casos" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            casos de éxito
                        </Link>
                        — y el ejemplo más completo, en el{" "}
                        <Link href="/sectores/administradores-fincas" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            panel para administradores de fincas
                        </Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Preguntas frecuentes
                        </h2>
                    </div>
                    {faqs.map((f) => (
                        <details key={f.question} className="pn-faq" name="faq-paneles">
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
                        ¿Cómo sería el panel de tu negocio?
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos gratis: me cuentas cómo trabajáis y te digo qué debería tener — y si te compensa.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir mis 30 minutos
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .pn-faq {
                    border-top: 1px solid var(--color-border);
                }
                .pn-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .pn-faq summary {
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
                .pn-faq summary::-webkit-details-marker {
                    display: none;
                }
                .pn-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .pn-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .pn-faq[open] summary i {
                    transform: rotate(180deg);
                }
                @media (max-width: 600px) {
                    h1 br { display: none; }
                }
            `}</style>
        </main>
    );
}
