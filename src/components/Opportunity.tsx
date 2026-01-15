"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Opportunity() {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section id="opportunity" className="opportunity">
            <div className="container opportunity-grid">
                <motion.div
                    initial="hidden"
                    transition={{ delay: 0.2 }}
                    className="opportunity-content"
                >
                    <h4
                        style={{
                            color: "var(--color-accent)",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            marginBottom: "0.5rem",
                        }}
                    >
                        La Oportunidad
                    </h4>
                    <h2>¿Por qué digitalizar y automatizar ahora?</h2>
                    <p>
                        Ya no es una opción, es la clave para la supervivencia y el crecimiento. Mientras las grandes corporaciones multiplican su productividad, muchas PYMEs se quedan atrás por no saber &quot;por dónde empezar&quot;.
                    </p>
                    <p>
                        La falta de personal técnico frena al 33% de las empresas.{" "}
                        <strong>Automatizatelo</strong> rompe esa barrera. No necesitas un departamento de IT; nos necesitas a nosotros. Somos tu aliado estratégico para diseñar soluciones a medida que funcionan desde el primer día.
                    </p>
                    <ul style={{ marginBottom: "2rem" }}>
                        <li>
                            <i
                                className="fa-solid fa-check"
                                style={{ color: "var(--color-primary)" }}
                            ></i>{" "}
                            <strong>Accesible:</strong> Soluciones de alto impacto sin la inversión de una multinacional.
                        </li>
                        <li>
                            <i
                                className="fa-solid fa-check"
                                style={{ color: "var(--color-primary)" }}
                            ></i>{" "}
                            <strong>Experto:</strong> Entendemos el mercado local español y sus necesidades.
                        </li>
                        <li>
                            <i
                                className="fa-solid fa-check"
                                style={{ color: "var(--color-primary)" }}
                            ></i>{" "}
                            <strong>Avanzado:</strong> Tecnología puntera (IA y Low-Code) aplicada a problemas reales.
                        </li>
                    </ul>
                </motion.div>
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
                    }}
                >
                    <Image
                        src="/logo.png"
                        alt="Automatizatelo Logo"
                        width={400}
                        height={400}
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
