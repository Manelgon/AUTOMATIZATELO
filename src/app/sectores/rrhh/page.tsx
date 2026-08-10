import type { Metadata } from "next";
import SectorPage, { SectorPageProps } from "@/components/SectorPage";
import { buildSectorSchema } from "@/lib/sectorSchema";
import Esquema from "@/components/Esquema";
import { migas } from "@/lib/esquemas";

export const metadata: Metadata = {
    title: { absolute: "Automatización para Selección de Personal y RRHH | IA" },
    description: "Portal de empleo propio, criba asistida por IA y candidatos siempre respondidos. Construido y en producción para una consultora de selección real.",
    alternates: { canonical: "https://automatizatelo.com/sectores/rrhh" },
    openGraph: {
        title: "Automatización para RRHH y Selección",
        description: "Portal de empleo, criba con IA y seguimiento de procesos en un solo sitio. Caso real en producción.",
        url: "https://automatizatelo.com/sectores/rrhh",
    },
};

const props: SectorPageProps = {
    sector: "Selección y RRHH",
    sectorSlug: "sectores/rrhh",
    icon: "fa-user-tie",
    color: "#10b981",
    heroKicker: "Selección de personal y RRHH",
    heroImagen: "/directivos.webp",
    heroTitle: <>Recluta más rápido, <span className="premium-gradient">sin perder{" "}<br />candidatos por el camino</span></>,
    heroSubtitle: "Portal de empleo propio, criba asistida por IA y cada candidato respondido a tiempo. No es teoría: una consultora de selección real trabaja así con la plataforma que construí.",
    enCortoTitulo: "Ofertas, candidatos y procesos en un solo sitio",
    enCorto: "Ofertas, candidatos y procesos en una sola plataforma, con criba asistida por IA y respuesta a todo el mundo. Es lo que construí para una consultora de selección: portal de empleo propio, panel de procesos e informes — y funciona a diario.",
    datos: [
        "Portal de empleo con tu marca",
        "Criba asistida, decisión humana",
        "Respuesta a todos los candidatos",
        "Desde 500 € · plataforma completa 3.000 €",
    ],
    dolorTitulo: "Lo que se pierde en un proceso de selección",
    dolorSub: "Seis puntos donde se escapan candidatos y horas. Si reconoces tres o más, hay margen de sobra.",
    solucionTitulo: "La selección, sin candidatos perdidos",
    fotoSoluciones: "/auditoria.webp",
    opcionesFormulario: [
        "Portal de empleo propio",
        "Criba y clasificación de CV",
        "Seguimiento de procesos",
        "La plataforma completa",
        "Aún no lo tengo claro",
    ],
    painPoints: [
        { icon: "fa-envelope-open-text", text: "CVs llegando por email, LinkedIn y WhatsApp — y ninguno en el mismo sitio" },
        { icon: "fa-filter", text: "Horas de criba manual leyendo CVs que no encajan ni de lejos" },
        { icon: "fa-user-clock", text: "Candidatos buenos que se enfrían (o se ofenden) porque nadie les responde" },
        { icon: "fa-table", text: "El estado de cada proceso repartido entre Excel, correo y memoria" },
        { icon: "fa-briefcase", text: "Clientes pidiendo informes del proceso que hay que montar a mano" },
        { icon: "fa-rotate", text: "Publicar la misma oferta en tres portales, a mano, cada vez" },
    ],
    solutions: [
        { icon: "fa-globe", title: "Portal de empleo propio", description: "Tus ofertas en tu web, con candidaturas entrando ordenadas a tu sistema — no a una bandeja de correo — y conectable con los portales externos donde ya publicas. Es lo que construí para una consultora de selección real: portal, dashboard e informes, en producción." },
        { icon: "fa-wand-magic-sparkles", title: "Criba y matching asistidos por IA", description: "La IA preclasifica candidaturas contra los requisitos del puesto y te deja lo relevante arriba. La IA asiste en la clasificación; la decisión es de una persona. En selección eso no es un detalle: cribar candidaturas con IA puede entrar en los sistemas de alto riesgo del Anexo III del Reglamento, así que antes de automatizar nada se revisa el caso de uso y las obligaciones que le tocan." },
        { icon: "fa-comments", title: "Ningún candidato sin respuesta", description: "Confirmaciones, avances de fase y descartes comunicados automáticamente y con tono humano. Tu marca empleadora deja de sufrir por los silencios." },
        { icon: "fa-chart-line", title: "Procesos e informes en un panel", description: "Cada proceso con su estado, sus candidatos y su historial. Y el informe para el cliente sale solo, no un domingo por la noche." },
    ],
    results: [
        { stat: "En uso", label: "Plataforma completa de selección en producción" },
        { stat: "Cada uno", label: "Los candidatos reciben respuesta, se elija o no" },
        { stat: "1", label: "Solo sitio para ofertas, candidatos y procesos" },
    ],
    faqs: [
        { question: "¿Conocéis el sector de la selección o sois una agencia genérica?", answer: "Lo conozco por dentro: construí la plataforma completa de Henkoaching (Jennifer Cervera) — portal de empleo, dashboard de procesos e informes — y está en producción. No te cuento lo que se podría hacer: te enseño lo que ya funciona." },
        { question: "¿La IA decide qué candidatos pasan? ¿Eso es legal?", answer: "La IA preclasifica y ordena; la decisión es siempre de una persona — y así queda registrado. El Anexo III del Reglamento Europeo de IA sitúa entre los usos de alto riesgo los sistemas destinados a filtrar candidaturas o evaluar candidatos — no hace falta que la máquina decida sola —, así que el caso de uso se revisa antes de montar nada y el sistema se diseña con supervisión humana y trazabilidad desde el primer día." },
        { question: "¿Qué pasa con los datos de los candidatos y el RGPD?", answer: "Consentimientos, plazos de conservación y derechos del candidato integrados en el flujo desde el diseño. Y como todo lo que construyo, los datos y el código son tuyos — no de una plataforma de alquiler." },
        { question: "¿Cuánto cuesta?", answer: "Una automatización concreta (por ejemplo, las respuestas automáticas a candidatos), desde 500 €. Un sistema de selección con portal y panel, desde 3.000 €. Pide la auditoría gratuita y te digo por dónde empezar." },
    ],
    relacionados: [
        { href: "/cumplimiento", icon: "fa-clipboard-check", titulo: "Auditoría IA (AI Act)", desc: "La selección de personal es ámbito sensible del Reglamento: conviene tenerlo por escrito. Desde 950 €." },
        { href: "/sistemas/paneles", icon: "fa-chart-line", titulo: "Paneles a medida", desc: "El panel de procesos y candidatos por dentro, con informes para tus clientes." },
        { href: "/sistemas/crm", icon: "fa-address-book", titulo: "Implantación de CRM", desc: "Para la parte comercial: clientes y ofertas sin vivir en un Excel." },
        { href: "/formacion/empresas", icon: "fa-graduation-cap", titulo: "Formación en IA", desc: "Que tu equipo use la IA con criterio — y con los datos de los candidatos a salvo." },
        { href: "/casos", icon: "fa-trophy", titulo: "Casos de éxito", desc: "La plataforma de Henkoaching y el resto de sistemas en producción." },
        { href: "/sistemas/documentos", icon: "fa-file-import", titulo: "Extracción de datos", desc: "CVs y documentación leídos por IA, sin picar nada a mano." },
    ],
};

const schema = buildSectorSchema(props);

export default function Page() {
    return (
        <>
            <Esquema datos={migas([{ nombre: "Recursos humanos", url: "/sectores/rrhh" }])} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <SectorPage {...props} />
        </>
    );
}
