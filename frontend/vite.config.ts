import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // --- DÉBUT DE LA MODIFICATION ---
    proxy: {
      '/api': { // Toutes les requêtes qui commencent par '/api'
        target: 'http://10.0.0.2:5010', // Seront redirigées vers votre backend
        changeOrigin: true, // Important pour le traitement CORS
        secure: false, // À mettre à 'true' si votre API utilise HTTPS avec un certificat valide
        // Si le chemin sur le backend est exactement le même (ex: /api/telecom-opinions),
        // vous n'avez pas besoin de réécrire le chemin, ou vous pouvez le faire explicitement.
        // Ici, on le maintient tel quel pour s'assurer que /api fait partie du chemin cible.
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
    // --- FIN DE LA MODIFICATION ---
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
