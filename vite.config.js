import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import styleImport from "vite-plugin-style-import";

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: "vxe-table",
          esModule: true,
          resolveComponent: name => `vxe-table/es/${name}`,
          resolveStyle: name => `vxe-table/es/${name}/style.css`
        }
      ]
    })
  ],
  base: "./",
  resolve: {
    alias: {
      // 如果报错__dirname找不到，需要安装node,执行npm install @types/node --save-dev
      "/@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@views": path.resolve(__dirname, "src/views"),
      "@store": path.resolve(__dirname, "src/store")
    }
  },
  build: {
    outDir: "dist"
  },
  server: {
    https: false, // 是否开启 https
    open: true, // 是否自动在浏览器打开
    port: 3010, // 端口号
    host: "0.0.0.0",
    proxy: {
      "/api": {
        // target:"https://mock.mengxuegu.com/mock/6188fda74c5d9932f7e75822/duonanjian/", // 后台接口
        target: "http://localhost:3000/", // 后台接口

        changeOrigin: true,
        secure: false, // 如果是https接口，需要配置这个参数
        // ws: true, //websocket支持
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: ["element-plus"]
  }
});
