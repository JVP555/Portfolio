import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // For Vercel (use '/Portfolio/' for GitHub Pages)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
