import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SistemasTabs from "@/components/SistemasTabs";
import FormularioCurso from "@/components/FormularioCurso";
import Esquema from "@/components/Esquema";
import { migas } from "@/lib/esquemas";

export const metadata: Metadata = {
    title: "Automatización de Procesos para Pymes",
    description:
        "Automatizo facturas, documentos, seguimiento de clientes y reportes de tu pyme. Precio cerrado, sin permanencia y auditoría gratis de 30 minutos.",
    alternates: { canonical: "https://automatizatelo.com/sistemas" },
    openGraph: {
        title: "Automatización de Procesos para Pymes",
        description: "Los flujos repetitivos de tu negocio, funcionando solos. Facturas, clientes, reportes.",
        url: "https://automatizatelo.com/sistemas",
    },
};

const faqs = [
    {
        question: "¿Qué procesos de mi empresa se pueden automatizar?",
        answer: "Los más habituales: la entrada de facturas y albaranes, el seguimiento de clientes y leads, las respuestas a consultas repetitivas, los avisos y recordatorios, y los informes periódicos. En la auditoría gratuita repasamos tu operativa y te digo cuáles darían retorno primero.",
    },
    {
        question: "¿Cómo funciona la automatización de facturas?",
        answer: "Llega una factura, un albarán o un PDF a tu email, y el sistema lee automáticamente el proveedor, el importe, la fecha y los conceptos, y los registra donde tú trabajes: tu Excel, tu CRM o tu programa de contabilidad. Sin picar datos a mano y sin errores de tecleo.",
    },
    {
        question: "¿Podéis generar facturas, albaranes e informes automáticamente?",
        answer: "Sí. El sistema genera tus documentos — facturas, albaranes, presupuestos, informes en PDF — desde tus propios datos, con tu plantilla y tu marca, y los envía o archiva automáticamente. Lo hacemos en producción: por ejemplo, informes de paciente con diseño propio en el panel de una clínica.",
    },
    {
        question: "¿Con qué herramientas trabajáis? ¿Tengo que cambiar las mías?",
        answer: "Trabajo con las principales plataformas de automatización del mercado o con desarrollo a medida, según lo que tu caso necesite — no nos casamos con ninguna. Y no tienes que cambiar tus herramientas: conectamos las que ya usas (email, WhatsApp, hojas de cálculo, CRM, plataformas de pago).",
    },
    {
        question: "¿Cuánto cuesta automatizar un proceso?",
        answer: "Una automatización concreta (por ejemplo, la entrada de facturas), desde 500 € — con el precio final cerrado por escrito en la propuesta. Automatizar varios procesos del negocio, desde 2.000 €. Siempre sin permanencia y con el código y los datos en tu propiedad.",
    },
    {
        question: "¿Cuánto se tarda?",
        answer: "Una automatización puntual suele estar funcionando en unas 2 semanas. Proyectos con varios procesos, según alcance — el plazo se cierra antes de empezar, igual que el precio.",
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
    "name": "Automatización de procesos para pymes",
    "serviceType": "Automatización de procesos de negocio con IA",
    "description": "Automatización de facturas y documentos (lectura y generación), citas y reservas, seguimiento de clientes, avisos, reportes y cumplimiento para pymes. Con la herramienta adecuada o desarrollo a medida.",
    "url": "https://automatizatelo.com/sistemas",
    "areaServed": "ES",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
        "telephone": "+34678399182",
    },
};

const fugas = [
    {
        num: "01",
        titulo: "Alguien pica facturas a mano",
        desc: "Llegan por email, se abren una a una y se teclean en la contabilidad o en el Excel. Horas de trabajo mecánico y un error de tecleo esperando a aparecer.",
        enlace: "/sistemas/documentos",
        enlaceTexto: "Así se resuelve →",
    },
    {
        num: "02",
        titulo: "Se escapan contactos por no contestar a tiempo",
        desc: "El presupuesto que se pidió el viernes se contesta el martes, y el cliente ya ha llamado a otro. El seguimiento depende de que alguien se acuerde.",
        enlace: "/sistemas/ventas",
        enlaceTexto: "Así se resuelve →",
    },
    {
        num: "03",
        titulo: "Confirmar y recordar citas se come la mañana",
        desc: "Llamadas, mensajes, huecos que se quedan vacíos porque nadie reofrece la cancelación. Todo eso lo hace un sistema sin que nadie tenga que acordarse de cada aviso y cada confirmación.",
        enlace: "/sistemas/chatbots-whatsapp",
        enlaceTexto: "Así se resuelve →",
    },
    {
        num: "04",
        titulo: "El informe del lunes se monta a mano",
        desc: "Copiar cifras de tres sitios a una hoja, cuadrarlas y enviarlas. Cada semana lo mismo — y cuando hace falta el dato a mitad de mes, no está.",
        enlace: "/sistemas/paneles",
        enlaceTexto: "Así se resuelve →",
    },
    {
        num: "05",
        titulo: "Los datos se copian de una herramienta a otra",
        desc: "Lo que entra por la web se vuelve a escribir en el CRM, y de ahí a facturación. Tres veces el mismo dato, tres oportunidades de que baile.",
        enlace: "/sistemas/integracion",
        enlaceTexto: "Así se resuelve →",
    },
    {
        num: "06",
        titulo: "Hay cumplimiento que depende de acordarse",
        desc: "Registrar accesos, borrar lo que ya no toca guardar, tener el papel a mano si preguntan. Cuando depende de que alguien se acuerde, es fácil que se escape.",
        enlace: "/cumplimiento",
        enlaceTexto: "Ver cumplimiento →",
    },
];

const piezas = [
    { href: "/sistemas/documentos", badge: "La estrella", t: "Facturas y documentos", d: "Los que llegan se leen solos; los tuyos se generan solos, con tu plantilla.", datos: "Desde 500 €", foto: "/escribiendo-ventana.webp" },
    { href: "/sistemas/ventas", badge: "Del lead al cobro", t: "Automatización de ventas", d: "Respuesta inmediata, seguimiento que no se olvida y facturación sola.", datos: "Desde 500 €", foto: "/ecommerce-hero.webp" },
    { href: "/sistemas/crm", badge: "Sin comisiones", t: "CRM que se alimenta solo", d: "Elegido según tu caso, migrado, y con automatizaciones que lo mantienen vivo.", datos: "Desde 900 €", foto: "/despachos.webp" },
    { href: "/sistemas/paneles", badge: "A medida", t: "Paneles de gestión", d: "Tu negocio entero en una pantalla, integrado con lo que ya usas.", datos: "Desde 2.000 €", foto: "/fincas-hero.webp" },
    { href: "/sistemas/chatbots-whatsapp", badge: "API oficial", t: "Chatbots — WhatsApp y web", d: "Atención 24/7 conectada a tus sistemas y con escalado a persona.", datos: "Desde 2.000 €", foto: "/clinicas-hero.webp" },
    { href: "/sistemas/integracion", badge: "Todo conectado", t: "Integración de sistemas", d: "Tus herramientas pasándose los datos solas: CRM, facturación, correo, Excel.", datos: "Desde 500 €", foto: "/equipos-directivos.webp" },
];

export default function AutomatizacionPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Esquema datos={migas([{ nombre: "Automatización y sistemas", url: "/sistemas" }])} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header />

            {/* Hero con foto + velo lateral y formulario translúcido */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/servicios-hero.webp"
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
                            <i className="fa-solid fa-gears" style={{ marginRight: "0.6rem" }}></i>
                            Servicio · Barcelona y toda España
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
                            Automatización de procesos:{" "}
                            <span style={{ color: "#f6c39c" }}>que lo repetitivo se haga solo</span>
                        </h1>
                        <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: "0 0 1.4rem", maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                            Las tareas repetitivas de tu pyme — facturas, seguimiento, avisos, informes —
                            funcionando solas. Con la herramienta que tu caso necesite, o a medida:
                            lo que te convenga a ti, no lo que me convenga vender.
                        </p>
                        <Link href="/diagnostico" className="sis-test">
                            ¿Cuánto de tu semana se puede automatizar? Haz el test, 3 min →
                        </Link>
                    </div>

                    {/* Captura en el hero: el sistema pedido viaja como origen del lead */}
                    <FormularioCurso
                        origen="Automatización de procesos"
                        etiquetaPersonas="Tamaño de la empresa"
                        etiquetaOpciones="¿Qué quieres automatizar?*"
                        opciones={[
                            "Facturas y documentos",
                            "Ventas y seguimiento de clientes",
                            "CRM",
                            "Paneles e informes",
                            "Chatbot de WhatsApp o web",
                            "Integrar mis herramientas",
                            "Aún no lo tengo claro",
                        ]}
                    />
                </div>
            </section>

            {/* Salta entre las piezas de sistemas sin volver atras */}
            <SistemasTabs />

            {/* Qué es — split degradado, como el curso estrella */}
            <section aria-label="Qué es automatizar" style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                <div className="container si2-mitades">
                    <div className="si2-mitad">
                        <span className="si2-marca" aria-hidden="true">⚙</span>
                        <div className="si2-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>Qué es</span>
                            <h2 className="si2-titulo">
                                Que las tareas repetitivas <span style={{ color: "#f6c39c" }}>se ejecuten solas</span>
                            </h2>
                            <p className="si2-sub">
                                Facturas que se teclean a mano, seguimientos que dependen de que
                                alguien se acuerde, informes que se montan copiando de tres sitios:
                                trabajo que un sistema hace más rápido y sin que nadie tenga que
                                volver a teclear los datos — con las herramientas que ya usáis, sin
                                cambiar de sistema.
                            </p>
                            <div className="si2-datos">
                                <span>Una automatización, desde ~2 semanas</span>
                                <span>Conecta lo que ya usáis</span>
                                <span>El código y los datos, tuyos</span>
                                <span className="si2-dato-precio">Desde 500 € · cerrado en la propuesta</span>
                            </div>
                            <div className="si2-enlaces">
                                <Link href="/sistemas/documentos" className="si2-enlace">La pieza estrella: documentos →</Link>
                                <Link href="/precios#automatizar" className="si2-enlace">Ver la tabla de precios →</Link>
                            </div>
                        </div>
                    </div>
                    <div className="si2-mitad">
                        <div className="si2-cuerpo">
                            <div className="si2-cifra-bloque">
                                <span className="si2-cifra-valor">6 piezas</span>
                                <span className="si2-cifra-etiqueta">Se contratan sueltas o juntas</span>
                            </div>
                            <div className="si2-cifra-bloque si2-cifra-bloque-2">
                                <span className="si2-cifra-valor">sin teclear</span>
                                <span className="si2-cifra-etiqueta">Los datos entran solos, no a mano</span>
                            </div>
                            <div className="si2-cifra-bloque si2-cifra-bloque-2">
                                <span className="si2-cifra-valor">24/7</span>
                                <span className="si2-cifra-etiqueta">El sistema no se va de vacaciones</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Precios de un vistazo — banda de cifras */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917" }}>
                <div className="container">
                    <div className="si2-cifras">
                        <div className="si2-cifra">
                            <span className="si2-cifra-num">desde 500 €</span>
                            <span className="si2-cifra-lab">Una automatización concreta</span>
                        </div>
                        <div className="si2-cifra">
                            <span className="si2-cifra-num">desde 2.000 €</span>
                            <span className="si2-cifra-lab">Un área completa del negocio</span>
                        </div>
                        <div className="si2-cifra">
                            <span className="si2-cifra-num">desde 8.000 €</span>
                            <span className="si2-cifra-lab">La empresa entera</span>
                        </div>
                        <div className="si2-cifra">
                            <span className="si2-cifra-num">desde ~2 sem.</span>
                            <span className="si2-cifra-lab">Para una automatización puntual</span>
                        </div>
                    </div>
                    <p className="si2-cifras-pie">
                        Precio cerrado por escrito antes de empezar, sin permanencia —{" "}
                        <Link href="/precios#automatizar">Ver la tabla de precios →</Link>
                    </p>
                </div>
            </section>

            {/* Dónde se va el tiempo — el problema en idioma del cliente */}
            <section style={{ padding: "3.6rem 0", background: "#1c1917" }}>
                <div className="container">
                    <div className="si2-cab">
                        <span className="mono-label si2-cab-kicker">¿Te suena?</span>
                        <h2 className="si2-cab-titulo">Dónde se va el tiempo de tu equipo</h2>
                        <p className="si2-cab-sub">
                            Seis fugas que veo en casi todas las pymes. Probablemente reconozcas
                            más de una — y cada una tiene su arreglo.
                        </p>
                    </div>
                    <div className="si2-flujos">
                        {fugas.map((f) => (
                            <div key={f.num} className="si2-flujo">
                                <span className="si2-flujo-num mono-label">{f.num}</span>
                                <h3>{f.titulo}</h3>
                                <p>{f.desc}</p>
                                <Link href={f.enlace} className="si2-flujo-enlace">{f.enlaceTexto}</Link>
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
                            {t.label}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Las piezas — paneles a sangre con foto, como el catálogo de empresas */}
            <section style={{ padding: 0 }}>
                <div className="si2-cat-cabecera">
                    <h2 className="si2-cat-etiqueta" style={{ marginBottom: 0 }}>O elige la pieza concreta que necesitas</h2>
                </div>
                <div className="si2-cat-paneles">
                    {piezas.map((p) => (
                        <Link key={p.href} href={p.href} className="si2-cat-panel">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="si2-cat-fondo" src={p.foto} alt="" aria-hidden="true" loading="lazy" />
                            <span className="si2-cat-velo" aria-hidden="true"></span>
                            <span className="si2-cat-badge">{p.badge}</span>
                            <span className="si2-cat-cuerpo">
                                <span className="si2-cat-titulo">{p.t}</span>
                                <span className="si2-cat-desc">{p.d}</span>
                                <span className="si2-cat-datos mono-label">{p.datos}</span>
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* FAQ — split en tinta con el CTA integrado */}
            <section style={{ padding: "4rem 0", background: "#1c1917" }}>
                <div className="container si2-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem", color: "#faf6ef" }}>
                            Preguntas frecuentes
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.65, margin: "0 0 1.6rem", fontSize: "0.95rem" }}>
                            30 minutos gratis: me cuentas cómo trabajáis y te digo qué automatizaría
                            primero, qué costaría y qué no merece la pena tocar.
                        </p>
                        <Link href="/#contact" className="si2-cta">Pedir mis 30 minutos →</Link>
                    </div>
                    <div>
                        {faqs.map((f) => (
                            <details key={f.question} className="au-faq" name="faq-sistemas">
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
                .sis-test {
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    display: inline-block;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .sis-test:hover { color: #faf6ef; transform: translateX(6px); }
                .si2-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .si2-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .si2-marca {
                    position: absolute;
                    top: 0.8rem;
                    right: 1.4rem;
                    font-size: clamp(4.5rem, 8vw, 7rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .si2-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3rem 0;
                    width: 100%;
                }
                .si2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .si2-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.65;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .si2-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .si2-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .si2-datos .si2-dato-precio { color: #f6c39c; }
                .si2-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem 1.3rem;
                    margin-top: 1rem;
                }
                .si2-enlace {
                    display: inline-block;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .si2-enlace:hover { color: #faf6ef; transform: translateX(6px); }
                .si2-cifra-bloque {
                    display: flex;
                    flex-direction: column;
                    gap: 0.3rem;
                }
                .si2-cifra-bloque-2 {
                    border-top: 1px solid rgba(250, 246, 239, 0.16);
                    padding-top: 1.2rem;
                    margin-top: 1.2rem;
                }
                .si2-cifra-valor {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.8rem, 3.4vw, 2.6rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .si2-cifra-etiqueta {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                    line-height: 1.5;
                }
                @media (max-width: 800px) {
                    .si2-mitades { grid-template-columns: 1fr; gap: 0; }
                    .si2-cuerpo { padding: 2.2rem 0; }
                }
                .si2-cab {
                    text-align: center;
                    max-width: 660px;
                    margin: 0 auto 2.4rem;
                }
                .si2-cab-kicker { color: #f6c39c; }
                .si2-cab-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 3.2vw, 2.4rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0.9rem 0 0.7rem;
                }
                .si2-cab-sub {
                    color: rgba(250, 246, 239, 0.7);
                    font-size: 0.95rem;
                    line-height: 1.65;
                    margin: 0;
                }
                .si2-flujos {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem 2.4rem;
                }
                .si2-flujo {
                    display: flex;
                    flex-direction: column;
                    gap: 0.35rem;
                    border-top: 1px solid rgba(250, 246, 239, 0.16);
                    padding-top: 1rem;
                }
                .si2-flujo-num { color: #f6c39c; }
                .si2-flujo h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.25;
                }
                .si2-flujo p {
                    color: rgba(250, 246, 239, 0.78);
                    line-height: 1.6;
                    font-size: 0.9rem;
                    margin: 0;
                }
                .si2-flujo-enlace {
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.85rem;
                    margin-top: 0.2rem;
                    display: inline-block;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .si2-flujo-enlace:hover { color: #faf6ef; transform: translateX(5px); }
                @media (max-width: 900px) {
                    .si2-flujos { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 600px) {
                    .si2-flujos { grid-template-columns: 1fr; gap: 1.4rem; }
                }
                .si2-cat-cabecera {
                    background: #1c1917;
                    padding: 2.4rem 0 1.8rem;
                }
                .si2-cat-etiqueta {
                    text-align: center;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.55);
                    margin: 0 0 0.7rem;
                }
                .si2-cat-paneles {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                }
                .si2-cat-panel {
                    position: relative;
                    display: flex;
                    align-items: flex-end;
                    min-height: 21rem;
                    overflow: hidden;
                    color: inherit;
                    background: #1c1917;
                }
                .si2-cat-fondo {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .si2-cat-panel:hover .si2-cat-fondo { transform: scale(1.04); }
                .si2-cat-velo {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(28,25,23,0.35) 0%, rgba(28,25,23,0.6) 45%, rgba(28,25,23,0.9) 100%);
                }
                .si2-cat-badge {
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
                .si2-cat-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                    padding: 4.5rem 1.5rem 1.6rem;
                }
                .si2-cat-titulo {
                    font-family: var(--font-display, serif);
                    font-size: 1.35rem;
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.2;
                }
                .si2-cat-desc {
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.55;
                }
                .si2-cat-datos { color: #f6c39c; }
                @media (max-width: 1000px) {
                    .si2-cat-paneles { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 640px) {
                    .si2-cat-paneles { grid-template-columns: 1fr; }
                    .si2-cat-panel { min-height: 18rem; }
                }
                .si2-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .si2-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .si2-cifra-num {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .si2-cifra-lab {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                .si2-cifras-pie {
                    text-align: center;
                    margin: 1.8rem 0 0;
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.65);
                }
                .si2-cifras-pie a { color: #f6c39c; font-weight: 600; }
                .si2-cifras-pie a:hover { color: #faf6ef; }
                @media (max-width: 800px) {
                    .si2-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }
                @media (max-width: 900px) {
                }
                .si2-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .si2-faq-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .si2-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .si2-cta:hover { background: #faf6ef; transform: translateY(-2px); }
                .au-faq { border-top: 1px solid rgba(250, 246, 239, 0.14); }
                .au-faq:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .au-faq summary {
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
                .au-faq summary::-webkit-details-marker { display: none; }
                .au-faq summary:hover { color: #f6c39c; padding-left: 1rem; }
                .au-faq summary i { color: #f6c39c; font-size: 0.8rem; flex-shrink: 0; transition: transform 0.3s ease; }
                .au-faq[open] summary i { transform: rotate(180deg); }
            `}</style>
        </main>
    );
}
