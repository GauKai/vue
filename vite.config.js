import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 如過是 '/' github 專案名稱為 github使用者名稱.github.io
  // 如過是 其他名稱 需要跟github 上一樣
  // base: '/',
  base: '/vue/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    open: true,
  }
})
