import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SistemasTabs from "@/components/SistemasTabs";
import FormularioCurso from "@/components/FormularioCurso";

export const metadata: Metadata = {
    title: "Chatbots para Empresas: WhatsApp y Web",
    description:
        "Chatbots en WhatsApp (API oficial) y en tu web: citas, avisos y dudas resueltas 24/7, conectados a tu sistema. Desde 2.000 €.",
    alternates: { canonical: "https://automatizatelo.com/sistemas/chatbots-whatsapp" },
    openGraph: {
        title: "Chatbot de WhatsApp con API oficial — sin números bloqueados",
        description: "Citas, avisos y dudas resueltas en el canal que todo el mundo usa. Conectado a tu negocio, con escalado a persona.",
        url: "https://automatizatelo.com/sistemas/chatbots-whatsapp",
    },
};

const faqs = [
    {
        question: "¿Me pueden bloquear el número de WhatsApp por usar un bot?",
        answer: "Con atajos, sí — y pasa constantemente: las herramientas que automatizan WhatsApp sin la API oficial violan las condiciones de Meta y el número de la empresa acaba bloqueado, con todos los chats dentro. Yo trabajo solo con la API oficial de WhatsApp Business: número verificado, plantillas de mensaje aprobadas y cero riesgo de perder el canal por el que te habla media clientela.",
    },
    {
        question: "¿Qué necesito para tener un chatbot en WhatsApp?",
        answer: "Un número para la API de WhatsApp Business (puede ser uno nuevo o migrar el actual — te acompaño en el alta con Meta) y los accesos a lo que el bot deba consultar: agenda, CRM o catálogo. Del resto — configuración, conversaciones, plantillas y conexión con tus sistemas — me encargo yo.",
    },
    {
        question: "¿Cuánto cuesta un chatbot de WhatsApp?",
        answer: "El bot forma parte de un proyecto de automatización desde 2.000€, porque su valor está en conectarlo a tu agenda o tu sistema — un bot que no consulta nada solo contesta bonito. Aparte están las tarifas de conversación de Meta, que son céntimos y se pagan directamente a Meta: sin sobreprecio ni comisión mía, como todo lo que hago.",
    },
    {
        question: "¿Puedo seguir atendiendo yo desde el mismo número?",
        answer: "Sí — y así es como debe funcionar: el bot resuelve lo repetitivo y cuando la conversación necesita criterio humano, la pasa a tu equipo con todo el contexto recogido. El cliente no repite su historia y tú solo entras donde aportas.",
    },
    {
        question: "¿El cliente sabrá que habla con un bot?",
        answer: "Sí, siempre — el bot se presenta como asistente automático. Desde agosto de 2026 lo exige además el artículo 50 del Reglamento Europeo de IA, pero lo haría igual: un bot que se hace pasar por humano genera desconfianza justo cuando falla. La transparencia funciona mejor y te deja en regla.",
    },
    {
        question: "¿Cuánto se tarda en tenerlo funcionando?",
        answer: "El alta de la API con Meta suele llevar unos días; el bot conectado a tus sistemas, entre dos y cuatro semanas según lo que tenga que consultar. Precio y plazo cerrados por escrito antes de empezar, como siempre.",
    },
    {
        question: "¿Y si mis clientes no escriben por WhatsApp?",
        answer: "Entonces el bot va en tu web, con la misma lógica: consulta tus sistemas, resuelve lo repetitivo y escala a una persona. El canal se elige por dónde te escriben hoy, no por moda — y a veces la respuesta es que no necesitas bot, sino automatizar el correo.",
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
    "name": "Chatbot de WhatsApp para empresas (API oficial)",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Automatizatelo",
        "url": "https://automatizatelo.com",
    },
    "areaServed": "España",
    "description": "Chatbots de WhatsApp con la API oficial de WhatsApp Business: citas, avisos y dudas resueltas 24/7, conectados a los sistemas de la empresa y con escalado a persona. Dentro de proyectos desde 2.000€.",
};

const capacidades = [
    {
        num: "01",
        titulo: "Da citas desde el propio chat",
        desc: "Consulta tu agenda real, propone huecos, confirma y recoloca — con recordatorios que reducen ausencias y lista de espera que rellena lo que se libera.",
    },
    {
        num: "02",
        titulo: "Responde lo repetitivo al momento",
        desc: "Horarios, precios, estado de una gestión, preguntas frecuentes. Lo que hoy contesta tu equipo cien veces, contestado en segundos a cualquier hora.",
    },
    {
        num: "03",
        titulo: "Avisa sin que nadie escriba",
        desc: "Confirmaciones, recordatorios y avisos de estado — con plantillas aprobadas por Meta que salen solas cuando toca.",
    },
    {
        num: "04",
        titulo: "Escala a tu equipo con contexto",
        desc: "Cuando hace falta una persona, la conversación pasa con todo lo hablado. El cliente no repite; tu equipo no empieza de cero.",
    },
];

const atajos = [
    "Automatizan un WhatsApp normal contra las condiciones de Meta",
    "Un día el número amanece bloqueado — con todos los chats dentro",
    "Sin plantillas aprobadas: los avisos masivos son ruleta rusa",
    "Sin verificación de empresa: menos confianza del cliente",
];

const oficial = [
    "WhatsApp Business API: la vía que Meta diseñó para empresas",
    "Número verificado y estable — el canal es tuyo y lo seguirá siendo",
    "Plantillas de mensaje aprobadas para avisos y recordatorios",
    "Costes de conversación de céntimos, pagados a Meta sin sobreprecio",
];

export default function ChatbotsWhatsappPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header />

            {/* Hero con foto + velo lateral y formulario translúcido */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/clinicas-hero.webp"
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
                            <i className="fa-brands fa-whatsapp" style={{ marginRight: "0.6rem" }}></i>
                            Chatbot de WhatsApp · API oficial
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
                            Tu empresa, atendiendo por{" "}
                            <span style={{ color: "#f6c39c" }}>WhatsApp a cualquier hora</span>
                        </h1>
                        <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: 0, maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                            WhatsApp es donde ya te escriben tus clientes. Un chatbot con la API oficial
                            les da cita, resuelve sus dudas y les avisa de lo importante — conectado a tu
                            agenda y tus sistemas, y pasando a tu equipo lo que necesite una persona.
                        </p>
                    </div>

                    {/* Captura en el hero: el uso pedido viaja como origen del lead */}
                    <FormularioCurso
                        origen="Chatbot de WhatsApp / web"
                        etiquetaPersonas="Tamaño del equipo"
                        etiquetaOpciones="¿Para qué lo quieres?*"
                        opciones={[
                            "Dar citas y recordatorios",
                            "Resolver dudas repetidas",
                            "Avisos y comunicaciones",
                            "Bot en la web, no en WhatsApp",
                            "Aún no lo tengo claro",
                        ]}
                    />
                </div>
            </section>

            {/* Salta entre las piezas de sistemas sin volver atras */}
            <SistemasTabs />

            {/* En corto — split degradado, como el curso estrella */}
            <section aria-label="El servicio, en corto" style={{ padding: 0, background: "linear-gradient(110deg, #b45309 0%, #7c2d12 28%, #431407 54%, #1c1917 78%)" }}>
                <div className="container cw2-mitades">
                    <div className="cw2-mitad">
                        <span className="cw2-marca" aria-hidden="true">
                            <i className="fa-brands fa-whatsapp"></i>
                        </span>
                        <div className="cw2-cuerpo">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>En corto</span>
                            <h2 className="cw2-titulo">
                                Atención 24/7 <span style={{ color: "#f6c39c" }}>sin arriesgar tu número</span>
                            </h2>
                            <p className="cw2-sub">
                                Chatbot en el WhatsApp de tu empresa con la API oficial de WhatsApp
                                Business: citas, avisos y dudas resueltas a cualquier hora, conectado
                                a tu agenda y a tus sistemas, y con el bot en tu propiedad.
                            </p>
                            <div className="cw2-datos">
                                <span>API oficial · número verificado</span>
                                <span>Escalado a persona con contexto</span>
                                <span>En marcha en 2 – 4 semanas</span>
                                <span className="cw2-dato-precio">Dentro de proyectos desde 2.000 €</span>
                            </div>
                            <div className="cw2-enlaces">
                                <a href="#api" className="cw2-enlace">API oficial o número bloqueado ↓</a>
                                <Link href="/precios" className="cw2-enlace">Ver la tabla de precios →</Link>
                            </div>
                            <p className="cw2-nota">
                                ¿No sabes si el bot es tu prioridad? El{" "}
                                <Link href="/diagnostico">diagnóstico gratis, 12 preguntas en 3 minutos</Link>,
                                te dice por dónde empezar.
                            </p>
                        </div>
                    </div>
                    <div className="cw2-mitad">
                        <div className="cw2-cuerpo">
                            <div className="cw2-caso">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>Ya funciona a diario</span>
                                <h3>Una clínica estética</h3>
                                <p>El bot gestiona reservas, recordatorios y lista de espera, consultando la agenda real y recolocando los huecos que se liberan.</p>
                            </div>
                            <div className="cw2-caso cw2-caso-2">
                                <span className="mono-label" style={{ color: "#f6c39c" }}>Y también</span>
                                <h3>Comedores escolares</h3>
                                <p>Cientos de familias de una empresa de Cataluña avisan ausencias y resuelven dudas sin colapsar a la administración.</p>
                            </div>
                            <div className="cw2-enlaces">
                                <Link href="/casos" className="cw2-enlace">Ver los dos casos →</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Precios de un vistazo — banda de cifras */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917" }}>
                <div className="container">
                    <div className="cw2-cifras">
                        <div className="cw2-cifra">
                            <span className="cw2-cifra-num">desde 2.000 €</span>
                            <span className="cw2-cifra-lab">Proyecto con el bot conectado</span>
                        </div>
                        <div className="cw2-cifra">
                            <span className="cw2-cifra-num">céntimos</span>
                            <span className="cw2-cifra-lab">Por conversación, pagados a Meta</span>
                        </div>
                        <div className="cw2-cifra">
                            <span className="cw2-cifra-num">2 – 4 semanas</span>
                            <span className="cw2-cifra-lab">Del alta con Meta a producción</span>
                        </div>
                        <div className="cw2-cifra">
                            <span className="cw2-cifra-num">24/7</span>
                            <span className="cw2-cifra-lab">Sin turnos ni horario de oficina</span>
                        </div>
                    </div>
                    <p className="cw2-cifras-pie">
                        Las tarifas de Meta van directas a Meta, sin sobreprecio —{" "}
                        <Link href="/precios">Ver la tabla de precios →</Link>
                    </p>
                </div>
            </section>

            {/* Qué sabe hacer — en tinta */}
            <section style={{ padding: "3.6rem 0", background: "#1c1917" }}>
                <div className="container">
                    <div className="cw2-cab">
                        <span className="mono-label cw2-cab-kicker">Qué sabe hacer</span>
                        <h2 className="cw2-cab-titulo">Un bot que consulta, no que contesta bonito</h2>
                        <p className="cw2-cab-sub">
                            Su valor está en estar conectado: si no mira tu agenda ni tu sistema, no
                            resuelve nada.
                        </p>
                    </div>
                    <div className="cw2-pasos">
                        {capacidades.map((p, i) => (
                            <div key={p.num} className="cw2-paso">
                                <div className="cw2-paso-cab">
                                    <span className="cw2-paso-num">{p.num}</span>
                                    {i < 3 && <span className="cw2-paso-linea" aria-hidden="true"></span>}
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

            {/* API oficial o número bloqueado — sobre foto con velo */}
            <section id="api" style={{ position: "relative", overflow: "hidden", padding: "4.5rem 0", background: "#1c1917", scrollMarginTop: "6rem" }}>
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
                    background: "linear-gradient(90deg, rgba(28,25,23,0.82) 0%, rgba(28,25,23,0.7) 45%, rgba(28,25,23,0.5) 75%, rgba(28,25,23,0.35) 100%)",
                }} />
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ marginBottom: "2rem", maxWidth: 640 }}>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Lo que nadie te cuenta</span>
                        <h2 className="cw2-api-titulo">
                            API oficial o <span style={{ color: "#f6c39c" }}>número bloqueado</span>
                        </h2>
                        <p className="cw2-api-sub">
                            Hay dos maneras de montar un bot en WhatsApp — y una de ellas acaba con el
                            número de tu empresa bloqueado, con todos los chats dentro.
                        </p>
                    </div>
                    <div className="cw2-vs">
                        <div className="cw2-vs-col">
                            <span className="mono-label cw2-vs-mal">Los atajos · lo barato que sale caro</span>
                            <ul>
                                {atajos.map((t) => (
                                    <li key={t}><i className="fa-solid fa-xmark" aria-hidden="true"></i><span>{t}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div className="cw2-vs-col">
                            <span className="mono-label cw2-vs-bien">La API oficial · lo que uso</span>
                            <ul>
                                {oficial.map((t) => (
                                    <li key={t}><i className="fa-solid fa-check" aria-hidden="true"></i><span>{t}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="cw2-api-pie">
                        Y siempre identificándose como asistente automático — lo exige el Art. 50 del
                        Reglamento Europeo de IA desde agosto de 2026, y además funciona mejor.{" "}
                        <Link href="/cumplimiento">Ver qué más te obliga el Reglamento →</Link>
                    </p>
                </div>
            </section>

            {/* FAQ — split en tinta con el CTA integrado */}
            <section style={{ padding: "4rem 0", background: "#1c1917" }}>
                <div className="container cw2-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>FAQ</span>
                        <h2 className="section-title" style={{ textAlign: "left", marginTop: "0.8rem", marginBottom: "0.9rem", color: "#faf6ef" }}>
                            Preguntas frecuentes
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.7)", lineHeight: 1.65, margin: "0 0 1.6rem", fontSize: "0.95rem" }}>
                            30 minutos gratis: me cuentas qué te preguntan tus clientes y te digo si
                            un bot te encaja — o si lo que necesitas es otra cosa.
                        </p>
                        <Link href="/#contact" className="cw2-cta">Pedir mis 30 minutos →</Link>
                    </div>
                    <div>
                        {faqs.map((f) => (
                            <details key={f.question} className="cw-faq" name="faq-chatbots">
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
                .cw2-mitades {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4.5rem;
                }
                .cw2-mitad {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .cw2-marca {
                    position: absolute;
                    top: 1rem;
                    right: 1.6rem;
                    font-size: clamp(3.5rem, 6vw, 5.5rem);
                    line-height: 1;
                    color: rgba(250, 246, 239, 0.1);
                    pointer-events: none;
                }
                .cw2-cuerpo {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 3rem 0;
                    width: 100%;
                }
                .cw2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.12;
                    letter-spacing: -0.01em;
                    margin: 0;
                }
                .cw2-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.65;
                    font-size: 0.97rem;
                    margin: 0;
                }
                .cw2-datos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem 1.3rem;
                    margin-top: 0.4rem;
                }
                .cw2-datos span {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.7);
                }
                .cw2-datos .cw2-dato-precio { color: #f6c39c; }
                .cw2-enlaces {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem 1.3rem;
                    margin-top: 1rem;
                }
                .cw2-enlace {
                    display: inline-block;
                    color: #f6c39c;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: transform 0.25s ease, color 0.2s ease;
                }
                .cw2-enlace:hover { color: #faf6ef; transform: translateX(6px); }
                .cw2-nota {
                    margin: 0.6rem 0 0;
                    font-size: 0.85rem;
                    line-height: 1.6;
                    color: rgba(250, 246, 239, 0.6);
                }
                .cw2-nota a { color: #f6c39c; font-weight: 600; }
                .cw2-nota a:hover { color: #faf6ef; }
                .cw2-caso {
                    display: flex;
                    flex-direction: column;
                    gap: 0.45rem;
                }
                .cw2-caso-2 {
                    border-top: 1px solid rgba(250, 246, 239, 0.16);
                    padding-top: 1.3rem;
                    margin-top: 1.3rem;
                }
                .cw2-caso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0;
                    line-height: 1.2;
                }
                .cw2-caso p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                @media (max-width: 800px) {
                    .cw2-mitades { grid-template-columns: 1fr; gap: 0; }
                    .cw2-cuerpo { padding: 2.2rem 0; }
                }
                .cw2-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .cw2-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .cw2-cifra-num {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .cw2-cifra-lab {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                .cw2-cifras-pie {
                    text-align: center;
                    margin: 1.8rem 0 0;
                    font-size: 0.88rem;
                    color: rgba(250, 246, 239, 0.65);
                }
                .cw2-cifras-pie a { color: #f6c39c; font-weight: 600; }
                .cw2-cifras-pie a:hover { color: #faf6ef; }
                @media (max-width: 800px) {
                    .cw2-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }
                .cw2-cab {
                    text-align: center;
                    max-width: 660px;
                    margin: 0 auto 2.4rem;
                }
                .cw2-cab-kicker { color: #f6c39c; }
                .cw2-cab-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.6rem, 3.2vw, 2.4rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0.9rem 0 0.7rem;
                }
                .cw2-cab-sub {
                    color: rgba(250, 246, 239, 0.7);
                    font-size: 0.95rem;
                    line-height: 1.65;
                    margin: 0;
                }
                .cw2-pasos {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.6rem;
                }
                .cw2-paso-cab {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-bottom: 0.9rem;
                }
                .cw2-paso-num {
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
                .cw2-paso-linea {
                    flex: 1;
                    height: 1px;
                    background: rgba(250, 246, 239, 0.2);
                }
                .cw2-paso h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0 0 0.4rem;
                    line-height: 1.3;
                }
                .cw2-paso p {
                    color: rgba(250, 246, 239, 0.8);
                    font-size: 0.9rem;
                    line-height: 1.6;
                    margin: 0;
                }
                @media (max-width: 900px) {
                    .cw2-pasos { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 560px) {
                    .cw2-pasos { grid-template-columns: 1fr; }
                    .cw2-paso-linea { display: none; }
                }
                @media (max-width: 900px) {
                }
                .cw2-api-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 1rem 0 0.7rem;
                    text-shadow: 0 2px 30px rgba(28,25,23,0.45);
                }
                .cw2-api-sub {
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.7;
                    font-size: 0.95rem;
                    margin: 0;
                }
                .cw2-vs {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2.5rem 3rem;
                }
                .cw2-vs-col {
                    border-top: 1px solid rgba(250, 246, 239, 0.2);
                    padding-top: 1.1rem;
                }
                .cw2-vs-mal { color: rgba(250, 246, 239, 0.55); }
                .cw2-vs-bien { color: #f6c39c; }
                .cw2-vs-col ul {
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    margin: 1rem 0 0;
                    padding: 0;
                    list-style: none;
                }
                .cw2-vs-col li {
                    display: flex;
                    gap: 0.8rem;
                    align-items: flex-start;
                    color: rgba(250, 246, 239, 0.85);
                    line-height: 1.6;
                    font-size: 0.93rem;
                }
                .cw2-vs-col li i {
                    margin-top: 0.28rem;
                    flex-shrink: 0;
                    font-size: 0.85rem;
                    color: rgba(250, 246, 239, 0.4);
                }
                .cw2-vs-col li .fa-check { color: #f6c39c; }
                .cw2-api-pie {
                    margin: 2.2rem 0 0;
                    max-width: 720px;
                    font-size: 0.9rem;
                    line-height: 1.7;
                    color: rgba(250, 246, 239, 0.75);
                }
                .cw2-api-pie a { color: #f6c39c; font-weight: 600; }
                .cw2-api-pie a:hover { color: #faf6ef; }
                @media (max-width: 800px) {
                    .cw2-vs { grid-template-columns: 1fr; gap: 1.8rem; }
                }
                .cw2-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .cw2-faq-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .cw2-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .cw2-cta:hover { background: #faf6ef; transform: translateY(-2px); }
                .cw-faq { border-top: 1px solid rgba(250, 246, 239, 0.14); }
                .cw-faq:last-of-type { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .cw-faq summary {
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
                .cw-faq summary::-webkit-details-marker { display: none; }
                .cw-faq summary:hover { color: #f6c39c; padding-left: 1rem; }
                .cw-faq summary i { color: #f6c39c; font-size: 0.8rem; flex-shrink: 0; transition: transform 0.3s ease; }
                .cw-faq[open] summary i { transform: rotate(180deg); }
            `}</style>
        </main>
    );
}
