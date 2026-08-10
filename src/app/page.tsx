import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import CursoEstrellaHome from "@/components/CursoEstrellaHome";
import PilaresHome from "@/components/PilaresHome";
import SectoresBar from "@/components/SectoresBar";
import CifrasHome from "@/components/CifrasHome";
import TestimonioHome from "@/components/TestimonioHome";
import TrustedClients from "@/components/TrustedClients";
import ContactForm from "@/components/ContactForm";
import DelBlog from "@/components/DelBlog";

export const revalidate = 60;

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
    /* La home es oscura de arriba abajo: sin este fondo, cualquier hueco entre
       secciones (la marquesina es tinta translúcida) enseña el crema del body. */
    <main style={{ background: "#1c1917" }}>
      <Header />

      {/* 1. Hero — la promesa */}
      <Hero />

      {/* 1b. Marquee de herramientas — la cinta que se desplaza */}
      <TechMarquee />

      {/* 2. Los 3 pilares a sangre (con la barra de sectores sobre las imágenes) */}
      <PilaresHome />

      {/* 2b. Barra de sectores, entre los paneles y las cifras */}
      <SectoresBar />

      {/* 3. Banda oscura de cifras — ⚠️ NÚMEROS DE TEST, sustituir antes de push */}
      <CifrasHome />

      {/* 4. Curso estrella — el producto insignia */}
      <CursoEstrellaHome />

      {/* 5. Cinta de casos en banda tinta */}
      <TrustedClients />

      {/* 6. Formulario sobre degradado + testimonio en tinta */}
      <ContactForm />
      <TestimonioHome />

      {/* 7. Últimos artículos del blog */}
      <DelBlog />

      <Footer />
    </main>
  );
}
