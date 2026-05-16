/**
 * Backfill `upstream_committed_at` into translation-state/manifest.json
 * and `lastmod` into each translated file's frontmatter.
 *
 * Rationale: Hugo's default lastmod (with `enableGitInfo: true`) reflects
 * the *translation* commit date in this repo, not when the original
 * upstream content was last updated. Readers care about the latter — see
 * https://github.com/kyama0/gitlab-handbook-ja/issues/207.
 *
 * The upstream commit date is computed from the submodule by asking
 * `git log -1 --format=%cI <upstream_sha> -- <path>`. Frontmatter
 * `lastmod` overrides the git-derived value in docsy's page-meta footer.
 *
 * Usage:
 *   npx tsx scripts/backfill-upstream-lastmod.ts            # apply
 *   npx tsx scripts/backfill-upstream-lastmod.ts --dry-run  # preview only
 */
import { readFile, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import {
  getUpstreamCommittedAt,
  readManifest,
  writeManifest,
} from './lib/manifest.ts';

const dryRun = process.argv.includes('--dry-run');

function splitFrontmatter(content: string): { fm: string; body: string } | null {
  if (!content.startsWith('---\n')) return null;
  const endIdx = content.indexOf('\n---\n', 4);
  if (endIdx === -1) return null;
  return { fm: content.slice(4, endIdx), body: content.slice(endIdx + 5) };
}

/**
 * Set a top-level scalar key in a YAML frontmatter block, preserving the
 * rest of the document byte-for-byte. The value is always emitted with
 * double quotes, which matches the surrounding `upstream_sha` /
 * `translated_at` style.
 */
function upsertTopLevelKey(fm: string, key: string, value: string): string {
  const line = `${key}: "${value}"`;
  const re = new RegExp(`^${key}:.*$`, 'm');
  if (re.test(fm)) return fm.replace(re, line);
  return fm.replace(/\s*$/, '') + `\n${line}`;
}

/**
 * Locate the local translation file corresponding to a manifest key.
 *
 * Project policy oscillates on `.html.md`:
 *   - Translator agent guidance renames `*.html.md` → `*.md` locally and
 *     records the legacy URL in `aliases` (see scripts/normalize-content-names.ts).
 *   - Issue #74 / commit f0486c9 enforces strict 1:1 with upstream, so the
 *     `.html.md` extension is preserved.
 * Try the key as-is first; fall back to the `.md` form if the file is not
 * found. Returns `null` when neither path resolves.
 */
async function resolveLocalPath(key: string): Promise<string | null> {
  const candidates = [key];
  if (key.endsWith('.html.md')) candidates.push(key.replace(/\.html\.md$/, '.md'));
  for (const c of candidates) {
    const abs = path.resolve(c);
    try {
      await stat(abs);
      return abs;
    } catch {
      // try next
    }
  }
  return null;
}

interface Stats {
  manifestUpdated: number;
  frontmatterUpdated: number;
  skippedNoCommitDate: number;
  skippedNoFile: number;
  skippedNoFrontmatter: number;
}

async function main(): Promise<void> {
  const manifest = await readManifest();
  const stats: Stats = {
    manifestUpdated: 0,
    frontmatterUpdated: 0,
    skippedNoCommitDate: 0,
    skippedNoFile: 0,
    skippedNoFrontmatter: 0,
  };

  for (const [key, entry] of Object.entries(manifest.entries)) {
    const committedAt = getUpstreamCommittedAt(entry.upstream_sha, key);
    if (!committedAt) {
      stats.skippedNoCommitDate++;
      console.warn(`[no upstream date] ${key} @ ${entry.upstream_sha}`);
      continue;
    }

    if (entry.upstream_committed_at !== committedAt) {
      entry.upstream_committed_at = committedAt;
      stats.manifestUpdated++;
    }

    const localPath = await resolveLocalPath(key);
    if (!localPath) {
      stats.skippedNoFile++;
      console.warn(`[missing translation] ${key}`);
      continue;
    }
    const raw = await readFile(localPath, 'utf8');

    const split = splitFrontmatter(raw);
    if (!split) {
      stats.skippedNoFrontmatter++;
      console.warn(`[no frontmatter] ${localPath}`);
      continue;
    }

    // `upstream_committed_at` lives in the manifest; frontmatter only needs
    // `lastmod` (which Hugo reads to populate `.Page.Lastmod`).
    const fm = upsertTopLevelKey(split.fm, 'lastmod', committedAt);
    if (fm === split.fm) continue;

    const newContent = `---\n${fm}\n---\n${split.body}`;
    if (!dryRun) await writeFile(localPath, newContent, 'utf8');
    stats.frontmatterUpdated++;
  }

  if (!dryRun) await writeManifest(manifest);

  console.log(
    `${dryRun ? '[dry-run] ' : ''}manifest entries updated: ${stats.manifestUpdated}, ` +
      `frontmatter files updated: ${stats.frontmatterUpdated}, ` +
      `no upstream date: ${stats.skippedNoCommitDate}, ` +
      `missing translation file: ${stats.skippedNoFile}, ` +
      `no frontmatter: ${stats.skippedNoFrontmatter}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
