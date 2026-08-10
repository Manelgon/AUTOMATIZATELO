import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioCurso from "@/components/FormularioCurso";
import FormacionTabs from "@/components/FormacionTabs";

export const metadata: Metadata = {
    title: "Formación en IA In-Company para Empresas",
    description:
        "Formación in-company con certificado: el curso estrella (Art. 4 + vuestra herramienta) y cursos de ChatGPT, Copilot, Gemini y Claude. Desde 600 €.",
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

const catalogo = [
    {
        href: "/formacion/ai-act",
        foto: "/escribiendo-ventana.webp",
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
    {
        href: "/formacion/cursos-a-medida",
        foto: "/academias.webp",
        badge: "Cualquier tema",
        titulo: "Curso a medida · SCORM",
        desc: "Tu formación producida como curso e instalada en tu plataforma para siempre.",
        datos: "Producción única",
    },
];

export default function FormacionEmpresasPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
            <Header />

            {/* Hero con foto + velo lateral y formulario translúcido */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/despachos.webp"
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 0 }}
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
                            <i className="fa-solid fa-building" style={{ marginRight: "0.6rem" }}></i>
                            Formación in-company · Empresas
                        </span>
                        <h1 style={{
                            fontFamily: "var(--font-display, serif)",
                            fontSize: "clamp(2.1rem, 5vw, 3.3rem)",
                            fontWeight: 600,
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em",
                            color: "#faf6ef",
                            margin: "1rem 0 1.2rem",
                            textShadow: "0 2px 30px rgba(28,25,23,0.45)",
                        }}>
                            Tu equipo usando la IA{" "}<br /><span style={{ color: "#f6c39c" }}>con criterio y con certificado</span>
                        </h1>
                        <p style={{ fontSize: "1.15rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                            El bloque obligatorio del Art. 4 más el taller práctico con la herramienta
                            que ya usáis — con vuestros casos reales, no ejemplos de laboratorio.
                        </p>
                    </div>

                    <FormularioCurso origen="Formación in-company" opciones={["Curso estrella: Alfabetización + herramienta", "Alfabetización del Art. 4", "Curso de ChatGPT", "Curso de Copilot 365", "Curso de Gemini + NotebookLM", "Curso de Claude", "Programa in-company (16 h)", "Curso e-learning a medida (SCORM)"]} />
                </div>
            </section>

            <FormacionTabs />

            {/* Curso estrella — split degradado, como el del home */}
            <section aria-label="Curso estrella" style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                <div className="container fe-mitades">
                    <div className="fe-mitad">
                        <span className="fe-marca" aria-hidden="true">★</span>
                        <div className="fe-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>Curso estrella</span>
                            <h2 className="fe-titulo">Alfabetización IA + <span style={{ color: "#f6c39c" }}>vuestra herramienta</span></h2>
                            <p className="fe-sub">
                                El formato que mejor funciona: una sesión cubre la obligación del Art. 4
                                y la otra domina la herramienta que ya usa tu equipo. Se adapta por
                                departamento y nivel.
                            </p>
                            <div className="fe-datos">
                                <span>Desde 4 + 4 h</span>
                                <span>Presencial · aula virtual · SCORM</span>
                                <span>Certificado nominal</span>
                                <span className="fe-dato-precio">Desde 1.200 € · cerrado en la propuesta</span>
                            </div>
                            <div className="fe-precios-linea">
                                <Link href="/formacion/ai-act" className="fe-precios-boton">Ver la alfabetización · Art. 4 →</Link>
                                <Link href="/precios#formar" className="fe-precios-boton">Ver la tabla de precios →</Link>
                            </div>
                        </div>
                    </div>
                    <div className="fe-mitad">
                        <div className="fe-cuerpo">
                            <div className="fe-sesion">
                                <div className="fe-cab">
                                    <span className="mono-label" style={{ color: "#f6c39c" }}>Sesión 01</span>
                                    <span className="fe-badge">Obligatoria · Art. 4</span>
                                </div>
                                <h3>Alfabetización en IA</h3>
                                <p>Fundamentos, riesgos, marco jurídico del Reglamento Europeo, protección de datos y cadena de responsabilidad — con certificado nominal y registro formativo.</p>
                            </div>
                            <div className="fe-sesion fe-sesion-2">
                                <div className="fe-cab">
                                    <span className="mono-label" style={{ color: "#f6c39c" }}>Sesión 02</span>
                                    <span className="fe-badge">100% práctica</span>
                                </div>
                                <h3>Vuestra herramienta, dominada</h3>
                                <p>Cada rol sale con casos de uso montados para su trabajo:</p>
                                <div className="fe-chips">
                                    {[
                                        { href: "/formacion/chatgpt", label: "ChatGPT" },
                                        { href: "/formacion/copilot", label: "Copilot 365" },
                                        { href: "/formacion/gemini", label: "Gemini" },
                                        { href: "/formacion/claude", label: "Claude" },
                                    ].map((c) => (
                                        <Link key={c.href} href={c.href} className="fe-chip">
                                            {c.label} →
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* En corto — banda de cifras con los precios "desde", como la del home */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917" }}>
                <div className="container">
                    <div className="fe-cifras">
                        <div className="fe-cifra">
                            <span className="fe-cifra-valor">desde 600 €</span>
                            <span className="fe-cifra-etiqueta">Alfabetización · Art. 4</span>
                        </div>
                        <div className="fe-cifra">
                            <span className="fe-cifra-valor">desde 900 €</span>
                            <span className="fe-cifra-etiqueta">Curso por herramienta</span>
                        </div>
                        <div className="fe-cifra">
                            <span className="fe-cifra-valor">desde 1.200 €</span>
                            <span className="fe-cifra-etiqueta">★ Curso estrella · 4+4 h</span>
                        </div>
                    </div>
                    <p className="fe-cifras-pie">
                        Certificado nominal y registro formativo · presencial, aula virtual o SCORM ·{" "}
                        <Link href="/precios#formar">Ver la tabla de precios →</Link>
                    </p>
                </div>
            </section>

            {/* Formación preparada para tu equipo — foto ambiental + velo, como el "quién lo imparte" */}
            <section style={{ position: "relative", overflow: "hidden", padding: "4.5rem 0", background: "#1c1917" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/auditoria.webp"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
                />
                <div aria-hidden="true" style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(90deg, rgba(28,25,23,0.72) 0%, rgba(28,25,23,0.52) 45%, rgba(28,25,23,0.25) 75%, rgba(28,25,23,0.1) 100%)",
                }} />
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Formación preparada para tu equipo</span>
                        <h2 style={{
                            fontFamily: "var(--font-display, serif)",
                            fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)",
                            fontWeight: 600,
                            lineHeight: 1.2,
                            color: "#faf6ef",
                            margin: "1rem 0 0",
                            letterSpacing: "-0.01em",
                            textShadow: "0 2px 30px rgba(28,25,23,0.45)",
                        }}>
                            El curso se monta con vuestro trabajo
                        </h2>
                    </div>
                    <div className="fe-pasos">
                        {[
                            { n: "01", titulo: "Antes de la primera sesión", d: "Recojo vuestros casos: qué herramientas ya tenéis contratadas, qué tareas comen más horas y qué datos sensibles maneja cada puesto." },
                            { n: "02", titulo: "En clase", d: "Los ejercicios salen de vuestro trabajo real — no de una plantilla. Y de la clase salen resueltas las decisiones importantes: qué se aprueba, qué no se pega nunca en una IA y quién revisa qué." },
                            { n: "03", titulo: "Lo que queda después", d: "Certificado nominal por participante, registro formativo fechado, el material del curso y los casos montados en clase — que el equipo sigue usando el lunes." },
                        ].map((p, i) => (
                            <div key={p.n} className="fe-paso">
                                <div className="fe-paso-cab">
                                    <span className="fe-paso-num">{p.n}</span>
                                    {i < 2 && <span className="fe-paso-linea" aria-hidden="true"></span>}
                                </div>
                                <h3>{p.titulo}</h3>
                                <p>{p.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Casos más concretos — barra tinta */}
            <nav aria-label="Casos concretos" className="nav-barra">
                <div className="container nav-barra-fila">
                    <span className="nav-barra-etiqueta mono-label">¿Tu caso es más concreto?</span>
                    <Link href="/sectores/despachos" className="nav-barra-item">Despachos profesionales</Link>
                    <Link href="/formacion/directivos" className="nav-barra-item">Dirección</Link>
                    <Link href="/formacion/centros-educativos" className="nav-barra-item">Centros educativos</Link>
                    <Link href="/sectores/academias" className="nav-barra-item">Academias</Link>
                    <Link href="/formacion/cursos-a-medida" className="nav-barra-item">Cursos a medida · SCORM</Link>
                </div>
            </nav>

            {/* Catálogo — paneles a sangre con foto, como los pilares del index */}
            <section style={{ padding: 0 }}>
                <div className="fe-cat-cabecera">
                    <h2 className="fe-cat-etiqueta">O elige el curso de una herramienta concreta</h2>
                </div>
                <div className="fe-cat-paneles">
                    {catalogo.map((c) => (
                        <Link key={c.titulo} href={c.href} className="fe-cat-panel">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="fe-cat-fondo" src={c.foto} alt="" aria-hidden="true" loading="lazy" />
                            <span className="fe-cat-velo" aria-hidden="true"></span>
                            <span className="fe-cat-badge">{c.badge}</span>
                            <span className="fe-cat-cuerpo">
                                <span className="fe-cat-titulo">{c.titulo}</span>
                                <span className="fe-cat-desc">{c.desc}</span>
                                <span className="fe-cat-datos mono-label">{c.datos}</span>
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* FAQ — split en tinta */}
            <section style={{ padding: "4rem 0", background: "#1c1917" }}>
                <div className="container fe-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem", color: "#faf6ef" }}>
                            Preguntas frecuentes
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.65, margin: 0, fontSize: "0.95rem" }}>
                            ¿No está la tuya?{" "}
                            <Link href="/#contact" style={{ color: "#f6c39c", fontWeight: 600 }}>
                                Pregúntamela directamente →
                            </Link>
                        </p>
                    </div>
                    <div>
                        {faqs.map((f) => (
                            <details key={f.question} className="fe-faq" name="faq-empresas">
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
                .fe-cifras {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }
                .fe-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .fe-cifra-valor {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.7rem, 3.4vw, 2.6rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .fe-cifra-etiqueta {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                .fe-cifras-pie {
                    text-align: center;
                    margin: 1.8rem 0 0;
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.65);
                }
                .fe-cifras-pie a {
                    color: #f6c39c;
                    font-weight: 600;
                }
                .fe-cifras-pie a:hover { color: #faf6ef; }
                @media (max-width: 700px) {
                    .fe-cifras { grid-template-columns: 1fr; gap: 1.4rem; }
                }
                .fe-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .fe-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .fe-marca {
                    position: absolute;
                    top: 0.6rem;
                    right: 1.4rem;
                    font-size: clamp(5rem, 9vw, 8rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .fe-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3rem 0;
                    width: 100%;
                }
                .fe-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .fe-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.65;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .fe-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .fe-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .fe-datos .fe-dato-precio { color: #f6c39c; }
                .fe-sesion {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                }
                .fe-sesion-2 {
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                    padding-top: 1.3rem;
                    margin-top: 1.3rem;
                }
                .fe-cab {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                }
                .fe-badge {
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
                .fe-sesion h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.2;
                }
                .fe-sesion p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                .fe-chips {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-top: 0.4rem;
                }
                .fe-chip {
                    font-size: 0.78rem;
                    font-weight: 600;
                    color: #faf6ef;
                    border: 1px solid rgba(250, 246, 239, 0.3);
                    border-radius: 50px;
                    padding: 0.3rem 0.85rem;
                    transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
                }
                .fe-chip:hover {
                    background: #f6c39c;
                    border-color: #f6c39c;
                    color: #1c1917;
                }
                @media (max-width: 800px) {
                    .fe-mitades { grid-template-columns: 1fr; gap: 0; }
                    .fe-cuerpo { padding: 2.2rem 0; }
                }
                .fe-pasos {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.6rem;
                }
                .fe-paso-cab {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-bottom: 0.9rem;
                }
                .fe-paso-num {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: #f6c39c;
                    background: rgba(246, 195, 156, 0.12);
                    border: 1px solid rgba(246, 195, 156, 0.35);
                    border-radius: 50px;
                    padding: 0.35rem 0.75rem;
                    flex-shrink: 0;
                }
                .fe-paso-linea {
                    flex: 1;
                    height: 1px;
                    background: rgba(250, 246, 239, 0.2);
                }
                .fe-paso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0 0 0.4rem;
                    line-height: 1.3;
                }
                .fe-paso p {
                    color: rgba(250, 246, 239, 0.8);
                    font-size: 0.9rem;
                    line-height: 1.6;
                    margin: 0;
                }
                @media (max-width: 800px) {
                    .fe-pasos { grid-template-columns: 1fr; }
                    .fe-paso-linea { display: none; }
                }
                .fe-trabajo-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    letter-spacing: -0.01em;
                    line-height: 1.15;
                    margin: 0.8rem 0 1rem;
                }
                .fe-cat-cabecera {
                    background: #1c1917;
                    padding: 2.4rem 0 1.6rem;
                }
                .fe-cat-etiqueta {
                    text-align: center;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.55);
                    margin: 0;
                }
                .fe-cat-paneles {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                }
                .fe-cat-panel {
                    position: relative;
                    display: flex;
                    align-items: flex-end;
                    min-height: 21rem;
                    overflow: hidden;
                    color: inherit;
                    background: #1c1917;
                }
                .fe-cat-fondo {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .fe-cat-panel:hover .fe-cat-fondo { transform: scale(1.04); }
                .fe-cat-velo {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(28,25,23,0.35) 0%, rgba(28,25,23,0.6) 45%, rgba(28,25,23,0.9) 100%);
                }
                .fe-cat-badge {
                    position: absolute;
                    top: 1rem;
                    left: 1.4rem;
                    z-index: 2;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.62rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    background: rgba(28, 25, 23, 0.7);
                    color: #f6c39c;
                    padding: 0.3rem 0.7rem;
                    border-radius: 6px;
                }
                .fe-cat-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                    padding: 4.5rem 1.5rem 1.6rem;
                }
                .fe-cat-titulo {
                    font-family: var(--font-display, serif);
                    font-size: 1.35rem;
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.2;
                }
                .fe-cat-desc {
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.55;
                }
                .fe-cat-datos { color: #f6c39c; }
                @media (max-width: 900px) {
                    .fe-cat-paneles { grid-template-columns: 1fr; }
                    .fe-cat-panel { min-height: 16rem; }
                }
                .fe-precios-linea {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 0.8rem 1.3rem;
                    margin-top: 1rem;
                }
                .fe-precios-boton {
                    display: inline-block;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .fe-precios-boton:hover {
                    color: #faf6ef;
                    transform: translateX(6px);
                }
                .fe-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .fe-faq-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .fe-faq {
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                }
                .fe-faq:last-of-type {
                    border-bottom: 1px solid rgba(250, 246, 239, 0.14);
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
                    color: #faf6ef;
                    line-height: 1.3;
                    transition: color 0.2s ease, padding-left 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .fe-faq summary::-webkit-details-marker { display: none; }
                .fe-faq summary:hover {
                    color: #f6c39c;
                    padding-left: 1rem;
                }
                .fe-faq summary i {
                    color: #f6c39c;
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
