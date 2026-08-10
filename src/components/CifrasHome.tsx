"use client";
import { motion } from "framer-motion";
import Link from "next/link";

// =============================================================================
// BANDA OSCURA DE CIFRAS — prueba en números grandes (ritmo tipo iActa)
// =============================================================================
// Solo cifras comprobables: las tres primeras se pueden contar en /casos y
// /sistemas. Si algún día hay un dato de alumnos formados que se sostenga,
// entra aquí — pero nunca una cifra que no se pueda enseñar.
// =============================================================================

const cifras = [
    { valor: "5", etiqueta: "sistemas en producción" },
    { valor: "6", etiqueta: "sectores con su propio sistema" },
    { valor: "3 años", etiqueta: "de IA aplicada a negocios reales" },
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
            {/* La home no tenia camino a precios salvo por el menu */}
            <p className="cf-pie">
                <Link href="/precios">15 servicios · precios públicos, sin sorpresas →</Link>
            </p>

            <style>{`
                .cf-banda {
                    background: #1c1917;
                    padding: 2.2rem 0 2.6rem;
                }
                .cf-pie {
                    margin: 1.8rem 0 0;
                    text-align: center;
                }
                .cf-pie a {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: #f6c39c;
                }
                .cf-pie a:hover { color: #faf6ef; }
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
