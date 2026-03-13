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

export default function Opportunity() {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    return (
        <section id="problema" style={{
            background: 'var(--color-bg-secondary)',
            padding: '6rem 0',
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
                        Muchas empresas pierden horas cada semana en tareas repetitivas
                    </h2>
                    <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Todo esto consume tiempo y dinero que podrías invertir en hacer crecer tu negocio.
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

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
                    style={{
                        background: 'linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(249,115,22,0.03) 100%)',
                        border: '1px solid rgba(249,115,22,0.25)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '2rem 2.5rem',
                        textAlign: 'center',
                        maxWidth: '700px',
                        margin: '0 auto',
                    }}
                >
                    <p style={{ fontSize: '1.15rem', color: 'var(--color-text-main)', lineHeight: 1.7, marginBottom: 0 }}>
                        <strong style={{ color: 'var(--color-primary)' }}>Más del 50% de las empresas</strong> ahorran más de 10 horas semanales
                        gracias a la automatización. La automatización permite que tu negocio funcione
                        como un sistema, no como una lista interminable de tareas.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
