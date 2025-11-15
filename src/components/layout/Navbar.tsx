import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Inicio", to: "hero" },
    { label: "Servicios", to: "servicios" },
    { label: "Sobre Nosotros", to: "nosotros" },    
    { label: "Por qué elegirnos", to: "ventajas" },
    { label: "Cobertura", to: "cobertura" },
    { label: "Testimonios", to: "testimonials" },
    { label: "Contacto", to: "contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* LOGO + NOMBRE */}
          <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
            {/* Puedes reemplazar el ícono por tu logo */}
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <img 
              src={logo} 
              alt="Logo Servicios Eléctricos Perdomo" 
              className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
            />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 leading-tight">
                Servicios Eléctricos
              </span>
              <span className="text-sm sm:text-base lg:text-lg font-semibold text-blue-600 leading-tight">
                Perdomo
              </span>
            </div>
          </div>

          {/* LINKS DESKTOP */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  spy={true}
                  duration={400}
                  offset={-80}
                  activeClass="text-blue-600 font-semibold"
                  className="px-3 py-2 text-sm xl:text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg cursor-pointer transition-all duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* BOTÓN HAMBURGUESA */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* MENÚ MOBILE */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={400}
              offset={-80}
              onClick={() => setOpen(false)}
              activeClass="bg-blue-50 text-blue-600 font-semibold"
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg cursor-pointer transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;