import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Monitor, Heart, Target, Users, Code, Stethoscope, Rocket, UserCheck, X, Send } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import { ScrollArea } from "./components/ui/scroll-area";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner@2.0.3";
import svgPaths from "./imports/svg-gpkt0l4rxk";
import imgLogo from "/assets/c5360c72c9074bd4f8157d7552b8f87661e1d57e.png";
import imgBackground from "/assets/e6cdcf054e9b34ff54de2dc9e20d0c2135fb623d.png";
import imgBackground1 from "/assets/03b422cc0ad5e9974b65a9c97b4afcc368fc2972.png";
import imgGradientImage from "/assets/5875e6a327c88ae7c33dcc3c519d1ca52959285b.png";
import imgGradientImage1 from "/assets/b8cdeb20dee8e3e2cd68e7c06e16c3348f6b5be7.png";
import imgGradientImage2 from "/assets/cbc97234358520501f759beba77d384cbaff3a8b.png";
import imgGradientImage3 from "/assets/d380e56728df1924a5f1622cb9728af8a194c3ad.png";

// Import components
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { SobreNosotros } from "./components/SobreNosotros";
import { AnimatedSection, fadeInUp, fadeInLeft, fadeInRight } from "./components/AnimationUtils";

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
      // Using EmailJS to send real emails
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_inreset', // You'll need to configure this in EmailJS
          template_id: 'template_contact', // You'll need to configure this in EmailJS
          user_id: 'YOUR_EMAILJS_USER_ID', // You'll need to get this from EmailJS
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'nawalbouanani36@gmail.com',
            reply_to: formData.email
          }
        })
      });

      if (response.ok) {
        toast.success("¡Mensaje enviado correctamente! Te contactaremos pronto.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Fallback: Create mailto link as backup
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
            participas en nuestros programas educativos, o te pones en contacto con nosotros. Esta información puede incluir:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Nombre completo y datos de contacto</li>
            <li>Información profesional y educativa</li>
            <li>Datos de participación en programas</li>
            <li>Comunicaciones y feedback</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">2. Uso de la Información</h3>
          <p className="leading-relaxed">
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Proporcionar y mejorar nuestros servicios educativos</li>
            <li>Personalizar tu experiencia de aprendizaje</li>
            <li>Comunicarnos contigo sobre programas y actualizaciones</li>
            <li>Realizar análisis para mejorar nuestras metodologías</li>
            <li>Cumplir con obligaciones legales</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">3. Protección de Datos</h3>
          <p className="leading-relaxed">
            Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal 
            contra acceso no autorizado, alteración, divulgación o destrucción. Utilizamos encriptación, acceso restringido 
            y auditorías regulares de seguridad.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">4. Contacto</h3>
          <p className="leading-relaxed">
            Si tienes preguntas sobre esta política de privacidad o deseas ejercer tus derechos, 
            puedes contactarnos en: nawalbouanani36@gmail.com
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
            Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">2. Descripción del Servicio</h3>
          <p className="leading-relaxed">
            IN RESET es una plataforma EdTech-HealthTech que ofrece programas educativos, experiencias inmersivas 
            y soluciones tecnológicas diseñadas específicamente para el empoderamiento femenino en tecnología y bienestar.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">3. Uso Aceptable</h3>
          <p className="leading-relaxed">
            Te comprometes a utilizar nuestros servicios de manera responsable y no:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Violar leyes o derechos de terceros</li>
            <li>Compartir contenido inapropiado o dañino</li>
            <li>Interferir con el funcionamiento de la plataforma</li>
            <li>Intentar acceder de forma no autorizada a sistemas</li>
          </ul>
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

// Innova Section - Innovation methodology
function Innova() {
  return (
    <section id="innova" className="py-12 sm:py-20 bg-gradient-to-b from-purple-900/10 to-black">
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
            Metodología de <span className="text-[#6f26ff]">Innovación</span>
          </motion.h2>
          <p className="text-lg sm:text-xl text-white/80 font-['Saira_Condensed:Light',_sans-serif]">
            Transformamos problemas en soluciones escalables
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {[
            { 
              icon: UserCheck, 
              title: "Diagnóstico", 
              desc: "Identificamos problemas reales mediante investigación profunda", 
              color: "from-blue-500 to-cyan-500" 
            },
            { 
              icon: Code, 
              title: "Prototipado", 
              desc: "Desarrollamos MVPs con tecnologías de vanguardia", 
              color: "from-violet-500 to-purple-500" 
            },
            { 
              icon: Stethoscope, 
              title: "Validación", 
              desc: "Testing riguroso con métricas de impacto medibles", 
              color: "from-emerald-500 to-teal-500" 
            },
            { 
              icon: Rocket, 
              title: "Escalado", 
              desc: "Implementación masiva con modelo sostenible", 
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

// Proyectos Section
function Proyectos() {
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
            initial="initial"
            whileInView="animate"
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
            initial="initial"
            whileInView="animate"
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
            Colabora con <span className="text-[#6f26ff]">Nosotros</span>
          </motion.h2>
          <p className="text-lg sm:text-xl text-white/80 font-['Saira_Condensed:Light',_sans-serif]">
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
              variants={fadeInUp}
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
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-300 transition-colors font-['Roboto:Regular',_sans-serif]">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/70 mb-4 group-hover:text-white/90 transition-colors font-['Saira_Condensed:Light',_sans-serif] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                <div className="border-t border-violet-500/20 pt-3">
                  <div className="bg-gradient-to-r from-[#8b5cf600] h-px rounded-[1px] shrink-0 to-[#8b5cf600] via-50% via-[#8b5cf6] w-full mb-2" />
                  <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors font-['Saira_Condensed:Light',_sans-serif] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced contact card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)" }}
          className="bg-[rgba(255,255,255,0.03)] border border-[rgba(139,92,246,0.25)] rounded-2xl p-8 text-center max-w-2xl mx-auto hover:bg-[rgba(255,255,255,0.05)] transition-all duration-500 shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)]"
        >
          <h3 className="text-2xl font-bold text-white mb-4 font-['Roboto:Regular',_sans-serif]">Únete a la revolución</h3>
          <p className="text-white/70 mb-8 font-['Saira_Condensed:Light',_sans-serif]">Forma parte de nuestra red de colaboradores.</p>
          
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
              className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-[#25d366] text-[#25d366] rounded-lg hover:text-white transition-all duration-300 font-['Roboto:Bold',_sans-serif] min-w-40 h-[41.61px] relative"
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
                  className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-violet-500 text-violet-500 rounded-lg hover:text-white transition-all duration-300 font-['Roboto:Bold',_sans-serif] min-w-40 h-[41.61px] relative"
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
            <p className="text-white/70 text-sm leading-relaxed font-['Saira_Condensed:Light',_sans-serif] max-w-md">
              Transformamos retos en oportunidades reales. Conectamos educación, tecnología y bienestar 
              para crear el futuro que las mujeres merecen.
            </p>
          </div>

          {/* Legal & Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-['Tomorrow:Medium',_sans-serif]">
              Recursos
            </h3>
            <ul className="space-y-2">
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-white/70 hover:text-violet-400 transition-colors duration-200 font-['Saira_Condensed:Light',_sans-serif] text-left">
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
                    <button className="text-white/70 hover:text-violet-400 transition-colors duration-200 font-['Saira_Condensed:Light',_sans-serif] text-left">
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
            <p className="text-white/60 text-sm font-['Saira_Condensed:Light',_sans-serif] text-center sm:text-left">
              © {currentYear} IN RESET. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-sm font-['Saira_Condensed:Light',_sans-serif]">
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
          <p className="text-white/60 mt-2 text-sm font-['Saira_Condensed:Light',_sans-serif]">
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