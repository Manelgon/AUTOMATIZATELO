import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Formación en IA para Centros Educativos",
    description:
        "Formación de claustro en IA para colegios, institutos y FP: talleres para docentes, política de uso del centro y cumplimiento del Art. 4 del AI Act.",
    alternates: { canonical: "https://automatizatelo.com/formacion-ia-centros-educativos" },
    openGraph: {
        title: "IA para tu claustro: formación práctica para centros educativos",
        description: "Talleres para docentes, política de uso de IA y alfabetización del Art. 4, con evidencia documental.",
        url: "https://automatizatelo.com/formacion-ia-centros-educativos",
    },
};

const faqs = [
    {
        question: "¿Esta formación puntúa en el baremo de oposiciones?",
        answer: "No, y prefiero decírtelo antes de que preguntes: solo puntúan los cursos homologados por universidades o administraciones educativas. Esta formación es para el centro, no para sumar puntos — su objetivo es que el claustro use la IA con criterio, que el centro tenga una política de uso y que quede la evidencia formativa que exige el Art. 4 del AI Act.",
    },
    {
        question: "¿El AI Act obliga también a un colegio?",
        answer: "Sí. El artículo 4 del Reglamento Europeo de IA obliga a cualquier organización que use sistemas de IA — y un centro donde los docentes usan ChatGPT, Copilot o plataformas con IA integrada lo es. Además, la educación aparece en el Reglamento entre los ámbitos de mayor sensibilidad, así que un centro tiene más motivos que la media para hacerlo bien y poder acreditarlo.",
    },
    {
        question: "¿Qué hacemos con los alumnos que ya usan IA para los trabajos?",
        answer: "Prohibirla no funciona: no se puede detectar con fiabilidad y ellos la van a seguir usando. Lo que sí funciona es una política de uso clara (qué está permitido, qué hay que citar, qué se evalúa de otra forma) y docentes formados para diseñar tareas donde la IA sea herramienta y no atajo. Ambas cosas salen del taller.",
    },
    {
        question: "¿La formación es presencial u online?",
        answer: "Como prefiera el centro: presencial en Barcelona y alrededores, en remoto en directo para toda España, o en formato curso e-learning (SCORM) instalado en la plataforma del centro para que cada docente lo haga a su ritmo y quede registro individual.",
    },
    {
        question: "¿Cuánto cuesta formar al claustro?",
        answer: "Las tarifas son las mismas que para empresas: taller intensivo de un día (8 horas) entre 900€ y 1.400€; bloque de alfabetización del Art. 4 (4-8 horas) desde 600€; curso e-learning a medida en SCORM desde 1.900€. El precio final depende del tamaño del claustro y la modalidad, y se cierra en la propuesta.",
    },
    {
        question: "¿Qué evidencia queda para el centro?",
        answer: "Certificado nominal por docente y registro formativo fechado con contenidos y horas. Es el expediente con el que el centro acredita la alfabetización en IA de su personal ante quien se lo pida — titularidad, inspección o familias.",
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
        icon: "fa-shuffle",
        titulo: "Cada docente usa la IA a su manera",
        desc: "Unos la dominan, otros la evitan y ninguno con un criterio común. El resultado: desigualdad entre aulas y cero garantías para el centro.",
    },
    {
        icon: "fa-file-pen",
        titulo: "Los alumnos ya entregan trabajos hechos con IA",
        desc: "Y el centro no tiene una política que diga qué está permitido, qué se cita y cómo se evalúa. Cada profesor improvisa la suya.",
    },
    {
        icon: "fa-clock",
        titulo: "Preparar, corregir y planificar se come las tardes",
        desc: "La IA bien usada devuelve horas de programaciones, rúbricas, adaptaciones y comunicaciones — pero hay que saber pedírselo.",
    },
    {
        icon: "fa-scale-balanced",
        titulo: "El Art. 4 del AI Act también obliga al centro",
        desc: "Si el personal usa IA, el centro debe garantizar su alfabetización y poder acreditarla. Aplica desde febrero de 2025.",
    },
];

const bloques = [
    {
        num: "01",
        titulo: "Taller de claustro: IA práctica para docentes",
        desc: "Un día de trabajo con las herramientas de verdad — los asistentes generalistas bien usados y las pensadas para docentes: preparar clases, generar materiales y rúbricas, adaptar actividades por niveles y quitarse de encima la parte mecánica de la corrección. Cada docente sale con cosas montadas para su asignatura.",
    },
    {
        num: "02",
        titulo: "Política de uso de IA del centro",
        desc: "Un documento marco, trabajado con el equipo directivo: qué pueden hacer docentes y alumnos, cómo se cita la IA en los trabajos, y cómo se evalúa en un mundo donde ChatGPT existe. Para que el criterio sea del centro, no de cada aula.",
    },
    {
        num: "03",
        titulo: "Alfabetización del Art. 4 para todo el personal",
        desc: "El bloque de cumplimiento: qué es la IA, riesgos, uso responsable y protección de datos con menores. Con certificado nominal y registro formativo fechado — la evidencia que el centro guarda.",
    },
    {
        num: "04",
        titulo: "Curso e-learning en vuestra plataforma (SCORM)",
        desc: "La formación producida como curso e instalada en la plataforma del centro, para nuevas incorporaciones y para que cada docente avance a su ritmo con registro individual. Se queda en el centro para siempre.",
    },
];

export default function CentrosEducativosPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <Header />

            {/* Hero editorial */}
            <section style={{
                padding: "9rem 0 3.5rem",
                background: "radial-gradient(circle at 20% 20%, rgba(234, 88, 12, 0.07) 0%, transparent 55%)",
            }}>
                <div className="container">
                    <span className="kicker-mono">
                        <i className="fa-solid fa-graduation-cap" style={{ marginRight: "0.6rem" }}></i>
                        Formación IA · Centros educativos
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
                        Tus alumnos ya usan IA.{" "}<br />
                        <span style={{ color: "var(--color-primary)" }}>¿Y tu claustro?</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 620 }}>
                        Formación práctica en IA para colegios, institutos y centros de FP:
                        talleres para docentes, política de uso del centro y el cumplimiento
                        del Art. 4 del AI Act — con la evidencia documental que lo acredita.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.02rem", padding: "1rem 2.25rem" }}>
                        Consulta gratuita para tu centro
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
                        Formación de claustro en IA, presencial o e-learning: taller práctico
                        para docentes desde 900€, alfabetización del Art. 4 desde 600€ y curso
                        SCORM para vuestra plataforma desde 1.900€.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        Y un aviso honesto por delante: esta formación{" "}
                        <strong style={{ color: "var(--color-text-main)" }}>no puntúa en el baremo de oposiciones</strong>{" "}
                        — solo lo hacen los cursos homologados. Está pensada para el centro:
                        que su claustro use la IA con criterio y que el cumplimiento quede acreditado.
                    </p>
                </div>
            </section>

            {/* El problema — filas */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">El problema</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Lo que está pasando en los centros ahora mismo
                        </h2>
                    </div>
                    {dolores.map((d) => (
                        <div key={d.titulo} className="ce-fila">
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
                        Un programa para el centro, no un curso genérico
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
                        Las tarifas y formatos son los de la{" "}
                        <Link href="/servicios/formacion-ia-empresas" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            formación en IA para empresas
                        </Link>
                        , y el detalle normativo está en la guía del{" "}
                        <Link href="/formacion-obligatoria-ai-act" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            Art. 4 del AI Act
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
                            Lo que preguntan los centros
                        </h2>
                    </div>
                    {faqs.map((f) => (
                        <details key={f.question} className="ce-faq">
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
                        ¿Ponemos al claustro por delante?
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos con dirección, gratis: os digo qué formación toca, en qué formato y qué evidencia guardar.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir consulta para mi centro
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .ce-fila {
                    display: grid;
                    grid-template-columns: 2.4rem 1fr;
                    gap: 1rem;
                    align-items: start;
                    padding: 1.5rem 0.3rem;
                    border-top: 1px solid var(--color-border);
                }
                .ce-fila:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .ce-fila i {
                    color: var(--color-primary);
                    font-size: 1.3rem;
                    margin-top: 0.35rem;
                    text-align: center;
                }
                .ce-faq {
                    border-top: 1px solid var(--color-border);
                }
                .ce-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .ce-faq summary {
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
                .ce-faq summary::-webkit-details-marker {
                    display: none;
                }
                .ce-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .ce-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .ce-faq[open] summary i {
                    transform: rotate(180deg);
                }
                @media (max-width: 600px) {
                    h1 br { display: none; }
                    .ce-fila {
                        grid-template-columns: 1fr;
                        gap: 0.4rem;
                    }
                    .ce-fila i { text-align: left; }
                }
            `}</style>
        </main>
    );
}
