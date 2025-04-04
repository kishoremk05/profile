import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',  // For GitHub Pages
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      external: ['@rollup/rollup-linux-x64-gnu'], // 👈 Tells Rollup not to bundle this
    }
  }
})
