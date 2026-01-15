"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function HowWeWork() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    const steps = [
        {
            title: "Analizamos",
            icon: "fa-solid fa-magnifying-glass",
            content: (
                <>
                    No empezamos a ciegas. <strong style={{ color: 'var(--color-primary)' }}>Auditamos tu operativa actual</strong> para identificar cuellos de botella, tareas repetitivas y fugas de tiempo. <strong style={{ color: 'var(--color-primary)' }}>Entendemos tu negocio</strong> antes de tocar una sola línea de código.
                </>
            )
        },
        {
            title: "Diseñamos",
            icon: "fa-solid fa-pen-ruler",
            content: (
                <>
                    Creamos el <strong style={{ color: 'var(--color-primary)' }}>plano de tu solución</strong>. Definimos qué herramientas usaremos y diseñamos la <strong style={{ color: 'var(--color-primary)' }}>arquitectura de datos perfecta</strong> para que tu sistema sea <strong style={{ color: 'var(--color-primary)' }}>escalable y seguro</strong> desde el primer día.
                </>
            )
        },
        {
            title: "Automatizamos",
            icon: "fa-solid fa-robot",
            content: (
                <>
                    Manos a la obra. <strong style={{ color: 'var(--color-primary)' }}>Desarrollamos el proyecto</strong>, conectamos tus aplicaciones y configuramos los 'robots' de software. Construimos el sistema completo y realizamos <strong style={{ color: 'var(--color-primary)' }}>pruebas de estrés</strong> para asegurar <strong style={{ color: 'var(--color-primary)' }}>cero errores</strong>.
                </>
            )
        },
        {
            title: "Medimos",
            icon: "fa-solid fa-chart-pie",
            content: (
                <>
                    Lo que no se mide, no se mejora. Monitorizamos el rendimiento de la solución para confirmarte el <strong style={{ color: 'var(--color-primary)' }}>ahorro de tiempo</strong> y el <strong style={{ color: 'var(--color-primary)' }}>retorno de inversión (ROI)</strong> real conseguido.
                </>
            )
        },
        {
            title: "Optimizamos",
            icon: "fa-solid fa-sliders",
            content: (
                <>
                    Tu negocio evoluciona, y tu tecnología también. Realizamos <strong style={{ color: 'var(--color-primary)' }}>ajustes continuos</strong> basados en datos reales para que tu sistema sea cada vez <strong style={{ color: 'var(--color-primary)' }}>más rápido, más inteligente y más rentable</strong>.
                </>
            )
        }
    ];

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section id="how-we-work" className="how-we-work">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Cómo Trabajamos
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="section-subtitle"
                >
                    Un proceso fluido y transparente.
                </motion.p>

                <div className="flow-container">
                    <div className="flow-line"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`flow-step ${activeStep === index ? 'active' : ''}`}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={item}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div
                                className="step-icon-wrapper"
                                onClick={() => setActiveStep(index)}
                            >
                                <div className="step-icon">
                                    <i className={step.icon}></i>
                                </div>
                                <div className="step-tooltip">
                                    {step.content}
                                </div>
                            </div>
                            <h4>{step.title}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mobile Modal */}
            <AnimatePresence>
                {activeStep !== null && (
                    <motion.div
                        className="mobile-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveStep(null)}
                    >
                        <motion.div
                            className="mobile-modal-content"
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="mobile-modal-close" onClick={() => setActiveStep(null)}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                            <div className="mobile-modal-icon">
                                <i className={steps[activeStep].icon}></i>
                            </div>
                            <h4>{steps[activeStep].title}</h4>
                            <p>{steps[activeStep].content}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
