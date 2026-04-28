import type { ShortcodeHandler } from './types.ts';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';

interface MisusedTerm {
  avoid?: string[];
  use_instead?: string[];
  reason?: string;
  exclude_from_exports?: boolean;
}

// Hugo `misused-terms` shortcode renders a table of terms-to-avoid from
// `data/misused_terms.yml`. Read the upstream YAML directly and emit a
// Markdown table (which remark renders as proper HTML).
export const misusedTerms: ShortcodeHandler = async (_args, ctx) => {
  const yamlPath = path.join(ctx.upstreamDir, 'data', 'misused_terms.yml');
  let raw: string;
  try {
    raw = await readFile(yamlPath, 'utf8');
  } catch {
    return '<!-- misused_terms.yml not found -->';
  }

  const entries = (parseYaml(raw) ?? []) as MisusedTerm[];
  const rows = entries
    .filter((e): e is MisusedTerm => !!e && Array.isArray(e.avoid) && e.avoid.length > 0)
    .map((e) => {
      const avoid = (e.avoid ?? []).join('<br>');
      const use = (e.use_instead ?? []).join('<br>');
      const reason = (e.reason ?? '').replace(/\n+/g, ' ').trim();
      return `| ${avoid} | ${use} | ${reason} |`;
    });

  return `\n| 避けたい用語 | 代わりに使う | 理由 |\n| --- | --- | --- |\n${rows.join('\n')}\n`;
};
