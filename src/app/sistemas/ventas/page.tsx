import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SistemasTabs from "@/components/SistemasTabs";

export const metadata: Metadata = {
    title: "Automatización de Ventas para Pymes",
    description:
        "Automatiza tu ciclo de ventas: leads respondidos en minutos, seguimiento automático, propuestas y facturas solas. Desde 500€.",
    alternates: { canonical: "https://automatizatelo.com/sistemas/ventas" },
    openGraph: {
        title: "Automatización de ventas: menos picar datos, más cerrar",
        description: "Del lead al cobro sin trabajo manual: respuesta inmediata, seguimiento automático y facturación sola.",
        url: "https://automatizatelo.com/sistemas/ventas",
    },
};

const faqs = [
    {
        question: "¿Qué partes del ciclo de ventas se pueden automatizar?",
        answer: "Casi todas las que no son hablar con el cliente: la respuesta inicial al lead (en minutos, no al día siguiente), la calificación con reglas que tú defines, los recordatorios de seguimiento, la generación de propuestas desde plantillas, la factura al cerrar y el aviso si un cliente se enfría. Lo que no automatizo es la conversación de venta en sí — esa es tuya, y ahora tendrás tiempo para tenerla.",
    },
    {
        question: "¿Necesito un CRM para automatizar las ventas?",
        answer: "Ayuda mucho, pero no es requisito de entrada: se puede empezar automatizando sobre lo que uses hoy (email, hojas de cálculo, WhatsApp) y dar el salto al CRM cuando tenga sentido. Si toca elegirlo e implantarlo, eso tiene página propia — y va sin comisiones de ningún proveedor.",
    },
    {
        question: "¿Cuánto cuesta automatizar las ventas?",
        answer: "Una automatización concreta — por ejemplo, la respuesta inmediata a leads o los recordatorios de seguimiento — desde 500€. El ciclo comercial completo (captación, seguimiento, propuestas y facturación funcionando solos) es un proyecto de área desde 2.000€. Precio cerrado por escrito antes de empezar.",
    },
    {
        question: "¿Los mensajes automáticos no espantan al cliente?",
        answer: "Los mensajes malos espantan, sean automáticos o no. Los flujos se redactan con tu tono y se disparan cuando aportan (confirmar recepción, recordar una propuesta, avisar de un vencimiento) — y en cuanto el cliente responde algo que necesita criterio, entra tu equipo. El cliente nota que le contestan rápido, no que le contesta una máquina.",
    },
    {
        question: "¿Esto vale para mi sector?",
        answer: "Si vendes con presupuestos, seguimiento y facturas, sí — da igual que seas gestoría, empresa de servicios, academia o consultora. Los flujos se montan sobre tu proceso real, no sobre una plantilla; por eso el primer paso es la auditoría gratuita de 30 minutos.",
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
    "name": "Automatización de ventas para pymes",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "areaServed": "España",
    "description": "Automatización del ciclo comercial: respuesta inmediata a leads, calificación, seguimiento automático, propuestas y facturación. Desde 500€ por flujo; ciclo completo desde 2.000€.",
};

const pasos = [
    {
        num: "01",
        titulo: "El lead, respondido en minutos",
        desc: "Entra por la web, el email o WhatsApp y recibe respuesta al momento — con sus datos ya registrados. Un lead sin respuesta rápida se enfría o se va a la competencia.",
    },
    {
        num: "02",
        titulo: "Seguimiento que no se olvida",
        desc: "Recordatorios y toques automáticos con tu tono: la propuesta que lleva una semana sin respuesta, el cliente que se enfría, el vencimiento que se acerca. Nada depende de la memoria de nadie.",
    },
    {
        num: "03",
        titulo: "Propuestas y facturas sin picar datos",
        desc: "La propuesta sale de una plantilla con los datos del cliente ya puestos; al cerrar, la factura se emite y se envía sola. Del sí al cobro sin administración manual.",
    },
    {
        num: "04",
        titulo: "Y tú viendo el embudo entero",
        desc: "Qué hay abierto, qué se ha enfriado y qué está a punto de cerrar — visible sin montar informes a mano. Para dirigir la venta con datos, no con sensaciones.",
    },
];

export default function AutomatizacionVentasPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header />

            <section style={{
                padding: "9rem 0 3.5rem",
                background: "radial-gradient(circle at 20% 20%, rgba(234, 88, 12, 0.07) 0%, transparent 55%)",
            }}>
                <div className="container">
                    <span className="kicker-mono">
                        <i className="fa-solid fa-chart-line" style={{ marginRight: "0.6rem" }}></i>
                        Automatización de ventas
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
                        Menos picar datos,{" "}<br />
                        <span style={{ color: "var(--color-primary)" }}>más cerrar ventas</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 660 }}>
                        Tu equipo comercial no está para copiar datos ni perseguir recordatorios:
                        está para vender. Automatizo el ciclo entero — del lead que entra al cobro
                        que sale — para que las horas se vayan en conversaciones, no en administración.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.02rem", padding: "1rem 2.25rem" }}>
                        Ver mi ciclo de ventas — 30 min gratis
                    </Link>
                </div>
            </section>

            {/* Salta entre las piezas de sistemas sin volver atras */}
            <SistemasTabs />

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
                        Automatización de ventas para pymes: leads respondidos en minutos,
                        seguimiento automático, propuestas en un clic y facturación sola — desde
                        500€ el flujo concreto, desde 2.000€ el ciclo comercial completo.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        Sobre tus herramientas de hoy o sobre un CRM bien implantado — y siempre
                        con tu tono en cada mensaje: el cliente nota que le contestan rápido,
                        no que le contesta una máquina.
                    </p>
                </div>
            </section>

            <section style={{ padding: "4.5rem 0", background: "linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Cómo queda tu ciclo</span>
                    <h2 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                        fontWeight: 600,
                        color: "#faf6ef",
                        margin: "0.8rem 0 2rem",
                        lineHeight: 1.2,
                    }}>
                        Del lead al cobro, sin trabajo manual
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
                        Las piezas de este ciclo viven en{" "}
                        <Link href="/sistemas" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            automatización de procesos
                        </Link>
                        ,{" "}
                        <Link href="/sistemas/crm" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            implantación de CRM
                        </Link>{" "}
                        y{" "}
                        <Link href="/sistemas/chatbots-whatsapp" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            chatbots de WhatsApp
                        </Link>{" "}
                        — aquí se montan juntas para vender.
                    </p>
                </div>
            </section>

            <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Preguntas frecuentes
                        </h2>
                    </div>
                    {faqs.map((f) => (
                        <details key={f.question} className="av-faq">
                            <summary>
                                <span>{f.question}</span>
                                <i className="fas fa-chevron-down"></i>
                            </summary>
                            <p style={{ padding: "0 0.4rem 1.5rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0, maxWidth: 720 }}>{f.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

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
                        ¿Cuántas ventas se te enfrían por no llegar a tiempo?
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos gratis: repasamos tu ciclo de ventas y te digo qué automatizar primero.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir mis 30 minutos
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .av-faq { border-top: 1px solid var(--color-border); }
                .av-faq:last-of-type { border-bottom: 1px solid var(--color-border); }
                .av-faq summary {
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
                .av-faq summary::-webkit-details-marker { display: none; }
                .av-faq summary:hover { color: var(--color-primary); padding-left: 1rem; }
                .av-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .av-faq[open] summary i { transform: rotate(180deg); }
                @media (max-width: 600px) { h1 br { display: none; } }
            `}</style>
        </main>
    );
}
