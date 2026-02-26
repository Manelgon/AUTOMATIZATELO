import { NextResponse } from 'next/server';
import { supabaseServer as supabase } from '@/lib/supabase-server';
import { headers } from 'next/headers';
import fs from 'fs';
import path from 'path';

function logToFile(data: any) {
    try {
        const logPath = path.join(process.cwd(), 'api_debug.log');
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] ${JSON.stringify(data, null, 2)}\n---\n`;
        fs.appendFileSync(logPath, logEntry);
        console.log('API LOG:', JSON.stringify(data, null, 2));
    } catch (e) {
        console.error('Failed to log to file:', e);
    }
}

// Fields that are safe to forward to the webhook/database
const ALLOWED_FIELDS = [
    'nombre', 'email', 'prefijo', 'telefono',
    'tipo_cliente', 'servicio', 'mensaje', 'acepto',
    'first_name', 'last_name', 'phone', 'client_type',
    'service_interest', 'message', 'privacy_accepted',
    'company', 'source', 'fecha_envio',
];

export async function POST(request: Request) {
    console.log('POST /api/contact request received');
    console.log('SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Defined' : 'UNDEFINED');
    console.log('SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Defined' : 'UNDEFINED');

    try {
        const body = await request.json();
        logToFile({ type: 'PAYLOAD_RECEIVED', body });

        // 1. Save to Supabase Leads Table
        const {
            nombre,
            apellido,
            email,
            telefono,
            tipo_cliente,
            servicio,
            mensaje,
            acepto,
            source = 'web_form',
            navegador,
            ciudad,
            pais
        } = body;

        // Parse device type from User-Agent
        const ua = (navegador || '').toLowerCase();
        let deviceType = 'desktop';
        if (/mobile|android|iphone|ipod|blackberry|iemobile|opera mini/i.test(ua)) {
            deviceType = 'mobile';
        } else if (/tablet|ipad/i.test(ua)) {
            deviceType = 'tablet';
        }

        const leadData: Record<string, any> = {
            first_name: nombre || '',
            last_name: apellido || '',
            email: email || '',
            phone: telefono || '',
            client_type: tipo_cliente || 'N/A',
            service_interest: servicio || 'N/A',
            message: mensaje || '',
            privacy_accepted: !!acepto,
            source: source,
            ip_address: 'Desconocida',
            city: ciudad || 'Desconocida',
            country: pais || 'Desconocido',
            device_type: deviceType,
            status: 'pendiente',
            score: 0
        };

        const headersList = await headers();
        const clientIp = headersList.get('x-forwarded-for')?.split(',')[0]?.trim()
            || headersList.get('x-real-ip')
            || 'unknown';
        leadData.ip_address = clientIp;

        logToFile({ type: 'INSERTING_DATA', leadData });

        const { data: supabaseData, error: supabaseError } = await supabase
            .from('leads')
            .insert([leadData])
            .select();

        if (supabaseError) {
            logToFile({ type: 'SUPABASE_ERROR', supabaseError });
            return NextResponse.json(
                {
                    error: 'Database insertion failed',
                    details: supabaseError,
                    message: supabaseError.message
                },
                { status: 500 }
            );
        }

        logToFile({ type: 'SUPABASE_SUCCESS', supabaseData });

        const leadId = supabaseData?.[0]?.id;

        // Create the secondary modular tables immediately
        if (leadId) {
            await supabase.from('service_segmentation').insert([{
                lead_id: leadId,
                company_size: 'N/A',
                automation_goal: ''
            }]);

            await supabase.from('funnel_flows').insert([{
                lead_id: leadId,
                flow_name: 'web',
                current_status: 'nuevo',
                activity: 'lead_inactivo',
                process_tags: ['nuevo']
            }]);

            logToFile({ type: 'CRM_MODULES_CREATED', leadId });
        }

        // 2. Notification to Webhook
        const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

        if (webhookUrl) {
            // Strip fields that shouldn't go to the webhook or aren't allowed
            const cleanBody: Record<string, any> = {};
            for (const key of ALLOWED_FIELDS) {
                if (body[key] !== undefined) {
                    cleanBody[key] = body[key];
                }
            }

            cleanBody.ip = clientIp;
            cleanBody.source = cleanBody.source || 'web_form';

            try {
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(cleanBody),
                });

                if (!response.ok) {
                    logToFile({ type: 'WEBHOOK_FAILED', status: response.status });
                }
            } catch (error: any) {
                logToFile({ type: 'WEBHOOK_ERROR', error: error.message });
            }
        }

        return NextResponse.json({
            success: true,
            message: 'Lead received and processed',
            leadId: supabaseData?.[0]?.id
        });

    } catch (error: any) {
        logToFile({ type: 'CRITICAL_ERROR', error: error.message });
        return NextResponse.json(
            { error: 'Internal server error', details: error.message },
            { status: 500 }
        );
    }
}
