import { createHash } from 'crypto';
import { NextResponse } from 'next/server';
import { supabaseServer as supabase } from '@/lib/supabase-server';

const MAX_BODY_BYTES = 16 * 1024;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;

type RateLimitEntry = { count: number; resetAt: number };
const rateLimits = new Map<string, RateLimitEntry>();

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function readText(value: unknown, maxLength: number): string {
    if (typeof value !== 'string') return '';
    return value.trim().replace(/\u0000/g, '').slice(0, maxLength);
}

function getClientKey(request: Request): string | null {
    const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
    const ip = forwardedFor || request.headers.get('x-real-ip');
    if (!ip) return null;

    // La IP no se guarda ni se registra: solo se mantiene un hash efímero en memoria.
    return createHash('sha256').update(ip).digest('hex');
}

function checkRateLimit(key: string | null): { limited: boolean; retryAfter: number } {
    if (!key) return { limited: false, retryAfter: 0 };

    const now = Date.now();
    const current = rateLimits.get(key);

    if (!current || current.resetAt <= now) {
        if (rateLimits.size > 1000) {
            for (const [entryKey, entry] of rateLimits) {
                if (entry.resetAt <= now) rateLimits.delete(entryKey);
            }
        }
        rateLimits.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return { limited: false, retryAfter: 0 };
    }

    if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
        return {
            limited: true,
            retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
        };
    }

    current.count += 1;
    rateLimits.set(key, current);
    return { limited: false, retryAfter: 0 };
}

function isAllowedOrigin(request: Request): boolean {
    const origin = request.headers.get('origin');
    if (!origin) return true;

    const requestOrigin = new URL(request.url).origin;
    return [requestOrigin, 'https://automatizatelo.com', 'https://www.automatizatelo.com'].includes(origin);
}

function validationError(message: string) {
    return NextResponse.json({ error: message }, { status: 400 });
}

export async function POST(request: Request) {
    try {
        if (!isAllowedOrigin(request)) {
            return NextResponse.json({ error: 'Origen no permitido' }, { status: 403 });
        }

        if (!request.headers.get('content-type')?.toLowerCase().includes('application/json')) {
            return NextResponse.json({ error: 'Formato no permitido' }, { status: 415 });
        }

        const declaredLength = Number(request.headers.get('content-length') || 0);
        if (declaredLength > MAX_BODY_BYTES) {
            return NextResponse.json({ error: 'Solicitud demasiado grande' }, { status: 413 });
        }

        const rawBody = await request.text();
        if (Buffer.byteLength(rawBody, 'utf8') > MAX_BODY_BYTES) {
            return NextResponse.json({ error: 'Solicitud demasiado grande' }, { status: 413 });
        }

        let parsedBody: unknown;
        try {
            parsedBody = JSON.parse(rawBody);
        } catch {
            return validationError('Solicitud no válida');
        }

        if (!isRecord(parsedBody)) return validationError('Solicitud no válida');

        // Campo trampa invisible para usuarios reales. Los bots reciben una respuesta neutra
        // y no llegan a Supabase ni al webhook.
        if (readText(parsedBody.website, 200)) {
            return NextResponse.json({ success: true, message: 'Solicitud recibida' });
        }

        const rateLimit = checkRateLimit(getClientKey(request));
        if (rateLimit.limited) {
            return NextResponse.json(
                { error: 'Has enviado varias solicitudes. Inténtalo de nuevo dentro de unos minutos.' },
                { status: 429, headers: { 'Retry-After': String(rateLimit.retryAfter) } },
            );
        }

        const nombre = readText(parsedBody.nombre, 80);
        const apellido = readText(parsedBody.apellido, 80);
        const email = readText(parsedBody.email, 254).toLowerCase();
        const telefono = readText(parsedBody.telefono, 30);
        const tipoCliente = readText(parsedBody.tipo_cliente, 60);
        const servicio = readText(parsedBody.servicio, 160);
        const sector = readText(parsedBody.sector, 100);
        const sectorOtro = readText(parsedBody.sector_otro, 100);
        const tamanoEmpresa = readText(parsedBody.tamano_empresa, 80);
        const mensaje = readText(parsedBody.mensaje, 4000);
        const source = parsedBody.source === 'formulario-curso' ? 'formulario-curso' : 'web_form';
        const flowName = parsedBody.flow_name === 'formacion' ? 'formacion' : 'web';
        const accepted = parsedBody.acepto === true;

        if (nombre.length < 2) return validationError('Introduce un nombre válido');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return validationError('Introduce un correo electrónico válido');
        }
        if (!servicio) return validationError('Selecciona el servicio que te interesa');
        if (!accepted) return validationError('Debes aceptar la política de privacidad');

        const phoneDigits = telefono.replace(/\D/g, '');
        if (telefono && (phoneDigits.length < 7 || phoneDigits.length > 15)) {
            return validationError('Introduce un teléfono válido');
        }
        if (source === 'web_form' && apellido.length < 2) {
            return validationError('Introduce un apellido válido');
        }
        if (source === 'web_form' && !telefono) {
            return validationError('Introduce un teléfono de contacto');
        }

        const finalSector = sector === 'otro' ? (sectorOtro || 'otro') : (sector || null);
        const leadData: Record<string, unknown> = {
            first_name: nombre,
            last_name: apellido || null,
            email,
            phone: telefono,
            client_type: tipoCliente || 'N/A',
            service_interest: servicio,
            message: mensaje,
            privacy_accepted: true,
            source,
            status: 'nuevo',
            score: 0,
            company_size: tamanoEmpresa || null,
            sector: finalSector,
            automation_goal: '',
            flow_name: flowName,
            activity: 'lead_inactivo',
            process_tags: ['nuevo'],
            last_interaction_date: new Date().toISOString(),
        };

        const { data: supabaseData, error: supabaseError } = await supabase
            .from('leads')
            .insert([leadData])
            .select('id');

        if (supabaseError) {
            console.error('Contact form database insertion failed');
            return NextResponse.json(
                { error: 'No se ha podido guardar la solicitud. Inténtalo de nuevo más tarde.' },
                { status: 500 },
            );
        }

        const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
        if (webhookUrl) {
            const cleanBody = {
                nombre,
                apellido,
                email,
                telefono,
                tipo_cliente: tipoCliente,
                servicio,
                sector: finalSector,
                tamano_empresa: tamanoEmpresa,
                mensaje,
                acepto: true,
                source,
                fecha_envio: new Date().toISOString(),
                flow_name: flowName,
            };

            try {
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(cleanBody),
                });

                if (!response.ok) console.error('Contact form webhook failed', response.status);
            } catch {
                console.error('Contact form webhook request failed');
            }
        }

        return NextResponse.json({
            success: true,
            message: 'Solicitud recibida',
            leadId: supabaseData?.[0]?.id,
        });
    } catch {
        console.error('Contact form request failed');
        return NextResponse.json(
            { error: 'No se ha podido procesar la solicitud. Inténtalo de nuevo más tarde.' },
            { status: 500 },
        );
    }
}
