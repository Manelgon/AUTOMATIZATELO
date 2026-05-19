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
    painPoints: { icon: string; text: string }[];
    solutions: { icon: string; title: string; description: string }[];
    results: { stat: string; label: string }[];
    faqs: { question: string; answer: string }[];
}

export default function SectorPage(p: SectorPageProps) {
    const reveal = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <main>
            <Header />

            {/* Hero */}
            <section style={{
                padding: '6rem 0 4rem',
                background: `linear-gradient(135deg, ${p.color}08 0%, transparent 60%)`,
            }}>
                <div className="container">
                    <motion.div initial="hidden" animate="visible" variants={reveal} style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: `${p.color}15`, color: p.color,
                            padding: '0.4rem 1rem', borderRadius: '50px',
                            fontSize: '0.85rem', fontWeight: 700,
                            letterSpacing: '0.05em', textTransform: 'uppercase',
                            marginBottom: '1.5rem',
                        }}>
                            <i className={`fa-solid ${p.icon}`}></i> {p.heroKicker}
                        </span>
                        <h1 style={{ color: 'var(--color-text-main)', marginBottom: '1.25rem' }}>
                            {p.heroTitle}
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                            {p.heroSubtitle}
                        </p>
                        <Link href="/#contact" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}>
                            Auditoría gratis para {p.sector.toLowerCase()}
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Pain points */}
            <section style={{ padding: '5rem 0', background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="section-title">Los procesos que te están drenando en {p.sector.toLowerCase()}</h2>
                        <p className="section-subtitle">Si reconoces 3 o más, automatizar te va a cambiar el negocio.</p>
                    </motion.div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                        {p.painPoints.map((pp, i) => (
                            <motion.div key={pp.text} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: i * 0.05 }}
                                className="glass"
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.1rem 1.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                                <i className={`fa-solid ${pp.icon}`} style={{ color: p.color, fontSize: '1.2rem', flexShrink: 0, width: '24px', textAlign: 'center' }}></i>
                                <span style={{ color: 'var(--color-text-main)', fontWeight: 500, fontSize: '0.95rem' }}>{pp.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="section-title">Qué automatizamos para {p.sector.toLowerCase()}</h2>
                        <p className="section-subtitle">Flujos específicos del sector, no plantillas genéricas.</p>
                    </motion.div>
                    <div className="card-grid">
                        {p.solutions.map((s, i) => (
                            <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: i * 0.1 }}
                                className="card glass">
                                <div className="card-header">
                                    <i className={`fa-solid ${s.icon} card-icon`} style={{ color: p.color }}></i>
                                    <h3 style={{ color: 'var(--color-text-main)' }}>{s.title}</h3>
                                </div>
                                <p style={{ color: 'var(--color-text-muted)' }}>{s.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section style={{ padding: '5rem 0', background: `linear-gradient(135deg, ${p.color}08 0%, transparent 60%)` }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="section-title">Lo que consiguen empresas como la tuya</h2>
                    </motion.div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                        {p.results.map((r) => (
                            <div key={r.label} className="glass" style={{ padding: '2rem 1.5rem', textAlign: 'center', borderRadius: 'var(--radius-lg)', border: `1px solid ${p.color}30` }}>
                                <div style={{ color: p.color, fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>{r.stat}</div>
                                <div style={{ color: 'var(--color-text-main)', fontSize: '0.95rem' }}>{r.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '5rem 0', background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
                <div className="container" style={{ maxWidth: '820px' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="section-title">Preguntas frecuentes — {p.sector}</h2>
                    </motion.div>
                    {p.faqs.map((f) => (
                        <details key={f.question} style={{ marginBottom: '0.75rem', padding: '1.25rem 1.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', background: 'var(--color-bg)' }}>
                            <summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--color-text-main)' }}>{f.question}</summary>
                            <p style={{ marginTop: '0.75rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{f.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '5rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="section-title">¿Listos para automatizar tu {p.sector.toLowerCase()}?</h2>
                    <p className="section-subtitle" style={{ marginBottom: '2rem' }}>30 minutos. Sin compromiso. Te decimos exactamente qué automatizar primero.</p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Solicitar auditoría gratuita</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}

