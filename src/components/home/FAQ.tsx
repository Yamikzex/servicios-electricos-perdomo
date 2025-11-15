import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    pregunta: "¿Qué tan rápido puedo solicitar un servicio?",
    respuesta:
      "Una vez te comuniques con nuestras líneas de atención, nuestros coordinadores programarán el servicio en el menor tiempo posible de acuerdo a disponibilidad en agenda. Usualmente se programa para el mismo día que lo solicitas y no tardamos más de 1 día para agendarte.",
  },
  {
    pregunta: "¿Trabajan a domicilio?",
    respuesta:
      "Sí, atendemos toda el Área Metropolitana: Medellín, Bello, Envigado, Itagüí, Sabaneta, Copacabana, Girardota y La Estrella.",
  },
  {
    pregunta: "¿El personal es calificado?",
    respuesta:
      "Si. Contamos con personal altamente calificado en diferentes especialidades.",
  },
  {
    pregunta: "¿Ofrecen garantía?",
    respuesta:
      "Todos nuestros trabajos cuentan con garantía dependiendo del tipo de instalación y los materiales utilizados.",
  },
    {
    pregunta: "¿Como contrato sus servicios?",
    respuesta:
      "De forma sencilla puedes llenar el formulario en nuestro sitio web y nos contactaremos contigo lo más pronto posible o directamente escribiendonos a nuestro WhatsApp presionando el icono.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Preguntas Frecuentes
        </h2>

        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;

          return (
            <div key={i} className="border-b py-4">

              {/* BOTÓN */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-medium">{faq.pregunta}</span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* CONTENEDOR ANIMADO */}
              <div
                className={`
                  overflow-hidden transition-all duration-300
                  ${isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}
                `}
              >
                <p className="text-gray-600 transform transition-all duration-300">
                  {faq.respuesta}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
