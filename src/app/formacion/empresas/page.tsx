import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioCurso from "@/components/FormularioCurso";
import FormacionTabs from "@/components/FormacionTabs";

export const metadata: Metadata = {
    title: "Formación en IA In-Company para Empresas",
    description:
        "Formación in-company de IA con certificado: el curso estrella (Alfabetización Art. 4 + vuestra herramienta), cursos de ChatGPT, Copilot, Gemini y Claude, y precios públicos.",
    alternates: { canonical: "https://automatizatelo.com/formacion/empresas" },
    openGraph: {
        title: "Formación en IA in-company: curso estrella y catálogo",
        description: "Alfabetización obligatoria del Art. 4 + taller práctico con la herramienta que ya usa tu equipo. Precios a la vista.",
        url: "https://automatizatelo.com/formacion/empresas",
    },
};

const faqs = [
    {
        question: "¿Cuánto cuesta formar a mi equipo?",
        answer: "Un taller intensivo de un día (8 horas) cuesta entre 900€ y 1.400€. Un programa in-company de 16 horas repartidas en varias semanas, desde 2.400€. El bloque de alfabetización del Art. 4 (4-8 horas), desde 600€. Y un curso e-learning a medida en SCORM para tu plataforma, desde 1.900€. El precio final depende del número de participantes y la modalidad, y se cierra en la propuesta.",
    },
    {
        question: "¿Qué evidencia queda para acreditar el Art. 4?",
        answer: "Cada participante recibe un certificado nominal de aprovechamiento, y la empresa se queda con el registro formativo fechado (contenidos, horas y asistentes) y el material del curso. No existe una certificación oficial del artículo 4 — lo que se acredita ante una inspección es exactamente ese expediente.",
    },
    {
        question: "¿Se adapta por departamentos y niveles?",
        answer: "Sí, y es lo recomendable: administración, comercial, técnico y dirección usan la IA para cosas distintas. El bloque de alfabetización es común, y el taller práctico se monta por equipo con los casos reales de cada puesto. También se puede impartir en varios turnos para no parar la operativa.",
    },
    {
        question: "¿Presencial o en remoto?",
        answer: "Como te venga mejor: presencial en Barcelona y alrededores, aula virtual en directo para equipos distribuidos por toda España, o el curso producido en e-learning (SCORM) para que cada persona lo haga a su ritmo con registro individual.",
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

const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Formación en IA in-company para empresas",
    "serviceType": "Formación in-company en Inteligencia Artificial",
    "description": "Curso estrella (Alfabetización del Art. 4 + herramienta), cursos por herramienta (ChatGPT, Copilot 365, Gemini, Claude), programas in-company y e-learning SCORM.",
    "url": "https://automatizatelo.com/formacion/empresas",
    "areaServed": "ES",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
        "telephone": "+34678399182",
    },
};

export default function FormacionEmpresasPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
            <Header />

            {/* Hero editorial con captura */}
            <section style={{
                padding: "9rem 0 3.5rem",
                background: "radial-gradient(circle at 20% 20%, rgba(234, 88, 12, 0.07) 0%, transparent 55%)",
            }}>
                <div className="container fc-hero-grid">
                    <div>
                        <span className="kicker-mono">
                            <i className="fa-solid fa-building" style={{ marginRight: "0.6rem" }}></i>
                            Formación in-company · Empresas
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
                            Tu equipo usando la IA{" "}<br /><span style={{ color: "var(--color-primary)" }}>con criterio y con certificado</span>
                        </h1>
                        <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 620 }}>
                            El bloque obligatorio del Art. 4 más el taller práctico con la herramienta
                            que ya usáis — con vuestros casos reales, no ejemplos de laboratorio.
                        </p>
                    </div>

                    <FormularioCurso origen="Formación in-company" opciones={["Curso estrella: Alfabetización + herramienta", "Alfabetización del Art. 4", "Curso de ChatGPT", "Curso de Copilot 365", "Curso de Gemini + NotebookLM", "Curso de Claude", "Programa in-company (16 h)", "Curso e-learning a medida (SCORM)"]} />
                </div>
            </section>

            <FormacionTabs />

            {/* En corto */}
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
                        Formación in-company de IA con certificado nominal y registro del Art. 4:
                        el curso estrella (4+4 h) desde 1.200€, cursos por herramienta desde 900€
                        y la alfabetización obligatoria desde 600€.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        Presencial en Barcelona, aula virtual para toda España o e-learning SCORM.
                        Cada formación deja la <strong style={{ color: "var(--color-text-main)" }}>evidencia documental</strong> que
                        exige el Reglamento Europeo de IA.
                    </p>
                </div>
            </section>

            {/* Curso estrella: el formato que mejor funciona */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Curso estrella</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            Alfabetización IA + vuestra herramienta de trabajo
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 680 }}>
                            El formato que mejor funciona: una sesión cubre la alfabetización obligatoria del Art. 4 y la otra aplica la herramienta concreta que ya usa tu equipo, con vuestros casos reales. Se adapta por departamento y nivel.
                        </p>
                    </div>

                    <div className="ce-sesiones">
                        <div className="ce-sesion ce-sesion-1">
                            <div className="ce-cab">
                                <span className="mono-label">Sesión 01</span>
                                <span className="ce-badge">Obligatoria · Art. 4</span>
                            </div>
                            <h3>Alfabetización en IA</h3>
                            <p>Fundamentos, riesgos reales, marco jurídico del Reglamento Europeo, protección de datos y cadena de responsabilidad. El bloque que la ley exige — con certificado nominal y registro formativo.</p>
                            <ul>
                                <li>Qué es (y qué no es) la IA</li>
                                <li>Peligros reales, sin alarmismo</li>
                                <li>Reglamento EU de IA y RGPD</li>
                                <li>Uso responsable y gobernanza interna</li>
                            </ul>
                        </div>
                        <div className="ce-sesion ce-sesion-2">
                            <div className="ce-cab">
                                <span className="mono-label">Sesión 02</span>
                                <span className="ce-badge">Taller 100% práctico</span>
                            </div>
                            <h3>Vuestra herramienta, dominada</h3>
                            <p>Adaptado a vuestro ecosistema real: cada rol sale con casos de uso montados para su trabajo, no con ejemplos de laboratorio.</p>
                            <div className="ce-herramientas">
                                <span className="ce-herr-titulo">Con la herramienta que ya usáis</span>
                                <Link href="/formacion/chatgpt" className="ce-herr ce-herr-link"><span>ChatGPT</span><span className="ce-punto">asistentes por puesto y tareas programadas →</span></Link>
                                <Link href="/formacion/copilot" className="ce-herr ce-herr-link"><span>Microsoft Copilot</span><span className="ce-punto">si vivís en Word, Excel y Outlook →</span></Link>
                                <Link href="/formacion/gemini" className="ce-herr ce-herr-link"><span>Google Gemini + NotebookLM</span><span className="ce-punto">si trabajáis en Workspace →</span></Link>
                                <Link href="/formacion/claude" className="ce-herr ce-herr-link"><span>Claude</span><span className="ce-punto">documentos largos y agentes →</span></Link>
                            </div>
                        </div>
                    </div>

                    <div className="ce-datos">
                        <div className="ce-dato">
                            <span className="mono-label" style={{ color: "var(--color-primary)" }}>Duración</span>
                            <strong>Desde 4 + 4 h</strong>
                            <span className="ce-dato-sub">Adaptable por nivel y equipo</span>
                        </div>
                        <div className="ce-dato">
                            <span className="mono-label" style={{ color: "var(--color-primary)" }}>Cómo se imparte</span>
                            <strong>3 formatos</strong>
                            <span className="ce-dato-sub">Presencial · aula virtual · e-learning (SCORM)</span>
                        </div>
                        <div className="ce-dato">
                            <span className="mono-label" style={{ color: "var(--color-primary)" }}>Acredita</span>
                            <strong>Certificado nominal</strong>
                            <span className="ce-dato-sub">Y registro formativo del Art. 4, fechado</span>
                        </div>
                        <div className="ce-dato">
                            <span className="mono-label" style={{ color: "var(--color-primary)" }}>Inversión</span>
                            <strong>Desde 1.200 €</strong>
                            <span className="ce-dato-sub">Precio cerrado por escrito, sin permanencia</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* El curso se monta con vuestro trabajo */}
            <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container fpv-grid" style={{ maxWidth: 1000 }}>
                    <div>
                        <span className="kicker-mono">Formación preparada para tu equipo</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "1rem" }}>
                            El curso se monta con vuestro trabajo
                        </h2>
                        <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1.6rem", maxWidth: 560 }}>
                            Antes de la primera sesión recojo vuestros casos: qué herramientas ya tenéis
                            contratadas, qué tareas comen más horas, qué dudas y qué datos sensibles maneja
                            cada puesto. Los ejercicios del curso salen de ahí — no de una plantilla.
                        </p>
                        <div className="fpv-punto">
                            <i className="fa-solid fa-compass" style={{ color: "var(--color-primary)" }}></i>
                            <div>
                                <h3>Decisiones que salen resueltas</h3>
                                <p>Qué herramientas se aprueban y cuáles no, qué datos no se pegan nunca en una IA y quién revisa qué. El equipo sale con criterio, no solo con trucos.</p>
                            </div>
                        </div>
                        <div className="fpv-punto">
                            <i className="fa-solid fa-box-archive" style={{ color: "var(--color-primary)" }}></i>
                            <div>
                                <h3>Lo que queda después</h3>
                                <p>Certificado nominal por participante, registro formativo fechado, el material del curso y los casos montados en clase — que el equipo sigue usando el lunes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="fpv-foto">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/claustro.webp" alt="Formación de equipos en IA" loading="lazy" />
                    </div>
                </div>
            </section>

            {/* Catálogo por herramienta */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Catálogo</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            O elige el curso de una herramienta concreta
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                            Si tenéis claro qué queréis dominar, cada herramienta tiene su curso. Todos con
                            certificado y con vuestros casos reales.
                        </p>
                    </div>

                    <div className="fpc-grid">
                        {[
                            {
                                href: "/formacion/ai-act",
                                foto: "/auditoria.webp",
                                badge: "Obligatoria · Art. 4",
                                titulo: "Alfabetización en IA",
                                desc: "El bloque que exige el Reglamento: riesgos, marco jurídico y uso responsable.",
                                datos: "4–8 h · toda la plantilla",
                            },
                            {
                                href: "/formacion/chatgpt",
                                foto: "/escribiendo-ventana.webp",
                                badge: "El más pedido",
                                titulo: "ChatGPT",
                                desc: "GPTs por puesto, proyectos y tareas programadas. De básico a avanzado.",
                                datos: "1 día · 8 h",
                            },
                            {
                                href: "/formacion/copilot",
                                foto: "/despachos.webp",
                                badge: "Microsoft 365",
                                titulo: "Copilot 365",
                                desc: "Si vivís en Word, Excel, Outlook y Teams: la IA dentro del flujo de oficina.",
                                datos: "1 día · 8 h",
                            },
                            {
                                href: "/formacion/gemini",
                                foto: "/academias.webp",
                                badge: "Google Workspace",
                                titulo: "Gemini + NotebookLM",
                                desc: "Para equipos en Workspace, con NotebookLM para el conocimiento interno.",
                                datos: "1 día · 8 h",
                            },
                            {
                                href: "/formacion/claude",
                                foto: "/equipos-directivos.webp",
                                badge: "Documentos y agentes",
                                titulo: "Claude",
                                desc: "Documentos largos, proyectos y agentes. La herramienta con la que construyo mis propios sistemas.",
                                datos: "1 día · 8 h",
                            },
                        ].map((c) => (
                            <Link key={c.titulo} href={c.href} className="fpc-card">
                                <span className="fpc-foto">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={c.foto} alt={`Curso de ${c.titulo}`} loading="lazy" />
                                    <span className="fpc-badge">{c.badge}</span>
                                </span>
                                <span className="fpc-cuerpo">
                                    <span className="fpc-titulo">{c.titulo}</span>
                                    <span className="fpc-desc">{c.desc}</span>
                                    <span className="fpc-datos mono-label">{c.datos}</span>
                                </span>
                            </Link>
                        ))}
                        <Link href="/#contact" className="fpc-card fpc-card-otra">
                            <span className="fpc-cuerpo" style={{ justifyContent: "center", textAlign: "center", minHeight: "220px" }}>
                                <span className="fpc-titulo" style={{ color: "var(--color-primary)" }}>¿Otra herramienta?</span>
                                <span className="fpc-desc">La formación se monta sobre lo que ya usáis. Cuéntame qué tenéis y te propongo el curso.</span>
                                <span style={{ color: "var(--color-primary)", fontWeight: 600, fontSize: "0.92rem" }}>Cuéntamelo →</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Formatos y precios */}
            <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Formatos y precios</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            Los precios, a la vista
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                            Publico las tarifas porque es la primera pregunta de todo el mundo.
                            El precio final depende de participantes y modalidad, y se cierra en la propuesta.
                        </p>
                    </div>

                    <div className="fp-tabla-wrap">
                        <table className="fp-tabla">
                            <thead>
                                <tr>
                                    <th>Formato</th>
                                    <th>Duración</th>
                                    <th>Para quién</th>
                                    <th>Inversión</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Taller intensivo</strong><span>Un día, un tema, saliendo con algo montado.</span></td>
                                    <td>1 día · 8 h</td>
                                    <td>Un equipo o departamento</td>
                                    <td>900 – 1.400 €</td>
                                </tr>
                                <tr>
                                    <td><strong>Programa in-company</strong><span>Sesiones en varias semanas, con trabajo real aplicado al puesto entre una y otra.</span></td>
                                    <td>16 h · 4 semanas</td>
                                    <td>Mandos y equipos</td>
                                    <td>Desde 2.400 €</td>
                                </tr>
                                <tr>
                                    <td><strong>Alfabetización en IA (Art. 4)</strong><span>El bloque de cumplimiento: qué es la IA, riesgos, uso responsable y obligaciones.</span></td>
                                    <td>4 – 8 h</td>
                                    <td>Toda la plantilla</td>
                                    <td>Desde 600 €</td>
                                </tr>
                                <tr>
                                    <td><strong>Curso estrella: Alfabetización + herramienta</strong><span>El formato que mejor funciona: el bloque del Art. 4 más el taller práctico con vuestra herramienta.</span></td>
                                    <td>4 + 4 h</td>
                                    <td>Toda la plantilla o por equipos</td>
                                    <td>Desde 1.200 €</td>
                                </tr>
                                <tr>
                                    <td><strong>Curso e-learning a medida (SCORM)</strong><span>Tu formación producida como curso, instalada en tu plataforma para siempre.</span></td>
                                    <td>A medida</td>
                                    <td>Empresas con plataforma propia</td>
                                    <td>Desde 1.900 €</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginTop: "1.5rem", maxWidth: 720 }}>
                        Toda la formación deja <strong style={{ color: "var(--color-text-main)" }}>evidencia documental</strong>:
                        certificado nominal por participante y registro formativo fechado — el expediente con el que
                        la empresa acredita la{" "}
                        <Link href="/formacion/ai-act" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            alfabetización obligatoria del Art. 4 del AI Act
                        </Link>. Los cursos e-learning a medida tienen{" "}
                        <Link href="/formacion/cursos-a-medida" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            su página propia
                        </Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Preguntas frecuentes
                        </h2>
                    </div>
                    {faqs.map((f) => (
                        <details key={f.question} className="fe-faq">
                            <summary>
                                <span>{f.question}</span>
                                <i className="fas fa-chevron-down"></i>
                            </summary>
                            <p style={{ padding: "0 0.4rem 1.5rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0, maxWidth: 720 }}>{f.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* CTA final */}
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
                .ce-sesiones {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                .ce-sesion {
                    border-radius: 18px;
                    padding: 1.8rem;
                }
                .ce-sesion-1 {
                    background: linear-gradient(135deg, #b45309 0%, #7c2d12 60%, #431407 100%);
                }
                .ce-sesion-2 {
                    background: #1c1917;
                }
                .ce-sesion .ce-cab {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }
                .ce-sesion .mono-label { color: #f6c39c; }
                .ce-badge {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.68rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: #faf6ef;
                    border: 1px solid rgba(250,246,239,0.35);
                    border-radius: 50px;
                    padding: 0.3rem 0.8rem;
                    white-space: nowrap;
                }
                .ce-sesion h3 {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.3rem, 2.4vw, 1.7rem);
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0 0 0.6rem;
                    line-height: 1.2;
                }
                .ce-sesion p {
                    color: rgba(250,246,239,0.82);
                    line-height: 1.65;
                    font-size: 0.95rem;
                    margin: 0 0 1.1rem;
                }
                .ce-sesion ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 0.5rem 1rem;
                }
                .ce-sesion ul li {
                    color: rgba(250,246,239,0.9);
                    font-size: 0.9rem;
                    line-height: 1.4;
                    padding-left: 1.1rem;
                    position: relative;
                }
                .ce-sesion ul li::before {
                    content: "·";
                    position: absolute;
                    left: 0.2rem;
                    color: #f6c39c;
                    font-weight: 700;
                }
                .ce-herramientas { display: flex; flex-direction: column; gap: 0.5rem; }
                .ce-herr-titulo {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.68rem;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: rgba(250,246,239,0.55);
                    margin-bottom: 0.2rem;
                }
                .ce-herr {
                    display: flex;
                    align-items: baseline;
                    justify-content: space-between;
                    gap: 1rem;
                    border-top: 1px solid rgba(250,246,239,0.12);
                    padding-top: 0.5rem;
                    color: #faf6ef;
                    font-size: 0.92rem;
                    font-weight: 600;
                }
                .ce-herr-link:hover span:first-child { color: #f6c39c; }
                .ce-punto {
                    color: rgba(250,246,239,0.6);
                    font-size: 0.8rem;
                    font-weight: 400;
                    text-align: right;
                }
                .ce-datos {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1rem;
                }
                .ce-dato {
                    border: 1px solid var(--color-border);
                    border-radius: 14px;
                    padding: 1.1rem 1.3rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                    background: var(--color-card-bg, #fff);
                }
                .ce-dato strong {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    color: var(--color-text-main);
                }
                .ce-dato-sub { color: var(--color-text-muted); font-size: 0.82rem; line-height: 1.4; }
                .fpv-grid {
                    display: grid;
                    grid-template-columns: 1.15fr 1fr;
                    gap: 3rem;
                    align-items: center;
                }
                .fpv-punto {
                    display: grid;
                    grid-template-columns: 2rem 1fr;
                    gap: 0.8rem;
                    align-items: baseline;
                    padding: 1.1rem 0;
                    border-top: 1px solid var(--color-border);
                }
                .fpv-punto:last-of-type { padding-bottom: 0; }
                .fpv-punto i { font-size: 1.15rem; }
                .fpv-punto h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    margin: 0 0 0.3rem;
                    line-height: 1.3;
                }
                .fpv-punto p {
                    color: var(--color-text-muted);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                .fpv-foto {
                    border-radius: var(--radius-md, 18px);
                    overflow: hidden;
                    box-shadow: var(--shadow-card);
                    border: 1px solid var(--color-border);
                }
                .fpv-foto img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    min-height: 320px;
                    object-fit: cover;
                }
                @media (max-width: 800px) {
                    .fpv-grid { grid-template-columns: 1fr; gap: 1.8rem; }
                    .fpv-foto img { min-height: 220px; }
                }
                .fpc-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.3rem;
                }
                .fpc-card {
                    display: flex;
                    flex-direction: column;
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-md);
                    box-shadow: var(--shadow-card);
                    overflow: hidden;
                    color: inherit;
                    transition: transform 0.25s ease, border-color 0.25s ease;
                }
                .fpc-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(234, 88, 12, 0.4);
                }
                .fpc-foto {
                    position: relative;
                    display: block;
                    aspect-ratio: 16 / 10;
                    overflow: hidden;
                }
                .fpc-foto img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .fpc-card:hover .fpc-foto img { transform: scale(1.05); }
                .fpc-badge {
                    position: absolute;
                    top: 0.7rem;
                    left: 0.7rem;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.62rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    background: rgba(28, 25, 23, 0.85);
                    color: #f6c39c;
                    padding: 0.3rem 0.65rem;
                    border-radius: 6px;
                }
                .fpc-cuerpo {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                    padding: 1.15rem 1.25rem 1.3rem;
                    flex: 1;
                }
                .fpc-titulo {
                    font-family: var(--font-display, serif);
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    line-height: 1.25;
                }
                .fpc-desc {
                    font-size: 0.88rem;
                    color: var(--color-text-muted);
                    line-height: 1.55;
                    flex: 1;
                }
                .fpc-datos { color: var(--color-text-muted); }
                .fpc-card-otra {
                    border-style: dashed;
                    background: transparent;
                    box-shadow: none;
                }
                @media (max-width: 900px) {
                    .fpc-grid { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 600px) {
                    .fpc-grid { grid-template-columns: 1fr; }
                }
                .fp-tabla-wrap {
                    overflow-x: auto;
                }
                .fp-tabla {
                    width: 100%;
                    border-collapse: collapse;
                    min-width: 640px;
                }
                .fp-tabla th {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--color-text-muted);
                    text-align: left;
                    padding: 0.8rem 1rem;
                    border-bottom: 1px solid var(--color-border);
                }
                .fp-tabla td {
                    padding: 1.2rem 1rem;
                    border-bottom: 1px solid var(--color-border);
                    color: var(--color-text-muted);
                    vertical-align: top;
                    line-height: 1.5;
                    font-size: 0.95rem;
                }
                .fp-tabla td strong {
                    display: block;
                    font-family: var(--font-display, serif);
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    margin-bottom: 0.25rem;
                }
                .fp-tabla td span {
                    display: block;
                    font-size: 0.85rem;
                }
                .fp-tabla td:last-child {
                    font-weight: 700;
                    color: var(--color-primary);
                    white-space: nowrap;
                }
                .fe-faq {
                    border-top: 1px solid var(--color-border);
                }
                .fe-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .fe-faq summary {
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
                .fe-faq summary::-webkit-details-marker { display: none; }
                .fe-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .fe-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .fe-faq[open] summary i { transform: rotate(180deg); }
                @media (max-width: 600px) {
                    h1 br { display: none; }
                }
            `}</style>
        </main>
    );
}
