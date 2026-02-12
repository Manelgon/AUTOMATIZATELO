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
        <header className="header">
            <div className="container nav">
                <Link
                    href="/"
                    className="logo"
                    onClick={(e) => {
                        // Prevent default only if we want custom scroll behavior on the same page,
                        // but for "/" standard navigation is usually safer across pages.
                        // However, keeping smooth scroll logic for home page consistency:
                        if (window.location.pathname === '/') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                        closeMobile();
                    }}
                >
                    <Image src="/logo.png" alt="Automatizatelo" width={32} height={32} style={{ marginRight: '0.5rem' }} />
                    Automatizatelo<span>.</span>
                </Link>
                <div className="mobile-toggle" onClick={toggleMobile}>
                    <i className={`fa-solid ${isMobileOpen ? "fa-xmark" : "fa-bars"}`}></i>
                </div>
                <nav className={`nav-links ${isMobileOpen ? "active" : ""}`}>
                    <Link href="/#opportunity" onClick={closeMobile}>
                        La Oportunidad
                    </Link>
                    <Link href="/#benefits" onClick={closeMobile}>
                        Beneficios
                    </Link>
                    <Link href="/#services" onClick={closeMobile}>
                        Servicios
                    </Link>
                    <Link href="/#how-we-work" onClick={closeMobile}>
                        Metodología
                    </Link>
                    <Link href="/#trusted-clients" onClick={closeMobile}>
                        Casos de Éxito
                    </Link>
                    <Link href="/#contact" className="btn btn-primary" onClick={closeMobile}>
                        Empieza Ahora
                    </Link>
                    <Link href="/#faq" onClick={closeMobile}>
                        FAQ
                    </Link>
                </nav>
            </div>
        </header>
    );
}
