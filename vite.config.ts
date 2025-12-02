import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/aad830b9-ba1e-4a95-8518-cf12b372f2e7/preview',
  plugins: [react()],
  server: {
    port: 5217,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5217,
    },
  },
})
