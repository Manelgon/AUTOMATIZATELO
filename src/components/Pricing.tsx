"use client";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Automatización Inicio",
        price: "500",
        description: "Para empezar: uno o dos procesos concretos que te quiten trabajo ya.",
        badge: null,
        highlight: false,
        features: [
            "Automatización de 1–2 procesos",
            "Integración entre 2 herramientas",
            "Avisos automáticos por email o WhatsApp",
            "Entrega en 2 semanas",
            "1 mes de soporte incluido",
        ],
        cta: "Solicitar Presupuesto",
    },
    {
        name: "Automatización Negocio",
        price: "2.000",
        description: "Para automatizar un área completa: ventas, clientes u operaciones.",
        badge: "Más popular",
        highlight: true,
        features: [
            "Automatización de hasta 5 procesos",
            "CRM + seguimiento de leads automático",
            "Bot de atención al cliente (WhatsApp/web)",
            "Generación automática de facturas",
            "Reportes semanales automáticos",
            "3 meses de soporte incluido",
        ],
        cta: "Empezar Ahora",
    },
    {
        name: "Automatización Completa",
        price: "8.000",
        description: "Sistema automático integral para toda la empresa.",
        badge: null,
        highlight: false,
        features: [
            "Automatización completa de la empresa",
            "Integraciones ilimitadas entre sistemas",
            "IA conversacional personalizada",
            "Panel de control y métricas en tiempo real",
            "Formación del equipo incluida",
            "6 meses de soporte y mantenimiento",
        ],
        cta: "Solicitar Presupuesto",
    },
];

const garantias = [
    "Sin permanencia",
    "Pago por hitos",
    "Código y datos tuyos",
    "Soporte humano en español",
];

export default function Pricing() {
    return (
        <section id="model" style={{ padding: "4.5rem 0" }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: "2.5rem" }}
                >
                    <span className="kicker-mono">Servicios y precios</span>
                    <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                        Precio cerrado. Plazo cerrado. Sin permanencia.
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 620 }}>
                        Desde una automatización puntual hasta un sistema completo para toda la empresa.
                        Los precios están aquí, a la vista — como debe ser.
                    </p>
                </motion.div>

                <div className="pr-grid">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            className={`pr-card ${plan.highlight ? "pr-destacado" : ""}`}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {plan.badge && (
                                <span className="mono-label pr-badge">· {plan.badge} ·</span>
                            )}
                            <h3 className="pr-nombre">{plan.name}</h3>
                            <p className="pr-desc">{plan.description}</p>
                            <div className="pr-precio">
                                <span className="mono-label pr-desde">Desde</span>
                                <span className="pr-cifra">{plan.price}€</span>
                            </div>
                            <span className="mono-label" style={{ display: "block", color: plan.highlight ? "rgba(250,246,239,0.7)" : "var(--color-text-muted)", marginBottom: "0.7rem" }}>
                                Ejemplos de lo que suele incluir
                            </span>
                            <ul className="pr-lista">
                                {plan.features.map((f) => (
                                    <li key={f}>
                                        <i className="fa-solid fa-check"></i>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#contact"
                                className={plan.highlight ? "btn btn-primary pr-cta" : "btn pr-cta pr-cta-borde"}
                            >
                                {plan.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="pr-garantias"
                >
                    {garantias.map((g) => (
                        <span key={g} className="mono-label pr-garantia">
                            <i className="fa-solid fa-check" style={{ marginRight: "0.5rem", color: "var(--color-primary)" }}></i>
                            {g}
                        </span>
                    ))}
                </motion.div>

                <p style={{ textAlign: "center", color: "var(--color-text-muted)", marginTop: "2rem", fontSize: "1rem", maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}>
                    Cada proyecto se compone a medida — panel, web, chatbot o automatizaciones,
                    en la combinación que tu negocio necesite. El precio y el plazo se cierran
                    antes de empezar.{" "}
                    <a href="#contact" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                        Pide la auditoría gratuita
                    </a>{" "}
                    y te digo qué combinación te toca.
                </p>
            </div>

            <style>{`
                .pr-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.2rem;
                    align-items: stretch;
                }
                .pr-card {
                    display: flex;
                    flex-direction: column;
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    padding: 2.2rem 2rem;
                    transition: transform 0.25s ease, border-color 0.25s ease;
                }
                .pr-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(234, 88, 12, 0.4);
                }
                .pr-destacado {
                    background: linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%);
                    border: none;
                    box-shadow: 0 25px 55px rgba(28, 25, 23, 0.22);
                }
                .pr-badge {
                    color: #f6c39c;
                    margin-bottom: 1rem;
                }
                .pr-nombre {
                    font-family: var(--font-display, serif);
                    font-size: 1.45rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    margin-bottom: 0.5rem;
                    line-height: 1.2;
                }
                .pr-destacado .pr-nombre { color: #faf6ef; }
                .pr-desc {
                    font-size: 0.92rem;
                    color: var(--color-text-muted);
                    line-height: 1.55;
                    margin-bottom: 1.4rem;
                }
                .pr-destacado .pr-desc { color: rgba(250,246,239,0.8); }
                .pr-precio {
                    display: flex;
                    align-items: baseline;
                    gap: 0.7rem;
                    margin-bottom: 1.4rem;
                }
                .pr-desde { color: var(--color-text-muted); }
                .pr-destacado .pr-desde { color: rgba(250,246,239,0.75); }
                .pr-cifra {
                    font-family: var(--font-display, serif);
                    font-size: clamp(2.4rem, 4vw, 3.2rem);
                    font-weight: 600;
                    line-height: 1;
                    color: var(--color-primary);
                    letter-spacing: -0.02em;
                }
                .pr-destacado .pr-cifra { color: #f6c39c; }
                .pr-lista {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 1.8rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                    flex-grow: 1;
                }
                .pr-lista li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.6rem;
                    font-size: 0.92rem;
                    line-height: 1.5;
                    color: var(--color-text-muted);
                }
                .pr-destacado .pr-lista li { color: rgba(250,246,239,0.88); }
                .pr-lista i {
                    color: var(--color-primary);
                    margin-top: 0.25rem;
                    font-size: 0.8rem;
                    flex-shrink: 0;
                }
                .pr-destacado .pr-lista i { color: #f6c39c; }
                .pr-cta {
                    text-align: center;
                    font-size: 0.95rem;
                }
                .pr-cta-borde {
                    border: 1px solid var(--color-border);
                    color: var(--color-text-main);
                    background: transparent;
                }
                .pr-cta-borde:hover {
                    border-color: var(--color-primary);
                    color: var(--color-primary);
                }
                .pr-garantias {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 0.8rem 2rem;
                    margin-top: 2.5rem;
                    color: var(--color-text-muted);
                }
                @media (max-width: 950px) {
                    .pr-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
                }
            `}</style>
        </section>
    );
}
