"use client";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Automatización Inicio",
        price: "500",
        description: "Para negocios que quieren empezar a automatizar procesos concretos.",
        badge: null,
        highlight: false,
        features: [
            "Automatización de 1–2 procesos",
            "Integración entre 2 herramientas",
            "Bot básico de respuestas automáticas",
            "Entrega en 2 semanas",
            "1 mes de soporte incluido",
        ],
        cta: "Solicitar Presupuesto",
    },
    {
        name: "Automatización Negocio",
        price: "2.000",
        description: "Para empresas que quieren automatizar ventas, clientes y operaciones.",
        badge: "Más popular",
        highlight: true,
        features: [
            "Automatización de hasta 5 procesos",
            "CRM + seguimiento de leads automático",
            "Bot de atención al cliente (WhatsApp/web)",
            "Generación automática de facturas",
            "Reportes semanales automáticos",
            "3 meses de soporte incluido",
        ],
        cta: "Empezar Ahora",
    },
    {
        name: "Automatización Completa",
        price: "8.000",
        description: "Sistema automático integral para toda la empresa.",
        badge: null,
        highlight: false,
        features: [
            "Automatización completa de la empresa",
            "Integraciones ilimitadas entre sistemas",
            "IA conversacional personalizada",
            "Panel de control y métricas en tiempo real",
            "Formación del equipo incluida",
            "6 meses de soporte y mantenimiento",
        ],
        cta: "Solicitar Presupuesto",
    },
];

export default function Pricing() {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    return (
        <section id="model" style={{ padding: '6rem 0' }}>
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
                        Servicios
                    </span>
                    <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
                        Soluciones adaptadas a tu negocio
                    </h2>
                    <p className="section-subtitle">
                        Desde una automatización puntual hasta un sistema completo para toda la empresa.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    alignItems: 'stretch',
                }}>
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                            transition={{ delay: i * 0.1 }}
                            className={`glass ${plan.highlight ? '' : ''}`}
                            style={{
                                position: 'relative',
                                padding: '2rem',
                                borderRadius: 'var(--radius-lg)',
                                border: plan.highlight
                                    ? '2px solid var(--color-primary)'
                                    : '1px solid var(--color-border)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                ...(plan.highlight && {
                                    background: 'linear-gradient(135deg, rgba(249,115,22,0.04) 0%, rgba(249,115,22,0.01) 100%)',
                                }),
                            }}
                        >
                            {plan.badge && (
                                <span style={{
                                    position: 'absolute',
                                    top: '-14px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'var(--color-primary)',
                                    color: '#fff',
                                    borderRadius: '50px',
                                    padding: '4px 16px',
                                    fontSize: '0.78rem',
                                    fontWeight: 700,
                                    whiteSpace: 'nowrap',
                                }}>
                                    {plan.badge}
                                </span>
                            )}

                            <div>
                                <h3 style={{
                                    color: plan.highlight ? 'var(--color-primary)' : 'var(--color-text-main)',
                                    fontSize: '1.2rem',
                                    fontWeight: 700,
                                    marginBottom: '0.5rem',
                                }}>
                                    {plan.name}
                                </h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                                    {plan.description}
                                </p>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Desde</span>
                                <span style={{
                                    fontSize: '2.2rem',
                                    fontWeight: 800,
                                    color: plan.highlight ? 'var(--color-primary)' : 'var(--color-text-main)',
                                }}>
                                    {plan.price}€
                                </span>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                                {plan.features.map((f) => (
                                    <li key={f} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.6rem',
                                        marginBottom: '0.6rem',
                                        color: 'var(--color-text-muted)',
                                        fontSize: '0.9rem',
                                    }}>
                                        <i className="fa-solid fa-check" style={{
                                            color: 'var(--color-primary)',
                                            marginTop: '0.2rem',
                                            flexShrink: 0,
                                        }}></i>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`btn ${plan.highlight ? 'btn-primary' : 'btn-secondary glass'}`}
                                style={{
                                    textAlign: 'center',
                                    color: plan.highlight ? '#fff' : 'var(--color-text-main)',
                                    marginTop: 'auto',
                                }}
                            >
                                {plan.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
                    style={{
                        textAlign: 'center',
                        marginTop: '2rem',
                        color: 'var(--color-text-muted)',
                        fontSize: '0.9rem',
                    }}
                >
                    ¿No sabes qué plan necesitas?{" "}
                    <a href="#contact" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>
                        Solicita una auditoría gratuita
                    </a>{" "}
                    y te lo decimos en 30 minutos.
                </motion.p>
            </div>
        </section>
    );
}
