import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import imgLogo from "figma:asset/c5360c72c9074bd4f8157d7552b8f87661e1d57e.png";

// Navigation Component - Always fixed
export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-black/30 border-b border-violet-500/20' 
          : 'backdrop-blur-[8.15px] bg-[rgba(255,255,255,0.01)]'
      }`}
      style={{ 
        backdropFilter: 'blur(8.15px)',
        position: 'fixed'
      }}
    >
      <div className="absolute border-[0px_0px_1px] border-[rgba(168,85,247,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <motion.a
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            href="#hero"
            className="flex items-center"
          >
            <img
              src={imgLogo}
              alt="IN RESET Logo"
              className="h-6 sm:h-8 w-auto"
              style={{ maxHeight: '50px', width: 'auto', maxWidth: '150px', objectFit: 'contain' }}
            />
          </motion.a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center space-x-4 sm:space-x-8"
        >
          {[
            { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
            { name: 'Proyectos', href: '#proyectos' },
            { name: 'Contacto', href: '#contacto' }
          ].map((item, index) => (
            <motion.a
              key={item.name}
              whileHover={{ 
                scale: 1.05,
                color: '#8b5cf6',
                textShadow: '0 0 8px rgb(139, 92, 246, 0.8)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-white/80 hover:text-violet-400 transition-colors duration-300 cursor-pointer relative group font-['Saira_Condensed:Regular',_sans-serif] text-sm sm:text-base"
              href={item.href}
            >
              <span className="hidden sm:inline">{item.name}</span>
              <span className="sm:hidden">{item.name.split(' ')[0]}</span>
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
}