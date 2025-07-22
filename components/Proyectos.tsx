import { motion } from "framer-motion";
import { AnimatedSection, fadeInLeft, fadeInRight } from "./AnimationUtils";

import imgBackground from "./assets/Background.png";
import imgBackground1 from "./assets/Background2.png";

export function Proyectos() {
  return (
    <section id="proyectos" className="py-12 sm:py-20 bg-gradient-to-b from-black to-purple-900/10">
      <div className="container mx-auto px-4 sm:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 font-['Saira_Condensed:Light',_sans-serif] tracking-[-0.96px]"
            whileInView={{ 
              backgroundPosition: ["0% 50%", "100% 50%"],
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(90deg, #ffffff, #8b5cf6, #ffffff)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Nuestros <span className="text-[#6f26ff]">Proyectos</span>
          </motion.h2>
          <p className="text-lg sm:text-xl text-white/80 font-['Saira_Condensed:Light',_sans-serif]">
            Soluciones que transforman sectores completos
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[rgba(255,255,255,0.03)] border border-[rgba(139,92,246,0.25)] rounded-xl p-8 hover:bg-[rgba(255,255,255,0.05)] transition-all duration-500 group shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)]"
            style={{
              backgroundImage: `linear-gradient(130.149deg, rgba(0, 0, 0, 0.7) 0%, rgba(139, 92, 246, 0.1) 100%), url('${imgBackground}')`,
              backgroundSize: 'cover'
            }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors font-['Roboto:Bold',_sans-serif]">
                EdTech Platform
              </h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors font-['Saira_Condensed:Light',_sans-serif]">
                Plataforma educativa integral que conecta aprendizaje, tecnología y oportunidades reales 
                para el empoderamiento femenino en el sector tech.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {["React", "AI/ML", "Blockchain", "Analytics"].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[rgba(255,255,255,0.03)] border border-[rgba(139,92,246,0.25)] rounded-xl p-8 hover:bg-[rgba(255,255,255,0.05)] transition-all duration-500 group shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)]"
            style={{
              backgroundImage: `linear-gradient(130.149deg, rgba(0, 0, 0, 0.7) 0%, rgba(139, 92, 246, 0.1) 100%), url('${imgBackground1}')`,
              backgroundSize: 'cover'
            }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors font-['Roboto:Bold',_sans-serif]">
                HealthTech Solutions
              </h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors font-['Saira_Condensed:Light',_sans-serif]">
                Ecosistema de salud digital especializado en bienestar femenino, 
                combinando telemedicina, IA y análisis predictivo.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {["IoT", "Telemedicina", "Data Science", "Mobile"].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}