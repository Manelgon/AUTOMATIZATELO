"use client";
import { motion } from "framer-motion";

const painPoints = [
    { icon: "fa-envelope-open-text", text: "Responder mensajes y consultas uno a uno" },
    { icon: "fa-copy", text: "Copiar datos entre herramientas manualmente" },
    { icon: "fa-file-invoice", text: "Crear facturas y documentos a mano" },
    { icon: "fa-chart-bar", text: "Generar reportes e informes cada semana" },
    { icon: "fa-calendar-check", text: "Gestionar reservas o pedidos manualmente" },
    { icon: "fa-user-clock", text: "Hacer seguimiento a clientes sin sistema" },
];

const outcomes = [
    { icon: "fa-clock", stat: "+10h", label: "ahorradas a la semana" },
    { icon: "fa-shield-halved", stat: "−40%", label: "errores operativos" },
    { icon: "fa-arrow-trend-up", stat: "×2", label: "capacidad sin contratar" },
    { icon: "fa-chart-pie", stat: "100%", label: "visibilidad con datos" },
];

export default function Opportunity() {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    return (
        <section id="problema" style={{
            background: 'var(--color-bg-secondary)',
            padding: '4.5rem 0',
            borderTop: '1px solid var(--color-border)',
            borderBottom: '1px solid var(--color-border)',
        }}>
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
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
                        El Problema
                    </span>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>
                        Estas tareas te están costando clientes (y no lo sabes)
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Cada hora perdida en procesos manuales es una hora menos vendiendo. Cada mensaje sin contestar, un cliente que se va a la competencia.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.25rem',
                    marginBottom: '3.5rem',
                }}>
                    {painPoints.map((item, i) => (
                        <motion.div
                            key={item.text}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                            transition={{ delay: i * 0.08 }}
                            className="glass"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1.1rem 1.5rem',
                                border: '1px solid var(--color-border)',
                                borderRadius: 'var(--radius-md)',
                            }}
                        >
                            <i
                                className={`fa-solid ${item.icon}`}
                                style={{
                                    color: 'var(--color-primary)',
                                    fontSize: '1.2rem',
                                    flexShrink: 0,
                                    width: '24px',
                                    textAlign: 'center',
                                }}
                            ></i>
                            <span style={{ color: 'var(--color-text-main)', fontWeight: 500, fontSize: '0.95rem' }}>
                                {item.text}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Transición: problema → resultado */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
                    style={{ textAlign: 'center', marginBottom: '2rem' }}
                >
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'var(--color-text-main)',
                        marginBottom: '0.5rem',
                    }}>
                        Cuando lo automatizas:
                    </h3>
                </motion.div>

                {/* Outcomes / stats compactas */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '1rem',
                    marginBottom: '3rem',
                }}>
                    {outcomes.map((o, i) => (
                        <motion.div
                            key={o.label}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                            transition={{ delay: i * 0.08 }}
                            className="glass"
                            style={{
                                padding: '1.5rem 1rem',
                                textAlign: 'center',
                                border: '1px solid rgba(249,115,22,0.2)',
                                borderRadius: 'var(--radius-md)',
                            }}
                        >
                            <i className={`fa-solid ${o.icon}`} style={{ color: 'var(--color-primary)', fontSize: '1.4rem', marginBottom: '0.5rem' }}></i>
                            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1.1 }}>{o.stat}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>{o.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
                    style={{ textAlign: 'center' }}
                >
                    <a href="#contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.85rem 2rem', display: 'inline-block' }}>
                        Solicitar auditoría gratuita
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
