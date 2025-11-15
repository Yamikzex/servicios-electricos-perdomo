import heroImg from "../../assets/images/hero-electrician.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* TEXT */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Electricista Profesional
            <span className="block text-blue-600 mt-2">
              Instalaciones, Acometidas y Reparaciones
            </span>
          </h1>

          <p className="text-lg text-gray-700 max-w-md">
            Más de 3 años de experiencia brindando soluciones eléctricas seguras,
            certificadas y a domicilio. Calidad y garantía en cada trabajo.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://wa.me/573246411165?text=Hola%2C%20vi%20su%20página%20web%20y%20necesito%20un%20servicio%20eléctrico.%20¿Me%20puede%20dar%20información%20por%20favor%3F"
              target="_blank"
              className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition shadow-md"
            >
              WhatsApp
            </a>

            <Link
              to="servicios"
              smooth={true}
              duration={400}
              className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-md"
            >
              Ver Servicios
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Técnico electricista trabajando"
            className="rounded-3xl shadow-xl w-full max-w-lg border border-gray-200"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
