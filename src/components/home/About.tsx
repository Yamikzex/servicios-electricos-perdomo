import aboutImg from "../../assets/images/electricista_como_profesion.jpg";

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Imagen artística profesional */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-3xl blur-xl"></div>
          <img
            src={aboutImg}
            alt="Electricista profesional trabajando"
            className="relative rounded-3xl shadow-xl"
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Sobre Nosotros
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Somos una empresa de soluciones eléctricas con más de{" "}
            <span className="font-semibold text-blue-600">3 años de experiencia </span> 
            brindando servicios profesionales, seguros y confiables en instalaciones, reparaciones y mantenimiento eléctrico en Colombia.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Nuestro compromiso es ofrecer un trabajo impecable, cumpliendo con los 
            estándares del <span className="font-semibold">RETIE</span> y garantizando la seguridad 
            de cada cliente. Trabajamos con dedicación, responsabilidad y transparencia.
          </p>

          <ul className="text-gray-700 space-y-3">
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">✔</span>
              Técnicos certificados y capacitados.
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">✔</span>
              Trabajo garantizado y materiales de calidad.
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">✔</span>
              Emergencias y servicio el mismo día.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
