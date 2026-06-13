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


def _exists_at_sha(sha, up_rel):
    """記録された sha 時点で up_rel が存在するかを確認する。"""
    r = subprocess.run(
        ["git", "-C", "upstream", "cat-file", "-e", f"{sha}:{up_rel}"],
        capture_output=True,
    )
    return r.returncode == 0


def resolve_upstream_rel(rel, fm, sha):
    """翻訳ファイルの content 相対パスと frontmatter から、対応する upstream の
    相対パス（`content/handbook/...`）を返す。見つからなければ None。
    候補の存在確認は作業ツリーではなく **記録された sha** に対して行う
    （sha 以降に .html.md → .md などの改名があっても旧 SHA 側で正しく解決するため）。"""
    candidates = [rel]
    # .html.md 互換（翻訳側は .md にリネーム済み）
    candidates.append(rel[:-3] + ".html.md" if rel.endswith(".md") else rel + ".html.md")
    # frontmatter の upstream_path（URL）から導出（移動/改名ページ対応）
    up_path = (fm.get("upstream_path") or "").strip()
    if up_path:
        seg = up_path.strip("/")
        seg = seg[len("handbook/"):] if seg.startswith("handbook/") else seg
        base = "content/handbook/" + seg if seg else "content/handbook"
        candidates += [f"{base}/_index.md", f"{base}.md",
                       f"{base}/_index.html.md", f"{base}.html.md"]
    seen = set()
    for cand in candidates:
        if cand in seen:
            continue
        seen.add(cand)
        if _exists_at_sha(sha, cand):
            return cand
    return None


def input_hash_at_sha(sha, up_rel):
    """記録された upstream_sha 時点のファイル内容の SHA-256 を返す。
    その sha で取得できない場合は作業ツリーの内容にフォールバックする。"""
    r = subprocess.run(
        ["git", "-C", "upstream", "show", f"{sha}:{up_rel}"],
        capture_output=True,
    )
    if r.returncode == 0:
        return hashlib.sha256(r.stdout).hexdigest()
    # 記録された sha のオブジェクトが取得できない場合（shallow clone 等）は、
    # 作業ツリーをハッシュすると古い翻訳に最新原文の input_hash を記録してしまい
    # check-staleness が誤判定する。フォールバックせずエラーにして manifest を更新しない。
    raise RuntimeError(
        f"cannot read {up_rel} at {sha} (object missing; unshallow upstream で履歴取得が必要)"
    )


def upstream_committed_at(sha, rel):
    r = subprocess.run(
        ["git", "-C", "upstream", "log", "-1", "--format=%cI", sha, "--", rel],
        capture_output=True, text=True,
    )
    out = r.stdout.strip()
    # shallow clone でその sha にファイルを最後に変更した祖先が含まれない場合、
    # コマンドは成功しても空を返しうる。空の committed_at を manifest に書くと
    # all-or-nothing 保証をすり抜けるため、エラーにして書き込みを中止させる。
    if r.returncode != 0 or not out:
        raise RuntimeError(
            f"cannot resolve commit timestamp for {rel} at {sha} "
            f"(empty git log; unshallow upstream で履歴取得が必要)"
        )
    return out


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
        # upstream の相対パスを解決する。
        # 1) 同じ相対パス（最も一般的） 2) .html.md 互換 3) frontmatter の
        # upstream_path（移動/改名されたページ）から導出。
        up_rel = resolve_upstream_rel(rel, fm, sha)
        if up_rel is None:
            errors.append(f"upstream missing: {rel}")
            continue
        # committed_at と input_hash はいずれも記録された upstream_sha 時点で解決する。
        # どちらかが取得できなければ errors に積んでスキップ（manifest は最終的に書かない）。
        try:
            committed = upstream_committed_at(sha, up_rel)
            ih = input_hash_at_sha(sha, up_rel)
        except RuntimeError as exc:
            errors.append(str(exc))
            continue
        entry = {
            "path": rel,
            "upstream_sha": sha,
            "translated_at": tat,
            "model": "claude-opus-4-7",
            "input_hash": ih,
            "upstream_committed_at": committed,
        }
        if rel in e:
            updated += 1
        else:
            added += 1
        e[rel] = entry
    # エラーが 1 件でもあれば manifest を一切書き込まずに終了する。
    # 部分更新がコミットされると翻訳追跡状態が不整合になるため、all-or-nothing にする。
    if errors:
        for err in errors:
            print("ERROR:", err, file=sys.stderr)
        print(
            f"aborted without writing manifest "
            f"({len(errors)} error(s); {updated} update(s)/{added} addition(s) discarded)",
            file=sys.stderr,
        )
        sys.exit(2)
    out = m
    if wrap:
        m["entries"] = e
    else:
        out = e
    MANIFEST.write_text(json.dumps(out, indent=2, ensure_ascii=False) + "\n")
    print(f"updated: {updated}, added: {added}, total: {len(e)}")


if __name__ == "__main__":
    main()
