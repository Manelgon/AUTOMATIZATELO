"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// =============================================================================
// LOS 3 PILARES — paneles a sangre con foto y velo tinta (como las puertas
// de la portada de formación). Tres columnas iguales: la jerarquía del navbar.
// =============================================================================

const pilares = [
    {
        foto: "/claustro.webp",
        num: "01",
        kicker: "Formar",
        titulo: "Alfabetización + tu herramienta",
        desc: "El Art. 4 — obligatorio desde 2025 — y cursos de ChatGPT, Copilot, Gemini o Claude con vuestros casos reales. Con certificado.",
        href: "/formacion",
        cta: "Ver formaciones",
    },
    {
        foto: "/auditoria.webp",
        num: "02",
        kicker: "Cumplir",
        titulo: "El Reglamento, sin sustos",
        desc: "Diagnóstico del AI Act, política de uso redactada y el expediente completo que te defiende ante una inspección o un cliente grande.",
        href: "/cumplimiento",
        cta: "Ver cumplimiento",
    },
    {
        foto: "/servicios-hero.webp",
        num: "03",
        kicker: "Automatizar",
        titulo: "Sistemas que trabajan solos",
        desc: "Integraciones entre tus herramientas, chatbots de WhatsApp, lectura de documentos y paneles a medida.",
        href: "/sistemas",
        cta: "Ver sistemas",
    },
];

export default function PilaresHome() {
    return (
        <section id="pilares" style={{ padding: 0 }}>
            <div className="ph-paneles">
                {pilares.map((p, i) => (
                    <motion.div
                        key={p.kicker}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: "flex" }}
                    >
                        <Link href={p.href} className="ph-panel">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="ph-panel-fondo" src={p.foto} alt="" aria-hidden="true" loading="lazy" />
                            <span className="ph-panel-velo" aria-hidden="true"></span>
                            <span className="ph-panel-marca" aria-hidden="true">{p.num}</span>
                            <span className="ph-panel-cuerpo">
                                <span className="ph-panel-kicker mono-label">{p.kicker}</span>
                                <span className="ph-panel-titulo">{p.titulo}</span>
                                <span className="ph-panel-desc">{p.desc}</span>
                                <span className="ph-panel-cta">{p.cta} →</span>
                            </span>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <style>{`
                .ph-paneles {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                }
                .ph-paneles > div { display: flex; }
                .ph-panel {
                    position: relative;
                    display: flex;
                    align-items: flex-end;
                    min-height: 27rem;
                    width: 100%;
                    overflow: hidden;
                    color: inherit;
                    background: #1c1917;
                }
                .ph-panel-fondo {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .ph-panel:hover .ph-panel-fondo { transform: scale(1.04); }
                .ph-panel-velo {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(28,25,23,0.35) 0%, rgba(28,25,23,0.55) 45%, rgba(28,25,23,0.85) 100%);
                }
                .ph-panel-marca {
                    position: absolute;
                    top: 1rem;
                    left: 1.5rem;
                    font-family: var(--font-display, serif);
                    font-size: clamp(3.5rem, 6vw, 5.5rem);
                    font-weight: 700;
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.16);
                    pointer-events: none;
                }
                .ph-panel-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                    padding: 6rem 1.8rem 2rem;
                }
                .ph-panel-kicker { color: #f6c39c; }
                .ph-panel-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.3rem, 2.2vw, 1.7rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                }
                .ph-panel-desc {
                    font-size: 0.93rem;
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.6;
                }
                .ph-panel-cta {
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    margin-top: 0.4rem;
                    transition: transform 0.25s ease;
                }
                .ph-panel:hover .ph-panel-cta { transform: translateX(6px); }
                @media (max-width: 900px) {
                    .ph-paneles { grid-template-columns: 1fr; }
                    .ph-panel { min-height: 22rem; }
                    .ph-panel-cuerpo { padding: 4.5rem 1.4rem 1.6rem; }
                    #pilares { padding: 0 !important; }
                }
            `}</style>
        </section>
    );
}
