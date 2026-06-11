import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  root: "src",
  assetsInclude: ["**/*.lottie"],
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        simpleSearch: resolve(__dirname, "src/simple-search/index.html"),
        optimization: resolve(__dirname, "src/optimization/index.html"),
        canvas: resolve(__dirname, "src/complex-default/index.html"),
        webworker: resolve(__dirname, "src/complex-webworker/index.html"),
        webgl: resolve(__dirname, "src/complex-webgl/index.html"),
        webgpu: resolve(__dirname, "src/complex-webgpu/index.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
