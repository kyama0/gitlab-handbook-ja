#!/usr/bin/env python3
"""バッチ翻訳後に、指定した content パス群の manifest エントリを更新/追加する。

使い方:
  python3 update_manifest_batch.py <content/handbook/...md> [...]

各パスについて:
- upstream_sha = `git -C upstream rev-parse HEAD`
- upstream_committed_at = `git -C upstream log -1 --format=%cI <sha> -- <path>`
- translated_at = 翻訳済みファイルのフロントマターから読む
- input_hash = upstream ファイルの sha256
- model = claude-opus-4-7

既存キーは順序を保ったまま値だけ更新し、新規キーは末尾に追加する（既存順序はソートしない）。
"""
import json
import hashlib
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[4]
MANIFEST = ROOT / "translation-state" / "manifest.json"
FM_RE = re.compile(rb"^---\n(.+?\n)---\n", re.DOTALL)
MODEL = "claude-opus-4-7"


def read_translated_at(path: Path) -> str:
    raw = path.read_bytes()
    m = FM_RE.match(raw)
    if not m:
        raise RuntimeError(f"no frontmatter: {path}")
    for line in m.group(1).decode("utf-8", errors="replace").splitlines():
        if line.startswith("translated_at:"):
            return line.partition(":")[2].strip().strip('"').strip("'")
    raise RuntimeError(f"no translated_at: {path}")


def sha256_file(p: Path) -> str:
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for c in iter(lambda: f.read(8192), b""):
            h.update(c)
    return h.hexdigest()


def git_upstream(*args) -> str:
    return subprocess.check_output(
        ["git", "-C", str(ROOT / "upstream"), *args], text=True
    ).strip()


def main():
    rels = sys.argv[1:]
    if not rels:
        print("usage: update_manifest_batch.py <content/handbook/...md> ...")
        sys.exit(1)
    sha = git_upstream("rev-parse", "HEAD")
    m = json.loads(MANIFEST.read_text())
    e = m["entries"]
    updated = added = 0
    for rel in rels:
        content_path = ROOT / rel
        upstream_path = ROOT / "upstream" / rel
        if not content_path.is_file():
            print(f"SKIP (no translated file): {rel}")
            continue
        if not upstream_path.is_file():
            print(f"SKIP (no upstream file): {rel}")
            continue
        committed_at = git_upstream("log", "-1", "--format=%cI", sha, "--", rel)
        entry = {
            "path": rel,
            "upstream_sha": sha,
            "translated_at": read_translated_at(content_path),
            "model": MODEL,
            "input_hash": sha256_file(upstream_path),
            "upstream_committed_at": committed_at,
        }
        if rel in e:
            e[rel] = entry
            updated += 1
        else:
            e[rel] = entry
            added += 1
    MANIFEST.write_text(json.dumps(m, ensure_ascii=False, indent=2) + "\n")
    print(f"updated={updated} added={added} total_entries={len(e)}")


if __name__ == "__main__":
    main()
