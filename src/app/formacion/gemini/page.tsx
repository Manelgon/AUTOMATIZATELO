import type { Metadata } from "next";
import CursoPage from "@/components/CursoPage";

export const metadata: Metadata = {
    title: "Curso de Gemini y NotebookLM para Empresas",
    description:
        "Taller práctico de Gemini en Gmail, Docs, Sheets y Meet, más NotebookLM: tu documentación convertida en un experto al que preguntar. Desde 900€, con certificado.",
    alternates: { canonical: "https://automatizatelo.com/formacion/gemini" },
    openGraph: {
        title: "Gemini + NotebookLM: la IA del mundo Google Workspace",
        description: "La IA dentro de Gmail, Docs y Meet — y vuestros manuales convertidos en un experto interno. Con certificado y precio cerrado.",
        url: "https://automatizatelo.com/formacion/gemini",
    },
};

export default function Pagina() {
    return (
        <CursoPage
            slug="gemini"
            herramienta="Gemini"
            kicker="Curso · El mundo Google Workspace"
            titulo={<>
                Gemini + NotebookLM:{" "}<br />
                <span style={{ color: "#f6c39c" }}>la IA del mundo Google</span>
            </>}
            subtitulo="Si tu empresa trabaja en Gmail, Docs, Sheets y Meet, Gemini ya vive dentro. Y NotebookLM es el arma secreta que casi nadie usa: le subes vuestros manuales, contratos o temarios, y responde citando de dónde lo saca."
            enCorto="Curso de Gemini para empresas en Google Workspace: la IA aplicada en Gmail, Docs, Sheets y Meet, más NotebookLM para convertir vuestra documentación interna en un experto al que preguntar."
            paraQuien="Para equipos que trabajan en Google Workspace. Y NotebookLM interesa a cualquiera con documentación interna que la gente no se lee: manuales, procedimientos, temarios."
            temario={[
                { num: "01", titulo: "Workspace con IA, bien configurado", desc: "Qué incluye vuestra licencia, qué añade Gemini y cómo quedan protegidos los datos del dominio.", puntos: ["Qué incluye vuestra licencia y qué añade Gemini", "Privacidad del dominio: qué accede y qué no", "Quién necesita qué: no todos el mismo plan", "Qué no debe meterse nunca en un chat"] },
                { num: "02", titulo: "Gems: asistentes personalizados", desc: "Los Gems son los asistentes a medida de Google — uno por función, compartidos con el equipo.", puntos: ["Qué son y cuándo merece la pena crearlos", "Diseño paso a paso: instrucciones y comportamiento", "Gems por función: soporte, redacción, análisis", "Compartirlos con el equipo en Workspace"] },
                { num: "03", titulo: "Gmail y Docs: escribir la mitad", desc: "Correos y documentos que arrancan solos, dentro de las herramientas de siempre.", puntos: ["Correos redactados y resumidos en Gmail", "Docs desde un borrador decente", "Reescritura con el tono de la casa", "Plantillas reutilizables para el equipo"] },
                { num: "04", titulo: "Sheets, Calendar y Meet", desc: "Datos analizados en lenguaje natural y reuniones que se documentan solas.", puntos: ["Análisis y fórmulas en lenguaje natural en Sheets", "Limpiar y transformar datos sin programar", "Meet: resúmenes, transcripción y puntos de acción", "Agenda y reuniones gestionadas con IA"] },
                { num: "05", titulo: "Imagen y vídeo con Gemini", desc: "La parte visual: imágenes generadas y editadas, y vídeos de comunicación interna con Vids.", puntos: ["Generación de imágenes: estilos y casos profesionales", "Editar imágenes con instrucciones en texto", "Vids: vídeos explicativos y de comunicación interna", "Analizar imágenes y documentos visuales en el chat"] },
                { num: "06", titulo: "NotebookLM: vuestro experto interno", desc: "El bloque estrella: vuestra documentación convertida en un experto que responde citando la fuente.", puntos: ["Montar un cuaderno con vuestros documentos reales", "PDFs, vídeos, audios y webs como fuentes", "Respuestas citadas: adiós alucinaciones", "Resúmenes, guías, FAQs y hasta podcast del contenido"] },
                { num: "07", titulo: "NotebookLM avanzado: investigación y empresa", desc: "Del cuaderno personal a la base de conocimiento de empresa: contratos, onboarding, formación.", puntos: ["Analizar contratos e informes con citas verificadas", "Grandes volúmenes de fuentes en un mismo análisis", "Bases de conocimiento para onboarding y formación", "Cuadernos compartidos: flujos de equipo"] },
                { num: "08", titulo: "Aterrizaje por departamento", desc: "La última parte del taller es vuestra: cada equipo monta sus casos reales.", puntos: ["Marketing: contenido, imágenes y vídeos", "RRHH: bases de conocimiento y onboarding", "Legal y administración: revisión de documentos", "Operaciones: datos, informes y seguimiento"] },
            ]}
            usos={[
                { rol: "Administración", desc: "Gmail bajo control y documentos recurrentes que salen solos, con el histórico de Drive como contexto." },
                { rol: "Operaciones", desc: "Un NotebookLM con los procedimientos internos: las dudas de siempre dejan de interrumpir a quien más sabe." },
                { rol: "Comercial", desc: "Propuestas desde Docs con plantilla, y un cuaderno con el catálogo que responde preguntas de producto al momento." },
                { rol: "Formación interna", desc: "El manual de bienvenida convertido en asistente: los nuevos preguntan al cuaderno, no al compañero." },
            ]}
            encaja={[
                { titulo: "Trabajáis en Google Workspace", desc: "Gmail, Docs, Sheets y Meet a diario: vuestra IA natural es esta." },
                { titulo: "Documentación que nadie se lee", desc: "Manuales y procedimientos convertidos en un experto consultable con NotebookLM." },
                { titulo: "Formación interna recurrente", desc: "Onboarding y dudas de siempre respondidos por el cuaderno, no por el compañero ocupado." },
                { titulo: "Equipos híbridos Google + otra IA", desc: "Se ordena qué va en Gemini y qué en ChatGPT u otra, sin duplicar pagos." },
            ]}
            faqs={[
                {
                    question: "¿Qué es exactamente NotebookLM y por qué tanto interés?",
                    answer: "Es una herramienta de Google donde subes TUS documentos (hasta manuales enteros) y la IA responde solo con lo que hay en ellos, citando la fuente. Eso elimina el gran miedo de las alucinaciones: si no está en vuestros documentos, no se lo inventa. Para documentación interna es la herramienta más infravalorada que existe.",
                },
                {
                    question: "¿Este curso cumple la formación obligatoria del Art. 4?",
                    answer: "Este taller es la parte práctica. Para cumplir el Art. 4 hace falta también el bloque de alfabetización (riesgos, marco legal, uso responsable) — juntos forman el curso estrella, desde 1.200€, con certificado nominal y registro formativo como evidencia.",
                },
                {
                    question: "¿Necesitamos la versión de pago de Gemini?",
                    answer: "Depende de vuestra licencia de Workspace: algunas ya incluyen funciones de Gemini y otras requieren el complemento. En el bloque 01 se revisa qué tenéis contratado y qué merece la pena añadir — sin comisiones de Google, la recomendación sale de vuestro caso.",
                },
                {
                    question: "¿Y si usamos Google pero también ChatGPT?",
                    answer: "Combinación muy habitual: Gemini para lo que vive dentro de Workspace y ChatGPT como asistente versátil fuera. El taller se adapta para cubrir vuestra combinación real en vez de forzar una sola herramienta.",
                },
            ]}
        />
    );
}
