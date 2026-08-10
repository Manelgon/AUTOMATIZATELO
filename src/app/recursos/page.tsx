import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Esquema from "@/components/Esquema";
import { migas } from "@/lib/esquemas";

export const metadata: Metadata = {
    title: "Recursos Gratis de IA para Pymes",
    description:
        "Recursos gratuitos de IA: la guía del Art. 4 del AI Act, 10 prompts para administradores de fincas y un cheatsheet de herramientas. Sin pedirte el email.",
    alternates: { canonical: "https://automatizatelo.com/recursos" },
    openGraph: {
        title: "Recursos gratis de IA — sin pedirte el email",
        description: "Guías, prompts y plantillas que uso con clientes reales. Descárgalos y úsalos.",
        url: "https://automatizatelo.com/recursos",
    },
};

interface Recurso {
    tipo: string;
    titulo: string;
    desc: string;
    /** Qué te llevas de verdad, en lenguaje de quien lo va a usar */
    dentro: string[];
    href: string;
    cta: string;
    externa: boolean;
    /** La foto es la del hero de la página o del sector al que sirve */
    foto: string;
    paraQuien: string;
}

const recursos: Recurso[] = [
    {
        tipo: "Guía",
        titulo: "El Art. 4 del AI Act, explicado sin humo",
        desc:
            "Qué exige el Art. 4 del Reglamento Europeo de IA, desde cuándo, qué sanciones hay de verdad y los cuatro pasos para que una pyme lo tenga cerrado.",
        dentro: [
            "Por qué no existe certificado oficial ni horas mínimas — y quién te dirá lo contrario",
            "Qué se guarda para documentar las medidas que has tomado",
            "Los cuatro pasos, en orden, con lo que hay que tener escrito en cada uno",
        ],
        paraQuien: "Si en tu empresa alguien usa ChatGPT y nadie ha escrito nada al respecto",
        href: "/formacion/ai-act",
        cta: "Leer la guía",
        externa: false,
        foto: "/escribiendo-ventana.webp",
    },
    {
        tipo: "Pack de prompts",
        titulo: "Los 10 prompts de IA para administradores de fincas",
        desc:
            "Convocatorias, actas a partir de cuatro notas, respuestas a reclamaciones, burofax, certificados. Copiar, pegar y adaptar.",
        dentro: [
            "Los diez prompts escritos para el día a día de un despacho de fincas",
            "Funcionan igual en Claude, ChatGPT o Gemini",
            "Se abre en el navegador y se guarda como PDF",
        ],
        paraQuien: "Si redactas la misma carta cada semana cambiando cuatro datos",
        href: "/recursos/prompts-ia-fincas.html",
        cta: "Abrir el pack",
        externa: true,
        foto: "/fincas-hero.webp",
    },
    {
        tipo: "Cheatsheet",
        titulo: "Las 3 herramientas de IA para tu despacho",
        desc:
            "Una hoja imprimible con las tres herramientas que más tiempo devuelven en un despacho: expansor de texto, asistente de IA y automatizador de flujos.",
        dentro: [
            "Qué hace cada una y cuándo tirar de ella",
            "Atajos y prompts listos para pegar en la pared",
            "Un flujo real de incidencias, de principio a fin",
        ],
        paraQuien: "Si quieres empezar mañana sin contratar nada",
        href: "/recursos/cheatsheet-3-herramientas-fincas.html",
        cta: "Abrir el cheatsheet",
        externa: true,
        foto: "/despachos.webp",
    },
];

const pilares = [
    { href: "/formacion", t: "Formación" },
    { href: "/cumplimiento", t: "Cumplimiento" },
    { href: "/sistemas", t: "Sistemas" },
    { href: "/casos", t: "Casos" },
    { href: "/blog", t: "Blog" },
];

export default function RecursosPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Esquema datos={migas([{ nombre: "Recursos", url: "/recursos" }])} />
            <Header />

            {/* Hero con foto + velo lateral */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4.5rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/fondo-nuevo.webp"
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", zIndex: 0 }}
                />
                <div aria-hidden="true" style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(90deg, rgba(28,25,23,0.72) 0%, rgba(28,25,23,0.5) 38%, rgba(28,25,23,0.15) 65%, transparent 88%), linear-gradient(180deg, rgba(28,25,23,0.2) 0%, transparent 40%)",
                }} />
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <span className="kicker-mono" style={{ color: "#f6c39c" }}>
                        <i className="fa-solid fa-gift" style={{ marginRight: "0.6rem" }}></i>
                        Recursos
                    </span>
                    <h1 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(2rem, 5vw, 3.4rem)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        color: "#faf6ef",
                        margin: "1rem 0 1.2rem",
                        maxWidth: 820,
                        textShadow: "0 2px 30px rgba(28,25,23,0.45)",
                    }}>
                        Gratis, útil y{" "}
                        <span style={{ color: "#f6c39c" }}>sin pedirte el email</span>
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: "0 0 1.6rem", maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                        Guías, prompts y plantillas que salen del trabajo con clientes reales.
                        Úsalos, imprímelos, compártelos. Si con esto te vale, perfecto; y si
                        prefieres que te lo deje montado, ya sabes dónde estoy.
                    </p>
                    <div className="rc2-hero-acciones">
                        <a href="#recursos" className="rc2-cta">Ver los tres recursos ↓</a>
                        <Link href="/diagnostico" className="rc2-enlace">O haz el test de 3 minutos →</Link>
                        <Link href="/precios" className="rc2-enlace">Ver qué cuesta lo de pago →</Link>
                    </div>
                </div>
            </section>

            {/* Pilares — barra tinta */}
            <nav aria-label="Secciones" className="nav-barra">
                <div className="container nav-barra-fila">
                    <span className="nav-barra-etiqueta mono-label">¿Buscas algo más concreto?</span>
                    {pilares.map((p) => (
                        <Link key={p.href} href={p.href} className="nav-barra-item">{p.t}</Link>
                    ))}
                </div>
            </nav>

            {/* Las condiciones, que aquí son la gracia — banda de cifras */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917" }}>
                <div className="container">
                    <div className="rc2-cifras">
                        <div className="rc2-cifra">
                            <span className="rc2-cifra-valor">0 €</span>
                            <span className="rc2-cifra-etiqueta">Y no hay versión de pago</span>
                        </div>
                        <div className="rc2-cifra">
                            <span className="rc2-cifra-valor">sin email</span>
                            <span className="rc2-cifra-etiqueta">Ni registro, ni newsletter</span>
                        </div>
                        <div className="rc2-cifra">
                            <span className="rc2-cifra-valor">3</span>
                            <span className="rc2-cifra-etiqueta">Recursos ahora mismo</span>
                        </div>
                        <div className="rc2-cifra">
                            <span className="rc2-cifra-valor">PDF</span>
                            <span className="rc2-cifra-etiqueta">Se abren e imprimen</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Los recursos — foto a sangre y el contenido en tinta */}
            <div id="recursos" style={{ flexGrow: 1, scrollMarginTop: "5rem" }}>
                {recursos.map((r, i) => (
                    <article
                        key={r.titulo}
                        className={i % 2 === 1 ? "rc2-pieza rc2-pieza-inv" : "rc2-pieza"}
                    >
                        <div className="rc2-foto">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={r.foto} alt="" aria-hidden="true" loading="lazy" />
                            <span className="rc2-foto-velo" aria-hidden="true" />
                            <span className="rc2-foto-num" aria-hidden="true">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                        </div>

                        <div className="rc2-texto">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>{r.tipo}</span>
                            <h2 className="rc2-titulo">{r.titulo}</h2>
                            <p className="rc2-parrafo">{r.desc}</p>

                            <ul className="rc2-dentro">
                                {r.dentro.map((d) => (
                                    <li key={d}>{d}</li>
                                ))}
                            </ul>

                            <p className="rc2-para-quien">{r.paraQuien}.</p>

                            {r.externa ? (
                                <a href={r.href} target="_blank" rel="noopener" className="rc2-cta">
                                    {r.cta} →
                                </a>
                            ) : (
                                <Link href={r.href} className="rc2-cta">
                                    {r.cta} →
                                </Link>
                            )}
                        </div>
                    </article>
                ))}
            </div>

            {/* Lo que no está aquí — split sobre el degradado firma */}
            <section style={{
                padding: "4rem 0",
                background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)",
            }}>
                <div className="container rc2-falta-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Lo que no encontrarás aquí</span>
                        <h2 className="rc2-falta-titulo">
                            Los documentos serios no son descargables, y por buenos motivos
                        </h2>
                        <p className="rc2-falta-sub">
                            La política de uso de IA, el inventario de sistemas y el registro
                            formativo tienen que hablar de <strong>tu</strong> empresa: qué
                            herramientas usáis, con qué datos y quién responde. Una plantilla
                            genérica descargada de internet se queda corta: no dice qué
                            herramientas usáis, con qué datos ni quién responde — y te deja la
                            sensación de haber cumplido, que es lo peligroso.
                        </p>
                        <p className="rc2-falta-sub">
                            Esos tres van redactados dentro de la auditoría, con tu nombre y tus
                            herramientas dentro.
                        </p>
                        <Link href="/cumplimiento" className="rc2-enlace">
                            Ver qué incluye la auditoría IA →
                        </Link>
                    </div>
                    <div>
                        {[
                            { n: "01", t: "Política de uso de IA", d: "Qué se puede meter en un chat de IA y qué no, en tu empresa y con tus datos." },
                            { n: "02", t: "Inventario de sistemas", d: "Qué IA se usa ya, para qué, y en qué nivel de riesgo la coloca el Reglamento." },
                            { n: "03", t: "Registro formativo", d: "El registro de las medidas formativas adoptadas: quién, cuándo y en qué. Con fecha." },
                        ].map((d) => (
                            <div key={d.n} className="rc2-doc">
                                <span className="rc2-doc-num mono-label">{d.n}</span>
                                <div>
                                    <h3>{d.t}</h3>
                                    <p>{d.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cierre en tinta */}
            <section style={{ padding: "4rem 0", background: "#1c1917", borderTop: "1px solid rgba(250,246,239,0.08)" }}>
                <div className="container rc2-cierre">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Si te has quedado con ganas</span>
                        <h2 className="rc2-cierre-titulo">
                            ¿Prefieres que te lo deje montado?
                        </h2>
                        <p className="rc2-cierre-sub">
                            Media hora gratis: miro cómo trabajáis y te digo qué automatizar, qué
                            formar y qué cumplir. Sin presentación comercial y sin compromiso.
                        </p>
                    </div>
                    <div className="rc2-cierre-acciones">
                        <Link href="/#contact" className="rc2-cta">Pedir mis 30 minutos →</Link>
                        <Link href="/casos" className="rc2-enlace">Ver lo que he montado a otros →</Link>
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
                .rc2-hero-acciones {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 1rem 1.8rem;
                }
                .rc2-cta {
                    display: inline-block;
                    align-self: flex-start;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .rc2-cta:hover { background: #faf6ef; transform: translateY(-2px); }
                .rc2-enlace {
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.92rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                    display: inline-block;
                }
                .rc2-enlace:hover { color: #faf6ef; transform: translateX(6px); }

                .rc2-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .rc2-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .rc2-cifra-valor {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .rc2-cifra-etiqueta {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                @media (max-width: 900px) {
                    .rc2-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }

                .rc2-pieza {
                    display: grid;
                    grid-template-columns: 0.42fr 0.58fr;
                    background: #1c1917;
                    border-top: 1px solid rgba(250, 246, 239, 0.08);
                }
                .rc2-pieza-inv { grid-template-columns: 0.58fr 0.42fr; }
                .rc2-pieza-inv .rc2-foto { order: 2; }
                .rc2-foto {
                    position: relative;
                    min-height: 21rem;
                    overflow: hidden;
                }
                .rc2-foto img {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .rc2-foto-velo {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(28,25,23,0.35) 0%, rgba(28,25,23,0.2) 45%, rgba(28,25,23,0.55) 100%);
                }
                .rc2-foto-num {
                    position: absolute;
                    left: 1.8rem;
                    bottom: 1.2rem;
                    font-family: var(--font-display, serif);
                    font-size: clamp(3rem, 6vw, 5rem);
                    font-weight: 700;
                    line-height: 0.9;
                    color: rgba(250, 246, 239, 0.55);
                    user-select: none;
                }
                .rc2-texto {
                    /* En pantallas anchas la medida no debe estirarse: se lee peor */
                    max-width: 46rem;
                    padding: 3.2rem clamp(1.5rem, 4vw, 3.6rem);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                @media (max-width: 900px) {
                    .rc2-pieza { grid-template-columns: 1fr; }
                    .rc2-pieza-inv { grid-template-columns: 1fr; }
                    .rc2-pieza-inv .rc2-foto { order: 0; }
                    .rc2-foto { min-height: 14rem; }
                    .rc2-texto { padding: 2.4rem 1.5rem; }
                }
                .rc2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 600;
                    line-height: 1.18;
                    letter-spacing: -0.01em;
                    color: #faf6ef;
                    margin: 0.9rem 0 0.9rem;
                }
                .rc2-parrafo {
                    color: rgba(250, 246, 239, 0.8);
                    line-height: 1.7;
                    font-size: 0.95rem;
                    margin: 0 0 1.2rem;
                    max-width: 58ch;
                }
                .rc2-dentro {
                    list-style: none;
                    margin: 0 0 1.2rem;
                    padding: 0;
                }
                .rc2-dentro li {
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                    padding: 0.7rem 0;
                    color: rgba(250, 246, 239, 0.85);
                    font-size: 0.92rem;
                    line-height: 1.55;
                }
                .rc2-dentro li:last-child { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .rc2-para-quien {
                    font-family: var(--font-display, serif);
                    font-size: 1.05rem;
                    color: #f6c39c;
                    line-height: 1.5;
                    margin: 0 0 1.4rem;
                }

                .rc2-falta-grid {
                    display: grid;
                    grid-template-columns: 0.46fr 0.54fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 900px) {
                    .rc2-falta-grid { grid-template-columns: 1fr; gap: 2rem; }
                }
                .rc2-falta-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0.9rem 0 0.8rem;
                }
                .rc2-falta-sub {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.7;
                    font-size: 0.95rem;
                    margin: 0 0 0.9rem;
                    max-width: 48ch;
                }
                .rc2-falta-sub strong { color: #f6c39c; }
                .rc2-doc {
                    display: grid;
                    grid-template-columns: 2.6rem 1fr;
                    gap: 1rem;
                    align-items: baseline;
                    border-top: 1px solid rgba(250, 246, 239, 0.22);
                    padding: 1.1rem 0;
                }
                .rc2-doc:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.22); }
                .rc2-doc-num { color: #f6c39c; }
                .rc2-doc h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0 0 0.25rem;
                    line-height: 1.25;
                }
                .rc2-doc p {
                    color: rgba(250, 246, 239, 0.8);
                    line-height: 1.6;
                    font-size: 0.9rem;
                    margin: 0;
                }

                .rc2-cierre {
                    display: grid;
                    grid-template-columns: 0.62fr 0.38fr;
                    gap: 3rem;
                    align-items: center;
                }
                @media (max-width: 800px) {
                    .rc2-cierre { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .rc2-cierre-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    margin: 0.9rem 0 0.6rem;
                }
                .rc2-cierre-sub {
                    color: rgba(250, 246, 239, 0.78);
                    line-height: 1.65;
                    font-size: 0.95rem;
                    margin: 0;
                    max-width: 620px;
                }
                .rc2-cierre-acciones {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 0.9rem;
                }
            `}</style>
        </main>
    );
}
