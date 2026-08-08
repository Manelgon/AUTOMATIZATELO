import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioCurso from "@/components/FormularioCurso";

export const metadata: Metadata = {
    title: { absolute: "Manel Méndez González · Quién soy y cómo trabajo" },
    description:
        "Manel Méndez González implanta la IA en pymes: forma equipos, deja el cumplimiento del AI Act en regla y construye sistemas que ya funcionan. Precio y plazo cerrados, sin permanencia.",
    alternates: { canonical: "https://automatizatelo.com/sobre-mi" },
    openGraph: {
        title: "Quién soy y cómo trabajo · Manel Méndez González",
        description: "30 minutos gratis y tres caminos: formar, cumplir y automatizar. Precio cerrado, sin permanencia, código tuyo.",
        url: "https://automatizatelo.com/sobre-mi",
    },
};

const construido = [
    {
        num: "01",
        kicker: "Cursos · SCORM",
        titulo: "Cursos de IA producidos y en venta",
        desc: "Cursos e-learning completos publicados en plataformas estándar y formación in-company en uso de IA y gobernanza — con la evidencia documental que pide el Art. 4.",
        piezas: ["Catálogo publicado", "Formación in-company"],
        foto: "/claustro.webp",
    },
    {
        num: "02",
        kicker: "Paneles y plataformas",
        titulo: "Gestión a medida, usada a diario",
        desc: "Serincosol y otros despachos llevan incidencias, comunicaciones con vecinos y documentación desde paneles propios. Para Henkoaching, un SaaS de coaching y selección con portal de empleo, dashboard e informes.",
        piezas: ["Administradores de fincas", "SaaS con portal de empleo"],
        foto: "/fincas-hero.webp",
    },
    {
        num: "03",
        kicker: "Asistentes de IA",
        titulo: "Bots que agendan y responden solos",
        desc: "Una clínica estética agenda citas por WhatsApp con huecos reales, recordatorios, lista de espera y RGPD sanitario. Y cientos de familias avisan ausencias al comedor escolar sin colapsar a administración.",
        piezas: ["Clínica estética", "Comedores escolares"],
        foto: "/clinicas-hero.webp",
    },
];

const lineas = [
    {
        num: "01",
        titulo: "Formar",
        lema: "Que tu equipo use la IA con criterio",
        desc: "Sesiones prácticas con vuestros casos reales, no diapositivas genéricas — y el expediente que acredita la alfabetización del Art. 4, en tu empresa.",
        pasos: ["Ajuste", "Impartición", "Evidencia"],
        href: "/formacion",
        cta: "Formatos y tarifas de formación →",
        foto: "/claustro.webp",
    },
    {
        num: "02",
        titulo: "Cumplir",
        lema: "Que la ley no te pille a contrapié",
        desc: "Inventario de la IA que la empresa usa de verdad, riesgos según el Reglamento, e informe escrito para gerencia — no para abogados.",
        pasos: ["Revisión", "Informe y plan", "Cierre"],
        href: "/cumplimiento",
        cta: "Alcance y precios de la auditoría →",
        foto: "/despachos.webp",
    },
    {
        num: "03",
        titulo: "Automatizar",
        lema: "Que el trabajo repetitivo se haga solo",
        desc: "Alcance, precio y plazo por escrito antes de tocar nada; entregas parciales que ves funcionar, y de 1 a 6 meses de acompañamiento.",
        pasos: ["Propuesta cerrada", "Entregas parciales", "Acompañamiento"],
        href: "/sistemas",
        cta: "Ver los sistemas que construyo →",
        foto: "/servicios-hero.webp",
    },
];

const garantias = [
    { t: "Precio y plazo cerrados" },
    { t: "Sin permanencia" },
    { t: "El código y los datos, tuyos" },
];

const encajamos = [
    "Tienes tareas repetitivas que os comen horas cada semana y quieres quitártelas de encima.",
    "Te toca cumplir el Reglamento de IA y prefieres resolverlo con formación práctica y papeles en regla, no con un máster.",
    "Quieres precio cerrado por escrito antes de empezar, no una tarifa por horas abierta.",
    "Puedes dedicarle al proyecto media hora a la semana y decidir sin pasar por un comité.",
    "Prefieres empezar pequeño — una automatización, una formación — y ampliar solo si funciona.",
];

const noEncajamos = [
    "Buscas lo más barato del mercado sin importar si dentro de tres meses sigue funcionando.",
    "Quieres «poner IA» para contarlo, no para usarla.",
    "Esperas que todo cambie sin cambiar nada de cómo trabajáis hoy.",
    "Nadie va a dedicarle ni una hora al proyecto después de firmar.",
    "Necesitas un informe de 80 páginas para un comité — eso es otra liga, y otro precio.",
];

const faqs = [
    {
        question: "¿La auditoría gratuita es lo mismo que la Auditoría IA que vendes?",
        answer: "No, y conviene distinguirlo: la auditoría gratuita son los 30 minutos iniciales en los que miramos tu caso y te digo por dónde empezar — sin coste ni compromiso. La Auditoría IA (AI Act) es un servicio con entregables: inventario, clasificación de riesgos, informe y plan de acción, desde 750€. La gratuita puede acabar recomendándote la de pago… o diciéndote que no te hace falta.",
    },
    {
        question: "¿Cuánto tarda cada cosa?",
        answer: "La formación se agenda en semanas y se imparte en días. La auditoría de cumplimiento, una o dos semanas desde la primera reunión. Un proyecto de automatización puntual, unas 2 semanas; un área completa, entre uno y tres meses según alcance. El plazo exacto se cierra por escrito en la propuesta.",
    },
    {
        question: "¿Tengo que hacer las tres cosas?",
        answer: "No. Cada línea funciona sola y se contrata sola: hay clientes que solo forman a su equipo, otros que solo quieren el cumplimiento en regla y otros que van directos a automatizar. Si has hecho una, las siguientes se abaratan — no se paga dos veces lo mismo.",
    },
    {
        question: "¿Necesito saber de tecnología para trabajar contigo?",
        answer: "No. Tú explicas cómo trabaja tu negocio y de la parte técnica me encargo yo. Todo se entrega funcionando, integrado con tus herramientas y explicado a tu equipo en su idioma, sin jerga.",
    },
    {
        question: "¿Trabajas presencial o en remoto?",
        answer: "Las dos cosas: presencial en Barcelona y alrededores, y en remoto para toda España. La mayoría de proyectos se llevan perfectamente en remoto, con reuniones cortas en los hitos.",
    },
];

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Manel Méndez González",
    "url": "https://automatizatelo.com/sobre-mi",
    "jobTitle": "Fundador",
    "worksFor": {
        "@type": "Organization",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "knowsAbout": [
        "Implantación de IA en pymes",
        "Formación en IA y gobernanza",
        "Cumplimiento del Reglamento Europeo de IA (AI Act)",
        "Automatización de procesos",
        "Chatbots de WhatsApp",
        "CRM y paneles de gestión a medida",
    ],
    "sameAs": [
        "https://www.linkedin.com/company/automatizatelo",
        "https://www.instagram.com/automatizatelo.ia",
    ],
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
    })),
};

export default function SobreMiPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <Header />

            {/* Hero con foto + velo lateral, como el resto del sitio */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4.5rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/sobre-mi.webp"
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "70% 30%", zIndex: 0 }}
                />
                <div aria-hidden="true" style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(90deg, rgba(28,25,23,0.62) 0%, rgba(28,25,23,0.42) 38%, rgba(28,25,23,0.12) 65%, transparent 85%), linear-gradient(180deg, rgba(28,25,23,0.18) 0%, transparent 40%)",
                }} />
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <span className="kicker-mono" style={{ color: "#f6c39c" }}>
                        <i className="fa-solid fa-user" style={{ marginRight: "0.6rem" }}></i>
                        Sobre mí
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
                        Hola, soy <span style={{ color: "#f6c39c" }}>Manel Méndez</span>
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: "0 0 2rem", maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                        Llevo 3 años metido de lleno en la IA aplicada a negocios reales: asistentes
                        de WhatsApp, paneles y plataformas que hoy usan a diario despachos,
                        consultoras y academias — y cursos de IA que se venden en plataformas
                        e-learning. Automatizatelo es eso, junto: formo a tu equipo, dejo el
                        cumplimiento en regla y construyo los sistemas que trabajan solos.
                    </p>
                    <div className="sm-hero-ctas">
                        <Link href="#contact" className="sm-cta">Auditoría gratis de 30 min →</Link>
                        <a
                            href="https://wa.me/34678399182?text=Hola%20Manel%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20automatizaci%C3%B3n%20con%20IA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sm-cta-wa"
                        >
                            <i className="fa-brands fa-whatsapp" style={{ color: "#25D366" }}></i>
                            Escríbeme por WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Lo que he construido — paneles a sangre con foto */}
            <section style={{ padding: 0 }}>
                <div className="sm-obra-cabecera">
                    <div className="sm-cab">
                        <span className="mono-label sm-cab-kicker">Lo que he construido</span>
                        <h2 className="sm-cab-titulo">Sistemas reales, no diapositivas</h2>
                        <p className="sm-cab-sub">
                            Cada servicio que ofrezco existe porque ya lo he construido para un
                            negocio real. <Link href="/casos" className="sm-obra-enlace">Ver los casos con detalle →</Link>
                        </p>
                    </div>
                </div>
                <div className="sm-obras">
                    {construido.map((c) => (
                        <Link key={c.num} href="/casos" className="sm-obra">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="sm-obra-fondo" src={c.foto} alt="" aria-hidden="true" loading="lazy" />
                            <span className="sm-obra-velo" aria-hidden="true"></span>
                            <span className="sm-obra-cuerpo">
                                <span className="sm-obra-kicker mono-label">
                                    <span className="sm-obra-num">{c.num}</span> {c.kicker}
                                </span>
                                <span className="sm-obra-titulo">{c.titulo}</span>
                                <span className="sm-obra-desc">{c.desc}</span>
                                <span className="sm-obra-piezas">
                                    {c.piezas.map((p) => <span key={p}>{p}</span>)}
                                </span>
                                <span className="sm-obra-cta">Ver los casos →</span>
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Cifras — banda tinta, como en formación */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917" }}>
                <div className="container">
                    <div className="sm-cifras">
                        <div className="sm-cifra">
                            <span className="sm-cifra-valor">3 años</span>
                            <span className="sm-cifra-etiqueta">De IA aplicada a negocios reales</span>
                        </div>
                        <div className="sm-cifra">
                            <span className="sm-cifra-valor">5 sistemas</span>
                            <span className="sm-cifra-etiqueta">En producción, usados a diario</span>
                        </div>
                        <div className="sm-cifra">
                            <span className="sm-cifra-valor">3 líneas</span>
                            <span className="sm-cifra-etiqueta">Formar · cumplir · automatizar</span>
                        </div>
                        <div className="sm-cifra">
                            <span className="sm-cifra-valor">Barcelona</span>
                            <span className="sm-cifra-etiqueta">Presencial · remoto en toda España</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Siempre empieza igual — foto de fondo con velo, como el contacto del index */}
            <section id="contact" aria-label="Los 30 minutos" style={{ position: "relative", overflow: "hidden", padding: 0, background: "#1c1917", scrollMarginTop: "5rem" }}>
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
                <div className="container sm-mitades fh-foto" style={{ position: "relative", zIndex: 2 }}>
                    <div className="sm-mitad">
                        <span className="sm-marca" aria-hidden="true">★</span>
                        <div className="sm-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>Siempre empieza igual</span>
                            <h2 className="sm-titulo">
                                30 minutos gratis, <span style={{ color: "#f6c39c" }}>sin compromiso</span>
                            </h2>
                            <p className="sm-sub">
                                Me cuentas cómo trabajáis y yo miro dónde se va el tiempo y dónde hay
                                riesgo: los mensajes que contestáis a mano, los datos que se copian de
                                una herramienta a otra, la IA que ya usa tu equipo sin criterio común.
                            </p>
                            <p className="sm-sub">
                                Sales con un diagnóstico honesto: <strong>qué formar, qué poner en regla
                                y qué automatizar primero</strong> — y qué no te compensa hacer. A veces la
                                respuesta es «esto déjalo como está», y también te lo digo gratis.
                            </p>
                            <div className="sm-datos">
                                <span>Sin coste ni compromiso</span>
                                <span>Presencial · remoto</span>
                                <span>Respuesta en 24 h laborables</span>
                            </div>
                            <div className="sm-enlaces">
                                <Link href="/precios" className="sm-enlace">Ver la tabla de precios →</Link>
                                <Link href="/casos" className="sm-enlace">Ver casos ya entregados →</Link>
                            </div>
                        </div>
                    </div>
                    <div className="sm-mitad">
                        <div className="sm-cuerpo">
                            <FormularioCurso
                                origen="Sobre mí · 30 minutos"
                                etiquetaPersonas="Tamaño del equipo"
                                etiquetaOpciones="¿Qué necesitas?*"
                                opciones={[
                                    "Formar a mi equipo",
                                    "Poner el cumplimiento en regla",
                                    "Automatizar trabajo repetitivo",
                                    "Aún no lo tengo claro",
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Cómo trabajo — tres paneles a sangre, como los pilares del index */}
            <section style={{ padding: 0 }}>
                <div className="sm-caminos-cabecera">
                    <div className="sm-cab">
                        <span className="mono-label sm-cab-kicker">Cómo trabajo</span>
                        <h2 className="sm-cab-titulo">Tres caminos, y los tres se contratan sueltos</h2>
                    </div>
                </div>
                <div className="sm-caminos">
                    {lineas.map((l) => (
                        <Link key={l.num} href={l.href} className="sm-camino">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="sm-camino-fondo" src={l.foto} alt="" aria-hidden="true" loading="lazy" />
                            <span className="sm-camino-velo" aria-hidden="true"></span>
                            <span className="sm-camino-marca" aria-hidden="true">{l.num}</span>
                            <span className="sm-camino-cuerpo">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>{l.titulo}</span>
                                <span className="sm-camino-titulo">{l.lema}</span>
                                <span className="sm-camino-desc">{l.desc}</span>
                                <span className="sm-camino-pasos">
                                    {l.pasos.map((p, i) => (
                                        <span key={p} className="sm-camino-paso">
                                            <span className="sm-camino-paso-num">{l.num}{"abc"[i]}</span>
                                            {p}
                                        </span>
                                    ))}
                                </span>
                                <span className="sm-camino-cta">{l.cta}</span>
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Lo que no cambia nunca — cinta compacta, sin sección propia */}
            <div className="sm-cinta">
                <div className="container sm-cinta-fila">
                    <span className="sm-cinta-etiqueta mono-label">Da igual el camino</span>
                    {garantias.map((g) => (
                        <span key={g.t} className="sm-cinta-item">{g.t}</span>
                    ))}
                </div>
            </div>

            {/* Cuándo encajamos — degradado firma */}
            <section style={{ padding: "4.5rem 0", background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Antes de llamarme</span>
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
                            Cuándo encajamos — y cuándo no
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.7, margin: 0, maxWidth: 560 }}>
                            Prefiero decírtelo antes de que inviertas media hora en una llamada.
                            Esto no es para todo el mundo, y descubrirlo tarde nos sale caro a los dos.
                        </p>
                    </div>
                    <div className="sm-encaje">
                        <div className="sm-encaje-col">
                            <span className="mono-label sm-encaje-si">Encajamos si</span>
                            <ul>
                                {encajamos.map((t) => (
                                    <li key={t}><i className="fa-solid fa-check" aria-hidden="true"></i><span>{t}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="sm-encaje-col">
                            <span className="mono-label sm-encaje-no">No encajamos si</span>
                            <ul>
                                {noEncajamos.map((t) => (
                                    <li key={t}><i className="fa-solid fa-xmark" aria-hidden="true"></i><span>{t}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="sm-encaje-pie">
                        ¿Dudas si tu caso encaja? El test lo dice en 3 minutos:{" "}
                        <Link href="/diagnostico">hacer el diagnóstico gratis →</Link>
                    </p>
                </div>
            </section>

            {/* FAQ — split en tinta con el CTA integrado */}
            <section style={{ padding: "4rem 0", background: "#1c1917" }}>
                <div className="container sm-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem", color: "#faf6ef" }}>
                            Lo que se pregunta antes de empezar
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.65, margin: "0 0 1.6rem", fontSize: "0.95rem" }}>
                            Media hora, sin coste: me cuentas tu caso y sales sabiendo qué formar,
                            qué poner en regla y qué automatizar primero.
                        </p>
                        <Link href="#contact" className="sm-cta">Pedir mis 30 minutos →</Link>
                    </div>
                    <div>
                        {faqs.map((f) => (
                            <details key={f.question} className="sm-faq" name="faq-sobre-mi">
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
                .sm-hero-ctas {
                    display: flex;
                    gap: 1rem 1.2rem;
                    flex-wrap: wrap;
                    align-items: center;
                }
                .sm-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.95rem;
                    border-radius: 50px;
                    padding: 0.9rem 1.8rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .sm-cta:hover { background: #faf6ef; transform: translateY(-2px); }
                .sm-cta-wa {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #faf6ef;
                    font-weight: 600;
                    font-size: 0.95rem;
                    padding: 0.9rem 1.8rem;
                    border: 1px solid rgba(250, 246, 239, 0.4);
                    border-radius: 50px;
                    background: rgba(28, 25, 23, 0.25);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    transition: background 0.2s ease;
                }
                .sm-cta-wa:hover { background: rgba(28, 25, 23, 0.45); }
                .sm-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .sm-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .sm-cifra-valor {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .sm-cifra-etiqueta {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                @media (max-width: 800px) {
                    .sm-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }
                .sm-obra-cabecera {
                    background: #1c1917;
                    border-top: 1px solid rgba(250, 246, 239, 0.08);
                    padding: 2.4rem 0 1.8rem;
                }
                .sm-cab {
                    text-align: center;
                    max-width: 660px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                }
                .sm-cab-kicker { color: #f6c39c; }
                .sm-cab-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 3.2vw, 2.4rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0.9rem 0 0.7rem;
                }
                .sm-cab-sub {
                    color: rgba(250, 246, 239, 0.7);
                    font-size: 0.95rem;
                    line-height: 1.65;
                    margin: 0;
                }
                .sm-obra-enlace {
                    color: #f6c39c;
                    font-weight: 600;
                    white-space: nowrap;
                }
                .sm-obra-enlace:hover { color: #faf6ef; }
                .sm-obras {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                }
                .sm-obra {
                    position: relative;
                    display: flex;
                    align-items: flex-end;
                    min-height: 23rem;
                    overflow: hidden;
                    color: inherit;
                    background: #1c1917;
                }
                .sm-obra-fondo {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .sm-obra:hover .sm-obra-fondo { transform: scale(1.04); }
                .sm-obra-velo {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(28,25,23,0.3) 0%, rgba(28,25,23,0.62) 42%, rgba(28,25,23,0.92) 100%);
                }
                .sm-obra-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    padding: 3.5rem 1.7rem 1.8rem;
                }
                .sm-obra-kicker { color: rgba(250, 246, 239, 0.7); }
                .sm-obra-num { color: #f6c39c; }
                .sm-obra-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.2rem, 2vw, 1.5rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.2;
                }
                .sm-obra-desc {
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.8);
                    line-height: 1.55;
                }
                .sm-obra-piezas {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem;
                    margin-top: 0.2rem;
                }
                .sm-obra-piezas span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.64rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: #faf6ef;
                    border: 1px solid rgba(250, 246, 239, 0.32);
                    border-radius: 50px;
                    padding: 0.26rem 0.68rem;
                }
                .sm-obra-cta {
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.9rem;
                    margin-top: 0.5rem;
                    transition: transform 0.25s ease;
                }
                .sm-obra:hover .sm-obra-cta { transform: translateX(6px); }
                @media (max-width: 900px) {
                    .sm-obras { grid-template-columns: 1fr; }
                    .sm-obra { min-height: 20rem; }
                    .sm-obra-cuerpo { padding: 3rem 1.4rem 1.6rem; }
                }
                .sm-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .sm-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .sm-marca {
                    position: absolute;
                    top: 0.6rem;
                    right: 1.4rem;
                    font-size: clamp(5rem, 9vw, 8rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .sm-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3rem 0;
                    width: 100%;
                }
                .sm-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .sm-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.7;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .sm-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .sm-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .sm-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem 1.3rem;
                    margin-top: 1rem;
                }
                .sm-enlace {
                    display: inline-block;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .sm-enlace:hover { color: #faf6ef; transform: translateX(6px); }
                @media (max-width: 800px) {
                    .sm-mitades { grid-template-columns: 1fr; gap: 0; }
                    .sm-cuerpo { padding: 2.2rem 0; }
                }
                .sm-caminos-cabecera {
                    background: #1c1917;
                    padding: 2.4rem 0 1.8rem;
                }
                .sm-caminos {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                }
                .sm-camino {
                    position: relative;
                    display: flex;
                    align-items: flex-end;
                    min-height: 30rem;
                    overflow: hidden;
                    color: inherit;
                    background: #1c1917;
                }
                .sm-camino-fondo {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .sm-camino:hover .sm-camino-fondo { transform: scale(1.04); }
                .sm-camino-velo {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(28,25,23,0.35) 0%, rgba(28,25,23,0.6) 45%, rgba(28,25,23,0.9) 100%);
                }
                .sm-camino-marca {
                    position: absolute;
                    top: 1.1rem;
                    left: 1.6rem;
                    font-family: var(--font-display, serif);
                    font-size: clamp(3.5rem, 6vw, 5.5rem);
                    font-weight: 700;
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.16);
                    pointer-events: none;
                }
                .sm-camino-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                    padding: 5.5rem 1.8rem 2rem;
                }
                .sm-camino-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.3rem, 2.2vw, 1.7rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.18;
                }
                .sm-camino-desc {
                    font-size: 0.9rem;
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.55;
                }
                .sm-camino-pasos {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                    margin-top: 0.4rem;
                }
                .sm-camino-paso {
                    display: flex;
                    align-items: center;
                    gap: 0.7rem;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.85);
                    border-top: 1px solid rgba(250, 246, 239, 0.16);
                    padding-top: 0.45rem;
                }
                .sm-camino-paso-num { color: #f6c39c; }
                .sm-camino-cta {
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.92rem;
                    margin-top: 0.6rem;
                    transition: transform 0.25s ease;
                }
                .sm-camino:hover .sm-camino-cta { transform: translateX(6px); }
                @media (max-width: 900px) {
                    .sm-caminos { grid-template-columns: 1fr; }
                    .sm-camino { min-height: 24rem; }
                    .sm-camino-cuerpo { padding: 4.5rem 1.5rem 1.8rem; }
                }
                .sm-etiqueta {
                    text-align: center;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.55);
                    margin: 0 0 2.2rem;
                }
                .sm-encaje {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem 3rem;
                }
                .sm-encaje-col {
                    border-top: 1px solid rgba(250, 246, 239, 0.16);
                    padding-top: 1.1rem;
                }
                .sm-encaje-si { color: #f6c39c; }
                .sm-encaje-no { color: rgba(250, 246, 239, 0.55); }
                .sm-encaje-col ul {
                    display: flex;
                    flex-direction: column;
                    gap: 0.9rem;
                    margin: 1rem 0 0;
                    padding: 0;
                    list-style: none;
                }
                .sm-encaje-col li {
                    display: flex;
                    gap: 0.8rem;
                    align-items: flex-start;
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.93rem;
                }
                .sm-encaje-col li i {
                    margin-top: 0.3rem;
                    flex-shrink: 0;
                    font-size: 0.85rem;
                    color: rgba(250, 246, 239, 0.4);
                }
                .sm-encaje-col li .fa-check { color: #f6c39c; }
                @media (max-width: 800px) {
                    .sm-encaje { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .sm-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .sm-faq-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .sm-faq { border-top: 1px solid rgba(250, 246, 239, 0.14); }
                .sm-faq:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .sm-faq summary {
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
                .sm-faq summary::-webkit-details-marker { display: none; }
                .sm-faq summary:hover { color: #f6c39c; padding-left: 1rem; }
                .sm-faq summary i { color: #f6c39c; font-size: 0.8rem; flex-shrink: 0; transition: transform 0.3s ease; }
                .sm-faq[open] summary i { transform: rotate(180deg); }
                .sm-cinta {
                    background: #1c1917;
                    border-top: 1px solid rgba(250, 246, 239, 0.08);
                    border-bottom: 1px solid rgba(250, 246, 239, 0.08);
                }
                .sm-cinta-fila {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                    gap: 0.15rem 0.25rem;
                    padding-top: 0.55rem;
                    padding-bottom: 0.55rem;
                }
                .sm-cinta-etiqueta {
                    color: #f6c39c;
                    padding: 0.5rem 0.9rem 0.5rem 0;
                    white-space: nowrap;
                }
                .sm-cinta-item {
                    flex: 1 1 auto;
                    text-align: center;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.75);
                    padding: 0.5rem 0.9rem;
                    white-space: nowrap;
                }
                .sm-encaje-pie {
                    margin: 2.2rem 0 0;
                    font-size: 0.92rem;
                    color: rgba(250, 246, 239, 0.7);
                }
                .sm-encaje-pie a { color: #f6c39c; font-weight: 600; }
                .sm-encaje-pie a:hover { color: #faf6ef; }
            `}</style>
        </main>
    );
}
