"use client";
import { motion } from "framer-motion";

export default function Benefits() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="benefits">
            <div className="container">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="section-title"
                >
                    Beneficios Tangibles
                </motion.h2>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: 0.1 }}
                    className="section-subtitle"
                >
                    No es solo tecnología, es rentabilidad directa
                </motion.p>

                <div className="card-grid stagger-container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.1 }}
                        className="card"
                    >
                        <div className="card-header">
                            <i className="fa-solid fa-coins card-icon"></i>
                            <h3>Ahorro de Costes</h3>
                        </div>
                        <p>
                            Menos trabajo manual significa menos horas desperdiciadas. Tareas que consumían días, ahora se resuelven en minutos.
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="card"
                    >
                        <div className="card-header">
                            <i className="fa-solid fa-chart-line card-icon"></i>
                            <h3>Escalabilidad Real</h3>
                        </div>
                        <p>
                            Gestiona el doble de clientes o pedidos sin necesidad de ampliar tu plantilla inmediatamente. Tu negocio crece, tus gastos fijos no.
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.3 }}
                        className="card"
                    >
                        <div className="card-header">
                            <i className="fa-solid fa-bullseye card-icon"></i>
                            <h3>Cero Errores</h3>
                        </div>
                        <p>
                            Las máquinas no se cansan ni se distraen. Elimina los &quot;dedazos&quot;, asegura la calidad de tus datos y evita problemas contables o logísticos.
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.4 }}
                        className="card"
                    >
                        <div className="card-header">
                            <i className="fa-solid fa-star card-icon"></i>
                            <h3>Experiencia de Cliente 10/10</h3>
                        </div>
                        <p>
                            Respuestas inmediatas, webs rápidas y procesos fluidos que aumentan la satisfacción y la fidelidad de tus compradores.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
