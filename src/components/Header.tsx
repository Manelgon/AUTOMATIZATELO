"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const sectorLinks = [
    { href: "/automatizacion-clinicas", num: "01", label: "Clínicas y Salud", desc: "Citas y recordatorios automáticos." },
    { href: "/automatizacion-administradores-fincas", num: "02", label: "Administradores de Fincas", desc: "Incidencias y vecinos en un panel." },
    { href: "/automatizacion-ecommerce", num: "03", label: "E-commerce", desc: "Soporte y tareas de tienda." },
    { href: "/automatizacion-empresas-servicios", num: "04", label: "Empresas de Servicios", desc: "CRM y seguimiento de leads." },
];

const comoTrabajoLinks = [
    { href: "/#how-we-work", num: "01", title: "Auditoría", desc: "Antes de construir, el criterio." },
    { href: "/#services", num: "02", title: "Implementación", desc: "Construimos el sistema." },
    { href: "/servicios/formacion-ia-empresas", num: "03", title: "Formación", desc: "Tu equipo aprende a usarlo." },
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

                <nav className={`nav-links ${isMobileOpen ? "active" : ""}`}>
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
                            <div role="menu" className="sectors-dropdown-menu" style={{ minWidth: 320 }}>
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

                    {/* Cómo trabajo (01/02/03) */}
                    <div className="sectors-dropdown">
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setOpenMenu(openMenu === "trabajo" ? null : "trabajo"); }}
                            aria-expanded={openMenu === "trabajo"}
                            aria-haspopup="menu"
                            className="sectors-dropdown-trigger"
                        >
                            Cómo trabajo
                            <i
                                className="fa-solid fa-chevron-down"
                                style={{
                                    fontSize: '0.7rem',
                                    transition: 'transform 0.2s ease',
                                    transform: openMenu === "trabajo" ? 'rotate(180deg)' : 'rotate(0deg)',
                                }}
                            />
                        </button>
                        {openMenu === "trabajo" && (
                            <div role="menu" className="sectors-dropdown-menu" style={{ minWidth: 320 }}>
                                {comoTrabajoLinks.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        role="menuitem"
                                        onClick={closeAll}
                                        className="dropdown-item-num"
                                    >
                                        <span className="num">{item.num}</span>
                                        <span>
                                            <span className="item-title">{item.title}</span>
                                            <span className="item-desc">{item.desc}</span>
                                        </span>
                                        <span className="arrow">→</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/#model" onClick={closeAll}>Precios</Link>
                    <Link href="/casos-de-exito" onClick={closeAll}>Casos</Link>
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
