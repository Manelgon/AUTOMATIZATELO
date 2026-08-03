import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Implantar ChatGPT, Copilot o Gemini en tu Empresa",
    description:
        "Puesta en marcha de herramientas de IA en tu pyme: elección, configuración segura, casos de uso por puesto, política y formación. Desde 900€, sin comisiones de nadie.",
    alternates: { canonical: "https://automatizatelo.com/servicios/implantacion-ia" },
    openGraph: {
        title: "ChatGPT, Copilot o Gemini en marcha en tu empresa — con cabeza",
        description: "Elección sin comisiones, configuración segura, casos de uso por puesto, política y formación. Desde 900€.",
        url: "https://automatizatelo.com/servicios/implantacion-ia",
    },
};

const faqs = [
    {
        question: "¿Qué herramienta es mejor: ChatGPT, Copilot o Gemini?",
        answer: "La que encaje con lo que ya usáis. Si vivís en Microsoft 365, Copilot juega en casa; si trabajáis en Google Workspace, Gemini; si queréis el asistente más versátil sin casaros con una suite, ChatGPT. No cobro comisión de ningún proveedor, así que la respuesta sale de tu caso, no de mi bolsillo. En la sesión inicial se decide con criterio y por escrito.",
    },
    {
        question: "¿Qué incluye la implantación exactamente?",
        answer: "Cuatro cosas: elección y contratación de la herramienta adecuada (plan de empresa, no cuentas gratuitas), configuración segura (cuentas, permisos, y que el proveedor no entrene con vuestros datos), casos de uso por puesto (qué le pide cada rol para ahorrar tiempo de verdad, con plantillas de prompts propias) y el arranque con el equipo. Con el pack completo se añaden la política de uso y la formación del Art. 4.",
    },
    {
        question: "¿Cuánto cuesta?",
        answer: "La puesta en marcha, desde 900€ para un equipo pequeño: herramienta elegida, configurada de forma segura y equipo arrancado con sus casos de uso. Con política de uso y formación de alfabetización incluidas, la mayoría de proyectos queda entre 1.500€ y 3.000€ según plantilla. Las licencias de la herramienta las pagas directamente al proveedor — sin sobreprecio ni comisión mía.",
    },
    {
        question: "¿Es seguro meter la IA en la empresa? ¿Y nuestros datos?",
        answer: "Depende de cómo se haga — que es justo el sentido de este servicio. Con planes de empresa bien configurados, los proveedores serios no entrenan sus modelos con tus datos y ofrecen garantías contractuales. Lo peligroso es lo que probablemente ya pasa hoy: cuentas gratuitas personales con datos de clientes dentro. La implantación ordena eso.",
    },
    {
        question: "¿Necesito el plan Enterprise o me vale uno más barato?",
        answer: "Casi ninguna pyme necesita Enterprise. Los planes de equipo (ChatGPT Team, Copilot para M365, Gemini para Workspace) ya incluyen lo esencial: los datos no entrenan modelos y hay gestión centralizada. Te recomendaré el plan más barato que cumpla — pagar de más al proveedor no me da nada.",
    },
    {
        question: "¿Cuánto se tarda en tenerlo funcionando?",
        answer: "La puesta en marcha básica, una o dos semanas: sesión inicial, configuración, y arranque con el equipo. Con formación y política, según el calendario que se acuerde — normalmente todo queda rodando en menos de un mes.",
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
    "name": "Implantación de herramientas de IA en empresas",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "areaServed": "España",
    "description": "Puesta en marcha de ChatGPT, Microsoft Copilot, Gemini y otras herramientas de IA en pymes: elección sin comisiones, configuración segura, casos de uso por puesto, política de uso y formación.",
    "offers": [
        { "@type": "Offer", "name": "Puesta en marcha", "price": "900", "priceCurrency": "EUR", "description": "Precio desde; se cierra en la propuesta." },
    ],
};

const herramientas = [
    { nombre: "ChatGPT", detalle: "El asistente más versátil. Plan Team para que tus datos no entrenen modelos." },
    { nombre: "Microsoft Copilot", detalle: "Si vivís en Word, Excel y Outlook, la IA juega en casa." },
    { nombre: "Google Gemini", detalle: "La opción natural para empresas en Google Workspace." },
    { nombre: "Claude", detalle: "Excelente redactando y analizando documentos largos." },
    { nombre: "NotebookLM", detalle: "Tu documentación interna, convertida en un experto al que preguntar." },
];

const pasos = [
    {
        num: "01",
        titulo: "Elección con criterio",
        desc: "Miro qué usáis ya (Microsoft, Google, nada) y qué necesita cada puesto, y te digo qué herramienta y qué plan — el más barato que cumpla. Sin comisiones de ningún proveedor.",
    },
    {
        num: "02",
        titulo: "Configuración segura",
        desc: "Cuentas de empresa, permisos, y la configuración que garantiza que el proveedor no entrena con vuestros datos. Se acaban las cuentas gratuitas personales con datos de clientes.",
    },
    {
        num: "03",
        titulo: "Casos de uso por puesto",
        desc: "Cada rol sale sabiendo qué pedirle a la IA en SU trabajo: administración, comercial, atención al cliente… Con plantillas de prompts propias de tu empresa, no genéricas.",
    },
    {
        num: "04",
        titulo: "Política y formación (pack)",
        desc: "La política de uso de IA redactada para tu empresa y la formación del Art. 4 con certificados — para que la implantación además te deje cumpliendo la ley.",
    },
];

export default function ImplantacionIAPage() {
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
                        <i className="fa-solid fa-rocket" style={{ marginRight: "0.6rem" }}></i>
                        Implantación de herramientas IA
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
                        ChatGPT, Copilot o Gemini{" "}<br />
                        <span style={{ color: "var(--color-primary)" }}>en marcha en tu empresa</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 660 }}>
                        Comprar licencias es fácil; que el equipo las use bien, con datos seguros y
                        cumpliendo la ley, es lo difícil. Yo me encargo de todo el camino: elección,
                        configuración, casos de uso por puesto y arranque del equipo.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.02rem", padding: "1rem 2.25rem" }}>
                        Empezar con 30 minutos gratis
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
                        Implanto la herramienta de IA adecuada en tu pyme — elegida sin comisiones,
                        configurada de forma segura y con el equipo formado en sus casos de uso —
                        desde 900€. Con política de uso y formación del Art. 4, entre 1.500€ y 3.000€.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        Las licencias las pagas directamente al proveedor, sin sobreprecio. Yo no vendo
                        herramientas: vendo que funcionen en tu empresa.
                    </p>
                </div>
            </section>

            {/* Herramientas */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Con qué trabajo</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            Las herramientas — elegidas por tu caso, no por moda
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                            No cobro comisión de ninguna: la recomendación sale de lo que ya usáis y de lo que necesita cada puesto.
                        </p>
                    </div>
                    {herramientas.map((h) => (
                        <div key={h.nombre} className="ii-fila">
                            <span className="ii-nombre">{h.nombre}</span>
                            <span className="ii-detalle">{h.detalle}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Qué incluye — franja terracota */}
            <section style={{ padding: "4.5rem 0", background: "linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Qué incluye</span>
                    <h2 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                        fontWeight: 600,
                        color: "#faf6ef",
                        margin: "0.8rem 0 2rem",
                        lineHeight: 1.2,
                    }}>
                        De cero a equipo usando IA, en cuatro pasos
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
                        El paso 04 conecta con la{" "}
                        <Link href="/servicios/auditoria-ia" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            auditoría IA
                        </Link>{" "}
                        y la{" "}
                        <Link href="/servicios/formacion-ia-empresas" style={{ color: "#f6c39c", fontWeight: 600 }}>
                            formación
                        </Link>
                        : si ya has hecho una de las dos, la implantación se abarata — no se paga dos veces lo mismo.
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
                        <details key={f.question} className="ii-faq">
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
                        ¿Qué herramienta le toca a tu empresa?
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos gratis: te digo cuál, qué plan y qué costaría dejarla rodando.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir mis 30 minutos
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .ii-fila {
                    display: grid;
                    grid-template-columns: 220px 1fr;
                    gap: 1.5rem;
                    align-items: baseline;
                    padding: 1.3rem 0.3rem;
                    border-top: 1px solid var(--color-border);
                }
                .ii-fila:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .ii-nombre {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.15rem, 2vw, 1.45rem);
                    font-weight: 600;
                    color: var(--color-text-main);
                }
                .ii-detalle {
                    color: var(--color-text-muted);
                    line-height: 1.6;
                    font-size: 0.95rem;
                }
                .ii-faq {
                    border-top: 1px solid var(--color-border);
                }
                .ii-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .ii-faq summary {
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
                .ii-faq summary::-webkit-details-marker {
                    display: none;
                }
                .ii-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .ii-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .ii-faq[open] summary i {
                    transform: rotate(180deg);
                }
                @media (max-width: 700px) {
                    .ii-fila {
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
