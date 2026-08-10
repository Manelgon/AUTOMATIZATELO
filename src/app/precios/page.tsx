import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioCurso from "@/components/FormularioCurso";
import Esquema from "@/components/Esquema";
import { migas } from "@/lib/esquemas";

export const metadata: Metadata = {
    title: "Precios: Implantación de IA para Pymes",
    description:
        "Cuánto cuesta implantar IA en tu pyme: formación desde 750 €, auditoría del AI Act desde 950 € y automatización desde 500 €. Precio cerrado por escrito.",
    alternates: { canonical: "https://automatizatelo.com/precios" },
    openGraph: {
        title: "¿Cuánto cuesta automatizar tu negocio? Precios públicos",
        description: "Automatización desde 500 €, formación desde 750 €. Precio y plazo cerrados antes de empezar, sin permanencia.",
        url: "https://automatizatelo.com/precios",
    },
};

interface Fila {
    nombre: string;
    /** El formato en corto: horas, plazo, modalidad */
    formato: string;
    incluye: string;
    /** Lo que lee una persona */
    precio: string;
    /** Lo mismo en número, para el buscador: suelo y, si es horquilla, techo */
    min: number;
    max?: number;
    href: string;
    /** Las tres estrellas del catálogo: el mejor equilibrio para el cliente */
    estrella?: boolean;
}

const formar: Fila[] = [
    {
        nombre: "Alfabetización en IA (Art. 4)",
        formato: "4 h · toda la plantilla",
        incluye: "El bloque con el que se cubren las medidas del Art. 4: qué es la IA, riesgos y uso responsable. Certificado nominal y registro formativo fechado.",
        precio: "desde 750 €",
        min: 750,
        href: "/formacion/ai-act",
    },
    {
        nombre: "Alfabetización + herramienta",
        formato: "4 + 4 h · adaptable por equipo",
        incluye: "El bloque de alfabetización del Art. 4 más un taller práctico con la herramienta que ya usáis, sobre vuestros casos reales.",
        precio: "desde 1.800 €",
        min: 1800,
        href: "/formacion/empresas",
        estrella: true,
    },
    {
        nombre: "Taller por herramienta",
        formato: "1 día · 8 h",
        incluye: "ChatGPT, Copilot 365, Gemini + NotebookLM o Claude a fondo. Cada rol sale con casos montados para su trabajo.",
        precio: "1.400 – 2.000 €",
        min: 1400,
        max: 2000,
        href: "/formacion",
    },
    {
        nombre: "Programa in-company",
        formato: "20 h · 4 semanas",
        incluye: "Para mandos y equipos completos, con trabajo real aplicado entre sesión y sesión y evidencia documental completa.",
        precio: "desde 3.500 €",
        min: 3500,
        href: "/formacion/empresas",
    },
    {
        nombre: "In-company a medida",
        formato: "4 – 40 h · varios departamentos",
        incluye: "Un itinerario distinto por departamento: dirección decide, operaciones se quita trabajo y RRHH guarda la evidencia. Las horas se reparten según el peso de cada área.",
        precio: "por alcance",
        min: 0,
        href: "/formacion/empresas",
    },
    {
        nombre: "Sesión ejecutiva para dirección",
        formato: "medio día · 4 h",
        incluye: "Qué implantar, qué exige la ley y cómo gobernarlo, en horas de directivo. El programa completo de dirección, desde 1.800 €.",
        precio: "desde 900 €",
        min: 900,
        href: "/formacion/directivos",
    },
    {
        nombre: "Formación de claustro",
        formato: "1 día · 8 h (o 4 + 4)",
        incluye: "Para colegios, institutos y FP: práctica de aula, política de uso y la documentación de las medidas del Art. 4 del centro. Presencial, en remoto o SCORM.",
        precio: "1.100 – 1.500 €",
        min: 1100,
        max: 1500,
        href: "/formacion/centros-educativos",
    },
    {
        nombre: "Taller de IA para alumnado",
        formato: "2 h por grupo · mínimo 1.200 € por jornada",
        incluye: "Estudiar con IA sin copiar, y usarla para el CV, las entrevistas y la presencia profesional. El curso completo, desde 2.000 €. Sin cuentas de pago y con la protección de datos de menores por delante.",
        precio: "500 € por grupo",
        min: 500,
        href: "/formacion/alumnado",
    },
    {
        nombre: "Curso e-learning a medida (SCORM)",
        formato: "producción única",
        incluye: "Vuestra formación producida como curso e instalada en vuestra plataforma para siempre, con registro individual por alumno. También en marca blanca.",
        precio: "desde 2.400 €",
        min: 2400,
        href: "/formacion/cursos-a-medida",
    },
];

const cumplir: Fila[] = [
    {
        nombre: "Diagnóstico AI Act",
        formato: "entrega en 1–2 semanas",
        incluye: "Inventario de la IA en uso real, clasificación de riesgos según el Reglamento e informe con plan de acción priorizado.",
        precio: "desde 950 €",
        min: 950,
        href: "/cumplimiento",
    },
    {
        nombre: "Pack cumplimiento",
        formato: "diagnóstico + política + formación",
        incluye: "Todo el diagnóstico, la política de uso de IA redactada para tu empresa y la formación del Art. 4 con certificados nominales. El expediente completo.",
        precio: "desde 2.400 €",
        min: 2400,
        href: "/cumplimiento",
        estrella: true,
    },
    {
        nombre: "Implantación segura de herramientas",
        formato: "ChatGPT · Copilot · Gemini",
        incluye: "Elección sin comisiones, configuración de privacidad y uso de datos según el plan contratado, casos de uso por puesto y arranque del equipo. Licencias aparte, sin sobreprecio.",
        precio: "desde 1.200 €",
        min: 1200,
        href: "/cumplimiento",
    },
];

const automatizar: Fila[] = [
    {
        nombre: "Una automatización concreta",
        formato: "~2 semanas",
        incluye: "Una pieza suelta que ahorra horas ya: dos herramientas conectadas, las facturas leyéndose solas o un flujo comercial concreto.",
        precio: "desde 500 €",
        min: 500,
        href: "/sistemas",
    },
    {
        nombre: "Poner en marcha",
        formato: "la primera pieza seria",
        incluye: "El CRM implantado y migrado (HubSpot, Pipedrive, Zoho o a medida, sin comisiones) o las herramientas de IA configuradas con el equipo arrancado.",
        precio: "desde 1.200 €",
        min: 1200,
        href: "/sistemas/crm",
    },
    {
        nombre: "Un área completa",
        formato: "3 meses de soporte incluido",
        incluye: "Ventas, clientes u operaciones funcionando solos: hasta 5 procesos, chatbot de WhatsApp o web conectado a tus sistemas, panel a medida y documentos en los dos sentidos.",
        precio: "desde 3.000 €",
        min: 3000,
        href: "/sistemas",
        estrella: true,
    },
    {
        nombre: "La empresa entera",
        formato: "6 meses de soporte incluido",
        incluye: "El sistema completo: automatización integral, las integraciones que pida el alcance sin contarlas una a una, panel de control en tiempo real y formación del equipo incluida.",
        precio: "desde 8.000 €",
        min: 8000,
        href: "/sistemas/paneles",
    },
];

const variables = [
    {
        n: "01",
        titulo: "Cuántos procesos y cuántas herramientas",
        desc: "No cuesta lo mismo conectar dos herramientas que orquestar toda la operativa. Cada proceso y cada integración suman trabajo — y el presupuesto lo refleja tal cual.",
    },
    {
        n: "02",
        titulo: "Qué existe ya y qué hay que construir",
        desc: "Si ya tienes CRM, agenda o facturación, automatizo sobre ello. Si hay que construir el panel o el bot desde cero, es más proyecto — y se presupuesta como tal.",
    },
    {
        n: "03",
        titulo: "En formación: participantes y modalidad",
        desc: "Un taller para 8 personas en remoto no cuesta lo mismo que uno presencial para 30. La horquilla se cierra en la propuesta, con el número real de participantes.",
    },
    {
        n: "04",
        titulo: "Lo que nunca varía",
        desc: "El precio y el plazo se cierran por escrito antes de empezar, no hay permanencia y el código y los datos son tuyos. Eso no se negocia — va de serie.",
    },
];

const faqs = [
    {
        question: "¿Cuánto cuesta automatizar un proceso en una pyme?",
        answer: "Una automatización suelta y concreta — por ejemplo, unos avisos automáticos o las facturas entrando solas — desde 500 €, con entrega en unas dos semanas. Poner en marcha la primera pieza seria (las herramientas de IA configuradas o un CRM implantado y migrado) parte de 1.200 €. Automatizar un área completa (ventas, clientes u operaciones) parte de 3.000 €, y el sistema integral para toda la empresa, de 8.000 €.",
    },
    {
        question: "¿Cuánto cuesta un chatbot de atención al cliente?",
        answer: "Un bot de atención por WhatsApp o web no suele ir solo: forma parte de un proyecto de automatización de área, desde 3.000 €, porque necesita conectarse a tu agenda, CRM o catálogo para ser útil de verdad. Un bot sin sistema detrás contesta bonito pero no resuelve nada.",
    },
    {
        question: "¿Por qué los precios son \"desde\"? ¿Cuándo sé el precio final?",
        answer: "Porque cada negocio tiene procesos y herramientas distintos. El \"desde\" marca el suelo real de cada tipo de proyecto; el precio final se cierra por escrito en la propuesta, antes de empezar, junto con el plazo. Sin sorpresas a mitad de proyecto.",
    },
    {
        question: "¿Hay permanencia o cuotas mensuales obligatorias?",
        answer: "No. No hay permanencia ni cuotas obligatorias. Los proyectos de automatización incluyen soporte: 3 meses en un área completa y 6 meses en la empresa entera. Después, el mantenimiento es opcional — y como el código y los datos son tuyos, puedes seguir con cualquier proveedor.",
    },
    {
        question: "¿Cuánto cuesta la formación en IA para empresas?",
        answer: "El bloque de alfabetización del Art. 4 del AI Act, cuatro horas para toda la plantilla, desde 750 €. Un taller intensivo de un día por herramienta, entre 1.400 € y 2.000 €. Un programa in-company de 20 horas repartidas en cuatro semanas, desde 3.500 €. Y un curso e-learning a medida en SCORM para tu plataforma, desde 2.400 €. Siempre con certificado nominal y registro formativo.",
    },
    {
        question: "¿Cuánto cuesta la auditoría de cumplimiento del AI Act?",
        answer: "El diagnóstico — inventario de la IA en uso, clasificación de riesgos, informe y plan de acción — desde 950 €. El pack completo, que añade la política de uso de IA redactada para tu empresa y la formación del Art. 4 con certificados, desde 2.400 €. El precio final depende del tamaño de la empresa y de las herramientas en uso.",
    },
    {
        question: "¿Y la formación para colegios y para el alumnado?",
        answer: "La formación de claustro tiene la misma tarifa que la de empresas: un día de 8 horas entre 1.100 € y 1.500 €, o el bloque de alfabetización del Art. 4 desde 750 €. El taller para alumnado se cobra por grupo, 500 € cada uno, con un mínimo de 1.200 € por jornada en el centro — con varios grupos seguidos sale mejor —, y el curso completo, desde 2.000 €.",
    },
    {
        question: "¿El código y los datos son míos?",
        answer: "Sí, siempre. Todo lo que se construye para tu empresa — paneles, bots, automatizaciones — queda en tu propiedad, con sus datos y su código. Si mañana quieres cambiar de proveedor, te lo llevas todo.",
    },
];

const SITIO = "https://automatizatelo.com";

// Los quince productos como datos estructurados. Un "desde" es un minPrice sin
// techo; una horquilla lleva los dos. Importes sin IVA, como dice la tabla.
function oferta(f: Fila) {
    return {
        "@type": "Offer",
        "name": f.nombre,
        "description": f.incluye,
        "url": SITIO + f.href,
        "priceCurrency": "EUR",
        // el in-company a medida se presupuesta por alcance: no lleva precio,
        // y declarar 0 € sería declarar algo falso
        ...(f.min > 0 ? {
            "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "EUR",
                "minPrice": f.min,
                ...(f.max ? { "maxPrice": f.max } : {}),
                "valueAddedTaxIncluded": false,
            },
        } : {}),
        "availability": "https://schema.org/InStock",
        "areaServed": { "@type": "Country", "name": "España" },
        "itemOffered": {
            "@type": "Service",
            "name": f.nombre,
            "description": f.incluye,
            "provider": { "@type": "Organization", "name": "Automatizatelo", "url": SITIO },
        },
    };
}

const ofertasJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Tarifas de Automatizatelo",
    "url": SITIO + "/precios",
    "provider": { "@type": "Organization", "name": "Automatizatelo", "url": SITIO },
    "itemListElement": [
        { "@type": "OfferCatalog", "name": "Formar", "url": SITIO + "/precios#formar", "itemListElement": formar.map(oferta) },
        { "@type": "OfferCatalog", "name": "Cumplir", "url": SITIO + "/precios#cumplir", "itemListElement": cumplir.map(oferta) },
        { "@type": "OfferCatalog", "name": "Automatizar", "url": SITIO + "/precios#automatizar", "itemListElement": automatizar.map(oferta) },
    ],
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
    })),
};

/** Una familia entera: la cabecera pliega, pero llega abierta */
function Bloque({ id, num, titulo, sub, filas, resumen, pie }: {
    id: string;
    num: string;
    titulo: string;
    sub: string;
    filas: Fila[];
    /** lo que se lee a la derecha cuando está plegada */
    resumen: string;
    pie: React.ReactNode;
}) {
    return (
        <section id={id} style={{ padding: "3.4rem 0", background: "#1c1917", scrollMarginTop: "5rem" }}>
            <div className="container">
                <details className="pp2-familia" open>
                    <summary className="pp2-familia-cab">
                        <span className="pp2-familia-izq">
                            <span className="mono-label" style={{ color: "#f6c39c" }}>{num}</span>
                            <h2 className="pp2-titulo">{titulo}</h2>
                        </span>
                        <span className="pp2-familia-dcha">
                            <span className="mono-label pp2-familia-resumen">{resumen}</span>
                            <i className="fa-solid fa-chevron-down pp2-familia-flecha" aria-hidden="true"></i>
                        </span>
                    </summary>
                    <div className="pp2-familia-cuerpo">
                        <p className="pp2-sub">{sub}</p>
                        <Familia filas={filas} />
                        <p className="pp2-pie">{pie}</p>
                    </div>
                </details>
            </div>
        </section>
    );
}

/** Una familia del catálogo, como índice de filas: nombre · qué incluye · precio */
function Familia({ filas }: { filas: Fila[] }) {
    return (
        <div className="pp2-filas">
            {filas.map((f) => (
                <Link key={f.nombre + f.precio} href={f.href} className="pp2-fila">
                    <div className="pp2-fila-izq">
                        <h3>
                            {f.estrella && <span className="pp2-estrella" aria-hidden="true">★</span>}
                            {f.nombre}
                        </h3>
                        <span className="pp2-formato mono-label">{f.formato}</span>
                    </div>
                    <p className="pp2-incluye">{f.incluye}</p>
                    <span className="pp2-precio">{f.precio}</span>
                </Link>
            ))}
        </div>
    );
}

export default function PreciosPage() {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Esquema datos={migas([{ nombre: "Precios", url: "/precios" }])} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ofertasJsonLd) }} />
            <Header />

            {/* Hero con foto + velo lateral y captura */}
            <section style={{ position: "relative", overflow: "hidden", padding: "10rem 0 4rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/equipos-directivos.webp"
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
                />
                <div aria-hidden="true" style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(90deg, rgba(28,25,23,0.62) 0%, rgba(28,25,23,0.42) 38%, rgba(28,25,23,0.12) 65%, transparent 85%), linear-gradient(180deg, rgba(28,25,23,0.18) 0%, transparent 40%)",
                }} />
                <div className="container fc-hero-grid" style={{ position: "relative", zIndex: 2 }}>
                    <div>
                        <span className="kicker-mono" style={{ color: "#f6c39c" }}>
                            <i className="fa-solid fa-tag" style={{ marginRight: "0.6rem" }}></i>
                            Precios públicos · agosto 2026
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
                            ¿Cuánto cuesta{" "}
                            <span style={{ color: "#f6c39c" }}>automatizar tu negocio?</span>
                        </h1>
                        <p style={{ fontSize: "1.1rem", color: "rgba(250,246,239,0.88)", lineHeight: 1.7, margin: 0, maxWidth: 620, textShadow: "0 1px 20px rgba(28,25,23,0.4)" }}>
                            Publico las tarifas porque es la primera pregunta de todo el mundo.
                            Dieciséis productos con su precio de partida a la vista: <strong style={{ color: "#f6c39c" }}>formar</strong> desde
                            750 €, <strong style={{ color: "#f6c39c" }}>cumplir</strong> desde 950 € y{" "}
                            <strong style={{ color: "#f6c39c" }}>automatizar</strong> desde 500 €. El precio final
                            se cierra por escrito antes de empezar y no hay permanencia.
                        </p>
                    </div>

                    <FormularioCurso
                        origen="Consulta de precios"
                        etiquetaPersonas="Tamaño de la empresa"
                        etiquetaOpciones="¿Qué te interesa?*"
                        opciones={[
                            "Formar al equipo",
                            "Cumplir el AI Act",
                            "Automatizar procesos",
                            "Aún no lo tengo claro",
                        ]}
                    />
                </div>
            </section>

            {/* Las tres líneas — barra tinta */}
            <nav aria-label="Líneas de precio" className="nav-barra">
                <div className="container nav-barra-fila">
                    <span className="nav-barra-etiqueta mono-label">¿Qué necesitas?</span>
                    <a href="#formar" className="nav-barra-item">Formar</a>
                    <a href="#cumplir" className="nav-barra-item">Cumplir</a>
                    <a href="#automatizar" className="nav-barra-item">Automatizar</a>
                    <Link href="/diagnostico" className="nav-barra-item">No lo sé — test de 3 min</Link>
                </div>
            </nav>

            {/* Los suelos de cada línea — banda de cifras */}
            <section style={{ padding: "2.6rem 0 2.8rem", background: "#1c1917" }}>
                <div className="container">
                    <div className="pp2-cifras">
                        <div className="pp2-cifra">
                            <span className="pp2-cifra-valor">desde 500 €</span>
                            <span className="pp2-cifra-etiqueta">Una automatización concreta</span>
                        </div>
                        <div className="pp2-cifra">
                            <span className="pp2-cifra-valor">desde 750 €</span>
                            <span className="pp2-cifra-etiqueta">Formar a la plantilla</span>
                        </div>
                        <div className="pp2-cifra">
                            <span className="pp2-cifra-valor">desde 950 €</span>
                            <span className="pp2-cifra-etiqueta">Cumplir el AI Act</span>
                        </div>
                        <div className="pp2-cifra">
                            <span className="pp2-cifra-valor">desde 8.000 €</span>
                            <span className="pp2-cifra-etiqueta">El techo: la empresa entera</span>
                        </div>
                    </div>
                    <p className="pp2-cifras-pie">
                        Importes sin IVA. Las licencias de herramientas (ChatGPT, Copilot, CRM…) se pagan
                        directamente al proveedor, sin sobreprecio ni comisión.
                    </p>
                </div>
            </section>

            {/* Las tres familias — plegables, pero abiertas de entrada */}
            <Bloque
                id="formar"
                num="01 · Formar"
                titulo="Que tu equipo use la IA con criterio"
                resumen="9 formaciones · desde 750 €"
                sub="Para empresas, despachos y centros educativos. El precio final depende del número de participantes y de la modalidad, y se cierra en la propuesta."
                filas={formar}
                pie={<>
                    Itinerarios y evidencia documental, en{" "}
                    <Link href="/formacion">formación en IA</Link>; el detalle del Art. 4, en la{" "}
                    <Link href="/formacion/ai-act">guía del AI Act</Link>.
                </>}
            />

            <Bloque
                id="cumplir"
                num="02 · Cumplir"
                titulo="Que la ley no te pille a contrapié"
                resumen="3 servicios · desde 950 €"
                sub="Para saber dónde está tu empresa y qué le falta — con evidencia documental, no con miedo."
                filas={cumplir}
                pie={<>
                    El detalle del servicio, en{" "}
                    <Link href="/cumplimiento">auditoría IA y cumplimiento</Link>.
                </>}
            />

            <Bloque
                id="automatizar"
                num="03 · Automatizar"
                titulo="Que el trabajo repetitivo se haga solo"
                resumen="4 proyectos · desde 500 €"
                sub="Cada proyecto se compone a medida — panel, chatbot, CRM o automatizaciones — en la combinación que tu negocio necesite."
                filas={automatizar}
                pie={<>
                    Las seis piezas, una a una, en{" "}
                    <Link href="/sistemas">automatización y sistemas</Link>; y lo que ya está
                    funcionando en negocios reales, en <Link href="/casos">casos</Link>.
                </>}
            />

            {/* Qué hace variar el precio — foto ambiental + velo */}
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
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Sin letra pequeña</span>
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
                            Qué hace variar el precio (y qué no varía nunca)
                        </h2>
                        <p style={{ color: "rgba(250,246,239,0.85)", lineHeight: 1.7, margin: 0, maxWidth: 560 }}>
                            Nunca rebajo el precio de una pieza: si no llegas, quitamos alcance. Así
                            sabes siempre qué estás pagando.
                        </p>
                    </div>
                    <p style={{
                        color: "rgba(250,246,239,0.6)",
                        fontSize: "0.85rem",
                        margin: "1.6rem 0 0",
                        maxWidth: 560,
                    }}>
                        Todos los importes son sin IVA. Las licencias de las herramientas
                        (ChatGPT, Copilot, WhatsApp Business) las paga el cliente a su
                        proveedor, sin sobreprecio por mi parte.
                    </p>
                    <div className="pp2-variables">
                        {variables.map((v) => (
                            <div key={v.n} className="pp2-variable">
                                <span className="pp2-variable-num mono-label">{v.n}</span>
                                <h3>{v.titulo}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ — split en tinta con el CTA integrado */}
            <section style={{ padding: "4rem 0", background: "#1c1917", borderTop: "1px solid rgba(250,246,239,0.08)" }}>
                <div className="container pp2-faq-grid">
                    <div>
                        <span className="mono-label" style={{ color: "#f6c39c" }}>Preguntas frecuentes</span>
                        <h2 className="pp2-titulo">Lo que se pregunta antes de decidir</h2>
                        <p className="pp2-sub" style={{ margin: "0 0 1.6rem" }}>
                            Y si tu caso no encaja en ninguna tarifa, dímelo en media hora y te
                            digo si tiene arreglo o no.
                        </p>
                        <Link href="/#contact" className="pp2-cta">Pedir mis 30 minutos →</Link>
                    </div>
                    <div>
                        {faqs.map((f) => (
                            <details key={f.question} className="au-faq" name="faq-precios">
                                <summary>
                                    <span>{f.question}</span>
                                    <i className="fas fa-chevron-down"></i>
                                </summary>
                                <p style={{ padding: "0 0.4rem 1.4rem", color: "rgba(250,246,239,0.8)", lineHeight: 1.7, margin: 0 }}>
                                    {f.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
                .pp2-cifras {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .pp2-cifra {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    text-align: center;
                }
                .pp2-cifra-valor {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.4rem, 2.6vw, 2rem);
                    font-weight: 700;
                    color: #f6c39c;
                    line-height: 1;
                }
                .pp2-cifra-etiqueta {
                    font-family: var(--font-mono, monospace);
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: rgba(250, 246, 239, 0.6);
                }
                .pp2-cifras-pie {
                    margin: 2rem auto 0;
                    max-width: 62ch;
                    text-align: center;
                    color: rgba(250, 246, 239, 0.6);
                    font-size: 0.88rem;
                    line-height: 1.6;
                }
                @media (max-width: 900px) {
                    .pp2-cifras { grid-template-columns: 1fr 1fr; gap: 1.6rem 1rem; }
                }

                /* La cabecera de familia es el tirador: pliega, pero llega abierta */
                .pp2-familia { border-top: 1px solid rgba(250, 246, 239, 0.14); }
                .pp2-familia-cab {
                    list-style: none;
                    display: flex;
                    align-items: baseline;
                    justify-content: space-between;
                    gap: 2rem;
                    padding: 1.6rem 0.2rem 1.4rem;
                    cursor: pointer;
                }
                .pp2-familia-cab::-webkit-details-marker { display: none; }
                .pp2-familia-izq { display: block; }
                .pp2-familia-dcha {
                    display: inline-flex;
                    align-items: center;
                    gap: 1rem;
                    flex-shrink: 0;
                }
                .pp2-familia-resumen { color: rgba(250, 246, 239, 0.55); }
                .pp2-familia-flecha {
                    font-size: 0.8rem;
                    color: #f6c39c;
                    transition: transform 0.25s ease;
                }
                .pp2-familia[open] .pp2-familia-flecha { transform: rotate(180deg); }
                .pp2-familia-cab:hover .pp2-titulo { color: #f6c39c; }
                .pp2-familia-cuerpo { padding-bottom: 0.4rem; }
                .pp2-familia .pp2-titulo { margin-top: 0.5rem; }
                @media (max-width: 700px) {
                    .pp2-familia-cab { flex-direction: column; align-items: flex-start; gap: 0.7rem; }
                    .pp2-familia-dcha { width: 100%; justify-content: space-between; }
                }
                .pp2-cabecera {
                    display: grid;
                    grid-template-columns: 0.48fr 0.52fr;
                    gap: 3rem;
                    align-items: end;
                    margin-bottom: 2rem;
                }
                @media (max-width: 900px) {
                    .pp2-cabecera { grid-template-columns: 1fr; gap: 1rem; }
                }
                .pp2-titulo {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
                    font-weight: 600;
                    color: #faf6ef;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin: 0.9rem 0 0;
                }
                .pp2-sub {
                    color: rgba(250, 246, 239, 0.75);
                    line-height: 1.7;
                    font-size: 0.95rem;
                    margin: 0;
                    max-width: 52ch;
                }

                /* El catálogo, como índice: una fila por producto */
                .pp2-filas { display: flex; flex-direction: column; }
                .pp2-fila {
                    display: grid;
                    grid-template-columns: 0.3fr 0.52fr 0.18fr;
                    gap: 2rem;
                    align-items: baseline;
                    border-top: 1px solid rgba(250, 246, 239, 0.14);
                    padding: 1.4rem 0.4rem;
                    transition: background 0.2s ease, padding-left 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .pp2-fila:last-child { border-bottom: 1px solid rgba(250, 246, 239, 0.14); }
                .pp2-fila:hover {
                    background: rgba(250, 246, 239, 0.04);
                    padding-left: 1.2rem;
                }
                .pp2-fila h3 {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.05rem, 1.8vw, 1.3rem);
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0 0 0.35rem;
                    line-height: 1.25;
                }
                .pp2-fila:hover h3 { color: #f6c39c; }
                .pp2-estrella {
                    color: #f6c39c;
                    margin-right: 0.45rem;
                    font-size: 0.85em;
                }
                .pp2-formato { color: rgba(250, 246, 239, 0.5); }
                .pp2-incluye {
                    color: rgba(250, 246, 239, 0.78);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }
                .pp2-precio {
                    font-family: var(--font-display, serif);
                    font-size: clamp(1.1rem, 2vw, 1.4rem);
                    font-weight: 700;
                    color: #f6c39c;
                    text-align: right;
                    white-space: nowrap;
                    line-height: 1.2;
                }
                @media (max-width: 900px) {
                    .pp2-fila {
                        grid-template-columns: 1fr auto;
                        gap: 0.5rem 1rem;
                    }
                    .pp2-incluye { grid-column: 1 / -1; }
                    .pp2-precio { text-align: right; align-self: start; }
                }
                .pp2-pie {
                    margin: 1.6rem 0 0;
                    color: rgba(250, 246, 239, 0.6);
                    font-size: 0.9rem;
                    line-height: 1.7;
                    max-width: 70ch;
                }
                .pp2-pie a { color: #f6c39c; font-weight: 600; }

                .pp2-variables {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
                    gap: 2rem 2.5rem;
                }
                .pp2-variable-num { color: #f6c39c; }
                .pp2-variable h3 {
                    font-family: var(--font-display, serif);
                    font-size: 1.15rem;
                    font-weight: 600;
                    color: #faf6ef;
                    margin: 0.6rem 0 0.4rem;
                    line-height: 1.3;
                }
                .pp2-variable p {
                    color: rgba(250, 246, 239, 0.82);
                    line-height: 1.6;
                    font-size: 0.92rem;
                    margin: 0;
                }

                .pp2-faq-grid {
                    display: grid;
                    grid-template-columns: 0.38fr 0.62fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 800px) {
                    .pp2-faq-grid { grid-template-columns: 1fr; gap: 1.6rem; }
                }
                .pp2-cta {
                    display: inline-block;
                    background: #f6c39c;
                    color: #1c1917;
                    font-weight: 700;
                    font-size: 0.92rem;
                    border-radius: 50px;
                    padding: 0.8rem 1.6rem;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .pp2-cta:hover { background: #faf6ef; transform: translateY(-2px); }
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
