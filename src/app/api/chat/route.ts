import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const webhookUrl = process.env.CHAT_WEBHOOK_URL;

        if (!webhookUrl) {
            console.error('CHAT_WEBHOOK_URL is not defined');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Forward the payload (messages + metadata) to the n8n webhook
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`Webhook responded with status: ${response.status}`);
        }

        const data = await response.json();
        // Expecting the webhook to return { messages: string[] } or just an array
        // We'll normalize it to ensure the frontend always gets an array of messages

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error processing chat message:', error);
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}
