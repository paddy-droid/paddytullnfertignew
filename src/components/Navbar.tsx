
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/b5f2e7bb-445a-4ca8-b677-0095b7b2f820.png"
              alt="Fenster Service Rowo Logo"
              className="h-12 w-auto"
              loading="lazy"
            />
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Leistungen</a>
            <a href="#specialServices" className="text-gray-600 hover:text-gray-900 transition-colors">Spezialleistungen</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">Über uns</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Kontakt</a>
            <a href="#contact">
              <Button className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>24h-Notdienst</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Leistungen</a>
              <a href="#specialServices" className="text-gray-600 hover:text-gray-900 transition-colors">Spezialleistungen</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">Über uns</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Kontakt</a>
              <a 
                href="https://wa.me/436644351622" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>24h-Notdienst</span>
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
