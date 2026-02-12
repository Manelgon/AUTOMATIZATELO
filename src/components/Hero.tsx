"use client";
import { motion } from "framer-motion";

export default function Hero() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section className="hero">
            <div className="container">
                {/* Hero content */}

                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.1 }}
                >
                    Automatización Inteligente y Soluciones Digitales para PYMEs
                </motion.h1>

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.3 }}
                >
                    Escala tu negocio en Barcelona y toda España. Unificamos tus sistemas, creamos tu web y automatizamos tus procesos con tecnología de grandes empresas.
                </motion.p>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.5 }}
                >
                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">Solicitar Consulta Gratuita</a>
                    </div>
                    <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
                        Reduce errores, libera tiempo y toma el control de tus datos.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
