import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parse as parseYaml } from 'yaml';
import type { ShortcodeHandler } from './types.ts';

interface TocEntry {
  name: string;
  url: string;
  links?: TocEntry[];
}

function renderLink(entry: TocEntry): string {
  const isExternal = /^https?:\/\//.test(entry.url);
  const name = escapeHtml(entry.name);
  if (isExternal) {
    return `<a href="${entry.url}" target="_blank" rel="external noopener">${name}<sup>↗</sup></a>`;
  }
  return `<a href="${entry.url}">${name}</a>`;
}

function renderItem(entry: TocEntry): string {
  const link = renderLink(entry);
  const children = entry.links?.map(renderItem).join('') ?? '';
  return `<li>${link}${children ? `<ul>${children}</ul>` : ''}</li>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export const handbookDataToc: ShortcodeHandler = async (_args, ctx) => {
  const path = join(ctx.upstreamDir, 'data', 'toc.yaml');
  const raw = await readFile(path, 'utf8');
  const toc = parseYaml(raw) as TocEntry[];

  let out = '\n\n<div class="handbook-data-toc">\n';
  for (const section of toc) {
    const anchor = section.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    out += `<h3 id="${anchor}">${renderLink(section)}</h3>\n`;
    if (section.links?.length) {
      out += '<ul>';
      for (const child of section.links) out += renderItem(child);
      out += '</ul>\n';
    }
  }
  out += '</div>\n\n';
  return out;
};
