#!/usr/bin/env python3
"""manifest entries < content/handbook/*.md 件数のとき、フロントマター情報から
manifest entries を補修する。

使い方: リポジトリルートで `python3 .claude/skills/translate-batch/scripts/repair_manifest.py`
"""
import json
import hashlib
import re
from pathlib import Path

ROOT = Path.cwd()
MANIFEST = ROOT / "translation-state" / "manifest.json"
CONTENT_ROOT = ROOT / "content" / "handbook"
UPSTREAM_ROOT = ROOT / "upstream" / "content" / "handbook"
FM_RE = re.compile(rb"^---\n(.+?\n)---\n", re.DOTALL)


def read_fm(path):
    raw = path.read_bytes()
    m = FM_RE.match(raw)
    if not m:
        return {}
    out = {}
    for line in m.group(1).decode("utf-8", errors="replace").splitlines():
        if ":" not in line:
            continue
        k, _, v = line.partition(":")
        k = k.strip()
        v = v.strip().strip('"').strip("'")
        if k in ("upstream_sha", "translated_at", "translator", "upstream_path"):
            out[k] = v
    return out


def sha256_file(p):
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for c in iter(lambda: f.read(8192), b""):
            h.update(c)
    return h.hexdigest()


def main():
    m = json.loads(MANIFEST.read_text())
    e = m["entries"] if "entries" in m and isinstance(m.get("entries"), dict) else m
    wrap = "entries" in m and isinstance(m.get("entries"), dict)
    added = 0
    for cp in sorted(CONTENT_ROOT.rglob("*.md")):
        rel = cp.relative_to(ROOT).as_posix()
        if rel in e:
            continue
        fm = read_fm(cp)
        if not fm.get("upstream_sha") or not fm.get("translated_at"):
            continue
        # 1) フロントマターの upstream_path があれば優先 (移動/改名済みページ対応)
        up = None
        if fm.get("upstream_path"):
            candidate = ROOT / "upstream" / fm["upstream_path"].lstrip("/")
            if candidate.is_file():
                up = candidate
        # 2) コンテンツの相対パスから推測
        if up is None:
            rel_h = cp.relative_to(CONTENT_ROOT).as_posix()
            cand = UPSTREAM_ROOT / rel_h
            if cand.is_file():
                up = cand
            elif cand.with_suffix(".html.md").is_file():
                up = cand.with_suffix(".html.md")
        if up is None:
            continue
        e[rel] = {
            "path": rel,
            "upstream_sha": fm["upstream_sha"],
            "translated_at": fm["translated_at"],
            "model": "claude-opus-4-7",
            "input_hash": sha256_file(up),
        }
        added += 1
    if wrap:
        m["entries"] = e
        out = m
    else:
        out = e
    MANIFEST.write_text(json.dumps(out, indent=2, ensure_ascii=False) + "\n")
    print(f"added: {added}, total: {len(e)}")


if __name__ == "__main__":
    main()
