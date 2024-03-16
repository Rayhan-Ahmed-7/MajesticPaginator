import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import dts from "vite-plugin-dts"
import css from "vite-plugin-css"
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: "majestic-paginator",
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts(),css({
    name:"majestic-paginator",
    tranfrom:() =>  `style.css`
  })],
})
