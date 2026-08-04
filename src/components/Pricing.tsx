"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const planesAutomatizar = [
    {
        name: "Poner en marcha",
        price: "900",
        desde: true,
        description: "La primera pieza funcionando: las herramientas de IA, un CRM o los flujos que más tiempo te comen.",
        badge: null,
        highlight: false,
        features: [
            "Herramientas de IA elegidas y configuradas",
            "O el CRM implantado y migrado",
            "Casos de uso por puesto y arranque del equipo",
            "Una automatización suelta, desde 500€",
        ],
        cta: "Solicitar Propuesta",
        ctaHref: "#contact",
    },
    {
        name: "Un área completa",
        price: "2.000",
        desde: true,
        description: "Ventas, clientes u operaciones funcionando solos, de principio a fin.",
        badge: "Lo más habitual",
        highlight: true,
        features: [
            "Hasta 5 procesos automatizados",
            "Chatbot de WhatsApp o web conectado a tus sistemas",
            "Panel de gestión a medida",
            "Facturas y documentos, en los dos sentidos",
            "3 meses de soporte incluido",
        ],
        cta: "Empezar Ahora",
        ctaHref: "#contact",
    },
    {
        name: "La empresa entera",
        price: "8.000",
        desde: true,
        description: "El sistema completo: todo conectado, todo trabajando solo.",
        badge: null,
        highlight: false,
        features: [
            "Automatización integral de la operativa",
            "Integraciones ilimitadas entre sistemas",
            "Panel de control y métricas en tiempo real",
            "Formación del equipo incluida",
            "6 meses de soporte y mantenimiento",
        ],
        cta: "Solicitar Propuesta",
        ctaHref: "#contact",
    },
];

const planesFormacion = [
    {
        name: "Alfabetización en IA (Art. 4)",
        price: "600",
        desde: true,
        description: "El bloque de cumplimiento del AI Act, para toda la plantilla.",
        badge: null,
        highlight: false,
        features: [
            "4–8 horas, presencial o en remoto",
            "Qué es la IA, riesgos y uso responsable",
            "Certificado nominal por participante",
            "Registro formativo fechado (la evidencia)",
        ],
        cta: "Solicitar Propuesta",
        ctaHref: "#contact",
    },
    {
        name: "Taller intensivo",
        price: "900",
        desde: true,
        description: "Un día, un tema, saliendo con cosas montadas para tu trabajo.",
        badge: "Más popular",
        highlight: true,
        features: [
            "1 día completo (8 horas)",
            "Práctico: cada equipo con sus casos",
            "Herramientas de IA aplicadas al puesto",
            "Material y certificado incluidos",
        ],
        cta: "Solicitar Propuesta",
        ctaHref: "#contact",
    },
    {
        name: "Programa in-company",
        price: "2.400",
        desde: true,
        description: "Varias semanas, con trabajo real aplicado entre sesiones.",
        badge: null,
        highlight: false,
        features: [
            "16 horas en 4 semanas",
            "Para mandos y equipos completos",
            "Trabajo aplicado entre sesión y sesión",
            "Evidencia documental completa",
        ],
        cta: "Solicitar Propuesta",
        ctaHref: "#contact",
    },
    {
        name: "Curso e-learning (SCORM)",
        price: "1.900",
        desde: true,
        description: "Tu formación producida como curso, en tu plataforma para siempre.",
        badge: null,
        highlight: false,
        features: [
            "Producción a medida en formato SCORM",
            "Instalado en la plataforma de tu empresa",
            "Registro individual de cada alumno",
            "Se queda en tu propiedad",
        ],
        cta: "Solicitar Propuesta",
        ctaHref: "#contact",
    },
];

const planesAuditoria = [
    {
        name: "Diagnóstico AI Act",
        price: "750",
        desde: true,
        description: "¿Tu empresa cumple el Reglamento Europeo de IA? Te lo digo con un informe.",
        badge: null,
        highlight: false,
        features: [
            "Inventario de la IA en uso real",
            "Clasificación de riesgos según el Reglamento",
            "Informe + plan de acción priorizado",
            "Entrega en 1–2 semanas",
        ],
        cta: "Solicitar Propuesta",
        ctaHref: "#contact",
    },
    {
        name: "Pack cumplimiento",
        price: "1.800",
        desde: true,
        description: "El diagnóstico + lo que hace falta para dejarlo cerrado.",
        badge: "Recomendado",
        highlight: true,
        features: [
            "Todo el diagnóstico AI Act",
            "Política de uso de IA redactada a medida",
            "Formación Art. 4 con certificados nominales",
            "Evidencia documental completa",
        ],
        cta: "Solicitar Propuesta",
        ctaHref: "#contact",
    },
];

const garantiasAutomatizar = [
    "Sin permanencia",
    "Pago por hitos",
    "Código y datos tuyos",
    "Soporte humano en español",
];

const garantiasFormacion = [
    "Certificado nominal",
    "Registro formativo fechado",
    "Presencial o en remoto",
    "Material incluido",
];

const garantiasAuditoria = [
    "Informe que gerencia entiende",
    "Plan de acción priorizado",
    "Evidencia documental",
    "Precio cerrado por escrito",
];

// Las tres líneas del negocio, en el orden del embudo: formar capta,
// cumplir cierra y automatizar es donde está el proyecto grande.
type Tab = "formar" | "cumplir" | "automatizar";

export default function Pricing() {
    const [tab, setTab] = useState<Tab>("formar");
    const planes = tab === "formar" ? planesFormacion : tab === "cumplir" ? planesAuditoria : planesAutomatizar;
    const garantias = tab === "formar" ? garantiasFormacion : tab === "cumplir" ? garantiasAuditoria : garantiasAutomatizar;

    return (
        <section id="model" style={{ padding: "4.5rem 0" }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: "2rem" }}
                >
                    <span className="kicker-mono">Servicios y precios</span>
                    <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                        Precio cerrado. Plazo cerrado. Sin permanencia.
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 620 }}>
                        Implantar la IA son tres cosas: formar al equipo, cumplir la normativa y
                        automatizar el trabajo. Aquí está lo que cuesta cada una, a la vista.
                    </p>
                </motion.div>

                {/* Selector por línea: formar · cumplir · automatizar */}
                <div className="pr-tabs" role="tablist" aria-label="Línea de servicio">
                    <button
                        type="button"
                        role="tab"
                        aria-selected={tab === "formar"}
                        className={`pr-tab ${tab === "formar" ? "pr-tab-activa" : ""}`}
                        onClick={() => setTab("formar")}
                    >
                        <i className="fa-solid fa-graduation-cap" style={{ marginRight: "0.55rem" }}></i>
                        Formar
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={tab === "cumplir"}
                        className={`pr-tab ${tab === "cumplir" ? "pr-tab-activa" : ""}`}
                        onClick={() => setTab("cumplir")}
                    >
                        <i className="fa-solid fa-clipboard-check" style={{ marginRight: "0.55rem" }}></i>
                        Cumplir
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={tab === "automatizar"}
                        className={`pr-tab ${tab === "automatizar" ? "pr-tab-activa" : ""}`}
                        onClick={() => setTab("automatizar")}
                    >
                        <i className="fa-solid fa-gears" style={{ marginRight: "0.55rem" }}></i>
                        Automatizar
                    </button>
                </div>

                <motion.div
                    key={tab}
                    className={`pr-grid ${tab === "formar" ? "pr-grid-4" : ""} ${tab === "cumplir" ? "pr-grid-2" : ""}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    {planes.map((plan) => (
                        <div
                            key={plan.name}
                            className={`pr-card ${plan.highlight ? "pr-destacado" : ""}`}
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
                                {tab === "automatizar" ? "Ejemplos de lo que suele incluir" : "Qué incluye"}
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
                                href={plan.ctaHref}
                                className={plan.highlight ? "btn btn-primary pr-cta" : "btn pr-cta pr-cta-borde"}
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </motion.div>

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

                {tab === "formar" && (
                    <p style={{ textAlign: "center", color: "var(--color-text-muted)", marginTop: "2rem", fontSize: "1rem", maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}>
                        El precio final depende del número de participantes y la modalidad, y se
                        cierra en la propuesta. Todo el detalle — itinerarios, Art. 4 y evidencia
                        documental — está en la{" "}
                        <a href="/servicios/formacion-ia-empresas" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            página de formación
                        </a>.
                    </p>
                )}
                {tab === "cumplir" && (
                    <p style={{ textAlign: "center", color: "var(--color-text-muted)", marginTop: "2rem", fontSize: "1rem", maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}>
                        El precio final depende del tamaño de la empresa y las herramientas en uso.
                        Qué revisa y qué te llevas, en la página de{" "}
                        <a href="/servicios/auditoria-ia" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            auditoría IA
                        </a>.
                    </p>
                )}
                {tab === "automatizar" && (
                    <p style={{ textAlign: "center", color: "var(--color-text-muted)", marginTop: "2rem", fontSize: "1rem", maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}>
                        Cada proyecto se compone a medida — panel, chatbot, CRM o automatizaciones,
                        en la combinación que tu negocio necesite. El precio y el plazo se cierran
                        antes de empezar.{" "}
                        <a href="#contact" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            Pide la auditoría gratuita
                        </a>{" "}
                        y te digo qué combinación te toca.
                    </p>
                )}

                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <a href="/precios" className="btn pr-cta-borde" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
                        Ver todos los precios →
                    </a>
                </div>
            </div>

            <style>{`
                .pr-tabs {
                    display: inline-flex;
                    gap: 0.3rem;
                    padding: 0.3rem;
                    border: 1px solid var(--color-border);
                    border-radius: 50px;
                    background: var(--color-bg-secondary);
                    margin-bottom: 2rem;
                }
                .pr-tab {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: var(--color-text-muted);
                    background: transparent;
                    border: none;
                    border-radius: 50px;
                    padding: 0.65rem 1.4rem;
                    cursor: pointer;
                    transition: background 0.25s ease, color 0.25s ease;
                }
                .pr-tab:hover {
                    color: var(--color-text-main);
                }
                .pr-tab-activa {
                    background: linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%);
                    color: #faf6ef;
                }
                .pr-tab-activa:hover {
                    color: #faf6ef;
                }
                .pr-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.2rem;
                    align-items: stretch;
                }
                .pr-grid-4 {
                    grid-template-columns: repeat(4, 1fr);
                }
                .pr-grid-2 {
                    grid-template-columns: repeat(2, 1fr);
                    max-width: 780px;
                    margin: 0 auto;
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
                .pr-grid-4 .pr-card {
                    padding: 1.8rem 1.5rem;
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
                .pr-grid-4 .pr-nombre {
                    font-size: 1.25rem;
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
                .pr-grid-4 .pr-cifra {
                    font-size: clamp(2rem, 3vw, 2.6rem);
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
                .pr-grid-4 .pr-lista li {
                    font-size: 0.88rem;
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
                @media (max-width: 1100px) {
                    .pr-grid-4 { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 950px) {
                    .pr-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
                    .pr-grid-4 { grid-template-columns: 1fr; }
                    .pr-tabs {
                        display: flex;
                        width: 100%;
                    }
                    .pr-tab {
                        flex: 1;
                        text-align: center;
                        padding: 0.65rem 0.6rem;
                    }
                }
            `}</style>
        </section>
    );
}
