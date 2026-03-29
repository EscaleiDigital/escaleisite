import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ClientBar from "@/components/sections/ClientBar";
import Problema from "@/components/sections/Problema";
import MaquinaDeVendas from "@/components/sections/MaquinaDeVendas";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Planos from "@/components/sections/Planos";
import CRM from "@/components/sections/CRM";
import Comparativo from "@/components/sections/Comparativo";
import ParaQuem from "@/components/sections/ParaQuem";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CookieBanner from "@/components/ui/CookieBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientBar />
        <Problema />
        <MaquinaDeVendas />
        <ComoFunciona />
        <Planos />
        <CRM />
        <Comparativo />
        <ParaQuem />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}
