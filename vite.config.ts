import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser', // Uses terser for better minification
    cssCodeSplit: true, // Splits CSS into smaller chunks
    terserOptions: {
      compress: {
        drop_console: true, // Removes console.log from production
        drop_debugger: true,
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

