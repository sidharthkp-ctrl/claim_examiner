import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      '@neutrinos/claims-ui': path.resolve(__dirname, '../../packages/claims-ui/src'),
    },
  },
  server: {
    port: 3000,
  },
})
