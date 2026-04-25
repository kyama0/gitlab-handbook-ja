import { readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import type { ShortcodeHandler } from './types.ts';
import { parseArgs } from './types.ts';

// The Hugo `include` shortcode inlines a file. In the upstream GitLab handbook
// it is almost always a marketing CTA that pulls from `assets/includes/*.md`
// with Bootstrap markup tied to Docsy. Translating those wholesale adds noise
// to an unofficial translation site, so by default we emit nothing.
//
// Override: drop a localized file at `content/ja/includes/<path>` relative to
// the repo root. If present, the handler includes it verbatim.
export const include: ShortcodeHandler = async (args, ctx) => {
  const { positional } = parseArgs(args);
  const relPath = positional[0];
  if (!relPath) return '';

  const repoRoot = resolve(ctx.upstreamDir, '..');
  const localizedPath = join(repoRoot, 'content', 'ja', relPath);

  try {
    const body = await readFile(localizedPath, 'utf8');
    return `\n\n${stripFrontmatter(body)}\n\n`;
  } catch {
    return `\n<!-- include omitted: ${relPath} (no localized version under content/ja/) -->\n`;
  }
};

function stripFrontmatter(md: string): string {
  return md.replace(/^---\n[\s\S]*?\n---\n/, '').trim();
}
