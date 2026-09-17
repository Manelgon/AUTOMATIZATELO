import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // /demo está detrás de clave: no tiene nada que hacer en Google.
            disallow: ['/private/', '/demo'],
        },
        sitemap: 'https://automatizatelo.com/sitemap.xml',
    }
}
