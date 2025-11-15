import { Zap, Home, Wrench, Check } from "lucide-react";

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
          Servicios Eléctricos Profesionales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Acometidas */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            {/* Header con ícono alineado */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-blue-700">
                Acometidas Eléctricas
              </h3>
              <Zap className="text-blue-600" size={36} />
            </div>

            <p className="text-gray-700 mb-4">
              Instalación y regularización de acometidas residenciales y comerciales cumpliendo normas técnicas.
            </p>

            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <Check size={18} className="text-blue-600" /> Conexión a la red principal
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} className="text-blue-600" /> Instalación de medidores
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} className="text-blue-600" /> Tableros y protecciones
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} className="text-blue-600" /> Trámites legales y RETIE
              </li>
            </ul>
          </div>

          {/* Instalaciones Residenciales */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-blue-700">
                Instalaciones Residenciales
              </h3>
              <Home className="text-blue-600" size={36} />
            </div>

            <p className="text-gray-700 mb-4">
              Diseño e instalación completa de sistemas eléctricos para hogares seguros y eficientes.
            </p>

            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <Check size={18} className="text-blue-600" /> Cableado estructurado
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} className="text-blue-600" /> Iluminación LED interior y exterior
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} className="text-blue-600" /> Tomas, breakers y distribución
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} className="text-blue-600" /> Optimización de consumo energético
              </li>
            </ul>
          </div>

          {/* Mantenimiento */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-blue-700">
                Mantenimiento y Reparación
              </h3>
              <Wrench className="text-blue-600" size={36} />
            </div>

            <p className="text-gray-700 mb-4">
              Diagnóstico y solución de problemas eléctricos con respuesta rápida y garantía.
            </p>

            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center gap-2">
                <Check size={18} className="text-blue-600" /> Revisión preventiva
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} className="text-blue-600" /> Detección de fallas y cortocircuitos
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} className="text-blue-600" /> Reparaciones certificadas
              </li>
              <li className="flex items-center gap-2">
                <Check size={18} className="text-blue-600" /> Servicio de emergencias 24/7
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
