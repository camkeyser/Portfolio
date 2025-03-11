import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(new Date().getTime()),
  },
  plugins: [
    react(),
    svgr(),
    compression({
      verbose: false,
      disable: false,
      deleteOriginFile: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  build: {
    outDir: 'dist',
  },
});