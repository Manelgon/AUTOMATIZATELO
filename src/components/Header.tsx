"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { href: "/#problema", label: "El Problema" },
    { href: "/#que-automatizamos", label: "Automatizamos" },
    { href: "/#benefits", label: "Beneficios" },
    { href: "/#how-we-work", label: "Cómo Trabajamos" },
    { href: "/#model", label: "Precios" },
    { href: "/#faq", label: "FAQ" },
];

const sectorLinks = [
    { href: "/automatizacion-restaurantes", label: "Restaurantes" },
    { href: "/automatizacion-clinicas", label: "Clínicas y Salud" },
    { href: "/automatizacion-ecommerce", label: "E-commerce" },
    { href: "/automatizacion-empresas-servicios", label: "Empresas de Servicios" },
];

export default function Header() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [sectorsOpen, setSectorsOpen] = useState(false);
    const sectorsRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const toggleMobile = () => setIsMobileOpen(!isMobileOpen);
    const closeMobile = () => {
        setIsMobileOpen(false);
        setSectorsOpen(false);
    };

    // Cerrar al cambiar de ruta
    useEffect(() => {
        setSectorsOpen(false);
        setIsMobileOpen(false);
    }, [pathname]);

    // Cerrar al hacer click fuera
    useEffect(() => {
        if (!sectorsOpen) return;
        const handleClickOutside = (e: MouseEvent) => {
            if (sectorsRef.current && !sectorsRef.current.contains(e.target as Node)) {
                setSectorsOpen(false);
            }
        };
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSectorsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
        };
    }, [sectorsOpen]);

    return (
        <header className="header" style={{
            background: isMobileOpen ? '#111827' : 'rgba(17, 24, 39, 0.8)',
            backdropFilter: isMobileOpen ? 'none' : 'blur(24px)',
            WebkitBackdropFilter: isMobileOpen ? 'none' : 'blur(24px)',
            margin: '1rem',
            width: 'calc(100% - 2rem)',
            borderRadius: isMobileOpen ? '16px 16px 0 0' : '16px',
            top: '0',
            border: '1px solid rgba(255,255,255,0.1)',
            borderBottom: 'none',
            boxShadow: isMobileOpen ? '0 20px 40px rgba(0,0,0,0.4)' : '0 10px 30px rgba(0,0,0,0.2)',
            zIndex: 1000
        }}>
            <div className="container nav">
                <Link
                    href="/"
                    className="logo"
                    onClick={(e) => {
                        if (window.location.pathname === '/') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                        closeMobile();
                    }}
                >
                    <Image src="/logo.png" alt="Automatizatelo" width={32} height={32} style={{ marginRight: '0.5rem' }} priority />
                    <span className="premium-gradient" style={{ fontWeight: 'bold' }}>Automatizatelo.</span>
                </Link>

                <div className="mobile-toggle" onClick={toggleMobile} style={{ color: 'white' }}>
                    <i className={`fa-solid ${isMobileOpen ? "fa-xmark" : "fa-bars"}`}></i>
                </div>

                <nav className={`nav-links ${isMobileOpen ? "active" : ""}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMobile}
                            style={{ color: 'rgba(255,255,255,0.8)' }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Sectores dropdown - click + click-outside + reset on route change */}
                    <div ref={sectorsRef} className="sectors-dropdown">
                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setSectorsOpen((v) => !v); }}
                            aria-expanded={sectorsOpen}
                            aria-haspopup="menu"
                            className="sectors-dropdown-trigger"
                        >
                            Sectores
                            <i
                                className="fa-solid fa-chevron-down"
                                style={{
                                    fontSize: '0.7rem',
                                    transition: 'transform 0.2s ease',
                                    transform: sectorsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                }}
                            />
                        </button>
                        {sectorsOpen && (
                            <div role="menu" className="sectors-dropdown-menu">
                                {sectorLinks.map((s) => (
                                    <Link
                                        key={s.href}
                                        href={s.href}
                                        role="menuitem"
                                        onClick={closeMobile}
                                        className="sectors-dropdown-item"
                                    >
                                        {s.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link
                        href="/#contact"
                        className="btn btn-primary"
                        onClick={closeMobile}
                        style={{ background: 'var(--color-primary)', border: 'none' }}
                    >
                        Auditoría Gratuita
                    </Link>
                </nav>
            </div>
        </header>
    );
}
