"use client";

const WHATSAPP_NUMBER = "34678399182";
const DEFAULT_MESSAGE = "Hola, me gustaría más información sobre automatización con IA para mi empresa.";

export default function WhatsAppFloat() {
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

    const handleClick = () => {
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", "whatsapp_click", {
                event_category: "engagement",
                event_label: "floating_button",
            });
        }
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            onClick={handleClick}
            style={{
                position: "fixed",
                bottom: "24px",
                right: "24px",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "#25D366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 20px rgba(37, 211, 102, 0.4)",
                zIndex: 9999,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                textDecoration: "none",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 211, 102, 0.55)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.4)";
            }}
        >
            <i className="fa-brands fa-whatsapp" style={{ color: "white", fontSize: "32px" }} aria-hidden="true"></i>
        </a>
    );
}
