/**
 * Pull the latest upstream handbook and list Markdown files that changed
 * since each was last translated (compared against translation-state/manifest.json).
 *
 * This is a scaffold — implement the TODOs before running in production.
 */
import { execSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { glob } from 'node:fs/promises'; // Node 22+ has fs.promises.glob
import { readManifest } from './lib/manifest.ts';

const UPSTREAM_DIR = path.resolve('upstream');

function sha256(s: string): string {
  return createHash('sha256').update(s).digest('hex');
}

async function main() {
  // 1. Update submodule to latest
  execSync('git -C upstream pull --ff-only origin main', { stdio: 'inherit' });

  const manifest = await readManifest();
  const changed: Array<{ path: string; reason: 'new' | 'modified' }> = [];

  // TODO: narrow the glob to the handbook content paths you actually want to translate.
  for await (const file of glob('content/handbook/**/*.md', { cwd: UPSTREAM_DIR })) {
    const abs = path.join(UPSTREAM_DIR, file);
    const body = await readFile(abs, 'utf8');
    const hash = sha256(body);
    const entry = manifest.entries[file];
    if (!entry) {
      changed.push({ path: file, reason: 'new' });
    } else if (entry.input_hash !== hash) {
      changed.push({ path: file, reason: 'modified' });
    }
  }

  console.log(`Changed files: ${changed.length}`);
  for (const c of changed) console.log(`  [${c.reason}] ${c.path}`);

  // 翻訳は GHA では走らせない方針なので、このリストを使ってローカルで Claude Code
  // の `translator` サブエージェントを呼び出して翻訳・PR 作成する。
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
