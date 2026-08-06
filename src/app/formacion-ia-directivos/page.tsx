import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Formación en IA para Directivos",
    description:
        "Formación en IA para dirección: decidir con criterio qué implantar, qué exige el AI Act y cómo gobernar la IA en tu empresa. Sesión ejecutiva desde 600€.",
    alternates: { canonical: "https://automatizatelo.com/formacion-ia-directivos" },
    openGraph: {
        title: "IA para dirección: criterio para decidir, no humo",
        description: "Qué implantar, qué exige la ley y cómo gobernarlo — en horas de directivo, no en cursos de meses.",
        url: "https://automatizatelo.com/formacion-ia-directivos",
    },
};

const faqs = [
    {
        question: "¿En qué se diferencia de la formación para el equipo?",
        answer: "En la pregunta que responde. El equipo necesita saber usar la IA en su puesto; dirección necesita saber qué decidir: en qué merece la pena invertir, qué exige la ley, qué riesgos asume la empresa y cómo se gobierna todo esto sin frenar al equipo. Es formación para firmar decisiones con criterio, no para escribir prompts.",
    },
    {
        question: "¿Cuánto tiempo me va a quitar?",
        answer: "El formato ejecutivo está pensado para agendas de dirección: una sesión de medio día (4 horas) cubre lo esencial — mapa de oportunidades, obligaciones del AI Act y plan de gobernanza. Si el comité quiere profundizar, se amplía a dos sesiones. Sin deberes absurdos ni cursos de meses.",
    },
    {
        question: "¿Cuánto cuesta?",
        answer: "La sesión ejecutiva de medio día para el equipo directivo, desde 600€. El programa completo de dirección (dos sesiones más plan de gobernanza documentado), desde 1.200€. Precio cerrado por escrito, como todo lo que hago.",
    },
    {
        question: "¿Esto cuenta para el Art. 4 del AI Act?",
        answer: "Sí — y para dirección con doble motivo: el Art. 4 pide alfabetización proporcional al rol, y el rol de dirección incluye decidir sobre los sistemas de IA de la empresa. La sesión queda registrada con certificado nominal, como el resto de la formación.",
    },
    {
        question: "¿Me vas a intentar vender un proyecto después?",
        answer: "Te voy a dar un mapa honesto — y en ese mapa habrá cosas que puedes hacer sin mí, cosas que no merecen la pena (te lo diré igual) y quizá cosas donde encaje mi trabajo. Sin compromiso y sin presión: la formación vale por sí sola, y mi mejor comercial es que el criterio que te llevas sea bueno.",
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

const bloques = [
    {
        num: "01",
        titulo: "El mapa real de la IA para tu empresa",
        desc: "Qué puede hacer la IA hoy en tu sector — sin humo ni demos de feria — y dónde están las horas y el dinero en TU operación. Con casos de sistemas que construyo y funcionan a diario.",
    },
    {
        num: "02",
        titulo: "Lo que exige la ley (y lo que no)",
        desc: "El AI Act traducido a decisiones de gerencia: qué obliga desde cuándo, qué es humo comercial que te intentarán vender, y qué evidencia debe poder enseñar tu empresa.",
    },
    {
        num: "03",
        titulo: "Gobernanza: quién decide qué",
        desc: "Cómo se aprueban herramientas, quién responde de qué, qué política necesita tu plantilla y cómo evaluar — sin tecnicismos — a los proveedores de IA que llaman a tu puerta. Para que la empresa use la IA sin depender de que tú vigiles.",
    },
    {
        num: "04",
        titulo: "Tu plan de decisión",
        desc: "Sales con un plan priorizado: qué implantar primero, qué formar, qué cumplir y qué descartar — con órdenes de magnitud de coste y cómo llevar al equipo contigo sin resistencias (la gestión del cambio es la mitad del éxito).",
    },
];

export default function DirectivosPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <Header />

            {/* Hero editorial */}
            {/* Hero con foto de fondo, mismo patrón que la home */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 5rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/equipos-directivos.webp"
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0, transform: "translateX(6%) scale(1.07)", transformOrigin: "right top" }}
                />
                <div aria-hidden="true" style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    // Velo lateral: sombra donde está el texto (izquierda), foto
                    // limpia a la derecha. Oscurecerlo todo mataba la imagen.
                    background: "linear-gradient(90deg, rgba(28,25,23,0.62) 0%, rgba(28,25,23,0.42) 38%, rgba(28,25,23,0.12) 65%, transparent 85%), linear-gradient(180deg, rgba(28,25,23,0.18) 0%, transparent 40%)",
                }} />
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <span className="kicker-mono" style={{ color: "#f6c39c" }}>
                        <i className="fa-solid fa-chess-king" style={{ marginRight: "0.6rem" }}></i>
                        Formación IA · Dirección
                    </span>
                    <h1 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(2.2rem, 6vw, 3.6rem)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        color: "#faf6ef",
                        margin: "1rem 0 1.2rem",
                        textShadow: "0 2px 30px rgba(28,25,23,0.45)",
                    }}>
                        IA para dirección: <span style={{ color: "#f6c39c" }}>criterio<br />para decidir, no humo</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 640, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                        Todo el mundo te habla de IA; casi nadie te ayuda a decidir. Esta formación
                        es para gerentes y comités de dirección: qué implantar, qué exige la ley y
                        cómo gobernarlo — en horas de directivo, no en cursos de meses.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.02rem", padding: "1rem 2.25rem", boxShadow: "var(--shadow-glow)" }}>
                        Hablar 30 minutos, gratis
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
                        Sesión ejecutiva de medio día para dirección desde 600€: el mapa real de la
                        IA en tu empresa, lo que exige el AI Act y el plan de gobernanza. Programa
                        completo con dos sesiones, desde 1.200€.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        Impartida por quien construye los sistemas, no por un divulgador: lo que se
                        cuenta en la sesión son casos que funcionan a diario en negocios reales.
                    </p>
                </div>
            </section>

            {/* Qué cubre — franja terracota */}
            <section style={{ padding: "4.5rem 0", background: "linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Qué cubre</span>
                    <h2 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                        fontWeight: 600,
                        color: "#faf6ef",
                        margin: "0.8rem 0 2rem",
                        lineHeight: 1.2,
                    }}>
                        Las cuatro preguntas que un gerente necesita respondidas
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                        {bloques.map((b) => (
                            <div key={b.num}>
                                <span className="mono-label" style={{ color: "#f6c39c" }}>{b.num}</span>
                                <h3 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "1.25rem",
                                    fontWeight: 600,
                                    color: "#faf6ef",
                                    margin: "0.5rem 0 0.5rem",
                                    lineHeight: 1.3,
                                }}>
                                    {b.titulo}
                                </h3>
                                <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.6, margin: 0, fontSize: "0.95rem" }}>
                                    {b.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.7, marginTop: "2rem", maxWidth: 720 }}>
                        Para el equipo, la formación práctica está en{" "}
                        <Link href="/servicios/formacion-ia-empresas" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            formación en IA para empresas
                        </Link>
                        ; y si la duda es el cumplimiento, empieza por la{" "}
                        <Link href="/servicios/auditoria-ia" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            auditoría IA
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
                            Lo que pregunta dirección
                        </h2>
                    </div>
                    {faqs.map((f) => (
                        <details key={f.question} className="fdir-faq">
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
                        Media jornada. Criterio para años.
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos gratis para ver si esta sesión le encaja a tu equipo directivo.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir mis 30 minutos
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .fdir-faq {
                    border-top: 1px solid var(--color-border);
                }
                .fdir-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .fdir-faq summary {
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
                .fdir-faq summary::-webkit-details-marker {
                    display: none;
                }
                .fdir-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .fdir-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .fdir-faq[open] summary i {
                    transform: rotate(180deg);
                }
                @media (max-width: 600px) {
                    h1 br { display: none; }
                }
            `}</style>
        </main>
    );
}
