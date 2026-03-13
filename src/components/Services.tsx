"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
    {
        id: "01",
        icon: "fa-gears",
        color: "#f97316",
        title: "Automatización de Procesos",
        description: "Automatizamos tareas repetitivas que consumen tiempo en tu empresa: gestión de leads, seguimiento de clientes y conexión entre herramientas.",
        benefit: "Reduce horas de trabajo manual y evita errores.",
    },
    {
        id: "02",
        icon: "fa-funnel-dollar",
        color: "#6366f1",
        title: "Captación de Clientes Automática",
        description: "Convertimos tu web y redes en sistemas que captan clientes automáticamente con formularios conectados a CRM y seguimiento automático de leads.",
        benefit: "Ningún cliente potencial se pierde.",
    },
    {
        id: "03",
        icon: "fa-comments",
        color: "#22c55e",
        title: "Atención al Cliente 24/7",
        description: "Bots para WhatsApp e Instagram que responden automáticamente, clasifican consultas y derivan a una persona cuando es necesario.",
        benefit: "Atención rápida sin saturar al equipo.",
    },
    {
        id: "04",
        icon: "fa-file-invoice",
        color: "#0ea5e9",
        title: "Automatización de Documentos",
        description: "Generación automática de facturas, presupuestos y contratos con envío directo al cliente y registro automático en base de datos.",
        benefit: "Menos trabajo administrativo.",
    },
    {
        id: "05",
        icon: "fa-plug",
        color: "#ec4899",
        title: "Integración de Herramientas",
        description: "Conectamos CRM, email marketing, WhatsApp, Google Sheets y plataformas de pago para que todo funcione como un único sistema.",
        benefit: "Todo funciona como un único sistema.",
    },
];

const cardGradients = [
    "linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)",
    "linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%)",
    "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
    "linear-gradient(145deg, #f1f5f9 0%, #cbd5e1 100%)",
];

export default function Services() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const goToNext = useCallback(() => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % services.length);
    }, []);

    const goToPrev = useCallback(() => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    }, []);

    const goTo = useCallback((index: number) => {
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    }, [activeIndex]);

    useEffect(() => {
        const interval = setInterval(goToNext, 3500);
        return () => clearInterval(interval);
    }, [goToNext]);

    const active = services[activeIndex];
    const cardsToStack = Math.min(4, services.length - 1);
    const stackIndices = Array.from({ length: cardsToStack }, (_, i) => i + 1);

    const headerContent = (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: isMobile ? "center" : "left" }}
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
            <h2 style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
            }}>
                <span style={{
                    backgroundImage: "linear-gradient(to right, var(--color-text-main), var(--color-primary))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "inline-block",
                }}>
                    Servicios de
                </span>
                <br />
                <span style={{ color: "var(--color-text-main)" }}>automatización</span>
            </h2>
            <p style={{
                color: "var(--color-text-muted)",
                fontSize: "1rem",
                lineHeight: 1.7,
                marginBottom: isMobile ? "2rem" : "3rem",
                maxWidth: isMobile ? "100%" : "400px",
                margin: isMobile ? "0 auto 2rem" : "0 0 3rem",
            }}>
                Diseñamos sistemas que conectan tus herramientas y automatizan tareas
                repetitivas para que tu empresa ahorre tiempo, reduzca errores y pueda crecer.
            </p>
        </motion.div>
    );

    const serviceInfoContent = (
        <AnimatePresence mode="wait">
            <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{
                    marginBottom: isMobile ? "1rem" : "2.5rem",
                    textAlign: isMobile ? "center" : "left",
                }}
            >
                <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "rgba(249, 115, 22, 0.1)",
                    border: "1px solid rgba(249, 115, 22, 0.25)",
                    borderRadius: "50px",
                    padding: "0.4rem 1rem",
                    marginBottom: "1rem",
                }}>
                    <span style={{ color: "var(--color-primary)", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
                        {active.id} / {String(services.length).padStart(2, "0")}
                    </span>
                </div>
                <h3 style={{
                    color: "var(--color-text-main)",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                }}>
                    {active.title}
                </h3>
                <p style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                    maxWidth: isMobile ? "100%" : "380px",
                }}>
                    {active.description}
                </p>
                <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: `${active.color}12`,
                    borderLeft: `3px solid ${active.color}`,
                    borderRadius: "0 8px 8px 0",
                    padding: "0.5rem 1rem",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "var(--color-text-main)",
                }}>
                    <i className="fa-solid fa-check" style={{ color: active.color }}></i>
                    {active.benefit}
                </div>
            </motion.div>
        </AnimatePresence>
    );

    const navigationContent = (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start",
            gap: "1rem",
            marginBottom: isMobile ? "1.5rem" : "0",
        }}>
            <button onClick={goToPrev} style={{
                width: "44px", height: "44px", borderRadius: "50%",
                border: "1px solid var(--color-border)", background: "white",
                color: "var(--color-text-main)", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.1rem", boxShadow: "var(--shadow-card)", transition: "all 0.2s",
            }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-primary)"; e.currentTarget.style.color = "white"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "var(--color-text-main)"; }}
            >←</button>

            <div style={{ display: "flex", gap: "0.5rem" }}>
                {services.map((_, i) => (
                    <button key={i} onClick={() => goTo(i)} style={{
                        width: i === activeIndex ? "28px" : "8px", height: "8px",
                        borderRadius: "50px", border: "none",
                        background: i === activeIndex ? "var(--color-primary)" : "var(--color-border)",
                        cursor: "pointer", transition: "all 0.3s ease", padding: 0,
                    }} />
                ))}
            </div>

            <button onClick={goToNext} style={{
                width: "44px", height: "44px", borderRadius: "50%",
                border: "1px solid var(--color-border)", background: "white",
                color: "var(--color-text-main)", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.1rem", boxShadow: "var(--shadow-card)", transition: "all 0.2s",
            }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-primary)"; e.currentTarget.style.color = "white"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "var(--color-text-main)"; }}
            >→</button>
        </div>
    );

    const deckContent = (
        <div style={{
            position: "relative",
            width: isMobile ? "280px" : "300px",
            height: isMobile ? "360px" : "400px",
            margin: isMobile ? "0 auto 2rem" : "0",
        }}>
            {/* Cartas de fondo apiladas */}
            {stackIndices.map((pos) => {
                const idx = (activeIndex + pos) % services.length;
                const svc = services[idx];
                return (
                    <motion.div
                        key={`stack-${svc.id}`}
                        layout
                        initial={false}
                        animate={{
                            x: pos * (isMobile ? 10 : 14),
                            y: pos * -10,
                            rotate: pos * 4,
                            scale: 1 - pos * 0.06,
                            opacity: 1 - pos * 0.18,
                            zIndex: 5 - pos,
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        style={{
                            position: "absolute", width: "100%", height: "100%",
                            borderRadius: "24px",
                            background: cardGradients[(pos - 1) % cardGradients.length],
                            border: "1px solid rgba(0,0,0,0.05)",
                            boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
                            pointerEvents: "none",
                        }}
                    />
                );
            })}

            {/* Carta activa (frente) */}
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.div
                    key={active.id}
                    custom={direction}
                    initial={{ x: direction === -1 ? -350 : 30, y: direction === -1 ? 0 : -10, opacity: 0, scale: direction === -1 ? 1 : 0.95, rotate: direction === -1 ? -15 : 0, zIndex: 10 }}
                    animate={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0, zIndex: 10 }}
                    exit={{ x: direction === 1 ? 350 : 20, y: direction === 1 ? 0 : 20, rotate: direction === 1 ? 15 : 5, opacity: 0, scale: direction === 1 ? 1 : 0.9, transition: { duration: 0.5, ease: "easeIn" } }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    style={{
                        position: "absolute", width: "100%", height: "100%",
                        borderRadius: "24px",
                        background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
                        border: "1px solid rgba(249, 115, 22, 0.2)",
                        boxShadow: "0 30px 60px rgba(0,0,0,0.1), 0 0 40px rgba(249,115,22,0.05)",
                        display: "flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "center",
                        padding: "2rem 1.5rem", cursor: "pointer", overflow: "hidden",
                    }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    onClick={goToNext}
                >
                    {/* Línea naranja superior */}
                    <div style={{
                        position: "absolute", top: 0, left: "20%", right: "20%", height: "3px",
                        background: `linear-gradient(90deg, transparent, ${active.color}, transparent)`,
                        borderRadius: "0 0 4px 4px",
                    }} />

                    {/* Icono */}
                    <div style={{
                        width: "72px", height: "72px", borderRadius: "20px",
                        background: `${active.color}18`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        marginBottom: "1.25rem",
                        filter: `drop-shadow(0 0 10px ${active.color}40)`,
                    }}>
                        <i className={`fa-solid ${active.icon}`} style={{ color: active.color, fontSize: "1.8rem" }}></i>
                    </div>

                    {/* Número */}
                    <span style={{
                        position: "absolute", top: "1rem", right: "1rem",
                        color: "rgba(0,0,0,0.15)", fontSize: "0.75rem", fontWeight: 700,
                    }}>{active.id}</span>

                    {/* Título */}
                    <h3 style={{
                        color: "#1f2937", fontSize: "1.1rem", fontWeight: 800,
                        textAlign: "center", marginBottom: "0.75rem", lineHeight: 1.3,
                    }}>
                        {active.title}
                    </h3>

                    {/* Descripción corta */}
                    <p style={{
                        color: "#6b7280", fontSize: "0.82rem",
                        textAlign: "center", lineHeight: 1.5, maxWidth: "220px",
                    }}>
                        {active.benefit}
                    </p>

                    {/* Marca */}
                    <div style={{
                        position: "absolute", bottom: "1.2rem", left: "1.2rem", right: "1.2rem",
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                    }}>
                        <span style={{ color: "rgba(249,115,22,0.5)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
                            AUTOMATIZALO
                        </span>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );

    return (
        <section id="services" style={{
            background: "var(--color-bg-secondary)",
            padding: isMobile ? "4rem 0" : "6rem 0",
            position: "relative", overflow: "hidden",
            minHeight: isMobile ? "auto" : "90vh",
            display: "flex", alignItems: "center",
            borderTop: "1px solid var(--color-border)",
            borderBottom: "1px solid var(--color-border)",
        }}>
            {/* Glow de fondo */}
            <div style={{ position: "absolute", top: "10%", right: "5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "5%", left: "0%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

            <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
                {isMobile ? (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {headerContent}
                        <div style={{ height: "400px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                            {deckContent}
                        </div>
                        {navigationContent}
                        {serviceInfoContent}
                    </div>
                ) : (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
                        <div>
                            {headerContent}
                            {serviceInfoContent}
                            {navigationContent}
                        </div>
                        <div style={{ position: "relative", height: "520px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ position: "absolute", width: "320px", height: "420px", background: "radial-gradient(ellipse, rgba(249,115,22,0.12) 0%, transparent 70%)", borderRadius: "24px", filter: "blur(40px)", zIndex: 0 }} />
                            {deckContent}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
