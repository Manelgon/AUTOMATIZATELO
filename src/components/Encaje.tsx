import Link from "next/link";

// Versión compacta del bloque "Encajamos / No encajamos" de /como-trabajo.
// Descalificar también vende: filtra llamadas perdidas y genera confianza.
const si = [
    "Tareas repetitivas que os comen horas y quieres quitártelas",
    "Cumplir el Reglamento de IA con formación práctica, no con un máster",
    "Precio cerrado por escrito antes de empezar",
    "Empezar pequeño y ampliar solo si funciona",
];

const no = [
    "Lo más barato del mercado, aunque luego no funcione",
    "«Poner IA» para contarlo, no para usarla",
    "Que todo cambie sin cambiar nada de cómo trabajáis",
    "Informes de 80 páginas para un comité",
];

export default function Encaje() {
    return (
        <section style={{ padding: "5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
            <div className="container" style={{ maxWidth: 1000 }}>
                <div style={{ marginBottom: "2rem" }}>
                    <span className="kicker-mono">Antes de llamarme</span>
                    <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                        Esto no es para todo el mundo
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                        Mejor decirlo antes de la primera llamada que descubrirlo en la tercera reunión.
                    </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                    <div>
                        <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: "1rem" }}>
                            Encajamos si buscas
                        </p>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "0.7rem", margin: 0, padding: 0, listStyle: "none" }}>
                            {si.map((t) => (
                                <li key={t} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start", color: "var(--color-text-muted)", lineHeight: 1.55, fontSize: "0.95rem" }}>
                                    <i className="fa-solid fa-check" style={{ color: "var(--color-primary)", marginTop: "0.25rem", flexShrink: 0 }}></i>
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "1rem" }}>
                            No encajamos si buscas
                        </p>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "0.7rem", margin: 0, padding: 0, listStyle: "none" }}>
                            {no.map((t) => (
                                <li key={t} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start", color: "var(--color-text-muted)", lineHeight: 1.55, fontSize: "0.95rem" }}>
                                    <i className="fa-solid fa-xmark" style={{ color: "var(--color-text-muted)", opacity: 0.5, marginTop: "0.25rem", flexShrink: 0 }}></i>
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p style={{ marginTop: "1.8rem", color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
                    La lista completa, con el porqué, está en{" "}
                    <Link href="/como-trabajo" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                        cómo trabajo
                    </Link>.
                </p>
            </div>
        </section>
    );
}
