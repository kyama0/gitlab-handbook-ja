import type { PairedShortcodeHandler } from './types.ts';
import { parseArgs } from './types.ts';

// Docsy-GitLab `details` shortcode: renders a native HTML <details> element.
// Supports `summary="..."` and `open` named args.
export const details: PairedShortcodeHandler = (args, inner) => {
  const { named } = parseArgs(args);
  const summary = named.summary ?? 'Click to expand';
  const open = 'open' in named ? ' open' : '';
  return `\n<details${open}>\n<summary>${summary}</summary>\n\n${inner.trim()}\n\n</details>\n`;
};
