// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // ✅ important for Render to detect port
    port: 5173,       // ✅ or any other you use
    allowedHosts: ['blog-frontendnew-2.onrender.com'] // ✅ Add your Render domain here
  }
})
