// Remark plugin: honor Hugo/Pandoc-style heading IDs written as
// `## Heading text {#custom-id}`. Strips the `{#id}` suffix from the rendered
// heading and attaches it as an `id` attribute on the <h*> element.

const HEADING_ID_RE = /\s*\{#([A-Za-z0-9_:.-]+)\}\s*$/;

export function headingIds() {
  return () => (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'heading' || !Array.isArray(node.children) || node.children.length === 0) return;
      const last = node.children[node.children.length - 1];
      if (!last || last.type !== 'text' || typeof last.value !== 'string') return;
      const match = HEADING_ID_RE.exec(last.value);
      if (!match) return;
      last.value = last.value.slice(0, match.index).replace(/\s+$/, '');
      if (last.value === '') node.children.pop();
      node.data ??= {};
      node.data.hProperties ??= {};
      node.data.hProperties.id = match[1];
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
