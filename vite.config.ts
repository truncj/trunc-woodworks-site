import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    // Base needs to be set for GitHub Pages if you are not using a custom domain.
    // Use './' for relative paths which works on most static hosts.
    base: './',
  }
})