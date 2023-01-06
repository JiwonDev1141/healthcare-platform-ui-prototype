import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       appMain: fileURLToPath(new URL('./projects/mirmetacare/index.html', import.meta.url)),
  //       appOther: fileURLToPath(new URL('./projects/jejudiver/index.html', import.meta.url)),
  //     }
  //   },

  //   // Disable Brotli compression, as StackBlitz does not support it
  //   brotliSize: false,
  // },
})
