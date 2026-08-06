import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Formación en IA para Despachos",
    description:
        "Formación en IA para administradores de fincas, gestorías, asesorías y abogados: con los casos del despacho y el secreto profesional a salvo.",
    alternates: { canonical: "https://automatizatelo.com/formacion-ia-despachos" },
    openGraph: {
        title: "IA para tu despacho: formación práctica con tus casos reales",
        description: "Talleres para el equipo, protección del secreto profesional y la evidencia del Art. 4. Desde 600€.",
        url: "https://automatizatelo.com/formacion-ia-despachos",
    },
};

const faqs = [
    {
        question: "¿Podemos usar ChatGPT con datos de clientes del despacho?",
        answer: "Así, en general: no. Un despacho vive del secreto profesional y de datos personales especialmente delicados — meterlos en una cuenta gratuita de ChatGPT es el error más común y el más caro. La formación enseña exactamente eso: qué herramientas y planes sí ofrecen garantías, cómo anonimizar antes de preguntar, y qué no debe salir del despacho nunca. Es la diferencia entre usar la IA y usarla sin jugarse el cliente.",
    },
    {
        question: "¿La formación es genérica o adaptada al despacho?",
        answer: "Adaptada — y esa es la gracia. Los ejercicios se hacen con los casos del despacho: redactar comunicaciones a clientes o comunidades, resumir documentación, preparar reuniones, plantillas de respuesta. Conozco el sector desde dentro: construyo paneles que despachos de administración de fincas usan a diario desde enero de 2026, y he producido la formación de AFCademIA para administradores de fincas. Y para un despacho de abogados aplica igual: mismos riesgos de confidencialidad, mismos flujos de documentación — con sus escritos y su jerga.",
    },
    {
        question: "¿Cuánto cuesta?",
        answer: "Las tarifas generales de formación: el bloque de alfabetización del Art. 4 (4-8 horas, toda la plantilla), desde 600€. Un taller intensivo de un día adaptado al despacho, entre 900€ y 1.400€. Un programa de 16 horas en varias semanas, desde 2.400€. Con certificado nominal y registro formativo fechado siempre incluidos.",
    },
    {
        question: "¿Esto cubre la obligación del Art. 4 del AI Act?",
        answer: "Sí. Si el equipo del despacho usa IA — aunque sea por su cuenta — el despacho es responsable del despliegue y debe adoptar medidas para formar a su personal desde febrero de 2025. Es un deber de medios, no de resultado: no se exige garantizar un nivel concreto en cada persona, sino poder demostrar que se hizo lo razonable. La formación deja esa evidencia: certificados nominales y registro formativo fechado.",
    },
    {
        question: "¿Presencial o en remoto?",
        answer: "Como prefiera el despacho: presencial en Barcelona y alrededores, en remoto en directo para toda España, o como curso e-learning (SCORM) instalado en vuestra plataforma para que cada persona lo haga a su ritmo con registro individual.",
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

const dolores = [
    {
        icon: "fa-envelope-open-text",
        titulo: "El email se come el día",
        desc: "Comunicaciones a clientes, vecinos o la administración, una a una. La IA bien usada redacta el 80% — pero hay que saber pedírselo y revisar como profesional.",
    },
    {
        icon: "fa-user-secret",
        titulo: "Datos de clientes en cuentas gratuitas",
        desc: "El equipo ya usa ChatGPT — y en un despacho eso significa datos personales y secreto profesional en manos de terceros. Sin política, cada chat es un riesgo.",
    },
    {
        icon: "fa-file-lines",
        titulo: "Documentación infinita",
        desc: "Actas, contratos, normativa, expedientes. Resumir, comparar y extraer lo relevante es de lo que mejor hace la IA — con el método correcto.",
    },
    {
        icon: "fa-scale-balanced",
        titulo: "El Art. 4 también obliga al despacho",
        desc: "Si el personal usa IA, el despacho debe garantizar su alfabetización y acreditarla. Y un despacho que asesora en cumplimiento no puede permitirse incumplirlo.",
    },
];

const bloques = [
    {
        num: "01",
        titulo: "Taller práctico con los casos del despacho",
        desc: "Un día trabajando con lo vuestro: comunicaciones, resúmenes de documentación, redacción de escritos y plantillas por tipo de cliente. Cada persona sale con sus flujos montados y una librería de prompts propia del despacho.",
    },
    {
        num: "02",
        titulo: "Protección de datos y secreto profesional",
        desc: "Qué herramientas y planes dan garantías, qué se anonimiza antes de preguntar y qué no sale del despacho jamás. El módulo que separa la IA útil de la IA temeraria.",
    },
    {
        num: "03",
        titulo: "Alfabetización del Art. 4 con evidencia",
        desc: "El bloque de cumplimiento para toda la plantilla, con certificado nominal y registro formativo fechado — el expediente que el despacho guarda.",
    },
    {
        num: "04",
        titulo: "Curso e-learning en vuestra plataforma (SCORM)",
        desc: "La formación producida como curso e instalada donde el despacho quiera, para nuevas incorporaciones y repaso — con registro individual de cada persona.",
    },
];

export default function DespachosPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <Header />

            {/* Hero editorial */}
            {/* Hero con foto de fondo, mismo patrón que la home */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 5rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/despachos.webp"
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0 }}
                />
                <div aria-hidden="true" style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    // Velo lateral unificado: sombra bajo el texto, foto limpia a la derecha
                    background: "linear-gradient(90deg, rgba(28,25,23,0.62) 0%, rgba(28,25,23,0.42) 38%, rgba(28,25,23,0.12) 65%, transparent 85%), linear-gradient(180deg, rgba(28,25,23,0.18) 0%, transparent 40%)",
                }} />
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <span className="kicker-mono" style={{ color: "#f6c39c" }}>
                        <i className="fa-solid fa-briefcase" style={{ marginRight: "0.6rem" }}></i>
                        Formación IA · Despachos profesionales
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
                        IA para tu despacho:{" "}<br />
                        <span style={{ color: "#f6c39c" }}>sin jugarte los datos de nadie</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 640, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                        Formación práctica para administradores de fincas, gestorías, asesorías
                        y abogados: con vuestros casos reales, con el secreto profesional por
                        delante y con la evidencia del Art. 4 que un despacho debe poder enseñar.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.02rem", padding: "1rem 2.25rem", boxShadow: "var(--shadow-glow)" }}>
                        Consulta gratuita para tu despacho
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
                        Formación en IA para despachos, con sus casos y sus datos protegidos:
                        alfabetización del Art. 4 desde 600€, taller intensivo de un día entre
                        900€ y 1.400€, programa de 16 horas desde 2.400€.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        No vengo de fuera del sector: construyo los paneles que despachos de
                        administración de fincas usan a diario desde enero de 2026, y he producido
                        la formación de AFCademIA para administradores. Enseño con lo que construyo.
                    </p>
                </div>
            </section>

            {/* El problema — filas */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">El problema</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Lo que pasa en los despachos ahora mismo
                        </h2>
                    </div>
                    {dolores.map((d) => (
                        <div key={d.titulo} className="fd-fila">
                            <i className={`fa-solid ${d.icon}`}></i>
                            <div>
                                <h3 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
                                    fontWeight: 600,
                                    color: "var(--color-text-main)",
                                    marginBottom: "0.35rem",
                                    lineHeight: 1.25,
                                }}>
                                    {d.titulo}
                                </h3>
                                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, margin: 0, maxWidth: 640 }}>
                                    {d.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Qué incluye — franja terracota */}
            <section style={{ padding: "4.5rem 0", background: "linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Qué incluye</span>
                    <h2 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                        fontWeight: 600,
                        color: "#faf6ef",
                        margin: "0.8rem 0 2rem",
                        lineHeight: 1.2,
                    }}>
                        Un programa para el despacho, no un curso genérico
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
                        Formatos y tarifas completos en la{" "}
                        <Link href="/servicios/formacion-ia-empresas" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            formación en IA para empresas
                        </Link>
                        . Y si el despacho además quiere quitarse trabajo de encima, mira el{" "}
                        <Link href="/automatizacion-administradores-fincas" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            panel para administradores de fincas
                        </Link>{" "}
                        que ya funciona en despachos reales.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Lo que preguntan los despachos
                        </h2>
                    </div>
                    {faqs.map((f) => (
                        <details key={f.question} className="fd-faq">
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
                        ¿Formamos a tu despacho?
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos gratis: te digo qué formación toca, con qué casos y qué evidencia guardar.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir consulta para mi despacho
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .fd-fila {
                    display: grid;
                    grid-template-columns: 2.4rem 1fr;
                    gap: 1rem;
                    align-items: start;
                    padding: 1.5rem 0.3rem;
                    border-top: 1px solid var(--color-border);
                }
                .fd-fila:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .fd-fila i {
                    color: var(--color-primary);
                    font-size: 1.3rem;
                    margin-top: 0.35rem;
                    text-align: center;
                }
                .fd-faq {
                    border-top: 1px solid var(--color-border);
                }
                .fd-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .fd-faq summary {
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
                .fd-faq summary::-webkit-details-marker {
                    display: none;
                }
                .fd-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .fd-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .fd-faq[open] summary i {
                    transform: rotate(180deg);
                }
                @media (max-width: 600px) {
                    h1 br { display: none; }
                    .fd-fila {
                        grid-template-columns: 1fr;
                        gap: 0.4rem;
                    }
                    .fd-fila i { text-align: left; }
                }
            `}</style>
        </main>
    );
}
