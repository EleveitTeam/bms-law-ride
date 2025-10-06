import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import CasesWeHandle from "@/components/CasesWeHandle";
import HowWeWork from "@/components/HowWeWork";
import ImmediateSteps from "@/components/ImmediateSteps";
import FAQ from "@/components/FAQ";
import FreeTransport from "@/components/FreeTransport";
import OurLawFirm from "@/components/OurLawFirm";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-montserrat">
      <Navigation />
      <main> 
        <Hero />
        <WhyChooseUs />
        <CasesWeHandle />
        <HowWeWork />
        <ImmediateSteps />
        <FAQ />
        <FreeTransport />
        <OurLawFirm />
        <Testimonials />
        <Contact />
        {/* <FinalCTA /> */}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
