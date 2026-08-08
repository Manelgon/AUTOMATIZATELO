import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SistemasTabs from "@/components/SistemasTabs";
import FormularioCurso from "@/components/FormularioCurso";

export const metadata: Metadata = {
    title: "Implantación de CRM para Pymes",
    description:
        "Implanto el CRM adecuado en tu pyme: elección sin comisiones, configuración, migración de datos y automatizaciones para que se rellene solo. Desde 900€.",
    alternates: { canonical: "https://automatizatelo.com/sistemas/crm" },
    openGraph: {
        title: "Implantación de CRM: que tu equipo lo use de verdad",
        description: "Elección sin comisiones, migración, automatizaciones y formación. El CRM que se rellena solo no muere en un cajón.",
        url: "https://automatizatelo.com/sistemas/crm",
    },
};

const faqs = [
    {
        question: "¿Qué CRM me recomiendas: HubSpot, Pipedrive, Zoho…?",
        answer: "El más barato que cumpla con lo que tu negocio necesita — y lo digo en serio porque no cobro comisión de ninguno. Si trabajáis simple, a veces basta un Pipedrive o incluso Notion bien montado; si hay equipo comercial y marketing, un HubSpot o Zoho. Y si ya usáis uno, lo primero es ver si se puede aprovechar antes de cambiar nada. La recomendación sale de tu caso, no de mi bolsillo.",
    },
    {
        question: "¿Cuánto cuesta implantar un CRM?",
        answer: "La puesta en marcha — elección, configuración, migración de tus datos y formación básica del equipo — desde 900€. Con la automatización comercial completa (leads entrando solos, seguimiento automático, avisos y reportes), desde 2.000€ como proyecto de área. Las licencias del CRM las pagas directamente al proveedor, sin sobreprecio. Precio cerrado por escrito antes de empezar.",
    },
    {
        question: "¿Podéis migrar mis datos desde Excel u otro CRM?",
        answer: "Sí — es parte del trabajo, no un extra. Clientes, contactos, historial y oportunidades pasan al sistema nuevo ordenados y sin duplicados. Un CRM que empieza vacío, o con los datos sucios, nace muerto: la migración bien hecha es la mitad de la adopción.",
    },
    {
        question: "Ya compramos un CRM una vez y nadie lo usaba. ¿Por qué esta vez sería distinto?",
        answer: "Porque el problema casi nunca es el software: es que el CRM del montón hay que rellenarlo a mano, y a las dos semanas el equipo vuelve al Excel. Mi implantación ataca justo eso: los leads y los emails entran solos, el seguimiento se dispara solo y el equipo recibe formación con sus casos reales. Un CRM que se alimenta solo sí se usa — porque da más de lo que pide.",
    },
    {
        question: "¿Y si ningún CRM del mercado encaja con mi negocio?",
        answer: "Entonces te lo digo — y existe el plan B: un CRM o panel a medida, tuyo en código y datos, sin licencias por usuario. Es lo que construí para una consultora de selección (con portal de empleo incluido) y lo que uso cuando el negocio tiene procesos que el software genérico no contempla. Lo tienes en la página de paneles de gestión.",
    },
    {
        question: "¿De quién son los datos?",
        answer: "Tuyos, siempre. Configuro el CRM con tu cuenta de empresa, te dejo los accesos de administrador y documento lo montado. Si mañana quieres cambiar de herramienta o de proveedor, te llevas todo — esa es la regla de la casa.",
    },
    {
        question: "¿Cuánto se tarda en tenerlo funcionando?",
        answer: "La puesta en marcha con migración y formación suele cerrarse en dos o tres semanas desde la primera reunión. Las automatizaciones que lo alimentan se montan después, una a una, empezando por la que más tiempo devuelve. El plazo se cierra por escrito igual que el precio.",
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
    "name": "Implantación de CRM para pymes",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "areaServed": "España",
    "description": "Implantación de CRM en pymes: elección sin comisiones, configuración, migración de datos, automatizaciones que lo alimentan solo y formación del equipo. Desde 900€.",
    "offers": [
        { "@type": "Offer", "name": "Puesta en marcha de CRM", "price": "900", "priceCurrency": "EUR", "description": "Precio desde; se cierra en la propuesta." },
    ],
};

const herramientas = [
    { nombre: "HubSpot", detalle: "El completo: comercial y marketing en uno. Su versión gratuita da para empezar más de lo que parece." },
    { nombre: "Pipedrive", detalle: "El favorito de los equipos comerciales pequeños: pipeline visual y cero grasa." },
    { nombre: "Zoho CRM", detalle: "Mucha función por poco dinero — si ya usáis otras apps de Zoho, juega en casa." },
    { nombre: "Notion como CRM", detalle: "Para operaciones simples: flexible, barato y suficiente más veces de las que se cree." },
    { nombre: "CRM a medida", detalle: "Cuando el genérico no encaja: tuyo en código y datos, sin licencias por usuario." },
];

const pasos = [
    {
        num: "01",
        titulo: "Elección con criterio",
        desc: "Miro cómo vendéis hoy y te digo qué CRM encaja — el más barato que cumpla. Sin comisiones, y aprovechando el que ya tengas si se puede.",
    },
    {
        num: "02",
        titulo: "Configuración y migración",
        desc: "Pipeline a tu medida, campos que tu negocio usa de verdad, y tus datos migrados desde Excel o el CRM anterior: ordenados y sin duplicados.",
    },
    {
        num: "03",
        titulo: "Automatizaciones que lo alimentan",
        desc: "La clave de que se use: los leads de la web y el email entran solos, el seguimiento se dispara solo, los avisos llegan solos.",
    },
    {
        num: "04",
        titulo: "Formación del equipo",
        desc: "Tu equipo aprende con sus casos reales, no con un manual. Y queda documentado, para que una nueva incorporación no dependa de nadie.",
    },
];

export default function ImplantacionCrmPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
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
                            <i className="fa-solid fa-address-book" style={{ marginRight: "0.6rem" }}></i>
                            Implantación de CRM
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
                            Implantación de CRM:{" "}
                            <span style={{ color: "#f6c39c" }}>que tu equipo lo use de verdad</span>
                        </h1>
                        <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: 0, maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                            Comprar un CRM es fácil; que no muera en un cajón, es lo difícil. Yo me
                            encargo del camino entero: elegirlo sin comisiones, configurarlo, migrar
                            tus datos y — la clave — automatizarlo para que se rellene solo.
                        </p>
                    </div>

                    {/* Captura en el hero: el punto de partida viaja como origen del lead */}
                    <FormularioCurso
                        origen="Implantación de CRM"
                        etiquetaPersonas="Tamaño del equipo"
                        etiquetaOpciones="¿En qué punto estás?*"
                        opciones={[
                            "No tengo CRM: gestiono en Excel",
                            "Tengo uno y nadie lo usa",
                            "Quiero migrar a otro",
                            "Necesito uno a medida",
                            "Aún no lo tengo claro",
                        ]}
                    />
                </div>
            </section>

            {/* Salta entre las piezas de sistemas sin volver atras */}
            <SistemasTabs />

            {/* En corto — split degradado, como el curso estrella */}
            <section aria-label="El servicio, en corto" style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                <div className="container cr2-mitades">
                    <div className="cr2-mitad">
                        <span className="cr2-marca" aria-hidden="true">⌗</span>
                        <div className="cr2-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>En corto</span>
                            <h2 className="cr2-titulo">
                                Un CRM que <span style={{ color: "#f6c39c" }}>se alimenta solo</span>
                            </h2>
                            <p className="cr2-sub">
                                Elección sin comisiones, configuración, migración de tus datos y
                                formación del equipo. Las licencias las pagas directamente al
                                proveedor, sin sobreprecio: yo no vendo software, vendo que tu equipo
                                deje de gestionar clientes en Excel.
                            </p>
                            <div className="cr2-datos">
                                <span>Sin comisiones de proveedor</span>
                                <span>Migración incluida, sin duplicados</span>
                                <span>Listo en 2 – 3 semanas</span>
                                <span className="cr2-dato-precio">Desde 900 € · con automatización 2.000 €</span>
                            </div>
                            <div className="cr2-enlaces">
                                <a href="#proceso" className="cr2-enlace">Ver qué incluye ↓</a>
                                <Link href="/precios" className="cr2-enlace">Ver la tabla de precios →</Link>
                            </div>
                            <p className="cr2-nota">
                                ¿No sabes si tu problema es el CRM o el proceso? El{" "}
                                <Link href="/diagnostico">diagnóstico gratis, 12 preguntas en 3 minutos</Link>,
                                te lo aclara.
                            </p>
                        </div>
                    </div>
                    <div className="cr2-mitad">
                        <div className="cr2-cuerpo">
                            <div className="cr2-caso">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>El motivo real de que fracasen</span>
                                <h3>Hay que rellenarlos a mano</h3>
                                <p>A las dos semanas el equipo vuelve al Excel. Por eso lo primero que monto son las automatizaciones que lo llenan sin que nadie teclee.</p>
                            </div>
                            <div className="cr2-caso cr2-caso-2">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>Y si ninguno encaja</span>
                                <h3>Existe el plan B</h3>
                                <p>Un CRM a medida, tuyo en código y datos, sin licencias por usuario — como el que construí para una consultora de selección.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Precios de un vistazo — banda de cifras */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917" }}>
                <div className="container">
                    <div className="cr2-cifras">
                        <div className="cr2-cifra">
                            <span className="cr2-cifra-num">desde 900 €</span>
                            <span className="cr2-cifra-lab">Puesta en marcha con migración</span>
                        </div>
                        <div className="cr2-cifra">
                            <span className="cr2-cifra-num">desde 2.000 €</span>
                            <span className="cr2-cifra-lab">Con la automatización comercial</span>
                        </div>
                        <div className="cr2-cifra">
                            <span className="cr2-cifra-num">2 – 3 semanas</span>
                            <span className="cr2-cifra-lab">Hasta tenerlo en uso</span>
                        </div>
                        <div className="cr2-cifra">
                            <span className="cr2-cifra-num">0 comisiones</span>
                            <span className="cr2-cifra-lab">De ningún proveedor de CRM</span>
                        </div>
                    </div>
                    <p className="cr2-cifras-pie">
                        Las licencias se pagan al proveedor, sin sobreprecio —{" "}
                        <Link href="/precios">Ver la tabla de precios →</Link>
                    </p>
                </div>
            </section>

            {/* Qué incluye — el proceso en tinta */}
            <section id="proceso" style={{ padding: "3.6rem 0", background: "#1c1917", scrollMarginTop: "6rem" }}>
                <div className="container">
                    <div className="cr2-cab">
                        <span className="mono-label cr2-cab-kicker">Qué incluye</span>
                        <h2 className="cr2-cab-titulo">De la elección a que el equipo lo use</h2>
                        <p className="cr2-cab-sub">
                            Cuatro pasos, y el tercero es el que decide si el CRM sobrevive.
                        </p>
                    </div>
                    <div className="cr2-pasos">
                        {pasos.map((p, i) => (
                            <div key={p.num} className="cr2-paso">
                                <div className="cr2-paso-cab">
                                    <span className="cr2-paso-num">{p.num}</span>
                                    {i < 3 && <span className="cr2-paso-linea" aria-hidden="true"></span>}
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

            {/* Con qué trabajo — sobre foto con velo */}
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
                <div className="container cr2-herr-grid" style={{ position: "relative", zIndex: 2 }}>
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Con qué trabajo</span>
                        <h2 className="cr2-herr-titulo">
                            Elegidos por tu caso, <span style={{ color: "#f6c39c" }}>no por moda</span>
                        </h2>
                        <p className="cr2-herr-sub">
                            No cobro comisión de ninguno: la recomendación sale de cómo vende tu
                            negocio y de lo que ya usáis. Y si el genérico no encaja, se construye
                            a medida.
                        </p>
                        <div className="cr2-enlaces">
                            <Link href="/sistemas/paneles" className="cr2-enlace">Ver los paneles a medida →</Link>
                        </div>
                    </div>
                    <div>
                        {herramientas.map((h) => (
                            <div key={h.nombre} className="cr2-herr">
                                <span className="cr2-herr-nombre">{h.nombre}</span>
                                <span className="cr2-herr-detalle">{h.detalle}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ — split en tinta con el CTA integrado */}
            <section style={{ padding: "4rem 0", background: "#1c1917" }}>
                <div className="container cr2-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem", color: "#faf6ef" }}>
                            Preguntas frecuentes
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.65, margin: "0 0 1.6rem", fontSize: "0.95rem" }}>
                            30 minutos gratis: me cuentas cómo gestionáis clientes hoy y te digo qué
                            CRM te encaja — o si con automatizar lo que ya usas te vale.
                        </p>
                        <Link href="/#contact" className="cr2-cta">Pedir mis 30 minutos →</Link>
                    </div>
                    <div>
                        {faqs.map((f) => (
                            <details key={f.question} className="ic-faq" name="faq-crm">
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
                .cr2-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .cr2-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .cr2-marca {
                    position: absolute;
                    top: 0.8rem;
                    right: 1.4rem;
                    font-size: clamp(4.5rem, 8vw, 7rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .cr2-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3rem 0;
                    width: 100%;
                }
                .cr2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .cr2-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.65;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .cr2-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .cr2-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .cr2-datos .cr2-dato-precio { color: #f6c39c; }
                .cr2-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem 1.3rem;
                    margin-top: 1rem;
                }
                .cr2-enlace {
                    display: inline-block;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .cr2-enlace:hover { color: #faf6ef; transform: translateX(6px); }
                .cr2-nota {
                    margin: 0.6rem 0 0;
                    font-size: 0.85rem;
                    line-height: 1.6;
                    color: rgba(250, 246, 239, 0.6);
                }
                .cr2-nota a { color: #f6c39c; font-weight: 600; }
                .cr2-nota a:hover { color: #faf6ef; }
                .cr2-caso {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                }
                .cr2-caso-2 {
                    border-top: 1px solid rgba(250, 246, 239, 0.16);
                    padding-top: 1.3rem;
                    margin-top: 1.3rem;
                }
                .cr2-caso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.2;
                }
                .cr2-caso p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                @media (max-width: 800px) {
                    .cr2-mitades { grid-template-columns: 1fr; gap: 0; }
                    .cr2-cuerpo { padding: 2.2rem 0; }
                }
                .cr2-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .cr2-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .cr2-cifra-num {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .cr2-cifra-lab {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                .cr2-cifras-pie {
                    text-align: center;
                    margin: 1.8rem 0 0;
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.65);
                }
                .cr2-cifras-pie a { color: #f6c39c; font-weight: 600; }
                .cr2-cifras-pie a:hover { color: #faf6ef; }
                @media (max-width: 800px) {
                    .cr2-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }
                .cr2-cab {
                    text-align: center;
                    max-width: 660px;
                    margin: 0 auto 2.4rem;
                }
                .cr2-cab-kicker { color: #f6c39c; }
                .cr2-cab-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 3.2vw, 2.4rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0.9rem 0 0.7rem;
                }
                .cr2-cab-sub {
                    color: rgba(250, 246, 239, 0.7);
                    font-size: 0.95rem;
                    line-height: 1.65;
                    margin: 0;
                }
                .cr2-pasos {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.6rem;
                }
                .cr2-paso-cab {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-bottom: 0.9rem;
                }
                .cr2-paso-num {
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
                .cr2-paso-linea {
                    flex: 1;
                    height: 1px;
                    background: rgba(250, 246, 239, 0.2);
                }
                .cr2-paso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0 0 0.4rem;
                    line-height: 1.3;
                }
                .cr2-paso p {
                    color: rgba(250, 246, 239, 0.8);
                    font-size: 0.9rem;
                    line-height: 1.6;
                    margin: 0;
                }
                @media (max-width: 900px) {
                    .cr2-pasos { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 560px) {
                    .cr2-pasos { grid-template-columns: 1fr; }
                    .cr2-paso-linea { display: none; }
                }
                @media (max-width: 900px) {
                }
                .cr2-herr-grid {
                    display: grid;
                    grid-template-columns: 0.42fr 0.58fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 900px) {
                    .cr2-herr-grid { grid-template-columns: 1fr; gap: 2rem; }
                }
                .cr2-herr-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 1rem 0 0.8rem;
                    text-shadow: 0 2px 30px rgba(28,25,23,0.45);
                }
                .cr2-herr-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.7;
                    font-size: 0.95rem;
                    margin: 0;
                }
                .cr2-herr {
                    display: grid;
                    grid-template-columns: 0.32fr 0.68fr;
                    gap: 1.2rem;
                    align-items: baseline;
                    border-top: 1px solid rgba(250, 246, 239, 0.2);
                    padding: 0.9rem 0;
                }
                .cr2-herr:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.2); }
                .cr2-herr-nombre {
                    font-family: var(--font-display, serif);
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.25;
                }
                .cr2-herr-detalle {
                    color: rgba(250, 246, 239, 0.8);
                    font-size: 0.9rem;
                    line-height: 1.55;
                }
                @media (max-width: 600px) {
                    .cr2-herr { grid-template-columns: 1fr; gap: 0.3rem; }
                }
                .cr2-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .cr2-faq-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .cr2-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .cr2-cta:hover { background: #faf6ef; transform: translateY(-2px); }
                .ic-faq { border-top: 1px solid rgba(250, 246, 239, 0.14); }
                .ic-faq:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .ic-faq summary {
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
                .ic-faq summary::-webkit-details-marker { display: none; }
                .ic-faq summary:hover { color: #f6c39c; padding-left: 1rem; }
                .ic-faq summary i { color: #f6c39c; font-size: 0.8rem; flex-shrink: 0; transition: transform 0.3s ease; }
                .ic-faq[open] summary i { transform: rotate(180deg); }
            `}</style>
        </main>
    );
}
