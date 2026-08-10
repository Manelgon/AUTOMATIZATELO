import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import FormacionTabs from "./FormacionTabs";
import FormularioCurso from "./FormularioCurso";

// =============================================================================
// PLANTILLA DE CURSO POR HERRAMIENTA — lenguaje editorial v3
// =============================================================================
// Un curso = la sesión práctica del curso estrella, vendible suelta. La página
// responde a "curso de X para empresas": temario concreto, para quién, precio
// a la vista y el puente al combo con la alfabetización del Art. 4.
// Schema: Course + FAQPage.
// =============================================================================

export interface CursoPageProps {
    slug: string;
    herramienta: string;            // "ChatGPT"
    kicker: string;                 // "Curso · IA generalista"
    titulo: React.ReactNode;        // JSX del h1
    subtitulo: string;
    enCorto: string;                // cápsula answer-first
    paraQuien: string;              // una frase
    temario: { num: string; titulo: string; desc: string; puntos?: string[] }[];
    encaja?: { titulo: string; desc: string }[];   // "te encaja este curso?"
    usos: { rol: string; desc: string }[];   // "qué se lleva cada puesto"
    faqs: { question: string; answer: string }[];
    nota?: string;                  // línea de autoridad/honestidad opcional
    foto?: string;                  // foto ambiental del hero
}

const NUMEROS: Record<number, string> = { 2: "Dos", 3: "Tres", 4: "Cuatro", 5: "Cinco", 6: "Seis" };

const FOTOS: Record<string, string> = {
    chatgpt: "/escribiendo-ventana.webp",
    copilot: "/despachos.webp",
    gemini: "/academias.webp",
    claude: "/equipos-directivos.webp",
};

// Segunda foto de la página: la misma que el "quién lo imparte" de /formacion
const FOTO_ENCAJA = "/auditoria.webp";

export default function CursoPage(p: CursoPageProps) {
    const foto = p.foto ?? FOTOS[p.slug] ?? "/escribiendo-ventana.webp";
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: p.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
    };
    const courseJsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: `Curso de ${p.herramienta} para empresas`,
        description: p.enCorto,
        provider: { "@type": "ProfessionalService", name: "Automatizatelo", url: "https://automatizatelo.com" },
        inLanguage: "es",
        hasCourseInstance: [{
            "@type": "CourseInstance",
            courseMode: ["onsite", "online"],
            location: "España",
        }],
        offers: [{ "@type": "Offer", price: "900", priceCurrency: "EUR", description: "Taller de un equipo, precio desde; se cierra en la propuesta." }],
    };

    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
            <Header />

            {/* Hero con foto + velo lateral y formulario translúcido */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={foto}
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
                            {p.kicker}
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
                            {p.titulo}
                        </h1>
                        <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: 0, maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                            {p.subtitulo}
                        </p>
                    </div>

                    {/* Captura en el hero: el curso de la página viaja como origen del lead */}
                    <FormularioCurso origen={`Curso de ${p.herramienta}`} />
                </div>
            </section>

            {/* Salta entre todas las formaciones sin volver atras */}
            <FormacionTabs />

            {/* El curso en corto — split degradado, como el curso de claustro */}
            <section aria-label="El curso, en corto" style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                <div className="container cp2-mitades">
                    <div className="cp2-mitad">
                        <span className="cp2-marca" aria-hidden="true">★</span>
                        <div className="cp2-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>En corto</span>
                            <h2 className="cp2-titulo">Una sesión para poner {p.herramienta} <span style={{ color: "#f6c39c" }}>a trabajar</span></h2>
                            <p className="cp2-sub">{p.enCorto}</p>
                            <div className="cp2-datos">
                                <span>Desde 4 h · medio día o día completo</span>
                                <span>Presencial · aula virtual · SCORM</span>
                                <span>Certificado nominal + registro formativo</span>
                                <span className="cp2-dato-precio">Desde 900 € · con el bloque del Art. 4, desde 1.200 €</span>
                            </div>
                            <div className="cp2-enlaces">
                                <a href="#temario" className="cp2-enlace">Ver el temario completo ↓</a>
                                <Link href="/precios#formar" className="cp2-enlace">Ver la tabla de precios →</Link>
                            </div>
                            <p className="cp2-splitnota">{p.paraQuien}</p>
                        </div>
                    </div>
                    <div className="cp2-mitad">
                        <div className="cp2-cuerpo">
                            {p.temario.slice(0, 3).map((b, i) => (
                                <div key={b.num} className={i === 0 ? "cp2-sesion" : "cp2-sesion cp2-sesion-2"}>
                                    <span className="mono-label" style={{ color: "#f6c39c" }}>Bloque {b.num}</span>
                                    <h3>{b.titulo}</h3>
                                    <p>{b.desc}</p>
                                </div>
                            ))}
                            {p.temario.length > 3 && (
                                <p className="cp2-splitnota" style={{ marginTop: "1.1rem" }}>
                                    …y {p.temario.length - 3} bloques más en el{" "}
                                    <a href="#temario" style={{ color: "#f6c39c", fontWeight: 600 }}>temario completo ↓</a>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Temario — acordeones integrados en tinta, continuación del split */}
            <section id="temario" style={{ padding: "2.8rem 0 3.4rem", background: "#1c1917", scrollMarginTop: "6rem" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div className="tem-cabecera">
                        <span className="mono-label tem-kicker">Temario</span>
                        <h2 className="tem-titulo">El temario, bloque a bloque</h2>
                        <p className="tem-sub">Se trabaja con vuestros casos reales — no con demos de laboratorio.</p>
                    </div>
                    {p.temario.map((b) => (
                        <details key={b.num} className="cp-acordeon" name="temario-curso">
                            <summary>
                                <span className="cp-acordeon-num mono-label">{b.num}</span>
                                <span className="cp-acordeon-t">{b.titulo}</span>
                                <i className="fas fa-chevron-down"></i>
                            </summary>
                            <div className="cp-acordeon-cuerpo">
                                <p style={{ color: "rgba(250,246,239,0.75)", lineHeight: 1.65, margin: "0 0 0.7rem", maxWidth: 640 }}>{b.desc}</p>
                                {b.puntos && (
                                    <ul className="cp-puntos">
                                        {b.puntos.map((pt) => <li key={pt}>{pt}</li>)}
                                    </ul>
                                )}
                            </div>
                        </details>
                    ))}
                </div>
            </section>

            {/* Precios de un vistazo — banda de cifras, cierre del temario */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917", borderTop: "1px solid rgba(250,246,239,0.08)" }}>
                <div className="container">
                    <div className="cp2-cifras">
                        <div className="cp2-cifra">
                            <span className="cp2-cifra-valor">desde 600 €</span>
                            <span className="cp2-cifra-etiqueta">Alfabetización suelta · Art. 4</span>
                        </div>
                        <div className="cp2-cifra">
                            <span className="cp2-cifra-valor">desde 900 €</span>
                            <span className="cp2-cifra-etiqueta">Este curso de {p.herramienta}</span>
                        </div>
                        <div className="cp2-cifra">
                            <span className="cp2-cifra-valor">desde 1.200 €</span>
                            <span className="cp2-cifra-etiqueta">Curso estrella · Art. 4 + herramienta</span>
                        </div>
                        <div className="cp2-cifra">
                            <span className="cp2-cifra-valor">desde 1.900 €</span>
                            <span className="cp2-cifra-etiqueta">Cursos a medida · SCORM</span>
                        </div>
                    </div>
                    <p className="cp2-cifras-pie">
                        No se paga por alumno, sino por sesión —{" "}
                        <Link href="/precios#formar">Ver la tabla de precios →</Link>
                    </p>
                </div>
            </section>

            {/* Casos más concretos — barra tinta, pegada a las cifras */}
            <nav aria-label="Casos concretos" className="nav-barra">
                <div className="container nav-barra-fila">
                    <span className="nav-barra-etiqueta mono-label">¿Tu caso es más concreto?</span>
                    <Link href="/formacion/empresas" className="nav-barra-item">Formación para empresas</Link>
                    <Link href="/sectores/despachos" className="nav-barra-item">Despachos profesionales</Link>
                    <Link href="/formacion/directivos" className="nav-barra-item">Dirección</Link>
                    <Link href="/sectores/academias" className="nav-barra-item">Academias</Link>
                    <Link href="/formacion/cursos-a-medida" className="nav-barra-item">Cursos a medida · SCORM</Link>
                </div>
            </nav>

            {/* ¿Te encaja? — foto ambiental + velo, como el "quién lo imparte" */}
            {p.encaja && (
                <section style={{ position: "relative", overflow: "hidden", padding: "4.5rem 0", background: "#1c1917" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={FOTO_ENCAJA}
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
                    <div className="container" style={{ maxWidth: 1000, position: "relative", zIndex: 2 }}>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Para quién</span>
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
                            ¿Te encaja este curso?
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.7, margin: "0 0 2.2rem", maxWidth: 560 }}>
                            {NUMEROS[p.encaja.length] ?? p.encaja.length} señales de que este curso
                            es para tu equipo — probablemente reconozcas más de una.
                        </p>
                        <div className="cp2-encaja">
                            {p.encaja.map((e) => (
                                <div key={e.titulo} className="cp2-encaja-item">
                                    <h3>{e.titulo}</h3>
                                    <p>{e.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Qué se lleva cada puesto — banda tinta de columnas con filete */}
            <section style={{ padding: "3.4rem 0", background: "#1c1917" }}>
                <div className="container">
                    <h2 className="cp2-etiqueta" style={{ marginBottom: "2rem" }}>
                        Qué se lleva montado cada rol
                    </h2>
                    <div className="cp2-roles">
                        {p.usos.map((u, i) => (
                            <div key={u.rol} className="cp2-rol">
                                <span className="cp2-rol-num mono-label">{String(i + 1).padStart(2, "0")}</span>
                                <h3>{u.rol}</h3>
                                <p>{u.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="cp2-roles-pie">
                        ¿Quieres además el bloque obligatorio del Art. 4? Este taller es la sesión
                        práctica del{" "}
                        <Link href="/formacion/empresas">curso estrella</Link>{" "}
                        (alfabetización + herramienta, desde 1.200 €). Y si la herramienta debe
                        quedar además configurada y con política de uso, eso es el{" "}
                        <Link href="/cumplimiento">pilar de cumplimiento</Link>. Y si prefieres
                        ver antes lo que sale de todo esto, ahí están los{" "}
                        <Link href="/casos">sistemas que ya funcionan</Link>.
                    </p>
                    {p.nota && (
                        <p className="cp2-nota">{p.nota}</p>
                    )}
                </div>
            </section>

            {/* FAQ — split en tinta con el CTA integrado */}
            <section style={{ padding: "4rem 0", background: "#1c1917" }}>
                <div className="container cp2-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem", color: "#faf6ef" }}>
                            Preguntas frecuentes
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.65, margin: "0 0 1.6rem", fontSize: "0.95rem" }}>
                            30 minutos gratis: me cuentas cómo trabajáis y te digo qué prepararía
                            para vosotros con {p.herramienta}.
                        </p>
                        <Link href="/#contact" className="cp2-cta">Pedir mis 30 minutos →</Link>
                    </div>
                    <div>
                        {p.faqs.map((f) => (
                            <details key={f.question} className="cp-faq" name="faq-curso">
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
                .cp2-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .cp2-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .cp2-marca {
                    position: absolute;
                    top: 0.6rem;
                    right: 1.4rem;
                    font-size: clamp(5rem, 9vw, 8rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .cp2-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3rem 0;
                    width: 100%;
                }
                .cp2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .cp2-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.65;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .cp2-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .cp2-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .cp2-datos .cp2-dato-precio { color: #f6c39c; }
                .cp2-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem 1.3rem;
                    margin-top: 1rem;
                }
                .cp2-enlace {
                    display: inline-block;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .cp2-enlace:hover {
                    color: #faf6ef;
                    transform: translateX(6px);
                }
                .cp2-splitnota {
                    margin: 0.6rem 0 0;
                    font-size: 0.85rem;
                    line-height: 1.6;
                    color: rgba(250, 246, 239, 0.6);
                }
                .cp2-sesion {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                }
                .cp2-sesion-2 {
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                    padding-top: 1.3rem;
                    margin-top: 1.3rem;
                }
                .cp2-sesion h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.2;
                }
                .cp2-sesion p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                @media (max-width: 800px) {
                    .cp2-mitades { grid-template-columns: 1fr; gap: 0; }
                    .cp2-cuerpo { padding: 2.2rem 0; }
                }
                .cp2-etiqueta {
                    text-align: center;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.55);
                    margin: 0 0 2.2rem;
                }
                .cp-acordeon {
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                }
                .cp-acordeon:last-of-type {
                    border-bottom: 1px solid rgba(250, 246, 239, 0.14);
                }
                .cp-acordeon summary {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.3rem 0.4rem;
                    cursor: pointer;
                }
                .cp-acordeon summary::-webkit-details-marker { display: none; }
                .cp-acordeon-num { color: #f6c39c; flex-shrink: 0; }
                .cp-acordeon-t {
                    flex: 1;
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.05rem, 2vw, 1.3rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.3;
                    transition: color 0.2s ease;
                }
                .cp-acordeon summary:hover .cp-acordeon-t { color: #f6c39c; }
                .cp-acordeon summary i { color: #f6c39c; font-size: 0.8rem; flex-shrink: 0; transition: transform 0.3s ease; }
                .cp-acordeon[open] summary i { transform: rotate(180deg); }
                .cp-acordeon-cuerpo { padding: 0 0.4rem 1.5rem 3rem; }
                .cp-puntos { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 0.45rem; }
                .cp-puntos li {
                    color: rgba(250, 246, 239, 0.75);
                    font-size: 0.93rem;
                    line-height: 1.5;
                    padding-left: 1.1rem;
                    position: relative;
                }
                .cp-puntos li::before { content: "·"; position: absolute; left: 0.2rem; color: #f6c39c; font-weight: 700; }
                @media (max-width: 600px) { .cp-acordeon-cuerpo { padding-left: 1.5rem; } }
                .cp2-encaja {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.8rem 3rem;
                }
                .cp2-encaja-item {
                    border-top: 1px solid rgba(250, 246, 239, 0.16);
                    padding-top: 1rem;
                }
                .cp2-encaja-item h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0 0 0.25rem;
                    line-height: 1.3;
                }
                .cp2-encaja-item p {
                    color: rgba(250, 246, 239, 0.8);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                @media (max-width: 700px) {
                    .cp2-encaja { grid-template-columns: 1fr; gap: 1.4rem; }
                }
                .cp2-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .cp2-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .cp2-cifra-valor {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .cp2-cifra-etiqueta {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                .cp2-cifras-pie {
                    text-align: center;
                    margin: 1.8rem 0 0;
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.65);
                }
                .cp2-cifras-pie a { color: #f6c39c; font-weight: 600; }
                .cp2-cifras-pie a:hover { color: #faf6ef; }
                @media (max-width: 800px) {
                    .cp2-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }
                .cp2-roles {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2.4rem;
                }
                .cp2-rol {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    border-top: 1px solid rgba(250, 246, 239, 0.16);
                    padding-top: 1rem;
                }
                .cp2-rol-num { color: #f6c39c; }
                .cp2-rol h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.25;
                    margin: 0;
                }
                .cp2-rol p {
                    color: rgba(250, 246, 239, 0.78);
                    line-height: 1.6;
                    font-size: 0.9rem;
                    margin: 0;
                }
                @media (max-width: 900px) {
                    .cp2-roles { grid-template-columns: 1fr 1fr; gap: 1.8rem; }
                }
                @media (max-width: 560px) {
                    .cp2-roles { grid-template-columns: 1fr; gap: 1.4rem; }
                }
                .cp2-roles-pie {
                    text-align: center;
                    max-width: 720px;
                    margin: 2.4rem auto 0;
                    font-size: 0.9rem;
                    line-height: 1.7;
                    color: rgba(250, 246, 239, 0.65);
                }
                .cp2-roles-pie a { color: #f6c39c; font-weight: 600; }
                .cp2-roles-pie a:hover { color: #faf6ef; }
                .cp2-nota {
                    text-align: center;
                    margin: 1.2rem auto 0;
                    max-width: 720px;
                    font-size: 0.88rem;
                    font-style: italic;
                    color: rgba(250, 246, 239, 0.65);
                }
                .cp2-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .cp2-faq-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .cp2-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .cp2-cta:hover {
                    background: #faf6ef;
                    transform: translateY(-2px);
                }
                .cp-faq { border-top: 1px solid rgba(250, 246, 239, 0.14); }
                .cp-faq:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .cp-faq summary {
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
                .cp-faq summary::-webkit-details-marker { display: none; }
                .cp-faq summary:hover { color: #f6c39c; padding-left: 1rem; }
                .cp-faq summary i { color: #f6c39c; font-size: 0.8rem; flex-shrink: 0; transition: transform 0.3s ease; }
                .cp-faq[open] summary i { transform: rotate(180deg); }
                .tem-cabecera {
                    text-align: center;
                    max-width: 660px;
                    margin: 0 auto 2.4rem;
                }
                .tem-kicker { color: #f6c39c; }
                .tem-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 3.2vw, 2.4rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0.9rem 0 0.7rem;
                }
                .tem-sub {
                    color: rgba(250, 246, 239, 0.7);
                    font-size: 0.95rem;
                    line-height: 1.65;
                    margin: 0;
                }
            `}</style>
        </main>
    );
}
