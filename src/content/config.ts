import { defineCollection, z } from 'astro:content';

const handbook = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Path of the original English page, relative to handbook.gitlab.com.
    // e.g. "/handbook/engineering/" — used to build hreflang and "original" link.
    upstream_path: z.string(),
    // Git SHA of the upstream commit this translation is based on.
    upstream_sha: z.string(),
    translated_at: z.string().datetime().optional(),
    translator: z.enum(['claude', 'human', 'claude+human']).default('claude'),
    // When true, the page is shown with a "translation out of date" banner.
    stale: z.boolean().default(false),
  }),
});

export const collections = { handbook };
