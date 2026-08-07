import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioCurso from "@/components/FormularioCurso";
import FormacionTabs from "@/components/FormacionTabs";

export const metadata: Metadata = {
    title: "Formación en IA para Centros Educativos",
    description:
        "Formación de claustro en IA para colegios, institutos y FP: talleres para docentes, política de uso del centro y cumplimiento del Art. 4 del AI Act.",
    alternates: { canonical: "https://automatizatelo.com/formacion/centros-educativos" },
    openGraph: {
        title: "IA para tu claustro: formación práctica para centros educativos",
        description: "Talleres para docentes, política de uso de IA y alfabetización del Art. 4, con evidencia documental.",
        url: "https://automatizatelo.com/formacion/centros-educativos",
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

const temario = [
    {
        num: "01",
        titulo: "La IA en el centro: fundamentos y marco legal",
        puntos: [
            "Qué es (y qué no es) la IA generativa: los mitos habituales de la sala de profesores",
            "Cómo está cambiando la forma de aprender — y de copiar",
            "El Art. 4 del Reglamento Europeo: qué obliga exactamente al centro desde febrero de 2025",
            "La educación como ámbito sensible del Reglamento: qué implica en la práctica",
            "RGPD con menores: qué datos no salen nunca del centro y qué herramientas pueden usarse",
            "Comunicación a familias y qué documentación debe guardar el centro",
        ],
    },
    {
        num: "02",
        titulo: "Herramientas de IA para el trabajo docente",
        puntos: [
            "Los asistentes generalistas bien configurados: instrucciones con contexto educativo propio",
            "Preparar clases y programaciones en la mitad de tiempo",
            "Materiales, exámenes, rúbricas y ejercicios: generar y revisar con criterio",
            "Adaptaciones por nivel: la misma actividad en varias dificultades",
            "NotebookLM como base documental del centro: normativas, protocolos y actas siempre a mano",
            "La regla de oro con datos de alumnos: qué no se pega nunca en una IA",
        ],
    },
    {
        num: "03",
        titulo: "Riesgos pedagógicos y política del centro",
        puntos: [
            "Trabajos hechos con IA: por qué los detectores no funcionan y qué hacer en su lugar",
            "Diseñar tareas donde la IA sea herramienta y no atajo",
            "Alucinaciones, sesgos y deepfakes: los riesgos reales, sin alarmismo",
            "La política de uso del centro: qué incluir, cómo redactarla y cómo comunicarla",
            "Evaluar en un mundo con ChatGPT: criterios que sobreviven",
            "El registro formativo: cómo queda acreditado el Art. 4",
        ],
    },
];

const bloques: { num: string; titulo: string; desc: string; href?: string; enlaceTexto?: string }[] = [
    {
        num: "01",
        titulo: "Política de uso de IA del centro",
        desc: "Un documento marco, trabajado con dirección: qué pueden hacer docentes y alumnos, cómo se cita la IA y cómo se evalúa.",
    },
    {
        num: "02",
        titulo: "Cursos e-learning a medida (SCORM)",
        desc: "Produzco los cursos que el centro necesite — del tema que sea — instalados en vuestra plataforma para siempre, con registro por alumno.",
        href: "/formacion/cursos-a-medida",
        enlaceTexto: "Cómo funciona →",
    },
    {
        num: "03",
        titulo: "Taller para alumnado: IA y el primer empleo",
        desc: "Para etapas superiores — 4º ESO, Bachillerato y FP: usar la IA para estudiar mejor (no para copiar) y para lo que viene después: CV, cartas y preparación de entrevistas.",
        href: "/formacion/alumnado",
        enlaceTexto: "Ver el taller →",
    },
];

export default function CentrosEducativosPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <Header />

            {/* Hero con foto de fondo + velo lateral y formulario translúcido */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/claustro.webp"
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0 }}
                />
                <div aria-hidden="true" style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(90deg, rgba(28,25,23,0.62) 0%, rgba(28,25,23,0.42) 38%, rgba(28,25,23,0.12) 65%, transparent 85%), linear-gradient(180deg, rgba(28,25,23,0.18) 0%, transparent 40%)",
                }} />
                <div className="container fc-hero-grid fh-foto" style={{ position: "relative", zIndex: 2 }}>
                    <div>
                    <span className="kicker-mono" style={{ color: "#f6c39c" }}>
                        <i className="fa-solid fa-graduation-cap" style={{ marginRight: "0.6rem" }}></i>
                        Formación IA · Centros educativos
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
                        Tus alumnos ya usan IA.{" "}<br />
                        <span style={{ color: "#f6c39c" }}>¿Y tu claustro?</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                        Formación práctica en IA para colegios, institutos y centros de FP:
                        talleres para docentes, política de uso del centro y el cumplimiento
                        del Art. 4 del AI Act — con la evidencia documental que lo acredita.
                    </p>
                    </div>

                    {/* Captura en el hero: el curso viaja como origen del lead */}
                    <FormularioCurso origen="Formación para centros educativos" />
                </div>
            </section>

            {/* Salta entre todas las formaciones sin volver atras */}
            <FormacionTabs />

            {/* El problema — split sobre crema: título a la izquierda, dolores con filete a la derecha */}
            <section style={{ padding: "3.6rem 0" }}>
                <div className="container ce2-problema-grid">
                    <div>
                        <span className="kicker-mono">El problema</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem" }}>
                            Lo que está pasando en los centros ahora mismo
                        </h2>
                        <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, margin: 0, fontSize: "0.95rem", maxWidth: 420 }}>
                            Cuatro señales de que a tu centro le toca ponerse con esto — probablemente
                            reconozcas más de una.
                        </p>
                    </div>
                    <div className="ce2-dolores">
                        {dolores.map((d) => (
                            <div key={d.titulo} className="ce2-dolor">
                                <h3>{d.titulo}</h3>
                                <p>{d.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* El curso de claustro — split degradado, como el curso estrella */}
            <section aria-label="El curso de claustro" style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                <div className="container ce2-mitades">
                    <div className="ce2-mitad">
                        <span className="ce2-marca" aria-hidden="true">★</span>
                        <div className="ce2-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>El curso de claustro</span>
                            <h2 className="ce2-titulo">Un día para poner al claustro <span style={{ color: "#f6c39c" }}>al día</span></h2>
                            <p className="ce2-sub">
                                Un solo curso que cubre la alfabetización obligatoria del Art. 4 y la
                                práctica real de aula — cada docente sale con cosas montadas para SU
                                asignatura, y el centro con su evidencia formativa.
                            </p>
                            <div className="ce2-datos">
                                <span>1 día · 8 h (o 4 + 4)</span>
                                <span>Presencial · remoto · SCORM</span>
                                <span>Certificado + registro del Art. 4</span>
                                <span className="ce2-dato-precio">900 – 1.400 € · precio cerrado</span>
                            </div>
                            <div className="ce2-enlaces">
                                <a href="#temario" className="ce2-enlace">Ver el temario completo ↓</a>
                                <Link href="/precios" className="ce2-enlace">Ver la tabla de precios →</Link>
                            </div>
                            <p className="ce2-nota">
                                ¿Solo necesitáis el mínimo legal? La{" "}
                                <Link href="/formacion/ai-act">alfabetización suelta, desde 600€ →</Link>
                            </p>
                        </div>
                    </div>
                    <div className="ce2-mitad">
                        <div className="ce2-cuerpo">
                            <div className="ce2-sesion">
                                <div className="ce2-cab">
                                    <span className="mono-label" style={{ color: "#f6c39c" }}>Bloque 01</span>
                                    <span className="ce2-badge">Art. 4 incluido</span>
                                </div>
                                <h3>Fundamentos y marco legal</h3>
                                <p>Qué es la IA, el Reglamento Europeo y el RGPD con menores — la alfabetización obligatoria, cubierta.</p>
                            </div>
                            <div className="ce2-sesion ce2-sesion-2">
                                <div className="ce2-cab">
                                    <span className="mono-label" style={{ color: "#f6c39c" }}>Bloque 02</span>
                                    <span className="ce2-badge">100% práctico</span>
                                </div>
                                <h3>Herramientas para el docente</h3>
                                <p>Clases, materiales, rúbricas y adaptaciones por nivel — cada docente monta cosas para su asignatura.</p>
                            </div>
                            <div className="ce2-sesion ce2-sesion-2">
                                <div className="ce2-cab">
                                    <span className="mono-label" style={{ color: "#f6c39c" }}>Bloque 03</span>
                                    <span className="ce2-badge">Política del centro</span>
                                </div>
                                <h3>Riesgos y política</h3>
                                <p>Tareas a prueba de IA, evaluar en un mundo con ChatGPT y la política de uso del centro, redactada.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Temario del curso de claustro — continuación en tinta del split */}
            <section id="temario" style={{ padding: "2.8rem 0 3.4rem", background: "#1c1917", scrollMarginTop: "6rem" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <h2 className="ce2-etiqueta" style={{ marginBottom: "0.8rem" }}>El temario del curso de claustro, bloque a bloque</h2>
                    <p style={{
                        textAlign: "center",
                        color: "rgba(250,246,239,0.6)",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                        margin: "0 0 2rem",
                    }}>
                        El punto de partida se ajusta al nivel real del claustro en la reunión previa con dirección.
                    </p>
                    {temario.map((b, i) => (
                        <details key={b.num} className="ct-acordeon" open={i === 0}>
                            <summary>
                                <span className="ct-acordeon-num mono-label">{b.num}</span>
                                <span className="ct-acordeon-titulo">{b.titulo}</span>
                                <i className="fas fa-chevron-down"></i>
                            </summary>
                            <ul>
                                {b.puntos.map((p) => (
                                    <li key={p}>{p}</li>
                                ))}
                            </ul>
                        </details>
                    ))}
                </div>
            </section>

            {/* El programa completo — banda tinta con los 4 bloques */}
            <section style={{ padding: "3.4rem 0", background: "#1c1917" }}>
                <div className="container">
                    <h2 className="ce2-etiqueta">Además del curso: el programa completo del centro</h2>
                    <div className="ce2-bloques">
                        {bloques.map((b) => (
                            <div key={b.num} className="ce2-bloque">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>{b.num}</span>
                                <h3>{b.titulo}</h3>
                                <p>{b.desc}</p>
                                {b.href && (
                                    <Link href={b.href} className="ce2-bloque-enlace">{b.enlaceTexto ?? "Cómo funciona →"}</Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Precios en cifras + aviso honesto del baremo */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917", borderTop: "1px solid rgba(250,246,239,0.08)" }}>
                <div className="container">
                    <div className="ce2-cifras">
                        <div className="ce2-cifra">
                            <span className="ce2-cifra-valor">desde 600 €</span>
                            <span className="ce2-cifra-etiqueta">Alfabetización · Art. 4</span>
                        </div>
                        <div className="ce2-cifra">
                            <span className="ce2-cifra-valor">900 – 1.400 €</span>
                            <span className="ce2-cifra-etiqueta">Taller de claustro · 1 día</span>
                        </div>
                        <div className="ce2-cifra">
                            <span className="ce2-cifra-valor">desde 1.900 €</span>
                            <span className="ce2-cifra-etiqueta">Curso SCORM en vuestra plataforma</span>
                        </div>
                    </div>
                    <p className="ce2-cifras-pie">
                        Aviso honesto: esta formación <strong>no puntúa en el baremo de oposiciones</strong> —
                        es para el centro y su evidencia del Art. 4 ·{" "}
                        <Link href="/precios">Ver la tabla de precios →</Link>
                    </p>
                </div>
            </section>

            {/* FAQ — split en tinta con el CTA del centro integrado */}
            <section style={{ padding: "4rem 0", background: "#1c1917", borderTop: "1px solid rgba(250,246,239,0.08)" }}>
                <div className="container ce2-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem", color: "#faf6ef" }}>
                            Lo que preguntan los centros
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.65, margin: "0 0 1.6rem", fontSize: "0.95rem" }}>
                            30 minutos con dirección, gratis: os digo qué formación toca,
                            en qué formato y qué evidencia guardar.
                        </p>
                        <Link href="/#contact" className="ce2-cta">Pedir consulta para mi centro →</Link>
                    </div>
                    <div>
                        {faqs.map((f) => (
                            <details key={f.question} className="ce-faq">
                                <summary>
                                    <span>{f.question}</span>
                                    <i className="fas fa-chevron-down"></i>
                                </summary>
                                <p style={{ padding: "0 0.4rem 1.5rem", color: "rgba(250,246,239,0.75)", lineHeight: 1.7, margin: 0 }}>{f.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
                .fh-foto .fc-card {
                    background: rgba(28, 25, 23, 0.62);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                }
                .ce2-problema-grid {
                    display: grid;
                    grid-template-columns: 0.8fr 1.2fr;
                    gap: 4rem;
                    align-items: center;
                }
                .ce2-dolores {
                    display: flex;
                    flex-direction: column;
                    gap: 1.2rem;
                    border-left: 2px solid rgba(234, 88, 12, 0.35);
                    padding-left: 1.6rem;
                }
                .ce2-dolor h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    margin: 0 0 0.25rem;
                    line-height: 1.3;
                }
                .ce2-dolor p {
                    color: var(--color-text-muted);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                @media (max-width: 800px) {
                    .ce2-problema-grid { grid-template-columns: 1fr; gap: 1.8rem; }
                    .ce2-dolores { border-left: none; padding-left: 0; }
                }
                .ct-acordeon {
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                }
                .ct-acordeon:last-of-type {
                    border-bottom: 1px solid rgba(250, 246, 239, 0.14);
                }
                .ct-acordeon summary {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.3rem 0.4rem;
                    cursor: pointer;
                }
                .ct-acordeon summary::-webkit-details-marker { display: none; }
                .ct-acordeon-num { color: #f6c39c; flex-shrink: 0; }
                .ct-acordeon-titulo {
                    flex: 1;
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.1rem, 2.1vw, 1.35rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.3;
                    transition: color 0.2s ease;
                }
                .ct-acordeon summary:hover .ct-acordeon-titulo { color: #f6c39c; }
                .ct-acordeon summary i {
                    color: #f6c39c;
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .ct-acordeon[open] summary i { transform: rotate(180deg); }
                .ct-acordeon ul {
                    margin: 0;
                    padding: 0 0.4rem 1.5rem 3rem;
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 0.55rem;
                }
                .ct-acordeon ul li {
                    color: rgba(250, 246, 239, 0.75);
                    line-height: 1.55;
                    font-size: 0.95rem;
                    padding-left: 1.1rem;
                    position: relative;
                }
                .ct-acordeon ul li::before {
                    content: "·";
                    position: absolute;
                    left: 0.2rem;
                    color: #f6c39c;
                    font-weight: 700;
                }
                @media (max-width: 600px) {
                    .ct-acordeon ul { padding-left: 1.5rem; }
                }
                .ce2-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .ce2-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .ce2-marca {
                    position: absolute;
                    top: 0.6rem;
                    right: 1.4rem;
                    font-size: clamp(5rem, 9vw, 8rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .ce2-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3rem 0;
                    width: 100%;
                }
                .ce2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .ce2-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.65;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .ce2-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .ce2-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .ce2-datos .ce2-dato-precio { color: #f6c39c; }
                .ce2-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem 1.3rem;
                    margin-top: 1rem;
                }
                .ce2-enlace {
                    display: inline-block;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .ce2-enlace:hover {
                    color: #faf6ef;
                    transform: translateX(6px);
                }
                .ce2-nota {
                    margin: 0.6rem 0 0;
                    font-size: 0.85rem;
                    color: rgba(250, 246, 239, 0.6);
                }
                .ce2-nota a {
                    color: #f6c39c;
                    font-weight: 600;
                }
                .ce2-nota a:hover { color: #faf6ef; }
                .ce2-sesion {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                }
                .ce2-sesion-2 {
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                    padding-top: 1.3rem;
                    margin-top: 1.3rem;
                }
                .ce2-cab {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                }
                .ce2-badge {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.65rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: #faf6ef;
                    border: 1px solid rgba(250, 246, 239, 0.35);
                    border-radius: 50px;
                    padding: 0.25rem 0.7rem;
                    white-space: nowrap;
                }
                .ce2-sesion h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.2;
                }
                .ce2-sesion p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                .ce2-lista { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.4rem; }
                .ce2-item {
                    display: flex;
                    align-items: baseline;
                    justify-content: space-between;
                    gap: 1rem;
                    border-top: 1px solid rgba(250, 246, 239, 0.12);
                    padding-top: 0.5rem;
                    color: #faf6ef;
                    font-size: 0.92rem;
                    font-weight: 600;
                }
                .ce2-punto {
                    color: rgba(250, 246, 239, 0.6);
                    font-size: 0.8rem;
                    font-weight: 400;
                    text-align: right;
                }
                @media (max-width: 800px) {
                    .ce2-mitades { grid-template-columns: 1fr; gap: 0; }
                    .ce2-cuerpo { padding: 2.2rem 0; }
                }
                .ce2-etiqueta {
                    text-align: center;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.55);
                    margin: 0 0 2.2rem;
                }
                .ce2-bloques {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }
                .ce2-bloque h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0.5rem 0;
                    line-height: 1.3;
                }
                .ce2-bloque p {
                    color: rgba(250, 246, 239, 0.72);
                    line-height: 1.6;
                    margin: 0;
                    font-size: 0.92rem;
                }
                .ce2-bloque-enlace {
                    display: inline-block;
                    margin-top: 0.6rem;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.88rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .ce2-bloque-enlace:hover {
                    color: #faf6ef;
                    transform: translateX(6px);
                }
                @media (max-width: 800px) {
                    .ce2-bloques { grid-template-columns: 1fr; }
                }
                .ce2-cifras {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }
                .ce2-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .ce2-cifra-valor {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.7rem, 3.4vw, 2.6rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .ce2-cifra-etiqueta {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                .ce2-cifras-pie {
                    text-align: center;
                    margin: 1.8rem 0 0;
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.65);
                }
                .ce2-cifras-pie strong { color: #f6c39c; }
                .ce2-cifras-pie a {
                    color: #f6c39c;
                    font-weight: 600;
                }
                .ce2-cifras-pie a:hover { color: #faf6ef; }
                @media (max-width: 700px) {
                    .ce2-cifras { grid-template-columns: 1fr; gap: 1.4rem; }
                }
                .ce2-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .ce2-faq-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .ce2-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .ce2-cta:hover {
                    background: #faf6ef;
                    transform: translateY(-2px);
                }
                .ce-faq {
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                }
                .ce-faq:last-of-type {
                    border-bottom: 1px solid rgba(250, 246, 239, 0.14);
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
                    color: #faf6ef;
                    line-height: 1.3;
                    transition: color 0.2s ease, padding-left 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .ce-faq summary::-webkit-details-marker { display: none; }
                .ce-faq summary:hover {
                    color: #f6c39c;
                    padding-left: 1rem;
                }
                .ce-faq summary i {
                    color: #f6c39c;
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .ce-faq[open] summary i { transform: rotate(180deg); }
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
