import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "88f66bec-faca-4bd0-a947-46dc8b31d80f");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (result.success) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
  <section
    id="contacto"
    className="py-24 bg-gradient-to-b from-gray-100 to-gray-200"
  >
    <div className="max-w-6xl mx-auto px-6">
      {/* TÍTULO */}
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Solicita tu <span className="text-blue-600">Cotización Gratis</span>
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        Respuesta rápida, atención profesional y servicios garantizados en el área metropolitana.
      </p>

      {/* FORMULARIO ANCHO */}
      <form
        onSubmit={handleSubmit}
        className="
          bg-white
          shadow-xl
          rounded-3xl
          p-10
          border border-gray-200
          space-y-7
          mx-auto
          w-full
          max-w-4xl   /* 📌 ESTA ES LA CLAVE DEL ANCHO */
        "
      >
        {/* Campo */}
        <div className="relative">
          <input
            type="text"
            name="name"
            required
            className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 peer"
          />
          <label className="absolute left-4 top-1 text-gray-500 text-sm transition-all peer-focus:text-blue-600">
            Nombre completo
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            name="phone"
            required
            className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 peer"
          />
          <label className="absolute left-4 top-1 text-gray-500 text-sm peer-focus:text-blue-600">
            Teléfono / WhatsApp
          </label>
        </div>

        <div className="relative">
          <select
            required
            name="service"
            className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Seleccionar servicio...</option>
            <option>Acometidas eléctricas</option>
            <option>Instalación residencial</option>
            <option>Mantenimiento y reparación</option>
            <option>Iluminación</option>
            <option>Emergencias 24/7</option>
          </select>
        </div>

        <div className="relative">
          <textarea
            required
            rows={4}
            name="message"
            className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 peer"
          ></textarea>
          <label className="absolute left-4 top-1 text-gray-500 text-sm peer-focus:text-blue-600">
            Detalles del servicio
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition shadow"
        >
          Enviar solicitud
        </button>

        {/* Estado */}
        {status === "success" && (
          <p className="text-green-600 font-semibold text-center">
            ¡Enviado con éxito! Te contactaremos pronto.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-semibold text-center">
            Ocurrió un error. Intenta nuevamente.
          </p>
        )}
      </form>
    </div>
  </section>
);

}
