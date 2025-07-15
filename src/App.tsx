import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import { ScrollArea } from "./components/ui/scroll-area";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";
import svgPaths from "./imports/svg-gpkt0l4rxk";

// Import components
import { Nav } from "./components/Nav";
import { SobreNosotros } from "./components/SobreNosotros";
import { AnimatedSection, fadeInUp, fadeInLeft, fadeInRight } from "./components/AnimationUtils";

// Use placeholder paths that work in production
const imgLogo = "/assets/images/logo.png";
const imgBackground = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80";
const imgBackground1 = "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80";
const imgGradientImage = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80";
const imgGradientImage1 = "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80";
const imgGradientImage2 = "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&q=80";
const imgGradientImage3 = "https://images.unsplash.com/photo-1564865878688-9a244444042a?w=400&q=80";

// Contact Form Component with real email sending
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link as primary method
      const mailtoSubject = encodeURIComponent(`[IN RESET Contact] ${formData.subject}`);
      const mailtoBody = encodeURIComponent(
        `Nombre: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Asunto: ${formData.subject}\n\n` +
        `Mensaje:\n${formData.message}\n\n` +
        `---\n` +
        `Este mensaje fue enviado desde el formulario de contacto de IN RESET.`
      );
      const mailtoLink = `mailto:nawalbouanani36@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      // Open default mail client
      window.location.href = mailtoLink;
      
      toast.success("Se ha abierto tu cliente de correo para enviar el mensaje.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Error al procesar el mensaje. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">Nombre *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white/10 border-violet-500/30 text-white placeholder:text-white/50 focus:border-violet-500"
            placeholder="Tu nombre completo"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white/10 border-violet-500/30 text-white placeholder:text-white/50 focus:border-violet-500"
            placeholder="tu@email.com"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-white">Asunto *</Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="bg-white/10 border-violet-500/30 text-white placeholder:text-white/50 focus:border-violet-500"
          placeholder="¿En qué podemos ayudarte?"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className="text-white">Mensaje *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="bg-white/10 border-violet-500/30 text-white placeholder:text-white/50 focus:border-violet-500 resize-none"
          placeholder="Cuéntanos más detalles sobre tu proyecto o consulta..."
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-3 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Enviar Mensaje
          </>
        )}
      </Button>
      
      <div className="text-xs text-white/60 text-center">
        Los mensajes se envían directamente a <span className="text-violet-400">nawalbouanani36@gmail.com</span>
      </div>
    </form>
  );
}

// Privacy Policy Component
function PrivacyPolicy() {
  return (
    <ScrollArea className="h-[70vh] w-full pr-4">
      <div className="space-y-6 text-white/80">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">1. Información que Recopilamos</h3>
          <p className="leading-relaxed">
            En IN RESET recopilamos información personal que nos proporcionas voluntariamente cuando te registras en nuestros servicios, 
            participas en nuestros programas educativos, o te pones en contacto con nosotros.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">2. Uso de la Información</h3>
          <p className="leading-relaxed">
            Utilizamos la información recopilada para proporcionar y mejorar nuestros servicios educativos, personalizar tu experiencia de aprendizaje, comunicarnos contigo sobre programas y actualizaciones.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">3. Protección de Datos</h3>
          <p className="leading-relaxed">
            Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal 
            contra acceso no autorizado, alteración, divulgación o destrucción.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">4. Contacto</h3>
          <p className="leading-relaxed">
            Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en: nawalbouanani36@gmail.com
          </p>
          <p className="mt-4 text-sm text-white/60">
            Última actualización: Enero 2025
          </p>
        </div>
      </div>
    </ScrollArea>
  );
}

// Terms of Service Component
function TermsOfService() {
  return (
    <ScrollArea className="h-[70vh] w-full pr-4">
      <div className="space-y-6 text-white/80">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">1. Aceptación de los Términos</h3>
          <p className="leading-relaxed">
            Al acceder y utilizar los servicios de IN RESET, aceptas estar sujeto a estos términos y condiciones.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">2. Descripción del Servicio</h3>
          <p className="leading-relaxed">
            IN RESET es una plataforma EdTech-HealthTech que ofrece programas educativas, experiencias inmersivas 
            y soluciones tecnológicas diseñadas específicamente para el empoderamiento femenino en tecnología y bienestar.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">3. Uso Aceptable</h3>
          <p className="leading-relaxed">
            Te comprometes a utilizar nuestros servicios de manera responsable y no violar leyes o derechos de terceros.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">4. Contacto</h3>
          <p className="leading-relaxed">
            Para preguntas sobre estos términos, contacta con nosotros en: nawalbouanani36@gmail.com
          </p>
          <p className="mt-4 text-sm text-white/60">
            Última actualización: Enero 2025
          </p>
        </div>
      </div>
    </ScrollArea>
  );
}

// Hero Section - Diseño exacto de Figma
function Hero() {
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

  const achievements = [
    "Premios Fundadoras 2024",
    "Featured Las Provincias",
    "Premio UE Madrid", 
    "Social Nest Foundation",
    "Valencia Plaza Interview",
    "FORINVEST 2024",
    "VDS 2024"
  ];

  const infiniteAchievements = [...achievements, ...achievements, ...achievements, ...achievements, ...achievements];

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
                    className="[text-shadow:rgba(0,0,0,0.4)_0px_4px_12px] flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[79.8438px] text-left tracking-[-2.4px] w-full cursor-default"
                    style={{ 
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
                    className="[text-shadow:rgba(0,0,0,0.4)_0px_4px_12px] flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[77.9688px] text-left tracking-[-2.4px] w-full cursor-default"
                    style={{ 
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
                    className="[text-shadow:rgba(0,0,0,0.4)_0px_4px_12px] flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[79.5312px] text-left tracking-[-2.4px] w-full cursor-default"
                    style={{ 
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
                className="flex flex-col justify-center leading-[31.2px] not-italic relative shrink-0 text-[#ffffff] text-[20.8px] text-center text-nowrap whitespace-pre max-w-md lg:max-w-none"
              >
                <motion.p 
                  whileHover={{ color: "#e2e8f0" }}
                  className="mb-0 transition-colors duration-300"
                >
                  Creamos{" "}
                  <motion.span 
                    whileHover={{ color: "#8b5cf6", scale: 1.05 }}
                    className="not-italic text-[#a06fff] transition-all duration-300 cursor-default font-medium"
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
                    className="text-[#a06fff] transition-all duration-300 cursor-default font-medium"
                  >
                    Innovación Tech
                  </motion.span>
                  <span>
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
            
            {/* Infinite scrolling achievements - 40 segundos, linear */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="box-border content-stretch flex flex-row items-center justify-start overflow-hidden p-0 relative shrink-0 w-full"
              data-name="Logros"
            >
              <div className="flex">
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
                        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#a06fff] text-[16px] text-left text-nowrap transition-all duration-300 font-medium">
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
                        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#a06fff] text-[16px] text-left text-nowrap transition-all duration-300 font-medium">
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

// Innova Section - Cards con color #6f26ff
function Innova() {
  return (
    <section id="innova" className="bg-[#000000] relative py-12 sm:py-20">
      <div className="relative size-full" data-name="Innovacion">
        <div className="flex flex-col items-center justify-end relative size-full">
          <div className="box-border content-stretch flex flex-col gap-[74px] items-center justify-end px-4 sm:px-8 lg:px-[220px] py-12 relative size-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="box-border content-stretch flex flex-col items-center justify-center leading-[0] not-italic pt-0 px-0 relative shrink-0 text-[#ffffff] text-center w-full max-w-[560px]"
              data-name="Heading 2"
            >
              <div
                className="[text-shadow:rgba(0,0,0,0.3)_0px_2px_4px] flex flex-col justify-center relative shrink-0 text-3xl sm:text-[48px] tracking-[-0.96px] w-full"
              >
                <p className="leading-tight sm:leading-[57.6px] whitespace-pre-wrap">
                  Metodología de la{" "}
                  <span className="not-italic text-[#6f26ff]">
                    Innovación
                  </span>
                  &nbsp;
                </p>
              </div>
              <div
                className="flex flex-col justify-center relative shrink-0 text-lg sm:text-[20px] w-full"
              >
                <p className="block leading-[32px]">
                  Creadores de soluciones transformadoras.
                </p>
              </div>
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
                    "Detectamos problemas específicos y",
                    "oportunidades únicas en el mercado a través",
                    "de análisis profundo y metodologías",
                    "especializadas."
                  ]
                },
                {
                  id: "02", 
                  title: "Soluciones a Medida",
                  description: [
                    "Combinamos tecnología, educación y experiencias p",
                    "ara crear soluciones innovadoras, efectivas y ",
                    "adaptadas a cada contexto específico."
                  ]
                },
                {
                  id: "03",
                  title: "Escalabilidad e Impacto", 
                  description: [
                    "Desarrollamos modelos de negocio sostenibles ",
                    "con impacto real, medible y escalable ",
                    "que generen valor a largo plazo."
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
                    className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#a06fff] text-[28.8px] text-center w-full transition-all duration-300 font-light"
                  >
                    <p className="block leading-[28.8px]">{card.id}</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02, color: "#8b5cf6" }}
                    className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[18.9px] text-center w-full transition-all duration-300"
                  >
                    <p className="block leading-[24.96px]">
                      {card.title}
                    </p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ color: "#e2e8f0" }}
                    className="flex flex-col h-24 justify-center leading-[24px] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center w-full transition-all duration-300 font-light"
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

// Proyectos Section
function Proyectos() {
  return (
    <section id="proyectos" className="py-12 sm:py-20 bg-gradient-to-b from-black to-purple-900/10">
      <div className="container mx-auto px-4 sm:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-[-0.96px]"
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
          <p className="text-lg sm:text-xl text-white/80">
            Soluciones que transforman sectores completos
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <motion.div
            {...fadeInLeft}
            className="bg-[rgba(255,255,255,0.03)] border border-[rgba(139,92,246,0.25)] rounded-xl p-8 hover:bg-[rgba(255,255,255,0.05)] transition-all duration-500 group shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)]"
            style={{
              backgroundImage: `linear-gradient(130.149deg, rgba(0, 0, 0, 0.7) 0%, rgba(139, 92, 246, 0.1) 100%), url('${imgBackground}')`,
              backgroundSize: 'cover'
            }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                EdTech Platform
              </h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
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
            {...fadeInRight}
            className="bg-[rgba(255,255,255,0.03)] border border-[rgba(139,92,246,0.25)] rounded-xl p-8 hover:bg-[rgba(255,255,255,0.05)] transition-all duration-500 group shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)]"
            style={{
              backgroundImage: `linear-gradient(130.149deg, rgba(0, 0, 0, 0.7) 0%, rgba(139, 92, 246, 0.1) 100%), url('${imgBackground1}')`,
              backgroundSize: 'cover'
            }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                HealthTech Solutions
              </h3>
              <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
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

// Contacto Section
function Contacto() {
  const whatsappMessage = encodeURIComponent("¡Hola! Me interesa conocer más sobre los proyectos de IN RESET. ¿Podríamos hablar?");
  const whatsappNumber = "34123456789"; // Replace with actual number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="py-12 sm:py-20 bg-gradient-to-b from-purple-900/10 to-black">
      <div className="container mx-auto px-4 sm:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-[-0.96px]"
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
            Colabora con <span className="text-[#6f26ff]">Nosotros</span>
          </motion.h2>
          <p className="text-lg sm:text-xl text-white/80">
            Construye el futuro con IN RESET
          </p>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12 max-w-7xl mx-auto"
        >
          {[
            {
              title: "Empresas & Marcas",
              desc: "Accede a audiencias altamente segmentadas y comprometidas",
              detail: "Genera conexiones auténticas que impulsan resultados medibles.",
              image: imgGradientImage
            },
            {
              title: "Inversores", 
              desc: "Únete al crecimiento de mercados emergentes con alta demanda",
              detail: "Oportunidad real en tecnología educativa y de bienestar con potencial escalable.",
              image: imgGradientImage1
            },
            {
              title: "Patrocinadores",
              desc: "Posicionamiento estratégico en mercados emergentes", 
              detail: "Visibilidad premium en experiencias que generan comunidad y fidelización.",
              image: imgGradientImage2
            },
            {
              title: "Co-Creación",
              desc: "Imagina crear la próxima revolución tecnológica juntos",
              detail: "Desarrollamos productos que no existen pero que el mundo necesita.",
              image: imgGradientImage3
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)"
              }}
              className="bg-[rgba(255,255,255,0.03)] border border-[rgba(139,92,246,0.25)] rounded-xl p-6 hover:bg-[rgba(255,255,255,0.05)] transition-all duration-500 cursor-pointer group relative overflow-hidden shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)] min-h-[320px] flex flex-col"
            >
              <div 
                className="absolute inset-0 opacity-20 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(130.149deg, rgba(0, 0, 0, 0.7) 0%, rgba(139, 92, 246, 0.1) 100%), url('${item.image}')`,
                  backgroundSize: 'auto, cover'
                }}
              />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/70 mb-4 group-hover:text-white/90 transition-colors leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                <div className="border-t border-violet-500/20 pt-3">
                  <div className="bg-gradient-to-r from-[#8b5cf600] h-px rounded-[1px] shrink-0 to-[#8b5cf600] via-50% via-[#8b5cf6] w-full mb-2" />
                  <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)" }}
          className="bg-[rgba(255,255,255,0.03)] border border-[rgba(139,92,246,0.25)] rounded-2xl p-8 text-center max-w-2xl mx-auto hover:bg-[rgba(255,255,255,0.05)] transition-all duration-500 shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)]"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Únete a la revolución</h3>
          <p className="text-white/70 mb-8">Forma parte de nuestra red de colaboradores.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(37, 211, 102, 0.3)",
                backgroundColor: "rgba(37, 211, 102, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-[#25d366] text-[#25d366] rounded-lg hover:text-white transition-all duration-300 font-bold min-w-40 h-[41.61px] relative"
            >
              <svg className="w-[18px] h-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <path d={svgPaths.p10902880} fill="currentColor" />
              </svg>
              WhatsApp
            </motion.a>
            
            <Dialog>
              <DialogTrigger asChild>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
                    backgroundColor: "rgba(139, 92, 246, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-violet-500 text-violet-500 rounded-lg hover:text-white transition-all duration-300 font-bold min-w-40 h-[41.61px] relative"
                >
                  <svg className="w-[18px] h-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p34ffc480} fill="currentColor" />
                  </svg>
                  Enviar Email
                </motion.button>
              </DialogTrigger>
              <DialogContent className="bg-black/95 border border-violet-500/30 text-white max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center mb-2">Contacta con IN RESET</DialogTitle>
                  <DialogDescription className="text-white/70 text-center">
                    Cuéntanos sobre tu proyecto o consulta. El mensaje se enviará directamente a nuestro equipo.
                  </DialogDescription>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-purple-900/20 to-black border-t border-violet-500/20 py-12">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <img
              src={imgLogo}
              alt="IN RESET"
              className="h-8 w-auto"
              style={{ maxHeight: '40px' }}
            />
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Transformamos retos en oportunidades reales. Conectamos educación, tecnología y bienestar 
              para crear el futuro que las mujeres merecen.
            </p>
          </div>

          {/* Legal & Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">
              Recursos
            </h3>
            <ul className="space-y-2">
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-white/70 hover:text-violet-400 transition-colors duration-200 text-left">
                      Política de Privacidad
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-black/95 border border-violet-500/30 text-white max-w-2xl max-h-[80vh]">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-center mb-4">Política de Privacidad</DialogTitle>
                      <DialogDescription className="text-white/70 text-center">
                        Última actualización: {currentYear}
                      </DialogDescription>
                    </DialogHeader>
                    <PrivacyPolicy />
                  </DialogContent>
                </Dialog>
              </li>
              
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-white/70 hover:text-violet-400 transition-colors duration-200 text-left">
                      Términos de Servicio
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-black/95 border border-violet-500/30 text-white max-w-2xl max-h-[80vh]">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-center mb-4">Términos de Servicio</DialogTitle>
                      <DialogDescription className="text-white/70 text-center">
                        Última actualización: {currentYear}
                      </DialogDescription>
                    </DialogHeader>
                    <TermsOfService />
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-violet-500/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center sm:text-left">
              © {currentYear} IN RESET. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-sm">
                Innovando
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
          <p className="text-white/60 mt-2 text-sm">
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