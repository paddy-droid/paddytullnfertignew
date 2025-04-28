
import { Phone, ShieldCheck, Building, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const SpecialServices = () => {
  const isMobile = useIsMobile();

  return (
    <section id="specialServices" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Spezialleistungen</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4 text-blue-600">
                <Phone className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">24-Stunden-Notdienst</h3>
              </div>
              <p className="text-gray-600">
                Schnelle Hilfe bei Defekten an Fenstern, Türen, Rollläden und Sonnenschutzsystemen – jederzeit erreichbar! Unser Team steht Ihnen rund um die Uhr zur Verfügung, um Notfälle schnell und professionell zu beheben.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4 text-blue-600">
                <ShieldCheck className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Schadensabwicklung mit Versicherungen</h3>
              </div>
              <p className="text-gray-600">
                Unterstützung bei der Dokumentation und Abwicklung von Versicherungsschäden. Auf Wunsch übernehmen wir die direkte Kommunikation mit Ihrer Versicherung, um den Prozess für Sie so einfach wie möglich zu gestalten.
              </p>
            </CardContent>
          </Card>
<Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4 text-blue-600">
                <Wrench className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Fenster und Türen Reparatur für Privathaushalte</h3>
              </div>
              <p className="text-gray-600">
                Spezielle Tarife für die Reparatur von Fenstern und Türen in Privathaushalten. Schnelle und zuverlässige Behebung von Defekten, damit Ihr Zuhause sicher und komfortabel bleibt.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow mt-8">
          <CardContent className="pt-6">
            <div className="flex items-center mb-4 text-blue-600">
              <Building className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Service für Hausverwaltungen</h3>
            </div>
            <p className="text-gray-600">
              Umfassende Betreuung und schnelle Reparaturen für Immobilienverwaltungen. Wir bieten maßgeschneiderte Lösungen für Fenster, Türen und Sonnenschutz in Wohn- und Geschäftsobjekten.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href={isMobile ? "https://wa.me/436644351622" : "#about"}>
              Jetzt unverbindlich anfragen
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialServices;
