import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
      alias: {
          '@sdk': path.resolve(__dirname, './src/sdk'),
          '@common-components': path.resolve(__dirname, './src/common-components'),
      }
    },
    plugins: [react(),
        eslint({exclude: ['/virtual:/**', 'node_modules/**']})
    ],
})
