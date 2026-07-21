import { defineConfig } from "oxfmt";

export default defineConfig({
  printWidth: 100,
  sortPackageJson: false,
  ignorePatterns: [
    ".git",
    ".idea",
    ".vscode",
    "dist",
    "node_modules",
    "oxfmt.config.ts",
    "oxlint.config.ts",
    "pnpm-lock.yaml",
    "pnpm-workspace.yaml",
    "tsconfig.app.json",
    "tsconfig.json",
    "tsconfig.node.json",
    "vite.config.ts",
    "vitest.config.ts",
  ],
});
