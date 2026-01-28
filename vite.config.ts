import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import { dependencies } from './package.json'

const exclVendors = ['react', 'react-router-dom', 'react-dom']
function renderChunks(deps: Record<string, string>) {
  let chunks = {}
  Object.keys(deps).forEach((key) => {
    if (exclVendors.includes(key)) return
    chunks[key] = [key]
  })
  return chunks
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ranielcsar.github.io/',
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  define: {
    'process.env': {},
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          ...renderChunks(dependencies),
        },
      },
    },
  },
})
