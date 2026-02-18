"use client";
import { motion } from "framer-motion";

export default function Hero() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section className="hero" style={{
            background: 'linear-gradient(-45deg, #ffffff, #f3f4f6, #f9731610, #ffffff)',
            backgroundSize: '400% 400%',
            animation: 'animatedGradient 20s ease infinite',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
                    style={{
                        position: 'absolute',
                        top: '-30%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '800px',
                        height: '800px',
                        background: 'radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%)',
                        filter: 'blur(120px)',
                        zIndex: -1
                    }}
                />

                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.1 }}
                    style={{ color: 'var(--color-text-main)' }}
                >
                    Automatiza procesos y <br />
                    <span className="premium-gradient">aumenta tu Productividad</span>
                </motion.h1>

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.3 }}
                    style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--color-text-muted)' }}
                >
                    Automatización Inteligente y Soluciones Digitales para PYMEs. <br />
                    Escala tu negocio sin contratar más personal.
                </motion.p>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.5 }}
                >
                    <div className="hero-actions" style={{ gap: '1.5rem' }}>
                        <a href="#contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', boxShadow: 'var(--shadow-glow)' }}>
                            Solicitar Consulta Gratuita
                        </a>
                        <a href="#services" className="btn glass" style={{ color: 'var(--color-text-main)', padding: '1rem 2.5rem', border: '1px solid var(--color-border)' }}>
                            Ver Servicios
                        </a>
                    </div>
                    <p style={{ marginTop: "2rem", fontSize: "1rem", color: "var(--color-text-muted)" }}>
                        Reduce errores, libera tiempo y toma el control de tus datos.
                    </p>
                </motion.div>
            </div>
        </section>


    );
}
