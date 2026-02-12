"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Respuestas automáticas por WhatsApp o email</li>
                    <li>Registro automático de clientes o pedidos</li>
                    <li>Generación de PDFs o informes</li>
                    <li>Integración entre apps y herramientas</li>
                    <li>Gestión de citas o reservas</li>
                    <li>Notificaciones y recordatorios</li>
                    <li>Paneles de control con datos en tiempo real</li>
                </ul>
                <p className="mt-2">Si una tarea se repite, normalmente se puede automatizar.</p>
            </>
        )
    },
    {
        question: "¿Esto sirve para mi negocio?",
        answer: (
            <>
                <p>Sí, porque cada automatización se adapta al negocio. Trabajamos con:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Restaurantes y comida para llevar</li>
                    <li>Hoteles y alojamientos</li>
                    <li>Clínicas y profesionales sanitarios</li>
                    <li>Academias y colegios</li>
                    <li>Empresas de servicios</li>
                    <li>Negocios online</li>
                </ul>
                <p className="mt-2">Cada solución se ajusta a lo que realmente necesitas.</p>
            </>
        )
    },
    {
        question: "¿Es difícil de usar?",
        answer: (
            <>
                <p>No. Las automatizaciones están pensadas para que tú solo uses:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>WhatsApp</li>
                    <li>Un panel sencillo</li>
                    <li>Formularios fáciles</li>
                </ul>
                <p className="mt-2">Todo lo complejo funciona en segundo plano.</p>
            </>
        )
    },
    {
        question: "¿Cuánto cuesta?",
        answer: (
            <>
                <p>Depende del tipo de automatización y del tiempo que se necesite para desarrollarla. Hay dos modelos habituales:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Pago por proyecto</li>
                    <li>Mantenimiento mensual opcional</li>
                </ul>
                <p className="mt-2">Antes de empezar siempre se explica el coste y el alcance.</p>
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
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>WhatsApp</li>
                    <li>Excel</li>
                    <li>Google Drive</li>
                    <li>Email</li>
                    <li>CRM</li>
                    <li>Formularios</li>
                    <li>Apps web</li>
                </ul>
                <p className="mt-2">La idea es adaptar la automatización a tu sistema, no al revés.</p>
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
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>añadir nuevas funciones</li>
                    <li>conectar nuevas herramientas</li>
                    <li>automatizar más procesos</li>
                </ul>
                <p className="mt-2">Muchas empresas empiezan con algo pequeño y lo amplían después.</p>
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
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>tiempo</li>
                    <li>errores</li>
                    <li>trabajo manual</li>
                </ul>
                <p className="mt-2">Y permiten atender más clientes sin aumentar el esfuerzo.</p>
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
        <section className="py-20 bg-secondary" id="faq">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary inline-block">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-text-muted text-lg">
                        Resolvemos tus dudas sobre la automatización
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-card-bg border border-border-color rounded-lg overflow-hidden transition-colors hover:border-primary/50"
                        >
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span className="text-lg font-medium text-text-main pr-8">
                                    {faq.question}
                                </span>
                                <span className={`transform transition-transform duration-300 text-primary ${activeIndex === index ? 'rotate-180' : ''}`}>
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
                                    >
                                        <div className="px-6 pb-4 text-text-muted border-t border-border-color pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
