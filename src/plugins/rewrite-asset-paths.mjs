// Remark plugin: prefix root-absolute asset URLs (e.g. `/images/...`) with an
// external base so translated Markdown that carries upstream Hugo paths still
// resolves to real files. Operates on mdast — both Markdown `image` nodes and
// raw `html` nodes (so inline `<img src="/...">` is rewritten too).

const SKIP_PREFIXES = ['//', 'data:', 'blob:', 'mailto:', 'tel:'];
// Matches `src`/`poster` on img/video/audio/source tags when the value is a
// root-absolute path (starts with a single `/`).
const RAW_MEDIA_ATTR_RE =
  /(<(?:img|video|audio|source)\b[^>]*?\s(?:src|poster)\s*=\s*)("|')(\/[^"'>\s]*)\2/gi;

export function rewriteAssetPaths({ base }) {
  if (!base) return () => {};
  const trimmedBase = base.replace(/\/$/, '');

  return () => (tree) => {
    visit(tree, (node) => {
      if (node.type === 'image' && typeof node.url === 'string') {
        if (isRewritable(node.url)) node.url = trimmedBase + node.url;
        return;
      }
      if ((node.type === 'html' || node.type === 'raw') && typeof node.value === 'string') {
        node.value = node.value.replace(RAW_MEDIA_ATTR_RE, (match, prefix, quote, pathValue) => {
          if (!isRewritable(pathValue)) return match;
          return `${prefix}${quote}${trimmedBase}${pathValue}${quote}`;
        });
      }
    });
  };
}

function isRewritable(value) {
  if (typeof value !== 'string' || !value.startsWith('/')) return false;
  return !SKIP_PREFIXES.some((p) => value.startsWith(p));
}

function visit(node, fn) {
  if (!node) return;
  fn(node);
  const children = node.children;
  if (Array.isArray(children)) {
    for (const child of children) visit(child, fn);
  }
}
