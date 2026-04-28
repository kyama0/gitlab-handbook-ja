import type { PairedShortcodeHandler } from './types.ts';

// Hugo `cardpane` groups multiple `card` shortcodes in a horizontal layout
// (Bootstrap card-deck). The inner content still contains `{{% card %}}`
// pairs at this point — they get processed by the `card` handler in the
// next iteration of the paired-shortcode pass. Blank lines around each
// wrapper let remark process the inside as a Markdown block.
export const cardpane: PairedShortcodeHandler = (_args, inner) => {
  return `\n<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 my-4">\n\n${inner.trim()}\n\n</div>\n`;
};
