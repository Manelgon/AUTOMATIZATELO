"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "¿Qué es la automatización de procesos?",
        answer: "La automatización consiste en crear sistemas que realizan tareas de forma automática. Esto puede incluir desde enviar respuestas a clientes hasta generar documentos o conectar diferentes herramientas de tu empresa. El objetivo es reducir tareas manuales, evitar errores y ahorrar tiempo.",
        plain: "La automatización consiste en crear sistemas que realizan tareas de forma automática. Esto puede incluir desde enviar respuestas a clientes hasta generar documentos o conectar diferentes herramientas de tu empresa. El objetivo es reducir tareas manuales, evitar errores y ahorrar tiempo."
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
                    <li>Administradores de fincas</li>
                </ul>
                <p style={{ marginTop: '0.5rem' }}>Cualquier empresa que tenga procesos repetitivos puede beneficiarse.</p>
            </>
        ),
        plain: "La automatización es útil para prácticamente cualquier negocio. Trabajamos especialmente con PYMEs, negocios locales, empresas de servicios, e-commerce, academias, clínicas y administradores de fincas. Cualquier empresa con procesos repetitivos puede beneficiarse."
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
        ),
        plain: "Se pueden automatizar la captación de clientes desde formularios, seguimiento automático de leads, respuestas automáticas a consultas, generación de facturas o documentos, envío de notificaciones internas y reportes automáticos semanales. Cada empresa tiene procesos diferentes, por eso diseñamos soluciones a medida."
    },
    {
        question: "¿Necesito conocimientos técnicos?",
        answer: "No. Nosotros nos encargamos de todo el diseño, implementación y configuración. Tú solo tendrás que utilizar el sistema una vez esté funcionando.",
        plain: "No. Nosotros nos encargamos de todo el diseño, implementación y configuración. Tú solo tendrás que utilizar el sistema una vez esté funcionando."
    },
    {
        question: "Ya intentamos automatizar algo y lo acabamos abandonando. ¿Por qué esto sería distinto?",
        answer: "Casi siempre pasa por lo mismo: se montó una herramienta sin auditar antes el proceso, y al final era más rápido seguir haciéndolo a mano. Por eso mi método empieza siempre por la auditoría: primero entendemos cómo trabajas de verdad, después construimos sobre tu proceso real, y el sistema se entrega documentado, con soporte y con tu equipo sabiendo usarlo. Los sistemas que construyo llevan meses funcionando a diario en negocios reales — puedes verlos en los casos de éxito.",
        plain: "Casi siempre se abandonó porque se montó una herramienta sin auditar antes el proceso. Mi método empieza por la auditoría: primero entendemos cómo trabajas, después construimos sobre tu proceso real, y el sistema se entrega documentado, con soporte y con tu equipo formado. Los sistemas que construyo llevan meses funcionando a diario en negocios reales."
    },
    {
        question: "¿Mi empresa es demasiado pequeña para automatizar?",
        answer: "Al contrario: las pymes y los despachos pequeños son justo donde más se nota. Con una sola automatización desde 500€ ya se recuperan horas cada semana, y no necesitas departamento técnico ni cambiar tus herramientas. Lo único que hace falta es tener procesos repetitivos — y eso lo tiene cualquier negocio.",
        plain: "Al contrario: las pymes y los despachos pequeños son donde más se nota. Con una automatización desde 500€ ya se recuperan horas cada semana, sin departamento técnico ni cambiar de herramientas. Solo hace falta tener procesos repetitivos."
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
        ),
        plain: "Automatización Inicio desde 500€, Automatización Negocio desde 2.000€ y Automatización Completa desde 8.000€. Lo mejor es analizar tu caso y ver qué automatizaciones pueden aportar más valor."
    },
    {
        question: "¿Cuánto tiempo tarda una automatización?",
        answer: "Depende del proyecto. Algunas automatizaciones pueden estar listas en pocos días, mientras que sistemas más complejos pueden requerir más tiempo. Siempre informamos del plazo antes de empezar.",
        plain: "Depende del proyecto. Algunas automatizaciones pueden estar listas en pocos días, mientras que sistemas más complejos pueden requerir más tiempo. Siempre informamos del plazo antes de empezar."
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
        ),
        plain: "En la mayoría de casos sí. Integramos herramientas como CRM, bases de datos, email marketing, formularios web, WhatsApp, Google Sheets y plataformas de pago. Si ya utilizas herramientas digitales, normalmente podemos conectarlas."
    },
    {
        question: "¿Qué pasa si algo deja de funcionar?",
        answer: "Ofrecemos soporte y mantenimiento para asegurarnos de que las automatizaciones sigan funcionando correctamente. Además, monitorizamos los sistemas para detectar posibles problemas antes de que te afecten.",
        plain: "Ofrecemos soporte y mantenimiento para asegurarnos de que las automatizaciones sigan funcionando correctamente. Además, monitorizamos los sistemas para detectar posibles problemas antes de que te afecten."
    },
    {
        question: "¿Y si tú desapareces mañana? ¿Me quedo colgado?",
        answer: "No, y es una diferencia importante: el código, los datos y las cuentas son tuyos desde el primer día, y todo se entrega documentado. No hay licencias mías por medio ni dependencia de mi servidor — cualquier desarrollador podría continuar el sistema si hiciera falta. Ese es el trato: construyo para ti, no te alquilo.",
        plain: "No: el código, los datos y las cuentas son tuyos desde el primer día, y todo se entrega documentado. No hay licencias del proveedor ni dependencia de su servidor — cualquier desarrollador podría continuar el sistema. Construyo para ti, no te alquilo."
    },
    {
        question: "¿La automatización sustituye a las personas?",
        answer: "No. La automatización elimina tareas repetitivas para que tu equipo pueda centrarse en tareas más importantes como ventas, atención al cliente o crecimiento del negocio.",
        plain: "No. La automatización elimina tareas repetitivas para que tu equipo pueda centrarse en tareas más importantes como ventas, atención al cliente o crecimiento del negocio."
    },
    {
        question: "¿Cómo puedo empezar?",
        answer: "El primer paso es analizar cómo funciona tu negocio actualmente. A partir de ahí identificamos qué procesos se pueden automatizar y diseñamos una solución adaptada a tu empresa. Puedes solicitar un análisis gratuito sin compromiso.",
        plain: "El primer paso es analizar cómo funciona tu negocio actualmente. A partir de ahí identificamos qué procesos se pueden automatizar y diseñamos una solución adaptada a tu empresa. Puedes solicitar un análisis gratuito sin compromiso."
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": f.plain
        }
    }))
};

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [showAll, setShowAll] = useState(false);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

    return (
        <section id="faq" style={{ padding: "4.5rem 0" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: "2.5rem" }}
                >
                    <span className="kicker-mono">FAQ</span>
                    <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                        ¿Qué procesos puedes automatizar con IA?
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: "left", margin: 0 }}>
                        Las dudas que me preguntan siempre, respondidas sin jerga.
                    </p>
                </motion.div>

                <div>
                    {visibleFaqs.map((faq, index) => (
                        <FAQItem
                            key={faq.question}
                            faq={faq}
                            index={index}
                            activeIndex={activeIndex}
                            toggleFAQ={toggleFAQ}
                        />
                    ))}
                </div>

                {!showAll && faqs.length > 5 && (
                    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                        <button
                            onClick={() => setShowAll(true)}
                            className="faq-vermas"
                        >
                            Ver más preguntas ({faqs.length - 5})
                        </button>
                    </div>
                )}
            </div>

            <style>{`
                .faq-item {
                    border-top: 1px solid var(--color-border);
                }
                .faq-item:last-of-type, div:last-child > .faq-item {
                    border-bottom: 1px solid var(--color-border);
                }
                .faq-pregunta {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    padding: 1.4rem 0.4rem;
                    background: none;
                    border: none;
                    cursor: pointer;
                    text-align: left;
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.1rem, 2vw, 1.35rem);
                    font-weight: 600;
                    color: var(--color-text-main);
                    line-height: 1.3;
                    transition: color 0.2s ease, padding-left 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .faq-pregunta:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .faq-chevron {
                    color: var(--color-primary);
                    font-size: 0.85rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .faq-chevron-abierto {
                    transform: rotate(180deg);
                }
                .faq-respuesta {
                    overflow: hidden;
                }
                .faq-respuesta-inner {
                    padding: 0 0.4rem 1.6rem;
                    color: var(--color-text-muted);
                    line-height: 1.7;
                    font-size: 0.98rem;
                    max-width: 720px;
                }
                .faq-respuesta-inner ul {
                    list-style: disc;
                    padding-left: 1.4rem;
                    margin: 0.6rem 0;
                }
                .faq-respuesta-inner li {
                    margin-bottom: 0.3rem;
                }
                .faq-vermas {
                    background: transparent;
                    border: 1px solid var(--color-border);
                    color: var(--color-text-main);
                    padding: 0.75rem 1.75rem;
                    border-radius: 50px;
                    font-weight: 600;
                    cursor: pointer;
                    font-size: 0.95rem;
                    transition: border-color 0.2s ease, color 0.2s ease;
                }
                .faq-vermas:hover {
                    border-color: var(--color-primary);
                    color: var(--color-primary);
                }
            `}</style>
        </section>
    );
}

const FAQItem = ({ faq, index, activeIndex, toggleFAQ }: { faq: { question: string; answer: React.ReactNode }, index: number, activeIndex: number | null, toggleFAQ: (index: number) => void }) => (
    <div className="faq-item">
        <button
            className="faq-pregunta"
            onClick={() => toggleFAQ(index)}
            aria-expanded={activeIndex === index}
        >
            <span>{faq.question}</span>
            <span className={`faq-chevron ${activeIndex === index ? 'faq-chevron-abierto' : ''}`}>
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
                    className="faq-respuesta"
                >
                    <div className="faq-respuesta-inner">
                        {faq.answer}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);
