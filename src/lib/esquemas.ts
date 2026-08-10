/**
 * Datos estructurados compartidos: las migas de pan y las fichas de curso.
 * Todo lo que se declara aquí tiene que ser verdad en la página — el esquema
 * es una promesa a Google, y una promesa falsa se paga con la desindexación
 * del resultado enriquecido.
 */

export const SITIO = "https://automatizatelo.com";

export interface Miga {
    nombre: string;
    url: string;
}

/** BreadcrumbList. «Inicio» va siempre delante: no hace falta pasarlo. */
export function migas(camino: Miga[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{ nombre: "Inicio", url: "/" }, ...camino].map((m, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: m.nombre,
            item: m.url === "/" ? SITIO : SITIO + m.url,
        })),
    };
}

export interface FichaCurso {
    nombre: string;
    descripcion: string;
    url: string;
    /** el suelo del tarifario; el precio final se cierra en la propuesta */
    precioDesde: number;
    /** horas lectivas — solo cuando la página da una cifra cerrada, no un rango */
    horas?: number;
    modo?: ("onsite" | "online")[];
    certificado?: string;
}

export function curso(c: FichaCurso) {
    return {
        "@context": "https://schema.org",
        "@type": "Course",
        name: c.nombre,
        description: c.descripcion,
        url: SITIO + c.url,
        inLanguage: "es",
        provider: { "@type": "ProfessionalService", name: "Automatizatelo", url: SITIO },
        ...(c.certificado ? { educationalCredentialAwarded: c.certificado } : {}),
        hasCourseInstance: [{
            "@type": "CourseInstance",
            courseMode: c.modo ?? ["onsite", "online"],
            location: "España",
            ...(c.horas ? { courseWorkload: `PT${c.horas}H` } : {}),
        }],
        offers: [{
            "@type": "Offer",
            price: String(c.precioDesde),
            priceCurrency: "EUR",
            category: "Paid",
            url: `${SITIO}/precios#formar`,
            description: "Precio desde; el final se cierra por escrito en la propuesta.",
        }],
    };
}
