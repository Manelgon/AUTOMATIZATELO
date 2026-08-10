import Link from "next/link";

// =============================================================================
// CURSO ESTRELLA — split a sangre: la mitad terracota presenta (título, datos,
// CTA) y la mitad tinta detalla las dos sesiones. Mismo lenguaje que las
// puertas de formación. La versión completa vive en /formacion/empresas.
// =============================================================================

export default function CursoEstrellaHome() {
    return (
        <section aria-label="Curso estrella" style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
            <div className="container ces-mitades">
                {/* Mitad 1 — la presentación */}
                <div className="ces-mitad ces-mitad-pitch">
                    <span className="ces-marca" aria-hidden="true">★</span>
                    <div className="ces-cuerpo">
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Curso estrella</span>
                        <h2 className="ces-titulo">Alfabetización IA + vuestra herramienta</h2>
                        <p className="ces-sub">
                            El formato que mejor funciona: una sesión cubre la obligación del Art. 4
                            y la otra pone a tu equipo a trabajar con la herramienta que ya usa — con vuestros casos reales.
                        </p>
                        <div className="ces-datos">
                            <span>Desde 4 + 4 h</span>
                            <span>Presencial · aula virtual · SCORM</span>
                            <span>Certificado nominal</span>
                            <span className="ces-dato-precio">Desde 1.800 € · cerrado en la propuesta</span>
                        </div>
                        <Link href="/formacion/empresas" className="ces-cta">Ver la formación completa →</Link>
                    </div>
                </div>

                {/* Mitad 2 — las dos sesiones */}
                <div className="ces-mitad ces-mitad-sesiones">
                    <div className="ces-cuerpo">
                        <div className="ces-sesion">
                            <div className="ces-cab">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>Sesión 01</span>
                                <span className="ces-badge">Obligatoria · Art. 4</span>
                            </div>
                            <h3>Alfabetización en IA</h3>
                            <p>Fundamentos, riesgos, uso responsable y marco legal. Certificado nominal y registro fechado de la formación.</p>
                        </div>
                        <div className="ces-sesion ces-sesion-2">
                            <div className="ces-cab">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>Sesión 02</span>
                                <span className="ces-badge">100% práctica</span>
                            </div>
                            <h3>Vuestra herramienta, dominada</h3>
                            <p>Con la que ya usáis — cada rol sale con casos montados para su trabajo:</p>
                            <div className="ces-chips">
                                {[
                                    { href: "/formacion/chatgpt", label: "ChatGPT" },
                                    { href: "/formacion/copilot", label: "Copilot 365" },
                                    { href: "/formacion/gemini", label: "Gemini" },
                                    { href: "/formacion/claude", label: "Claude" },
                                ].map((c) => (
                                    <Link key={c.href} href={c.href} className="ces-chip">
                                        {c.label} →
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .ces-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .ces-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .ces-marca {
                    position: absolute;
                    top: 0.6rem;
                    right: 1.4rem;
                    font-size: clamp(5rem, 9vw, 8rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .ces-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3.4rem 0;
                    width: 100%;
                }
                .ces-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.7rem, 3vw, 2.4rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .ces-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.65;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .ces-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .ces-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .ces-datos .ces-dato-precio { color: #f6c39c; }
                .ces-cta {
                    display: inline-block;
                    align-self: flex-start;
                    margin-top: 0.6rem;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.6rem 1.4rem;
                    transition: transform 0.25s ease, background 0.2s ease;
                }
                .ces-cta:hover { transform: translateY(-2px); background: #faf6ef; }
                .ces-sesion {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                }
                .ces-sesion-2 {
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                    padding-top: 1.4rem;
                    margin-top: 1.4rem;
                }
                .ces-cab {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                }
                .ces-badge {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.65rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: #faf6ef;
                    border: 1px solid rgba(250, 246, 239, 0.35);
                    border-radius: 50px;
                    padding: 0.25rem 0.7rem;
                    white-space: nowrap;
                }
                .ces-sesion h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.3rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.2;
                }
                .ces-sesion p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                .ces-chips {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-top: 0.4rem;
                }
                .ces-chip {
                    font-size: 0.78rem;
                    font-weight: 600;
                    color: #faf6ef;
                    border: 1px solid rgba(250, 246, 239, 0.3);
                    border-radius: 50px;
                    padding: 0.3rem 0.85rem;
                    transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
                }
                .ces-chip:hover {
                    background: #f6c39c;
                    border-color: #f6c39c;
                    color: #1c1917;
                }
                @media (max-width: 800px) {
                    .ces-mitades { grid-template-columns: 1fr; gap: 0; }
                    .ces-cuerpo { padding: 2.2rem 0; }
                }
            `}</style>
        </section>
    );
}
