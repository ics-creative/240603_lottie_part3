import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  root: "src",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        test1: resolve(__dirname, "src/test1-lottie-playing/index.html"),
        test2: resolve(__dirname, "src/test2-complex-lottie/index.html"),
      },
    },
  },
});
