import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizDiagnostico from "@/components/QuizDiagnostico";

export const metadata: Metadata = {
    title: "Diagnóstico de Automatización Gratis",
    description:
        "Descubre cuántas horas pierde tu pyme en tareas repetitivas y qué automatizar primero. 12 preguntas, 3 minutos, plan por áreas gratis.",
    alternates: { canonical: "https://automatizatelo.com/diagnostico" },
    openGraph: {
        title: "¿Cuánto de tu semana se puede automatizar?",
        description: "12 preguntas, 3 minutos, y un plan por áreas de qué automatizar primero en tu negocio.",
        url: "https://automatizatelo.com/diagnostico",
    },
};

// Las cinco áreas que mide el test, en el mismo orden en que puntúan.
// Cada panel enseña la foto del hero de la página que abre.
const areas = [
    { n: "Área 01", t: "Captación y ventas", d: "Qué pasa cuando entra un contacto nuevo y cuánto tardas en sacar un presupuesto.", href: "/sistemas/ventas", cta: "Automatización de ventas", foto: "/ecommerce-hero.webp" },
    { n: "Área 02", t: "Administración y papeleo", d: "Facturas, cobros y los datos que llegan en PDFs y correos y alguien teclea a mano.", href: "/sistemas/documentos", cta: "Facturas y documentos", foto: "/escribiendo-ventana.webp" },
    { n: "Área 03", t: "Atención al cliente", d: "Las preguntas repetidas, las citas y lo que se queda sin contestar fuera de horario.", href: "/sistemas/chatbots-whatsapp", cta: "Chatbots de WhatsApp y web", foto: "/clinicas-hero.webp" },
    { n: "Área 04", t: "Datos y herramientas", d: "Si sabes cómo va el mes sin montar un Excel, y si tus programas se hablan entre ellos.", href: "/sistemas/integracion", cta: "Integración de sistemas", foto: "/equipos-directivos.webp" },
    { n: "Área 05", t: "IA y cumplimiento", d: "Cómo usa tu equipo la IA hoy y si el Art. 4 del Reglamento te pilla con los papeles hechos.", href: "/cumplimiento", cta: "Cumplimiento del AI Act", foto: "/despachos.webp" },
];

export default function DiagnosticoPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />

            {/* Hero con foto + velo lateral y el test a la derecha */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/auditoria.webp"
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
                />
                <div aria-hidden="true" style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(90deg, rgba(28,25,23,0.68) 0%, rgba(28,25,23,0.45) 38%, rgba(28,25,23,0.12) 65%, transparent 85%), linear-gradient(180deg, rgba(28,25,23,0.18) 0%, transparent 40%)",
                }} />
                <div className="container dg-hero" style={{ position: "relative", zIndex: 2 }}>
                    <div>
                        <span className="kicker-mono" style={{ color: "#f6c39c" }}>
                            <i className="fa-solid fa-stethoscope" style={{ marginRight: "0.6rem" }}></i>
                            Diagnóstico · 12 preguntas · 3 minutos
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
                            ¿Cuánto de tu semana{" "}
                            <span style={{ color: "#f6c39c" }}>se puede automatizar?</span>
                        </h1>
                        <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: "0 0 1.4rem", maxWidth: 560, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                            Doce preguntas sobre cómo trabajas hoy — contactos, facturas, atención,
                            datos e IA — y te digo tu potencial de automatización y por dónde
                            empezaría en tu caso. Sin trucos: se responde en tres minutos.
                        </p>
                        <p className="dg-nota">
                            No hace falta dejar el email para responder: solo para ver el plan por
                            áreas al final. Y si prefieres saltártelo, están las{" "}
                            <Link href="/precios">tarifas públicas</Link> y los{" "}
                            <Link href="/casos">casos ya entregados</Link>.
                        </p>
                    </div>

                    <QuizDiagnostico />
                </div>
            </section>

            {/* Pilares — barra tinta */}
            <nav aria-label="Secciones" className="nav-barra">
                <div className="container nav-barra-fila">
                    <span className="nav-barra-etiqueta mono-label">¿Ya sabes lo que buscas?</span>
                    <Link href="/formacion" className="nav-barra-item">Formación</Link>
                    <Link href="/cumplimiento" className="nav-barra-item">Cumplimiento</Link>
                    <Link href="/sistemas" className="nav-barra-item">Sistemas</Link>
                    <Link href="/precios" className="nav-barra-item">Precios</Link>
                    <Link href="/casos" className="nav-barra-item">Casos</Link>
                </div>
            </nav>

            {/* Las condiciones del test — banda de cifras */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917" }}>
                <div className="container">
                    <div className="dg-cifras">
                        <div className="dg-cifra">
                            <span className="dg-cifra-valor">12</span>
                            <span className="dg-cifra-etiqueta">Preguntas, sin letra pequeña</span>
                        </div>
                        <div className="dg-cifra">
                            <span className="dg-cifra-valor">3 min</span>
                            <span className="dg-cifra-etiqueta">Lo que tarda un café</span>
                        </div>
                        <div className="dg-cifra">
                            <span className="dg-cifra-valor">5 áreas</span>
                            <span className="dg-cifra-etiqueta">Con su plan y su enlace</span>
                        </div>
                        <div className="dg-cifra">
                            <span className="dg-cifra-valor">0 €</span>
                            <span className="dg-cifra-etiqueta">Y sin llamada comercial detrás</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Qué mide — paneles a sangre, como el catálogo de sistemas */}
            <section style={{ padding: "3.4rem 0 0", background: "#1c1917", borderTop: "1px solid rgba(250,246,239,0.08)", flexGrow: 1 }}>
                <div className="container" style={{ marginBottom: "1.8rem" }}>
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Qué mide</span>
                    <h2 className="dg-titulo">Las cinco áreas donde se va el tiempo</h2>
                    <p className="dg-sub">
                        Cada pregunta puntúa en una de estas cinco. Al final sabrás cuáles son las
                        dos tuyas — y qué pieza las arregla.
                    </p>
                </div>
                <div className="dg-paneles">
                    {areas.map((a) => (
                        <Link key={a.n} href={a.href} className="dg-panel">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="dg-panel-fondo" src={a.foto} alt="" aria-hidden="true" loading="lazy" />
                            <span className="dg-panel-velo" aria-hidden="true"></span>
                            <span className="dg-panel-badge">{a.n}</span>
                            <span className="dg-panel-cuerpo">
                                <span className="dg-panel-titulo">{a.t}</span>
                                <span className="dg-panel-desc">{a.d}</span>
                                <span className="dg-panel-cta mono-label">{a.cta} →</span>
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Qué hago con tus respuestas — split sobre el degradado firma */}
            <section style={{
                padding: "4rem 0",
                background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)",
            }}>
                <div className="container dg-cierre">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Qué hago con tus respuestas</span>
                        <h2 className="dg-titulo">Ni las vendo ni te meto en una lista</h2>
                        <p className="dg-sub">
                            El email solo se usa para mandarte el plan y, como mucho, algún consejo
                            que te sirva. Ni spam, ni terceros, ni llamada comercial sin avisar —
                            está escrito en la{" "}
                            <Link href="/proteccion-datos">política de privacidad</Link> y se cumple.
                        </p>
                        <p className="dg-sub">
                            Si el resultado te sale bajo, te lo diré igual: hay negocios que no
                            necesitan automatizar nada todavía.
                        </p>
                    </div>
                    <div className="dg-cierre-acciones">
                        <Link href="/#contact" className="dg-cta">Prefiero contártelo en 30 min →</Link>
                        <Link href="/recursos" className="dg-enlace">O llévate los recursos gratis →</Link>
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
                .dg-hero {
                    display: grid;
                    grid-template-columns: 1fr 0.9fr;
                    gap: 3rem;
                    align-items: start;
                }
                @media (max-width: 960px) {
                    .dg-hero { grid-template-columns: 1fr; gap: 2rem; }
                }
                .dg-nota {
                    color: rgba(250, 246, 239, 0.7);
                    font-size: 0.9rem;
                    line-height: 1.7;
                    margin: 0;
                    max-width: 52ch;
                }
                .dg-nota a { color: #f6c39c; font-weight: 600; }
                .dg-nota a:hover { color: #faf6ef; }

                .dg-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .dg-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .dg-cifra-valor {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .dg-cifra-etiqueta {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                @media (max-width: 900px) {
                    .dg-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }

                .dg-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0.9rem 0 0.6rem;
                }
                .dg-sub {
                    color: rgba(250, 246, 239, 0.8);
                    line-height: 1.7;
                    font-size: 0.95rem;
                    margin: 0 0 0.9rem;
                    max-width: 52ch;
                }
                .dg-sub a { color: #f6c39c; font-weight: 600; }

                /* Cinco paneles: tres arriba y dos abajo, sin huecos raros */
                .dg-paneles {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                }
                .dg-panel {
                    grid-column: span 2;
                    position: relative;
                    display: flex;
                    align-items: flex-end;
                    min-height: 21rem;
                    overflow: hidden;
                    color: inherit;
                    background: #1c1917;
                }
                .dg-panel:nth-child(4), .dg-panel:nth-child(5) { grid-column: span 3; }
                .dg-panel-fondo {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .dg-panel:hover .dg-panel-fondo { transform: scale(1.04); }
                .dg-panel-velo {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(28,25,23,0.35) 0%, rgba(28,25,23,0.6) 45%, rgba(28,25,23,0.9) 100%);
                }
                .dg-panel-badge {
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
                .dg-panel-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                    padding: 4.5rem 1.5rem 1.6rem;
                }
                .dg-panel-titulo {
                    font-family: var(--font-display, serif);
                    font-size: 1.35rem;
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.2;
                }
                .dg-panel:hover .dg-panel-titulo { color: #f6c39c; }
                .dg-panel-desc {
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.55;
                }
                .dg-panel-cta { color: #f6c39c; }
                @media (max-width: 1000px) {
                    .dg-paneles { grid-template-columns: 1fr 1fr; }
                    .dg-panel, .dg-panel:nth-child(4), .dg-panel:nth-child(5) { grid-column: span 1; }
                }
                @media (max-width: 640px) {
                    .dg-paneles { grid-template-columns: 1fr; }
                    .dg-panel { min-height: 18rem; }
                }

                .dg-cierre {
                    display: grid;
                    grid-template-columns: 0.62fr 0.38fr;
                    gap: 3rem;
                    align-items: center;
                }
                @media (max-width: 800px) {
                    .dg-cierre { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .dg-cierre-acciones {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 0.9rem;
                }
                .dg-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .dg-cta:hover { background: #faf6ef; transform: translateY(-2px); }
                .dg-enlace {
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.92rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                    display: inline-block;
                }
                .dg-enlace:hover { color: #faf6ef; transform: translateX(6px); }
            `}</style>
        </main>
    );
}
