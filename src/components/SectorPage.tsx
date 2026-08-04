"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export interface SectorPageProps {
    sector: string;
    sectorSlug: string;
    icon: string;
    color: string;
    heroKicker: string;
    heroTitle: React.ReactNode;
    heroSubtitle: string;
    heroImagen?: string;
    heroPosicion?: string;
    painPoints: { icon: string; text: string }[];
    solutions: { icon: string; title: string; description: string }[];
    results: { stat: string; label: string }[];
    faqs: { question: string; answer: string }[];
    /** Siguiente paso: servicios y pruebas que le tocan a este sector */
    relacionados?: { href: string; icon: string; titulo: string; desc: string }[];
}

export default function SectorPage(p: SectorPageProps) {
    const reveal = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
    };

    return (
        <main>
            <Header />

            {/* Hero editorial (con foto de fondo si el sector la tiene) */}
            <section className={p.heroImagen ? "sp-hero-foto" : "sp-hero-plano"} style={p.heroImagen ? undefined : {
                padding: '9rem 0 4rem',
                background: 'radial-gradient(circle at 20% 20%, rgba(234, 88, 12, 0.07) 0%, transparent 55%)',
            }}>
                {p.heroImagen && (
                    <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.heroImagen} alt="" aria-hidden="true" className="sp-hero-bg" fetchPriority="high" style={p.heroPosicion ? { objectPosition: p.heroPosicion } : undefined} />
                        <div className="sp-hero-velo" aria-hidden="true" />
                    </>
                )}
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div initial="hidden" animate="visible" variants={reveal}>
                        <span className="kicker-mono" style={p.heroImagen ? { color: '#f6c39c' } : undefined}>
                            <i className={`fa-solid ${p.icon}`} style={{ marginRight: '0.6rem' }}></i>
                            {p.heroKicker}
                        </span>
                        <h1 style={{
                            fontFamily: 'var(--font-display, serif)',
                            fontSize: 'clamp(2.2rem, 6vw, 3.6rem)',
                            fontWeight: 600,
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                            color: p.heroImagen ? '#faf6ef' : 'var(--color-text-main)',
                            margin: '1rem 0 1.2rem',
                            textShadow: p.heroImagen ? '0 2px 30px rgba(28,25,23,0.45)' : undefined,
                        }}>
                            {p.heroTitle}
                        </h1>
                        <p style={{
                            fontSize: '1.15rem',
                            color: p.heroImagen ? 'rgba(250,246,239,0.88)' : 'var(--color-text-muted)',
                            lineHeight: 1.7,
                            marginBottom: '2rem',
                            maxWidth: 620,
                            textShadow: p.heroImagen ? '0 1px 20px rgba(28,25,23,0.4)' : undefined,
                        }}>
                            {p.heroSubtitle}
                        </p>
                        <Link href="/#contact" className="btn btn-primary" style={{ fontSize: '1.02rem', padding: '1rem 2.25rem' }}>
                            Auditoría gratis para {p.sector.toLowerCase()}
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Pain points — filas editoriales */}
            <section style={{ padding: '4rem 0', background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} style={{ marginBottom: '2rem' }}>
                        <span className="kicker-mono">El problema</span>
                        <h2 className="section-title" style={{ textAlign: 'left', marginTop: '0.8rem', marginBottom: '0.5rem' }}>
                            Los procesos que te están drenando
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: 'left', margin: 0, maxWidth: 600 }}>
                            Si reconoces 3 o más, automatizar te va a cambiar el negocio.
                        </p>
                    </motion.div>
                    <div className="sp-pains">
                        {p.painPoints.map((pp, i) => (
                            <motion.div key={pp.text} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: i * 0.05 }}
                                className="sp-pain">
                                <i className={`fa-solid ${pp.icon}`}></i>
                                <span>{pp.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions — tarjetas Fraunces */}
            <section style={{ padding: '4.5rem 0' }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} style={{ marginBottom: '2rem' }}>
                        <span className="kicker-mono">La solución</span>
                        <h2 className="section-title" style={{ textAlign: 'left', marginTop: '0.8rem', marginBottom: '0.5rem' }}>
                            Qué automatizamos para {p.sector.toLowerCase()}
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: 'left', margin: 0, maxWidth: 600 }}>
                            Flujos específicos del sector, no plantillas genéricas.
                        </p>
                    </motion.div>
                    <div className="sp-soluciones">
                        {p.solutions.map((s, i) => (
                            <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: i * 0.08 }}
                                className="sp-solucion">
                                <i className={`fa-solid ${s.icon}`} style={{ color: 'var(--color-primary)', fontSize: '1.6rem', marginBottom: '1rem', display: 'block' }}></i>
                                <h3 style={{
                                    fontFamily: 'var(--font-display, serif)',
                                    fontSize: '1.3rem',
                                    fontWeight: 600,
                                    color: 'var(--color-text-main)',
                                    marginBottom: '0.6rem',
                                    lineHeight: 1.25,
                                }}>
                                    {s.title}
                                </h3>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0, fontSize: '0.95rem' }}>{s.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results — franja terracota */}
            <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)' }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} style={{ marginBottom: '2.5rem' }}>
                        <span className="mono-label" style={{ color: '#f6c39c' }}>Resultados</span>
                        <h2 style={{
                            fontFamily: 'var(--font-display, serif)',
                            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                            fontWeight: 600,
                            color: '#faf6ef',
                            margin: '0.8rem 0 0',
                            lineHeight: 1.2,
                        }}>
                            Lo que consiguen empresas como la tuya
                        </h2>
                    </motion.div>
                    <div className="sp-stats">
                        {p.results.map((r) => (
                            <div key={r.label}>
                                <div style={{ fontFamily: 'var(--font-display, serif)', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 600, color: '#f6c39c', lineHeight: 1 }}>{r.stat}</div>
                                <div className="mono-label" style={{ color: 'rgba(250,246,239,0.85)', marginTop: '0.6rem' }}>{r.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ — filas editoriales */}
            <section style={{ padding: '4.5rem 0' }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} style={{ marginBottom: '2rem' }}>
                        <span className="kicker-mono">FAQ</span>
                        <h2 className="section-title" style={{ textAlign: 'left', marginTop: '0.8rem', marginBottom: 0 }}>
                            Preguntas frecuentes — {p.sector}
                        </h2>
                    </motion.div>
                    {p.faqs.map((f) => (
                        <details key={f.question} className="sp-faq">
                            <summary>
                                <span>{f.question}</span>
                                <i className="fas fa-chevron-down"></i>
                            </summary>
                            <p style={{ padding: '0 0.4rem 1.5rem', color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0, maxWidth: 720 }}>{f.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* Siguiente paso — enlazado contextual del sector */}
            {p.relacionados && p.relacionados.length > 0 && (
                <section style={{ padding: '4.5rem 0', background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
                    <div className="container">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} style={{ marginBottom: '2rem' }}>
                            <span className="kicker-mono">Siguiente paso</span>
                            <h2 className="section-title" style={{ textAlign: 'left', marginTop: '0.8rem', marginBottom: '0.5rem' }}>
                                Lo que suele venir después
                            </h2>
                            <p className="section-subtitle" style={{ textAlign: 'left', margin: 0, maxWidth: 620 }}>
                                Las piezas que mejor encajan con {p.sector.toLowerCase()} — cada una con su página y su precio.
                            </p>
                        </motion.div>
                        <div className="sp-relacionados">
                            {p.relacionados.map((r, i) => (
                                <motion.div key={r.href} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: i * 0.06 }}>
                                    <Link href={r.href} className="sp-relacionado">
                                        <i className={`fa-solid ${r.icon}`}></i>
                                        <span>
                                            <span className="sp-rel-titulo">{r.titulo}</span>
                                            <span className="sp-rel-desc">{r.desc}</span>
                                        </span>
                                        <span className="sp-rel-flecha">→</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA final en melocotón */}
            <section style={{ padding: '4.5rem 0', background: '#f8dfc6', textAlign: 'center' }}>
                <div className="container">
                    <p style={{
                        fontFamily: 'var(--font-display, serif)',
                        fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)',
                        fontWeight: 600,
                        color: '#1c1917',
                        lineHeight: 1.2,
                        margin: '0 0 1rem',
                        letterSpacing: '-0.02em',
                    }}>
                        ¿Automatizamos tu {p.sector.toLowerCase()}?
                    </p>
                    <p style={{ color: 'rgba(28,25,23,0.7)', marginBottom: '1.8rem', fontSize: '1.05rem' }}>
                        30 minutos, gratis, sin compromiso. Te digo exactamente qué automatizar primero.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2.4rem' }}>
                        Solicitar auditoría gratuita
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                /* El destacado del titular va como en el hero del index:
                   melocotón sólido sobre foto, naranja sólido sobre crema */
                .sp-hero-foto h1 .premium-gradient {
                    background: none !important;
                    -webkit-background-clip: unset !important;
                    background-clip: unset !important;
                    -webkit-text-fill-color: #f6c39c !important;
                    color: #f6c39c !important;
                }
                .sp-hero-plano h1 .premium-gradient {
                    background: none !important;
                    -webkit-background-clip: unset !important;
                    background-clip: unset !important;
                    -webkit-text-fill-color: var(--color-primary) !important;
                    color: var(--color-primary) !important;
                }
                .sp-hero-foto {
                    position: relative;
                    min-height: 70vh;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    padding: calc(var(--header-height) + 3rem) 0 4rem;
                }
                .sp-hero-foto .container {
                    width: 100%;
                }
                .sp-hero-bg {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: 65% top;
                    z-index: 0;
                }
                .sp-hero-velo {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    background:
                        linear-gradient(180deg, rgba(28,25,23,0.42) 0%, rgba(28,25,23,0.18) 45%, rgba(120,53,15,0.22) 100%),
                        radial-gradient(circle at 75% 30%, rgba(234,88,12,0.08), transparent 60%);
                }
                .sp-pains {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 0 3rem;
                }
                .sp-pain {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    padding: 1.1rem 0.3rem;
                    border-top: 1px solid var(--color-border);
                }
                .sp-pain i {
                    color: var(--color-primary);
                    font-size: 1.1rem;
                    margin-top: 0.2rem;
                    flex-shrink: 0;
                    width: 1.4rem;
                    text-align: center;
                }
                .sp-pain span {
                    color: var(--color-text-main);
                    font-weight: 500;
                    line-height: 1.5;
                }
                .sp-soluciones {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.2rem;
                }
                .sp-solucion {
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    padding: 2rem;
                    transition: transform 0.25s ease, border-color 0.25s ease;
                }
                .sp-solucion:hover {
                    transform: translateY(-4px);
                    border-color: rgba(234, 88, 12, 0.4);
                }
                .sp-stats {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }
                .sp-relacionados {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 0.9rem;
                }
                .sp-relacionado {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    height: 100%;
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    padding: 1.3rem 1.4rem;
                    color: inherit;
                    transition: transform 0.25s ease, border-color 0.25s ease;
                }
                .sp-relacionado:hover {
                    transform: translateY(-3px);
                    border-color: rgba(234, 88, 12, 0.4);
                }
                .sp-relacionado > i {
                    color: var(--color-primary);
                    font-size: 1.2rem;
                    margin-top: 0.2rem;
                    flex-shrink: 0;
                    width: 1.5rem;
                    text-align: center;
                }
                .sp-rel-titulo {
                    display: block;
                    font-family: var(--font-display, serif);
                    font-size: 1.08rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    line-height: 1.3;
                }
                .sp-rel-desc {
                    display: block;
                    font-size: 0.88rem;
                    color: var(--color-text-muted);
                    line-height: 1.5;
                    margin-top: 0.2rem;
                }
                .sp-rel-flecha {
                    margin-left: auto;
                    color: var(--color-primary);
                    font-weight: 700;
                    transition: transform 0.2s ease;
                }
                .sp-relacionado:hover .sp-rel-flecha {
                    transform: translateX(4px);
                }
                .sp-faq {
                    border-top: 1px solid var(--color-border);
                }
                .sp-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .sp-faq summary {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    padding: 1.3rem 0.4rem;
                    cursor: pointer;
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.05rem, 2vw, 1.3rem);
                    font-weight: 600;
                    color: var(--color-text-main);
                    line-height: 1.3;
                    transition: color 0.2s ease, padding-left 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .sp-faq summary::-webkit-details-marker {
                    display: none;
                }
                .sp-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .sp-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .sp-faq[open] summary i {
                    transform: rotate(180deg);
                }
                @media (max-width: 800px) {
                    .sp-pains, .sp-soluciones, .sp-relacionados {
                        grid-template-columns: 1fr;
                    }
                }
                @media (max-width: 600px) {
                    /* En móvil los titulares rompen línea de forma natural */
                    .sp-hero-foto h1 br,
                    .sp-hero-plano h1 br {
                        display: none;
                    }
                }
            `}</style>
        </main>
    );
}
