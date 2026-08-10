# Mapa de intenciones — automatizatelo.com

Una página, una intención, una consulta principal. Cuando dos páginas comparten
consulta, Google reparte la autoridad entre las dos y no posiciona ninguna: eso
es la canibalización. Este mapa es el reparto acordado.

Revisado: agosto de 2026 · 34 páginas indexables

---

## Bloque 1 · Formación (11 páginas)

| Página | Intención | Consulta principal | Consultas de apoyo |
|---|---|---|---|
| `/formacion` | Pilar — orientar y repartir | **formación en IA para empresas** | cursos de IA para empresas, formación IA pymes |
| `/formacion/empresas` | Producto — el curso estrella | **formación en IA in-company** | curso de IA para equipos, certificado IA empresa |
| `/formacion/ai-act` | Informacional — la ley | **formación obligatoria IA AI Act** | art. 4 AI Act, alfabetización en IA obligatoria |
| `/formacion/chatgpt` | Producto | **curso de ChatGPT para empresas** | formación ChatGPT profesional |
| `/formacion/copilot` | Producto | **curso de Copilot 365** | formación Microsoft Copilot empresa |
| `/formacion/gemini` | Producto | **curso de Gemini y NotebookLM** | formación Google Gemini empresa |
| `/formacion/claude` | Producto | **curso de Claude** | formación Claude empresa |
| `/formacion/centros-educativos` | Sector | **formación en IA para docentes** | IA en el aula, formación claustro |
| `/formacion/alumnado` | Sector | **taller de IA para alumnado** | IA para estudiantes ESO y FP |
| `/formacion/directivos` | Sector | **formación en IA para directivos** | sesión ejecutiva IA, gobernanza IA |
| `/formacion/cursos-a-medida` | Producto | **cursos e-learning a medida SCORM** | producción de cursos SCORM |

**Colisión corregida:** `/formacion` y `/formacion/empresas` competían por la misma
consulta ("Formación en IA … para Empresas" en los dos títulos). El pilar se queda
el término ancho; la hija se queda **in-company**, que es lo que de verdad la separa.

**Riesgo residual bajo:** los cuatro cursos de herramienta comparten plantilla
(0,54–0,61 de parecido), pero cada uno se posiciona por su marca — no compiten.

---

## Bloque 2 · Sistemas (7 páginas)

| Página | Intención | Consulta principal |
|---|---|---|
| `/sistemas` | Pilar — repartir | **automatización de procesos para pymes** |
| `/sistemas/documentos` | Producto | **automatizar documentos y facturas** |
| `/sistemas/ventas` | Producto | **automatización de ventas para pymes** |
| `/sistemas/crm` | Producto | **implantación de CRM para pymes** |
| `/sistemas/paneles` | Producto | **panel de control a medida** |
| `/sistemas/chatbots-whatsapp` | Producto | **chatbot de WhatsApp para empresas** |
| `/sistemas/integracion` | Producto | **integración de sistemas y APIs** |

Sin colisiones: cada pieza tiene su consulta y el pilar no compite con ninguna.
La consulta con más demanda medida en Search Console — *servicios de automatización*,
91 impresiones — es del pilar.

---

## Bloque 3 · Sectores (4 páginas)

| Página | Intención | Consulta principal |
|---|---|---|
| `/sectores/despachos` | Sector | **IA para despachos profesionales** |
| `/sectores/administradores-fincas` | Sector | **software para administradores de fincas** |
| `/sectores/academias` | Sector | **IA para academias y centros de formación** |
| `/sectores/rrhh` | Sector | **automatización de RRHH** |

Cada una combina formación + sistemas para un sector. No compiten con los pilares
porque la consulta lleva el sector delante.

**Hueco identificado:** el clúster de restaurantes (321 impresiones en tres meses,
la mayor demanda real del sitio) no tiene página propia y aterriza en la home por
un 301 heredado. Se cubre primero con un artículo, no con una página de sector.

---

## Bloque 4 · Transversales (8 páginas)

| Página | Intención | Consulta principal |
|---|---|---|
| `/` | Marca | **automatizatelo** |
| `/cumplimiento` | Servicio | **auditoría del AI Act para pymes** |
| `/precios` | Comercial | **precios formación IA / automatización** |
| `/casos` | Prueba social | (sin consulta propia — cierra ventas) |
| `/diagnostico` | Captación | **test de madurez en IA** |
| `/sobre-mi` | Autoría (E-E-A-T) | **Manel Méndez González** |
| `/recursos` | Informacional | **plantillas política de uso de IA** |
| `/blog` | Informacional | (por artículo) |

`/cumplimiento` y `/formacion/ai-act` se parecen un 0,62, pero la intención es
distinta y los títulos ya lo dicen: una vende **auditoría**, la otra explica **qué
exige la ley**. Se deja como está y se vigila.

---

## Bloque 5 · Legales (4 páginas)

`/aviso-legal`, `/politica-privacidad`, `/politica-cookies`, `/terminos`.
Indexables y enlazadas desde el pie. No se optimizan ni se bloquean: dan señal de
negocio real.

---

## Enlazado interno — reglas

1. Toda página de producto enlaza a **`/precios`** (su ancla de familia) y a **`/casos`**.
2. Toda página de formación enlaza al **pilar** y a **`/diagnostico`**.
3. Las cuatro páginas de curso declaran **quién imparte** con enlace a `/sobre-mi`.
4. Los pilares enlazan a todas sus hijas; ninguna hija es huérfana.
