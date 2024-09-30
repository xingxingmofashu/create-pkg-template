import path from "node:path"
import alias from "@rollup/plugin-alias"
import resolve from "@rollup/plugin-node-resolve"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "packages/index.ts"),
      name: "create-pkg",
    },
    rollupOptions: {
      output: [
        {
          format: "cjs",
          entryFileNames: "[name].js",
          exports: "named",
        },
        {
          format: "esm",
          entryFileNames: "[name].mjs",
        },
      ],
      plugins: [
        resolve(),
        alias({
          entries: [
            {
              find: "@create-pkg",
              replacement: path.resolve(__dirname, "packages"),
            },
          ],
        }),
      ],
    },
  },
})
