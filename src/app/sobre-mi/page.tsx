import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Manel Méndez González — Fundador de Automatizatelo",
    description:
        "Manel Méndez González construye sistemas de automatización con IA para pymes: chatbots de WhatsApp, paneles de gestión y flujos que funcionan en producción. Barcelona.",
    alternates: { canonical: "https://automatizatelo.com/sobre-mi" },
};

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Manel Méndez González",
    "url": "https://automatizatelo.com/sobre-mi",
    "jobTitle": "Fundador",
    "worksFor": {
        "@type": "Organization",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "knowsAbout": [
        "Automatización de procesos",
        "Inteligencia Artificial aplicada a pymes",
        "Chatbots de WhatsApp",
        "CRM y paneles de gestión a medida",
        "Formación en IA y gobernanza",
    ],
    "sameAs": [
        "https://www.linkedin.com/company/automatizatelo",
        "https://www.instagram.com/automatizatelo.ia",
    ],
};

export default function SobreMiPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
            />
            <Header />

            <div className="container" style={{ marginTop: "8rem", paddingBottom: "5rem", maxWidth: 900, flexGrow: 1 }}>
                <h1 className="section-title" style={{ marginBottom: "0.5rem" }}>
                    Manel Méndez <span className="premium-gradient">González</span>
                </h1>
                <p className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
                    Fundador de Automatizatelo. Construyo sistemas de automatización con IA que funcionan
                    en producción, no demos.
                </p>

                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1.2rem" }}>
                    Llevo 3 años metido de lleno en la automatización y la IA aplicada a negocios reales.
                    En ese tiempo he puesto en producción asistentes de WhatsApp, paneles de gestión y
                    plataformas completas que hoy usan a diario clínicas, despachos de administración de
                    fincas, consultoras y academias. Automatizatelo nace de ahí: de comprobar, sistema a
                    sistema, cuánto tiempo recupera una pyme cuando deja de hacer a mano lo que una máquina
                    hace mejor.
                </p>

                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "2.5rem 0 1rem", color: "var(--color-text-main)" }}>
                    Lo que he construido
                </h2>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1.2rem" }}>
                    En Automatizatelo no vendemos diapositivas: cada servicio que ofrecemos existe porque ya
                    lo hemos construido para un negocio real. Algunos de esos sistemas:
                </p>
                <ul style={{ color: "var(--color-text-muted)", lineHeight: 1.8, paddingLeft: "1.5rem", marginBottom: "1.2rem", listStyle: "disc" }}>
                    <li style={{ marginBottom: "0.6rem" }}>
                        Un <strong>asistente de WhatsApp con IA para una clínica estética de Ibiza</strong> que
                        agenda citas él solo: propone huecos reales, envía recordatorios, gestiona lista de
                        espera y cumple el RGPD sanitario con registro de auditoría.
                    </li>
                    <li style={{ marginBottom: "0.6rem" }}>
                        <strong>Paneles de gestión a medida para administradores de fincas</strong> (entre ellos
                        Serincosol): comunicaciones con vecinos, incidencias y documentación en un solo sitio.
                    </li>
                    <li style={{ marginBottom: "0.6rem" }}>
                        Un <strong>SaaS completo con portal de empleo propio</strong> para la consultora de
                        coaching y selección Henkoaching (Jennifer Cervera), con dashboard e informes.
                    </li>
                    <li style={{ marginBottom: "0.6rem" }}>
                        Un <strong>bot de WhatsApp para una empresa de comedores escolares</strong> en Cataluña
                        que gestiona las ausencias y preguntas de cientos de familias.
                    </li>
                    <li style={{ marginBottom: "0.6rem" }}>
                        <strong>Cursos online de IA</strong> publicados en plataformas e-learning (SCORM), y
                        formación a equipos en uso de IA y gobernanza — la formación que el Reglamento Europeo
                        de IA exige a las empresas desde febrero de 2025.
                    </li>
                </ul>

                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "2.5rem 0 1rem", color: "var(--color-text-main)" }}>
                    Cómo trabajo
                </h2>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1.2rem" }}>
                    Precio cerrado, pago por hitos y sin permanencia. El código y los datos son siempre del
                    cliente. Y no me caso con ninguna herramienta: usamos n8n, Make o desarrollo a medida
                    según lo que tu caso necesite, no lo que a mí me convenga vender.
                </p>

                <div style={{ marginTop: "2.5rem" }}>
                    <Link
                        href="/#contact"
                        className="btn btn-primary"
                        style={{ background: "var(--color-primary)", color: "#fff", textDecoration: "none", padding: "0.9rem 1.8rem", borderRadius: 12, fontWeight: 700, display: "inline-block" }}
                    >
                        Pide tu auditoría gratuita de 30 minutos
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
