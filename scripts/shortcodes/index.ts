import type { ShortcodeContext, ShortcodeHandler } from './types.ts';
import { youtube } from './youtube.ts';
import { include } from './include.ts';
import { handbookDataToc } from './handbook-data-toc.ts';
import { handbookCounts } from './handbook-counts.ts';

const HANDLERS: Record<string, ShortcodeHandler> = {
  youtube,
  include,
  'handbook-data-toc': handbookDataToc,
  'handbook-counts': handbookCounts,
};

// Matches both `{{< name args >}}` and `{{% name args %}}`.
const SHORTCODE = /\{\{([<%])\s*([a-zA-Z][a-zA-Z0-9_-]*)\s*([\s\S]*?)\s*([>%])\}\}/g;

export interface TransformResult {
  content: string;
  unknown: Set<string>;
  handled: Set<string>;
}

export async function transformShortcodes(
  content: string,
  ctx: ShortcodeContext
): Promise<TransformResult> {
  const unknown = new Set<string>();
  const handled = new Set<string>();
  const replacements: Array<{ start: number; end: number; replacement: string }> = [];

  SHORTCODE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = SHORTCODE.exec(content)) !== null) {
    const match = m[0];
    const name = m[2];
    const args = m[3];

    const handler = HANDLERS[name];
    if (!handler) {
      unknown.add(name);
      continue;
    }

    const replacement = await handler(args, ctx);
    replacements.push({
      start: m.index,
      end: m.index + match.length,
      replacement,
    });
    handled.add(name);
  }

  // Apply replacements from the end so offsets stay valid.
  let result = content;
  for (let i = replacements.length - 1; i >= 0; i--) {
    const r = replacements[i];
    result = result.slice(0, r.start) + r.replacement + result.slice(r.end);
  }

  return { content: result, unknown, handled };
}

export type { ShortcodeContext, ShortcodeHandler };
