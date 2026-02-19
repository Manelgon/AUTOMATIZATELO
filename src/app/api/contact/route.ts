import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
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

export async function POST(request: Request) {
    console.log('POST /api/contact request received');
    console.log('SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Defined' : 'UNDEFINED');
    console.log('SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Defined' : 'UNDEFINED');

    try {
        const body = await request.json();

        logToFile({ type: 'PAYLOAD_RECEIVED', body });

        const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';

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
            source = 'web_form'
        } = body;

        const leadData = {
            first_name: nombre || '',
            last_name: apellido || '',
            email: email || '',
            phone: telefono || '',
            client_type: tipo_cliente || 'N/A',
            service_interest: servicio || 'N/A',
            message: mensaje || '',
            privacy_accepted: !!acepto,
            source: source,
            ip: ip, // Use server-detected IP
            score: 0
        };


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

        // 2. Original Webhook Notification
        const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

        if (webhookUrl) {
            try {
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
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
