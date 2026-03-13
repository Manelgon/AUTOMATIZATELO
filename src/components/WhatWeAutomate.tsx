"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const flows = [
    {
        id: "clientes",
        label: "Gestión de clientes",
        icon: "fa-users",
        steps: [
            { icon: "fa-globe", text: "Formulario web" },
            { icon: "fa-database", text: "Lead en CRM" },
            { icon: "fa-envelope", text: "Email automático" },
            { icon: "fa-handshake", text: "Seguimiento comercial" },
        ],
        color: "#f97316",
    },
    {
        id: "whatsapp",
        label: "Atención 24/7",
        icon: "fa-comments",
        steps: [
            { icon: "fa-comment-dots", text: "Cliente escribe por WhatsApp" },
            { icon: "fa-robot", text: "Bot responde al instante" },
            { icon: "fa-route", text: "Clasifica la consulta" },
            { icon: "fa-user-tie", text: "Deriva a humano si es necesario" },
        ],
        color: "#22c55e",
    },
    {
        id: "facturas",
        label: "Facturación automática",
        icon: "fa-file-invoice-dollar",
        steps: [
            { icon: "fa-cart-shopping", text: "Pedido recibido" },
            { icon: "fa-file-invoice", text: "Factura generada automáticamente" },
            { icon: "fa-paper-plane", text: "Envío automático al cliente" },
            { icon: "fa-table-columns", text: "Registro en base de datos" },
        ],
        color: "#6366f1",
    },
    {
        id: "reportes",
        label: "Reportes automáticos",
        icon: "fa-chart-line",
        steps: [
            { icon: "fa-calendar-week", text: "Cada lunes a las 8:00" },
            { icon: "fa-chart-bar", text: "Informe de ventas generado" },
            { icon: "fa-gauge-high", text: "Métricas del negocio" },
            { icon: "fa-inbox", text: "Enviado a tu email" },
        ],
        color: "#0ea5e9",
    },
];

export default function WhatWeAutomate() {
    const [active, setActive] = useState("clientes");

    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    const activeFlow = flows.find(f => f.id === active)!;

    return (
        <section id="que-automatizamos" style={{
            background: 'var(--color-bg-secondary)',
            padding: '6rem 0',
            borderTop: '1px solid var(--color-border)',
            borderBottom: '1px solid var(--color-border)',
        }}>
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
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
                        Qué podemos automatizar
                    </span>
                    <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
                        Ejemplos reales de automatización
                    </h2>
                    <p className="section-subtitle" style={{ maxWidth: '550px', margin: '0 auto' }}>
                        Convertimos procesos manuales en sistemas que funcionan solos.
                    </p>
                </motion.div>

                {/* Selector de flujos */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '3rem',
                }}>
                    {flows.map((flow) => (
                        <button
                            key={flow.id}
                            onClick={() => setActive(flow.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.6rem 1.25rem',
                                borderRadius: '50px',
                                border: active === flow.id
                                    ? '2px solid var(--color-primary)'
                                    : '1px solid var(--color-border)',
                                background: active === flow.id
                                    ? 'rgba(249,115,22,0.08)'
                                    : 'var(--color-bg)',
                                color: active === flow.id ? 'var(--color-primary)' : 'var(--color-text-muted)',
                                fontWeight: active === flow.id ? 700 : 400,
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            <i className={`fa-solid ${flow.icon}`} style={{ fontSize: '0.85rem' }}></i>
                            {flow.label}
                        </button>
                    ))}
                </div>

                {/* Flujo visual */}
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '0',
                        maxWidth: '900px',
                        margin: '0 auto',
                    }}
                >
                    {activeFlow.steps.map((step, i) => (
                        <div key={step.text} style={{ display: 'flex', alignItems: 'center' }}>
                            <div
                                className="glass"
                                style={{
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '1.75rem 1.5rem 1.5rem',
                                    borderRadius: '16px',
                                    borderTop: `3px solid ${activeFlow.color}`,
                                    borderLeft: '1px solid var(--color-border)',
                                    borderRight: '1px solid var(--color-border)',
                                    borderBottom: '1px solid var(--color-border)',
                                    minWidth: '160px',
                                    textAlign: 'center',
                                    background: 'var(--color-bg)',
                                }}
                            >
                                {/* Número en el borde superior */}
                                <span style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: activeFlow.color,
                                    color: '#fff',
                                    fontSize: '0.7rem',
                                    fontWeight: 700,
                                    width: '22px',
                                    height: '22px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    {i + 1}
                                </span>

                                <div style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '50%',
                                    background: `${activeFlow.color}18`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <i
                                        className={`fa-solid ${step.icon}`}
                                        style={{ color: activeFlow.color, fontSize: '1.2rem' }}
                                    ></i>
                                </div>
                                <span style={{
                                    color: 'var(--color-text-main)',
                                    fontSize: '0.88rem',
                                    fontWeight: 500,
                                    lineHeight: 1.4,
                                }}>
                                    {step.text}
                                </span>
                            </div>

                            {i < activeFlow.steps.length - 1 && (
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '0 0.5rem',
                                    color: activeFlow.color,
                                    fontSize: '1.3rem',
                                    opacity: 0.7,
                                }}>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>

                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
                    style={{
                        textAlign: 'center',
                        marginTop: '3rem',
                        color: 'var(--color-text-muted)',
                        fontSize: '1rem',
                    }}
                >
                    Todo esto ocurre automáticamente, en segundos, sin intervención humana.
                </motion.p>
            </div>
        </section>
    );
}
