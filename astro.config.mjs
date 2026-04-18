import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// NOTE: Replace with the final production URL before launch.
const SITE = process.env.SITE_URL ?? 'https://gitlab-handbook-ja.pages.dev';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap(), tailwind()],
  build: {
    format: 'directory',
  },
  vite: {
    define: {
      'import.meta.env.PUBLIC_UPSTREAM_BASE': JSON.stringify('https://handbook.gitlab.com'),
      'import.meta.env.PUBLIC_R2_BASE': JSON.stringify(
        process.env.PUBLIC_R2_BASE ?? 'https://images.example.com'
      ),
    },
  },
});
