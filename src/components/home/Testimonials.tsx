import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonios = [
    {
      nombre: "Carlos Restrepo",
      comentario:
        "Excelente servicio. Llegaron rápido, revisaron la instalación y solucionaron el problema sin cobrar de más. Muy profesionales.",
      ubicacion: "Bello",
      estrellas: 5,
      foto: "https://i.pravatar.cc/100?img=12",
    },
    {
      nombre: "Laura González",
      comentario:
        "Contraté instalación completa para mi apartamento y quedó impecable. Todo ordenado, seguro y con certificación. Súper recomendados.",
      ubicacion: "Envigado",
      estrellas: 5,
      foto: "https://i.pravatar.cc/100?img=32",
    },
    {
      nombre: "Julián Herrera",
      comentario:
        "Tuve una emergencia en la noche por un corto y respondieron en minutos. Servicio rápido y confiable.",
      ubicacion: "Medellín",
      estrellas: 5,
      foto: "https://i.pravatar.cc/100?img=56",
    },
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-5">Testimonios</h2>
        <p className="text-gray-600 mb-14">
          Lo que dicen nuestros clientes sobre la calidad, puntualidad y profesionalismo de nuestro servicio.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 shadow-md rounded-2xl p-8 text-left hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={t.foto}
                  alt={t.nombre}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{t.nombre}</h3>
                  <p className="text-sm text-gray-500">{t.ubicacion}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-5 leading-relaxed">
                “{t.comentario}”
              </p>

              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: t.estrellas }).map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
