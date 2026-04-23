import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change base to your GitHub repo name if hosting at:
// https://<username>.github.io/<repo-name>/
// If hosting at a custom domain (angeld.design), set base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/', // change to '/repo-name/' if using github.io subdomain
})
