import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioCurso from "@/components/FormularioCurso";
import FormacionTabs from "@/components/FormacionTabs";

export const metadata: Metadata = {
    title: "Formación en IA para Directivos",
    description:
        "Formación en IA para dirección: decidir con criterio qué implantar, qué exige el AI Act y cómo gobernar la IA en tu empresa. Sesión ejecutiva desde 600€.",
    alternates: { canonical: "https://automatizatelo.com/formacion/directivos" },
    openGraph: {
        title: "IA para dirección: criterio para decidir, no humo",
        description: "Qué implantar, qué exige la ley y cómo gobernarlo — en horas de directivo, no en cursos de meses.",
        url: "https://automatizatelo.com/formacion/directivos",
    },
};

const faqs = [
    {
        question: "¿En qué se diferencia de la formación para el equipo?",
        answer: "En la pregunta que responde. El equipo necesita saber usar la IA en su puesto; dirección necesita saber qué decidir: en qué merece la pena invertir, qué exige la ley, qué riesgos asume la empresa y cómo se gobierna todo esto sin frenar al equipo. Es formación para firmar decisiones con criterio, no para escribir prompts.",
    },
    {
        question: "¿Cuánto tiempo me va a quitar?",
        answer: "El formato ejecutivo está pensado para agendas de dirección: una sesión de medio día (4 horas) cubre lo esencial — mapa de oportunidades, obligaciones del AI Act y plan de gobernanza. Si el comité quiere profundizar, se amplía a dos sesiones. Sin deberes absurdos ni cursos de meses.",
    },
    {
        question: "¿Cuánto cuesta?",
        answer: "La sesión ejecutiva de medio día para el equipo directivo, desde 600€. El programa completo de dirección (dos sesiones más plan de gobernanza documentado), desde 1.200€. Precio cerrado por escrito, como todo lo que hago.",
    },
    {
        question: "¿Esto cuenta para el Art. 4 del AI Act?",
        answer: "Sí — y para dirección con doble motivo: el Art. 4 pide alfabetización proporcional al rol, y el rol de dirección incluye decidir sobre los sistemas de IA de la empresa. La sesión queda registrada con certificado nominal, como el resto de la formación.",
    },
    {
        question: "¿Me vas a intentar vender un proyecto después?",
        answer: "Te voy a dar un mapa honesto — y en ese mapa habrá cosas que puedes hacer sin mí, cosas que no merecen la pena (te lo diré igual) y quizá cosas donde encaje mi trabajo. Sin compromiso y sin presión: la formación vale por sí sola, y mi mejor comercial es que el criterio que te llevas sea bueno.",
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

const bloques = [
    {
        num: "01",
        titulo: "El mapa real de la IA para tu empresa",
        desc: "Qué puede hacer la IA hoy en tu sector — sin humo ni demos de feria — y dónde están las horas y el dinero en TU operación. Con casos de sistemas que construyo y funcionan a diario.",
    },
    {
        num: "02",
        titulo: "Lo que exige la ley (y lo que no)",
        desc: "El AI Act traducido a decisiones de gerencia: qué obliga desde cuándo, qué es humo comercial que te intentarán vender, y qué evidencia debe poder enseñar tu empresa.",
    },
    {
        num: "03",
        titulo: "Gobernanza: quién decide qué",
        desc: "Cómo se aprueban herramientas, quién responde de qué, qué política necesita tu plantilla y cómo evaluar — sin tecnicismos — a los proveedores de IA que llaman a tu puerta. Para que la empresa use la IA sin depender de que tú vigiles.",
    },
    {
        num: "04",
        titulo: "Tu plan de decisión",
        desc: "Sales con un plan priorizado: qué implantar primero, qué formar, qué cumplir y qué descartar — con órdenes de magnitud de coste y cómo llevar al equipo contigo sin resistencias (la gestión del cambio es la mitad del éxito).",
    },
];

export default function DirectivosPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <Header />

            {/* Hero editorial */}
            {/* Hero con foto de fondo, mismo patrón que la home */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 5rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/equipos-directivos.webp"
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0, transform: "translateX(6%) scale(1.07)", transformOrigin: "right top" }}
                />
                <div aria-hidden="true" style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    // Velo lateral: sombra donde está el texto (izquierda), foto
                    // limpia a la derecha. Oscurecerlo todo mataba la imagen.
                    background: "linear-gradient(90deg, rgba(28,25,23,0.62) 0%, rgba(28,25,23,0.42) 38%, rgba(28,25,23,0.12) 65%, transparent 85%), linear-gradient(180deg, rgba(28,25,23,0.18) 0%, transparent 40%)",
                }} />
                <div className="container fc-hero-grid fh-foto" style={{ position: "relative", zIndex: 2 }}>
                    <div>
                    <span className="kicker-mono" style={{ color: "#f6c39c" }}>
                        <i className="fa-solid fa-chess-king" style={{ marginRight: "0.6rem" }}></i>
                        Formación IA · Dirección
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
                        IA para dirección: <span style={{ color: "#f6c39c" }}>criterio<br />para decidir, no humo</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 640, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                        Todo el mundo te habla de IA; casi nadie te ayuda a decidir. Esta formación
                        es para gerentes y comités de dirección: qué implantar, qué exige la ley y
                        cómo gobernarlo — en horas de directivo, no en cursos de meses.
                    </p>
                    </div>

                    {/* Captura en el hero: el curso viaja como origen del lead */}
                    <FormularioCurso
                        origen="Sesión ejecutiva para dirección"
                        etiquetaPersonas="Personas en el comité"
                        etiquetaOpciones="¿Qué necesitas decidir?*"
                        opciones={[
                            "Qué implantar y en qué orden",
                            "Qué nos obliga el AI Act",
                            "Cómo gobernar el uso de IA",
                            "El programa completo de dirección",
                            "Aún no lo tengo claro",
                        ]}
                    />
                </div>
            </section>

            {/* Salta entre todas las formaciones sin volver atras */}
            <FormacionTabs />

            {/* En corto — split degradado, como el curso estrella */}
            <section aria-label="En corto" style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                <div className="container di2-mitades">
                    <div className="di2-mitad">
                        <span className="di2-marca" aria-hidden="true">♚</span>
                        <div className="di2-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>En corto</span>
                            <h2 className="di2-titulo">
                                Medio día para decidir <span style={{ color: "#f6c39c" }}>con criterio</span>
                            </h2>
                            <p className="di2-sub">
                                El mapa real de la IA en tu empresa, lo que exige el AI Act y el plan
                                de gobernanza — en formato de agenda de dirección. Impartida por quien
                                construye los sistemas, no por un divulgador: lo que se cuenta son
                                casos que funcionan a diario en negocios reales.
                            </p>
                            <div className="di2-datos">
                                <span>Medio día · 4 h</span>
                                <span>Presencial o en remoto</span>
                                <span>Certificado nominal + registro</span>
                                <span className="di2-dato-precio">Desde 600 € · programa 1.200 €</span>
                            </div>
                            <div className="di2-enlaces">
                                <a href="#programa" className="di2-enlace">Ver qué cubre ↓</a>
                                <Link href="/precios#formar" className="di2-enlace">Ver la tabla de precios →</Link>
                            </div>
                            <p className="di2-nota">
                                ¿La formación es para el equipo, no para el comité? Entonces es el{" "}
                                <Link href="/formacion/empresas">curso in-company, desde 900 € →</Link>
                            </p>
                        </div>
                    </div>
                    <div className="di2-mitad">
                        <div className="di2-cuerpo">
                            <div className="di2-caso">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>La diferencia</span>
                                <h3>El equipo aprende a usarla; dirección, a decidirla</h3>
                                <p>En qué invertir, qué riesgos asume la empresa y cómo gobernarlo sin frenar al equipo. Es formación para firmar decisiones, no para escribir prompts.</p>
                            </div>
                            <div className="di2-caso di2-caso-2">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>Sin venta detrás</span>
                                <h3>Un mapa honesto, con lo que no compensa</h3>
                                <p>Habrá cosas que puedes hacer sin mí y cosas que no merecen la pena — te las diré igual. La sesión vale por sí sola.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Precios de un vistazo — banda de cifras */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917" }}>
                <div className="container">
                    <div className="di2-cifras">
                        <div className="di2-cifra">
                            <span className="di2-cifra-num">desde 600 €</span>
                            <span className="di2-cifra-lab">Sesión ejecutiva de medio día</span>
                        </div>
                        <div className="di2-cifra">
                            <span className="di2-cifra-num">desde 1.200 €</span>
                            <span className="di2-cifra-lab">Programa con plan de gobernanza</span>
                        </div>
                        <div className="di2-cifra">
                            <span className="di2-cifra-num">4 h</span>
                            <span className="di2-cifra-lab">Lo que dura la sesión esencial</span>
                        </div>
                        <div className="di2-cifra">
                            <span className="di2-cifra-num">Art. 4</span>
                            <span className="di2-cifra-lab">Cubierto también para dirección</span>
                        </div>
                    </div>
                    <p className="di2-cifras-pie">
                        No se paga por asistente, sino por sesión —{" "}
                        <Link href="/precios#formar">Ver la tabla de precios →</Link>
                    </p>
                </div>
            </section>

            {/* Qué cubre — foto ambiental + velo */}
            <section id="programa" style={{ position: "relative", overflow: "hidden", padding: "4.5rem 0", background: "#1c1917", scrollMarginTop: "6rem" }}>
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
                    background: "linear-gradient(90deg, rgba(28,25,23,0.8) 0%, rgba(28,25,23,0.64) 45%, rgba(28,25,23,0.42) 75%, rgba(28,25,23,0.28) 100%)",
                }} />
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="di2-cab">
                        <span className="mono-label di2-cab-kicker">Qué cubre</span>
                        <h2 className="di2-cab-titulo">Las cuatro preguntas que un gerente necesita respondidas</h2>
                        <p className="di2-cab-sub">
                            Y de la cuarta se sale con un plan escrito, no con apuntes.
                        </p>
                    </div>
                    <div className="di2-bloques">
                        {bloques.map((b) => (
                            <div key={b.num} className="di2-bloque">
                                <span className="di2-bloque-num mono-label">{b.num}</span>
                                <h3>{b.titulo}</h3>
                                <p>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Casos más concretos — tira numerada */}
            <nav aria-label="Casos concretos" className="nav-barra">
                <div className="container nav-barra-fila">
                    <span className="nav-barra-etiqueta mono-label">¿Tu caso es más concreto?</span>
                    {[
                        { href: "/formacion/empresas", label: "Equipo" },
                        { href: "/formacion/ai-act", label: "Art. 4" },
                        { href: "/cumplimiento", label: "Cumplimiento" },
                        { href: "/sectores/despachos", label: "Despachos" },
                        { href: "/formacion/centros-educativos", label: "Centros" },
                    ].map((t, i) => (
                        <Link key={t.href} href={t.href} className="nav-barra-item">
                            {t.label}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* FAQ — split en tinta con el CTA integrado */}
            <section style={{ padding: "4rem 0", background: "#1c1917" }}>
                <div className="container di2-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem", color: "#faf6ef" }}>
                            Preguntas frecuentes
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.65, margin: "0 0 1.6rem", fontSize: "0.95rem" }}>
                            30 minutos gratis: me cuentas dónde está tu empresa y te digo si la
                            sesión te aporta — o si lo que necesitas es otra cosa.
                        </p>
                        <Link href="/#contact" className="di2-cta">Pedir mis 30 minutos →</Link>
                    </div>
                    <div>
                        {faqs.map((f) => (
                            <details key={f.question} className="fdir-faq" name="faq-directivos">
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
                .di2-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .di2-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .di2-marca {
                    position: absolute;
                    top: 0.8rem;
                    right: 1.4rem;
                    font-size: clamp(4.5rem, 8vw, 7rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .di2-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3rem 0;
                    width: 100%;
                }
                .di2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .di2-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.65;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .di2-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .di2-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .di2-datos .di2-dato-precio { color: #f6c39c; }
                .di2-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem 1.3rem;
                    margin-top: 1rem;
                }
                .di2-enlace {
                    display: inline-block;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .di2-enlace:hover { color: #faf6ef; transform: translateX(6px); }
                .di2-nota {
                    margin: 0.6rem 0 0;
                    font-size: 0.85rem;
                    line-height: 1.6;
                    color: rgba(250, 246, 239, 0.6);
                }
                .di2-nota a { color: #f6c39c; font-weight: 600; }
                .di2-nota a:hover { color: #faf6ef; }
                .di2-caso {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                }
                .di2-caso-2 {
                    border-top: 1px solid rgba(250, 246, 239, 0.16);
                    padding-top: 1.3rem;
                    margin-top: 1.3rem;
                }
                .di2-caso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.25;
                }
                .di2-caso p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                @media (max-width: 800px) {
                    .di2-mitades { grid-template-columns: 1fr; gap: 0; }
                    .di2-cuerpo { padding: 2.2rem 0; }
                }
                .di2-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .di2-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .di2-cifra-num {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .di2-cifra-lab {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                .di2-cifras-pie {
                    text-align: center;
                    margin: 1.8rem 0 0;
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.65);
                }
                .di2-cifras-pie a { color: #f6c39c; font-weight: 600; }
                .di2-cifras-pie a:hover { color: #faf6ef; }
                @media (max-width: 800px) {
                    .di2-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }
                .di2-cab {
                    text-align: center;
                    max-width: 680px;
                    margin: 0 auto 2.4rem;
                }
                .di2-cab-kicker { color: #f6c39c; }
                .di2-cab-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 3.2vw, 2.4rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0.9rem 0 0.7rem;
                    text-shadow: 0 2px 30px rgba(28,25,23,0.45);
                }
                .di2-cab-sub {
                    color: rgba(250, 246, 239, 0.75);
                    font-size: 0.95rem;
                    line-height: 1.65;
                    margin: 0;
                }
                .di2-bloques {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem 2.4rem;
                }
                .di2-bloque {
                    display: flex;
                    flex-direction: column;
                    gap: 0.35rem;
                    border-top: 1px solid rgba(250, 246, 239, 0.2);
                    padding-top: 1rem;
                }
                .di2-bloque-num { color: #f6c39c; }
                .di2-bloque h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.12rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.25;
                }
                .di2-bloque p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.89rem;
                    margin: 0;
                }
                @media (max-width: 900px) {
                    .di2-bloques { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 600px) {
                    .di2-bloques { grid-template-columns: 1fr; gap: 1.4rem; }
                }
                @media (max-width: 900px) {
                }
                .di2-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .di2-faq-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .di2-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .di2-cta:hover { background: #faf6ef; transform: translateY(-2px); }
                .fdir-faq { border-top: 1px solid rgba(250, 246, 239, 0.14); }
                .fdir-faq:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .fdir-faq summary {
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
                .fdir-faq summary::-webkit-details-marker { display: none; }
                .fdir-faq summary:hover { color: #f6c39c; padding-left: 1rem; }
                .fdir-faq summary i { color: #f6c39c; font-size: 0.8rem; flex-shrink: 0; transition: transform 0.3s ease; }
                .fdir-faq[open] summary i { transform: rotate(180deg); }
            `}</style>
        </main>
    );
}
