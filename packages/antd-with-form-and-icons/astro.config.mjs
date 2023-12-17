// @ts-check
import { defineConfig } from "astro/config";
import path from "path";
import react from "@astrojs/react";
import module from "module";

const createRequire = module.createRequire(import.meta.url);

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ["@ant-design/icons", "@ant-design/icons-svg", "rc-util"],
    },
    build: { minify: false },
    resolve: {
      alias: {
        // "@ant-design/icons": "@ant-design/icons",
      },
    },
  },
});
