import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Seite nicht gefunden | Fensterservice Rowo</title>
        <meta
          name="description"
          content="Die angeforderte Seite konnte nicht gefunden werden. Finden Sie hier Links zu unseren Services in Ihrer Region."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-blue-600 mb-4">404</h1>
            <p className="text-2xl md:text-3xl text-gray-800 mb-8">Seite nicht gefunden</p>
            <p className="text-lg text-gray-700 mb-8">
              Entschuldigung, die von Ihnen angeforderte Seite existiert nicht.
              Vielleicht finden Sie über die folgenden Links, was Sie suchen:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link to="/" className="text-blue-600 hover:underline text-lg">
                Startseite
              </Link>
              <Link to="/wien" className="text-blue-600 hover:underline text-lg">
                Fensterreparatur Wien
              </Link>
              <Link to="/tulln" className="text-blue-600 hover:underline text-lg">
                Fensterreparatur Tulln
              </Link>
              <Link to="/krems" className="text-blue-600 hover:underline text-lg">
                Fensterreparatur Krems
              </Link>
              <Link to="/baden-bei-wien" className="text-blue-600 hover:underline text-lg">
                Fensterreparatur Baden bei Wien
              </Link>
              <Link to="/klosterneuburg" className="text-blue-600 hover:underline text-lg">
                Fensterreparatur Klosterneuburg
              </Link>
               <Link to="/st-poelten" className="text-blue-600 hover:underline text-lg">
                Fensterreparatur St. Pölten
              </Link>
            </div>
            <p className="text-gray-700">
              Wenn Sie weitere Hilfe benötigen, kontaktieren Sie uns bitte.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
