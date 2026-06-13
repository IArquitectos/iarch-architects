// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import type { Plugin } from "vite";

function copyNetlifyRedirects(): Plugin {
  let root = process.cwd();
  let outDir = resolve(root, "dist");

  return {
    name: "copy-netlify-redirects",
    apply: "build",
    configResolved(config) {
      root = config.root;
      outDir = resolve(config.root, config.build.outDir);
    },
    writeBundle() {
      const source = resolve(root, "public/_redirects");
      const target = resolve(outDir, "_redirects");

      if (!existsSync(source)) return;

      mkdirSync(dirname(target), { recursive: true });
      copyFileSync(source, target);
    },
  };
}

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  vite: {
    plugins: [copyNetlifyRedirects()],
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
