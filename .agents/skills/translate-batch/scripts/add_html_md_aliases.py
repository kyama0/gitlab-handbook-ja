#!/usr/bin/env python3
"""Add manifest aliases for upstream `*.html.md` files whose translations exist as `.md`.

Usage:
  1. Edit `MAPPINGS` below.
  2. Run:
     python3 .agents/skills/translate-batch/scripts/add_html_md_aliases.py
"""
import hashlib
import json
import os

MAPPINGS = [
    # ("content/handbook/<...>.html.md",
    #  "content/handbook/<...>.md",
    #  "upstream/content/handbook/<...>.html.md"),
]


def sha256_file(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(8192), b""):
            h.update(chunk)
    return h.hexdigest()


def main():
    with open("translation-state/manifest.json") as f:
        manifest = json.load(f)
    entries = manifest["entries"]
    added = 0
    for upstream_key, content_key, upstream_path in MAPPINGS:
        if upstream_key in entries:
            continue
        if content_key not in entries:
            print(f"skip: {content_key} not in manifest")
            continue
        if not os.path.exists(upstream_path):
            print(f"skip: upstream file not found: {upstream_path}")
            continue
        base = entries[content_key]
        entry = {
            "path": content_key,
            "upstream_sha": base["upstream_sha"],
            "translated_at": base["translated_at"],
            "model": base["model"],
            "input_hash": sha256_file(upstream_path),
        }
        if "upstream_committed_at" in base:
            entry["upstream_committed_at"] = base["upstream_committed_at"]
        entries[upstream_key] = entry
        added += 1
    manifest["entries"] = entries
    with open("translation-state/manifest.json", "w") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"added: {added}")


if __name__ == "__main__":
    main()
