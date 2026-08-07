import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioCurso from "@/components/FormularioCurso";
import FormacionTabs from "@/components/FormacionTabs";

export const metadata: Metadata = {
    title: "Formación en IA para Empresas y Centros Educativos",
    description:
        "Forma a tu equipo o a tu claustro y cumple el Art. 4 del Reglamento Europeo de IA: alfabetización + herramienta para empresas, e IA en el aula para centros. Toda España.",
    alternates: { canonical: "https://automatizatelo.com/formacion" },
    openGraph: {
        title: "Formación en IA para Empresas y Centros Educativos",
        description: "Dos puertas: alfabetización + tu herramienta para empresas, e IA en el aula para centros educativos. El AI Act ya exige formar.",
        url: "https://automatizatelo.com/formacion",
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
    "name": "Formación en IA para empresas y centros educativos",
    "serviceType": "Formación y alfabetización en Inteligencia Artificial",
    "description": "Formación in-company para empresas, formación de claustro para centros educativos, gobernanza de IA y cursos e-learning (SCORM) a medida.",
    "url": "https://automatizatelo.com/formacion",
    "areaServed": "ES",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
        "telephone": "+34678399182",
    },
};

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
                <div className="container fc-hero-grid">
                    <div>
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
                        Formación en IA para{" "}<br /><span style={{ color: "var(--color-primary)" }}>tu empresa, tu despacho o tu claustro</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 620 }}>
                        Equipos, docentes y directivos usando la IA con criterio — y tu organización
                        cumpliendo la normativa europea.
                    </p>
                    </div>

                    {/* Captura en el hero: el curso viaja como origen del lead */}
                    <FormularioCurso origen="Formación (portada)" opciones={["Formación para mi empresa", "Formación para mi centro educativo", "Curso de una herramienta concreta", "Curso e-learning a medida (SCORM)", "Aún no lo tengo claro"]} />
                </div>
            </section>

            {/* Salta entre todas las formaciones sin volver atras */}
            <FormacionTabs />

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
                        La formación en IA capacita a equipos y claustros para usar herramientas
                        de inteligencia artificial con criterio, seguridad y resultados medibles en su
                        trabajo diario.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        Y ya no es solo cuestión de productividad: usar IA sin formar al equipo es hoy
                        un <strong style={{ color: "var(--color-text-main)" }}>incumplimiento normativo</strong>.
                        La mayoría de pymes y centros españoles todavía no lo ha resuelto.
                    </p>
                </div>
            </section>

            {/* Las dos puertas — mitades a sangre con foto y velo tinta */}
            <section style={{ padding: "0" }}>
                <div className="fd-puertas">
                    <Link href="/formacion/empresas" className="fd-puerta">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="fd-puerta-fondo" src="/despachos.webp" alt="" aria-hidden="true" loading="lazy" />
                        <span className="fd-puerta-velo" aria-hidden="true"></span>
                        <span className="fd-puerta-marca" aria-hidden="true">01</span>
                        <span className="fd-puerta-cuerpo">
                            <span className="fd-puerta-num mono-label">Empresas</span>
                            <span className="fd-puerta-titulo">Alfabetización + tu herramienta</span>
                            <span className="fd-puerta-desc">
                                El bloque obligatorio del Art. 4 más el taller 100% práctico con la
                                herramienta que ya usa tu equipo. Con certificado nominal y registro
                                formativo, adaptado por departamento y nivel.
                            </span>
                            <span className="fd-puerta-chips">
                                {["Art. 4", "ChatGPT", "Copilot 365", "Gemini", "Claude", "A medida · SCORM"].map((c) => (
                                    <span key={c} className="fd-chip">{c}</span>
                                ))}
                            </span>
                            <span className="fd-puerta-cta">Ver formación para empresas →</span>
                        </span>
                    </Link>
                    <Link href="/formacion/centros-educativos" className="fd-puerta">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="fd-puerta-fondo" src="/claustro.webp" alt="" aria-hidden="true" loading="lazy" />
                        <span className="fd-puerta-velo" aria-hidden="true"></span>
                        <span className="fd-puerta-marca" aria-hidden="true">02</span>
                        <span className="fd-puerta-cuerpo">
                            <span className="fd-puerta-num mono-label">Centros educativos</span>
                            <span className="fd-puerta-titulo">IA en el aula y para el claustro</span>
                            <span className="fd-puerta-desc">
                                Formación de claustro con seguridad jurídica, política de uso de IA
                                del centro, y la IA llevada al aula con criterio — para que docentes
                                y alumnado aprendan a usarla, no a esconderla.
                            </span>
                            <span className="fd-puerta-chips">
                                {["Claustro", "Política del centro", "Aula", "Menores y RGPD"].map((c) => (
                                    <span key={c} className="fd-chip">{c}</span>
                                ))}
                            </span>
                            <span className="fd-puerta-cta">Ver formación para centros →</span>
                        </span>
                    </Link>
                </div>
            </section>

            {/* Casos más concretos — línea fina bajo las puertas */}
            <section style={{ padding: "1.5rem 0", background: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container fd-otros">
                    <span className="mono-label" style={{ color: "var(--color-text-muted)" }}>¿Tu caso es más concreto?</span>
                    <Link href="/sectores/despachos" className="fd-otro">Despachos profesionales →</Link>
                    <Link href="/formacion/directivos" className="fd-otro">Dirección →</Link>
                    <Link href="/formacion/cursos-a-medida" className="fd-otro">Cursos a medida · SCORM →</Link>
                </div>
            </section>

            {/* Por qué ahora — los tres datos que no son marketing */}
            <section style={{ padding: "4rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <span className="kicker-mono">Por qué ahora</span>
                    <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "1.6rem" }}>
                        Formar al equipo dejó de ser opcional
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
                        <div style={{ border: "1px solid var(--color-border)", borderRadius: "14px", padding: "1.3rem 1.4rem", background: "var(--color-card-bg, #fff)" }}>
                            <p style={{ fontFamily: "var(--font-display, serif)", fontSize: "2rem", fontWeight: 600, color: "var(--color-primary)", margin: "0 0 0.3rem" }}>Feb. 2025</p>
                            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.55, margin: 0 }}>Desde entonces, el Art. 4 del Reglamento Europeo de IA obliga a la alfabetización del personal que usa IA.</p>
                        </div>
                        <div style={{ border: "1px solid var(--color-border)", borderRadius: "14px", padding: "1.3rem 1.4rem", background: "var(--color-card-bg, #fff)" }}>
                            <p style={{ fontFamily: "var(--font-display, serif)", fontSize: "2rem", fontWeight: 600, color: "var(--color-primary)", margin: "0 0 0.3rem" }}>Ago. 2026</p>
                            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.55, margin: 0 }}>El régimen sancionador general ya está en vigor: la obligación tiene consecuencias desde este mes.</p>
                        </div>
                        <div style={{ border: "1px solid var(--color-border)", borderRadius: "14px", padding: "1.3rem 1.4rem", background: "var(--color-card-bg, #fff)" }}>
                            <p style={{ fontFamily: "var(--font-display, serif)", fontSize: "2rem", fontWeight: 600, color: "var(--color-primary)", margin: "0 0 0.3rem" }}>35 M€ / 7%</p>
                            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.55, margin: 0 }}>Techo sancionador del Reglamento (Art. 99). Para una pyme, la multa se modula — pero la evidencia formativa es lo que te defiende.</p>
                        </div>
                    </div>
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
                        <Link href="/casos" style={{ color: "#f6c39c", fontWeight: 600 }}>sistemas que ya funcionan</Link>.
                    </p>
                </div>
            </section>

            {/* Cursos a medida (SCORM) — los dos compradores: empresa y academia */}
            <section style={{ padding: "4.5rem 0", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="kicker-mono">Cursos a medida · SCORM</span>
                    <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "1rem" }}>
                        ¿Y si tu formación fuera un curso instalado en tu plataforma?
                    </h2>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, maxWidth: 720, marginBottom: "1rem" }}>
                        <strong style={{ color: "var(--color-text-main)" }}>Si eres una empresa</strong>, convierto
                        tu formación interna — el tema que necesites — en un curso e-learning (SCORM) instalado en
                        vuestra plataforma para siempre, con registro individual por alumno. Pagas la producción
                        una vez y el curso es tuyo.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, maxWidth: 720, marginBottom: "1rem" }}>
                        <strong style={{ color: "var(--color-text-main)" }}>Si eres una academia o entidad de formación</strong>,
                        produzco cursos con tu marca: tú pones el catálogo y la certificación, yo el contenido — guion,
                        materiales, vídeo y empaquetado SCORM.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, maxWidth: 720, margin: 0 }}>
                        El proceso completo está en la página de{" "}
                        <Link href="/formacion/cursos-a-medida" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            cursos e-learning a medida
                        </Link>.{" "}
                        <Link href="/#contact" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            Cuéntame qué curso necesitas
                        </Link>.
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
                .fd-puertas {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }
                .fd-puerta {
                    position: relative;
                    display: flex;
                    align-items: flex-end;
                    min-height: 30rem;
                    overflow: hidden;
                    color: inherit;
                    background: #1c1917;
                }
                .fd-puerta-fondo {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .fd-puerta:hover .fd-puerta-fondo { transform: scale(1.04); }
                .fd-puerta-velo {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(28,25,23,0.35) 0%, rgba(28,25,23,0.55) 45%, rgba(28,25,23,0.85) 100%);
                    transition: background 0.3s ease;
                }
                .fd-puerta-marca {
                    position: absolute;
                    top: 1.2rem;
                    left: 1.8rem;
                    font-family: var(--font-display, serif);
                    font-size: clamp(4rem, 8vw, 6.5rem);
                    font-weight: 700;
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.16);
                    pointer-events: none;
                }
                .fd-puerta-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.7rem;
                    padding: 7rem 2.2rem 2.4rem;
                    max-width: 34rem;
                }
                .fd-puerta-num {
                    color: #f6c39c;
                }
                .fd-puerta-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.45rem, 2.8vw, 2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                }
                .fd-puerta-desc {
                    font-size: 0.95rem;
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.6;
                }
                .fd-puerta-chips {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.45rem;
                    margin-top: 0.2rem;
                }
                .fd-chip {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.66rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: #faf6ef;
                    background: rgba(28, 25, 23, 0.45);
                    border: 1px solid rgba(250, 246, 239, 0.35);
                    border-radius: 50px;
                    padding: 0.28rem 0.7rem;
                }
                .fd-puerta-cta {
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    margin-top: 0.5rem;
                    transition: transform 0.25s ease;
                }
                .fd-puerta:hover .fd-puerta-cta { transform: translateX(6px); }
                @media (max-width: 800px) {
                    .fd-puertas { grid-template-columns: 1fr; }
                    .fd-puerta { min-height: 24rem; }
                    .fd-puerta-cuerpo { padding: 5.5rem 1.4rem 1.8rem; }
                }
                .fd-otros {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: baseline;
                    gap: 0.6rem 1.8rem;
                }
                .fd-otro {
                    font-size: 0.92rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    transition: color 0.2s ease;
                }
                .fd-otro:hover { color: var(--color-primary); }
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
                    h1 br { display: none; }
                }
            `}</style>
        </main>
    );
}
