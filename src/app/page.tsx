import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Opportunity from "@/components/Opportunity";
import HowWeWork from "@/components/HowWeWork";
import UseCases from "@/components/UseCases";
import TrustedClients from "@/components/TrustedClients";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Header />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Problema + Resultados (fusión) */}
      <Opportunity />

      {/* 3. Cómo trabajamos */}
      <HowWeWork />

      {/* 4. Casos de uso por sector (con links a landings) */}
      <UseCases />

      {/* 5. Clientes de confianza */}
      <TrustedClients />

      {/* 6. Precios */}
      <Pricing />

      {/* 7. Formulario de contacto */}
      <ContactForm />

      {/* 8. FAQ */}
      <FAQ />

      <Footer />
    </main>
  );
}
