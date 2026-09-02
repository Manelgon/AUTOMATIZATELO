const PREFERRED_SOURCE_URL =
    "https://www.google.com/preferences/source?q=automatizatelo.com";

export default function PreferredSourceLink() {
    return (
        <aside
            aria-label="Fuente preferida en Google"
            style={{
                background: "#f5ede2",
                borderTop: "1px solid rgba(120, 53, 15, 0.14)",
                borderBottom: "1px solid rgba(120, 53, 15, 0.14)",
                padding: "1.15rem 0",
            }}
        >
            <div
                className="container"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem 1.5rem",
                    flexWrap: "wrap",
                }}
            >
                <div>
                    <p style={{ margin: 0, color: "#431407", fontWeight: 700 }}>
                        ¿Te resulta útil lo que publico?
                    </p>
                    <p style={{ margin: "0.2rem 0 0", color: "#6b4f3b", fontSize: "0.92rem" }}>
                        Añade Automatizatelo a tus fuentes preferidas para encontrar más artículos en Google.
                    </p>
                </div>
                <a
                    href={PREFERRED_SOURCE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        border: "1px solid #9a3412",
                        borderRadius: "999px",
                        color: "#7c2d12",
                        fontWeight: 700,
                        padding: "0.7rem 1rem",
                        whiteSpace: "nowrap",
                    }}
                >
                    <span aria-hidden="true">☆</span>
                    Añadir en Google
                </a>
            </div>
        </aside>
    );
}
