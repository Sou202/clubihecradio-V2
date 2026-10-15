import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackViteConfig } from '@lovable.dev/vite-tanstack-config'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tanstackViteConfig,
  ],
  // Désactive complètement le pré-rendu qui pose problème sur Cloudflare Pages
  server: {
    prerender: {
      enabled: false,
    },
  },
  ssr: {
    noExternal: true,
  },
})
