"use client";
import { motion } from "framer-motion";

// =============================================================================
// TESTIMONIO — la reseña real de Google Business (AFC Academia, 5★)
// =============================================================================
// Texto literal de la reseña pública de Google Maps, recortado a las frases
// centrales para el home. El enlace lleva a la ficha, donde está completa.
// =============================================================================

const FICHA_GOOGLE =
    "https://www.google.com/maps/place/Automatizatelo/@41.2225644,1.7452843,17z";

export default function TestimonioHome() {
    return (
        <section id="testimonio" style={{ padding: "6rem 0 1rem" }}>
            <div className="container">
                <motion.figure
                    className="tm-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="tm-comillas">&ldquo;</span>
                    <blockquote className="tm-cita">
                        No podemos estar más satisfechos. Han transformado por completo la
                        operativa de AFC Academia: captación de leads, panel de gestión en
                        tiempo real y la parte más compleja — FUNDAE — automatizada, con
                        generación de documentos y envío inmediato.{" "}
                        <strong>
                            Hemos eliminado el error humano y ahorrado cientos de horas de
                            gestión administrativa.
                        </strong>
                    </blockquote>
                    <figcaption className="tm-pie">
                        <span className="tm-autor">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/clients/afcademia.png" alt="AFC Academia" loading="lazy" />
                            <span>
                                <strong>AFC Academia</strong>
                                <span className="tm-rol">Academia de formación</span>
                            </span>
                        </span>
                        <a href={FICHA_GOOGLE} target="_blank" rel="noopener noreferrer" className="tm-google">
                            <span className="tm-estrellas" aria-label="5 de 5 estrellas">★★★★★</span>
                            <span>Reseña verificable en Google</span>
                        </a>
                    </figcaption>
                </motion.figure>
            </div>

            <style>{`
                .tm-card {
                    position: relative;
                    margin: 0;
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-md);
                    box-shadow: var(--shadow-card);
                    padding: 3rem 3.2rem 2.4rem;
                    max-width: 880px;
                    margin: 0 auto;
                }
                .tm-comillas {
                    position: absolute;
                    top: 0.6rem;
                    left: 1.6rem;
                    font-family: var(--font-display, serif);
                    font-size: 5rem;
                    line-height: 1;
                    color: rgba(234, 88, 12, 0.25);
                    pointer-events: none;
                }
                .tm-cita {
                    margin: 0 0 1.8rem;
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.15rem, 2.2vw, 1.45rem);
                    line-height: 1.55;
                    color: var(--color-text-main);
                }
                .tm-cita strong { color: var(--color-primary); font-weight: 600; }
                .tm-pie {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    border-top: 1px solid var(--color-border);
                    padding-top: 1.4rem;
                }
                .tm-autor {
                    display: flex;
                    align-items: center;
                    gap: 0.9rem;
                }
                .tm-autor img { height: 36px; width: auto; max-width: 120px; object-fit: contain; }
                .tm-autor > span { display: flex; flex-direction: column; line-height: 1.3; }
                .tm-rol { font-size: 0.82rem; color: var(--color-text-muted); }
                .tm-google {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    font-size: 0.85rem;
                    color: var(--color-text-muted);
                    transition: color 0.2s ease;
                }
                .tm-google:hover { color: var(--color-primary); }
                .tm-estrellas { color: #eab308; letter-spacing: 0.1em; font-size: 1rem; }
                @media (max-width: 600px) {
                    .tm-card { padding: 2.2rem 1.5rem 1.8rem; }
                    #testimonio { padding: 4rem 0 0.5rem !important; }
                }
            `}</style>
        </section>
    );
}
