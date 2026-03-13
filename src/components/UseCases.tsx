"use client";
import { motion } from "framer-motion";

const cases = [
    {
        sector: "Restauración",
        icon: "fa-utensils",
        color: "#f97316",
        problem: "Gestión manual de reservas y pedidos.",
        solution: "Bot de reservas automático + notificaciones al equipo.",
        results: [
            "Reservas gestionadas 24/7 sin llamadas",
            "Cero dobles reservas ni errores",
            "Confirmaciones automáticas por WhatsApp",
        ],
    },
    {
        sector: "Clínicas y Salud",
        icon: "fa-stethoscope",
        color: "#6366f1",
        problem: "Citas gestionadas a mano, recordatorios olvidados.",
        solution: "Agenda automática + recordatorios por SMS y email.",
        results: [
            "Reducción del 70% en citas perdidas",
            "Agenda siempre actualizada",
            "Pacientes confirman o cancelan solos",
        ],
    },
    {
        sector: "E-commerce",
        icon: "fa-bag-shopping",
        color: "#0ea5e9",
        problem: "Seguimiento de pedidos manual y soporte repetitivo.",
        solution: "Automatización de seguimiento + bot de soporte.",
        results: [
            "Actualizaciones de pedido en tiempo real",
            "Soporte automático para preguntas frecuentes",
            "Menos incidencias, más satisfacción",
        ],
    },
    {
        sector: "Empresas de Servicios",
        icon: "fa-briefcase",
        color: "#22c55e",
        problem: "Captación de leads sin seguimiento sistemático.",
        solution: "CRM automático + secuencias de seguimiento.",
        results: [
            "Cada lead recibe respuesta en < 5 minutos",
            "Seguimiento automático hasta cerrar",
            "Sin leads perdidos por falta de tiempo",
        ],
    },
];

export default function UseCases() {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    return (
        <section id="casos" style={{ padding: '6rem 0' }}>
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
                        Casos de uso
                    </span>
                    <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
                        Sectores donde la automatización genera más impacto
                    </h2>
                    <p className="section-subtitle" style={{ maxWidth: '550px', margin: '0 auto' }}>
                        Según casos de mercado, la automatización puede recuperar la inversión en pocos meses
                        gracias al ahorro de tiempo y la reducción de errores.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {cases.map((c, i) => (
                        <motion.div
                            key={c.sector}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                            transition={{ delay: i * 0.1 }}
                            className="card glass"
                            style={{
                                border: '1px solid var(--color-border)',
                                borderTop: `3px solid ${c.color}`,
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '10px',
                                    background: `${c.color}18`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}>
                                    <i className={`fa-solid ${c.icon}`} style={{ color: c.color, fontSize: '1.1rem' }}></i>
                                </div>
                                <h3 style={{ color: 'var(--color-text-main)', fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>
                                    {c.sector}
                                </h3>
                            </div>

                            <div style={{
                                background: 'rgba(249,115,22,0.05)',
                                borderRadius: '8px',
                                padding: '0.75rem 1rem',
                                marginBottom: '1rem',
                                borderLeft: `3px solid ${c.color}40`,
                            }}>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', margin: 0 }}>
                                    <strong style={{ color: 'var(--color-text-main)' }}>Problema:</strong> {c.problem}
                                </p>
                            </div>

                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                <strong style={{ color: 'var(--color-text-main)' }}>Solución:</strong> {c.solution}
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {c.results.map((r) => (
                                    <li key={r} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.5rem',
                                        marginBottom: '0.5rem',
                                        color: 'var(--color-text-muted)',
                                        fontSize: '0.88rem',
                                    }}>
                                        <i className="fa-solid fa-check" style={{ color: c.color, marginTop: '0.2rem', flexShrink: 0 }}></i>
                                        {r}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
