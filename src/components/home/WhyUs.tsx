import { CheckCircle, Shield, Zap, Clock } from "lucide-react";

export default function WhyUs() {
  return (
    <section className="py-20 bg-gray-50" id="ventajas">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          ¿Por qué elegirnos?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-14">
          Brindamos soluciones eléctricas profesionales, garantizadas y con un servicio al cliente excepcional.
          Nuestro compromiso es tu seguridad y tranquilidad.
        </p>

        <div className="grid md:grid-cols-4 gap-10">
          {/* Tarjeta 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Certificados RETIE</h3>
            <p className="text-gray-600 mt-2">
              Cumplimos con todas las normas y estándares eléctricos exigidos en Colombia.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Trabajos Garantizados</h3>
            <p className="text-gray-600 mt-2">
              Cada instalación o reparación cuenta con garantía y materiales de alta calidad.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Expertos en Diagnóstico</h3>
            <p className="text-gray-600 mt-2">
              Detectamos fallas rápidamente y ofrecemos soluciones precisas y seguras.
            </p>
          </div>

          {/* Tarjeta 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Servicio Rápido</h3>
            <p className="text-gray-600 mt-2">
              Atendemos emergencias y servicios el mismo día, en la mayoría de los casos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
