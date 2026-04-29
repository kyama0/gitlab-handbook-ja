import { readFile } from 'node:fs/promises';
import { parse as parseYaml } from 'yaml';
import type { ShortcodeHandler, ShortcodeContext } from './types.ts';

// Generic placeholder for shortcodes that render large data-driven sections
// (e.g. a list of all team members or all KPI dashboards) we don't carry
// locally. Emits a small notice with a link to the live upstream page.
//
// The factory takes the upstream URL and label so a single helper can back
// multiple placeholder handlers.
export function upstreamLink(label: string, url: string): ShortcodeHandler {
  return () => {
    return `\n<p class="my-3 text-sm text-gray-600 italic">${label}は <a href="${url}" rel="external noopener">原文 (英語)</a> を参照してください。</p>\n`;
  };
}

async function readUpstreamPath(ctx: ShortcodeContext): Promise<string | null> {
  const raw = await readFile(ctx.filePath, 'utf8');
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw);
  if (!m) return null;
  const fm = (parseYaml(m[1]) as Record<string, unknown>) ?? {};
  return typeof fm['upstream_path'] === 'string' ? fm['upstream_path'] : null;
}

// Per-page anchor IDs for team/member shortcodes.
// Key: upstream_path value (with trailing slash). Value: anchor fragment (no #).
// Determined by inspecting each live upstream page for the heading immediately
// above where the shortcode renders. Empty string = link to page top.
const TEAM_ANCHORS: Record<string, string> = {
  '/handbook/engineering/ai/agent-foundations/': 'team-members',
  '/handbook/engineering/ai/ai-coding/': 'team-members',
  '/handbook/engineering/ai/ai-framework/': '-team-members',
  '/handbook/engineering/ai/context-systems/': 'team-members',
  '/handbook/engineering/ai/custom-models/': 'team-members',
  '/handbook/engineering/ai/editor-extensions-multi-platform/': '-team-members',
  '/handbook/engineering/ai/editor-extensions-vscode/': 'group-members',
  '/handbook/engineering/ai/search/': 'team-members',
  '/handbook/engineering/ai/workflow-catalog/': 'team-members',
  '/handbook/engineering/data-engineering/analytics/platform-insights/': 'team-members',
  '/handbook/engineering/data-engineering/database-excellence/database-frameworks/': 'team-members',
  '/handbook/engineering/data-engineering/database-excellence/database-operations/': 'team-members',
  '/handbook/engineering/development/fulfillment/fulfillment-platform/': 'team-members',
  '/handbook/engineering/development/fulfillment/provision/': 'team-members',
  '/handbook/engineering/development/fulfillment/seat-management/': 'team-members',
  '/handbook/engineering/development/fulfillment/utilization/': 'team-members',
  '/handbook/engineering/development/growth/': 'all-team-members',
  '/handbook/engineering/development/sec/secure/': 'team-members',
  '/handbook/engineering/development/sec/secure/secret-detection/': 'our-team',
  '/handbook/engineering/development/sec/secure/vulnerability-research/': 'vulnerability-research-team',
  '/handbook/engineering/development/sec/security-risk-management/security-insights/': 'security-insights-team-structure',
  '/handbook/engineering/development/sec/software-supply-chain-security/': 'pipeline-security',
  '/handbook/engineering/development/sec/software-supply-chain-security/anti-abuse/': 'group-members',
  '/handbook/engineering/devops/create/code-review/': 'group-members',
  '/handbook/engineering/devops/create/code-review/backend/': 'group-members',
  '/handbook/engineering/devops/create/code-review/frontend/': 'team-members',
  '/handbook/engineering/devops/create/engineers/': 'createcode-review-backend',
  '/handbook/engineering/devops/create/remote-development/': 'team-members',
  '/handbook/engineering/devops/create/source-code/backend/': 'team-members',
  '/handbook/engineering/devops/create/source-code/frontend/': 'team-members',
  '/handbook/engineering/devops/package/': 'team-members',
  '/handbook/engineering/devops/plan/knowledge/': 'team-members',
  '/handbook/engineering/devops/plan/product-planning/': 'team-members',
  '/handbook/engineering/devops/plan/project-management/': 'team-members',
  '/handbook/engineering/devops/runner/': 'ci-functions-platform',
  '/handbook/engineering/devops/runner/ci-functions-platform/': 'team-members',
  '/handbook/engineering/devops/runner/environments/': 'team-members',
  '/handbook/engineering/devops/runner/runner-core/': 'team-members',
  '/handbook/engineering/devops/verify/': 'verifypipeline-authoring',
  '/handbook/engineering/devops/verify/ci-platform/': 'team-members',
  '/handbook/engineering/devops/verify/pipeline-authoring/': 'team-members',
  '/handbook/engineering/devops/verify/pipeline-execution/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/data-access/': 'gitaly',
  '/handbook/engineering/infrastructure-platforms/developer-experience/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/developer-experience/api/': 'members',
  '/handbook/engineering/infrastructure-platforms/developer-experience/development-analytics/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/developer-experience/development-tooling/': 'team-structure',
  '/handbook/engineering/infrastructure-platforms/developer-experience/performance-enablement/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/developer-experience/test-governance/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/gitlab-dedicated/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/gitlab-dedicated/ecosystem/': 'what-others-own',
  '/handbook/engineering/infrastructure-platforms/gitlab-dedicated/environment-automation/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/gitlab-dedicated/switchboard/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/gitlab-dedicated/us-public-sector-services/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/gitlab-delivery/build/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/gitlab-delivery/delivery/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/': 'distribution-build-team',
  '/handbook/engineering/infrastructure-platforms/gitlab-delivery/operate/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/gitlab-delivery/runway/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/production-engineering/fleet-management/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/production-engineering/networking-and-incident-management/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/production-engineering/observability/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/tenant-scale/': 'geo',
  '/handbook/engineering/infrastructure-platforms/tenant-scale/cells-infrastructure/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/tenant-scale/geo/': 'the-geo-team',
  '/handbook/engineering/infrastructure-platforms/tenant-scale/git/': 'team',
  '/handbook/engineering/infrastructure-platforms/tenant-scale/gitaly/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/tenant-scale/organizations/': 'team-members',
  '/handbook/engineering/infrastructure-platforms/tenant-scale/tenant-services/': 'team-members',
};

// Placeholder for shortcodes that render team/member data from GitLab's people
// system. Emits a notice with a link to the corresponding section on the live
// upstream page. The anchor is looked up from TEAM_ANCHORS by upstream_path;
// falls back to page top if the path isn't in the map.
export const teamMembersLink: ShortcodeHandler = async (_args, ctx) => {
  const upstreamPath = await readUpstreamPath(ctx);
  const anchor = upstreamPath ? (TEAM_ANCHORS[upstreamPath] ?? '') : '';
  const url = upstreamPath
    ? `https://handbook.gitlab.com${upstreamPath}${anchor ? '#' + anchor : ''}`
    : 'https://handbook.gitlab.com';
  return `\n<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="${url}" rel="external noopener">原文 (英語)</a> を参照してください。</p>\n`;
};

// Placeholder for shortcodes that render team/member data from GitLab's people
// system. Emits a notice with a link to the corresponding section on the live
// upstream page, resolved from the file's `upstream_path` frontmatter.
export function upstreamSection(label: string, anchor: string): ShortcodeHandler {
  return async (_args, ctx) => {
    const upstreamPath = await readUpstreamPath(ctx);
    const url = upstreamPath
      ? `https://handbook.gitlab.com${upstreamPath}#${anchor}`
      : 'https://handbook.gitlab.com';
    return `\n<p class="my-3 text-sm text-gray-600 italic">${label}は <a href="${url}" rel="external noopener">原文 (英語)</a> を参照してください。</p>\n`;
  };
}

// All-remote country selector is a JS-driven dropdown — silently drop it
// in our static export rather than emitting a broken control.
export const noop: ShortcodeHandler = () => '';
