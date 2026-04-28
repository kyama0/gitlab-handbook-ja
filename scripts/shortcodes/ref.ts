import type { ShortcodeHandler } from './types.ts';
import { parseArgs } from './types.ts';

// Hugo `ref` shortcode: `{{< ref "name" >}}` — resolves to the URL of a
// content page identified by `name`. The full Hugo resolver scans the
// content tree and pre-registers paths; we don't replicate that. Instead
// we emit the literal name so the surrounding `[text](URL)` Markdown link
// stays intact and degrades to a relative URL. The author can hand-fix
// these later if exact resolution matters.
export const ref: ShortcodeHandler = (args) => {
  const { positional, named } = parseArgs(args);
  const name = positional[0] ?? named.name ?? '';
  if (!name) return '#';
  return name;
};
