// Rename content files ending in `.html.md` to `.md` and inject the legacy URL
// into frontmatter `aliases` so Hugo emits a redirect.
//
// Background:
//   upstream stores a handful of pages with `.html.md` filenames (legacy URL
//   compatibility). Hugo turns those into directory paths whose name ends in
//   `.html` (e.g. public/.../fault_tolerance.html/index.html), which Pagefind
//   misreads when walking for HTML files: it tries to open the directory as if
//   it were a file and aborts with "Is a directory" for those entries.
//
//   This script normalizes our copies: rename to `.md`, and add an alias from
//   the legacy URL so external links keep working (Hugo writes a 301 to the
//   _redirects file via the existing aliases pipeline).
//
// Usage:
//   npx tsx scripts/normalize-content-names.ts            # apply
//   npx tsx scripts/normalize-content-names.ts --dry-run  # preview only
import { readFile, writeFile, rename } from 'node:fs/promises';
import { glob } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('content/handbook');

function splitFrontmatter(content: string): { fm: string; body: string } | null {
  if (!content.startsWith('---\n')) return null;
  const endIdx = content.indexOf('\n---\n', 4);
  if (endIdx === -1) return null;
  return {
    fm: content.slice(4, endIdx),
    body: content.slice(endIdx + 5),
  };
}

// Tiny YAML frontmatter editor: parses just enough to add an aliases entry
// without pulling in a YAML library.
function ensureAlias(fm: string, alias: string): string {
  const aliasInlineRe = /^aliases:\s*\[(.*)\]\s*$/m;
  const aliasBlockRe = /^aliases:\s*$/m;

  if (aliasInlineRe.test(fm)) {
    return fm.replace(aliasInlineRe, (line, items: string) => {
      const arr = items
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
      if (arr.includes(alias)) return line;
      arr.push(alias);
      return `aliases: [${arr.map((a) => JSON.stringify(a)).join(', ')}]`;
    });
  }

  if (aliasBlockRe.test(fm)) {
    const lines = fm.split('\n');
    const startIdx = lines.findIndex((l) => /^aliases:\s*$/.test(l));
    let endIdx = startIdx + 1;
    while (endIdx < lines.length && /^\s*-\s+/.test(lines[endIdx]!)) endIdx++;
    const existing = lines
      .slice(startIdx + 1, endIdx)
      .map((l) => l.replace(/^\s*-\s+/, '').replace(/^["']|["']$/g, ''));
    if (existing.includes(alias)) return fm;
    lines.splice(endIdx, 0, `  - ${JSON.stringify(alias)}`);
    return lines.join('\n');
  }

  return fm.replace(/\s*$/, '') + `\naliases:\n  - ${JSON.stringify(alias)}\n`;
}

async function processFile(file: string, dryRun: boolean): Promise<void> {
  const content = await readFile(file, 'utf8');
  const split = splitFrontmatter(content);
  if (!split) {
    console.warn(`skip (no frontmatter): ${file}`);
    return;
  }

  // Build the legacy URL from the file path:
  //   content/handbook/foo/bar.html.md -> /handbook/foo/bar.html/
  const rel = path.relative(path.resolve('content'), file);
  const url = '/' + rel.replace(/\.md$/, '/').replace(/\\/g, '/');

  const newFm = ensureAlias(split.fm, url);
  const newContent = `---\n${newFm}\n---\n${split.body}`;
  const newFile = file.replace(/\.html\.md$/, '.md');

  const tag = dryRun ? '[dry]' : 'renamed:';
  console.log(`${tag} ${path.relative(process.cwd(), file)} -> ${path.basename(newFile)} (alias: ${url})`);
  if (!dryRun) {
    await writeFile(file, newContent);
    await rename(file, newFile);
  }
}

async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const matches: string[] = [];
  for await (const f of glob('**/*.html.md', { cwd: ROOT })) {
    matches.push(path.join(ROOT, f));
  }
  if (matches.length === 0) {
    console.log('No .html.md files found.');
    return;
  }
  console.log(`Found ${matches.length} file(s) ending in .html.md`);
  for (const f of matches) await processFile(f, dryRun);
  if (dryRun) console.log('\n(dry run, no files changed)');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
