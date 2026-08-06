import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Recursos Gratis de IA para Pymes",
    description:
        "Recursos gratuitos de IA: la guía del Art. 4 del AI Act, 10 prompts para administradores de fincas y un cheatsheet de herramientas. Sin pedirte el email.",
    alternates: { canonical: "https://automatizatelo.com/recursos" },
    openGraph: {
        title: "Recursos gratis de IA — sin pedirte el email",
        description: "Guías, prompts y plantillas que uso con clientes reales. Descárgalos y úsalos.",
        url: "https://automatizatelo.com/recursos",
    },
};

const recursos = [
    {
        icon: "fa-scale-balanced",
        tipo: "Guía",
        titulo: "Formación obligatoria del AI Act (Art. 4)",
        desc: "Qué exige el Reglamento Europeo de IA, desde cuándo, qué sanciones hay y los 4 pasos para que una pyme cumpla. Sin humo: no existe certificado oficial ni horas mínimas.",
        href: "/formacion/ai-act",
        cta: "Leer la guía",
        externa: false,
    },
    {
        icon: "fa-wand-magic-sparkles",
        tipo: "Pack de prompts",
        titulo: "Los 10 prompts de IA para administradores de fincas",
        desc: "Convocatorias, actas desde notas, respuestas a reclamaciones, burofax, certificados… Copia, pega y adapta. Funcionan en Claude, ChatGPT o Gemini, y se guardan como PDF.",
        href: "/recursos/prompts-ia-fincas.html",
        cta: "Abrir el pack",
        externa: true,
    },
    {
        icon: "fa-table-list",
        tipo: "Cheatsheet",
        titulo: "Las 3 herramientas de IA para tu despacho",
        desc: "Una hoja (imprimible) con las tres herramientas que más tiempo devuelven en un despacho: expansor de texto, asistente de IA y automatizador de flujos — con atajos, prompts y un flujo real de incidencias.",
        href: "/recursos/cheatsheet-3-herramientas-fincas.html",
        cta: "Abrir el cheatsheet",
        externa: true,
    },
];

export default function RecursosPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />

            {/* Hero editorial */}
            <section style={{
                padding: "9rem 0 3.5rem",
                background: "radial-gradient(circle at 20% 20%, rgba(234, 88, 12, 0.07) 0%, transparent 55%)",
            }}>
                <div className="container">
                    <span className="kicker-mono">
                        <i className="fa-solid fa-gift" style={{ marginRight: "0.6rem" }}></i>
                        Recursos
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
                        Gratis, útil y{" "}<br />
                        <span style={{ color: "var(--color-primary)" }}>sin pedirte el email</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: 0, maxWidth: 640 }}>
                        Guías, prompts y plantillas que salen del trabajo con clientes reales.
                        Úsalos, imprímelos, compártelos. Si con esto te vale, perfecto; si quieres
                        que te lo deje montado, ya sabes dónde estoy.
                    </p>
                </div>
            </section>

            {/* Recursos */}
            <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div className="rc-grid">
                        {recursos.map((r) => (
                            <div key={r.titulo} className="rc-card">
                                <i className={`fa-solid ${r.icon}`} style={{ color: "var(--color-primary)", fontSize: "1.6rem", marginBottom: "1rem", display: "block" }}></i>
                                <span className="mono-label" style={{ color: "var(--color-text-muted)" }}>{r.tipo}</span>
                                <h2 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "1.35rem",
                                    fontWeight: 600,
                                    color: "var(--color-text-main)",
                                    margin: "0.5rem 0 0.6rem",
                                    lineHeight: 1.25,
                                }}>
                                    {r.titulo}
                                </h2>
                                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, margin: "0 0 1.4rem", fontSize: "0.95rem", flexGrow: 1 }}>
                                    {r.desc}
                                </p>
                                {r.externa ? (
                                    <a href={r.href} target="_blank" rel="noopener" className="btn rc-cta">
                                        {r.cta} →
                                    </a>
                                ) : (
                                    <Link href={r.href} className="btn rc-cta">
                                        {r.cta} →
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginTop: "2rem", maxWidth: 720 }}>
                        Irán entrando más recursos aquí. Y si buscas los documentos serios — política
                        de uso de IA, inventario, registro formativo — esos forman parte del{" "}
                        <Link href="/cumplimiento" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            pack de la auditoría IA
                        </Link>
                        , redactados para tu empresa.
                    </p>
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
                        ¿Prefieres que te lo deje montado?
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos gratis: miro tus procesos y te digo qué automatizar, qué formar y qué cumplir.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir la auditoría gratuita
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .rc-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.2rem;
                    align-items: stretch;
                }
                .rc-card {
                    display: flex;
                    flex-direction: column;
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    padding: 2rem 1.8rem;
                    transition: transform 0.25s ease, border-color 0.25s ease;
                }
                .rc-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(234, 88, 12, 0.4);
                }
                .rc-cta {
                    border: 1px solid var(--color-border);
                    color: var(--color-text-main);
                    background: transparent;
                    text-align: center;
                    font-size: 0.95rem;
                }
                .rc-cta:hover {
                    border-color: var(--color-primary);
                    color: var(--color-primary);
                }
                @media (max-width: 900px) {
                    .rc-grid { grid-template-columns: 1fr; max-width: 480px; }
                }
            `}</style>
        </main>
    );
}
