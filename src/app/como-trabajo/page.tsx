import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Cómo Trabajo: Mi Método para Implantar IA",
    description:
        "Todo empieza con 30 minutos gratis. Después: formar al equipo, cumplir el AI Act o automatizar el trabajo — con precio y plazo cerrados y sin permanencia.",
    alternates: { canonical: "https://automatizatelo.com/como-trabajo" },
    openGraph: {
        title: "Cómo trabajo: sin sorpresas y sin ataduras",
        description: "Diagnóstico gratuito y tres caminos: formar, cumplir y automatizar. Precio cerrado, pago por hitos, código tuyo.",
        url: "https://automatizatelo.com/como-trabajo",
    },
};

const lineas = [
    {
        num: "01",
        titulo: "Formar",
        lema: "Que tu equipo use la IA con criterio.",
        oscuro: false,
        pasos: [
            {
                n: "a",
                t: "Ajuste",
                d: "Hablamos de qué necesita tu equipo: nivel real, herramientas que ya usáis y casos de tu sector. De ahí sale la propuesta con formato, fechas y precio cerrado.",
            },
            {
                n: "b",
                t: "Impartición",
                d: "Sesiones prácticas con vuestros casos reales, no diapositivas genéricas. Presencial en Barcelona, en remoto para toda España, o como curso en vuestra plataforma.",
            },
            {
                n: "c",
                t: "Evidencia",
                d: "Certificado nominal por participante, registro formativo fechado y el material — el expediente que acredita la alfabetización del Art. 4 y se queda en tu empresa.",
            },
        ],
        enlaces: [
            { href: "/formacion", texto: "Formatos y tarifas de formación" },
        ],
    },
    {
        num: "02",
        titulo: "Cumplir",
        lema: "Que la ley no te pille a contrapié.",
        oscuro: true,
        pasos: [
            {
                n: "a",
                t: "Revisión",
                d: "Una sesión para entender cómo trabajáis y un inventario de la IA que la empresa usa de verdad — incluida la que nadie ha 'aprobado'. Con su clasificación de riesgos según el Reglamento.",
            },
            {
                n: "b",
                t: "Informe y plan",
                d: "Qué cumples, qué no, y qué hacer en qué orden — con esfuerzo y coste de cada paso. Escrito para gerencia, no para abogados, y explicado en una reunión final.",
            },
            {
                n: "c",
                t: "Cierre",
                d: "Si quieres dejarlo cerrado: política de uso de IA redactada para tu empresa y formación del Art. 4 con certificados. La evidencia documental completa, en tu poder.",
            },
        ],
        enlaces: [
            { href: "/cumplimiento", texto: "Alcance y precios de la auditoría" },
            { href: "/formacion/ai-act", texto: "Qué exige el Art. 4" },
        ],
    },
    {
        num: "03",
        titulo: "Automatizar",
        lema: "Que el trabajo repetitivo se haga solo.",
        oscuro: false,
        pasos: [
            {
                n: "a",
                t: "Propuesta cerrada",
                d: "Antes de tocar nada: alcance, precio y plazo por escrito. Nada arranca sin que sepas exactamente qué se construye, cuánto cuesta y cuándo se entrega.",
            },
            {
                n: "b",
                t: "Construcción por hitos",
                d: "Entregas parciales que vas viendo funcionar, no un misterio de meses. Cada hito se paga cuando está entregado, se prueba con tus datos reales y se integra con lo que ya usáis.",
            },
            {
                n: "c",
                t: "Acompañamiento",
                d: "De 1 a 6 meses de soporte según el tamaño: resuelvo dudas, ajusto lo que la realidad pida y vigilo que todo funcione. Después, mantenimiento opcional o autonomía total.",
            },
        ],
        enlaces: [
            { href: "/casos", texto: "Ver sistemas ya entregados" },
            { href: "/precios", texto: "Precios de los proyectos" },
        ],
    },
];

const garantias = [
    {
        icon: "fa-file-signature",
        t: "Precio y plazo cerrados",
        d: "Por escrito antes de empezar. Sin sorpresas a mitad de proyecto ni horas que aparecen al final.",
    },
    {
        icon: "fa-flag-checkered",
        t: "Pago por hitos",
        d: "Se paga lo entregado, cuando está entregado. Si no avanzo, no cobro.",
    },
    {
        icon: "fa-lock-open",
        t: "Sin permanencia",
        d: "Ni cuotas obligatorias ni contratos que atan. Te quedas porque funciona.",
    },
    {
        icon: "fa-key",
        t: "El código y los datos, tuyos",
        d: "Todo queda en tu propiedad y documentado, para que puedas continuar con quien quieras.",
    },
];

const faqs = [
    {
        question: "¿La auditoría gratuita es lo mismo que la Auditoría IA que vendes?",
        answer: "No, y conviene distinguirlo: la auditoría gratuita son los 30 minutos iniciales en los que miramos tu caso y te digo por dónde empezar — sin coste ni compromiso. La Auditoría IA (AI Act) es un servicio con entregables: inventario, clasificación de riesgos, informe y plan de acción, desde 750€. La gratuita puede acabar recomendándote la de pago… o diciéndote que no te hace falta.",
    },
    {
        question: "¿Cuánto tarda cada cosa?",
        answer: "La formación se agenda en semanas y se imparte en días. La auditoría de cumplimiento, una o dos semanas desde la primera reunión. Un proyecto de automatización puntual, unas 2 semanas; un área completa, entre uno y tres meses según alcance. El plazo exacto se cierra por escrito en la propuesta.",
    },
    {
        question: "¿Tengo que hacer las tres cosas?",
        answer: "No. Cada línea funciona sola y se contrata sola: hay clientes que solo forman a su equipo, otros que solo quieren el cumplimiento en regla y otros que van directos a automatizar. Si has hecho una, las siguientes se abaratan — no se paga dos veces lo mismo.",
    },
    {
        question: "¿Necesito saber de tecnología para trabajar contigo?",
        answer: "No. Tú explicas cómo trabaja tu negocio y de la parte técnica me encargo yo. Todo se entrega funcionando, integrado con tus herramientas y explicado a tu equipo en su idioma, sin jerga.",
    },
    {
        question: "¿Trabajas presencial o en remoto?",
        answer: "Las dos cosas: presencial en Barcelona y alrededores, y en remoto para toda España. La mayoría de proyectos se llevan perfectamente en remoto, con reuniones cortas en los hitos.",
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
                        Todo empieza igual — 30 minutos gratis — y a partir de ahí hay tres caminos:
                        formar a tu equipo, poner el cumplimiento en regla o automatizar el trabajo.
                        En los tres, lo mismo: precio y plazo cerrados antes de empezar, y el
                        resultado en tu propiedad.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.02rem", padding: "1rem 2.25rem" }}>
                        Empezar por los 30 minutos
                    </Link>
                </div>
            </section>

            {/* Paso 0 — la puerta común */}
            <section style={{ padding: "3.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div className="ct-cero">
                        <div className="ct-cero-num" aria-hidden="true">00</div>
                        <div>
                            <span className="kicker-mono">Siempre empieza igual</span>
                            <h2 style={{
                                fontFamily: "var(--font-display, serif)",
                                fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                                fontWeight: 600,
                                color: "var(--color-text-main)",
                                margin: "0.6rem 0 0.8rem",
                                lineHeight: 1.25,
                            }}>
                                30 minutos gratis, sin compromiso
                            </h2>
                            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "0.9rem", maxWidth: 620 }}>
                                Me cuentas cómo trabajáis y yo miro dónde se va el tiempo y dónde hay
                                riesgo: los mensajes que contestáis a mano, los datos que se copian de
                                una herramienta a otra, la IA que ya usa tu equipo sin criterio común.
                            </p>
                            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, margin: 0, maxWidth: 620 }}>
                                Sales con un diagnóstico honesto: <strong style={{ color: "var(--color-text-main)" }}>qué formar,
                                qué poner en regla y qué automatizar primero</strong> — y qué no te compensa
                                hacer. Sí, a veces la respuesta es «esto déjalo como está», y también te
                                lo digo gratis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Las tres líneas */}
            {lineas.map((l) => (
                <section
                    key={l.num}
                    style={l.oscuro
                        ? { padding: "4.5rem 0", background: "linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)" }
                        : { padding: "4.5rem 0" }}
                >
                    <div className="container" style={{ maxWidth: 1000 }}>
                        <div className="ct-linea-head">
                            <span className="ct-linea-num" aria-hidden="true">{l.num}</span>
                            <div>
                                <h2 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)",
                                    fontWeight: 600,
                                    color: l.oscuro ? "#faf6ef" : "var(--color-text-main)",
                                    margin: 0,
                                    lineHeight: 1.15,
                                }}>
                                    {l.titulo}
                                </h2>
                                <p className="mono-label" style={{ color: l.oscuro ? "#f6c39c" : "var(--color-primary)", marginTop: "0.4rem" }}>
                                    {l.lema}
                                </p>
                            </div>
                        </div>

                        <div className="ct-pasos">
                            {l.pasos.map((p) => (
                                <div key={p.n} className={`ct-paso ${l.oscuro ? "ct-paso-oscuro" : ""}`}>
                                    <span className="ct-paso-letra">{l.num}{p.n}</span>
                                    <h3 style={{
                                        fontFamily: "var(--font-display, serif)",
                                        fontSize: "1.2rem",
                                        fontWeight: 600,
                                        color: l.oscuro ? "#faf6ef" : "var(--color-text-main)",
                                        margin: "0.4rem 0 0.5rem",
                                        lineHeight: 1.3,
                                    }}>
                                        {p.t}
                                    </h3>
                                    <p style={{
                                        color: l.oscuro ? "rgba(250,246,239,0.85)" : "var(--color-text-muted)",
                                        lineHeight: 1.65,
                                        margin: 0,
                                        fontSize: "0.95rem",
                                    }}>
                                        {p.d}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="ct-linea-enlaces">
                            {l.enlaces.map((e) => (
                                <Link
                                    key={e.texto}
                                    href={e.href}
                                    style={{ color: l.oscuro ? "#f6c39c" : "var(--color-primary)", fontWeight: 600, fontSize: "0.95rem" }}
                                >
                                    {e.texto} →
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Lo que no cambia nunca */}
            <section style={{ padding: "4.5rem 0", background: "#f8dfc6" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="mono-label" style={{ color: "rgba(28,25,23,0.6)" }}>Da igual el camino</span>
                        <h2 style={{
                            fontFamily: "var(--font-display, serif)",
                            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                            fontWeight: 600,
                            color: "#1c1917",
                            margin: "0.7rem 0 0",
                            lineHeight: 1.2,
                            letterSpacing: "-0.01em",
                        }}>
                            Lo que no cambia nunca
                        </h2>
                    </div>
                    <div className="ct-garantias">
                        {garantias.map((g) => (
                            <div key={g.t} className="ct-garantia">
                                <i className={`fa-solid ${g.icon}`}></i>
                                <h3>{g.t}</h3>
                                <p>{g.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Encajamos / No encajamos — descalificar también vende */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{ marginBottom: "2.5rem" }}>
                        <span className="kicker-mono">Antes de llamarme</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            Cuándo encajamos — y cuándo no
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                            Prefiero decírtelo antes de que inviertas media hora en una llamada.
                            Esto no es para todo el mundo, y descubrirlo tarde nos sale caro a los dos.
                        </p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                        <div style={{ background: "var(--color-card-bg, #fff)", border: "1px solid var(--color-border)", borderRadius: "18px", padding: "2rem" }}>
                            <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: "1.2rem" }}>
                                Encajamos si
                            </p>
                            <ul style={{ display: "flex", flexDirection: "column", gap: "0.9rem", margin: 0, padding: 0, listStyle: "none" }}>
                                {[
                                    "Tienes tareas repetitivas que os comen horas cada semana y quieres quitártelas de encima.",
                                    "Te toca cumplir el Reglamento de IA y prefieres resolverlo con formación práctica y papeles en regla, no con un máster.",
                                    "Quieres precio cerrado por escrito antes de empezar, no una tarifa por horas abierta.",
                                    "Puedes dedicarle al proyecto media hora a la semana y decidir sin pasar por un comité.",
                                    "Prefieres empezar pequeño — una automatización, una formación — y ampliar solo si funciona.",
                                ].map((t) => (
                                    <li key={t} style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start", color: "var(--color-text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                                        <i className="fa-solid fa-check" style={{ color: "var(--color-primary)", marginTop: "0.25rem", flexShrink: 0 }}></i>
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ background: "var(--color-bg-secondary)", border: "1px solid var(--color-border)", borderRadius: "18px", padding: "2rem" }}>
                            <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "1.2rem" }}>
                                No encajamos si
                            </p>
                            <ul style={{ display: "flex", flexDirection: "column", gap: "0.9rem", margin: 0, padding: 0, listStyle: "none" }}>
                                {[
                                    "Buscas lo más barato del mercado sin importar si dentro de tres meses sigue funcionando.",
                                    "Quieres «poner IA» para contarlo, no para usarla.",
                                    "Esperas que todo cambie sin cambiar nada de cómo trabajáis hoy.",
                                    "Nadie va a dedicarle ni una hora al proyecto después de firmar.",
                                    "Necesitas un informe de 80 páginas para un comité — eso es otra liga, y otro precio.",
                                ].map((t) => (
                                    <li key={t} style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start", color: "var(--color-text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                                        <i className="fa-solid fa-xmark" style={{ color: "rgba(28,25,23,0.35)", marginTop: "0.25rem", flexShrink: 0 }}></i>
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
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

            {/* CTA final */}
            <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", textAlign: "center" }}>
                <div className="container">
                    <p style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)",
                        fontWeight: 600,
                        color: "var(--color-text-main)",
                        lineHeight: 1.2,
                        margin: "0 0 1rem",
                        letterSpacing: "-0.02em",
                    }}>
                        El paso 00 es gratis. Empecemos por ahí.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", marginBottom: "1.8rem", fontSize: "1.05rem" }}>
                        30 minutos, sin compromiso: te digo qué camino te toca — o si no te hace falta ninguno.
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pedir mis 30 minutos
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                /* Paso 0 */
                .ct-cero {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    gap: 2rem;
                    align-items: start;
                }
                .ct-cero-num {
                    font-family: var(--font-display, serif);
                    font-size: clamp(3.5rem, 8vw, 6rem);
                    font-weight: 600;
                    line-height: 0.9;
                    color: transparent;
                    -webkit-text-stroke: 2px rgba(234, 88, 12, 0.4);
                    user-select: none;
                }

                /* Cabecera de cada línea */
                .ct-linea-head {
                    display: flex;
                    align-items: center;
                    gap: 1.4rem;
                    margin-bottom: 2rem;
                }
                .ct-linea-num {
                    font-family: var(--font-display, serif);
                    font-size: clamp(2.6rem, 5vw, 4rem);
                    font-weight: 600;
                    line-height: 1;
                    color: transparent;
                    -webkit-text-stroke: 2px rgba(234, 88, 12, 0.45);
                    user-select: none;
                }
                section[style*="linear-gradient"] .ct-linea-num {
                    -webkit-text-stroke-color: rgba(246, 195, 156, 0.6);
                }

                /* Pasos de cada línea */
                .ct-pasos {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.2rem;
                }
                .ct-paso {
                    border-top: 2px solid var(--color-border);
                    padding-top: 1.1rem;
                }
                .ct-paso-oscuro {
                    border-top-color: rgba(246, 195, 156, 0.35);
                }
                .ct-paso-letra {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: var(--color-primary);
                }
                .ct-paso-oscuro .ct-paso-letra {
                    color: #f6c39c;
                }

                .ct-linea-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem 2rem;
                    margin-top: 1.8rem;
                }

                /* Garantías */
                .ct-garantias {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .ct-garantia i {
                    color: var(--color-primary);
                    font-size: 1.4rem;
                }
                .ct-garantia h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #1c1917;
                    margin: 0.7rem 0 0.4rem;
                    line-height: 1.3;
                }
                .ct-garantia p {
                    color: rgba(28,25,23,0.72);
                    font-size: 0.9rem;
                    line-height: 1.6;
                    margin: 0;
                }

                /* FAQ */
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

                @media (max-width: 900px) {
                    .ct-pasos { grid-template-columns: 1fr; gap: 1.4rem; }
                    .ct-garantias { grid-template-columns: repeat(2, 1fr); gap: 1.6rem; }
                }
                @media (max-width: 600px) {
                    h1 br { display: none; }
                    .ct-cero { grid-template-columns: 1fr; gap: 0.6rem; }
                    .ct-garantias { grid-template-columns: 1fr; }
                }
            `}</style>
        </main>
    );
}
