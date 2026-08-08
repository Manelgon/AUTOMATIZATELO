import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SistemasTabs from "@/components/SistemasTabs";
import FormularioCurso from "@/components/FormularioCurso";

export const metadata: Metadata = {
    title: "Paneles y Dashboards a Medida para Pymes",
    description:
        "Paneles de gestión a medida: clientes, incidencias, agenda y métricas en un solo sitio. En uso diario en despachos reales. Desde 2.000€, el código es tuyo.",
    alternates: { canonical: "https://automatizatelo.com/sistemas/paneles" },
    openGraph: {
        title: "Tu negocio entero, en un panel hecho para ti",
        description: "Sin licencias por usuario, sin adaptarte tú al software: el panel se adapta a tu negocio. El código es tuyo.",
        url: "https://automatizatelo.com/sistemas/paneles",
    },
};

const faqs = [
    {
        question: "¿Por qué un panel a medida en vez de un software del mercado?",
        answer: "Porque el software del mercado te obliga a trabajar como él quiere, cobra por usuario para siempre y trae cien funciones que no usas. Un panel a medida hace exactamente lo que tu negocio necesita, lo pagas una vez, y el código y los datos son tuyos. Cuando el genérico te encaja, te lo digo y te ahorras el proyecto — pero cuando no encaja, adaptarte tú al software sale más caro que hacerlo a tu medida.",
    },
    {
        question: "¿Esto está probado en negocios reales?",
        answer: "Sí — es de lo que más construyo. Despachos de administración de fincas gestionan su día a día (incidencias, comunicaciones con vecinos, documentación) en paneles míos desde enero de 2026; una academia online gestiona su operación en otro; y una clínica estética lleva agenda, historia clínica y cumplimiento RGPD sanitario en el suyo. Los tienes en casos de éxito.",
    },
    {
        question: "¿Cuánto cuesta un panel a medida?",
        answer: "Un panel de gestión entra normalmente en el proyecto de automatización de área, desde 2.000€; uno que cubra toda la operación de la empresa, en el rango del proyecto integral desde 8.000€. Precio y plazo cerrados por escrito antes de empezar, y sin cuotas por usuario.",
    },
    {
        question: "¿Y cuando quiera cambiar algo dentro de un año?",
        answer: "El panel es tuyo: código, datos y accesos. Puedes evolucionarlo conmigo (mantenimiento opcional), con tu equipo o con cualquier otro desarrollador — está documentado para eso. Sin rehenes: esa es la diferencia con el software de alquiler.",
    },
    {
        question: "¿Se conecta con lo que ya usamos?",
        answer: "Esa es la gracia: el panel se integra con tu facturación, tu agenda, tu WhatsApp o tu web para que los datos entren solos y no haya que picar nada dos veces. Un panel donde hay que meter todo a mano es una hoja de cálculo con pretensiones.",
    },
    {
        question: "¿Cuánto se tarda en tenerlo funcionando?",
        answer: "Un panel de área suele entregarse por partes en cuatro a ocho semanas: primero la pantalla que más duele, funcionando con datos reales, y desde ahí se amplía. Uno que cubra la operación entera va según alcance; el plazo se cierra por escrito igual que el precio.",
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
    "name": "Paneles y dashboards de gestión a medida",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "areaServed": "España",
    "description": "Paneles de gestión a medida para pymes: clientes, incidencias, agenda, documentación y métricas en un solo sitio, integrados con las herramientas existentes. Desde 2.000€, propiedad del cliente.",
};

const capacidades = [
    {
        num: "01",
        titulo: "Todo tu negocio en un sitio",
        desc: "Clientes, incidencias, agenda, documentos y tareas — se acabó saltar entre cinco herramientas y tres hojas de cálculo para saber qué pasa.",
    },
    {
        num: "02",
        titulo: "Los datos entran solos",
        desc: "Integrado con tu facturación, tu email, tu WhatsApp o tu web: lo que llega se registra sin que nadie lo pique. La IA clasifica y prioriza.",
    },
    {
        num: "03",
        titulo: "Métricas que se entienden",
        desc: "Lo que necesitas para decidir — facturación, carga de trabajo, incidencias abiertas — en tiempo real y sin montar informes a mano.",
    },
    {
        num: "04",
        titulo: "Tuyo, con sus papeles en regla",
        desc: "Código y datos en tu propiedad, accesos por rol y cumplimiento RGPD desde el diseño. Sin licencias por usuario ni letra pequeña.",
    },
];

const enProduccion = [
    {
        titulo: "Administradores de fincas",
        desc: "Incidencias, comunicaciones con vecinos y documentación de cada comunidad. En uso diario desde enero de 2026.",
        href: "/sectores/administradores-fincas",
    },
    {
        titulo: "Academia online",
        desc: "Alumnos, matrículas, pagos y seguimiento conectados con la plataforma de cursos.",
        href: "/sectores/academias",
    },
    {
        titulo: "Clínica estética",
        desc: "Agenda, historia clínica, informes con diseño propio y RGPD sanitario con registro de auditoría.",
        href: "/casos",
    },
];

export default function PanelesPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header />

            {/* Hero con foto + velo lateral y formulario translúcido */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/fincas-hero.webp"
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
                            <i className="fa-solid fa-chart-line" style={{ marginRight: "0.6rem" }}></i>
                            Paneles y dashboards a medida
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
                            Tu negocio entero,{" "}
                            <span style={{ color: "#f6c39c" }}>en un panel hecho para ti</span>
                        </h1>
                        <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: 0, maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                            No te adaptes tú al software: que el software se adapte a tu negocio.
                            Paneles de gestión a medida que ya usan a diario despachos, academias
                            y clínicas — y que son propiedad de quien los paga.
                        </p>
                    </div>

                    {/* Captura en el hero: el alcance pedido viaja como origen del lead */}
                    <FormularioCurso
                        origen="Panel de gestión a medida"
                        etiquetaPersonas="Personas que lo usarían"
                        etiquetaOpciones="¿Qué necesitas ver en él?*"
                        opciones={[
                            "Clientes e incidencias",
                            "Agenda y citas",
                            "Documentación y expedientes",
                            "Métricas y facturación",
                            "La operación entera",
                            "Aún no lo tengo claro",
                        ]}
                    />
                </div>
            </section>

            {/* Salta entre las piezas de sistemas sin volver atras */}
            <SistemasTabs />

            {/* En corto — split degradado, como el curso estrella */}
            <section aria-label="El servicio, en corto" style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                <div className="container pa2-mitades">
                    <div className="pa2-mitad">
                        <span className="pa2-marca" aria-hidden="true">▦</span>
                        <div className="pa2-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>En corto</span>
                            <h2 className="pa2-titulo">
                                Un panel que se adapta a ti, <span style={{ color: "#f6c39c" }}>no al revés</span>
                            </h2>
                            <p className="pa2-sub">
                                Clientes, incidencias, agenda y métricas en un solo sitio, integrados
                                con lo que ya usas. Sin licencias por usuario, sin cien funciones que
                                no vas a tocar, y con el código y los datos en tu propiedad.
                            </p>
                            <div className="pa2-datos">
                                <span>Integrado con tus herramientas</span>
                                <span>Accesos por rol · RGPD desde el diseño</span>
                                <span>Por partes, en 4 – 8 semanas</span>
                                <span className="pa2-dato-precio">Desde 2.000 € · sin cuota por usuario</span>
                            </div>
                            <div className="pa2-enlaces">
                                <a href="#capacidades" className="pa2-enlace">Ver qué hace por dentro ↓</a>
                                <Link href="/precios" className="pa2-enlace">Ver la tabla de precios →</Link>
                            </div>
                            <p className="pa2-nota">
                                ¿No sabes si necesitas panel o basta automatizar? El{" "}
                                <Link href="/diagnostico">diagnóstico gratis, 12 preguntas en 3 minutos</Link>,
                                te lo dice.
                            </p>
                        </div>
                    </div>
                    <div className="pa2-mitad">
                        <div className="pa2-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>En producción real</span>
                            {enProduccion.map((e, i) => (
                                <Link key={e.titulo} href={e.href} className={i === 0 ? "pa2-caso" : "pa2-caso pa2-caso-2"}>
                                    <div className="pa2-caso-cab">
                                        <h3>{e.titulo}</h3>
                                        <span className="pa2-caso-f">→</span>
                                    </div>
                                    <p>{e.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Precios de un vistazo — banda de cifras */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917" }}>
                <div className="container">
                    <div className="pa2-cifras">
                        <div className="pa2-cifra">
                            <span className="pa2-cifra-num">desde 2.000 €</span>
                            <span className="pa2-cifra-lab">Panel de un área del negocio</span>
                        </div>
                        <div className="pa2-cifra">
                            <span className="pa2-cifra-num">desde 8.000 €</span>
                            <span className="pa2-cifra-lab">La operación entera de la empresa</span>
                        </div>
                        <div className="pa2-cifra">
                            <span className="pa2-cifra-num">4 – 8 semanas</span>
                            <span className="pa2-cifra-lab">Entregado por partes, no de golpe</span>
                        </div>
                        <div className="pa2-cifra">
                            <span className="pa2-cifra-num">0 € / usuario</span>
                            <span className="pa2-cifra-lab">Se paga una vez, es tuyo</span>
                        </div>
                    </div>
                    <p className="pa2-cifras-pie">
                        Precio y plazo cerrados por escrito antes de empezar —{" "}
                        <Link href="/precios">Ver la tabla de precios →</Link>
                    </p>
                </div>
            </section>

            {/* Qué hace — en tinta */}
            <section id="capacidades" style={{ padding: "3.6rem 0", background: "#1c1917", scrollMarginTop: "6rem" }}>
                <div className="container">
                    <div className="pa2-cab">
                        <span className="mono-label pa2-cab-kicker">Qué hace</span>
                        <h2 className="pa2-cab-titulo">Lo que ves al abrirlo por la mañana</h2>
                        <p className="pa2-cab-sub">
                            Cuatro cosas, y la segunda es la que lo separa de una hoja de cálculo.
                        </p>
                    </div>
                    <div className="pa2-pasos">
                        {capacidades.map((p, i) => (
                            <div key={p.num} className="pa2-paso">
                                <div className="pa2-paso-cab">
                                    <span className="pa2-paso-num">{p.num}</span>
                                    {i < 3 && <span className="pa2-paso-linea" aria-hidden="true"></span>}
                                </div>
                                <h3>{p.titulo}</h3>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Casos más concretos — tira numerada por sector */}
            <nav aria-label="Casos concretos" className="nav-barra">
                <div className="container nav-barra-fila">
                    <span className="nav-barra-etiqueta mono-label">¿Tu caso es más concreto?</span>
                    {[
                        { href: "/sectores/administradores-fincas", label: "Fincas" },
                        { href: "/sectores/despachos", label: "Despachos" },
                        { href: "/sectores/academias", label: "Academias" },
                        { href: "/sectores/rrhh", label: "RRHH" },
                        { href: "/cumplimiento", label: "Cumplimiento" },
                    ].map((t, i) => (
                        <Link key={t.href} href={t.href} className="nav-barra-item">
                            <span className="nav-barra-num">{String(i + 1).padStart(2, "0")}</span>
                            {t.label}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* A medida o de mercado — sobre foto con velo */}
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
                    background: "linear-gradient(90deg, rgba(28,25,23,0.8) 0%, rgba(28,25,23,0.64) 45%, rgba(28,25,23,0.4) 75%, rgba(28,25,23,0.25) 100%)",
                }} />
                <div className="container pa2-vs-grid" style={{ position: "relative", zIndex: 2 }}>
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Cuándo merece la pena</span>
                        <h2 className="pa2-vs-titulo">
                            A medida no siempre, <span style={{ color: "#f6c39c" }}>pero cuando toca, toca</span>
                        </h2>
                        <p className="pa2-vs-sub">
                            Si un software del mercado te encaja, te lo digo y te ahorras el proyecto
                            — no cobro comisión de ninguno, así que no tengo motivo para venderte lo
                            contrario. Lo que no tiene sentido es adaptar tu negocio a un programa
                            que cobra por usuario para siempre.
                        </p>
                        <div className="pa2-enlaces">
                            <Link href="/sistemas/crm" className="pa2-enlace">Si lo que buscas es un CRM →</Link>
                        </div>
                    </div>
                    <div>
                        <div className="pa2-vs-fila">
                            <span className="pa2-vs-num mono-label">A medida</span>
                            <p>Cuando tu proceso es tu ventaja, cuando el genérico te obliga a trabajar peor, o cuando pagar por usuario ya duele.</p>
                        </div>
                        <div className="pa2-vs-fila">
                            <span className="pa2-vs-num mono-label">De mercado</span>
                            <p>Cuando lo que necesitas es estándar y hay una herramienta que lo hace bien y barata. Se implanta y listo.</p>
                        </div>
                        <div className="pa2-vs-fila">
                            <span className="pa2-vs-num mono-label">Mixto</span>
                            <p>Lo más habitual: herramientas de mercado para lo estándar, y un panel propio encima que las une y da la visión.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ — split en tinta con el CTA integrado */}
            <section style={{ padding: "4rem 0", background: "#1c1917" }}>
                <div className="container pa2-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem", color: "#faf6ef" }}>
                            Preguntas frecuentes
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.65, margin: "0 0 1.6rem", fontSize: "0.95rem" }}>
                            30 minutos gratis: me cuentas cómo lleváis la operación y te digo si un
                            panel te compensa — o si con una herramienta del mercado vas servido.
                        </p>
                        <Link href="/#contact" className="pa2-cta">Pedir mis 30 minutos →</Link>
                    </div>
                    <div>
                        {faqs.map((f) => (
                            <details key={f.question} className="pn-faq" name="faq-paneles">
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
                .pa2-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .pa2-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .pa2-marca {
                    position: absolute;
                    top: 0.8rem;
                    right: 1.4rem;
                    font-size: clamp(4.5rem, 8vw, 7rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .pa2-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3rem 0;
                    width: 100%;
                }
                .pa2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .pa2-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.65;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .pa2-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .pa2-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .pa2-datos .pa2-dato-precio { color: #f6c39c; }
                .pa2-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem 1.3rem;
                    margin-top: 1rem;
                }
                .pa2-enlace {
                    display: inline-block;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .pa2-enlace:hover { color: #faf6ef; transform: translateX(6px); }
                .pa2-nota {
                    margin: 0.6rem 0 0;
                    font-size: 0.85rem;
                    line-height: 1.6;
                    color: rgba(250, 246, 239, 0.6);
                }
                .pa2-nota a { color: #f6c39c; font-weight: 600; }
                .pa2-nota a:hover { color: #faf6ef; }
                .pa2-caso {
                    display: block;
                    color: inherit;
                    padding-top: 0.6rem;
                }
                .pa2-caso-2 {
                    border-top: 1px solid rgba(250, 246, 239, 0.16);
                    padding-top: 1.1rem;
                    margin-top: 1.1rem;
                }
                .pa2-caso-cab {
                    display: flex;
                    align-items: baseline;
                    justify-content: space-between;
                    gap: 1rem;
                }
                .pa2-caso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.2;
                    transition: color 0.2s ease;
                }
                .pa2-caso:hover h3 { color: #f6c39c; }
                .pa2-caso-f {
                    color: #f6c39c;
                    font-weight: 600;
                    flex-shrink: 0;
                    display: inline-block;
                    transition: transform 0.25s ease;
                }
                .pa2-caso:hover .pa2-caso-f { transform: translateX(6px); }
                .pa2-caso p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0.25rem 0 0;
                }
                @media (max-width: 800px) {
                    .pa2-mitades { grid-template-columns: 1fr; gap: 0; }
                    .pa2-cuerpo { padding: 2.2rem 0; }
                }
                .pa2-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .pa2-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .pa2-cifra-num {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .pa2-cifra-lab {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                .pa2-cifras-pie {
                    text-align: center;
                    margin: 1.8rem 0 0;
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.65);
                }
                .pa2-cifras-pie a { color: #f6c39c; font-weight: 600; }
                .pa2-cifras-pie a:hover { color: #faf6ef; }
                @media (max-width: 800px) {
                    .pa2-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }
                .pa2-cab {
                    text-align: center;
                    max-width: 660px;
                    margin: 0 auto 2.4rem;
                }
                .pa2-cab-kicker { color: #f6c39c; }
                .pa2-cab-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 3.2vw, 2.4rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0.9rem 0 0.7rem;
                }
                .pa2-cab-sub {
                    color: rgba(250, 246, 239, 0.7);
                    font-size: 0.95rem;
                    line-height: 1.65;
                    margin: 0;
                }
                .pa2-pasos {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.6rem;
                }
                .pa2-paso-cab {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-bottom: 0.9rem;
                }
                .pa2-paso-num {
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
                .pa2-paso-linea {
                    flex: 1;
                    height: 1px;
                    background: rgba(250, 246, 239, 0.2);
                }
                .pa2-paso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0 0 0.4rem;
                    line-height: 1.3;
                }
                .pa2-paso p {
                    color: rgba(250, 246, 239, 0.8);
                    font-size: 0.9rem;
                    line-height: 1.6;
                    margin: 0;
                }
                @media (max-width: 900px) {
                    .pa2-pasos { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 560px) {
                    .pa2-pasos { grid-template-columns: 1fr; }
                    .pa2-paso-linea { display: none; }
                }
                @media (max-width: 900px) {
                }
                .pa2-vs-grid {
                    display: grid;
                    grid-template-columns: 0.48fr 0.52fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 900px) {
                    .pa2-vs-grid { grid-template-columns: 1fr; gap: 2rem; }
                }
                .pa2-vs-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 1rem 0 0.8rem;
                    text-shadow: 0 2px 30px rgba(28,25,23,0.45);
                }
                .pa2-vs-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.7;
                    font-size: 0.95rem;
                    margin: 0;
                }
                .pa2-vs-fila {
                    display: grid;
                    grid-template-columns: 8rem 1fr;
                    gap: 1.2rem;
                    align-items: baseline;
                    border-top: 1px solid rgba(250, 246, 239, 0.2);
                    padding: 1rem 0;
                }
                .pa2-vs-fila:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.2); }
                .pa2-vs-num { color: #f6c39c; }
                .pa2-vs-fila p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                @media (max-width: 600px) {
                    .pa2-vs-fila { grid-template-columns: 1fr; gap: 0.3rem; }
                }
                .pa2-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .pa2-faq-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .pa2-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .pa2-cta:hover { background: #faf6ef; transform: translateY(-2px); }
                .pn-faq { border-top: 1px solid rgba(250, 246, 239, 0.14); }
                .pn-faq:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .pn-faq summary {
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
                .pn-faq summary::-webkit-details-marker { display: none; }
                .pn-faq summary:hover { color: #f6c39c; padding-left: 1rem; }
                .pn-faq summary i { color: #f6c39c; font-size: 0.8rem; flex-shrink: 0; transition: transform 0.3s ease; }
                .pn-faq[open] summary i { transform: rotate(180deg); }
            `}</style>
        </main>
    );
}
