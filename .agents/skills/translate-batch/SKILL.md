---
name: translate-batch
description: GitLab Handbook の upstream pending ファイルを日本語に翻訳し、manifest を更新して `translation/batch-YYYY-MM-DD-N` PR を作る Codex workflow。ユーザーが「翻訳バッチを回して」「pending を消化して」「翻訳して PR 作って」などと依頼したときに使う。
---

# GitLab Handbook 日本語翻訳バッチ（Codex）

現在のリポジトリ checkout で、upstream の pending ファイルを翻訳して `content/handbook/` と `translation-state/manifest.json` を更新し、`main` 向け PR を作成する。

## 前提

- Codex の常時ルールは `AGENTS.md`。
- プロジェクト構成・コマンドは `CLAUDE.md`。
- 用語集は `.claude/translation-glossary.md`。Codex / Claude Code 共通の唯一の情報源。
- Codex custom agent:
  - `.codex/agents/translator.toml`
  - `.codex/agents/translation-reviewer.toml`
- Claude Code 版 skill は `.claude/skills/translate-batch/SKILL.md`。運用差分が必要な場合以外は同じ考え方を保つ。

## 重要な制約

- `upstream/` は submodule。翻訳バッチ以外で submodule pointer を変更しない。
- バッチブランチは `translation/batch-YYYY-MM-DD-N`。base は常に `main`。
- manifest の既存キー順序は保持する。ソートしない。
- manifest を複数 agent が同時に書くと衝突するため、書き込みは必ず逐次で行う。
- `content/handbook/company/culture/songbook.md` は歌詞を含むため新規翻訳対象にしない。
- upstream の `*.html.md` は翻訳側では `.md` に正規化済みのことが多い。既訳 `.md` があれば新規翻訳せず alias entry で処理する。

## 手順

### 1. 状態確認

```bash
git status --short --untracked-files=all
git fetch origin --prune
git branch -r | grep 'translation/batch-' | sort -V | tail -3
python3 -c "import json; m=json.load(open('translation-state/manifest.json')); print('entries:', len(m.get('entries', m)))"
npm run sync:upstream
```

未関係の変更がある場合は上書きしない。`M upstream` が出ている場合は、翻訳バッチとしてその submodule state を使うのか、`main` の recorded state に戻すのかを作業前に明確にする。

### 2. ブランチ作成

```bash
git checkout main
git pull origin main
git checkout -b translation/batch-YYYY-MM-DD-N
```

`N` は同日の既存 batch branch と重複しない番号にする。

### 3. 翻訳対象選定

`npm run sync:upstream` の `[modified]` を優先し、次に `[new]` を選ぶ。1 回の翻訳 chunk は 5〜10 ファイルを目安にし、長い `_index.md` が複数ある場合は 3〜5 ファイルに減らす。

各候補について確認する:

- 対応する `upstream/content/handbook/...` を読む。
- 既訳ファイルが `content/handbook/...` に存在するか確認する。
- `*.html.md` は `.md` 既訳がある場合、新規翻訳ではなく manifest alias 追加で扱う。

### 4. 翻訳

Codex の subagent workflow が使える場合は、`translator` custom agent に翻訳 chunk を渡す。使えない場合は、この skill と `.codex/agents/translator.toml` の指示を親 thread で実行する。

translator への指示には必ず含める:

- 翻訳対象パス一覧。
- `upstream/` から読み、同じ相対パスで `content/handbook/` に書くこと。
- frontmatter tracking fields:
  - `upstream_path`
  - `upstream_sha`
  - `lastmod`
  - `translated_at`
  - `translator: codex`
  - `stale: false`
- manifest entry fields:
  - `path`
  - `upstream_sha`
  - `upstream_committed_at`
  - `translated_at`
  - `model`
  - `input_hash`
- Markdown / Hugo shortcode / links / images / code fences は原文構造を保持。
- glossary 違反を避ける。

### 5. manifest 更新

翻訳ファイルを書いた後、必要に応じて helper script を使う。

```bash
CODEX_TRANSLATION_MODEL=<actual-model-or-codex> \
  python3 .agents/skills/translate-batch/scripts/update_manifest_entries.py \
  content/handbook/<path-1>.md content/handbook/<path-2>.md
```

manifest entry が欠落している場合:

```bash
CODEX_TRANSLATION_MODEL=<actual-model-or-codex> \
  python3 .agents/skills/translate-batch/scripts/repair_manifest.py
```

`*.html.md` alias が必要な場合は tracked helper script を編集せず、mapping を引数で渡して実行する。複数 alias は 3 引数の組を繰り返す。

```bash
python3 .agents/skills/translate-batch/scripts/add_html_md_aliases.py \
  content/handbook/<path>.html.md \
  content/handbook/<path>.md \
  upstream/content/handbook/<path>.html.md
```

### 6. 検証

最低限、対象ファイルと manifest を確認する。

```bash
git diff --stat
git diff -- content/handbook translation-state/manifest.json
python3 -c "import json; m=json.load(open('translation-state/manifest.json')); print(len(m.get('entries', m)))"
hugo --renderToMemory --quiet
```

Hugo が環境にない、または dependency/network 制約で実行できない場合は、実行できなかった理由を PR 本文と最終報告に書く。

レビュー前に必要なら `translation-reviewer` custom agent を使い、対象ファイルを upstream と突き合わせる。レビュー agent は read-only なので、修正は親 thread で行う。

### 7. commit / PR

```bash
git add upstream translation-state/manifest.json content/handbook/<関連パス>
git commit -m "translation: batch YYYY-MM-DD-N"
git push -u origin translation/batch-YYYY-MM-DD-N
gh pr create --base main --title "translation: batch YYYY-MM-DD-N" --body "<summary>"
```

翻訳が新しい upstream HEAD を根拠にしている場合は、`upstream` submodule pointer も同じ commit に含める。content / manifest が記録する `upstream_sha` と superproject が checkout する `upstream` がずれると、レビューと staleness tooling が誤った原文を参照する。

PR body には以下を含める:

- 翻訳/更新したファイル数。
- manifest entries の差分。
- `translator: codex` と記録したこと。
- 実行した検証。
- skipped file や alias repair の有無。

### 8. Codex / CodeRabbit review 対応

PR 作成後にレビュー指摘が来たら、`AGENTS.md` のレビュー方針に従う。

- 必ず upstream の同じ箇所を読む。
- upstream にある typo や壊れた Markdown を翻訳側で直す必要はない。
- 修正が必要な場合は content と manifest の整合を保って commit する。
- 対応不要の場合は理由を明記して thread を resolve する。
- 再レビューが必要なら `@codex review` を PR コメントで依頼する。

## 出力

最終報告は短くまとめる:

- PR 番号と URL（作成しなかった場合は no-op 理由）
- 翻訳/更新ファイル数
- manifest entries の差分
- 検証結果
- review 対応の有無
- 特記事項（alias、songbook skip、Hugo 未実行など）
