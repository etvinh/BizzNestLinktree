import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/BizzNestLinktree/',
  plugins: [react()],

  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    coverage: {
      exclude: [
        'test/*',
        'src/main.jsx',
        'vite.config.js',
      ],
    },
  },
})
