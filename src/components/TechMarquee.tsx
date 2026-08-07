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
        <section aria-label="Tecnologías con las que trabajamos" style={{
            marginTop: "-3.6rem",
            padding: "1rem 0",
            position: "relative",
            zIndex: 2,
            background: "rgba(28, 25, 23, 0.45)",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
        }}>
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
