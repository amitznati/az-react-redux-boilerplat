import { defineConfig } from 'vite'
import { resolve } from "path";
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import alias from '@rollup/plugin-alias';
import svgr from "vite-plugin-svgr";

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      react(),
      svgr(),
      alias({
        entries: [
          {find: '@sdk', replacement: resolve(projectRootDir, 'src/sdk')},
          {find: '@common-components', replacement: resolve(projectRootDir, 'src/common-components')},
          {find: '@widgets', replacement: resolve(projectRootDir, 'src/widgets')},
          {find: '@assets', replacement: resolve(projectRootDir, 'src/assets')},
        ]}),
      eslint({exclude: ['/virtual:/**', 'node_modules/**']})
    ],
})
