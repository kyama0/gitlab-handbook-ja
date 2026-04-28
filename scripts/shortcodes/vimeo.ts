import type { ShortcodeHandler } from './types.ts';
import { parseArgs } from './types.ts';

// Hugo `vimeo` shortcode: `{{< vimeo 123456 >}}`. Mirrors the youtube
// handler — emits a responsive 16:9 iframe.
export const vimeo: ShortcodeHandler = (args) => {
  const { positional, named } = parseArgs(args);
  const id = positional[0] ?? named.id ?? '';
  if (!id) return '';
  const src = `https://player.vimeo.com/video/${id}`;
  return `
<div class="relative my-6" style="aspect-ratio: 16 / 9;">
  <iframe src="${src}" title="Vimeo video" loading="lazy" allowfullscreen class="absolute inset-0 w-full h-full"></iframe>
</div>
`;
};
