import type { ShortcodeHandler } from './types.ts';
import { parseArgs } from './types.ts';

// Hugo `tech-stack` shortcode embeds details for an application from the
// upstream `site.Data.public.teach_stack` data file (note the typo). That
// data file is not included in the handbook submodule, so we render a
// lightweight placeholder linking to the live upstream tech-stack index
// where the application card can be viewed in full.
export const techStack: ShortcodeHandler = (args) => {
  const { positional, named } = parseArgs(args);
  const name = positional[0] ?? named.name ?? '';
  if (!name) return '';
  const upstreamUrl = 'https://handbook.gitlab.com/handbook/business-technology/tech-stack/';
  return `\n<p class="my-2 text-sm text-gray-600"><strong>${name}</strong> — 詳細は <a href="${upstreamUrl}" rel="external noopener">テックスタック (英語)</a> を参照してください。</p>\n`;
};
