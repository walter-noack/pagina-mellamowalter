// URL base del backend del blog. En desarrollo queda vacío y el proxy de
// Vite (vite.config.js) reenvía /api hacia localhost:4001. En producción se
// define VITE_API_URL al momento del build, ya que el backend vive en un
// subdominio aparte (ej. api-blog.mellamowalter.cl) mientras el sitio
// estático sigue en cPanel:
//
//   VITE_API_URL=https://api-blog.mellamowalter.cl npm run build
//
export const API_BASE = import.meta.env.VITE_API_URL || '';
