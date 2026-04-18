/**
 * Translate changed upstream Markdown files into Japanese using Claude,
 * and write the results into src/content/ja/handbook/ with correct frontmatter.
 *
 * Scaffold — fill in the TODOs. Prompt caching is enabled because the system
 * prompt (style guide, glossary) is large and reused across every file.
 */
import Anthropic from '@anthropic-ai/sdk';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { readManifest, writeManifest } from './lib/manifest.ts';

const MODEL = 'claude-opus-4-7';
const UPSTREAM_DIR = path.resolve('upstream');
const OUT_DIR = path.resolve('src/content/ja/handbook');

// Long, reused — mark as ephemeral-cache below so we only pay for it once per run.
const SYSTEM_PROMPT = `
あなたは GitLab Handbook を日本語に翻訳するプロの翻訳者です。

方針:
- 原文の Markdown 構造（見出し階層、リスト、コードブロック、リンク）を完全に保持する
- Frontmatter (YAML) は翻訳せず、そのまま残す
- コードブロック内の識別子・コマンドは翻訳しない
- 固有名詞（GitLab, Slack, Workday 等）はそのまま英語で残す
- 一人称は原則「私たち」、指示は「〜します」調
- 用語集に従う: DRI → DRI（そのまま）, iteration → イテレーション, handbook → ハンドブック
- 翻訳結果のみを出力し、説明文や前置きは付けない
`.trim();

function sha256(s: string): string {
  return createHash('sha256').update(s).digest('hex');
}

async function translateOne(client: Anthropic, upstreamRelPath: string): Promise<string> {
  const src = await readFile(path.join(UPSTREAM_DIR, upstreamRelPath), 'utf8');

  const resp = await client.messages.create({
    model: MODEL,
    max_tokens: 8192,
    system: [
      {
        type: 'text',
        text: SYSTEM_PROMPT,
        cache_control: { type: 'ephemeral' },
      },
    ],
    messages: [{ role: 'user', content: src }],
  });

  const text = resp.content
    .filter((b): b is Anthropic.TextBlock => b.type === 'text')
    .map((b) => b.text)
    .join('');
  return text;
}

async function main() {
  const targets = process.argv.slice(2);
  if (targets.length === 0) {
    console.error('Usage: tsx scripts/translate.ts <upstream-relative-path> [...]');
    process.exit(1);
  }

  const client = new Anthropic(); // uses ANTHROPIC_API_KEY
  const manifest = await readManifest();
  const upstreamSha = process.env.UPSTREAM_SHA ?? 'unknown';

  for (const rel of targets) {
    const src = await readFile(path.join(UPSTREAM_DIR, rel), 'utf8');
    const inputHash = sha256(src);
    const translated = await translateOne(client, rel);

    // TODO: upstream_path needs to be derived from `rel` based on handbook's
    // URL routing (strip "content/", strip "_index.md", append trailing slash).
    const upstreamPath = '/' + rel.replace(/^content\//, '').replace(/_index\.md$/, '').replace(/\.md$/, '/');

    // TODO: merge with existing frontmatter from the translated output
    // instead of appending. For now this assumes the model returns body only.
    const frontmatter = [
      '---',
      `title: "TODO"`,
      `upstream_path: "${upstreamPath}"`,
      `upstream_sha: "${upstreamSha}"`,
      `translated_at: "${new Date().toISOString()}"`,
      `translator: "claude"`,
      `stale: false`,
      '---',
      '',
    ].join('\n');

    const outPath = path.join(OUT_DIR, rel.replace(/^content\/handbook\//, ''));
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, frontmatter + translated, 'utf8');

    manifest.entries[rel] = {
      path: rel,
      upstream_sha: upstreamSha,
      translated_at: new Date().toISOString(),
      model: MODEL,
      input_hash: inputHash,
    };
    console.log(`translated: ${rel} -> ${outPath}`);
  }

  await writeManifest(manifest);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
