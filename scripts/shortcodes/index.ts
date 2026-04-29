import type {
  ShortcodeContext,
  ShortcodeHandler,
  PairedShortcodeHandler,
} from './types.ts';
import { youtube } from './youtube.ts';
import { include } from './include.ts';
import { handbookDataToc } from './handbook-data-toc.ts';
import { handbookCounts } from './handbook-counts.ts';
import { alert } from './alert.ts';
import { panel } from './panel.ts';
import { techStack } from './tech-stack.ts';
import { vimeo } from './vimeo.ts';
import { ref } from './ref.ts';
import { cardpane } from './cardpane.ts';
import { card } from './card.ts';
import { external } from './external.ts';
import { anchor } from './anchor.ts';
import { label } from './label.ts';
import { teamSize } from './team-size.ts';
import { misusedTerms } from './misused-terms.ts';
import { upstreamLink, teamMembersLink, noop } from './upstream-link.ts';
import { designDocumentHeader } from './design-document-header.ts';
import { note } from './note.ts';
import { details } from './details.ts';

const HANDLERS: Record<string, ShortcodeHandler> = {
  youtube,
  vimeo,
  ref,
  include,
  'handbook-data-toc': handbookDataToc,
  'handbook-counts': handbookCounts,
  'tech-stack': techStack,
  external,
  a: anchor,
  label,
  'team-size': teamSize,
  'misused-terms': misusedTerms,
  // Data-heavy shortcodes we can't fully replicate locally — fall back to
  // a "see upstream" notice.
  team: upstreamLink('GitLab チーム一覧', 'https://handbook.gitlab.com/handbook/company/team/'),
  kpi: upstreamLink('KPI ダッシュボード', 'https://handbook.gitlab.com/handbook/company/kpis/'),
  'group-by-expertise': upstreamLink(
    '専門領域別メンバー一覧',
    'https://handbook.gitlab.com/handbook/company/culture/inclusion/',
  ),
  'all-tech-stack': upstreamLink(
    'テックスタック一覧',
    'https://handbook.gitlab.com/handbook/business-technology/tech-stack/',
  ),
  'product/pricing-themes': upstreamLink(
    '価格設定テーマ',
    'https://handbook.gitlab.com/handbook/company/pricing/',
  ),
  'product/product-priorities': upstreamLink(
    'プロダクト優先順位',
    'https://handbook.gitlab.com/handbook/product/product-priorities/',
  ),
  'engineering/design-document-header': designDocumentHeader,
  'team-by-manager-slug': teamMembersLink,
  'team-by-manager-role': teamMembersLink,
  'team-by-departments': teamMembersLink,
  // JS-driven UI controls in upstream — drop silently in the static export.
  'all-remote/country-select': noop,
};

// Paired shortcodes: `{{% name args %}}...{{% /name %}}`.
// Order matters: outer wrappers (cardpane) must be processed before inner
// wrappers (card) so the inner shortcodes survive into the next pass.
const PAIRED_HANDLERS: Record<string, PairedShortcodeHandler> = {
  cardpane,
  card,
  alert,
  panel,
  details,
  note,
};

// Matches both `{{< name args >}}` and `{{% name args %}}`. Names allow
// slashes (e.g. `product/pricing-themes`) for Hugo's nested shortcode
// directories.
const SHORTCODE = /\{\{([<%])\s*([a-zA-Z][a-zA-Z0-9_/-]*)\s*([\s\S]*?)\s*([>%])\}\}/g;

export interface TransformResult {
  content: string;
  unknown: Set<string>;
  handled: Set<string>;
}

export async function transformShortcodes(
  content: string,
  ctx: ShortcodeContext
): Promise<TransformResult> {
  const unknown = new Set<string>();
  const handled = new Set<string>();

  // Pass 1: paired shortcodes. Replace `{{% name args %}}...{{% /name %}}`
  // with the handler output before the single-tag pass runs (which would
  // otherwise see the opening tag in isolation).
  for (const [name, handler] of Object.entries(PAIRED_HANDLERS)) {
    const pairRe = new RegExp(
      `\\{\\{[<%]\\s*${name}\\s*([\\s\\S]*?)\\s*[>%]\\}\\}([\\s\\S]*?)\\{\\{[<%]\\s*/\\s*${name}\\s*[>%]\\}\\}`,
      'g'
    );
    const matches: Array<{ start: number; end: number; args: string; inner: string }> = [];
    let pm: RegExpExecArray | null;
    while ((pm = pairRe.exec(content)) !== null) {
      matches.push({
        start: pm.index,
        end: pm.index + pm[0].length,
        args: pm[1],
        inner: pm[2],
      });
    }
    for (let i = matches.length - 1; i >= 0; i--) {
      const r = matches[i];
      const replacement = await handler(r.args, r.inner, ctx);
      content = content.slice(0, r.start) + replacement + content.slice(r.end);
      handled.add(name);
    }
  }

  const replacements: Array<{ start: number; end: number; replacement: string }> = [];

  SHORTCODE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = SHORTCODE.exec(content)) !== null) {
    const match = m[0];
    const name = m[2];
    const args = m[3];

    const handler = HANDLERS[name];
    if (!handler) {
      unknown.add(name);
      continue;
    }

    const replacement = await handler(args, ctx);
    replacements.push({
      start: m.index,
      end: m.index + match.length,
      replacement,
    });
    handled.add(name);
  }

  // Apply replacements from the end so offsets stay valid.
  let result = content;
  for (let i = replacements.length - 1; i >= 0; i--) {
    const r = replacements[i];
    result = result.slice(0, r.start) + r.replacement + result.slice(r.end);
  }

  return { content: result, unknown, handled };
}

export type { ShortcodeContext, ShortcodeHandler };
