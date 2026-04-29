import { readFile } from 'node:fs/promises';
import { parse as parseYaml } from 'yaml';
import type { ShortcodeHandler } from './types.ts';

// Renders the author/coach handles as `@handle` links to gitlab.com.
function profileLinks(handles: unknown): string {
  if (!handles) return '';
  const list = Array.isArray(handles) ? handles : [handles];
  return list
    .map((h) => {
      const handle = String(h).replace(/^@/, '');
      return `<a href="https://gitlab.com/${handle}" class="text-blue-600 hover:underline">@${handle}</a>`;
    })
    .join(', ');
}

// Renders a label/badge for status or stage names.
function badge(name: unknown): string {
  if (!name) return '';
  return `<span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">${String(name)}</span>`;
}

async function parseFrontmatter(filePath: string): Promise<Record<string, unknown>> {
  const raw = await readFile(filePath, 'utf8');
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw);
  if (!m) return {};
  return (parseYaml(m[1]) as Record<string, unknown>) ?? {};
}

// Docsy-GitLab `engineering/design-document-header` shortcode.
// Renders a disclaimer alert + a metadata table from page frontmatter.
export const designDocumentHeader: ShortcodeHandler = async (_args, ctx) => {
  const fm = await parseFrontmatter(ctx.filePath);

  const disclaimer = `\n<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>\n`;

  const coaches = fm['coaches'] ?? fm['coach'];
  const dris = fm['dris'] ?? fm['approvers'];

  const table = `\n<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300">${badge(fm['status'])}</td>
<td class="px-3 py-2 border border-gray-300">${profileLinks(fm['authors'])}</td>
<td class="px-3 py-2 border border-gray-300">${profileLinks(coaches)}</td>
<td class="px-3 py-2 border border-gray-300">${profileLinks(dris)}</td>
<td class="px-3 py-2 border border-gray-300">${badge(fm['owning-stage'])}</td>
<td class="px-3 py-2 border border-gray-300">${fm['creation-date'] ?? ''}</td>
</tr>
</tbody>
</table>
</div>\n`;

  return disclaimer + table;
};
