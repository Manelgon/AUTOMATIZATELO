import type { Metadata } from "next";
import CursoPage from "@/components/CursoPage";

export const metadata: Metadata = {
    title: "Curso de Copilot 365 para Empresas",
    description:
        "Taller práctico de Copilot en Word, Excel, Outlook y Teams: la IA dentro de las herramientas que tu equipo ya usa cada día. Desde 900€, con certificado.",
    alternates: { canonical: "https://automatizatelo.com/formacion/copilot" },
    openGraph: {
        title: "Copilot 365: la IA que ya está dentro de tu Office",
        description: "Reuniones resumidas, correos medio contestados y Excel que se explica solo. Con certificado y precio cerrado.",
        url: "https://automatizatelo.com/formacion/copilot",
    },
};

export default function Pagina() {
    return (
        <CursoPage
            slug="copilot"
            herramienta="Copilot"
            kicker="Curso · El mundo Microsoft 365"
            titulo={<>
                Copilot 365: la IA que ya está{" "}<br />
                <span style={{ color: "#f6c39c" }}>dentro de tu Office</span>
            </>}
            subtitulo="Si tu empresa vive en Word, Excel, Outlook y Teams, la IA juega en casa. El problema es el de siempre: se pagó la licencia, se anunció, y a las seis semanas la usa uno de cada diez. Este taller es la diferencia entre pagar Copilot y amortizarlo."
            enCorto="Curso de Microsoft Copilot 365 para empresas: la IA aplicada dentro de Word, Excel, Outlook y Teams, con los casos reales de cada puesto y la configuración de licencias y permisos bien hecha."
            paraQuien="Para equipos que trabajan en Microsoft 365 — que en la pyme española son mayoría. Especialmente rentable si ya pagáis licencias de Copilot que nadie está exprimiendo."
            temario={[
                { num: "01", titulo: "Licencias, permisos y gobernanza M365", desc: "Qué licencia necesita quién, qué ve Copilot de vuestros documentos y cómo no llevarse sustos.", puntos: ["Qué licencia necesita quién (y quién no la necesita)", "Qué ve Copilot: permisos de SharePoint y OneDrive a revisión", "Gobernanza básica M365 antes de encender nada", "El error caro: licencias para todos sin plan"] },
                { num: "02", titulo: "Privacidad y configuración personal", desc: "Qué datos toca Copilot, cuáles no, y cómo dejar las preferencias de cada usuario bien puestas.", puntos: ["Qué accede de tu M365 y qué queda fuera", "Preferencias de tono, formato e idioma", "Qué no debe meterse nunca en un chat", "Historial: revisarlo, exportarlo, gestionarlo"] },
                { num: "03", titulo: "Outlook y Teams: correo y reuniones", desc: "Correo bajo control y reuniones con acta automática — el ahorro más inmediato de Copilot.", puntos: ["Hilos largos digeridos en segundos", "Borradores de respuesta con vuestro tono", "Teams: acta, acuerdos y tareas automáticas", "Recap de lo que te perdiste sin ver la grabación"] },
                { num: "04", titulo: "Word: documentos que arrancan solos", desc: "Del folio en blanco al borrador decente en un minuto — y plantillas para todo el equipo.", puntos: ["Redactar desde cero o desde otros documentos", "Resumir, reescribir y ajustar el tono", "Pages: documentos colaborativos con IA dentro", "Plantillas reutilizables para el equipo"] },
                { num: "05", titulo: "Excel: los datos que se explican", desc: "Análisis en lenguaje natural, fórmulas que se escriben solas y patrones que salen a la luz.", puntos: ["Análisis de datos en lenguaje natural", "Fórmulas complejas sin saber escribirlas", "Gráficos y tablas dinámicas automáticos", "Patrones y anomalías en volúmenes grandes"] },
                { num: "06", titulo: "PowerPoint: presentaciones desde el informe", desc: "La presentación sale del documento, no de la página en blanco — con imágenes generadas.", puntos: ["Presentaciones completas desde un Word o un prompt", "Designer: imágenes y gráficos para las slides", "Datos convertidos en visualizaciones", "Plantillas corporativas con IA dentro"] },
                { num: "07", titulo: "Notebooks: cuadernos de trabajo", desc: "Proyectos complejos con contexto persistente y fuentes propias — el rincón menos conocido.", puntos: ["Qué son los Notebooks y cuándo usarlos", "Cuadernos de investigación con fuentes propias", "Contexto persistente por proyecto", "Cuadernos compartidos con el equipo"] },
                { num: "08", titulo: "Agentes de Copilot", desc: "Automatizar tareas repetitivas dentro de M365: agentes conectados a vuestros datos internos.", puntos: ["Qué son los agentes y cómo funcionan", "Agentes sobre SharePoint, listas y datos internos", "Casos: onboarding, soporte interno, reporting", "Dónde acaba el agente y empieza la automatización a medida"] },
                { num: "09", titulo: "Aterrizaje por departamento", desc: "La última parte del taller es vuestra: cada equipo monta sus casos reales.", puntos: ["Ventas: propuestas, seguimiento y análisis de clientes", "RRHH: puestos, evaluaciones y onboarding", "Finanzas: informes, previsiones y análisis", "Marketing: contenidos, briefs y campañas"] },
            ]}
            usos={[
                { rol: "Administración", desc: "Bandeja de correo bajo control: resúmenes, borradores y documentos recurrentes que salen en la mitad de tiempo." },
                { rol: "Comercial", desc: "Propuestas en Word desde la plantilla, preparación de visitas con el historial del cliente y seguimiento tras cada Teams." },
                { rol: "Mandos intermedios", desc: "Actas y acuerdos de cada reunión sin tomar notas, e informes de estado que se redactan casi solos." },
                { rol: "Finanzas", desc: "Análisis de Excel en lenguaje natural y cierres documentados en menos tardes." },
            ]}
            encaja={[
                { titulo: "Vivís en Microsoft 365", desc: "Word, Excel, Outlook y Teams a diario: la IA que ya está dentro es la primera que hay que dominar." },
                { titulo: "Pagáis licencias que nadie exprime", desc: "Copilot contratado y medio parado: este taller es la diferencia entre pagarlo y amortizarlo." },
                { titulo: "Muchas reuniones, muchas actas", desc: "Si el día se va en Teams, las actas y acuerdos automáticos devuelven horas cada semana." },
                { titulo: "Dirección prudente con los datos", desc: "Todo se queda dentro del tenant de Microsoft: el argumento que convence a IT y a gerencia." },
            ]}
            faqs={[
                {
                    question: "¿Necesitamos ya las licencias de Copilot para hacer el curso?",
                    answer: "No es imprescindible: la primera parte del taller ayuda justo a decidir cuántas licencias comprar y para quién, que es donde muchas empresas tiran dinero. Si ya las tenéis, mejor — se practica desde el primer minuto sobre vuestro entorno real.",
                },
                {
                    question: "¿Este curso cumple la formación obligatoria del Art. 4?",
                    answer: "Este taller es la parte práctica. Para cumplir el Art. 4 hace falta también el bloque de alfabetización (riesgos, marco legal, uso responsable) — juntos forman el curso estrella, desde 1.200€, con certificado nominal y registro formativo como evidencia.",
                },
                {
                    question: "¿Qué pasa con los permisos y la confidencialidad interna?",
                    answer: "Es el punto más delicado de Copilot: ve lo que el usuario puede ver en M365, y si los permisos internos están mal (carpetas abiertas a todos), la IA lo saca a la luz. El bloque 01 del taller cubre exactamente eso — revisar la gobernanza antes de encender nada.",
                },
                {
                    question: "¿Copilot o ChatGPT? ¿Cuál le conviene a mi empresa?",
                    answer: "Si vivís en Microsoft 365, Copilot juega en casa: trabaja dentro de vuestros documentos y reuniones. ChatGPT es más versátil fuera de la suite. No cobro comisión de ninguno de los dos, así que en los 30 minutos gratis te digo cuál encaja — y a veces la respuesta es ambos, cada uno para lo suyo.",
                },
            ]}
        />
    );
}
