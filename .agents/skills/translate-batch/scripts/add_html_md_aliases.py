#!/usr/bin/env python3
"""Add manifest aliases for upstream `*.html.md` files whose translations exist as `.md`.

Usage:
  python3 .agents/skills/translate-batch/scripts/add_html_md_aliases.py \
    content/handbook/foo.html.md content/handbook/foo.md upstream/content/handbook/foo.html.md

Pass additional aliases as repeated triplets:
  <manifest-upstream-key> <content-key> <upstream-worktree-path>
"""
import hashlib
import json
import subprocess
import sys


def parse_mappings(argv):
    if not argv or len(argv) % 3 != 0:
        raise SystemExit(
            "usage: add_html_md_aliases.py "
            "<manifest-upstream-key> <content-key> <upstream-worktree-path> [...]"
        )
    return [tuple(argv[index:index + 3]) for index in range(0, len(argv), 3)]


def upstream_rel_from_path(upstream_path):
    return upstream_path[len("upstream/"):] if upstream_path.startswith("upstream/") else upstream_path


def input_hash_at_sha(sha, upstream_path):
    upstream_rel = upstream_rel_from_path(upstream_path)
    result = subprocess.run(
        ["git", "-C", "upstream", "show", f"{sha}:{upstream_rel}"],
        capture_output=True,
    )
    if result.returncode == 0:
        return hashlib.sha256(result.stdout).hexdigest()
    raise RuntimeError(
        f"cannot read {upstream_rel} at {sha} "
        f"(object missing; unshallow upstream history is required)"
    )


def main():
    mappings = parse_mappings(sys.argv[1:])
    with open("translation-state/manifest.json") as f:
        manifest = json.load(f)
    entries = manifest["entries"]
    added = 0
    errors = []
    for upstream_key, content_key, upstream_path in mappings:
        if upstream_key in entries:
            continue
        if content_key not in entries:
            print(f"skip: {content_key} not in manifest")
            continue
        base = entries[content_key]
        try:
            input_hash = input_hash_at_sha(base["upstream_sha"], upstream_path)
        except RuntimeError as exc:
            errors.append(str(exc))
            continue
        entry = {
            "path": content_key,
            "upstream_sha": base["upstream_sha"],
            "translated_at": base["translated_at"],
            "model": base["model"],
            "input_hash": input_hash,
        }
        if "upstream_committed_at" in base:
            entry["upstream_committed_at"] = base["upstream_committed_at"]
        entries[upstream_key] = entry
        added += 1
    if errors:
        for error in errors:
            print("ERROR:", error, file=sys.stderr)
        raise SystemExit(f"aborted without writing manifest ({len(errors)} error(s))")
    manifest["entries"] = entries
    with open("translation-state/manifest.json", "w") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"added: {added}")


if __name__ == "__main__":
    main()
