import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { ShortcodeHandler } from './types.ts';
import { parseArgs } from './types.ts';

// Parses a CSV line respecting simple quoted cells. The upstream count CSVs
// are well-formed and don't contain embedded quotes.
function parseCsvLine(line: string): string[] {
  const cells: string[] = [];
  let cur = '';
  let inQuotes = false;
  for (const ch of line) {
    if (ch === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (ch === ',' && !inQuotes) {
      cells.push(cur);
      cur = '';
      continue;
    }
    cur += ch;
  }
  cells.push(cur);
  return cells.map((c) => c.trim());
}

function formatNumber(s: string): string {
  const n = Number(s.replace(/,/g, ''));
  return Number.isFinite(n) ? n.toLocaleString('ja-JP') : s;
}

export const handbookCounts: ShortcodeHandler = async (args, ctx) => {
  const { named } = parseArgs(args);
  const site = named.site ?? 'handbook';
  const csvPath = join(ctx.upstreamDir, 'assets', 'csv', `${site}-count.csv`);

  let raw: string;
  try {
    raw = await readFile(csvPath, 'utf8');
  } catch {
    return `\n<!-- handbook-counts: csv not found: ${site}-count.csv -->\n`;
  }

  const lines = raw.trim().split(/\r?\n/).filter(Boolean);
  if (lines.length === 0) return '';

  const header = parseCsvLine(lines[0]);
  const rows = lines.slice(1).map(parseCsvLine);

  // Column labels: the upstream CSV header is English. Translate the common
  // columns; leave others verbatim.
  const labelMap: Record<string, string> = {
    Date: '日付',
    Words: '単語数',
    Pages: 'ページ数',
    Notes: '備考',
  };
  const jaHeader = header.map((h) => labelMap[h] ?? h);

  let out = '\n\n<table>\n<thead><tr>';
  for (const h of jaHeader) out += `<th>${h}</th>`;
  out += '</tr></thead>\n<tbody>';
  for (const r of rows) {
    out += '<tr>';
    r.forEach((c, i) => {
      // Format numeric cells with thousands separators.
      const label = header[i];
      const val = label === 'Words' || label === 'Pages' ? formatNumber(c) : c;
      out += `<td>${val}</td>`;
    });
    out += '</tr>';
  }
  out += '</tbody>\n</table>\n\n';
  return out;
};
