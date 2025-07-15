import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import imgLogo from "../components/assets/Logo.png";
import { Toaster } from "../components/ui/sonner";

// Import components
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { SobreNosotros } from "../components/SobreNosotros";
import { Innova } from "../components/Innova";
import { Contacto } from "../components/Contacto";
import { Proyectos } from "../components/Proyectos";
import { Footer } from "../components/Footer";



export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <img
            src={imgLogo}
            alt="IN RESET"
            className="h-8 mx-auto"
            style={{ maxHeight: '40px', width: 'auto', objectFit: 'contain' }}
          />
          <p className="text-white/60 mt-2 text-sm font-['Saira_Condensed:Light',_sans-serif]">
            Cargando experiencia...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white min-h-screen"
    >
      <Nav />
      <main>
        <Hero />
        <SobreNosotros />
        <Innova />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
      <Toaster />
    </motion.div>
  );
}