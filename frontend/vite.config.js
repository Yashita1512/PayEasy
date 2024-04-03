import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteGhPages from "vite-plugin-gh-pages"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteGhPages],
})
