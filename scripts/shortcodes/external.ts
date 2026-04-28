import type { ShortcodeHandler } from './types.ts';

// Hugo `external` shortcode emits a small "external link" indicator (the
// upstream uses a Font Awesome icon; we emit an inline ↗ glyph instead).
export const external: ShortcodeHandler = () => {
  return '<sup><small>↗</small></sup>';
};
