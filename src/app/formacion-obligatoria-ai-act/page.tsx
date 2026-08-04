import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Formación Obligatoria del AI Act (Art. 4)",
    description:
        "El Art. 4 del Reglamento Europeo de IA obliga a formar a tu plantilla desde febrero de 2025. Qué exige, a quién aplica, sanciones y cómo acreditarlo.",
    alternates: { canonical: "https://automatizatelo.com/formacion-obligatoria-ai-act" },
    openGraph: {
        title: "Formación obligatoria en IA: el Art. 4 del AI Act explicado",
        description: "A quién obliga, desde cuándo, qué sanciones hay y qué evidencia necesita tu empresa.",
        url: "https://automatizatelo.com/formacion-obligatoria-ai-act",
    },
};

const faqs = [
    {
        question: "¿Desde cuándo es obligatoria la alfabetización en IA?",
        answer: "El artículo 4 del Reglamento (UE) 2024/1689 es aplicable desde el 2 de febrero de 2025 — ya es exigible hoy. El 2 de agosto de 2026 llega además la fecha general de aplicación del grueso del Reglamento, con la supervisión efectiva y el régimen sancionador.",
    },
    {
        question: "Mi empresa solo usa ChatGPT o Copilot, no desarrolla IA. ¿También me obliga?",
        answer: "Sí. El artículo 4 obliga a los proveedores de sistemas de IA y también a los responsables del despliegue — es decir, a las empresas que usan IA aunque no la hayan construido. Cuenta el software del día a día: ChatGPT, Copilot o cualquier herramienta con decisión automática dentro.",
    },
    {
        question: "¿Cuántas horas de formación exige la ley?",
        answer: "Ninguna cifra concreta: el Reglamento no fija horas, fija proporcionalidad al rol de cada persona y al riesgo del sistema de IA que utiliza. Quien venda un curso diciendo que la ley obliga a un número exacto de horas se lo está inventando. Lo que hay que poder demostrar es que cada perfil recibió formación adecuada a lo que hace.",
    },
    {
        question: "¿Existe un certificado oficial del Art. 4? ¿Y una formación en IA con certificado?",
        answer: "Certificado oficial, no: no hay ningún esquema oficial de certificación de la alfabetización en IA, y conviene desconfiar de quien venda un 'sello de cumplimiento'. Formación con certificado, sí — pero nominal y privado: lo defendible ante una inspección es el expediente completo (registro formativo con contenidos y horas, certificado nominal por participante y material fechado), que es exactamente lo que entrega nuestra formación de alfabetización.",
    },
    {
        question: "¿Qué pasa si no formo a mi equipo?",
        answer: "El marco sancionador general del Reglamento contempla multas de hasta 35 millones de euros o el 7% de la facturación global en los casos más graves — con un matiz que pocas veces se cuenta: para las pymes aplica el menor de los dos importes. Aún así, la obligación existe desde febrero de 2025 y la carga de acreditar el cumplimiento es de la empresa.",
    },
    {
        question: "¿No se había aplazado el AI Act? Me suena que hubo un aplazamiento.",
        answer: "Se aplazó una parte — y quien te diga que 'ya no corre prisa' te está informando mal. El Ómnibus digital (Reglamento (UE) 2026/1744, en vigor desde julio de 2026) aplazó solo las obligaciones plenas de los sistemas de alto riesgo: las del Anexo III al 2 de diciembre de 2027 y las de productos regulados a 2028. Lo que NO se aplazó: la alfabetización del Art. 4 (aplicable desde febrero de 2025), la transparencia del Art. 50 (tu chatbot debe identificarse como IA desde agosto de 2026) y el régimen sancionador.",
    },
    {
        question: "¿Qué tiene que hacer una pyme, en concreto?",
        answer: "Cuatro pasos: identificar qué herramientas de IA usa ya la plantilla (aunque sea ChatGPT gratuito), mapear qué perfiles la usan y con qué riesgo, formar a cada perfil de forma proporcional, y guardar la evidencia documental (registro, certificados y material fechado).",
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

const pasos = [
    {
        num: "01",
        titulo: "Identifica la IA que ya usáis",
        desc: "ChatGPT, Copilot, herramientas con IA integrada… aunque nadie las haya 'aprobado' oficialmente. Si la plantilla las usa, cuentan.",
    },
    {
        num: "02",
        titulo: "Mapea perfiles y riesgo",
        desc: "No todos necesitan lo mismo: quien redacta emails con IA y quien evalúa candidatos con IA tienen obligaciones distintas. La ley pide proporcionalidad.",
    },
    {
        num: "03",
        titulo: "Forma a cada perfil",
        desc: "Formación práctica y adecuada a lo que cada persona hace — no un curso genérico igual para todos. Es lo que exige el artículo 4.",
    },
    {
        num: "04",
        titulo: "Guarda la evidencia",
        desc: "Registro formativo fechado, certificado nominal por participante y el material impartido. Ese expediente es lo que acredita el cumplimiento.",
    },
];

export default function AiActPage() {
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
                        <i className="fa-solid fa-scale-balanced" style={{ marginRight: "0.6rem" }}></i>
                        Reglamento (UE) 2024/1689 · Art. 4
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
                        Formar a tu equipo en IA{" "}<br />
                        <span style={{ color: "var(--color-primary)" }}>ya no es opcional</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 620 }}>
                        El artículo 4 del Reglamento Europeo de IA obliga desde febrero de 2025
                        a que las empresas que usan IA — aunque solo sea ChatGPT — garanticen la
                        alfabetización de su personal. Aquí tienes lo que exige, sin humo.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.02rem", padding: "1rem 2.25rem" }}>
                        Consulta gratuita de 30 minutos
                    </Link>
                </div>
            </section>

            {/* Answer capsule */}
            <section style={{ padding: "4rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="kicker-mono">Qué exige, en corto</span>
                    <p style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
                        fontWeight: 600,
                        lineHeight: 1.35,
                        color: "var(--color-text-main)",
                        margin: "1rem 0 1.2rem",
                        letterSpacing: "-0.01em",
                    }}>
                        Toda empresa que use sistemas de IA debe garantizar un nivel suficiente de
                        alfabetización en IA de su personal, proporcional al rol de cada persona
                        y al riesgo del sistema que utiliza.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        Obliga a quien desarrolla IA <strong style={{ color: "var(--color-text-main)" }}>y también a quien
                        solo la usa</strong> (los "responsables del despliegue"). No fija un número de horas ni existe
                        un certificado oficial: lo que se acredita es la formación impartida y su evidencia documental.
                    </p>
                </div>
            </section>

            {/* Fechas y sanciones — franja terracota */}
            <section style={{ padding: "4rem 0", background: "linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Las fechas que importan</span>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem", marginTop: "1.5rem" }}>
                        {[
                            { fecha: "2 feb 2025", texto: "El Art. 4 es aplicable: la obligación de alfabetización en IA ya está en vigor." },
                            { fecha: "2 ago 2026", texto: "Régimen sancionador y transparencia (Art. 50) aplicables. El Ómnibus digital solo aplazó el alto riesgo (a dic-2027) — el resto sigue en pie." },
                            { fecha: "35M€ / 7%", texto: "Techo sancionador de los casos más graves: hasta 35 millones o el 7% de la facturación global. Para pymes aplica el menor de los dos importes." },
                        ].map((f) => (
                            <div key={f.fecha}>
                                <div style={{ fontFamily: "var(--font-display, serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, color: "#f6c39c", lineHeight: 1 }}>{f.fecha}</div>
                                <div style={{ color: "rgba(250,246,239,0.85)", marginTop: "0.6rem", lineHeight: 1.55, fontSize: "0.95rem" }}>{f.texto}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Los 4 pasos para una pyme */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Qué hacer</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            El cumplimiento de una pyme, en 4 pasos
                        </h2>
                    </div>
                    {pasos.map((p) => (
                        <div key={p.num} className="aa-fila">
                            <span className="mono-label" style={{ color: "var(--color-text-muted)" }}>{p.num}</span>
                            <div>
                                <h3 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
                                    fontWeight: 600,
                                    color: "var(--color-text-main)",
                                    marginBottom: "0.35rem",
                                    lineHeight: 1.25,
                                }}>
                                    {p.titulo}
                                </h3>
                                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, margin: 0, maxWidth: 640 }}>
                                    {p.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginTop: "1.8rem", maxWidth: 720 }}>
                        Los pasos 3 y 4 son exactamente lo que cubre nuestra{" "}
                        <Link href="/servicios/formacion-ia-empresas" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            formación en IA para empresas
                        </Link>
                        : el bloque de alfabetización desde 600€, con certificado nominal y registro formativo fechado.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Lo que preguntan las empresas
                        </h2>
                    </div>
                    {faqs.map((f) => (
                        <details key={f.question} className="aa-faq">
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
                        ¿Tu empresa ya cumple el Art. 4?
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        En 30 minutos te digo qué perfiles tienes, qué formación les toca y qué evidencia guardar.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir mi consulta gratuita
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .aa-fila {
                    display: grid;
                    grid-template-columns: 3rem 1fr;
                    gap: 1rem;
                    align-items: baseline;
                    padding: 1.5rem 0.3rem;
                    border-top: 1px solid var(--color-border);
                }
                .aa-fila:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .aa-faq {
                    border-top: 1px solid var(--color-border);
                }
                .aa-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .aa-faq summary {
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
                .aa-faq summary::-webkit-details-marker {
                    display: none;
                }
                .aa-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .aa-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .aa-faq[open] summary i {
                    transform: rotate(180deg);
                }
                @media (max-width: 600px) {
                    h1 br { display: none; }
                    .aa-fila {
                        grid-template-columns: 1fr;
                        gap: 0.4rem;
                    }
                }
            `}</style>
        </main>
    );
}
