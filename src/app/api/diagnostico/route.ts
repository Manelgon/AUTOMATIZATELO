import { NextResponse } from 'next/server';
import { supabaseServer as supabase } from '@/lib/supabase-server';
import { headers } from 'next/headers';

// El diagnóstico crea un lead en la misma tabla que el formulario de contacto,
// con flow_name 'diagnostico' para distinguir el origen en el panel. La
// puntuación va a `score` y el detalle de respuestas, legible, a `message`.

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nombre, email, acepto, puntuacion, tamano, area_principal, respuestas } = body;

        if (!nombre || !email || !acepto) {
            return NextResponse.json({ error: 'Faltan nombre, email o consentimiento' }, { status: 400 });
        }

        const resumen = Array.isArray(respuestas)
            ? respuestas
                .filter((r: { pregunta?: string; respuesta?: string }) => r?.pregunta && r?.respuesta)
                .map((r: { pregunta: string; respuesta: string }) => `${r.pregunta}\n→ ${r.respuesta}`)
                .join('\n\n')
            : '';

        const headersList = await headers();
        const clientIp = headersList.get('x-forwarded-for')?.split(',')[0]?.trim()
            || headersList.get('x-real-ip')
            || 'unknown';

        const { data, error } = await supabase
            .from('leads')
            .insert([{
                first_name: String(nombre).slice(0, 120),
                email: String(email).slice(0, 200),
                phone: '',
                client_type: 'N/A',
                service_interest: area_principal || 'Diagnóstico',
                message: `DIAGNÓSTICO DE AUTOMATIZACIÓN — ${puntuacion ?? '?'}%\n\n${resumen}`.slice(0, 8000),
                privacy_accepted: true,
                source: 'diagnostico',
                ip_address: clientIp,
                status: 'nuevo',
                score: Number(puntuacion) || 0,
                company_size: tamano || null,
                automation_goal: area_principal || '',
                flow_name: 'diagnostico',
                activity: 'lead_inactivo',
                process_tags: ['nuevo', 'diagnostico'],
                last_interaction_date: new Date().toISOString(),
            }])
            .select('id');

        if (error) {
            console.error('diagnostico insert error:', error.message);
            return NextResponse.json({ error: 'No se pudo guardar' }, { status: 500 });
        }

        return NextResponse.json({ success: true, leadId: data?.[0]?.id });
    } catch (e) {
        console.error('diagnostico error:', e);
        return NextResponse.json({ error: 'Error interno' }, { status: 500 });
    }
}
