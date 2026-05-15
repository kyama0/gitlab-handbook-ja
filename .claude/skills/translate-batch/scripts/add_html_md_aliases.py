#!/usr/bin/env python3
"""upstream に `*.html.md` があるが翻訳側が `.md` で存在する場合、manifest に
upstream パスをキーとする alias entry を追加して `sync:upstream` の `[new]` を消す。
content path フィールド (`path`) は `.md` のままにする。

使い方:
  1. 下の `MAPPINGS` を編集して対象を列挙する
  2. `python3 .claude/skills/translate-batch/scripts/add_html_md_aliases.py`
"""
import json
import hashlib

MAPPINGS = [
    # ('content/handbook/<...>.html.md',
    #  'content/handbook/<...>.md',
    #  'upstream/content/handbook/<...>.html.md'),
]


def main():
    m = json.load(open("translation-state/manifest.json"))
    e = m["entries"]
    added = 0
    for upstream_key, content_key, upstream_path in MAPPINGS:
        if upstream_key in e:
            continue
        if content_key not in e:
            print(f"skip: {content_key} not in manifest")
            continue
        h = hashlib.sha256()
        with open(upstream_path, "rb") as f:
            for chunk in iter(lambda: f.read(8192), b""):
                h.update(chunk)
        base = e[content_key]
        e[upstream_key] = {
            "path": content_key,
            "upstream_sha": base["upstream_sha"],
            "translated_at": base["translated_at"],
            "model": base["model"],
            "input_hash": h.hexdigest(),
        }
        added += 1
    with open("translation-state/manifest.json", "w") as f:
        json.dump({"entries": e}, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"added: {added}")


if __name__ == "__main__":
    main()
