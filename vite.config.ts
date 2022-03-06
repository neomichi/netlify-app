import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path  from "path";
import * as fs from "fs";




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
