import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";

const iconMap: Record<string, React.ReactNode> = {
    "Ecosistemas Digitales Integrales": (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
            <rect x="28" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
            <rect x="4" y="28" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
            <rect x="28" y="28" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
            <line x1="20" y1="12" x2="28" y2="12" stroke="currentColor" strokeWidth="2" />
            <line x1="20" y1="36" x2="28" y2="36" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="20" x2="12" y2="28" stroke="currentColor" strokeWidth="2" />
            <line x1="36" y1="20" x2="36" y2="28" stroke="currentColor" strokeWidth="2" />
        </svg>
    ),
    "Desarrollo de Software a Medida": (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
            <path d="M16 20L20 24L16 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="22" y1="28" x2="32" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    "Paneles de Control & Business Intelligence": (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="40" height="30" rx="4" stroke="currentColor" strokeWidth="2" />
            <path d="M10 28L18 18L24 24L32 14L38 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="16" y1="38" x2="32" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="24" y1="34" x2="24" y2="38" stroke="currentColor" strokeWidth="2" />
        </svg>
    ),
    "Diseño y Desarrollo Web": (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
            <ellipse cx="24" cy="24" rx="8" ry="18" stroke="currentColor" strokeWidth="2" />
            <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="2" />
            <line x1="9" y1="14" x2="39" y2="14" stroke="currentColor" strokeWidth="2" />
            <line x1="9" y1="34" x2="39" y2="34" stroke="currentColor" strokeWidth="2" />
        </svg>
    ),
    "E-commerce & Plataformas de Venta": (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12H42L38 32H10L6 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="16" cy="40" r="3" stroke="currentColor" strokeWidth="2" />
            <circle cx="32" cy="40" r="3" stroke="currentColor" strokeWidth="2" />
            <path d="M6 12L4 6H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="18" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="24" y1="16" x2="24" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    "Automatización de Procesos": (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
            <circle cx="36" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="36" r="6" stroke="currentColor" strokeWidth="2" />
            <circle cx="36" cy="36" r="6" stroke="currentColor" strokeWidth="2" />
            <path d="M18 12H30" stroke="currentColor" strokeWidth="2" />
            <path d="M12 18V30" stroke="currentColor" strokeWidth="2" />
            <path d="M18 36H30" stroke="currentColor" strokeWidth="2" />
            <path d="M36 18V30" stroke="currentColor" strokeWidth="2" />
        </svg>
    ),
    "Integración de Sistemas (CRM · ERP · APIs)": (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="16" width="14" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
            <rect x="30" y="16" width="14" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
            <path d="M18 24H30" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
            <circle cx="24" cy="24" r="3" fill="currentColor" />
            <path d="M11 10V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M37 10V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M11 32V38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M37 32V38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    "IA & Chatbots Conversacionales": (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="8" width="28" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
            <circle cx="18" cy="18" r="2" fill="currentColor" />
            <circle cx="24" cy="18" r="2" fill="currentColor" />
            <circle cx="30" cy="18" r="2" fill="currentColor" />
            <path d="M24 32V38" stroke="currentColor" strokeWidth="2" />
            <path d="M16 38H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M14 24H10L8 40H16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M34 24H38L40 40H32" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
    ),
    "Procesamiento Inteligente de Documentos (OCR + IA)": (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="4" width="28" height="36" rx="3" stroke="currentColor" strokeWidth="2" />
            <line x1="14" y1="14" x2="30" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="14" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="14" y1="26" x2="22" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="34" cy="34" r="8" stroke="currentColor" strokeWidth="2" />
            <path d="M30 34L33 37L38 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
};

const defaultIcon = (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L4 14V34L24 44L44 34V14L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M24 4V44" stroke="currentColor" strokeWidth="2" />
        <path d="M4 14L44 34" stroke="currentColor" strokeWidth="2" />
        <path d="M44 14L4 34" stroke="currentColor" strokeWidth="2" />
    </svg>
);

interface Service {
    id: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
}

const initialServices: Service[] = [
    {
        id: "01",
        icon: iconMap["Ecosistemas Digitales Integrales"],
        title: "Ecosistemas Digitales Integrales",
        subtitle: "El sistema operativo de tu negocio.",
        description: "Centralizamos tu información y conectamos toda tu operativa en un solo entorno.",
    },
    {
        id: "02",
        icon: iconMap["Desarrollo de Software a Medida"],
        title: "Desarrollo de Software a Medida",
        subtitle: "Soluciones diseñadas para tu realidad.",
        description: "Creamos aplicaciones internas, herramientas de gestión y plataformas personalizadas.",
    },
    {
        id: "03",
        icon: iconMap["Paneles de Control & Business Intelligence"],
        title: "Paneles de Control & Business Intelligence",
        subtitle: "Decisiones basadas en datos reales.",
        description: "Dashboards estratégicos con métricas clave en tiempo real.",
    },
    {
        id: "04",
        icon: iconMap["Diseño y Desarrollo Web"],
        title: "Diseño y Desarrollo Web",
        subtitle: "Tu mejor comercial, activo 24/7.",
        description: "Webs corporativas, landing pages y plataformas optimizadas para convertir.",
    },
    {
        id: "05",
        icon: iconMap["E-commerce & Plataformas de Venta"],
        title: "E-commerce & Plataformas de Venta",
        subtitle: "Convierte visitas en ventas.",
        description: "Tiendas online escalables integradas con pagos, inventario y logística.",
    },
    {
        id: "06",
        icon: iconMap["Automatización de Procesos"],
        title: "Automatización de Procesos",
        subtitle: "Menos tareas manuales. Más crecimiento.",
        description: "Automatizamos facturación, seguimiento comercial, inventarios y flujos internos.",
    },
    {
        id: "07",
        icon: iconMap["Integración de Sistemas (CRM · ERP · APIs)"],
        title: "Integración de Sistemas (CRM · ERP · APIs)",
        subtitle: "Tus herramientas trabajando como una sola.",
        description: "Conectamos plataformas para eliminar duplicidad y errores.",
    },
    {
        id: "08",
        icon: iconMap["IA & Chatbots Conversacionales"],
        title: "IA & Chatbots Conversacionales",
        subtitle: "Atención inteligente 24/7.",
        description: "Asistentes virtuales personalizados para ventas y soporte.",
    },
    {
        id: "09",
        icon: iconMap["Procesamiento Inteligente de Documentos (OCR + IA)"],
        title: "Procesamiento Inteligente de Documentos (OCR + IA)",
        subtitle: "Digitaliza y entiende tus documentos automáticamente.",
        description: "Lectura y clasificación automática de contratos, facturas y formularios.",
    },
];

// Light, soft card backgrounds for a cleaner look
const cardGradients = [
    "linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)",
    "linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%)",
    "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
    "linear-gradient(145deg, #f1f5f9 0%, #cbd5e1 100%)",
    "linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)",
];

export default function Services() {
    const [services, setServices] = useState<Service[]>(initialServices);
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const { data, error } = await supabase
                    .from('services')
                    .select('*')
                    .eq('is_active', true);

                if (error) throw error;

                if (data && data.length > 0) {
                    const mappedServices: Service[] = data.map((item: any, index: number) => ({
                        id: String(index + 1).padStart(2, "0"),
                        icon: iconMap[item.name] || defaultIcon,
                        title: item.name,
                        subtitle: item.name,
                        description: item.description || "",
                    }));
                    setServices(mappedServices);
                }
            } catch (err) {
                console.error("Error fetching services:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const goToNext = useCallback(() => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % services.length);
    }, [services.length]);

    const goToPrev = useCallback(() => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    }, [services.length]);

    const goTo = useCallback((index: number) => {
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    }, [activeIndex]);

    useEffect(() => {
        const interval = setInterval(goToNext, 3500);
        return () => clearInterval(interval);
    }, [goToNext]);

    const activeService = services[activeIndex] || services[0];

    // Get the cards to show in the stack (next 4 after active)
    const stackCards = [0, 1, 2, 3].map((offset) => {
        const idx = (activeIndex + offset + 1) % services.length;
        return services[idx];
    });


    const headerContent = (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: isMobile ? "center" : "left" }}
        >
            <h2 style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
            }}>
                <span style={{
                    backgroundImage: "linear-gradient(to right, var(--color-text-main), var(--color-primary))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "inline-block",
                }}>
                    Nuestro Portafolio
                </span>
                <br />
                <span style={{ color: "var(--color-text-main)" }}>de Servicios</span>
            </h2>

            <p style={{
                color: "var(--color-text-muted)",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                marginBottom: isMobile ? "2rem" : "3rem",
                maxWidth: isMobile ? "100%" : "420px",
                margin: isMobile ? "0 auto 2rem" : "0 0 3rem",
            }}>
                Explora nuestra gama de soluciones digitales diseñadas para escalar tu negocio, mejorar la eficiencia y deleitar a tus clientes.
            </p>
        </motion.div>
    );

    const serviceInfoContent = (
        <AnimatePresence mode="wait">
            <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{
                    marginBottom: isMobile ? "1rem" : "2.5rem",
                    textAlign: isMobile ? "center" : "left"
                }}
            >
                <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "rgba(249, 115, 22, 0.1)",
                    border: "1px solid rgba(249, 115, 22, 0.25)",
                    borderRadius: "50px",
                    padding: "0.4rem 1rem",
                    marginBottom: "1rem",
                }}>
                    <span style={{ color: "var(--color-primary)", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
                        {activeService.id} / {String(services.length).padStart(2, "0")}
                    </span>
                </div>
                <h3 style={{
                    color: "var(--color-text-main)",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    lineHeight: 1.3,
                }}>
                    {activeService.title}
                </h3>
                <p style={{
                    color: "var(--color-primary)",
                    fontStyle: "italic",
                    marginBottom: "0.5rem",
                    fontSize: "1rem",
                }}>
                    {activeService.subtitle}
                </p>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: isMobile ? "100%" : "420px" }}>
                    {activeService.description}
                </p>
            </motion.div>
        </AnimatePresence>
    );

    const navigationContent = (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start",
            gap: "1rem",
            marginBottom: isMobile ? "1.5rem" : "0"
        }}>
            <button
                onClick={goToPrev}
                style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "1px solid var(--color-border)",
                    background: "white",
                    color: "var(--color-text-main)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    fontSize: "1.1rem",
                    boxShadow: "var(--shadow-card)",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--color-primary)";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "var(--color-primary)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.color = "var(--color-text-main)";
                    e.currentTarget.style.borderColor = "var(--color-border)";
                }}
            >
                ←
            </button>

            <div style={{ display: "flex", gap: "0.5rem" }}>
                {services.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        style={{
                            width: i === activeIndex ? "28px" : "8px",
                            height: "8px",
                            borderRadius: "50px",
                            border: "none",
                            background: i === activeIndex ? "var(--color-primary)" : "var(--color-border)",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            padding: 0,
                        }}
                    />
                ))}
            </div>

            <button
                onClick={goToNext}
                style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "1px solid var(--color-border)",
                    background: "white",
                    color: "var(--color-text-main)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    fontSize: "1.1rem",
                    boxShadow: "var(--shadow-card)",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--color-primary)";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "var(--color-primary)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.color = "var(--color-text-main)";
                    e.currentTarget.style.borderColor = "var(--color-border)";
                }}
            >
                →
            </button>
        </div>
    );

    const deckContent = (
        <div style={{
            position: "relative",
            width: isMobile ? "280px" : "300px",
            height: isMobile ? "360px" : "400px",
            margin: isMobile ? "0 auto 2rem" : "0",
        }}>
            {/* The Stack (Cards behind the active one) */}
            {[1, 2, 3, 4].map((pos) => {
                const idx = (activeIndex + pos) % services.length;
                const service = services[idx];
                const stackPos = pos;

                return (
                    <motion.div
                        key={`stack-${service.id}`}
                        layout
                        initial={false}
                        animate={{
                            x: stackPos * (isMobile ? 10 : 14),
                            y: stackPos * -10,
                            rotate: stackPos * 4,
                            scale: 1 - stackPos * 0.06,
                            opacity: 1 - stackPos * 0.18,
                            zIndex: 5 - stackPos,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            borderRadius: "24px",
                            background: cardGradients[(stackPos - 1) % cardGradients.length] || cardGradients[0],
                            border: "1px solid rgba(0,0,0,0.05)",
                            boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
                            pointerEvents: "none",
                        }}
                    />
                );
            })}

            {/* The Active Card (Front) with directional deck animation */}
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.div
                    key={activeService.id}
                    custom={direction}
                    initial={{
                        x: direction === -1 ? -350 : 30,
                        y: direction === -1 ? 0 : -10,
                        opacity: 0,
                        scale: direction === -1 ? 1 : 0.95,
                        rotate: direction === -1 ? -15 : 0,
                        zIndex: 10
                    }}
                    animate={{
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        zIndex: 10
                    }}
                    exit={{
                        x: direction === 1 ? 350 : 20,
                        y: direction === 1 ? 0 : 20,
                        rotate: direction === 1 ? 15 : 5,
                        opacity: 0,
                        scale: direction === 1 ? 1 : 0.9,
                        transition: { duration: 0.5, ease: "easeIn" }
                    }}
                    transition={{
                        duration: 0.6,
                        ease: [0.23, 1, 0.32, 1]
                    }}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        borderRadius: "24px",
                        background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
                        border: "1px solid rgba(249, 115, 22, 0.2)",
                        boxShadow: "0 30px 60px rgba(0,0,0,0.1), 0 0 40px rgba(249, 115, 22, 0.05)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "2rem 1.5rem",
                        cursor: "pointer",
                        overflow: "hidden",
                    }}
                    whileHover={{
                        scale: 1.02,
                        boxShadow: "0 40px 100px rgba(0,0,0,0.3), 0 0 60px rgba(249, 115, 22, 0.2)",
                        transition: { duration: 0.2 }
                    }}
                    onClick={goToNext}
                >
                    {/* Shimmer */}
                    <div style={{
                        position: "absolute",
                        top: 0, left: 0, right: 0,
                        height: "50%",
                        background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)",
                        borderRadius: "24px 24px 0 0",
                        pointerEvents: "none",
                    }} />
                    {/* Orange accent line */}
                    <div style={{
                        position: "absolute",
                        top: 0,
                        left: "20%", right: "20%",
                        height: "3px",
                        background: "linear-gradient(90deg, transparent, #f97316, transparent)",
                        borderRadius: "0 0 4px 4px",
                    }} />
                    {/* Icon */}
                    <div style={{
                        color: "#f97316",
                        marginBottom: "1.5rem",
                        filter: "drop-shadow(0 0 10px rgba(249, 115, 22, 0.4))",
                    }}>
                        {activeService.icon}
                    </div>
                    {/* Title */}
                    <h3 style={{
                        color: "#1f2937",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        textAlign: "center",
                        marginBottom: "0.75rem",
                        lineHeight: 1.3,
                    }}>
                        {activeService.title}
                    </h3>
                    {/* Description */}
                    <p style={{
                        color: "#4b5563",
                        fontSize: "0.85rem",
                        textAlign: "center",
                        lineHeight: 1.5,
                        maxWidth: "220px",
                    }}>
                        {activeService.description}
                    </p>
                    {/* Watermark */}
                    <div style={{
                        position: "absolute",
                        bottom: "1.2rem",
                        left: "1.2rem", right: "1.2rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <span style={{
                            color: "rgba(249, 115, 22, 0.5)",
                            fontSize: "0.6rem",
                            fontWeight: 700,
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                        }}>
                            AUTOMATIZALO
                        </span>
                        <span style={{
                            color: "rgba(0,0,0,0.15)",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                        }}>
                            {activeService.id}
                        </span>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );

    return (
        <section
            id="services"
            style={{
                background: "var(--color-bg-secondary)",
                padding: isMobile ? "4rem 0" : "6rem 0",
                position: "relative",
                overflow: "hidden",
                minHeight: isMobile ? "auto" : "90vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            {/* Subtle background glow — orange, matching brand */}
            <div style={{
                position: "absolute",
                top: "10%",
                right: "5%",
                width: "500px",
                height: "500px",
                background: "radial-gradient(circle, rgba(249, 115, 22, 0.06) 0%, transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute",
                bottom: "5%",
                left: "0%",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(249, 115, 22, 0.04) 0%, transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none",
            }} />

            <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
                {isMobile ? (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {headerContent}
                        <div style={{ height: "400px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                            {deckContent}
                        </div>
                        {navigationContent}
                        {serviceInfoContent}
                    </div>
                ) : (
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "4rem",
                        alignItems: "center",
                    }}>
                        {/* LEFT SIDE */}
                        <div>
                            {headerContent}
                            {serviceInfoContent}
                            {navigationContent}
                        </div>

                        {/* RIGHT SIDE - Stacked Card Carousel */}
                        <div style={{
                            position: "relative",
                            height: "520px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            {/* Glow behind cards */}
                            <div style={{
                                position: "absolute",
                                width: "320px",
                                height: "420px",
                                background: "radial-gradient(ellipse, rgba(249, 115, 22, 0.12) 0%, transparent 70%)",
                                borderRadius: "24px",
                                filter: "blur(40px)",
                                zIndex: 0,
                            }} />
                            {deckContent}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
