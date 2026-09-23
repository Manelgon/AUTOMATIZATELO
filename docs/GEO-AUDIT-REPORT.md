# Auditoría GEO/SEO · automatizatelo.com

**Fecha:** 1 de septiembre de 2026
**Tipo de negocio:** Agencia/Servicios (implantación de IA para pymes)
**Páginas analizadas:** 37 (sitemap completo)
**Método:** 5 auditorías en paralelo contra producción (peticiones reales, no simuladas)

---

## Resumen ejecutivo

**GEO Score global: 57/100 — Poor**

| Categoría | Score | Peso | Ponderado |
|---|---|---|---|
| Citabilidad IA | 80/100 | 25% | 20,0 |
| **Autoridad de marca** | **8/100** | 20% | 1,6 |
| Contenido / E-E-A-T | 59/100 | 20% | 11,8 |
| Técnico GEO | 78/100 | 15% | 11,7 |
| Schema y datos estructurados | 61/100 | 10% | 6,1 |
| Optimización por plataforma | 57/100 | 10% | 5,7 |
| **TOTAL** | | | **56,9/100** |

### La respuesta a "por qué no posiciono"

**El dominio se registró el 5 de diciembre de 2025. Tiene 8 meses y 27 días.**

Posición media 46,7 con 3.040 impresiones en un dominio de 9 meses sin backlinks **no es un defecto: es el comportamiento esperado**. Todo lo demás se subordina a este hecho.

Tres conclusiones que se derivan y que hay que interiorizar antes de tocar nada:

1. **No hay causa técnica.** Las 37 URLs devuelven 200, con `index, follow` y canonical propio. Cero cadenas de redirección. SSR real verificado con 8 user-agents distintos. Ningún arreglo técnico moverá la posición 46,7.
2. **No hay causa de contenido malo.** La calidad es alta, la voz es genuina y humana, la legibilidad está en rango óptimo (67 Fernández-Huerta) y en materia normativa el contenido es *más correcto* que el de varios competidores que sí rankean.
3. **El CTR del 0,2% no es un problema de titles.** En posición 46,7 el CTR esperado es 0,1-0,3%. Es aritmética de la posición. **No reescribas titles buscando CTR.**

### El cuello de botella real

**Autoridad de marca: 8/100.** El sitio está perfectamente preparado para ser citado y prácticamente no existe como entidad fuera de su propio dominio.

- Wikipedia: ausente (verificado vía API, `totalhits: 0`)
- Reddit: cero hilos
- YouTube: canal 404
- Menciones de terceros: cero resultados en índice web
- **32 de 37 páginas no enlazan a ningún sitio externo**

### La reestructuración de agosto no tuvo la culpa

La ventana de Search Console (1-jun → 1-sep) es **78% anterior** al cambio de URLs del 10-12 de agosto. Una media de 46,7 sobre toda la ventana solo es posible si el sitio ya estaba en página 4-5 antes. Los 308 son correctos (Google los trata igual que los 301) y no hay cadenas.

---

## Problemas críticos

### C1 · `og-image.jpg` devuelve 404 en las 37 páginas

Confirmado de forma independiente por dos auditorías. Referenciada como `og:image`, `twitter:image`, `ProfessionalService.image` y `Article.publisher.logo`.

**Consecuencias:** los 3 posts del blog son **inelegibles para rich result** de Article (Google exige `publisher.logo` válido), y toda previsualización en WhatsApp, LinkedIn y Slack está rota.

**Lo absurdo:** `/logo.png` existe (200, 62 KB) y no se referencia en ningún sitio.

**Fix:** subir `public/og-image.jpg` a 1200×630 (los metadatos ya declaran esas dimensiones) o repuntar a `/logo.png`.

### C2 · Cuatro identidades en conflicto

Este es el patrón que más daño hace, y se repite en cuatro sitios distintos:

| # | Conflicto |
|---|---|
| 1 | **Grafía:** `ProfessionalService.name` = "Automatízatelo" (con tilde) · `WebSite.name` = "Automatizatelo" (sin tilde) · dominio sin tilde |
| 2 | **`sameAs` cruzado:** el nodo de *empresa* reclama el LinkedIn *personal*; el nodo de *persona* reclama el LinkedIn *de empresa* |
| 3 | **NAP:** el schema declara Barcelona 08001 con coordenadas de Plaça Catalunya · el Google Business Profile verificado dice **Carrer de Miquel Martí i Pol, 08800 Vilanova i la Geltrú** (45 km) |
| 4 | **Grafo fragmentado:** 4 nodos de organización anónimos por página (`ProfessionalService`, `WebSite.publisher`, `Service.provider`, `Offer.itemOffered.provider`) sin `@id` que los una |

Para un modelo generativo esto no es información escasa: es **información contradictoria**, que es peor que la ausencia. Y agrava un riesgo externo real: existe `automatizalo.ai` ("Automatizalo", consultora de IA) con más señal externa. Buscar "Automatizatelo" devuelve a ellos.

**Fix:** desplegar un `@graph` único con `@id` estables, unificar la grafía, poner el NAP real y apuntar `Person.sameAs` al LinkedIn personal (o dejarlo fuera, nunca al de empresa).

### C3 · `/servicios` y 5 rutas más devuelven 404 en vez de redirigir

```
/servicios            → 404   ← hub padre de toda la estructura anterior
/servicios/formacion  → 404
/servicios/documentos → 404
/servicios/ventas     → 404
/servicios/crm        → 404
/contacto             → 404   ← URL clásica, probable destino de enlaces externos
```

Se redirigieron unas rutas y se quedaron otras. Un 404 tira las señales acumuladas en lugar de transferirlas.

---

## Problemas de prioridad alta

### H1 · El `lastmod` del sitemap miente

Las 37 URLs comparten el timestamp **del momento exacto de cada petición**. Las cabeceras demuestran que el contenido no cambia desde el 12-13 de agosto (`Age: 1727835` = 20 días).

Google detecta `lastmod` no fiables y **deja de usar la señal para todo el sitio**. Le dices "todo cambió hace un segundo" cada vez que pasa, y ha dejado de creerte.

**Fix:** en `app/sitemap.ts`, sustituir `new Date()` por la fecha real de modificación de cada ruta.

### H2 · Credenciales ausentes en territorio cuasi-YMYL

`/sobre-mi` tiene 1.081 palabras y **ni una credencial verificable**. La única es "llevo 3 años metido de lleno en la IA". Sin titulación, trayectoria previa, certificaciones ni ponencias. No hay enlace al LinkedIn personal en todo el sitio.

Se vende cumplimiento normativo desde 950 €. El conocimiento está y es correcto; la acreditación de quién lo dice, no.

### H3 · Se cita el Reglamento 8 veces y no se enlaza ni una

`/cumplimiento` y `/formacion/ai-act` mencionan el "Reglamento (UE) 2024/1689" ocho veces **sin un solo enlace a EUR-Lex, la Comisión Europea, AESIA o el BOE**. El post de Netflix lista fuentes ("Teknófilo | Agencia EFE") como texto plano sin enlazar.

Es autoridad regalada, y en GEO los enlaces salientes a fuentes primarias son señal de fiabilidad.

### H4 · Blog semi-huérfano y hub-and-spoke roto

Los 3 posts solo reciben enlaces desde `/blog` y la home. **Cero enlaces contextuales.** El post de reservas de restaurante no recibe ni un enlace desde `/sistemas/chatbots-whatsapp`, que es exactamente la página comercial que debería alimentar.

### H5 · FAQPage mal anidado en las 4 páginas de `/sectores/*`

Va como `Service.mainEntityOfPage` en vez de bloque propio. Type-válido pero semánticamente invertido y sin `@id`/`url`: **~16 preguntas ya escritas no se asocian a ninguna URL**. Y son de las más citables del sitio (RGPD con datos de vecinos, convivencia con Gesfincas/TAAF).

### H6 · Font Awesome bloqueante y cabeceras de seguridad ausentes

CSS externo desde `cdnjs.cloudflare.com` en la ruta crítica de render, sin `preconnect`. Un `preload` con `fetchPriority="high"` apunta a `/sobre-mi.webp`, que no es el hero — le roba ancho de banda al LCP real.

Cabeceras: solo HSTS. Faltan CSP, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.

---

## Lo que está bien y no hay que tocar

Conviene decirlo, porque es mucho y es la base sobre la que se construye todo lo demás:

- **Acceso de crawlers: 100/100.** GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended, CCBot — todos permitidos. Probado con 8 user-agents contra `/cumplimiento`: los 8 reciben exactamente los mismos 149.246 bytes. SSR real (`X-Nextjs-Prerender: 1`).
- **llms.txt: 85/100.** Por encima de la media del mercado español con holgura. Precios, casos con nombre, condiciones comerciales. Material precocinado para que un LLM cite.
- **Schema mucho más completo de lo que dice la documentación interna:** FAQPage en 25 de 37 páginas, `Course` + `Offer` con precio real en las 10 de `/formacion/*`, `OfferCatalog` con 18 Offers en `/precios`, `BreadcrumbList` impecable en las 36 no-raíz. 148 bloques JSON-LD, **0 errores de parseo**.
- **Canonicals: 11/11 correctos.** El bug del canonical global está arreglado.
- **Legibilidad óptima** (media 67 Fernández-Huerta) y **voz autoral genuina**: escaneadas 12 muletillas típicas de IA en las 37 páginas → **1 aparición en total**.
- **Transparencia como activo:** precios públicos, "cuándo NO encajamos", el desmentido de la certificación oficial del AI Act, "no cobro comisión de proveedores". Muy por encima del estándar del sector.
- **Sin canibalización real.** Medido con solapamiento de 6-gramas: ChatGPT/Copilot/Claude/Gemini comparten 24-28%, pero es plantilla estructural, no contenido. **No fusionarlas.**
- **No hay ningún `HowTo`** pese a lo que dice la documentación interna — buena noticia, Google los retiró en 2023.

---

## Orden de plataformas por retorno real

| # | Plataforma | Plazo | Por qué |
|---|---|---|---|
| 1 | **ChatGPT Web Search** | Semanas | No exige top 10; elige por calidad de texto. Ya hay un referral real desde `chatgpt.com` |
| 2 | **Bing Copilot** | Semanas | Índice en español mucho menos saturado. **Arreglar Bing arregla ChatGPT a la vez** (comparten índice) |
| 3 | Perplexity | 1-3 meses | Técnicamente perfecto; bloqueado por ausencia total en Reddit/foros |
| 4 | Gemini | 3-6 meses | Vía lateral vía Google Business Profile, que no exige rankear |
| 5 | Google AI Overviews | 6-12 meses o nunca | Exige elegibilidad top 10. **No invertir aquí este trimestre** |

### Sobre el referral de ChatGPT

Es **n=1**. No permite afirmar ninguna tasa (intervalo de confianza del 6% al 72%). Lo que sí demuestra, por ser un hecho binario: **el sitio es recuperable por un LLM**, cosa que en Google no es.

**Verificación pendiente (30 min):** mirar en GA4 la landing de esa sesión. Si aterrizó en `/formacion/ai-act` o `/cumplimiento`, es descubrimiento genuino. Si aterrizó en `/` desde móvil y rebotó, es probablemente autotráfico.

**Y la advertencia importante:** GEO no dará volumen. El techo realista a 6 meses son decenas de sesiones, no miles. Lo que da es intención altísima. **Medir leads y llamadas agendadas, no sesiones** — si se miden sesiones, la conclusión será deprimente con razón, y se abandonará una estrategia que estaba funcionando.

---

## Volumen de contenido: el gap medido

| | Automatizatelo | Competidores que rankean |
|---|---|---|
| Blog | **3 posts · 2.569 palabras** | Upliora: 13 guías de ~4.500 · Sancantia: ~40 artículos · Sphyrna: 17 |
| `/cumplimiento` | 1.375 palabras | Atico34: ~5.700 · iactastudio: ~8.700 |
| `/sectores/administradores-fincas` | **720 palabras** | — (el caso más fuerte, la página más infra-desarrollada) |
| Total sitio | 34.995 palabras | — |

El umbral realista es **20-30 piezas**: 4-6 guías pilar de 4.000-6.000 palabras + 4-5 satélites de 1.500-2.000 colgando de cada una. Upliora demuestra que 13 guías buenas ganan a 631 posts flojos.

**No atacar las head keywords del AI Act.** No se desplaza a Atico34 (5.700) ni a iactastudio (8.700) con 1.641 palabras y 9 meses de dominio. Hay 14 competidores españoles ya instalados ahí.

**Atacar por la puerta lateral, donde no hay nadie y sí hay clientes reales:**

- "Cómo cumple el art. 4 un despacho de administración de fincas" (caso: Serincosol)
- "…una academia de formación" (caso: AFCademIA)
- "…un departamento de RRHH" (caso: Henkoaching)
- "No, el art. 4 no se multa con 35 millones: qué dice realmente el art. 99" — corrección verificable contra EUR-Lex que la mayoría de competidores falla
- "Certificaciones falsas del AI Act" — desmentido documentado
- **FUNDAE**: hueco en contra. Varios competidores explican que la formación del art. 4 es bonificable. El sitio no lo menciona en ninguna parte, y es una pregunta que las pymes hacen literalmente

---

## Desajustes de taxonomía

**Los casos flagship y las impresiones no coinciden con las páginas de sector.**

Hay `/sectores/` para fincas, despachos, RRHH y academias. **No hay hostelería, ni clínicas, ni comedores escolares** — pese a que 2 de los 5 casos son una clínica estética y una empresa de comedores, y pese a que la hostelería es lo que genera impresiones:

```
automatizar reservas restaurante ........ 101
cómo automatizar reservas restaurante .... 84
automatizacion de restaurantes ........... 66
automatización de la restauración ........ 44
                                    ─────────
                                         295  ≈ 10% de todas las impresiones
```

Esas impresiones vienen de **un post vivo** (`/blog/como-automatizar-las-reservas-de-un-restaurante`), no de la landing que se borró.

**Es la única SERP con top-2 débil:** los dos primeros suman 1.580 palabras entre ambos (Restoo rankea con 380). Upliora y Flowmatic están en ~4.500. El post tiene 1.040 y ya menciona el Art. 50 del AI Act y la API oficial de WhatsApp Business — contenido que ningún competidor tiene.

Otros dos desajustes menores: `/formacion` (1.145) es más largo que `/formacion/empresas` (758), que es la página de dinero; y `/sectores/despachos` se titula "Formación en IA para Despachos" — es una página de formación viviendo en `/sectores/`.

---

## El problema geográfico

El `<title>` dice **Barcelona**. El Google Business Profile verificado dice **Vilanova i la Geltrú** (Garraf, 45 km).

Se está peleando la keyword más competida de Cataluña, desde fuera del área metropolitana, contra dominios de coincidencia exacta (`agenciaiaparapymes.com`, `automatizapyme.com`, `aihispania.com`), con 9 meses de dominio y sin backlinks. Es la pelea más difícil disponible.

**No hay ninguna página que hable de donde el negocio realmente está.** Garraf, Penedès, Sitges, Vilafranca — volumen menor pero alcanzable, con ficha verificada y radio de desplazamiento presencial, que es como se vende formación.

Y refuerza la oportunidad en catalán: **47 impresiones en "formació chatgpt empresarial" sin una sola palabra en catalán en el dominio**. Sin `hreflang`, sin `/ca/`. El comprador institucional catalán (consorcis, col·legis professionals, Consorci per a la Formació Contínua) busca y contrata en catalán, y eso es formación bonificada. Garraf y Penedès son bastante más catalanoparlantes que Barcelona ciudad.

---

## Quick wins (esta semana)

1. **Subir `og-image.jpg`** — desbloquea rich results de Article y arregla todas las tarjetas sociales. 10 minutos.
2. **Añadir los 6 redirects que faltan** (`/servicios*`, `/contacto`) en `next.config.js`. 15 minutos.
3. **Arreglar el `lastmod` del sitemap** — dejar de mentirle a Google. 30 minutos.
4. **Corregir el NAP** y añadir la ficha de GBP al `sameAs`. 30 minutos.
5. **Verificar en Bing Webmaster Tools + IndexNow** — la acción de mayor retorno del informe: mejora Bing **y** ChatGPT con el mismo trabajo. 2 horas.
6. **Enlazar EUR-Lex/AESIA/BOE** en `/cumplimiento` y `/formacion/ai-act`. 30 minutos.
7. **Comprobar en GA4 la landing del referral de ChatGPT.** 30 minutos, y condiciona la estrategia.

## Plan de 30 días

### Semana 1 — Parar la hemorragia
- [ ] Los 7 quick wins de arriba
- [ ] Desplegar el `@graph` unificado con `@id` estables y grafía única
- [ ] Corregir `Person.sameAs` → LinkedIn personal, y añadir `image` + `description`
- [ ] Sacar el FAQPage a bloque propio en las 4 `/sectores/*`

### Semana 2 — Identidad y acreditación
- [ ] Credenciales verificables en `/sobre-mi` + enlace visible al LinkedIn personal
- [ ] Cabeceras de seguridad en `next.config.js`
- [ ] Quitar Font Awesome de cdnjs (o `preconnect` + carga diferida) y arreglar el `preload` del LCP
- [ ] Decidir Barcelona vs. Garraf-Penedès y ajustar titles/H1 en consecuencia

### Semana 3 — El activo con tracción
- [ ] Expandir el post de reservas a guía pilar de 4.000-4.500 palabras, reencuadrado a "reservas y citas" (clínicas, talleres, academias)
- [ ] Crear la ficha comercial que falta y enlazar post ↔ `/sistemas/chatbots-whatsapp`
- [ ] Despublicar o reescribir el post de Netflix/Ben Affleck (único contenido con señales de IA sin editar, off-topic, 30% del blog)

### Semana 4 — Autoridad externa
- [ ] Convertir los 5 casos en páginas propias de 1.200-1.500 palabras con capturas y una cifra comprobable cada uno
- [ ] Publicar en LinkedIn las piezas de AI Act por sector
- [ ] Responder con criterio en 3-4 hilos de Reddit y foros de administradores de fincas
- [ ] Presencia en 2-3 directorios sectoriales españoles

---

## Lo que NO hay que hacer

- **No reescribir titles buscando CTR.** El 0,2% es consecuencia de la posición 46,7.
- **No fusionar** las páginas de ChatGPT/Copilot/Claude/Gemini. El solapamiento del 25% es plantilla, no canibalización.
- **No tocar la legibilidad ni la voz.** Es el activo más difícil de replicar que hay, y el 95% del sitio lo hace bien.
- **No reconstruir `/automatizacion-restaurantes` como landing de sector.** Un post informativo no diluye; una landing comercial de un sector que no se vende, sí.
- **No perseguir Google AI Overviews este trimestre.** Es el peor retorno por hora de las cinco plataformas.
- **No medir sesiones.** Medir leads y llamadas agendadas.

---

## Lo que no se ha podido comprobar

- Datos de campo de Core Web Vitals (requiere PageSpeed Insights / CrUX). El análisis es estático: riesgo estimado LCP alto, INP medio-alto, CLS medio.
- Desglose temporal de Search Console antes/después del 12 de agosto. La conclusión se apoya en que el 78% de la ventana precede al cambio. **Confirmar comparando 1-jun→9-ago contra 13-ago→1-sep.**
- Cobertura de indexación real (cuántas de las 37 están indexadas). Requiere el informe de Páginas de GSC.
- Perfil de enlaces entrantes — la hipótesis más probable para la posición 46,7, no medible con las herramientas disponibles aquí.
- Indexación en Bing (comprobar con `site:automatizatelo.com` en bing.com).
