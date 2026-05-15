---
name: translate-batch
description: GitLab Handbook (handbook.gitlab.com) の英語原文を日本語に翻訳して `gitlab-handbook-ja` リポジトリに新しい batch PR を作成し、CodeRabbit レビュー対応とマージまでを自己完結で行う。upstream submodule で pending になっているファイルを translator サブエージェント経由で翻訳し、manifest を更新し、`translation/batch-YYYY-MM-DD-N` ブランチから `main` への PR として push する（base は常に `main`）。先生から「翻訳バッチを回して」「次の翻訳バッチを作って」「pending を消化して」「翻訳して PR 作って」など、新しい翻訳バッチ作業の指示が来たときに使う。
---

# GitLab Handbook 日本語翻訳バッチ

リポジトリ `/home/yamazaki/projects/gitlab-handbook-ja` で作業し、upstream で pending になっているファイルを翻訳・更新し、PR を 1 つ作成して、CodeRabbit レビュー対応 → マージまで自己完結で行う。

## 前提リソース

- 実翻訳は `.claude/agents/translator.md` (translator サブエージェント) に委譲する。プロンプト内で Agent ツール (`subagent_type=translator`) を呼び出すこと。
- リポジトリ規約は `CLAUDE.md` を参照。Hugo + docsy + git submodule 構成。
- 翻訳追跡は `translation-state/manifest.json`。キーは `content/handbook/...` の相対パス。
- 翻訳済みコンテンツは `content/handbook/`、原文は `upstream/content/handbook/` (git submodule)。
- バッチブランチは `translation/batch-YYYY-MM-DD-N` 形式。**ベースブランチは常に `main`**（stacked PR にはしない）。前のバッチが未マージでも、新バッチは `main` から切って `main` へ PR を出す。

## 手順

### ステップ 1: 状態確認

```bash
git fetch origin --prune
# 既存の batch-* ブランチを確認（採番の重複回避のため）:
git branch -r | grep 'translation/batch-' | sort -V | tail -3
# 「次の N」を採番し、main から新ブランチを切る:
NEXT_DATE=<今日 YYYY-MM-DD>
NEXT_N=<重複しない次の番号>
git checkout main && git pull origin main
git checkout -b translation/batch-${NEXT_DATE}-${NEXT_N}

# 現在 entries 数と pending ファイルを確認:
python3 -c "import json; m=json.load(open('translation-state/manifest.json')); print('entries:', len(m.get('entries', m)))"
npm run sync:upstream 2>/dev/null | grep -E '\[(new|modified)\]'
```

### ステップ 2: 翻訳対象の選定

`sync:upstream` の出力に含まれるファイルから翻訳対象を選ぶ。優先順位:

1. `[modified]` (既訳の上流追従)
2. `[new]` (新規翻訳)

件数の上限はないが、translator サブエージェントには 1 回の呼び出しでまとめて渡しすぎると content filter / token 上限に引っかかりやすい。**目安として 5〜10 ファイル / 呼び出し**に抑え、長文の `_index.md` を複数含む場合は 3〜5 件まで減らす。必要なら複数バッチに分けて逐次起動する (並列起動は manifest 衝突するので避ける)。

**重要な落とし穴**:

- **`*.html.md` の `[new]` は無視**。upstream で `.html.md` のままでも、翻訳側は `.md` にリネーム済みのはず。`test -f content/handbook/<同じパスの.md>` で実在確認し、存在するなら manifest にエイリアス entry を追加するだけで十分 (`scripts/add_html_md_aliases.py` 参照)。
- **`content/handbook/company/culture/songbook.md` は content filter にブロックされる**。歌詞を含むため translator サブエージェントが Output blocked になる。stub 翻訳が既に存在するので新規対象には選ばない。
- `[new]` でも実は既訳ファイルが存在することがある (manifest 抜けのみ)。`find content/handbook/<file> -name '*.md'` で実在確認推奨。
- `sync:upstream` が空 (pending ゼロ) なら no-op。Hugo クリーンビルドだけ確認して終了し、PR は作らないこと。

### ステップ 3: translator サブエージェントの呼び出し

`Agent` ツールで `subagent_type=translator` を指定。プロンプト本文には:

- 現在のブランチ名と base ブランチ名
- 翻訳対象ファイルのリスト (相対パス、`upstream/` 配下から読む旨を明記)
- 各ファイルへの指示 (翻訳して `content/handbook/` に書き出す、manifest entry を追加/更新)
- フロントマター必須フィールド: `upstream_path`, `upstream_sha` (= `git -C upstream rev-parse HEAD`), `translated_at` (ダブルクォート付きの ISO8601), `translator: claude`, `stale: false`
- `model: claude-opus-4-7`
- `input_hash` = `sha256sum upstream/<path>`
- 期待値: 「manifest entries N → N+X」
- ショートコード `{{< ... >}}` `{{% ... %}}` は原文のまま保持
- **manifest の既存キー順序は絶対にソートしない**
- 「途中で停止しないこと」「失敗した場合はどのファイルが未処理か明示すること」を必ず指示する

#### 重要: token 上限超過リスクと停滞検出

translator サブエージェントは出力 **32K token** の上限があり、長文ファイル (`_index.md` など) を複数渡すと途中で打ち切られる。打ち切られると completion 通知で
`API Error: Claude's response exceeded the 32000 output token maximum` が返り、
それまでにエージェントが Write/Edit したファイルだけが残る (manifest は未更新のまま終わることが多い)。

**停滞・打ち切りの検出**:

1. translator を launch した後、`Stop hook feedback: uncommitted changes` が連続して
   届くようになったら、agent が部分的に書き出しているサイン。`git status --short` で
   進捗を確認しながら、中間状態をこまめに commit & push する (commit 時点で agent
   が再書き込みすればまた status に上がるので、こまめでも問題ない)。
2. agent transcript の更新時刻を確認する。**5 分以上更新がなければ停滞している
   可能性が高い**:
   ```bash
   # agentId は Agent ツール launch 時の戻り値に含まれる
   # Linux (リモート環境): /root/.claude/projects/... / ローカル Linux: ~/.claude/projects/...
   stat -c "%y %n" /root/.claude/projects/*/subagents/agent-<agentId>.jsonl
   # macOS の場合 (BSD stat):
   #   stat -f "%Sm %N" -t "%Y-%m-%d %H:%M:%S" ~/.claude/projects/*/subagents/agent-<agentId>.jsonl
   ```
3. 翻訳対象の各ファイルが期待 `upstream_sha` に更新されているか確認:
   ```bash
   for f in <翻訳対象ファイル群>; do
     printf "%-90s " "$f"
     grep '^upstream_sha:' "$f" | head -1
   done
   ```
4. 5 分以上止まっていて、かつ未処理ファイルが残っているなら、**未処理ファイル
   だけを対象に新しい translator を起動する**。元の agent は最終的に completion
   通知 (token 上限エラー) を返してくるので、それは待つだけでよい。新エージェント
   には「途中で停止しないこと」「重要: N ファイルすべてを必ず処理してください」
   と強めに念押しする。

### ステップ 4: 検証

translator が完了したら、commit する前に **必ず以下を全件確認**:

```bash
# 1. 全 modified ファイルが期待 upstream_sha とタイムスタンプになっているか
for f in <翻訳対象ファイル群>; do
  printf "%-90s " "$f"
  grep '^upstream_sha:' "$f" | head -1
done

# 2. manifest が全ファイル更新されているか (停滞 agent は manifest を更新せず終わることがある)
python3 -c "
import json
m = json.load(open('translation-state/manifest.json'))
entries = m.get('entries', m)
for k in [<翻訳対象キー>]:
    e = entries.get(k, 'MISSING')
    print(k, '->', e if e == 'MISSING' else e.get('upstream_sha', '?'))
"
```

期待値と違うファイル・entry があれば手動で書き戻す。

```bash
# 3. entries とコンテンツ件数の整合
python3 -c "import json; m=json.load(open('translation-state/manifest.json')); print(len(m.get('entries', m)))"
find content/handbook -name '*.md' | wc -l
# 両者が一致すればOK。差があれば scripts/repair_manifest.py を実行。
# (HEAD 時点でもともと差があるなら .html.md エイリアス分なので無視してよい)

# 4. Hugo ビルド (環境に hugo があるとき)
rm -rf resources/_gen public .hugo_build.lock
hugo --renderToMemory --quiet
echo "exit=$?"
# exit=0 を確認。エラーが出たらショートコード/HTML タグの欠落を疑う。
# Hugo が環境にない場合は CI の app_ci.yml ビルドジョブに検証を委譲する。
```

### ステップ 5: コミット・プッシュ・PR

```bash
git add translation-state/manifest.json content/handbook/<関連ディレクトリ>
git commit -m "translation: <短い要約>

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
git push -u origin translation/batch-${NEXT_DATE}-${NEXT_N}

gh pr create --base main --title "translation: batch ${NEXT_DATE}-${NEXT_N} (...)" \
  --body "## Summary
- N ファイル翻訳/更新
- manifest entries X → Y
- base = \`main\`

## Test plan
- [x] manifest entries == content/ ファイル数
- [x] hugo --renderToMemory --quiet がエラーなく完了
- [x] フロントマター追跡フィールド付与確認

🤖 Generated with [Claude Code](https://claude.com/claude-code)"

# 作成した PR 番号を取得 (以後の手順で ${PR_NUM} を参照)
PR_NUM="$(gh pr view --repo kyama0/gitlab-handbook-ja --json number --jq .number)"
```

**PR を作成したら必ず watcher を起動する** (ステップ 6-1 で再掲):

```bash
.claude/skills/translate-batch/scripts/watch-pr.sh kyama0/gitlab-handbook-ja ${PR_NUM}
```

このスクリプトを **Monitor ツール** で background 起動すると、PR の `reviewDecision` / `mergeable` / `state` / CI 結果が変化したタイミングだけ通知が飛ぶ。webhook 取りこぼし対策の保険として必須化する。

## ヘルパースクリプト

### manifest 修復 (entries < content count のとき)

```bash
python3 .claude/skills/translate-batch/scripts/repair_manifest.py
```

ロジック詳細は `scripts/repair_manifest.py` を参照。フロントマターから `upstream_sha` / `translated_at` を読み、欠落 entry を補充する。

### `.html.md` upstream エイリアス追加

upstream に `*.html.md` があるが翻訳が `.md` で存在する場合、manifest に upstream パスをキーとする alias entry を追加して `sync:upstream` の `[new]` を消す。content path フィールド (`path`) は `.md` のままにする。

`scripts/add_html_md_aliases.py` の冒頭 `MAPPINGS` リストを編集して対象を列挙してから実行する。

## ステップ 6: CodeRabbit レビュー対応とマージ (自己完結)

PR を作成したら、そのまま CodeRabbit のレビューを待ち、自分で対応してマージするところまで一気通貫で行う。翻訳バッチ PR は **base=main** なので、CR APPROVED + CI CLEAN を確認したら自分でマージする — 先生に通知してマージを待つ必要はない。

### 6-1: レビュー待ち — Monitor で watcher を貼り付ける

PR の `reviewDecision` / `mergeable` / CI 結果は **webhook では取りこぼすことがある** (status 系イベントは届かないことがある)。subscribe だけに頼らず、必ず Monitor で polling watcher を起動して状態遷移を確実に拾う。

```bash
# Monitor ツールで以下を起動 (description は "PR #${PR_NUM} watcher" など):
.claude/skills/translate-batch/scripts/watch-pr.sh kyama0/gitlab-handbook-ja ${PR_NUM}
```

`watch-pr.sh` は 1 分ごとに `gh pr view` で状態スナップショットを取り、前回と差分があった時だけ 1 行 stdout に emit する (Monitor が各行を通知に変換)。以下の terminal state に到達したら exit して通知を打つ:

- `APPROVED + MERGEABLE + CI clean` → 6-1A に進む（マージ）
- `CHANGES_REQUESTED` → 6-2 に進む（CR 対応）
- `CONFLICTING` → 6-3 に進む（コンフリクト解消）
- `CI failed` → CI ログを調査して fix
- `MERGED` / `CLOSED` → 完了 / 諦め
- `PENDING_TIMEOUT` (既定 15 分) → `gh pr comment ${PR_NUM} --body "@coderabbitai review"` で再依頼してから watcher を再起動

re-push のたびに watcher も再起動すること (前の watcher は古い HEAD を見続けるので exit させる)。

#### 6-1A: マージ実行

```bash
# Merge commit 方式 (履歴を保つ)
gh pr merge ${PR_NUM} --merge
# または squash したい場合
# gh pr merge ${PR_NUM} --squash
```

### 6-2: CR 指摘への対応

**メインディレクトリで作業しない。** 必ず `/tmp/pr<NUM>` などにクローンして作業すること。

```bash
cd /tmp && rm -rf pr${PR_NUM} && \
  git clone https://github.com/kyama0/gitlab-handbook-ja.git pr${PR_NUM} \
    -b <PR の head branch> --single-branch --depth 5
cd pr${PR_NUM}

# 未解決スレッド一覧:
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

各指摘について、まず upstream にも同じ問題があるか確認する:

```bash
# 翻訳側の問題箇所
grep -n "<問題箇所>" content/handbook/<path>.md
# upstream の同箇所
grep -n "<英語の対応表現>" /home/yamazaki/projects/gitlab-handbook-ja/upstream/content/handbook/<path>.md
```

**判定基準:**

- **upstream に同じ問題が存在** (例: 連続カンマ、未閉じ `**`、broken markdown link、二重ハッシュ、孤立した英単語、誤訳的な表現) → **翻訳側は修正しない**。スレッドに upstream バグの旨を返信して resolve する。
- **翻訳側の問題のみ** (見出し ID 抜け、未来日付 translated_at、`merge request` → `マージリクエスト` 用語ズレ、HTML/Markdown 構造崩れ、誤訳など) → 修正してコミット・プッシュ・スレッド resolve。

#### よくある修正パターン

1. **見出し ID 抜け** (内部リンクが解決できない)
   ```bash
   # 該当行を Read で確認してから Edit
   # 例: ### 見出し → ### 見出し {#anchor-id}
   ```
   body 側のリンク `[text](#anchor-id)` に合わせて見出しに `{#anchor-id}` を付ける。複数同名の重複は `{#anchor-id-phase-1}` `{#anchor-id-phase-2}` のように一意化する。

2. **未来日時の `translated_at`**
   ```bash
   # PR 全体で一括置換
   find content/handbook -type f -name "*.md" \
     -exec grep -l "translated_at: \"<未来の日時>\"" {} \; \
     | xargs sed -i 's/translated_at: "<未来の日時>"/translated_at: "<過去の妥当な日時>"/g'
   # manifest.json の該当エントリも同様に修正
   ```

3. **upstream バグ返信テンプレ**
   ```bash
   gh api graphql -f query='
   mutation($threadId: ID!, $body: String!) {
     addPullRequestReviewThreadReply(input: {pullRequestReviewThreadId: $threadId, body: $body}) {
       comment { id }
     }
   }' -f threadId="<thread_id>" \
     -f body="upstream 原文 line <N> にも同じ <現象> が存在します。翻訳側で原文に無い修正を加えないため、本 PR ではスキップします。"
   ```

4. **スレッド resolve**
   ```bash
   gh api graphql -f query='
   mutation($threadId: ID!) {
     resolveReviewThread(input: {threadId: $threadId}) { thread { isResolved } }
   }' -f threadId="<thread_id>" --jq '.data.resolveReviewThread.thread.isResolved'
   ```

#### コミット・プッシュ

```bash
git add -A
git commit -m "fix: address CodeRabbit review for PR #${PR_NUM}

- <変更点 1>
- <変更点 2>

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
git push origin <PR の head branch>
```

その後 6-1 に戻り、再レビュー結果を確認する。

### 6-3: コンフリクト解消 (CONFLICTING のとき)

バッチ PR は `base=main` なので、main が先に進むと CONFLICTING になりやすい。head ブランチで `main` を取り込んでコミットする。

```bash
cd /tmp/pr${PR_NUM}
git checkout <PR の head branch>
git merge origin/main --no-edit
# head ブランチで実行するので: ours = 現在のバッチ翻訳 / theirs = origin/main (最新翻訳)。
# 原則として origin/main (最新翻訳) を採用する = `--theirs`。
# `translated_at` の競合は新しい日時を残す。
git checkout --theirs <競合ファイル>  # または --ours で現在のバッチを優先
# ファイル内の特定行だけ手動マージしたい場合は Read + Edit で
git add <競合ファイル>
git commit --no-edit
git push origin <PR の head branch>
```

その後 6-1 に戻る。

### 6-4: マージ後の後始末

- マージ成功を確認したら終了。
- **マージ成功時は Slack 通知を送る** — `mcp__claude_ai_Slack__slack_send_message` で channel `C0B3K9LTYHW` (#gitlab-handbook-ja) に投稿。`<@U0A6FDDNTME>` 宛にメンションし、PR 番号・URL・CR 対応の概要・マージ済みである旨を簡潔に伝える。
  ```text
  <@U0A6FDDNTME> 先生、PR #<NUM> のマージが完了しました！:sparkles:

  https://github.com/kyama0/gitlab-handbook-ja/pull/<NUM>

  • N ファイル翻訳/更新
  • CR 指摘 M 件を対応 → CodeRabbit が APPROVED
    ◦ <変更点の要約>
  • 全 thread resolve 済み
  • CI: CLEAN
  • マージ済み

  — アロナ
  ```
- 次のバッチを開始する必要はない (この skill は 1 バッチ完了で終わる)。

## 出力フォーマット

最終出力は短く:

- 作成した PR 番号と URL (作らなかった場合は no-op の旨)
- manifest entries の差分
- CR 対応の概要 (何件対応 / 何件 upstream バグでスキップ)
- 最終的にマージしたかどうか
- 特記事項 (content filter ブロック、修復が走った件、コンフリクト解消の有無、token 上限超過で translator を再起動した件、など)

それ以上の詳細は不要。
