import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Badge } from "lucide-react";
import { Badge as UIBadge } from "@/components/ui/badge";

const BadenBeiWien = () => {
  return (
    <>
      <Helmet>
        <title>Fensterreparatur Baden bei Wien | Fensterservice Rowo</title>
        <meta
          name="description"
          content="Professionelle Fensterreparatur in Baden bei Wien und Umgebung. 24h Notdienst, schnelle Hilfe bei defekten Fenstern und Türen. Ihr Experte für Fensterservice in der Region."
        />
      </Helmet>
      <div className="min-h-screen relative">
        {/* Floating Badge */}
        <div className="fixed top-32 md:top-24 right-4 z-50 animate-bounce">
          <UIBadge className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center gap-2">
            <Badge className="h-4 w-4" />
            <span className="font-semibold">Kostenlose Anfahrt bis 30.09.2025</span>
          </UIBadge>
        </div>

        <Navbar />
        <main>
          <section className="pt-40 pb-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 text-blue-600 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span>Baden bei Wien und Umgebung</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Fensterreparatur in Baden bei Wien – Ihr Spezialist für schnelle Hilfe
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Willkommen bei Fensterservice Rowo – Ihrem Experten für <strong>Fensterreparatur in Baden bei Wien</strong> und der gesamten Umgebung. Defekte Fenster und Türen können nicht nur den Wohnkomfort beeinträchtigen, sondern auch Sicherheitsrisiken darstellen. Deshalb bieten wir Ihnen einen <strong>24h Notdienst für Fenster</strong> und Türen an, der schnelle Hilfe garantiert.
                </p>

                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold mb-4">Unsere Services in Baden bei Wien auf einen Blick</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Schnelle Fensterreparatur innerhalb von 24 Stunden – auch Notdienst</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Wartung und Justierung von Fenster- und Türmechanismen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Einbruchschutz: Nachrüstung und Sicherheitserhöhung bei Fenstern</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Professionelle Abdichtung und Verbesserung der Wärmedämmung</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Fensterwartung zur Verlängerung der Lebensdauer Ihrer Fenster</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Reparatur von Holz-, Kunststoff- und Alufenstern</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-4">Warum Fensterservice Rowo?</h2>
                <p className="text-gray-700 mb-8">
                  Unser Team in Baden bei Wien zeichnet sich durch jahrelange Erfahrung, Fachwissen und eine enorme Einsatzbereitschaft aus. Wir wissen, dass bei einem defekten Fenster jede Minute zählt – darum sind wir schnell vor Ort, analysieren die Ursache genau und sorgen für eine nachhaltige Reparatur.
                </p>

                <h3 className="text-xl font-semibold mb-2">24h Fenster Notdienst in Baden bei Wien</h3>
                <p className="text-gray-700 mb-6">
                  Unser <strong>24h Fenster Notdienst</strong> in Baden bei Wien steht Ihnen auch nachts, am Wochenende und an Feiertagen zur Verfügung. Egal ob Glasbruch, defekte Schließmechanismen oder undichte Fenster: Wir helfen Ihnen schnell und zuverlässig.
                </p>

                <h3 className="text-xl font-semibold mb-2">Fenster abdichten und Energie sparen</h3>
                <p className="text-gray-700 mb-6">
                  Undichte Fenster können die Heizkosten in die Höhe treiben. Durch eine professionelle <strong>Fensterabdichtung in Baden bei Wien</strong> schützen Sie nicht nur Ihr Zuhause vor Witterungseinflüssen, sondern sparen langfristig bares Geld. Unsere Experten beraten Sie gerne!
                </p>

                <h3 className="text-xl font-semibold mb-2">Mehr Sicherheit durch Einbruchschutz</h3>
                <p className="text-gray-700 mb-6">
                  Wir rüsten Ihre Fenster auf Wunsch mit modernen Sicherheitskomponenten aus. Gerade in der heutigen Zeit ist ein wirksamer <strong>Einbruchschutz für Fenster in Baden bei Wien</strong> unverzichtbar. Vereinbaren Sie jetzt eine kostenlose Beratung.
                </p>

                <h2 className="text-2xl font-bold mb-4">Fensterarten, die wir reparieren:</h2>
                <ul className="list-disc list-inside mb-8 text-gray-700">
                  <li>Holzfenster – Pflege und Reparatur</li>
                  <li>Kunststofffenster – Dichtungen, Mechanik und Rahmen</li>
                  <li>Alufenster – Spezialist für robuste Systeme</li>
                  <li>Schiebefenster und Dachfenster</li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-xl shadow-md mb-8">
                  <h2 className="text-2xl font-bold mb-4">Jetzt kostenloses Angebot anfordern</h2>
                  <p className="text-gray-700 mb-6">
                    Kontaktieren Sie uns noch heute für eine individuelle Beratung rund um Ihren <strong>Fensterservice in Baden bei Wien</strong>. Wir erstellen Ihnen gerne ein unverbindliches Angebot und helfen Ihnen schnell weiter.
                  </p>
                  <div className="flex gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Jetzt Kontakt aufnehmen
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BadenBeiWien;