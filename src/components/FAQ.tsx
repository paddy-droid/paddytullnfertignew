import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquareQuote } from "lucide-react";

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MessageSquareQuote className="h-12 w-12 text-blue-600" aria-hidden="true" />
          </div>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Häufig gestellte Fragen rund um unseren Fenster- und Türservice
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Finden Sie Antworten zu unseren Dienstleistungen für Fensterreparaturen, Türservices und Wartungen in Wien und Niederösterreich.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6">
                Welche Regionen in Wien und Niederösterreich decken Sie mit Ihrem Fenster- und Türservice ab?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                Unser professioneller Fenster- und Türservice ist flächendeckend in Wien sowie in ganz Niederösterreich verfügbar. Ob Sie in <strong>Wien-Döbling</strong>, <strong>Floridsdorf</strong>, <strong>Mödling</strong>, <strong>Baden</strong>, <strong>St. Pölten</strong> oder <strong>Wiener Neustadt</strong> wohnen – unser erfahrenes Team ist schnell und zuverlässig für Sie zur Stelle.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6">
                Wie schnell ist Ihr Notdienst für Fenster- und Türreparaturen verfügbar?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                Unser <strong>24/7-Notdienst</strong> in Wien und Niederösterreich garantiert Ihnen eine rasche Hilfe im Ernstfall. In der Regel sind wir innerhalb von <strong>60 Minuten</strong> bei Ihnen vor Ort – sei es bei einem kaputten Fenster, einem Defekt an der Haustür oder einem sonstigen Problem. Verlassen Sie sich auf unsere schnelle Reaktionszeit und unsere fachkundige Hilfe.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6">
                Welche Arten von Fenstern und Türen reparieren Sie?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                Unser Team verfügt über umfassende Erfahrung mit <strong>Kunststofffenstern</strong>, <strong>Holzfenstern</strong>, <strong>Aluminiumfenstern</strong> sowie modernen <strong>Drehkipp-Fenstern</strong> und <strong>Schiebetüren</strong>. Auch bei <strong>Rollläden</strong> oder <strong>historischen Fenstersystemen</strong> finden wir schnelle, fachgerechte Lösungen für Ihre Reparaturbedürfnisse.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6">
                Bieten Sie auch regelmäßige Wartungen für Fenster und Türen an?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                Ja, unser umfassender <strong>Wartungsservice</strong> trägt wesentlich zur <strong>Langlebigkeit</strong> und optimalen Funktion Ihrer Fenster und Türen bei. Wir prüfen Beschläge, Dichtungen und Mechanik sorgfältig, beseitigen kleine Mängel sofort und führen eine gründliche Reinigung durch. Eine regelmäßige Wartung spart langfristig Kosten und erhöht die Energieeffizienz Ihres Hauses.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6">
                Mit welchen Kosten muss ich bei einer Fenster- oder Türreparatur rechnen?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                Die <strong>Reparaturkosten</strong> für Fenster oder Türen sind abhängig vom Umfang der Arbeiten und den eventuell benötigten Ersatzteilen. Wir legen Wert auf <strong>faire und transparente Preise</strong> und bieten Ihnen vor Arbeitsbeginn einen kostenlosen Kostenvoranschlag an. Bei Inanspruchnahme unseres 24-Stunden-Notdienstes gelten gesonderte Konditionen, die wir Ihnen gerne individuell mitteilen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6">
                Haben Sie spezielle Angebote für Hausverwaltungen und Immobilienbesitzer?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                Ja, für <strong>Hausverwaltungen</strong> und <strong>Immobilieneigentümer</strong> bieten wir attraktive <strong>Servicepakete</strong> an. Dazu gehören priorisierte Bearbeitungszeiten, ein persönlicher Ansprechpartner sowie Mengenrabatte bei regelmäßigen Wartungen und Reparaturen. Unsere Angebote sind individuell auf Ihre Anforderungen zugeschnitten – gerne erstellen wir Ihnen ein unverbindliches Konzept.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
