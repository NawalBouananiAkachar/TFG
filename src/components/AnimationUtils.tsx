import { motion } from "framer-motion";
import { ReactNode } from "react";

// Animation variants fixed for TypeScript
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
};

export const slideInFromBottom = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

export const slideInFromTop = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
};

export const rotateIn = {
  initial: { opacity: 0, rotate: -180 },
  animate: { opacity: 1, rotate: 0 },
};

export const bounceIn = {
  initial: { opacity: 0, scale: 0.3 },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

// Stagger animation for lists
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
  },
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
};

export const hoverLift = {
  y: -5,
};

export const hoverGlow = {
  boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
};

// Complex animations
export const floatingAnimation = {
  y: [0, -10, 0],
};

export const pulseAnimation = {
  scale: [1, 1.05, 1],
};

export const wiggleAnimation = {
  x: [0, -5, 5, -5, 5, 0],
};

// Page transition animations
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Animated Section Component
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: any;
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  animation = fadeInUp,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={animation.initial}
      whileInView={animation.animate}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

// Animated Text Component
interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1,
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

// Scroll-triggered counter
interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  from,
  to,
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        initial={{ value: from }}
        whileInView={{ value: to }}
        viewport={{ once: true }}
        transition={{ duration, ease: "easeOut" }}
      >
        {from}
      </motion.span>
    </motion.span>
  );
}

// Magnetic effect component
interface MagneticProps {
  children: ReactNode;
  className?: string;
}

export function Magnetic({
  children,
  className = "",
}: MagneticProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
    >
      {children}
    </motion.div>
  );
}

// Reveal on scroll with custom trigger
interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  animation?: any;
}

export function RevealOnScroll({
  children,
  className = "",
  threshold = 0.3,
  animation = fadeInUp,
}: RevealOnScrollProps) {
  return (
    <motion.div
      className={className}
      initial={animation.initial}
      whileInView={animation.animate}
      viewport={{ once: true, amount: threshold }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

// Loading skeleton animation
export const skeletonAnimation = {
  opacity: [0.5, 1, 0.5],
};

// Typewriter effect
interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
}

export function Typewriter({
  text,
  className = "",
  speed = 0.1,
}: TypewriterProps) {
  return (
    <motion.div className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * speed,
            duration: 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  slideInFromBottom,
  slideInFromTop,
  rotateIn,
  bounceIn,
  staggerContainer,
  staggerItem,
  hoverScale,
  hoverLift,
  hoverGlow,
  floatingAnimation,
  pulseAnimation,
  wiggleAnimation,
  pageTransition,
  skeletonAnimation,
  AnimatedSection,
  AnimatedText,
  AnimatedCounter,
  Magnetic,
  RevealOnScroll,
  Typewriter,
};