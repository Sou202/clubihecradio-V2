// app.config.ts
import { defineConfig } from '@tanstack/start/config'

export default defineConfig({
  server: {
    preset: 'cloudflare-pages',
  },
  tsr: {
    // ...
  },
  // If prerendering is causing issues on deployment builds, disable it:
  prerender: {
    enabled: false,
  },
})
