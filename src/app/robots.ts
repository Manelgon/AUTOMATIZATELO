import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const commonDisallow = [
        '/privado/',
        '/admin/',
        '/wp-admin/',
        '/carrito/',
        '/checkout/',
        '/api/',
        '/aviso-legal',
        '/proteccion-datos',
        '/politica-cookies',
        '/declaracion-accesibilidad'
    ]

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: commonDisallow,
            },
            {
                userAgent: 'GPTBot',
                allow: '/',
                disallow: commonDisallow,
            },
            {
                userAgent: 'CC Bot',
                allow: '/',
                disallow: commonDisallow,
            },
            {
                userAgent: 'ClaudeBot',
                allow: '/',
                disallow: commonDisallow,
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
                disallow: commonDisallow,
            }
        ],
        sitemap: 'https://automatizatelo.com/sitemap.xml',
    }
}
