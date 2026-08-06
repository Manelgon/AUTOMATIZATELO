import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Auditoría de Cumplimiento del AI Act",
    description:
        "Auditoría del AI Act para pymes: reviso cómo usa IA tu empresa y te entrego informe de riesgos, plan de acción y política de uso. Desde 750€.",
    alternates: { canonical: "https://automatizatelo.com/servicios/auditoria-ia" },
    openGraph: {
        title: "Auditoría IA para pymes: cumplimiento del AI Act sin sustos",
        description: "Informe de riesgos, plan de acción, política de uso de IA y formación del Art. 4. Precio público, desde 750€.",
        url: "https://automatizatelo.com/servicios/auditoria-ia",
    },
};

const faqs = [
    {
        question: "¿Mi empresa necesita una auditoría de IA?",
        answer: "Si tu plantilla usa cualquier herramienta de IA — ChatGPT, Copilot, Gemini o software con IA integrada — el Reglamento Europeo de IA ya te aplica: la obligación de alfabetización rige desde febrero de 2025 y el régimen sancionador general desde el 2 de agosto de 2026. La auditoría te dice en qué punto estás y qué te falta, sin alarmismo.",
    },
    {
        question: "¿Qué incluye exactamente la auditoría?",
        answer: "Cuatro cosas: un inventario de la IA que tu empresa usa de verdad (incluida la que la plantilla usa por su cuenta), una clasificación de riesgos según el Reglamento, un informe con lo que cumples y lo que no, y un plan de acción priorizado con lo que hay que hacer, en qué orden y qué cuesta. El pack completo añade la política de uso de IA redactada para tu empresa y la formación del Art. 4 para la plantilla.",
    },
    {
        question: "¿Cuánto cuesta?",
        answer: "El diagnóstico con informe y plan de acción, desde 750€. El pack completo — auditoría + política de uso de IA personalizada + formación de alfabetización del Art. 4 con certificados — desde 1.800€. La formación del pack es el mismo bloque de alfabetización que puedes contratar suelto desde 600€: en el pack va incluido, junto con la política. El precio final depende del tamaño de la empresa y del número de herramientas en uso, y se cierra por escrito antes de empezar.",
    },
    {
        question: "¿La auditoría es una certificación oficial?",
        answer: "No, y quien te venda una 'certificación oficial del AI Act' te está engañando: no existe ningún esquema oficial de certificación para esto. Lo que sí existe es la evidencia documental defendible — inventario, informe, política y registro formativo fechados — que es exactamente lo que la auditoría te deja.",
    },
    {
        question: "¿Qué pasa después de la auditoría?",
        answer: "El plan de acción es tuyo y puedes ejecutarlo con quien quieras — no hay permanencia ni letra pequeña. Si quieres que lo ejecute yo, las piezas habituales son la formación del equipo y la automatización de los procesos que la auditoría destapa. Pero el informe vale por sí solo.",
    },
    {
        question: "¿Cuánto se tarda?",
        answer: "El diagnóstico, entre una y dos semanas desde la primera reunión: una sesión para entender cómo trabajáis, revisión de herramientas y documentación, y entrega del informe con el plan de acción explicado en una reunión final. El pack completo, según el calendario de formación que se acuerde.",
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
    "name": "Auditoría de cumplimiento del Reglamento Europeo de IA (AI Act)",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "areaServed": "España",
    "description": "Auditoría de cumplimiento del AI Act para pymes: inventario de IA, clasificación de riesgos, informe, plan de acción, política de uso de IA y formación del artículo 4.",
    "offers": [
        { "@type": "Offer", "name": "Diagnóstico con informe y plan de acción", "price": "750", "priceCurrency": "EUR", "description": "Precio desde; se cierra en la propuesta." },
        { "@type": "Offer", "name": "Pack completo: auditoría + política de uso + formación Art. 4", "price": "1800", "priceCurrency": "EUR", "description": "Precio desde; se cierra en la propuesta." },
    ],
};

const entregables = [
    {
        num: "01",
        titulo: "Inventario de IA",
        desc: "Qué herramientas con IA usa tu empresa de verdad — incluidas las que la plantilla usa por su cuenta y nadie ha 'aprobado'. No se puede cumplir sobre lo que no se conoce.",
    },
    {
        num: "02",
        titulo: "Clasificación de riesgos",
        desc: "Cada uso, clasificado según el Reglamento: qué es riesgo mínimo, qué exige transparencia y qué (si algo) entra en alto riesgo. Sin alarmismo: la mayoría de pymes sale mejor de lo que teme.",
    },
    {
        num: "03",
        titulo: "Informe + plan de acción",
        desc: "Qué cumples, qué no, y qué hacer en qué orden — con esfuerzo y coste estimados de cada paso. Escrito para que lo entienda gerencia, no un abogado.",
    },
    {
        num: "04",
        titulo: "Política de uso + formación (pack)",
        desc: "La política de uso de IA redactada para tu empresa (qué se puede usar, cómo, con qué datos) y la formación del Art. 4 impartida con certificado nominal y registro fechado.",
    },
];

const dolores = [
    { icon: "fa-user-secret", text: "Tu equipo ya usa ChatGPT con datos de clientes — y nadie ha dicho qué se puede y qué no" },
    { icon: "fa-scale-balanced", text: "El régimen sancionador general del AI Act aplica desde el 2 de agosto de 2026" },
    { icon: "fa-file-circle-question", text: "No tienes ni un papel que demuestre que tu empresa hace las cosas bien con la IA" },
    { icon: "fa-bullhorn", text: "Te llegan ofertas de 'certificación oficial IA' que huelen raro (y hacen bien en oler raro: no existe)" },
];

export default function AuditoriaIAPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header />

            {/* Hero editorial */}
            {/* Hero con fondo ambiental + velo lateral, como el resto del sitio */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 5rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/auditoria.webp"
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
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <span className="kicker-mono" style={{ color: "#f6c39c" }}>
                        <i className="fa-solid fa-clipboard-check" style={{ marginRight: "0.6rem" }}></i>
                        Auditoría IA · Reglamento (UE) 2024/1689
                    </span>
                    <h1 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(2.2rem, 6vw, 3.6rem)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        color: "#faf6ef",
                        margin: "1rem 0 1.2rem",
                        textShadow: "0 2px 30px rgba(28,25,23,0.45)",
                    }}>
                        ¿Tu empresa cumple el{" "}<br />
                        <span style={{ color: "#f6c39c" }}>Reglamento Europeo de IA?</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 660, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                        Te lo digo con un informe, no con miedo: reviso cómo usa la IA tu empresa,
                        clasifico los riesgos según el Reglamento y te entrego el plan de acción —
                        y si quieres, la política de uso y la formación que lo dejan cerrado.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.02rem", padding: "1rem 2.25rem", boxShadow: "var(--shadow-glow)" }}>
                        Pedir la auditoría
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
                        Auditoría de cumplimiento del AI Act para pymes: inventario de IA,
                        clasificación de riesgos, informe y plan de acción desde 750€ — y el
                        pack con política de uso y formación del Art. 4, desde 1.800€.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        En una o dos semanas sabes exactamente dónde está tu empresa y qué le falta.
                        Sin certificados inventados (no existe certificación oficial del AI Act) y
                        sin jerga: un informe que gerencia entiende y puede ejecutar.
                    </p>
                </div>
            </section>

            {/* Te suena — dolores */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">¿Te suena?</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Señales de que te toca hacerla
                        </h2>
                    </div>
                    {dolores.map((d) => (
                        <div key={d.text} className="au-senal">
                            <i className={`fa-solid ${d.icon}`}></i>
                            <span>{d.text}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Qué te llevas — franja terracota */}
            <section style={{ padding: "4.5rem 0", background: "linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Qué te llevas</span>
                    <h2 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                        fontWeight: 600,
                        color: "#faf6ef",
                        margin: "0.8rem 0 2rem",
                        lineHeight: 1.2,
                    }}>
                        Papeles que valen: la evidencia de que lo haces bien
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
                        {entregables.map((e) => (
                            <div key={e.num}>
                                <span className="mono-label" style={{ color: "#f6c39c" }}>{e.num}</span>
                                <h3 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "1.2rem",
                                    fontWeight: 600,
                                    color: "#faf6ef",
                                    margin: "0.5rem 0 0.5rem",
                                    lineHeight: 1.3,
                                }}>
                                    {e.titulo}
                                </h3>
                                <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.6, margin: 0, fontSize: "0.95rem" }}>
                                    {e.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Precios */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Precios públicos</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Dos formatos, sin sorpresas
                        </h2>
                    </div>
                    <div className="au-precios">
                        <div className="au-precio-card">
                            <h3>Diagnóstico</h3>
                            <p className="au-precio-desc">Inventario, clasificación de riesgos, informe y plan de acción explicado en reunión.</p>
                            <div className="au-precio-cifra"><span className="mono-label">Desde</span> 750€</div>
                        </div>
                        <div className="au-precio-card au-precio-destacado">
                            <h3>Pack completo</h3>
                            <p className="au-precio-desc">Todo lo anterior + política de uso de IA redactada para tu empresa + formación del Art. 4 con certificados.</p>
                            <div className="au-precio-cifra"><span className="mono-label">Desde</span> 1.800€</div>
                        </div>
                    </div>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginTop: "1.5rem", maxWidth: 720 }}>
                        El precio final depende del tamaño de la empresa y las herramientas en uso,
                        y se cierra por escrito antes de empezar. El detalle normativo está en la guía de{" "}
                        <Link href="/formacion-obligatoria-ai-act" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            formación obligatoria del AI Act
                        </Link>{" "}
                        y la formación en su{" "}
                        <Link href="/servicios/formacion-ia-empresas" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            página propia
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
                        <details key={f.question} className="au-faq">
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
                        Mejor un informe hoy que una carta mañana.
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos gratis: te digo si tu empresa necesita la auditoría o si con menos te vale.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Empezar con los 30 minutos gratis
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .au-senal {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    padding: 1.1rem 0.3rem;
                    border-top: 1px solid var(--color-border);
                }
                .au-senal:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .au-senal i {
                    color: var(--color-primary);
                    font-size: 1.1rem;
                    margin-top: 0.2rem;
                    flex-shrink: 0;
                    width: 1.4rem;
                    text-align: center;
                }
                .au-senal span {
                    color: var(--color-text-main);
                    font-weight: 500;
                    line-height: 1.5;
                }
                .au-precios {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.2rem;
                }
                .au-precio-card {
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    padding: 2rem;
                }
                .au-precio-destacado {
                    background: linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%);
                    border: none;
                    box-shadow: 0 25px 55px rgba(28, 25, 23, 0.18);
                }
                .au-precio-card h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.35rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    margin-bottom: 0.5rem;
                }
                .au-precio-destacado h3 { color: #faf6ef; }
                .au-precio-desc {
                    font-size: 0.95rem;
                    color: var(--color-text-muted);
                    line-height: 1.6;
                    margin-bottom: 1.2rem;
                }
                .au-precio-destacado .au-precio-desc { color: rgba(250,246,239,0.85); }
                .au-precio-cifra {
                    font-family: var(--font-display, serif);
                    font-size: clamp(2rem, 3.5vw, 2.8rem);
                    font-weight: 600;
                    color: var(--color-primary);
                    letter-spacing: -0.02em;
                    display: flex;
                    align-items: baseline;
                    gap: 0.6rem;
                }
                .au-precio-cifra .mono-label { color: var(--color-text-muted); }
                .au-precio-destacado .au-precio-cifra { color: #f6c39c; }
                .au-precio-destacado .au-precio-cifra .mono-label { color: rgba(250,246,239,0.75); }
                .au-faq {
                    border-top: 1px solid var(--color-border);
                }
                .au-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
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
                    color: var(--color-text-main);
                    line-height: 1.3;
                    transition: color 0.2s ease, padding-left 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .au-faq summary::-webkit-details-marker {
                    display: none;
                }
                .au-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .au-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .au-faq[open] summary i {
                    transform: rotate(180deg);
                }
                @media (max-width: 700px) {
                    .au-precios { grid-template-columns: 1fr; }
                }
                @media (max-width: 600px) {
                    h1 br { display: none; }
                }
            `}</style>
        </main>
    );
}
