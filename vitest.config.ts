import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "happy-dom",
      setupFiles: ["./vitest.setup.ts"],
      include: ["{src,tests}/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    },
  }),
);
