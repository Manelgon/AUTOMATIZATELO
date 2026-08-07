"use client";
import { motion } from "framer-motion";

// =============================================================================
// BANDA OSCURA DE CIFRAS — prueba en números grandes (ritmo tipo iActa)
// =============================================================================
// ⚠️ NÚMEROS DE PRUEBA: pendientes de sustituir por los reales de Manel
// antes de hacer push. La estructura queda lista; solo se cambia el array.
// =============================================================================

const cifras = [
    { valor: "120+", etiqueta: "personas formadas en IA" },
    { valor: "30+", etiqueta: "automatizaciones en producción" },
    { valor: "6", etiqueta: "sectores con sistema propio" },
    { valor: "100%", etiqueta: "precio cerrado por escrito" },
];

export default function CifrasHome() {
    return (
        <section className="cf-banda">
            <div className="container cf-grid">
                {cifras.map((c, i) => (
                    <motion.div
                        key={c.etiqueta}
                        className="cf-item"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="cf-valor">{c.valor}</span>
                        <span className="cf-etiqueta">{c.etiqueta}</span>
                    </motion.div>
                ))}
            </div>

            <style>{`
                .cf-banda {
                    background: #1c1917;
                    padding: 2.2rem 0 2.6rem;
                }
                .cf-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .cf-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .cf-valor {
                    font-family: var(--font-display, serif);
                    font-size: clamp(2.2rem, 4vw, 3rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .cf-etiqueta {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.78rem;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                @media (max-width: 900px) {
                    .cf-banda { padding: 3rem 0; }
                    .cf-grid { grid-template-columns: repeat(2, 1fr); gap: 2.2rem 1rem; }
                }
            `}</style>
        </section>
    );
}
