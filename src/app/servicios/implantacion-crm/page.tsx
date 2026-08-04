import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Implantación de CRM para Pymes",
    description:
        "Implanto el CRM adecuado en tu pyme: elección sin comisiones, configuración, migración de datos y automatizaciones para que se rellene solo. Desde 900€.",
    alternates: { canonical: "https://automatizatelo.com/servicios/implantacion-crm" },
    openGraph: {
        title: "Implantación de CRM: que tu equipo lo use de verdad",
        description: "Elección sin comisiones, migración, automatizaciones y formación. El CRM que se rellena solo no muere en un cajón.",
        url: "https://automatizatelo.com/servicios/implantacion-crm",
    },
};

const faqs = [
    {
        question: "¿Qué CRM me recomiendas: HubSpot, Pipedrive, Zoho…?",
        answer: "El más barato que cumpla con lo que tu negocio necesita — y lo digo en serio porque no cobro comisión de ninguno. Si trabajáis simple, a veces basta un Pipedrive o incluso Notion bien montado; si hay equipo comercial y marketing, un HubSpot o Zoho. Y si ya usáis uno, lo primero es ver si se puede aprovechar antes de cambiar nada. La recomendación sale de tu caso, no de mi bolsillo.",
    },
    {
        question: "¿Cuánto cuesta implantar un CRM?",
        answer: "La puesta en marcha — elección, configuración, migración de tus datos y formación básica del equipo — desde 900€. Con la automatización comercial completa (leads entrando solos, seguimiento automático, avisos y reportes), desde 2.000€ como proyecto de área. Las licencias del CRM las pagas directamente al proveedor, sin sobreprecio. Precio cerrado por escrito antes de empezar.",
    },
    {
        question: "¿Podéis migrar mis datos desde Excel u otro CRM?",
        answer: "Sí — es parte del trabajo, no un extra. Clientes, contactos, historial y oportunidades pasan al sistema nuevo ordenados y sin duplicados. Un CRM que empieza vacío, o con los datos sucios, nace muerto: la migración bien hecha es la mitad de la adopción.",
    },
    {
        question: "Ya compramos un CRM una vez y nadie lo usaba. ¿Por qué esta vez sería distinto?",
        answer: "Porque el problema casi nunca es el software: es que el CRM del montón hay que rellenarlo a mano, y a las dos semanas el equipo vuelve al Excel. Mi implantación ataca justo eso: los leads y los emails entran solos, el seguimiento se dispara solo y el equipo recibe formación con sus casos reales. Un CRM que se alimenta solo sí se usa — porque da más de lo que pide.",
    },
    {
        question: "¿Y si ningún CRM del mercado encaja con mi negocio?",
        answer: "Entonces te lo digo — y existe el plan B: un CRM o panel a medida, tuyo en código y datos, sin licencias por usuario. Es lo que construí para una consultora de selección (con portal de empleo incluido) y lo que uso cuando el negocio tiene procesos que el software genérico no contempla. Lo tienes en la página de paneles a medida.",
    },
    {
        question: "¿De quién son los datos?",
        answer: "Tuyos, siempre. Configuro el CRM con tu cuenta de empresa, te dejo los accesos de administrador y documento lo montado. Si mañana quieres cambiar de herramienta o de proveedor, te llevas todo — esa es la regla de la casa.",
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
    "name": "Implantación de CRM para pymes",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "areaServed": "España",
    "description": "Implantación de CRM en pymes: elección sin comisiones, configuración, migración de datos, automatizaciones que lo alimentan solo y formación del equipo. Desde 900€.",
    "offers": [
        { "@type": "Offer", "name": "Puesta en marcha de CRM", "price": "900", "priceCurrency": "EUR", "description": "Precio desde; se cierra en la propuesta." },
    ],
};

const herramientas = [
    { nombre: "HubSpot", detalle: "El completo: comercial + marketing en uno. Su versión gratuita da para empezar más de lo que parece." },
    { nombre: "Pipedrive", detalle: "El favorito de los equipos comerciales pequeños: pipeline visual y cero grasa." },
    { nombre: "Zoho CRM", detalle: "Mucha función por poco dinero — si ya usáis otras apps de Zoho, juega en casa." },
    { nombre: "Notion como CRM", detalle: "Para operaciones simples: flexible, barato y suficiente más veces de las que se cree." },
    { nombre: "CRM a medida", detalle: "Cuando el genérico no encaja: tuyo en código y datos, sin licencias por usuario. Es la página de paneles a medida." },
];

const pasos = [
    {
        num: "01",
        titulo: "Elección con criterio",
        desc: "Miro cómo vendéis y gestionáis clientes hoy, y te digo qué CRM encaja — el más barato que cumpla. Sin comisiones de ningún proveedor, y aprovechando el que ya tengas si se puede.",
    },
    {
        num: "02",
        titulo: "Configuración y migración",
        desc: "Pipeline a tu medida, campos que tu negocio usa de verdad, y tus datos migrados desde Excel o el CRM anterior — ordenados y sin duplicados.",
    },
    {
        num: "03",
        titulo: "Automatizaciones que lo alimentan",
        desc: "La clave de que se use: los leads de la web y el email entran solos, el seguimiento se dispara solo, los avisos llegan solos. Un CRM que hay que rellenar a mano muere en dos semanas.",
    },
    {
        num: "04",
        titulo: "Formación del equipo",
        desc: "Tu equipo aprende con sus casos reales, no con un manual. Y queda documentado, para que las nuevas incorporaciones no dependan de la memoria de nadie.",
    },
];

export default function ImplantacionCrmPage() {
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
                        <i className="fa-solid fa-address-book" style={{ marginRight: "0.6rem" }}></i>
                        Implantación de CRM
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
                        Implantación de CRM:{" "}<br />
                        <span style={{ color: "var(--color-primary)" }}>que tu equipo lo use de verdad</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 660 }}>
                        Comprar un CRM es fácil; que no muera en un cajón, es lo difícil. Yo me
                        encargo del camino entero: elegirlo sin comisiones, configurarlo, migrar
                        tus datos y — la clave — automatizarlo para que se rellene solo.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.02rem", padding: "1rem 2.25rem" }}>
                        Empezar con 30 minutos gratis
                    </Link>
                </div>
            </section>

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
                        Implantación de CRM en tu pyme desde 900€: elección sin comisiones,
                        configuración, migración de datos y formación. Con la automatización
                        comercial completa — leads y seguimiento entrando solos — desde 2.000€.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        Las licencias las pagas directamente al proveedor, sin sobreprecio. Yo no
                        vendo software: vendo que tu equipo deje de gestionar clientes en Excel.
                    </p>
                </div>
            </section>

            {/* Con qué trabajo */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Con qué trabajo</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            Los CRM — elegidos por tu caso, no por moda
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                            No cobro comisión de ninguno: la recomendación sale de cómo vende tu negocio y de lo que ya usáis.
                        </p>
                    </div>
                    {herramientas.map((h) => (
                        <div key={h.nombre} className="ic-fila">
                            <span className="ic-nombre">{h.nombre}</span>
                            <span className="ic-detalle">{h.detalle}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Qué incluye — franja terracota */}
            <section style={{ padding: "4.5rem 0", background: "linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Qué incluye</span>
                    <h2 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                        fontWeight: 600,
                        color: "#faf6ef",
                        margin: "0.8rem 0 2rem",
                        lineHeight: 1.2,
                    }}>
                        Del Excel al CRM que se alimenta solo, en cuatro pasos
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
                        {pasos.map((p) => (
                            <div key={p.num}>
                                <span className="mono-label" style={{ color: "#f6c39c" }}>{p.num}</span>
                                <h3 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "1.2rem",
                                    fontWeight: 600,
                                    color: "#faf6ef",
                                    margin: "0.5rem 0 0.5rem",
                                    lineHeight: 1.3,
                                }}>
                                    {p.titulo}
                                </h3>
                                <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.6, margin: 0, fontSize: "0.95rem" }}>
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.7, marginTop: "2rem", maxWidth: 720 }}>
                        El paso 03 es la diferencia con "instalar un CRM": conecta con la{" "}
                        <Link href="/servicios/automatizacion" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            automatización de procesos
                        </Link>
                        . Y si ningún CRM del mercado te encaja, existe el{" "}
                        <Link href="/servicios/paneles" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            CRM a medida
                        </Link>
                        , tuyo en código y datos.
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
                        <details key={f.question} className="ic-faq">
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
                        ¿Tus clientes siguen viviendo en un Excel?
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos gratis: miro cómo gestionáis clientes hoy y te digo qué CRM te encaja — y si te hace falta uno.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir mis 30 minutos
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .ic-fila {
                    display: grid;
                    grid-template-columns: 220px 1fr;
                    gap: 1.5rem;
                    align-items: baseline;
                    padding: 1.3rem 0.3rem;
                    border-top: 1px solid var(--color-border);
                }
                .ic-fila:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .ic-nombre {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.15rem, 2vw, 1.45rem);
                    font-weight: 600;
                    color: var(--color-text-main);
                }
                .ic-detalle {
                    color: var(--color-text-muted);
                    line-height: 1.6;
                    font-size: 0.95rem;
                }
                .ic-faq {
                    border-top: 1px solid var(--color-border);
                }
                .ic-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .ic-faq summary {
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
                .ic-faq summary::-webkit-details-marker {
                    display: none;
                }
                .ic-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .ic-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .ic-faq[open] summary i {
                    transform: rotate(180deg);
                }
                @media (max-width: 700px) {
                    .ic-fila {
                        grid-template-columns: 1fr;
                        gap: 0.3rem;
                    }
                }
                @media (max-width: 600px) {
                    h1 br { display: none; }
                }
            `}</style>
        </main>
    );
}
