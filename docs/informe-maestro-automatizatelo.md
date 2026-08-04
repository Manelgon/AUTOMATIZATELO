# Informe ejecutivo maestro · Automatizatelo.com

*Estado completo del proyecto según metodología Peter Lead · 4 de agosto de 2026*
*⚠️ Todo lo descrito está construido y verificado en local — PENDIENTE DE PUSH a producción.*

---

## 1. Resumen ejecutivo

**Qué es**: Automatizatelo ha pasado de "agencia de automatización" a **empresa de implantación de IA para pymes** (giro ejecutado el 4-ago-2026). Marca: *Automatizatelo · Implantación de IA*.

**El claim**: «Implanto la IA en tu empresa: con cabeza, cumpliendo la ley y con sistemas que trabajan solos.»

**El embudo** (decisión estratégica del cuestionario): **la formación y la auditoría captan** (entrada barata, 600-1.800€, la vocación de Manel); **los sistemas monetizan** (2.000-8.000€, el margen). Secuencia: *te formo → te pongo en regla → te lo automatizo*.

**Clientes foco**: despachos profesionales · pymes de servicios · centros educativos. (Clínicas y e-commerce: retirados con 301. Administración pública: aparcada.)

**El foso** (frase que suena en toda la web): *"Construyo lo que enseño"* — ni consultor puro ni formador puro: los sistemas que enseña y audita están en producción real.

**Cifras del sitio**: 22 URLs estáticas en sitemap + blog dinámico · 3 líneas de servicio con 6 páginas · 4 páginas de formación (hub + 3 audiencias) · 2 landings sectoriales · 1 página pilar normativa · 5 documentos-producto · 2 recursos gratuitos descargables.

---

## 2. Arquitectura completa

```
automatizatelo.com
│
├── /                                  HOME — escaparate y conversión
│
├── SERVICIOS (qué vendo)
│   ├── /servicios/formacion-ia-empresas      Hub de formación (general)
│   ├── /servicios/auditoria-ia               Auditoría AI Act ★ producto estrella
│   ├── /servicios/implantacion-ia            Puesta en marcha de herramientas
│   ├── /servicios/automatizacion             Automatización de procesos
│   ├── /servicios/chatbots                   Chatbots WhatsApp/web
│   └── /servicios/paneles                    Paneles a medida
│
├── FORMACIÓN POR AUDIENCIA (hijas del hub, entran por SEO y por el hub)
│   ├── /formacion-ia-despachos               Fincas, gestorías, asesorías
│   ├── /formacion-ia-centros-educativos      Colegios, institutos, FP
│   └── /formacion-ia-directivos              Gerencia y comités
│
├── AUTOMATIZACIÓN POR SECTOR (landings de captación)
│   ├── /automatizacion-administradores-fincas   ★ nicho más fuerte (caso real)
│   └── /automatizacion-empresas-servicios
│
├── PÁGINAS DE NEGOCIO TRANSVERSALES
│   ├── /precios                              Todos los precios públicos
│   ├── /como-trabajo                         Método (3 fases + 2 ramas)
│   ├── /casos-de-exito                       Prueba (5 casos)
│   ├── /sobre-mi                             EAT / marca personal
│   └── /recursos                             Biblioteca gratuita
│
├── CONTENIDO
│   ├── /formacion-obligatoria-ai-act         Página pilar normativa (GEO)
│   └── /blog + /blog/[slug]                  SSR desde Supabase
│
├── LEGALES: /aviso-legal · /proteccion-datos · /politica-cookies · /declaracion-accesibilidad
│
├── ASSETS: /recursos/prompts-ia-fincas.html · /recursos/cheatsheet-3-herramientas-fincas.html (noindex)
│
└── REDIRECTS 301: /automatizacion-restaurantes → /  ·  /automatizacion-clinicas → /
                   /automatizacion-ecommerce → /  ·  /servicios/desarrollo-web-crm → /servicios/paneles
                   (/mx/ se deja en 404 a propósito)
```

### Navegación

**Navbar**: Inicio (solo móvil) · **Soluciones ▾** [Servicios (6) + Automatización por sector (2)] · Cómo trabajo · Precios · Casos · Recursos · Blog · Sobre mí · [CTA Auditoría Gratuita]. El dropdown tiene scroll interno propio (inmune a Lenis).

**Regla de oro de la navegación**: *el navbar enseña los servicios; las versiones por audiencia se descubren dentro de cada servicio y por Google.*

**Footer** (4 columnas): Marca+redes (LinkedIn/Instagram/WhatsApp) · Explora (9) · Soluciones (12, con prefijos "Formación ·"/"Automatización ·") · Contacto clicable + CTA. Cierre: logo XXL + línea mono "hecha con Next.js, Supabase e IA" + legales.

---

## 3. Inventario de páginas con su copy

### 3.1 HOME `/`
*Title*: «Implantación de IA para Pymes en Barcelona | Automatizatelo» · *Rol*: escaparate integral + conversión.

| Sección | Copy clave |
|---|---|
| **Hero** (foto + velo cálido) | Kicker "Implantación de IA · Barcelona y toda España" · H1 **"Implanto la IA en tu empresa: con cabeza, cumpliendo la ley y con sistemas que trabajan solos"** · Bio: "Soy Manel. Formo a tu equipo, te pongo en regla con el Reglamento Europeo de IA y construyo los sistemas que ya trabajan cada día en despachos, academias y pymes reales." · CTAs: Auditoría Gratis + WhatsApp · Nombre gigante "Manel Méndez" elástico (reacciona solo sobre el propio nombre) |
| **Marquee tecnologías** | "Trabajamos con las tecnologías de IA más avanzadas" (único sitio donde aparecen n8n/Make) |
| **El problema** (mazo 5+1 cartas sticky terracota) | Título: "Estas tareas te están costando clientes (y no lo sabes)" · Cartas: mensajes uno a uno / **"Tu equipo ya usa ChatGPT — cada uno a su manera"** / copiar datos a mano / facturas e informes uno por uno / **"La ley de IA ya aplica — y no tienes ni un papel que lo demuestre"** · Final naranja: "Cuando implantas la IA con cabeza: +10h semana · −40% errores · ×2 capacidad" |
| **Qué implanto** (7 filas editoriales) | "Lo que puedo implantar en tu negocio" — Formación · Auditoría · ChatGPT/Copilot · Automatización · Chatbots · Paneles · Facturas — todas con enlace a su página |
| **Cómo trabajo** (número gigante 01-03) | "Tres pasos. Sin sorpresas, sin jerga." — 01 Auditoría ("qué formar, qué poner en regla y qué automatizar — y qué no merece la pena") · 02 Implementación ("formo, dejo el cumplimiento con su evidencia, construyo los sistemas") · 03 Acompañamiento (→ /como-trabajo). Schema HowTo |
| **Sectores** (mosaico 3) | "Sectores donde la IA ya está funcionando" — Fincas (grande, "panel en uso diario desde enero de 2026") · Centros Educativos · Empresas de Servicios |
| **Por qué yo** (melocotón) | "Llevo 3 años haciendo que los negocios trabajen solos…" — 01 **"Construyo lo que enseño"** · 02 Precio cerrado · 03 Código y datos tuyos · 04 Te enseño a no depender de mí |
| **Casos** (cinta marquee) | Serincosol · Henkoaching · AFCademia + "Clínica estética" y "Comedores escolares · Cataluña" (anónimos) |
| **Precios** (3 pestañas) | Proyectos (500/2.000/8.000) · Formación (600/900/2.400/1.900) · Auditoría (750/1.800) — garantías y cierre cambian por pestaña · botón "Ver todos los precios →" |
| **Contacto** | "Cuéntame cómo trabajas" — formulario melocotón, checkbox RGPD |
| **FAQ** (con schema) | Informativas + 3 de objeción: "Ya intentamos automatizar y lo abandonamos" · "¿Mi empresa es demasiado pequeña?" · "¿Y si tú desapareces mañana?" |
| **Del blog + Footer** | Últimos posts + footer completo |

### 3.2 SERVICIOS

**`/servicios/formacion-ia-empresas`** — Hub general de formación. *Title*: «Formación en IA para Empresas | AI Act».
H1: **"Formación en IA para tu empresa, tu despacho o tu claustro"** · Cápsula "Qué es" · Qué incluye (talleres, gobernanza, SCORM) · **Formatos y precios** (tabla: taller 8h 900-1.400€ / programa 16h desde 2.400€ / alfabetización Art.4 desde 600€ / SCORM desde 1.900€) + evidencia documental (certificado nominal + registro fechado) · **"¿Para quién?" — 3 tarjetas** a despachos/centros/directivos ("La misma formación, en tu idioma") · Quién lo imparte (terracota: "No enseño IA de oídas") · **"¿Eres una academia o entidad de formación?"** (producción white-label: "tu alumno nunca sabe que existo", desde 1.900€) · FAQ con precios reales · CTA. Schemas: Service + FAQPage.

**`/servicios/auditoria-ia`** ★ — *Title*: «Auditoría IA: ¿Cumples el Reglamento Europeo de IA?».
H1: **"¿Tu empresa cumple el Reglamento Europeo de IA?"** · Sub: "Te lo digo con un informe, no con miedo" · Cápsula con precios · "¿Te suena?" (4 señales, incl. "te llegan ofertas de certificación oficial que huelen raro — y hacen bien: no existe") · "Qué te llevas" (terracota): inventario, clasificación de riesgos, informe+plan "escrito para gerencia, no para abogados", política+formación · **Precios: Diagnóstico desde 750€ / Pack completo desde 1.800€** (aclarado: la formación del pack ES la alfabetización de 600€) · FAQ (6) · CTA: **"Mejor un informe hoy que una carta mañana."** Schemas: Service con offers + FAQPage.

**`/servicios/implantacion-ia`** — *Title*: «Implantar ChatGPT, Copilot o Gemini en tu Empresa».
H1: "ChatGPT, Copilot o Gemini **en marcha en tu empresa**" · Ángulo: "Comprar licencias es fácil; que el equipo las use bien, con datos seguros y cumpliendo la ley, es lo difícil" · 5 herramientas como filas (ChatGPT/Copilot/Gemini/Claude/NotebookLM) con "elegidas por tu caso, no por moda — **no cobro comisión de ninguna**" · 4 pasos (elección → configuración segura → casos de uso por puesto → política y formación) · **Desde 900€; con política y formación 1.500-3.000€** · FAQ con "¿cuál es mejor?" respondida sin humo y "te recomendaré el plan más barato que cumpla" · Schemas: Service + FAQPage.

**`/servicios/automatizacion`** — *Title*: «Automatización de Procesos para Pymes».
Cápsula + 6 flujos (facturas doble sentido, citas, seguimiento, avisos, reportes, cumplimiento) · Sección estrella **#facturas** (franja terracota, dos columnas entrada/salida: las que llegan se leen solas, las tuyas se generan solas) · FAQ + Service schema.

**`/servicios/chatbots`** — *Title*: «Chatbots de WhatsApp y Web para Empresas».
H1: "Chatbots que resuelven, **no que contestan bonito**" · "Un bot suelto es un juguete; conectado a tu agenda es un empleado que no duerme" · 4 capacidades + escalado a persona con contexto · Transparencia ("el cliente sabe que habla con un bot — funciona mejor") · Casos anónimos (clínica estética, comedores Cataluña) · **Desde 2.000€ dentro de proyecto** · API oficial WhatsApp · Schemas: Service + FAQPage.

**`/servicios/paneles`** — *Title*: «Paneles y Dashboards a Medida para Pymes».
H1: "Tu negocio entero, **en un panel hecho para ti**" · Anti-SaaS: "No te adaptes tú al software" · 4 capacidades ("un panel donde hay que meter todo a mano es una hoja de cálculo con pretensiones") · Prueba: fincas en uso diario desde enero 2026, academia, clínica · **Desde 2.000€, sin licencias por usuario, código tuyo** · Honestidad: "cuando el genérico te encaja, te lo digo y te ahorras el proyecto" · Schemas: Service + FAQPage.

### 3.3 FORMACIÓN POR AUDIENCIA

**`/formacion-ia-despachos`** — H1: "IA para tu despacho: **sin jugarte los datos de nadie**". Ángulo diferencial: secreto profesional ("qué se anonimiza antes de preguntar y qué no sale del despacho jamás"). Autoridad real citada: paneles de fincas en producción + formación de AFCademIA. 4 dolores · 4 bloques (taller con casos del despacho / protección de datos / Art. 4 / SCORM) · FAQ (incl. "¿podemos usar ChatGPT con datos de clientes?" → "así, en general: no") · FAQPage schema.

**`/formacion-ia-centros-educativos`** — H1: "Tus alumnos ya usan IA. **¿Y tu claustro?**". Honestidad en cápsula: **"no puntúa en el baremo de oposiciones — solo los cursos homologados"**. 4 dolores (cada docente a su manera / alumnos entregan trabajos con IA / corrección come tardes / Art. 4 obliga al centro) · 4 bloques incl. **política de uso de IA del centro** (diferencial) · 6 FAQ ("prohibirla no funciona…") · FAQPage schema.

**`/formacion-ia-directivos`** — H1: "IA para dirección: **criterio para decidir, no humo**". Formato ejecutivo: **sesión de medio día desde 600€, programa desde 1.200€**. 4 bloques (mapa real / lo que exige la ley / gobernanza / plan de decisión) · FAQ estrella: "¿Me vas a intentar vender un proyecto después?" · CTA: "Media jornada. Criterio para años." · FAQPage schema.

### 3.4 SECTORES DE AUTOMATIZACIÓN (SectorPage compartido)

**`/automatizacion-administradores-fincas`** — hero con foto, pains, soluciones, stats terracota, FAQ, CTA. Prueba real: uso diario en despachos desde enero de 2026.
**`/automatizacion-empresas-servicios`** — ídem con foto Sagrada Família; CRM y leads en <5 min.

### 3.5 TRANSVERSALES

**`/precios`** — *Title*: «Precios: Automatización IA y Formación para Pymes». H1: "¿Cuánto cuesta **automatizar tu negocio?**" · Cápsula con TODAS las horquillas · 3 parrillas en HTML plano (proyectos 3 / formación 4 / auditoría 2) · "Qué hace variar el precio (y qué no varía nunca)" (terracota) · 7 FAQ de precios con schema ("¿cuánto cuesta un chatbot?", "¿por qué desde?", "¿hay permanencia?"…).

**`/como-trabajo`** — H1: "Así trabajo: **sin sorpresas y sin ataduras**". 3 fases de proyecto en detalle (con "a veces la respuesta es *esto no lo automatices* — y también te lo digo gratis") · "¿Y en formación?" (ajuste → impartición → evidencia) · "¿Y la auditoría?" (revisión → informe y plan → cierre) · 4 FAQ · CTA: "La fase 01 es gratis. Empecemos por ahí." *Preparada para absorber el nombre del método (pendiente).*

**`/casos-de-exito`** — 5 casos editoriales con meta-filas y resultados. Nombrados: Serincosol, Henkoaching, AFCademia. Anónimos: clínica estética (sin ubicación), comedores escolares Cataluña.

**`/sobre-mi`** — *Title*: «Manel Méndez González · Automatizatelo». Hero foto + bio 3 patas ("implanto la IA en tu pyme — formo, dejo el cumplimiento en regla y construyo") · "Lo que he construido" con **cursos como ítem 01** · declaración anti-herramienta · garantías · Schema Person (knowsAbout lidera con Implantación de IA y AI Act).

**`/recursos`** — H1: "Gratis, útil y **sin pedirte el email**". 3 tarjetas: guía Art. 4 + pack 10 prompts fincas + cheatsheet 3 herramientas (ambos HTML rebrandeados, imprimibles, noindex) · Puente a políticas de pago ("los documentos serios") · CTA "¿Prefieres que te lo deje montado?".

**`/formacion-obligatoria-ai-act`** (pilar GEO) — H1: "Formar a tu equipo en IA **ya no es opcional**". Cápsula citable · Fechas (2-feb-2025 aplicable / 2-ago-2026 sancionador / 35M€-7%) · Hechos verificados: sin certificado oficial, sin horas fijas, obliga a quien solo usa ChatGPT · 4 pasos pyme · 6 FAQ schema · CTAs a formación y auditoría.

**`/blog`** — SSR desde Supabase, header editorial, tags mono naranja, posts con title absolute.

---

## 4. Sistema de precios público (todo "desde", cerrado por escrito)

| Línea | Formato | Precio |
|---|---|---|
| **Proyectos** | Inicio (1-2 procesos) | desde 500€ |
| | Negocio (área completa, bot, CRM) | desde 2.000€ |
| | Completa (empresa entera) | desde 8.000€ |
| **Formación** | Alfabetización Art. 4 (4-8h) | desde 600€ |
| | Taller intensivo (1 día, 8h) | 900–1.400€ |
| | Programa in-company (16h/4 sem) | desde 2.400€ |
| | Curso SCORM a medida | desde 1.900€ |
| | Sesión ejecutiva directivos (½ día) | desde 600€ |
| | Programa dirección completo | desde 1.200€ |
| **Auditoría** | Diagnóstico AI Act | desde 750€ |
| | Pack cumplimiento (+política+formación) | desde 1.800€ |
| **Implantación** | Puesta en marcha herramientas | desde 900€ (típico 1.500-3.000€) |
| **White-label** | Producción SCORM para entidades | desde 1.900€/curso |

Garantías transversales: precio y plazo cerrados · pago por hitos · sin permanencia · código y datos del cliente · sin comisiones de proveedores.

---

## 5. SEO / GEO — estado técnico

- **Sitemap dinámico**: 22 URLs estáticas + blog. Search Console: verificado, sitemap procesado (última lectura pre-giro: 18 descubiertas, 8 indexadas — normal en dominio joven).
- **llms.txt**: reescrito al posicionamiento nuevo, con las 3 líneas, precios y todas las páginas.
- **Schemas**: FAQPage en 12+ páginas · Service con offers (auditoría, implantación, chatbots, paneles, automatización) · HowTo (método) · Person (sobre-mí) · ProfessionalService (home).
- **Cápsulas de respuesta** en todas las páginas de servicio y pilar (patrón "En corto").
- **Canonicals por página** (el global del layout se eliminó — era bug). Titles ≤60, descriptions ≤155.
- **Redirects**: 4 × 301 activos al pushear + /mx/ en 404 deliberado.
- **Diagnóstico Search Console**: redirecciones = correcto (no validar) · 404 desarrollo-web-crm = arreglado con 301 · robots.txt bloqueada = pendiente identificar URL · "rastreada sin indexar" = cola normal.
- **Tras el push**: pedir indexación de las 11 URLs nuevas (lista en el chat del 4-ago).

## 6. Identidad editorial (las reglas del copy)

1. Primera persona, cercano, sin jerga (referencias: @angelapa_ia, Jon Hernández).
2. **Honestidad como táctica**: no existe certificación oficial · no puntúa en baremos · "esto no lo automatices" · sin comisiones · bot fuera del plan de 500€.
3. **Realismo**: nada se promete si no se puede entregar ("la web va un paso por detrás de lo entregable").
4. **Anonimización**: clínica estética SIN ubicación · comedores = "empresa de comedores escolares en Cataluña". Nombrables: Serincosol, Henkoaching/Jennifer Cervera, AFCademia.
5. **Sin matrimonio con herramientas**: n8n/Make solo en marquee y legal; páginas por herramienta prohibidas.
6. Estética: crema editorial #FAF6EF · tinta #1C1917 · naranja #EA580C · melocotón #f6c39c · terracota en franjas · Fraunces/Outfit/JetBrains Mono.
7. Saltos forzados con `{" "}<br />` (anulados en móvil ≤600px).

## 7. Activos no-web

- **5 documentos-producto** (docs/politicas-producto/): política de uso · procedimiento de alta · inventario · registro formativo Art. 4 con certificado · guía del empleado. *Pendiente revisión y firma de Manel.*
- **2 recursos rebrandeados** (public/recursos/): prompts + cheatsheet fincas.
- **3 informes** (docs/): estructura SalgadoIA · plan implantación IA · este informe maestro.

## 8. Pendientes y decisiones abiertas

| Pendiente | Bloqueado por |
|---|---|
| **PUSH + reinicio server + indexación** | Manel — lo más urgente del proyecto |
| 3 puertas del home + barra de cifras | Cifras reales de Manel |
| Revisión de los 5 documentos de políticas | Manel |
| Nombre del método (candidato: «Formar · Cumplir · Automatizar») | Manel |
| URL bloqueada por robots.txt en SC | Identificarla |
| FUNDAE en la web | Elegir vía (registro SEPE o entidad organizadora) |
| Limpiar PNGs fuente de public/ (~15MB) | Commit de limpieza |
| GA4 · Cal.com embebido · re-Catapulta en producción | Fase siguiente |
| Admin pública (catálogo 8 cursos guardado) | Aparcada por decisión de Manel |
| Fase C (academia subdominio, suscripción IA+, licencias formal) | Condiciones del informe de implantación |
