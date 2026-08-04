import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Producción de Cursos SCORM y E-learning a Medida",
    description:
        "Convierto tu conocimiento en cursos e-learning empaquetados en SCORM: guion, materiales y compatibilidad con cualquier LMS. Desde 1.900€, también en marca blanca.",
    alternates: { canonical: "https://automatizatelo.com/servicios/produccion-cursos-scorm" },
    openGraph: {
        title: "Tus cursos, producidos en SCORM para cualquier plataforma",
        description: "Guion, materiales y empaquetado SCORM listo para tu LMS o para vender. Con cursos propios publicados como prueba.",
        url: "https://automatizatelo.com/servicios/produccion-cursos-scorm",
    },
};

const faqs = [
    {
        question: "¿Qué es exactamente un curso SCORM y por qué lo necesito?",
        answer: "SCORM es el formato estándar del e-learning: un curso empaquetado en SCORM funciona en prácticamente cualquier plataforma (Moodle, Evolcampus, LearnDash, la de tu empresa…) y registra el progreso, las notas y la finalización de cada alumno. Si quieres que tu formación viva en una plataforma con seguimiento real — o venderla a terceros — SCORM es el idioma en el que tiene que estar.",
    },
    {
        question: "¿Qué incluye la producción?",
        answer: "El curso entero, de la materia prima al paquete: estructura didáctica y guion a partir de tu conocimiento (documentos, vídeos, tu experiencia), materiales y pantallas, evaluaciones con seguimiento, y el empaquetado SCORM probado en tu plataforma. Tú pones el saber; yo lo convierto en un curso que funciona.",
    },
    {
        question: "¿Cuánto cuesta producir un curso?",
        answer: "Desde 1.900€ por curso, con el precio final cerrado por escrito según duración y materiales de partida. Si son varios cursos o un catálogo, se presupuesta el conjunto — producir el segundo siempre es más barato que el primero.",
    },
    {
        question: "¿Trabajáis en marca blanca para entidades de formación?",
        answer: "Sí — es una línea propia: tú pones el catálogo y la certificación, yo produzco el contenido con tu marca. Tu alumno nunca sabe que existo. Es lo que ya hago con plataformas e-learning reales que venden cursos producidos por mí.",
    },
    {
        question: "¿Esto no lo hace ya la IA sola?",
        answer: "La IA acelera muchísimo la producción — y la uso a fondo — pero un curso que la gente termina necesita criterio didáctico: qué va primero, qué se evalúa, dónde se practica, qué sobra. La diferencia entre un PDF troceado y un curso está justo ahí. Mi prueba: mis propios cursos están publicados y en venta, no en un cajón.",
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
    "name": "Producción de cursos e-learning en formato SCORM",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "areaServed": "España",
    "description": "Producción completa de cursos e-learning a medida en formato SCORM: estructura didáctica, guion, materiales, evaluaciones y empaquetado compatible con cualquier LMS. Desde 1.900€ por curso, también en marca blanca.",
    "offers": [
        { "@type": "Offer", "name": "Producción de curso SCORM a medida", "price": "1900", "priceCurrency": "EUR", "description": "Precio desde; se cierra en la propuesta." },
    ],
};

const pasos = [
    {
        num: "01",
        titulo: "Tu conocimiento, como esté",
        desc: "Documentos, presentaciones, vídeos grabados o simplemente lo que sabes y nadie ha escrito. No hace falta que llegue ordenado — ordenarlo es parte del trabajo.",
    },
    {
        num: "02",
        titulo: "Estructura didáctica y guion",
        desc: "Qué va primero, qué se practica, qué se evalúa y qué sobra. La diferencia entre un PDF troceado y un curso que la gente termina.",
    },
    {
        num: "03",
        titulo: "Producción y evaluaciones",
        desc: "Pantallas, materiales y tests con registro de progreso por alumno — la trazabilidad que luego sirve de evidencia formativa.",
    },
    {
        num: "04",
        titulo: "Empaquetado SCORM, probado",
        desc: "El curso sale en SCORM y se prueba en TU plataforma antes de entregar. Compatible con Moodle, Evolcampus, LearnDash y el LMS que uses. Y es tuyo para siempre.",
    },
];

export default function ProduccionScormPage() {
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
                        <i className="fa-solid fa-clapperboard" style={{ marginRight: "0.6rem" }}></i>
                        Producción e-learning · SCORM
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
                        Tu conocimiento,{" "}<br />
                        <span style={{ color: "var(--color-primary)" }}>convertido en cursos que se venden</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 660 }}>
                        Producción completa de cursos e-learning en SCORM: del documento desordenado
                        al curso empaquetado, probado en tu plataforma y listo para formar — o para
                        vender. Lo digo con prueba: mis propios cursos están publicados y en venta.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.02rem", padding: "1rem 2.25rem" }}>
                        Contarte mi proyecto — 30 min gratis
                    </Link>
                </div>
            </section>

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
                        Producción de cursos e-learning a medida en formato SCORM desde 1.900€:
                        guion, materiales, evaluaciones y empaquetado compatible con cualquier
                        LMS — para tu empresa, tu academia o en marca blanca.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        Para empresas que quieren su formación instalada para siempre, academias que
                        amplían catálogo y entidades de formación que necesitan producción con su marca.
                    </p>
                </div>
            </section>

            <section style={{ padding: "4.5rem 0", background: "linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Cómo se produce</span>
                    <h2 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                        fontWeight: 600,
                        color: "#faf6ef",
                        margin: "0.8rem 0 2rem",
                        lineHeight: 1.2,
                    }}>
                        De la materia prima al curso, en cuatro pasos
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
                        ¿Eres una entidad de formación? La versión en{" "}
                        <Link href="/servicios/formacion-ia-empresas" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            marca blanca
                        </Link>{" "}
                        pone tu sello en el curso — tu alumno nunca sabe que existo. Y si además
                        quieres automatizar la academia entera, eso vive en{" "}
                        <Link href="/automatizacion-academias" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            automatización para academias
                        </Link>.
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
                        <details key={f.question} className="ps-faq">
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
                        Tu conocimiento vale un curso. Produzcámoslo.
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos gratis: me cuentas qué sabes enseñar y te digo cómo quedaría — y qué costaría.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir mis 30 minutos
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .ps-faq { border-top: 1px solid var(--color-border); }
                .ps-faq:last-of-type { border-bottom: 1px solid var(--color-border); }
                .ps-faq summary {
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
                .ps-faq summary::-webkit-details-marker { display: none; }
                .ps-faq summary:hover { color: var(--color-primary); padding-left: 1rem; }
                .ps-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .ps-faq[open] summary i { transform: rotate(180deg); }
                @media (max-width: 600px) { h1 br { display: none; } }
            `}</style>
        </main>
    );
}
