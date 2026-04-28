import type { ShortcodeHandler } from './types.ts';
import { parseArgs } from './types.ts';

// Hugo `a` shortcode: `{{% a "anchor-id" %}}` — emits an empty anchor
// target so other links can deep-link to that point in the document.
export const anchor: ShortcodeHandler = (args) => {
  const { positional, named } = parseArgs(args);
  const id = positional[0] ?? named.id ?? '';
  if (!id) return '';
  return `<span id="${id}"></span>`;
};
