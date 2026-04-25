/**
 * Transform Hugo shortcodes inside one or more translated .md files into
 * rendered HTML. Writes in place.
 *
 * Usage:
 *   npm run transform:shortcodes -- <file.md>...
 *   npm run transform:shortcodes -- --all        # all files under content/ja/handbook
 */
import { readFile, writeFile } from 'node:fs/promises';
import { glob } from 'node:fs/promises';
import path from 'node:path';
import { transformShortcodes, type ShortcodeContext } from './shortcodes/index.ts';

const REPO_ROOT = path.resolve('.');
const UPSTREAM_DIR = path.resolve('upstream');
const TRANSLATED_ROOT = path.resolve('content/ja/handbook');

async function main() {
  const argv = process.argv.slice(2);
  const files: string[] = [];

  if (argv.includes('--all')) {
    for await (const f of glob('**/*.md', { cwd: TRANSLATED_ROOT })) {
      files.push(path.join(TRANSLATED_ROOT, f));
    }
  } else {
    for (const a of argv) {
      if (a.startsWith('--')) continue;
      files.push(path.resolve(a));
    }
  }

  if (files.length === 0) {
    console.error('usage: transform-shortcodes <file.md>... | --all');
    process.exit(1);
  }

  let changed = 0;
  const allUnknown = new Map<string, string[]>();

  for (const file of files) {
    const content = await readFile(file, 'utf8');
    const ctx: ShortcodeContext = { upstreamDir: UPSTREAM_DIR, filePath: file };
    const result = await transformShortcodes(content, ctx);

    if (result.unknown.size > 0) {
      const rel = path.relative(REPO_ROOT, file);
      allUnknown.set(rel, [...result.unknown]);
    }

    if (result.content !== content) {
      await writeFile(file, result.content);
      const handled = [...result.handled].join(', ');
      console.log(`transformed: ${path.relative(REPO_ROOT, file)} [${handled}]`);
      changed += 1;
    }
  }

  if (allUnknown.size > 0) {
    console.warn('');
    console.warn('Unknown shortcodes (add a handler under scripts/shortcodes/):');
    for (const [file, names] of allUnknown) {
      console.warn(`  ${file}: ${names.join(', ')}`);
    }
  }

  console.log(`\n${changed} / ${files.length} file(s) changed.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
