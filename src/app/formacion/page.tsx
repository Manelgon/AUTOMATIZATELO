import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioCurso from "@/components/FormularioCurso";
import FormacionTabs from "@/components/FormacionTabs";

export const metadata: Metadata = {
    title: "Formación en IA para Empresas | AI Act",
    description:
        "Forma a tu equipo y cumple el Art. 4 del Reglamento Europeo de IA: talleres in-company, gobernanza y cursos e-learning a medida. Toda España.",
    alternates: { canonical: "https://automatizatelo.com/formacion" },
    openGraph: {
        title: "Formación en IA para Empresas y Equipos",
        description: "Talleres in-company, gobernanza de IA y cursos e-learning a medida. El AI Act ya exige formar a tu plantilla.",
        url: "https://automatizatelo.com/formacion",
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
        question: "¿Cuánto cuesta formar a mi equipo?",
        answer: "Un taller intensivo de un día (8 horas) cuesta entre 900€ y 1.400€. Un programa in-company de 16 horas repartidas en varias semanas, desde 2.400€. El bloque de alfabetización del Art. 4 (4-8 horas), desde 600€. Y un curso e-learning a medida en SCORM para tu plataforma, desde 1.900€. El precio final depende del número de participantes y la modalidad, y se cierra en la propuesta.",
    },
    {
        question: "¿Qué evidencia queda para acreditar el Art. 4?",
        answer: "Cada participante recibe un certificado nominal de aprovechamiento, y la empresa se queda con el registro formativo fechado (contenidos, horas y asistentes) y el material del curso. No existe una certificación oficial del artículo 4 — lo que se acredita ante una inspección es exactamente ese expediente.",
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
    "url": "https://automatizatelo.com/formacion",
    "areaServed": "ES",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
        "telephone": "+34678399182",
    },
};

const incluye = [
    {
        num: "01",
        icon: "fa-chalkboard-user",
        titulo: "Talleres in-company de uso práctico",
        desc: "El equipo aprende con sus propios casos — redactar, resumir, clasificar, preparar informes — no con ejemplos de laboratorio.",
    },
    {
        num: "02",
        icon: "fa-shield-halved",
        titulo: "Gobernanza y política interna de IA",
        desc: "Qué datos no se pegan nunca en una IA, qué herramientas están aprobadas, cómo revisar resultados y cómo documentarlo todo para RGPD y AI Act.",
    },
    {
        num: "03",
        icon: "fa-laptop-file",
        titulo: "Cursos e-learning a medida (SCORM)",
        desc: "Producimos el curso de tu empresa listo para subir a tu plataforma de formación, con evaluaciones y seguimiento.",
    },
];

export default function FormacionIaPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header />

            {/* Hero editorial */}
            <section style={{
                padding: "9rem 0 3.5rem",
                background: "radial-gradient(circle at 20% 20%, rgba(234, 88, 12, 0.07) 0%, transparent 55%)",
            }}>
                <div className="container fc-hero-grid">
                    <div>
                    <span className="kicker-mono">
                        <i className="fa-solid fa-graduation-cap" style={{ marginRight: "0.6rem" }}></i>
                        Formación · Barcelona y toda España
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
                        Formación en IA para{" "}<br /><span style={{ color: "var(--color-primary)" }}>tu empresa, tu despacho o tu claustro</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 620 }}>
                        Equipos, docentes y directivos usando la IA con criterio — y tu organización
                        cumpliendo la normativa europea.
                    </p>
                    </div>

                    {/* Captura en el hero: el curso viaja como origen del lead */}
                    <FormularioCurso origen="Formación in-company" opciones={["Curso estrella: Alfabetización + herramienta", "Alfabetización del Art. 4", "Curso de ChatGPT", "Curso de Copilot 365", "Curso de Gemini + NotebookLM", "Curso de Claude", "Formación para centros educativos", "Sesión ejecutiva para dirección"]} />
                </div>
            </section>

            {/* Salta entre todas las formaciones sin volver atras */}
            <FormacionTabs />

            {/* Qué es + answer capsule */}
            <section style={{ padding: "4rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="kicker-mono">Qué es</span>
                    {/* Answer capsule */}
                    <p style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
                        fontWeight: 600,
                        lineHeight: 1.35,
                        color: "var(--color-text-main)",
                        margin: "1rem 0 1.2rem",
                        letterSpacing: "-0.01em",
                    }}>
                        La formación en IA para empresas capacita a los equipos para usar herramientas
                        de inteligencia artificial con criterio, seguridad y resultados medibles en su
                        trabajo diario.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
                        Y ya no es opcional: el artículo 4 del Reglamento Europeo de IA (Reglamento UE 2024/1689)
                        exige, desde el 2 de febrero de 2025, que las empresas que usan sistemas de IA garanticen
                        un nivel suficiente de <strong style={{ color: "var(--color-text-main)" }}>alfabetización en IA</strong> de
                        su personal. La mayoría de pymes españolas todavía no lo ha resuelto.
                    </p>
                </div>
            </section>

            {/* Por qué ahora — los tres datos que no son marketing */}
            <section style={{ padding: "4rem 0" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <span className="kicker-mono">Por qué ahora</span>
                    <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "1.6rem" }}>
                        Formar al equipo dejó de ser opcional
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
                        <div style={{ border: "1px solid var(--color-border)", borderRadius: "14px", padding: "1.3rem 1.4rem", background: "var(--color-card-bg, #fff)" }}>
                            <p style={{ fontFamily: "var(--font-display, serif)", fontSize: "2rem", fontWeight: 600, color: "var(--color-primary)", margin: "0 0 0.3rem" }}>Feb. 2025</p>
                            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.55, margin: 0 }}>Desde entonces, el Art. 4 del Reglamento Europeo de IA obliga a la alfabetización del personal que usa IA.</p>
                        </div>
                        <div style={{ border: "1px solid var(--color-border)", borderRadius: "14px", padding: "1.3rem 1.4rem", background: "var(--color-card-bg, #fff)" }}>
                            <p style={{ fontFamily: "var(--font-display, serif)", fontSize: "2rem", fontWeight: 600, color: "var(--color-primary)", margin: "0 0 0.3rem" }}>Ago. 2026</p>
                            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.55, margin: 0 }}>El régimen sancionador general ya está en vigor: la obligación tiene consecuencias desde este mes.</p>
                        </div>
                        <div style={{ border: "1px solid var(--color-border)", borderRadius: "14px", padding: "1.3rem 1.4rem", background: "var(--color-card-bg, #fff)" }}>
                            <p style={{ fontFamily: "var(--font-display, serif)", fontSize: "2rem", fontWeight: 600, color: "var(--color-primary)", margin: "0 0 0.3rem" }}>35 M€ / 7%</p>
                            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.55, margin: 0 }}>Techo sancionador del Reglamento (Art. 99). Para una pyme, la multa se modula — pero la evidencia formativa es lo que te defiende.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Qué incluye — filas editoriales */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Qué incluye</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Tres patas, un objetivo: que la IA se use bien
                        </h2>
                    </div>

                    {incluye.map((item) => (
                        <div key={item.num} className="fi-fila">
                            <span className="mono-label" style={{ color: "var(--color-text-muted)" }}>{item.num}</span>
                            <i className={`fa-solid ${item.icon}`} style={{ color: "var(--color-primary)", fontSize: "1.4rem" }}></i>
                            <div>
                                <h3 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
                                    fontWeight: 600,
                                    color: "var(--color-text-main)",
                                    marginBottom: "0.35rem",
                                    lineHeight: 1.25,
                                }}>
                                    {item.titulo}
                                </h3>
                                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, margin: 0, maxWidth: 640 }}>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Curso estrella: el formato que mejor funciona (alfabetización + práctica) */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Curso estrella</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            Alfabetización IA + vuestra herramienta de trabajo
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 680 }}>
                            El formato que mejor funciona: una sesión cubre la alfabetización obligatoria del Art. 4 y la otra aplica la herramienta concreta que ya usa tu equipo, con vuestros casos reales. Se adapta por departamento y nivel.
                        </p>
                    </div>

                    <div className="ce-sesiones">
                        <div className="ce-sesion ce-sesion-1">
                            <div className="ce-cab">
                                <span className="mono-label">Sesión 01</span>
                                <span className="ce-badge">Obligatoria · Art. 4</span>
                            </div>
                            <h3>Alfabetización en IA</h3>
                            <p>Fundamentos, riesgos reales, marco jurídico del Reglamento Europeo, protección de datos y cadena de responsabilidad. El bloque que la ley exige — con certificado nominal y registro formativo.</p>
                            <ul>
                                <li>Qué es (y qué no es) la IA</li>
                                <li>Peligros reales, sin alarmismo</li>
                                <li>Reglamento EU de IA y RGPD</li>
                                <li>Uso responsable y gobernanza interna</li>
                            </ul>
                        </div>
                        <div className="ce-sesion ce-sesion-2">
                            <div className="ce-cab">
                                <span className="mono-label">Sesión 02</span>
                                <span className="ce-badge">Taller 100% práctico</span>
                            </div>
                            <h3>Vuestra herramienta, dominada</h3>
                            <p>Adaptado a vuestro ecosistema real: cada rol sale con casos de uso montados para su trabajo, no con ejemplos de laboratorio.</p>
                            <div className="ce-herramientas">
                                <span className="ce-herr-titulo">Con la herramienta que ya usáis</span>
                            <Link href="/formacion/chatgpt" className="ce-herr ce-herr-link"><span>ChatGPT</span><span className="ce-punto">asistentes por puesto y tareas programadas →</span></Link>
                            <Link href="/formacion/copilot" className="ce-herr ce-herr-link"><span>Microsoft Copilot</span><span className="ce-punto">si vivís en Word, Excel y Outlook →</span></Link>
                            <Link href="/formacion/gemini" className="ce-herr ce-herr-link"><span>Google Gemini + NotebookLM</span><span className="ce-punto">si trabajáis en Workspace →</span></Link>
                            <Link href="/formacion/claude" className="ce-herr ce-herr-link"><span>Claude</span><span className="ce-punto">documentos largos y agentes →</span></Link>
                            </div>
                        </div>
                    </div>

                    <div className="ce-datos">
                        <div className="ce-dato">
                            <span className="mono-label" style={{ color: "var(--color-primary)" }}>Duración</span>
                            <strong>Desde 4 + 4 h</strong>
                            <span className="ce-dato-sub">Adaptable por nivel y equipo</span>
                        </div>
                        <div className="ce-dato">
                            <span className="mono-label" style={{ color: "var(--color-primary)" }}>Cómo se imparte</span>
                            <strong>3 formatos</strong>
                            <span className="ce-dato-sub">Presencial · aula virtual · e-learning (SCORM)</span>
                        </div>
                        <div className="ce-dato">
                            <span className="mono-label" style={{ color: "var(--color-primary)" }}>Acredita</span>
                            <strong>Certificado nominal</strong>
                            <span className="ce-dato-sub">Y registro formativo del Art. 4, fechado</span>
                        </div>
                        <div className="ce-dato">
                            <span className="mono-label" style={{ color: "var(--color-primary)" }}>Inversión</span>
                            <strong>Desde 1.200 €</strong>
                            <span className="ce-dato-sub">Precio cerrado por escrito, sin permanencia</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* El curso se monta con vuestro trabajo — personalización, con foto */}
            <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container fpv-grid" style={{ maxWidth: 1000 }}>
                    <div>
                        <span className="kicker-mono">Formación preparada para tu equipo</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "1rem" }}>
                            El curso se monta con vuestro trabajo
                        </h2>
                        <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1.6rem", maxWidth: 560 }}>
                            Antes de la primera sesión recojo vuestros casos: qué herramientas ya tenéis
                            contratadas, qué tareas comen más horas, qué dudas y qué datos sensibles maneja
                            cada puesto. Los ejercicios del curso salen de ahí — no de una plantilla.
                        </p>
                        <div className="fpv-punto">
                            <i className="fa-solid fa-compass" style={{ color: "var(--color-primary)" }}></i>
                            <div>
                                <h3>Decisiones que salen resueltas</h3>
                                <p>Qué herramientas se aprueban y cuáles no, qué datos no se pegan nunca en una IA y quién revisa qué. El equipo sale con criterio, no solo con trucos.</p>
                            </div>
                        </div>
                        <div className="fpv-punto">
                            <i className="fa-solid fa-box-archive" style={{ color: "var(--color-primary)" }}></i>
                            <div>
                                <h3>Lo que queda después</h3>
                                <p>Certificado nominal por participante, registro formativo fechado, el material del curso y los casos montados en clase — que el equipo sigue usando el lunes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="fpv-foto">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/claustro.webp" alt="Formación de equipos en IA" loading="lazy" />
                    </div>
                </div>
            </section>

            {/* Catálogo: un curso por herramienta, en cards con foto */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Catálogo</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            O elige el curso de una herramienta concreta
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                            Si tenéis claro qué queréis dominar, cada herramienta tiene su curso. Todos con
                            certificado y con vuestros casos reales.
                        </p>
                    </div>

                    <div className="fpc-grid">
                        {[
                            {
                                href: "/formacion/ai-act",
                                foto: "/auditoria.webp",
                                badge: "Obligatoria · Art. 4",
                                titulo: "Alfabetización en IA",
                                desc: "El bloque que exige el Reglamento: riesgos, marco jurídico y uso responsable.",
                                datos: "4–8 h · toda la plantilla",
                            },
                            {
                                href: "/formacion/chatgpt",
                                foto: "/escribiendo-ventana.webp",
                                badge: "El más pedido",
                                titulo: "ChatGPT",
                                desc: "GPTs por puesto, proyectos y tareas programadas. De básico a avanzado.",
                                datos: "1 día · 8 h",
                            },
                            {
                                href: "/formacion/copilot",
                                foto: "/despachos.webp",
                                badge: "Microsoft 365",
                                titulo: "Copilot 365",
                                desc: "Si vivís en Word, Excel, Outlook y Teams: la IA dentro del flujo de oficina.",
                                datos: "1 día · 8 h",
                            },
                            {
                                href: "/formacion/gemini",
                                foto: "/academias.webp",
                                badge: "Google Workspace",
                                titulo: "Gemini + NotebookLM",
                                desc: "Para equipos en Workspace, con NotebookLM para el conocimiento interno.",
                                datos: "1 día · 8 h",
                            },
                            {
                                href: "/formacion/claude",
                                foto: "/equipos-directivos.webp",
                                badge: "Documentos y agentes",
                                titulo: "Claude",
                                desc: "Documentos largos, proyectos y agentes. La herramienta con la que construyo mis propios sistemas.",
                                datos: "1 día · 8 h",
                            },
                        ].map((c) => (
                            <Link key={c.titulo} href={c.href} className="fpc-card">
                                <span className="fpc-foto">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={c.foto} alt={`Curso de ${c.titulo}`} loading="lazy" />
                                    <span className="fpc-badge">{c.badge}</span>
                                </span>
                                <span className="fpc-cuerpo">
                                    <span className="fpc-titulo">{c.titulo}</span>
                                    <span className="fpc-desc">{c.desc}</span>
                                    <span className="fpc-datos mono-label">{c.datos}</span>
                                </span>
                            </Link>
                        ))}
                        <Link href="/#contact" className="fpc-card fpc-card-otra">
                            <span className="fpc-cuerpo" style={{ justifyContent: "center", textAlign: "center", minHeight: "220px" }}>
                                <span className="fpc-titulo" style={{ color: "var(--color-primary)" }}>¿Otra herramienta?</span>
                                <span className="fpc-desc">La formación se monta sobre lo que ya usáis. Cuéntame qué tenéis y te propongo el curso.</span>
                                <span style={{ color: "var(--color-primary)", fontWeight: 600, fontSize: "0.92rem" }}>Cuéntamelo →</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Formatos y precios */}
            <section style={{ padding: "4.5rem 0", background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">Formatos y precios</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            Los precios, a la vista
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                            Publico las tarifas porque es la primera pregunta de todo el mundo.
                            El precio final depende de participantes y modalidad, y se cierra en la propuesta.
                        </p>
                    </div>

                    <div className="fp-tabla-wrap">
                        <table className="fp-tabla">
                            <thead>
                                <tr>
                                    <th>Formato</th>
                                    <th>Duración</th>
                                    <th>Para quién</th>
                                    <th>Inversión</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Taller intensivo</strong><span>Un día, un tema, saliendo con algo montado.</span></td>
                                    <td>1 día · 8 h</td>
                                    <td>Un equipo o departamento</td>
                                    <td>900 – 1.400 €</td>
                                </tr>
                                <tr>
                                    <td><strong>Programa in-company</strong><span>Sesiones en varias semanas, con trabajo real aplicado al puesto entre una y otra.</span></td>
                                    <td>16 h · 4 semanas</td>
                                    <td>Mandos y equipos</td>
                                    <td>Desde 2.400 €</td>
                                </tr>
                                <tr>
                                    <td><strong>Alfabetización en IA (Art. 4)</strong><span>El bloque de cumplimiento: qué es la IA, riesgos, uso responsable y obligaciones.</span></td>
                                    <td>4 – 8 h</td>
                                    <td>Toda la plantilla</td>
                                    <td>Desde 600 €</td>
                                </tr>
                                <tr>
                                    <td><strong>Curso estrella: Alfabetización + herramienta</strong><span>El formato que mejor funciona: el bloque del Art. 4 más el taller práctico con vuestra herramienta.</span></td>
                                    <td>4 + 4 h</td>
                                    <td>Toda la plantilla o por equipos</td>
                                    <td>Desde 1.200 €</td>
                                </tr>
                                <tr>
                                    <td><strong>Curso e-learning a medida (SCORM)</strong><span>Tu formación producida como curso, instalada en tu plataforma para siempre.</span></td>
                                    <td>A medida</td>
                                    <td>Empresas con plataforma propia</td>
                                    <td>Desde 1.900 €</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginTop: "1.5rem", maxWidth: 720 }}>
                        Toda la formación deja <strong style={{ color: "var(--color-text-main)" }}>evidencia documental</strong>:
                        certificado nominal por participante y registro formativo fechado — el expediente con el que
                        la empresa acredita la{" "}
                        <Link href="/formacion/ai-act" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            alfabetización obligatoria del Art. 4 del AI Act
                        </Link>.
                    </p>
                </div>
            </section>

            {/* Versiones por audiencia — el servicio es uno, la versión es la tuya */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">¿Para quién?</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.5rem" }}>
                            La misma formación, en tu idioma
                        </h2>
                        <p className="section-subtitle" style={{ textAlign: "left", margin: 0, maxWidth: 640 }}>
                            El servicio es uno; los casos, los ejemplos y los riesgos cambian según quién eres.
                            Si tu caso es uno de estos, entra por su puerta.
                        </p>
                    </div>
                    <div className="fp-audiencias">
                        {[
                            {
                                href: "/sectores/despachos",
                                icon: "fa-briefcase",
                                titulo: "Despachos profesionales",
                                desc: "Fincas, gestorías y asesorías: con vuestros casos y el secreto profesional por delante.",
                            },
                            {
                                href: "/formacion/centros-educativos",
                                icon: "fa-graduation-cap",
                                titulo: "Centros educativos",
                                desc: "Formación de claustro, política de uso del centro y el Art. 4 con evidencia.",
                            },
                            {
                                href: "/formacion/directivos",
                                icon: "fa-chess-king",
                                titulo: "Directivos",
                                desc: "Sesión ejecutiva de medio día: qué implantar, qué exige la ley y cómo gobernarlo.",
                            },
                        ].map((a) => (
                            <Link key={a.titulo} href={a.href} className="fp-audiencia">
                                <i className={`fa-solid ${a.icon}`} style={{ color: "var(--color-primary)", fontSize: "1.5rem", marginBottom: "0.9rem", display: "block" }}></i>
                                <h3 style={{
                                    fontFamily: "var(--font-display, serif)",
                                    fontSize: "1.25rem",
                                    fontWeight: 600,
                                    color: "var(--color-text-main)",
                                    marginBottom: "0.5rem",
                                    lineHeight: 1.25,
                                }}>
                                    {a.titulo}
                                </h3>
                                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: "0 0 1rem", fontSize: "0.92rem" }}>
                                    {a.desc}
                                </p>
                                <span style={{ color: "var(--color-primary)", fontWeight: 600, fontSize: "0.92rem" }}>Ver mi versión →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quién lo imparte — franja terracota */}
            <section style={{ padding: "4rem 0", background: "linear-gradient(135deg, #b45309 0%, #7c2d12 55%, #431407 100%)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="mono-label" style={{ color: "#f6c39c" }}>Quién lo imparte</span>
                    <p style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
                        fontWeight: 600,
                        lineHeight: 1.35,
                        color: "#faf6ef",
                        margin: "1rem 0 1.2rem",
                        letterSpacing: "-0.01em",
                    }}>
                        No enseño IA de oídas: los sistemas que uso como ejemplo en clase son los
                        que construyo para clientes reales.
                    </p>
                    <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.75, margin: 0 }}>
                        <Link href="/sobre-mi" style={{ color: "#f6c39c", fontWeight: 600 }}>Manel Méndez González</Link>,
                        fundador de Automatizatelo. He publicado cursos completos de IA en plataformas
                        e-learning y formo a equipos con los casos de{" "}
                        <Link href="/casos" style={{ color: "#f6c39c", fontWeight: 600 }}>sistemas que ya funcionan</Link>.
                    </p>
                </div>
            </section>

            {/* Para entidades de formación — producción white-label */}
            <section style={{ padding: "4.5rem 0", borderBottom: "1px solid var(--color-border)" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <span className="kicker-mono">Para entidades de formación</span>
                    <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "1rem" }}>
                        ¿Eres una academia o entidad de formación?
                    </h2>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, maxWidth: 720, marginBottom: "1rem" }}>
                        También produzco cursos <strong style={{ color: "var(--color-text-main)" }}>con tu marca</strong>:
                        tú pones el catálogo y la certificación, yo produzco el contenido de IA — guion, materiales,
                        vídeo y empaquetado SCORM listo para tu plataforma. Tu alumno nunca sabe que existo.
                    </p>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, maxWidth: 720, margin: 0 }}>
                        Es lo que ya hago con plataformas e-learning reales: cursos completos de IA publicados y en venta.
                        Producción desde 1.900€ por curso, o licencia de contenido ya producido — el proceso completo
                        está en la página de{" "}
                        <Link href="/formacion" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            producción de cursos SCORM
                        </Link>.{" "}
                        <Link href="/#contact" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                            Cuéntame qué necesita tu catálogo
                        </Link>.
                    </p>
                </div>
            </section>

            {/* FAQ — filas editoriales */}
            <section style={{ padding: "4.5rem 0" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="kicker-mono">FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: 0 }}>
                            Preguntas frecuentes
                        </h2>
                    </div>
                    {faqs.map((f) => (
                        <details key={f.question} className="fi-faq">
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
                        margin: "0 0 1.8rem",
                        letterSpacing: "-0.02em",
                    }}>
                        ¿Formamos a tu equipo?
                    </p>
                    <Link href="/#contact" className="btn btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.4rem" }}>
                        Pide tu consulta gratuita de 30 minutos
                    </Link>
                </div>
            </section>

            <Footer />

            <style>{`
                .fp-audiencias {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.2rem;
                    align-items: stretch;
                }
                .fp-audiencia {
                    display: flex;
                    flex-direction: column;
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    padding: 1.8rem 1.6rem;
                    color: inherit;
                    transition: transform 0.25s ease, border-color 0.25s ease;
                }
                .fp-audiencia:hover {
                    transform: translateY(-4px);
                    border-color: rgba(234, 88, 12, 0.4);
                }
                @media (max-width: 800px) {
                    .fp-audiencias { grid-template-columns: 1fr; }
                }
                .fpv-grid {
                    display: grid;
                    grid-template-columns: 1.15fr 1fr;
                    gap: 3rem;
                    align-items: center;
                }
                .fpv-punto {
                    display: grid;
                    grid-template-columns: 2rem 1fr;
                    gap: 0.8rem;
                    align-items: baseline;
                    padding: 1.1rem 0;
                    border-top: 1px solid var(--color-border);
                }
                .fpv-punto:last-of-type { padding-bottom: 0; }
                .fpv-punto i { font-size: 1.15rem; }
                .fpv-punto h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    margin: 0 0 0.3rem;
                    line-height: 1.3;
                }
                .fpv-punto p {
                    color: var(--color-text-muted);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                .fpv-foto {
                    border-radius: var(--radius-md, 18px);
                    overflow: hidden;
                    box-shadow: var(--shadow-card);
                    border: 1px solid var(--color-border);
                }
                .fpv-foto img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    min-height: 320px;
                    object-fit: cover;
                }
                @media (max-width: 800px) {
                    .fpv-grid { grid-template-columns: 1fr; gap: 1.8rem; }
                    .fpv-foto img { min-height: 220px; }
                }
                .fpc-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.3rem;
                }
                .fpc-card {
                    display: flex;
                    flex-direction: column;
                    background: var(--color-card-bg);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-md);
                    box-shadow: var(--shadow-card);
                    overflow: hidden;
                    color: inherit;
                    transition: transform 0.25s ease, border-color 0.25s ease;
                }
                .fpc-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(234, 88, 12, 0.4);
                }
                .fpc-foto {
                    position: relative;
                    display: block;
                    aspect-ratio: 16 / 10;
                    overflow: hidden;
                }
                .fpc-foto img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .fpc-card:hover .fpc-foto img { transform: scale(1.05); }
                .fpc-badge {
                    position: absolute;
                    top: 0.7rem;
                    left: 0.7rem;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.62rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    background: rgba(28, 25, 23, 0.85);
                    color: #f6c39c;
                    padding: 0.3rem 0.65rem;
                    border-radius: 6px;
                }
                .fpc-cuerpo {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                    padding: 1.15rem 1.25rem 1.3rem;
                    flex: 1;
                }
                .fpc-titulo {
                    font-family: var(--font-display, serif);
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    line-height: 1.25;
                }
                .fpc-desc {
                    font-size: 0.88rem;
                    color: var(--color-text-muted);
                    line-height: 1.55;
                    flex: 1;
                }
                .fpc-datos { color: var(--color-text-muted); }
                .fpc-card-otra {
                    border-style: dashed;
                    background: transparent;
                    box-shadow: none;
                }
                @media (max-width: 900px) {
                    .fpc-grid { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 600px) {
                    .fpc-grid { grid-template-columns: 1fr; }
                }
                .fp-tabla-wrap {
                    overflow-x: auto;
                }
                .fp-tabla {
                    width: 100%;
                    border-collapse: collapse;
                    min-width: 640px;
                }
                .fp-tabla th {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--color-text-muted);
                    text-align: left;
                    padding: 0.8rem 1rem;
                    border-bottom: 1px solid var(--color-border);
                }
                .fp-tabla td {
                    padding: 1.2rem 1rem;
                    border-bottom: 1px solid var(--color-border);
                    color: var(--color-text-muted);
                    vertical-align: top;
                    line-height: 1.5;
                    font-size: 0.95rem;
                }
                .fp-tabla td strong {
                    display: block;
                    font-family: var(--font-display, serif);
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    margin-bottom: 0.25rem;
                }
                .fp-tabla td span {
                    display: block;
                    font-size: 0.85rem;
                }
                .fp-tabla td:last-child {
                    font-weight: 700;
                    color: var(--color-primary);
                    white-space: nowrap;
                }
                .fi-fila {
                    display: grid;
                    grid-template-columns: 3rem 2.4rem 1fr;
                    gap: 1rem;
                    align-items: baseline;
                    padding: 1.5rem 0.3rem;
                    border-top: 1px solid var(--color-border);
                }
                .fi-fila:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .fi-faq {
                    border-top: 1px solid var(--color-border);
                }
                .fi-faq:last-of-type {
                    border-bottom: 1px solid var(--color-border);
                }
                .fi-faq summary {
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
                .fi-faq summary::-webkit-details-marker {
                    display: none;
                }
                .fi-faq summary:hover {
                    color: var(--color-primary);
                    padding-left: 1rem;
                }
                .fi-faq summary i {
                    color: var(--color-primary);
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .fi-faq[open] summary i {
                    transform: rotate(180deg);
                }
                @media (max-width: 600px) {
                    /* En móvil el titular rompe línea de forma natural */
                    h1 br { display: none; }
                    .fi-fila {
                        grid-template-columns: 1fr;
                        gap: 0.4rem;
                    }
                }
            
                .ce-sesiones {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                .ce-sesion {
                    border-radius: 18px;
                    padding: 1.8rem;
                }
                .ce-sesion-1 {
                    background: linear-gradient(135deg, #b45309 0%, #7c2d12 60%, #431407 100%);
                }
                .ce-sesion-2 {
                    background: #1c1917;
                }
                .ce-sesion .ce-cab {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }
                .ce-sesion .mono-label { color: #f6c39c; }
                .ce-badge {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.68rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: #faf6ef;
                    border: 1px solid rgba(250,246,239,0.35);
                    border-radius: 50px;
                    padding: 0.3rem 0.8rem;
                    white-space: nowrap;
                }
                .ce-sesion h3 {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.3rem, 2.4vw, 1.7rem);
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0 0 0.6rem;
                    line-height: 1.2;
                }
                .ce-sesion p {
                    color: rgba(250,246,239,0.82);
                    line-height: 1.65;
                    font-size: 0.95rem;
                    margin: 0 0 1.1rem;
                }
                .ce-sesion ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 0.5rem 1rem;
                }
                .ce-sesion ul li {
                    color: rgba(250,246,239,0.9);
                    font-size: 0.9rem;
                    line-height: 1.4;
                    padding-left: 1.1rem;
                    position: relative;
                }
                .ce-sesion ul li::before {
                    content: "·";
                    position: absolute;
                    left: 0.2rem;
                    color: #f6c39c;
                    font-weight: 700;
                }
                .ce-herramientas { display: flex; flex-direction: column; gap: 0.5rem; }
                .ce-herr-titulo {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.68rem;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: rgba(250,246,239,0.55);
                    margin-bottom: 0.2rem;
                }
                .ce-herr {
                    display: flex;
                    align-items: baseline;
                    justify-content: space-between;
                    gap: 1rem;
                    border-top: 1px solid rgba(250,246,239,0.12);
                    padding-top: 0.5rem;
                    color: #faf6ef;
                    font-size: 0.92rem;
                    font-weight: 600;
                }
                .ce-herr-link:hover span:first-child { color: #f6c39c; }
                .ce-punto {
                    color: rgba(250,246,239,0.6);
                    font-size: 0.8rem;
                    font-weight: 400;
                    text-align: right;
                }
                .ce-datos {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1rem;
                }
                .ce-dato {
                    border: 1px solid var(--color-border);
                    border-radius: 14px;
                    padding: 1.1rem 1.3rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                    background: var(--color-card-bg, #fff);
                }
                .ce-dato strong {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    color: var(--color-text-main);
                }
                .ce-dato-sub { color: var(--color-text-muted); font-size: 0.82rem; line-height: 1.4; }
`}</style>
        </main>
    );
}
