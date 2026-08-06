import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizDiagnostico from "@/components/QuizDiagnostico";

export const metadata: Metadata = {
    title: "Diagnóstico de Automatización: 12 Preguntas, 3 Minutos",
    description:
        "Descubre cuántas horas pierde tu pyme en tareas repetitivas y qué automatizar primero. 12 preguntas, 3 minutos, plan por áreas gratis.",
    alternates: { canonical: "https://automatizatelo.com/diagnostico" },
    openGraph: {
        title: "¿Cuánto de tu semana se puede automatizar?",
        description: "12 preguntas, 3 minutos, y un plan por áreas de qué automatizar primero en tu negocio.",
        url: "https://automatizatelo.com/diagnostico",
    },
};

export default function DiagnosticoPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />

            <section style={{
                padding: "9rem 0 4.5rem",
                background: "radial-gradient(circle at 20% 20%, rgba(234, 88, 12, 0.07) 0%, transparent 55%)",
                flex: 1,
            }}>
                <div className="container" style={{ maxWidth: 760 }}>
                    <span className="kicker-mono">
                        <i className="fa-solid fa-stethoscope" style={{ marginRight: "0.6rem" }}></i>
                        Diagnóstico · 12 preguntas · 3 minutos
                    </span>
                    <h1 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(2rem, 5.5vw, 3.2rem)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        color: "var(--color-text-main)",
                        margin: "1rem 0 1rem",
                    }}>
                        ¿Cuánto de tu semana{" "}
                        <span style={{ color: "var(--color-primary)" }}>se puede automatizar?</span>
                    </h1>
                    <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: 620 }}>
                        Doce preguntas sobre cómo trabajas hoy — contactos, facturas, atención,
                        datos e IA — y te digo tu potencial de automatización y por dónde
                        empezaría en tu caso. Sin trucos: se responde en 3 minutos.
                    </p>

                    <QuizDiagnostico />
                </div>
            </section>

            <Footer />
        </main>
    );
}
