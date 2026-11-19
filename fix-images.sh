#!/bin/bash

echo "🔧 Reorganizando imágenes para producción..."

# Paso 1: Crear carpeta assets en public
mkdir -p public/assets

# Paso 2: Mover imágenes de src/assets a public/assets
echo "📁 Moviendo imágenes..."
find src/assets -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.webp" -o -name "*.svg" \) -exec mv {} public/assets/ \;

# Paso 3: Actualizar rutas en archivos JSX
echo "🔄 Actualizando rutas en archivos..."

# Reemplazar /src/assets/ por /assets/ en todos los archivos JSX
find src -type f -name "*.jsx" -exec sed -i '' 's|/src/assets/|/assets/|g' {} \;
find src -type f -name "*.jsx" -exec sed -i '' 's|src/assets/|/assets/|g' {} \;

echo "✅ ¡Listo! Ahora ejecuta: npm run build"