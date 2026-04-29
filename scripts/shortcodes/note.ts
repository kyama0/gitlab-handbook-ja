import type { PairedShortcodeHandler } from './types.ts';

// Docsy-GitLab `note` shortcode: wraps inner Markdown in a blue note callout.
export const note: PairedShortcodeHandler = (_args, inner) => {
  return `\n<div class="my-4 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r">\n\n<p class="!mt-0 !mb-1 font-bold text-blue-700">Note:</p>\n\n${inner.trim()}\n\n</div>\n`;
};
