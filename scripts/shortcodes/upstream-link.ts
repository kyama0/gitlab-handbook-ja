import type { ShortcodeHandler } from './types.ts';

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

// All-remote country selector is a JS-driven dropdown — silently drop it
// in our static export rather than emitting a broken control.
export const noop: ShortcodeHandler = () => '';
