import type { Metadata } from "next";
import SectorPage, { SectorPageProps } from "@/components/SectorPage";
import { buildSectorSchema } from "@/lib/sectorSchema";
import Esquema from "@/components/Esquema";
import { migas } from "@/lib/esquemas";

export const metadata: Metadata = {
    title: { absolute: "Automatización para Academias y Formación Online | IA" },
    description: "Panel de gestión e IA para academias: matrículas, seguimiento de alumnos, dudas 24/7 y producción de cursos SCORM. Con una academia real en producción.",
    alternates: { canonical: "https://automatizatelo.com/sectores/academias" },
    openGraph: {
        title: "IA y Automatización para Academias",
        description: "Matrículas, alumnos y dudas en piloto automático — y tus cursos producidos en SCORM. Caso real en producción.",
        url: "https://automatizatelo.com/sectores/academias",
    },
};

const props: SectorPageProps = {
    sector: "Academias",
    sectorSlug: "sectores/academias",
    icon: "fa-book-open",
    color: "#8b5cf6",
    heroKicker: "Academias y formación online",
    heroImagen: "/academias.webp",
    heroTitle: <>Más alumnos, menos gestión:{" "}<br /><span className="premium-gradient">tu academia en piloto automático</span></>,
    heroSubtitle: "Panel de gestión a medida, dudas de alumnos atendidas al momento y tus cursos producidos en SCORM. No es teoría: una academia online real gestiona su operación así — la construí yo.",
    enCortoTitulo: "Matrículas, alumnos y dudas en piloto automático",
    enCorto: "Matrículas y altas que dejan de picarse a mano, dudas de alumnos contestadas al momento por WhatsApp o web, y el seguimiento de cada alumno en un panel conectado con tu plataforma de cursos. Y si te falta catálogo, produzco los cursos en SCORM.",
    datos: [
        "Se conecta con Moodle, Evolcampus o LearnDash",
        "Matrícula guiada y dudas 24/7",
        "Certificados y recibos automáticos",
        "Desde 500 € · panel completo 3.000 €",
    ],
    dolorTitulo: "Lo que frena a una academia que crece",
    dolorSub: "Seis atascos de gestión que se comen las horas de producir y vender. Probablemente reconozcas más de uno.",
    solucionTitulo: "La academia operando sin picar datos",
    fotoSoluciones: "/auditoria.webp",
    opcionesFormulario: [
        "Matrículas y altas de alumnos",
        "Dudas de alumnos 24/7",
        "Panel de gestión académica",
        "Producir cursos en SCORM",
        "Aún no lo tengo claro",
    ],
    painPoints: [
        { icon: "fa-user-plus", text: "Matrículas y altas de alumnos picadas a mano, una a una" },
        { icon: "fa-comments", text: "Las mismas dudas de alumnos contestadas cien veces por email y WhatsApp" },
        { icon: "fa-table", text: "El seguimiento de cada alumno repartido entre Excel, la plataforma y el correo" },
        { icon: "fa-file-invoice", text: "Facturas, recibos y certificados generados uno por uno" },
        { icon: "fa-hourglass-half", text: "Cursos por producir que nunca salen porque la gestión se come las horas" },
        { icon: "fa-user-clock", text: "Interesados que preguntan y, si nadie responde a tiempo, acaban mirando en otra academia" },
    ],
    solutions: [
        { icon: "fa-chart-line", title: "Panel de gestión académica", description: "Alumnos, matrículas, pagos y seguimiento en un solo sitio, conectado con tu plataforma de cursos. Es lo que una academia online real usa para operar a diario — construido a medida y en su propiedad." },
        { icon: "fa-robot", title: "Bot de dudas y matrículas", description: "Las preguntas repetidas (precios, fechas, temarios, cómo me apunto) contestadas al momento por WhatsApp o web, con matrícula guiada — y escalado a una persona cuando toca." },
        { icon: "fa-file-signature", title: "Facturación y certificados automáticos", description: "Recibos, facturas y certificados de finalización que se generan y envían solos cuando el alumno cumple las condiciones. Sin volver a picar los datos a mano." },
        { icon: "fa-clapperboard", title: "Producción de cursos (SCORM)", description: "Convierto tu conocimiento en cursos e-learning empaquetados en SCORM, listos para tu plataforma o para vender. Los míos están publicados y en venta — sé lo que funciona." },
    ],
    results: [
        { stat: "En uso", label: "Panel de academia online en producción real" },
        { stat: "SCORM", label: "Cursos producidos, publicados y en venta" },
        { stat: "24/7", label: "Dudas y matrículas atendidas sin hacer esperar" },
    ],
    faqs: [
        { question: "¿Conocéis el sector de la formación o sois una agencia genérica?", answer: "Lo conozco por dentro y por partida doble: construí el panel con el que AFCademIA gestiona su academia online, y produzco cursos e-learning propios que están publicados y en venta en plataformas estándar. No te voy a contar teoría: te enseño lo que ya funciona." },
        { question: "¿Se integra con mi plataforma (Moodle, Evolcampus, LearnDash...)?", answer: "Esa es la idea: el panel y las automatizaciones se conectan con la plataforma de cursos que ya usas, no la sustituyen. Los datos de alumnos fluyen solos entre matrícula, plataforma y facturación, sin picarlos dos veces." },
        { question: "¿También me producís los cursos?", answer: "Sí — es de lo que más hago. Producción completa de cursos e-learning a medida en formato SCORM (guion, materiales y empaquetado), desde 2.400 € por curso. Y si eres entidad de formación, también en marca blanca." },
        { question: "¿Cuánto cuesta?", answer: "Una automatización concreta (por ejemplo, las dudas frecuentes o los certificados automáticos), desde 500 €. El panel de gestión completo para la academia, desde 3.000 €. Pide la auditoría gratuita y te digo qué te recuperaría más horas primero." },
    ],
    relacionados: [
        { href: "/formacion/cursos-a-medida", icon: "fa-clapperboard", titulo: "Producción de cursos SCORM", desc: "Amplía catálogo sin producirlo tú: guion, materiales y empaquetado, desde 2.400 €." },
        { href: "/sistemas/chatbots-whatsapp", icon: "fa-comment-dots", titulo: "Chatbot de WhatsApp", desc: "Dudas y matrículas atendidas 24/7 en el canal donde ya te escriben." },
        { href: "/sistemas/paneles", icon: "fa-chart-line", titulo: "Paneles a medida", desc: "El panel de gestión académica por dentro: alumnos, pagos y seguimiento." },
        { href: "/cumplimiento", icon: "fa-clipboard-check", titulo: "Auditoría IA (AI Act)", desc: "Si formas con IA o la usas con datos de alumnos, esto te toca. Desde 950 €." },
        { href: "/casos", icon: "fa-trophy", titulo: "Casos de éxito", desc: "El panel de AFCademIA y el resto de sistemas, con problema y resultados." },
        { href: "/recursos", icon: "fa-gift", titulo: "Recursos gratis", desc: "Guías y prompts descargables, sin pedirte el email." },
    ],
};

const schema = buildSectorSchema(props);

export default function Page() {
    return (
        <>
            <Esquema datos={migas([{ nombre: "Academias y centros de formación", url: "/sectores/academias" }])} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <SectorPage {...props} />
        </>
    );
}
