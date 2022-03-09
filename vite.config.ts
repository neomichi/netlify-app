import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'
import * as path  from "path";

import { viteStaticCopy } from 'vite-plugin-static-copy'

const devPath=path.resolve(__dirname, "src","assets",'fonts')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    viteStaticCopy({targets: [
      { src: devPath+'/*', dest: 'dist/public/fonts/' }
      
    ]
})

],
  optimizeDeps: {
    include: ["vue", "vue-router"],
  },
  build: {
    sourcemap: true,
  },
  // css: {
  //   postcss: {
  //     plugins: [
  //       autoprefixer()
  //     ]
  //   }
  // },

  
  resolve: { 
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 80,
    open: true,  
  },
})
