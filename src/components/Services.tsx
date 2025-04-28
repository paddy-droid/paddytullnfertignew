import React, { useState } from "react";
import {
  Square,
  Home,
  Check,
  Sun,
  Shield,
  Umbrella,
  DoorClosed,
  Wrench
} from "lucide-react";

/**
 * Optimierte Services‑Sektion mit "Mehr lesen"‑Buttons.
 * – Alle Styles sind inline gehalten, um maximale Kontrolle zu gewährleisten.
 * – Zusätzliche SEO‑optimierte Texte werden bei Bedarf eingeblendet.
 */
const Services = () => {
  const services = [
    {
      icon: DoorClosed,
      title: "Fenster- & Türreparatur",
      description:
        "Fachgerechte Reparatur von Schließmechanismen, Dichtungen und Rahmen für optimale Energieeffizienz und Sicherheit.",
      moreText: [
        "Unsere Spezialisten analysieren jede Undichtigkeit präzise und setzen auf ",
        { type: 'bold', text: 'hochwertige Ersatzteile' },
        ", um ",
        { type: 'bold', text: 'Wärmeverluste' },
        " dauerhaft zu reduzieren. Durch justierte Beschläge und erneuerte Dichtprofile steigern wir den ",
        { type: 'bold', text: 'Einbruchschutz' },
        " und senken spürbar Ihre ",
        { type: 'bold', text: 'Heizkosten' },
        " – perfekt für nachhaltiges Wohnen und besseres Raumklima."
      ]
    },
    {
      icon: Sun,
      title: "Sonnenschutzlösungen",
      description:
        "Reparatur und Maßanfertigung von Sonnenschutzsystemen für optimale Licht- und Wärmeregulierung.",
      moreText: [
        "Von modernen Raffstores bis zu klassischen Markisen bieten wir ",
        { type: 'bold', text: 'passgenaue Lösungen' },
        ", die ",
        { type: 'bold', text: 'UV-Strahlung' },
        " filtern und Räume angenehm temperieren. Mit ",
        { type: 'bold', text: 'langlebigen Stoffen' },
        " und smarter Automatisierung schützen wir vor Überhitzung, verlängern die Lebensdauer Ihres Mobiliars und steigern gleichzeitig den ",
        { type: 'bold', text: 'energetischen Gesamtwert' },
        " Ihrer Immobilie."
      ]
    },
    {
      icon: Shield,
      title: "Insektenschutzsysteme",
      description:
        "Individuelle Insektenschutzgitter mit hochwertigen Materialien für optimalen Schutz bei voller Luftdurchlässigkeit.",
      moreText: [
        { type: 'bold', text: 'Millimetergenaue Maßanfertigungen' },
        " aus beschichtetem Aluminium sorgen für ",
        { type: 'bold', text: 'höchste Stabilität' },
        " und ungestörten Luftaustausch. Pulverbeschichtete Rahmen widerstehen Witterungseinflüssen, während feinmaschige Gewebe selbst Pollen abhalten. So genießen Sie ",
        { type: 'bold', text: 'frische Luft ohne Insekten' },
        " – ideal für Allergiker und gesundes Wohnen."
      ]
    },
    {
      icon: Square,
      title: "Rollladenservice",
      description:
        "Wartung und Reparatur von Rollläden für verbesserten Einbruchschutz und Energieeffizienz.",
      moreText: [
        "Ob Gurtband‑Wechsel, Motor‑Nachrüstung oder Dämmung der Rollladenkästen – wir optimieren Ihre Anlage für ",
        { type: 'bold', text: 'leises Laufverhalten' },
        " und ",
        { type: 'bold', text: 'maximale Wärmedämmung' },
        ". Moderne ",
        { type: 'bold', text: 'Sicherheitsprofile' },
        " erschweren unbefugtes Öffnen, während smarte Steuerungen den Komfort erhöhen und Tageslicht optimal nutzen."
      ]
    },
    {
      icon: Wrench,
      title: "Wartungsservice",
      description:
        "Präzise Einstellarbeiten für Energieeinsparung, verbesserten Schallschutz und erhöhte Sicherheit.",
      moreText: [
        { type: 'bold', text: 'Regelmäßige Wartung' },
        " verhindert kostenintensive Folgeschäden. Wir prüfen Beschläge, tauschen Verschleißteile aus und kalibrieren Fensterscheren millimetergenau. Dadurch schließen Fenster wieder dicht, reduzieren Zugluft sowie Lärm und gewährleisten langfristig die ",
        { type: 'bold', text: 'Herstellergarantie' },
        " Ihrer Elemente."
      ]
    },
    {
      icon: Home,
      title: "Service für Hausverwaltungen",
      description:
        "Individuelle Servicepakete für Geschäftskunden und Betreuung von Großobjekten.",
      moreText: [
        "Als ",
        { type: 'bold', text: 'zuverlässiger Partner' },
        " übernehmen wir die komplette Koordination von ",
        { type: 'bold', text: 'Wartungszyklen' },
        ", ",
        { type: 'bold', text: 'Notfallreparaturen' },
        " und Modernisierungsmaßnahmen. ",
        { type: 'bold', text: 'Digitale Berichtserstellung' },
        ", ",
        { type: 'bold', text: 'transparente Kostenaufstellungen' },
        " und feste Ansprechpartner sorgen für ",
        { type: 'bold', text: 'effiziente Prozesse' },
        " – von der Einliegerwohnung bis zur Wohnanlage."
      ]
    }
  ];

  // State speichert, welche Karten erweitert sind
  const [openIndex, setOpenIndex] = useState(null);

  const cardStyle = {
    border: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
    padding: "24px",
    borderRadius: "14px",
    transition: "box-shadow 0.3s ease",
    backgroundColor: "#ffffff"
  };

  const iconWrapperStyle = {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    backgroundColor: "#dbeafe", // Tailwind blue-100
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px"
  };

  const buttonStyle = {
    marginTop: "16px",
    background: "none",
    border: "none",
    color: "#1e3a8a", // Tailwind blue-800
    fontWeight: 600,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: 0,
    fontSize: "0.95rem"
  };

  return (
    <section
      id="services"
      style={{ padding: "80px 0", backgroundColor: "#f9fafb" }} // Tailwind gray-50
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 16px" }}>
        <h2
          style={{
            fontSize: "2.25rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "12px"
          }}
        >
          Unsere Leistungen im Überblick
        </h2>
        <p
          style={{
            maxWidth: "768px",
            margin: "0 auto 48px auto",
            textAlign: "center",
            color: "#4b5563" // Tailwind gray-600
          }}
        >
          Vollumfängliche Reparatur‑ und Serviceleistungen mit gründlicher Ursachenforschung für nachhaltige Ergebnisse
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px"
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 6px 18px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.07)";
                }}
              >
                <div style={iconWrapperStyle} aria-hidden="true">
                  <Icon size={24} strokeWidth={2} color="#2563eb" /* blue-600 */ />
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px" }}>
                  {service.title}
                </h3>
                <p style={{ color: "#4b5563" }}>{service.description}</p>

                {isOpen && (
                  <p style={{ color: "#374151", marginTop: "12px" }}>
                    {service.moreText.map((item, textIndex) => {
                      if (typeof item === 'string') {
                        return item;
                      } else if (item.type === 'bold') {
                        return <strong key={textIndex}>{item.text}</strong>;
                      }
                      return null;
                    })}
                  </p>
                )}

                <button
                  style={buttonStyle}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {isOpen ? "Weniger anzeigen" : "Mehr lesen"}
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
