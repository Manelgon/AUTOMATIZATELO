import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

        if (!webhookUrl) {
            console.error('Missing CONTACT_WEBHOOK_URL environment variable');
            return NextResponse.json(
                { error: 'Server configuration error: Missing webhook URL' },
                { status: 500 }
            );
        }

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
            return NextResponse.json(
                { error: `Downstream service error: ${response.status}` },
                { status: response.status }
            );
        }

        const data = await response.json().catch(() => ({ success: true }));
        return NextResponse.json(data);

    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
