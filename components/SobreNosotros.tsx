import { motion } from "framer-motion";
import { Monitor, Heart, Target, Users } from "lucide-react";
import { AnimatedSection, staggerContainer } from "./AnimationUtils";

// Enhanced About Section
export function SobreNosotros() {
  return (
    <section id="sobre-nosotros" className="py-12 sm:py-20 bg-gradient-to-b from-black to-purple-900/10">
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
            Sobre <span className="text-[#6f26ff]">Nosotros</span>
          </motion.h2>
          <p className="text-lg sm:text-xl text-white/80 font-['Saira_Condensed:Light',_sans-serif]">
            ¿Qué nos hace diferentes?.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20 max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02, 
              rotateY: 2,
              boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)"
            }}
            className="bg-[rgba(255,255,255,0.03)] border border-[rgba(139,92,246,0.25)] rounded-xl p-6 sm:p-8 hover:bg-[rgba(255,255,255,0.05)] transition-all duration-500 cursor-pointer group shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)] hover:shadow-[0px_8px_30px_0px_rgba(139,92,246,0.3)]"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-['Roboto:Regular',_sans-serif] group-hover:text-violet-300 transition-colors">
              Quiénes Somos
            </h3>
            <p className="text-white/70 leading-relaxed font-['Saira_Condensed:Light',_sans-serif] group-hover:text-white/90 transition-colors">
              Somos la plataforma EdTech-HealthTech que convierte retos en proyectos escalables. 
              Transformamos cada desafío en oportunidades de impacto real.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02, 
              rotateY: -2,
              boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)"
            }}
            className="bg-[rgba(255,255,255,0.03)] border border-[rgba(139,92,246,0.25)] rounded-xl p-6 sm:p-8 hover:bg-[rgba(255,255,255,0.05)] transition-all duration-500 cursor-pointer group shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)] hover:shadow-[0px_8px_30px_0px_rgba(139,92,246,0.3)]"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-['Roboto:Regular',_sans-serif] group-hover:text-violet-300 transition-colors">
              Nuestra Misión
            </h3>
            <p className="text-white/70 leading-relaxed font-['Saira_Condensed:Light',_sans-serif] group-hover:text-white/90 transition-colors">
              Creemos que cada mujer puede resetear su futuro y crear valor exponencial. 
              Convertimos problemas en soluciones escalables que transforman sectores completos.
            </p>
          </motion.div>
        </div>

        {/* Feature grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto"
        >
          {[
            { title: "EdTech", desc: "Educación tecnológica innovadora", icon: Monitor },
            { title: "HealthTech", desc: "Soluciones de salud digital", icon: Heart },
            { title: "Impacto", desc: "Proyectos con impacto real", icon: Target },
            { title: "Mujeres", desc: "Diseñado por y para mujeres", icon: Users }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                rotateZ: index % 2 === 0 ? 1 : -1,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
              className="text-center p-4 sm:p-6 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 cursor-pointer group"
            >
              <motion.div
                className="mb-3 sm:mb-4 flex justify-center"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-violet-500 group-hover:text-violet-400 transition-colors" />
              </motion.div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors font-['Tomorrow:Medium',_sans-serif] tracking-[-0.088px]">
                {item.title}
              </h4>
              <p className="text-white/60 text-xs sm:text-sm group-hover:text-white/80 transition-colors font-['Saira_Condensed:Light',_sans-serif] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}