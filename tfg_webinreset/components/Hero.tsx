import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import imgLogo from "figma:asset/c5360c72c9074bd4f8157d7552b8f87661e1d57e.png";

// Animation variants
const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const letterAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

// Animated text component with typewriter effect
function AnimatedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30 + delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, currentIndex, text, delay]);

  return (
    <span ref={ref} className={className}>
      {displayText}
      {isInView && currentIndex < text.length && (
        <span className="animate-pulse text-violet-500">|</span>
      )}
    </span>
  );
}

// Hero Section with advanced parallax and animations
export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01
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

  return (
    <motion.section 
      id="hero"
      style={{ y, opacity, scale }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-violet-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-8 py-20 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-4 sm:space-y-6"
            style={{
              transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
            }}
          >
            <motion.div variants={letterAnimation} className="overflow-hidden">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-2 sm:mb-4 font-['Roboto:Bold',_sans-serif] tracking-[-2.4px]">
                <AnimatedText 
                  text="Educación" 
                  className="block bg-gradient-to-r from-white to-violet-300 bg-clip-text text-transparent leading-tight"
                />
              </h1>
            </motion.div>
            
            <motion.div variants={letterAnimation} className="overflow-hidden">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-2 sm:mb-4 font-['Roboto:Bold',_sans-serif] tracking-[-2.4px]">
                <AnimatedText 
                  text="Tecnología" 
                  className="block bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent leading-tight"
                  delay={20}
                />
              </h1>
            </motion.div>
            
            <motion.div variants={letterAnimation} className="overflow-hidden">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-4 sm:mb-8 font-['Roboto:Bold',_sans-serif] tracking-[-2.4px]">
                <AnimatedText 
                  text="Experiencias" 
                  className="block bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent leading-tight"
                  delay={40}
                />
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="max-w-3xl mx-auto font-['Saira_Condensed:Light',_sans-serif] text-lg sm:text-xl leading-relaxed px-4"
            >
              <p className="text-white/80 text-center">
                Creamos <span className="text-violet-500 font-['Saira_Condensed:Medium',_sans-serif]">ecosistemas</span> inmersivos donde las
                mujeres descubren su poder transformador.
              </p>
              <p className="text-white/80 text-center mt-2">
                <span className="text-[#a06fff] font-['Saira_Condensed:Medium',_sans-serif]">Innovación Tech</span> que convierte el
                aprendizaje en acción real
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Infinite scrolling achievements with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="relative overflow-hidden py-4 sm:py-8"
        >
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex items-center space-x-8 sm:space-x-12 whitespace-nowrap"
          >
            {[...achievements, ...achievements, ...achievements].map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.1,
                  color: '#8b5cf6',
                  textShadow: '0 0 20px rgb(139, 92, 246, 0.8)'
                }}
                className="text-violet-500 font-['Saira_Condensed:Medium',_sans-serif] text-sm sm:text-base cursor-pointer transition-all duration-300 px-4 sm:px-8"
              >
                {achievement}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}