import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Opportunity from "@/components/Opportunity";
import WhatWeAutomate from "@/components/WhatWeAutomate";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import UseCases from "@/components/UseCases";
import TrustedClients from "@/components/TrustedClients";
import Pricing from "@/components/Pricing";
import BlogSection from "@/components/BlogSection";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Header />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Prueba social rápida */}
      <StatsBar />

      {/* 3. El Problema */}
      <Opportunity />

      {/* 4. Qué podemos automatizar (ejemplos concretos) */}
      <WhatWeAutomate />

      {/* 5. Beneficios / Resultados */}
      <Benefits />

      {/* 6. Servicios (dinámico desde Supabase) */}
      <Services />

      {/* 7. Cómo trabajamos */}
      <HowWeWork />

      {/* 8. Casos de uso por sector */}
      <UseCases />

      {/* 9. Clientes de confianza */}
      <TrustedClients />

      {/* 10. Precios */}
      <Pricing />

      {/* 11. Blog */}
      <BlogSection />

      {/* 12. Formulario de contacto */}
      <ContactForm />

      {/* 13. FAQ */}
      <FAQ />

      <Footer />
    </main>
  );
}
