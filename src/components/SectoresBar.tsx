import Link from "next/link";

// =============================================================================
// BARRA DE SECTORES — tinta, estilo tabs de formación. Componente propio para
// poder colocarla donde pida el ritmo del home.
// =============================================================================

const sectores = [
    { label: "Fincas", href: "/sectores/administradores-fincas" },
    { label: "Despachos", href: "/sectores/despachos" },
    { label: "Academias", href: "/sectores/academias" },
    { label: "RRHH", href: "/sectores/rrhh" },
    { label: "Centros educativos", href: "/formacion/centros-educativos" },
    { label: "Directivos", href: "/formacion/directivos" },
];

export default function SectoresBar() {
    return (
        <nav aria-label="Sectores" className="sb-barra">
            <div className="container sb-pistas">
                <span className="sb-etiqueta mono-label">¿Tu sector?</span>
                {sectores.map((s) => (
                    <Link key={s.label} href={s.href} className="sb-tab">{s.label}</Link>
                ))}
            </div>
            <style>{`
                .sb-barra {
                    background: #1c1917;
                    border-top: 1px solid rgba(250, 246, 239, 0.08);
                    border-bottom: 1px solid rgba(250, 246, 239, 0.08);
                }
                .sb-pistas {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                    gap: 0.15rem 0.25rem;
                    padding-top: 0.55rem;
                    padding-bottom: 0.55rem;
                }
                .sb-etiqueta {
                    color: #f6c39c;
                    padding: 0.5rem 0.9rem 0.5rem 0;
                    white-space: nowrap;
                }
                .sb-tab {
                    flex: 1 1 auto;
                    text-align: center;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.65);
                    padding: 0.5rem 0.9rem;
                    border-radius: 8px;
                    white-space: nowrap;
                    transition: color 0.2s ease, background 0.2s ease;
                }
                .sb-tab:hover { color: #faf6ef; background: rgba(250, 246, 239, 0.07); }
            `}</style>
        </nav>
    );
}
