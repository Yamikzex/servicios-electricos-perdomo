import { Phone, MessageCircle, Mail, MapPin, Zap } from "lucide-react";

const Footer = () => {
  const contactInfo = [
    { icon: MessageCircle, text: "WhatsApp: +57 3246411165", href: "https://wa.me/3246411165" },
    { icon: Mail, text: "servicioselectricosperdomo@gmail.com", href: "mailto:servicioselectricosperdomo@gmail.com" },
  ];

  const cities = [
    "Medellín", "Bello", "Envigado", "Itagüí", 
    "Sabaneta", "Copacabana", "Girardota", "La Estrella"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Sección principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Columna 1: Sobre nosotros */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Servicios Eléctricos</h3>
                <p className="text-sm font-semibold text-blue-400">Perdomo</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Electricista profesional con más de 3 años de experiencia 
              brindando soluciones eléctricas seguras, certificadas y a domicilio 
              en Medellín y el Área Metropolitana.
            </p>
          </div>

          {/* Columna 2: Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-400" />
              Contacto
            </h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <item.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                  <span className="text-sm">{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Columna 3: Cobertura */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              Cobertura
            </h3>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-xs font-medium hover:bg-gray-700 transition-colors"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Servicios Eléctricos Perdomo. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">
                Política de Privacidad
              </a>
              <span>•</span>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;