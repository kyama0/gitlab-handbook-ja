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
import subprocess
import sys
from pathlib import Path

ROOT = Path.cwd()
MANIFEST = ROOT / "translation-state" / "manifest.json"
CONTENT_ROOT = ROOT / "content" / "handbook"
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


def exists_at_sha(sha, upstream_rel):
    result = subprocess.run(
        ["git", "-C", "upstream", "cat-file", "-e", f"{sha}:{upstream_rel}"],
        capture_output=True,
    )
    return result.returncode == 0


def resolve_upstream_rel(rel, fm, sha):
    candidates = [rel]
    candidates.append(rel[:-3] + ".html.md" if rel.endswith(".md") else rel + ".html.md")

    upstream_path = (fm.get("upstream_path") or "").strip()
    if upstream_path:
        segment = upstream_path.strip("/")
        segment = segment[len("handbook/"):] if segment.startswith("handbook/") else segment
        base = "content/handbook/" + segment if segment else "content/handbook"
        candidates += [
            f"{base}/_index.md",
            f"{base}.md",
            f"{base}/_index.html.md",
            f"{base}.html.md",
        ]

    seen = set()
    for candidate in candidates:
        if candidate in seen:
            continue
        seen.add(candidate)
        if exists_at_sha(sha, candidate):
            return candidate
    return None


def input_hash_at_sha(sha, upstream_rel):
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


def upstream_committed_at(sha, upstream_rel):
    result = subprocess.run(
        ["git", "-C", "upstream", "log", "-1", "--format=%cI", sha, "--", upstream_rel],
        capture_output=True,
        text=True,
    )
    output = result.stdout.strip()
    if result.returncode != 0 or not output:
        raise RuntimeError(
            f"cannot resolve commit timestamp for {upstream_rel} at {sha} "
            f"(empty git log; unshallow upstream history is required)"
        )
    return output


def main():
    manifest = json.loads(MANIFEST.read_text())
    entries = manifest["entries"] if isinstance(manifest.get("entries"), dict) else manifest
    wrapped = isinstance(manifest.get("entries"), dict)
    added = 0
    errors = []
    for content_path in sorted(CONTENT_ROOT.rglob("*.md")):
        rel = content_path.relative_to(ROOT).as_posix()
        if rel in entries:
            continue
        fm = read_fm(content_path)
        if not fm.get("upstream_sha") or not fm.get("translated_at"):
            continue
        upstream_rel = resolve_upstream_rel(rel, fm, fm["upstream_sha"])
        if upstream_rel is None:
            continue
        try:
            input_hash = input_hash_at_sha(fm["upstream_sha"], upstream_rel)
            committed = fm.get("lastmod") or upstream_committed_at(fm["upstream_sha"], upstream_rel)
        except RuntimeError as exc:
            errors.append(str(exc))
            continue
        entry = {
            "path": rel,
            "upstream_sha": fm["upstream_sha"],
            "translated_at": fm["translated_at"],
            "model": MODEL,
            "input_hash": input_hash,
            "upstream_committed_at": committed,
        }
        entries[rel] = entry
        added += 1
    if errors:
        for error in errors:
            print("ERROR:", error, file=sys.stderr)
        raise SystemExit(f"aborted without writing manifest ({len(errors)} error(s))")
    if wrapped:
        manifest["entries"] = entries
        output = manifest
    else:
        output = entries
    MANIFEST.write_text(json.dumps(output, indent=2, ensure_ascii=False) + "\n")
    print(f"added: {added}, total: {len(entries)}")


if __name__ == "__main__":
    main()
