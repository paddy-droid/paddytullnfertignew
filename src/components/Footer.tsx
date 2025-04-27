import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/lovable-uploads/b5f2e7bb-445a-4ca8-b677-0095b7b2f820.png"
              alt="Fenster Service Rowo Logo"
              className="h-12 w-auto mb-4 brightness-0 invert"
              loading="lazy"
            />
            <p className="text-gray-400">
              Ihr Experte für Fenster-, Tür-, Sonnenschutz- und Insektenschutzreparatur in Niederösterreich und Wien
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <p className="text-gray-400">Am Wiesengrund 1, 3452 Michelndorf</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="w-4 h-4 text-gray-400" />
              <p className="text-gray-400">+43 664 435 1622</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gray-400" />
              <p className="text-gray-400">info@fensterservice-rowo.at</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Öffnungszeiten</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <p className="text-gray-400">Mo–Do: 08:00-17:00</p>
            </div>
            <p className="text-gray-400 ml-6">Fr: 08:00-12:00</p>
            <p className="text-gray-400 ml-6">24h-Notdienst verfügbar</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Service-Regionen</h3>
            <p className="text-gray-400">
              <Link to="/wien" className="hover:text-white transition-colors">
                Wien
              </Link>
            </p>
            <p className="text-gray-400">
              <Link to="/tulln" className="hover:text-white transition-colors">
                Tulln
              </Link>
            </p>
            <p className="text-gray-400">
              <Link to="/st-poelten" className="hover:text-white transition-colors">
                St. Pölten
              </Link>
            </p>
            <p className="text-gray-400">
              <Link to="/krems" className="hover:text-white transition-colors">
                Krems
              </Link>
            </p>
            <p className="text-gray-400">
              <Link to="/baden-bei-wien" className="hover:text-white transition-colors">
                Baden bei Wien
              </Link>
            </p>
            <p className="text-gray-400">
              <Link to="/klosterneuburg" className="hover:text-white transition-colors">
                Klosterneuburg
              </Link>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fenster Service Rowo. Geschäftsführer: Wolfgang Winkler und Robin Brezina. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
