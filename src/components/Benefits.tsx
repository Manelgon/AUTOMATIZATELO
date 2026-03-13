"use client";
import { motion } from "framer-motion";

const benefits = [
    {
        icon: "fa-clock",
        title: "Ahorro de tiempo real",
        description: "Automatiza tareas repetitivas y recupera horas cada semana. Tareas que consumían días ahora se ejecutan en segundos.",
        stat: "+10h/semana",
    },
    {
        icon: "fa-shield-halved",
        title: "Menos errores operativos",
        description: "Los procesos automáticos eliminan los errores humanos. Datos fiables, facturas correctas y seguimientos sin descuidos.",
        stat: "−40% errores",
    },
    {
        icon: "fa-arrow-trend-up",
        title: "Escala sin contratar",
        description: "Gestiona más clientes y pedidos sin aumentar plantilla. Tu negocio crece, tus gastos fijos no.",
        stat: "×2 capacidad",
    },
    {
        icon: "fa-chart-pie",
        title: "Decisiones con datos reales",
        description: "Reportes automáticos cada semana con las métricas que importan. Toma decisiones basadas en información, no en intuición.",
        stat: "100% visibilidad",
    },
];

export default function Benefits() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="benefits" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
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
                        Resultados
                    </span>
                    <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
                        Lo que consiguen nuestros clientes
                    </h2>
                    <p className="section-subtitle">
                        La automatización no es solo tecnología: es productividad y rentabilidad.
                    </p>
                </motion.div>

                <div className="card-grid stagger-container">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={b.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: i * 0.1 }}
                            className="card glass"
                            style={{ position: 'relative', overflow: 'hidden' }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '1.25rem',
                                right: '1.25rem',
                                background: 'rgba(249,115,22,0.1)',
                                color: 'var(--color-primary)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '50px',
                                fontSize: '0.78rem',
                                fontWeight: 700,
                            }}>
                                {b.stat}
                            </div>
                            <div className="card-header">
                                <i className={`fa-solid ${b.icon} card-icon`} style={{ color: 'var(--color-primary)' }}></i>
                                <h3 style={{ color: 'var(--color-text-main)' }}>{b.title}</h3>
                            </div>
                            <p style={{ color: 'var(--color-text-muted)' }}>{b.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
