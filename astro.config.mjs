import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { rewriteAssetPaths } from './src/plugins/rewrite-asset-paths.mjs';
import { headingIds } from './src/plugins/heading-ids.mjs';

// `||` (not `??`) — GitHub Actions injects unset `vars.*` as empty strings,
// not undefined, so `??` would not fall back and Astro would reject the
// empty string with "Invalid URL".
const SITE = process.env.SITE_URL || 'https://gl-handbook-ja.page';
const UPSTREAM_BASE = 'https://handbook.gitlab.com';
// Asset host for absolute paths inside Markdown (`/images/...` etc.). In prod
// builds set PUBLIC_R2_BASE to the R2 public URL (e.g. https://pub-xxx.r2.dev).
// When unset (or empty), fall back to the upstream handbook so local dev
// keeps working without an R2 bucket.
const ASSET_BASE = process.env.PUBLIC_R2_BASE || UPSTREAM_BASE;

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [headingIds(), rewriteAssetPaths({ base: ASSET_BASE })],
  },
  build: {
    format: 'directory',
  },
  vite: {
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    define: {
      'import.meta.env.PUBLIC_UPSTREAM_BASE': JSON.stringify(UPSTREAM_BASE),
      'import.meta.env.PUBLIC_R2_BASE': JSON.stringify(ASSET_BASE),
    },
  },
});
