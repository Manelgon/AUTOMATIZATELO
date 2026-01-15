"use client";
import { motion } from "framer-motion";

export default function Services() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="services" className="services">
            <div className="container">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="section-title"
                >
                    Soluciones Digitales de Principio a Fin
                </motion.h2>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: 0.1 }}
                    className="section-subtitle"
                >
                    Cubrimos todo el espectro digital: desde cómo te ven tus clientes hasta cómo opera tu negocio por dentro.
                </motion.p>

                <div className="card-grid">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="card"
                        style={{
                            background:
                                "linear-gradient(145deg, var(--color-bg), var(--color-surface))",
                        }}
                    >
                        <div className="card-header">
                            <i className="fa-solid fa-layer-group card-icon"></i>
                            <h3>Servicios Digitales Integrales</h3>
                        </div>
                        <div className="card-body">
                            <p style={{ marginBottom: "1rem", fontStyle: "italic", color: "var(--color-primary)" }}>
                                El sistema operativo que tu negocio necesita.
                            </p>
                            <p style={{ marginBottom: "1rem" }}>
                                ¿Tu información vive dispersa entre Excels, emails y papeles? Rompemos los silos de información. Construimos ecosistemas digitales a medida que centralizan toda tu operativa.
                            </p>
                            <p style={{ fontSize: "0.9rem" }}>
                                <strong>Qué hacemos:</strong> Desarrollamos paneles de control internos, aplicaciones de gestión y bases de datos unificadas.
                                <br />
                                <strong>El resultado:</strong> Herramientas dispares que &quot;hablan&quot; entre sí y una visión 360° de tu empresa en tiempo real.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.1 }}
                        className="card"
                        style={{
                            background:
                                "linear-gradient(145deg, var(--color-bg), var(--color-surface))",
                        }}
                    >
                        <div className="card-header">
                            <i className="fa-solid fa-laptop-code card-icon"></i>
                            <h3>Diseño y Desarrollo Web</h3>
                        </div>
                        <div className="card-body">
                            <p style={{ marginBottom: "1rem", fontStyle: "italic", color: "var(--color-primary)" }}>
                                Tu mejor comercial, activo 24/7.
                            </p>
                            <p style={{ marginBottom: "1rem" }}>
                                No hacemos webs estáticas; creamos activos digitales diseñados para convertir visitas en clientes.
                            </p>
                            <p style={{ fontSize: "0.9rem" }}>
                                <strong>Qué hacemos:</strong> Sitios web corporativos, landing pages de venta y catálogos digitales con arquitectura SEO, carga ultrarrápida y diseño móvil first.
                                <br />
                                <strong>El valor añadido:</strong> Webs preparadas desde la base para integrarse con nuestras automatizaciones.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="card"
                        style={{
                            background:
                                "linear-gradient(145deg, var(--color-bg), var(--color-surface))",
                        }}
                    >
                        <div className="card-header">
                            <i className="fa-solid fa-gears card-icon"></i>
                            <h3>Automatización de Flujos</h3>
                        </div>
                        <div className="card-body">
                            <p style={{ marginBottom: "1rem", fontStyle: "italic", color: "var(--color-primary)" }}>
                                Conectamos tus herramientas, liberamos tu tiempo.
                            </p>
                            <p style={{ marginBottom: "1rem" }}>
                                Sincronizamos tus aplicaciones actuales (CRM, ERP, Email, Facturación) para que los datos fluyan solos.
                            </p>
                            <p style={{ fontSize: "0.9rem" }}>
                                <strong>Qué hacemos:</strong> Automatizamos el envío de facturas, la actualización de inventarios, las notificaciones a clientes y cualquier tarea repetitiva.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.3 }}
                        className="card"
                        style={{
                            background:
                                "linear-gradient(145deg, var(--color-bg), var(--color-surface))",
                        }}
                    >
                        <div className="card-header">
                            <i className="fa-solid fa-robot card-icon"></i>
                            <h3>Soluciones de IA & Chatbots</h3>
                        </div>
                        <div className="card-body">
                            <p style={{ marginBottom: "1rem", fontStyle: "italic", color: "var(--color-primary)" }}>
                                Inteligencia Artificial práctica para tu día a día.
                            </p>
                            <p style={{ marginBottom: "1rem" }}>
                                Añadimos un &quot;cerebro&quot; a tus procesos para ir más allá de la simple automatización.
                            </p>
                            <p style={{ fontSize: "0.9rem" }}>
                                <strong>Qué hacemos:</strong> Asistentes virtuales que atienden clientes 24/7, sistemas que leen y procesan documentos (OCR) y análisis predictivo de datos.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
