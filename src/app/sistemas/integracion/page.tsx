import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SistemasTabs from "@/components/SistemasTabs";

export const metadata: Metadata = {
    title: "Integración de Sistemas para Pymes",
    description:
        "Conecto las herramientas que ya usas — CRM, facturación, correo, WhatsApp, Excel — para que los datos fluyan solos, sin copiar y pegar. Desde 500€.",
    alternates: { canonical: "https://automatizatelo.com/sistemas/integracion" },
    openGraph: {
        title: "Integración de sistemas: tus programas, por fin hablándose",
        description: "Integraciones entre las herramientas que ya usas, con precio cerrado por escrito. Una integración concreta desde 500€.",
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
        answer: "Una integración concreta — por ejemplo, que los formularios de tu web creen el contacto en el CRM y avisen al comercial — desde 500€ con precio cerrado por escrito. Integrar varias herramientas de un área (comercial, administración) desde 2.000€. Sin permanencia, y los flujos quedan en tu propiedad, documentados.",
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
    { nombre: "CRM ↔ Facturación", detalle: "La oportunidad ganada genera el borrador de factura con los datos del cliente ya rellenos. Y el cobro actualiza la ficha. Se acabó teclear dos veces lo mismo." },
    { nombre: "Web ↔ CRM", detalle: "Cada formulario de tu web crea el contacto, lo etiqueta por interés y avisa al comercial al momento — mientras el lead todavía está caliente, no al día siguiente." },
    { nombre: "Tienda ↔ Gestión", detalle: "Los pedidos de la tienda online bajan solos a la facturación y al control de stock. El estado del envío vuelve al cliente sin que nadie lo escriba." },
    { nombre: "WhatsApp ↔ Todo", detalle: "Las conversaciones de WhatsApp quedan en la ficha del cliente, y los avisos importantes — presupuesto aceptado, cita mañana — salen por WhatsApp solos." },
    { nombre: "Excel ↔ El resto", detalle: "Si tu operativa vive en hojas de cálculo, no hace falta tirarlas: se conectan. El Excel se rellena solo desde las demás herramientas, o alimenta a las demás." },
    { nombre: "Lo que no tiene API", detalle: "Programas antiguos, de escritorio o «cerrados» también entran al juego: ficheros de intercambio, lectura de correos o extracción de datos de documentos." },
];

const pasos = [
    {
        num: "01",
        titulo: "Mapa de datos",
        desc: "Miro qué herramientas usáis y por dónde viajan los datos a mano: qué se copia, quién lo copia y cuántas veces por semana. Ahí está la lista de integraciones que valen dinero.",
    },
    {
        num: "02",
        titulo: "Diseño del flujo",
        desc: "Qué sistema manda en cada dato, qué se sincroniza y en qué dirección, y qué pasa si algo falla. Por escrito y con precio cerrado antes de construir nada.",
    },
    {
        num: "03",
        titulo: "Construcción y pruebas",
        desc: "Monto la integración — n8n, Make o API a medida, lo que convenga a tu caso — y la pruebo con datos reales hasta que el circuito completo funciona sin tocarlo.",
    },
    {
        num: "04",
        titulo: "Entrega con vigilancia",
        desc: "Flujos documentados y en tu propiedad, con reintentos automáticos y avisos si algo se atasca. No te enteras de los fallos a fin de mes: te enteras al minuto.",
    },
];

export default function IntegracionSistemasPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header />

            {/* Hero editorial */}
            <section style={{
                padding: "9rem 0 3.5rem",
                background: "radial-gradient(circle at 20% 20%, rgba(234, 88, 12, 0.07) 0%, transparent 55%)",
            }}>
                <div className="container">
                    <span className="kicker-mono">
                        <i className="fa-solid fa-diagram-project" style={{ marginRight: "0.6rem" }}></i>
                        Integración de sistemas
                    </span>
                    <h1 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(2.2rem, 6vw, 3.6rem)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        color: "var(--color-text-main)",
                        margin: "1rem 0 1.2rem",
                    }}>
                        Tus programas, por fin{" "}<br />
                        <span style={{ color: "var(--color-primary)" }}>hablándose entre sí</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 660 }}>
                        El CRM no pasa datos a la facturación, los pedidos se copian al Excel a mano
                        y el formulario de la web acaba en un correo que alguien vuelve a teclear.
                        Conecto las herramientas que ya usas para que el dato entre una vez — y
                        aparezca solo en todas partes.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.02rem", padding: "1rem 2.25rem" }}>
                        Empezar con 30 minutos gratis
                    </Link>
                </div>
            </section>

            {/* Salta entre las piezas de sistemas sin volver atras */}
            <SistemasTabs />

            {/* Answer capsule */}
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
                        Integración de sistemas para pymes: conecto las herramientas que ya usas —
                        CRM, facturación, correo, WhatsApp, tienda, Excel — para que los datos
                        fluyan solos. Una integración concreta desde 500€; integrar un área
                        completa, desde 2.000€. Precio cerrado por escrito.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        Sin cambiar de programas y sin permanencia: los flujos quedan documentados
                        y en tu propiedad.
                    </p>
                </div>
            </section>

            {/* Conexiones típicas */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Qué conecto</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            Las integraciones que más dinero ahorran
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                            Cada fila es un «se copiaba a mano» que desaparece. Si tu combinación no está, pregunta: con API se conecta casi todo — y sin API, también hay camino.
                        </p>
                    </div>
                    {conexiones.map((c) => (
                        <div key={c.nombre} className="is-fila">
                            <span className="is-nombre">{c.nombre}</span>
                            <span className="is-detalle">{c.detalle}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Cómo se hace — franja terracota */}
            <section style={{ padding: "4.5rem 0", background: "linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Cómo se hace</span>
                    <h2 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                        fontWeight: 600,
                        color: "#faf6ef",
                        margin: "0.8rem 0 2rem",
                        lineHeight: 1.2,
                    }}>
                        Del copiar-y-pegar al dato que viaja solo, en cuatro pasos
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
                        {pasos.map((p) => (
                            <div key={p.num}>
                                <span className="mono-label" style={{ color: "#f6c39c" }}>{p.num}</span>
                                <h3 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "1.2rem",
                                    fontWeight: 600,
                                    color: "#faf6ef",
                                    margin: "0.5rem 0 0.5rem",
                                    lineHeight: 1.3,
                                }}>
                                    {p.titulo}
                                </h3>
                                <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.6, margin: 0, fontSize: "0.95rem" }}>
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.7, marginTop: "2rem", maxWidth: 720 }}>
                        ¿Y si además del dato quieres que el proceso entero se haga solo? Eso es la{" "}
                        <Link href="/sistemas" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            automatización de procesos
                        </Link>. ¿Todavía no hay CRM que conectar? Empieza por la{" "}
                        <Link href="/sistemas" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            implantación de CRM
                        </Link>. Y con los datos ya fluyendo, un{" "}
                        <Link href="/sistemas" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            panel de control
                        </Link>{" "}
                        te los enseña en tiempo real.
                    </p>
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
                    {faqs.map((f) => (
                        <details key={f.question} className="is-faq" name="faq-integracion">
                            <summary>
                                <span>{f.question}</span>
                                <i className="fas fa-chevron-down"></i>
                            </summary>
                            <p style={{ padding: "0 0.4rem 1.5rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0, maxWidth: 720 }}>{f.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* CTA final en melocotón */}
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
                        ¿Qué estás copiando a mano cada semana?
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos gratis: me cuentas tus herramientas y te digo qué se puede conectar y qué costaría.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir mis 30 minutos
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .is-fila {
                    display: grid;
                    grid-template-columns: 220px 1fr;
                    gap: 1.5rem;
                    align-items: baseline;
                    padding: 1.3rem 0.3rem;
                    border-top: 1px solid var(--color-border);
                }
                .is-fila:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .is-nombre {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.15rem, 2vw, 1.45rem);
                    font-weight: 600;
                    color: var(--color-text-main);
                }
                .is-detalle {
                    color: var(--color-text-muted);
                    line-height: 1.6;
                    font-size: 0.95rem;
                }
                .is-faq {
                    border-top: 1px solid var(--color-border);
                }
                .is-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
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
                    color: var(--color-text-main);
                    line-height: 1.3;
                    transition: color 0.2s ease, padding-left 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .is-faq summary::-webkit-details-marker {
                    display: none;
                }
                .is-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .is-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .is-faq[open] summary i {
                    transform: rotate(180deg);
                }
                @media (max-width: 700px) {
                    .is-fila {
                        grid-template-columns: 1fr;
                        gap: 0.3rem;
                    }
                }
                @media (max-width: 600px) {
                    h1 br { display: none; }
                }
            `}</style>
        </main>
    );
}
