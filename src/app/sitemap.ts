import { MetadataRoute } from 'next'
import { supabaseServer } from '@/lib/supabase-server'

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: 'https://automatizatelo.com',
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://automatizatelo.com/automatizacion-clinicas',
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://automatizatelo.com/automatizacion-ecommerce',
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://automatizatelo.com/automatizacion-empresas-servicios',
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://automatizatelo.com/blog',
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: 'https://automatizatelo.com/sobre-mi',
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://automatizatelo.com/casos-de-exito',
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://automatizatelo.com/automatizacion-administradores-fincas',
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://automatizatelo.com/servicios/formacion-ia-empresas',
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://automatizatelo.com/servicios/automatizacion',
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://automatizatelo.com/formacion-obligatoria-ai-act',
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://automatizatelo.com/formacion-ia-centros-educativos',
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://automatizatelo.com/precios',
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://automatizatelo.com/aviso-legal',
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.1,
        },
        {
            url: 'https://automatizatelo.com/proteccion-datos',
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.1,
        },
        {
            url: 'https://automatizatelo.com/politica-cookies',
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.1,
        },
    ];

    let blogPages: MetadataRoute.Sitemap = [];
    try {
        const { data } = await supabaseServer
            .from('blog_posts')
            .select('slug,published_at,updated_at,created_at')
            .eq('status', 'published')
            .eq('is_visible', true);
        if (data) {
            blogPages = data.map((p) => ({
                url: `https://automatizatelo.com/blog/${p.slug}`,
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
