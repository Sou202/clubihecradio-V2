import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackViteConfig } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    react(),
    tanstackViteConfig(),
  ],
  server: {
    prerender: false,
  },
})
