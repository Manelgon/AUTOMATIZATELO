"use client";
import { motion } from "framer-motion";

const nodos = [
    {
        icon: "fa-brands fa-whatsapp",
        titulo: "Tu cliente escribe",
        desc: "«Hola, quería cita para el jueves por la tarde»",
        etiqueta: "entrada",
    },
    {
        icon: "fa-solid fa-brain",
        titulo: "La IA lo entiende",
        desc: "Identifica quién es, qué quiere y consulta la disponibilidad real",
        etiqueta: "proceso",
    },
    {
        icon: "fa-solid fa-calendar-check",
        titulo: "Se agenda solo",
        desc: "Propone huecos, confirma la cita y la guarda en tu sistema",
        etiqueta: "acción",
    },
    {
        icon: "fa-solid fa-bell",
        titulo: "Nadie se olvida",
        desc: "Recordatorio automático 24h antes; si cancela, el hueco se reofrece",
        etiqueta: "seguimiento",
    },
];

export default function BotDiagram() {
    return (
        <section style={{ padding: "5rem 0" }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: "2.5rem" }}
                >
                    <span className="kicker-mono">Cómo funciona</span>
                    <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                        Esto pasa mientras tú estás a otra cosa
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                        El ejemplo real de un bot de citas — el mismo sistema que gestiona a diario la agenda de una clínica.
                    </p>
                </motion.div>

                <div className="diagrama-flujo">
                    {nodos.map((n, i) => (
                        <motion.div
                            key={n.titulo}
                            className="diagrama-nodo-wrap"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                        >
                            <div className="diagrama-nodo">
                                <span className="mono-label" style={{ color: "var(--color-text-muted)" }}>
                                    {String(i + 1).padStart(2, "0")} · {n.etiqueta}
                                </span>
                                <i className={n.icon} style={{ color: "var(--color-primary)", fontSize: "1.6rem", margin: "0.9rem 0 0.7rem", display: "block" }}></i>
                                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-text-main)", marginBottom: "0.4rem" }}>
                                    {n.titulo}
                                </h3>
                                <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.55, margin: 0 }}>
                                    {n.desc}
                                </p>
                            </div>
                            {i < nodos.length - 1 && <span className="diagrama-conector" aria-hidden="true"></span>}
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .diagrama-flujo {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .diagrama-nodo-wrap {
                    position: relative;
                }
                .diagrama-nodo {
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-md);
                    padding: 1.4rem;
                    height: 100%;
                    box-shadow: var(--shadow-card);
                }
                .diagrama-conector {
                    position: absolute;
                    top: 50%;
                    right: -2rem;
                    width: 2rem;
                    border-top: 2px dashed var(--color-border);
                }
                .diagrama-conector::after {
                    content: "▸";
                    position: absolute;
                    right: -2px;
                    top: -0.72rem;
                    color: var(--color-primary);
                    font-size: 0.85rem;
                }
                @media (max-width: 900px) {
                    .diagrama-flujo { grid-template-columns: 1fr 1fr; gap: 1.2rem; }
                    .diagrama-conector { display: none; }
                }
                @media (max-width: 520px) {
                    .diagrama-flujo { grid-template-columns: 1fr; }
                }
            `}</style>
        </section>
    );
}
