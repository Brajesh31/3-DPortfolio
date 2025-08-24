import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Updated for Vercel deployment
  plugins: [react()],
  define: {
    // Prevent "process is not defined" errors in production build
    'process.env': {}
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'three', '@react-three/fiber', '@react-three/drei'],
          animations: ['@react-spring/three', 'framer-motion'],
          ui: ['react-bootstrap', 'bootstrap']
        }
      }
    },
    chunkSizeWarningLimit: 1600
  },
  server: {
    port: 3000
  }
})
