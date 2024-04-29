import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@/', replacement: resolve(__dirname, './src/') }, 
      { find: '@/pages', replacement: resolve(__dirname, './src/pages/') },
      { find: '@/app', replacement: resolve(__dirname, './src/app/') },
      { find: '@/shared', replacement: resolve(__dirname, './src/shared/') },
      { find: '@/widgets', replacement: resolve(__dirname, './src/widgets/') },
      { find: '@/features', replacement: resolve(__dirname, './src/features/') },
      { find: '@/entities', replacement: resolve(__dirname, './src/entities/') },
    ]
  }
})
