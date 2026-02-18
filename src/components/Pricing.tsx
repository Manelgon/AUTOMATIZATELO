"use client";
import { motion } from "framer-motion";

export default function Pricing() {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section id="model">
            <div className="container">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
                    className="section-title"
                >
                    Modelo de Colaboración
                </motion.h2>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
                    transition={{ delay: 0.1 }}
                    className="section-subtitle"
                >
                    Flexible y adaptado a tu ritmo
                </motion.p>

                <div className="pricing-grid">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={reveal}
                        className="pricing-card glass"
                        style={{ position: 'relative', paddingTop: '2.5rem' }}
                    >
                        {/* Badge encima de la tarjeta */}
                        <span style={{
                            position: 'absolute',
                            top: '-14px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: 'var(--color-primary)',
                            border: '1px solid var(--color-primary)',
                            borderRadius: '50px',
                            padding: '4px 16px',
                            fontSize: '0.78rem',
                            fontStyle: 'italic',
                            color: '#fff',
                            whiteSpace: 'nowrap',
                        }}>Llave en mano</span>
                        <h3 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', fontWeight: 'bold' }}>Proyecto Cerrado</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Ideal para empezar o lanzar una nueva web.</p>
                        <ul style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                            <li><i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', marginRight: '0.5rem' }}></i> Alcance y precio definidos.</li>
                            <li><i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', marginRight: '0.5rem' }}></i> Entrega de la solución lista para usar.</li>
                            <li><i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', marginRight: '0.5rem' }}></i> Propiedad total de la solución.</li>
                        </ul>
                        <a href="#contact" className="btn btn-secondary glass" style={{ color: 'var(--color-text-main)' }}>
                            Solicitar Presupuesto
                        </a>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={reveal}
                        transition={{ delay: 0.2 }}
                        className="pricing-card glass highlight"
                        style={{ border: '2px solid var(--color-primary)' }}
                    >
                        <h3 className="premium-gradient" style={{ marginBottom: "0.5rem", fontSize: '1.8rem' }}>Suscripción</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Tu socio tecnológico a largo plazo.</p>
                        <ul style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                            <li><i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', marginRight: '0.5rem' }}></i> Soporte continuo y resolución de dudas.</li>
                            <li><i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', marginRight: '0.5rem' }}></i> Ajustes, evolutivos y mejoras mensuales.</li>
                            <li><i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', marginRight: '0.5rem' }}></i> Monitorización proactiva de tus sistemas.</li>
                        </ul>
                        <a href="#contact" className="btn btn-primary" style={{ background: 'var(--color-primary)', border: 'none', width: '100%' }}>
                            Empieza Ahora
                        </a>

                    </motion.div>
                </div>

            </div>
        </section>
    );
}
