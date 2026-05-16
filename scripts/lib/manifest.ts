import { readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

export interface ManifestEntry {
  path: string;                    // upstream-relative path, e.g. "handbook/engineering/_index.md"
  upstream_sha: string;            // commit SHA the translation is based on
  upstream_committed_at?: string;  // ISO 8601 timestamp of the upstream commit that last touched `path` at `upstream_sha`
  translated_at: string;           // ISO timestamp
  model: string;                   // e.g. "claude-opus-4-7"
  input_hash: string;              // sha256 of the source markdown, for change detection
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

/**
 * ISO 8601 timestamp of the most recent upstream commit at or before
 * `sha` (a commit reachable in the upstream submodule) that touched
 * `file`. Returns `null` if the commit isn't reachable, or if neither
 * the SHA-bounded nor the unbounded lookup finds any commit touching
 * the file.
 *
 * Falls back to the unbounded lookup when the bounded one returns
 * empty — that happens for manifest entries whose `upstream_sha`
 * predates the file's first appearance upstream (a translator-side
 * bookkeeping race).
 */
export function getUpstreamCommittedAt(sha: string, file: string): string | null {
  function logDate(args: string[]): string | null {
    try {
      const out = execFileSync(
        'git',
        ['-C', 'upstream', 'log', '-1', '--format=%cI', ...args, '--', file],
        { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
      ).trim();
      return out || null;
    } catch {
      return null;
    }
  }
  return logDate([sha]) ?? logDate([]);
}
