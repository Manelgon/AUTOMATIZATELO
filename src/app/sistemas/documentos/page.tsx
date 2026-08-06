import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SistemasTabs from "@/components/SistemasTabs";

export const metadata: Metadata = {
    title: "Extracción de Datos de Documentos con IA",
    description:
        "Facturas, albaranes y documentos que se leen solos: la IA extrae los datos y los registra en tu sistema sin picar nada. Desde 500€.",
    alternates: { canonical: "https://automatizatelo.com/sistemas/documentos" },
    openGraph: {
        title: "Documentos que se leen solos: extracción de datos con IA",
        description: "Llega el documento, la IA extrae los datos, tu sistema los registra. Sin picar nada, con revisión donde toca.",
        url: "https://automatizatelo.com/sistemas/documentos",
    },
};

const faqs = [
    {
        question: "¿Qué tipos de documentos puede leer?",
        answer: "Los del día a día de una pyme: facturas de proveedores, albaranes, recibos, pedidos, formularios y documentos escaneados o fotografiados con el móvil. La combinación de OCR e IA entiende formatos distintos sin que haya que configurar una plantilla por proveedor — que es donde los sistemas antiguos se rompían.",
    },
    {
        question: "¿Y si la IA lee mal un dato?",
        answer: "Para eso está el diseño con revisión: los datos dudosos se marcan y una persona los confirma antes de que entren al sistema — no se registra nada 'a ciegas' en contabilidad. Con el uso, los casos dudosos son cada vez menos. La IA hace el 95% del trabajo; el criterio sigue siendo humano.",
    },
    {
        question: "¿Dónde acaban los datos extraídos?",
        answer: "Donde tú trabajes: tu programa de facturación o contabilidad, tu hoja de cálculo, tu panel de gestión o tu CRM. La gracia no es leer el documento — es que el dato llegue solo al sitio donde lo necesitas, sin copiarlo dos veces.",
    },
    {
        question: "¿Cuánto cuesta?",
        answer: "Un flujo concreto — por ejemplo, las facturas de proveedores entrando solas a tu sistema — desde 500€. El circuito documental completo (entrada, extracción, registro y generación de tus propios documentos) suele ir en proyectos desde 2.000€. Precio cerrado por escrito antes de empezar.",
    },
    {
        question: "¿Esto también genera mis facturas, o solo lee las que llegan?",
        answer: "Las dos direcciones: se leen las que llegan y se generan las tuyas — facturas, albaranes e informes que salen solos desde tus datos. El circuito completo está explicado en la página de automatización de procesos, en la sección de facturas y documentos.",
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
    "name": "Extracción de datos de documentos con IA (OCR + IA)",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "areaServed": "España",
    "description": "Lectura automática de facturas, albaranes y documentos con OCR e IA: los datos se extraen y se registran en el sistema de la empresa con revisión humana donde toca. Desde 500€.",
};

const pasos = [
    {
        num: "01",
        titulo: "Llega el documento",
        desc: "Por email, foto del móvil o una carpeta compartida — como te llegue hoy. No hay que cambiar cómo trabajan tus proveedores.",
    },
    {
        num: "02",
        titulo: "La IA extrae lo que importa",
        desc: "Proveedor, fechas, conceptos, importes, impuestos. Sin plantillas por proveedor: entiende formatos distintos, escaneados incluidos.",
    },
    {
        num: "03",
        titulo: "Se registra donde trabajas",
        desc: "Contabilidad, hoja de cálculo, panel o CRM — el dato llega solo a su sitio. Lo dudoso se marca para revisión humana antes de entrar.",
    },
    {
        num: "04",
        titulo: "Y el archivo, ordenado solo",
        desc: "Cada documento guardado con su nombre y su carpeta, localizable en segundos. Se acabó el '¿dónde está la factura de marzo?'.",
    },
];

export default function ExtraccionDatosPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header />

            <section style={{
                padding: "9rem 0 3.5rem",
                background: "radial-gradient(circle at 20% 20%, rgba(234, 88, 12, 0.07) 0%, transparent 55%)",
            }}>
                <div className="container">
                    <span className="kicker-mono">
                        <i className="fa-solid fa-file-import" style={{ marginRight: "0.6rem" }}></i>
                        Extracción de datos · OCR + IA
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
                        Documentos que{" "}<br />
                        <span style={{ color: "var(--color-primary)" }}>se leen solos</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 660 }}>
                        Cada factura que alguien pica a mano son minutos perdidos y un error
                        esperando su momento. Con OCR e IA, el documento llega, los datos se
                        extraen y se registran en tu sistema — y tu equipo revisa, no transcribe.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.02rem", padding: "1rem 2.25rem" }}>
                        Ver mi caso — 30 min gratis
                    </Link>
                </div>
            </section>

            {/* Salta entre las piezas de sistemas sin volver atras */}
            <SistemasTabs />

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
                        Extracción de datos de facturas, albaranes y documentos con OCR e IA,
                        registrados solos en tu sistema — desde 500€ el flujo, con revisión
                        humana donde toca y sin plantillas por proveedor.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        Es de lo que más horas devuelve por euro en una pyme con papeleo — gestorías,
                        despachos y empresas de servicios lo notan la primera semana.
                    </p>
                </div>
            </section>

            <section style={{ padding: "4.5rem 0", background: "linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Cómo funciona</span>
                    <h2 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                        fontWeight: 600,
                        color: "#faf6ef",
                        margin: "0.8rem 0 2rem",
                        lineHeight: 1.2,
                    }}>
                        Del buzón a tu sistema, sin manos
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
                        Y en la otra dirección: tus facturas, albaranes e informes también se{" "}
                        <Link href="/sistemas" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            generan solos
                        </Link>
                        . El circuito documental completo, en automatización de procesos.
                    </p>
                </div>
            </section>

            <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Preguntas frecuentes
                        </h2>
                    </div>
                    {faqs.map((f) => (
                        <details key={f.question} className="ex-faq">
                            <summary>
                                <span>{f.question}</span>
                                <i className="fas fa-chevron-down"></i>
                            </summary>
                            <p style={{ padding: "0 0.4rem 1.5rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0, maxWidth: 720 }}>{f.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

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
                        ¿Cuántas horas pica documentos tu equipo?
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos gratis: me enseñas un documento de los vuestros y te digo cómo quedaría el flujo.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir mis 30 minutos
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .ex-faq { border-top: 1px solid var(--color-border); }
                .ex-faq:last-of-type { border-bottom: 1px solid var(--color-border); }
                .ex-faq summary {
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
                .ex-faq summary::-webkit-details-marker { display: none; }
                .ex-faq summary:hover { color: var(--color-primary); padding-left: 1rem; }
                .ex-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .ex-faq[open] summary i { transform: rotate(180deg); }
                @media (max-width: 600px) { h1 br { display: none; } }
            `}</style>
        </main>
    );
}
