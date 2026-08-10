import type { Metadata } from "next";
import { Outfit, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CookieBanner from "@/components/CookieBanner";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-main",
  weight: ["400", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Implantación de IA para Pymes en Barcelona | Automatizatelo",
    template: "%s | Automatizatelo"
  },
  description: "Implantación de IA para pymes: formación de equipos, cumplimiento del AI Act y automatizaciones con precio cerrado. Barcelona y toda España.",
  authors: [{ name: "Automatizatelo Team" }],
  creator: "Automatizatelo",
  publisher: "Automatizatelo",
  metadataBase: new URL("https://automatizatelo.com"),
  ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      ...(process.env.NEXT_PUBLIC_BING_VERIFICATION && {
        other: { "msvalidate.01": [process.env.NEXT_PUBLIC_BING_VERIFICATION] },
      }),
    },
  }),
  openGraph: {
    title: "Automatizatelo | Implantación de IA en Barcelona",
    description: "Formación, cumplimiento del AI Act y automatización: la IA implantada en tu empresa, con precio cerrado.",
    url: "https://automatizatelo.com",
    siteName: "Automatizatelo",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Automatizatelo - Automatización Inteligente en Barcelona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatizatelo | Implantación de IA en Barcelona",
    description: "Formación, cumplimiento del AI Act y automatización para pymes. Barcelona y toda España.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Identidad del sitio: nombre, editor y a quién pertenece. Ayuda a que Google
// muestre "Automatizatelo" como nombre del sitio en los resultados.
const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://automatizatelo.com/#website",
  "url": "https://automatizatelo.com",
  "name": "Automatizatelo",
  "alternateName": "Automatizatelo · Implantación de IA",
  "description": "Implantación de IA para pymes: formación de equipos, cumplimiento del AI Act y automatización de procesos.",
  "inLanguage": "es-ES",
  "publisher": {
    "@type": "Organization",
    "name": "Automatizatelo",
    "url": "https://automatizatelo.com",
    "founder": {
      "@type": "Person",
      "name": "Manel Méndez González",
      "url": "https://automatizatelo.com/sobre-mi",
    },
    "sameAs": [
      "https://www.linkedin.com/company/automatizatelo",
      "https://www.instagram.com/automatizatelo.ia",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Automatízatelo",
  "priceRange": "$$",
  "areaServed": "ES",
  "image": "https://automatizatelo.com/og-image.jpg",
  "@id": "https://automatizatelo.com",
  "url": "https://automatizatelo.com",
  "telephone": "+34678399182",
  "email": "info@automatizatelo.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Barcelona",
    "addressRegion": "Cataluña",
    "postalCode": "08001",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.3851,
    "longitude": 2.1734
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.linkedin.com/in/automatizatelo-automatizaciones-de-procesos-con-ia-4422523a6/",
    "https://www.instagram.com/automatizatelo.ia"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      <body className={`${outfit.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          precedence="default"
        />
        {children}
        {/* Google Consent Mode v2 — DEFAULT DENIED hasta que el usuario acepte */}
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              functionality_storage: 'denied',
              personalization_storage: 'denied',
              security_storage: 'granted',
              wait_for_update: 500
            });
            gtag('set', 'ads_data_redaction', true);
            gtag('set', 'url_passthrough', true);
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18013693770"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', 'AW-18013693770');
            ${process.env.NEXT_PUBLIC_GA_ID ? `gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');` : ""}
          `}
        </Script>
        {/* Clic en cualquier enlace de WhatsApp = contacto. Se escucha por
            delegación para cubrir los de ahora y los que se añadan después. */}
        <Script id="track-whatsapp" strategy="afterInteractive">
          {`
            document.addEventListener('click', function (e) {
              var a = e.target && e.target.closest ? e.target.closest('a[href*="wa.me"]') : null;
              if (!a || typeof window.gtag !== 'function') return;
              window.gtag('event', 'contacto_whatsapp', {
                event_category: 'contacto',
                event_label: a.getAttribute('aria-label') || a.textContent.trim().slice(0, 40) || 'whatsapp',
                pagina: window.location.pathname
              });
            }, true);
          `}
        </Script>
        <SmoothScroll />
        <CookieBanner />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
