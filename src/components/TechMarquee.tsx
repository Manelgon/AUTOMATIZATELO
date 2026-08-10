// Solo herramientas que el cliente usa o reconoce: el rótulo promete "las que
// ya usas", y nadie en una pyme usa n8n. La fontanería (n8n, Make, Supabase)
// se cuenta donde toca, en /sistemas.
const techs = [
    "ChatGPT",
    "Copilot 365",
    "Gemini",
    "Claude",
    "NotebookLM",
    "WhatsApp",
    "Excel",
    "Google Workspace",
    "Microsoft 365",
    "CRM",
];

export default function TechMarquee() {
    return (
        <section aria-label="Herramientas con las que trabajo" style={{
            marginTop: "-3.6rem",
            padding: "1rem 0",
            position: "relative",
            zIndex: 2,
            background: "rgba(28, 25, 23, 0.45)",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
        }}>
            <p className="tech-rotulo">Trabajo con las herramientas que ya usas</p>
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
