import { NextRequest, NextResponse } from 'next/server';

const getSupabaseUrl = () => {
    return (process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ssdbss.automatizatelo.com').replace(/\/$/, '');
};

export async function GET(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
    return handleRequest(request, params);
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
    return handleRequest(request, params);
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
    return handleRequest(request, params);
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
    return handleRequest(request, params);
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
    return handleRequest(request, params);
}

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
            'Access-Control-Allow-Headers': '*',
        },
    });
}

async function handleRequest(request: NextRequest, params: Promise<{ path: string[] }>) {
    const SUPABASE_URL = getSupabaseUrl();

    try {
        const resolvedParams = await params;
        const pathSegments = resolvedParams.path;

        // Health check
        if (pathSegments[0] === 'health') {
            return NextResponse.json({ status: 'ok', target: SUPABASE_URL });
        }

        const path = pathSegments.join('/');
        const { searchParams } = new URL(request.url);
        const queryString = searchParams.toString();

        const targetUrl = `${SUPABASE_URL}/${path}${queryString ? `?${queryString}` : ''}`;

        console.log(`[Proxy Request] ${request.method} -> ${targetUrl}`);

        const requestHeaders = new Headers(request.headers);
        requestHeaders.delete('host');
        requestHeaders.delete('connection');
        requestHeaders.delete('origin');
        requestHeaders.delete('referer');

        const body = ['GET', 'HEAD', 'OPTIONS'].includes(request.method) ? undefined : await request.text();

        const response = await fetch(targetUrl, {
            method: request.method,
            headers: requestHeaders,
            body,
            cache: 'no-store'
        });

        console.log(`[Proxy Response] Status: ${response.status} from ${targetUrl}`);

        const responseData = await response.text();
        console.log(`[Proxy Response Body]: ${responseData.substring(0, 1000)}`);

        const responseHeaders = new Headers(response.headers);
        responseHeaders.set('Access-Control-Allow-Origin', '*');

        // Remove headers that cause decoding issues in the browser
        // since we already read the response as text (decoded)
        responseHeaders.delete('content-encoding');
        responseHeaders.delete('content-length');
        responseHeaders.delete('transfer-encoding');

        return new NextResponse(responseData, {
            status: response.status,
            headers: responseHeaders,
        });
    } catch (error: any) {
        console.error('[Proxy Error]:', error);
        return NextResponse.json({ error: 'Proxy implementation error', details: error.message }, { status: 500 });
    }
}
