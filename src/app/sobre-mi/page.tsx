import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: { absolute: "Manel Méndez González · Automatizatelo" },
    description:
        "Manel Méndez González implanta la IA en pymes: forma equipos, deja el cumplimiento del AI Act en regla y construye sistemas que ya funcionan a diario.",
    alternates: { canonical: "https://automatizatelo.com/sobre-mi" },
};

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Manel Méndez González",
    "url": "https://automatizatelo.com/sobre-mi",
    "jobTitle": "Fundador",
    "worksFor": {
        "@type": "Organization",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "knowsAbout": [
        "Implantación de IA en pymes",
        "Formación en IA y gobernanza",
        "Cumplimiento del Reglamento Europeo de IA (AI Act)",
        "Automatización de procesos",
        "Chatbots de WhatsApp",
        "CRM y paneles de gestión a medida",
    ],
    "sameAs": [
        "https://www.linkedin.com/company/automatizatelo",
        "https://www.instagram.com/automatizatelo.ia",
    ],
};

const construido = [
    {
        num: "01",
        titulo: "Cursos de IA producidos y en venta",
        desc: "Cursos e-learning completos publicados en plataformas estándar (SCORM) y formación in-company en uso de IA y gobernanza — la alfabetización que exige el Art. 4 del Reglamento Europeo, con su evidencia documental.",
    },
    {
        num: "02",
        titulo: "Paneles de gestión para administradores de fincas",
        desc: "Serincosol y otros despachos gestionan a diario incidencias, comunicaciones con vecinos y documentación desde paneles construidos a medida.",
    },
    {
        num: "03",
        titulo: "Asistente de WhatsApp para una clínica estética",
        desc: "Agenda citas él solo: propone huecos reales, envía recordatorios, gestiona lista de espera y cumple el RGPD sanitario con registro de auditoría.",
    },
    {
        num: "04",
        titulo: "SaaS completo con portal de empleo propio",
        desc: "Para Henkoaching (Jennifer Cervera): plataforma de coaching y selección con portal de empleo, dashboard e informes. Y su web y SEO.",
    },
    {
        num: "05",
        titulo: "Bot de comedores escolares por WhatsApp",
        desc: "Cientos de familias avisan ausencias y resuelven dudas por WhatsApp, sin colapsar a la administración de la empresa.",
    },
];

const garantias = [
    "Precio cerrado",
    "Pago por hitos",
    "Sin permanencia",
    "El código y los datos, tuyos",
];

export default function SobreMiPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
            />
            <Header />

            {/* Hero con foto de fondo, como el del index */}
            <section className="sm-hero">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/fondo-hero.webp"
                    alt=""
                    aria-hidden="true"
                    className="sm-hero-bg"
                    fetchPriority="high"
                />
                <div className="sm-hero-velo" aria-hidden="true" />

                <div className="container sm-hero-contenido">
                    <span className="kicker-mono" style={{ color: "#f6c39c" }}>Sobre mí</span>
                    <h1 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(2.2rem, 5.5vw, 3.6rem)",
                        fontWeight: 600,
                        lineHeight: 1.08,
                        letterSpacing: "-0.02em",
                        color: "#faf6ef",
                        margin: "1rem 0 1.4rem",
                        textShadow: "0 2px 30px rgba(28,25,23,0.45)",
                    }}>
                        Hola, soy <span style={{ color: "#f6c39c" }}>Manel Méndez</span>
                    </h1>
                    <p style={{ color: "rgba(250,246,239,0.88)", lineHeight: 1.8, fontSize: "1.12rem", maxWidth: 560, marginBottom: "2rem", textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                        Llevo 3 años metido de lleno en la IA aplicada a negocios reales. En ese
                        tiempo he puesto en producción asistentes de WhatsApp, paneles y plataformas
                        que hoy usan a diario despachos, consultoras y academias — y he producido
                        cursos de IA que se venden en plataformas e-learning. Automatizatelo hoy es
                        eso, junto: implanto la IA en tu pyme — formo a tu equipo, dejo el
                        cumplimiento en regla y construyo los sistemas que trabajan solos.
                    </p>
                    <div className="sm-hero-ctas" style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
                        <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1rem", padding: "0.95rem 2rem" }}>
                            Auditoría gratis de 30 min
                        </Link>
                        <a
                            href="https://wa.me/34678399182?text=Hola%20Manel%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20automatizaci%C3%B3n%20con%20IA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                            style={{ color: "#faf6ef", padding: "0.95rem 2rem", border: "1px solid rgba(250,246,239,0.4)", background: "rgba(28,25,23,0.25)", backdropFilter: "blur(8px)", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                        >
                            <i className="fa-brands fa-whatsapp" style={{ color: "#25D366" }}></i>
                            Escríbeme por WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Lo que he construido — filas editoriales */}
            <section style={{ padding: "3.5rem 0" }}>
                <div className="container">
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Lo que he construido</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            Sistemas reales, no diapositivas
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 620 }}>
                            Cada servicio que ofrezco existe porque ya lo he construido para un negocio real.
                        </p>
                    </div>

                    <div>
                        {construido.map((c) => (
                            <div key={c.num} className="sm-fila">
                                <span className="mono-label" style={{ color: "var(--color-text-muted)" }}>{c.num}</span>
                                <div>
                                    <h3 style={{
                                        fontFamily: "var(--font-display, serif)",
                                        fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                                        fontWeight: 600,
                                        color: "var(--color-text-main)",
                                        marginBottom: "0.35rem",
                                        lineHeight: 1.25,
                                    }}>
                                        {c.titulo}
                                    </h3>
                                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, margin: 0, maxWidth: 680 }}>
                                        {c.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link href="/casos" style={{ color: "var(--color-primary)", fontWeight: 600, display: "inline-block", marginTop: "1.8rem" }}>
                        Ver los casos con detalle →
                    </Link>
                </div>
            </section>

            {/* Cómo trabajo + garantías */}
            <section style={{ padding: "4rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="kicker-mono">Cómo trabajo</span>
                    <p style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                        fontWeight: 600,
                        lineHeight: 1.3,
                        color: "var(--color-text-main)",
                        margin: "1rem 0 1.5rem",
                        letterSpacing: "-0.01em",
                    }}>
                        No me caso con ninguna herramienta: elijo la tecnología — o el desarrollo
                        a medida — según lo que tu caso necesite, no lo que a mí me convenga vender.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem 2rem", color: "var(--color-text-muted)" }}>
                        {garantias.map((g) => (
                            <span key={g} className="mono-label">
                                <i className="fa-solid fa-check" style={{ marginRight: "0.5rem", color: "var(--color-primary)" }}></i>
                                {g}
                            </span>
                        ))}
                    </div>
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
                        ¿Hablamos de tu negocio?
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pide tu auditoría gratuita de 30 minutos
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .sm-hero {
                    position: relative;
                    min-height: 78vh;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    padding: calc(var(--header-height) + 3rem) 0 4rem;
                }
                .sm-hero-bg {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: 62% 35%;
                    z-index: 0;
                }
                .sm-hero-velo {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    background:
                        linear-gradient(180deg, rgba(28,25,23,0.42) 0%, rgba(28,25,23,0.2) 45%, rgba(120,53,15,0.22) 100%),
                        radial-gradient(circle at 75% 30%, rgba(234,88,12,0.08), transparent 60%);
                }
                .sm-hero-contenido {
                    position: relative;
                    z-index: 2;
                    width: 100%;
                }
                .sm-fila {
                    display: grid;
                    grid-template-columns: 3.2rem 1fr;
                    gap: 1.2rem;
                    align-items: baseline;
                    padding: 1.4rem 0.3rem;
                    border-top: 1px solid var(--color-border);
                }
                div:last-child > .sm-fila,
                .sm-fila:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                @media (max-width: 900px) {
                    .sm-hero {
                        min-height: 72vh;
                        text-align: center;
                    }
                    .sm-hero-bg {
                        object-position: 68% top;
                    }
                    .sm-hero-contenido p {
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .sm-hero-ctas {
                        justify-content: center;
                    }
                    .sm-fila {
                        grid-template-columns: 1fr;
                        gap: 0.4rem;
                    }
                }
            `}</style>
        </main>
    );
}
