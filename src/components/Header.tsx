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
    { href: "/formacion", num: "01", title: "Formación in-company", desc: "El curso estrella y todos los formatos, con certificado." },
    { href: "/formacion/ai-act", num: "02", title: "Alfabetización del Art. 4", desc: "La obligatoria desde 2025 — sanciona desde ago-2026." },
    { href: "/formacion/directivos", num: "03", title: "Sesión ejecutiva", desc: "Para dirección: decidir con criterio, no promptear." },
    { href: "/formacion/centros-educativos", num: "04", title: "Centros educativos", desc: "Formación de claustro y política de IA del centro." },
];

const cursosLinks = [
    { href: "/formacion/chatgpt", label: "Curso de ChatGPT" },
    { href: "/formacion/copilot", label: "Curso de Copilot 365" },
    { href: "/formacion/gemini", label: "Curso de Gemini + NotebookLM" },
    { href: "/formacion/claude", label: "Curso de Claude" },
];

const empiezaPorAqui = [
    { href: "/diagnostico", label: "Diagnóstico — 12 preguntas, 3 min" },
    { href: "/precios", label: "Precios cerrados, por escrito" },
    { href: "/casos", label: "Casos en producción real" },
    { href: "/#contact", label: "30 minutos gratis" },
];

const sistemasLinks = [
    { href: "/sistemas", num: "01", title: "Automatización de procesos", desc: "Facturas, documentos, ventas, CRM y paneles." },
    { href: "/sistemas/chatbots-whatsapp", num: "02", title: "Chatbots — WhatsApp y web", desc: "Atención 24/7 con la API oficial." },
    { href: "/sistemas/integracion", num: "03", title: "Integración de sistemas", desc: "Tus herramientas, pasándose los datos solas." },
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
        <header className="header" style={{
            background: isMobileOpen ? "var(--color-card-bg)" : "rgba(250, 246, 239, 0.85)",
            backdropFilter: isMobileOpen ? "none" : "blur(16px) saturate(140%)",
            WebkitBackdropFilter: isMobileOpen ? "none" : "blur(16px) saturate(140%)",
            margin: "1rem",
            width: "calc(100% - 2rem)",
            borderRadius: isMobileOpen ? "16px 16px 0 0" : "16px",
            top: "0",
            border: "1px solid var(--color-border)",
            borderBottom: isMobileOpen ? "none" : "1px solid var(--color-border)",
            boxShadow: isMobileOpen ? "0 20px 40px rgba(28,25,23,0.15)" : "0 10px 30px rgba(28,25,23,0.06)",
            zIndex: 1000,
        }}>
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
                        <span className="dropdown-grupo" style={{ marginTop: "0.8rem" }}>Empieza por aquí</span>
                        {empiezaPorAqui.map((s) => <ItemMini key={s.href} {...s} />)}
                    </Desplegable>

                    {/* Pilar 2 — Cumplir: una sola página fuerte, enlace directo */}
                    <Link href="/cumplimiento" onClick={closeAll}>Cumplimiento</Link>

                    {/* Pilar 3 — Automatizar */}
                    <Desplegable id="sistemas" etiqueta="Sistemas">
                        {sistemasLinks.map((s) => <ItemGrande key={s.href} {...s} />)}
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
                        style={{ background: "var(--color-primary)", border: "none" }}
                    >
                        30 min gratis
                    </Link>
                </nav>
            </div>
        </header>
    );
}
