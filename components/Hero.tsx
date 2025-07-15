import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Hyperspeed from "./hyperspeed";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const hyperspeedRef = useRef<{ speedUp: () => void; slowDown: () => void } | null>(null);

  const handleMouseEnter = () => {
    if (hyperspeedRef.current && hyperspeedRef.current.speedUp) {
      hyperspeedRef.current.speedUp();
    }
  };
  const handleMouseLeave = () => {
    if (hyperspeedRef.current && hyperspeedRef.current.slowDown) {
      hyperspeedRef.current.slowDown();
    }
  };

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

  const achievements = [
    "Premios Fundadoras 2024",
    "Featured Las Provincias",
    "Premio UE Madrid", 
    "Social Nest Foundation",
    "Valencia Plaza Interview",
    "FORINVEST 2024",
    "VDS 2024"
  ];
  const infiniteAchievements = [
    ...achievements,
    ...achievements,
    ...achievements,
    ...achievements,
    ...achievements
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      data-name="Hero"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hyperspeed as animated background */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-auto">
        <Hyperspeed
          ref={hyperspeedRef}
          effectOptions={{
            distortion: "turbulentDistortion",
            length: 350,
            roadWidth: 9,
            lanesPerRoad: 4,
            islandWidth: 2,
            fov: 90,
            fovSpeedUp: 110,
            speedUp: 0.6,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 30,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [5, 10],
            movingCloserSpeed: [-15, -25],
            carLightsLength: [30, 50],
            carLightsRadius: [0.05, 0.16],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x0b001f,
              islandColor: 0x000000,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [
                0x6e409b,
                0x5c3685,
                0x472b6a,
                0xb595e0,
                0xa472d9
              ],
              rightCars: [
                0x5a3b83,
                0x7a4fa7,
                0x68408f,
                0xceb1f1,
                0xbc8fe6
              ],
              sticks: 0x000000,
            },
          }}
        />
      </div>
      {/* Content above the animation */}
      <div className="relative z-10 size-full" data-name="Hero">
        <div className="flex flex-col items-center justify-center min-h-screen relative size-full">
          <div className="box-border content-stretch flex flex-col gap-[120px] items-center justify-center min-h-screen pb-[63px] pt-[120px] px-4 sm:px-8 lg:px-[126px] relative size-full">
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
          </div>
        </div>
      </div>
      {/* Achievements justo debajo del hero */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="box-border content-stretch flex flex-row items-center justify-start overflow-hidden p-0 relative shrink-0 w-full"
        data-name="Logros"
        style={{ background: "transparent" }}
      >
        <div className="flex w-full">
          {/* First marquee container */}
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 60,
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
          {/* Second marquee container */}
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 60,
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
    </section>
  );
}
