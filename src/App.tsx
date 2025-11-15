import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import About from "./components/home/About";
import WhyUs from "./components/home/WhyUs";
import Cobertura from "./components/home/Cobertura";
import Testimonials from "./components/home/Testimonials";
import ContactForm from "./components/home/ContactForm";
import FAQ from "./components/home/FAQ";
import Footer from "./components/layout/Footer";


function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Services /> 
      <About /> 
      <WhyUs />
      <Cobertura />
      <Testimonials/>
      <ContactForm />
      <FAQ />

      <Footer />


      <a
      href="https://wa.me/573246411165?text=Hola%2C%20vi%20su%20página%20web%20y%20necesito%20un%20servicio%20eléctrico.%20¿Me%20puede%20dar%20información%20por%20favor%3F"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-full shadow-xl hover:bg-green-700 transition text-lg font-bold"
    >
      WhatsApp
    </a>

    </>
  );
}

export default App;
