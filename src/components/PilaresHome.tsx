"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// =============================================================================
// LOS 3 PILARES COMO CARDS CON FOTO (estructura tipo iActa, vestida de casa)
// =============================================================================
// Sustituye en el home a QueAutomatizamos + Opportunity + UseCases: el mapa
// del sitio en un vistazo. Cada card lleva a su hub; la fila de sectores
// recoge el tráfico que buscaba "su" caso.
// =============================================================================

const pilares = [
    {
        foto: "/claustro.webp",
        num: "01",
        titulo: "Formar",
        desc: "Alfabetización del Art. 4 — obligatoria desde 2025 — y cursos de ChatGPT, Copilot, Gemini o Claude con vuestros casos reales. Con certificado.",
        href: "/formacion",
        cta: "Ver formaciones",
    },
    {
        foto: "/auditoria.webp",
        num: "02",
        titulo: "Cumplir",
        desc: "Diagnóstico del Reglamento Europeo de IA, política de uso redactada y el expediente completo que te defiende ante una inspección o un cliente grande.",
        href: "/cumplimiento",
        cta: "Ver cumplimiento",
    },
    {
        foto: "/servicios-hero.webp",
        num: "03",
        titulo: "Automatizar",
        desc: "Procesos que se hacen solos: integraciones entre tus herramientas, chatbots de WhatsApp, lectura de documentos y paneles a medida.",
        href: "/sistemas",
        cta: "Ver sistemas",
    },
];

const sectores = [
    { label: "Fincas", href: "/automatizacion-administradores-fincas" },
    { label: "Clínicas", href: "/automatizacion-clinicas" },
    { label: "Despachos", href: "/automatizacion-despachos" },
    { label: "Academias", href: "/automatizacion-academias" },
    { label: "Centros educativos", href: "/formacion-ia-centros-educativos" },
    { label: "Empresas de servicios", href: "/automatizacion-empresas-servicios" },
];

export default function PilaresHome() {
    return (
        <section id="pilares" style={{ padding: "6.5rem 0 5rem" }}>
            <div className="container">
                <div style={{ marginBottom: "2.5rem" }}>
                    <span className="kicker-mono">Qué implanto</span>
                    <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                        Tres maneras de empezar
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                        Todo con precio cerrado, sin permanencia, y el código y los datos siempre tuyos.
                    </p>
                </div>

                <div className="ph-grid">
                    {pilares.map((p, i) => (
                        <motion.div
                            key={p.titulo}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Link href={p.href} className="ph-card">
                                <span className="ph-foto">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={p.foto} alt={p.titulo} loading="lazy" />
                                    <span className="ph-num mono-label">{p.num}</span>
                                </span>
                                <span className="ph-cuerpo">
                                    <span className="ph-titulo">{p.titulo}</span>
                                    <span className="ph-desc">{p.desc}</span>
                                    <span className="ph-cta">{p.cta} →</span>
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="ph-sectores">
                    <span className="mono-label" style={{ color: "var(--color-text-muted)" }}>¿Tu sector?</span>
                    {sectores.map((s) => (
                        <Link key={s.label} href={s.href} className="ph-sector-chip">{s.label}</Link>
                    ))}
                </div>
            </div>

            <style>{`
                .ph-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                }
                .ph-card {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-md);
                    box-shadow: var(--shadow-card);
                    overflow: hidden;
                    color: inherit;
                    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
                }
                .ph-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(234, 88, 12, 0.4);
                }
                .ph-foto {
                    position: relative;
                    display: block;
                    aspect-ratio: 16 / 9;
                    overflow: hidden;
                }
                .ph-foto img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .ph-card:hover .ph-foto img { transform: scale(1.05); }
                .ph-num {
                    position: absolute;
                    top: 0.8rem;
                    left: 0.8rem;
                    background: rgba(28, 25, 23, 0.82);
                    color: #f6c39c;
                    padding: 0.25rem 0.6rem;
                    border-radius: 6px;
                }
                .ph-cuerpo {
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                    padding: 1.4rem 1.5rem 1.6rem;
                    flex: 1;
                }
                .ph-titulo {
                    font-family: var(--font-display, serif);
                    font-size: 1.45rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                }
                .ph-desc {
                    font-size: 0.93rem;
                    color: var(--color-text-muted);
                    line-height: 1.55;
                    flex: 1;
                }
                .ph-cta {
                    color: var(--color-primary);
                    font-weight: 600;
                    font-size: 0.95rem;
                }
                .ph-sectores {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 0.6rem;
                    margin-top: 2rem;
                }
                .ph-sector-chip {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: 50px;
                    padding: 0.4rem 1rem;
                    transition: border-color 0.2s ease, color 0.2s ease;
                }
                .ph-sector-chip:hover {
                    border-color: var(--color-primary);
                    color: var(--color-primary);
                }
                @media (max-width: 900px) {
                    .ph-grid { grid-template-columns: 1fr; }
                    #pilares { padding: 4rem 0 3.5rem !important; }
                }
            `}</style>
        </section>
    );
}
