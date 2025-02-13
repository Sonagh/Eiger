import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@layout': '/src/components/layout',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@pages': '/src/pages',
    },
  },
})
