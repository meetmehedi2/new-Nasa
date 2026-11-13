import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/nasa2026_nehal-s_extended_version/',
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/.venv/**', '**/saves/**', '**/__pycache__/**', '**/*.zip', '**/*.glb', '**/*.stl'],
    },
  },
})
