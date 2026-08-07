import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioCurso from "@/components/FormularioCurso";
import FormacionTabs from "@/components/FormacionTabs";

export const metadata: Metadata = {
    title: "Cursos E-learning a Medida (SCORM) | Producción",
    description:
        "Produzco tu curso e-learning a medida en formato SCORM: guion, materiales, vídeo y empaquetado, instalado en tu plataforma. Sobre cualquier tema. Desde 1.900€.",
    alternates: { canonical: "https://automatizatelo.com/formacion/cursos-a-medida" },
    openGraph: {
        title: "Producción de cursos e-learning a medida (SCORM)",
        description: "Tu formación convertida en curso instalado en tu plataforma para siempre — o en marca blanca para tu academia. Cualquier tema.",
        url: "https://automatizatelo.com/formacion/cursos-a-medida",
    },
};

const faqs = [
    {
        question: "¿Qué es exactamente un curso SCORM?",
        answer: "SCORM es el formato estándar de los cursos e-learning: un paquete que se sube a cualquier plataforma de formación (Moodle, LearnDash, TalentLMS, la de tu empresa…) y que registra automáticamente el progreso, las evaluaciones y la finalización de cada alumno. Si tu plataforma admite cursos — y casi todas lo hacen — admite SCORM.",
    },
    {
        question: "¿Solo producís cursos de inteligencia artificial?",
        answer: "No: el tema es libre. La IA es lo que más produzco (es mi especialidad y donde más catálogo tengo), pero el proceso de producción vale para cualquier contenido: el manejo de tu software interno, onboarding de empleados, procesos de calidad, atención al cliente, prevención… Si el conocimiento existe en tu empresa, se puede convertir en curso.",
    },
    {
        question: "¿De quién es el curso una vez producido?",
        answer: "Tuyo, sin letra pequeña. Pagas la producción una vez y el paquete SCORM te pertenece: lo instalas en tu plataforma, lo usas con los alumnos que quieras y no hay licencias recurrentes ni permanencia. Es la misma regla que aplico a todo: el código y los contenidos son siempre del cliente.",
    },
    {
        question: "¿Qué incluye la marca blanca para academias?",
        answer: "Todo el curso producido con tu identidad: tu logo, tus colores y tu voz de marca en guion, materiales y vídeo. Tu alumno nunca sabe que existo — tú pones el catálogo y la certificación, yo pongo la producción. También ofrezco licencias de contenido ya producido si quieres ampliar catálogo sin esperar una producción completa.",
    },
    {
        question: "¿Cuánto cuesta y cuánto se tarda?",
        answer: "La producción completa de un curso, desde 1.900€ con precio cerrado por escrito según duración y complejidad (vídeo, evaluaciones, ejercicios). Los plazos habituales van de 3 a 6 semanas por curso. La licencia de contenido ya producido es inmediata y se presupuesta por catálogo.",
    },
    {
        question: "¿El curso sirve como evidencia del Art. 4 del AI Act?",
        answer: "Si el curso es de alfabetización en IA, sí: el SCORM registra qué alumno lo completó y cuándo, que es exactamente el registro formativo fechado que pide el artículo 4 del Reglamento Europeo de IA. Para plantillas grandes o distribuidas suele ser el formato más práctico de cumplir.",
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
    "name": "Producción de cursos e-learning a medida (SCORM)",
    "serviceType": "Producción de formación e-learning",
    "description": "Producción completa de cursos e-learning en formato SCORM sobre cualquier tema: guion, materiales, vídeo y empaquetado, instalados en la plataforma del cliente. También en marca blanca para academias.",
    "url": "https://automatizatelo.com/formacion/cursos-a-medida",
    "areaServed": "ES",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
        "telephone": "+34678399182",
    },
    "offers": [
        { "@type": "Offer", "name": "Producción de curso a medida", "price": "1900", "priceCurrency": "EUR", "description": "Precio desde; se cierra por escrito según duración y complejidad." },
    ],
};

const temas = [
    "Alfabetización en IA (Art. 4)",
    "ChatGPT · Copilot · Gemini · Claude",
    "Vuestro software interno",
    "Onboarding de empleados",
    "Atención al cliente",
    "Procesos y calidad",
    "Lo que sepa vuestro mejor empleado",
];

const compradores = [
    {
        num: "01",
        etiqueta: "Empresas",
        titulo: "Tu formación interna, convertida en curso",
        desc: "El conocimiento que hoy vive en la cabeza de dos personas — vuestro software, el onboarding, los procesos de calidad, la alfabetización en IA — producido como curso e instalado en vuestra plataforma. Cada empleado lo hace a su ritmo y queda registro individual de quién lo completó.",
        chips: ["Se imparte solo", "Registro por alumno", "Guion actualizable"],
        foto: "/despachos.webp",
        href: "/formacion/empresas",
        cta: "Ver la formación para empresas →",
    },
    {
        num: "02",
        etiqueta: "Academias y entidades",
        titulo: "Catálogo nuevo, con tu marca",
        desc: "Tú pones el catálogo y la certificación; yo produzco el contenido — guion, materiales, vídeo y empaquetado SCORM — con tu logo, tus colores y tu voz. Tu alumno nunca sabe que existo: es lo que ya hago con plataformas e-learning reales, con cursos publicados y en venta.",
        chips: ["Marca blanca", "Por encargo o licencia", "Catálogo de IA"],
        foto: "/equipos-directivos.webp",
        href: "/sectores/academias",
        cta: "Ver el caso de academias →",
    },
];

const proceso = [
    { n: "01", titulo: "Guion", d: "Una o dos sesiones con quien sabe del tema. Yo estructuro: objetivos, módulos, ejercicios y evaluaciones." },
    { n: "02", titulo: "Materiales y vídeo", d: "Producción completa: vídeo, apoyos visuales, plantillas descargables y las pruebas de cada módulo." },
    { n: "03", titulo: "Empaquetado SCORM", d: "El curso empaquetado en el estándar que entiende cualquier plataforma, con seguimiento por alumno." },
    { n: "04", titulo: "Instalado y probado", d: "Lo subo a tu plataforma, lo pruebo contigo de punta a punta y te enseño a leer los registros." },
];

export default function CursosAMedidaPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header />

            {/* Hero con foto + velo lateral y formulario translúcido */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/academias.webp"
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
                            <i className="fa-solid fa-laptop-file" style={{ marginRight: "0.6rem" }}></i>
                            Producción e-learning · SCORM
                        </span>
                        <h1 style={{
                            fontFamily: "var(--font-display, serif)",
                            fontSize: "clamp(2rem, 4.5vw, 3rem)",
                            fontWeight: 600,
                            lineHeight: 1.12,
                            letterSpacing: "-0.02em",
                            color: "#faf6ef",
                            margin: "1rem 0 1.2rem",
                            textShadow: "0 2px 30px rgba(28,25,23,0.45)",
                        }}>
                            Tu curso, producido{" "}
                            <span style={{ color: "#f6c39c" }}>e instalado en tu plataforma</span>
                        </h1>
                        <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: 0, maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                            Guion, materiales, vídeo y empaquetado SCORM — sobre el tema que necesites,
                            con registro individual por alumno. Pagas una vez y el curso es tuyo para siempre.
                        </p>
                    </div>

                    <FormularioCurso
                        origen="Curso e-learning a medida (SCORM)"
                        opciones={[
                            "Curso a medida para mi empresa",
                            "Curso en marca blanca para mi academia",
                            "Licencia de contenido ya producido",
                            "Aún no lo tengo claro",
                        ]}
                    />
                </div>
            </section>

            {/* Salta entre todas las formaciones sin volver atras */}
            <FormacionTabs />

            {/* En corto — split degradado, como el curso estrella */}
            <section aria-label="El servicio, en corto" style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                <div className="container cam2-mitades">
                    <div className="cam2-mitad">
                        <span className="cam2-marca" aria-hidden="true">▶</span>
                        <div className="cam2-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>En corto</span>
                            <h2 className="cam2-titulo">
                                Cualquier tema, convertido en <span style={{ color: "#f6c39c" }}>curso de plataforma</span>
                            </h2>
                            <p className="cam2-sub">
                                SCORM es el estándar que entiende cualquier plataforma de formación:
                                Moodle, LearnDash, TalentLMS o la que ya use tu empresa o tu academia.
                                El curso registra el progreso y la finalización de cada alumno — y si es
                                de IA, ese registro es además la evidencia del{" "}
                                <Link href="/formacion/ai-act">Art. 4</Link> del Reglamento Europeo.
                            </p>
                            <div className="cam2-datos">
                                <span>Guion · vídeo · SCORM instalado</span>
                                <span>3 – 6 semanas por curso</span>
                                <span>El curso es tuyo, sin licencias</span>
                                <span className="cam2-dato-precio">Desde 1.900 € · precio cerrado</span>
                            </div>
                            <div className="cam2-enlaces">
                                <a href="#proceso" className="cam2-enlace">Ver cómo transcurre ↓</a>
                                <Link href="/precios" className="cam2-enlace">Ver la tabla de precios →</Link>
                            </div>
                        </div>
                    </div>
                    <div className="cam2-mitad">
                        <div className="cam2-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>El tema es libre</span>
                            <ul className="cam2-temas">
                                {temas.map((t) => <li key={t}>{t}</li>)}
                            </ul>
                            <p className="cam2-nota">
                                Si el conocimiento existe en tu empresa, se puede convertir en curso —
                                la IA es solo lo que más produzco.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Los dos compradores — puertas a sangre con foto y velo tinta */}
            <section style={{ padding: 0 }}>
                <div className="cam2-cabecera">
                    <h2 className="cam2-etiqueta">Dos maneras de comprarlo</h2>
                </div>
                <div className="cam2-puertas">
                    {compradores.map((c) => (
                        <Link key={c.num} href={c.href} className="cam2-puerta">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="cam2-puerta-fondo" src={c.foto} alt="" aria-hidden="true" loading="lazy" />
                            <span className="cam2-puerta-velo" aria-hidden="true"></span>
                            <span className="cam2-puerta-marca" aria-hidden="true">{c.num}</span>
                            <span className="cam2-puerta-cuerpo">
                                <span className="cam2-puerta-num mono-label">{c.etiqueta}</span>
                                <span className="cam2-puerta-titulo">{c.titulo}</span>
                                <span className="cam2-puerta-desc">{c.desc}</span>
                                <span className="cam2-puerta-chips">
                                    {c.chips.map((ch) => <span key={ch} className="cam2-chip">{ch}</span>)}
                                </span>
                                <span className="cam2-puerta-cta">{c.cta}</span>
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Precios de un vistazo — banda de cifras */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917" }}>
                <div className="container">
                    <div className="cam2-cifras">
                        <div className="cam2-cifra">
                            <span className="cam2-cifra-valor">desde 1.900 €</span>
                            <span className="cam2-cifra-etiqueta">Producción completa del curso</span>
                        </div>
                        <div className="cam2-cifra">
                            <span className="cam2-cifra-valor">a consultar</span>
                            <span className="cam2-cifra-etiqueta">Licencia de contenido ya producido</span>
                        </div>
                        <div className="cam2-cifra">
                            <span className="cam2-cifra-valor">3 – 6 semanas</span>
                            <span className="cam2-cifra-etiqueta">Plazo habitual por curso</span>
                        </div>
                        <div className="cam2-cifra">
                            <span className="cam2-cifra-valor">100% tuyo</span>
                            <span className="cam2-cifra-etiqueta">Sin licencias ni permanencia</span>
                        </div>
                    </div>
                    <p className="cam2-cifras-pie">
                        Precio cerrado por escrito y pago por hitos —{" "}
                        <Link href="/precios">Ver la tabla de precios →</Link> · ¿Quieres ver una
                        plataforma real con sus cursos? <Link href="/casos">Ver casos →</Link>
                    </p>
                </div>
            </section>

            {/* De tu conocimiento al curso — foto ambiental + velo */}
            <section id="proceso" style={{ position: "relative", overflow: "hidden", padding: "4.5rem 0", background: "#1c1917", scrollMarginTop: "6rem" }}>
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
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Cómo transcurre</span>
                        <h2 style={{
                            fontFamily: "var(--font-display, serif)",
                            fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)",
                            fontWeight: 600,
                            lineHeight: 1.2,
                            color: "#faf6ef",
                            margin: "1rem 0 0.6rem",
                            letterSpacing: "-0.01em",
                            textShadow: "0 2px 30px rgba(28,25,23,0.45)",
                        }}>
                            De tu conocimiento al curso, en 4 pasos
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.7, margin: 0, maxWidth: 560 }}>
                            Plazo habitual: de 3 a 6 semanas por curso, según duración y complejidad.
                        </p>
                    </div>
                    <div className="cam2-proceso">
                        {proceso.map((p, i) => (
                            <div key={p.n} className="cam2-paso">
                                <div className="cam2-paso-cab">
                                    <span className="cam2-paso-num">{p.n}</span>
                                    {i < 3 && <span className="cam2-paso-linea" aria-hidden="true"></span>}
                                </div>
                                <h3>{p.titulo}</h3>
                                <p>{p.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Casos más concretos — barra tinta */}
            <nav aria-label="Casos concretos" className="fd-otros-barra">
                <div className="container fd-otros">
                    <span className="fd-otros-etiqueta mono-label">¿Tu caso es más concreto?</span>
                    <Link href="/formacion/empresas" className="fd-otro">Formación para empresas</Link>
                    <Link href="/sectores/despachos" className="fd-otro">Despachos profesionales</Link>
                    <Link href="/formacion/directivos" className="fd-otro">Dirección</Link>
                    <Link href="/formacion/centros-educativos" className="fd-otro">Centros educativos</Link>
                    <Link href="/sectores/academias" className="fd-otro">Academias</Link>
                </div>
            </nav>

            {/* FAQ — split en tinta con el CTA integrado */}
            <section style={{ padding: "4rem 0", background: "#1c1917" }}>
                <div className="container cam2-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem", color: "#faf6ef" }}>
                            Preguntas frecuentes
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.65, margin: "0 0 1.6rem", fontSize: "0.95rem" }}>
                            30 minutos gratis: me cuentas el tema y te digo alcance, plazo y
                            precio cerrado.
                        </p>
                        <Link href="/#contact" className="cam2-cta">Cuéntame tu curso →</Link>
                    </div>
                    <div>
                        {faqs.map((f) => (
                            <details key={f.question} className="cam-faq" name="faq-cursos-a-medida">
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
                .cam2-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .cam2-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .cam2-marca {
                    position: absolute;
                    top: 1.2rem;
                    right: 1.6rem;
                    font-size: clamp(4rem, 7vw, 6rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .cam2-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3rem 0;
                    width: 100%;
                }
                .cam2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .cam2-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.65;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .cam2-sub a { color: #f6c39c; font-weight: 600; }
                .cam2-sub a:hover { color: #faf6ef; }
                .cam2-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .cam2-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .cam2-datos .cam2-dato-precio { color: #f6c39c; }
                .cam2-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem 1.3rem;
                    margin-top: 1rem;
                }
                .cam2-enlace {
                    display: inline-block;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .cam2-enlace:hover {
                    color: #faf6ef;
                    transform: translateX(6px);
                }
                .cam2-temas {
                    margin: 0.4rem 0 0;
                    padding: 0;
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                }
                .cam2-temas li {
                    font-family: var(--font-display, serif);
                    font-size: 1.05rem;
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.3;
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                    padding: 0.7rem 0;
                }
                .cam2-temas li:last-child { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .cam2-nota {
                    margin: 0.9rem 0 0;
                    font-size: 0.85rem;
                    line-height: 1.6;
                    color: rgba(250, 246, 239, 0.6);
                }
                @media (max-width: 800px) {
                    .cam2-mitades { grid-template-columns: 1fr; gap: 0; }
                    .cam2-cuerpo { padding: 2.2rem 0; }
                }
                .cam2-cabecera {
                    background: #1c1917;
                    padding: 2.4rem 0 1.6rem;
                }
                .cam2-etiqueta {
                    text-align: center;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.55);
                    margin: 0;
                }
                .cam2-puertas {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }
                .cam2-puerta {
                    position: relative;
                    display: flex;
                    align-items: flex-end;
                    min-height: 30rem;
                    overflow: hidden;
                    color: inherit;
                    background: #1c1917;
                }
                .cam2-puerta-fondo {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .cam2-puerta:hover .cam2-puerta-fondo { transform: scale(1.04); }
                .cam2-puerta-velo {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(28,25,23,0.35) 0%, rgba(28,25,23,0.55) 45%, rgba(28,25,23,0.85) 100%);
                }
                .cam2-puerta-marca {
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
                .cam2-puerta-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.7rem;
                    padding: 7rem 2.2rem 2.4rem;
                    max-width: 34rem;
                }
                .cam2-puerta-num { color: #f6c39c; }
                .cam2-puerta-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.45rem, 2.8vw, 2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                }
                .cam2-puerta-desc {
                    font-size: 0.95rem;
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.6;
                }
                .cam2-puerta-chips {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.45rem;
                    margin-top: 0.2rem;
                }
                .cam2-chip {
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
                .cam2-puerta-cta {
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    margin-top: 0.5rem;
                    transition: transform 0.25s ease;
                }
                .cam2-puerta:hover .cam2-puerta-cta { transform: translateX(6px); }
                @media (max-width: 900px) {
                    .cam2-puertas { grid-template-columns: 1fr; }
                    .cam2-puerta { min-height: 24rem; }
                    .cam2-puerta-cuerpo { padding: 5.5rem 1.5rem 2rem; }
                }
                .cam2-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .cam2-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .cam2-cifra-valor {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .cam2-cifra-etiqueta {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                .cam2-cifras-pie {
                    text-align: center;
                    margin: 1.8rem 0 0;
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.65);
                }
                .cam2-cifras-pie a { color: #f6c39c; font-weight: 600; }
                .cam2-cifras-pie a:hover { color: #faf6ef; }
                @media (max-width: 800px) {
                    .cam2-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }
                .cam2-proceso {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.6rem;
                }
                .cam2-paso-cab {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-bottom: 0.9rem;
                }
                .cam2-paso-num {
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
                .cam2-paso-linea {
                    flex: 1;
                    height: 1px;
                    background: rgba(250, 246, 239, 0.2);
                }
                .cam2-paso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0 0 0.4rem;
                    line-height: 1.3;
                }
                .cam2-paso p {
                    color: rgba(250, 246, 239, 0.8);
                    font-size: 0.9rem;
                    line-height: 1.6;
                    margin: 0;
                }
                @media (max-width: 900px) {
                    .cam2-proceso { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 560px) {
                    .cam2-proceso { grid-template-columns: 1fr; }
                    .cam2-paso-linea { display: none; }
                }
                .fd-otros-barra {
                    background: #1c1917;
                    border-top: 1px solid rgba(250, 246, 239, 0.08);
                    border-bottom: 1px solid rgba(250, 246, 239, 0.08);
                }
                .fd-otros {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                    gap: 0.15rem 0.25rem;
                    padding-top: 0.55rem;
                    padding-bottom: 0.55rem;
                }
                .fd-otros-etiqueta {
                    color: #f6c39c;
                    padding: 0.5rem 0.9rem 0.5rem 0;
                    white-space: nowrap;
                }
                .fd-otro {
                    flex: 1 1 auto;
                    text-align: center;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.65);
                    padding: 0.5rem 0.9rem;
                    border-radius: 8px;
                    white-space: nowrap;
                    transition: color 0.2s ease, background 0.2s ease;
                }
                .fd-otro:hover { color: #faf6ef; background: rgba(250, 246, 239, 0.07); }
                .cam2-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .cam2-faq-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .cam2-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .cam2-cta:hover {
                    background: #faf6ef;
                    transform: translateY(-2px);
                }
                .cam-faq { border-top: 1px solid rgba(250, 246, 239, 0.14); }
                .cam-faq:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .cam-faq summary {
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
                .cam-faq summary::-webkit-details-marker { display: none; }
                .cam-faq summary:hover { color: #f6c39c; padding-left: 1rem; }
                .cam-faq summary i { color: #f6c39c; font-size: 0.8rem; flex-shrink: 0; transition: transform 0.3s ease; }
                .cam-faq[open] summary i { transform: rotate(180deg); }
            `}</style>
        </main>
    );
}
