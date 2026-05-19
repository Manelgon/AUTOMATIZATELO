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

                <motion.p
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
                    Automatización con IA para PYMEs en Barcelona
                </motion.p>

                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                    style={{ color: 'var(--color-text-main)' }}
                >
                    Recupera <span className="premium-gradient">+20 horas a la semana</span><br />
                    automatizando tu negocio con IA
                </motion.h1>

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.3 }}
                    style={{ fontSize: '1.3rem', maxWidth: '820px', margin: '0 auto 2rem', color: 'var(--color-text-muted)' }}
                >
                    Chatbots, CRM y flujos automatizados que dejan de hacerte perder clientes por emails sin contestar,
                    tareas manuales y procesos rotos. Auditoría gratis en 30 minutos.
                </motion.p>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.5 }}
                >
                    <div className="hero-actions" style={{ gap: '1.5rem' }}>
                        <a href="#contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', boxShadow: 'var(--shadow-glow)' }}>
                            Auditoría Gratis
                        </a>
                        <a
                            href="https://wa.me/34678399182?text=Hola%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20automatizaci%C3%B3n%20con%20IA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn glass"
                            style={{ color: 'var(--color-text-main)', padding: '1rem 2.5rem', border: '1px solid var(--color-border)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i>
                            Hablar por WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
