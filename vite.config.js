// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          mui: ['@mui/material', '@mui/icons-material'],
          datatables: ['datatables.net', 'jquery'],
          reactVendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
