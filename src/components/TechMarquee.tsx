// Primero las que el cliente reconoce; la fontanería, al final. Quien busca
// un panel a medida sabe qué es n8n; quien administra fincas, no — y es este
// último el que tiene que sentirse en casa al leer la tira.
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
    "n8n",
    "Make",
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
