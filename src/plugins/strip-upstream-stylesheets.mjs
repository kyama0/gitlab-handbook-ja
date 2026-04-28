// Remark plugin: strip `<link rel="stylesheet">` tags inherited from upstream
// Hugo content. The referenced files (e.g. /stylesheets/biztech.css) live in
// the upstream Hugo `static/` tree and are not copied into our build, so they
// produce 404s in the network panel without adding anything visual to our
// Tailwind-based site.

const LINK_STYLESHEET_RE =
  /<link\b[^>]*\brel\s*=\s*["']?stylesheet["']?[^>]*\/?>\s*/gi;

export function stripUpstreamStylesheets() {
  return () => (tree) => {
    visit(tree, (node) => {
      if ((node.type === 'html' || node.type === 'raw') && typeof node.value === 'string') {
        node.value = node.value.replace(LINK_STYLESHEET_RE, '');
      }
    });
  };
}

function visit(node, fn) {
  if (!node) return;
  fn(node);
  const children = node.children;
  if (Array.isArray(children)) {
    for (const child of children) visit(child, fn);
  }
}
