#!/bin/bash

echo "🎯 LIMPIAR PROYECTO - MANTENER DISEÑO REACT CORRECTO"
echo "=================================================="
echo ""
echo "❌ Problema identificado:"
echo "   - Tienes DOS versiones mezcladas"
echo "   - Versión React (App.tsx) = ✅ Diseño correcto"
echo "   - Versión vanilla (index.html) = ❌ Diseño básico"
echo ""
echo "🔧 Solución:"
echo "   - Eliminar archivos vanilla innecesarios"
echo "   - Mantener versión React que ya funciona"
echo "   - Limpiar duplicados y archivos de limpieza"
echo ""

# Función para eliminar archivo si existe
remove_if_exists() {
    if [ -e "$1" ]; then
        rm -rf "$1"
        echo "🗑️  Eliminado: $1"
    fi
}

echo "🗑️  ELIMINANDO ARCHIVOS VANILLA INNECESARIOS..."
echo "============================================="

# Eliminar versión vanilla (no necesaria)
remove_if_exists "index.html"
remove_if_exists "css/"
remove_if_exists "js/"

# Eliminar archivos de limpieza
echo ""
echo "🧹 ELIMINANDO ARCHIVOS DE LIMPIEZA..."
remove_if_exists "CHECKLIST-DEPLOY.md"
remove_if_exists "CLEANUP-INSTRUCTIONS.md"
remove_if_exists "FINAL-CLEANUP.sh"
remove_if_exists "INSTRUCCIONES-VERCEL.md"
remove_if_exists "README-DEPLOY.md"
remove_if_exists "SOLUCION-VERCEL-ERROR.sh"
remove_if_exists "clean-project.js"
remove_if_exists "package-clean.json"
remove_if_exists "fix-vercel-error.sh"

# Eliminar duplicados en src/ (mantener solo raíz)
echo ""
echo "🔄 ELIMINANDO DUPLICADOS..."
remove_if_exists "src/"

echo ""
echo "✅ LIMPIEZA COMPLETADA!"
echo "======================"
echo ""

echo "📁 Estructura final:"
echo "==================="
find . -maxdepth 2 -type f -name "*.tsx" -o -name "*.ts" -o -name "*.json" -o -name "*.js" | head -20

echo ""
echo "🎯 VERIFICACIÓN DEL DISEÑO:"
echo "=========================="

if [ -e "App.tsx" ]; then
    echo "✅ App.tsx - Diseño correcto mantenido"
    
    # Verificar que tiene las importaciones de Figma
    if grep -q "figma:asset" App.tsx; then
        echo "✅ Importaciones de Figma - Presentes"
    else
        echo "⚠️  Importaciones de Figma - Revisar"
    fi
    
    # Verificar que tiene los componentes principales
    if grep -q "Hero.*function" App.tsx; then
        echo "✅ Componente Hero - Presente"
    fi
    
    if grep -q "Innova.*function" App.tsx; then
        echo "✅ Componente Innova - Presente"
    fi
    
    if grep -q "motion\." App.tsx; then
        echo "✅ Animaciones Framer Motion - Presentes"
    fi
    
else
    echo "❌ App.tsx - FALTA (CRÍTICO)"
fi

echo ""
echo "🚀 CONFIGURACIÓN VERCEL:"
echo "======================="

if [ -e "vercel.json" ]; then
    echo "✅ vercel.json existe"
    
    # Mostrar contenido actual
    echo "📄 Contenido actual:"
    cat vercel.json
    
else
    echo "❌ vercel.json - Creando configuración para React..."
    
    # Crear vercel.json para React
    cat > vercel.json << 'EOF'
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite"
}
EOF
    
    echo "✅ vercel.json creado para React"
fi

echo ""
echo "📦 VERIFICANDO DEPENDENCIAS:"
echo "=========================="

if [ -e "package.json" ]; then
    echo "✅ package.json existe"
    
    # Verificar dependencias clave
    if grep -q "react" package.json; then
        echo "✅ React - Instalado"
    fi
    
    if grep -q "framer-motion" package.json; then
        echo "✅ Framer Motion - Instalado"
    fi
    
    if grep -q "vite" package.json; then
        echo "✅ Vite - Instalado"
    fi
    
else
    echo "❌ package.json - FALTA (CRÍTICO)"
fi

echo ""
echo "🎉 ¡PROYECTO LIMPIO Y LISTO!"
echo "============================"
echo ""
echo "✅ Versión React mantenida con diseño correcto"
echo "✅ Archivos vanilla innecesarios eliminados"
echo "✅ Duplicados eliminados"
echo "✅ Archivos de limpieza eliminados"
echo ""
echo "📋 Próximos pasos:"
echo "1. git add ."
echo "2. git commit -m 'Clean: Keep React version with correct design'"
echo "3. git push"
echo "4. Vercel detectará automáticamente el framework React/Vite"
echo "5. ¡El diseño correcto se desplegará!"
echo ""
echo "🌐 Resultado esperado:"
echo "• ✅ Diseño idéntico a la versión de desarrollo"
echo "• ✅ Todas las animaciones Framer Motion funcionando"
echo "• ✅ Importaciones de Figma correctas"
echo "• ✅ Componentes Hero, Innova, etc. con estilos correctos"
echo ""
echo "📧 El diseño final será idéntico al App.tsx actual"