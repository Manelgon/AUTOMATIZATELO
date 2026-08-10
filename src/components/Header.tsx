"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// =============================================================================
// NAVEGACIÓN v2 — los pilares al aire
// =============================================================================
// La barra ES el método: Formación · Cumplimiento · Sistemas (+ Sectores como
// puertas por identidad). Se acabó el cajón genérico "Servicios".
// Regla hub/hijas: cada desplegable enseña el hub y las hijas con búsqueda
// propia; lo demás son secciones dentro del hub.
// =============================================================================

const formacionLinks = [
    { href: "/formacion", num: "01", title: "Formación en IA", desc: "La portada: las dos puertas, empresas y educación." },
    { href: "/formacion/empresas", num: "02", title: "In-company para empresas", desc: "El curso estrella, el catálogo y los precios." },
    { href: "/formacion/ai-act", num: "03", title: "Alfabetización del Art. 4", desc: "La obligatoria desde 2025 — supervisada desde ago-2026." },
    { href: "/formacion/centros-educativos", num: "04", title: "Centros educativos", desc: "Formación de claustro y política de IA del centro." },
    { href: "/formacion/alumnado", num: "05", title: "Alumnado", desc: "Taller de IA para estudiantes: estudiar y buscar empleo." },
];

const cursosLinks = [
    { href: "/formacion/chatgpt", label: "Curso de ChatGPT" },
    { href: "/formacion/copilot", label: "Curso de Copilot 365" },
    { href: "/formacion/gemini", label: "Curso de Gemini + NotebookLM" },
    { href: "/formacion/claude", label: "Curso de Claude" },
    { href: "/formacion/cursos-a-medida", label: "Cursos a medida (SCORM)" },
];

const sistemasLinks = [
    { href: "/sistemas", num: "01", title: "Automatización de procesos", desc: "El pilar: qué se puede automatizar y qué cuesta." },
];

// Las seis piezas, cada una con su página propia.
const sistemasPiezas = [
    { href: "/sistemas/documentos", label: "Facturas y documentos (OCR + IA)" },
    { href: "/sistemas/ventas", label: "Automatización de ventas" },
    { href: "/sistemas/crm", label: "Implantación de CRM" },
    { href: "/sistemas/paneles", label: "Paneles de gestión" },
    { href: "/sistemas/chatbots-whatsapp", label: "Chatbots — WhatsApp y web" },
    { href: "/sistemas/integracion", label: "Integración de sistemas" },
];

// El visitante se reconoce por lo que es ("soy un despacho"), no por el
// servicio que acabará comprando. Centros y directivos viven en formación
// pero se llega también desde aquí.
const sectorLinks = [
    { href: "/sectores/administradores-fincas", num: "01", label: "Administradores de Fincas", desc: "Incidencias y vecinos en un panel." },
    { href: "/sectores/despachos", num: "02", label: "Despachos Profesionales", desc: "Gestorías, asesorías y abogados." },
    { href: "/formacion/centros-educativos", num: "03", label: "Centros Educativos", desc: "Formación del claustro y política de IA." },
    { href: "/sectores/academias", num: "04", label: "Academias y Formación Online", desc: "Matrículas, alumnos y cursos SCORM." },
    { href: "/sectores/rrhh", num: "05", label: "Selección de Personal y RRHH", desc: "Portal de empleo y criba con IA." },
    { href: "/formacion/directivos", num: "06", label: "Equipos Directivos", desc: "Sesión ejecutiva: qué decidir y por qué." },
];

type Menu = "formacion" | "sistemas" | "sector" | null;

export default function Header() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState<Menu>(null);
    // Arriba del todo la barra desaparece sobre la foto del hero; al bajar
    // vuelve la pastilla crema con blur para que se lea sobre el contenido.
    const [conScroll, setConScroll] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const pathname = usePathname();

    const toggleMobile = () => setIsMobileOpen(!isMobileOpen);
    const closeAll = useCallback(() => {
        setIsMobileOpen(false);
        setOpenMenu(null);
    }, []);

    useEffect(() => {
        closeAll();
    }, [pathname, closeAll]);

    useEffect(() => {
        const alScroll = () => setConScroll(window.scrollY > 24);
        alScroll();
        window.addEventListener("scroll", alScroll, { passive: true });
        return () => window.removeEventListener("scroll", alScroll);
    }, []);

    useEffect(() => {
        if (!openMenu) return;
        const handleClickOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setOpenMenu(null);
            }
        };
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenMenu(null);
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
        };
    }, [openMenu]);

    const Desplegable = ({ id, etiqueta, children }: { id: Menu; etiqueta: string; children: React.ReactNode }) => (
        <div className="sectors-dropdown">
            <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setOpenMenu(openMenu === id ? null : id); }}
                aria-expanded={openMenu === id}
                aria-haspopup="menu"
                className="sectors-dropdown-trigger"
            >
                {etiqueta}
                <i
                    className="fa-solid fa-chevron-down"
                    style={{
                        fontSize: "0.7rem",
                        transition: "transform 0.2s ease",
                        transform: openMenu === id ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                />
            </button>
            {openMenu === id && (
                <div role="menu" className="sectors-dropdown-menu" data-lenis-prevent>
                    {children}
                </div>
            )}
        </div>
    );

    const ItemGrande = ({ href, num, title, desc }: { href: string; num: string; title: string; desc: string }) => (
        <Link href={href} role="menuitem" onClick={closeAll} className="dropdown-item-num">
            <span className="num">{num}</span>
            <span>
                <span className="item-title">{title}</span>
                <span className="item-desc">{desc}</span>
            </span>
            <span className="arrow">→</span>
        </Link>
    );

    const ItemMini = ({ href, label }: { href: string; label: string }) => (
        <Link href={href} role="menuitem" onClick={closeAll} className="dropdown-item-mini">
            {label}
            <span className="arrow">→</span>
        </Link>
    );

    return (
        <header
            className={`header ${conScroll || isMobileOpen ? "header-solida" : "header-arriba"}`}
            style={{
                background: isMobileOpen
                    ? "var(--color-card-bg)"
                    : conScroll
                        ? "rgba(250, 246, 239, 0.9)"
                        : "transparent",
                backdropFilter: isMobileOpen || !conScroll ? "none" : "blur(16px) saturate(140%)",
                WebkitBackdropFilter: isMobileOpen || !conScroll ? "none" : "blur(16px) saturate(140%)",
                margin: 0,
                width: "100%",
                borderRadius: 0,
                top: "0",
                border: "none",
                borderBottom: conScroll && !isMobileOpen ? "1px solid var(--color-border)" : "1px solid transparent",
                boxShadow: isMobileOpen ? "0 20px 40px rgba(28,25,23,0.15)" : "none",
                transition: "background 0.25s ease, border-color 0.25s ease",
                zIndex: 1000,
            }}
        >
            <div className="container nav" ref={navRef as React.RefObject<HTMLDivElement>}>
                <Link
                    href="/"
                    className="logo"
                    onClick={(e) => {
                        if (window.location.pathname === "/") {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                        closeAll();
                    }}
                >
                    <Image src="/logo.png" alt="Automatizatelo" width={32} height={32} style={{ marginRight: "0.5rem" }} priority />
                    <span className="premium-gradient" style={{ fontWeight: "bold" }}>Automatizatelo.</span>
                </Link>

                <div className="mobile-toggle" onClick={toggleMobile}>
                    <i className={`fa-solid ${isMobileOpen ? "fa-xmark" : "fa-bars"}`}></i>
                </div>

                <nav className={`nav-links ${isMobileOpen ? "active" : ""}`} data-lenis-prevent>
                    <Link href="/" className="nav-solo-movil" onClick={closeAll}>Inicio</Link>

                    {/* Pilar 1 — Formar */}
                    <Desplegable id="formacion" etiqueta="Formación">
                        {formacionLinks.map((s) => <ItemGrande key={s.href} {...s} />)}
                        <span className="dropdown-grupo" style={{ marginTop: "0.8rem" }}>Cursos por herramienta</span>
                        {cursosLinks.map((s) => <ItemMini key={s.href} {...s} />)}
                    </Desplegable>

                    {/* Pilar 2 — Cumplir: una sola página fuerte, enlace directo */}
                    <Link href="/cumplimiento" onClick={closeAll}>Cumplimiento</Link>

                    {/* Pilar 3 — Automatizar */}
                    <Desplegable id="sistemas" etiqueta="Sistemas">
                        {sistemasLinks.map((s) => <ItemGrande key={s.href} {...s} />)}
                        <span className="dropdown-grupo" style={{ marginTop: "0.8rem" }}>Por sistema</span>
                        {sistemasPiezas.map((s) => <ItemMini key={s.href} {...s} />)}
                        <span className="dropdown-grupo" style={{ marginTop: "0.8rem" }}>Empieza por aquí</span>
                        <ItemMini href="/diagnostico" label="Diagnóstico gratis — 12 preguntas, 3 min" />
                        <ItemMini href="/casos" label="Casos en producción real" />
                        <ItemMini href="/recursos" label="Recursos gratis, sin registro" />
                    </Desplegable>

                    {/* Puertas por identidad */}
                    <Desplegable id="sector" etiqueta="Sectores">
                        {sectorLinks.map((s) => (
                            <ItemGrande key={s.href} href={s.href} num={s.num} title={s.label} desc={s.desc} />
                        ))}
                    </Desplegable>

                    <Link href="/precios" onClick={closeAll}>Precios</Link>
                    <Link href="/blog" onClick={closeAll}>Blog</Link>
                    <Link href="/sobre-mi" onClick={closeAll}>Sobre mí</Link>

                    <Link
                        href="/#contact"
                        className="btn btn-primary"
                        onClick={closeAll}
                    >
                        30 min gratis
                    </Link>
                </nav>
            </div>
        </header>
    );
}
