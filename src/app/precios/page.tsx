import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Precios: Implantación de IA para Pymes",
    description:
        "Cuánto cuesta implantar IA en tu pyme: formación desde 600€, auditoría del AI Act desde 750€ y automatización desde 900€. Precio cerrado por escrito.",
    alternates: { canonical: "https://automatizatelo.com/precios" },
    openGraph: {
        title: "¿Cuánto cuesta automatizar tu negocio? Precios públicos",
        description: "Proyectos desde 500€, formación desde 600€. Precio y plazo cerrados antes de empezar, sin permanencia.",
        url: "https://automatizatelo.com/precios",
    },
};

const proyectos = [
    {
        name: "Poner en marcha",
        price: "900",
        description: "La primera pieza funcionando: las herramientas de IA, un CRM o los flujos que más tiempo te comen.",
        highlight: false,
        features: [
            "Herramientas de IA elegidas y configuradas",
            "O el CRM implantado y migrado",
            "Casos de uso por puesto y arranque del equipo",
            "Una automatización suelta, desde 500€",
        ],
    },
    {
        name: "Un área completa",
        price: "2.000",
        description: "Ventas, clientes u operaciones funcionando solos, de principio a fin.",
        highlight: true,
        features: [
            "Hasta 5 procesos automatizados",
            "Chatbot de WhatsApp o web conectado a tus sistemas",
            "Panel de gestión a medida",
            "Facturas y documentos, en los dos sentidos",
            "3 meses de soporte incluido",
        ],
    },
    {
        name: "La empresa entera",
        price: "8.000",
        description: "El sistema completo: todo conectado, todo trabajando solo.",
        highlight: false,
        features: [
            "Automatización integral de la operativa",
            "Integraciones ilimitadas entre sistemas",
            "Panel de control y métricas en tiempo real",
            "Formación del equipo incluida",
            "6 meses de soporte y mantenimiento",
        ],
    },
];

const formacion = [
    {
        name: "Alfabetización en IA (Art. 4)",
        price: "600",
        description: "El bloque de cumplimiento del AI Act, para toda la plantilla.",
        highlight: false,
        features: [
            "4–8 horas, presencial o en remoto",
            "Qué es la IA, riesgos y uso responsable",
            "Certificado nominal por participante",
            "Registro formativo fechado (la evidencia)",
        ],
    },
    {
        name: "Curso estrella: Alfabetización + herramienta",
        price: "1.200",
        description: "El formato que mejor funciona: el bloque obligatorio del Art. 4 y un taller práctico con la herramienta que ya usa tu equipo.",
        highlight: true,
        features: [
            "Sesión 1: alfabetización del Art. 4 (obligatoria)",
            "Sesión 2: ChatGPT, Copilot o Gemini con vuestros casos",
            "Desde 4 + 4 horas, adaptable por equipo",
            "Certificado nominal y registro formativo",
        ],
    },
    {
        name: "Taller intensivo",
        price: "900",
        description: "Un día, un tema, saliendo con cosas montadas para tu trabajo.",
        highlight: false,
        features: [
            "1 día completo (8 horas)",
            "Práctico: cada equipo con sus casos",
            "Herramientas de IA aplicadas al puesto",
            "Material y certificado incluidos",
        ],
    },
    {
        name: "Programa in-company",
        price: "2.400",
        description: "Varias semanas, con trabajo real aplicado entre sesiones.",
        highlight: false,
        features: [
            "16 horas en 4 semanas",
            "Para mandos y equipos completos",
            "Trabajo aplicado entre sesión y sesión",
            "Evidencia documental completa",
        ],
    },
    {
        name: "Curso e-learning (SCORM)",
        price: "1.900",
        description: "Tu formación producida como curso, en tu plataforma para siempre.",
        highlight: false,
        features: [
            "Producción a medida en formato SCORM",
            "Instalado en la plataforma de tu empresa",
            "Registro individual de cada alumno",
            "Se queda en tu propiedad",
        ],
    },
];

const auditoria = [
    {
        name: "Diagnóstico AI Act",
        price: "750",
        description: "¿Tu empresa cumple el Reglamento Europeo de IA? Te lo digo con un informe.",
        highlight: false,
        features: [
            "Inventario de la IA en uso real",
            "Clasificación de riesgos según el Reglamento",
            "Informe + plan de acción priorizado",
            "Entrega en 1–2 semanas",
        ],
    },
    {
        name: "Pack cumplimiento",
        price: "1.800",
        description: "El diagnóstico + lo que hace falta para dejarlo cerrado.",
        highlight: true,
        features: [
            "Todo el diagnóstico AI Act",
            "Política de uso de IA redactada para tu empresa",
            "Formación Art. 4 con certificados nominales",
            "Evidencia documental completa",
        ],
    },
];

const variables = [
    {
        icon: "fa-diagram-project",
        titulo: "Cuántos procesos y cuántas herramientas",
        desc: "No cuesta lo mismo conectar dos herramientas que orquestar toda la operativa. Cada proceso y cada integración suman trabajo — y el presupuesto lo refleja tal cual.",
    },
    {
        icon: "fa-puzzle-piece",
        titulo: "Qué existe ya y qué hay que construir",
        desc: "Si tu negocio ya tiene CRM, agenda o facturación, automatizamos sobre ello. Si hay que construir el panel o el bot desde cero, es más proyecto — y se presupuesta como tal.",
    },
    {
        icon: "fa-users",
        titulo: "En formación: participantes y modalidad",
        desc: "Un taller para 8 personas en remoto no cuesta lo mismo que uno presencial para 30. La horquilla se cierra en la propuesta, con el número real de participantes.",
    },
    {
        icon: "fa-file-signature",
        titulo: "Lo que nunca varía",
        desc: "El precio y el plazo se cierran por escrito antes de empezar, se paga por hitos, no hay permanencia y el código y los datos son tuyos. Eso no se negocia — va de serie.",
    },
];

const faqs = [
    {
        question: "¿Cuánto cuesta automatizar un proceso en una pyme?",
        answer: "Poner en marcha la primera pieza — las herramientas de IA configuradas, un CRM implantado o los flujos que más tiempo te comen — parte de 900€; una automatización suelta y concreta (por ejemplo, unos avisos automáticos), desde 500€ con entrega en unas dos semanas. Automatizar un área completa (ventas, clientes u operaciones) parte de 2.000€, y el sistema integral para toda la empresa, de 8.000€.",
    },
    {
        question: "¿Cuánto cuesta un chatbot de atención al cliente?",
        answer: "Un bot de atención por WhatsApp o web no suele ir solo: forma parte de un proyecto de automatización de área, desde 2.000€, porque necesita conectarse a tu agenda, CRM o catálogo para ser útil de verdad. Un bot sin sistema detrás contesta bonito pero no resuelve nada.",
    },
    {
        question: "¿Por qué los precios son \"desde\"? ¿Cuándo sé el precio final?",
        answer: "Porque cada negocio tiene procesos y herramientas distintos. El \"desde\" marca el suelo real de cada tipo de proyecto; el precio final se cierra por escrito en la propuesta, antes de empezar, junto con el plazo. Sin sorpresas a mitad de proyecto.",
    },
    {
        question: "¿Hay permanencia o cuotas mensuales obligatorias?",
        answer: "No. Se paga por hitos de entrega y no hay permanencia. Todos los proyectos incluyen un periodo de soporte (de 1 a 6 meses según el tamaño); después, el mantenimiento es opcional — y como el código y los datos son tuyos, puedes seguir con cualquier proveedor.",
    },
    {
        question: "¿Cuánto cuesta la formación en IA para empresas?",
        answer: "El bloque de alfabetización del Art. 4 del AI Act (4-8 horas), desde 600€. Un taller intensivo de un día (8 horas), entre 900€ y 1.400€. Un programa in-company de 16 horas en varias semanas, desde 2.400€. Y un curso e-learning a medida en SCORM para tu plataforma, desde 1.900€. Siempre con certificado nominal y registro formativo.",
    },
    {
        question: "¿Cuánto cuesta la auditoría de cumplimiento del AI Act?",
        answer: "El diagnóstico — inventario de la IA en uso, clasificación de riesgos, informe y plan de acción — desde 750€. El pack completo, que añade la política de uso de IA redactada para tu empresa y la formación del Art. 4 con certificados, desde 1.800€. El precio final depende del tamaño de la empresa y de las herramientas en uso.",
    },
    {
        question: "¿El código y los datos son míos?",
        answer: "Sí, siempre. Todo lo que se construye para tu empresa — paneles, bots, automatizaciones — queda en tu propiedad, con sus datos y su código. Si mañana quieres cambiar de proveedor, te lo llevas todo.",
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

function Parrilla({ planes, cols4, cols2 }: { planes: typeof proyectos; cols4?: boolean; cols2?: boolean }) {
    return (
        <div className={`pp-grid ${cols4 ? "pp-grid-4" : ""} ${cols2 ? "pp-grid-2" : ""}`}>
            {planes.map((plan) => (
                <div key={plan.name} className={`pp-card ${plan.highlight ? "pp-destacado" : ""}`}>
                    <h3 className="pp-nombre">{plan.name}</h3>
                    <p className="pp-desc">{plan.description}</p>
                    <div className="pp-precio">
                        <span className="mono-label pp-desde">Desde</span>
                        <span className="pp-cifra">{plan.price}€</span>
                    </div>
                    <ul className="pp-lista">
                        {plan.features.map((f) => (
                            <li key={f}>
                                <i className="fa-solid fa-check"></i>
                                {f}
                            </li>
                        ))}
                    </ul>
                    <Link href="/#contact" className={plan.highlight ? "btn btn-primary pp-cta" : "btn pp-cta pp-cta-borde"}>
                        Solicitar propuesta
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default function PreciosPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <Header />

            {/* Hero editorial */}
            <section style={{
                padding: "9rem 0 3.5rem",
                background: "radial-gradient(circle at 20% 20%, rgba(234, 88, 12, 0.07) 0%, transparent 55%)",
            }}>
                <div className="container">
                    <span className="kicker-mono">
                        <i className="fa-solid fa-tag" style={{ marginRight: "0.6rem" }}></i>
                        Precios públicos
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
                        ¿Cuánto cuesta{" "}<br />
                        <span style={{ color: "var(--color-primary)" }}>automatizar tu negocio?</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: 0, maxWidth: 680 }}>
                        Implantar la IA son tres cosas, y aquí está lo que cuesta cada una:
                        <strong style={{ color: "var(--color-text-main)" }}> formar</strong> a tu equipo desde 600€,
                        <strong style={{ color: "var(--color-text-main)" }}> cumplir</strong> el AI Act desde 750€ y
                        <strong style={{ color: "var(--color-text-main)" }}> automatizar</strong> el trabajo desde 900€
                        (un área completa desde 2.000€, la empresa entera desde 8.000€). El precio
                        final se cierra por escrito antes de empezar, se paga por hitos y no hay permanencia.
                    </p>
                </div>
            </section>

            {/* 01 · Formar */}
            <section style={{ padding: "4rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container">
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">01 · Formar</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            Que tu equipo use la IA con criterio
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                            Para empresas, despachos y centros educativos. El precio final depende del
                            número de participantes y la modalidad, y se cierra en la propuesta.
                        </p>
                    </div>
                    <Parrilla planes={formacion} cols4 />
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginTop: "1.5rem", maxWidth: 720 }}>
                        Itinerarios, evidencia documental y el detalle del Art. 4 del AI Act, en la{" "}
                        <Link href="/formacion" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            página de formación
                        </Link>{" "}
                        y en la guía de{" "}
                        <Link href="/formacion/ai-act" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            formación obligatoria del AI Act
                        </Link>.
                    </p>
                </div>
            </section>

            {/* 02 · Cumplir */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container">
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">02 · Cumplir</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            Que la ley no te pille a contrapié
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                            Para saber dónde está tu empresa y qué le falta — con evidencia documental,
                            no con miedo.
                        </p>
                    </div>
                    <Parrilla planes={auditoria} cols2 />
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginTop: "1.5rem", maxWidth: 720 }}>
                        El detalle del servicio, en la página de{" "}
                        <Link href="/cumplimiento" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            auditoría IA
                        </Link>.
                    </p>
                </div>
            </section>

            {/* 03 · Automatizar */}
            <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container">
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">03 · Automatizar</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            Que el trabajo repetitivo se haga solo
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                            Cada proyecto se compone a medida — panel, chatbot, CRM o automatizaciones —
                            en la combinación que tu negocio necesite. Las listas son ejemplos de lo que suele incluir.
                        </p>
                    </div>
                    <Parrilla planes={proyectos} />
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginTop: "1.5rem", maxWidth: 720 }}>
                        El detalle de cada pieza está en{" "}
                        <Link href="/sistemas" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            automatización de procesos
                        </Link>
                        ,{" "}
                        <Link href="/sistemas/chatbots-whatsapp" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            chatbots
                        </Link>
                        ,{" "}
                        <Link href="/sistemas" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            paneles a medida
                        </Link>{" "}
                        y en las páginas de cada sector.
                    </p>
                </div>
            </section>

            {/* Qué hace variar el precio — franja terracota */}
            <section style={{ padding: "4.5rem 0", background: "linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Sin letra pequeña</span>
                    <h2 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                        fontWeight: 600,
                        color: "#faf6ef",
                        margin: "0.8rem 0 2rem",
                        lineHeight: 1.2,
                    }}>
                        Qué hace variar el precio (y qué no varía nunca)
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
                        {variables.map((v) => (
                            <div key={v.titulo}>
                                <i className={`fa-solid ${v.icon}`} style={{ color: "#f6c39c", fontSize: "1.5rem" }}></i>
                                <h3 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "1.2rem",
                                    fontWeight: 600,
                                    color: "#faf6ef",
                                    margin: "0.7rem 0 0.5rem",
                                    lineHeight: 1.3,
                                }}>
                                    {v.titulo}
                                </h3>
                                <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.6, margin: 0, fontSize: "0.95rem" }}>
                                    {v.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Preguntas frecuentes sobre precios
                        </h2>
                    </div>
                    {faqs.map((f) => (
                        <details key={f.question} className="pp-faq" name="faq-precios">
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
                        ¿Qué combinación te toca a ti?
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos, gratis: miro tus procesos y te digo qué automatizar primero y qué te costaría.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir la auditoría gratuita
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .pp-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.2rem;
                    align-items: stretch;
                }
                .pp-grid-4 {
                    grid-template-columns: repeat(4, 1fr);
                }
                .pp-grid-2 {
                    grid-template-columns: repeat(2, 1fr);
                    max-width: 760px;
                }
                .pp-card {
                    display: flex;
                    flex-direction: column;
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    padding: 2rem 1.8rem;
                    transition: transform 0.25s ease, border-color 0.25s ease;
                }
                .pp-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(234, 88, 12, 0.4);
                }
                .pp-destacado {
                    background: linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%);
                    border: none;
                    box-shadow: 0 25px 55px rgba(28, 25, 23, 0.22);
                }
                .pp-nombre {
                    font-family: var(--font-display, serif);
                    font-size: 1.3rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    margin-bottom: 0.5rem;
                    line-height: 1.2;
                }
                .pp-destacado .pp-nombre { color: #faf6ef; }
                .pp-desc {
                    font-size: 0.92rem;
                    color: var(--color-text-muted);
                    line-height: 1.55;
                    margin-bottom: 1.3rem;
                }
                .pp-destacado .pp-desc { color: rgba(250,246,239,0.8); }
                .pp-precio {
                    display: flex;
                    align-items: baseline;
                    gap: 0.7rem;
                    margin-bottom: 1.3rem;
                }
                .pp-desde { color: var(--color-text-muted); }
                .pp-destacado .pp-desde { color: rgba(250,246,239,0.75); }
                .pp-cifra {
                    font-family: var(--font-display, serif);
                    font-size: clamp(2rem, 3vw, 2.6rem);
                    font-weight: 600;
                    line-height: 1;
                    color: var(--color-primary);
                    letter-spacing: -0.02em;
                }
                .pp-destacado .pp-cifra { color: #f6c39c; }
                .pp-lista {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 1.6rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.55rem;
                    flex-grow: 1;
                }
                .pp-lista li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.6rem;
                    font-size: 0.9rem;
                    line-height: 1.5;
                    color: var(--color-text-muted);
                }
                .pp-destacado .pp-lista li { color: rgba(250,246,239,0.88); }
                .pp-lista i {
                    color: var(--color-primary);
                    margin-top: 0.25rem;
                    font-size: 0.8rem;
                    flex-shrink: 0;
                }
                .pp-destacado .pp-lista i { color: #f6c39c; }
                .pp-cta {
                    text-align: center;
                    font-size: 0.92rem;
                }
                .pp-cta-borde {
                    border: 1px solid var(--color-border);
                    color: var(--color-text-main);
                    background: transparent;
                }
                .pp-cta-borde:hover {
                    border-color: var(--color-primary);
                    color: var(--color-primary);
                }
                .pp-faq {
                    border-top: 1px solid var(--color-border);
                }
                .pp-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .pp-faq summary {
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
                .pp-faq summary::-webkit-details-marker {
                    display: none;
                }
                .pp-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .pp-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .pp-faq[open] summary i {
                    transform: rotate(180deg);
                }
                @media (max-width: 1100px) {
                    .pp-grid-4 { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 900px) {
                    .pp-grid { grid-template-columns: 1fr; max-width: 480px; }
                    .pp-grid-4 { grid-template-columns: 1fr; max-width: 480px; }
                }
                @media (max-width: 600px) {
                    h1 br { display: none; }
                }
            `}</style>
        </main>
    );
}
