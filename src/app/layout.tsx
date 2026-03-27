import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ClientChatWrapper from "@/components/ClientChatWrapper";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-main",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Automatización de Procesos con IA para Pequeñas Empresas | Chatbots y CRM",
    template: "%s | Automatizatelo"
  },
  description: "Automatización de procesos con IA para pequeñas empresas. Implementamos chatbots, CRM automation y marketing automatizado. Ahorra hasta 20h/semana. Consultoría gratis.",
  keywords: ["automatización de procesos", "IA Barcelona", "inteligencia artificial empresas", "consultoría digital", "n8n expertos", "chatbots IA", "digitalización PYMEs", "Barcelona"],
  authors: [{ name: "Automatizatelo Team" }],
  creator: "Automatizatelo",
  publisher: "Automatizatelo",
  metadataBase: new URL("https://automatizatelo.com"),
  alternates: {
    canonical: "https://automatizatelo.com/",
    languages: {
      "es-ES": "https://automatizatelo.com/",
      "es-MX": "https://automatizatelo.com/mx/",
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      ...(process.env.NEXT_PUBLIC_BING_VERIFICATION && {
        other: { "msvalidate.01": [process.env.NEXT_PUBLIC_BING_VERIFICATION] },
      }),
    },
  }),
  openGraph: {
    title: "Automatizatelo | Automatización con IA en Barcelona",
    description: "Expertos en automatización de procesos e Inteligencia Artificial en Barcelona. Transforma tu negocio hoy.",
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
    title: "Automatizatelo | Automatización con IA en Barcelona",
    description: "Automatiza tu negocio con IA y flujos de trabajo inteligentes. Consultoría en Barcelona.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Automatízatelo",
  "priceRange": "$$",
  "areaServed": "ES",
  "image": "https://automatizatelo.com/og-image.jpg",
  "@id": "https://automatizatelo.com",
  "url": "https://automatizatelo.com",
  "telephone": "+34694264840",
  "email": "info@automatizatelo.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Barcelona",
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
      <body className={outfit.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          precedence="default"
        />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18013693770"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18013693770');
          `}
        </Script>
        <ClientChatWrapper />
      </body>
    </html>
  );
}
