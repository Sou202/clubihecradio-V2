import { defineConfig } from 'vite'
// (gardez vos autres imports actuels...)

export default defineConfig({
  plugins: [
    // Votre plugin TanStack Start ou Router existant
  ],
  // Désactivez le pré-rendu pour éviter l'erreur de recherche du serveur local
  server: {
    prerender: false,
  },
  // Si le plugin accepte des options de pré-rendu directement :
  ssr: {
    noExternal: true,
  }
})
