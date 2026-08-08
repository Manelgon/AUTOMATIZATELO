"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// =============================================================================
// BARRA DE PESTAÑAS DE SISTEMAS — gemela de FormacionTabs
// =============================================================================
// Bajo el hero del hub y de sus hijas. Incluye las secciones con ancla del
// hub, así desde cualquier página del pilar se salta directo a la pieza.
// =============================================================================

const TABS = [
    { href: "/sistemas", label: "Sistemas" },
    { href: "/sistemas/documentos", label: "Facturas y documentos" },
    { href: "/sistemas/ventas", label: "Ventas" },
    { href: "/sistemas/crm", label: "CRM" },
    { href: "/sistemas/paneles", label: "Paneles" },
    { href: "/sistemas/chatbots-whatsapp", label: "Chatbots" },
    { href: "/sistemas/integracion", label: "Integración" },
];

export default function SistemasTabs() {
    const pathname = usePathname();

    return (
        <nav aria-label="Páginas de sistemas" className="nav-barra">
            <div className="container nav-barra-fila">
                {TABS.map((t) => {
                    const activa = pathname === t.href;
                    return (
                        <Link
                            key={t.href}
                            href={t.href}
                            aria-current={activa ? "page" : undefined}
                            className={`nav-barra-item ${activa ? "nav-barra-activa" : ""}`}
                        >
                            {t.label}
                        </Link>
                    );
                })}
            </div>
            <style>{`
                @media (max-width: 760px) {
                }
            `}</style>
        </nav>
    );
}
