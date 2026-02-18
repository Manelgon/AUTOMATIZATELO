"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Opportunity() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const titleContent = (
        <div className="opportunity-header">
            <h4
                style={{
                    color: "var(--color-accent)",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    marginBottom: "0.5rem",
                    textAlign: isMobile ? "center" : "left"
                }}
            >
                La Oportunidad
            </h4>
            <h2 className="section-title" style={{
                textAlign: isMobile ? "center" : "left",
                marginBottom: "1.5rem"
            }}>
                ¿Por qué digitalizar y automatizar ahora?
            </h2>
        </div>
    );

    const textContent = (
        <div className="opportunity-body">
            <p style={{ textAlign: isMobile ? "center" : "justify" }}>
                Ya no es una opción, es la clave para la supervivencia y el crecimiento. Mientras las grandes corporaciones multiplican su productividad, muchas PYMEs se quedan atrás por no saber &quot;por dónde empezar&quot;.
            </p>
            <p style={{ textAlign: isMobile ? "center" : "justify" }}>
                La falta de personal técnico frena al 33% de las empresas.{" "}
                <strong>Automatizatelo</strong> rompe esa barrera. No necesitas un departamento de IT; nos necesitas a nosotros. Somos tu aliado estratégico para diseñar soluciones a medida que funcionan desde el primer día.
            </p>
            <ul style={{ marginBottom: "2rem", listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "1rem", display: "flex", alignItems: "flex-start", gap: "1rem", justifyContent: isMobile ? "center" : "flex-start" }}>
                    <i
                        className="fa-solid fa-check"
                        style={{ color: "var(--color-primary)", marginTop: "0.4rem" }}
                    ></i>{" "}
                    <div>
                        <strong>Accesible:</strong> Soluciones de alto impacto sin la inversión de una multinacional.
                    </div>
                </li>
                <li style={{ marginBottom: "1rem", display: "flex", alignItems: "flex-start", gap: "1rem", justifyContent: isMobile ? "center" : "flex-start" }}>
                    <i
                        className="fa-solid fa-check"
                        style={{ color: "var(--color-primary)", marginTop: "0.4rem" }}
                    ></i>{" "}
                    <div>
                        <strong>Experto:</strong> Entendemos el mercado local español y sus necesidades.
                    </div>
                </li>
                <li style={{ marginBottom: "1rem", display: "flex", alignItems: "flex-start", gap: "1rem", justifyContent: isMobile ? "center" : "flex-start" }}>
                    <i
                        className="fa-solid fa-check"
                        style={{ color: "var(--color-primary)", marginTop: "0.4rem" }}
                    ></i>{" "}
                    <div>
                        <strong>Avanzado:</strong> Tecnología puntera (IA y Low-Code) aplicada a problemas reales.
                    </div>
                </li>
            </ul>
        </div>
    );

    const imageContent = (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="opportunity-image"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: isMobile ? "2rem 0" : "0"
            }}
        >
            <Image
                src="/logo.png"
                alt="Automatizatelo Logo"
                width={400}
                height={400}
                style={{ maxWidth: isMobile ? "250px" : "100%", height: "auto" }}
            />
        </motion.div>
    );

    return (
        <section id="opportunity" className="opportunity" style={{ padding: isMobile ? "4rem 0" : "8rem 0" }}>
            <div className="container">
                {isMobile ? (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                        >
                            {titleContent}
                        </motion.div>

                        {imageContent}

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                            transition={{ delay: 0.2 }}
                        >
                            {textContent}
                        </motion.div>
                    </div>
                ) : (
                    <div className="opportunity-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                            transition={{ delay: 0.2 }}
                            className="opportunity-content"
                        >
                            {titleContent}
                            {textContent}
                        </motion.div>
                        {imageContent}
                    </div>
                )}
            </div>
        </section>
    );
}
