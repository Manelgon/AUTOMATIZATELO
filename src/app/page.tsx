import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import QueAutomatizamos from "@/components/QueAutomatizamos";
import Razones from "@/components/Razones";
import DelBlog from "@/components/DelBlog";

export const revalidate = 3600;

export const metadata = {
  alternates: { canonical: "https://automatizatelo.com/" },
};
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

      {/* 1b. Marquee de tecnologías */}
      <TechMarquee />

      {/* 2. Problema + Resultados (bento) */}
      <Opportunity />

      {/* 2b. Hub de servicios con enlaces internos */}
      <QueAutomatizamos />

      {/* 3. Cómo trabajamos */}
      <HowWeWork />

      {/* 4. Casos de uso por sector (con links a landings) */}
      <UseCases />

      {/* 4b. Por qué trabajar conmigo */}
      <Razones />

      {/* 5. Clientes de confianza */}
      <TrustedClients />

      {/* 6. Precios */}
      <Pricing />

      {/* 7. Formulario de contacto */}
      <ContactForm />

      {/* 8. FAQ */}
      <FAQ />

      {/* 9. Últimos artículos del blog */}
      <DelBlog />

      <Footer />
    </main>
  );
}
