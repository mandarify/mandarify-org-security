import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
   plugins: [react()],
   server: {
      host: '0.0.0.0',
      port: 5173,
   },
   build: {
      outDir: 'dist',
      sourcemap: false,
      assetsDir: 'assets',
      rollupOptions: {
         output: {
            entryFileNames: 'assets/[name].js',
            chunkFileNames: 'assets/[name].js',
            assetFileNames: 'assets/[name][extname]',
         }
      }
   }
})
