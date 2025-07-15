import { motion } from "framer-motion";

export function Innova() {
  return (
    <section id="innova" className="bg-[#000000] relative py-12 sm:py-20">
      <div className="relative size-full" data-name="Innovacion">
        <div className="flex flex-col items-center justify-end relative size-full">
          <div className="box-border content-stretch flex flex-col gap-[74px] items-center justify-end px-4 sm:px-8 lg:px-[120px] py-12 relative size-full">
            <motion.div 
            className="text-center mb-12 sm:mb-16"
            whileInView={{ 
                backgroundPosition: ["0% 50%", "100% 50%"],
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            >
            <motion.h2
                className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 font-['Saira_Condensed:Light',_sans-serif] tracking-[-0.96px]"
                style={{
                background: "linear-gradient(90deg, #ffffff, #8b5cf6, #ffffff)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
                }}
            >
                Metodología de la <span className="text-[#6f26ff]">Innovación</span>
            </motion.h2>
            <p className="text-lg sm:text-xl text-white/80 font-['Saira_Condensed:Light',_sans-serif]">
                Creadores de soluciones transformadoras.
            </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
              className="blur-[0.25px] filter h-0.5 rounded-[1px] shadow-[0px_0px_20px_0px_rgba(139,92,246,0.8),0px_0px_40px_0px_rgba(139,92,246,0.4)] shrink-0 w-full max-w-[655.22px]"
              data-name="Horizontal Divider"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(139, 92, 246, 0) 0%, rgb(139, 92, 246) 20%, rgb(217, 70, 239) 50%, rgb(139, 92, 246) 80%, rgba(139, 92, 246, 0) 100%)",
              }}
            />
            <div
              className="[flex-flow:wrap] box-border content-center flex gap-[30px] items-center justify-center p-0 relative shrink-0 w-full"
              data-name="Cards Innovacion"
            >
              {[
                {
                  id: "01",
                  title: "Identificación de Nichos",
                  description: [
                    "Detectamos problemas específicos y oportunidades únicas en el mercado a través de análisis profundo y metodologías especializadas."
                  ]
                },
                {
                  id: "02", 
                  title: "Soluciones a Medida",
                  description: [
                    "Combinamos tecnología, educación y experiencias para crear soluciones innovadoras, efectivas y adaptadas a cada contexto específico."
                  ]
                },
                {
                  id: "03",
                  title: "Escalabilidad e Impacto", 
                  description: [
                    "Desarrollamos modelos de negocio sostenibles con impacto real, medible y escalable que generen valor a largo plazo."
                  ]
                }
              ].map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0px 20px 40px 0px rgba(139,92,246,0.3)",
                    borderColor: "rgba(139,92,246,0.6)"
                  }}
                  className="bg-[rgba(255,255,255,0.03)] box-border content-stretch flex flex-col gap-6 items-center justify-center min-h-[200px] p-[17px] relative rounded-xl shrink-0 w-full max-w-sm transition-all duration-300 cursor-pointer group hover:bg-[rgba(255,255,255,0.08)]"
                  data-name={`card${card.id}`}
                >
                  <div className="absolute border border-[rgba(139,92,246,0.25)] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)] transition-all duration-300 group-hover:shadow-[0px_8px_30px_0px_rgba(139,92,246,0.25)]" />
                  <motion.div 
                    whileHover={{ scale: 1.2, textShadow: "0px 0px 20px rgba(160, 111, 255, 0.8)" }}
                    className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a06fff] text-[28.8px] text-center w-full transition-all duration-300"
                  >
                    <p className="block leading-[28.8px]">{card.id}</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02, color: "#8b5cf6" }}
                    className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[18.9px] text-center w-full transition-all duration-300"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="block leading-[24.96px]">
                      {card.title}
                    </p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ color: "#e2e8f0" }}
                    className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] h-24 justify-center leading-[24px] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center w-full transition-all duration-300"
                  >
                    {card.description.map((line, lineIndex) => (
                      <p key={lineIndex} className={lineIndex < card.description.length - 1 ? "block mb-0" : "block"}>
                        {line}
                      </p>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}