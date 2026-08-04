import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Chatbots para Empresas con IA",
    description:
        "Chatbots para empresas que resuelven de verdad: conectados a tu agenda, CRM o catálogo, con escalado a persona. Desde 2.000€, el bot es tuyo.",
    alternates: { canonical: "https://automatizatelo.com/servicios/chatbots" },
    openGraph: {
        title: "Chatbots que resuelven, no que contestan bonito",
        description: "WhatsApp y web, conectados a tus sistemas, con escalado a persona. El código es tuyo.",
        url: "https://automatizatelo.com/servicios/chatbots",
    },
};

const faqs = [
    {
        question: "¿Qué diferencia hay entre vuestro bot y uno de esos que se configuran solos?",
        answer: "Que el mío está conectado a tu negocio. Un bot suelto contesta bonito pero no resuelve nada: el valor está en que consulte tu agenda real para dar cita, tu sistema para responder por un expediente o tu catálogo para informar de un producto. Por eso no vendo bots sueltos: los construyo dentro de un proyecto que los conecta a lo que ya usas.",
    },
    {
        question: "¿El cliente sabe que habla con un bot?",
        answer: "Sí, siempre — y no solo porque lo exige la normativa de transparencia: porque funciona mejor. El bot se presenta como asistente automático, resuelve lo que sabe resolver y escala a una persona lo que no. Un bot que se hace pasar por humano genera desconfianza justo cuando falla.",
    },
    {
        question: "¿Y si el bot no sabe responder?",
        answer: "Escala a una persona, con el contexto de la conversación ya recogido para que nadie tenga que empezar de cero. El objetivo no es que el bot lo conteste todo: es que resuelva lo repetitivo (el 70-80% de las consultas suelen ser las mismas) y deje a tu equipo lo que de verdad necesita criterio humano.",
    },
    {
        question: "¿Cuánto cuesta un chatbot?",
        answer: "Un bot útil forma parte de un proyecto de automatización de área, desde 2.000€, porque necesita conectarse a tu agenda, CRM o catálogo para servir de algo. El precio se cierra por escrito antes de empezar, y el bot — como todo lo que construyo — queda en tu propiedad.",
    },
    {
        question: "¿Funciona con WhatsApp de verdad?",
        answer: "Sí — y de la manera correcta: con la vía oficial para empresas, no con trucos que acaban en número bloqueado. También en la web de tu empresa, o en ambos canales compartiendo el mismo cerebro. Todo el detalle del canal WhatsApp (alta, plantillas, costes) tiene página propia en chatbots de WhatsApp.",
    },
    {
        question: "¿El bot puede atender en varios idiomas?",
        answer: "Sí, y sin configurar nada raro: los bots con IA entienden y responden en el idioma en que les escriben — castellano, catalán, inglés o el que use tu cliente. Para negocios con clientela internacional o en zonas bilingües es una de las ventajas más inmediatas frente a los bots de reglas.",
    },
    {
        question: "¿Puedo ver lo que el bot habla con mis clientes?",
        answer: "Siempre. Todas las conversaciones quedan registradas y accesibles para tu equipo — para supervisar, para retomar una conversación escalada con todo el contexto, y para detectar qué preguntas nuevas conviene enseñarle. Un bot que no se puede auditar no es un bot serio.",
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
    "name": "Chatbots de WhatsApp y web para empresas",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "areaServed": "España",
    "description": "Chatbots conectados a los sistemas de la empresa (agenda, CRM, catálogo), con escalado a persona y transparencia. Dentro de proyectos de automatización desde 2.000€.",
};

const capacidades = [
    {
        num: "01",
        titulo: "Atiende 24/7 y da citas de verdad",
        desc: "Consulta tu agenda real y reserva, confirma o recoloca citas — con recordatorios que reducen las ausencias y lista de espera que rellena los huecos.",
    },
    {
        num: "02",
        titulo: "Responde lo repetitivo",
        desc: "Horarios, precios, estado de una gestión, preguntas frecuentes de tu negocio. Lo que hoy contesta tu equipo una y otra vez, contestado al momento.",
    },
    {
        num: "03",
        titulo: "Avisa y hace seguimiento",
        desc: "Confirmaciones, recordatorios y avisos automáticos por WhatsApp o email — para que ningún cliente se quede sin respuesta a tiempo.",
    },
    {
        num: "04",
        titulo: "Escala a persona con contexto",
        desc: "Cuando la consulta necesita criterio humano, pasa a tu equipo con toda la conversación recogida. Nadie repite su historia dos veces.",
    },
];

export default function ChatbotsPage() {
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
                        <i className="fa-solid fa-robot" style={{ marginRight: "0.6rem" }}></i>
                        Chatbots · WhatsApp y web
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
                        Chatbots que resuelven,{" "}<br />
                        <span style={{ color: "var(--color-primary)" }}>no que contestan bonito</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 640 }}>
                        Un bot suelto es un juguete. Un bot conectado a tu agenda, tu CRM o tu
                        catálogo es un empleado que no duerme: da citas reales, responde por
                        expedientes reales y escala a tu equipo cuando toca.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.02rem", padding: "1rem 2.25rem" }}>
                        Ver si un bot te encaja — 30 min gratis
                    </Link>
                </div>
            </section>

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
                        Chatbots para empresas con IA — en tu web, en WhatsApp o en ambos —
                        conectados a tus sistemas y con escalado a persona, dentro de proyectos
                        de automatización desde 2.000€. El bot, como todo lo que construyo,
                        queda en tu propiedad.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        Ya atienden a diario en negocios reales: en una clínica estética gestionan
                        reservas, recordatorios y lista de espera; en una empresa de comedores
                        escolares de Cataluña, las ausencias y las dudas de las familias.
                    </p>
                </div>
            </section>

            {/* Bots de reglas vs bots con IA */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">La diferencia</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            Bot de reglas vs bot con IA
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                            No todos los chatbots para empresas son iguales — y la diferencia se nota en la primera pregunta rara.
                        </p>
                    </div>
                    <div className="cb-vs">
                        <div className="cb-vs-col">
                            <h3>Bot de reglas (el de siempre)</h3>
                            <ul>
                                <li>Menú de opciones: "pulsa 1, pulsa 2"</li>
                                <li>Si la pregunta no está prevista, se atasca</li>
                                <li>Un solo idioma, frases exactas</li>
                                <li>No consulta tus sistemas: contesta de memoria</li>
                            </ul>
                        </div>
                        <div className="cb-vs-col cb-vs-ia">
                            <h3>Bot con IA (lo que construyo)</h3>
                            <ul>
                                <li>Entiende la pregunta como la escriba el cliente</li>
                                <li>Consulta tu agenda, CRM o catálogo antes de responder</li>
                                <li>Responde en el idioma del cliente</li>
                                <li>Y cuando no sabe, escala a tu equipo con el contexto</li>
                            </ul>
                        </div>
                    </div>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginTop: "1.2rem", maxWidth: 720, fontSize: "0.92rem" }}>
                        El de reglas es más barato y a veces suficiente — si tu caso es de esos, te lo diré.
                        Pero el que ahorra horas de verdad es el que se conecta a tu negocio.
                    </p>
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
                        Un empleado que no duerme (y no improvisa)
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
                        Los casos con detalle, en{" "}
                        <Link href="/casos-de-exito" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            casos de éxito
                        </Link>
                        ; y si el bot es parte de algo mayor, mira la{" "}
                        <Link href="/servicios/automatizacion" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            automatización de procesos
                        </Link>.
                    </p>
                </div>
            </section>

            {/* Puente a la versión WhatsApp */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div className="cb-wa">
                        <div>
                            <span className="mono-label" style={{ color: "var(--color-text-muted)" }}>
                                <i className="fa-brands fa-whatsapp" style={{ marginRight: "0.5rem", color: "#25D366" }}></i>
                                ¿Lo quieres en WhatsApp?
                            </span>
                            <p style={{ color: "var(--color-text-main)", fontWeight: 500, margin: "0.4rem 0 0", lineHeight: 1.55 }}>
                                El canal donde ya te escriben tus clientes tiene página propia: API oficial,
                                plantillas aprobadas y cero riesgo de número bloqueado.
                            </p>
                        </div>
                        <Link href="/servicios/chatbots-whatsapp" className="btn cb-wa-btn">
                            Chatbots de WhatsApp →
                        </Link>
                    </div>
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
                        <details key={f.question} className="cb-faq">
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
                        ¿Qué contestaría un bot en tu negocio?
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos gratis: repasamos tus consultas repetitivas y te digo si un bot te compensa — o no.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir mis 30 minutos
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .cb-vs {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.2rem;
                }
                .cb-vs-col {
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    padding: 1.6rem 1.6rem;
                }
                .cb-vs-ia {
                    background: linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%);
                    border: none;
                }
                .cb-vs-col h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    margin-bottom: 0.9rem;
                }
                .cb-vs-ia h3 { color: #faf6ef; }
                .cb-vs-col ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.55rem;
                }
                .cb-vs-col li {
                    font-size: 0.92rem;
                    line-height: 1.5;
                    color: var(--color-text-muted);
                    padding-left: 1.3rem;
                    position: relative;
                }
                .cb-vs-col li::before {
                    content: "✕";
                    position: absolute;
                    left: 0;
                    color: var(--color-text-muted);
                    font-weight: 700;
                }
                .cb-vs-ia li { color: rgba(250,246,239,0.88); }
                .cb-vs-ia li::before {
                    content: "✓";
                    color: #f6c39c;
                }
                @media (max-width: 700px) {
                    .cb-vs { grid-template-columns: 1fr; }
                }
                .cb-wa {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1.5rem;
                    padding: 1.4rem 1.8rem;
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    background: var(--color-bg-secondary);
                }
                .cb-wa-btn {
                    border: 1px solid var(--color-border);
                    color: var(--color-text-main);
                    background: transparent;
                    font-size: 0.95rem;
                    padding: 0.8rem 1.8rem;
                    white-space: nowrap;
                }
                .cb-wa-btn:hover {
                    border-color: var(--color-primary);
                    color: var(--color-primary);
                }
                @media (max-width: 700px) {
                    .cb-wa {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                }
                .cb-faq {
                    border-top: 1px solid var(--color-border);
                }
                .cb-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .cb-faq summary {
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
                .cb-faq summary::-webkit-details-marker {
                    display: none;
                }
                .cb-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .cb-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .cb-faq[open] summary i {
                    transform: rotate(180deg);
                }
                @media (max-width: 600px) {
                    h1 br { display: none; }
                }
            `}</style>
        </main>
    );
}
