import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import imgLogo from "./assets/Logo.png";


// Privacy Policy Component
export function PrivacyPolicy() {
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
// Footer Component
export function Footer() {
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