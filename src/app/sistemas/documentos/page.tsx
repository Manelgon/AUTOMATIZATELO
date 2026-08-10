import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SistemasTabs from "@/components/SistemasTabs";
import FormularioCurso from "@/components/FormularioCurso";

export const metadata: Metadata = {
    title: "Extracción de Datos de Documentos con IA",
    description:
        "Facturas, albaranes y documentos que se leen solos: la IA extrae los datos y los registra en tu sistema. Y los que emites, generados solos. Desde 500 €.",
    alternates: { canonical: "https://automatizatelo.com/sistemas/documentos" },
    openGraph: {
        title: "Documentos que se leen solos: extracción de datos con IA",
        description: "Llega el documento, la IA extrae los datos, tu sistema los registra. Y tus facturas e informes salen solos, con tu plantilla.",
        url: "https://automatizatelo.com/sistemas/documentos",
    },
};

const faqs = [
    {
        question: "¿Qué tipos de documentos puede leer?",
        answer: "Los del día a día de una pyme: facturas de proveedores, albaranes, recibos, pedidos, formularios y documentos escaneados o fotografiados con el móvil. La combinación de OCR e IA entiende formatos distintos sin que haya que configurar una plantilla por proveedor — que es donde los sistemas antiguos se rompían.",
    },
    {
        question: "¿Y si la IA lee mal un dato?",
        answer: "Para eso está el diseño con revisión: los datos dudosos se marcan y una persona los confirma antes de que entren al sistema — no se registra nada 'a ciegas' en contabilidad. Con el uso, los casos dudosos son cada vez menos. La IA hace el trabajo mecánico; el criterio sigue siendo humano.",
    },
    {
        question: "¿Dónde acaban los datos extraídos?",
        answer: "Donde tú trabajes: tu programa de facturación o contabilidad, tu hoja de cálculo, tu panel de gestión o tu CRM. La gracia no es leer el documento — es que el dato llegue solo al sitio donde lo necesitas, sin copiarlo dos veces.",
    },
    {
        question: "¿Esto también genera mis facturas, o solo lee las que llegan?",
        answer: "Las dos direcciones, y en esta misma página tienes las dos explicadas: se leen las que llegan y se generan las tuyas — facturas, albaranes, presupuestos e informes que salen solos desde tus datos, con tu plantilla y tu marca, y se envían y archivan sin que nadie los toque.",
    },
    {
        question: "¿Cuánto cuesta?",
        answer: "Un flujo concreto — por ejemplo, las facturas de proveedores entrando solas a tu sistema — desde 500 €. El circuito documental completo (entrada, extracción, registro y generación de tus propios documentos) suele ir en proyectos desde 2.000 €. Precio cerrado por escrito antes de empezar.",
    },
    {
        question: "¿Cuánto se tarda en tenerlo funcionando?",
        answer: "Un flujo de entrada suele estar en producción en unas dos semanas: la primera se monta con documentos reales vuestros y la segunda se ajusta con los casos raros que aparecen. El circuito completo, según alcance — el plazo se cierra por escrito igual que el precio.",
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
    "name": "Extracción y generación de documentos con IA (OCR + IA)",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "areaServed": "España",
    "description": "Lectura automática de facturas, albaranes y documentos con OCR e IA, con registro en el sistema de la empresa y revisión humana donde toca; y generación automática de facturas, albaranes e informes con la plantilla del cliente. Desde 500 €.",
};

const entrada = [
    {
        num: "01",
        titulo: "Llega el documento",
        desc: "Por email, foto del móvil o una carpeta compartida — como te llegue hoy. No hay que cambiar cómo trabajan tus proveedores.",
    },
    {
        num: "02",
        titulo: "La IA extrae lo que importa",
        desc: "Proveedor, fechas, conceptos, importes, impuestos. Sin plantillas por proveedor: entiende formatos distintos, escaneados incluidos.",
    },
    {
        num: "03",
        titulo: "Se registra donde trabajas",
        desc: "Contabilidad, hoja de cálculo, panel o CRM — el dato llega solo a su sitio. Lo dudoso se marca para revisión humana antes de entrar.",
    },
    {
        num: "04",
        titulo: "Y el archivo, ordenado solo",
        desc: "Cada documento guardado con su nombre y su carpeta, localizable en segundos. Se acabó el «¿dónde está la factura de marzo?».",
    },
];

const salida = [
    { n: "01", texto: "Ocurre el hecho: una venta, una cita, el cierre de mes" },
    { n: "02", texto: "El sistema genera el documento con tu plantilla y tu marca" },
    { n: "03", texto: "Se envía a quien toca y se archiva solo, con su registro" },
];

export default function ExtraccionDatosPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
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
                            <i className="fa-solid fa-file-import" style={{ marginRight: "0.6rem" }}></i>
                            Documentos · OCR + IA
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
                            Documentos que{" "}
                            <span style={{ color: "#f6c39c" }}>se leen solos</span>
                        </h1>
                        <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: 0, maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                            Cada factura que alguien pica a mano son minutos perdidos y un error
                            esperando su momento. Con OCR e IA, el documento llega, los datos se
                            extraen y se registran en tu sistema — y tu equipo revisa, no transcribe.
                        </p>
                    </div>

                    {/* Captura en el hero: el flujo pedido viaja como origen del lead */}
                    <FormularioCurso
                        origen="Facturas y documentos (OCR + IA)"
                        etiquetaPersonas="Tamaño de la empresa"
                        etiquetaOpciones="¿Qué necesitas?*"
                        opciones={[
                            "Leer las facturas que me llegan",
                            "Generar mis facturas e informes",
                            "El circuito documental completo",
                            "Aún no lo tengo claro",
                        ]}
                    />
                </div>
            </section>

            {/* Salta entre las piezas de sistemas sin volver atras */}
            <SistemasTabs />

            {/* En corto — split degradado, como el curso estrella */}
            <section aria-label="El servicio, en corto" style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                <div className="container do2-mitades">
                    <div className="do2-mitad">
                        <span className="do2-marca" aria-hidden="true">¶</span>
                        <div className="do2-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>En corto</span>
                            <h2 className="do2-titulo">
                                El papeleo entra y sale <span style={{ color: "#f6c39c" }}>sin pasar por un teclado</span>
                            </h2>
                            <p className="do2-sub">
                                Extracción de datos de facturas, albaranes y documentos con OCR e IA,
                                registrados solos en tu sistema; y en la otra dirección, tus facturas
                                e informes generados desde tus datos. Es de los procesos que más trabajo
                                repetitivo quitan en una pyme con papeleo — sobre todo en gestorías,
                                despachos y empresas de servicios.
                            </p>
                            <div className="do2-datos">
                                <span>Sin plantillas por proveedor</span>
                                <span>Revisión humana donde toca</span>
                                <span>En producción en ~2 semanas</span>
                                <span className="do2-dato-precio">Desde 500 € el flujo</span>
                            </div>
                            <div className="do2-enlaces">
                                <a href="#circuito" className="do2-enlace">Ver el circuito completo ↓</a>
                                <Link href="/precios#automatizar" className="do2-enlace">Ver la tabla de precios →</Link>
                            </div>
                            <p className="do2-nota">
                                ¿No sabes si el papeleo es tu mayor fuga de tiempo? El{" "}
                                <Link href="/diagnostico">diagnóstico gratis, 12 preguntas en 3 minutos</Link>,
                                te dice por dónde empezar.
                            </p>
                        </div>
                    </div>
                    <div className="do2-mitad">
                        <div className="do2-cuerpo">
                            <div className="do2-caso">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>Quién lo nota antes</span>
                                <h3>Gestorías y despachos</h3>
                                <p>Cientos de facturas de terceros al mes: es donde antes se nota el ahorro.</p>
                            </div>
                            <div className="do2-caso do2-caso-2">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>Y también</span>
                                <h3>Empresas con proveedores</h3>
                                <p>Albaranes, pedidos y recibos que hoy alguien abre uno a uno para teclear cuatro datos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Precios de un vistazo — banda de cifras */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917" }}>
                <div className="container">
                    <div className="do2-cifras">
                        <div className="do2-cifra">
                            <span className="do2-cifra-num">desde 500 €</span>
                            <span className="do2-cifra-lab">Un flujo de entrada</span>
                        </div>
                        <div className="do2-cifra">
                            <span className="do2-cifra-num">desde 2.000 €</span>
                            <span className="do2-cifra-lab">El circuito documental completo</span>
                        </div>
                        <div className="do2-cifra">
                            <span className="do2-cifra-num">~2 semanas</span>
                            <span className="do2-cifra-lab">Hasta tenerlo en producción</span>
                        </div>
                        <div className="do2-cifra">
                            <span className="do2-cifra-num">0 plantillas</span>
                            <span className="do2-cifra-lab">Que configurar por proveedor</span>
                        </div>
                    </div>
                    <p className="do2-cifras-pie">
                        Precio cerrado por escrito antes de empezar, sin permanencia —{" "}
                        <Link href="/precios#automatizar">Ver la tabla de precios →</Link>
                    </p>
                </div>
            </section>

            {/* De entrada — el circuito, en tinta */}
            <section id="circuito" style={{ padding: "3.6rem 0", background: "#1c1917", scrollMarginTop: "6rem" }}>
                <div className="container">
                    <div className="do2-cab">
                        <span className="mono-label do2-cab-kicker">De entrada</span>
                        <h2 className="do2-cab-titulo">Del buzón a tu sistema, sin manos</h2>
                        <p className="do2-cab-sub">
                            Cuatro pasos, y el cuarto es el que nadie cuenta: dejar el archivo ordenado.
                        </p>
                    </div>
                    <div className="do2-pasos">
                        {entrada.map((p, i) => (
                            <div key={p.num} className="do2-paso">
                                <div className="do2-paso-cab">
                                    <span className="do2-paso-num">{p.num}</span>
                                    {i < 3 && <span className="do2-paso-linea" aria-hidden="true"></span>}
                                </div>
                                <h3>{p.titulo}</h3>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Casos más concretos — tira numerada por sector */}
            <nav aria-label="Casos concretos" className="nav-barra">
                <div className="container nav-barra-fila">
                    <span className="nav-barra-etiqueta mono-label">¿Tu caso es más concreto?</span>
                    {[
                        { href: "/sectores/administradores-fincas", label: "Fincas" },
                        { href: "/sectores/despachos", label: "Despachos" },
                        { href: "/sectores/academias", label: "Academias" },
                        { href: "/sectores/rrhh", label: "RRHH" },
                        { href: "/cumplimiento", label: "Cumplimiento" },
                    ].map((t, i) => (
                        <Link key={t.href} href={t.href} className="nav-barra-item">
                            {t.label}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* De salida — foto ambiental + velo */}
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
                    background: "linear-gradient(90deg, rgba(28,25,23,0.78) 0%, rgba(28,25,23,0.6) 45%, rgba(28,25,23,0.35) 75%, rgba(28,25,23,0.2) 100%)",
                }} />
                <div className="container do2-salida-grid" style={{ position: "relative", zIndex: 2 }}>
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>De salida</span>
                        <h2 className="do2-salida-titulo">
                            Y los que emites, <span style={{ color: "#f6c39c" }}>se generan solos</span>
                        </h2>
                        <p className="do2-salida-sub">
                            Tus facturas, albaranes, presupuestos e informes salen desde tus propios
                            datos, con tu plantilla y tu marca, y se envían a quien toca. Como los
                            informes con diseño propio que genera el panel que construí para una
                            clínica real.
                        </p>
                        <div className="do2-enlaces">
                            <Link href="/casos" className="do2-enlace">Ver ese caso →</Link>
                        </div>
                    </div>
                    <div>
                        <ul className="do2-salida-pasos">
                            {salida.map((s) => (
                                <li key={s.n}><span>{s.n}</span>{s.texto}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAQ — split en tinta con el CTA integrado */}
            <section style={{ padding: "4rem 0", background: "#1c1917" }}>
                <div className="container do2-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem", color: "#faf6ef" }}>
                            Preguntas frecuentes
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.65, margin: "0 0 1.6rem", fontSize: "0.95rem" }}>
                            30 minutos gratis: me enseñas un documento de los vuestros y te digo cómo
                            quedaría el flujo, qué costaría y qué parte seguiría revisando una persona.
                        </p>
                        <Link href="/#contact" className="do2-cta">Pedir mis 30 minutos →</Link>
                    </div>
                    <div>
                        {faqs.map((f) => (
                            <details key={f.question} className="ex-faq" name="faq-documentos">
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
                .do2-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .do2-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .do2-marca {
                    position: absolute;
                    top: 0.6rem;
                    right: 1.4rem;
                    font-family: var(--font-display, serif);
                    font-size: clamp(5rem, 9vw, 8rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .do2-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3rem 0;
                    width: 100%;
                }
                .do2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .do2-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.65;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .do2-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .do2-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .do2-datos .do2-dato-precio { color: #f6c39c; }
                .do2-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem 1.3rem;
                    margin-top: 1rem;
                }
                .do2-enlace {
                    display: inline-block;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .do2-enlace:hover { color: #faf6ef; transform: translateX(6px); }
                .do2-nota {
                    margin: 0.6rem 0 0;
                    font-size: 0.85rem;
                    line-height: 1.6;
                    color: rgba(250, 246, 239, 0.6);
                }
                .do2-nota a { color: #f6c39c; font-weight: 600; }
                .do2-nota a:hover { color: #faf6ef; }
                .do2-caso {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                }
                .do2-caso-2 {
                    border-top: 1px solid rgba(250, 246, 239, 0.16);
                    padding-top: 1.3rem;
                    margin-top: 1.3rem;
                }
                .do2-caso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.2;
                }
                .do2-caso p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                @media (max-width: 800px) {
                    .do2-mitades { grid-template-columns: 1fr; gap: 0; }
                    .do2-cuerpo { padding: 2.2rem 0; }
                }
                .do2-cab {
                    text-align: center;
                    max-width: 660px;
                    margin: 0 auto 2.4rem;
                }
                .do2-cab-kicker { color: #f6c39c; }
                .do2-cab-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 3.2vw, 2.4rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0.9rem 0 0.7rem;
                }
                .do2-cab-sub {
                    color: rgba(250, 246, 239, 0.7);
                    font-size: 0.95rem;
                    line-height: 1.65;
                    margin: 0;
                }
                .do2-pasos {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.6rem;
                }
                .do2-paso-cab {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-bottom: 0.9rem;
                }
                .do2-paso-num {
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
                .do2-paso-linea {
                    flex: 1;
                    height: 1px;
                    background: rgba(250, 246, 239, 0.2);
                }
                .do2-paso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0 0 0.4rem;
                    line-height: 1.3;
                }
                .do2-paso p {
                    color: rgba(250, 246, 239, 0.8);
                    font-size: 0.9rem;
                    line-height: 1.6;
                    margin: 0;
                }
                @media (max-width: 900px) {
                    .do2-pasos { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 560px) {
                    .do2-pasos { grid-template-columns: 1fr; }
                    .do2-paso-linea { display: none; }
                }
                .do2-salida-grid {
                    display: grid;
                    grid-template-columns: 0.55fr 0.45fr;
                    gap: 4rem;
                    align-items: center;
                }
                @media (max-width: 900px) {
                    .do2-salida-grid { grid-template-columns: 1fr; gap: 2rem; }
                }
                .do2-salida-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 1rem 0 0.8rem;
                    text-shadow: 0 2px 30px rgba(28,25,23,0.45);
                }
                .do2-salida-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.7;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .do2-salida-pasos {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                }
                .do2-salida-pasos li {
                    display: flex;
                    align-items: baseline;
                    gap: 0.9rem;
                    color: #faf6ef;
                    font-size: 0.97rem;
                    line-height: 1.5;
                    border-top: 1px solid rgba(250, 246, 239, 0.2);
                    padding: 0.9rem 0;
                }
                .do2-salida-pasos li:last-child { border-bottom: 1px solid rgba(250, 246, 239, 0.2); }
                .do2-salida-pasos li span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.72rem;
                    font-weight: 700;
                    color: #f6c39c;
                    flex-shrink: 0;
                }
                .do2-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .do2-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .do2-cifra-num {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .do2-cifra-lab {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                .do2-cifras-pie {
                    text-align: center;
                    margin: 1.8rem 0 0;
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.65);
                }
                .do2-cifras-pie a { color: #f6c39c; font-weight: 600; }
                .do2-cifras-pie a:hover { color: #faf6ef; }
                @media (max-width: 800px) {
                    .do2-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }
                @media (max-width: 900px) {
                }
                .do2-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .do2-faq-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .do2-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .do2-cta:hover { background: #faf6ef; transform: translateY(-2px); }
                .ex-faq { border-top: 1px solid rgba(250, 246, 239, 0.14); }
                .ex-faq:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .ex-faq summary {
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
                .ex-faq summary::-webkit-details-marker { display: none; }
                .ex-faq summary:hover { color: #f6c39c; padding-left: 1rem; }
                .ex-faq summary i { color: #f6c39c; font-size: 0.8rem; flex-shrink: 0; transition: transform 0.3s ease; }
                .ex-faq[open] summary i { transform: rotate(180deg); }
            `}</style>
        </main>
    );
}
