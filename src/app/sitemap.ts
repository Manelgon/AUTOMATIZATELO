import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    return [
        {
            url: 'https://automatizatelo.com',
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://automatizatelo.com/automatizacion-restaurantes',
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.9,
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
    ]
}
