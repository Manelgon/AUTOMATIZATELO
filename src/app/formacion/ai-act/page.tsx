import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioCurso from "@/components/FormularioCurso";
import FormacionTabs from "@/components/FormacionTabs";
import Esquema from "@/components/Esquema";
import { migas, curso } from "@/lib/esquemas";

export const metadata: Metadata = {
    title: "Formación Obligatoria del AI Act (Art. 4)",
    description:
        "El Art. 4 del Reglamento Europeo de IA obliga desde febrero de 2025 a alfabetizar a tu plantilla. Qué exige de verdad, a quién aplica y cómo acreditarlo.",
    alternates: { canonical: "https://automatizatelo.com/formacion/ai-act" },
    openGraph: {
        title: "Formación obligatoria en IA: el Art. 4 del AI Act explicado",
        description: "A quién obliga, desde cuándo, qué sanciones hay y qué evidencia necesita tu empresa.",
        url: "https://automatizatelo.com/formacion/ai-act",
    },
};

const faqs = [
    {
        question: "¿Desde cuándo es obligatoria la alfabetización en IA?",
        answer: "El artículo 4 del Reglamento (UE) 2024/1689 es aplicable desde el 2 de febrero de 2025 — ya es exigible hoy. El 2 de agosto de 2026 llega la fecha general de aplicación del grueso del Reglamento: desde entonces las autoridades nacionales de vigilancia del mercado pueden supervisar y hacer cumplir también el Art. 4.",
    },
    {
        question: "Mi empresa solo usa ChatGPT o Copilot, no desarrolla IA. ¿También me obliga?",
        answer: "Sí. El artículo 4 obliga a los proveedores de sistemas de IA y también a los responsables del despliegue — es decir, a las empresas que usan IA aunque no la hayan construido. Cuenta el software del día a día: ChatGPT, Copilot o cualquier herramienta con decisión automática dentro.",
    },
    {
        question: "¿Cuántas horas de formación exige la ley?",
        answer: "Ninguna cifra concreta: el Reglamento no fija horas y, tras el Ómnibus de julio de 2026, tampoco un nivel que haya que alcanzar. Lo que pide son medidas adaptadas al conocimiento, la experiencia y el contexto de uso de cada perfil. Quien venda un curso diciendo que la ley obliga a un número exacto de horas se lo está inventando. Lo que hay que poder demostrar es que cada perfil recibió formación adecuada a lo que hace.",
    },
    {
        question: "¿Existe un certificado oficial del Art. 4? ¿Y una formación en IA con certificado?",
        answer: "Certificado oficial, no: no hay ningún esquema oficial de certificación de la alfabetización en IA, y conviene desconfiar de quien venda un 'sello de cumplimiento'. Formación con certificado, sí — pero nominal y privado: lo que puedes enseñar ante una inspección es el expediente documental (registro formativo con contenidos y horas, certificado nominal por participante y material fechado), que es exactamente lo que entrega la formación de alfabetización.",
    },
    {
        question: "¿Qué pasa si no formo a mi equipo?",
        answer: "Menos de lo que te cuentan, y más de lo que parece. El Art. 4 no figura en la lista de infracciones con multa del Art. 99 — los 35 millones o el 7% que verás en muchos anuncios son el techo de las prácticas prohibidas del Art. 5, no de la formación. Lo que sí ocurre: la obligación existe desde febrero de 2025, desde el 2 de agosto de 2026 las autoridades nacionales pueden supervisarla y hacerla cumplir con medidas proporcionadas, y la carga de acreditar que tomaste medidas es tuya. Sin inventario, política ni registro formativo, no hay nada que enseñar.",
    },
    {
        question: "¿No se había aplazado el AI Act? Me suena que hubo un aplazamiento.",
        answer: "Se aplazó una parte — y quien te diga que 'ya no corre prisa' te está informando mal. El Ómnibus digital (Reglamento (UE) 2026/1744, en vigor desde julio de 2026) aplazó las obligaciones plenas de los sistemas de alto riesgo: las del Anexo III al 2 de diciembre de 2027 y las de productos regulados a 2028. Y retocó el propio Art. 4: la alfabetización sigue siendo obligatoria, pero ya no se exige alcanzar un nivel «suficiente» — se exige tomar medidas. Lo que NO se aplazó: la alfabetización del Art. 4 (aplicable desde febrero de 2025), la transparencia del Art. 50 (tu chatbot debe identificarse como IA desde agosto de 2026) ni la supervisión de las autoridades nacionales, que arranca esa misma fecha.",
    },
    {
        question: "¿Qué tiene que hacer una pyme, en concreto?",
        answer: "Cuatro pasos: identificar qué herramientas de IA usa ya la plantilla (aunque sea ChatGPT gratuito), mapear qué perfiles la usan y con qué riesgo, formar a cada perfil de forma proporcional, y guardar la evidencia documental (registro, certificados y material fechado).",
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

const pasos = [
    {
        num: "01",
        titulo: "Identifica la IA que ya usáis",
        desc: "ChatGPT, Copilot, herramientas con IA integrada… aunque nadie las haya 'aprobado' oficialmente. Si la plantilla las usa, cuentan.",
    },
    {
        num: "02",
        titulo: "Mapea perfiles y riesgo",
        desc: "No todos necesitan lo mismo: quien redacta emails con IA y quien evalúa candidatos con IA tienen obligaciones distintas. La ley pide proporcionalidad.",
    },
    {
        num: "03",
        titulo: "Forma a cada perfil",
        desc: "Formación práctica y adecuada a lo que cada persona hace — no un curso genérico igual para todos. Es la forma razonable de aplicar el Art. 4 en una plantilla con perfiles y usos distintos.",
    },
    {
        num: "04",
        titulo: "Guarda la evidencia",
        desc: "Registro fechado con participantes, contenidos y materiales. El certificado nominal no lo exige la ley — lo pide la práctica, porque es lo que puedes enseñar el día que alguien pregunte.",
    },
];

const fechas = [
    {
        fecha: "2 feb 2025",
        texto: "El Art. 4 es aplicable: la obligación de alfabetización en IA ya está en vigor.",
    },
    {
        fecha: "Ago. 2026",
        texto: "Empieza la supervisión: las autoridades nacionales pueden supervisar y hacer cumplir el Art. 4, y la transparencia del Art. 50 pasa a ser aplicable. El Ómnibus digital solo aplazó el alto riesgo, a diciembre de 2027.",
    },
    {
        fecha: "35 M€ / 7%",
        texto: "Es el techo de las prácticas prohibidas (Art. 5), no del Art. 4: la alfabetización no aparece en la lista de multas del Art. 99. Quien te venda un curso citando esa cifra, te está vendiendo miedo.",
    },
];

const temario = [
    {
        num: "01",
        titulo: "Qué es (y qué no es) la IA",
        puntos: [
            "Desmontando mitos: qué hace de verdad y qué es marketing",
            "IA generativa vs IA tradicional, con ejemplos del día a día",
            "Cómo funcionan los modelos por dentro, a nivel usuario",
            "Límites reales: dónde acierta y dónde no llega",
        ],
    },
    {
        num: "02",
        titulo: "El mapa de herramientas",
        puntos: [
            "ChatGPT, Copilot, Gemini, Claude y NotebookLM: quién es quién",
            "Cuál conviene según la tarea y lo que ya usáis",
            "Criterios para elegir herramienta en la empresa",
            "Cuándo una gratuita NO vale para uso profesional",
        ],
    },
    {
        num: "03",
        titulo: "Riesgos reales: alucinaciones, sesgos y deepfakes",
        puntos: [
            "Qué son las alucinaciones y cómo pillarlas antes de que cuesten dinero",
            "Sesgos de los modelos: de dónde salen y qué implican",
            "Deepfakes y desinformación: cómo reconocerlos",
            "Por qué la supervisión humana no es opcional",
        ],
    },
    {
        num: "04",
        titulo: "Shadow IA: el uso que ya existe en tu empresa",
        puntos: [
            "Qué es la shadow IA y por qué es riesgo legal y de seguridad",
            "Cómo detectar quién usa qué sin autorización",
            "Encauzarla sin prohibirla: la vía que funciona",
            "El caso típico: datos de clientes en cuentas gratuitas",
        ],
    },
    {
        num: "05",
        titulo: "El AI Act sin humo: qué te obliga de verdad",
        puntos: [
            "Qué es el Reglamento y a quién aplica (spoiler: también a ti)",
            "Art. 4: la obligación de tomar medidas, aplicable desde febrero de 2025",
            "La clasificación por riesgo, explicada para pymes",
            "Qué multa de verdad el Reglamento — y por qué el Art. 4 no está en esa lista",
        ],
    },
    {
        num: "06",
        titulo: "RGPD e IA: la combinación que nadie explica bien",
        puntos: [
            "Qué datos se pueden meter en una IA y cuáles nunca",
            "Datos personales, sensibles y de clientes: las tres líneas rojas",
            "Quién responde: el papel del responsable del tratamiento",
            "Cómo documentar el uso de IA de forma conforme",
        ],
    },
    {
        num: "07",
        titulo: "La política de uso y la evidencia",
        puntos: [
            "Qué debe incluir la política interna de IA",
            "Cómo comunicarla para que el equipo la siga de verdad",
            "El registro formativo: la prueba de las medidas que has tomado",
            "Qué enseñar si un día pregunta una inspección",
        ],
    },
];

const piezas = [
    {
        num: "01",
        href: "/cumplimiento",
        kicker: "Auditoría IA · desde 950 €",
        titulo: "No sé por dónde empezar",
        desc: "Inventario de la IA que ya se usa, riesgos por perfil, informe y plan de acción. Es el trabajo de los pasos 1 y 2.",
        enlaceTexto: "Ver la auditoría →",
        foto: "/despachos.webp",
    },
    {
        num: "02",
        href: "/formacion/empresas",
        kicker: "Formación · desde 1.800 €",
        titulo: "Sé que tengo que formar",
        desc: "La alfabetización del Art. 4, con certificado nominal y registro formativo fechado. Los pasos 3 y 4, resueltos.",
        enlaceTexto: "Ver la formación →",
        foto: "/despachos.webp",
    },
    {
        num: "03",
        href: "/cumplimiento",
        kicker: "Implantación · desde 1.200 €",
        titulo: "Quiero usarla bien desde el principio",
        desc: "La herramienta configurada, los permisos revisados y la política interna de uso redactada y comunicada.",
        enlaceTexto: "Ver la implantación →",
        foto: "/despachos.webp",
    },
];

export default function AiActPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Esquema datos={migas([{ nombre: "Formación en IA", url: "/formacion" }, { nombre: "Alfabetización del Art. 4", url: "/formacion/ai-act" }])} />
            <Esquema datos={curso({
                nombre: "Alfabetización en IA (Art. 4 del Reglamento Europeo de IA)",
                descripcion: "Qué es la IA, qué riesgos tiene y cómo usarla con responsabilidad. La base de alfabetización, pensada para integrarse en las medidas del Art. 4, con certificado nominal y registro formativo fechado.",
                url: "/formacion/ai-act",
                precioDesde: 750,
                certificado: "Certificado nominal y registro formativo fechado",
            })} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <Header />

            {/* Hero con foto + velo lateral y formulario translúcido */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/escribiendo-ventana.webp"
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
                            <i className="fa-solid fa-scale-balanced" style={{ marginRight: "0.6rem" }}></i>
                            Reglamento (UE) 2024/1689 · Art. 4
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
                            Formar a tu equipo en IA{" "}
                            <span style={{ color: "#f6c39c" }}>ya no es opcional</span>
                        </h1>
                        <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: 0, maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                            Desde febrero de 2025, el artículo 4 del Reglamento Europeo de IA exige a
                            quien provee y a quien despliega sistemas de IA adoptar medidas para
                            alfabetizar a su personal. Sí: también si lo único que usáis es ChatGPT.
                            Aquí tienes lo que exige, sin humo.
                        </p>
                    </div>

                    {/* Captura en el hero: el curso viaja como origen del lead */}
                    <FormularioCurso origen="Alfabetización del Art. 4" />
                </div>
            </section>

            {/* Salta entre todas las formaciones sin volver atras */}
            <FormacionTabs />

            {/* Qué exige y desde cuándo — split degradado */}
            <section aria-label="Qué exige el Art. 4" style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                <div className="container aa2-mitades">
                    <div className="aa2-mitad">
                        <span className="aa2-marca" aria-hidden="true">§</span>
                        <div className="aa2-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>Qué exige, en corto</span>
                            <h2 className="aa2-titulo">
                                Alfabetización <span style={{ color: "#f6c39c" }}>adaptada a cada puesto</span>
                            </h2>
                            <p className="aa2-sub">
                                Quien provee y quien despliega sistemas de IA debe adoptar medidas para
                                apoyar el desarrollo de la alfabetización en IA de su personal y de quien
                                maneja esos sistemas en su nombre. Obliga a quien desarrolla IA y también
                                a quien solo la usa. Y desde el Ómnibus digital de julio de 2026 es un
                                <strong> deber de medios</strong> aún más claro: ya no se exige alcanzar
                                un nivel «suficiente», sino tomar medidas adaptadas al puesto y al uso —
                                y poder demostrarlas.
                            </p>
                            <div className="aa2-datos">
                                <span>Aplicable desde feb. 2025</span>
                                <span>Sin horas mínimas, nivel exigido ni certificado oficial</span>
                                <span>Certificado nominal + registro fechado</span>
                                <span className="aa2-dato-precio">4 h · desde 750 €</span>
                            </div>
                            <div className="aa2-enlaces">
                                <a href="#temario" className="aa2-enlace">Ver el temario completo ↓</a>
                                <Link href="/precios#formar" className="aa2-enlace">Ver la tabla de precios →</Link>
                            </div>
                            <p className="aa2-nota">
                                ¿La quieres junto a la herramienta que usáis? Ese es el{" "}
                                <Link href="/formacion/empresas">curso estrella, desde 1.800 € →</Link>
                            </p>
                        </div>
                    </div>
                    <div className="aa2-mitad">
                        <div className="aa2-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>Las fechas que importan</span>
                            {fechas.map((f, i) => (
                                <div key={f.fecha} className={i === 0 ? "aa2-fecha" : "aa2-fecha aa2-fecha-2"}>
                                    <span className="aa2-fecha-valor">{f.fecha}</span>
                                    <p>{f.texto}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Temario de la alfabetización — acordeones integrados en tinta */}
            <section id="temario" style={{ padding: "2.8rem 0 3.4rem", background: "#1c1917", scrollMarginTop: "6rem" }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    <div className="tem-cabecera">
                        <span className="mono-label tem-kicker">Temario</span>
                        <h2 className="tem-titulo">El temario de la alfabetización, bloque a bloque</h2>
                        <p className="tem-sub">Siete bloques, de qué es la IA a cómo dejar la evidencia que lo acredita —
                        adaptados al nivel del equipo y con vuestros ejemplos.</p>
                    </div>
                    {temario.map((b) => (
                        <details key={b.num} className="aa-acordeon" name="temario-aiact">
                            <summary>
                                <span className="aa-acordeon-num mono-label">{b.num}</span>
                                <span className="aa-acordeon-t">{b.titulo}</span>
                                <i className="fas fa-chevron-down"></i>
                            </summary>
                            <ul className="aa-puntos">
                                {b.puntos.map((pt) => <li key={pt}>{pt}</li>)}
                            </ul>
                        </details>
                    ))}
                </div>
            </section>

            {/* Precios de un vistazo — banda de cifras */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917", borderTop: "1px solid rgba(250,246,239,0.08)" }}>
                <div className="container">
                    <div className="aa2-cifras">
                        <div className="aa2-cifra">
                            <span className="aa2-cifra-valor">desde 750 €</span>
                            <span className="aa2-cifra-etiqueta">Alfabetización suelta · Art. 4</span>
                        </div>
                        <div className="aa2-cifra">
                            <span className="aa2-cifra-valor">desde 950 €</span>
                            <span className="aa2-cifra-etiqueta">Auditoría IA · inventario y plan</span>
                        </div>
                        <div className="aa2-cifra">
                            <span className="aa2-cifra-valor">desde 1.800 €</span>
                            <span className="aa2-cifra-etiqueta">Curso estrella · Art. 4 + herramienta</span>
                        </div>
                        <div className="aa2-cifra">
                            <span className="aa2-cifra-valor">desde 2.400 €</span>
                            <span className="aa2-cifra-etiqueta">Cursos a medida · SCORM</span>
                        </div>
                    </div>
                    <p className="aa2-cifras-pie">
                        No se paga por alumno, sino por sesión —{" "}
                        <Link href="/precios#formar">Ver la tabla de precios →</Link>
                    </p>
                </div>
            </section>

            {/* El cumplimiento en 4 pasos — foto ambiental + velo, como el "quién lo imparte" */}
            <section style={{ position: "relative", overflow: "hidden", padding: "4.5rem 0", background: "#1c1917" }}>
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
                <div className="container" style={{ maxWidth: 1000, position: "relative", zIndex: 2 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Qué hacer</span>
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
                            El cumplimiento de una pyme, en 4 pasos
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.7, margin: 0, maxWidth: 560 }}>
                            Ninguno necesita un departamento legal — sí orden y dejarlo por escrito.
                        </p>
                    </div>
                    <div className="aa2-pasos">
                        {pasos.map((p) => (
                            <div key={p.num} className="aa2-paso">
                                <span className="aa2-paso-num mono-label">{p.num}</span>
                                <h3>{p.titulo}</h3>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Casos más concretos — barra tinta */}
            <nav aria-label="Casos concretos" className="nav-barra">
                <div className="container nav-barra-fila">
                    <span className="nav-barra-etiqueta mono-label">¿Tu caso es más concreto?</span>
                    <Link href="/sectores/despachos" className="nav-barra-item">Despachos profesionales</Link>
                    <Link href="/formacion/directivos" className="nav-barra-item">Dirección</Link>
                    <Link href="/formacion/centros-educativos" className="nav-barra-item">Centros educativos</Link>
                    <Link href="/sectores/academias" className="nav-barra-item">Academias</Link>
                    <Link href="/formacion/cursos-a-medida" className="nav-barra-item">Cursos a medida · SCORM</Link>
                </div>
            </nav>

            {/* Cómo se cumple — paneles a sangre con foto, como los pilares del index */}
            <section style={{ padding: 0 }}>
                <div className="aa2-piezas-cabecera">
                    <h2 className="aa2-etiqueta" style={{ marginBottom: 0 }}>Lo que necesitas, según dónde estés</h2>
                </div>
                <div className="aa2-piezas">
                    {piezas.map((pz) => (
                        <Link key={pz.num} href={pz.href} className="aa2-pieza">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="aa2-pieza-fondo" src={pz.foto} alt="" aria-hidden="true" loading="lazy" />
                            <span className="aa2-pieza-velo" aria-hidden="true"></span>
                            <span className="aa2-pieza-marca" aria-hidden="true">{pz.num}</span>
                            <span className="aa2-pieza-cuerpo">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>{pz.kicker}</span>
                                <span className="aa2-pieza-titulo">«{pz.titulo}»</span>
                                <span className="aa2-pieza-desc">{pz.desc}</span>
                                <span className="aa2-pieza-cta">{pz.enlaceTexto}</span>
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* FAQ — split en tinta con el CTA integrado */}
            <section style={{ padding: "4rem 0", background: "#1c1917" }}>
                <div className="container aa2-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem", color: "#faf6ef" }}>
                            Lo que preguntan las empresas
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.65, margin: "0 0 1.6rem", fontSize: "0.95rem" }}>
                            En 30 minutos te digo qué perfiles tienes, qué formación les toca y
                            qué evidencia guardar.
                        </p>
                        <Link href="/#contact" className="aa2-cta">Pedir mis 30 minutos →</Link>
                        <Link href="/casos" className="aa2-enlace" style={{ marginTop: "0.9rem", display: "inline-block" }}>Ver sistemas de IA que ya funcionan →</Link>
                        <Link href="/diagnostico" className="aa2-enlace" style={{ marginTop: "0.5rem", display: "block", opacity: 0.72 }}>¿Por dónde empiezo? Test de 3 min →</Link>
                    </div>
                    <div>
                        {faqs.map((f) => (
                            <details key={f.question} className="aa-faq" name="faq-aiact">
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
                .aa2-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .aa2-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .aa2-marca {
                    position: absolute;
                    top: 0.6rem;
                    right: 1.4rem;
                    font-family: var(--font-display, serif);
                    font-size: clamp(5rem, 9vw, 8rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .aa2-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3rem 0;
                    width: 100%;
                }
                .aa2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .aa2-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.65;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .aa2-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .aa2-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .aa2-datos .aa2-dato-precio { color: #f6c39c; }
                .aa2-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem 1.3rem;
                    margin-top: 1rem;
                }
                .aa2-enlace {
                    display: inline-block;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .aa2-enlace:hover {
                    color: #faf6ef;
                    transform: translateX(6px);
                }
                .aa2-nota {
                    margin: 0.6rem 0 0;
                    font-size: 0.85rem;
                    line-height: 1.6;
                    color: rgba(250, 246, 239, 0.6);
                }
                .aa2-nota a { color: #f6c39c; font-weight: 600; }
                .aa2-nota a:hover { color: #faf6ef; }
                .aa2-fecha {
                    display: flex;
                    flex-direction: column;
                    gap: 0.35rem;
                }
                .aa2-fecha-2 {
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                    padding-top: 1.3rem;
                    margin-top: 1.3rem;
                }
                .aa2-fecha-valor {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 3vw, 2.2rem);
                    font-weight: 600;
                    color: #f6c39c;
                    line-height: 1;
                }
                .aa2-fecha p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                @media (max-width: 800px) {
                    .aa2-mitades { grid-template-columns: 1fr; gap: 0; }
                    .aa2-cuerpo { padding: 2.2rem 0; }
                }
                .aa2-pasos {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.8rem 3rem;
                }
                .aa2-paso {
                    display: flex;
                    flex-direction: column;
                    gap: 0.3rem;
                    border-top: 1px solid rgba(250, 246, 239, 0.16);
                    padding-top: 1rem;
                }
                .aa2-paso-num { color: #f6c39c; }
                .aa2-paso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.3;
                }
                .aa2-paso p {
                    color: rgba(250, 246, 239, 0.8);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                @media (max-width: 700px) {
                    .aa2-pasos { grid-template-columns: 1fr; gap: 1.4rem; }
                }
                .aa2-etiqueta {
                    text-align: center;
                    font-family: var(--font-mono, monospace);
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.55);
                    margin: 0 0 2.2rem;
                }
                .aa-acordeon {
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                }
                .aa-acordeon:last-of-type {
                    border-bottom: 1px solid rgba(250, 246, 239, 0.14);
                }
                .aa-acordeon summary {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.3rem 0.4rem;
                    cursor: pointer;
                }
                .aa-acordeon summary::-webkit-details-marker { display: none; }
                .aa-acordeon-num { color: #f6c39c; flex-shrink: 0; }
                .aa-acordeon-t {
                    flex: 1;
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.05rem, 2vw, 1.3rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.3;
                    transition: color 0.2s ease;
                }
                .aa-acordeon summary:hover .aa-acordeon-t { color: #f6c39c; }
                .aa-acordeon summary i { color: #f6c39c; font-size: 0.8rem; flex-shrink: 0; transition: transform 0.3s ease; }
                .aa-acordeon[open] summary i { transform: rotate(180deg); }
                .aa-puntos {
                    margin: 0;
                    padding: 0 0.4rem 1.5rem 3rem;
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                }
                .aa-puntos li {
                    color: rgba(250, 246, 239, 0.75);
                    font-size: 0.93rem;
                    line-height: 1.5;
                    padding-left: 1.1rem;
                    position: relative;
                }
                .aa-puntos li::before { content: "·"; position: absolute; left: 0.2rem; color: #f6c39c; font-weight: 700; }
                @media (max-width: 600px) { .aa-puntos { padding-left: 1.5rem; } }
                .aa2-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .aa2-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .aa2-cifra-valor {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .aa2-cifra-etiqueta {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                .aa2-cifras-pie {
                    text-align: center;
                    margin: 1.8rem 0 0;
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.65);
                }
                .aa2-cifras-pie a { color: #f6c39c; font-weight: 600; }
                .aa2-cifras-pie a:hover { color: #faf6ef; }
                @media (max-width: 800px) {
                    .aa2-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }
                .aa2-piezas-cabecera {
                    background: #1c1917;
                    padding: 2.4rem 0 1.6rem;
                }
                .aa2-piezas {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                }
                .aa2-pieza {
                    position: relative;
                    display: flex;
                    align-items: flex-end;
                    min-height: 24rem;
                    overflow: hidden;
                    color: inherit;
                    background: #1c1917;
                }
                .aa2-pieza-fondo {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .aa2-pieza:hover .aa2-pieza-fondo { transform: scale(1.04); }
                .aa2-pieza-velo {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(28,25,23,0.35) 0%, rgba(28,25,23,0.6) 45%, rgba(28,25,23,0.9) 100%);
                }
                .aa2-pieza-marca {
                    position: absolute;
                    top: 1rem;
                    left: 1.5rem;
                    font-family: var(--font-display, serif);
                    font-size: clamp(3.5rem, 6vw, 5.5rem);
                    font-weight: 700;
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.16);
                    pointer-events: none;
                }
                .aa2-pieza-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.55rem;
                    padding: 5rem 1.8rem 1.9rem;
                }
                .aa2-pieza-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.25rem, 2vw, 1.55rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.2;
                }
                .aa2-pieza-desc {
                    font-size: 0.9rem;
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.55;
                }
                .aa2-pieza-cta {
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.92rem;
                    margin-top: 0.3rem;
                    transition: transform 0.25s ease;
                }
                .aa2-pieza:hover .aa2-pieza-cta { transform: translateX(6px); }
                @media (max-width: 900px) {
                    .aa2-piezas { grid-template-columns: 1fr; }
                    .aa2-pieza { min-height: 19rem; }
                    .aa2-pieza-cuerpo { padding: 4rem 1.4rem 1.6rem; }
                }
                .aa2-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .aa2-faq-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .aa2-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .aa2-cta:hover {
                    background: #faf6ef;
                    transform: translateY(-2px);
                }
                .aa-faq { border-top: 1px solid rgba(250, 246, 239, 0.14); }
                .aa-faq:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .aa-faq summary {
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
                .aa-faq summary::-webkit-details-marker { display: none; }
                .aa-faq summary:hover { color: #f6c39c; padding-left: 1rem; }
                .aa-faq summary i { color: #f6c39c; font-size: 0.8rem; flex-shrink: 0; transition: transform 0.3s ease; }
                .aa-faq[open] summary i { transform: rotate(180deg); }
                .tem-cabecera {
                    text-align: center;
                    max-width: 660px;
                    margin: 0 auto 2.4rem;
                }
                .tem-kicker { color: #f6c39c; }
                .tem-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 3.2vw, 2.4rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0.9rem 0 0.7rem;
                }
                .tem-sub {
                    color: rgba(250, 246, 239, 0.7);
                    font-size: 0.95rem;
                    line-height: 1.65;
                    margin: 0;
                }
            `}</style>
        </main>
    );
}
