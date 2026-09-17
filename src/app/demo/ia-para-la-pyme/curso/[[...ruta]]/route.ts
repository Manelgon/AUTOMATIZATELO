import { readFile, stat } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';
import { getDemoSecret, leerCookieDemo, verificarCookieDemo } from '@/lib/demo-acceso';

// Necesita fs: nada de edge.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Los archivos de la demo viven fuera de public/ a propósito: sin esta puerta
// no se sirven. next.config.ts los empaqueta con outputFileTracingIncludes.
const RAIZ_DEMO = path.join(process.cwd(), 'private', 'demo-curso');
const INDICE = 'u1/index.html';

const TIPOS: Record<string, string> = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.mp3': 'audio/mpeg',
    '.woff2': 'font/woff2',
};

export async function GET(
    request: Request,
    context: { params: Promise<{ ruta?: string[] }> },
) {
    const secret = getDemoSecret();
    const sesion = secret
        ? verificarCookieDemo(leerCookieDemo(request.headers.get('cookie')), secret)
        : null;

    if (!sesion) {
        return NextResponse.redirect(new URL('/demo/ia-para-la-pyme', request.url), 302);
    }

    const { ruta } = await context.params;
    const pedida = ruta && ruta.length > 0 ? ruta.join('/') : INDICE;

    // Path traversal: se normaliza y se comprueba que el resultado sigue
    // dentro de la carpeta de la demo. Cualquier salto fuera es un 400.
    const destino = path.resolve(RAIZ_DEMO, pedida);
    const raiz = path.resolve(RAIZ_DEMO);
    if (destino !== raiz && !destino.startsWith(raiz + path.sep)) {
        return NextResponse.json({ error: 'Ruta no válida' }, { status: 400 });
    }

    const extension = path.extname(destino).toLowerCase();
    const contentType = TIPOS[extension];
    if (!contentType) {
        return NextResponse.json({ error: 'Archivo no encontrado' }, { status: 404 });
    }

    try {
        const info = await stat(destino);
        if (!info.isFile()) {
            return NextResponse.json({ error: 'Archivo no encontrado' }, { status: 404 });
        }

        const contenido = await readFile(destino);
        return new NextResponse(new Uint8Array(contenido), {
            status: 200,
            headers: {
                'Content-Type': contentType,
                'Content-Length': String(info.size),
                'Cache-Control': 'private, max-age=3600',
                'X-Robots-Tag': 'noindex',
            },
        });
    } catch {
        return NextResponse.json({ error: 'Archivo no encontrado' }, { status: 404 });
    }
}
