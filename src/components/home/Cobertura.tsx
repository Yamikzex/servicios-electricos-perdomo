import { MapPin } from "lucide-react";

export default function Cobertura() {
  const zonas = [
    "Bello",
    "Envigado",
    "Itagüí",
    "Sabaneta",
    "Copacabana",
    "Girardota",
    "La Estrella",
  ];

  return (
    <section className="py-20 bg-gray-50" id="cobertura">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Cobertura</h2>
        <p className="text-gray-600 mb-10">
          Llegamos rápidamente a tu ubicación. Operamos en toda el Área Metropolitana.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {zonas.map((zona, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-5 flex items-center gap-4 hover:shadow-xl transition"
            >
              <div className="p-3 bg-blue-100 rounded-full">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-lg font-medium">{zona}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
