import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
        quietDeps: true,
      },
      scss: {
        silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
        quietDeps: true,
      },
    },
  },
})