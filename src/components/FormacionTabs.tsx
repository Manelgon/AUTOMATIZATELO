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
    { href: "/formacion/empresas", label: "Empresas" },
    { href: "/formacion/ai-act", label: "Alfabetización · Art. 4" },
    { href: "/formacion/chatgpt", label: "ChatGPT" },
    { href: "/formacion/copilot", label: "Copilot 365" },
    { href: "/formacion/gemini", label: "Gemini + NotebookLM" },
    { href: "/formacion/claude", label: "Claude" },
];

export default function FormacionTabs() {
    const pathname = usePathname();

    return (
        <nav aria-label="Páginas de formación" className="nav-barra">
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
