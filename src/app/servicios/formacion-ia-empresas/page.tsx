import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Formación en IA para Empresas: Cursos y Talleres | AI Act",
    description:
        "Forma a tu equipo en IA y cumple el Art. 4 del Reglamento Europeo: talleres in-company, gobernanza y cursos e-learning (SCORM) a medida. Barcelona y toda España.",
    alternates: { canonical: "https://automatizatelo.com/servicios/formacion-ia-empresas" },
    openGraph: {
        title: "Formación en IA para Empresas y Equipos",
        description: "Talleres in-company, gobernanza de IA y cursos e-learning a medida. El AI Act ya exige formar a tu plantilla.",
        url: "https://automatizatelo.com/servicios/formacion-ia-empresas",
    },
};

const faqs = [
    {
        question: "¿Es obligatorio formar a mi equipo en IA?",
        answer: "Si tu empresa usa sistemas de IA, sí: el artículo 4 del Reglamento Europeo de IA (Reglamento UE 2024/1689) exige desde el 2 de febrero de 2025 que proveedores y usuarios de sistemas de IA garanticen un nivel suficiente de alfabetización en IA de su personal.",
    },
    {
        question: "¿Qué formatos de formación ofrecéis?",
        answer: "Talleres in-company (presenciales en Barcelona o en remoto para toda España), sesiones prácticas por departamento y cursos e-learning a medida en formato SCORM, listos para subir a la plataforma de formación que ya use tu empresa.",
    },
    {
        question: "¿La formación es teórica o práctica?",
        answer: "Práctica: trabajamos con los casos reales de tu empresa. El equipo sale usando la IA en sus tareas del día a día — redactar, resumir, clasificar, automatizar — y con criterios claros de qué puede y qué no puede hacer con ella.",
    },
    {
        question: "¿Incluye la parte de gobernanza y normativa?",
        answer: "Sí. Además del uso práctico, cubrimos la política interna de uso de IA: qué datos no se pueden pegar en una IA, cómo revisar resultados, qué herramientas están aprobadas y cómo documentarlo para cumplir con el RGPD y el Reglamento de IA.",
    },
    {
        question: "¿Cuánto cuesta?",
        answer: "Depende de las horas, el formato y el tamaño del equipo. Pide la consulta gratuita de 30 minutos y te preparamos una propuesta cerrada, sin sorpresas.",
    },
];

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
    })),
};

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Formación en IA para empresas",
    "serviceType": "Formación y alfabetización en Inteligencia Artificial",
    "description": "Talleres in-company, gobernanza de IA y cursos e-learning (SCORM) a medida para equipos de pymes.",
    "url": "https://automatizatelo.com/servicios/formacion-ia-empresas",
    "areaServed": "ES",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
        "telephone": "+34678399182",
    },
};

const h2Style = { fontSize: "1.6rem", fontWeight: 700, margin: "2.5rem 0 1rem", color: "var(--color-text-main)" } as const;
const pStyle = { color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1.2rem" } as const;

export default function FormacionIaPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header />

            <div className="container" style={{ marginTop: "8rem", paddingBottom: "5rem", maxWidth: 900, flexGrow: 1 }}>
                <h1 className="section-title" style={{ marginBottom: "0.5rem" }}>
                    Formación en IA <span className="premium-gradient">para empresas</span>
                </h1>
                <p className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
                    Tu equipo usando la IA con criterio — y tu empresa cumpliendo la normativa europea.
                </p>

                <h2 style={h2Style}>Qué es la formación en IA para empresas</h2>
                {/* Answer capsule */}
                <p style={{ ...pStyle, fontWeight: 500, color: "var(--color-text-main)", borderLeft: "4px solid var(--color-primary)", paddingLeft: "1.2rem" }}>
                    La formación en IA para empresas capacita a los equipos para usar herramientas de
                    inteligencia artificial con criterio, seguridad y resultados medibles en su trabajo diario.
                </p>
                <p style={pStyle}>
                    Y ya no es opcional: el artículo 4 del Reglamento Europeo de IA (Reglamento UE 2024/1689)
                    exige, desde el 2 de febrero de 2025, que las empresas que usan sistemas de IA garanticen
                    un nivel suficiente de <strong>alfabetización en IA</strong> de su personal. La mayoría de
                    pymes españolas todavía no lo ha resuelto.
                </p>

                <h2 style={h2Style}>Qué incluye</h2>
                <ul style={{ color: "var(--color-text-muted)", lineHeight: 1.8, paddingLeft: "1.5rem", marginBottom: "1.2rem", listStyle: "disc" }}>
                    <li style={{ marginBottom: "0.6rem" }}>
                        <strong>Talleres in-company de uso práctico:</strong> el equipo aprende con sus propios
                        casos — redactar, resumir, clasificar, preparar informes — no con ejemplos de laboratorio.
                    </li>
                    <li style={{ marginBottom: "0.6rem" }}>
                        <strong>Gobernanza y política interna de IA:</strong> qué datos no se pegan nunca en una
                        IA, qué herramientas están aprobadas, cómo revisar resultados y cómo documentarlo todo
                        para RGPD y AI Act.
                    </li>
                    <li style={{ marginBottom: "0.6rem" }}>
                        <strong>Cursos e-learning a medida (SCORM):</strong> producimos el curso de tu empresa
                        listo para subir a tu plataforma de formación, con evaluaciones y seguimiento.
                    </li>
                </ul>

                <h2 style={h2Style}>Quién lo imparte</h2>
                <p style={pStyle}>
                    <Link href="/sobre-mi" style={{ color: "var(--color-primary)", fontWeight: 600, textDecoration: "none" }}>
                        Manel Méndez González
                    </Link>
                    , fundador de Automatizatelo. No enseñamos IA de oídas: los sistemas que usamos como
                    ejemplo en clase son los que construimos para clientes reales —{" "}
                    <Link href="/casos-de-exito" style={{ color: "var(--color-primary)", fontWeight: 600, textDecoration: "none" }}>
                        puedes verlos aquí
                    </Link>
                    — y hemos publicado cursos completos de IA en plataformas e-learning.
                </p>

                <h2 style={h2Style}>Preguntas frecuentes</h2>
                {faqs.map((f) => (
                    <details key={f.question} style={{ marginBottom: "0.8rem", border: "1px solid var(--color-border)", borderRadius: 12, padding: "1rem 1.2rem", background: "var(--color-card-bg)" }}>
                        <summary style={{ fontWeight: 600, color: "var(--color-text-main)", cursor: "pointer" }}>
                            {f.question}
                        </summary>
                        <p style={{ ...pStyle, marginTop: "0.8rem", marginBottom: 0 }}>{f.answer}</p>
                    </details>
                ))}

                <div style={{ textAlign: "center", marginTop: "3rem" }}>
                    <Link
                        href="/#contact"
                        className="btn btn-primary"
                        style={{ background: "var(--color-primary)", color: "#fff", textDecoration: "none", padding: "0.9rem 1.8rem", borderRadius: 12, fontWeight: 700, display: "inline-block" }}
                    >
                        Pide tu consulta gratuita de 30 minutos
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
