import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // /demo-curso está detrás de clave: no tiene nada que hacer en Google.
            disallow: ['/private/', '/demo-curso'],
        },
        sitemap: 'https://automatizatelo.com/sitemap.xml',
    }
}
