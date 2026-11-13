import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/new-Nasa/',
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/.venv/**', '**/saves/**', '**/__pycache__/**', '**/*.zip', '**/*.glb', '**/*.stl'],
    },
  },
}))
