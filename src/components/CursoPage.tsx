import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import FormacionTabs from "./FormacionTabs";
import FormularioCurso from "./FormularioCurso";

// =============================================================================
// PLANTILLA DE CURSO POR HERRAMIENTA (Fase 2 de la v2)
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
}

const OTROS_CURSOS = [
    { slug: "chatgpt", label: "ChatGPT" },
    { slug: "copilot", label: "Copilot 365" },
    { slug: "gemini", label: "Gemini + NotebookLM" },
    { slug: "claude", label: "Claude" },
];

export default function CursoPage(p: CursoPageProps) {
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

            {/* Hero editorial */}
            <section style={{
                padding: "9rem 0 3.5rem",
                background: "radial-gradient(circle at 20% 20%, rgba(234, 88, 12, 0.07) 0%, transparent 55%)",
            }}>
                <div className="container fc-hero-grid">
                    <div>
                        <span className="kicker-mono">
                            <i className="fa-solid fa-graduation-cap" style={{ marginRight: "0.6rem" }}></i>
                            {p.kicker}
                        </span>
                        <h1 style={{
                            fontFamily: "var(--font-display, serif)",
                            fontSize: "clamp(2rem, 4.5vw, 3rem)",
                            fontWeight: 600,
                            lineHeight: 1.12,
                            letterSpacing: "-0.02em",
                            color: "var(--color-text-main)",
                            margin: "1rem 0 1.2rem",
                        }}>
                            {p.titulo}
                        </h1>
                        <p style={{ fontSize: "1.1rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0, maxWidth: 620 }}>
                            {p.subtitulo}
                        </p>
                    </div>

                    {/* Captura en el hero: el curso de la página viaja como origen del lead */}
                    <FormularioCurso origen={`Curso de ${p.herramienta}`} />
                </div>
            </section>

            {/* Salta entre todas las formaciones sin volver atras */}
            <FormacionTabs />

            {/* Cápsula answer-first */}
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
                        {p.enCorto}
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        {p.paraQuien}
                    </p>
                </div>
            </section>

            {/* Temario */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Temario</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            Lo que se trabaja — con vuestros casos, no con demos
                        </h2>
                    </div>
                    {p.temario.map((b, i) => (
                        <details key={b.num} className="cp-acordeon" open={i === 0}>
                            <summary>
                                <span className="mono-label" style={{ color: "var(--color-primary)" }}>{b.num}</span>
                                <span className="cp-acordeon-t">{b.titulo}</span>
                                <i className="fas fa-chevron-down"></i>
                            </summary>
                            <div className="cp-acordeon-cuerpo">
                                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, margin: "0 0 0.7rem", maxWidth: 640 }}>{b.desc}</p>
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

            {/* ¿Te encaja? — cualifica antes de vender */}
            {p.encaja && (
                <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                    <div className="container" style={{ maxWidth: 1000 }}>
                        <div style={{ marginBottom: "2rem" }}>
                            <span className="kicker-mono">Para quién</span>
                            <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                                ¿Te encaja este curso?
                            </h2>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
                            {p.encaja.map((e, i) => (
                                <div key={e.titulo} style={{ border: "1px solid var(--color-border)", borderRadius: "14px", padding: "1.3rem 1.4rem", background: "var(--color-card-bg, #fff)" }}>
                                    <span className="mono-label" style={{ color: "var(--color-primary)" }}>{String(i + 1).padStart(2, "0")}</span>
                                    <h3 style={{ fontFamily: "var(--font-display, serif)", fontSize: "1.12rem", fontWeight: 600, color: "var(--color-text-main)", margin: "0.4rem 0 0.35rem", lineHeight: 1.3 }}>{e.titulo}</h3>
                                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.55, margin: 0 }}>{e.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Qué se lleva cada puesto — franja terracota */}
            <section style={{ padding: "4.5rem 0", background: "linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Aterrizado al puesto</span>
                    <h2 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                        fontWeight: 600,
                        color: "#faf6ef",
                        margin: "0.8rem 0 2rem",
                        lineHeight: 1.2,
                    }}>
                        Qué se lleva montado cada rol
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.8rem" }}>
                        {p.usos.map((u) => (
                            <div key={u.rol}>
                                <h3 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "1.15rem",
                                    fontWeight: 600,
                                    color: "#faf6ef",
                                    margin: "0 0 0.4rem",
                                }}>
                                    {u.rol}
                                </h3>
                                <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.6, margin: 0, fontSize: "0.93rem" }}>{u.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.7, marginTop: "2rem", maxWidth: 720 }}>
                        ¿Quieres además el bloque obligatorio del Art. 4? Este taller es la sesión
                        práctica del{" "}
                        <Link href="/formacion" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            curso estrella
                        </Link>{" "}
                        (alfabetización + herramienta, desde 1.200 €). Y si lo que necesitas es que
                        la herramienta quede además configurada y con política de uso, eso es el{" "}
                        <Link href="/cumplimiento" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            pilar de cumplimiento
                        </Link>.
                    </p>
                </div>
            </section>

            {/* Datos del curso */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div className="cp-datos">
                        <div className="cp-dato"><span className="mono-label" style={{ color: "var(--color-primary)" }}>Duración</span><strong>Desde 4 h</strong><span>Taller de medio día o día completo, por nivel</span></div>
                        <div className="cp-dato"><span className="mono-label" style={{ color: "var(--color-primary)" }}>Cómo se imparte</span><strong>3 formatos</strong><span>Presencial · aula virtual · e-learning (SCORM)</span></div>
                        <div className="cp-dato"><span className="mono-label" style={{ color: "var(--color-primary)" }}>Acredita</span><strong>Certificado nominal</strong><span>Y registro formativo fechado por participante</span></div>
                        <div className="cp-dato"><span className="mono-label" style={{ color: "var(--color-primary)" }}>Inversión</span><strong>Desde 900 €</strong><span>Precio cerrado por escrito · con Art. 4, desde 1.200 €</span></div>
                    </div>
                    {p.nota && (
                        <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginTop: "1.5rem", maxWidth: 720, fontStyle: "italic" }}>
                            {p.nota}
                        </p>
                    )}
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Preguntas frecuentes
                        </h2>
                    </div>
                    {p.faqs.map((f) => (
                        <details key={f.question} className="cp-faq">
                            <summary>
                                <span>{f.question}</span>
                                <i className="fas fa-chevron-down"></i>
                            </summary>
                            <p style={{ padding: "0 0.4rem 1.5rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0, maxWidth: 720 }}>{f.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* Otros cursos */}
            <section style={{ padding: "3rem 0", borderTop: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.8rem" }}>
                    <span className="kicker-mono" style={{ marginRight: "0.5rem" }}>¿Tu equipo usa otra herramienta?</span>
                    {OTROS_CURSOS.filter((c) => c.slug !== p.slug).map((c) => (
                        <Link key={c.slug} href={`/formacion/${c.slug}`} className="cp-chip">
                            Curso de {c.label} →
                        </Link>
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
                        margin: "0 0 1rem",
                        letterSpacing: "-0.02em",
                    }}>
                        ¿Cuánto tiempo le devolvería {p.herramienta} a tu equipo?
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos gratis: me cuentas cómo trabajáis y te digo qué prepararía para vosotros.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir mis 30 minutos
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .cp-acordeon {
                    border: 1px solid var(--color-border);
                    border-radius: 14px;
                    margin-bottom: 0.7rem;
                    background: var(--color-card-bg, #fff);
                    overflow: hidden;
                }
                .cp-acordeon summary {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.1rem 1.3rem;
                    cursor: pointer;
                }
                .cp-acordeon summary::-webkit-details-marker { display: none; }
                .cp-acordeon-t {
                    flex: 1;
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.05rem, 2vw, 1.3rem);
                    font-weight: 600;
                    color: var(--color-text-main);
                    line-height: 1.3;
                }
                .cp-acordeon summary i { color: var(--color-primary); font-size: 0.8rem; transition: transform 0.3s ease; }
                .cp-acordeon[open] summary i { transform: rotate(180deg); }
                .cp-acordeon-cuerpo { padding: 0 1.3rem 1.2rem 3.6rem; }
                .cp-puntos { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 0.35rem; }
                .cp-puntos li {
                    color: var(--color-text-muted);
                    font-size: 0.92rem;
                    line-height: 1.5;
                    padding-left: 1.1rem;
                    position: relative;
                }
                .cp-puntos li::before { content: "·"; position: absolute; left: 0.2rem; color: var(--color-primary); font-weight: 700; }
                @media (max-width: 600px) { .cp-acordeon-cuerpo { padding-left: 1.3rem; } }
                .cp-fila {
                    display: grid;
                    grid-template-columns: 3rem 1fr;
                    gap: 1.2rem;
                    padding: 1.3rem 0.3rem;
                    border-top: 1px solid var(--color-border);
                }
                .cp-fila:last-of-type { border-bottom: 1px solid var(--color-border); }
                .cp-datos {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
                    gap: 1rem;
                }
                .cp-dato {
                    border: 1px solid var(--color-border);
                    border-radius: 14px;
                    padding: 1.1rem 1.3rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                    background: var(--color-card-bg, #fff);
                }
                .cp-dato strong {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    color: var(--color-text-main);
                }
                .cp-dato span:last-child { color: var(--color-text-muted); font-size: 0.82rem; line-height: 1.4; }
                .cp-chip {
                    border: 1px solid var(--color-border);
                    border-radius: 50px;
                    padding: 0.5rem 1.1rem;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    transition: border-color 0.2s ease, color 0.2s ease;
                }
                .cp-chip:hover { border-color: var(--color-primary); color: var(--color-primary); }
                .cp-faq { border-top: 1px solid var(--color-border); }
                .cp-faq:last-of-type { border-bottom: 1px solid var(--color-border); }
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
                    color: var(--color-text-main);
                    line-height: 1.3;
                    transition: color 0.2s ease, padding-left 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .cp-faq summary::-webkit-details-marker { display: none; }
                .cp-faq summary:hover { color: var(--color-primary); padding-left: 1rem; }
                .cp-faq summary i { color: var(--color-primary); font-size: 0.8rem; flex-shrink: 0; transition: transform 0.3s ease; }
                .cp-faq[open] summary i { transform: rotate(180deg); }
            `}</style>
        </main>
    );
}
