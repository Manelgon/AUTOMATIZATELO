import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioDemo from "@/components/FormularioDemo";

// Página con puerta: ni se indexa ni se sigue. También queda fuera del
// sitemap y excluida en robots.ts.
export const metadata: Metadata = {
    title: { absolute: "Demo del curso IA para la pyme · Automatízatelo" },
    description:
        "Acceso con clave a la demo de la unidad 1 del curso IA para la pyme.",
    robots: { index: false, follow: false },
};

export default function DemoCursoPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />

            <section style={{ padding: "9rem 0 5rem", background: "var(--color-bg)", flex: 1 }}>
                <div className="container">
                    <div className="demo-grid">
                        <div>
                            <span className="kicker-mono" style={{ color: "var(--color-primary)" }}>
                                Acceso privado
                            </span>
                            <h1 style={{
                                fontFamily: "var(--font-display, serif)",
                                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                                fontWeight: 600,
                                lineHeight: 1.12,
                                letterSpacing: "-0.02em",
                                color: "var(--color-text-main)",
                                margin: "1rem 0 1.2rem",
                            }}>
                                Demo del curso <span style={{ color: "var(--color-primary)" }}>IA para la pyme</span>
                            </h1>
                            <p style={{ color: "var(--color-text-muted)", fontSize: "1.05rem", lineHeight: 1.65, maxWidth: "46ch" }}>
                                Aquí puedes ver por dentro la unidad 1 completa: contenidos, audios y
                                actividades tal como los verá tu equipo.
                            </p>
                            <p style={{ color: "var(--color-text-muted)", fontSize: "1.05rem", lineHeight: 1.65, maxWidth: "46ch", marginTop: "0.9rem" }}>
                                Escribe tu correo y la clave de acceso que te he enviado y entrarás
                                directamente a la demo.
                            </p>
                        </div>

                        <FormularioDemo />
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
                .demo-grid {
                    display: grid;
                    grid-template-columns: 1.1fr 0.9fr;
                    gap: 3rem;
                    align-items: center;
                }
                @media (max-width: 960px) {
                    .demo-grid { grid-template-columns: 1fr; gap: 2.2rem; }
                }
            `}</style>
        </main>
    );
}
