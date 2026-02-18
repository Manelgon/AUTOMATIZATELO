"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleMobile = () => {
        setIsMobileOpen(!isMobileOpen);
    };

    const closeMobile = () => {
        setIsMobileOpen(false);
    };

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
            borderBottom: 'none', // Always none to avoid the "line" issue, we'll rely on the menu's border
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
                    <Link href="/#opportunity" onClick={closeMobile} style={{ color: 'rgba(255,255,255,0.8)' }}>
                        La Oportunidad
                    </Link>
                    <Link href="/#benefits" onClick={closeMobile} style={{ color: 'rgba(255,255,255,0.8)' }}>
                        Beneficios
                    </Link>
                    <Link href="/#services" onClick={closeMobile} style={{ color: 'rgba(255,255,255,0.8)' }}>
                        Servicios
                    </Link>
                    <Link href="/#how-we-work" onClick={closeMobile} style={{ color: 'rgba(255,255,255,0.8)' }}>
                        Metodología
                    </Link>
                    <Link href="/#trusted-clients" onClick={closeMobile} style={{ color: 'rgba(255,255,255,0.8)' }}>
                        Casos de Éxito
                    </Link>
                    <Link href="/#contact" className="btn btn-primary" onClick={closeMobile} style={{ background: 'var(--color-primary)', border: 'none' }}>
                        Empieza Ahora
                    </Link>
                    <Link href="/#faq" onClick={closeMobile} style={{ color: 'rgba(255,255,255,0.8)' }}>
                        FAQ
                    </Link>
                </nav>
            </div>
        </header>

    );
}
