import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SistemasTabs from "@/components/SistemasTabs";
import FormularioCurso from "@/components/FormularioCurso";
import Esquema from "@/components/Esquema";
import { migas } from "@/lib/esquemas";

export const metadata: Metadata = {
    title: "Integración de Sistemas para Pymes",
    description:
        "Conecto las herramientas que ya usas — CRM, facturación, correo, WhatsApp, Excel — para que los datos fluyan solos, sin copiar y pegar. Desde 500 €.",
    alternates: { canonical: "https://automatizatelo.com/sistemas/integracion" },
    openGraph: {
        title: "Integración de sistemas: tus programas, por fin hablándose",
        description: "Integraciones entre las herramientas que ya usas, con precio cerrado por escrito. Una integración concreta desde 500 €.",
        url: "https://automatizatelo.com/sistemas/integracion",
    },
};

const faqs = [
    {
        question: "¿Qué es la integración de sistemas, en cristiano?",
        answer: "Hacer que los programas que ya usas se pasen los datos solos. Hoy, cuando entra un pedido, alguien lo copia al Excel; cuando un formulario trae un contacto, alguien lo mete en el CRM; cuando toca facturar, alguien vuelve a teclear lo mismo. La integración de sistemas elimina ese trabajo: el dato entra una vez y aparece donde tiene que aparecer, al momento y sin errores de copia.",
    },
    {
        question: "¿Qué herramientas puedes conectar?",
        answer: "Casi cualquiera. Si la herramienta tiene API (la mayoría de CRMs, programas de facturación, tiendas online, correo y calendarios la tienen), se conecta directamente. Si no la tiene, también hay camino: importación y exportación de ficheros, lectura de correos, o extracción de datos de documentos. En la sesión inicial te digo, herramienta por herramienta, qué se puede y cómo.",
    },
    {
        question: "¿Cuánto cuesta conectar dos aplicaciones?",
        answer: "Una integración concreta — por ejemplo, que los formularios de tu web creen el contacto en el CRM y avisen al comercial — desde 500 € con precio cerrado por escrito. Integrar varias herramientas de un área (comercial, administración) desde 2.000 €. Sin permanencia, y los flujos quedan en tu propiedad, documentados.",
    },
    {
        question: "¿Puedes conectar mi CRM con la facturación?",
        answer: "Es de lo más pedido, y sí. Cuando una oportunidad se marca como ganada en el CRM, se genera el borrador de factura con los datos del cliente ya rellenos — sin volver a teclear nombre, NIF ni dirección. Y al revés: los cobros pueden actualizar la ficha del cliente en el CRM. El circuito comercial deja de tener huecos que se rellenan a mano.",
    },
    {
        question: "¿Qué pasa si una integración falla un día?",
        answer: "Las integraciones se construyen contando con que internet falla: cada flujo lleva reintentos automáticos, y si algo no se recupera solo, te llega un aviso con el error concreto — no te enteras a fin de mes por una factura que falta. Además queda registro de cada ejecución, para poder mirar qué pasó y cuándo.",
    },
    {
        question: "¿Usas n8n, Make, Zapier…? ¿Y de quién son los flujos?",
        answer: "La plataforma se elige por tu caso: n8n cuando conviene tenerlo todo en tu propia infraestructura sin pagar por operación, Make o Zapier cuando compensa la sencillez, y API a medida cuando ninguna llega. No cobro comisión de ninguna. Y los flujos son tuyos: documentados y en tus cuentas — si un día no quieres seguir conmigo, todo sigue funcionando.",
    },
    {
        question: "¿Cuánto se tarda en tenerlo funcionando?",
        answer: "Una integración concreta suele estar en producción en una o dos semanas desde que se cierra el diseño. Integrar un área completa va según cuántas herramientas entren y cómo de accesibles sean; el plazo se cierra por escrito igual que el precio.",
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
    "name": "Integración de sistemas y aplicaciones para pymes",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "areaServed": "España",
    "description": "Integración entre las herramientas que ya usa tu empresa: CRM, facturación, correo, WhatsApp, tienda online y hojas de cálculo. Los datos fluyen solos, con reintentos y avisos si algo falla.",
    "offers": [
        { "@type": "Offer", "name": "Integración concreta", "price": "500", "priceCurrency": "EUR", "description": "Precio desde; se cierra en la propuesta." },
    ],
};

const conexiones = [
    { nombre: "CRM ↔ Facturación", detalle: "La oportunidad ganada genera el borrador de factura con los datos del cliente ya rellenos. Y el cobro actualiza la ficha." },
    { nombre: "Web ↔ CRM", detalle: "Cada formulario crea el contacto, lo etiqueta por interés y avisa al comercial al momento — mientras el lead está caliente." },
    { nombre: "Tienda ↔ Gestión", detalle: "Los pedidos bajan solos a la facturación y al control de stock. El estado del envío vuelve al cliente sin que nadie lo escriba." },
    { nombre: "WhatsApp ↔ Todo", detalle: "Las conversaciones quedan en la ficha del cliente, y los avisos importantes salen por WhatsApp solos." },
    { nombre: "Excel ↔ El resto", detalle: "Si tu operativa vive en hojas de cálculo, no hace falta tirarlas: se conectan en los dos sentidos." },
    { nombre: "Lo que no tiene API", detalle: "Programas antiguos, de escritorio o «cerrados» también entran: ficheros de intercambio, lectura de correos o extracción de documentos." },
];

const pasos = [
    {
        num: "01",
        titulo: "Mapa de datos",
        desc: "Qué herramientas usáis y por dónde viajan los datos a mano: qué se copia, quién lo copia y cuántas veces por semana. Ahí está la lista que vale dinero.",
    },
    {
        num: "02",
        titulo: "Diseño del flujo",
        desc: "Qué sistema manda en cada dato, qué se sincroniza y en qué dirección, y qué pasa si algo falla. Por escrito antes de construir nada.",
    },
    {
        num: "03",
        titulo: "Construcción y pruebas",
        desc: "Monto la integración — n8n, Make o API a medida, lo que convenga — y la pruebo con datos reales hasta que el circuito va sin tocarlo.",
    },
    {
        num: "04",
        titulo: "Entrega con vigilancia",
        desc: "Flujos documentados y en tu propiedad, con reintentos automáticos y avisos si algo se atasca. Te enteras cuando pasa, no a fin de mes.",
    },
];

export default function IntegracionSistemasPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Esquema datos={migas([{ nombre: "Automatización y sistemas", url: "/sistemas" }, { nombre: "Integración de sistemas", url: "/sistemas/integracion" }])} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header />

            {/* Hero con foto + velo lateral y formulario translúcido */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/equipos-directivos.webp"
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
                            <i className="fa-solid fa-diagram-project" style={{ marginRight: "0.6rem" }}></i>
                            Integración de sistemas
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
                            Tus programas, por fin{" "}
                            <span style={{ color: "#f6c39c" }}>hablándose entre sí</span>
                        </h1>
                        <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: 0, maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                            El CRM no pasa datos a la facturación, los pedidos se copian al Excel a mano
                            y el formulario de la web acaba en un correo que alguien vuelve a teclear.
                            Conecto las herramientas que ya usas para que el dato entre una vez — y
                            aparezca solo en todas partes.
                        </p>
                    </div>

                    {/* Captura en el hero: la conexión pedida viaja como origen del lead */}
                    <FormularioCurso
                        origen="Integración de sistemas"
                        etiquetaPersonas="Tamaño de la empresa"
                        etiquetaOpciones="¿Qué quieres conectar?*"
                        opciones={[
                            "CRM con facturación",
                            "La web con el CRM",
                            "Tienda online con gestión",
                            "WhatsApp con mis sistemas",
                            "Hojas de cálculo con el resto",
                            "Aún no lo tengo claro",
                        ]}
                    />
                </div>
            </section>

            {/* Salta entre las piezas de sistemas sin volver atras */}
            <SistemasTabs />

            {/* En corto — split degradado, como el curso estrella */}
            <section aria-label="El servicio, en corto" style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                <div className="container in2-mitades">
                    <div className="in2-mitad">
                        <span className="in2-marca" aria-hidden="true">⇄</span>
                        <div className="in2-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>En corto</span>
                            <h2 className="in2-titulo">
                                El dato entra una vez y <span style={{ color: "#f6c39c" }}>aparece en todas partes</span>
                            </h2>
                            <p className="in2-sub">
                                Integraciones entre las herramientas que ya usas — CRM, facturación,
                                correo, WhatsApp, tienda, hojas de cálculo — con reintentos si algo
                                falla y avisos cuando hace falta mirar. Los flujos quedan
                                documentados y en tu propiedad.
                            </p>
                            <div className="in2-datos">
                                <span>Sin cambiar de herramientas</span>
                                <span>Reintentos y aviso si algo falla</span>
                                <span>En marcha en 1 – 2 semanas</span>
                                <span className="in2-dato-precio">Desde 500 € · un área desde 2.000 €</span>
                            </div>
                            <div className="in2-enlaces">
                                <a href="#conexiones" className="in2-enlace">Ver conexiones típicas ↓</a>
                                <Link href="/precios#automatizar" className="in2-enlace">Ver la tabla de precios →</Link>
                            </div>
                            <p className="in2-nota">
                                ¿No sabes cuántas veces se copia un dato en tu empresa? El{" "}
                                <Link href="/diagnostico">diagnóstico gratis, 12 preguntas en 3 minutos</Link>,
                                lo saca a la luz.
                            </p>
                        </div>
                    </div>
                    <div className="in2-mitad">
                        <div className="in2-cuerpo">
                            <div className="in2-caso">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>Sin casarme con nadie</span>
                                <h3>n8n, Make o API a medida</h3>
                                <p>La plataforma se elige por tu caso: n8n si conviene tenerlo en tu infraestructura sin pagar por operación, Make cuando compensa la sencillez, y código a medida cuando ninguna llega.</p>
                            </div>
                            <div className="in2-caso in2-caso-2">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>Y sin rehenes</span>
                                <h3>Los flujos son tuyos</h3>
                                <p>Documentados y en tus cuentas. Si un día no quieres seguir conmigo, todo sigue funcionando igual.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Precios de un vistazo — banda de cifras */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917" }}>
                <div className="container">
                    <div className="in2-cifras">
                        <div className="in2-cifra">
                            <span className="in2-cifra-num">desde 500 €</span>
                            <span className="in2-cifra-lab">Una integración concreta</span>
                        </div>
                        <div className="in2-cifra">
                            <span className="in2-cifra-num">desde 2.000 €</span>
                            <span className="in2-cifra-lab">Las herramientas de un área</span>
                        </div>
                        <div className="in2-cifra">
                            <span className="in2-cifra-num">1 – 2 semanas</span>
                            <span className="in2-cifra-lab">Hasta tenerla en producción</span>
                        </div>
                        <div className="in2-cifra">
                            <span className="in2-cifra-num">0 comisiones</span>
                            <span className="in2-cifra-lab">De ninguna plataforma</span>
                        </div>
                    </div>
                    <p className="in2-cifras-pie">
                        Precio cerrado por escrito antes de empezar, sin permanencia —{" "}
                        <Link href="/precios#automatizar">Ver la tabla de precios →</Link>
                    </p>
                </div>
            </section>

            {/* Cómo se hace — el proceso en tinta */}
            <section style={{ padding: "3.6rem 0", background: "#1c1917" }}>
                <div className="container">
                    <div className="in2-cab">
                        <span className="mono-label in2-cab-kicker">Cómo se hace</span>
                        <h2 className="in2-cab-titulo">Del mapa de datos al flujo vigilado</h2>
                        <p className="in2-cab-sub">
                            El primer paso es el que decide el resto: saber qué se copia hoy a mano.
                        </p>
                    </div>
                    <div className="in2-pasos">
                        {pasos.map((p, i) => (
                            <div key={p.num} className="in2-paso">
                                <div className="in2-paso-cab">
                                    <span className="in2-paso-num">{p.num}</span>
                                    {i < 3 && <span className="in2-paso-linea" aria-hidden="true"></span>}
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
                            {t.label}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Conexiones típicas — sobre foto con velo */}
            <section id="conexiones" style={{ position: "relative", overflow: "hidden", padding: "4.5rem 0", background: "#1c1917", scrollMarginTop: "6rem" }}>
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
                    background: "linear-gradient(90deg, rgba(28,25,23,0.82) 0%, rgba(28,25,23,0.68) 45%, rgba(28,25,23,0.45) 75%, rgba(28,25,23,0.3) 100%)",
                }} />
                <div className="container in2-con-grid" style={{ position: "relative", zIndex: 2 }}>
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Conexiones típicas</span>
                        <h2 className="in2-con-titulo">
                            Las que más se piden, <span style={{ color: "#f6c39c" }}>y la que creías imposible</span>
                        </h2>
                        <p className="in2-con-sub">
                            Si la herramienta tiene API, se conecta directamente. Y si no la tiene,
                            también hay camino — esa última fila es la que suele sorprender.
                        </p>
                        <div className="in2-enlaces">
                            <Link href="/sistemas/documentos" className="in2-enlace">Documentos sin API →</Link>
                        </div>
                    </div>
                    <div>
                        {conexiones.map((c) => (
                            <div key={c.nombre} className="in2-con">
                                <span className="in2-con-nombre">{c.nombre}</span>
                                <span className="in2-con-detalle">{c.detalle}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ — split en tinta con el CTA integrado */}
            <section style={{ padding: "4rem 0", background: "#1c1917" }}>
                <div className="container in2-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem", color: "#faf6ef" }}>
                            Preguntas frecuentes
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.65, margin: "0 0 1.6rem", fontSize: "0.95rem" }}>
                            30 minutos gratis: me dices qué herramientas usáis y te digo, una por una,
                            qué se puede conectar y qué ahorraría cada conexión.
                        </p>
                        <Link href="/#contact" className="in2-cta">Pedir mis 30 minutos →</Link>
                        <Link href="/casos" className="in2-enlace" style={{ marginTop: "0.9rem", display: "inline-block" }}>Ver sistemas que ya funcionan →</Link>
                    </div>
                    <div>
                        {faqs.map((f) => (
                            <details key={f.question} className="is-faq" name="faq-integracion">
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
                .in2-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .in2-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .in2-marca {
                    position: absolute;
                    top: 0.8rem;
                    right: 1.4rem;
                    font-size: clamp(4.5rem, 8vw, 7rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .in2-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3rem 0;
                    width: 100%;
                }
                .in2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .in2-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.65;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .in2-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .in2-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .in2-datos .in2-dato-precio { color: #f6c39c; }
                .in2-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem 1.3rem;
                    margin-top: 1rem;
                }
                .in2-enlace {
                    display: inline-block;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .in2-enlace:hover { color: #faf6ef; transform: translateX(6px); }
                .in2-nota {
                    margin: 0.6rem 0 0;
                    font-size: 0.85rem;
                    line-height: 1.6;
                    color: rgba(250, 246, 239, 0.6);
                }
                .in2-nota a { color: #f6c39c; font-weight: 600; }
                .in2-nota a:hover { color: #faf6ef; }
                .in2-caso {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                }
                .in2-caso-2 {
                    border-top: 1px solid rgba(250, 246, 239, 0.16);
                    padding-top: 1.3rem;
                    margin-top: 1.3rem;
                }
                .in2-caso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.2;
                }
                .in2-caso p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                @media (max-width: 800px) {
                    .in2-mitades { grid-template-columns: 1fr; gap: 0; }
                    .in2-cuerpo { padding: 2.2rem 0; }
                }
                .in2-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .in2-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .in2-cifra-num {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .in2-cifra-lab {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                .in2-cifras-pie {
                    text-align: center;
                    margin: 1.8rem 0 0;
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.65);
                }
                .in2-cifras-pie a { color: #f6c39c; font-weight: 600; }
                .in2-cifras-pie a:hover { color: #faf6ef; }
                @media (max-width: 800px) {
                    .in2-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }
                .in2-cab {
                    text-align: center;
                    max-width: 660px;
                    margin: 0 auto 2.4rem;
                }
                .in2-cab-kicker { color: #f6c39c; }
                .in2-cab-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 3.2vw, 2.4rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0.9rem 0 0.7rem;
                }
                .in2-cab-sub {
                    color: rgba(250, 246, 239, 0.7);
                    font-size: 0.95rem;
                    line-height: 1.65;
                    margin: 0;
                }
                .in2-pasos {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.6rem;
                }
                .in2-paso-cab {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-bottom: 0.9rem;
                }
                .in2-paso-num {
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
                .in2-paso-linea {
                    flex: 1;
                    height: 1px;
                    background: rgba(250, 246, 239, 0.2);
                }
                .in2-paso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0 0 0.4rem;
                    line-height: 1.3;
                }
                .in2-paso p {
                    color: rgba(250, 246, 239, 0.8);
                    font-size: 0.9rem;
                    line-height: 1.6;
                    margin: 0;
                }
                @media (max-width: 900px) {
                    .in2-pasos { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 560px) {
                    .in2-pasos { grid-template-columns: 1fr; }
                    .in2-paso-linea { display: none; }
                }
                @media (max-width: 900px) {
                }
                .in2-con-grid {
                    display: grid;
                    grid-template-columns: 0.4fr 0.6fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 900px) {
                    .in2-con-grid { grid-template-columns: 1fr; gap: 2rem; }
                }
                .in2-con-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 1rem 0 0.8rem;
                    text-shadow: 0 2px 30px rgba(28,25,23,0.45);
                }
                .in2-con-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.7;
                    font-size: 0.95rem;
                    margin: 0;
                }
                .in2-con {
                    display: grid;
                    grid-template-columns: 0.34fr 0.66fr;
                    gap: 1.2rem;
                    align-items: baseline;
                    border-top: 1px solid rgba(250, 246, 239, 0.2);
                    padding: 0.9rem 0;
                }
                .in2-con:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.2); }
                .in2-con-nombre {
                    font-family: var(--font-display, serif);
                    font-size: 1.05rem;
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.25;
                }
                .in2-con-detalle {
                    color: rgba(250, 246, 239, 0.8);
                    font-size: 0.9rem;
                    line-height: 1.55;
                }
                @media (max-width: 600px) {
                    .in2-con { grid-template-columns: 1fr; gap: 0.3rem; }
                }
                .in2-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .in2-faq-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .in2-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .in2-cta:hover { background: #faf6ef; transform: translateY(-2px); }
                .is-faq { border-top: 1px solid rgba(250, 246, 239, 0.14); }
                .is-faq:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .is-faq summary {
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
                .is-faq summary::-webkit-details-marker { display: none; }
                .is-faq summary:hover { color: #f6c39c; padding-left: 1rem; }
                .is-faq summary i { color: #f6c39c; font-size: 0.8rem; flex-shrink: 0; transition: transform 0.3s ease; }
                .is-faq[open] summary i { transform: rotate(180deg); }
            `}</style>
        </main>
    );
}
