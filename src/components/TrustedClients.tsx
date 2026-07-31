import Link from "next/link";

const casos = [
    {
        logo: "/clients/serincosol.png",
        nombre: "Serincosol",
        resultado: "Panel de fincas en uso diario desde enero de 2026",
    },
    {
        icono: "fa-stethoscope",
        nombre: "Clínica estética · Ibiza",
        resultado: "Bot de citas por WhatsApp 24/7 con RGPD sanitario",
    },
    {
        logo: "/clients/henkoaching.png",
        nombre: "Henkoaching",
        resultado: "SaaS completo con portal de empleo propio",
    },
    {
        icono: "fa-school",
        nombre: "Comedores escolares · Cataluña",
        resultado: "Ausencias de cientos de familias, por WhatsApp",
    },
    {
        logo: "/clients/afcademia.png",
        nombre: "AFCademia",
        resultado: "Panel de academia y cursos e-learning",
    },
];

export default function TrustedClients() {
    return (
        <section id="trusted-clients" style={{ padding: "4.5rem 0" }}>
            <div className="container">
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "1rem", marginBottom: "2.5rem" }}>
                    <div>
                        <span className="kicker-mono">Proyectos de éxito</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Sistemas que ya funcionan, y quién los usa
                        </h2>
                    </div>
                    <Link href="/casos-de-exito" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                        Ver los casos completos →
                    </Link>
                </div>
            </div>

            {/* Cinta de casos en movimiento (pausa al pasar el ratón) */}
            <div className="casos-marquee">
                <div className="casos-marquee-track">
                    {[...casos, ...casos].map((c, i) => (
                        <Link
                            key={`${c.nombre}-${i}`}
                            href="/casos-de-exito"
                            className="caso-chip"
                            aria-hidden={i >= casos.length}
                            tabIndex={i >= casos.length ? -1 : undefined}
                        >
                            <div className="caso-chip-marca">
                                {"logo" in c && c.logo ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={c.logo} alt={c.nombre} loading="lazy" />
                                ) : (
                                    <span className="caso-chip-icono">
                                        <i className={`fa-solid ${"icono" in c ? c.icono : ""}`}></i>
                                    </span>
                                )}
                                <span className="caso-chip-nombre">{c.nombre}</span>
                            </div>
                            <span className="mono-label" style={{ color: "var(--color-text-muted)" }}>
                                {c.resultado}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            <style>{`
                .casos-marquee {
                    overflow: hidden;
                    -webkit-mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
                    mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
                    padding: 0.5rem 0 1rem;
                }
                .casos-marquee-track {
                    display: flex;
                    gap: 1.2rem;
                    width: max-content;
                    animation: marquee 45s linear infinite;
                }
                .casos-marquee:hover .casos-marquee-track {
                    animation-play-state: paused;
                }
                .caso-chip {
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    width: 340px;
                    padding: 1.5rem 1.7rem;
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-md);
                    box-shadow: var(--shadow-card);
                    color: inherit;
                    transition: transform 0.25s ease, border-color 0.25s ease;
                }
                .caso-chip:hover {
                    transform: translateY(-4px);
                    border-color: rgba(234, 88, 12, 0.4);
                }
                .caso-chip-marca {
                    display: flex;
                    align-items: center;
                    gap: 0.9rem;
                }
                .caso-chip-marca img {
                    height: 34px;
                    width: auto;
                    max-width: 130px;
                    object-fit: contain;
                }
                .caso-chip-icono {
                    width: 38px;
                    height: 38px;
                    border-radius: 10px;
                    background: rgba(234, 88, 12, 0.12);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-primary);
                    font-size: 1.1rem;
                    flex-shrink: 0;
                }
                .caso-chip-nombre {
                    font-family: var(--font-display, serif);
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    line-height: 1.2;
                }
                @media (prefers-reduced-motion: reduce) {
                    .casos-marquee-track {
                        animation: none;
                        flex-wrap: wrap;
                        width: 100%;
                    }
                }
                @media (max-width: 600px) {
                    .caso-chip { width: 280px; padding: 1.2rem 1.4rem; }
                }
            `}</style>
        </section>
    );
}
