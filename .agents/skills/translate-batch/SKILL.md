---
name: translate-batch
description: GitLab Handbook (handbook.gitlab.com) の英語原文を日本語に翻訳して `gitlab-handbook-ja` リポジトリに新しい batch PR を作成し、Codex/CodeRabbit レビュー対応とマージまでを自己完結で行う Codex workflow。upstream submodule で pending になっているファイルを Codex の translator custom agent 経由で翻訳し、manifest を更新し、`translation/batch-YYYY-MM-DD-N` ブランチから `main` への PR として push する（base は常に `main`）。ユーザーから「翻訳バッチを回して」「次の翻訳バッチを作って」「pending を消化して」「翻訳して PR 作って」など、新しい翻訳バッチ作業の指示が来たときに使う。
---

# GitLab Handbook 日本語翻訳バッチ（Codex）

リポジトリ `/home/yamazaki/projects/gitlab-handbook-ja` で作業し、upstream で pending になっているファイルを翻訳・更新し、PR を 1 つ作成して、レビュー対応からマージまで自己完結で行う。

## 前提リソース

- Codex の常時ルールは `AGENTS.md`。プロジェクト構成・コマンドは `CLAUDE.md`。
- 用語集は `.claude/translation-glossary.md`。Codex / Claude Code 共通の唯一の情報源。
- 実翻訳は `.codex/agents/translator.toml` の translator custom agent に委譲する。multi-agent tools が使える場合は translator を起動し、使えない場合は同じ指示を親 thread で実行する。
- 翻訳レビューは `.codex/agents/translation-reviewer.toml` を使う。reviewer は read-only なので、修正は親 thread で行う。
- Claude Code 版 skill は `.claude/skills/translate-batch/SKILL.md`。運用差分が必要な箇所以外は同じ考え方を保つ。
- 翻訳追跡は `translation-state/manifest.json`。キーは `content/handbook/...` の相対パス。
- 翻訳済みコンテンツは `content/handbook/`、原文は `upstream/content/handbook/`（git submodule）。
- バッチブランチは `translation/batch-YYYY-MM-DD-N` 形式。base branch は常に `main`（stacked PR にはしない）。前のバッチが未マージでも、新バッチは `main` から切って `main` へ PR を出す。

## 重要な制約

- `upstream/` は git submodule。翻訳バッチ以外で submodule pointer を変更・巻き戻ししない。
- 未関係の変更がある場合は上書きしない。`git status` で `M upstream` が出ている場合は、翻訳バッチとしてその submodule state を使うのか、`main` の recorded state に戻すのかを作業前に明確にする。
- manifest の既存キー順序は保持する。ソートしない。
- manifest を複数 agent が同時に書くと衝突するため、書き込みは必ず逐次で行う。
- `content/handbook/company/culture/songbook.md` は歌詞を含むため新規翻訳対象にしない。
- upstream の `*.html.md` は翻訳側では `.md` に正規化済みのことが多い。既訳 `.md` があれば新規翻訳せず alias entry で処理する。
- 翻訳が新しい upstream HEAD を根拠にしている場合は、`upstream` submodule pointer も同じ commit に含める。content / manifest が記録する `upstream_sha` と superproject が checkout する `upstream` がずれると、レビューと staleness tooling が誤った原文を参照する。

## 手順

### ステップ 1: 状態確認

```bash
git status --short --untracked-files=all
git fetch origin --prune
git branch -r | grep 'translation/batch-' | sort -V | tail -3
python3 -c "import json; m=json.load(open('translation-state/manifest.json')); print('entries:', len(m.get('entries', m)))"
npm run sync:upstream
```

`sync:upstream` が空（pending ゼロ）なら no-op。Hugo クリーンビルドだけ確認して終了し、PR は作らない。

### ステップ 2: ブランチ作成

```bash
NEXT_DATE=<今日 YYYY-MM-DD>
NEXT_N=<重複しない次の番号>
git checkout main
git pull origin main
git checkout -b translation/batch-${NEXT_DATE}-${NEXT_N}
```

`NEXT_N` は同日の既存 `translation/batch-*` branch と重複しない番号にする。

### ステップ 3: 翻訳対象の選定

`sync:upstream` の出力に含まれるファイルから翻訳対象を選ぶ。優先順位:

1. `[modified]`（既訳の上流追従）
2. `[new]`（新規翻訳）

件数の上限はないが、translator には 1 回の呼び出しでまとめて渡しすぎない。目安として 5〜10 ファイル / 呼び出しに抑え、長文の `_index.md` を複数含む場合は 3〜5 件まで減らす。必要なら複数 chunk に分けて逐次起動する（並列起動は manifest 衝突するので避ける）。

各候補について確認する:

- 対応する `upstream/content/handbook/...` を読む。
- 既訳ファイルが `content/handbook/...` に存在するか確認する。
- `[new]` でも実は既訳ファイルが存在することがある（manifest 抜けのみ）。`find content/handbook/<file> -name '*.md'` で実在確認する。
- `*.html.md` の `[new]` はまず翻訳済み `.md` の有無を確認する。存在するなら manifest に alias entry を追加するだけで十分。
- `content/handbook/company/culture/songbook.md` は stub 翻訳が既に存在するため、新規対象には選ばない。

### ステップ 4: translator custom agent の呼び出し

multi-agent tools が使える場合は、`translator` custom agent に chunk を渡す。使えない場合は、この skill と `.codex/agents/translator.toml` の指示を親 thread で実行する。

translator への指示には必ず含める:

- 現在の branch 名と base branch 名。
- 翻訳対象ファイルのリスト（相対パス、`upstream/` 配下から読む旨を明記）。
- 各ファイルへの指示（翻訳して `content/handbook/` に書き出す、manifest entry を追加/更新）。
- frontmatter tracking fields:
  - `upstream_path`
  - `upstream_sha` = `git -C upstream rev-parse HEAD`
  - `lastmod` = `git -C upstream log -1 --format=%cI <upstream_sha> -- <upstream-relative path>`
  - `translated_at` = ダブルクォート付きの ISO 8601
  - `translator: codex`
  - `stale: false`
- manifest entry fields:
  - `path`
  - `upstream_sha`
  - `upstream_committed_at`
  - `translated_at`
  - `model` = 実際に使った Codex モデル名。取得できない場合は `codex`
  - `input_hash` = upstream source at `upstream_sha` の SHA-256
- 期待値（例: `manifest entries N -> N+X`）。
- Markdown / Hugo shortcode / links / images / code fences は原文構造を保持。
- glossary 違反を避ける。
- manifest の既存キー順序は絶対にソートしない。
- 途中で停止しないこと。失敗した場合は、処理済みファイルと未処理ファイルを明示すること。

#### token / context 上限リスクと停滞検出

長文ファイル（特に `_index.md`）を複数渡すと、translator が途中で打ち切られることがある。打ち切られると、それまでに書いた content だけが残り、manifest が未更新のまま終わることがある。

停滞・打ち切りの検出:

1. translator を launch した後、`git status --short` で進捗を確認する。content だけが増えて manifest が動かない場合は、部分書き出しの可能性が高い。
2. 5 分以上ファイル更新がなく、未処理ファイルが残っているなら、未処理ファイルだけを対象に新しい translator を起動する。元 agent が最終的に completion/error を返す場合は待つだけでよい。
3. 翻訳対象の各ファイルが期待 `upstream_sha` に更新されているか確認する:

```bash
for f in <翻訳対象ファイル群>; do
  printf "%-90s " "$f"
  grep '^upstream_sha:' "$f" | head -1
done
```

### ステップ 5: manifest 更新

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

`*.html.md` alias が必要な場合は、mapping を 3 引数の組で渡して実行する。複数 alias は同じ 3 引数の組を繰り返す。

```bash
python3 .agents/skills/translate-batch/scripts/add_html_md_aliases.py \
  content/handbook/<path>.html.md \
  content/handbook/<path>.md \
  upstream/content/handbook/<path>.html.md
```

### ステップ 6: 検証

commit する前に必ず以下を確認する。

```bash
# 1. 全 modified ファイルが期待 upstream_sha になっているか
for f in <翻訳対象ファイル群>; do
  printf "%-90s " "$f"
  grep '^upstream_sha:' "$f" | head -1
done

# 2. manifest が全ファイル更新されているか
python3 -c "
import json
m = json.load(open('translation-state/manifest.json'))
entries = m.get('entries', m)
for k in [<翻訳対象キー>]:
    e = entries.get(k, 'MISSING')
    print(k, '->', e if e == 'MISSING' else e.get('upstream_sha', '?'))
"

# 3. entries とコンテンツ件数の整合
python3 -c "import json; m=json.load(open('translation-state/manifest.json')); print(len(m.get('entries', m)))"
find content/handbook -name '*.md' | wc -l

# 4. 差分確認
git diff --stat
git diff -- content/handbook translation-state/manifest.json

# 5. Hugo ビルド
hugo --renderToMemory --quiet
```

entries と content 件数に差がある場合は、既存の `.html.md` alias 差分か manifest 欠落かを確認する。欠落なら `repair_manifest.py` を実行する。

Hugo が環境にない、または dependency/network 制約で実行できない場合は、実行できなかった理由を PR 本文と最終報告に書く。

レビュー前に必要なら `translation-reviewer` custom agent を使い、対象ファイルを upstream と突き合わせる。レビュー agent は read-only なので、修正は親 thread で行う。

### ステップ 7: commit / push / PR

```bash
git add translation-state/manifest.json content/handbook/<関連パス>
# upstream submodule pointer を更新した場合だけ追加:
git add upstream

git commit -m "translation: batch ${NEXT_DATE}-${NEXT_N}"
git push -u origin translation/batch-${NEXT_DATE}-${NEXT_N}

gh pr create --base main --title "translation: batch ${NEXT_DATE}-${NEXT_N}" \
  --body "## Summary
- N files translated/updated
- manifest entries X -> Y
- base = \`main\`
- translator = \`codex\`

## Test plan
- [x] manifest entries checked
- [x] frontmatter tracking fields checked
- [x] hugo --renderToMemory --quiet"

PR_NUM="$(gh pr view --repo kyama0/gitlab-handbook-ja --json number --jq .number)"
```

PR body には以下を含める:

- 翻訳/更新したファイル数。
- manifest entries の差分。
- `translator: codex` と記録したこと。
- 実行した検証。
- skipped file や alias repair の有無。
- Hugo 未実行ならその理由。

PR を作成したらレビュー状況の polling を始める。

## ステップ 8: Codex / CodeRabbit レビュー対応とマージ

PR を作成したら、そのままレビューを待ち、自分で対応してマージするところまで一気通貫で行う。翻訳バッチ PR は base が `main` なので、Codex 承認サイン（PR body への `+1` / 👍）が付くまで「レビュー依頼 -> レビュー指摘対応 -> 再レビュー依頼」を繰り返す。未解決スレッドがゼロでも `+1` がまだ無い場合はマージせず、polling と必要に応じた `@codex review` 再依頼を続ける。

Codex review の承認サインは、PR body に `chatgpt-codex-connector` が `+1` リアクションを付けており、かつ全レビュースレッドが resolved になっている状態とみなす。過去ラウンドの stale `+1` が残るため、未解決スレッドゼロを必ず AND 条件にする。

### 8-1: レビュー待ち polling

3 分間隔を目安に以下を確認する。

```bash
# (a) PR body への Codex +1 リアクション件数
gh api --paginate repos/kyama0/gitlab-handbook-ja/issues/${PR_NUM}/reactions \
  --jq '.[] | select(.content=="+1" and .user.login=="chatgpt-codex-connector") | .id' \
  | wc -l

# (b) 未解決レビュースレッド数
gh api graphql --paginate -f query='
query($endCursor: String) {
  repository(owner: "kyama0", name: "gitlab-handbook-ja") {
    pullRequest(number: '${PR_NUM}') {
      reviewThreads(first: 100, after: $endCursor) {
        nodes { isResolved }
        pageInfo { hasNextPage endCursor }
      }
    }
  }
}' --jq '.data.repository.pullRequest.reviewThreads.nodes[] | select(.isResolved==false) | .isResolved' \
  | wc -l

# (c) mergeable / CI 状況
gh pr view ${PR_NUM} --repo kyama0/gitlab-handbook-ja \
  --json mergeable,mergeStateStatus,statusCheckRollup \
  --jq '{mergeable, mergeStateStatus, ci: [.statusCheckRollup[]? | {name: .name, conclusion: .conclusion, status: .status}]}'
```

判定フロー:

- `CONFLICTING` -> 8-4 に進む（コンフリクト解消）。
- CI failed -> CI ログを調査して修正・push し、8-1 に戻る。
- 未解決スレッドあり -> 8-3 に進む（指摘対応）。stale `+1` が残っていても、この分岐を優先する。
- 未解決スレッドゼロ AND Codex `+1` あり AND CI CLEAN AND MERGEABLE -> 8-2 に進む（マージ）。
- 未解決スレッドゼロ AND Codex `+1` なし -> マージせず、3 分後に再確認する。累計 30 分以上 `+1` もスレッドも CI 変化も無い場合は、`gh pr comment ${PR_NUM} --body "@codex review"` でレビューを再依頼してから polling に戻る。
- どれでもない -> 3 分後に再確認し、必要に応じて `@codex review` を再依頼して polling に戻る。

### 8-2: マージ実行

```bash
gh pr merge ${PR_NUM} --merge
```

repository の運用で squash が必要な場合だけ `--squash` を使う。

### 8-3: レビュー指摘への対応

メインディレクトリで作業しない。必ず `/tmp/pr<NUM>` などに clone して作業する。

```bash
cd /tmp
rm -rf pr${PR_NUM}
git clone https://github.com/kyama0/gitlab-handbook-ja.git pr${PR_NUM} \
  -b <PR の head branch> --single-branch --depth 5
cd pr${PR_NUM}
git submodule update --init upstream
```

未解決スレッド一覧:

```bash
gh api graphql -f query='
{
  repository(owner: "kyama0", name: "gitlab-handbook-ja") {
    pullRequest(number: '${PR_NUM}') {
      reviewThreads(first: 50) {
        nodes { id isResolved path line comments(first: 3) { nodes { body } } }
      }
    }
  }
}' --jq '.data.repository.pullRequest.reviewThreads.nodes[] | select(.isResolved==false) | "ID:\(.id)\n\(.path):\(.line)\n\(.comments.nodes[0].body[0:600])\n==="'
```

各指摘について、まず対応要否を判断する。判断材料として必ず upstream の同じ箇所を確認する。

```bash
grep -n "<問題箇所>" content/handbook/<path>.md
grep -n "<英語の対応表現>" upstream/content/handbook/<path>.md
```

対応要否の判定基準:

- 対応不要: upstream にも同じ問題が存在する連続カンマ、未閉じ `**`、broken markdown link、二重ハッシュ、孤立した英単語など、翻訳側で原文に無い修正を入れたくないもの。または指摘自体が誤検出と判断できるもの。修正はしない。スレッドに理由をコメントして resolve する。
- 対応必要: 見出し ID 抜け、未来日付 `translated_at`、`merge request` -> `マージリクエスト` のような glossary 違反、HTML/Markdown 構造崩れ、誤訳など、翻訳側で直すべきもの。修正して commit / push し、スレッドに対応内容をコメントして resolve する。

よくある修正パターン:

1. 見出し ID 抜け: body 側のリンク `[text](#anchor-id)` に合わせて見出しに `{#anchor-id}` を付ける。複数同名の重複は `{#anchor-id-phase-1}` のように一意化する。
2. 未来日時の `translated_at`: content frontmatter と manifest の該当 entry を同じ妥当な日時へ揃える。
3. glossary 違反: `.claude/translation-glossary.md` を確認して本文を修正し、manifest の `input_hash` は upstream 原文 hash のまま変えない。

対応不要時の返信テンプレ:

```bash
gh api graphql -f query='
mutation($threadId: ID!, $body: String!) {
  addPullRequestReviewThreadReply(input: {pullRequestReviewThreadId: $threadId, body: $body}) {
    comment { id }
  }
}' -f threadId="<thread_id>" \
  -f body="upstream 原文 line <N> にも同じ <現象> が存在します。翻訳側で原文に無い修正を加えないため、本 PR ではスキップします。"
```

対応完了時の返信テンプレ:

```bash
gh api graphql -f query='
mutation($threadId: ID!, $body: String!) {
  addPullRequestReviewThreadReply(input: {pullRequestReviewThreadId: $threadId, body: $body}) {
    comment { id }
  }
}' -f threadId="<thread_id>" \
  -f body="<対応内容の要約> を <commit-sha> で修正しました。"
```

スレッド resolve:

```bash
gh api graphql -f query='
mutation($threadId: ID!) {
  resolveReviewThread(input: {threadId: $threadId}) { thread { isResolved } }
}' -f threadId="<thread_id>" --jq '.data.resolveReviewThread.thread.isResolved'
```

commit / push:

```bash
git add -A
git commit -m "fix: address review for PR #${PR_NUM}"
git push origin <PR の head branch>
```

未解決スレッドをすべて処理し終えたら、Codex に再レビューを依頼してから 8-1 の polling に戻る。この cycle は PR body に Codex の `+1` / 👍 が付くまで繰り返す。

```bash
gh pr comment ${PR_NUM} --body "@codex review"
```

### 8-4: コンフリクト解消

バッチ PR は base が `main` なので、main が先に進むと `CONFLICTING` になりやすい。head branch で `main` を取り込んで commit する。

```bash
cd /tmp/pr${PR_NUM}
git fetch origin
git checkout <PR の head branch>
git merge origin/main --no-edit
```

競合したファイルは upstream と manifest を確認し、最新翻訳として正しい内容へ手動で解消する。`translated_at` の競合は新しい日時を残し、manifest entry と content frontmatter の `upstream_sha` / `translated_at` / `model` が矛盾しないようにする。

```bash
git add <競合ファイル>
git commit --no-edit
git push origin <PR の head branch>
```

その後 8-1 に戻る。

### 8-5: マージ後の後始末

- マージ成功を確認したら終了する。
- Slack connector が使える場合のみ、`#gitlab-handbook-ja` に PR 番号・URL・レビュー対応概要・マージ済みである旨を簡潔に通知する。Slack connector が無い場合は最終報告に「Slack 通知未実施（connector なし）」と書く。
- 次のバッチを開始する必要はない。この skill は 1 バッチ完了で終わる。

## 出力フォーマット

最終出力は短くまとめる:

- 作成した PR 番号と URL（作らなかった場合は no-op の旨）
- 翻訳/更新ファイル数
- manifest entries の差分
- 実行した検証
- Codex / CodeRabbit 対応の概要（何件対応 / 何件 upstream バグ等で対応不要としてスキップ）
- 最終的にマージしたかどうか
- 特記事項（alias、songbook skip、Hugo 未実行、content filter block、token/context 上限で translator を再起動した件、コンフリクト解消の有無など）
