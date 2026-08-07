import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioCurso from "@/components/FormularioCurso";
import FormacionTabs from "@/components/FormacionTabs";

export const metadata: Metadata = {
    title: "Cursos E-learning a Medida (SCORM) | Producción",
    description:
        "Produzco tu curso e-learning a medida en formato SCORM: guion, materiales, vídeo y empaquetado, instalado en tu plataforma. Sobre cualquier tema. Desde 1.900€.",
    alternates: { canonical: "https://automatizatelo.com/formacion/cursos-a-medida" },
    openGraph: {
        title: "Producción de cursos e-learning a medida (SCORM)",
        description: "Tu formación convertida en curso instalado en tu plataforma para siempre — o en marca blanca para tu academia. Cualquier tema.",
        url: "https://automatizatelo.com/formacion/cursos-a-medida",
    },
};

const faqs = [
    {
        question: "¿Qué es exactamente un curso SCORM?",
        answer: "SCORM es el formato estándar de los cursos e-learning: un paquete que se sube a cualquier plataforma de formación (Moodle, LearnDash, TalentLMS, la de tu empresa…) y que registra automáticamente el progreso, las evaluaciones y la finalización de cada alumno. Si tu plataforma admite cursos — y casi todas lo hacen — admite SCORM.",
    },
    {
        question: "¿Solo producís cursos de inteligencia artificial?",
        answer: "No: el tema es libre. La IA es lo que más produzco (es mi especialidad y donde más catálogo tengo), pero el proceso de producción vale para cualquier contenido: el manejo de tu software interno, onboarding de empleados, procesos de calidad, atención al cliente, prevención… Si el conocimiento existe en tu empresa, se puede convertir en curso.",
    },
    {
        question: "¿De quién es el curso una vez producido?",
        answer: "Tuyo, sin letra pequeña. Pagas la producción una vez y el paquete SCORM te pertenece: lo instalas en tu plataforma, lo usas con los alumnos que quieras y no hay licencias recurrentes ni permanencia. Es la misma regla que aplico a todo: el código y los contenidos son siempre del cliente.",
    },
    {
        question: "¿Qué incluye la marca blanca para academias?",
        answer: "Todo el curso producido con tu identidad: tu logo, tus colores y tu voz de marca en guion, materiales y vídeo. Tu alumno nunca sabe que existo — tú pones el catálogo y la certificación, yo pongo la producción. También ofrezco licencias de contenido ya producido si quieres ampliar catálogo sin esperar una producción completa.",
    },
    {
        question: "¿Cuánto cuesta y cuánto se tarda?",
        answer: "La producción completa de un curso, desde 1.900€ con precio cerrado por escrito según duración y complejidad (vídeo, evaluaciones, ejercicios). Los plazos habituales van de 3 a 6 semanas por curso. La licencia de contenido ya producido es inmediata y se presupuesta por catálogo.",
    },
    {
        question: "¿El curso sirve como evidencia del Art. 4 del AI Act?",
        answer: "Si el curso es de alfabetización en IA, sí: el SCORM registra qué alumno lo completó y cuándo, que es exactamente el registro formativo fechado que pide el artículo 4 del Reglamento Europeo de IA. Para plantillas grandes o distribuidas suele ser el formato más práctico de cumplir.",
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
    "name": "Producción de cursos e-learning a medida (SCORM)",
    "serviceType": "Producción de formación e-learning",
    "description": "Producción completa de cursos e-learning en formato SCORM sobre cualquier tema: guion, materiales, vídeo y empaquetado, instalados en la plataforma del cliente. También en marca blanca para academias.",
    "url": "https://automatizatelo.com/formacion/cursos-a-medida",
    "areaServed": "ES",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
        "telephone": "+34678399182",
    },
    "offers": [
        { "@type": "Offer", "name": "Producción de curso a medida", "price": "1900", "priceCurrency": "EUR", "description": "Precio desde; se cierra por escrito según duración y complejidad." },
    ],
};

export default function CursosAMedidaPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header />

            {/* Hero editorial con captura */}
            <section style={{
                padding: "9rem 0 3.5rem",
                background: "radial-gradient(circle at 20% 20%, rgba(234, 88, 12, 0.07) 0%, transparent 55%)",
            }}>
                <div className="container fc-hero-grid">
                    <div>
                        <span className="kicker-mono">
                            <i className="fa-solid fa-laptop-file" style={{ marginRight: "0.6rem" }}></i>
                            Producción e-learning · SCORM
                        </span>
                        <h1 style={{
                            fontFamily: "var(--font-display, serif)",
                            fontSize: "clamp(2.1rem, 5vw, 3.3rem)",
                            fontWeight: 600,
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em",
                            color: "var(--color-text-main)",
                            margin: "1rem 0 1.2rem",
                        }}>
                            Tu curso, producido{" "}<br /><span style={{ color: "var(--color-primary)" }}>e instalado en tu plataforma</span>
                        </h1>
                        <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 620 }}>
                            Guion, materiales, vídeo y empaquetado SCORM — sobre el tema que necesites,
                            con registro individual por alumno. Pagas una vez y el curso es tuyo para siempre.
                        </p>
                    </div>

                    <FormularioCurso
                        origen="Curso e-learning a medida (SCORM)"
                        opciones={[
                            "Curso a medida para mi empresa",
                            "Curso en marca blanca para mi academia",
                            "Licencia de contenido ya producido",
                            "Aún no lo tengo claro",
                        ]}
                    />
                </div>
            </section>

            <FormacionTabs />

            {/* En corto */}
            <section style={{ padding: "4rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="kicker-mono">En corto</span>
                    <p style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
                        fontWeight: 600,
                        lineHeight: 1.35,
                        color: "var(--color-text-main)",
                        margin: "1rem 0 1.2rem",
                        letterSpacing: "-0.01em",
                    }}>
                        Produzco cursos e-learning a medida en formato SCORM — sobre cualquier
                        tema — listos para tu plataforma, desde 1.900€ y con el curso en
                        propiedad del cliente.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        SCORM es el estándar que entiende cualquier plataforma de formación: Moodle,
                        LearnDash, TalentLMS o la que ya use tu empresa o tu academia. El curso
                        registra el progreso y la finalización de cada alumno — y si es de IA, ese
                        registro es además la <strong style={{ color: "var(--color-text-main)" }}>evidencia del Art. 4</strong> del
                        Reglamento Europeo.
                    </p>
                </div>
            </section>

            {/* Los dos compradores */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Para quién</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            Dos maneras de comprarlo
                        </h2>
                    </div>
                    <div className="cam-compradores">
                        <div className="cam-comprador">
                            <span className="mono-label" style={{ color: "var(--color-primary)" }}>01 · Empresas</span>
                            <h3>Tu formación interna, convertida en curso</h3>
                            <p>
                                El conocimiento que hoy vive en la cabeza de dos personas — el manejo de
                                vuestro software, el onboarding, los procesos de calidad, la alfabetización
                                en IA — producido como curso e instalado en vuestra plataforma. Cada empleado
                                lo hace a su ritmo y queda registro individual de quién lo completó.
                            </p>
                            <ul>
                                <li>Se imparte solo: sin coordinar calendarios ni repetir sesiones</li>
                                <li>Registro por alumno — evidencia formativa fechada</li>
                                <li>Actualizable: el guion es tuyo, ampliarlo cuesta poco</li>
                            </ul>
                        </div>
                        <div className="cam-comprador cam-comprador-oscuro">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>02 · Academias y entidades</span>
                            <h3>Catálogo nuevo, con tu marca</h3>
                            <p>
                                Tú pones el catálogo y la certificación; yo produzco el contenido — guion,
                                materiales, vídeo y empaquetado SCORM — con tu logo, tus colores y tu voz.
                                Tu alumno nunca sabe que existo. Es lo que ya hago con plataformas
                                e-learning reales, con cursos publicados y en venta.
                            </p>
                            <ul>
                                <li>Marca blanca completa: la autoría es tuya</li>
                                <li>Producción por encargo o licencia de contenido ya producido</li>
                                <li>Especialidad en IA — el catálogo que ahora mismo todo el mundo pide</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* El tema es libre */}
            <section style={{ padding: "1rem 0 4.5rem" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div className="cam-temas">
                        <span style={{ fontWeight: 600, color: "var(--color-text-main)" }}>El tema es libre:</span>
                        {["Alfabetización en IA (Art. 4)", "ChatGPT / Copilot / Gemini / Claude", "Vuestro software interno", "Onboarding de empleados", "Atención al cliente", "Procesos y calidad", "Lo que sepa tu mejor empleado"].map((t) => (
                            <span key={t} className="cam-tema-chip">{t}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proceso en 4 pasos */}
            <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Cómo transcurre</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            De tu conocimiento al curso, en 4 pasos
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                            Plazo habitual: de 3 a 6 semanas por curso, según duración y complejidad.
                        </p>
                    </div>
                    <div className="cam-proceso">
                        {[
                            { n: "01", titulo: "Guion", d: "Una o dos sesiones con quien sabe del tema. Yo estructuro: objetivos, módulos, ejercicios y evaluaciones." },
                            { n: "02", titulo: "Materiales y vídeo", d: "Producción completa: vídeo, apoyos visuales, plantillas descargables y las pruebas de cada módulo." },
                            { n: "03", titulo: "Empaquetado SCORM", d: "El curso empaquetado en el estándar que entiende cualquier plataforma, con seguimiento por alumno." },
                            { n: "04", titulo: "Instalado y probado", d: "Lo subo a tu plataforma, lo pruebo contigo de punta a punta y te enseño a leer los registros." },
                        ].map((p, i) => (
                            <div key={p.n} className="cam-paso">
                                <div className="cam-paso-cab">
                                    <span className="cam-paso-num">{p.n}</span>
                                    {i < 3 && <span className="cam-paso-linea" aria-hidden="true"></span>}
                                </div>
                                <h3>{p.titulo}</h3>
                                <p>{p.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Precios */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Precios públicos</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Producción única, sin licencias recurrentes
                        </h2>
                    </div>
                    <div className="cam-precios">
                        <div className="cam-precio-card cam-precio-destacado">
                            <h3>Curso a medida</h3>
                            <p className="cam-precio-desc">Producción completa — guion, materiales, vídeo, SCORM — instalada y probada en tu plataforma. El curso es tuyo para siempre.</p>
                            <div className="cam-precio-cifra"><span className="mono-label">Desde</span> 1.900€</div>
                        </div>
                        <div className="cam-precio-card">
                            <h3>Licencia de contenido</h3>
                            <p className="cam-precio-desc">Cursos de IA ya producidos, licenciados con tu marca para ampliar catálogo de inmediato. Se presupuesta por catálogo.</p>
                            <div className="cam-precio-cifra" style={{ fontSize: "1.4rem" }}>A consultar</div>
                        </div>
                    </div>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginTop: "1.5rem", maxWidth: 720 }}>
                        Precio cerrado por escrito según duración y complejidad, pago por hitos y sin
                        permanencia. Puedes ver los sistemas que ya funcionan — incluida la plataforma de
                        academia con sus cursos — en{" "}
                        <Link href="/casos" style={{ color: "var(--color-primary)", fontWeight: 600 }}>casos</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Preguntas frecuentes
                        </h2>
                    </div>
                    {faqs.map((f) => (
                        <details key={f.question} className="cam-faq">
                            <summary>
                                <span>{f.question}</span>
                                <i className="fas fa-chevron-down"></i>
                            </summary>
                            <p style={{ padding: "0 0.4rem 1.5rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0, maxWidth: 720 }}>{f.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* CTA final */}
            <section style={{ padding: "4.5rem 0", background: "#f8dfc6", textAlign: "center" }}>
                <div className="container">
                    <p style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)",
                        fontWeight: 600,
                        color: "#1c1917",
                        lineHeight: 1.2,
                        margin: "0 0 1rem",
                        letterSpacing: "-0.02em",
                    }}>
                        ¿Qué curso necesita tu plataforma?
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos gratis: me cuentas el tema y te digo alcance, plazo y precio cerrado.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Cuéntame tu curso
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .cam-compradores {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }
                .cam-comprador {
                    border: 1px solid var(--color-border);
                    border-radius: 18px;
                    padding: 1.9rem;
                    background: var(--color-card-bg);
                }
                .cam-comprador h3 {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.25rem, 2.4vw, 1.6rem);
                    font-weight: 600;
                    color: var(--color-text-main);
                    margin: 0.6rem 0;
                    line-height: 1.25;
                }
                .cam-comprador p {
                    color: var(--color-text-muted);
                    line-height: 1.65;
                    font-size: 0.95rem;
                    margin: 0 0 1.1rem;
                }
                .cam-comprador ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .cam-comprador ul li {
                    font-size: 0.92rem;
                    line-height: 1.5;
                    color: var(--color-text-main);
                    padding-left: 1.2rem;
                    position: relative;
                }
                .cam-comprador ul li::before {
                    content: "·";
                    position: absolute;
                    left: 0.25rem;
                    color: var(--color-primary);
                    font-weight: 700;
                }
                .cam-comprador-oscuro {
                    background: #1c1917;
                    border-color: #1c1917;
                }
                .cam-comprador-oscuro h3 { color: #faf6ef; }
                .cam-comprador-oscuro p { color: rgba(250,246,239,0.82); }
                .cam-comprador-oscuro ul li { color: rgba(250,246,239,0.9); }
                .cam-comprador-oscuro ul li::before { color: #f6c39c; }
                .cam-temas {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 0.6rem;
                }
                .cam-tema-chip {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: 50px;
                    padding: 0.4rem 1rem;
                }
                .cam-proceso {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.4rem;
                }
                .cam-paso-cab {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-bottom: 0.9rem;
                }
                .cam-paso-num {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: var(--color-primary);
                    background: rgba(234, 88, 12, 0.1);
                    border: 1px solid rgba(234, 88, 12, 0.3);
                    border-radius: 50px;
                    padding: 0.35rem 0.75rem;
                    flex-shrink: 0;
                }
                .cam-paso-linea {
                    flex: 1;
                    height: 1px;
                    background: var(--color-border);
                }
                .cam-paso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    margin: 0 0 0.4rem;
                    line-height: 1.3;
                }
                .cam-paso p {
                    color: var(--color-text-muted);
                    font-size: 0.89rem;
                    line-height: 1.6;
                    margin: 0;
                }
                .cam-precios {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.2rem;
                }
                .cam-precio-card {
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    padding: 2rem;
                }
                .cam-precio-destacado {
                    background: linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%);
                    border: none;
                    box-shadow: 0 25px 55px rgba(28, 25, 23, 0.18);
                }
                .cam-precio-card h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.35rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    margin-bottom: 0.5rem;
                }
                .cam-precio-destacado h3 { color: #faf6ef; }
                .cam-precio-desc {
                    font-size: 0.95rem;
                    color: var(--color-text-muted);
                    line-height: 1.6;
                    margin-bottom: 1.2rem;
                }
                .cam-precio-destacado .cam-precio-desc { color: rgba(250,246,239,0.85); }
                .cam-precio-cifra {
                    font-family: var(--font-display, serif);
                    font-size: clamp(2rem, 3.5vw, 2.8rem);
                    font-weight: 600;
                    color: var(--color-primary);
                    letter-spacing: -0.02em;
                    display: flex;
                    align-items: baseline;
                    gap: 0.6rem;
                }
                .cam-precio-destacado .cam-precio-cifra { color: #f6c39c; }
                .cam-precio-destacado .cam-precio-cifra .mono-label { color: rgba(250,246,239,0.75); }
                .cam-faq {
                    border-top: 1px solid var(--color-border);
                }
                .cam-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .cam-faq summary {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    padding: 1.3rem 0.4rem;
                    cursor: pointer;
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.05rem, 2vw, 1.3rem);
                    font-weight: 600;
                    color: var(--color-text-main);
                    line-height: 1.3;
                    transition: color 0.2s ease, padding-left 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .cam-faq summary::-webkit-details-marker { display: none; }
                .cam-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .cam-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .cam-faq[open] summary i { transform: rotate(180deg); }
                @media (max-width: 900px) {
                    .cam-proceso { grid-template-columns: 1fr 1fr; }
                    .cam-paso-linea { display: none; }
                }
                @media (max-width: 800px) {
                    .cam-compradores { grid-template-columns: 1fr; }
                }
                @media (max-width: 700px) {
                    .cam-precios { grid-template-columns: 1fr; }
                }
                @media (max-width: 560px) {
                    .cam-proceso { grid-template-columns: 1fr; }
                }
                @media (max-width: 600px) {
                    h1 br { display: none; }
                }
            `}</style>
        </main>
    );
}
