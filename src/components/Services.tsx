
import { Square, Home, Check, Sun, Shield, Umbrella, DoorClosed, Wrench } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: DoorClosed,
      title: "Fenster- & Türreparatur",
      description: "Fachgerechte Reparatur von Schließmechanismen, Dichtungen und Rahmen für optimale Energieeffizienz und Sicherheit"
    },
    {
      icon: Sun,
      title: "Sonnenschutzlösungen",
      description: "Reparatur und Maßanfertigung von Sonnenschutzsystemen für optimale Licht- und Wärmeregulierung"
    },
    {
      icon: Shield,
      title: "Insektenschutzsysteme",
      description: "Individuelle Insektenschutzgitter mit hochwertigen Materialien für optimalen Schutz bei voller Luftdurchlässigkeit"
    },
    {
      icon: Square,
      title: "Rollladenservice",
      description: "Wartung und Reparatur von Rollläden für verbesserten Einbruchschutz und Energieeffizienz"
    },
    {
      icon: Wrench,
      title: "Wartungsservice",
      description: "Präzise Einstellarbeiten für Energieeinsparung, verbesserten Schallschutz und erhöhte Sicherheit"
    },
    {
      icon: Home,
      title: "Service für Hausverwaltungen",
      description: "Individuelle Servicepakete für Geschäftskunden und Betreuung von Großobjekten"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Unsere Leistungen im Überblick
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Vollumfängliche Reparatur- und Serviceleistungen mit gründlicher Ursachenforschung für nachhaltige Ergebnisse
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
