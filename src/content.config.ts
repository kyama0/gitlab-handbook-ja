import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const handbook = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/ja/handbook' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Hugo ordering hint carried over from upstream. Lower values appear first
    // in the sidebar; missing values default to 0.
    weight: z.number().optional(),
    // Path of the original English page, relative to handbook.gitlab.com.
    // e.g. "/handbook/engineering/" — used to build hreflang and "original" link.
    upstream_path: z.string(),
    // Git SHA of the upstream commit this translation is based on.
    upstream_sha: z.string(),
    // YAML auto-parses unquoted ISO 8601 timestamps as Date; coerce back to
    // string so downstream code (and the schema's .datetime() check) works.
    translated_at: z
      .preprocess(
        (v) => (v instanceof Date ? v.toISOString() : v),
        z.string().datetime(),
      )
      .optional(),
    translator: z.enum(['claude', 'human', 'claude+human']).default('claude'),
    // When true, the page is shown with a "translation out of date" banner.
    stale: z.boolean().default(false),
  }),
});

export const collections = { handbook };
