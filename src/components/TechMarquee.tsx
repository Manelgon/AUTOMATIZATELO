const techs = [
    "Claude",
    "GPT-4o",
    "n8n",
    "Make",
    "WhatsApp API",
    "Supabase",
    "PostgreSQL",
    "Next.js",
    "Docker",
    "Redis",
    "RAG",
    "Vercel",
    "Ollama",
    "Cal.com",
];

export default function TechMarquee() {
    return (
        <section aria-label="Tecnologías con las que trabajamos" style={{ padding: "1rem 0 2rem" }}>
            <p style={{
                textAlign: "center",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
                marginBottom: "0.5rem",
            }}>
                Trabajamos con las tecnologías de IA más avanzadas
            </p>
            <div className="tech-marquee">
                <div className="tech-marquee-track">
                    {[...techs, ...techs].map((t, i) => (
                        <span key={`${t}-${i}`} className="tech-pill" aria-hidden={i >= techs.length}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
