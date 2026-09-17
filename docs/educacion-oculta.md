# Oferta educativa oculta en producción

**Fecha:** septiembre de 2026 · **Rama:** `ocultar-educacion`

Toda la formación dirigida a centros educativos, claustros, dirección de centro
y alumnado deja de verse en la web. **No se ha borrado nada**: todo queda detrás
de un único interruptor.

## El interruptor

`src/lib/flags.ts` → `EDUCACION_VISIBLE` (hoy `false`).

Para recuperar la línea:

1. `EDUCACION_VISIBLE = true` en `src/lib/flags.ts`.
2. Borrar en `next.config.ts` el bloque «Educación oculta» y devolver a
   `/formacion-ia-centros-educativos` su destino original
   (`/formacion/centros-educativos`).
3. Nada más: menús, pie, portada, catálogo, tarifario, sitemap, llms.txt y los
   textos genéricos vuelven solos.

## Rutas completas ocultas

| Ruta | Qué se ha hecho |
|---|---|
| `src/app/formacion/centros-educativos/page.tsx` | `if (!EDUCACION_VISIBLE) notFound();` + `robots: { index: false, follow: false }` en `metadata`. Página intacta por dentro. |
| `src/app/formacion/alumnado/page.tsx` | Igual: `notFound()` + `robots` noindex. |

No existen `sectores/educacion`, `sectores/centros-educativos`,
`sectores/claustro` ni `formacion/docentes`: la oferta educativa vivía entera en
esas dos rutas de `/formacion`.

`src/app/sectores/academias` **no se toca**: es el sector de negocio (academias
privadas y formación online, caso real AFCademIA), no formación para centros
educativos.

## Redirecciones (`next.config.ts`)

Bloque «Educación oculta (sep-2026)»:

| Origen | Destino | Código |
|---|---|---|
| `/formacion/centros-educativos` | `/formacion` | 308 permanente |
| `/formacion/alumnado` | `/formacion` | 308 permanente |
| `/formacion-ia-centros-educativos` (URL v1 ya indexada) | `/formacion` (antes apuntaba a `/formacion/centros-educativos`) | 308 permanente |

Sin ellas, los enlaces antiguos e indexados caerían en el 404 que ahora
devuelven las páginas.

## Navegación, portada y catálogo

| Archivo | Qué se ha hecho |
|---|---|
| `src/components/Header.tsx` | `formacionLinks`: fuera «Centros educativos» y «Alumnado». `sectorLinks`: fuera la puerta «Centros Educativos» (las demás se renumeran solas). La descripción de `/formacion` deja de decir «empresas y educación». |
| `src/components/Footer.tsx` | Fuera «Formación para centros educativos» y «Taller de IA para alumnado» (columna Formación) y «Centros educativos» (columna Por sector). |
| `src/components/SectoresBar.tsx` | Fuera la pestaña «Centros educativos» de la barra de sectores de la portada. |
| `src/components/SectorPage.tsx` | `SECTORES`: fuera la pestaña «Centros». |
| `src/components/PilaresHome.tsx` | El pilar «Formar» de la portada usaba la foto `/claustro.webp`; con el flag apagado usa `/escribiendo-ventana.webp`. |
| `src/app/page.tsx` | Sin cambios: no tenía texto educativo propio (llegaba por `PilaresHome` y `SectoresBar`). |
| `src/components/CursoEstrellaHome.tsx` | Sin cambios: solo dice «aula virtual» como modalidad. |

## `/formacion` (`src/app/formacion/page.tsx`)

- `metadata` y `openGraph`: títulos y descripciones sin «claustro», «aula» ni
  «centros educativos».
- Hero: foto `/claustro.webp` → `/escribiendo-ventana.webp`; H1 «tu empresa o tu
  despacho»; entradilla «Equipos, mandos y directivos».
- Selector del formulario: fuera la opción «Formación para mi centro educativo».
- Bloque «Qué es»: «capacita a los equipos», «Muchas pymes españolas».
- «Las dos puertas»: la puerta 02 (Centros educativos) queda envuelta en el
  flag; en producción solo se ve la de Empresas.
- Barra «¿Tu caso es más concreto?»: fuera «Centros educativos» y «Alumnado».
- FAQ: fuera la pregunta «¿Podéis formar también al alumnado…?»; en la pregunta
  de precio, «puesto o despacho» en vez de «puesto, aula o despacho».
- JSON-LD `Service` y `FAQPage`: se construyen desde esos mismos datos, así que
  ya no anuncian la línea educativa.

## `/precios` (`src/app/precios/page.tsx`)

- Fuera tres filas del catálogo «Formar»: «Sesión de dirección de centro»,
  «Formación de claustro» y «Taller de IA para alumnado».
- Fuera la FAQ «¿Y la formación para colegios y para el alumnado?».
- «Alfabetización + vuestro trabajo»: «puesto de trabajo o despacho
  profesional» (sin «aula»).
- Subtítulo del bloque Formar: «Para empresas y despachos».
- El `OfferCatalog` de JSON-LD y el contador de productos salen del array
  filtrado: se ajustan solos.

## Otras páginas que se quedan (solo se quitan enlaces)

| Archivo | Qué se ha hecho |
|---|---|
| `src/app/formacion/ai-act/page.tsx` | Enlace «Centros educativos» de la barra inferior, tras el flag. |
| `src/app/formacion/empresas/page.tsx` | Igual. |
| `src/app/formacion/cursos-a-medida/page.tsx` | Igual. |
| `src/app/formacion/directivos/page.tsx` | Pestaña «Centros» de la barra de sectores, tras el flag. |
| `src/app/sectores/despachos/page.tsx` | Igual. |
| `src/app/cumplimiento/page.tsx` | Enlace «Centros educativos» de la barra inferior, tras el flag. |
| `src/app/casos/page.tsx` | El caso de educación/comedores escolares (cliente real, automatización) se queda, pero pierde el enlace «Formación en IA para centros educativos» y la pestaña «Centros educativos». |

## SEO y datos para modelos

| Archivo | Qué se ha hecho |
|---|---|
| `src/app/sitemap.ts` | Las dos rutas educativas solo se listan con el flag encendido. |
| `src/app/llms.txt/route.ts` | La línea «Formación en IA para centros educativos» sale por variable: cadena vacía con el flag apagado. |
| `src/app/robots.ts` | Sin cambios: no nombraba rutas educativas. |
| `src/lib/esquemas.ts` | Sin cambios: solo tiene helpers (`migas`, `curso`), ninguna lista educativa. |
| `src/data/` | Sin cambios: solo contiene `countryCodes.ts`. |

## Imágenes en `public/`

No se borra ninguna. `claustro.webp` (y `claustro.png`) siguen ahí; se dejan de
usar en la portada y en `/formacion`. Siguen usándose —como foto ambiental, sin
texto educativo— en `/casos`, `/sobre-mi` y `/demo/ia-para-la-pyme`: ahí el
nombre del archivo aparece en el HTML, pero no hay oferta educativa visible.

## Comprobaciones hechas

- `npx tsc --noEmit`: limpio.
- `npm run lint`: sin errores nuevos (los que salen ya estaban en `master`).
- `npm run build`: correcto.
- Servidor de desarrollo en el puerto 4477:
  - `/formacion/centros-educativos`, `/formacion/alumnado` y
    `/formacion-ia-centros-educativos` → 308 a `/formacion`.
  - Con las redirecciones desactivadas a mano, esas dos rutas → 404 (el
    `notFound()` funciona).
  - `/`, `/formacion`, `/precios`, `/casos`, `/cumplimiento`,
    `/formacion/empresas` → 200, y en su HTML no aparece «docente»,
    «claustro», «alumnado» ni «centro educativo» (en `/casos` solo aparece la
    cadena `claustro.webp` como nombre de la foto).
  - `sitemap.xml` (35 URLs) y `llms.txt` sin rastro de las rutas educativas;
    `robots.txt` sin cambios.
  - Nota: `/sectores` devuelve 404 también en `master` — no existe
    `src/app/sectores/page.tsx`. No tiene que ver con este cambio.
