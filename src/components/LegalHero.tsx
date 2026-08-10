import Link from "next/link";

// =============================================================================
// CABECERA DE LAS PÁGINAS LEGALES
// =============================================================================
// Las cuatro legales eran lo último en v1: título centrado sobre crema y
// tarjetas con sombra. Aquí comparten el hero de tinta del resto del sitio y,
// de paso, la tira que las enlaza entre ellas — antes eran cuatro callejones
// a los que solo se llegaba desde el pie.
// =============================================================================

const LEGALES = [
    { href: "/aviso-legal", t: "Aviso legal" },
    { href: "/proteccion-datos", t: "Protección de datos" },
    { href: "/politica-cookies", t: "Cookies" },
    { href: "/declaracion-accesibilidad", t: "Accesibilidad" },
];

export default function LegalHero({
    kicker,
    titulo,
    bajada,
    actualizado,
    activa,
    children,
}: {
    kicker: string;
    titulo: string;
    bajada: string;
    /** "Mayo 2026" — se muestra tal cual */
    actualizado?: string;
    /** href de esta misma página, para marcarla en la tira */
    activa: string;
    /** botón u otro control opcional bajo la bajada */
    children?: React.ReactNode;
}) {
    return (
        <>
            <section style={{ background: "#1c1917", padding: "9rem 0 3.2rem" }}>
                <div className="container" style={{ maxWidth: 820 }}>
                    <span className="kicker-mono" style={{ color: "#f6c39c" }}>{kicker}</span>
                    <h1 className="lg2-titulo">{titulo}</h1>
                    <p className="lg2-bajada">{bajada}</p>
                    {actualizado && (
                        <p className="lg2-fecha mono-label">Última actualización: {actualizado}</p>
                    )}
                    {children}
                </div>
            </section>

            <nav aria-label="Textos legales" className="nav-barra">
                <div className="container nav-barra-fila">
                    <span className="nav-barra-etiqueta mono-label">Textos legales</span>
                    {LEGALES.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={`nav-barra-item ${l.href === activa ? "nav-barra-activa" : ""}`}
                            aria-current={l.href === activa ? "page" : undefined}
                        >
                            {l.t}
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
}
