#!/usr/bin/env python3
"""Repair missing manifest entries from translated content frontmatter.

Usage:
  CODEX_TRANSLATION_MODEL=<actual-model-or-codex> \
    python3 .agents/skills/translate-batch/scripts/repair_manifest.py
"""
import hashlib
import json
import os
import re
from pathlib import Path

ROOT = Path.cwd()
MANIFEST = ROOT / "translation-state" / "manifest.json"
CONTENT_ROOT = ROOT / "content" / "handbook"
UPSTREAM_ROOT = ROOT / "upstream" / "content" / "handbook"
FM_RE = re.compile(rb"^---\n(.+?\n)---\n", re.DOTALL)
MODEL = os.environ.get("CODEX_TRANSLATION_MODEL") or os.environ.get("TRANSLATION_MODEL") or "codex"


def read_fm(path):
    raw = path.read_bytes()
    match = FM_RE.match(raw)
    if not match:
        return {}
    out = {}
    for line in match.group(1).decode("utf-8", errors="replace").splitlines():
        if ":" not in line:
            continue
        key, _, value = line.partition(":")
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        if key in ("upstream_sha", "translated_at", "translator", "upstream_path", "lastmod"):
            out[key] = value
    return out


def sha256_file(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(8192), b""):
            h.update(chunk)
    return h.hexdigest()


def resolve_upstream_file(content_path, fm):
    if fm.get("upstream_path"):
        candidate = ROOT / "upstream" / fm["upstream_path"].lstrip("/")
        if candidate.is_file():
            return candidate

    rel_h = content_path.relative_to(CONTENT_ROOT).as_posix()
    candidate = UPSTREAM_ROOT / rel_h
    if candidate.is_file():
        return candidate
    html_candidate = candidate.with_suffix(".html.md")
    if html_candidate.is_file():
        return html_candidate
    return None


def main():
    manifest = json.loads(MANIFEST.read_text())
    entries = manifest["entries"] if isinstance(manifest.get("entries"), dict) else manifest
    wrapped = isinstance(manifest.get("entries"), dict)
    added = 0
    for content_path in sorted(CONTENT_ROOT.rglob("*.md")):
        rel = content_path.relative_to(ROOT).as_posix()
        if rel in entries:
            continue
        fm = read_fm(content_path)
        if not fm.get("upstream_sha") or not fm.get("translated_at"):
            continue
        upstream_file = resolve_upstream_file(content_path, fm)
        if upstream_file is None:
            continue
        entry = {
            "path": rel,
            "upstream_sha": fm["upstream_sha"],
            "translated_at": fm["translated_at"],
            "model": MODEL,
            "input_hash": sha256_file(upstream_file),
        }
        if fm.get("lastmod"):
            entry["upstream_committed_at"] = fm["lastmod"]
        entries[rel] = entry
        added += 1
    if wrapped:
        manifest["entries"] = entries
        output = manifest
    else:
        output = entries
    MANIFEST.write_text(json.dumps(output, indent=2, ensure_ascii=False) + "\n")
    print(f"added: {added}, total: {len(entries)}")


if __name__ == "__main__":
    main()
