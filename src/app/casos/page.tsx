import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Esquema from "@/components/Esquema";
import { migas } from "@/lib/esquemas";

export const metadata: Metadata = {
    title: "Casos de Éxito en Automatización con IA",
    description:
        "Sistemas de automatización con IA en producción: panel de fincas, bot de citas para clínica, SaaS con portal de empleo. Casos reales, no promesas.",
    alternates: { canonical: "https://automatizatelo.com/casos" },
};

interface Caso {
    sector: string;
    cliente: string;
    titulo: string;
    problema: string;
    solucion: string;
    resultados: string[];
    url?: string;
    /** La foto es la del hero de la página a la que lleva el caso */
    foto: string;
    /** "¿Quieres algo parecido?" — el servicio o sector de este caso */
    siguiente?: { href: string; texto: string }[];
}

const casos: Caso[] = [
    {
        sector: "Administración de fincas",
        cliente: "Serincosol",
        url: "https://serincosol.com/",
        foto: "/fincas-hero.webp",
        titulo: "Panel de gestión que lleva la administración diaria de un despacho de fincas",
        problema:
            "Incidencias de vecinos por teléfono y email sin sistema, documentación dispersa y seguimiento manual de cada comunidad.",
        solucion:
            "Panel de gestión a medida: incidencias, comunicaciones con vecinos y documentación de cada comunidad en un solo sitio.",
        resultados: [
            "En producción y uso diario desde enero de 2026",
            "Todas las incidencias registradas y con seguimiento — nada se pierde en un email",
            "El equipo lleva su día a día desde el panel",
        ],
        siguiente: [
            { href: "/sectores/administradores-fincas", texto: "Automatización para administradores de fincas" },
            { href: "/sistemas/paneles", texto: "Paneles a medida" },
        ],
    },
    {
        sector: "Coaching y selección de personal",
        cliente: "Henkoaching — Jennifer Cervera",
        url: "https://henkoaching.com/",
        foto: "/directivos.webp",
        titulo: "SaaS completo con portal de empleo propio para una consultora de selección",
        problema:
            "Gestionar candidatos y procesos de selección con herramientas genéricas que no encajaban con su forma de trabajar, sin portal propio donde publicar ofertas.",
        solucion:
            "Plataforma a medida: portal de empleo propio, dashboard de gestión, informes y reportes. Además de su web y posicionamiento SEO.",
        resultados: [
            "Portal de empleo propio sin pagar licencias de software genérico",
            "Candidatos, ofertas y procesos centralizados en su plataforma",
            "El código y los datos son suyos, como en todos los proyectos",
        ],
        siguiente: [
            { href: "/sectores/rrhh", texto: "Automatización para selección y RRHH" },
            { href: "/sistemas/paneles", texto: "Paneles a medida" },
        ],
    },
    {
        sector: "Clínicas y salud",
        cliente: "Clínica estética",
        foto: "/clinicas-hero.webp",
        titulo: "Asistente de WhatsApp con IA que agenda las citas de la clínica él solo",
        problema:
            "Recepción saturada al teléfono, citas perdidas por no contestar a tiempo y recordatorios manuales.",
        solucion:
            "Asistente de IA por WhatsApp conectado a la agenda real: propone huecos disponibles, confirma la cita, envía recordatorios y gestiona la lista de espera. Panel interno para el equipo con agenda por profesional.",
        resultados: [
            "Citas agendadas por WhatsApp a cualquier hora, sin que nadie las teclee",
            "Recordatorios automáticos 24h antes con confirmación del paciente",
            "Lista de espera automática: si se libera un hueco, se ofrece a quien esperaba",
            "Datos de salud como categoría especial: consentimientos, registro de auditoría y derechos del paciente",
        ],
        siguiente: [
            { href: "/sistemas/chatbots-whatsapp", texto: "Chatbot de WhatsApp" },
            { href: "/sistemas/paneles", texto: "Paneles a medida" },
        ],
    },
    {
        sector: "Educación y comedores escolares",
        cliente: "Empresa de comedores escolares en Cataluña",
        foto: "/claustro.webp",
        titulo: "Bot de WhatsApp que gestiona las ausencias del comedor de cientos de familias",
        problema:
            "Cada mañana, avalancha de llamadas y mensajes de familias avisando ausencias, con el riesgo de cocinar menús de más o de menos.",
        solucion:
            "Bot de WhatsApp con IA que atiende a las familias: registra ausencias, responde preguntas frecuentes y escala a una persona cuando hace falta.",
        resultados: [
            "Las familias avisan por WhatsApp a cualquier hora, sin llamadas",
            "Ausencias registradas automáticamente en el sistema",
            "Preguntas frecuentes respondidas al momento, sin colapsar a la administración",
        ],
        siguiente: [
            { href: "/sistemas/chatbots-whatsapp", texto: "Chatbot de WhatsApp" },
            { href: "/formacion/centros-educativos", texto: "Formación en IA para centros educativos" },
        ],
    },
    {
        sector: "Formación online",
        cliente: "AFCademia",
        url: "https://afcademia.com/",
        foto: "/academias.webp",
        titulo: "Panel de gestión y automatización para una academia de formación online",
        problema:
            "Gestión de alumnos, contenidos y comunicaciones repartida entre varias herramientas desconectadas.",
        solucion:
            "Panel de gestión a medida para la academia y automatización de sus procesos, además de producción de cursos e-learning (SCORM).",
        resultados: [
            "Gestión de la academia centralizada en su propio panel",
            "Cursos publicados en plataformas e-learning estándar",
        ],
        siguiente: [
            { href: "/sectores/academias", texto: "Automatización para academias" },
            { href: "/formacion/cursos-a-medida", texto: "Producción de cursos SCORM" },
        ],
    },
];

// Las seis puertas por sector, con las etiquetas cortas para que quepan en fila
const sectores = [
    { href: "/sectores/administradores-fincas", t: "Fincas" },
    { href: "/sectores/despachos", t: "Despachos" },
    { href: "/sectores/academias", t: "Academias" },
    { href: "/sectores/rrhh", t: "RRHH" },
    { href: "/formacion/centros-educativos", t: "Centros educativos" },
];

// Lo que se repite en todos: el mismo camino, con distinta pieza al final
const pasos = [
    { n: "01", t: "Media hora mirando cómo trabajáis", d: "Sin presentación comercial: qué se repite, qué se pierde y dónde duele de verdad." },
    { n: "02", t: "Propuesta cerrada por escrito", d: "Alcance, precio y plazo antes de empezar. Si no compensa, te lo digo y no hay proyecto." },
    { n: "03", t: "En producción, y tuyo", d: "Se monta, se prueba con datos reales y os lo enseño. El código y los datos son de la empresa." },
];

export default function CasosDeExitoPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Esquema datos={migas([{ nombre: "Casos", url: "/casos" }])} />
            <Header />

            {/* Hero con foto + velo lateral */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4.5rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/servicios-hero.webp"
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
                />
                <div aria-hidden="true" style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(90deg, rgba(28,25,23,0.62) 0%, rgba(28,25,23,0.42) 38%, rgba(28,25,23,0.12) 65%, transparent 85%), linear-gradient(180deg, rgba(28,25,23,0.18) 0%, transparent 40%)",
                }} />
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <span className="kicker-mono" style={{ color: "#f6c39c" }}>
                        <i className="fa-solid fa-circle-check" style={{ marginRight: "0.6rem" }}></i>
                        Casos de éxito
                    </span>
                    <h1 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(2rem, 4.8vw, 3.2rem)",
                        fontWeight: 600,
                        lineHeight: 1.12,
                        letterSpacing: "-0.02em",
                        color: "#faf6ef",
                        margin: "1rem 0 1.2rem",
                        maxWidth: 900,
                        textShadow: "0 2px 30px rgba(28,25,23,0.45)",
                    }}>
                        Sistemas en producción, <span style={{ color: "#f6c39c" }}>no promesas</span>
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: "0 0 1.6rem", maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                        Cinco negocios de aquí que hoy trabajan con algo que montamos: un panel,
                        un bot que contesta o una plataforma entera. Con lo que hacía daño, lo que
                        se montó y lo que se puede comprobar.
                    </p>
                    <div className="cs2-hero-acciones">
                        <Link href="/#contact" className="cs2-cta">Pedir mis 30 minutos →</Link>
                        <Link href="/precios" className="cs2-enlace">Ver qué cuesta cada cosa →</Link>
                    </div>
                </div>
            </section>

            {/* Por sector — barra tinta */}
            <nav aria-label="Casos por sector" className="nav-barra">
                <div className="container nav-barra-fila">
                    <span className="nav-barra-etiqueta mono-label">¿Buscas el de tu sector?</span>
                    {sectores.map((s) => (
                        <Link key={s.href} href={s.href} className="nav-barra-item">{s.t}</Link>
                    ))}
                </div>
            </nav>

            {/* Lo que hay detrás de esta página — banda de cifras */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917" }}>
                <div className="container">
                    <div className="cs2-cifras">
                        <div className="cs2-cifra">
                            <span className="cs2-cifra-valor">5</span>
                            <span className="cs2-cifra-etiqueta">Sistemas en producción</span>
                        </div>
                        <div className="cs2-cifra">
                            <span className="cs2-cifra-valor">5</span>
                            <span className="cs2-cifra-etiqueta">Sectores distintos</span>
                        </div>
                        <div className="cs2-cifra">
                            <span className="cs2-cifra-valor">a diario</span>
                            <span className="cs2-cifra-etiqueta">Uso real, no piloto</span>
                        </div>
                        <div className="cs2-cifra">
                            <span className="cs2-cifra-valor">100 %</span>
                            <span className="cs2-cifra-etiqueta">El código y los datos, del cliente</span>
                        </div>
                    </div>
                    <p className="cs2-cifras-pie">
                        Aquí no hay porcentajes de ahorro inventados: cuento qué se montó y qué hace hoy
                        el sistema —{" "}
                        <Link href="/precios">Ver la tabla de precios →</Link>
                    </p>
                </div>
            </section>

            {/* Los casos — foto a sangre a un lado, texto en tinta al otro */}
            <div style={{ flexGrow: 1 }}>
                {casos.map((caso, i) => (
                    <article
                        key={caso.titulo}
                        className={i % 2 === 1 ? "cs2-caso cs2-caso-inv" : "cs2-caso"}
                    >
                        <div className="cs2-foto">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={caso.foto} alt="" aria-hidden="true" loading="lazy" />
                            <span className="cs2-foto-velo" aria-hidden="true" />
                            <span className="cs2-foto-num" aria-hidden="true">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                        </div>

                        <div className="cs2-texto">
                            <div className="cs2-meta">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>{caso.sector}</span>
                                {caso.url ? (
                                    <a href={caso.url} target="_blank" rel="noopener noreferrer" className="cs2-cliente">
                                        {caso.cliente} ↗
                                    </a>
                                ) : (
                                    <span className="cs2-cliente">{caso.cliente}</span>
                                )}
                            </div>

                            <h2 className="cs2-titulo">{caso.titulo}</h2>

                            <p className="cs2-parrafo">
                                <strong>Lo que pasaba.</strong> {caso.problema}
                            </p>
                            <p className="cs2-parrafo">
                                <strong>Lo que montamos.</strong> {caso.solucion}
                            </p>

                            <ul className="cs2-resultados">
                                {caso.resultados.map((r) => (
                                    <li key={r}>{r}</li>
                                ))}
                            </ul>

                            {caso.siguiente && caso.siguiente.length > 0 && (
                                <div className="cs2-siguiente">
                                    <span className="mono-label">¿Quieres algo parecido?</span>
                                    <div className="cs2-siguiente-enlaces">
                                        {caso.siguiente.map((s) => (
                                            <Link key={s.href} href={s.href} className="cs2-enlace">
                                                {s.texto} →
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </article>
                ))}
            </div>

            {/* Lo que se repite en todos — sobre el degradado firma */}
            <section style={{
                padding: "4rem 0",
                background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)",
            }}>
                <div className="container cs2-proceso-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Lo que se repite en todos</span>
                        <h2 className="cs2-proceso-titulo">
                            Ninguno empezó con un presupuesto: empezaron con media hora
                        </h2>
                        <p className="cs2-proceso-sub">
                            Cambia la pieza del final — un panel, un bot, una plataforma entera —,
                            pero el camino es siempre este. Y si en esa media hora veo que no te
                            compensa, te lo digo y no hay proyecto.
                        </p>
                        <Link href="/diagnostico" className="cs2-enlace">
                            O haz antes el test de 3 minutos →
                        </Link>
                    </div>
                    <div>
                        {pasos.map((p) => (
                            <div key={p.n} className="cs2-paso">
                                <span className="cs2-paso-num mono-label">{p.n}</span>
                                <div>
                                    <h3>{p.t}</h3>
                                    <p>{p.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cierre en tinta */}
            <section style={{ padding: "4rem 0", background: "#1c1917", borderTop: "1px solid rgba(250,246,239,0.08)" }}>
                <div className="container cs2-cierre">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>El siguiente puede ser el tuyo</span>
                        <h2 className="cs2-cierre-titulo">
                            ¿Qué automatizaríamos en tu negocio?
                        </h2>
                        <p className="cs2-cierre-sub">
                            Me cuentas cómo trabajáis y te digo qué se puede quitar de en medio,
                            qué merece la pena montar y qué no. Media hora, gratis y sin compromiso.
                        </p>
                    </div>
                    <div className="cs2-cierre-acciones">
                        <Link href="/#contact" className="cs2-cta">Pedir mis 30 minutos →</Link>
                        <Link href="/sistemas" className="cs2-enlace">Ver todo lo que se puede automatizar →</Link>
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
                .cs2-hero-acciones {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 1rem 1.8rem;
                }
                .cs2-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .cs2-cta:hover { background: #faf6ef; transform: translateY(-2px); }
                .cs2-enlace {
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.92rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                    display: inline-block;
                }
                .cs2-enlace:hover { color: #faf6ef; transform: translateX(6px); }

                .cs2-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .cs2-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .cs2-cifra-valor {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .cs2-cifra-etiqueta {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                .cs2-cifras-pie {
                    margin: 2rem 0 0;
                    text-align: center;
                    color: rgba(250, 246, 239, 0.6);
                    font-size: 0.88rem;
                    line-height: 1.6;
                }
                .cs2-cifras-pie a { color: #f6c39c; font-weight: 600; }
                @media (max-width: 900px) {
                    .cs2-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }

                /* Cada caso: la foto llega al borde y el texto vive en tinta */
                .cs2-caso {
                    display: grid;
                    grid-template-columns: 0.44fr 0.56fr;
                    background: #1c1917;
                    border-top: 1px solid rgba(250, 246, 239, 0.08);
                }
                .cs2-caso-inv { grid-template-columns: 0.56fr 0.44fr; }
                .cs2-caso-inv .cs2-foto { order: 2; }
                .cs2-foto {
                    position: relative;
                    min-height: 22rem;
                    overflow: hidden;
                }
                .cs2-foto img {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .cs2-foto-velo {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(28,25,23,0.35) 0%, rgba(28,25,23,0.2) 45%, rgba(28,25,23,0.55) 100%);
                }
                .cs2-foto-num {
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
                .cs2-texto {
                    /* En pantallas anchas la medida no debe estirarse: se lee peor */
                    max-width: 46rem;
                    padding: 3.2rem clamp(1.5rem, 4vw, 3.6rem);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                @media (max-width: 900px) {
                    .cs2-caso { grid-template-columns: 1fr; }
                    .cs2-caso-inv { grid-template-columns: 1fr; }
                    .cs2-caso-inv .cs2-foto { order: 0; }
                    .cs2-foto { min-height: 14rem; }
                    .cs2-texto { padding: 2.4rem 1.5rem; }
                }
                .cs2-meta {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: baseline;
                    gap: 0.5rem 1.4rem;
                }
                .cs2-cliente {
                    font-family: var(--font-display, serif);
                    font-size: 1.05rem;
                    font-weight: 600;
                    color: rgba(250, 246, 239, 0.85);
                }
                a.cs2-cliente:hover { color: #f6c39c; }
                .cs2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 600;
                    line-height: 1.18;
                    letter-spacing: -0.01em;
                    color: #faf6ef;
                    margin: 0.9rem 0 1.2rem;
                }
                .cs2-parrafo {
                    color: rgba(250, 246, 239, 0.78);
                    line-height: 1.7;
                    font-size: 0.95rem;
                    margin: 0 0 0.8rem;
                }
                .cs2-parrafo strong { color: #f6c39c; font-weight: 600; }
                .cs2-resultados {
                    list-style: none;
                    margin: 1rem 0 0;
                    padding: 0;
                }
                .cs2-resultados li {
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                    padding: 0.7rem 0;
                    color: rgba(250, 246, 239, 0.85);
                    font-size: 0.92rem;
                    line-height: 1.55;
                }
                .cs2-resultados li:last-child { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .cs2-siguiente {
                    margin-top: 1.6rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.7rem;
                }
                .cs2-siguiente .mono-label { color: rgba(250, 246, 239, 0.5); }
                .cs2-siguiente-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.6rem 1.8rem;
                }

                .cs2-proceso-grid {
                    display: grid;
                    grid-template-columns: 0.44fr 0.56fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 900px) {
                    .cs2-proceso-grid { grid-template-columns: 1fr; gap: 2rem; }
                }
                .cs2-proceso-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0.9rem 0 0.8rem;
                }
                .cs2-proceso-sub {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.7;
                    font-size: 0.95rem;
                    margin: 0 0 1.2rem;
                    max-width: 46ch;
                }
                .cs2-paso {
                    display: grid;
                    grid-template-columns: 2.6rem 1fr;
                    gap: 1rem;
                    align-items: baseline;
                    border-top: 1px solid rgba(250, 246, 239, 0.22);
                    padding: 1.1rem 0;
                }
                .cs2-paso:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.22); }
                .cs2-paso-num { color: #f6c39c; }
                .cs2-paso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0 0 0.25rem;
                    line-height: 1.25;
                }
                .cs2-paso p {
                    color: rgba(250, 246, 239, 0.8);
                    line-height: 1.6;
                    font-size: 0.9rem;
                    margin: 0;
                }

                .cs2-cierre {
                    display: grid;
                    grid-template-columns: 0.62fr 0.38fr;
                    gap: 3rem;
                    align-items: center;
                }
                @media (max-width: 800px) {
                    .cs2-cierre { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .cs2-cierre-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    margin: 0.9rem 0 0.6rem;
                }
                .cs2-cierre-sub {
                    color: rgba(250, 246, 239, 0.78);
                    line-height: 1.65;
                    font-size: 0.95rem;
                    margin: 0;
                    max-width: 620px;
                }
                .cs2-cierre-acciones {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 0.9rem;
                }
            `}</style>
        </main>
    );
}
