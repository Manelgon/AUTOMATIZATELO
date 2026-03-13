"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
    {
        id: "01",
        icon: "fa-gears",
        color: "#f97316",
        title: "Automatización de Procesos",
        description: "Automatizamos tareas repetitivas que consumen tiempo en tu empresa.",
        examples: [
            "Gestión automática de leads",
            "Seguimiento automático de clientes",
            "Automatización de tareas administrativas",
            "Conexión entre herramientas (CRM, email, formularios)",
        ],
        benefit: "Reduce horas de trabajo manual y evita errores.",
        benefitIcon: "fa-clock",
    },
    {
        id: "02",
        icon: "fa-funnel-dollar",
        color: "#6366f1",
        title: "Captación de Clientes Automática",
        description: "Convertimos tu web y redes en sistemas que captan clientes automáticamente.",
        examples: [
            "Formularios conectados a CRM",
            "Respuestas automáticas a nuevos contactos",
            "Seguimiento automático de leads",
            "Avisos al equipo comercial",
        ],
        benefit: "Ningún cliente potencial se pierde.",
        benefitIcon: "fa-magnet",
    },
    {
        id: "03",
        icon: "fa-comments",
        color: "#22c55e",
        title: "Atención al Cliente 24/7",
        description: "Sistemas que responden automáticamente a consultas frecuentes.",
        examples: [
            "Bots para WhatsApp",
            "Respuestas automáticas en Instagram",
            "Clasificación automática de consultas",
            "Derivación a persona cuando es necesario",
        ],
        benefit: "Atención rápida sin saturar al equipo.",
        benefitIcon: "fa-headset",
    },
    {
        id: "04",
        icon: "fa-file-invoice",
        color: "#0ea5e9",
        title: "Automatización de Documentos",
        description: "Automatizamos la generación y envío de documentos clave.",
        examples: [
            "Generación automática de facturas",
            "Envío automático de presupuestos",
            "Contratos automáticos",
            "Registro automático en base de datos",
        ],
        benefit: "Menos trabajo administrativo.",
        benefitIcon: "fa-file-circle-check",
    },
    {
        id: "05",
        icon: "fa-plug",
        color: "#ec4899",
        title: "Integración de Herramientas",
        description: "Conectamos las herramientas que ya usas para que trabajen juntas.",
        examples: [
            "CRM y Google Sheets",
            "Email marketing",
            "WhatsApp y plataformas de pago",
            "Bases de datos y APIs",
        ],
        benefit: "Todo funciona como un único sistema.",
        benefitIcon: "fa-network-wired",
    },
];

export default function Services() {
    const [activeId, setActiveId] = useState<string | null>(null);

    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="services" style={{
            background: 'var(--color-bg-secondary)',
            padding: '6rem 0',
            borderTop: '1px solid var(--color-border)',
            borderBottom: '1px solid var(--color-border)',
        }}>
            <div className="container">

                {/* Cabecera */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
                    style={{ textAlign: 'center', marginBottom: '3.5rem' }}
                >
                    <span style={{
                        display: 'inline-block',
                        background: 'rgba(249,115,22,0.1)',
                        color: 'var(--color-primary)',
                        padding: '0.3rem 1rem',
                        borderRadius: '50px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                    }}>
                        Servicios
                    </span>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>
                        Servicios de automatización para empresas
                    </h2>
                    <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto' }}>
                        Diseñamos sistemas que conectan tus herramientas y automatizan tareas repetitivas
                        para que tu empresa ahorre tiempo, reduzca errores y pueda crecer.
                    </p>
                </motion.div>

                {/* Grid de servicios */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '4rem',
                }}>
                    {services.map((s, i) => {
                        const isOpen = activeId === s.id;
                        return (
                            <motion.div
                                key={s.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={reveal}
                                transition={{ delay: i * 0.08 }}
                                onClick={() => setActiveId(isOpen ? null : s.id)}
                                className="glass"
                                style={{
                                    padding: '1.75rem',
                                    borderRadius: 'var(--radius-lg)',
                                    border: isOpen
                                        ? `2px solid ${s.color}`
                                        : '1px solid var(--color-border)',
                                    cursor: 'pointer',
                                    transition: 'all 0.25s ease',
                                    background: isOpen
                                        ? `${s.color}08`
                                        : 'var(--color-bg)',
                                    boxShadow: isOpen
                                        ? `0 8px 30px ${s.color}20`
                                        : 'none',
                                }}
                            >
                                {/* Cabecera de la tarjeta */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.75rem' }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '12px',
                                        background: `${s.color}18`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>
                                        <i className={`fa-solid ${s.icon}`} style={{ color: s.color, fontSize: '1.2rem' }}></i>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{
                                            fontSize: '0.72rem',
                                            fontWeight: 700,
                                            color: s.color,
                                            letterSpacing: '1.5px',
                                            marginBottom: '0.2rem',
                                        }}>
                                            {s.id}
                                        </div>
                                        <h3 style={{
                                            color: 'var(--color-text-main)',
                                            fontSize: '1.05rem',
                                            fontWeight: 700,
                                            margin: 0,
                                            lineHeight: 1.3,
                                        }}>
                                            {s.title}
                                        </h3>
                                    </div>
                                    <i
                                        className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}
                                        style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: '0.3rem' }}
                                    ></i>
                                </div>

                                <p style={{
                                    color: 'var(--color-text-muted)',
                                    fontSize: '0.92rem',
                                    lineHeight: 1.6,
                                    margin: 0,
                                }}>
                                    {s.description}
                                </p>

                                {/* Contenido expandible */}
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        transition={{ duration: 0.3 }}
                                        style={{ marginTop: '1.25rem' }}
                                    >
                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
                                            {s.examples.map((ex) => (
                                                <li key={ex} style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '0.6rem',
                                                    marginBottom: '0.5rem',
                                                    color: 'var(--color-text-muted)',
                                                    fontSize: '0.88rem',
                                                }}>
                                                    <i className="fa-solid fa-arrow-right" style={{ color: s.color, marginTop: '0.25rem', flexShrink: 0, fontSize: '0.75rem' }}></i>
                                                    {ex}
                                                </li>
                                            ))}
                                        </ul>

                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.6rem',
                                            background: `${s.color}12`,
                                            borderRadius: '8px',
                                            padding: '0.6rem 1rem',
                                            borderLeft: `3px solid ${s.color}`,
                                        }}>
                                            <i className={`fa-solid ${s.benefitIcon}`} style={{ color: s.color, fontSize: '0.9rem' }}></i>
                                            <span style={{ color: 'var(--color-text-main)', fontSize: '0.88rem', fontWeight: 600 }}>
                                                {s.benefit}
                                            </span>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Cierre de sección */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
                    style={{
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(249,115,22,0.07) 0%, rgba(249,115,22,0.02) 100%)',
                        border: '1px solid rgba(249,115,22,0.2)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '3rem 2rem',
                    }}
                >
                    <h3 style={{
                        fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
                        fontWeight: 800,
                        color: 'var(--color-text-main)',
                        marginBottom: '1rem',
                    }}>
                        Tu negocio puede funcionar como un sistema
                    </h3>
                    <p style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '1.05rem',
                        maxWidth: '560px',
                        margin: '0 auto 2rem',
                        lineHeight: 1.7,
                    }}>
                        Analizamos cómo funciona tu empresa, detectamos tareas repetitivas
                        y diseñamos automatizaciones que trabajan por ti las 24 horas.
                    </p>
                    <a
                        href="#contact"
                        className="btn btn-primary"
                        style={{ fontSize: '1.05rem', padding: '0.9rem 2.5rem', boxShadow: 'var(--shadow-glow)' }}
                    >
                        Solicitar Análisis Gratuito
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
