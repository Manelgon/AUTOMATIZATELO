import { createHmac, timingSafeEqual } from 'crypto';

// =============================================================================
// DEMO DEL CURSO — cookie firmada de acceso
// =============================================================================
// La demo no vive en public/: la sirve un route handler que antes comprueba
// esta cookie. Aquí está lo único que comparten la API que la emite
// (/api/demo-acceso) y el handler que la lee (/demo-curso/curso/[[...ruta]]).
//
// Formato: base64url(JSON{email, cliente, exp}) + "." + HMAC-SHA256(payload)
// firmado con DEMO_SECRET. Sin sesión en base de datos: la cookie se basta.
// =============================================================================

export const COOKIE_DEMO = 'demo_acceso';
export const COOKIE_PATH = '/demo-curso';
export const DURACION_DIAS = 7;
const DURACION_MS = DURACION_DIAS * 24 * 60 * 60 * 1000;

export type SesionDemo = {
    email: string;
    cliente: string;
    exp: number;
};

/** Devuelve el secreto del entorno, o null si la demo no está configurada. */
export function getDemoSecret(): string | null {
    const secret = process.env.DEMO_SECRET;
    return secret && secret.length > 0 ? secret : null;
}

function firmar(payload: string, secret: string): string {
    return createHmac('sha256', secret).update(payload).digest('base64url');
}

/** Construye el valor de la cookie para un acceso concedido. */
export function crearCookieDemo(
    email: string,
    cliente: string,
    secret: string,
    ahora: number = Date.now(),
): { valor: string; exp: number; maxAge: number } {
    const exp = ahora + DURACION_MS;
    const sesion: SesionDemo = { email, cliente, exp };
    const payload = Buffer.from(JSON.stringify(sesion), 'utf8').toString('base64url');
    return {
        valor: `${payload}.${firmar(payload, secret)}`,
        exp,
        maxAge: Math.floor(DURACION_MS / 1000),
    };
}

/**
 * Verifica firma y caducidad. Devuelve la sesión o null.
 * Cualquier cosa rara (formato, firma, caducidad) es un null silencioso.
 */
export function verificarCookieDemo(
    valor: string | undefined | null,
    secret: string,
    ahora: number = Date.now(),
): SesionDemo | null {
    if (!valor) return null;

    const corte = valor.lastIndexOf('.');
    if (corte <= 0 || corte === valor.length - 1) return null;

    const payload = valor.slice(0, corte);
    const firmaRecibida = valor.slice(corte + 1);
    const firmaEsperada = firmar(payload, secret);

    const bufRecibida = Buffer.from(firmaRecibida, 'utf8');
    const bufEsperada = Buffer.from(firmaEsperada, 'utf8');
    if (bufRecibida.length !== bufEsperada.length) return null;
    if (!timingSafeEqual(bufRecibida, bufEsperada)) return null;

    let sesion: unknown;
    try {
        sesion = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    } catch {
        return null;
    }

    if (typeof sesion !== 'object' || sesion === null) return null;
    const { email, cliente, exp } = sesion as Record<string, unknown>;
    if (typeof email !== 'string' || typeof cliente !== 'string' || typeof exp !== 'number') return null;
    if (exp <= ahora) return null;

    return { email, cliente, exp };
}

/** Lee la cookie demo_acceso de la cabecera Cookie cruda. */
export function leerCookieDemo(cookieHeader: string | null): string | null {
    if (!cookieHeader) return null;
    for (const trozo of cookieHeader.split(';')) {
        const igual = trozo.indexOf('=');
        if (igual < 0) continue;
        if (trozo.slice(0, igual).trim() !== COOKIE_DEMO) continue;
        return decodeURIComponent(trozo.slice(igual + 1).trim());
    }
    return null;
}

/**
 * Claves válidas desde DEMO_CLAVES con formato `clave:cliente,clave2:otro`.
 * Devuelve null si la variable no está puesta (demo sin configurar).
 */
export function getClavesDemo(): Map<string, string> | null {
    const crudo = process.env.DEMO_CLAVES;
    if (!crudo || !crudo.trim()) return null;

    const claves = new Map<string, string>();
    for (const par of crudo.split(',')) {
        const corte = par.indexOf(':');
        if (corte <= 0) continue;
        const clave = par.slice(0, corte).trim();
        const cliente = par.slice(corte + 1).trim();
        if (clave && cliente) claves.set(clave, cliente);
    }
    return claves.size > 0 ? claves : null;
}

/**
 * Busca el cliente de una clave comparando en tiempo constante.
 * Se comparan hashes SHA-256 (vía HMAC con el propio secreto) para que la
 * comparación sea de longitud fija y no filtre nada por tiempo. Se recorren
 * todas las entradas siempre: no se corta en el primer acierto.
 */
export function resolverCliente(
    claveRecibida: string,
    claves: Map<string, string>,
    secret: string,
): string | null {
    const hashRecibido = Buffer.from(firmar(claveRecibida, secret), 'utf8');
    let cliente: string | null = null;

    for (const [claveValida, nombreCliente] of claves) {
        const hashValido = Buffer.from(firmar(claveValida, secret), 'utf8');
        if (hashRecibido.length === hashValido.length && timingSafeEqual(hashRecibido, hashValido)) {
            cliente = nombreCliente;
        }
    }

    return cliente;
}
