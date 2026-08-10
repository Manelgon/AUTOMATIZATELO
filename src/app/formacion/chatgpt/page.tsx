import type { Metadata } from "next";
import CursoPage from "@/components/CursoPage";

export const metadata: Metadata = {
    title: "Curso de ChatGPT para Empresas",
    description:
        "Taller práctico de ChatGPT para tu equipo: cuentas seguras, prompts con criterio y asistentes por puesto. Desde 900 €, con certificado.",
    alternates: { canonical: "https://automatizatelo.com/formacion/chatgpt" },
    openGraph: {
        title: "ChatGPT en tu empresa: de probarlo a dominarlo",
        description: "Cada rol sale con casos de uso montados para su trabajo. Con certificado y precio cerrado.",
        url: "https://automatizatelo.com/formacion/chatgpt",
    },
};

export default function Pagina() {
    return (
        <CursoPage
            slug="chatgpt"
            herramienta="ChatGPT"
            kicker="Curso · La IA más versátil"
            titulo={<>
                ChatGPT en tu empresa:{" "}<br />
                <span style={{ color: "#f6c39c" }}>de probarlo a dominarlo</span>
            </>}
            subtitulo="Casi todo el mundo lo ha abierto; casi nadie le saca ni la mitad. Este taller convierte el «a veces le pregunto cosas» en asistentes montados por puesto, con datos seguros y resultados que se notan la misma semana."
            enCorto="Curso de ChatGPT para empresas, práctico y con vuestros casos reales: cuentas de empresa bien configuradas, prompts con criterio, asistentes personalizados por puesto y tareas programadas."
            paraQuien="Para equipos de cualquier pyme que no viven casados con Microsoft ni Google — o que quieren el asistente más versátil además de su suite. De nivel cero a avanzado, adaptado por departamento."
            temario={[
                { num: "01", titulo: "La cuenta de empresa, bien montada", desc: "Plan de equipo, permisos y la configuración de privacidad que hay que revisar para que vuestros datos no acaben entrenando modelos.", puntos: ["Plan Team vs Plus vs gratis: cuál toca y por qué", "Que vuestros datos NO entrenen modelos: la casilla que importa", "Memoria e historial: qué recuerda y cómo controlarlo", "Qué no debe pegarse nunca en un chat"] },
                { num: "02", titulo: "Cómo funciona, a nivel usuario", desc: "Lo justo de motor para usarlo con criterio: qué modelo elegir, qué esperar y cuándo desconfiar.", puntos: ["Modelos disponibles y cuál usar para cada tarea", "Por qué a veces se lo inventa — y cómo pillarlo", "Cuándo usar ChatGPT y cuándo otra herramienta", "Límites reales: contexto, datos recientes, sesgos"] },
                { num: "03", titulo: "Prompts con criterio, no recetas mágicas", desc: "Cómo pedirle las cosas para que salgan bien a la primera — con plantillas propias de tu empresa.", puntos: ["La estructura que funciona: rol, contexto, tarea, formato", "Iterar en vez de repetir: afinar en 2 vueltas", "Plantillas por departamento, listas para copiar", "Validar y contrastar resultados antes de usarlos"] },
                { num: "04", titulo: "Análisis de datos y Excel", desc: "Subir hojas de cálculo y ficheros para que los analice, grafique y limpie — sin saber programar.", puntos: ["Excel y CSV analizados directamente en el chat", "Gráficos, tablas y informes automáticos", "Detectar errores e inconsistencias en los datos", "Análisis estadístico con Python integrado, sin código"] },
                { num: "05", titulo: "Imagen, voz y documentos visuales", desc: "La parte multimodal: generar y editar imágenes, analizar PDFs y capturas, y el modo de voz.", puntos: ["Generación de imágenes para materiales y mockups", "Edición de imágenes con instrucciones en texto", "Analizar PDFs, capturas y documentos en el chat", "Modo voz: cuándo es útil de verdad"] },
                { num: "06", titulo: "Canvas: documentos trabajados en vivo", desc: "El editor donde el texto se construye y refina contigo — para propuestas, informes y briefs.", puntos: ["Cuándo usar Canvas y cuándo el chat normal", "Redactar y maquetar iterando sobre el documento", "Casos: propuesta comercial, informe ejecutivo, brief", "Exportar y compartir con el equipo"] },
                { num: "07", titulo: "Asistentes personalizados por puesto", desc: "GPTs y proyectos con las instrucciones y documentos de cada rol — montados en el taller.", puntos: ["GPTs con las instrucciones de cada rol", "Proyectos con vuestros documentos como contexto", "El de administración, el comercial y el de atención", "Compartirlos con el equipo y mantenerlos vivos"] },
                { num: "08", titulo: "Investigar de verdad: Deep Research y web", desc: "De la pregunta suelta al informe con fuentes: investigación de mercado, normativa y competencia.", puntos: ["Deep Research: qué es y cuándo compensa", "Búsqueda web en tiempo real: cuándo fiarse", "Análisis de mercado, competencia y normativa", "Exportar informes estructurados y accionables"] },
                { num: "09", titulo: "Tareas programadas y modo agente", desc: "El salto de preguntar a encargar: tareas que se hacen solas y conectores con vuestras apps.", puntos: ["Tareas programadas: informes que llegan solos", "El agente: encadenar pasos sin intervención", "Conectores con apps externas del día a día", "Dónde acaba ChatGPT y empieza la automatización de verdad"] },
            ]}
            usos={[
                { rol: "Administración", desc: "Resúmenes de documentos largos, borradores de correos delicados y plantillas de respuesta que suenan a vosotros." },
                { rol: "Comercial", desc: "Propuestas personalizadas en minutos, preparación de reuniones con ficha del cliente y seguimientos que no se olvidan." },
                { rol: "Atención al cliente", desc: "Respuestas consistentes con el tono de la casa, y un asistente que conoce vuestro catálogo y vuestras políticas." },
                { rol: "Dirección", desc: "Análisis de informes, actas de reunión en limpio y un segundo cerebro para decisiones con más contexto." },
            ]}
            encaja={[
                { titulo: "Tenéis ChatGPT y cada uno lo usa a su manera", desc: "Sin método ni criterio compartido, la herramienta rinde un tercio. Aquí se ordena eso." },
                { titulo: "Evaluáis si comprar licencias", desc: "Antes de pagar plan de equipo, entender qué puede hacer de verdad por vuestros procesos." },
                { titulo: "Equipos que escriben mucho", desc: "Correos, propuestas, informes: los roles con más texto son los que más horas recuperan." },
                { titulo: "Pymes sin suite fija", desc: "Si no vivís casados con Microsoft ni Google, este es el asistente más versátil." },
            ]}
            faqs={[
                {
                    question: "¿Este curso cumple la formación obligatoria del Art. 4?",
                    answer: "El Art. 4 no se cumple con un curso concreto: se cumple adoptando medidas de alfabetización adaptadas a tu equipo y pudiendo documentarlas. Este taller es la parte práctica, y puede ser una de esas medidas. Si además quieres cubrir los contenidos del Art. 4 — riesgos, marco legal, uso responsable —, ese es el bloque de alfabetización: juntos forman el curso estrella, desde 1.200€, con certificado nominal y registro formativo fechado para documentarlo.",
                },
                {
                    question: "¿Qué plan de ChatGPT necesita mi empresa?",
                    answer: "Para uso profesional con datos de clientes, mínimo un plan de equipo (los datos no entrenan modelos y hay gestión centralizada). Casi ninguna pyme necesita el plan Enterprise. En el taller se deja elegido y configurado el que os toca — no cobro comisión de OpenAI, así que la recomendación sale de vuestro caso.",
                },
                {
                    question: "¿Y si mi equipo no tiene ni idea, o niveles muy distintos?",
                    answer: "Es lo normal, y el taller se adapta: se arranca desde cero sin tecnicismos y los que ya lo usan aprietan en la parte de asistentes y automatización. Si el grupo es grande y muy dispar, se parte en dos niveles.",
                },
                {
                    question: "¿Me la dejas también configurada y con política de uso?",
                    answer: "Sí — eso es el pilar de cumplimiento: herramienta elegida y configurada de forma segura, política de uso de IA redactada para tu empresa y la evidencia documental. El curso y la implantación se contratan juntos o por separado, con precio cerrado en ambos casos.",
                },
            ]}
        />
    );
}
