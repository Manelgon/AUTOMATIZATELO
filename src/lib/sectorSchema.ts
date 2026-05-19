import type { SectorPageProps } from "@/components/SectorPage";

export function buildSectorSchema(p: SectorPageProps) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Automatización con IA para ${p.sector}`,
        "description": p.heroSubtitle,
        "provider": {
            "@type": "ProfessionalService",
            "name": "Automatizatelo",
            "url": "https://automatizatelo.com",
            "telephone": "+34678399182",
            "areaServed": "ES"
        },
        "areaServed": "ES",
        "serviceType": `Automatización de procesos para ${p.sector}`,
        "url": `https://automatizatelo.com/${p.sectorSlug}`,
        "mainEntityOfPage": {
            "@type": "FAQPage",
            "mainEntity": p.faqs.map(f => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": { "@type": "Answer", "text": f.answer }
            }))
        }
    };
}
