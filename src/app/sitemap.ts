import { MetadataRoute } from 'next'
import { supabaseServer } from '@/lib/supabase-server'

export const revalidate = 60;

// Sitemap v2: 24 páginas de contenido + blog dinámico. Las URLs viejas
// redirigen con 301 desde next.config.ts — aquí solo vive el mundo nuevo.
const BASE = 'https://automatizatelo.com';

const PAGINAS: { ruta: string; freq: 'weekly' | 'monthly' | 'yearly'; prio: number }[] = [
    // Núcleo
    { ruta: '', freq: 'weekly', prio: 1 },
    { ruta: '/precios', freq: 'monthly', prio: 0.9 },
    { ruta: '/casos', freq: 'monthly', prio: 0.7 },
    { ruta: '/sobre-mi', freq: 'monthly', prio: 0.8 },
    { ruta: '/diagnostico', freq: 'monthly', prio: 0.8 },
    { ruta: '/recursos', freq: 'monthly', prio: 0.5 },
    { ruta: '/blog', freq: 'weekly', prio: 0.7 },
    // Pilar 1 — Formación
    { ruta: '/formacion', freq: 'monthly', prio: 0.9 },
    { ruta: '/formacion/empresas', freq: 'monthly', prio: 0.9 },
    { ruta: '/formacion/ai-act', freq: 'monthly', prio: 0.9 },
    { ruta: '/formacion/chatgpt', freq: 'monthly', prio: 0.8 },
    { ruta: '/formacion/copilot', freq: 'monthly', prio: 0.8 },
    { ruta: '/formacion/gemini', freq: 'monthly', prio: 0.8 },
    { ruta: '/formacion/claude', freq: 'monthly', prio: 0.8 },
    { ruta: '/formacion/centros-educativos', freq: 'monthly', prio: 0.8 },
    { ruta: '/formacion/alumnado', freq: 'monthly', prio: 0.7 },
    { ruta: '/formacion/directivos', freq: 'monthly', prio: 0.8 },
    { ruta: '/formacion/cursos-a-medida', freq: 'monthly', prio: 0.8 },
    // Pilar 2 — Cumplimiento
    { ruta: '/cumplimiento', freq: 'monthly', prio: 0.9 },
    // Pilar 3 — Sistemas
    { ruta: '/sistemas', freq: 'monthly', prio: 0.9 },
    { ruta: '/sistemas/documentos', freq: 'monthly', prio: 0.8 },
    { ruta: '/sistemas/ventas', freq: 'monthly', prio: 0.8 },
    { ruta: '/sistemas/crm', freq: 'monthly', prio: 0.8 },
    { ruta: '/sistemas/paneles', freq: 'monthly', prio: 0.8 },
    { ruta: '/sistemas/chatbots-whatsapp', freq: 'monthly', prio: 0.8 },
    { ruta: '/sistemas/integracion', freq: 'monthly', prio: 0.8 },
    // Sectores
    { ruta: '/sectores/administradores-fincas', freq: 'monthly', prio: 0.8 },
    { ruta: '/sectores/despachos', freq: 'monthly', prio: 0.8 },
    { ruta: '/sectores/academias', freq: 'monthly', prio: 0.8 },
    { ruta: '/sectores/rrhh', freq: 'monthly', prio: 0.8 },
    // Legales
    { ruta: '/aviso-legal', freq: 'yearly', prio: 0.1 },
    { ruta: '/proteccion-datos', freq: 'yearly', prio: 0.1 },
    { ruta: '/politica-cookies', freq: 'yearly', prio: 0.1 },
    { ruta: '/declaracion-accesibilidad', freq: 'yearly', prio: 0.1 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    const staticPages: MetadataRoute.Sitemap = PAGINAS.map((p) => ({
        url: `${BASE}${p.ruta}`,
        lastModified: now,
        changeFrequency: p.freq,
        priority: p.prio,
    }));

    let blogPages: MetadataRoute.Sitemap = [];
    try {
        const { data } = await supabaseServer
            .from('blog_posts')
            .select('slug,published_at,updated_at,created_at')
            .eq('status', 'published')
            .eq('is_visible', true);
        if (data) {
            blogPages = data.map((p) => ({
                url: `${BASE}/blog/${p.slug}`,
                lastModified: new Date(p.updated_at || p.published_at || p.created_at),
                changeFrequency: 'monthly' as const,
                priority: 0.6,
            }));
        }
    } catch {
        // Sin conexión a la BD el sitemap sigue sirviendo las páginas estáticas
    }

    return [...staticPages, ...blogPages];
}
