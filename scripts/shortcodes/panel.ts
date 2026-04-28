import type { PairedShortcodeHandler } from './types.ts';
import { parseArgs } from './types.ts';

// Hugo `panel` shortcode (Bootstrap-style). Renders a bordered box with a
// colored header strip. Inner content is preserved as Markdown — blank
// lines around the HTML wrapper let remark process the inside.
export const panel: PairedShortcodeHandler = (args, inner) => {
  const { named } = parseArgs(args);
  const header = named.header ?? '';
  const headerBg = (named['header-bg'] ?? 'info').toLowerCase();

  const palette: Record<string, { border: string; bg: string; text: string }> = {
    primary: { border: 'border-blue-300', bg: 'bg-blue-100', text: 'text-blue-900' },
    success: { border: 'border-green-300', bg: 'bg-green-100', text: 'text-green-900' },
    info: { border: 'border-sky-300', bg: 'bg-sky-100', text: 'text-sky-900' },
    warning: { border: 'border-amber-300', bg: 'bg-amber-100', text: 'text-amber-900' },
    danger: { border: 'border-red-300', bg: 'bg-red-100', text: 'text-red-900' },
  };
  const color = palette[headerBg] ?? palette.info;

  // Header is often Markdown like `**Title**`; pass it through inline so
  // remark renders the bold. We use `<p>` with inline-block-ish styling.
  const headerBlock = header
    ? `<div class="${color.bg} ${color.text} px-4 py-2 font-semibold border-b ${color.border}">\n\n${header}\n\n</div>\n\n`
    : '';

  return `\n<div class="my-4 border ${color.border} rounded overflow-hidden">\n\n${headerBlock}<div class="px-4 py-3">\n\n${inner.trim()}\n\n</div>\n\n</div>\n`;
};
