import type { ShortcodeHandler } from './types.ts';
import { parseArgs } from './types.ts';

export const youtube: ShortcodeHandler = (args) => {
  const { positional, named } = parseArgs(args);
  const raw = positional[0] ?? named.id ?? '';
  if (!raw) return '';
  const [id, qs] = raw.split('?');
  const src = `https://www.youtube.com/embed/${id}${qs ? `?${qs}` : ''}`;
  return `
<div class="relative my-6" style="aspect-ratio: 16 / 9;">
  <iframe src="${src}" title="YouTube video" loading="lazy" allowfullscreen class="absolute inset-0 w-full h-full"></iframe>
</div>
`;
};
