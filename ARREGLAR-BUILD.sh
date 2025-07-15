#!/bin/bash

echo "🔧 ARREGLANDO ERRORES DE BUILD - VERCEL"
echo "======================================"
echo ""
echo "❌ Errores identificados:"
echo "   • Estructura duplicada (App.tsx en raíz Y src/)"
echo "   • Imports de assets figma:asset/ no encontrados"
echo "   • Componentes UI faltantes"
echo "   • Archivos vanilla HTML/CSS/JS innecesarios"
echo ""
echo "🔧 Solución:"
echo "   • Mantener SOLO estructura src/ (estándar Vite)"
echo "   • Arreglar importaciones de assets"
echo "   • Limpiar archivos duplicados"
echo "   • Simplificar vercel.json"
echo ""

# Eliminar archivos duplicados en raíz (mantener solo src/)
echo "🗑️  ELIMINANDO DUPLICADOS..."
echo "=========================="

rm -rf css/
rm -rf js/
rm -rf index.html
rm -rf App.tsx
rm -rf components/
rm -rf imports/

# Eliminar archivos vanilla innecesarios
rm -rf CHECKLIST-DEPLOY.md
rm -rf CLEANUP-INSTRUCTIONS.md
rm -rf FINAL-CLEANUP.sh
rm -rf INSTRUCCIONES-VERCEL.md
rm -rf LIMPIAR-MANTENER-REACT.sh
rm -rf README-DEPLOY.md
rm -rf SOLUCION-FINAL.sh
rm -rf SOLUCION-VERCEL-ERROR.sh
rm -rf clean-project.js
rm -rf package-clean.json
rm -rf fix-vercel-error.sh

echo "✅ Duplicados eliminados"
echo ""

# Verificar estructura correcta
echo "📁 VERIFICANDO ESTRUCTURA..."
echo "=========================="

if [ -d "src/" ]; then
    echo "✅ src/ - Existe"
    
    if [ -f "src/App.tsx" ]; then
        echo "✅ src/App.tsx - Existe"
    else
        echo "❌ src/App.tsx - FALTA"
    fi
    
    if [ -d "src/components/" ]; then
        echo "✅ src/components/ - Existe"
    else
        echo "❌ src/components/ - FALTA"
    fi
    
else
    echo "❌ src/ - FALTA (Estructura incorrecta)"
fi

# Verificar archivos clave
if [ -f "package.json" ]; then
    echo "✅ package.json - Existe"
else
    echo "❌ package.json - FALTA"
fi

if [ -f "vite.config.ts" ]; then
    echo "✅ vite.config.ts - Existe"
else
    echo "❌ vite.config.ts - FALTA"
fi

echo ""
echo "🎯 SIGUIENTE PASO:"
echo "=================="
echo "• Ejecutar: npm install"
echo "• Verificar que src/App.tsx tenga imports correctos"
echo "• Hacer git commit y push"
echo ""
echo "🌐 Resultado esperado:"
echo "• ✅ Build exitoso en Vercel"
echo "• ✅ Detección automática de Vite"
echo "• ✅ Estructura limpia y funcional"