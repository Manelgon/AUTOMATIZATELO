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
    default: "Automatizatelo | Automatización Inteligente para PYMEs",
    template: "%s | Automatizatelo"
  },
  description: "Especialistas en automatización de procesos y IA para PYMEs y Startups. Escala tu negocio, reduce errores y ahorra tiempo sin grandes inversiones.",
  keywords: ["automatización", "IA", "inteligencia artificial", "PYMEs", "startups", "consultoría tecnológica", "n8n", "chatbots", "optimización de procesos"],
  authors: [{ name: "Automatizatelo Team" }],
  creator: "Automatizatelo",
  publisher: "Automatizatelo",
  metadataBase: new URL("https://automatizatelo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Automatizatelo | Automatización Inteligente para PYMEs",
    description: "Impulsa tu negocio con automatización de procesos e Inteligencia Artificial.",
    url: "https://automatizatelo.com",
    siteName: "Automatizatelo",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in public folder later or use a placeholder
        width: 1200,
        height: 630,
        alt: "Automatizatelo - Automatización Inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatizatelo | Automatización Inteligente",
    description: "Automatiza tu negocio con IA y flujos de trabajo inteligentes.",
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
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
