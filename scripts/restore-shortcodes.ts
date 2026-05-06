/**
 * Reverse transform: HTML signatures emitted by the legacy
 * `transform-shortcodes.ts` are detected and converted back to their original
 * Hugo shortcode form (`{{< … >}}` / `{{% … %}}`).
 *
 * This is for the Astro→Hugo migration. The legacy script lossy-converted
 * Hugo shortcodes to HTML so Astro could render them; now that Hugo is the
 * builder, the original `{{< … >}}` syntax must be restored.
 *
 * Coverage (mechanical / structurally regular):
 *   - {{< youtube "ID" >}}
 *   - {{< vimeo ID >}}
 *   - {{% note %}} … {{% /note %}}
 *   - {{% alert title="…" %}} … {{% /alert %}}
 *   - {{% details summary="…" %}} … {{% /details %}}    (incl. `open`)
 *   - {{% panel header="…" header-bg="…" %}} … {{% /panel %}}
 *   - {{% card header="…" footer="…" header-bg="…" %}} … {{% /card %}}
 *   - {{< cardpane >}} … {{< /cardpane >}}
 *
 * NOT covered (data-driven; need re-translation from upstream — see
 * `translation-state/phase2-retranslate.txt`): tech-stack, handbook-counts,
 * team-by-*, performance-indicators, etc. Their script-emitted "see upstream"
 * stubs are not unique enough to detect reliably.
 *
 * Usage:
 *   npx tsx scripts/restore-shortcodes.ts -- <file.md>...
 *   npx tsx scripts/restore-shortcodes.ts -- --all
 *   npx tsx scripts/restore-shortcodes.ts -- --all --dry-run
 */
import { readFile, writeFile } from 'node:fs/promises';
import { glob } from 'node:fs/promises';
import path from 'node:path';

const TRANSLATED_ROOT = path.resolve('content/handbook');

type Stats = { youtube: number; vimeo: number; note: number; alert: number; details: number; panel: number; card: number; cardpane: number };
const emptyStats = (): Stats => ({ youtube: 0, vimeo: 0, note: 0, alert: 0, details: 0, panel: 0, card: 0, cardpane: 0 });
const addStats = (a: Stats, b: Stats) => {
  for (const k of Object.keys(a) as (keyof Stats)[]) a[k] += b[k];
};

// ---------- youtube ----------
// Match the exact wrapper the legacy script emits:
//   <div class="relative my-6" style="aspect-ratio: 16 / 9;">
//     <iframe src="https://www.youtube.com/embed/<ID>(?<qs>?...)" title="YouTube video" ... ></iframe>
//   </div>
const RE_YOUTUBE =
  /\n?<div class="relative my-6" style="aspect-ratio: 16 \/ 9;">\s*<iframe src="https:\/\/www\.youtube\.com\/embed\/([^"?]+)(\?[^"]*)?" title="YouTube video"[^>]*><\/iframe>\s*<\/div>\n?/g;

function restoreYoutube(content: string, stats: Stats): string {
  return content.replace(RE_YOUTUBE, (_match, id: string, qs: string | undefined) => {
    stats.youtube += 1;
    const arg = qs ? `${id}${qs}` : id;
    return `\n{{< youtube "${arg}" >}}\n`;
  });
}

// ---------- vimeo ----------
const RE_VIMEO =
  /\n?<div class="relative my-6" style="aspect-ratio: 16 \/ 9;">\s*<iframe src="https:\/\/player\.vimeo\.com\/video\/(\d+)" title="Vimeo video"[^>]*><\/iframe>\s*<\/div>\n?/g;

function restoreVimeo(content: string, stats: Stats): string {
  return content.replace(RE_VIMEO, (_match, id: string) => {
    stats.vimeo += 1;
    return `\n{{< vimeo ${id} >}}\n`;
  });
}

// ---------- note ----------
// <div class="my-4 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r">
//
// <p class="!mt-0 !mb-1 font-bold text-blue-700">Note:</p>
//
// {inner}
//
// </div>
const RE_NOTE =
  /\n?<div class="my-4 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r">\s*\n\s*\n<p class="!mt-0 !mb-1 font-bold text-blue-700">Note:<\/p>\s*\n\s*\n([\s\S]*?)\n\s*\n<\/div>\n?/g;

function restoreNote(content: string, stats: Stats): string {
  return content.replace(RE_NOTE, (_match, inner: string) => {
    stats.note += 1;
    return `\n{{% note %}}\n${inner.trim()}\n{{% /note %}}\n`;
  });
}

// ---------- alert ----------
// <div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">
//
// [optional]<p class="!mt-0 !mb-1 font-bold text-amber-700">{title}</p>
//
// {inner}
//
// </div>
const RE_ALERT =
  /\n?<div class="my-4 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-r">\s*\n\s*\n(?:<p class="!mt-0 !mb-1 font-bold text-amber-700">([^<]*)<\/p>\s*\n\s*\n)?([\s\S]*?)\n\s*\n<\/div>\n?/g;

function restoreAlert(content: string, stats: Stats): string {
  return content.replace(RE_ALERT, (_match, title: string | undefined, inner: string) => {
    stats.alert += 1;
    const args = title ? ` title="${title}"` : '';
    return `\n{{% alert${args} %}}\n${inner.trim()}\n{{% /alert %}}\n`;
  });
}

// ---------- details ----------
// <details[ open]>
// <summary>{summary}</summary>
//
// {inner}
//
// </details>
//
// Iterated until convergence to handle nested <details>.
const RE_DETAILS =
  /\n?<details( open)?>\s*\n<summary>([\s\S]*?)<\/summary>\s*\n\s*\n([\s\S]*?)\n\s*\n<\/details>\n?/g;

function restoreDetails(content: string, stats: Stats): string {
  return content.replace(RE_DETAILS, (_match, openAttr: string | undefined, summary: string, inner: string) => {
    stats.details += 1;
    // Inner is processed by the convergence loop, so we don't recurse here.
    const args = `summary="${summary.trim()}"${openAttr ? ' open' : ''}`;
    return `\n{{% details ${args} %}}\n${inner.trim()}\n{{% /details %}}\n`;
  });
}

// ---------- panel ----------
// <div class="my-4 border {color.border} rounded overflow-hidden">
//
// [optional header block]
// <div class="px-4 py-3">
//
// {inner}
//
// </div>
//
// </div>
//
// Header block format:
//   <div class="{color.bg} {color.text} px-4 py-2 font-semibold border-b {color.border}">
//
//   {header}
//
//   </div>
const PANEL_PALETTE: Record<string, string> = {
  primary: 'border-blue-300',
  success: 'border-green-300',
  info: 'border-sky-300',
  warning: 'border-amber-300',
  danger: 'border-red-300',
};
function inferPanelHeaderBg(borderColor: string): string {
  return Object.entries(PANEL_PALETTE).find(([, b]) => b === borderColor)?.[0] ?? 'info';
}

const RE_PANEL =
  /\n?<div class="my-4 border (border-(?:blue|green|sky|amber|red)-300) rounded overflow-hidden">\s*\n\s*\n(?:<div class="bg-(?:blue|green|sky|amber|red)-100 text-(?:blue|green|sky|amber|red)-900 px-4 py-2 font-semibold border-b border-(?:blue|green|sky|amber|red)-300">\s*\n\s*\n([\s\S]*?)\s*\n\s*\n<\/div>\s*\n\s*\n)?<div class="px-4 py-3">\s*\n\s*\n([\s\S]*?)\n\s*\n<\/div>\s*\n\s*\n<\/div>\n?/g;

function restorePanel(content: string, stats: Stats): string {
  return content.replace(RE_PANEL, (_match, borderColor: string, header: string | undefined, inner: string) => {
    stats.panel += 1;
    const bg = inferPanelHeaderBg(borderColor);
    const headerArg = header ? ` header="${header.trim()}"` : '';
    const bgArg = bg !== 'info' || header ? ` header-bg="${bg}"` : '';
    return `\n{{% panel${headerArg}${bgArg} %}}\n${inner.trim()}\n{{% /panel %}}\n`;
  });
}

// ---------- card ----------
// <div class="border border-gray-200 rounded overflow-hidden">
//
// [optional header]
// <div class="px-3 py-2">
//
// {inner}
//
// </div>[optional footer]
//
// </div>
//
// Header format:
//   <div class="{headerClass} px-3 py-2 font-semibold border-b border-gray-200">
// Footer format:
//   <div class="bg-gray-50 px-3 py-2 text-sm text-gray-700 border-t border-gray-200">
const CARD_HEADER_BG: Record<string, string> = {
  'bg-blue-100 text-blue-900': 'primary',
  'bg-gray-100 text-gray-800': 'secondary',
  'bg-green-100 text-green-900': 'success',
  'bg-sky-100 text-sky-900': 'info',
  'bg-amber-100 text-amber-900': 'warning',
  'bg-red-100 text-red-900': 'danger',
  'bg-gray-50 text-gray-800': '', // default
};

const RE_CARD =
  /\n?<div class="border border-gray-200 rounded overflow-hidden">\s*\n\s*\n(?:<div class="(bg-(?:blue|gray|green|sky|amber|red)-(?:50|100) text-(?:blue|gray|green|sky|amber|red)-(?:800|900)) px-3 py-2 font-semibold border-b border-gray-200">\s*\n\s*\n([\s\S]*?)\s*\n\s*\n<\/div>\s*\n\s*\n)?<div class="px-3 py-2">\s*\n\s*\n([\s\S]*?)\n\s*\n<\/div>(?:\s*\n\s*\n<div class="bg-gray-50 px-3 py-2 text-sm text-gray-700 border-t border-gray-200">\s*\n\s*\n([\s\S]*?)\s*\n\s*\n<\/div>)?\s*\n\s*\n<\/div>\n?/g;

function restoreCard(content: string, stats: Stats): string {
  return content.replace(RE_CARD, (_match, headerClass: string | undefined, header: string | undefined, inner: string, footer: string | undefined) => {
    stats.card += 1;
    const args: string[] = [];
    if (header) args.push(`header="${header.trim()}"`);
    if (footer) args.push(`footer="${footer.trim()}"`);
    if (headerClass) {
      const bg = CARD_HEADER_BG[headerClass];
      if (bg) args.push(`header-bg="${bg}"`);
    }
    const argsStr = args.length ? ` ${args.join(' ')}` : '';
    return `\n{{% card${argsStr} %}}\n${inner.trim()}\n{{% /card %}}\n`;
  });
}

// ---------- cardpane ----------
// <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 my-4">
//
// {inner}  (which may now contain {{% card %}} after card pass)
//
// </div>
const RE_CARDPANE =
  /\n?<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 my-4">\s*\n\s*\n([\s\S]*?)\n\s*\n<\/div>\n?/g;

function restoreCardpane(content: string, stats: Stats): string {
  return content.replace(RE_CARDPANE, (_match, inner: string) => {
    stats.cardpane += 1;
    return `\n{{< cardpane >}}\n${inner.trim()}\n{{< /cardpane >}}\n`;
  });
}

// ---------- driver ----------
function restoreAll(content: string): { content: string; stats: Stats } {
  const stats = emptyStats();
  let prev = '';
  let curr = content;
  // Iterate until convergence (handles nested cardpane > card, details > details, etc.)
  let safety = 10;
  while (curr !== prev && safety-- > 0) {
    prev = curr;
    // Innermost-likely first: youtube/vimeo are atomic; leaf containers next; outer last.
    curr = restoreYoutube(curr, stats);
    curr = restoreVimeo(curr, stats);
    curr = restoreNote(curr, stats);
    curr = restoreAlert(curr, stats);
    curr = restoreDetails(curr, stats);
    curr = restoreCard(curr, stats);
    curr = restoreCardpane(curr, stats);
    curr = restorePanel(curr, stats);
  }
  return { content: curr, stats };
}

async function main() {
  const argv = process.argv.slice(2);
  const dryRun = argv.includes('--dry-run');
  const all = argv.includes('--all');
  const verbose = argv.includes('--verbose');

  const files: string[] = [];
  if (all) {
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
    console.error('usage: restore-shortcodes <file.md>... | --all  [--dry-run] [--verbose]');
    process.exit(1);
  }

  const totals = emptyStats();
  let changed = 0;
  for (const file of files) {
    const before = await readFile(file, 'utf8');
    const { content: after, stats } = restoreAll(before);
    addStats(totals, stats);
    if (after !== before) {
      changed += 1;
      const summary = (Object.entries(stats) as [keyof Stats, number][])
        .filter(([, n]) => n > 0)
        .map(([k, n]) => `${k}=${n}`)
        .join(' ');
      const rel = path.relative(process.cwd(), file);
      if (verbose || dryRun) console.log(`${dryRun ? '[dry] ' : ''}${rel}  ${summary}`);
      if (!dryRun) await writeFile(file, after);
    }
  }

  console.log('');
  console.log(`Files changed: ${changed} / ${files.length}`);
  console.log(`Restored shortcodes: ${(Object.entries(totals) as [keyof Stats, number][])
    .filter(([, n]) => n > 0)
    .map(([k, n]) => `${k}=${n}`)
    .join(' ') || '(none)'}`);
  if (dryRun) console.log('(dry run, no files written)');
}

main().catch((err) => { console.error(err); process.exit(1); });
