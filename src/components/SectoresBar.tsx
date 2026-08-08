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
        <nav aria-label="Sectores" className="nav-barra">
            <div className="container nav-barra-fila">
                <span className="nav-barra-etiqueta mono-label">¿Tu sector?</span>
                {sectores.map((s) => (
                    <Link key={s.label} href={s.href} className="nav-barra-item">{s.label}</Link>
                ))}
            </div>
            <style>{`
            `}</style>
        </nav>
    );
}
