import type { PairedShortcodeHandler } from './types.ts';
import { parseArgs } from './types.ts';

// Hugo `card` shortcode (Docsy/Bootstrap-style card). Args we observe in
// upstream content: `header`, `footer`, `header-bg`. Inner content is
// usually an image (the card body). Blank lines around the HTML wrapper
// let remark process the inside as Markdown.
export const card: PairedShortcodeHandler = (args, inner) => {
  const { named } = parseArgs(args);
  const header = named.header ?? '';
  const footer = named.footer ?? '';
  const headerBg = (named['header-bg'] ?? '').toLowerCase();

  const headerPalette: Record<string, string> = {
    primary: 'bg-blue-100 text-blue-900',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-900',
    info: 'bg-sky-100 text-sky-900',
    warning: 'bg-amber-100 text-amber-900',
    danger: 'bg-red-100 text-red-900',
  };
  const headerClass = headerPalette[headerBg] ?? 'bg-gray-50 text-gray-800';

  const headerBlock = header
    ? `<div class="${headerClass} px-3 py-2 font-semibold border-b border-gray-200">\n\n${header}\n\n</div>\n\n`
    : '';
  const footerBlock = footer
    ? `\n\n<div class="bg-gray-50 px-3 py-2 text-sm text-gray-700 border-t border-gray-200">\n\n${footer}\n\n</div>`
    : '';

  return `\n<div class="border border-gray-200 rounded overflow-hidden">\n\n${headerBlock}<div class="px-3 py-2">\n\n${inner.trim()}\n\n</div>${footerBlock}\n\n</div>\n`;
};
