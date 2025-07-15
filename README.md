# IN RESET - Educación, Tecnología y Experiencias

Sitio web oficial de IN RESET - Plataforma EdTech-HealthTech especializada en empoderamiento femenino en tecnología y bienestar.

## 🚀 Tecnologías

- **React 18** - Framework de interfaz de usuario
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos utilitarios
- **Framer Motion** - Animaciones avanzadas
- **Radix UI** - Componentes accesibles
- **Lucide React** - Iconos

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd in-reset-website

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🌐 Deploy en Vercel

### Opción 1: Deploy Automático desde GitHub

1. Haz push de tu código a GitHub
2. Ve a [vercel.com](https://vercel.com) y conecta tu cuenta de GitHub
3. Importa tu repositorio
4. Vercel detectará automáticamente que es un proyecto Vite
5. Haz click en "Deploy"

### Opción 2: Deploy Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Para producción
vercel --prod
```

### Configuración de Vercel

El proyecto está configurado para funcionar con Vercel sin configuración adicional. Sin embargo, puedes crear un archivo `vercel.json` si necesitas configuraciones específicas:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

## 📁 Estructura del Proyecto

```
├── public/                 # Archivos estáticos
├── src/
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes de UI (shadcn)
│   │   └── ...
│   ├── lib/              # Utilidades
│   ├── imports/          # SVGs y assets importados
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── index.html            # Template HTML
├── package.json          # Dependencias
├── vite.config.ts        # Configuración Vite
├── tailwind.config.js    # Configuración Tailwind
└── tsconfig.json         # Configuración TypeScript
```

## 🎨 Características

- **Diseño Responsivo** - Optimizado para móvil y desktop
- **Animaciones Fluidas** - Powered by Framer Motion
- **Componentes Accesibles** - Basados en Radix UI
- **Formulario de Contacto** - Envío directo a nawalbouanani36@gmail.com
- **Optimizado para SEO** - Meta tags y estructura semántica
- **Carga Rápida** - Optimizaciones de Vite y lazy loading

## 📧 Configuración de Email

El formulario de contacto está configurado para enviar emails a `nawalbouanani36@gmail.com`. 

Para configurar EmailJS:
1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email
3. Crea un template
4. Actualiza las variables en `src/App.tsx`:
   - `service_id`
   - `template_id` 
   - `user_id`

## 🔧 Variables de Entorno

No se requieren variables de entorno para el funcionamiento básico. Para EmailJS, las credenciales se configuran directamente en el código.

## 📱 Soporte

- ✅ Chrome/Edge (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Dispositivos móviles iOS/Android

## 📄 Licencia

© 2025 IN RESET. Todos los derechos reservados.