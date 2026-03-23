"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FAQ.module.css";

const faqs = [
    {
        question: "¿Qué es la automatización de procesos?",
        answer: "La automatización consiste en crear sistemas que realizan tareas de forma automática. Esto puede incluir desde enviar respuestas a clientes hasta generar documentos o conectar diferentes herramientas de tu empresa. El objetivo es reducir tareas manuales, evitar errores y ahorrar tiempo."
    },
    {
        question: "¿Qué tipo de empresas pueden beneficiarse?",
        answer: (
            <>
                <p>La automatización es útil para prácticamente cualquier negocio. Trabajamos especialmente con:</p>
                <ul>
                    <li>PYMEs y negocios locales</li>
                    <li>Empresas de servicios</li>
                    <li>E-commerce</li>
                    <li>Academias</li>
                    <li>Clínicas</li>
                    <li>Hoteles y restaurantes</li>
                </ul>
                <p style={{ marginTop: '0.5rem' }}>Cualquier empresa que tenga procesos repetitivos puede beneficiarse.</p>
            </>
        )
    },
    {
        question: "¿Qué tipo de procesos se pueden automatizar?",
        answer: (
            <>
                <p>Muchísimos procesos del día a día pueden automatizarse, por ejemplo:</p>
                <ul>
                    <li>Captación de clientes desde formularios</li>
                    <li>Seguimiento automático de leads</li>
                    <li>Respuestas automáticas a consultas</li>
                    <li>Generación de facturas o documentos</li>
                    <li>Envío de notificaciones internas</li>
                    <li>Reportes automáticos semanales</li>
                </ul>
                <p style={{ marginTop: '0.5rem' }}>Cada empresa tiene procesos diferentes, por eso diseñamos soluciones a medida.</p>
            </>
        )
    },
    {
        question: "¿Necesito conocimientos técnicos?",
        answer: "No. Nosotros nos encargamos de todo el diseño, implementación y configuración. Tú solo tendrás que utilizar el sistema una vez esté funcionando."
    },
    {
        question: "¿Cuánto cuesta automatizar mi negocio?",
        answer: (
            <>
                <p>El coste depende del tipo de automatización y la complejidad del proceso. Ofrecemos desde soluciones sencillas hasta sistemas más avanzados:</p>
                <ul>
                    <li>Automatización Inicio — desde 500€</li>
                    <li>Automatización Negocio — desde 2.000€</li>
                    <li>Automatización Completa — desde 8.000€</li>
                </ul>
                <p style={{ marginTop: '0.5rem' }}>Lo mejor es analizar tu caso y ver qué automatizaciones pueden aportar más valor.</p>
            </>
        )
    },
    {
        question: "¿Cuánto tiempo tarda una automatización?",
        answer: "Depende del proyecto. Algunas automatizaciones pueden estar listas en pocos días, mientras que sistemas más complejos pueden requerir más tiempo. Siempre informamos del plazo antes de empezar."
    },
    {
        question: "¿Las automatizaciones funcionan con mis herramientas actuales?",
        answer: (
            <>
                <p>En la mayoría de casos sí. Podemos integrar herramientas como:</p>
                <ul>
                    <li>CRM y bases de datos</li>
                    <li>Email y email marketing</li>
                    <li>Formularios web</li>
                    <li>WhatsApp</li>
                    <li>Google Sheets</li>
                    <li>Plataformas de pago</li>
                </ul>
                <p style={{ marginTop: '0.5rem' }}>Si ya utilizas herramientas digitales, normalmente podemos conectarlas.</p>
            </>
        )
    },
    {
        question: "¿Qué pasa si algo deja de funcionar?",
        answer: "Ofrecemos soporte y mantenimiento para asegurarnos de que las automatizaciones sigan funcionando correctamente. Además, monitorizamos los sistemas para detectar posibles problemas antes de que te afecten."
    },
    {
        question: "¿La automatización sustituye a las personas?",
        answer: "No. La automatización elimina tareas repetitivas para que tu equipo pueda centrarse en tareas más importantes como ventas, atención al cliente o crecimiento del negocio."
    },
    {
        question: "¿Cómo puedo empezar?",
        answer: "El primer paso es analizar cómo funciona tu negocio actualmente. A partir de ahí identificamos qué procesos se pueden automatizar y diseñamos una solución adaptada a tu empresa. Puedes solicitar un análisis gratuito sin compromiso."
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.section} id="faq">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        ¿Qué procesos puedes automatizar con IA?
                    </h2>
                    <p className={styles.subtitle}>
                        Resolvemos tus dudas sobre la automatización
                    </p>
                </div>

                <div className={styles.layout}>
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            index={index}
                            activeIndex={activeIndex}
                            toggleFAQ={toggleFAQ}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

const FAQItem = ({ faq, index, activeIndex, toggleFAQ }: { faq: any, index: number, activeIndex: number | null, toggleFAQ: (index: number) => void }) => (
    <div className={styles.faqItem}>
        <button
            className={styles.questionButton}
            onClick={() => toggleFAQ(index)}
            aria-expanded={activeIndex === index}
        >
            <span>{faq.question}</span>
            <span className={`${styles.icon} ${activeIndex === index ? styles.open : ''}`}>
                <i className="fas fa-chevron-down"></i>
            </span>
        </button>
        <AnimatePresence>
            {activeIndex === index && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.answerWrapper}
                >
                    <div className={styles.answer}>
                        {faq.answer}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);
