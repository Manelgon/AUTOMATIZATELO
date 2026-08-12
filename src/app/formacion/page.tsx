import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioCurso from "@/components/FormularioCurso";
import FormacionTabs from "@/components/FormacionTabs";
import Esquema from "@/components/Esquema";
import { migas } from "@/lib/esquemas";

export const metadata: Metadata = {
    title: "Formación en IA para Empresas y Centros",
    description:
        "Forma a tu equipo o a tu claustro con una formación que se integra en las medidas del Art. 4: alfabetización, herramienta e IA en el aula. Desde 750 €.",
    alternates: { canonical: "https://automatizatelo.com/formacion" },
    openGraph: {
        title: "Formación en IA para Empresas y Centros Educativos",
        description: "Dos puertas: alfabetización + tu herramienta para empresas, e IA en el aula para centros educativos. El AI Act ya exige tomar medidas.",
        url: "https://automatizatelo.com/formacion",
    },
};

const faqs = [
    {
        question: "¿Es obligatorio formar a mi equipo en IA?",
        answer: "Si tu empresa usa sistemas de IA, sí: el artículo 4 del Reglamento Europeo de IA (Reglamento UE 2024/1689) exige desde el 2 de febrero de 2025 que quien provee y quien despliega sistemas de IA adopte medidas para apoyar el desarrollo de la alfabetización en IA de su personal. Es un deber de medios: desde el Ómnibus digital de julio de 2026 ni siquiera hay un nivel que alcanzar — lo que se pide son medidas adaptadas al puesto y al uso, y poder demostrarlas.",
    },
    {
        question: "¿Qué formatos de formación ofrecéis?",
        answer: "Talleres in-company (presenciales en Barcelona o en remoto para toda España), sesiones prácticas por departamento y cursos e-learning a medida en formato SCORM, listos para subir a la plataforma de formación que ya use tu empresa.",
    },
    {
        question: "¿La formación es teórica o práctica?",
        answer: "Práctica: trabajo con los casos reales de tu empresa. El equipo sale usando la IA en sus tareas del día a día — redactar, resumir, clasificar, automatizar — y con criterios claros de qué puede y qué no puede hacer con ella.",
    },
    {
        question: "¿Incluye la parte de gobernanza y normativa?",
        answer: "Sí. Además del uso práctico, cubro la política interna de uso de IA: qué datos no se pueden pegar en una IA, cómo revisar resultados, qué herramientas están aprobadas y cómo documentarlo para cumplir con el RGPD y el Reglamento de IA.",
    },
    {
        question: "¿Cuánto cuesta formar a mi equipo?",
        answer: "El bloque de alfabetización del Art. 4, cuatro horas para toda la plantilla, desde 750 €. El curso estrella —ese bloque más media jornada práctica con vuestra herramienta— desde 1.800 €. Si lo que os falta no es herramienta sino criterio, el mismo bloque más el módulo de vuestro oficio (puesto, aula o despacho), también desde 1.800 €. Un taller de un día por herramienta, entre 1.400 € y 2.000 €. Un programa in-company de 20 horas, desde 3.500 €. Y un curso e-learning a medida en SCORM, desde 2.400 €. El precio es por sesión, no por alumno, y se cierra por escrito en la propuesta según participantes y modalidad.",
    },
    {
        question: "¿Qué evidencia documental me queda después?",
        answer: "Certificado nominal por participante y registro formativo fechado con contenidos, horas y asistentes, más el material impartido. Ese expediente es lo que documenta las medidas del Art. 4 — no existe ningún certificado oficial del Reglamento, y quien te venda un 'sello de cumplimiento' te está engañando.",
    },
    {
        question: "¿Podéis formar también al alumnado, no solo al claustro?",
        answer: "Sí, y son dos cosas distintas. El claustro trabaja práctica de aula, política de uso y la documentación de las medidas del Art. 4 del centro; el alumnado, un taller de 2 a 4 horas por grupo sobre estudiar con IA sin copiar y usarla para el CV y las entrevistas, desde 500 € por grupo en el centro. Muchos centros contratan las dos en la misma jornada.",
    },
    {
        question: "¿Podéis producirlo como curso para nuestra propia plataforma?",
        answer: "Sí: la formación se produce como curso e-learning en formato SCORM y se instala en vuestra plataforma para siempre, con registro individual por alumno. Se paga la producción una vez y el curso es vuestro, sin licencias recurrentes. También en marca blanca para academias.",
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
            <Esquema datos={migas([{ nombre: "Formación en IA", url: "/formacion" }])} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header />

            {/* Hero con foto ambiental + velo lateral, como el index */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/claustro.webp"
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
                        <i className="fa-solid fa-graduation-cap" style={{ marginRight: "0.6rem" }}></i>
                        Formación · Barcelona y toda España
                    </span>
                    <h1 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(2rem, 4.5vw, 3rem)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        color: "#faf6ef",
                        margin: "1rem 0 1.2rem",
                        textShadow: "0 2px 30px rgba(28,25,23,0.45)",
                    }}>
                        Formación en IA para{" "}<br /><span style={{ color: "#f6c39c" }}>tu empresa, tu despacho o tu claustro</span>
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
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

            {/* Qué es + por qué ahora — una sola banda sobre el degradado */}
            <section style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                <div className="container fqe-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Qué es · por qué ahora</span>
                        <p className="fqe-capsula">
                            La formación en IA capacita a equipos y claustros para usar herramientas
                            de inteligencia artificial con criterio, seguridad y resultados medibles en su
                            trabajo diario.
                        </p>
                    </div>
                    <p className="fqe-apoyo">
                        Y ya no es solo cuestión de productividad: usar IA sin formar al equipo es hoy
                        una <strong>obligación sin resolver</strong>: si tu organización usa IA, el
                        Art. 4 exige tomar medidas para que quien la utiliza tenga una
                        alfabetización suficiente — y poder demostrarlo. Muchas pymes y centros
                        españoles todavía están dándole vueltas.
                    </p>
                </div>
                <p className="fpn-cabecera mono-label">¿Por qué formar ahora?</p>
                <div className="container fpn-grid" style={{ paddingBottom: "2.2rem" }}>
                    <div className="fpn-item">
                        <span className="fpn-valor">Feb. 2025</span>
                        <span className="fpn-texto">El Art. 4 exige a quien provee y a quien despliega IA tomar medidas para la alfabetización del personal que trabaja con ella.</span>
                    </div>
                    <div className="fpn-item">
                        <span className="fpn-valor">Ago. 2026</span>
                        <span className="fpn-texto">Empieza la supervisión: desde el 2 de agosto de 2026 las autoridades nacionales pueden supervisar y hacer cumplir el Art. 4.</span>
                    </div>
                    <div className="fpn-item">
                        <span className="fpn-valor">Sin multa propia</span>
                        <span className="fpn-texto">El Art. 4 no está en la lista de multas del Art. 99 — los 35 M€ o el 7 % son el techo de las prácticas prohibidas. Lo que se te pide es demostrar las medidas que tomaste.</span>
                    </div>
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
                                El bloque de alfabetización del Art. 4 más el taller 100% práctico con la
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
                                Formación de claustro con criterios claros de uso, política de IA
                                del centro, y la IA llevada al aula con criterio — para que docentes
                                y alumnado aprendan a usarla, no a esconderla.
                            </span>
                            <span className="fd-puerta-chips">
                                {["Claustro", "Política del centro", "Aula", "RGPD y datos"].map((c) => (
                                    <span key={c} className="fd-chip">{c}</span>
                                ))}
                            </span>
                            <span className="fd-puerta-cta">Ver formación para centros →</span>
                        </span>
                    </Link>
                </div>
            </section>

            {/* Casos más concretos — barra tinta como la de sectores del index */}
            <nav aria-label="Casos concretos" className="nav-barra">
                <div className="container nav-barra-fila">
                    <span className="nav-barra-etiqueta mono-label">¿Tu caso es más concreto?</span>
                    <Link href="/sectores/despachos" className="nav-barra-item">Despachos profesionales</Link>
                    <Link href="/formacion/directivos" className="nav-barra-item">Dirección</Link>
                    <Link href="/formacion/centros-educativos" className="nav-barra-item">Centros educativos</Link>
                    <Link href="/formacion/alumnado" className="nav-barra-item">Alumnado</Link>
                    <Link href="/sectores/academias" className="nav-barra-item">Academias</Link>
                    <Link href="/formacion/cursos-a-medida" className="nav-barra-item">Cursos a medida · SCORM</Link>
                </div>
            </nav>

            {/* Cursos a medida (SCORM) — split tinta como el testimonio del index */}
            <section style={{ padding: "3.2rem 0", background: "#1c1917" }}>
                <div className="container fsc-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Cursos a medida · SCORM</span>
                        <h2 className="fsc-titulo">
                            ¿Y si tu formación fuera un curso instalado en tu plataforma?
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.7, margin: 0, fontSize: "0.92rem" }}>
                            El proceso completo está en la página de{" "}
                            <Link href="/formacion/cursos-a-medida" style={{ color: "#f6c39c", fontWeight: 600 }}>
                                cursos e-learning a medida
                            </Link>.{" "}
                            <Link href="/#contact" style={{ color: "#f6c39c", fontWeight: 600 }}>
                                Cuéntame qué curso necesitas
                            </Link>.
                        </p>
                    </div>
                    <div className="fsc-compradores">
                        <p className="fsc-comprador">
                            <strong>Si eres una empresa</strong>, convierto tu formación interna — el tema que
                            necesites — en un curso e-learning (SCORM) instalado en vuestra plataforma para
                            siempre, con registro individual por alumno. Pagas la producción una vez y el curso es tuyo.
                        </p>
                        <p className="fsc-comprador">
                            <strong>Si eres una academia o entidad de formación</strong>, produzco cursos con
                            tu marca: tú pones el catálogo y la certificación, yo el contenido — guion, materiales,
                            vídeo y empaquetado SCORM.
                        </p>
                    </div>
                </div>
            </section>

            {/* Lo que cuesta cada formato — banda de cifras, como el resto del sitio */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917" }}>
                <div className="container">
                    <div className="fpr-cifras">
                        <div className="fpr-cifra">
                            <span className="fpr-cifra-valor">desde 750 €</span>
                            <span className="fpr-cifra-etiqueta">Alfabetización · Art. 4</span>
                        </div>
                        <div className="fpr-cifra">
                            <span className="fpr-cifra-valor">desde 1.800 €</span>
                            <span className="fpr-cifra-etiqueta">★ Curso estrella · 4 + 4 h</span>
                        </div>
                        <div className="fpr-cifra">
                            <span className="fpr-cifra-valor">1.400 – 2.000 €</span>
                            <span className="fpr-cifra-etiqueta">Taller por herramienta · 1 día</span>
                        </div>
                        <div className="fpr-cifra">
                            <span className="fpr-cifra-valor">desde 2.400 €</span>
                            <span className="fpr-cifra-etiqueta">Curso e-learning (SCORM)</span>
                        </div>
                    </div>
                    <p className="fpr-cifras-pie">
                        No se paga por alumno, sino por sesión — y el precio de la sesión se
                        cierra por escrito en la propuesta, según participantes y modalidad —{" "}
                        <Link href="/precios#formar">ver las ocho formaciones con su precio →</Link>
                    </p>
                </div>
            </section>

            {/* Quién lo imparte + CTA — foto ambiental + velo, cierre de confianza */}
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
                <div className="container" style={{ maxWidth: 900, position: "relative", zIndex: 2 }}>
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
                        <Link href="/casos" style={{ color: "#f6c39c", fontWeight: 600 }}>sistemas que ya funcionan</Link>. Y si no sabes por dónde empezar, el{" "}<Link href="/diagnostico" style={{ color: "#f6c39c", fontWeight: 600 }}>test de 3 minutos</Link> te lo dice.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem 1.4rem", marginTop: "1.8rem" }}>
                        <Link href="/#contact" className="fqi-cta">
                            Pide tu consulta gratuita de 30 minutos →
                        </Link>
                        <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(250,246,239,0.6)" }}>
                            ¿Formo a tu equipo?
                        </span>
                    </div>
                </div>
            </section>

            {/* FAQ — split en tinta: título a la izquierda, acordeones a la derecha */}
            <section style={{ padding: "4rem 0", background: "#1c1917" }}>
                <div className="container ffq-grid">
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
                            <details key={f.question} className="fi-faq" name="faq-formacion">
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
                .fh-foto .fc-card {
                    background: rgba(28, 25, 23, 0.62);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                }
                .fqe-grid {
                    display: grid;
                    grid-template-columns: 1.15fr 0.85fr;
                    gap: 3rem;
                    align-items: center;
                    padding-top: 1.8rem;
                    padding-bottom: 1.6rem;
                }
                .fqe-capsula {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.15rem, 2.1vw, 1.5rem);
                    font-weight: 600;
                    line-height: 1.35;
                    color: #faf6ef;
                    letter-spacing: -0.01em;
                    margin: 1rem 0 0;
                }
                .fqe-apoyo {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.8;
                    font-size: 0.98rem;
                    margin: 0;
                    border-left: 2px solid rgba(246, 195, 156, 0.45);
                    padding-left: 1.6rem;
                }
                .fqe-apoyo strong { color: #f6c39c; }
                @media (max-width: 800px) {
                    .fqe-grid { grid-template-columns: 1fr; gap: 1.6rem; padding-top: 2.6rem; padding-bottom: 2.6rem; }
                    .fqe-apoyo { border-left: none; padding-left: 0; }
                }
                .fsc-grid {
                    display: grid;
                    grid-template-columns: 0.85fr 1.15fr;
                    gap: 4rem;
                    align-items: center;
                }
                .fsc-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.6vw, 2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    letter-spacing: -0.01em;
                    line-height: 1.15;
                    margin: 0.8rem 0 0.9rem;
                }
                .fsc-compradores {
                    display: flex;
                    flex-direction: column;
                    gap: 1.3rem;
                    border-left: 2px solid rgba(246, 195, 156, 0.45);
                    padding-left: 1.6rem;
                }
                .fsc-comprador {
                    color: rgba(250, 246, 239, 0.88);
                    line-height: 1.7;
                    font-size: 0.96rem;
                    margin: 0;
                }
                .fsc-comprador strong { color: #f6c39c; }
                @media (max-width: 800px) {
                    .fsc-grid { grid-template-columns: 1fr; gap: 1.8rem; }
                    .fsc-compradores { border-left: none; padding-left: 0; }
                }
                .fpn-banda {
                    background: #1c1917;
                    padding: 3rem 0 3.2rem;
                }
                .fpn-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
                    font-weight: 600;
                    color: #faf6ef;
                    letter-spacing: -0.01em;
                    line-height: 1.15;
                    margin: 0.8rem 0 1.8rem;
                }
                .fpn-cabecera {
                    text-align: center;
                    color: rgba(250, 246, 239, 0.55);
                    margin: 0 0 1.6rem;
                }
                .fpr-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .fpr-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .fpr-cifra-valor {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .fpr-cifra-etiqueta {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                .fpr-cifras-pie {
                    margin: 2rem auto 0;
                    max-width: 68ch;
                    text-align: center;
                    color: rgba(250, 246, 239, 0.6);
                    font-size: 0.88rem;
                    line-height: 1.6;
                }
                .fpr-cifras-pie a { color: #f6c39c; font-weight: 600; }
                @media (max-width: 900px) {
                    .fpr-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }
                .fpn-precio {
                    margin: 0;
                    padding: 0 0 2.2rem;
                    text-align: center;
                    color: rgba(250, 246, 239, 0.65);
                    font-size: 0.9rem;
                }
                .fpn-precio a { color: #f6c39c; font-weight: 600; }
                .fpn-precio a:hover { color: #faf6ef; }
                .fpn-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }
                .fpn-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                }
                .fpn-valor {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.8rem, 3.2vw, 2.4rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .fpn-texto {
                    color: rgba(250, 246, 239, 0.7);
                    font-size: 0.9rem;
                    line-height: 1.55;
                }
                @media (max-width: 800px) {
                    .fpn-grid { grid-template-columns: 1fr; gap: 1.4rem; }
                }
                .fqi-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.95rem;
                    border-radius: 50px;
                    padding: 0.85rem 1.8rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .fqi-cta:hover {
                    background: #faf6ef;
                    transform: translateY(-2px);
                }
                .ffq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .ffq-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .fi-faq {
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                }
                .fi-faq:last-of-type {
                    border-bottom: 1px solid rgba(250, 246, 239, 0.14);
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
                    color: #faf6ef;
                    line-height: 1.3;
                    transition: color 0.2s ease, padding-left 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .fi-faq summary::-webkit-details-marker {
                    display: none;
                }
                .fi-faq summary:hover {
                    color: #f6c39c;
                    padding-left: 1rem;
                }
                .fi-faq summary i {
                    color: #f6c39c;
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
