import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonios = [
    {
      nombre: "Sonia Caballero",
      comentario:
        "Excelente, hace muy bien su labor. Tiene mucho conocimiento y muy responsable.",
      ubicacion: "Itagüí",
      estrellas: 5,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjX4Pyhh-icaU7TICqOZAOvIijZFABZogr4E1Q3JNjOZ2y3u_po=s36-c-rp-mo-br100",
    },
    {
      nombre: "Jorge Ivan Diez Lopera",
      comentario:
        "Honesto y trabajo certificado por norma. Recomendado",
      ubicacion: "Itagüí",
      estrellas: 5,
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjXLe-qUA89uGQNLaF7vbm0v67vKdCJ5IXz_9k4ysBFZzJG76U8t=s36-c-rp-mo-ba2-br100",
    },
    {
      nombre: "Marleny Ruiz Ardila",
      comentario:
        "Muy responsable, un excelente profesional, todo el trabajo que hizo quedó exelente, muy recomendable",
      ubicacion: "Itagüí",
      estrellas: 5,
      foto: "https://lh3.googleusercontent.com/a/ACg8ocJonYdhW9EbYgOfOV6jscBtk4Nih7u8dXEYaFUFhyWi-PkLvg=s36-c-rp-mo-br100",
    },
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-5">Testimonios</h2>
        <p className="text-gray-600 mb-6">
          Lo que dicen nuestros clientes sobre la calidad, puntualidad y profesionalismo de nuestro servicio.
        </p>

        {/* ⭐ Botón PRO */}
        <a
          href="https://www.google.com/maps/place/Servicios+El%C3%A9ctricos+Perdomo/@6.1708824,-75.620087,17z/data=!4m8!3m7!1s0x2d0bf6b0c8a2d7cd:0x2bd007ddb433e509!8m2!3d6.1708771!4d-75.6175121!9m1!1b1!16s%2Fg%2F11mm0845dg?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-12 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow hover:bg-yellow-500 transition"
        >
          Ver todas las reseñas en Google
        </a>

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