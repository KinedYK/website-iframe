import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const { resolve } = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${resolve(
          __dirname,
          "src/assets/styles/base.less"
        )}";`,
      },
    },
  },
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "http://8.131.88.218:8082/navigation/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), //把src改为@
    },
  },
});
