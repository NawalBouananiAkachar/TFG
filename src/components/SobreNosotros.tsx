import { motion } from "framer-motion";
import { Monitor, Heart, Target, Users } from "lucide-react";
import { AnimatedSection, fadeInUp, fadeInLeft, fadeInRight } from "./AnimationUtils";

// Sobre Nosotros Section with enhanced animations and layout
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
            Pioneras en EdTech-HealthTech para el empoderamiento femenino
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-['Roboto:Bold',_sans-serif]">
              Nuestra <span className="text-violet-400">Misión</span>
            </h3>
            <p className="text-white/80 leading-relaxed font-['Saira_Condensed:Light',_sans-serif] text-base sm:text-lg">
              Transformamos la educación tecnológica creando <strong className="text-violet-300">ecosistemas inmersivos</strong> donde 
              las mujeres no solo aprenden, sino que se empoderan para liderar el cambio en sus industrias.
            </p>
            <p className="text-white/80 leading-relaxed font-['Saira_Condensed:Light',_sans-serif] text-base sm:text-lg">
              Combinamos <strong className="text-violet-300">tecnología de vanguardia</strong> con metodologías 
              innovadoras para crear experiencias de aprendizaje que generan impacto real y duradero.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 p-6 rounded-xl border border-violet-500/30"
            >
              <h4 className="text-lg font-bold text-white mb-2 font-['Tomorrow:Medium',_sans-serif]">Impacto Medible</h4>
              <p className="text-violet-200 text-sm font-['Saira_Condensed:Light',_sans-serif]">
                Más de 500 mujeres formadas | 15+ proyectos escalados | 8 premios internacionales
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-['Roboto:Bold',_sans-serif]">
              Nuestra <span className="text-violet-400">Visión</span>
            </h3>
            <p className="text-white/80 leading-relaxed font-['Saira_Condensed:Light',_sans-serif] text-base sm:text-lg">
              Ser la <strong className="text-violet-300">plataforma de referencia global</strong> que conecta 
              educación, tecnología y bienestar, creando una nueva generación de líderes femeninas 
              en el sector tech.
            </p>
            <p className="text-white/80 leading-relaxed font-['Saira_Condensed:Light',_sans-serif] text-base sm:text-lg">
              Construimos puentes entre el <strong className="text-violet-300">potencial individual</strong> y 
              las oportunidades del mercado, transformando la industria desde dentro.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-xl border border-purple-500/30"
            >
              <h4 className="text-lg font-bold text-white mb-2 font-['Tomorrow:Medium',_sans-serif]">Alcance Global</h4>
              <p className="text-purple-200 text-sm font-['Saira_Condensed:Light',_sans-serif]">
                Presencia en 12 países | Comunidad de 2,000+ profesionales | Red de 50+ empresas partner
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced values grid with better responsive design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {[
            { 
              icon: Monitor, 
              title: "Innovación", 
              desc: "Tecnología cutting-edge aplicada a metodologías educativas disruptivas", 
              color: "from-blue-500 to-cyan-500" 
            },
            { 
              icon: Heart, 
              title: "Empoderamiento", 
              desc: "Desarrollamos confianza, liderazgo y capacidades técnicas reales", 
              color: "from-violet-500 to-purple-500" 
            },
            { 
              icon: Target, 
              title: "Impacto", 
              desc: "Resultados medibles en carreras profesionales y proyectos escalables", 
              color: "from-emerald-500 to-teal-500" 
            },
            { 
              icon: Users, 
              title: "Comunidad", 
              desc: "Red global de profesionales que se apoyan y crecen juntas", 
              color: "from-orange-500 to-red-500" 
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-white/5 to-violet-500/10 border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 cursor-pointer group"
            >
              <motion.div
                className={`mb-4 flex justify-center w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${item.color} items-center`}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-violet-300 transition-colors font-['Tomorrow:Medium',_sans-serif]">
                {item.title}
              </h4>
              <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors font-['Saira_Condensed:Light',_sans-serif] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}