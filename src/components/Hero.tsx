"use client";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";

export default function Hero() {
    // Las palabras del nombre se estiran/achatan elásticamente siguiendo al ratón:
    // puntas exteriores ancladas, el hueco central persigue al cursor.
    const ratonRel = useMotionValue(0); // -0.5 (izq) … 0.5 (dcha)
    const relSuave = useSpring(ratonRel, { stiffness: 60, damping: 16, mass: 0.5 });
    const escalaIzq = useTransform(relSuave, [-0.5, 0.5], [0.62, 1.35]);
    const escalaDcha = useTransform(relSuave, [-0.5, 0.5], [1.35, 0.62]);

    const seguirRaton = (e: React.MouseEvent<HTMLElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        ratonRel.set((e.clientX - r.left) / r.width - 0.5);
    };
    const soltarRaton = () => ratonRel.set(0);

    const letrasDe = (palabra: string, delayBase: number) =>
        palabra.split("").map((letra, i) => (
            <motion.span
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delayBase + i * 0.045, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "inline-block", whiteSpace: "pre" }}
            >
                {letra}
            </motion.span>
        ));

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section className="hero hero-foto" onMouseMove={seguirRaton} onMouseLeave={soltarRaton}>
            {/* Foto de fondo + velo cálido */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/fondo-hero.webp"
                alt=""
                aria-hidden="true"
                className="hero-foto-bg"
                fetchPriority="high"
            />
            <div className="hero-foto-velo" aria-hidden="true" />

            {/* Contenido */}
            <div className="container hero-foto-contenido">
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.1 }}
                    className="kicker-mono"
                    style={{ display: 'block', marginBottom: '1.2rem', color: '#f6c39c' }}
                >
                    Implantación de IA · Barcelona y toda España
                </motion.p>

                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                    style={{ color: '#faf6ef', marginBottom: '1.5rem', textShadow: '0 2px 30px rgba(28,25,23,0.45)' }}
                >
                    Implanto la IA en tu empresa:{" "}<br /><span style={{ color: '#f6c39c' }}>con cabeza, cumpliendo la ley</span>{" "}<br />y con sistemas que trabajan solos
                </motion.h1>

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.3 }}
                    style={{ fontSize: '1.15rem', maxWidth: '540px', margin: '0 0 2.2rem', color: 'rgba(250,246,239,0.88)', lineHeight: 1.7, textShadow: '0 1px 20px rgba(28,25,23,0.4)' }}
                >
                    Soy Manel. Formo a tu equipo, te pongo en regla con el Reglamento
                    Europeo de IA y construyo los sistemas que ya trabajan cada día en
                    despachos, academias y pymes reales. Sin complicaciones: empezamos
                    con 30 minutos gratis.
                </motion.p>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.5 }}
                >
                    <div className="hero-actions" style={{ gap: '1.2rem', justifyContent: 'flex-start' }}>
                        <a href="#contact" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2.2rem', boxShadow: 'var(--shadow-glow)' }}>
                            Auditoría Gratis
                        </a>
                        <a
                            href="https://wa.me/34678399182?text=Hola%20Manel%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20automatizaci%C3%B3n%20con%20IA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                            style={{ color: '#faf6ef', padding: '1rem 2.2rem', border: '1px solid rgba(250,246,239,0.4)', background: 'rgba(28,25,23,0.25)', backdropFilter: 'blur(8px)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i>
                            Escríbeme por WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Nombre gigante: entrada letra a letra + palabras elásticas con el ratón */}
            <div className="hero-giant-name" aria-hidden="true">
                <motion.span style={{ scaleX: escalaIzq, transformOrigin: "left center", display: "inline-block" }}>
                    {letrasDe("Manel", 0.55)}
                </motion.span>
                <span style={{ display: "inline-block", width: "0.28em" }} />
                <motion.span style={{ scaleX: escalaDcha, transformOrigin: "right center", display: "inline-block" }}>
                    {letrasDe("Méndez", 0.8)}
                </motion.span>
            </div>

            <style>{`
                .hero-foto {
                    position: relative;
                    min-height: 92vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    overflow: hidden;
                    padding: calc(var(--header-height) + 3rem) 0 clamp(6rem, 16vw, 12rem);
                }
                .hero-foto-bg {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center top;
                    z-index: 0;
                }
                .hero-foto-velo {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    background:
                        linear-gradient(180deg, rgba(28,25,23,0.42) 0%, rgba(28,25,23,0.18) 45%, rgba(120,53,15,0.22) 100%),
                        radial-gradient(circle at 75% 30%, rgba(234,88,12,0.08), transparent 60%);
                }
                .hero-foto .hero-foto-contenido {
                    position: relative;
                    z-index: 2;
                    width: 100%;
                    text-align: left;
                }
                .hero-foto .hero-giant-name {
                    position: absolute;
                    bottom: 0.6rem;
                    left: 0;
                    width: 100%;
                    text-align: center;
                    font-family: var(--font-display, serif);
                    font-size: clamp(4rem, 12.5vw, 11.5rem);
                    font-weight: 600;
                    letter-spacing: -0.03em;
                    line-height: 0.95;
                    color: #f6c39c;
                    white-space: nowrap;
                    pointer-events: none;
                    user-select: none;
                    z-index: 2;
                    text-shadow: 0 10px 60px rgba(28,25,23,0.35);
                }
                @media (max-width: 900px) {
                    .hero-foto { min-height: 86vh; }
                    .hero-foto-bg { object-position: 66% top; }
                    .hero-foto .hero-foto-contenido { text-align: center; }
                    .hero-foto .hero-actions { justify-content: center !important; }
                    .hero-foto-contenido p, .hero-foto-contenido h1 { margin-left: auto !important; margin-right: auto !important; }
                    .hero-foto .hero-giant-name {
                        bottom: 1rem;
                        font-size: clamp(2.4rem, 12vw, 6rem);
                    }
                }
                @media (max-width: 600px) {
                    /* En móvil el titular rompe línea de forma natural */
                    .hero-foto h1 br { display: none; }
                }
            `}</style>
        </section>
    );
}
