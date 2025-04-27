
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Moderne Fenster"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Fensterservice Rowo - Ihr Experte für Fenster & Türreparatur
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Professionelle Fenster-, Tür-, Sonnenschutz- und Insektenschutzreparatur in Niederösterreich und Wien
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          <Button 
            size="lg" 
            className="w-full md:w-auto bg-white text-gray-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Jetzt unverbindlich anfragen!
          </Button>
          <a 
            href="https://wa.me/436644351622" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto"
            aria-label="Kontaktieren Sie unseren 24h-Notdienst über WhatsApp"
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full bg-transparent border-white text-white hover:bg-white/10 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              <span>24h-Notdienst</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
