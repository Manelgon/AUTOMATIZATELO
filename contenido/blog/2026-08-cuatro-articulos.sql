-- =============================================================================
-- CUATRO ARTÍCULOS PARA blog_posts · agosto 2026
-- =============================================================================
-- 1 y 2. Restaurantes — amplían el clúster que ya trae impresiones (321 en tres
--        meses) y que hoy solo tiene un artículo.
-- 3.     Gobernanza de agentes — el ángulo que nadie más puede dar igual:
--        quien los monta, no quien los comenta.
-- 4.     Quién te puede multar hoy — hechos verificados en agosto de 2026:
--        el Proyecto de Ley Orgánica de gobernanza de la IA se publicó en el
--        BOCG el 12 de junio de 2026 y SIGUE EN TRAMITACIÓN (no está en el
--        BOE); la AEPD sí sanciona ya (Aena, EXP202304532, algo más de
--        10 millones por el art. 35 del RGPD, con suspensión del sistema).
--        Si esto cambia antes de publicar, hay que revisar el artículo 4.
--
-- Cómo ejecutarlo: Supabase → SQL Editor → pegar → Run.
-- Re-ejecutable: si el slug existe, actualiza en vez de duplicar.
-- Si `tags` fuese jsonb en vez de text[], cambia ARRAY[...] por '[...]'::jsonb.
-- Las portadas van a NULL en los dos de restaurantes: no hay foto de local en
-- public/. Súbelas y actualiza cover_image, o se quedan sin imagen.
-- =============================================================================


-- ── 1 · CHATBOT DE WHATSAPP PARA RESTAURANTES ────────────────────────────────
INSERT INTO blog_posts (
    title, slug, excerpt, content, cover_image, tags,
    meta_title, meta_description, status, is_visible, published_at
) VALUES (
    'Chatbot de WhatsApp para un restaurante: qué resuelve de verdad y qué no',
    'chatbot-whatsapp-para-restaurantes',
    'Un bot no va a salvar un servicio mal montado, pero sí puede coger las reservas que hoy se pierden a las once de la noche. Qué le dejo hacer, qué no, y qué hace falta para montarlo sin que Meta te bloquee el número.',
    $HTML$
<p>Cuando un restaurante me pregunta por un bot de WhatsApp, casi siempre espera una de estas dos respuestas: que lo arregla todo, o que es un juguete. No es ninguna de las dos. Un bot resuelve muy bien tres o cuatro cosas concretas y estorba en el resto, y la diferencia entre que funcione o que acabe apagado a las dos semanas está en saber cuáles son.</p>

<h2>Lo que hace bien</h2>

<p>Contestar cuando tú no puedes. Esa es la función real, y es más grande de lo que parece: la franja en la que más gente escribe a un restaurante es justo la franja en la que nadie puede mirar el móvil. Un bot coge la reserva a las once y media de la noche, la mete en la agenda y manda la confirmación, sin que nadie del equipo toque nada.</p>

<p>Después están las preguntas de siempre. Horario, dirección, si hay terraza, si se puede ir con perro, si hay menú sin gluten, si tenéis mesa para ocho el viernes. Son el ochenta por ciento de los mensajes y son idénticas todas las semanas. Eso lo contesta un bot mejor que una persona, porque lo contesta igual de bien a las cuatro de la tarde que a medianoche.</p>

<p>Y está el recordatorio, que es donde de verdad se nota el dinero: un mensaje el día antes preguntando si sigue en pie, con un botón para cancelar. Quien no va a venir lo dice, y esa mesa vuelve a estar libre con horas de margen en vez de quedarse vacía. Es lo mismo que conté en <a href="/blog/como-automatizar-las-reservas-de-un-restaurante">cómo automatizar las reservas</a>, y sigue siendo la pieza más rentable de todo el sistema.</p>

<h2>Lo que no le dejo hacer</h2>

<p>Gestionar una queja. Cuando alguien escribe enfadado porque la cena fue mal, lo último que quiere es un mensaje automático. Ese hilo se lo paso a una persona y el bot se calla.</p>

<p>Cerrar grupos grandes y eventos. Una comida de veinte personas no es una reserva, es una negociación: menú, anticipo, horario de salida. El bot recoge los datos y avisa; decide alguien.</p>

<p>Y cobrar. Un anticipo por tarjeta se puede montar, pero eso ya es un cobro, y un cobro mal hecho por un bot es un problema del que no te libra ninguna disculpa. Lo dejo fuera salvo que el local lo pida expresamente y sepamos exactamente qué pasa cuando algo falla.</p>

<h2>De reglas o con IA: se nota el primer sábado</h2>

<p>Un bot de reglas funciona por menús: pulsa 1 para reservar, pulsa 2 para el horario. Es barato, es predecible, y se rompe en cuanto alguien escribe «hola, somos 4 el sábado sobre las 9, ¿os queda algo?» — que es exactamente como escribe la gente.</p>

<p>Un bot con IA entiende esa frase, saca las cuatro personas, el sábado y las nueve, y consulta la agenda. A cambio hay que ponerle límites por escrito, porque un modelo suelto contesta cosas que nadie le ha autorizado a contestar. En los que monto, la IA interpreta y decide poco: lo que puede hacer está acotado, y lo que no sabe lo pasa a una persona en vez de inventárselo.</p>

<h2>La API oficial no es un capricho</h2>

<p>Se puede automatizar WhatsApp por la puerta de atrás, con herramientas que se conectan a un móvil normal. Sale más barato y funciona hasta que deja de funcionar: Meta detecta el uso automatizado y bloquea el número. Perder el número por el que te escriben tus clientes no se arregla con un número nuevo.</p>

<p>Por eso monto siempre sobre la API oficial. Tiene un coste por conversación que se paga a Meta —no me lo llevo yo, y te lo enseño tal cual viene— y a cambio el número es tuyo, está verificado y no se cae. Lo cuento entero en <a href="/sistemas/chatbots-whatsapp">chatbots y WhatsApp</a>.</p>

<h2>Hay que decir que es un bot</h2>

<p>El Reglamento Europeo de IA obliga a que quien habla con una máquina sepa que está hablando con una máquina. No es letra pequeña ni hace falta un aviso legal de tres párrafos: basta con que el primer mensaje lo diga con naturalidad y que se pueda pedir hablar con una persona. Los que monto lo llevan de serie, y si te interesa el marco completo lo tienes en <a href="/cumplimiento">cumplimiento del AI Act</a>.</p>

<h2>Qué hace falta para montarlo</h2>

<p>Menos de lo que la gente cree. Una línea de WhatsApp, una agenda de reservas que se pueda consultar desde fuera —vale la que ya uses— y media hora tuya para decidir tres cosas: cuántas mesas puede comprometer el bot solo, a partir de cuántos comensales avisa a una persona, y qué se contesta cuando no hay hueco. Todo lo demás lo monto yo.</p>

<h2>Cuándo no compensa</h2>

<p>Si recibes cuatro mensajes al día, no. Si el problema es que la carta cambia cada semana y nadie la actualiza en ningún sitio, tampoco: eso no lo arregla un bot. Y si no tienes una agenda de reservas real —si las mesas viven en una libreta—, el primer paso no es el bot, es la agenda.</p>

<p>Cuando sí encaja, el precio está publicado: una automatización suelta, desde 500 €; el área de reservas completa, con el bot conectado a tu agenda, desde 2.000 € — la tabla entera está en <a href="/precios#automatizar">precios</a>, sin pedir presupuesto para saber el orden de magnitud.</p>

<p>Si quieres saber si tu caso es de los que compensan, <a href="/#contact">nos vemos 30 minutos</a> y te lo digo. Si la respuesta es que no, también.</p>
$HTML$,
    NULL,
    ARRAY['Restaurantes','Chatbots','WhatsApp'],
    'Chatbot de WhatsApp para Restaurantes: Qué Resuelve',
    'Qué puede hacer de verdad un bot de WhatsApp en un restaurante, qué no le dejo hacer y por qué la API oficial importa. Desde 500 €.',
    'published',
    true,
    NOW()
)
ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    excerpt = EXCLUDED.excerpt,
    content = EXCLUDED.content,
    tags = EXCLUDED.tags,
    meta_title = EXCLUDED.meta_title,
    meta_description = EXCLUDED.meta_description,
    status = EXCLUDED.status,
    is_visible = EXCLUDED.is_visible;


-- ── 2 · CUÁNTO CUESTA AUTOMATIZAR UN RESTAURANTE ─────────────────────────────
INSERT INTO blog_posts (
    title, slug, excerpt, content, cover_image, tags,
    meta_title, meta_description, status, is_visible, published_at
) VALUES (
    'Cuánto cuesta automatizar un restaurante (y por dónde empezar)',
    'cuanto-cuesta-automatizar-un-restaurante',
    'No depende del tamaño del local, depende de por dónde empieces. Los cuatro escalones reales, con los precios delante, y en cuál se queda la mayoría el primer año.',
    $HTML$
<p>«¿Cuánto me costaría automatizar esto?» es la primera pregunta de casi todas las conversaciones, y la respuesta honesta incomoda un poco: depende de por dónde empieces, no de cuántas mesas tengas. Un local de treinta cubiertos con las reservas hechas un desastre tiene más que ganar que uno de cien que ya lo tiene ordenado.</p>

<p>Así que en vez de darte un número al aire, te enseño los cuatro escalones y lo que cuesta cada uno. Los precios son los mismos que están publicados en <a href="/precios#automatizar">la tabla de precios</a>: son suelos, «desde», y lo que los mueve te lo cuento al final.</p>

<h2>Escalón 1 · Una pieza suelta — desde 500 €</h2>

<p>Una sola cosa que hoy te come horas. Las facturas de proveedor leyéndose solas en vez de picarlas a mano. El parte de cierre que se genera y se envía sin que nadie abra una hoja de cálculo. Las reseñas nuevas llegando a un sitio donde alguien las ve.</p>

<p>Es el escalón de prueba, y el que más recomiendo si nunca has automatizado nada. Dos semanas, una pieza, y sales sabiendo si esto es para ti sin haberte jugado el presupuesto del trimestre.</p>

<h2>Escalón 2 · Poner en marcha algo serio — desde 900 €</h2>

<p>Aquí ya no es una pieza, es una herramienta funcionando de verdad con el equipo dentro. En un restaurante suele ser la agenda de reservas montada como es debido, o el sistema de clientes con el histórico migrado y la gente sabiendo usarlo.</p>

<p>La palabra importante es «migrado». Una herramienta nueva con la base de datos vacía la abandona todo el mundo en dos semanas; eso lo he visto suficientes veces.</p>

<h2>Escalón 3 · El área de reservas entera — desde 2.000 €</h2>

<p>Es el escalón donde encaja la mayoría de restaurantes que me escriben, y el que de verdad cambia el día a día: las reservas entrando por WhatsApp a cualquier hora, conectadas a la agenda real, con confirmación automática, recordatorio el día antes y aviso al equipo cuando algo necesita una persona. Hasta cinco procesos, el bot, y tres meses de soporte incluidos.</p>

<p>Lo que se nota no es el bot en sí: es que dejan de perderse las reservas de la noche y bajan las mesas vacías por gente que no avisa. Cómo funciona por dentro está en <a href="/blog/como-automatizar-las-reservas-de-un-restaurante">cómo automatizar las reservas</a>.</p>

<h2>Escalón 4 · El negocio completo — desde 8.000 €</h2>

<p>Reservas, proveedores, escandallos, personal y un panel donde ves todo en tiempo real. Esto tiene sentido en grupos con varios locales, donde el problema ya no es una tarea sino que nadie tiene la foto completa. Con un solo local se puede llegar aquí, pero no es por donde se empieza.</p>

<h2>Qué mueve el precio dentro de cada escalón</h2>

<p>Dos cosas, y ninguna es el tamaño del comedor. La primera, cuántas herramientas hay que conectar: si tu agenda, tu TPV y tu facturación son tres mundos que no se hablan, cada puente es trabajo. La segunda, qué existe ya: si tienes agenda digital, automatizo sobre ella; si las reservas viven en una libreta, primero hay que montar la agenda, y eso es un proyecto antes del proyecto.</p>

<p>Hay un tercer factor que no encarece pero sí decide: quién en tu equipo va a ser el dueño de esto. Los sistemas que se quedan huérfanos se apagan solos, por muy bien montados que estén.</p>

<h2>El coste que no es mío</h2>

<p>Si montamos WhatsApp con la API oficial, Meta cobra por conversación. Es poco dinero y no me lo llevo yo: te lo enseño tal cual viene en su tarifa. Lo digo aquí porque es el gasto recurrente que a nadie le cuentan hasta la segunda factura.</p>

<h2>Por dónde empezaría yo</h2>

<p>Por el escalón 1 o por el 3, y casi nunca por el 2. O pruebas barato con una pieza que te ahorre horas esta semana, o vas directo al área de reservas, que es donde está el dinero perdido. El punto intermedio suele dejar la sensación de haber gastado sin que el día a día cambie del todo.</p>

<p>Si no tienes claro en cuál estás, el <a href="/diagnostico">test de tres minutos</a> te sitúa, o <a href="/#contact">nos vemos media hora</a> y te lo digo yo — gratis y sin que tengas que decidir nada ese día. Lo que sí te aseguro es que sales con el número, no con un «depende».</p>
$HTML$,
    NULL,
    ARRAY['Restaurantes','Precios','Automatización'],
    'Cuánto Cuesta Automatizar un Restaurante | Precios Reales',
    'Los cuatro escalones con sus precios: una pieza desde 500 €, el área de reservas completa desde 2.000 €. Qué mueve el precio y por dónde empezar.',
    'published',
    true,
    NOW()
)
ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    excerpt = EXCLUDED.excerpt,
    content = EXCLUDED.content,
    tags = EXCLUDED.tags,
    meta_title = EXCLUDED.meta_title,
    meta_description = EXCLUDED.meta_description,
    status = EXCLUDED.status,
    is_visible = EXCLUDED.is_visible;


-- ── 3 · GOBERNANZA DE AGENTES ────────────────────────────────────────────────
INSERT INTO blog_posts (
    title, slug, excerpt, content, cover_image, tags,
    meta_title, meta_description, status, is_visible, published_at
) VALUES (
    'Qué le dejo decidir solo a un agente de IA (y qué no)',
    'que-le-dejo-decidir-solo-a-un-agente-de-ia',
    'Un chatbot contesta; un agente actúa. En cuanto algo hace cosas en tus sistemas sin preguntar, alguien tiene que haber decidido hasta dónde. Las tres preguntas que hago antes de darle autonomía a nada.',
    $HTML$
<p>Hay una frontera que se cruza sin darse cuenta. Un chatbot contesta: lo peor que puede pasar es que conteste mal. Un agente actúa: crea el registro, manda el correo, mueve el pedido, cambia el estado en tu sistema. En cuanto algo actúa, la pregunta deja de ser «¿qué tal responde?» y pasa a ser «¿quién decidió que pudiera hacer eso?».</p>

<p>Monto agentes. También los apago cuando toca. Esto es el criterio que uso, contado sin misterio.</p>

<h2>Las tres preguntas, antes de darle autonomía a nada</h2>

<p><strong>¿Es reversible?</strong> Si el agente se equivoca, ¿cuánto cuesta deshacerlo? Crear un borrador es reversible. Enviarlo, no. Actualizar una ficha es reversible si hay histórico; si machaca el dato anterior, no. Todo lo irreversible pide una persona delante, y no por desconfianza: porque el coste del error no es simétrico.</p>

<p><strong>¿Queda rastro?</strong> Si dentro de tres semanas alguien pregunta por qué se hizo algo, ¿puedes contestar? Un agente que actúa sin dejar registro no es que sea peligroso: es que es imposible de auditar, y por tanto imposible de defender ante un cliente o ante una inspección.</p>

<p><strong>¿Quién responde?</strong> No el sistema. Una persona con nombre. Si nadie sabe quién responde de lo que hace el agente, la respuesta es que no responde nadie, y eso siempre acaba mal.</p>

<h2>Lo que no automatizo sin humano delante</h2>

<p>Cualquier cosa que mueva dinero. Cualquier cosa que salga de tu empresa firmada con tu nombre. Cualquier cosa que decida sobre una persona — a quién se contrata, a quién se le da un crédito, a quién se le deniega algo. Y cualquier cosa que toque datos de salud, de menores o de categorías especiales.</p>

<p>En estos casos el agente prepara y una persona confirma. Sigue ahorrando la mayor parte del trabajo: escribir el borrador es el noventa por ciento del esfuerzo, darle a enviar es el diez. Lo que no ahorra es la responsabilidad, y esa no es automatizable por definición.</p>

<h2>Cómo se ve uno bien montado</h2>

<p>Un agente gobernado tiene cuatro cosas que se pueden enseñar: un alcance escrito de lo que puede hacer y lo que no; permisos mínimos, no la llave maestra de todos los sistemas; un registro de cada acción con fecha; y un botón de apagado que alguien de la casa sabe pulsar sin llamarme a mí.</p>

<p>Si falta cualquiera de las cuatro, no está gobernado: está funcionando, que no es lo mismo.</p>

<h2>El error que más veo</h2>

<p>Automatizar antes de decidir. Se monta el agente porque técnicamente se puede, funciona bien tres semanas, y el día que hace algo raro nadie sabe si estaba autorizado a hacerlo, porque nunca se escribió qué estaba autorizado a hacer. Entonces se apaga todo por miedo y se pierde también lo que funcionaba.</p>

<p>Decidir el alcance cuesta media hora en una reunión. Recuperar la confianza del equipo después de un susto cuesta meses.</p>

<h2>Qué dice la ley, sin dramatizar</h2>

<p>Tres cosas concretas. Que si alguien habla con una máquina, tiene derecho a saberlo. Que quien usa IA en su empresa debe adoptar medidas para que su gente sepa manejarla — es el artículo 4 del Reglamento Europeo, y lo cuento entero en <a href="/formacion/ai-act">la guía del Art. 4</a>. Y que los sistemas considerados de alto riesgo tienen obligaciones bastante más duras, cuyo calendario el ómnibus digital de julio de 2026 movió a diciembre de 2027.</p>

<p>Para la mayoría de pymes, lo que aplica hoy es lo primero y lo segundo. Eso no es un trámite: es exactamente lo mismo que te pide el sentido común cuando dejas que algo actúe solo en tu negocio.</p>

<h2>Por dónde empezar</h2>

<p>Por el inventario, no por el agente. Escribe qué hace IA hoy en tu empresa —incluido lo que cada uno usa por su cuenta—, qué toca y quién responde. Suele salir más de lo que la dirección creía. A partir de ahí, cada pieza pasa las tres preguntas de arriba.</p>

<p>Ese inventario es la primera mitad de <a href="/cumplimiento">la auditoría que hago</a>, y también puedes montarlo tú solo: no tiene truco, tiene disciplina. Si prefieres que te lo revise alguien de fuera, <a href="/#contact">30 minutos</a> y te digo qué me preocuparía de lo que tienes.</p>
$HTML$,
    '/servicios-hero.webp',
    ARRAY['Gobernanza','Agentes de IA','AI Act'],
    'Gobernanza de Agentes de IA: Qué Decide Solo y Qué No',
    'Un chatbot contesta, un agente actúa. Las tres preguntas que hago antes de dar autonomía a un agente y lo que nunca automatizo sin una persona delante.',
    'published',
    true,
    NOW()
)
ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    excerpt = EXCLUDED.excerpt,
    content = EXCLUDED.content,
    cover_image = EXCLUDED.cover_image,
    tags = EXCLUDED.tags,
    meta_title = EXCLUDED.meta_title,
    meta_description = EXCLUDED.meta_description,
    status = EXCLUDED.status,
    is_visible = EXCLUDED.is_visible;


-- ── 4 · QUIÉN TE PUEDE MULTAR HOY ────────────────────────────────────────────
INSERT INTO blog_posts (
    title, slug, excerpt, content, cover_image, tags,
    meta_title, meta_description, status, is_visible, published_at
) VALUES (
    'Quién te puede multar hoy en España por usar IA (y quién todavía no)',
    'quien-te-puede-multar-en-espana-por-usar-ia',
    'La ley española que pone las multas del Reglamento de IA sigue en el Congreso, no en el BOE. Eso no significa barra libre: la Agencia de Protección de Datos ya sanciona, y con cifras de ocho dígitos.',
    $HTML$
<p>Circulan dos versiones y las dos son falsas. Una dice que desde agosto de 2026 te pueden caer 35 millones por usar ChatGPT sin permiso. La otra dice que como la agencia española todavía no está en marcha del todo, aquí no pasa nada. Ni lo uno ni lo otro.</p>

<p>Esto es lo que hay a día de hoy, con las fechas delante.</p>

<h2>El Reglamento se aplica; la ley española que lo sanciona, todavía no está</h2>

<p>El Reglamento Europeo de IA es directamente aplicable: no hace falta que España lo copie para que sus obligaciones existan. Pero las multas nacionales necesitan una ley que diga qué autoridad las impone y con qué procedimiento, y esa ley aquí todavía es un proyecto.</p>

<p>El Proyecto de Ley Orgánica para el buen uso y la gobernanza de la inteligencia artificial se publicó en el Boletín Oficial de las Cortes Generales el 12 de junio de 2026 y sigue en tramitación parlamentaria. Ni votación definitiva, ni Senado, ni BOE.</p>

<h2>Las cuantías que fija el proyecto</h2>

<p>Cuando salga, el cuadro que trae es este: hasta 35 millones de euros o el 7 % de la facturación mundial para las prácticas prohibidas; hasta 15 millones o el 3 % para las infracciones muy graves; hasta 7,5 millones o el 1 % para las graves; y hasta 500.000 euros para las leves.</p>

<p>Conviene leer bien la cifra grande: los 35 millones son para las <strong>prácticas prohibidas</strong> — puntuación social, manipulación, reconocimiento de emociones en el trabajo. No es la multa por no haber formado a tu equipo, aunque así se venda en medio internet. Y para las pymes, el Reglamento prevé que se aplique el menor de los dos importes, no el mayor.</p>

<h2>Quien no espera a ninguna ley nueva: la AEPD</h2>

<p>Aquí está la parte que a casi nadie le cuentan. La Agencia Española de Protección de Datos lleva sancionando desde 2018 y no necesita el Reglamento de IA para hacerlo: le basta el RGPD. Y casi todo sistema de IA de una empresa trata datos personales.</p>

<p>El ejemplo reciente es Aena: algo más de diez millones de euros de multa por implantar embarque biométrico con reconocimiento facial sin una evaluación de impacto que cumpliera lo exigido — el artículo 35 del RGPD. La Agencia además ordenó suspender el sistema hasta que la evaluación estuviera bien hecha. Aena anunció recurso.</p>

<p>Lo interesante para una pyme no es la cifra, que es de otra liga. Es el motivo: no la multaron por usar biometría, sino por no haber documentado bien por qué la usaba y por qué no valía algo menos invasivo. Ese fallo está al alcance de cualquier empresa que enchufe una herramienta de IA a los datos de sus clientes sin pensarlo.</p>

<h2>Y quién más puede llamar a tu puerta</h2>

<p>Depende del sector: los supervisores financieros y de seguros mantienen sus competencias, Inspección de Trabajo entra si la IA se usa en decisiones sobre plantilla, y Consumo si afecta a consumidores. Ninguno necesita esperar a la ley de IA para actuar dentro de lo suyo.</p>

<h2>Qué cambió el ómnibus digital y qué no</h2>

<p>El paquete ómnibus de julio de 2026 aplazó el calendario de las obligaciones de alto riesgo del anexo III y reescribió el artículo 4: donde antes se hablaba de garantizar un nivel suficiente de alfabetización, ahora se habla de adoptar medidas para desarrollarla. Es una redacción más razonable y menos amenazante.</p>

<p>Lo que no cambió: la obligación de transparencia sigue en pie —si alguien habla con una máquina, tiene que saberlo—, las prácticas prohibidas siguen prohibidas, y el RGPD sigue exactamente igual de vigente que antes. Un aplazamiento no es una amnistía.</p>

<h2>Qué haría yo esta semana</h2>

<p>Tres cosas, y ninguna requiere abogado. Escribir qué herramientas de IA se usan realmente en la empresa, incluidas las que cada uno abrió por su cuenta. Repasar si alguna de ellas toca datos personales de clientes o de la plantilla, porque ahí es donde está el riesgo real hoy. Y dejar por escrito qué se puede pegar en un chat y qué no.</p>

<p>Con eso ya estás por delante de la mayoría. Si además quieres el inventario, la política de uso y la formación documentada, es exactamente lo que hago en <a href="/cumplimiento">la auditoría de cumplimiento</a>, desde 750 €. Y si lo que te preocupa concretamente es la obligación de formar, está desmontada pieza a pieza en <a href="/formacion/ai-act">la guía del Art. 4</a>. Y si prefieres que te diga en 30 minutos por dónde va tu caso antes de contratar nada, <a href="/#contact">esa media hora es gratis</a>.</p>

<p><em>Fechas y cifras verificadas en agosto de 2026. Esto es una explicación, no asesoramiento jurídico: si tu caso es delicado, consúltalo con quien firme.</em></p>
$HTML$,
    '/auditoria.webp',
    ARRAY['AI Act','Sanciones','Cumplimiento'],
    'Quién te Puede Multar Hoy en España por Usar IA',
    'La ley española de sanciones del AI Act sigue en el Congreso, no en el BOE. Pero la AEPD ya multa: el caso Aena y qué hacer esta semana.',
    'published',
    true,
    NOW()
)
ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    excerpt = EXCLUDED.excerpt,
    content = EXCLUDED.content,
    cover_image = EXCLUDED.cover_image,
    tags = EXCLUDED.tags,
    meta_title = EXCLUDED.meta_title,
    meta_description = EXCLUDED.meta_description,
    status = EXCLUDED.status,
    is_visible = EXCLUDED.is_visible;
