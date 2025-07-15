import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import svgPaths from "../imports/svg-gpkt0l4rxk";
import imgGradientImage from "./assets/Gradient+Image.png";
import imgGradientImage1 from "./assets/Gradient+Image2.png";
import imgGradientImage2 from "./assets/Gradient+Image3.png";
import imgGradientImage3 from "./assets/Gradient+Image4.png";
import { AnimatedSection} from "./AnimationUtils";


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


// Contacto Section
export function Contacto() {
  const whatsappMessage = encodeURIComponent("¡Hola! Me interesa conocer más sobre los proyectos de IN RESET. ¿Podríamos hablar?");
  const whatsappNumber = "692426899"; // Replace with actual number
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
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)"
              }}
              className="bg-[rgba(255,255,255,0.03)] border border-[rgba(139,92,246,0.25)] rounded-xl p-6 hover:bg-[rgba(255,255,255,0.05)] transition-all duration-500 cursor-pointer group relative overflow-hidden shadow-[0px_4px_20px_0px_rgba(139,92,246,0.15)] min-h-[320px] flex flex-col"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
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