import type { Metadata } from "next";
import SectorPage, { SectorPageProps } from "@/components/SectorPage";
import { buildSectorSchema } from "@/lib/sectorSchema";

export const metadata: Metadata = {
    title: { absolute: "Automatización para Administradores de Fincas | Panel e IA" },
    description: "Panel de gestión e IA para administradores de fincas: incidencias, vecinos y documentación en un solo sitio. En uso diario en despachos reales.",
    alternates: { canonical: "https://automatizatelo.com/automatizacion-administradores-fincas" },
    openGraph: {
        title: "Automatización para Administradores de Fincas",
        description: "Incidencias, vecinos y documentación en un solo panel. Construido con despachos reales.",
        url: "https://automatizatelo.com/automatizacion-administradores-fincas",
    },
};

const props: SectorPageProps = {
    sector: "Administradores de Fincas",
    sectorSlug: "automatizacion-administradores-fincas",
    icon: "fa-building",
    color: "#0ea5e9",
    heroKicker: "Administración de fincas",
    heroImagen: "/fincas-hero.webp",
    heroTitle: <>Tu despacho de fincas, <span className="premium-gradient">sin{" "}<br />ahogarse en llamadas y emails</span></>,
    heroSubtitle: "Panel de gestión a medida para incidencias, comunicaciones con vecinos y documentación de cada comunidad. No es teoría: despachos reales lo usan a diario desde enero de 2026.",
    painPoints: [
        { icon: "fa-phone-volume", text: "El teléfono no para: vecinos llamando por cualquier incidencia" },
        { icon: "fa-envelope-open", text: "Incidencias que llegan por email y se pierden en la bandeja" },
        { icon: "fa-folder-open", text: "Actas, contratos y documentación dispersa por carpetas y correos" },
        { icon: "fa-clipboard-list", text: "Seguimiento manual de cada aviso a industriales y proveedores" },
        { icon: "fa-users", text: "Vecinos que preguntan una y otra vez por el estado de su incidencia" },
        { icon: "fa-clock", text: "Horas de trabajo administrativo que no se facturan a nadie" },
    ],
    solutions: [
        { icon: "fa-list-check", title: "Incidencias con registro y seguimiento", description: "Cada incidencia queda registrada con su comunidad, estado y responsable. Nada se pierde en un email y el despacho ve de un vistazo qué está pendiente." },
        { icon: "fa-comments", title: "Comunicaciones con vecinos centralizadas", description: "Las conversaciones y avisos de cada comunidad, en un solo sitio. Se acabó buscar en tres bandejas de correo quién dijo qué." },
        { icon: "fa-folder-tree", title: "Documentación por comunidad", description: "Actas, contratos y documentos organizados por comunidad y accesibles al momento, sin depender de la memoria de nadie." },
        { icon: "fa-robot", title: "IA para las tareas repetitivas", description: "Automatizamos lo que roba tiempo al despacho: clasificar correos entrantes, redactar comunicados, preparar informes. Formamos también a tu equipo para usar la IA con criterio." },
    ],
    results: [
        { stat: "Ene 2026", label: "En producción y uso diario desde entonces" },
        { stat: "2", label: "Despachos gestionando con nuestros paneles" },
        { stat: "100%", label: "De incidencias registradas y con seguimiento" },
    ],
    faqs: [
        { question: "¿Conocéis el sector o sois una agencia genérica?", answer: "Conocemos el sector por dentro: hemos construido los paneles de gestión que despachos de administración de fincas como Serincosol usan a diario desde enero de 2026, y colaboramos con formación para administradores de fincas." },
        { question: "¿Sustituye a mi programa de administración (Gesfincas, TAAF, Fincasplus...)?", answer: "No hace falta sustituirlo. El panel cubre lo que esos programas no resuelven bien — incidencias, comunicaciones y seguimiento del día a día — y puede convivir con tu software contable de siempre." },
        { question: "¿Qué pasa con los datos de los vecinos y el RGPD?", answer: "El panel se diseña cumpliendo RGPD desde el primer día: datos en servidores europeos, accesos por roles y trazabilidad de acciones. Y el código y los datos son siempre del despacho." },
        { question: "¿Cuánto cuesta?", answer: "Una automatización concreta (por ejemplo, el registro de incidencias) desde 500€. Un panel de gestión completo para el despacho, desde 2.000€. Pide la auditoría gratuita y te decimos qué recuperarías primero." },
    ],
};

const schema = buildSectorSchema(props);

export default function Page() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <SectorPage {...props} />
        </>
    );
}
