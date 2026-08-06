"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// =============================================================================
// BARRA DE PESTAÑAS DE FORMACIÓN (idea tomada de iActa, vestida de casa)
// =============================================================================
// Vive justo bajo el hero del hub y de TODAS las páginas /formacion/*: se salta
// de un curso a otro sin volver atrás. La activa se marca sola por la ruta.
// =============================================================================

const TABS = [
    { href: "/formacion", label: "Formación" },
    { href: "/formacion/ai-act", label: "Alfabetización · Art. 4" },
    { href: "/formacion/chatgpt", label: "ChatGPT" },
    { href: "/formacion/copilot", label: "Copilot 365" },
    { href: "/formacion/gemini", label: "Gemini + NotebookLM" },
    { href: "/formacion/claude", label: "Claude" },
    { href: "/formacion/centros-educativos", label: "Centros educativos" },
    { href: "/formacion/directivos", label: "Directivos" },
];

export default function FormacionTabs() {
    const pathname = usePathname();

    return (
        <nav aria-label="Páginas de formación" className="ft-barra" data-lenis-prevent>
            <div className="container ft-pistas">
                {TABS.map((t) => {
                    const activa = pathname === t.href;
                    return (
                        <Link
                            key={t.href}
                            href={t.href}
                            aria-current={activa ? "page" : undefined}
                            className={`ft-tab ${activa ? "ft-tab-activa" : ""}`}
                        >
                            {t.label}
                        </Link>
                    );
                })}
            </div>
            <style>{`
                .ft-barra {
                    background: #1c1917;
                    border-top: 1px solid rgba(250,246,239,0.08);
                    border-bottom: 1px solid rgba(250,246,239,0.08);
                }
                .ft-pistas {
                    display: flex;
                    justify-content: space-between;
                    gap: 0.25rem;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;
                    padding-top: 0.55rem;
                    padding-bottom: 0.55rem;
                }
                .ft-pistas::-webkit-scrollbar { display: none; }
                .ft-tab {
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
                .ft-tab:hover { color: #faf6ef; background: rgba(250,246,239,0.07); }
                .ft-tab-activa {
                    color: #1c1917;
                    background: #f6c39c;
                }
                @media (max-width: 760px) {
                    .ft-pistas {
                        flex-wrap: wrap;
                        overflow-x: visible;
                        justify-content: flex-start;
                        row-gap: 0.15rem;
                    }
                    .ft-tab { flex: 1 1 auto; padding: 0.45rem 0.7rem; }
                }
                .ft-tab-activa:hover { color: #1c1917; background: #f6c39c; }
            `}</style>
        </nav>
    );
}
