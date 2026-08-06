import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SistemasTabs from "@/components/SistemasTabs";

export const metadata: Metadata = {
    title: "Chatbots para Empresas: WhatsApp y Web",
    description:
        "Chatbots para tu empresa en WhatsApp (API oficial) y en tu web: citas, avisos y dudas resueltas 24/7, conectados a tu sistema y con escalado a persona. Desde 2.000€.",
    alternates: { canonical: "https://automatizatelo.com/sistemas/chatbots-whatsapp" },
    openGraph: {
        title: "Chatbot de WhatsApp con API oficial — sin números bloqueados",
        description: "Citas, avisos y dudas resueltas en el canal que todo el mundo usa. Conectado a tu negocio, con escalado a persona.",
        url: "https://automatizatelo.com/sistemas/chatbots-whatsapp",
    },
};

const faqs = [
    {
        question: "¿Me pueden bloquear el número de WhatsApp por usar un bot?",
        answer: "Con atajos, sí — y pasa constantemente: las herramientas que automatizan WhatsApp sin la API oficial violan las condiciones de Meta y el número de la empresa acaba bloqueado, con todos los chats dentro. Yo trabajo solo con la API oficial de WhatsApp Business: número verificado, plantillas de mensaje aprobadas y cero riesgo de perder el canal por el que te habla media clientela.",
    },
    {
        question: "¿Qué necesito para tener un chatbot en WhatsApp?",
        answer: "Un número para la API de WhatsApp Business (puede ser uno nuevo o migrar el actual — te acompaño en el alta con Meta) y los accesos a lo que el bot deba consultar: agenda, CRM o catálogo. Del resto — configuración, conversaciones, plantillas y conexión con tus sistemas — me encargo yo.",
    },
    {
        question: "¿Cuánto cuesta un chatbot de WhatsApp?",
        answer: "El bot forma parte de un proyecto de automatización desde 2.000€, porque su valor está en conectarlo a tu agenda o tu sistema — un bot que no consulta nada solo contesta bonito. Aparte están las tarifas de conversación de Meta, que son céntimos y se pagan directamente a Meta: sin sobreprecio ni comisión mía, como todo lo que hago.",
    },
    {
        question: "¿Puedo seguir atendiendo yo desde el mismo número?",
        answer: "Sí — y así es como debe funcionar: el bot resuelve lo repetitivo (el 70-80% de las consultas suelen ser las mismas) y cuando la conversación necesita criterio humano, la pasa a tu equipo con todo el contexto recogido. El cliente no repite su historia y tú solo entras donde aportas.",
    },
    {
        question: "¿El cliente sabrá que habla con un bot?",
        answer: "Sí, siempre — el bot se presenta como asistente automático. Desde agosto de 2026 lo exige además el artículo 50 del Reglamento Europeo de IA, pero lo haría igual: un bot que se hace pasar por humano genera desconfianza justo cuando falla. La transparencia funciona mejor y te deja en regla.",
    },
    {
        question: "¿Cuánto se tarda en tenerlo funcionando?",
        answer: "El alta de la API con Meta suele llevar unos días; el bot conectado a tus sistemas, entre dos y cuatro semanas según lo que tenga que consultar. Precio y plazo cerrados por escrito antes de empezar, como siempre.",
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
    "name": "Chatbot de WhatsApp para empresas (API oficial)",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "areaServed": "España",
    "description": "Chatbots de WhatsApp con la API oficial de WhatsApp Business: citas, avisos y dudas resueltas 24/7, conectados a los sistemas de la empresa y con escalado a persona. Dentro de proyectos desde 2.000€.",
};

const capacidades = [
    {
        num: "01",
        titulo: "Da citas desde el propio chat",
        desc: "Consulta tu agenda real, propone huecos, confirma y recoloca — con recordatorios que reducen ausencias y lista de espera que rellena los huecos liberados.",
    },
    {
        num: "02",
        titulo: "Responde lo repetitivo al momento",
        desc: "Horarios, precios, estado de una gestión, preguntas frecuentes. Lo que hoy contesta tu equipo cien veces, contestado en segundos a cualquier hora.",
    },
    {
        num: "03",
        titulo: "Avisa sin que nadie escriba",
        desc: "Confirmaciones, recordatorios, avisos de estado — mensajes con plantillas aprobadas por Meta que salen solos cuando toca.",
    },
    {
        num: "04",
        titulo: "Escala a tu equipo con contexto",
        desc: "Cuando hace falta una persona, la conversación pasa a tu equipo con todo lo hablado. El cliente no repite; tu equipo no empieza de cero.",
    },
];

export default function ChatbotsWhatsappPage() {
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
                        <i className="fa-brands fa-whatsapp" style={{ marginRight: "0.6rem" }}></i>
                        Chatbot de WhatsApp · API oficial
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
                        Tu empresa, atendiendo por{" "}<br />
                        <span style={{ color: "var(--color-primary)" }}>WhatsApp a cualquier hora</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 660 }}>
                        WhatsApp es donde ya te escriben tus clientes. Un chatbot con la API oficial
                        les da cita, resuelve sus dudas y les avisa de lo importante — conectado a tu
                        agenda y tus sistemas, y pasando a tu equipo lo que necesite una persona.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.02rem", padding: "1rem 2.25rem" }}>
                        Ver si te encaja — 30 min gratis
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
                        Chatbot en el WhatsApp de tu empresa con la API oficial de WhatsApp
                        Business: citas, avisos y dudas resueltas 24/7, dentro de proyectos desde
                        2.000€ — sin riesgo de número bloqueado y con el bot en tu propiedad.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        Ya funciona a diario en negocios reales: en una clínica estética gestiona
                        reservas, recordatorios y lista de espera; en una empresa de comedores
                        escolares de Cataluña, cientos de familias avisan ausencias y resuelven
                        dudas sin colapsar a la administración.
                    </p>
                </div>
            </section>

            {/* API oficial vs atajos */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Lo que nadie te cuenta</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            API oficial o número bloqueado
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                            Hay dos maneras de montar un bot en WhatsApp — y una de ellas acaba con el número de tu empresa bloqueado.
                        </p>
                    </div>
                    <div className="cw-vs">
                        <div className="cw-vs-col">
                            <h3>Los atajos (lo barato que sale caro)</h3>
                            <ul>
                                <li>Automatizan un WhatsApp normal contra las condiciones de Meta</li>
                                <li>Un día el número amanece bloqueado — con todos los chats dentro</li>
                                <li>Sin plantillas aprobadas: los avisos masivos son ruleta rusa</li>
                                <li>Sin verificación de empresa: menos confianza del cliente</li>
                            </ul>
                        </div>
                        <div className="cw-vs-col cw-vs-ok">
                            <h3>La API oficial (lo que uso)</h3>
                            <ul>
                                <li>WhatsApp Business API: la vía que Meta diseñó para empresas</li>
                                <li>Número verificado y estable — el canal es tuyo y lo seguirá siendo</li>
                                <li>Plantillas de mensaje aprobadas para avisos y recordatorios</li>
                                <li>Costes de conversación de céntimos, pagados a Meta sin sobreprecio</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Qué hace — franja terracota */}
            <section style={{ padding: "4.5rem 0", background: "linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Qué hace</span>
                    <h2 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                        fontWeight: 600,
                        color: "#faf6ef",
                        margin: "0.8rem 0 2rem",
                        lineHeight: 1.2,
                    }}>
                        Todo lo que tu WhatsApp puede hacer solo
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                        {capacidades.map((c) => (
                            <div key={c.num}>
                                <span className="mono-label" style={{ color: "#f6c39c" }}>{c.num}</span>
                                <h3 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "1.25rem",
                                    fontWeight: 600,
                                    color: "#faf6ef",
                                    margin: "0.5rem 0 0.5rem",
                                    lineHeight: 1.3,
                                }}>
                                    {c.titulo}
                                </h3>
                                <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.6, margin: 0, fontSize: "0.95rem" }}>
                                    {c.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.7, marginTop: "2rem", maxWidth: 720 }}>
                        Y siempre identificándose como asistente automático — lo exige el Art. 50 del
                        Reglamento Europeo de IA desde agosto de 2026, y además funciona mejor.
                        ¿Dudas entre canales? La visión completa está en{" "}
                        <Link href="/sistemas/chatbots-whatsapp" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            chatbots para empresas
                        </Link>
                        , y los casos con detalle en{" "}
                        <Link href="/casos" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            casos de éxito
                        </Link>.
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
                        <details key={f.question} className="cw-faq">
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
                        Tus clientes ya están en WhatsApp. ¿Y tu empresa?
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos gratis: repasamos qué te escriben y te digo qué resolvería un bot — y qué no.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir mis 30 minutos
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .cw-vs {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.2rem;
                }
                .cw-vs-col {
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    padding: 1.6rem 1.6rem;
                }
                .cw-vs-ok {
                    background: linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%);
                    border: none;
                }
                .cw-vs-col h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    margin-bottom: 0.9rem;
                }
                .cw-vs-ok h3 { color: #faf6ef; }
                .cw-vs-col ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.55rem;
                }
                .cw-vs-col li {
                    font-size: 0.92rem;
                    line-height: 1.5;
                    color: var(--color-text-muted);
                    padding-left: 1.3rem;
                    position: relative;
                }
                .cw-vs-col li::before {
                    content: "✕";
                    position: absolute;
                    left: 0;
                    color: var(--color-text-muted);
                    font-weight: 700;
                }
                .cw-vs-ok li { color: rgba(250,246,239,0.88); }
                .cw-vs-ok li::before {
                    content: "✓";
                    color: #f6c39c;
                }
                @media (max-width: 700px) {
                    .cw-vs { grid-template-columns: 1fr; }
                }
                .cw-faq {
                    border-top: 1px solid var(--color-border);
                }
                .cw-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .cw-faq summary {
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
                .cw-faq summary::-webkit-details-marker {
                    display: none;
                }
                .cw-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .cw-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .cw-faq[open] summary i {
                    transform: rotate(180deg);
                }
                @media (max-width: 600px) {
                    h1 br { display: none; }
                }
            `}</style>
        </main>
    );
}
