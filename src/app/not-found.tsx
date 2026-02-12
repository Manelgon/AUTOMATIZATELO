"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <section style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem 1rem',
                background: 'var(--color-bg)',
                textAlign: 'center'
            }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h1 style={{
                        fontSize: 'clamp(4rem, 15vw, 8rem)',
                        fontWeight: 800,
                        marginBottom: '1rem',
                        background: 'linear-gradient(to right, #fff, var(--color-primary))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        lineHeight: 1
                    }}>
                        404
                    </h1>
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                        fontWeight: 600,
                        marginBottom: '1.5rem',
                        color: 'var(--color-text-main)'
                    }}>
                        Página no encontrada
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--color-text-muted)',
                        marginBottom: '3rem',
                        lineHeight: 1.6
                    }}>
                        Lo sentimos, la página que buscas no existe o ha sido movida.
                        Podemos ayudarte a automatizar tu negocio si vuelves al inicio.
                    </p>
                    <Link href="/" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                        Volver al Inicio
                    </Link>
                </div>
            </section>
            <Footer />
        </main>
    );
}
