import Link from "next/link";

// =============================================================================
// CURSO ESTRELLA — versión compacta para la home (Fase 4 de la v2)
// =============================================================================
// El producto de formación insignia, resumido: dos sesiones y los datos que
// importan. La versión completa vive en /formacion.
// =============================================================================

export default function CursoEstrellaHome() {
    return (
        <section style={{ padding: "5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
            <div className="container" style={{ maxWidth: 1000 }}>
                <div style={{ marginBottom: "2rem" }}>
                    <span className="kicker-mono">Curso estrella</span>
                    <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                        Alfabetización IA + vuestra herramienta
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 660 }}>
                        El formato que mejor funciona: una sesión cubre la obligación del Art. 4
                        y la otra domina la herramienta que ya usa tu equipo — con vuestros casos reales.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem", marginBottom: "1.4rem" }}>
                    <div style={{ background: "linear-gradient(135deg, #b45309 0%, #7c2d12 60%, #431407 100%)", borderRadius: "16px", padding: "1.5rem 1.6rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.7rem" }}>
                            <span className="mono-label" style={{ color: "#f6c39c" }}>Sesión 01</span>
                            <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#faf6ef", border: "1px solid rgba(250,246,239,0.35)", borderRadius: "50px", padding: "0.25rem 0.7rem" }}>Obligatoria · Art. 4</span>
                        </div>
                        <h3 style={{ fontFamily: "var(--font-display, serif)", fontSize: "1.3rem", fontWeight: 600, color: "#faf6ef", margin: "0 0 0.4rem" }}>Alfabetización en IA</h3>
                        <p style={{ color: "rgba(250,246,239,0.82)", lineHeight: 1.6, fontSize: "0.92rem", margin: 0 }}>
                            Fundamentos, riesgos, marco legal y gobernanza — con certificado nominal
                            y el registro que sirve de evidencia.
                        </p>
                    </div>
                    <div style={{ background: "#1c1917", borderRadius: "16px", padding: "1.5rem 1.6rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.7rem" }}>
                            <span className="mono-label" style={{ color: "#f6c39c" }}>Sesión 02</span>
                            <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#faf6ef", border: "1px solid rgba(250,246,239,0.35)", borderRadius: "50px", padding: "0.25rem 0.7rem" }}>100% práctica</span>
                        </div>
                        <h3 style={{ fontFamily: "var(--font-display, serif)", fontSize: "1.3rem", fontWeight: 600, color: "#faf6ef", margin: "0 0 0.4rem" }}>Vuestra herramienta, dominada</h3>
                        <p style={{ color: "rgba(250,246,239,0.82)", lineHeight: 1.6, fontSize: "0.92rem", margin: "0 0 0.8rem" }}>
                            Con la que ya usáis — cada rol sale con casos montados para su trabajo:
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {[
                                { href: "/formacion/chatgpt", label: "ChatGPT" },
                                { href: "/formacion/copilot", label: "Copilot 365" },
                                { href: "/formacion/gemini", label: "Gemini" },
                                { href: "/formacion/claude", label: "Claude" },
                            ].map((c) => (
                                <Link key={c.href} href={c.href} style={{ fontSize: "0.78rem", fontWeight: 600, color: "#faf6ef", border: "1px solid rgba(250,246,239,0.3)", borderRadius: "50px", padding: "0.3rem 0.85rem" }}>
                                    {c.label} →
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.5rem" }}>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.92rem", margin: 0 }}>
                        Desde 4 + 4 h · presencial, aula virtual o SCORM · certificado nominal ·{" "}
                        <strong style={{ color: "var(--color-text-main)" }}>desde 1.200 € con precio cerrado</strong>
                    </p>
                    <Link href="/formacion" style={{ color: "var(--color-primary)", fontWeight: 600, fontSize: "0.95rem" }}>
                        Ver la formación completa →
                    </Link>
                </div>
            </div>
        </section>
    );
}
