"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const dolores = [
    {
        icon: "fa-envelope-open-text",
        titulo: "Contestar los mismos mensajes uno a uno, todos los días",
        detalle: "Mientras respondes al décimo, el undécimo ya se ha ido a la competencia.",
    },
    {
        icon: "fa-copy",
        titulo: "Copiar datos de una herramienta a otra, a mano",
        detalle: "Cada copia-pega es un error esperando su momento.",
    },
    {
        icon: "fa-file-invoice",
        titulo: "Hacer facturas y documentos uno por uno",
        detalle: "Horas de administración que no facturas a nadie.",
    },
    {
        icon: "fa-calendar-check",
        titulo: "Apuntar reservas y pedidos por teléfono",
        detalle: "Si no llegas a cogerlo, esa reserva nunca existió.",
    },
    {
        icon: "fa-chart-bar",
        titulo: "Montar el mismo informe cada semana",
        detalle: "El lunes se va en contar lo que pasó, no en mejorarlo.",
    },
    {
        icon: "fa-user-clock",
        titulo: "Perder clientes por no hacer seguimiento a tiempo",
        detalle: "Un lead sin respuesta en 5 minutos pierde la mitad del interés.",
    },
];

const TOTAL = dolores.length + 1;

// Carta del mazo: invisible mientras se acerca, se materializa al posarse
function CartaMazo({ extra, children }: { extra?: string; children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.75", "start 0.5"],
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.div ref={ref} className={`op-card ${extra ?? ""}`} style={{ opacity }}>
            {children}
        </motion.div>
    );
}

export default function Opportunity() {
    return (
        <section id="problema" style={{
            background: 'var(--color-bg-secondary)',
            padding: '4.5rem 0',
            borderTop: '1px solid var(--color-border)',
            borderBottom: '1px solid var(--color-border)',
        }}>
            <div className="container">
                <div className="op-layout">
                    {/* Columna izquierda: fija mientras se apilan las cartas */}
                    <div className="op-sticky">
                        <span className="kicker-mono">El problema</span>
                        <h2 className="section-title" style={{ textAlign: 'left', marginTop: '0.8rem', marginBottom: '1rem' }}>
                            Estas tareas te están costando clientes (y no lo sabes)
                        </h2>
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: 420, marginBottom: '1.5rem' }}>
                            Cada hora en tareas manuales es una hora menos vendiendo.
                            Sigue bajando — seguro que alguna te suena.
                        </p>
                        <a href="#contact" className="btn btn-primary" style={{ fontSize: '0.95rem', padding: '0.8rem 1.8rem', display: 'inline-block' }}>
                            Te lo digo en 30 minutos, gratis
                        </a>
                    </div>

                    {/* Columna derecha: mazo de cartas — cada una se materializa sobre la anterior */}
                    <div className="op-cards">
                        {dolores.map((d, i) => (
                            <CartaMazo key={d.titulo}>
                                <span className="mono-label" style={{ color: 'rgba(250,246,239,0.75)' }}>
                                    {String(i + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
                                </span>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem', margin: '1.1rem 0 0.8rem' }}>
                                    <i className={`fa-solid ${d.icon}`} style={{ color: '#f6c39c', fontSize: '2rem', flexShrink: 0, marginTop: '0.35rem' }}></i>
                                    <h3 style={{
                                        fontFamily: 'var(--font-display, serif)',
                                        fontSize: 'clamp(1.4rem, 2.6vw, 2rem)',
                                        fontWeight: 600,
                                        color: '#faf6ef',
                                        lineHeight: 1.25,
                                        margin: 0,
                                    }}>
                                        {d.titulo}
                                    </h3>
                                </div>
                                <p style={{ color: 'rgba(250,246,239,0.82)', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
                                    {d.detalle}
                                </p>
                            </CartaMazo>
                        ))}

                        {/* Última carta: el giro — resultados */}
                        <CartaMazo extra="op-card-final">
                            <span className="mono-label" style={{ color: 'rgba(255,255,255,0.8)' }}>
                                {String(TOTAL).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")} · la buena noticia
                            </span>
                            <h3 style={{
                                fontFamily: 'var(--font-display, serif)',
                                fontSize: 'clamp(1.4rem, 2.6vw, 2rem)',
                                fontWeight: 600,
                                color: '#fff',
                                lineHeight: 1.25,
                                margin: '1.1rem 0 1.2rem',
                            }}>
                                Cuando lo automatizas:
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                                {[
                                    { stat: '+10h', label: 'recuperadas / semana' },
                                    { stat: '−40%', label: 'errores operativos' },
                                    { stat: '×2', label: 'capacidad sin contratar' },
                                ].map(s => (
                                    <div key={s.stat}>
                                        <div style={{ fontFamily: 'var(--font-display, serif)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 600, color: '#fff', lineHeight: 1 }}>{s.stat}</div>
                                        <div className="mono-label" style={{ color: 'rgba(255,255,255,0.85)', marginTop: '0.4rem' }}>{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </CartaMazo>
                    </div>
                </div>
            </div>

            <style>{`
                .op-layout {
                    display: grid;
                    grid-template-columns: 1fr 1.1fr;
                    gap: 3rem;
                    align-items: start;
                }
                .op-sticky {
                    position: sticky;
                    top: calc(50vh - 190px);
                }
                /* Mazo de cartas: todas comparten contenedor, cada una se queda
                   pegada arriba y la siguiente se materializa encima al llegar. */
                .op-cards {
                    display: flex;
                    flex-direction: column;
                }
                .op-card {
                    position: sticky;
                    top: calc(50vh - 150px);
                    background: linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%);
                    border: none;
                    border-radius: var(--radius-lg);
                    padding: 2rem 2.2rem 1.6rem;
                    box-shadow: 0 -15px 40px rgba(28, 25, 23, 0.22);
                    height: 300px;
                }
                .op-card + .op-card {
                    margin-top: 20vh;
                }
                .op-card-final {
                    background: var(--color-primary);
                    border-color: var(--color-primary);
                }
                @media (max-width: 900px) {
                    .op-layout {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    .op-sticky {
                        position: static;
                    }
                    .op-card {
                        position: static;
                        padding: 1.6rem;
                        height: auto;
                        opacity: 1 !important;
                    }
                    .op-card + .op-card {
                        margin-top: 1rem;
                    }
                }
            `}</style>
        </section>
    );
}
