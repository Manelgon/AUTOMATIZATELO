/**
 * Interruptores de visibilidad del sitio.
 *
 * EDUCACION_VISIBLE controla TODA la oferta dirigida a centros educativos,
 * claustros, dirección de centro y alumnado: rutas propias
 * (/formacion/centros-educativos, /formacion/alumnado), entradas de menú y
 * pie, tarjetas de portada y de /formacion, filas del tarifario, sitemap y
 * llms.txt.
 *
 * Está en `false` porque esa línea de negocio se ha retirado de producción,
 * pero el código sigue intacto.
 *
 * PARA REACTIVARLA:
 *   1. Poner `EDUCACION_VISIBLE = true` aquí.
 *   2. Quitar en `next.config.ts` las redirecciones del bloque
 *      "Educación oculta" (si no, las rutas seguirían redirigiendo a
 *      /formacion y nunca se verían).
 *   3. Volver a poner la mención a "centros educativos" en los textos
 *      genéricos marcados con el comentario `EDUCACION_VISIBLE` en
 *      /formacion, /precios y la portada.
 */
// Tipado como `boolean` (y no como el literal `false`) a propósito: así ni
// TypeScript ni ESLint marcan como codigo muerto las ramas del flag.
export const EDUCACION_VISIBLE: boolean = false;
