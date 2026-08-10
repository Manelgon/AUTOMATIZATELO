"use client";
import { motion } from "framer-motion";

// =============================================================================
// TESTIMONIO — split compacto sobre tinta: presentación a la izquierda, la
// reseña real de Google (AFC Academia, 5★) a tamaño de lectura a la derecha.
// Cuando haya más reseñas, se apilan en la columna derecha.
// =============================================================================

const FICHA_GOOGLE =
    "https://www.google.com/maps/place/Automatizatelo/@41.2225644,1.7452843,17z";

export default function TestimonioHome() {
    return (
        <section id="testimonio" className="tms-banda">
            <div className="container tms-grid">
                <div className="tms-izq">
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Testimonios</span>
                    <h2 className="tms-titulo">Lo que dicen quienes ya lo usan</h2>
                    <a href={FICHA_GOOGLE} target="_blank" rel="noopener noreferrer" className="tms-google">
                        <span className="tms-estrellas" aria-label="5 de 5 estrellas">★★★★★</span>
                        <span>Opiniones reales, verificables en Google →</span>
                    </a>
                </div>

                <motion.figure
                    className="tms-item"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                    <blockquote className="tms-cita">
                        {/* Lo que vende no se hace esperar al final del párrafo */}
                        <p className="tms-destacado">
                            &ldquo;Hemos eliminado el error humano y ahorrado cientos de horas
                            de gestión administrativa.&rdquo;
                        </p>
                        <p className="tms-resto">
                            No podemos estar más satisfechos. Han transformado por completo la
                            operativa de AFC Academia: captación de leads, panel de gestión en
                            tiempo real y la parte más compleja — FUNDAE — automatizada, con
                            generación de documentos y envío inmediato.
                        </p>
                    </blockquote>
                    <figcaption className="tms-pie">
                        <span className="tms-logo">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/clients/afcademia.png" alt="AFC Academia" loading="lazy" />
                        </span>
                        <span className="tms-autor">
                            <strong>AFC Academia</strong>
                            <span className="tms-rol">Academia de formación</span>
                        </span>
                    </figcaption>
                </motion.figure>
            </div>

            <style>{`
                .tms-banda {
                    background: #1c1917;
                    padding: 3.2rem 0;
                }
                .tms-grid {
                    display: grid;
                    grid-template-columns: 0.8fr 1.2fr;
                    gap: 4rem;
                    align-items: center;
                }
                .tms-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.6vw, 2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    letter-spacing: -0.01em;
                    line-height: 1.15;
                    margin: 0.8rem 0 0.9rem;
                }
                .tms-google {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.7);
                    transition: color 0.2s ease;
                }
                .tms-google:hover { color: #f6c39c; }
                .tms-estrellas { color: #eab308; letter-spacing: 0.1em; font-size: 1rem; }
                .tms-item {
                    margin: 0;
                    border-left: 2px solid rgba(246, 195, 156, 0.45);
                    padding-left: 1.6rem;
                }
                .tms-cita {
                    margin: 0 0 1.1rem;
                    font-size: 1.02rem;
                    line-height: 1.7;
                    color: rgba(250, 246, 239, 0.88);
                }
                .tms-destacado {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.25rem, 2.4vw, 1.7rem);
                    font-weight: 600;
                    line-height: 1.28;
                    letter-spacing: -0.01em;
                    color: #f6c39c;
                    margin: 0 0 0.9rem;
                }
                .tms-resto {
                    margin: 0;
                    color: rgba(250, 246, 239, 0.72);
                    font-size: 0.95rem;
                    line-height: 1.7;
                }
                .tms-pie {
                    display: flex;
                    align-items: center;
                    gap: 0.9rem;
                }
                .tms-logo {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: #faf6ef;
                    border-radius: 8px;
                    padding: 0.28rem 0.5rem;
                }
                .tms-logo img { height: 24px; width: auto; max-width: 95px; object-fit: contain; display: block; }
                .tms-autor { display: flex; flex-direction: column; line-height: 1.3; }
                .tms-autor strong { color: #faf6ef; font-size: 0.95rem; }
                .tms-rol { font-size: 0.8rem; color: rgba(250, 246, 239, 0.6); }
                @media (max-width: 800px) {
                    .tms-grid { grid-template-columns: 1fr; gap: 1.8rem; }
                    .tms-banda { padding: 2.6rem 0; }
                }
            `}</style>
        </section>
    );
}
