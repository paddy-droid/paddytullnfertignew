import { Calendar, MapPin, Phone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <figure>
            <img
              src="/lovable-uploads/585cf4ba-c4bf-4fb8-af32-7423a2762d7d.png"
              alt="Fensterservice Techniker repariert professionell einen Fenstergriff"
              loading="lazy"
              className="rounded-xl shadow-2xl w-full h-auto"
              width="600"
              height="400"
              loading="lazy"
            />
          </figure>

          <div itemScope itemType="http://schema.org/LocalBusiness">
            <meta itemProp="name" content="Fensterservice Rowo" />
            <meta itemProp="image" content="/lovable-uploads/b5f2e7bb-445a-4ca8-b677-0095b7b2f820.png" />

            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6">
              Über Fensterservice Rowo
            </h2>

            <div itemProp="description">
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong>Fensterservice Rowo</strong> wurde im Jahr <strong>2023</strong> von <strong>Robin Brezina</strong> und <strong>Wolfgang Winkler</strong> gegründet. Mit über <strong>10 Jahren Erfahrung</strong> im Bereich <strong>Fensterreparatur</strong>, <strong>Türservice</strong> sowie <strong>Sonnenschutz- und Insektenschutzsysteme</strong> stehen wir für Qualität, Kompetenz und Kundennähe in <strong>Wien</strong> und <strong>Niederösterreich</strong>. Unser Ziel ist es, nachhaltige und langlebige Lösungen für Ihr Zuhause oder Ihre Immobilie zu schaffen.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ihre Vorteile mit Fensterservice Rowo
            </h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2" aria-hidden="true">✓</span>
                <span><strong>Mehr als 10 Jahre Erfahrung</strong> im professionellen Fensterservice</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2" aria-hidden="true">✓</span>
                <span><strong>Gründliche Ursachenanalyse</strong> für dauerhafte Reparaturergebnisse</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2" aria-hidden="true">✓</span>
                <span><strong>Starkes Partnernetzwerk</strong> für begleitende Handwerksleistungen</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2" aria-hidden="true">✓</span>
                <span><strong>Nachhaltigkeit, Komfort und Sicherheit</strong> stehen im Mittelpunkt unserer Arbeit</span>
              </li>
            </ul>

            <div className="space-y-4">
              <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress" className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600" aria-hidden="true" />
                <span>
                  <span itemProp="streetAddress">Am Wiesengrund 1</span>, <span itemProp="postalCode">3452</span> <span itemProp="addressLocality">Michelndorf</span>
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-600" aria-hidden="true" />
                <a href="tel:+436644351622" itemProp="telephone" className="hover:underline text-blue-800">
                  +43 (0)664 435 16 22
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-blue-600" aria-hidden="true" />
                <span itemProp="openingHours">Mo–Do 08:00–17:00 Uhr | Fr 08:00–12:00 Uhr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
