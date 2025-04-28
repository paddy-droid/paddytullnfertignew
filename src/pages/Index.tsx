
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RepairFocus from "@/components/RepairFocus";
import Services from "@/components/Services";
import SpecialServices from "@/components/SpecialServices";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { Helmet } from "react-helmet";
import { Badge } from "lucide-react";
import { Badge as UIBadge } from "@/components/ui/badge";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Fensterservice Rowo: Fenster & Türreparatur in Wien & NÖ</title>
        <meta name="description" content="24h-Notdienst für Fenster- und Türreparaturen in Wien und Niederösterreich. Professionelle Wartung, Reparatur und Schadensabwicklung." />
      </Helmet>
      <div className="min-h-screen relative">
        {/* Floating Badge */}
        <div className="fixed top-24 right-4 z-50 animate-bounce">
          <UIBadge className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center gap-2">
            <Badge className="h-4 w-4" />
            <span className="font-semibold">Kostenlose Anfahrt bis 30.09.2025</span>
          </UIBadge>
        </div>

        <Navbar />
        <main>
          <Hero />
          <RepairFocus />
          <Services />
          <SpecialServices />
          <About />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
