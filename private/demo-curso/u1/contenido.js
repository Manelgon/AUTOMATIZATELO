/* Automatízatelo · IA para la pyme · Unidad 1 · La primera hora ahorrada
   Versión definitiva · síntesis del torneo (base: propuesta A; incorpora lo mejor de B y C según los jueces).
   Solo datos. El motor es común a todas las unidades.

   Fuentes (rutas abreviadas como en 01-PROGRAMA.md):
     A0  = F/A0-tronco-comun/_fuente/contenido.js (B0 demo, B1 predice la siguiente palabra, B2 cinco piezas e iterar, B3 lo que sale con tu nombre)
     M1  = F/modulos/M1-pymes/_fuente/contenido.js (B0 tres tareas, B1 lo que revisa una persona y lo que no delega)
     TCG = F/talleres/chatgpt/_fuente/contenido.js (B03 cinco piezas e iterar)
     FP  = F/talleres/_fuente/fichas-practicas.js (TCG-02 Talleres Vega, TCP-02 [POR CONFIRMAR], TGM-01 correos ficticios)
     DK  = C/deck/contenido-deck.js (solo tono)
   Lo marcado // NUEVO no está en las fuentes: caso preparado de Talleres Vega, ejemplos, preguntas y ejercicios.
   Los MP3 de audioId se generan después; aquí solo se declaran.
   Verificación de fuentes pantalla a pantalla (2026-09-17): fuentes-por-pantalla.md. Lo que no tenía fuente se quitó o se reescribió; el detalle está en RESUMEN.md. */
window.AFC_UNIDAD = {
  id: "u1-la-primera-hora-ahorrada",
  titulo: "La primera hora ahorrada: pedir bien y firmar tú",
  eyebrow: "Automatízatelo · IA para la pyme",
  aprobado: 70,

  resultados: {
    inicial: {
      alto: "Ya lo intuyes: el problema no es la herramienta, es el encargo. Y lo que sale con tu nombre lo decides tú. Esta unidad te da el método para que eso te cueste dos minutos, no una tarde.",
      bajo: "Normal: casi todo el mundo empieza pidiendo «responde a este correo» y borrando el resultado. Al terminar la unidad sabrás por qué pasa y cómo se arregla con cinco piezas y un hueco."
    },
    final: {
      pendiente: "Completa las cinco preguntas para ver tu resultado.",
      alto: "Sabes encargar, sabes iterar y sabes qué no se delega. Ahora toca medirlo en tu empresa: el reto de esta semana.",
      medio: "Tienes el método. Repasa lo que ningún prompt arregla antes de hacer el reto: ahí está el error caro.",
      bajo: "Vuelve a las cinco piezas y a la pantalla de los huecos [POR CONFIRMAR]. Sin eso, el ahorro se convierte en un disgusto."
    }
  },

  glosario: [
    { termino: "Borrador", definicion: "Texto que la IA prepara y que una persona revisa, completa y decide si envía. Un borrador nunca sale tal cual." },
    { termino: "Caso preparado", definicion: "Talleres Vega es una empresa inventada para el curso. Sus personas y sus cifras son ficticias." },
    { termino: "Cinco piezas", definicion: "Lo que lleva un encargo completo: rol, tarea, contexto, tono y límite." },
    { termino: "Contexto", definicion: "Lo que la herramienta necesita saber de tu caso y no puede adivinar: a quién va, qué se ha hablado, qué se ha decidido ya." },
    { termino: "Iterar", definicion: "Corregir la respuesta dentro de la misma conversación en vez de reescribir la petición desde cero." },
    { termino: "Límite", definicion: "Extensión, formato y, sobre todo, qué no debe hacer: no inventar datos, no prometer plazos, no poner precio." },
    { termino: "[POR CONFIRMAR]", definicion: "Marca que se deja en el borrador donde falta un dato que solo una persona puede decidir: precio, fecha, disponibilidad, compromiso. Lleva dueño." },
    { termino: "Predecir la siguiente palabra", definicion: "Lo que hace por dentro un modelo de lenguaje: completa el texto con lo más probable. No sabe, no comprueba, no entiende." },
    { termino: "Prompt", definicion: "La petición escrita. Una palabra incómoda para algo que ya sabes hacer: encargar un trabajo." },
    { termino: "Rol", definicion: "Quién quieres que sea la herramienta al responder: el comercial, la persona de administración, la de atención al cliente." }
  ],

  recursos: [
    { titulo: "Documentos", items: [
      { nombre: "Versión PDF de la unidad", detalle: "el contenido completo para consultar sin conexión", enlace: "recursos/version-imprimible.pdf" },
      { nombre: "Chuleta de una página", detalle: "las cinco piezas, los cuatro trucos y lo que compruebo antes de enviar", enlace: "recursos/u1-chuleta-y-mis-tres-tareas.pdf" },
      { nombre: "Apps de escritorio · enlaces oficiales", detalle: "dónde descargar ChatGPT, Copilot, Gemini y Claude para Windows y Mac, y a quién pedir la instalación si tu empresa administra las cuentas", enlace: "recursos/u1-apps-de-escritorio-enlaces-oficiales.pdf" },
      { nombre: "Plantilla «Mis tres tareas»", detalle: "tarea · minutos/semana · material que necesita · quién revisa. Es el reto de esta semana", enlace: "recursos/u1-chuleta-y-mis-tres-tareas.pdf" }
    ]},
    { titulo: "Prompts con huecos", items: [
      { nombre: "Tres prompts de «Mensajes y atención»", detalle: "con [HUECOS], listos para copiar sin datos reales", enlace: "recursos/u1-prompts-mensajes-y-atencion.txt" }
    ]},
    { titulo: "Vídeos de la unidad", items: [
      { nombre: "Del buzón al borrador: la solicitud de Pablo", detalle: "6 min" }
    ]}
  ],

  sections: [
    { title: "Presentación", start: 0 },
    { title: "Prueba de nivel", start: 3 },
    { title: "0. Prólogo", start: 6 },
    { title: "1. La demo y el ayudante con labia", start: 7 },
    { title: "2. Las cinco piezas del encargo", start: 13 },
    { title: "3. Iterar y lo que no delega el borrador", start: 20 },
    { title: "Ideas clave", start: 27 },
    { title: "Test de autoevaluación", start: 28 }
  ],

  screens: [
    /* ───────── 0-2 · Presentación ───────── */
    { type: "cover", section: "Presentación", overline: "IA para la pyme · Unidad 1",
      title: "La primera hora <em>ahorrada</em>.",
      lead: "Pedir bien y firmar tú. Antes de dedicarle una tarde a la IA, comprueba en una hora si te devuelve tiempo.",
      callout: { label: "Lo que te llevas", text: "Tus tres tareas más repetidas con sus minutos por semana, y una de ellas hecha con IA en la mitad de tiempo, con los huecos marcados y sin prometer nada que no hayas decidido tú." } },

    { type: "content", section: "Presentación", overline: "Presentación",
      title: "Esto no va de entender la IA. Va de recuperar <em>tiempo</em>.",
      lead: "¿Cuántos minutos a la semana se te van en textos que se parecen entre sí? Correos, respuestas a solicitudes, avisos al equipo. Ahí está la primera hora.",
      body: [
        "La IA prepara borradores rápido. Eso es lo que hace bien y lo que se paga solo. Pero un borrador no sabe tu precio, tu plazo ni lo que le prometiste al cliente el mes pasado. Eso lo pones tú.",
        "En esta unidad aprendes a encargarle el trabajo como se lo encargarías a alguien que acaba de entrar: con cinco piezas. Y aprendes qué no se delega nunca, para que la hora ahorrada no se convierta en un error caro.",
        "Da igual en qué mesa te sientes. Sirve para quien contesta solicitudes, para quien lleva la agenda y para quien decide si esto merece una tarde."
      ],
      callout: { label: "Criterio antes que herramienta", text: "Da igual si usáis ChatGPT, Copilot, Gemini o Claude. El método es el mismo. Qué herramienta y con qué cuenta se decide en la unidad 4." } },

    { type: "content", section: "Presentación", overline: "Mapa de la unidad",
      title: "Tres bloques y un <em>reto</em>.",
      cards: [
        ["①", "La demo y el ayudante con labia", "Dos reglas de emergencia, qué hace bien, qué hace mal y por qué. Tus tres tareas, y las tres de Ana."],
        ["②", "Las cinco piezas del encargo", "Rol, tarea, contexto, tono y límite sobre la solicitud de presupuesto que le llega a Talleres Vega."],
        ["③", "Iterar y lo que no delega el borrador", "Cuatro trucos para no empezar de cero, quién decide cada hueco y la lista de treinta segundos antes de enviar."]
      ],
      callout: { label: "El reto de la semana", text: "Al cerrar, haces una tarea de texto de tu empresa con el método y anotas los minutos de antes y de después. No la envías: se revisa en la unidad 2." } },

    /* ───────── 3-5 · Prueba de nivel ───────── */
    { type: "quiz", section: "Prueba de nivel", overline: "Prueba de nivel · 1 de 2", // NUEVO
      title: "Pablo pide y <em>borra</em>.",
      question: "Pablo, comercial de Talleres Vega, lleva meses escribiendo «responde a este correo» y borrando lo que sale. ¿Cuál es la causa más probable?",
      options: [
        "La herramienta que usa es mala; con un plan de pago saldría bien.",
        "Le falta darle lo que Pablo sabe y la herramienta no: quién es, a quién responde y qué no debe decir.",
        "La IA no sirve para correos comerciales.",
        "Escribe la petición demasiado corta; con más adjetivos saldría bien."
      ],
      correct: 1, key: "initial-1",
      explanation: "La herramienta no conoce la empresa, ni al cliente, ni lo que se ha hablado. Si no se lo cuentas, rellena con lo más probable y sale genérico. No es el plan ni los adjetivos: es el encargo." },

    { type: "quiz", section: "Prueba de nivel", overline: "Prueba de nivel · 2 de 2", // NUEVO
      title: "El borrador trae un <em>precio</em>.",
      question: "El borrador que devuelve la IA dice: «Podemos ir el jueves y el cambio de equipo cuesta unos 1.900 euros». Nadie en Talleres Vega ha decidido eso. ¿Qué haces?",
      options: [
        "Lo envías: suena razonable y el cliente tiene prisa.",
        "Le preguntas a la IA si está segura del precio.",
        "Sustituyes fecha y precio por [POR CONFIRMAR] y los decides tú o quien corresponda.",
        "Cambias «unos 1.900» por «aproximadamente 1.900» para no comprometerte."
      ],
      correct: 2, key: "initial-2",
      explanation: "El precio, el plazo y la disponibilidad los decide una persona. La herramienta no los conoce: los ha completado porque suenan bien. Preguntarle de nuevo no lo arregla, y «aproximadamente» sigue siendo un precio que nadie ha dado." },

    { type: "initial-result", section: "Prueba de nivel", overline: "Resultado de partida",
      title: "Tu punto de <em>partida</em>.",
      lead: "Dos ideas mueven toda la unidad: el resultado depende del encargo, y lo que sale con tu nombre lo decides tú." },

    /* ───────── 6 · Prólogo ───────── */
    { type: "video", section: "0. Prólogo",
      videoKey: "video0", overline: "Qué le pasó a Talleres Vega", // NUEVO
      title: "Meses pidiendo, meses <em>borrando</em>.",
      lead: "Talleres Vega: instalaciones y mantenimiento de climatización y pequeñas reformas, 18 personas. Marta es la gerente. Pablo lleva lo comercial. Ana y Luis, la administración.",
      body: [
        "Cada semana entran solicitudes de presupuesto por correo. Las recibe Ana, se las pasa a Pablo y Pablo contesta a mano. Unos veinte minutos cada una, porque cada respuesta se parece a la anterior pero nunca es igual.",
        "Hace meses Pablo abrió ChatGPT desde su cuenta personal, pegó un correo y escribió «responde a este correo». Lo que salió sonaba a banco. Lo borró. Lo ha repetido una docena de veces, con el mismo final. Ana lo probó una vez y no volvió.",
        "Marta lo ve y se hace la pregunta de quien decide: ¿esto sirve para algo o es otra cosa que quita tiempo? Quiere saberlo antes de dedicarle una tarde.",
        "Caso preparado: Talleres Vega y sus personas son ficticias; Los hechos están preparados para el curso. Al final de la unidad verás qué decidió Marta."
      ] },

    /* ───────── 7-12 · Bloque 1 · La demo y el ayudante con labia ───────── */
    { type: "content", section: "1. La demo y el ayudante con labia", overline: "Antes de tocar nada",
      title: "Dos reglas de <em>emergencia</em>.",
      lead: "Cuestan cero minutos y te evitan los dos disgustos más caros. Se aplican desde hoy; el porqué completo llega en las unidades 2 y 3.",
      cards: [
        ["1", "No pegues datos de clientes", "Ni nombre, ni dirección, ni importe que identifique. Para practicar, cambia lo que identifica por [CLIENTE] o inventa el caso. Por qué y cómo, en la unidad 3."],
        ["2", "No envíes nada sin leerlo entero", "Entero, no en diagonal. Lo que sale con tu firma lo has escrito tú a todos los efectos, lo redactara quien lo redactara."]
      ],
      callout: { label: "En Talleres Vega", text: "Pablo pegaba cada correo con el nombre y la calle del cliente. Desde hoy, [CLIENTE] y [DIRECCIÓN]. Treinta segundos. Y nada sale sin leerse entero: ni de la cuenta de Pablo ni de la tuya." } }, // NUEVO (ejemplo de Vega)
      // Fuente: A0 B3 (lo que sale con tu nombre, se lee entero); M1 B0 (si exige datos reales, muestra).

    { type: "content", section: "1. La demo y el ayudante con labia", overline: "La demo, sobre la bandeja de Ana", // NUEVO (los cinco correos son los de TGM-01, puestos en la bandeja de Ana)
      title: "Lo que hace en dos <em>minutos</em>.",
      lead: "Lunes, nueve de la mañana. En la bandeja de Ana hay cinco correos preparados para el curso: una petición de presupuesto, una incidencia, una confirmación de reunión, una factura con una duda y un mensaje promocional. Sin datos reales. Abre cada acción y piensa cuánto tardas tú.",
      explorables: [
        { audioId: "explore-resumir", label: "Resumir", title: "El hilo de la incidencia, en tres líneas", text: "Ana pega ocho correos cruzados con un proveedor y pide qué se ha acordado y qué queda abierto. Sale en diez segundos. Lo lee contra el hilo: falta un matiz del último correo. Lo añade. Un minuto en vez de ocho." },
        { audioId: "explore-responder", label: "Responder", title: "Un primer borrador para la factura con duda", text: "Sale un texto educado que promete «resolverlo hoy mismo». Ana no puede prometer eso. Lo cambia por «lo revisamos y te decimos». El borrador ahorra el arranque; la promesa la decide ella." },
        { audioId: "explore-ordenar", label: "Ordenar", title: "Los cinco correos, en una tabla", text: "Asunto, urgencia, qué hay que hacer y quién. La IA propone. Ana corrige dos filas porque sabe cosas que la tabla no sabe: la reunión ya se movió y el promocional va a la papelera." },
        { audioId: "explore-traducir", label: "Traducir", title: "La confirmación de reunión, en inglés", text: "El proveedor escribe en inglés. Ana pide la respuesta en su idioma, con el mismo contenido y tono cercano. Comprueba que la fecha y la hora son las que puso ella. Listo." }
      ],
      callout: { label: "La proporción", text: "Eso que acabas de ver es la mayor parte de lo que vas a usar. El resto de la unidad es hacerlo bien y sin meter a la empresa en un lío." } },
      // Fuente: A0 B0 (la demo: resumir, responder, ordenar, traducir; «el noventa por ciento de lo que vais a usar»); FP TGM-01 (cinco correos ficticios; comprobar destinatario, datos y compromiso).

    { type: "table", section: "1. La demo y el ayudante con labia", overline: "Qué se le encarga y qué no",
      title: "Bien, mal y <em>por qué</em>.",
      lead: "La pregunta no es «qué sabe hacer», es «qué le encargo». Esta tabla la contesta. Busca tu tarea en ella.",
      headers: ["Tarea", "¿Se lo encargas?", "Por qué"],
      rows: [
        ["Redactar o reescribir un correo, un aviso, un resumen", "Sí", "Es lo que mejor hace. Te ahorra el arranque."],
        ["Ordenar notas sueltas y sacar lo importante", "Sí", "Estructura bien un texto desordenado."],
        ["Explicar lo mismo de otra manera o traducirlo", "Sí", "Cambia tono y destinatario sin perder el sentido."],
        ["Tus precios, tus plazos, tu disponibilidad", "No", "No los conoce. Si no se los das, los completa con lo que suena bien."],
        ["Las cuentas", "No", "Se equivoca sumando con la misma seguridad con la que acierta."],
        ["Lo de tu empresa que no le has contado", "No", "No está en el texto que le has pasado, así que no lo sabe."]
      ] },
      // Fuente: A0 B1 (qué hace bien / qué hace mal; «se equivoca sumando con la misma seguridad con la que acierta»).

    { type: "content", section: "1. La demo y el ayudante con labia", overline: "La única idea de motor que necesitas",
      title: "Predice la siguiente <em>palabra</em>.",
      lead: "No hace falta saber cómo funciona por dentro, igual que no hace falta saber cómo va el motor del coche para conducir. Pero hay una idea que sí, porque de ella salen todas las precauciones del curso.",
      body: [
        "Un modelo de lenguaje ha leído una cantidad enorme de texto y ha aprendido qué palabra suele venir después de qué. Nada más. No consulta una base de verdades, no razona como una persona y no sabe si lo que dice es cierto.",
        "Cuando le falta información no se calla: completa con lo más probable. Y lo más probable suena bien. Por eso una invención no parece un error: parece una respuesta normal, con su cifra y su fecha.",
        "El «podemos ir el jueves» del borrador de Pablo no salió de ninguna agenda. Era, sencillamente, lo que suele venir después de «podemos ir»."
      ],
      reveals: [
        { audioId: "capsula-si-no-lo-sabes-tu", label: "La consecuencia para ti", title: "Si no lo sabes tú, no puedes saber si lo que te ha dicho está bien", text: "Por eso el ahorro está en las tareas donde tú conoces la respuesta correcta y la herramienta te ahorra escribirla. No en las tareas donde esperas que ella sepa algo que tú no sabes." },
        { audioId: "capsula-lavadora-ayudante", label: "¿Entonces qué me he comprado?", title: "La lavadora y el ayudante con labia", text: "Una lavadora hace siempre lo mismo: metes la ropa, eliges el programa y sabes qué sale. No hace falta revisar. Esto se parece más a un ayudante nuevo: muy leído, muy rápido, con mucha labia. Hará lo que le pidas y no te dirá que no sabe algo. Con un ayudante así se encarga bien y se revisa siempre." }
      ] },
      // Fuente: A0 B1 (predice la siguiente palabra; por qué inventa; «si no lo sabes tú…»; la lavadora y el ayudante). El jueves de Pablo: NUEVO.

    { type: "content", section: "1. La demo y el ayudante con labia", overline: "Tu mapa de tareas",
      title: "¿Qué tres tareas repites cada <em>semana</em>?",
      lead: "Antes de encender nada. Cuanto más repetitivas, mejor. No valen cosas grandes: cuanto más pequeñas, reversibles y comprobables, mejor.",
      bullets: [
        "Tarea: con un verbo. Responder solicitudes, redactar el aviso del lunes, resumir el hilo con el proveedor.",
        "Minutos por semana: veces por minutos. Los que tardas hoy, sin redondear. Es tu punto de partida para medir después.",
        "Material que necesita: ¿tienes el texto o el dato a mano? Si exige datos reales de clientes, se hace con una muestra hasta que la empresa autorice el entorno.",
        "Quién revisa: la persona que lee el resultado antes de que salga. Si eres tú, escríbelo igual. Si la respuesta es «nadie», esa tarea todavía no es candidata."
      ],
      callout: { label: "Qué te ahorra", text: "Saber por dónde empezar. La primera tarea que hagas con IA debe ser de texto, frecuente y con una persona que la revisa. Las de números y las de decisiones llegan en unidades siguientes." } },
      // Fuente: M1 B0 (tres tareas, material, quién revisa, muestra si exige datos reales); A0 («cuanto más pequeñas, reversibles y comprobables, mejor»).

    { type: "quiz", section: "1. La demo y el ayudante con labia", overline: "Las tres de Ana", // NUEVO (las tres tareas de Ana y sus minutos son del caso preparado)
      title: "¿Cuál va <em>primero</em>?",
      question: "Ana ha escrito sus tres tareas. A: responder solicitudes de presupuesto, 12 a la semana, 20 minutos cada una, revisa Pablo. B: pasar los partes de los técnicos a la hoja de Excel, 90 minutos a la semana, revisa Luis. C: reclamar facturas vencidas, 3 a la semana, 15 minutos cada una, nadie revisa. ¿Cuál es la candidata a la primera hora ahorrada?",
      options: [
        "La B, porque es la que más minutos suma.",
        "La A: es de texto, se repite, tiene el material a mano y una persona que revisa.",
        "La C, porque son correos y la IA los escribe rápido.",
        "Las tres a la vez, para ahorrar más."
      ],
      correct: 1, key: "activity-0",
      explanation: "La B es de tablas y números: se trabaja en la unidad 5, con comprobación. La C no tiene quien revise y lleva importes y fechas de clientes. La A es texto, se repite doce veces por semana, la tarifa y la agenda están a mano y Pablo revisa antes de enviar. Cuatro horas semanales de arranque de correo: ahí está la primera que vuelve." },

    /* ───────── 13-19 · Bloque 2 · Las cinco piezas del encargo ───────── */
    { type: "content", section: "2. Las cinco piezas del encargo", overline: "El encargo", // NUEVO (solicitud del cliente ficticio)
      title: "«Prompt» es una palabra incómoda para <em>encargar</em>.",
      lead: "Ya sabes encargar un trabajo. Lo haces cada día con la gente del taller. A la IA se le encarga igual que a alguien capaz y rápido que acaba de entrar y no conoce la empresa.",
      body: [
        "La solicitud que Ana le pasa a Pablo, preparada para el curso (cliente inventado: Laura Campos, del restaurante La Brisa de Papel). Laura escribe: «Buenas, el aire de la sala no enfría bien desde julio. Queremos saber si compensa reparar o cambiar el equipo y cuánto tardaríais. ¿Podéis venir a verlo la semana que viene?»",
        "Lo que Pablo sabe y la herramienta no: que la agenda de visitas la lleva Sonia, que no se da precio sin ver el local, que a un restaurante se le habla de tú y que Marta no quiere que se prometa un plazo antes de la visita.",
        "Si nada de eso entra en el encargo, la respuesta sale genérica. Y Pablo la borra."
      ] },
      // Fuente: A0 B2 y TCG B03 (encargar como a una persona nueva). La solicitud del restaurante es material nuevo.

    { type: "content", section: "2. Las cinco piezas del encargo", overline: "La estructura", // NUEVO (frases de Pablo)
      title: "Las cinco <em>piezas</em>.",
      lead: "Abre cada pieza. Debajo va la frase que Pablo escribe para esta solicitud.",
      explorables: [
        { audioId: "explore-rol", label: "Rol", title: "Rol · quién quieres que sea", text: "«Eres el comercial de una empresa de climatización y pequeñas reformas de 18 personas.» Le dice desde qué puesto responde." },
        { audioId: "explore-tarea", label: "Tarea", title: "Tarea · qué hace, con un verbo", text: "«Redacta la respuesta a esta solicitud de presupuesto.» Un verbo claro: redacta, resume, compara, ordena." },
        { audioId: "explore-contexto", label: "Contexto", title: "Contexto · lo que necesita saber", text: "«La solicitud va pegada abajo. No hemos visitado el local. Las visitas las agenda Sonia. No damos precio sin ver el equipo.» A quién va, qué se ha hablado, qué se ha decidido ya. Es lo que la herramienta no puede adivinar." },
        { audioId: "explore-tono", label: "Tono", title: "Tono · cómo tiene que sonar", text: "«Cercano y directo, de tú, sin frases hechas.» Sin esto sale el correo de banco que Pablo llevaba meses borrando." },
        { audioId: "explore-limite", label: "Límite", title: "Límite · extensión y qué no hacer", text: "«Máximo 150 palabras. No indiques precio, fechas ni plazos: deja [POR CONFIRMAR]. Separa lo confirmado de lo pendiente.» Es la pieza que te evita el error caro." }
      ],
      callout: { label: "Qué te ahorra", text: "Las vueltas. Con las cinco piezas, la misma petición pasa de devolver un texto genérico a devolver un borrador que se puede usar. No es magia: le has dado la información que le faltaba." } },
      // Fuente: A0 B2 (ROL · TAREA · CONTEXTO · TONO · LÍMITE); TCG B03; FP TCG-02 (separar confirmado de pendiente, sin precio ni fechas).

    { type: "table", section: "2. Las cinco piezas del encargo", overline: "Versión mala y versión buena", // NUEVO (comparación sobre el caso)
      title: "La misma solicitud, dos <em>encargos</em>.",
      lead: "A la izquierda, lo que Pablo escribía. A la derecha, lo que escribe ahora. Mira qué pieza falta en cada fila.",
      headers: ["Pieza", "«Responde a este correo»", "Con las cinco piezas"],
      rows: [
        ["Rol", "No hay. La herramienta responde como un asistente genérico.", "Comercial de una empresa de climatización de 18 personas."],
        ["Tarea", "«Responde.» Sin decir a qué ni para qué.", "Redacta la respuesta a una solicitud de presupuesto."],
        ["Contexto", "Solo el correo pegado. Nada de lo que Pablo sabe.", "No se ha visitado el local, las visitas las agenda Sonia, no hay precio sin ver el equipo."],
        ["Tono", "No hay. Sale formal y largo.", "Cercano, de tú, sin frases hechas."],
        ["Límite", "No hay. Inventa fecha y precio porque nadie se lo prohibió.", "150 palabras, sin precio ni fechas, [POR CONFIRMAR] donde falte, confirmado separado de pendiente."]
      ] },
      // Fuente: A0 B2 (el mal prompt y el bueno comparados sobre la misma tarea).

    { type: "content", section: "2. Las cinco piezas del encargo", overline: "La pieza que más ahorra",
      title: "El <em>límite</em>: confirmado, pendiente y nada de precio.",
      lead: "Si solo vas a añadir una cosa a una petición corta, añade esto. Es lo que separa un borrador útil de un borrador peligroso.",
      body: [
        "Pídele que separe lo confirmado de lo pendiente. Así el borrador te enseña dónde está seguro y dónde ha rellenado. Ese mapa vale más que el texto.",
        "Prohíbele el precio, las fechas y los resultados prometidos. No porque no sepa escribirlos: porque los escribirá igual de bien siendo falsos.",
        "Y pídele que termine con preguntas: las que hay que hacerle al cliente antes de la visita. Te descubre lo que te falta por saber."
      ],
      callout: { label: "El límite de Pablo, tal cual", text: "«Separa lo confirmado de lo pendiente de confirmar. No indiques precio, fechas ni resultados. Donde falte un dato, escribe [POR CONFIRMAR]. Termina con tres preguntas para preparar la visita.»" } },
      // Fuente: FP TCG-02 (prompt: separa confirmado de pendiente; no indiques precio, fechas ni resultados garantizados; termina con preguntas de descubrimiento); FP TCP-02 ([POR CONFIRMAR]).

    { type: "content", section: "2. Las cinco piezas del encargo", overline: "Lo que te devuelve", // NUEVO (resultado del caso)
      title: "Un borrador con tres <em>huecos</em>.",
      lead: "Esto es lo que Pablo recibe con el encargo completo. Léelo como quien lo va a firmar: ¿qué te ahorra y qué sigue siendo tuyo?",
      body: [
        "«Gracias por escribirnos. Para decirte si compensa reparar o cambiar el equipo tenemos que verlo: en una visita corta comprobamos el estado y te damos las dos opciones con su coste. Podemos pasar el [POR CONFIRMAR]; Sonia, que lleva la agenda, te confirma hora. La visita cuesta [POR CONFIRMAR]. Mientras tanto: ¿de qué año es el equipo? ¿Tenéis la factura o la marca a mano? ¿Cuántas plazas tiene la sala?»",
        "Lo que te ahorra: la estructura, el tono y las preguntas. Diez minutos de los veinte.",
        "Lo que sigue siendo tuyo: la fecha, el precio de la visita y si a ese cliente le hacéis la visita gratis. Tres decisiones, tres huecos, dos minutos de rellenar."
      ],
      callout: { label: "La cuenta", text: "Pablo pasa de veinte minutos a diez por respuesta. Con doce solicitudes a la semana son dos horas. La primera hora, y la segunda. Y sin un solo dato que él no haya decidido. Haz la misma cuenta con tu tarea: ahí está tu hora." } },
      // Fuente: FP TCG-02 (borrador de una página + lista de datos por confirmar). Cifras del caso: material nuevo.

    { type: "video", section: "2. Las cinco piezas del encargo", overline: "Vídeo · 6 min", videoKey: "video1",
      title: "Del buzón al <em>borrador</em>.",
      body: [
        "Pablo recibe la solicitud de Laura, del restaurante La Brisa de Papel (cliente inventado). Primero pide mal: «responde a este correo». Después con las cinco piezas. Se ve la diferencia lado a lado.",
        "Le pide que pregunte lo que le falta, y se marcan en el borrador los tres huecos que Pablo rellena a mano: precio, fecha de visita y disponibilidad.",
        "Cierre: el borrador tarda dos minutos. La decisión sigue siendo tuya."
      ] },
      // Guion del vídeo según 01-PROGRAMA.md · Unidad 1. Clase pendiente de producir.

    { type: "match", section: "2. Las cinco piezas del encargo", overline: "Actividad de aprendizaje 1", // NUEVO
      title: "¿Qué pieza es cada <em>frase</em>?",
      lead: "Seis frases del encargo de Pablo, desordenadas. Di a qué pieza pertenece cada una. Una pieza aparece dos veces.",
      key: "activity-1", selectLabel: "Elige la pieza",
      items: [
        ["«Eres el comercial de una empresa de climatización y pequeñas reformas.»", "Rol"],
        ["«Redacta la respuesta a esta solicitud de presupuesto.»", "Tarea"],
        ["«No hemos visitado el local y las visitas las agenda Sonia.»", "Contexto"],
        ["«Cercano y directo, de tú, sin frases hechas.»", "Tono"],
        ["«No indiques precio ni fechas; donde falte un dato, escribe [POR CONFIRMAR].»", "Límite"],
        ["«Termina con tres preguntas para preparar la visita.»", "Límite"]
      ] },

    /* ───────── 20-26 · Bloque 3 · Iterar y lo que no delega el borrador ───────── */
    { type: "content", section: "3. Iterar y lo que no delega el borrador", overline: "Iterar en vez de repetir",
      title: "La primera respuesta casi nunca es la <em>buena</em>.",
      lead: "Y no hace falta que lo sea. Lo que cuesta tiempo es reescribir la petición entera cada vez. Lo que ahorra tiempo es corregir dentro de la misma conversación. ¿Cuántas veces has borrado un chat y vuelto a empezar?",
      body: [
        "Pablo borraba y empezaba de cero. Cada intento, otros cinco minutos y el mismo texto genérico, porque la petición seguía sin las piezas que le faltaban.",
        "Ahora dice qué cambiar: «más corto», «quita la disculpa», «el segundo párrafo, en dos líneas». Treinta segundos por vuelta. Hay cuatro movimientos que funcionan mejor que volver a empezar. Los ves en la siguiente pantalla."
      ],
      callout: { label: "La frase", text: "El que la usa bien no escribe mejores peticiones: itera más rápido." } },
      // Fuente: A0 B2 (iterar es más importante que acertar a la primera); TCG B03.

    { type: "content", section: "3. Iterar y lo que no delega el borrador", overline: "Los cuatro trucos", // NUEVO (ejemplos de Pablo; el patrón «cómo se estropea / cómo se usa» es del curso)
      title: "Cuatro movimientos que ahorran <em>vueltas</em>.",
      lead: "Abre cada uno. Primero cómo se estropea; después cómo lo usa Pablo con la respuesta al restaurante.",
      explorables: [
        { audioId: "explore-ejemplo-estilo", label: "Un ejemplo de tu estilo", title: "Dale un correo tuyo anterior", text: "Se estropea: pegar un correo real con el nombre y el historial del cliente «para que aprenda el tono». Se usa: Pablo pega una respuesta suya de hace un mes, con los datos quitados, y dice «así escribimos nosotros». Cambia más que cualquier adjetivo. Se acabó el correo de banco." },
        { audioId: "explore-que-pregunte", label: "Que te pregunte", title: "Pídele que te pregunte lo que le falte", text: "Se estropea: no usarlo y dejar que rellene los huecos por su cuenta. Se usa: «antes de redactar, pregúntame lo que necesites saber». Es el truco menos conocido y el que más mejora. Lo que le preguntó a Pablo, en la siguiente pantalla." },
        { audioId: "explore-tres-opciones", label: "Tres opciones", title: "Pide tres versiones y elige", text: "Se estropea: pedir tres y dejar que la herramienta diga cuál es «la mejor». Elegir por la empresa no es su trabajo. Se usa: Pablo pide dos tonos, directo y consultivo, los lee y se queda con uno. Elegir es más rápido que corregir." },
        { audioId: "explore-que-no", label: "Di qué no te ha gustado", title: "Corrige lo concreto, no empieces de nuevo", text: "Se estropea: borrar el chat y reescribirlo todo. Se usa: «Sobra la primera frase.» «No te disculpes.» «Esa palabra no la usamos.» Una línea sobre lo que ya tienes, y la siguiente versión la respeta." }
      ] },
      // Fuente: A0 B2 y TCG B03 (los cuatro trucos; «un correo tuyo anterior cambia el resultado más que cualquier adjetivo»; «el truco menos conocido y el que más mejora»); M1 B1 (varias opciones sirven para comparar, no para que elija por la empresa); FP TCG-02 (dos tonos: directo y consultivo).

    { type: "content", section: "3. Iterar y lo que no delega el borrador", overline: "El truco que más rinde", // NUEVO (diálogo de preguntas y respuestas del caso)
      title: "Lo que preguntó y lo que Pablo <em>sabía</em>.",
      lead: "Pablo escribió «antes de redactar, pregúntame lo que te falte». La IA hizo cuatro preguntas. Mira cuáles pudo contestar y cuáles no.",
      bullets: [
        "«¿El cliente es nuevo o ya ha trabajado con vosotros?» · Pablo lo sabe: es nuevo. Lo añade al contexto.",
        "«¿Cuánto suele tardar un cambio de equipo en una sala así?» · Pablo no lo decide sin visita. Contesta: «no lo indiques; escribe [POR CONFIRMAR]».",
        "«¿Quién firma el correo?» · Pablo lo sabe: él, con el teléfono de la oficina.",
        "«¿Ofrecéis financiación o plan de pago?» · Pablo no lo decide: es de Marta. Contesta: «no lo menciones»."
      ],
      callout: { label: "Fíjate", text: "Dos preguntas las contesta con lo que sabe. Dos las contesta con «no lo digas». Las dos respuestas sirven igual: la primera da contexto; la segunda pone límite. Preguntar antes cuesta un minuto; descubrirlo después de enviar cuesta bastante más." } },
      // Fuente: A0 B2 («pídele que te pregunte lo que le falte»); M1 B1 (si falta un dato, que lo señale en lugar de completarlo). Diálogo de Pablo: nuevo.

    { type: "table", section: "3. Iterar y lo que no delega el borrador", overline: "Lo que ningún prompt arregla", // NUEVO (el reparto de quién decide qué en Talleres Vega es del caso preparado)
      title: "Cuatro cosas que decide una <em>persona</em>.",
      lead: "Si la tarea necesita un dato que la herramienta no tiene, no hay forma de pedirlo bien: hay que dárselo. Y si es una decisión, no se delega. La IA prepara opciones; la persona responsable decide qué se envía. Así se reparte en Talleres Vega. ¿Y en tu empresa, quién es quién?",
      headers: ["Lo que no delega el borrador", "Quién lo decide en Talleres Vega", "Qué pone Pablo mientras tanto"],
      rows: [
        ["El precio", "Pablo, con la tarifa delante y después de ver el equipo", "Nada. [POR CONFIRMAR] donde iría el importe"],
        ["El plazo (visita, reparación, entrega)", "Sonia, que lleva la agenda de visitas; el de obra, después de ver el local", "[POR CONFIRMAR] donde iría la fecha"],
        ["La disponibilidad (equipo, técnico)", "Taller y almacén, según lo que haya esa semana", "«Te lo confirmamos», sin fecha"],
        ["El compromiso (condiciones, forma de pago, «sin compromiso»)", "Marta, y lo que dice la tarifa vigente. No lo que suena habitual", "Se quita del borrador si la IA lo ha puesto"]
      ] },
      // Fuente: A0 B2 (lo que ningún prompt arregla); M1 B1 (lo que no delega: precio, plazo, disponibilidad, compromiso; «la IA prepara opciones, la persona responsable decide»).

    { type: "content", section: "3. Iterar y lo que no delega el borrador", overline: "El hueco", // NUEVO (borrador final de Pablo)
      title: "<em>[POR CONFIRMAR]</em> donde falte un dato.",
      lead: "Un hueco visible es mejor que un dato inventado. Siempre. Es la marca más barata que existe contra el error caro.",
      body: [
        "Se pide en el límite: «donde falte un dato, escribe [POR CONFIRMAR]». Y se respeta en la revisión: cada hueco lo rellena una persona o se queda como pregunta al cliente.",
        "Así queda el borrador de Pablo tras dos vueltas: «Hola. Gracias por escribirnos. Para decirte si compensa reparar o cambiar el equipo tenemos que verlo. Sonia te llama para cuadrar el día: [POR CONFIRMAR · fecha, Sonia]. La visita [POR CONFIRMAR · coste, Pablo con la tarifa]. Sobre el plazo, te lo decimos con seguridad tras la visita. Para prepararla: ¿de qué año es el equipo y cuántas plazas tiene la sala? Un saludo, Pablo · Talleres Vega.»",
        "Dos huecos, los dos con dueño. Pablo no ha inventado nada y no ha esperado a nadie: el correo sale hoy con lo que se sabe hoy."
      ],
      reveals: [
        { audioId: "capsula-hueco-vs-invento", label: "¿Por qué funciona?", title: "Porque cambia quién decide", text: "Sin la marca, la herramienta decide el precio por ti y tú tienes que cazarlo leyendo. Con la marca, la herramienta te señala dónde falta tu decisión. Pasas de vigilar a decidir. Y decidir es más rápido que vigilar." }
      ] },
      // Fuente: FP TCP-02 («deja [POR CONFIRMAR]; no inventes enlaces, horarios, condiciones»); M1 B1 (si falta un dato, que lo señale en lugar de completarlo).

    { type: "table", section: "3. Iterar y lo que no delega el borrador", overline: "Antes de enviar", // NUEVO (la columna de Vega es del caso preparado)
      title: "Lo que sale con tu nombre lo <em>firmas</em> tú.",
      lead: "Que lo redactara una herramienta no cambia quién responde de lo que dice. Por eso se lee entero. Esta es la lista de treinta segundos, con lo que le podía pasar a Vega en cada punto. ¿Cuál te ha pasado a ti?",
      headers: ["Qué miro", "Qué podía salir mal en Vega", "Qué hago"],
      rows: [
        ["Hechos", "El borrador daba por hecho que la sala tenía preinstalación. El restaurante no lo había dicho", "Comparo cada afirmación con el correo original. Lo que no está, fuera o [POR CONFIRMAR]"],
        ["Cifras", "«Unos 1.900 euros» que no están en ninguna tarifa", "Ninguna cifra sale sin la tarifa delante. Cada una, decidida por alguien o marcada"],
        ["Condiciones", "Un «sin compromiso» que nadie había decidido", "Solo las condiciones que la empresa aplica. Lo demás se quita"],
        ["Tono", "«Estimado cliente, quedamos a su entera disposición»", "¿Suena a nosotros o a un banco? Si suena a banco, un ejemplo de nuestro estilo"],
        ["Destinatario", "Un borrador reutilizado con el saludo del cliente anterior", "Nombre y tratamiento los pongo yo, al final, con lo que ese cliente ya sabe"],
        ["Compromiso y siguiente paso", "«Podemos ir el jueves»: nadie había mirado la agenda", "Qué prometemos y quién lo cumple. Si no lo sé, no está terminado"]
      ] },
      // Fuente: M1 B1 (antes de usar un borrador se revisan hechos, cifras, condiciones, tono, destinatario y siguiente paso); A0 B3 (lo que sale con tu nombre lo firmas tú; se lee entero, no en diagonal).

    { type: "quiz", section: "3. Iterar y lo que no delega el borrador", overline: "Actividad de aprendizaje 2", // NUEVO
      title: "El plazo que <em>volvió</em>.",
      question: "En la tercera vuelta, el borrador de Pablo vuelve a colar una frase: «La instalación se hace en la semana siguiente a la visita». Nadie del taller ha dicho eso. ¿Qué hace Pablo?",
      options: [
        "Lo deja: es lo habitual en el sector y el cliente quiere saber cuándo.",
        "Lo cambia por «en pocos días», que compromete menos.",
        "Lo sustituye por [POR CONFIRMAR · plazo], apunta que lo decide el taller tras la visita y se lo dice a la IA: «no menciones plazos».",
        "Borra el chat y empieza de cero con una petición más larga."
      ],
      correct: 2, key: "activity-2",
      explanation: "El plazo de obra no estaba en el encargo, así que la herramienta lo completó con lo que suena bien. «En pocos días» sigue siendo una promesa que nadie ha hecho. El hueco con dueño y la corrección dentro de la misma conversación arreglan las dos cosas: el dato y la siguiente vuelta." },

    /* ───────── 27 · Ideas clave ───────── */
    { type: "keys", section: "Ideas clave", overline: "Ideas clave",
      title: "Lo que te llevas de esta <em>unidad</em>.",
      items: [
        "Dos reglas de emergencia desde hoy: no pegues datos de clientes y no envíes nada sin leerlo entero.",
        "Predice la siguiente palabra. No sabe, no comprueba, no entiende. Por eso inventa, y lo inventado suena igual de bien.",
        "Se le encarga como a un ayudante nuevo: rol, tarea, contexto, tono y límite. Sin contexto sale genérico; sin límite, inventa.",
        "Itera, no repitas: un ejemplo de tu estilo sin datos, que te pregunte, tres opciones que eliges tú, di qué no te ha gustado.",
        "El precio, el plazo, la disponibilidad y el compromiso los decide una persona con nombre. [POR CONFIRMAR] donde falte un dato, y con dueño.",
        "Lo que sale con tu nombre lo firmas tú. El borrador tarda dos minutos; la decisión sigue siendo tuya."
      ] },

    /* ───────── 28-32 · Test de autoevaluación ───────── */
    { type: "quiz", section: "Test de autoevaluación", overline: "Pregunta 1 de 5", // NUEVO
      title: "Un plazo que nadie <em>dijo</em>.",
      question: "El borrador de respuesta a un cliente incluye un plazo de entrega que nadie en la empresa ha decidido. ¿Por qué ocurre?",
      options: [
        "Porque la herramienta está mal configurada.",
        "Porque completa con lo más probable cuando le falta el dato, y un plazo concreto suena bien.",
        "Porque ha consultado la agenda de la empresa.",
        "Porque es el plazo por defecto que trae la herramienta."
      ],
      correct: 1, key: "final-1", final: true,
      explanation: "Predice la siguiente palabra. Si el plazo no está en el encargo, lo rellena con lo que encaja. No es un fallo puntual ni una configuración: es cómo funciona. Por eso se prohíbe en el límite y se marca [POR CONFIRMAR]." },

    { type: "quiz", section: "Test de autoevaluación", overline: "Pregunta 2 de 5", // NUEVO
      title: "Por dónde <em>empezar</em>.",
      question: "Tienes tres tareas apuntadas: responder solicitudes de presupuesto, calcular el margen de cada trabajo y decidir a qué cliente se le hace la visita gratis. ¿Cuál haces primero con IA?",
      options: [
        "Calcular el margen: son números y va más rápido.",
        "Responder solicitudes: es texto, se repite y una persona la revisa antes de enviar.",
        "Decidir la visita gratis: así no tengo que pensarlo yo.",
        "Las tres a la vez: cuanto antes, más ahorro."
      ],
      correct: 1, key: "final-2", final: true,
      explanation: "Lo que hace bien es redactar. Las cuentas se equivocan con la misma seguridad con la que aciertan, y las decisiones sobre clientes no se delegan. La primera tarea: texto, frecuente y con revisión. Una, medida; no tres a bulto." },

    { type: "quiz", section: "Test de autoevaluación", overline: "Pregunta 3 de 5", // NUEVO
      title: "¿Qué pieza <em>falta</em>?",
      question: "«Eres el comercial de una empresa de reformas. Redacta una respuesta amable a este cliente. Tono cercano. Máximo 120 palabras.» ¿Qué pieza falta y qué va a pasar?",
      options: [
        "Falta el rol: responderá como un asistente genérico.",
        "Falta el contexto: no sabe qué se ha hablado ni qué no podéis prometer, así que lo supondrá.",
        "No falta nada: está completo.",
        "Falta el tono: saldrá formal y largo."
      ],
      correct: 1, key: "final-3", final: true,
      explanation: "Tiene rol, tarea, tono y extensión. No tiene contexto (qué se sabe, qué se ha decidido) ni el límite de qué no decir. Sin eso, rellenará precio, plazo y promesas por su cuenta." },

    { type: "quiz", section: "Test de autoevaluación", overline: "Pregunta 4 de 5", // NUEVO
      title: "Correcto, pero suena a otra <em>empresa</em>.",
      question: "La respuesta no tiene errores, pero no parece escrita por vosotros. ¿Qué movimiento la arregla más rápido?",
      options: [
        "Empezar una conversación nueva con otros adjetivos.",
        "Pegarle un correo vuestro anterior, sin datos del cliente, y decirle «así escribimos nosotros».",
        "Pedirle que sea «más profesional».",
        "Pegarle el último correo real de ese cliente, con su nombre, para que copie el tono."
      ],
      correct: 1, key: "final-4", final: true,
      explanation: "Un ejemplo de tu estilo cambia el resultado más que cualquier adjetivo. Se hace dentro de la misma conversación (iterar, no repetir) y con los datos del cliente quitados: regla de emergencia número uno." },

    { type: "quiz", section: "Test de autoevaluación", overline: "Pregunta 5 de 5", // NUEVO
      title: "Antes de <em>enviar</em>.",
      question: "El borrador está listo y tienes prisa. ¿Qué es lo mínimo que revisas antes de que salga con tu nombre?",
      options: [
        "Las faltas de ortografía.",
        "Hechos, cifras, condiciones, destinatario y compromiso; y que cada hueco lo haya rellenado una persona.",
        "Nada: si lo ha hecho con las cinco piezas, ya está revisado.",
        "Le pides a la IA que lo revise ella y envías lo que diga."
      ],
      correct: 1, key: "final-5", final: true,
      explanation: "Las cinco piezas mejoran el borrador; no lo firman. Y preguntarle a la IA no es comprobar. Lo que sale con tu nombre lo has escrito tú a todos los efectos. La lista tarda treinta segundos." },

    { type: "final-result", section: "Test de autoevaluación", overline: "Resultado del test",
      title: "Tu primera <em>hora</em>.",
      lead: "El objetivo no era aprender qué es la IA. Era que la próxima solicitud que te llegue tarde la mitad y no prometa nada que no hayas decidido tú." },

    /* ───────── 34 · Cierre ───────── */
    { type: "completion", section: "Cierre", overline: "Qué decidió Talleres Vega · El reto de esta semana", // NUEVO (qué decidió Talleres Vega + reto)
      title: "Una hora, no una <em>tarde</em>.",
      body: [
        "Marta no le dedicó una tarde. Le dedicó una hora con Pablo y Ana. Salieron tres tareas con sus minutos: responder solicitudes de presupuesto, pasar los partes a la hoja y reclamar facturas vencidas. La primera era la candidata. Pablo la hizo con las cinco piezas: de veinte minutos a diez, con dos huecos que rellenó él y uno que es de Sonia. Las otras dos esperan: la de la hoja, a la unidad 5; la de las facturas, a que alguien la revise.",
        "Marta apuntó dos cosas para más adelante: que Pablo estaba usando su cuenta personal, y que en el borrador casi se cuela un plazo que nadie había dado. Las dos se resuelven en las unidades 2, 3 y 4. Por ahora, el borrador no se envía.",
        "El reto de esta semana, en tu empresa: escribe tus tres tareas más repetidas con minutos por semana en la plantilla «Mis tres tareas». Elige una de texto y hazla con las cinco piezas. Itera dos vueltas. Anota los minutos de antes y de después. Marca [POR CONFIRMAR] donde falte un dato y apunta quién rellena cada hueco. No la envíes: en la unidad 2 aprendes a cazar lo que se ha inventado, y ese borrador es tu material."
      ] }
  ]
};
