"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <main>
            <Header />
            <section className="min-h-[70vh] flex items-center justify-center bg-secondary text-center px-4">
                <div className="max-w-2xl">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
                        404
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-text-main">
                        Página no encontrada
                    </h2>
                    <p className="text-text-muted text-lg mb-10">
                        Lo sentimos, la página que buscas no existe o ha sido movida.
                        Podemos ayudarte a automatizar tu negocio si vuelves al inicio.
                    </p>
                    <Link href="/" className="btn btn-primary text-lg px-10 py-4">
                        Volver al Inicio
                    </Link>
                </div>
            </section>
            <Footer />
        </main>
    );
}
