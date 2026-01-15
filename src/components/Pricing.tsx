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
                        className="pricing-card"
                    >
                        <h3 style={{ marginBottom: "0.25rem" }}>Proyecto Cerrado</h3>
                        <p style={{ fontStyle: "italic", color: "var(--color-primary)", marginTop: "0", marginBottom: "0.5rem" }}>(Llave en mano)</p>
                        <p>Ideal para empezar o lanzar una nueva web.</p>
                        <ul>
                            <li>Alcance y precio definidos.</li>
                            <li>Entrega de la solución lista para usar.</li>
                            <li>Propiedad total de la solución.</li>
                        </ul>
                        <a href="#contact" className="btn btn-secondary">
                            Solicitar Presupuesto
                        </a>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={reveal}
                        transition={{ delay: 0.2 }}
                        className="pricing-card highlight"
                    >
                        <h3>Suscripción de Mantenimiento y Mejora</h3>
                        <p>Tu socio tecnológico a largo plazo.</p>
                        <ul>
                            <li>Soporte continuo y resolución de dudas.</li>
                            <li>Ajustes, evolutivos y mejoras mensuales.</li>
                            <li>Monitorización proactiva de tus sistemas.</li>
                        </ul>
                        <a href="#contact" className="btn btn-primary">
                            Más Información
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
