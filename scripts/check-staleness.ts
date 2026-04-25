/**
 * Compare upstream file hashes to the manifest. Any file whose upstream hash
 * differs from the last-translated hash is reported as stale. Optionally flip
 * the `stale: true` flag in the corresponding translation's frontmatter.
 */
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { glob } from 'node:fs/promises';
import path from 'node:path';
import { readManifest } from './lib/manifest.ts';

const UPSTREAM_DIR = path.resolve('upstream');

function sha256(s: string): string {
  return createHash('sha256').update(s).digest('hex');
}

async function main() {
  const manifest = await readManifest();
  const stale: string[] = [];

  for await (const file of glob('content/handbook/**/*.md', { cwd: UPSTREAM_DIR })) {
    const entry = manifest.entries[file];
    if (!entry) continue; // not yet translated; `sync-upstream` handles these
    const body = await readFile(path.join(UPSTREAM_DIR, file), 'utf8');
    if (sha256(body) !== entry.input_hash) {
      stale.push(file);
    }
  }

  if (stale.length === 0) {
    console.log('All translations are up to date.');
    return;
  }
  console.log(`${stale.length} stale translation(s):`);
  for (const s of stale) console.log(`  ${s}`);

  // TODO: optionally update frontmatter `stale: true` in the corresponding
  // content/ja/handbook/*.md so the UI shows the warning banner.
  process.exitCode = stale.length > 0 ? 1 : 0;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
