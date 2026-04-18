import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

export interface ManifestEntry {
  path: string;           // upstream-relative path, e.g. "handbook/engineering/_index.md"
  upstream_sha: string;   // commit SHA the translation is based on
  translated_at: string;  // ISO timestamp
  model: string;          // e.g. "claude-opus-4-7"
  input_hash: string;     // sha256 of the source markdown, for change detection
}

export interface Manifest {
  version: 1;
  entries: Record<string, ManifestEntry>;
}

const MANIFEST_PATH = path.resolve('translation-state/manifest.json');

export async function readManifest(): Promise<Manifest> {
  try {
    const raw = await readFile(MANIFEST_PATH, 'utf8');
    return JSON.parse(raw) as Manifest;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
      return { version: 1, entries: {} };
    }
    throw err;
  }
}

export async function writeManifest(m: Manifest): Promise<void> {
  await writeFile(MANIFEST_PATH, JSON.stringify(m, null, 2) + '\n', 'utf8');
}
