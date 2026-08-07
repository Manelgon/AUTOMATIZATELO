import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioCurso from "@/components/FormularioCurso";
import FormacionTabs from "@/components/FormacionTabs";

export const metadata: Metadata = {
    title: "Taller de IA para Alumnado: Aprender y Primer Empleo",
    description:
        "Taller de IA para alumnado de 4º ESO, Bachillerato y FP: usar la IA para estudiar mejor — no para copiar — y preparar CV, entrevistas y presencia profesional.",
    alternates: { canonical: "https://automatizatelo.com/formacion/alumnado" },
    openGraph: {
        title: "IA para el alumnado: aprender mejor y preparar el primer empleo",
        description: "Una sesión en el centro, por grupos: estudiar con IA sin copiar, y usarla para el CV, las entrevistas y la presencia profesional.",
        url: "https://automatizatelo.com/formacion/alumnado",
    },
};

const faqs = [
    {
        question: "¿Por qué enseñar IA al alumnado en vez de prohibirla?",
        answer: "Porque la prohibición no funciona: los detectores de IA no son fiables y los alumnos la van a seguir usando fuera del aula. Lo que sí funciona es enseñarles a usarla bien — como tutor para entender, no como atajo para entregar — con criterios claros de qué está permitido y cómo se cita. El taller trabaja exactamente eso.",
    },
    {
        question: "¿Para qué edades es el taller?",
        answer: "Está pensado para etapas superiores: 4º de ESO, Bachillerato y ciclos de FP. La parte de empleabilidad (CV, cartas, entrevistas) pesa más en Bachillerato y FP; en 4º de ESO el foco está en aprender a estudiar con IA con cabeza. El contenido se ajusta con el centro antes de la sesión.",
    },
    {
        question: "¿Los alumnos necesitan cuentas o herramientas de pago?",
        answer: "No. El taller se monta sobre herramientas con versión gratuita y, sobre todo, sobre criterios que valen para cualquier herramienta. Qué cuentas usar y bajo qué condiciones se acuerda con el centro respetando la normativa de protección de datos con menores.",
    },
    {
        question: "¿Cómo se contrata y cuánto cuesta?",
        answer: "Hay dos formatos: el taller de 2 a 4 horas por grupo (los bloques que elija el centro) y el curso completo desde 10 horas, que recorre todo el temario. Ambos se imparten en el centro o en aula virtual y se presupuestan junto al programa de formación del centro (curso de claustro, política de uso, SCORM). Pide la propuesta con 30 minutos con dirección y os digo formato y precio cerrado.",
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
    "name": "Taller de IA para alumnado",
    "serviceType": "Formación en Inteligencia Artificial para estudiantes",
    "description": "Taller en el centro para 4º ESO, Bachillerato y FP: usar la IA para aprender mejor y para preparar el primer empleo (CV, entrevistas, presencia profesional).",
    "url": "https://automatizatelo.com/formacion/alumnado",
    "areaServed": "ES",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
        "telephone": "+34678399182",
    },
};

const temario = [
    {
        num: "01",
        titulo: "La IA y el mercado laboral que os espera",
        puntos: [
            "Cómo han cambiado los procesos de selección: filtros automáticos y qué valoran los reclutadores",
            "Panorama de herramientas: qué hace bien cada una y cuándo usarla",
            "Qué puede y qué no puede hacer la IA: límites reales, sin humo",
            "Autenticidad: usar IA sin dejar de sonar a ti",
        ],
    },
    {
        num: "02",
        titulo: "Estudiar y aprender con IA — sin engañarte",
        puntos: [
            "La IA como tutor personal: preguntar hasta entender, no hasta entregar",
            "Verificar lo que responde: alucinaciones y cómo pillarlas",
            "Citar la IA cuando toca: la regla que evita problemas",
            "Cuándo la IA te ayuda a aprender y cuándo te está robando el aprendizaje",
        ],
    },
    {
        num: "03",
        titulo: "El CV que pasa los filtros",
        puntos: [
            "Redactar y mejorar el CV desde cero con IA",
            "Adaptarlo a cada oferta en minutos, sin mentir",
            "Palabras clave: cómo leen los sistemas de filtrado automático",
            "Los errores de CV que la IA comete por ti si la dejas",
        ],
    },
    {
        num: "04",
        titulo: "Cartas y comunicación profesional",
        puntos: [
            "La carta de presentación que no suena a plantilla",
            "Adaptar el tono a cada empresa",
            "Emails de seguimiento que abren puertas sin resultar pesados",
        ],
    },
    {
        num: "05",
        titulo: "LinkedIn y marca personal",
        puntos: [
            "Montar un perfil que aparezca en las búsquedas",
            "Publicar con criterio: contenido que suma, no relleno",
            "Conectar con empresas y personas del sector sin hacer spam",
        ],
    },
    {
        num: "06",
        titulo: "Entrevistas: la IA de sparring",
        puntos: [
            "Investigar la empresa antes de entrar por la puerta",
            "Simular la entrevista con IA: preguntas difíciles incluidas",
            "Preparar respuestas propias — no memorizar respuestas de máquina",
        ],
    },
    {
        num: "07",
        titulo: "Búsqueda activa y uso profesional",
        puntos: [
            "Buscar ofertas con eficiencia y organizar las candidaturas",
            "Candidatura activa: llegar antes de que salga la oferta",
            "Qué está permitido y qué no al usar IA en un proceso de selección",
        ],
    },
];

const dirigido = [
    { n: "01", titulo: "4º ESO y Bachillerato", d: "Con el foco en estudiar mejor con IA y una primera orientación al mundo laboral." },
    { n: "02", titulo: "FP · último curso", d: "El perfil que más lo aprovecha: prácticas y primer empleo a la vuelta de la esquina." },
    { n: "03", titulo: "Universitarios · últimos cursos", d: "CV, LinkedIn y entrevistas con IA antes de salir al mercado." },
    { n: "04", titulo: "Programas de transición al empleo", d: "Para orientadores y entidades que preparan la inserción laboral de jóvenes." },
];

const razones = [
    {
        titulo: "Ya la usan — sin criterio",
        desc: "El alumnado usa IA para los trabajos desde hace tiempo. La pregunta no es si la usan, sino si saben cuándo les ayuda y cuándo les está robando el aprendizaje.",
    },
    {
        titulo: "Los detectores no funcionan",
        desc: "No hay herramienta fiable que detecte texto de IA. El único camino real es una cultura de uso: qué está permitido, qué se cita y cómo se evalúa.",
    },
    {
        titulo: "El primer empleo ya se juega con IA",
        desc: "Los procesos de selección filtran CVs con software y valoran saber usar IA. Salir del centro sin saber usarla bien es salir con desventaja.",
    },
];

export default function AlumnadoPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header />

            {/* Hero con foto + velo lateral y formulario translúcido */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/academias.webp"
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
                        <i className="fa-solid fa-user-graduate" style={{ marginRight: "0.6rem" }}></i>
                        Taller para alumnado · 4º ESO · Bachillerato · FP
                    </span>
                    <h1 style={{
                        fontFamily: "var(--font-display, serif)",
                        fontSize: "clamp(2.1rem, 5.5vw, 3.4rem)",
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        color: "#faf6ef",
                        margin: "1rem 0 1.2rem",
                        textShadow: "0 2px 30px rgba(28,25,23,0.45)",
                    }}>
                        IA para aprender —{" "}<br />
                        <span style={{ color: "#f6c39c" }}>y para el primer empleo</span>
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                        Una sesión en el centro, por grupos: que el alumnado use la IA para
                        estudiar mejor — no para copiar — y aprenda a usarla para el CV,
                        las entrevistas y su presencia profesional.
                    </p>
                    </div>

                    {/* Captura en el hero: el taller viaja como origen del lead */}
                    <FormularioCurso origen="Taller para alumnado" />
                </div>
            </section>

            <FormacionTabs />

            {/* Por qué — split sobre crema */}
            <section style={{ padding: "3.6rem 0" }}>
                <div className="container al-porque-grid">
                    <div>
                        <span className="kicker-mono">Por qué</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem" }}>
                            Prohibirla no funciona. Enseñarla, sí.
                        </h2>
                        <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, margin: 0, fontSize: "0.95rem", maxWidth: 420 }}>
                            Tres razones por las que los centros que van por delante ya forman
                            a su alumnado en IA.
                        </p>
                    </div>
                    <div className="al-razones">
                        {razones.map((r) => (
                            <div key={r.titulo} className="al-razon">
                                <h3>{r.titulo}</h3>
                                <p>{r.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* El taller — split degradado como el curso estrella */}
            <section aria-label="El taller" style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                <div className="container al-mitades">
                    <div className="al-mitad">
                        <span className="al-marca" aria-hidden="true">★</span>
                        <div className="al-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>El taller</span>
                            <h2 className="al-titulo">Una sesión, <span style={{ color: "#f6c39c" }}>dos mitades</span></h2>
                            <p className="al-sub">
                                Se imparte en el centro, por grupos, con el contenido ajustado a la
                                etapa. Sin cuentas de pago y respetando la protección de datos con menores.
                            </p>
                            <div className="al-datos">
                                <span>Taller 2 – 4 h · curso completo desde 10 h</span>
                                <span>Presencial en el centro · aula virtual</span>
                                <span>Certificado de finalización</span>
                                <span className="al-dato-precio">Se presupuesta con el programa del centro</span>
                            </div>
                            <div className="al-enlaces">
                                <a href="#temario" className="al-enlace">Ver el temario completo ↓</a>
                                <Link href="/formacion/centros-educativos" className="al-enlace">Ver el programa del centro →</Link>
                            </div>
                        </div>
                    </div>
                    <div className="al-mitad">
                        <div className="al-cuerpo">
                            <div className="al-sesion">
                                <div className="al-cab">
                                    <span className="mono-label" style={{ color: "#f6c39c" }}>Mitad 01</span>
                                    <span className="al-badge">Estudiar mejor</span>
                                </div>
                                <h3>IA para aprender</h3>
                                <p>Usarla como tutor y no como atajo: preguntar hasta entender, verificar lo que responde, citarla cuando toca — y saber cuándo te está robando el aprendizaje.</p>
                            </div>
                            <div className="al-sesion al-sesion-2">
                                <div className="al-cab">
                                    <span className="mono-label" style={{ color: "#f6c39c" }}>Mitad 02</span>
                                    <span className="al-badge">Empleabilidad</span>
                                </div>
                                <h3>IA para el primer empleo</h3>
                                <p>El CV que pasa los filtros automáticos, cartas que no suenan a plantilla, preparar entrevistas con la IA de sparring, y LinkedIn y la búsqueda de ofertas con cabeza.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Temario — continuación en tinta del split */}
            <section id="temario" style={{ padding: "2.8rem 0 3.4rem", background: "#1c1917", scrollMarginTop: "6rem" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <h2 className="al-etiqueta" style={{ marginBottom: "0.8rem" }}>El temario, bloque a bloque</h2>
                    <p style={{
                        textAlign: "center",
                        color: "rgba(250,246,239,0.6)",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                        margin: "0 0 2rem",
                    }}>
                        En el taller corto se trabajan los bloques que elija el centro; el curso completo los recorre todos.
                    </p>
                    {temario.map((b) => (
                        <details key={b.num} className="al-acordeon" name="temario-alumnado">
                            <summary>
                                <span className="al-acordeon-num mono-label">{b.num}</span>
                                <span className="al-acordeon-titulo">{b.titulo}</span>
                                <i className="fas fa-chevron-down"></i>
                            </summary>
                            <ul>
                                {b.puntos.map((p) => (
                                    <li key={p}>{p}</li>
                                ))}
                            </ul>
                        </details>
                    ))}
                </div>
            </section>

            {/* A quién va dirigido — tira de 4 perfiles */}
            <section style={{ padding: "3.4rem 0", background: "#1c1917", borderTop: "1px solid rgba(250,246,239,0.08)" }}>
                <div className="container">
                    <h2 className="al-etiqueta">A quién va dirigido</h2>
                    <div className="al-perfiles">
                        {dirigido.map((p, i) => (
                            <div key={p.n} className="al-perfil">
                                <div className="al-perfil-cab">
                                    <span className="al-perfil-num">{p.n}</span>
                                    {i < dirigido.length - 1 && <span className="al-perfil-linea" aria-hidden="true"></span>}
                                </div>
                                <h3>{p.titulo}</h3>
                                <p>{p.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ — split en tinta con CTA */}
            <section style={{ padding: "4rem 0", background: "#1c1917" }}>
                <div className="container al-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem", color: "#faf6ef" }}>
                            Lo que preguntan los centros
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.65, margin: "0 0 1.6rem", fontSize: "0.95rem" }}>
                            El taller se contrata junto al programa de formación del centro —
                            30 minutos con dirección y os paso propuesta cerrada.
                        </p>
                        <Link href="/#contact" className="al-cta">Pedirlo para mi centro →</Link>
                    </div>
                    <div>
                        {faqs.map((f) => (
                            <details key={f.question} className="al-faq" name="faq-alumnado">
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
                .al-porque-grid {
                    display: grid;
                    grid-template-columns: 0.8fr 1.2fr;
                    gap: 4rem;
                    align-items: center;
                }
                .al-razones {
                    display: flex;
                    flex-direction: column;
                    gap: 1.2rem;
                    border-left: 2px solid rgba(234, 88, 12, 0.35);
                    padding-left: 1.6rem;
                }
                .al-razon h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: var(--color-text-main);
                    margin: 0 0 0.25rem;
                    line-height: 1.3;
                }
                .al-razon p {
                    color: var(--color-text-muted);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                @media (max-width: 800px) {
                    .al-porque-grid { grid-template-columns: 1fr; gap: 1.8rem; }
                    .al-razones { border-left: none; padding-left: 0; }
                }
                .al-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .al-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .al-marca {
                    position: absolute;
                    top: 0.6rem;
                    right: 1.4rem;
                    font-size: clamp(5rem, 9vw, 8rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .al-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3rem 0;
                    width: 100%;
                }
                .al-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .al-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.65;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .al-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .al-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .al-datos .al-dato-precio { color: #f6c39c; }
                .al-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem 1.3rem;
                    margin-top: 1rem;
                }
                .al-enlace {
                    display: inline-block;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .al-enlace:hover {
                    color: #faf6ef;
                    transform: translateX(6px);
                }
                .al-sesion {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                }
                .al-sesion-2 {
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                    padding-top: 1.3rem;
                    margin-top: 1.3rem;
                }
                .al-cab {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                }
                .al-badge {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.65rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: #faf6ef;
                    border: 1px solid rgba(250, 246, 239, 0.35);
                    border-radius: 50px;
                    padding: 0.25rem 0.7rem;
                    white-space: nowrap;
                }
                .al-sesion h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.2;
                }
                .al-sesion p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                @media (max-width: 800px) {
                    .al-mitades { grid-template-columns: 1fr; gap: 0; }
                    .al-cuerpo { padding: 2.2rem 0; }
                }
                .al-etiqueta {
                    text-align: center;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.55);
                    margin: 0 0 2.2rem;
                }
                .al-acordeon {
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                }
                .al-acordeon:last-of-type {
                    border-bottom: 1px solid rgba(250, 246, 239, 0.14);
                }
                .al-acordeon summary {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.3rem 0.4rem;
                    cursor: pointer;
                }
                .al-acordeon summary::-webkit-details-marker { display: none; }
                .al-acordeon-num { color: #f6c39c; flex-shrink: 0; }
                .al-acordeon-titulo {
                    flex: 1;
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.1rem, 2.1vw, 1.35rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.3;
                    transition: color 0.2s ease;
                }
                .al-acordeon summary:hover .al-acordeon-titulo { color: #f6c39c; }
                .al-acordeon summary i {
                    color: #f6c39c;
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .al-acordeon[open] summary i { transform: rotate(180deg); }
                .al-acordeon ul {
                    margin: 0;
                    padding: 0 0.4rem 1.5rem 3rem;
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 0.55rem;
                }
                .al-acordeon ul li {
                    color: rgba(250, 246, 239, 0.75);
                    line-height: 1.55;
                    font-size: 0.95rem;
                    padding-left: 1.1rem;
                    position: relative;
                }
                .al-acordeon ul li::before {
                    content: "·";
                    position: absolute;
                    left: 0.2rem;
                    color: #f6c39c;
                    font-weight: 700;
                }
                @media (max-width: 600px) {
                    .al-acordeon ul { padding-left: 1.5rem; }
                }
                .al-perfiles {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.6rem;
                }
                .al-perfil-cab {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-bottom: 0.9rem;
                }
                .al-perfil-num {
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
                .al-perfil-linea {
                    flex: 1;
                    height: 1px;
                    background: rgba(250, 246, 239, 0.16);
                }
                .al-perfil h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0 0 0.35rem;
                    line-height: 1.3;
                }
                .al-perfil p {
                    color: rgba(250, 246, 239, 0.72);
                    font-size: 0.88rem;
                    line-height: 1.55;
                    margin: 0;
                }
                @media (max-width: 900px) {
                    .al-perfiles { grid-template-columns: 1fr 1fr; }
                    .al-perfil-linea { display: none; }
                }
                @media (max-width: 560px) {
                    .al-perfiles { grid-template-columns: 1fr; }
                }
                .al-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .al-faq-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .al-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .al-cta:hover {
                    background: #faf6ef;
                    transform: translateY(-2px);
                }
                .al-faq {
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                }
                .al-faq:last-of-type {
                    border-bottom: 1px solid rgba(250, 246, 239, 0.14);
                }
                .al-faq summary {
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
                .al-faq summary::-webkit-details-marker { display: none; }
                .al-faq summary:hover {
                    color: #f6c39c;
                    padding-left: 1rem;
                }
                .al-faq summary i {
                    color: #f6c39c;
                    font-size: 0.8rem;
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .al-faq[open] summary i { transform: rotate(180deg); }
                @media (max-width: 600px) {
                    h1 br { display: none; }
                }
            `}</style>
        </main>
    );
}
