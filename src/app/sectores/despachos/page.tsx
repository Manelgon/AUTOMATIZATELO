import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioCurso from "@/components/FormularioCurso";

export const metadata: Metadata = {
    title: "Formación en IA para Despachos",
    description:
        "Formación en IA para administradores de fincas, gestorías, asesorías y abogados: con los casos del despacho y el secreto profesional a salvo.",
    alternates: { canonical: "https://automatizatelo.com/sectores/despachos" },
    openGraph: {
        title: "IA para tu despacho: formación práctica con tus casos reales",
        description: "Talleres para el equipo, protección del secreto profesional y la documentación de las medidas del Art. 4. Desde 600€.",
        url: "https://automatizatelo.com/sectores/despachos",
    },
};

const faqs = [
    {
        question: "¿Podemos usar ChatGPT con datos de clientes del despacho?",
        answer: "Así, en general: no. Un despacho vive del secreto profesional y de datos personales especialmente delicados — meterlos en una cuenta gratuita de ChatGPT es el error más común y el más caro. La formación enseña exactamente eso: qué herramientas y planes sí ofrecen garantías, cómo anonimizar antes de preguntar, y qué no debe salir del despacho nunca. Es la diferencia entre usar la IA y usarla sin jugarse el cliente.",
    },
    {
        question: "¿La formación es genérica o adaptada al despacho?",
        answer: "Adaptada — y esa es la gracia. Los ejercicios se hacen con los casos del despacho: redactar comunicaciones a clientes o comunidades, resumir documentación, preparar reuniones, plantillas de respuesta. Conozco el sector desde dentro: construyo paneles que despachos de administración de fincas usan a diario desde enero de 2026, y he producido la formación de AFCademIA para administradores de fincas. Y para un despacho de abogados aplica igual: mismos riesgos de confidencialidad, mismos flujos de documentación — con sus escritos y su jerga.",
    },
    {
        question: "¿Cuánto cuesta?",
        answer: "Las tarifas generales de formación: el bloque de alfabetización del Art. 4 (4-8 horas, toda la plantilla), desde 600€. Un taller intensivo de un día adaptado al despacho, entre 900€ y 1.400€. Un programa de 16 horas en varias semanas, desde 2.400€. Con certificado nominal y registro formativo fechado siempre incluidos.",
    },
    {
        question: "¿Esto cubre la obligación del Art. 4 del AI Act?",
        answer: "Sí. Si el equipo del despacho usa IA — aunque sea por su cuenta — el despacho actúa como responsable del despliegue y debe adoptar medidas para la alfabetización de su personal desde febrero de 2025. Es un deber de medios, no de resultado: no se exige garantizar un nivel concreto en cada persona, sino poder demostrar que se hizo lo razonable. La formación deja esa evidencia: certificados nominales y registro formativo fechado.",
    },
    {
        question: "¿Presencial o en remoto?",
        answer: "Como prefiera el despacho: presencial en Barcelona y alrededores, en remoto en directo para toda España, o como curso e-learning (SCORM) instalado en vuestra plataforma para que cada persona lo haga a su ritmo con registro individual.",
    },
    {
        question: "¿Cuánto se tarda en organizarlo?",
        answer: "La formación se agenda en semanas y se imparte en días: un taller de un día se cierra con dos o tres semanas de margen para preparar los casos del despacho. Si además queréis el curso e-learning, la producción va aparte y suele llevar de tres a seis semanas.",
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

const dolores = [
    {
        titulo: "El email se come el día",
        desc: "Comunicaciones a clientes, vecinos o la administración, una a una. La IA bien usada redacta el grueso — pero hay que saber pedírselo y revisar como profesional.",
    },
    {
        titulo: "Datos de clientes en cuentas gratuitas",
        desc: "El equipo ya usa ChatGPT — y en un despacho eso obliga a saber qué se puede escribir, con qué cuenta y bajo qué condiciones. Sin política, cada chat lo decide quien lo escribe.",
    },
    {
        titulo: "Documentación infinita",
        desc: "Actas, contratos, normativa, expedientes. Resumir, comparar y extraer lo relevante es de lo que mejor hace la IA — con el método correcto.",
    },
    {
        titulo: "El Art. 4 también obliga al despacho",
        desc: "Si el personal usa IA, el despacho debe tomar medidas para su alfabetización y poder acreditarlas. Y quien asesora en cumplimiento no puede permitirse incumplirlo.",
    },
];

const bloques = [
    {
        num: "01",
        titulo: "Taller con los casos del despacho",
        desc: "Un día con lo vuestro: comunicaciones, resúmenes de documentación, redacción de escritos y plantillas por tipo de cliente. Cada persona sale con sus flujos montados.",
    },
    {
        num: "02",
        titulo: "Secreto profesional y datos",
        desc: "Qué herramientas y planes dan garantías, qué se anonimiza antes de preguntar y qué no sale del despacho jamás. El módulo que separa la IA útil de la temeraria.",
    },
    {
        num: "03",
        titulo: "Alfabetización del Art. 4",
        desc: "El bloque de cumplimiento para toda la plantilla, con certificado nominal y registro formativo fechado — el expediente que el despacho guarda.",
    },
    {
        num: "04",
        titulo: "Curso e-learning (SCORM)",
        desc: "La formación producida como curso e instalada donde el despacho quiera, para nuevas incorporaciones y repaso, con registro individual.",
    },
];

const sistemas = [
    { href: "/sistemas/documentos", titulo: "Documentos que se leen solos", d: "Facturas, escrituras y expedientes extraídos con IA y registrados sin picar datos." },
    { href: "/sistemas/chatbots-whatsapp", titulo: "Atención que no interrumpe", d: "Las dudas repetidas de clientes, resueltas 24/7 por WhatsApp — con escalado al equipo." },
    { href: "/sistemas/integracion", titulo: "Herramientas conectadas", d: "El programa del despacho, el correo y la facturación pasándose los datos solos." },
    { href: "/cumplimiento", titulo: "El despacho, en regla", d: "Política de uso de IA y la documentación de las medidas del Art. 4 — con el secreto profesional por delante." },
];

export default function DespachosPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <Header />

            {/* Hero con foto + velo lateral y formulario translúcido */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/despachos.webp"
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0 }}
                />
                <div aria-hidden="true" style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(90deg, rgba(28,25,23,0.62) 0%, rgba(28,25,23,0.42) 38%, rgba(28,25,23,0.12) 65%, transparent 85%), linear-gradient(180deg, rgba(28,25,23,0.18) 0%, transparent 40%)",
                }} />
                <div className="container fc-hero-grid fh-foto" style={{ position: "relative", zIndex: 2 }}>
                    <div>
                        <span className="kicker-mono" style={{ color: "#f6c39c" }}>
                            <i className="fa-solid fa-briefcase" style={{ marginRight: "0.6rem" }}></i>
                            Formación IA · Despachos profesionales
                        </span>
                        <h1 style={{
                            fontFamily: "var(--font-display, serif)",
                            fontSize: "clamp(2rem, 4.5vw, 3rem)",
                            fontWeight: 600,
                            lineHeight: 1.12,
                            letterSpacing: "-0.02em",
                            color: "#faf6ef",
                            margin: "1rem 0 1.2rem",
                            textShadow: "0 2px 30px rgba(28,25,23,0.45)",
                        }}>
                            IA para tu despacho:{" "}
                            <span style={{ color: "#f6c39c" }}>sin jugarte los datos de nadie</span>
                        </h1>
                        <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: 0, maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                            Formación práctica para administradores de fincas, gestorías, asesorías
                            y abogados: con vuestros casos reales, con el secreto profesional por
                            delante y con la documentación de las medidas del Art. 4 que un
                            despacho debe poder enseñar.
                        </p>
                    </div>

                    {/* Captura en el hero: el despacho viaja como origen del lead */}
                    <FormularioCurso
                        origen="Sector · Despachos profesionales"
                        etiquetaPersonas="Personas en el despacho"
                        etiquetaOpciones="¿Qué te urge más?*"
                        opciones={[
                            "Formar al equipo con nuestros casos",
                            "Poner orden con los datos de clientes",
                            "Cubrir el Art. 4 con evidencia",
                            "Montar sistemas, no solo formar",
                            "Aún no lo tengo claro",
                        ]}
                    />
                </div>
            </section>

            {/* Las seis puertas por identidad — pestañas pegadas al hero */}
            <nav aria-label="Sectores" className="nav-barra">
                <div className="container nav-barra-fila">
                    {[
                        { href: "/sectores/administradores-fincas", label: "Fincas" },
                        { href: "/sectores/despachos", label: "Despachos" },
                        { href: "/formacion/centros-educativos", label: "Centros" },
                        { href: "/sectores/academias", label: "Academias" },
                        { href: "/sectores/rrhh", label: "RRHH" },
                        { href: "/formacion/directivos", label: "Dirección" },
                    ].map((t, i) => {
                        const activa = t.href === "/sectores/despachos";
                        return (
                            <Link
                                key={t.href}
                                href={t.href}
                                aria-current={activa ? "page" : undefined}
                                className={`nav-barra-item ${activa ? "nav-barra-activa" : ""}`}
                            >
                                {t.label}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* En corto — split degradado, como el curso estrella */}
            <section aria-label="En corto" style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                <div className="container de2-mitades">
                    <div className="de2-mitad">
                        <span className="de2-marca" aria-hidden="true">§</span>
                        <div className="de2-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>En corto</span>
                            <h2 className="de2-titulo">
                                La IA en el despacho, <span style={{ color: "#f6c39c" }}>con el secreto profesional por delante</span>
                            </h2>
                            <p className="de2-sub">
                                Formación con vuestros casos y el foco en la confidencialidad: qué
                                herramientas dan garantías, qué se anonimiza antes de preguntar y qué
                                información no debería salir del despacho — más la documentación de
                                las medidas de alfabetización, que hay que poder enseñar.
                            </p>
                            <div className="de2-datos">
                                <span>Presencial · remoto · SCORM</span>
                                <span>Certificado nominal + registro fechado</span>
                                <span>Con los casos de tu despacho</span>
                                <span className="de2-dato-precio">Desde 600 € · taller de día 900–1.400 €</span>
                            </div>
                            <div className="de2-enlaces">
                                <a href="#programa" className="de2-enlace">Ver qué incluye ↓</a>
                                <Link href="/precios#formar" className="de2-enlace">Ver la tabla de precios →</Link>
                                <Link href="/diagnostico" className="de2-enlace">¿Qué automatizarías tú? Test de 3 min →</Link>
                            </div>
                            <p className="de2-nota">
                                ¿Solo necesitáis el mínimo legal? La{" "}
                                <Link href="/formacion/ai-act">alfabetización del Art. 4, desde 600 € →</Link>
                            </p>
                        </div>
                    </div>
                    <div className="de2-mitad">
                        <div className="de2-cuerpo">
                            <div className="de2-caso">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>No vengo de fuera del sector</span>
                                <h3>Construyo lo que enseño</h3>
                                <p>Los paneles con los que despachos de administración de fincas trabajan a diario desde enero de 2026 son míos — y la formación de AFCademIA para administradores, también.</p>
                            </div>
                            <div className="de2-caso de2-caso-2">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>Y aplica igual</span>
                                <h3>A gestorías, asesorías y abogados</h3>
                                <p>Mismos riesgos de confidencialidad y mismos flujos de documentación — cambian los escritos y la jerga, no el método.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Precios de un vistazo — banda de cifras */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917" }}>
                <div className="container">
                    <div className="de2-cifras">
                        <div className="de2-cifra">
                            <span className="de2-cifra-num">desde 600 €</span>
                            <span className="de2-cifra-lab">Alfabetización del Art. 4</span>
                        </div>
                        <div className="de2-cifra">
                            <span className="de2-cifra-num">900 – 1.400 €</span>
                            <span className="de2-cifra-lab">Taller de un día con vuestros casos</span>
                        </div>
                        <div className="de2-cifra">
                            <span className="de2-cifra-num">desde 2.400 €</span>
                            <span className="de2-cifra-lab">Programa de 16 h en varias semanas</span>
                        </div>
                        <div className="de2-cifra">
                            <span className="de2-cifra-num">Certificado</span>
                            <span className="de2-cifra-lab">Nominal y con registro fechado</span>
                        </div>
                    </div>
                    <p className="de2-cifras-pie">
                        No se paga por alumno, sino por sesión —{" "}
                        <Link href="/precios#formar">Ver la tabla de precios →</Link>
                    </p>
                </div>
            </section>

            {/* El problema — filas tipo índice en tinta */}
            <section style={{ padding: "3.8rem 0", background: "#1c1917" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>¿Te suena?</span>
                        <h2 className="de2-h2">Lo que pasa en un despacho con la IA</h2>
                        <p className="de2-h2-sub">
                            Cuatro situaciones que veo en gestorías, asesorías y administraciones de
                            fincas. Probablemente reconozcas más de una.
                        </p>
                    </div>
                    <div>
                        {dolores.map((d, i) => (
                            <div key={d.titulo} className="de2-dolor">
                                <div className="de2-dolor-izq">
                                    <span className="de2-dolor-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                                    <h3>{d.titulo}</h3>
                                </div>
                                <p>{d.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Qué incluye — sobre foto con velo */}
            <section id="programa" style={{ position: "relative", overflow: "hidden", padding: "4.5rem 0", background: "#1c1917", scrollMarginTop: "6rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/auditoria.webp"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
                />
                <div aria-hidden="true" style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(90deg, rgba(28,25,23,0.8) 0%, rgba(28,25,23,0.64) 45%, rgba(28,25,23,0.42) 75%, rgba(28,25,23,0.28) 100%)",
                }} />
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="de2-cab">
                        <span className="mono-label de2-cab-kicker">Qué incluye</span>
                        <h2 className="de2-cab-titulo">El programa, bloque a bloque</h2>
                        <p className="de2-cab-sub">
                            Se contrata entero o por bloques: hay despachos que solo necesitan el 03.
                        </p>
                    </div>
                    <div className="de2-bloques">
                        {bloques.map((b) => (
                            <div key={b.num} className="de2-bloque">
                                <span className="de2-bloque-num mono-label">{b.num}</span>
                                <h3>{b.titulo}</h3>
                                <p>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Y además de formar — split tinta con los sistemas */}
            <section style={{ padding: "3.8rem 0", background: "#1c1917", borderTop: "1px solid rgba(250,246,239,0.08)" }}>
                <div className="container de2-sis-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Y además de formar</span>
                        <h2 className="de2-sis-titulo">Lo que un despacho se puede dejar montado</h2>
                        <p className="de2-sis-sub">
                            La formación es la puerta; el ahorro grande llega cuando el despacho
                            además se monta sistemas. Los que más rinden en gestorías, asesorías y
                            administraciones de fincas.
                        </p>
                    </div>
                    <div>
                        {sistemas.map((s) => (
                            <Link key={s.href} href={s.href} className="de2-sis">
                                <div className="de2-sis-cab">
                                    <h3>{s.titulo}</h3>
                                    <span className="de2-sis-f">→</span>
                                </div>
                                <p>{s.d}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ — split en tinta con el CTA integrado */}
            <section style={{ padding: "4rem 0", background: "#1c1917", borderTop: "1px solid rgba(250,246,239,0.08)" }}>
                <div className="container de2-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem", color: "#faf6ef" }}>
                            Preguntas frecuentes
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.65, margin: "0 0 1.6rem", fontSize: "0.95rem" }}>
                            30 minutos gratis: me cuentas cómo trabaja el despacho y te digo qué
                            formación toca, en qué formato y qué evidencia guardar.
                        </p>
                        <Link href="/#contact" className="de2-cta">Pedir mis 30 minutos →</Link>
                    </div>
                    <div>
                        {faqs.map((f) => (
                            <details key={f.question} className="fd-faq" name="faq-despachos">
                                <summary>
                                    <span>{f.question}</span>
                                    <i className="fas fa-chevron-down"></i>
                                </summary>
                                <p style={{ padding: "0 0.4rem 1.5rem", color: "rgba(250,246,239,0.75)", lineHeight: 1.7, margin: 0 }}>{f.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
                .fh-foto .fc-card {
                    background: rgba(28, 25, 23, 0.62);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                }
                @media (max-width: 900px) {
                }
                .de2-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .de2-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .de2-marca {
                    position: absolute;
                    top: 0.6rem;
                    right: 1.4rem;
                    font-family: var(--font-display, serif);
                    font-size: clamp(5rem, 9vw, 8rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .de2-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3rem 0;
                    width: 100%;
                }
                .de2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .de2-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.65;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .de2-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .de2-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .de2-datos .de2-dato-precio { color: #f6c39c; }
                .de2-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem 1.3rem;
                    margin-top: 1rem;
                }
                .de2-enlace {
                    display: inline-block;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .de2-enlace:hover { color: #faf6ef; transform: translateX(6px); }
                .de2-nota {
                    margin: 0.6rem 0 0;
                    font-size: 0.85rem;
                    line-height: 1.6;
                    color: rgba(250, 246, 239, 0.6);
                }
                .de2-nota a { color: #f6c39c; font-weight: 600; }
                .de2-nota a:hover { color: #faf6ef; }
                .de2-caso {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                }
                .de2-caso-2 {
                    border-top: 1px solid rgba(250, 246, 239, 0.16);
                    padding-top: 1.3rem;
                    margin-top: 1.3rem;
                }
                .de2-caso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.2;
                }
                .de2-caso p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                @media (max-width: 800px) {
                    .de2-mitades { grid-template-columns: 1fr; gap: 0; }
                    .de2-cuerpo { padding: 2.2rem 0; }
                }
                .de2-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .de2-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .de2-cifra-num {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .de2-cifra-lab {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                .de2-cifras-pie {
                    text-align: center;
                    margin: 1.8rem 0 0;
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.65);
                }
                .de2-cifras-pie a { color: #f6c39c; font-weight: 600; }
                .de2-cifras-pie a:hover { color: #faf6ef; }
                @media (max-width: 800px) {
                    .de2-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }
                .de2-h2 {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
                    font-weight: 600;
                    line-height: 1.2;
                    color: #faf6ef;
                    margin: 1rem 0 0.6rem;
                    letter-spacing: -0.01em;
                }
                .de2-h2-sub {
                    color: rgba(250, 246, 239, 0.8);
                    line-height: 1.7;
                    margin: 0;
                    max-width: 560px;
                }
                .de2-dolor {
                    display: grid;
                    grid-template-columns: 0.46fr 0.54fr;
                    gap: 2.5rem;
                    align-items: baseline;
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                    padding: 1.5rem 0;
                }
                .de2-dolor:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .de2-dolor-izq {
                    display: flex;
                    align-items: baseline;
                    gap: 1.1rem;
                }
                .de2-dolor-num {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 3vw, 2.4rem);
                    font-weight: 700;
                    line-height: 1;
                    color: rgba(246, 195, 156, 0.4);
                    flex-shrink: 0;
                }
                .de2-dolor h3 {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.2rem, 2.2vw, 1.55rem);
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.25;
                }
                .de2-dolor p {
                    color: rgba(250, 246, 239, 0.78);
                    line-height: 1.65;
                    font-size: 0.95rem;
                    margin: 0;
                }
                @media (max-width: 800px) {
                    .de2-dolor { grid-template-columns: 1fr; gap: 0.6rem; }
                }
                .de2-cab {
                    text-align: center;
                    max-width: 660px;
                    margin: 0 auto 2.4rem;
                }
                .de2-cab-kicker { color: #f6c39c; }
                .de2-cab-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 3.2vw, 2.4rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0.9rem 0 0.7rem;
                    text-shadow: 0 2px 30px rgba(28,25,23,0.45);
                }
                .de2-cab-sub {
                    color: rgba(250, 246, 239, 0.75);
                    font-size: 0.95rem;
                    line-height: 1.65;
                    margin: 0;
                }
                .de2-bloques {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem 2.4rem;
                }
                .de2-bloque {
                    display: flex;
                    flex-direction: column;
                    gap: 0.35rem;
                    border-top: 1px solid rgba(250, 246, 239, 0.2);
                    padding-top: 1rem;
                }
                .de2-bloque-num { color: #f6c39c; }
                .de2-bloque h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.25;
                }
                .de2-bloque p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.9rem;
                    margin: 0;
                }
                @media (max-width: 900px) {
                    .de2-bloques { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 600px) {
                    .de2-bloques { grid-template-columns: 1fr; gap: 1.4rem; }
                }
                .de2-sis-grid, .de2-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .de2-sis-grid, .de2-faq-grid { grid-template-columns: 1fr; gap: 1.8rem; }
                }
                .de2-sis-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 1.9rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    margin: 0.8rem 0 0.6rem;
                }
                .de2-sis-sub {
                    color: rgba(250, 246, 239, 0.7);
                    line-height: 1.65;
                    font-size: 0.93rem;
                    margin: 0;
                }
                .de2-sis {
                    display: block;
                    color: inherit;
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                    padding: 1.1rem 0;
                }
                .de2-sis:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .de2-sis-cab {
                    display: flex;
                    align-items: baseline;
                    justify-content: space-between;
                    gap: 1rem;
                }
                .de2-sis h3 {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.1rem, 2vw, 1.35rem);
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.25;
                    transition: color 0.2s ease;
                }
                .de2-sis:hover h3 { color: #f6c39c; }
                .de2-sis-f {
                    color: #f6c39c;
                    font-weight: 600;
                    flex-shrink: 0;
                    display: inline-block;
                    transition: transform 0.25s ease;
                }
                .de2-sis:hover .de2-sis-f { transform: translateX(6px); }
                .de2-sis p {
                    color: rgba(250, 246, 239, 0.78);
                    line-height: 1.6;
                    font-size: 0.9rem;
                    margin: 0.3rem 0 0;
                    max-width: 560px;
                }
                .de2-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .de2-cta:hover { background: #faf6ef; transform: translateY(-2px); }
                .fd-faq { border-top: 1px solid rgba(250, 246, 239, 0.14); }
                .fd-faq:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .fd-faq summary {
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
                    color: #faf6ef;
                    line-height: 1.3;
                    transition: color 0.2s ease, padding-left 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .fd-faq summary::-webkit-details-marker { display: none; }
                .fd-faq summary:hover { color: #f6c39c; padding-left: 1rem; }
                .fd-faq summary i { color: #f6c39c; font-size: 0.8rem; flex-shrink: 0; transition: transform 0.3s ease; }
                .fd-faq[open] summary i { transform: rotate(180deg); }
            `}</style>
        </main>
    );
}
