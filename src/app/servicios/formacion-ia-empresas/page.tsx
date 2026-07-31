import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Formación en IA para Empresas: Cursos y Talleres | AI Act",
    description:
        "Forma a tu equipo en IA y cumple el Art. 4 del Reglamento Europeo: talleres in-company, gobernanza y cursos e-learning (SCORM) a medida. Barcelona y toda España.",
    alternates: { canonical: "https://automatizatelo.com/servicios/formacion-ia-empresas" },
    openGraph: {
        title: "Formación en IA para Empresas y Equipos",
        description: "Talleres in-company, gobernanza de IA y cursos e-learning a medida. El AI Act ya exige formar a tu plantilla.",
        url: "https://automatizatelo.com/servicios/formacion-ia-empresas",
    },
};

const faqs = [
    {
        question: "¿Es obligatorio formar a mi equipo en IA?",
        answer: "Si tu empresa usa sistemas de IA, sí: el artículo 4 del Reglamento Europeo de IA (Reglamento UE 2024/1689) exige desde el 2 de febrero de 2025 que proveedores y usuarios de sistemas de IA garanticen un nivel suficiente de alfabetización en IA de su personal.",
    },
    {
        question: "¿Qué formatos de formación ofrecéis?",
        answer: "Talleres in-company (presenciales en Barcelona o en remoto para toda España), sesiones prácticas por departamento y cursos e-learning a medida en formato SCORM, listos para subir a la plataforma de formación que ya use tu empresa.",
    },
    {
        question: "¿La formación es teórica o práctica?",
        answer: "Práctica: trabajamos con los casos reales de tu empresa. El equipo sale usando la IA en sus tareas del día a día — redactar, resumir, clasificar, automatizar — y con criterios claros de qué puede y qué no puede hacer con ella.",
    },
    {
        question: "¿Incluye la parte de gobernanza y normativa?",
        answer: "Sí. Además del uso práctico, cubrimos la política interna de uso de IA: qué datos no se pueden pegar en una IA, cómo revisar resultados, qué herramientas están aprobadas y cómo documentarlo para cumplir con el RGPD y el Reglamento de IA.",
    },
    {
        question: "¿Cuánto cuesta?",
        answer: "Depende de las horas, el formato y el tamaño del equipo. Pide la consulta gratuita de 30 minutos y te preparamos una propuesta cerrada, sin sorpresas.",
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
    "name": "Formación en IA para empresas",
    "serviceType": "Formación y alfabetización en Inteligencia Artificial",
    "description": "Talleres in-company, gobernanza de IA y cursos e-learning (SCORM) a medida para equipos de pymes.",
    "url": "https://automatizatelo.com/servicios/formacion-ia-empresas",
    "areaServed": "ES",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
        "telephone": "+34678399182",
    },
};

const incluye = [
    {
        num: "01",
        icon: "fa-chalkboard-user",
        titulo: "Talleres in-company de uso práctico",
        desc: "El equipo aprende con sus propios casos — redactar, resumir, clasificar, preparar informes — no con ejemplos de laboratorio.",
    },
    {
        num: "02",
        icon: "fa-shield-halved",
        titulo: "Gobernanza y política interna de IA",
        desc: "Qué datos no se pegan nunca en una IA, qué herramientas están aprobadas, cómo revisar resultados y cómo documentarlo todo para RGPD y AI Act.",
    },
    {
        num: "03",
        icon: "fa-laptop-file",
        titulo: "Cursos e-learning a medida (SCORM)",
        desc: "Producimos el curso de tu empresa listo para subir a tu plataforma de formación, con evaluaciones y seguimiento.",
    },
];

export default function FormacionIaPage() {
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
                        <i className="fa-solid fa-graduation-cap" style={{ marginRight: "0.6rem" }}></i>
                        Formación · Barcelona y toda España
                    </span>
                    <h1 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(2.1rem, 5vw, 3.3rem)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        color: "var(--color-text-main)",
                        margin: "1rem 0 1.2rem",
                    }}>
                        Formación en IA <span style={{ color: "var(--color-primary)" }}>para empresas</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 600 }}>
                        Tu equipo usando la IA con criterio — y tu empresa cumpliendo la normativa europea.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.02rem", padding: "1rem 2.25rem" }}>
                        Pide tu consulta gratuita de 30 minutos
                    </Link>
                </div>
            </section>

            {/* Qué es + answer capsule */}
            <section style={{ padding: "4rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="kicker-mono">Qué es</span>
                    {/* Answer capsule */}
                    <p style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
                        fontWeight: 600,
                        lineHeight: 1.35,
                        color: "var(--color-text-main)",
                        margin: "1rem 0 1.2rem",
                        letterSpacing: "-0.01em",
                    }}>
                        La formación en IA para empresas capacita a los equipos para usar herramientas
                        de inteligencia artificial con criterio, seguridad y resultados medibles en su
                        trabajo diario.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        Y ya no es opcional: el artículo 4 del Reglamento Europeo de IA (Reglamento UE 2024/1689)
                        exige, desde el 2 de febrero de 2025, que las empresas que usan sistemas de IA garanticen
                        un nivel suficiente de <strong style={{ color: "var(--color-text-main)" }}>alfabetización en IA</strong> de
                        su personal. La mayoría de pymes españolas todavía no lo ha resuelto.
                    </p>
                </div>
            </section>

            {/* Qué incluye — filas editoriales */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Qué incluye</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Tres patas, un objetivo: que la IA se use bien
                        </h2>
                    </div>

                    {incluye.map((item) => (
                        <div key={item.num} className="fi-fila">
                            <span className="mono-label" style={{ color: "var(--color-text-muted)" }}>{item.num}</span>
                            <i className={`fa-solid ${item.icon}`} style={{ color: "var(--color-primary)", fontSize: "1.4rem" }}></i>
                            <div>
                                <h3 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
                                    fontWeight: 600,
                                    color: "var(--color-text-main)",
                                    marginBottom: "0.35rem",
                                    lineHeight: 1.25,
                                }}>
                                    {item.titulo}
                                </h3>
                                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, margin: 0, maxWidth: 640 }}>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quién lo imparte — franja terracota */}
            <section style={{ padding: "4rem 0", background: "linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Quién lo imparte</span>
                    <p style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
                        fontWeight: 600,
                        lineHeight: 1.35,
                        color: "#faf6ef",
                        margin: "1rem 0 1.2rem",
                        letterSpacing: "-0.01em",
                    }}>
                        No enseño IA de oídas: los sistemas que uso como ejemplo en clase son los
                        que construyo para clientes reales.
                    </p>
                    <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.75, margin: 0 }}>
                        <Link href="/sobre-mi" style={{ color: "#f6c39c", fontWeight: 600 }}>Manel Méndez González</Link>,
                        fundador de Automatizatelo. He publicado cursos completos de IA en plataformas
                        e-learning y formo a equipos con los casos de{" "}
                        <Link href="/casos-de-exito" style={{ color: "#f6c39c", fontWeight: 600 }}>sistemas que ya funcionan</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ — filas editoriales */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Preguntas frecuentes
                        </h2>
                    </div>
                    {faqs.map((f) => (
                        <details key={f.question} className="fi-faq">
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
                        margin: "0 0 1.8rem",
                        letterSpacing: "-0.02em",
                    }}>
                        ¿Formamos a tu equipo?
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pide tu consulta gratuita de 30 minutos
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .fi-fila {
                    display: grid;
                    grid-template-columns: 3rem 2.4rem 1fr;
                    gap: 1rem;
                    align-items: baseline;
                    padding: 1.5rem 0.3rem;
                    border-top: 1px solid var(--color-border);
                }
                .fi-fila:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .fi-faq {
                    border-top: 1px solid var(--color-border);
                }
                .fi-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .fi-faq summary {
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
                .fi-faq summary::-webkit-details-marker {
                    display: none;
                }
                .fi-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .fi-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .fi-faq[open] summary i {
                    transform: rotate(180deg);
                }
                @media (max-width: 600px) {
                    .fi-fila {
                        grid-template-columns: 1fr;
                        gap: 0.4rem;
                    }
                }
            `}</style>
        </main>
    );
}
