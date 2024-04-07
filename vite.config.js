import { defineConfig } from 'vite'
import { resolve } from "path";
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import alias from '@rollup/plugin-alias';

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      react(),
      alias({
        entries: [
          {find: '@sdk', replacement: resolve(projectRootDir, 'src/sdk')},
          {find: '@common-components', replacement: resolve(projectRootDir, 'src/common-components')},
        ]}),
      eslint({exclude: ['/virtual:/**', 'node_modules/**']})
    ],
})
