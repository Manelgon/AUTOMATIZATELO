"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FAQ.module.css";

const faqs = [
    {
        question: "¿Qué es exactamente Automatízatelo?",
        answer: "Automatízatelo es un servicio que conecta y automatiza procesos de tu negocio para que tareas repetitivas se hagan solas: responder clientes, registrar datos, generar documentos, gestionar pedidos, enviar avisos o integrar herramientas. El objetivo es que ahorres tiempo, reduzcas errores y puedas centrarte en lo importante."
    },
    {
        question: "¿Qué cosas se pueden automatizar?",
        answer: (
            <>
                <p>Se pueden automatizar muchas tareas habituales, por ejemplo:</p>
                <ul>
                    <li>Respuestas automáticas por WhatsApp o email</li>
                    <li>Registro automático de clientes o pedidos</li>
                    <li>Generación de PDFs o informes</li>
                    <li>Integración entre apps y herramientas</li>
                    <li>Gestión de citas o reservas</li>
                    <li>Notificaciones y recordatorios</li>
                    <li>Paneles de control con datos en tiempo real</li>
                </ul>
                <p style={{ marginTop: '0.5rem' }}>Si una tarea se repite, normalmente se puede automatizar.</p>
            </>
        )
    },
    {
        question: "¿Esto sirve para mi negocio?",
        answer: (
            <>
                <p>Sí, porque cada automatización se adapta al negocio. Trabajamos con:</p>
                <ul>
                    <li>Restaurantes y comida para llevar</li>
                    <li>Hoteles y alojamientos</li>
                    <li>Clínicas y profesionales sanitarios</li>
                    <li>Academias y colegios</li>
                    <li>Empresas de servicios</li>
                    <li>Negocios online</li>
                </ul>
                <p style={{ marginTop: '0.5rem' }}>Cada solución se ajusta a lo que realmente necesitas.</p>
            </>
        )
    },
    {
        question: "¿Es difícil de usar?",
        answer: (
            <>
                <p>No. Las automatizaciones están pensadas para que tú solo uses:</p>
                <ul>
                    <li>WhatsApp</li>
                    <li>Un panel sencillo</li>
                    <li>Formularios fáciles</li>
                </ul>
                <p style={{ marginTop: '0.5rem' }}>Todo lo complejo funciona en segundo plano.</p>
            </>
        )
    },
    {
        question: "¿Cuánto cuesta?",
        answer: (
            <>
                <p>Depende del tipo de automatización y del tiempo que se necesite para desarrollarla. Hay dos modelos habituales:</p>
                <ul>
                    <li>Pago por proyecto</li>
                    <li>Mantenimiento mensual opcional</li>
                </ul>
                <p style={{ marginTop: '0.5rem' }}>Antes de empezar siempre se explica el coste y el alcance.</p>
            </>
        )
    },
    {
        question: "¿Cuánto tarda en estar funcionando?",
        answer: "Las automatizaciones sencillas pueden estar listas en pocos días. Los proyectos más completos suelen tardar entre una y tres semanas, dependiendo de la complejidad. Primero se crea una versión funcional y después se mejora si hace falta."
    },
    {
        question: "¿Tengo que cambiar mis herramientas?",
        answer: (
            <>
                <p>No necesariamente. En la mayoría de casos se integran las herramientas que ya utilizas:</p>
                <ul>
                    <li>WhatsApp</li>
                    <li>Excel</li>
                    <li>Google Drive</li>
                    <li>Email</li>
                    <li>CRM</li>
                    <li>Formularios</li>
                    <li>Apps web</li>
                </ul>
                <p style={{ marginTop: '0.5rem' }}>La idea es adaptar la automatización a tu sistema, no al revés.</p>
            </>
        )
    },
    {
        question: "¿Es seguro?",
        answer: "Sí. Los datos se almacenan en sistemas seguros y se siguen buenas prácticas de protección de datos y RGPD cuando es necesario. Además, cada proyecto se configura para que solo las personas autorizadas puedan acceder a la información."
    },
    {
        question: "¿Qué pasa si algo falla?",
        answer: "Tienes soporte. Si algo deja de funcionar o necesitas hacer cambios, se revisa y se soluciona. Las automatizaciones se monitorizan para detectar problemas lo antes posible."
    },
    {
        question: "¿Puedo ampliar la automatización en el futuro?",
        answer: (
            <>
                <p>Sí. La mayoría de sistemas están pensados para crecer:</p>
                <ul>
                    <li>añadir nuevas funciones</li>
                    <li>conectar nuevas herramientas</li>
                    <li>automatizar más procesos</li>
                </ul>
                <p style={{ marginTop: '0.5rem' }}>Muchas empresas empiezan con algo pequeño y lo amplían después.</p>
            </>
        )
    },
    {
        question: "¿Voy a depender siempre de vosotros?",
        answer: "No. Tendrás acceso a tus datos y a tus herramientas. Si en algún momento quieres cambiar o evolucionar el sistema, se puede hacer sin problemas."
    },
    {
        question: "¿Necesito servidores o conocimientos técnicos?",
        answer: "No. Nosotros nos encargamos de la parte técnica, servidores e integraciones si hace falta. Tú solo usas la solución final."
    },
    {
        question: "¿Realmente merece la pena automatizar?",
        answer: (
            <>
                <p>Si realizas tareas repetitivas todos los días, casi seguro que sí. Las automatizaciones suelen ahorrar:</p>
                <ul>
                    <li>tiempo</li>
                    <li>errores</li>
                    <li>trabajo manual</li>
                </ul>
                <p style={{ marginTop: '0.5rem' }}>Y permiten atender más clientes sin aumentar el esfuerzo.</p>
            </>
        )
    }
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
                        Preguntas Frecuentes
                    </h2>
                    <p className={styles.subtitle}>
                        Resolvemos tus dudas sobre la automatización
                    </p>
                </div>

                <div className={styles.layout}>
                    {/* First item full width */}
                    <div className={styles.fullWidthItem}>
                        <FAQItem faq={faqs[0]} index={0} activeIndex={activeIndex} toggleFAQ={toggleFAQ} />
                    </div>

                    {/* Remaining items in grid */}
                    <div className={styles.gridContainer}>
                        {faqs.slice(1).map((faq, originalIndex) => (
                            <FAQItem
                                key={originalIndex + 1}
                                faq={faq}
                                index={originalIndex + 1}
                                activeIndex={activeIndex}
                                toggleFAQ={toggleFAQ}
                            />
                        ))}
                    </div>
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
