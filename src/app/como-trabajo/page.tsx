import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Cómo Trabajo: Auditoría, Implementación y Acompañamiento",
    description:
        "Mi método en 3 fases para automatizar tu pyme: auditoría gratuita de 30 minutos, implementación por hitos con precio cerrado y acompañamiento con soporte incluido.",
    alternates: { canonical: "https://automatizatelo.com/como-trabajo" },
    openGraph: {
        title: "Cómo trabajo: de tareas manuales a sistema que trabaja solo",
        description: "Auditoría gratuita → implementación por hitos → acompañamiento. Precio cerrado, sin permanencia, código tuyo.",
        url: "https://automatizatelo.com/como-trabajo",
    },
};

const fases = [
    {
        num: "01",
        titulo: "Auditoría",
        lema: "Antes de construir, el criterio.",
        parrafos: [
            "Empezamos con 30 minutos gratis, sin compromiso: me cuentas cómo trabajáis y yo miro dónde se va el tiempo — los mensajes que contestáis a mano, los datos que se copian de una herramienta a otra, los documentos que se hacen uno a uno.",
            "Sales con un diagnóstico honesto: qué automatizar primero, qué puede esperar y qué no te compensa automatizar. Sí, a veces la respuesta es \"esto no lo automatices\" — y también te lo digo gratis.",
            "Si seguimos, recibes una propuesta por escrito con el alcance, el precio y el plazo cerrados. Nada arranca sin que sepas exactamente qué se construye, cuánto cuesta y cuándo se entrega.",
        ],
        enlace: { href: "/#contact", texto: "Pedir la auditoría gratuita" },
    },
    {
        num: "02",
        titulo: "Implementación",
        lema: "Construimos el sistema.",
        parrafos: [
            "Construyo el sistema por hitos: entregas parciales que vas viendo funcionar, no un misterio de meses que aparece al final. Cada hito se paga cuando está entregado — por eso el pago es por hitos y no por adelantado.",
            "Se prueba con tus datos y tus casos reales antes de darlo por bueno, y se integra con las herramientas que ya usáis: agenda, facturación, WhatsApp, lo que haya. Tu equipo no tiene que aprender un mundo nuevo.",
            "Todo lo que construyo queda en tu propiedad: el código, los datos y los accesos son tuyos desde el primer día. Si mañana quieres seguir con otro proveedor, te lo llevas todo.",
        ],
        enlace: { href: "/casos-de-exito", texto: "Ver sistemas ya entregados" },
    },
    {
        num: "03",
        titulo: "Acompañamiento",
        lema: "Soporte y mejora continua.",
        parrafos: [
            "Todos los proyectos incluyen un periodo de soporte — de 1 a 6 meses según el tamaño — en el que resuelvo dudas, ajusto lo que la realidad pida ajustar y vigilo que todo funcione como debe.",
            "Después, tú decides: mantenimiento opcional si quieres que siga al lado, o autonomía total — sin permanencia y con documentación para que cualquiera pueda continuar.",
            "Y si tu equipo necesita aprender a sacarle partido a la IA, la formación existe como servicio propio, con sus formatos y tarifas públicas.",
        ],
        enlace: { href: "/servicios/formacion-ia-empresas", texto: "Ver la formación en IA" },
    },
];

const faqs = [
    {
        question: "¿Cuánto tarda un proyecto de automatización?",
        answer: "Una automatización puntual, unas 2 semanas. Un área completa, entre uno y tres meses según el alcance. El plazo exacto se cierra por escrito en la propuesta, antes de empezar, junto con el precio.",
    },
    {
        question: "¿Necesito saber de tecnología para trabajar contigo?",
        answer: "No. Tú explicas cómo trabaja tu negocio y de la parte técnica me encargo yo. El sistema se entrega funcionando, integrado con tus herramientas y explicado a tu equipo en su idioma, sin jerga.",
    },
    {
        question: "¿Trabajas en presencial o en remoto?",
        answer: "Las dos cosas: presencial en Barcelona y alrededores, y en remoto para toda España. La mayoría de proyectos se llevan perfectamente en remoto, con reuniones cortas en los hitos.",
    },
    {
        question: "¿Qué pasa cuando se acaba el periodo de soporte?",
        answer: "Decides tú: puedes contratar mantenimiento opcional o seguir por tu cuenta. Como el código y los datos son tuyos y todo queda documentado, no dependes de mí para continuar — esa es la idea.",
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

export default function ComoTrabajoPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <Header />

            {/* Hero editorial */}
            <section style={{
                padding: "9rem 0 3.5rem",
                background: "radial-gradient(circle at 20% 20%, rgba(234, 88, 12, 0.07) 0%, transparent 55%)",
            }}>
                <div className="container">
                    <span className="kicker-mono">
                        <i className="fa-solid fa-route" style={{ marginRight: "0.6rem" }}></i>
                        Cómo trabajo
                    </span>
                    <h1 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(2.2rem, 6vw, 3.6rem)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        color: "var(--color-text-main)",
                        margin: "1rem 0 1.2rem",
                    }}>
                        Así trabajo:{" "}<br />
                        <span style={{ color: "var(--color-primary)" }}>sin sorpresas y sin ataduras</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 660 }}>
                        Tres fases para los proyectos — auditoría gratuita, implementación por hitos
                        y acompañamiento — y procesos propios para la formación y la auditoría de
                        cumplimiento. En todos los casos, lo mismo: precio y plazo cerrados antes
                        de empezar, y el resultado en tu propiedad.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.02rem", padding: "1rem 2.25rem" }}>
                        Empezar por la auditoría gratuita
                    </Link>
                </div>
            </section>

            {/* Las 3 fases */}
            <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    {fases.map((f, i) => (
                        <div key={f.num} className="ct-fase" style={i === 0 ? { borderTop: "none", paddingTop: 0 } : undefined}>
                            <div className="ct-fase-num">
                                <span>{f.num}</span>
                            </div>
                            <div>
                                <h2 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                                    fontWeight: 600,
                                    color: "var(--color-text-main)",
                                    margin: "0 0 0.3rem",
                                    lineHeight: 1.2,
                                }}>
                                    {f.titulo}
                                </h2>
                                <p className="mono-label" style={{ color: "var(--color-primary)", marginBottom: "1.2rem" }}>{f.lema}</p>
                                {f.parrafos.map((p) => (
                                    <p key={p.slice(0, 30)} style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem", maxWidth: 640 }}>
                                        {p}
                                    </p>
                                ))}
                                <Link href={f.enlace.href} style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                                    {f.enlace.texto} →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Y en formación — proceso propio, compacto */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <span className="kicker-mono">¿Y en formación?</span>
                    <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                        La formación trabaja distinto
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: "left", margin: "0 0 2rem", maxWidth: 640 }}>
                        Aquí no se construye un sistema: se forma a un equipo. El proceso es más corto
                        y con otros entregables.
                    </p>
                    <div className="ct-form-pasos">
                        {[
                            {
                                num: "01",
                                titulo: "Ajuste",
                                desc: "Hablamos de qué necesita tu equipo: nivel real, herramientas que ya usáis y casos de tu sector. De ahí sale la propuesta con formato, fechas y precio cerrado.",
                            },
                            {
                                num: "02",
                                titulo: "Impartición",
                                desc: "Sesiones prácticas con vuestros casos reales, no diapositivas genéricas. Presencial en Barcelona, en remoto para toda España, o como curso en vuestra plataforma.",
                            },
                            {
                                num: "03",
                                titulo: "Evidencia",
                                desc: "Certificado nominal por participante, registro formativo fechado y el material — el expediente que acredita la alfabetización del Art. 4, y que se queda en tu empresa.",
                            },
                        ].map((p) => (
                            <div key={p.num} className="ct-form-paso">
                                <span className="mono-label" style={{ color: "var(--color-primary)" }}>{p.num}</span>
                                <h3 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "1.25rem",
                                    fontWeight: 600,
                                    color: "var(--color-text-main)",
                                    margin: "0.5rem 0 0.5rem",
                                    lineHeight: 1.3,
                                }}>
                                    {p.titulo}
                                </h3>
                                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, margin: 0, fontSize: "0.95rem" }}>
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginTop: "1.8rem", maxWidth: 720 }}>
                        Formatos, tarifas y contenidos, en la página de{" "}
                        <Link href="/servicios/formacion-ia-empresas" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            formación en IA para empresas
                        </Link>{" "}
                        — y su versión para{" "}
                        <Link href="/formacion-ia-centros-educativos" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            centros educativos
                        </Link>.
                    </p>
                </div>
            </section>

            {/* Y en auditoría — proceso propio, compacto */}
            <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <span className="kicker-mono">¿Y la auditoría IA?</span>
                    <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                        Del "¿cumplimos?" al plan de acción
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: "left", margin: "0 0 2rem", maxWidth: 640 }}>
                        Para el cumplimiento del Reglamento Europeo de IA el proceso es aún más corto:
                        una o dos semanas.
                    </p>
                    <div className="ct-form-pasos">
                        {[
                            {
                                num: "01",
                                titulo: "Revisión",
                                desc: "Una sesión para entender cómo trabajáis y un inventario de la IA que la empresa usa de verdad — incluida la que nadie ha 'aprobado'. Con su clasificación de riesgos según el Reglamento.",
                            },
                            {
                                num: "02",
                                titulo: "Informe y plan",
                                desc: "Qué cumples, qué no, y qué hacer en qué orden — con esfuerzo y coste de cada paso. Escrito para gerencia, no para abogados, y explicado en una reunión final.",
                            },
                            {
                                num: "03",
                                titulo: "Cierre",
                                desc: "Si quieres dejarlo cerrado: política de uso de IA redactada para tu empresa y formación del Art. 4 con certificados. La evidencia documental completa, en tu poder.",
                            },
                        ].map((p) => (
                            <div key={p.num} className="ct-form-paso">
                                <span className="mono-label" style={{ color: "var(--color-primary)" }}>{p.num}</span>
                                <h3 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "1.25rem",
                                    fontWeight: 600,
                                    color: "var(--color-text-main)",
                                    margin: "0.5rem 0 0.5rem",
                                    lineHeight: 1.3,
                                }}>
                                    {p.titulo}
                                </h3>
                                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, margin: 0, fontSize: "0.95rem" }}>
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginTop: "1.8rem", maxWidth: 720 }}>
                        Alcance, entregables y precios, en la página de{" "}
                        <Link href="/servicios/auditoria-ia" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            auditoría IA
                        </Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Preguntas sobre la forma de trabajar
                        </h2>
                    </div>
                    {faqs.map((f) => (
                        <details key={f.question} className="ct-faq">
                            <summary>
                                <span>{f.question}</span>
                                <i className="fas fa-chevron-down"></i>
                            </summary>
                            <p style={{ padding: "0 0.4rem 1.5rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0, maxWidth: 720 }}>{f.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* CTA final en melocotón */}
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
                        La fase 01 es gratis. Empecemos por ahí.
                    </p>
                    <p style={{ color: "rgba(28,25,23,0.7)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos, sin compromiso: te digo qué automatizar primero — o si no te compensa.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir la auditoría gratuita
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .ct-fase {
                    display: grid;
                    grid-template-columns: 8rem 1fr;
                    gap: 2rem;
                    padding: 3rem 0;
                    border-top: 1px solid var(--color-border);
                }
                .ct-fase-num span {
                    font-family: var(--font-display, serif);
                    font-size: clamp(3.5rem, 7vw, 5.5rem);
                    font-weight: 600;
                    line-height: 1;
                    color: transparent;
                    -webkit-text-stroke: 2px rgba(234, 88, 12, 0.45);
                }
                .ct-form-pasos {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }
                .ct-form-paso {
                    border-top: 1px solid var(--color-border);
                    padding-top: 1.2rem;
                }
                @media (max-width: 800px) {
                    .ct-form-pasos {
                        grid-template-columns: 1fr;
                        gap: 1.4rem;
                    }
                }
                .ct-faq {
                    border-top: 1px solid var(--color-border);
                }
                .ct-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .ct-faq summary {
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
                .ct-faq summary::-webkit-details-marker {
                    display: none;
                }
                .ct-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .ct-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .ct-faq[open] summary i {
                    transform: rotate(180deg);
                }
                @media (max-width: 700px) {
                    .ct-fase {
                        grid-template-columns: 1fr;
                        gap: 0.8rem;
                        padding: 2.2rem 0;
                    }
                }
                @media (max-width: 600px) {
                    h1 br { display: none; }
                }
            `}</style>
        </main>
    );
}
