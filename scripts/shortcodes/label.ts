import type { ShortcodeHandler } from './types.ts';
import { parseArgs } from './types.ts';

// Hugo `label` shortcode: `{{< label name="X" color="#hex" >}}` — render a
// GitLab-style colored label badge inline.
export const label: ShortcodeHandler = (args) => {
  const { named } = parseArgs(args);
  const name = named.name ?? '';
  const color = named.color ?? '#6b7280';
  if (!name) return '';
  // Pick a contrasting text color based on luminance.
  const text = isLightColor(color) ? '#1f2937' : '#ffffff';
  return `<span class="inline-block rounded px-2 py-0.5 text-xs font-medium" style="background-color:${color};color:${text}">${name}</span>`;
};

function isLightColor(hex: string): boolean {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex);
  if (!m) return false;
  const v = parseInt(m[1], 16);
  const r = (v >> 16) & 0xff;
  const g = (v >> 8) & 0xff;
  const b = v & 0xff;
  // Perceived luminance (Rec. 709 weights).
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 160;
}
