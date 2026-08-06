import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CursoEstrellaHome from "@/components/CursoEstrellaHome";
import PilaresHome from "@/components/PilaresHome";
import CifrasHome from "@/components/CifrasHome";
import TestimonioHome from "@/components/TestimonioHome";
import TrustedClients from "@/components/TrustedClients";
import ContactForm from "@/components/ContactForm";
import DelBlog from "@/components/DelBlog";

export const revalidate = 3600;

export const metadata = {
  alternates: { canonical: "https://automatizatelo.com/" },
};

// =============================================================================
// HOME v3 — una historia en 8 bloques, ritmo crema/tinta (estructura iActa)
// =============================================================================
// Lo que se fue del home sigue vivo en sus páginas: precios → /precios,
// FAQ y cómo trabajo → /como-trabajo, casos por sector → dropdown Sectores.
// =============================================================================

export default function Home() {
  return (
    <main>
      <Header />

      {/* 1. Hero — la promesa */}
      <Hero />

      {/* 2. Curso estrella — el producto insignia, arriba como iActa */}
      <CursoEstrellaHome />

      {/* 3. Los 3 pilares como cards con foto + chips de sectores */}
      <PilaresHome />

      {/* 4. Banda oscura de cifras — ⚠️ NÚMEROS DE TEST, sustituir antes de push */}
      <CifrasHome />

      {/* 5. Prueba social: reseña de Google + cinta de casos */}
      <TestimonioHome />
      <TrustedClients />

      {/* 6. Formulario de contacto */}
      <ContactForm />

      {/* 7. Últimos artículos del blog */}
      <DelBlog />

      <Footer />
    </main>
  );
}
