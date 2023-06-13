import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // 新增
  server: {
    port: 8888,
    cors: true, // 允许跨域
    // hmr: true, // 开启热更新
    proxy: {
      '/api': {
        target: 'http://localhost',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/mp4ToTs': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mp4ToTs/, ''),
      }
    },
  },
})
