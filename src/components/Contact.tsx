
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Kontaktieren Sie uns</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Nutzen Sie unseren 24-Stunden-Service oder vereinbaren Sie einen kostenlosen Beratungstermin
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div itemScope itemType="http://schema.org/LocalBusiness">
              <meta itemProp="name" content="Fensterservice Rowo" />
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">Standort</h3>
                  <address itemProp="address" itemScope itemType="http://schema.org/PostalAddress" className="text-gray-600 not-italic">
                    <span itemProp="streetAddress">Am Wiesengrund 1</span>, <span itemProp="postalCode">3452</span> <span itemProp="addressLocality">Michelndorf</span>
                  </address>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">Telefon</h3>
                  <p className="text-gray-600">
                    <a href="tel:+43664435162" itemProp="telephone" className="hover:underline">+43 664 435 1622</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">E-Mail</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@fensterservice-rowo.at" itemProp="email" className="hover:underline">info@fensterservice-rowo.at</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-blue-600 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold mb-1">Öffnungszeiten</h3>
                  <div itemProp="openingHours" content="Mo-Th 08:00-17:00">
                    <p className="text-gray-600">Mo–Do: 08:00-17:00</p>
                  </div>
                  <div itemProp="openingHours" content="Fr 08:00-12:00">
                    <p className="text-gray-600">Fr: 08:00-12:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="w-full">Jetzt unverbindlich anfragen!</Button>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Standort von Fensterservice Rowo in Michelndorf"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43264.93207327197!2d16.02968877789167!3d48.29164877131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d06ab78c3b7f3%3A0x13bf4f7c80397c25!2sMichelndorf!5e0!3m2!1sen!2sat!4v1682452988849!5m2!1sen!2sat"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
