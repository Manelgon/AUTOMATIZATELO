import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
    try {
        const body = await request.json();

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

        const { data: supabaseData, error: supabaseError } = await supabase
            .from('leads')
            .insert([
                {
                    first_name: nombre,
                    last_name: apellido,
                    email: email,
                    phone: telefono,
                    client_type: tipo_cliente,
                    service_interest: servicio,
                    message: mensaje,
                    privacy_accepted: acepto,
                    source: source,
                    score: 0
                }
            ])
            .select();

        if (supabaseError) {
            console.error('Supabase Error:', supabaseError);
            // We continue even if DB fails, or we could return error. 
            // Better to at least try the webhook too.
        }

        // 2. Original Webhook Notification
        const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

        if (webhookUrl) {
            try {
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    console.error(`Webhook failed: ${response.status} ${errorText}`);
                }
            } catch (error) {
                console.error('Webhook fetch error:', error);
            }
        } else {
            console.warn('Missing CONTACT_WEBHOOK_URL environment variable');
        }

        return NextResponse.json({
            success: true,
            message: 'Lead received and processed',
            leadId: supabaseData?.[0]?.id
        });

    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

