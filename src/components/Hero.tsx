"use client";
import { motion } from "framer-motion";

export default function Hero() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const benefits = [
        "Reduce trabajo manual",
        "Responde a clientes 24/7",
        "Toma decisiones con datos reales",
    ];

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

                <motion.h2
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.1 }}
                    style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--color-primary)',
                        marginBottom: '1rem',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                    }}
                >
                    Consultoría de automatización e inteligencia artificial para empresas en Barcelona
                </motion.h2>

                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                    style={{ color: 'var(--color-text-main)' }}
                >
                    Automatización de Procesos con IA <br />
                    <span className="premium-gradient">Chatbots y CRM para Pequeñas Empresas</span>
                </motion.h1>

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.3 }}
                    style={{ fontSize: '1.3rem', maxWidth: '820px', margin: '0 auto 2rem', color: 'var(--color-text-muted)' }}
                >
                    Ayudamos a PYMEs en Barcelona y negocios digitales a automatizar tareas repetitivas,<br />
                    reducir errores y conectar sus herramientas para funcionar de forma más eficiente.
                </motion.p>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.4 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1.5rem',
                        flexWrap: 'wrap',
                        marginBottom: '2.5rem'
                    }}
                >
                    {benefits.map((b) => (
                        <span key={b} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--color-text-main)',
                            fontWeight: 500,
                            fontSize: '0.95rem',
                        }}>
                            <i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', fontSize: '0.85rem' }}></i>
                            {b}
                        </span>
                    ))}
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.5 }}
                >
                    <div className="hero-actions" style={{ gap: '1.5rem' }}>
                        <a href="#contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', boxShadow: 'var(--shadow-glow)' }}>
                            Consulta Gratis
                        </a>
                        <a href="#que-automatizamos" className="btn glass" style={{ color: 'var(--color-text-main)', padding: '1rem 2.5rem', border: '1px solid var(--color-border)' }}>
                            Ver Servicios
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
