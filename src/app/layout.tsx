import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-main",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Automatizatelo | Automatización con IA y Procesos en Barcelona",
    template: "%s | Automatizatelo"
  },
  description: "Consultora de automatización de procesos e Inteligencia Artificial en Barcelona. Ahorra tiempo y costes implementando soluciones digitales para tu PYME.",
  keywords: ["automatización de procesos", "IA Barcelona", "inteligencia artificial empresas", "consultoría digital", "n8n expertos", "chatbots IA", "digitalización PYMEs", "Barcelona"],
  authors: [{ name: "Automatizatelo Team" }],
  creator: "Automatizatelo",
  publisher: "Automatizatelo",
  metadataBase: new URL("https://automatizatelo.com"),
  alternates: {
    canonical: "/",
  },
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
  "@type": "LocalBusiness",
  "name": "Automatizatelo",
  "image": "https://automatizatelo.com/og-image.jpg",
  "@id": "https://automatizatelo.com",
  "url": "https://automatizatelo.com",
  "telephone": "+34600000000", // Placeholder, needs actual phone if available
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Carrer de l'Example, 123", // Placeholder
    "addressLocality": "Barcelona",
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
    "https://www.linkedin.com/company/automatizatelo", // Placeholder
    "https://twitter.com/automatizatelo" // Placeholder
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={outfit.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
