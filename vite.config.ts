
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: 2006
  },
  /* 路径别名 */
  resolve: {
    alias: {
        '@': path.resolve(__dirname,"./src")
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ["vue", "vue-router"],
      include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/,/\.t\?js$/],
      resolvers: [ElementPlusResolver()],
      dts:'./auto-imports.d.ts',
    }),
    Components({
      include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/,/\.t\?js$/],
      resolvers: [ElementPlusResolver()],
      dts: true,
    }),
  ]
})
