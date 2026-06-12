#!/usr/bin/env python3
"""指定した content/handbook/*.md ファイル群について、フロントマターと upstream の
git 情報から manifest entries を作成/更新する。既存キーは順序を保ったまま値だけ更新し、
新規キーは末尾に追加する（ソートしない）。

使い方:
  python3 .claude/skills/translate-batch/scripts/update_manifest_entries.py <content_path> [<content_path> ...]
"""
import json
import hashlib
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path.cwd()
MANIFEST = ROOT / "translation-state" / "manifest.json"
FM_RE = re.compile(rb"^---\n(.+?\n)---\n", re.DOTALL)


def read_fm(path):
    raw = path.read_bytes()
    m = FM_RE.match(raw)
    out = {}
    if not m:
        return out
    for line in m.group(1).decode("utf-8", errors="replace").splitlines():
        if ":" not in line:
            continue
        k, _, v = line.partition(":")
        out[k.strip()] = v.strip().strip('"').strip("'")
    return out


def sha256_file(p):
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for c in iter(lambda: f.read(8192), b""):
            h.update(c)
    return h.hexdigest()


def upstream_committed_at(sha, rel):
    r = subprocess.run(
        ["git", "-C", "upstream", "log", "-1", "--format=%cI", sha, "--", rel],
        capture_output=True, text=True,
    )
    return r.stdout.strip()


def main():
    paths = sys.argv[1:]
    if not paths:
        print("no paths given", file=sys.stderr)
        sys.exit(1)
    m = json.loads(MANIFEST.read_text())
    e = m["entries"] if isinstance(m.get("entries"), dict) else m
    wrap = isinstance(m.get("entries"), dict)
    updated, added, errors = 0, 0, []
    for rel in paths:
        rel = rel.strip()
        if not rel:
            continue
        cp = ROOT / rel
        if not cp.is_file():
            errors.append(f"content missing: {rel}")
            continue
        fm = read_fm(cp)
        sha = fm.get("upstream_sha")
        tat = fm.get("translated_at")
        if not sha or not tat:
            errors.append(f"frontmatter incomplete: {rel}")
            continue
        # upstream path: prefer upstream_path-derived file, else same relative path
        up = ROOT / "upstream" / rel
        up_rel = rel
        if not up.is_file():
            cand = up.with_suffix(".html.md")
            if cand.is_file():
                up = cand
                up_rel = rel[:-3] + ".html.md"
            else:
                errors.append(f"upstream missing: {rel}")
                continue
        committed = upstream_committed_at(sha, up_rel)
        entry = {
            "path": rel,
            "upstream_sha": sha,
            "translated_at": tat,
            "model": "claude-opus-4-7",
            "input_hash": sha256_file(up),
            "upstream_committed_at": committed,
        }
        if rel in e:
            updated += 1
        else:
            added += 1
        e[rel] = entry
    out = m
    if wrap:
        m["entries"] = e
    else:
        out = e
    MANIFEST.write_text(json.dumps(out, indent=2, ensure_ascii=False) + "\n")
    print(f"updated: {updated}, added: {added}, total: {len(e)}")
    for err in errors:
        print("ERROR:", err, file=sys.stderr)
    if errors:
        sys.exit(2)


if __name__ == "__main__":
    main()
