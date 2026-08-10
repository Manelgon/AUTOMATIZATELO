import Link from "next/link";

// =============================================================================
// CASOS DE ÉXITO — banda tinta estilo "herramientas": etiqueta centrada y
// cinta en movimiento con entradas planas (sin cards). Va tras el testimonio.
// =============================================================================

const casos = [
    {
        logo: "/clients/serincosol.png",
        nombre: "Serincosol",
        resultado: "Panel de fincas en uso diario desde enero de 2026",
    },
    {
        icono: "fa-stethoscope",
        nombre: "Clínica estética",
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
        <section id="trusted-clients" className="casos-banda">
            <p className="casos-etiqueta">No te cuento lo que podría hacerse. Te enseño lo que ya está funcionando</p>

            {/* Cinta de casos en movimiento (pausa al pasar el ratón) */}
            <div className="casos-marquee">
                <div className="casos-marquee-track">
                    {[...casos, ...casos].map((c, i) => (
                        <Link
                            key={`${c.nombre}-${i}`}
                            href="/casos"
                            className="caso-item"
                            aria-hidden={i >= casos.length}
                            tabIndex={i >= casos.length ? -1 : undefined}
                        >
                            <span className="caso-marca">
                                {"logo" in c && c.logo ? (
                                    <span className="caso-logo">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={c.logo} alt={c.nombre} loading="lazy" />
                                    </span>
                                ) : (
                                    <span className="caso-icono">
                                        <i className={`fa-solid ${"icono" in c ? c.icono : ""}`}></i>
                                    </span>
                                )}
                                <span className="caso-nombre">{c.nombre}</span>
                            </span>
                            <span className="caso-resultado mono-label">{c.resultado}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <p className="casos-enlace">
                <Link href="/casos">Ver los casos completos →</Link>
            </p>

            <style>{`
                .casos-banda {
                    background: #1c1917;
                    padding: 2.6rem 0 2.4rem;
                }
                .casos-etiqueta {
                    text-align: center;
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.55);
                    margin: 0 0 1.6rem;
                }
                .casos-marquee {
                    overflow: hidden;
                    -webkit-mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
                    mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
                }
                .casos-marquee-track {
                    display: flex;
                    align-items: center;
                    gap: 3.5rem;
                    width: max-content;
                    animation: marquee 45s linear infinite;
                }
                .casos-marquee:hover .casos-marquee-track {
                    animation-play-state: paused;
                }
                .caso-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                    width: 300px;
                    color: inherit;
                }
                .caso-marca {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                }
                .caso-logo {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: #faf6ef;
                    border-radius: 8px;
                    padding: 0.3rem 0.55rem;
                    flex-shrink: 0;
                }
                .caso-logo img { height: 24px; width: auto; max-width: 100px; object-fit: contain; display: block; }
                .caso-icono {
                    width: 34px;
                    height: 34px;
                    border-radius: 9px;
                    background: rgba(246, 195, 156, 0.15);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: #f6c39c;
                    font-size: 1rem;
                    flex-shrink: 0;
                }
                .caso-nombre {
                    font-family: var(--font-display, serif);
                    font-size: 1.05rem;
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.2;
                }
                .caso-resultado {
                    color: rgba(250, 246, 239, 0.55);
                }
                .casos-enlace {
                    text-align: center;
                    margin: 1.8rem 0 0;
                }
                .casos-enlace a {
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.92rem;
                }
                .casos-enlace a:hover { color: #faf6ef; }
                @media (max-width: 600px) {
                    .caso-item { width: 260px; }
                }
            `}</style>
        </section>
    );
}
