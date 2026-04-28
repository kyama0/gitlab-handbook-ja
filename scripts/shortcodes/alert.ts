import type { PairedShortcodeHandler } from './types.ts';
import { parseArgs } from './types.ts';

// Hugo `alert` shortcode (Docsy theme). The upstream handbook uses amber
// styling for all alert variants regardless of `color`, so we match that
// for visual consistency. Inner content is preserved as Markdown — blank
// lines around the HTML wrapper let remark process the inside as a normal
// paragraph.
export const alert: PairedShortcodeHandler = (args, inner) => {
  const { named } = parseArgs(args);
  const title = named.title;

  // CommonMark only re-enters Markdown processing inside an HTML block when
  // a blank line follows the opening tag (and precedes the closing tag).
  const titleBlock = title
    ? `<p class="!mt-0 !mb-1 font-bold text-amber-700">${title}</p>\n\n`
    : '';
  return `\n<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">\n\n${titleBlock}${inner.trim()}\n\n</div>\n`;
};
