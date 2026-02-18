"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function HowWeWork() {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [isMobile, setIsMobile] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleStepClick = (index: number) => {
        setActiveStep(index);
        if (isMobile) {
            setShowModal(true);
        }
    };

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
                    <div className="flow-line" style={{ background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)' }}></div>

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
                            <motion.div
                                className="step-icon-wrapper"
                                onClick={() => handleStepClick(index)}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="step-icon" style={{
                                    background: activeStep === index ? 'var(--color-primary)' : 'white',
                                    color: activeStep === index ? 'white' : 'var(--color-primary)',
                                    borderColor: activeStep === index ? 'var(--color-primary)' : 'var(--color-border)'
                                }}>
                                    <i className={step.icon}></i>
                                </div>
                            </motion.div>
                            <h4 style={{ color: activeStep === index ? 'var(--color-primary)' : 'var(--color-text-main)', marginTop: '1rem', fontWeight: 600 }}>{step.title}</h4>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Modal */}
                <AnimatePresence>
                    {showModal && isMobile && (
                        <motion.div
                            className="mobile-modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                        >
                            <motion.div
                                className="mobile-modal-content"
                                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="mobile-modal-close" onClick={() => setShowModal(false)}>
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                                <div className="mobile-modal-icon">
                                    <i className={steps[activeStep].icon}></i>
                                </div>
                                <span className="step-number" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.8rem' }}>PASO {activeStep + 1}</span>
                                <h3 style={{ margin: '0.5rem 0 1rem', fontSize: '1.5rem' }}>{steps[activeStep].title}</h3>
                                <div className="step-card-body" style={{ textAlign: 'center' }}>
                                    {steps[activeStep].content}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Desktop Central Content Card - Hidden on Mobile */}
                {!isMobile && (
                    <div className="step-content-container">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="step-content-card glass"
                            >
                                <div className="step-card-header">
                                    <span className="step-number">Paso {activeStep + 1}</span>
                                    <h3>{steps[activeStep].title}</h3>
                                </div>
                                <div className="step-card-body">
                                    {steps[activeStep].content}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </section>
    );
}
