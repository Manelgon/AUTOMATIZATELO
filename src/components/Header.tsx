"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const sectorLinks = [
    { href: "/automatizacion-administradores-fincas", num: "01", label: "Administradores de Fincas", desc: "Incidencias y vecinos en un panel." },
    { href: "/formacion-ia-centros-educativos", num: "02", label: "Centros Educativos", desc: "Formación del claustro en IA." },
    { href: "/automatizacion-empresas-servicios", num: "03", label: "Empresas de Servicios", desc: "CRM y seguimiento de leads." },
    { href: "/formacion-ia-despachos", num: "04", label: "Despachos Profesionales", desc: "IA sin jugarse los datos de nadie." },
];

const serviciosLinks = [
    { href: "/servicios/formacion-ia-empresas", num: "01", title: "Formación en IA", desc: "Talleres, gobernanza y cursos a medida." },
    { href: "/servicios/auditoria-ia", num: "02", title: "Auditoría IA (AI Act)", desc: "¿Tu empresa cumple? Informe y plan." },
    { href: "/servicios/implantacion-ia", num: "03", title: "Implantación de herramientas", desc: "ChatGPT, Copilot o Gemini, en marcha." },
    { href: "/servicios/automatizacion", num: "04", title: "Automatización de procesos", desc: "Facturas, seguimiento, avisos y reportes." },
    { href: "/servicios/chatbots", num: "05", title: "Chatbots", desc: "WhatsApp y web, conectados a tu sistema." },
    { href: "/servicios/paneles", num: "06", title: "Paneles a medida", desc: "Tu negocio entero, en un solo sitio." },
];

export default function Header() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState<"soluciones" | "trabajo" | null>(null);
    const navRef = useRef<HTMLElement>(null);
    const pathname = usePathname();

    const toggleMobile = () => setIsMobileOpen(!isMobileOpen);
    const closeAll = useCallback(() => {
        setIsMobileOpen(false);
        setOpenMenu(null);
    }, []);

    // Cerrar al cambiar de ruta
    useEffect(() => {
        closeAll();
    }, [pathname, closeAll]);

    // Cerrar al hacer click fuera o con Escape
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

    return (
        <header className="header" style={{
            background: isMobileOpen ? 'var(--color-card-bg)' : 'rgba(250, 246, 239, 0.85)',
            backdropFilter: isMobileOpen ? 'none' : 'blur(16px) saturate(140%)',
            WebkitBackdropFilter: isMobileOpen ? 'none' : 'blur(16px) saturate(140%)',
            margin: '1rem',
            width: 'calc(100% - 2rem)',
            borderRadius: isMobileOpen ? '16px 16px 0 0' : '16px',
            top: '0',
            border: '1px solid var(--color-border)',
            borderBottom: isMobileOpen ? 'none' : '1px solid var(--color-border)',
            boxShadow: isMobileOpen ? '0 20px 40px rgba(28,25,23,0.15)' : '0 10px 30px rgba(28,25,23,0.06)',
            zIndex: 1000
        }}>
            <div className="container nav" ref={navRef as React.RefObject<HTMLDivElement>}>
                <Link
                    href="/"
                    className="logo"
                    onClick={(e) => {
                        if (window.location.pathname === '/') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                        closeAll();
                    }}
                >
                    <Image src="/logo.png" alt="Automatizatelo" width={32} height={32} style={{ marginRight: '0.5rem' }} priority />
                    <span className="premium-gradient" style={{ fontWeight: 'bold' }}>Automatizatelo.</span>
                </Link>

                <div className="mobile-toggle" onClick={toggleMobile}>
                    <i className={`fa-solid ${isMobileOpen ? "fa-xmark" : "fa-bars"}`}></i>
                </div>

                <nav className={`nav-links ${isMobileOpen ? "active" : ""}`} data-lenis-prevent>
                    {/* Inicio: solo visible en el menú móvil (en escritorio, el logo hace de inicio) */}
                    <Link href="/" className="nav-solo-movil" onClick={closeAll}>Inicio</Link>

                    {/* Soluciones (sectores) */}
                    <div className="sectors-dropdown">
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setOpenMenu(openMenu === "soluciones" ? null : "soluciones"); }}
                            aria-expanded={openMenu === "soluciones"}
                            aria-haspopup="menu"
                            className="sectors-dropdown-trigger"
                        >
                            Soluciones
                            <i
                                className="fa-solid fa-chevron-down"
                                style={{
                                    fontSize: '0.7rem',
                                    transition: 'transform 0.2s ease',
                                    transform: openMenu === "soluciones" ? 'rotate(180deg)' : 'rotate(0deg)',
                                }}
                            />
                        </button>
                        {openMenu === "soluciones" && (
                            <div role="menu" className="sectors-dropdown-menu" style={{ minWidth: 340 }} data-lenis-prevent>
                                <span className="dropdown-grupo">Servicios</span>
                                {serviciosLinks.map((s) => (
                                    <Link
                                        key={s.href}
                                        href={s.href}
                                        role="menuitem"
                                        onClick={closeAll}
                                        className="dropdown-item-num"
                                    >
                                        <span className="num">{s.num}</span>
                                        <span>
                                            <span className="item-title">{s.title}</span>
                                            <span className="item-desc">{s.desc}</span>
                                        </span>
                                        <span className="arrow">→</span>
                                    </Link>
                                ))}
                                <span className="dropdown-grupo" style={{ marginTop: '0.6rem' }}>Sectores</span>
                                {sectorLinks.map((s) => (
                                    <Link
                                        key={s.href}
                                        href={s.href}
                                        role="menuitem"
                                        onClick={closeAll}
                                        className="dropdown-item-num"
                                    >
                                        <span className="num">{s.num}</span>
                                        <span>
                                            <span className="item-title">{s.label}</span>
                                            <span className="item-desc">{s.desc}</span>
                                        </span>
                                        <span className="arrow">→</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/como-trabajo" onClick={closeAll}>Cómo trabajo</Link>
                    <Link href="/precios" onClick={closeAll}>Precios</Link>
                    <Link href="/casos-de-exito" onClick={closeAll}>Casos</Link>
                    <Link href="/recursos" onClick={closeAll}>Recursos</Link>
                    <Link href="/blog" onClick={closeAll}>Blog</Link>
                    <Link href="/sobre-mi" onClick={closeAll}>Sobre mí</Link>

                    <Link
                        href="/#contact"
                        className="btn btn-primary"
                        onClick={closeAll}
                        style={{ background: 'var(--color-primary)', border: 'none' }}
                    >
                        Auditoría Gratuita
                    </Link>
                </nav>
            </div>
        </header>
    );
}
