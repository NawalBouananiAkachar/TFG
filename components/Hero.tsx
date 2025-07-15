import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.005,
        y: (e.clientY - window.innerHeight / 2) * 0.005
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Achievements array - base content
  const achievements = [
    "Premios Fundadoras 2024",
    "Featured Las Provincias",
    "Premio UE Madrid", 
    "Social Nest Foundation",
    "Valencia Plaza Interview",
    "FORINVEST 2024",
    "VDS 2024"
  ];

  // Create multiple copies for truly infinite scroll
  const infiniteAchievements = [
    ...achievements,
    ...achievements,
    ...achievements,
    ...achievements,
    ...achievements
  ];

  return (
    <section id="hero" className="bg-[#000000] relative min-h-screen" data-name="Hero">
      <div className="relative size-full" data-name="Hero">
        <div className="flex flex-col items-center justify-center min-h-screen relative size-full">
          <div className="box-border content-stretch flex flex-col gap-[419px] items-center justify-center min-h-screen pb-[63px] pt-[317.2px] px-4 sm:px-8 lg:px-[126px] relative size-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="[flex-flow:wrap] box-border content-center flex gap-[114px] h-auto lg:h-[236px] items-center justify-between p-0 relative shrink-0 w-full"
              data-name="InfoPrincipal"
              style={{
                transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0"
                data-name="Container"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
                  data-name="Heading 1"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      textShadow: "0px 0px 20px rgba(139, 92, 246, 0.8)"
                    }}
                    className="[text-shadow:rgba(0,0,0,0.4)_0px_4px_12px] flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[79.8438px] text-left tracking-[-2.4px] w-full cursor-default"
                    style={{ 
                      fontVariationSettings: "'wdth' 100",
                      fontSize: "clamp(2.5rem, 8vw, 79.8438px)"
                    }}
                  >
                    <p className="block leading-[68px]">Educación</p>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
                  data-name="Heading 1"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      textShadow: "0px 0px 20px rgba(139, 92, 246, 0.8)"
                    }}
                    className="[text-shadow:rgba(0,0,0,0.4)_0px_4px_12px] flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[77.9688px] text-left tracking-[-2.4px] w-full cursor-default"
                    style={{ 
                      fontVariationSettings: "'wdth' 100",
                      fontSize: "clamp(2.5rem, 8vw, 77.9688px)"
                    }}
                  >
                    <p className="block leading-[68px]">Tecnología</p>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
                  data-name="Heading 1"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      textShadow: "0px 0px 20px rgba(168, 85, 247, 0.8)"
                    }}
                    className="[text-shadow:rgba(0,0,0,0.4)_0px_4px_12px] flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[79.5312px] text-left tracking-[-2.4px] w-full cursor-default"
                    style={{ 
                      fontVariationSettings: "'wdth' 100",
                      fontSize: "clamp(2.5rem, 8vw, 79.5312px)"
                    }}
                  >
                    <p className="block leading-[68px]">Experiencias</p>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col font-['Saira_Condensed:Light',_sans-serif] justify-center leading-[31.2px] not-italic relative shrink-0 text-[#ffffff] text-[20.8px] text-center text-nowrap whitespace-pre max-w-md lg:max-w-none"
              >
                <motion.p 
                  whileHover={{ color: "#e2e8f0" }}
                  className="mb-0 transition-colors duration-300"
                >
                  Creamos{" "}
                  <motion.span 
                    whileHover={{ color: "#8b5cf6", scale: 1.05 }}
                    className="font-['Saira_Condensed:Medium',_sans-serif] not-italic text-[#a06fff] transition-all duration-300 cursor-default"
                  >
                    ecosistemas
                  </motion.span>{" "}
                  inmersivos donde las
                </motion.p>
                <motion.p 
                  whileHover={{ color: "#e2e8f0" }}
                  className="block mb-0 transition-colors duration-300"
                >
                  mujeres descubren su poder transformador.
                </motion.p>
                <motion.p 
                  whileHover={{ color: "#e2e8f0" }}
                  className="mb-0 transition-colors duration-300"
                >
                  <motion.span 
                    whileHover={{ color: "#8b5cf6", scale: 1.05 }}
                    className="font-['Saira_Condensed:Medium',_sans-serif] text-[#a06fff] transition-all duration-300 cursor-default"
                  >
                    Innovación Tech
                  </motion.span>
                  <span className="font-['Saira_Condensed:Light',_sans-serif]">
                    {" "}
                    que convierte el
                  </span>
                </motion.p>
                <motion.p 
                  whileHover={{ color: "#e2e8f0" }}
                  className="block transition-colors duration-300"
                >
                  aprendizaje en acción real
                </motion.p>
              </motion.div>
            </motion.div>
            
            {/* Truly infinite scrolling achievements */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="box-border content-stretch flex flex-row items-center justify-start overflow-hidden p-0 relative shrink-0 w-full"
              data-name="Logros"
            >
              <div className="flex">
                {/* First marquee container */}
                <motion.div
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 min-w-max"
                  data-name="Container"
                >
                  {infiniteAchievements.map((achievement, index) => (
                    <div key={`first-${index}`} className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
                      <motion.div
                        whileHover={{ 
                          scale: 1.1,
                          color: '#8b5cf6',
                          textShadow: '0 0 20px rgb(139, 92, 246, 0.8)'
                        }}
                        className="box-border content-stretch flex flex-col items-start justify-start px-8 py-0 relative shrink-0 cursor-pointer"
                        data-name="Component 1"
                      >
                        <div className="flex flex-col font-['Saira_Condensed:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a06fff] text-[16px] text-left text-nowrap transition-all duration-300">
                          <p className="block leading-[24px] whitespace-pre">
                            {achievement}
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.5, opacity: 1 }}
                        className="bg-[#a06fff] opacity-60 rounded-sm shrink-0 size-1 transition-all duration-300"
                        data-name="Background"
                      />
                    </div>
                  ))}
                </motion.div>

                {/* Second marquee container - offset for seamless effect */}
                <motion.div
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 min-w-max"
                  data-name="Container"
                >
                  {infiniteAchievements.map((achievement, index) => (
                    <div key={`second-${index}`} className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
                      <motion.div
                        whileHover={{ 
                          scale: 1.1,
                          color: '#8b5cf6',
                          textShadow: '0 0 20px rgb(139, 92, 246, 0.8)'
                        }}
                        className="box-border content-stretch flex flex-col items-start justify-start px-8 py-0 relative shrink-0 cursor-pointer"
                        data-name="Component 1"
                      >
                        <div className="flex flex-col font-['Saira_Condensed:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a06fff] text-[16px] text-left text-nowrap transition-all duration-300">
                          <p className="block leading-[24px] whitespace-pre">
                            {achievement}
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.5, opacity: 1 }}
                        className="bg-[#a06fff] opacity-60 rounded-sm shrink-0 size-1 transition-all duration-300"
                        data-name="Background"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}