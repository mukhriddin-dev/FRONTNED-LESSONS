import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
    "@": path.resolve(__dirname, "./src"),
    "@components": path.resolve(__dirname, "./src/components"),
    "@ui": path.resolve(__dirname, "./src/components/ui"),
    "@layouts": path.resolve(__dirname, "./src/components/layouts"),
    "@form": path.resolve(__dirname, "./src/components/form"),
    "@images": path.resolve(__dirname, "./src/assets/images"),
    "@icons": path.resolve(__dirname, "./src/assets/icons"),
    "@mocks": path.resolve(__dirname, "./src/mocks"),
    "@utils": path.resolve(__dirname, "./src/utils"),
  },
},
})