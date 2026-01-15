import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Opportunity from "@/components/Opportunity";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";

import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <StatsBar />
      <Opportunity />
      <Benefits />
      <Services />
      <HowWeWork />

      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  );
}
