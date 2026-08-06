"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Tres pilares, como el menú: formarse, cumplir, automatizar. Cada uno lleva
// a su página hub, y desde ahí a las especializadas.
const servicios = [
    {
        icon: "fa-graduation-cap",
        titulo: "Formación en IA",
        desc: "Alfabetización del Art. 4 — obligatoria desde 2025 — y formación in-company para despachos, directivos y claustros. Con certificados.",
        href: "/servicios/formacion-ia-empresas",
    },
    {
        icon: "fa-clipboard-check",
        titulo: "Consultoría y cumplimiento",
        desc: "Auditoría del AI Act con informe y plan, política de uso, y ChatGPT, Copilot o tu CRM implantados con cabeza.",
        href: "/servicios/auditoria-ia",
    },
    {
        icon: "fa-gears",
        titulo: "Automatización y sistemas",
        desc: "Procesos que se hacen solos: integración entre tus herramientas, chatbots de WhatsApp y web, lectura de documentos y paneles a medida.",
        href: "/servicios/automatizacion",
    },
];

export default function QueAutomatizamos() {
    const [activo, setActivo] = useState<number | null>(null);

    return (
        <section id="que-automatizamos" style={{ padding: "6.5rem 0 0", marginBottom: "-6rem" }}>
            <div className="container">
                <div style={{ marginBottom: "2rem" }}>
                    <span className="kicker-mono">Qué implanto</span>
                    <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                        Lo que puedo implantar en tu negocio
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                        Todo con precio cerrado, sin permanencia, y el código y los datos siempre tuyos.
                    </p>
                </div>

                <div onMouseLeave={() => setActivo(null)}>
                    {servicios.map((s, i) => (
                        <motion.div
                            key={s.titulo}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Link
                                href={s.href}
                                className={`qa-fila ${activo !== null && activo !== i ? "qa-fila-apagada" : ""}`}
                                onMouseEnter={() => setActivo(i)}
                            >
                                <span className="qa-num mono-label">{String(i + 1).padStart(2, "0")}</span>
                                <i className={`fa-solid ${s.icon} qa-icono`}></i>
                                <span className="qa-textos">
                                    <span className="qa-titulo">{s.titulo}</span>
                                    <span className="qa-desc">{s.desc}</span>
                                </span>
                                <span className="qa-flecha">→</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .qa-fila {
                    display: grid;
                    grid-template-columns: 3.2rem auto 1fr auto;
                    align-items: center;
                    gap: 1.2rem;
                    padding: 1.5rem 0.5rem;
                    border-top: 1px solid var(--color-border);
                    color: inherit;
                    transition: opacity 0.3s ease, padding-left 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }
                div:last-child > .qa-fila {
                    border-bottom: 1px solid var(--color-border);
                }
                .qa-fila:hover {
                    padding-left: 1.2rem;
                }
                .qa-fila-apagada {
                    opacity: 0.35;
                }
                .qa-num {
                    color: var(--color-text-muted);
                }
                .qa-icono {
                    color: var(--color-primary);
                    font-size: 1.5rem;
                    width: 2rem;
                    text-align: center;
                    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .qa-fila:hover .qa-icono {
                    transform: scale(1.2) rotate(4deg);
                }
                .qa-textos {
                    display: flex;
                    flex-direction: column;
                    gap: 0.15rem;
                    min-width: 0;
                }
                .qa-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.3rem, 2.6vw, 1.9rem);
                    font-weight: 600;
                    color: var(--color-text-main);
                    line-height: 1.2;
                }
                .qa-desc {
                    font-size: 0.92rem;
                    color: var(--color-text-muted);
                    line-height: 1.5;
                }
                .qa-flecha {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: var(--color-primary);
                    transition: transform 0.25s ease;
                }
                .qa-fila:hover .qa-flecha {
                    transform: translateX(6px);
                }
                @media (max-width: 900px) {
                    #que-automatizamos {
                        margin-bottom: 0 !important;
                        padding: 3.5rem 0 2rem !important;
                    }
                    .qa-fila-apagada { opacity: 1; }
                    .qa-fila:hover { padding-left: 0.5rem; }
                }
                @media (max-width: 600px) {
                    .qa-fila {
                        grid-template-columns: auto 1fr auto;
                        gap: 0.9rem;
                        padding: 1.2rem 0.2rem;
                    }
                    .qa-num { display: none; }
                    .qa-icono { font-size: 1.2rem; width: 1.6rem; }
                }
            `}</style>
        </section>
    );
}
