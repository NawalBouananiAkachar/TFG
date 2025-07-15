#!/bin/bash

echo "🔧 LIMPIEZA FINAL PARA VERCEL"
echo "============================"
echo ""
echo "❌ Eliminando archivos duplicados y problemáticos..."
echo ""

# Eliminar archivos duplicados en la raíz (mantener solo src/)
rm -rf App.tsx
rm -rf components/
rm -rf imports/
rm -rf css/
rm -rf js/

# Eliminar archivos vanilla innecesarios
rm -rf CHECKLIST-DEPLOY.md
rm -rf CLEANUP-INSTRUCTIONS.md
rm -rf FINAL-CLEANUP.sh
rm -rf INSTRUCCIONES-VERCEL.md
rm -rf LIMPIAR-MANTENER-REACT.sh
rm -rf README-DEPLOY.md
rm -rf SOLUCION-FINAL.sh
rm -rf SOLUCION-VERCEL-ERROR.sh
rm -rf ARREGLAR-BUILD.sh
rm -rf clean-project.js
rm -rf package-clean.json
rm -rf fix-vercel-error.sh

# Mantener solo la estructura estándar de Vite
echo "✅ Estructura limpia:"
echo "   📁 src/"
echo "   ├── App.tsx"
echo "   ├── main.tsx"
echo "   ├── components/"
echo "   └── imports/"
echo ""
echo "   📁 Raíz/"
echo "   ├── package.json"
echo "   ├── vite.config.ts"
echo "   ├── tsconfig.json"
echo "   └── index.html"
echo ""

echo "🚀 LISTO PARA VERCEL:"
echo "1. git add ."
echo "2. git commit -m 'Clean: Final structure for Vercel deploy'"
echo "3. git push"
echo ""
echo "✅ Vercel detectará automáticamente:"
echo "   • Framework: Vite"
echo "   • Build Command: npm run build"
echo "   • Output Directory: dist"
echo "   • Install Command: npm install"
echo ""
echo "🎯 Resultado esperado:"
echo "   • Build exitoso"
echo "   • Diseño exacto de Figma"
echo "   • Todas las animaciones funcionando"
echo "   • Sin errores de dependencias"