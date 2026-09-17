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

/**
 * FORMACION_FINCAS_VISIBLE controla la oferta FORMATIVA dirigida a
 * administradores de fincas: las menciones a ese público en /sectores/despachos
 * y /recursos, las dos frases que usan "la formación de AFCademIA para
 * administradores" como credencial, y sus líneas en llms.txt.
 *
 * NO afecta a la línea de SISTEMAS para fincas: /sectores/administradores-fincas,
 * los casos de cliente y las menciones en /sistemas/* siguen visibles. Tampoco
 * afecta a AFCademIA como CLIENTE (panel de academia en /casos y
 * /sectores/academias), que es trabajo propio de Automatizatelo.
 *
 * Está en `false` para no competir con el catálogo de AFCademIA, que vende
 * formación en ese mismo nicho. El código sigue intacto.
 *
 * PARA REACTIVARLA: poner `true` aquí. No hay redirecciones que deshacer: esta
 * puerta no oculta ninguna ruta entera, solo textos y menciones.
 */
export const FORMACION_FINCAS_VISIBLE: boolean = false;
