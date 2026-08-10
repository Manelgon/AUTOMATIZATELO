import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SistemasTabs from "@/components/SistemasTabs";
import FormularioCurso from "@/components/FormularioCurso";

export const metadata: Metadata = {
    title: "Automatización de Ventas para Pymes",
    description:
        "Automatiza tu ciclo de ventas: leads respondidos en minutos, seguimiento automático, propuestas y facturas solas. Desde 500 €.",
    alternates: { canonical: "https://automatizatelo.com/sistemas/ventas" },
    openGraph: {
        title: "Automatización de ventas: menos picar datos, más cerrar",
        description: "Del lead al cobro sin trabajo manual: respuesta inmediata, seguimiento automático y facturación sola.",
        url: "https://automatizatelo.com/sistemas/ventas",
    },
};

const faqs = [
    {
        question: "¿Qué partes del ciclo de ventas se pueden automatizar?",
        answer: "Casi todas las que no son hablar con el cliente: la respuesta inicial al lead (en minutos, no al día siguiente), la calificación con reglas que tú defines, los recordatorios de seguimiento, la generación de propuestas desde plantillas, la factura al cerrar y el aviso si un cliente se enfría. Lo que no automatizo es la conversación de venta en sí — esa es tuya, y ahora tendrás tiempo para tenerla.",
    },
    {
        question: "¿Necesito un CRM para automatizar las ventas?",
        answer: "Ayuda mucho, pero no es requisito de entrada: se puede empezar automatizando sobre lo que uses hoy (email, hojas de cálculo, WhatsApp) y dar el salto al CRM cuando tenga sentido. Si toca elegirlo e implantarlo, eso tiene página propia — y va sin comisiones de ningún proveedor.",
    },
    {
        question: "¿Cuánto cuesta automatizar las ventas?",
        answer: "Una automatización concreta — por ejemplo, la respuesta inmediata a leads o los recordatorios de seguimiento — desde 500 €. El ciclo comercial completo (captación, seguimiento, propuestas y facturación funcionando solos) es un proyecto de área desde 2.000 €. Precio cerrado por escrito antes de empezar.",
    },
    {
        question: "¿Los mensajes automáticos no espantan al cliente?",
        answer: "Los mensajes malos espantan, sean automáticos o no. Los flujos se redactan con tu tono y se disparan cuando aportan (confirmar recepción, recordar una propuesta, avisar de un vencimiento) — y en cuanto el cliente responde algo que necesita criterio, entra tu equipo. El cliente nota que le contestan rápido, no que le contesta una máquina.",
    },
    {
        question: "¿Esto vale para mi sector?",
        answer: "Si vendes con presupuestos, seguimiento y facturas, sí — da igual que seas gestoría, empresa de servicios, academia o consultora. Los flujos se montan sobre tu proceso real, no sobre una plantilla; por eso el primer paso es la auditoría gratuita de 30 minutos.",
    },
    {
        question: "¿Cuánto se tarda en tenerlo funcionando?",
        answer: "Un flujo suelto — la respuesta inmediata al lead, por ejemplo — suele estar en producción en unas dos semanas. El ciclo comercial completo va según alcance, entre uno y tres meses; el plazo se cierra por escrito igual que el precio.",
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
    "name": "Automatización de ventas para pymes",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "areaServed": "España",
    "description": "Automatización del ciclo comercial: respuesta inmediata a leads, calificación, seguimiento automático, propuestas y facturación. Desde 500 € por flujo; ciclo completo desde 2.000 €.",
};

const pasos = [
    {
        num: "01",
        titulo: "El lead, respondido en minutos",
        desc: "Entra por la web, el email o WhatsApp y recibe respuesta al momento — con sus datos ya registrados. Un lead sin respuesta rápida se enfría, y muchas veces acaba en la competencia.",
    },
    {
        num: "02",
        titulo: "Seguimiento que no se olvida",
        desc: "Recordatorios y toques automáticos con tu tono: la propuesta que lleva una semana sin respuesta, el cliente que se enfría, el vencimiento que se acerca.",
    },
    {
        num: "03",
        titulo: "Propuestas y facturas sin picar datos",
        desc: "La propuesta sale de una plantilla con los datos del cliente ya puestos; al cerrar, la factura se genera y se envía sola. Del sí al cobro sin administración manual.",
    },
    {
        num: "04",
        titulo: "Y tú viendo el embudo entero",
        desc: "Qué hay abierto, qué se ha enfriado y qué está a punto de cerrar — sin montar informes a mano. Para dirigir la venta con datos, no con sensaciones.",
    },
];

const piezasCiclo = [
    { href: "/sistemas/crm", t: "El CRM donde vive todo", d: "Elegido sin comisiones e implantado, para que el ciclo tenga dónde apoyarse." },
    { href: "/sistemas/chatbots-whatsapp", t: "El primer contacto por WhatsApp", d: "Atención inmediata al lead que escribe fuera de horario, con escalado a persona." },
    { href: "/sistemas/documentos", t: "Propuestas y facturas", d: "Generadas solas desde tus datos, con tu plantilla — y las que llegan, leídas solas." },
];

export default function AutomatizacionVentasPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header />

            {/* Hero con foto + velo lateral y formulario translúcido */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/ecommerce-hero.webp"
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
                            <i className="fa-solid fa-chart-line" style={{ marginRight: "0.6rem" }}></i>
                            Automatización de ventas
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
                            Menos picar datos,{" "}
                            <span style={{ color: "#f6c39c" }}>más cerrar ventas</span>
                        </h1>
                        <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: 0, maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                            Tu equipo comercial no está para copiar datos ni perseguir recordatorios:
                            está para vender. Automatizo el ciclo entero — del lead que entra al cobro
                            que sale — para que las horas se vayan en conversaciones, no en administración.
                        </p>
                    </div>

                    {/* Captura en el hero: el flujo pedido viaja como origen del lead */}
                    <FormularioCurso
                        origen="Automatización de ventas"
                        etiquetaPersonas="Tamaño del equipo comercial"
                        etiquetaOpciones="¿Qué te urge más?*"
                        opciones={[
                            "Responder a los leads al momento",
                            "Que el seguimiento no se olvide",
                            "Propuestas y facturas sin picar datos",
                            "El ciclo comercial completo",
                            "Aún no lo tengo claro",
                        ]}
                    />
                </div>
            </section>

            {/* Salta entre las piezas de sistemas sin volver atras */}
            <SistemasTabs />

            {/* En corto — split degradado, como el curso estrella */}
            <section aria-label="El servicio, en corto" style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                <div className="container ve2-mitades">
                    <div className="ve2-mitad">
                        <span className="ve2-marca" aria-hidden="true">↗</span>
                        <div className="ve2-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>En corto</span>
                            <h2 className="ve2-titulo">
                                Que ninguna venta se caiga <span style={{ color: "#f6c39c" }}>por llegar tarde</span>
                            </h2>
                            <p className="ve2-sub">
                                Leads respondidos en minutos, seguimiento automático, propuestas en un
                                clic y facturación sola. Sobre tus herramientas de hoy o sobre un CRM
                                bien implantado — y siempre con tu tono en cada mensaje: el cliente
                                nota que le contestan rápido, no que le contesta una máquina.
                            </p>
                            <div className="ve2-datos">
                                <span>Respuesta al lead en minutos</span>
                                <span>Tu tono en cada mensaje</span>
                                <span>En producción en ~2 semanas</span>
                                <span className="ve2-dato-precio">Desde 500 € · ciclo completo 2.000 €</span>
                            </div>
                            <div className="ve2-enlaces">
                                <a href="#ciclo" className="ve2-enlace">Ver cómo queda el ciclo ↓</a>
                                <Link href="/precios#automatizar" className="ve2-enlace">Ver la tabla de precios →</Link>
                            </div>
                            <p className="ve2-nota">
                                ¿No sabes si las ventas son tu mayor fuga de tiempo? El{" "}
                                <Link href="/diagnostico">diagnóstico gratis, 12 preguntas en 3 minutos</Link>,
                                te dice por dónde empezar.
                            </p>
                        </div>
                    </div>
                    <div className="ve2-mitad">
                        <div className="ve2-cuerpo">
                            <div className="ve2-caso">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>Lo que se arregla primero</span>
                                <h3>El lead que se contesta tarde</h3>
                                <p>El presupuesto que se pide el viernes y se responde el martes suele estar perdido. Ese es el flujo que más rápido se paga.</p>
                            </div>
                            <div className="ve2-caso ve2-caso-2">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>Y después</span>
                                <h3>La propuesta que nadie recuerda</h3>
                                <p>Enviada, sin respuesta y sin que nadie vuelva a llamar. El seguimiento automático la rescata sin depender de la memoria.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Precios de un vistazo — banda de cifras */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917" }}>
                <div className="container">
                    <div className="ve2-cifras">
                        <div className="ve2-cifra">
                            <span className="ve2-cifra-num">desde 500 €</span>
                            <span className="ve2-cifra-lab">Un flujo suelto del ciclo</span>
                        </div>
                        <div className="ve2-cifra">
                            <span className="ve2-cifra-num">desde 2.000 €</span>
                            <span className="ve2-cifra-lab">El ciclo comercial completo</span>
                        </div>
                        <div className="ve2-cifra">
                            <span className="ve2-cifra-num">~2 semanas</span>
                            <span className="ve2-cifra-lab">Hasta el primer flujo en producción</span>
                        </div>
                        <div className="ve2-cifra">
                            <span className="ve2-cifra-num">minutos</span>
                            <span className="ve2-cifra-lab">Respuesta automática al lead</span>
                        </div>
                    </div>
                    <p className="ve2-cifras-pie">
                        Precio cerrado por escrito antes de empezar, sin permanencia —{" "}
                        <Link href="/precios#automatizar">Ver la tabla de precios →</Link>
                    </p>
                </div>
            </section>

            {/* Cómo queda tu ciclo — en tinta, tira de proceso */}
            <section id="ciclo" style={{ padding: "3.6rem 0", background: "#1c1917", scrollMarginTop: "6rem" }}>
                <div className="container">
                    <div className="ve2-cab">
                        <span className="mono-label ve2-cab-kicker">Cómo queda tu ciclo</span>
                        <h2 className="ve2-cab-titulo">Del lead al cobro, sin trabajo manual</h2>
                        <p className="ve2-cab-sub">
                            Cuatro tramos. Se pueden montar de uno en uno o todos a la vez.
                        </p>
                    </div>
                    <div className="ve2-pasos">
                        {pasos.map((p, i) => (
                            <div key={p.num} className="ve2-paso">
                                <div className="ve2-paso-cab">
                                    <span className="ve2-paso-num">{p.num}</span>
                                    {i < 3 && <span className="ve2-paso-linea" aria-hidden="true"></span>}
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

            {/* Con qué se monta — foto ambiental + velo */}
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
                <div className="container ve2-piezas-grid" style={{ position: "relative", zIndex: 2 }}>
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Con qué se monta</span>
                        <h2 className="ve2-piezas-titulo">
                            Tres piezas que aquí <span style={{ color: "#f6c39c" }}>trabajan juntas</span>
                        </h2>
                        <p className="ve2-piezas-sub">
                            Cada una tiene su página y su precio, y se contrata suelta. En ventas se
                            montan coordinadas: el contacto entra, se registra, se sigue y se factura
                            sin que nadie copie un dato.
                        </p>
                    </div>
                    <div>
                        {piezasCiclo.map((p) => (
                            <Link key={p.href} href={p.href} className="ve2-pieza">
                                <div className="ve2-pieza-cab">
                                    <h3>{p.t}</h3>
                                    <span className="ve2-pieza-f">→</span>
                                </div>
                                <p>{p.d}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ — split en tinta con el CTA integrado */}
            <section style={{ padding: "4rem 0", background: "#1c1917" }}>
                <div className="container ve2-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem", color: "#faf6ef" }}>
                            Preguntas frecuentes
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.65, margin: "0 0 1.6rem", fontSize: "0.95rem" }}>
                            30 minutos gratis: repasamos tu ciclo de ventas y te digo qué automatizar
                            primero — y cuántas ventas se te están enfriando por no llegar a tiempo.
                        </p>
                        <Link href="/#contact" className="ve2-cta">Pedir mis 30 minutos →</Link>
                        <Link href="/casos" className="ve2-enlace" style={{ marginTop: "0.9rem", display: "inline-block" }}>Ver sistemas que ya funcionan →</Link>
                    </div>
                    <div>
                        {faqs.map((f) => (
                            <details key={f.question} className="av-faq" name="faq-ventas">
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
                .ve2-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .ve2-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .ve2-marca {
                    position: absolute;
                    top: 0.8rem;
                    right: 1.4rem;
                    font-size: clamp(4.5rem, 8vw, 7rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .ve2-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3rem 0;
                    width: 100%;
                }
                .ve2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .ve2-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.65;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .ve2-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .ve2-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .ve2-datos .ve2-dato-precio { color: #f6c39c; }
                .ve2-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem 1.3rem;
                    margin-top: 1rem;
                }
                .ve2-enlace {
                    display: inline-block;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .ve2-enlace:hover { color: #faf6ef; transform: translateX(6px); }
                .ve2-nota {
                    margin: 0.6rem 0 0;
                    font-size: 0.85rem;
                    line-height: 1.6;
                    color: rgba(250, 246, 239, 0.6);
                }
                .ve2-nota a { color: #f6c39c; font-weight: 600; }
                .ve2-nota a:hover { color: #faf6ef; }
                .ve2-caso {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                }
                .ve2-caso-2 {
                    border-top: 1px solid rgba(250, 246, 239, 0.16);
                    padding-top: 1.3rem;
                    margin-top: 1.3rem;
                }
                .ve2-caso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.2;
                }
                .ve2-caso p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                @media (max-width: 800px) {
                    .ve2-mitades { grid-template-columns: 1fr; gap: 0; }
                    .ve2-cuerpo { padding: 2.2rem 0; }
                }
                .ve2-cab {
                    text-align: center;
                    max-width: 660px;
                    margin: 0 auto 2.4rem;
                }
                .ve2-cab-kicker { color: #f6c39c; }
                .ve2-cab-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 3.2vw, 2.4rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0.9rem 0 0.7rem;
                }
                .ve2-cab-sub {
                    color: rgba(250, 246, 239, 0.7);
                    font-size: 0.95rem;
                    line-height: 1.65;
                    margin: 0;
                }
                .ve2-pasos {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.6rem;
                }
                .ve2-paso-cab {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-bottom: 0.9rem;
                }
                .ve2-paso-num {
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
                .ve2-paso-linea {
                    flex: 1;
                    height: 1px;
                    background: rgba(250, 246, 239, 0.2);
                }
                .ve2-paso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0 0 0.4rem;
                    line-height: 1.3;
                }
                .ve2-paso p {
                    color: rgba(250, 246, 239, 0.8);
                    font-size: 0.9rem;
                    line-height: 1.6;
                    margin: 0;
                }
                @media (max-width: 900px) {
                    .ve2-pasos { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 560px) {
                    .ve2-pasos { grid-template-columns: 1fr; }
                    .ve2-paso-linea { display: none; }
                }
                .ve2-piezas-grid {
                    display: grid;
                    grid-template-columns: 0.42fr 0.58fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 900px) {
                    .ve2-piezas-grid { grid-template-columns: 1fr; gap: 2rem; }
                }
                .ve2-piezas-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 1rem 0 0.8rem;
                    text-shadow: 0 2px 30px rgba(28,25,23,0.45);
                }
                .ve2-piezas-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.7;
                    font-size: 0.95rem;
                    margin: 0;
                }
                .ve2-pieza {
                    display: block;
                    color: inherit;
                    border-top: 1px solid rgba(250, 246, 239, 0.22);
                    padding: 1.1rem 0;
                }
                .ve2-pieza:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.22); }
                .ve2-pieza-cab {
                    display: flex;
                    align-items: baseline;
                    justify-content: space-between;
                    gap: 1rem;
                }
                .ve2-pieza h3 {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.1rem, 2vw, 1.35rem);
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.25;
                    transition: color 0.2s ease;
                }
                .ve2-pieza:hover h3 { color: #f6c39c; }
                .ve2-pieza-f {
                    color: #f6c39c;
                    font-weight: 600;
                    flex-shrink: 0;
                    display: inline-block;
                    transition: transform 0.25s ease;
                }
                .ve2-pieza:hover .ve2-pieza-f { transform: translateX(6px); }
                .ve2-pieza p {
                    color: rgba(250, 246, 239, 0.8);
                    line-height: 1.6;
                    font-size: 0.9rem;
                    margin: 0.3rem 0 0;
                    max-width: 560px;
                }
                .ve2-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .ve2-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .ve2-cifra-num {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .ve2-cifra-lab {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                .ve2-cifras-pie {
                    text-align: center;
                    margin: 1.8rem 0 0;
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.65);
                }
                .ve2-cifras-pie a { color: #f6c39c; font-weight: 600; }
                .ve2-cifras-pie a:hover { color: #faf6ef; }
                @media (max-width: 800px) {
                    .ve2-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }
                @media (max-width: 900px) {
                }
                .ve2-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .ve2-faq-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .ve2-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .ve2-cta:hover { background: #faf6ef; transform: translateY(-2px); }
                .av-faq { border-top: 1px solid rgba(250, 246, 239, 0.14); }
                .av-faq:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .av-faq summary {
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
                .av-faq summary::-webkit-details-marker { display: none; }
                .av-faq summary:hover { color: #f6c39c; padding-left: 1rem; }
                .av-faq summary i { color: #f6c39c; font-size: 0.8rem; flex-shrink: 0; transition: transform 0.3s ease; }
                .av-faq[open] summary i { transform: rotate(180deg); }
            `}</style>
        </main>
    );
}
