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
        <nav aria-label="Páginas de sistemas" className="st-barra" data-lenis-prevent>
            <div className="container st-pistas">
                {TABS.map((t) => {
                    const activa = pathname === t.href;
                    return (
                        <Link
                            key={t.href}
                            href={t.href}
                            aria-current={activa ? "page" : undefined}
                            className={`st-tab ${activa ? "st-tab-activa" : ""}`}
                        >
                            {t.label}
                        </Link>
                    );
                })}
            </div>
            <style>{`
                .st-barra {
                    background: #1c1917;
                    border-top: 1px solid rgba(250,246,239,0.08);
                    border-bottom: 1px solid rgba(250,246,239,0.08);
                }
                .st-pistas {
                    display: flex;
                    justify-content: space-between;
                    gap: 0.25rem;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;
                    padding-top: 0.55rem;
                    padding-bottom: 0.55rem;
                }
                .st-pistas::-webkit-scrollbar { display: none; }
                .st-tab {
                    flex: 1 1 auto;
                    text-align: center;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250,246,239,0.65);
                    padding: 0.5rem 0.9rem;
                    border-radius: 8px;
                    white-space: nowrap;
                    transition: color 0.2s ease, background 0.2s ease;
                }
                .st-tab:hover { color: #faf6ef; background: rgba(250,246,239,0.07); }
                .st-tab-activa {
                    color: #1c1917;
                    background: #f6c39c;
                }
                @media (max-width: 760px) {
                    .st-pistas {
                        flex-wrap: wrap;
                        overflow-x: visible;
                        justify-content: flex-start;
                        row-gap: 0.15rem;
                    }
                    .st-tab { flex: 1 1 auto; padding: 0.45rem 0.7rem; }
                }
                .st-tab-activa:hover { color: #1c1917; background: #f6c39c; }
            `}</style>
        </nav>
    );
}
