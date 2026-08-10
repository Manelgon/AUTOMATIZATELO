import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioCurso from "@/components/FormularioCurso";

export const metadata: Metadata = {
    title: "Cumplimiento del AI Act para Empresas",
    description:
        "Auditoría del AI Act para pymes: reviso cómo usa IA tu empresa y te entrego informe de riesgos, plan de acción y política de uso. Desde 750 €.",
    alternates: { canonical: "https://automatizatelo.com/cumplimiento" },
    openGraph: {
        title: "Auditoría IA para pymes: cumplimiento del AI Act sin sustos",
        description: "Informe de riesgos, plan de acción, política de uso de IA y formación del Art. 4. Precio público, desde 750 €.",
        url: "https://automatizatelo.com/cumplimiento",
    },
};

const faqs = [
    {
        question: "¿Mi empresa necesita una auditoría de IA?",
        answer: "Si tu plantilla usa cualquier herramienta de IA — ChatGPT, Copilot, Gemini o software con IA integrada — el Reglamento Europeo de IA ya te aplica: la obligación de alfabetización rige desde febrero de 2025 y desde el 2 de agosto de 2026 las autoridades nacionales pueden supervisarla y hacerla cumplir. La auditoría te dice en qué punto estás y qué te falta, sin alarmismo.",
    },
    {
        question: "¿Qué incluye exactamente la auditoría?",
        answer: "Cuatro cosas: un inventario de la IA que tu empresa usa de verdad (incluida la que la plantilla usa por su cuenta), una clasificación de riesgos según el Reglamento, un informe con lo que cumples y lo que no, y un plan de acción priorizado con lo que hay que hacer, en qué orden y qué cuesta. El pack completo añade la política de uso de IA redactada para tu empresa y la formación del Art. 4 para la plantilla.",
    },
    {
        question: "¿Cuánto cuesta?",
        answer: "El diagnóstico con informe y plan de acción, desde 750 €. El pack completo — auditoría + política de uso de IA personalizada + formación de alfabetización del Art. 4 con certificados — desde 1.800 €. La formación del pack es el mismo bloque de alfabetización que puedes contratar suelto desde 600 €: en el pack va incluido, junto con la política. El precio final depende del tamaño de la empresa y del número de herramientas en uso, y se cierra por escrito antes de empezar.",
    },
    {
        question: "¿La auditoría es una certificación oficial?",
        answer: "No, y quien te venda una 'certificación oficial del AI Act' te está engañando: no existe ningún esquema oficial de certificación para esto. Lo que sí existe es la evidencia documental defendible — inventario, informe, política y registro formativo fechados — que es exactamente lo que la auditoría te deja.",
    },
    {
        question: "¿No se aplazó el AI Act? Me suena que hubo un aplazamiento.",
        answer: "Se aplazó una parte, y conviene saber cuál. El Ómnibus digital (Reglamento (UE) 2026/1744, en vigor desde julio de 2026) retrasó las obligaciones plenas de los sistemas de alto riesgo — las del Anexo III a diciembre de 2027 — y retocó el Art. 4: la alfabetización sigue siendo obligatoria, pero ya no se exige alcanzar un nivel concreto, sino adoptar medidas y poder documentarlas. Lo que no se movió: la alfabetización es aplicable desde febrero de 2025, la transparencia del Art. 50 desde agosto de 2026 y, desde esa misma fecha, las autoridades nacionales supervisan y hacen cumplir. Es decir: el diagnóstico sigue teniendo sentido hoy.",
    },
    {
        question: "¿Qué pasa después de la auditoría?",
        answer: "El plan de acción es tuyo y puedes ejecutarlo con quien quieras — no hay permanencia ni letra pequeña. Si quieres que lo ejecute yo, las piezas habituales son la formación del equipo y la automatización de los procesos que la auditoría destapa. Pero el informe vale por sí solo.",
    },
    {
        question: "¿Cuánto se tarda?",
        answer: "El diagnóstico, entre una y dos semanas desde la primera reunión: una sesión para entender cómo trabajáis, revisión de herramientas y documentación, y entrega del informe con el plan de acción explicado en una reunión final. El pack completo, según el calendario de formación que se acuerde.",
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
    "name": "Auditoría de cumplimiento del Reglamento Europeo de IA (AI Act)",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "areaServed": "España",
    "description": "Auditoría de cumplimiento del AI Act para pymes: inventario de IA, clasificación de riesgos, informe, plan de acción, política de uso de IA y formación del artículo 4.",
    "offers": [
        { "@type": "Offer", "name": "Diagnóstico con informe y plan de acción", "price": "750", "priceCurrency": "EUR", "description": "Precio desde; se cierra en la propuesta." },
        { "@type": "Offer", "name": "Pack completo: auditoría + política de uso + formación Art. 4", "price": "1800", "priceCurrency": "EUR", "description": "Precio desde; se cierra en la propuesta." },
    ],
};

const entregables = [
    {
        num: "01",
        titulo: "Inventario de IA",
        desc: "Qué herramientas con IA usa tu empresa de verdad — incluidas las que la plantilla usa por su cuenta y nadie ha 'aprobado'.",
    },
    {
        num: "02",
        titulo: "Clasificación de riesgos",
        desc: "Cada uso, clasificado según el Reglamento: qué queda sin obligaciones específicas, qué exige transparencia y qué puede entrar en alto riesgo.",
    },
    {
        num: "03",
        titulo: "Informe + plan de acción",
        desc: "Qué cumples, qué no, y qué hacer en qué orden — con esfuerzo y coste de cada paso. Escrito para gerencia, no para abogados.",
    },
];

const dolores = [
    {
        titulo: "La plantilla ya usa IA por su cuenta",
        desc: "Tu equipo pega datos de clientes en ChatGPT y nadie ha dicho qué se puede y qué no. Eso es shadow IA: la empresa es la responsable del despliegue aunque nadie lo haya aprobado.",
    },
    {
        titulo: "La supervisión ya ha empezado",
        desc: "La alfabetización del Art. 4 es exigible desde febrero de 2025, y desde el 2 de agosto de 2026 las autoridades nacionales de vigilancia del mercado pueden supervisarla y hacerla cumplir.",
    },
    {
        titulo: "No tienes ni un papel que lo demuestre",
        desc: "Si preguntan, eres tú quien tiene que poder enseñar lo que hizo la empresa. Sin inventario, política ni registro formativo, no hay nada que enseñar.",
    },
    {
        titulo: "Te llegan ofertas de «certificación oficial»",
        desc: "Y hacen bien en oler raro: no existe ningún esquema oficial de certificación del AI Act. Lo que existe es la evidencia documental.",
    },
];

const proceso = [
    { n: "01", titulo: "Diagnóstico e inventario", d: "Una sesión para entender cómo trabajáis y el inventario de toda la IA en uso — también la que la plantilla usa por su cuenta." },
    { n: "02", titulo: "Clasificación y plan", d: "Cada uso clasificado según el Reglamento, y el plan de acción priorizado: qué hacer, en qué orden y qué cuesta." },
    { n: "03", titulo: "Política y gobernanza", d: "La política de uso de IA redactada para tu empresa: qué se puede usar, con qué datos y quién revisa qué." },
    { n: "04", titulo: "Formación y evidencia", d: "Las medidas de alfabetización impartidas y adaptadas a los perfiles que usan la IA, con certificado nominal y registro fechado. El expediente, montado y con fecha." },
];

const implantacion = [
    { n: "01", titulo: "Elección con criterio", d: "Qué herramienta y qué plan según lo que ya usáis — el más barato que cumpla." },
    { n: "02", titulo: "Configuración segura", d: "Cuentas de empresa, permisos y revisar qué hace el proveedor con vuestros datos." },
    { n: "03", titulo: "Casos de uso por puesto", d: "Cada rol sale sabiendo qué pedirle a la IA en SU trabajo, con plantillas propias." },
    { n: "04", titulo: "Política y evidencia", d: "La política de uso redactada para tu empresa y el expediente que documenta las medidas del Art. 4." },
];

export default function AuditoriaIAPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header />

            {/* Hero con foto + velo lateral y formulario translúcido */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/despachos.webp"
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 0 }}
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
                            <i className="fa-solid fa-clipboard-check" style={{ marginRight: "0.6rem" }}></i>
                            Auditoría IA · Reglamento (UE) 2024/1689
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
                            ¿Tu empresa cumple el{" "}
                            <span style={{ color: "#f6c39c" }}>Reglamento Europeo de IA?</span>
                        </h1>
                        <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: 0, maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                            Te lo digo con un informe, no con miedo: reviso cómo usa la IA tu empresa,
                            clasifico los riesgos según el Reglamento y te entrego el plan de acción —
                            y si quieres, la política de uso y la formación que lo dejan cerrado.
                        </p>
                    </div>

                    {/* Captura en el hero: el servicio viaja como origen del lead */}
                    <FormularioCurso
                        origen="Auditoría IA (AI Act)"
                        etiquetaPersonas="Tamaño de la empresa"
                        etiquetaOpciones="¿Qué necesitas?*"
                        opciones={[
                            "Diagnóstico con informe y plan",
                            "Pack completo (política + formación)",
                            "Implantación segura de herramientas",
                            "Aún no lo tengo claro",
                        ]}
                    />
                </div>
            </section>

            {/* Casos más concretos — barra tinta */}
            <nav aria-label="Casos concretos" className="nav-barra">
                <div className="container nav-barra-fila">
                    <span className="nav-barra-etiqueta mono-label">¿Tu caso es más concreto?</span>
                    {[
                        { href: "/formacion/ai-act", label: "Alfabetización · Art. 4" },
                        { href: "/formacion/empresas", label: "Formación para empresas" },
                        { href: "/sectores/despachos", label: "Despachos profesionales" },
                        { href: "/formacion/centros-educativos", label: "Centros educativos" },
                        { href: "/formacion/directivos", label: "Dirección" },
                    ].map((t, i) => (
                        <Link key={t.href} href={t.href} className="nav-barra-item">
                            {t.label}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* En corto — split degradado, como el curso estrella */}
            <section aria-label="La auditoría, en corto" style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                <div className="container cu2-mitades">
                    <div className="cu2-mitad">
                        <span className="cu2-marca" aria-hidden="true">§</span>
                        <div className="cu2-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>En corto</span>
                            <h2 className="cu2-titulo">
                                Dónde está tu empresa y <span style={{ color: "#f6c39c" }}>qué le falta</span>
                            </h2>
                            <p className="cu2-sub">
                                En una o dos semanas: inventario de la IA que usáis, clasificación de
                                riesgos según el Reglamento, informe y plan de acción. Sin certificados
                                inventados — no existe certificación oficial del AI Act — y sin jerga:
                                un informe que gerencia entiende y puede ejecutar.
                            </p>
                            <div className="cu2-datos">
                                <span>1 – 2 semanas</span>
                                <span>Informe + plan de acción</span>
                                <span>Política y formación en el pack</span>
                                <span className="cu2-dato-precio">Desde 750 € · pack desde 1.800 €</span>
                            </div>
                            <div className="cu2-enlaces">
                                <a href="#proceso" className="cu2-enlace">Ver cómo transcurre ↓</a>
                                <Link href="/precios#cumplir" className="cu2-enlace">Ver la tabla de precios →</Link>
                                <Link href="/diagnostico" className="cu2-enlace">¿Por dónde empiezo? Test de 3 min →</Link>
                            </div>
                            <p className="cu2-nota">
                                ¿Solo necesitáis cubrir el Art. 4? El{" "}
                                <Link href="/formacion/ai-act">bloque de alfabetización, desde 600 € →</Link>
                            </p>
                        </div>
                    </div>
                    <div className="cu2-mitad">
                        <div className="cu2-cuerpo">
                            {entregables.map((e, i) => (
                                <div key={e.num} className={i === 0 ? "cu2-entregable" : "cu2-entregable cu2-entregable-2"}>
                                    <span className="mono-label" style={{ color: "#f6c39c" }}>Entregable {e.num}</span>
                                    <h3>{e.titulo}</h3>
                                    <p>{e.desc}</p>
                                </div>
                            ))}
                            <p className="cu2-nota" style={{ marginTop: "1.1rem" }}>
                                Y con el pack, la política de uso redactada y la formación de
                                alfabetización en IA para la plantilla, con certificado nominal y
                                registro fechado.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Precios de un vistazo — banda de cifras */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917" }}>
                <div className="container">
                    <div className="cu2-cifras">
                        <div className="cu2-cifra">
                            <span className="cu2-cifra-valor">desde 750 €</span>
                            <span className="cu2-cifra-etiqueta">Diagnóstico · informe y plan</span>
                        </div>
                        <div className="cu2-cifra">
                            <span className="cu2-cifra-valor">desde 1.800 €</span>
                            <span className="cu2-cifra-etiqueta">Pack · + política + formación</span>
                        </div>
                        <div className="cu2-cifra">
                            <span className="cu2-cifra-valor">desde 900 €</span>
                            <span className="cu2-cifra-etiqueta">Implantación de herramientas</span>
                        </div>
                        <div className="cu2-cifra">
                            <span className="cu2-cifra-valor">1 – 2 semanas</span>
                            <span className="cu2-cifra-etiqueta">Del arranque al informe</span>
                        </div>
                    </div>
                    <p className="cu2-cifras-pie">
                        El precio final depende del tamaño y de las herramientas en uso, y se cierra
                        por escrito antes de empezar —{" "}
                        <Link href="/precios#cumplir">Ver la tabla de precios →</Link>
                    </p>
                </div>
            </section>

            {/* Cómo transcurre — foto ambiental + velo */}
            <section id="proceso" style={{ position: "relative", overflow: "hidden", padding: "4.5rem 0", background: "#1c1917", scrollMarginTop: "6rem" }}>
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
                    background: "linear-gradient(90deg, rgba(28,25,23,0.72) 0%, rgba(28,25,23,0.52) 45%, rgba(28,25,23,0.25) 75%, rgba(28,25,23,0.1) 100%)",
                }} />
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Cómo transcurre</span>
                        <h2 style={{
                            fontFamily: "var(--font-display, serif)",
                            fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)",
                            fontWeight: 600,
                            lineHeight: 1.2,
                            color: "#faf6ef",
                            margin: "1rem 0 0.6rem",
                            letterSpacing: "-0.01em",
                            textShadow: "0 2px 30px rgba(28,25,23,0.45)",
                        }}>
                            De la primera reunión al expediente, en 4 pasos
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.7, margin: 0, maxWidth: 560 }}>
                            El diagnóstico se entrega en una o dos semanas. Los pasos 3 y 4 son del
                            pack completo.
                        </p>
                    </div>
                    <div className="cu2-proceso">
                        {proceso.map((p, i) => (
                            <div key={p.n} className="cu2-paso">
                                <div className="cu2-paso-cab">
                                    <span className="cu2-paso-num">{p.n}</span>
                                    {i < 3 && <span className="cu2-paso-linea" aria-hidden="true"></span>}
                                </div>
                                <h3>{p.titulo}</h3>
                                <p>{p.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Señales de que te toca — filas en tinta, tipo índice */}
            <section style={{ padding: "3.8rem 0", background: "#1c1917" }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>¿Te suena?</span>
                        <h2 style={{
                            fontFamily: "var(--font-display, serif)",
                            fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)",
                            fontWeight: 600,
                            lineHeight: 1.2,
                            color: "#faf6ef",
                            margin: "1rem 0 0.6rem",
                            letterSpacing: "-0.01em",
                        }}>
                            Señales de que te toca hacerla
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.8)", lineHeight: 1.7, margin: 0, maxWidth: 560 }}>
                            Cuatro situaciones que veo en casi todas las pymes — probablemente
                            reconozcas más de una.
                        </p>
                    </div>
                    <div className="cu2-senales">
                        {dolores.map((d, i) => (
                            <div key={d.titulo} className="cu2-senal">
                                <div className="cu2-senal-izq">
                                    <span className="cu2-senal-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                                    <h3>{d.titulo}</h3>
                                </div>
                                <p>{d.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implantación segura — split sobre el degradado firma */}
            <section id="implantacion" style={{ padding: "3.8rem 0", background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)", scrollMarginTop: "6rem" }}>
                <div className="container cu2-impl-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Implantación segura</span>
                        <h2 className="cu2-impl-titulo">
                            ChatGPT, Copilot o Gemini — en marcha y <span style={{ color: "#f6c39c" }}>con cabeza</span>
                        </h2>
                        <p className="cu2-impl-sub">
                            Cumplir no es solo tener papeles: es que las herramientas estén bien
                            montadas. Y como no cobro comisión de ningún proveedor, la recomendación
                            sale de tu caso, no de mi bolsillo.
                        </p>
                        <p className="cu2-impl-sub">
                            Puesta en marcha <strong>desde 900 €</strong>; las licencias las pagas
                            directamente al proveedor, sin sobreprecio.
                        </p>
                        <div className="cu2-enlaces">
                            <Link href="/formacion" className="cu2-enlace">Los cursos de cada herramienta →</Link>
                        </div>
                    </div>
                    <div>
                        {implantacion.map((p) => (
                            <div key={p.n} className="cu2-impl-fila">
                                <span className="cu2-impl-num mono-label">{p.n}</span>
                                <div>
                                    <h3>{p.titulo}</h3>
                                    <p>{p.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ — split en tinta con el CTA integrado */}
            <section style={{ padding: "4rem 0", background: "#1c1917", borderTop: "1px solid rgba(250,246,239,0.08)" }}>
                <div className="container cu2-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem", color: "#faf6ef" }}>
                            Preguntas frecuentes
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.65, margin: "0 0 1.6rem", fontSize: "0.95rem" }}>
                            30 minutos gratis: te digo si tu empresa necesita la auditoría o si con
                            menos te vale. Mejor un informe hoy que una carta mañana.
                        </p>
                        <Link href="/#contact" className="cu2-cta">Pedir mis 30 minutos →</Link>
                        <Link href="/casos" className="cu2-enlace" style={{ marginTop: "0.9rem", display: "inline-block" }}>
                            Ver sistemas que ya funcionan →
                        </Link>
                    </div>
                    <div>
                        {faqs.map((f) => (
                            <details key={f.question} className="au-faq" name="faq-cumplimiento">
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
                .cu2-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .cu2-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .cu2-marca {
                    position: absolute;
                    top: 0.6rem;
                    right: 1.4rem;
                    font-family: var(--font-display, serif);
                    font-size: clamp(5rem, 9vw, 8rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .cu2-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3rem 0;
                    width: 100%;
                }
                .cu2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .cu2-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.65;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .cu2-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .cu2-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .cu2-datos .cu2-dato-precio { color: #f6c39c; }
                .cu2-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem 1.3rem;
                    margin-top: 1rem;
                }
                .cu2-enlace {
                    display: inline-block;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .cu2-enlace:hover { color: #faf6ef; transform: translateX(6px); }
                .cu2-nota {
                    margin: 0.6rem 0 0;
                    font-size: 0.85rem;
                    line-height: 1.6;
                    color: rgba(250, 246, 239, 0.6);
                }
                .cu2-nota a { color: #f6c39c; font-weight: 600; }
                .cu2-nota a:hover { color: #faf6ef; }
                .cu2-entregable {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                }
                .cu2-entregable-2 {
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                    padding-top: 1.3rem;
                    margin-top: 1.3rem;
                }
                .cu2-entregable h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.2;
                }
                .cu2-entregable p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                @media (max-width: 800px) {
                    .cu2-mitades { grid-template-columns: 1fr; gap: 0; }
                    .cu2-cuerpo { padding: 2.2rem 0; }
                }
                .cu2-proceso {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.6rem;
                }
                .cu2-paso-cab {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-bottom: 0.9rem;
                }
                .cu2-paso-num {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: #f6c39c;
                    background: rgba(246, 195, 156, 0.12);
                    border: 1px solid rgba(246, 195, 156, 0.35);
                    border-radius: 50px;
                    padding: 0.35rem 0.75rem;
                    flex-shrink: 0;
                }
                .cu2-paso-linea {
                    flex: 1;
                    height: 1px;
                    background: rgba(250, 246, 239, 0.2);
                }
                .cu2-paso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0 0 0.4rem;
                    line-height: 1.3;
                }
                .cu2-paso p {
                    color: rgba(250, 246, 239, 0.8);
                    font-size: 0.9rem;
                    line-height: 1.6;
                    margin: 0;
                }
                @media (max-width: 900px) {
                    .cu2-proceso { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 560px) {
                    .cu2-proceso { grid-template-columns: 1fr; }
                    .cu2-paso-linea { display: none; }
                }
                .cu2-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .cu2-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .cu2-cifra-valor {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .cu2-cifra-etiqueta {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                .cu2-cifras-pie {
                    text-align: center;
                    max-width: 720px;
                    margin: 1.8rem auto 0;
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.65);
                }
                .cu2-cifras-pie a { color: #f6c39c; font-weight: 600; }
                .cu2-cifras-pie a:hover { color: #faf6ef; }
                @media (max-width: 800px) {
                    .cu2-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }
                @media (max-width: 900px) {
                }
                .cu2-senal {
                    display: grid;
                    grid-template-columns: 0.46fr 0.54fr;
                    gap: 2.5rem;
                    align-items: baseline;
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                    padding: 1.5rem 0;
                }
                .cu2-senal:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .cu2-senal-izq {
                    display: flex;
                    align-items: baseline;
                    gap: 1.1rem;
                }
                .cu2-senal-num {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 3vw, 2.4rem);
                    font-weight: 700;
                    line-height: 1;
                    color: rgba(246, 195, 156, 0.4);
                    flex-shrink: 0;
                }
                .cu2-senal h3 {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.2rem, 2.2vw, 1.55rem);
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.25;
                }
                .cu2-senal p {
                    color: rgba(250, 246, 239, 0.78);
                    line-height: 1.65;
                    font-size: 0.95rem;
                    margin: 0;
                }
                @media (max-width: 800px) {
                    .cu2-senal { grid-template-columns: 1fr; gap: 0.6rem; }
                }
                .cu2-impl-grid {
                    display: grid;
                    grid-template-columns: 0.42fr 0.58fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 900px) {
                    .cu2-impl-grid { grid-template-columns: 1fr; gap: 1.8rem; }
                }
                .cu2-impl-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0.9rem 0 0.8rem;
                }
                .cu2-impl-sub {
                    color: rgba(250, 246, 239, 0.8);
                    line-height: 1.7;
                    font-size: 0.95rem;
                    margin: 0 0 0.8rem;
                }
                .cu2-impl-sub strong { color: #f6c39c; }
                .cu2-impl-fila {
                    display: grid;
                    grid-template-columns: 2.6rem 1fr;
                    gap: 1rem;
                    align-items: baseline;
                    border-top: 1px solid rgba(250, 246, 239, 0.22);
                    padding: 1.1rem 0;
                }
                .cu2-impl-fila:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.22); }
                .cu2-impl-num { color: #f6c39c; }
                .cu2-impl-fila h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0 0 0.25rem;
                    line-height: 1.25;
                }
                .cu2-impl-fila p {
                    color: rgba(250, 246, 239, 0.78);
                    line-height: 1.6;
                    font-size: 0.9rem;
                    margin: 0;
                }
                .cu2-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .cu2-faq-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .cu2-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .cu2-cta:hover { background: #faf6ef; transform: translateY(-2px); }
                .au-faq { border-top: 1px solid rgba(250, 246, 239, 0.14); }
                .au-faq:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .au-faq summary {
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
                .au-faq summary::-webkit-details-marker { display: none; }
                .au-faq summary:hover { color: #f6c39c; padding-left: 1rem; }
                .au-faq summary i { color: #f6c39c; font-size: 0.8rem; flex-shrink: 0; transition: transform 0.3s ease; }
                .au-faq[open] summary i { transform: rotate(180deg); }
            `}</style>
        </main>
    );
}
