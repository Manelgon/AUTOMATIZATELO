import type { Metadata } from "next";
import CursoPage from "@/components/CursoPage";

export const metadata: Metadata = {
    title: "Curso de Claude para Empresas",
    description:
        "Taller práctico de Claude: documentos largos, redacción con criterio, proyectos y agentes. Impartido por quien lo usa a diario. Desde 1.400 €.",
    alternates: { canonical: "https://automatizatelo.com/formacion/claude" },
    openGraph: {
        title: "Claude: la IA que lee lo que las demás no aguantan",
        description: "Documentos largos, redacción técnica y agentes que trabajan solos. Impartido por un usuario diario real.",
        url: "https://automatizatelo.com/formacion/claude",
    },
};

export default function Pagina() {
    return (
        <CursoPage
            slug="claude"
            herramienta="Claude"
            kicker="Curso · Documentos largos y agentes"
            titulo={<>
                Claude: la IA que lee lo que{" "}<br />
                <span style={{ color: "#f6c39c" }}>las demás no aguantan</span>
            </>}
            subtitulo="Contratos de cuarenta páginas, expedientes enteros, redacción que no suena a robot y agentes capaces de sacar una tarea completa de principio a fin. Claude está hecho para documentos largos, contexto complejo y redacción profesional — y es la que yo uso a diario."
            enCorto="Curso de Claude para empresas: análisis de documentos largos, redacción técnica y profesional, proyectos con contexto propio y agentes que ejecutan tareas completas."
            paraQuien="Para despachos, asesorías, consultores y cualquier equipo que viva entre documentos largos e información compleja. Si tu trabajo es leer, analizar y redactar, esta es tu herramienta."
            temario={[
                { num: "01", titulo: "La cuenta de empresa y el contexto", desc: "Plan de equipo con datos protegidos y el contexto de tu negocio siempre presente.", puntos: ["Plan de equipo y protección de datos", "Memoria e historial: qué guarda y cómo controlarlo", "Instrucciones para que responda como alguien de la casa", "Qué documentos de referencia conviene subirle"] },
                { num: "02", titulo: "Cuándo Claude — y cuándo otra", desc: "En qué se diferencia de ChatGPT, Copilot y Gemini, y cómo elegir sin duplicar pagos.", puntos: ["Fortalezas reales: documentos largos, redacción, agentes", "La ventana de contexto extendida: qué permite", "Modelos disponibles y cuál usar para cada tarea", "Combinarlo con otra IA sin pagar de más"] },
                { num: "03", titulo: "Projects: un entorno por cliente o expediente", desc: "El arma profesional de Claude: proyectos con documentos e instrucciones permanentes.", puntos: ["Un proyecto por cliente, área o proceso", "Documentos e instrucciones que no se repiten", "Compartir con el equipo y mantener el criterio", "Cómo organizarlos para que escalen"] },
                { num: "04", titulo: "Documentos largos: su terreno", desc: "Contratos, expedientes, informes y normativa — analizados con las citas localizadas.", puntos: ["Contratos y expedientes: análisis y comparación", "Extraer cláusulas, riesgos y datos clave", "Varios documentos a la vez en el mismo contexto", "Resúmenes ejecutivos que no pierden lo importante"] },
                { num: "05", titulo: "Redacción técnica y profesional", desc: "Escritos, informes y comunicaciones con el tono exacto de cada destinatario.", puntos: ["Informes, memorandos y propuestas", "Adaptar tono y registro por destinatario", "Varios idiomas manteniendo el nivel profesional", "Revisión y mejora de textos existentes"] },
                { num: "06", titulo: "Artifacts: documentos y mini-apps en vivo", desc: "Documentos, tablas y hasta pequeñas aplicaciones creados y refinados en tiempo real.", puntos: ["Documentos estructurados generados al instante", "Iterar sobre el resultado sin empezar de cero", "Dashboards, calculadoras y formularios sin código", "Visualizaciones de datos y presentaciones"] },
                { num: "07", titulo: "Agentes y computer use", desc: "El salto que casi nadie ha dado: encargar la tarea completa — incluso manejando aplicaciones.", puntos: ["De preguntar a encargar: la tarea de principio a fin", "Revisar 30 documentos y volver con la tabla hecha", "Computer use: Claude manejando aplicaciones", "Supervisión humana: dónde poner el control"] },
                { num: "08", titulo: "Aterrizaje por sector", desc: "La última parte del taller es vuestra: cada perfil monta sus casos reales.", puntos: ["Legal: contratos, cláusulas y jurisprudencia", "Consultoría: informes, propuestas y análisis", "RRHH: políticas y documentación interna", "Financiero: análisis, memorandos y reporting"] },
            ]}
            usos={[
                { rol: "Despachos y asesorías", desc: "Expedientes digeridos, borradores de escritos y comparativas de normativa — con el secreto profesional por delante." },
                { rol: "Consultores y analistas", desc: "Informes largos analizados y redactados en la mitad de tiempo, con proyectos por cliente." },
                { rol: "Administración", desc: "Documentación compleja resumida y respuestas delicadas redactadas con el tono justo." },
                { rol: "Dirección", desc: "Un segundo par de ojos para contratos y decisiones — que además cita en qué página está lo que dice." },
            ]}
            nota="Nota honesta: este curso lo imparte alguien que trabaja con Claude todos los días — los sistemas que enseño en mis casos están construidos con él. No es el curso de una herramienta que probé para dar el curso."
            encaja={[
                { titulo: "Despachos y asesorías", desc: "Expedientes, contratos y normativa a diario: el terreno donde Claude gana con diferencia." },
                { titulo: "Consultores y analistas", desc: "Informes largos de entrada y de salida: análisis y redacción en la mitad de tiempo." },
                { titulo: "Equipos que ya usan otra IA", desc: "ChatGPT para el día a día y Claude para lo denso: la combinación que más rinde." },
                { titulo: "Curiosos de los agentes", desc: "Queréis ver el salto de preguntar a encargar antes de que lo haga vuestra competencia." },
            ]}
            faqs={[
                {
                    question: "¿Por qué Claude y no ChatGPT, si es menos conocido?",
                    answer: "No es uno u otro: es cuál para qué. Claude destaca leyendo y redactando sobre documentos largos y en tareas de agente (encargarle algo completo, no preguntarle algo puntual). Si tu equipo vive entre expedientes, contratos o informes, se nota la diferencia. Para uso generalista, ChatGPT sigue siendo excelente — y tengo curso de ambos.",
                },
                {
                    question: "¿Este curso cumple la formación obligatoria del Art. 4?",
                    answer: "El Art. 4 no se cumple con un curso concreto: se cumple adoptando medidas de alfabetización adaptadas a tu equipo y pudiendo documentarlas. Este taller es la parte práctica, y puede ser una de esas medidas. Si además quieres cubrir los contenidos del Art. 4 — riesgos, marco legal, uso responsable —, ese es el bloque de alfabetización: juntos forman el curso estrella, desde 1.800 €, con certificado nominal y registro formativo fechado para documentarlo.",
                },
                {
                    question: "¿Es seguro para un despacho, con el secreto profesional?",
                    answer: "Con el plan de empresa bien configurado, los datos no entrenan modelos y hay garantías contractuales — el bloque 01 deja eso cerrado antes de tocar ningún caso real. Y en el taller se trabaja con documentos anonimizados hasta que la configuración está verificada. Es la misma disciplina que aplico con mis propios clientes.",
                },
                {
                    question: "¿Qué es eso de los agentes?",
                    answer: "La diferencia entre preguntar y encargar. Un uso normal es 'resúmeme este contrato'; un agente es 'revisa estos 30 contratos, señala cláusulas problemáticas y prepárame la tabla comparativa' — y vuelve con la tarea hecha para tu revisión. Es el salto de productividad más grande de la IA actual, y casi nadie lo está usando todavía.",
                },
            ]}
        />
    );
}
