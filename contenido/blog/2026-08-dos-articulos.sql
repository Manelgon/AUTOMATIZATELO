-- =============================================================================
-- DOS ARTÍCULOS PARA blog_posts · agosto 2026
-- =============================================================================
-- 1. Restaurantes — responde al clúster que ya te trae impresiones (321 en tres
--    meses según Search Console) y al que hoy no ofreces nada.
-- 2. Art. 4 del AI Act — la consulta con la que te van a buscar, contada con la
--    redacción vigente tras el Ómnibus digital de julio de 2026.
--
-- Cómo ejecutarlo: Supabase → SQL Editor → pegar → Run.
-- Es re-ejecutable: si el slug ya existe, actualiza el artículo en vez de
-- duplicarlo. Si tu tabla no tiene índice único en `slug`, quita las dos
-- cláusulas ON CONFLICT y ejecútalo una sola vez.
-- Si la columna `tags` fuese jsonb en vez de text[], cambia ARRAY[...] por
-- '["...","..."]'::jsonb.
-- =============================================================================


-- ── 1 · RESTAURANTES ─────────────────────────────────────────────────────────
INSERT INTO blog_posts (
    title, slug, excerpt, content, cover_image, tags,
    meta_title, meta_description, status, is_visible, published_at
) VALUES (
    'Cómo automatizar las reservas de un restaurante (y dejar de perder mesas)',
    'como-automatizar-las-reservas-de-un-restaurante',
    'El teléfono suena en pleno servicio, los mensajes de madrugada se quedan sin contestar y cada semana hay dos mesas vacías por gente que no avisa. Así se monta un sistema de reservas por WhatsApp conectado a tu agenda real.',
    $HTML$
<p>Un restaurante pierde reservas en tres momentos, y ninguno es cuando el comedor está lleno: cuando suena el teléfono en pleno servicio y nadie puede cogerlo, cuando alguien escribe a las once de la noche y la respuesta llega al día siguiente, y cuando dos mesas se quedan vacías porque los que reservaron no aparecieron ni avisaron.</p>

<p>Los tres tienen el mismo arreglo, y no es «contratar a alguien para el teléfono». Es que las reservas entren por el canal donde ya te escribe la gente —WhatsApp— y que el sistema hable con tu agenda de verdad.</p>

<h2>Qué se puede automatizar de una reserva (y qué no)</h2>

<p>Conviene separarlo, porque hay quien vende «un bot» y lo que entrega es un contestador con botones.</p>

<ul>
<li><strong>Se automatiza bien:</strong> consultar disponibilidad real, proponer huecos, confirmar la reserva, pedir número de comensales, mandar el recordatorio la víspera, recoger la cancelación y volver a ofrecer esa mesa.</li>
<li><strong>Se automatiza a medias:</strong> alergias, celebraciones, mesas concretas, grupos grandes. El bot los recoge y los pasa a una persona con todo el contexto.</li>
<li><strong>No se automatiza:</strong> decidir si esa noche cabe un grupo de doce. Eso lo decide quien lleva la sala.</li>
</ul>

<p>La diferencia entre un bot que sirve y uno que molesta está justo ahí: <strong>si no consulta tu agenda, no resuelve nada</strong>. Contesta bonito y deja el trabajo donde estaba.</p>

<h2>Cómo funciona, paso a paso</h2>

<p>Un sistema de reservas por WhatsApp bien montado hace esto:</p>

<ul>
<li><strong>Entra el mensaje</strong> a cualquier hora, también domingo por la noche. El bot se identifica como asistente automático desde el primer mensaje.</li>
<li><strong>Consulta la disponibilidad</strong> en tu agenda o tu programa de reservas y propone huecos que existen de verdad.</li>
<li><strong>Confirma y registra</strong> la reserva con nombre, personas, hora y lo que haga falta. Queda en el mismo sitio donde la ve tu equipo.</li>
<li><strong>Avisa la víspera</strong> con un recordatorio que pide confirmación. Ahí es donde caen la mitad de los no-shows.</li>
<li><strong>Si alguien cancela</strong>, la mesa vuelve a estar libre y se ofrece a quien se quedó en lista de espera. Sin que nadie tenga que acordarse.</li>
<li><strong>Cuando hace falta una persona</strong>, la conversación pasa a tu equipo con todo lo hablado. El cliente no repite su historia.</li>
</ul>

<h2>Los no-shows son un problema de recordatorio, no de carácter</h2>

<p>La gente no falla por mala fe: falla porque reservó el martes para el sábado y se le fue. Un recordatorio el día antes que se conteste con un «sí» o un «no» convierte una mesa perdida en una mesa que puedes reofrecer con veinticuatro horas de margen.</p>

<p>Y ese «no» tiene valor: es lo que alimenta la lista de espera. Sin recordatorio, la cancelación te llega cuando ya no puedes hacer nada con ella.</p>

<h2>El error caro: automatizar tu WhatsApp de siempre</h2>

<p>Hay herramientas baratas que automatizan un WhatsApp normal. Van contra las condiciones de Meta, y el final conocido es que <strong>el número de tu restaurante amanece bloqueado con todas las conversaciones dentro</strong> — incluidas las reservas de esta semana.</p>

<p>La vía correcta es la <strong>API oficial de WhatsApp Business</strong>: número verificado, plantillas de mensaje aprobadas para los recordatorios y un canal que sigue siendo tuyo. Las conversaciones se pagan a Meta, son céntimos, y se pagan directamente a Meta sin que nadie meta un sobreprecio por el medio.</p>

<p>Y desde el 2 de agosto de 2026 hay un motivo más para hacerlo bien: las obligaciones de transparencia del artículo 50 del Reglamento Europeo de IA piden que quede claro que se está hablando con un sistema automático. Decirlo de entrada, además, funciona mejor: nadie se enfada con un bot que se presenta como bot.</p>

<h2>Qué hace falta para montarlo</h2>

<ul>
<li>Una <strong>cuenta de WhatsApp Business API</strong> verificada a nombre del negocio.</li>
<li>Una <strong>agenda o programa de reservas que se pueda consultar</strong> desde fuera. Si el tuyo no deja, hay camino igual: se monta un panel propio que lleve la agenda y hable con el bot.</li>
<li><strong>Las respuestas de tu casa</strong>: horarios, política de cancelación, si hay terraza, si se puede ir con perro. El bot no se inventa nada, contesta lo que le has dicho.</li>
</ul>

<p>De alta con Meta a funcionando suelen ser dos a cuatro semanas, la mayor parte esperando la verificación de la cuenta.</p>

<h2>Esto ya funciona, y no solo en restaurantes</h2>

<p>El mecanismo es el mismo en cualquier negocio que viva de la agenda. Una clínica estética lo tiene funcionando: el asistente da citas consultando los huecos reales, manda recordatorios, gestiona la lista de espera y pasa a recepción lo que necesita una persona. Y una empresa de comedores escolares atiende por WhatsApp a cientos de familias que avisan de ausencias cada mañana.</p>

<p>Puedes verlos en <a href="/casos">casos</a>, y el detalle de cómo se monta, en <a href="/sistemas/chatbots-whatsapp">chatbots de WhatsApp y web</a>.</p>

<h2>Cuánto cuesta</h2>

<p>Un bot conectado de verdad a la agenda entra dentro de un proyecto de automatización <strong>desde 2.000 €</strong>, con el precio cerrado por escrito antes de empezar. No va suelto porque su valor está justo en la conexión: sin agenda detrás, es un contestador. Las tarifas de conversación de Meta van aparte y se pagan a Meta. Están todas las tarifas en <a href="/precios">precios</a>.</p>

<h2>Por dónde empezar</h2>

<p>Si no tienes claro si tu mayor fuga de tiempo son las reservas o es otra cosa, el <a href="/diagnostico">test de tres minutos</a> te lo dice. Y si lo prefieres hablado, cuéntamelo en <a href="/#contact">media hora, gratis</a>: te digo qué automatizaría primero, qué costaría y qué parte seguiría llevando una persona.</p>
$HTML$,
    NULL,  -- cover_image: sin foto de restaurante en el repo; sin ella, la
           -- plantilla pinta el degradado de marca. Cuando tengas una, aquí va.
    ARRAY['Automatización', 'Chatbots', 'WhatsApp', 'Hostelería'],
    'Cómo automatizar las reservas de un restaurante',
    'Reservas por WhatsApp conectadas a tu agenda real: cómo se monta, cómo bajan los no-shows y por qué automatizar tu WhatsApp normal acaba en bloqueo.',
    'published',
    TRUE,
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


-- ── 2 · ART. 4 DEL AI ACT ────────────────────────────────────────────────────
INSERT INTO blog_posts (
    title, slug, excerpt, content, cover_image, tags,
    meta_title, meta_description, status, is_visible, published_at
) VALUES (
    '¿Está tu empresa obligada a formar a sus empleados en IA?',
    'esta-tu-empresa-obligada-a-formar-a-sus-empleados-en-ia',
    'Sí, si usáis IA — pero no como te lo están contando. Ni horas mínimas, ni certificado oficial, ni multas de 35 millones por no dar un curso. Esto es lo que dice el artículo 4 después del Ómnibus de julio de 2026.',
    $HTML$
<p>La respuesta corta es sí: si en tu empresa se usan sistemas de IA, el artículo 4 del Reglamento Europeo de IA te obliga a algo desde el 2 de febrero de 2025. La respuesta larga importa más, porque casi todo lo que se está contando por ahí sobre este artículo es mentira o está desactualizado.</p>

<h2>A quién obliga exactamente</h2>

<p>El artículo 4 se dirige a <strong>quien provee sistemas de IA y a quien los despliega</strong>. Eso segundo es la palabra clave: eres responsable del despliegue si usas un sistema de IA bajo tu autoridad, aunque no lo hayas construido tú y aunque sea gratuito.</p>

<p>En cristiano: si tu equipo usa ChatGPT, Copilot, Gemini o cualquier programa con IA integrada para trabajar, te aplica. No hace falta que desarrolles nada.</p>

<h2>Qué te obliga a hacer, después del cambio de julio de 2026</h2>

<p>Aquí está el matiz que casi nadie ha actualizado. La redacción original hablaba de garantizar «un nivel suficiente» de alfabetización. <strong>El Ómnibus digital, en vigor desde julio de 2026, modificó el artículo 4</strong>: la alfabetización sigue siendo obligatoria, pero ya no se exige alcanzar un nivel concreto.</p>

<p>Lo que se te pide hoy es <strong>adoptar medidas para apoyar el desarrollo de la alfabetización en IA</strong> de tu personal y de quien maneje esos sistemas en tu nombre, teniendo en cuenta sus conocimientos, su experiencia y el contexto en el que los usan.</p>

<p>Es un <strong>deber de medios, no de resultado</strong>. Nadie te va a examinar a la plantilla. Lo que tienes que poder demostrar es que tomaste medidas razonables y adaptadas.</p>

<h2>Las tres mentiras que vas a oír</h2>

<p><strong>«La ley exige X horas de formación.»</strong> Falso. El Reglamento no fija ninguna duración. Quien te venda un curso diciendo que la ley obliga a un número exacto de horas se lo está inventando.</p>

<p><strong>«Necesitas el certificado oficial del AI Act.»</strong> No existe. No hay ningún esquema oficial de certificación de la alfabetización en IA. Lo que existe es evidencia documental: un registro de la formación con fecha, contenidos y asistentes, y el certificado nominal que emita quien la imparta. Vale, pero porque es lo que puedes enseñar, no porque lo homologue nadie.</p>

<p><strong>«Si no formas, te pueden multar con 35 millones o el 7 % de tu facturación.»</strong> Esa cifra es real, pero es el techo de las <em>prácticas prohibidas</em> del artículo 5 — cosas como el reconocimiento de emociones en el trabajo. <strong>El artículo 4 ni siquiera aparece en la lista de infracciones con multa del artículo 99.</strong> Quien te enseñe esa cifra para venderte un curso de alfabetización te está vendiendo miedo.</p>

<h2>Entonces, ¿qué pasa si no hago nada?</h2>

<p>Menos de lo que te cuentan y más de lo que parece. La obligación existe desde febrero de 2025. Desde agosto de 2026, <strong>las autoridades nacionales de vigilancia del mercado pueden supervisarla y hacerla cumplir</strong>, con medidas proporcionadas. Y la carga de enseñar lo que hiciste es tuya: sin inventario, sin política y sin registro formativo, no hay nada que enseñar.</p>

<p>Hay además un motivo que llega antes que cualquier inspección: <strong>los clientes grandes ya lo preguntan</strong>. Cuando un despacho o una empresa mediana te mete en su proceso de compras, la pregunta sobre gobernanza de IA aparece en el cuestionario. Ahí la evidencia no te evita una multa: te evita perder el contrato.</p>

<h2>Qué hacer, en cuatro pasos</h2>

<ul>
<li><strong>Identifica la IA que ya se usa.</strong> Incluida la que nadie ha aprobado: la cuenta gratuita de ChatGPT que alguien abrió en marzo cuenta.</li>
<li><strong>Mira quién la usa y para qué.</strong> No es lo mismo redactar correos que cribar candidaturas — esto último puede entrar en los usos de alto riesgo del Anexo III.</li>
<li><strong>Forma según el puesto.</strong> Medidas adaptadas al conocimiento y al uso real de cada perfil, no un curso genérico igual para todos.</li>
<li><strong>Guarda la evidencia.</strong> Registro fechado con contenidos, horas y asistentes; certificado nominal; y el material impartido.</li>
</ul>

<h2>Y de paso, que sirva para algo</h2>

<p>Lo que veo en la práctica: las empresas que hacen esto solo para cumplir acaban con un PDF en un cajón, y las que lo aprovechan salen con el equipo usando la IA mejor de lo que entró. Cuesta lo mismo. La diferencia es si el bloque obligatorio va suelto o pegado a un taller con las herramientas que ya usa tu gente y con vuestros casos encima de la mesa.</p>

<p>Tienes el detalle de qué exige el artículo, bloque a bloque, en <a href="/formacion/ai-act">la guía del Art. 4</a>. Si lo que necesitas es saber en qué punto está tu empresa, eso es <a href="/cumplimiento">la auditoría de cumplimiento</a>. Y los precios de las dos cosas están públicos en <a href="/precios">precios</a>, desde 600 € la formación y desde 750 € el diagnóstico.</p>

<p>Si prefieres que te lo diga en media hora y sin compromiso, <a href="/#contact">cuéntame cómo trabajáis</a>: te digo qué perfiles tienes, qué formación les toca y qué evidencia guardar.</p>
$HTML$,
    '/escribiendo-ventana.webp',
    ARRAY['AI Act', 'Cumplimiento', 'Formación', 'Normativa'],
    '¿Está tu empresa obligada a formar a sus empleados en IA?',
    'Qué exige de verdad el Art. 4 del AI Act tras el Ómnibus de julio de 2026: ni horas mínimas, ni certificado oficial, ni multas de 35 millones por no formar.',
    'published',
    TRUE,
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
