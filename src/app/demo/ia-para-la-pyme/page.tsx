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

            {/* Hero oscuro con foto + velo, como el resto del sitio. La barra
                de navegación va en crema mientras no se hace scroll: sin este
                fondo oscuro debajo, el menú no se lee. */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/claustro.webp"
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "60% 40%", zIndex: 0 }}
                />
                <div aria-hidden="true" style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(90deg, rgba(28,25,23,0.82) 0%, rgba(28,25,23,0.62) 38%, rgba(28,25,23,0.28) 65%, rgba(28,25,23,0.12) 85%), linear-gradient(180deg, rgba(28,25,23,0.45) 0%, transparent 40%)",
                }} />
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <span className="kicker-mono" style={{ color: "#f6c39c" }}>
                        <i className="fa-solid fa-lock" style={{ marginRight: "0.6rem" }}></i>
                        Acceso privado
                    </span>
                    <h1 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(2rem, 4.5vw, 3rem)",
                        fontWeight: 600,
                        lineHeight: 1.12,
                        letterSpacing: "-0.02em",
                        color: "#faf6ef",
                        margin: "1rem 0 1.2rem",
                        textShadow: "0 2px 30px rgba(28,25,23,0.45)",
                        maxWidth: "20ch",
                    }}>
                        Demo del curso <span style={{ color: "#f6c39c" }}>IA para la pyme</span>
                    </h1>
                    <p style={{
                        color: "rgba(250,246,239,0.85)",
                        fontSize: "1.1rem",
                        lineHeight: 1.65,
                        maxWidth: "52ch",
                        textShadow: "0 1px 20px rgba(28,25,23,0.5)",
                    }}>
                        Aquí puedes ver por dentro la unidad 1 completa: contenidos, audios y
                        actividades tal como los verá tu equipo.
                    </p>
                    <p style={{
                        color: "rgba(250,246,239,0.85)",
                        fontSize: "1.1rem",
                        lineHeight: 1.65,
                        maxWidth: "52ch",
                        marginTop: "0.9rem",
                        textShadow: "0 1px 20px rgba(28,25,23,0.5)",
                    }}>
                        Escribe tu correo y la clave de acceso que te he enviado y entrarás
                        directamente a la demo.
                    </p>
                </div>
            </section>

            {/* El formulario, ya sobre crema */}
            <section style={{ padding: "3.5rem 0 5rem", background: "var(--color-bg)", flex: 1 }}>
                <div className="container" style={{ display: "flex", justifyContent: "center" }}>
                    <FormularioDemo />
                </div>
            </section>

            <Footer />
        </main>
    );
}
