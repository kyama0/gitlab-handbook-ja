# 定期翻訳バッチ

このファイルは、アプリのスケジュールから実行する翻訳バッチ 1 回分の指示です。
実行日時はアプリ側で毎日 06:00（Asia/Tokyo）に設定します。

## 実行指示

`$translate-batch` を使い、翻訳バッチを 1 つ実行してください。

リポジトリルートを基準に、以下のファイルを読んで従ってください。

- `AGENTS.md`
- `CLAUDE.md`
- `.agents/skills/translate-batch/SKILL.md`
- `.claude/translation-glossary.md`

スキルに従い、upstream 同期、翻訳、manifest 更新、検証、PR 作成、レビュー対応、条件を満たした後のマージまで行ってください。
実翻訳とレビューには、スキルで指定された Codex custom agent を使ってください。

## 作業場所とブランチ

作業場所はアプリが用意した worktree を使ってください。
スキル内の旧固定パス `/home/yamazaki/projects/gitlab-handbook-ja` は使わず、実行中の worktree のリポジトリルートを使ってください。
既存の無関係な変更は保持してください。

新規バッチは、fetch した最新の `origin/main` から `translation/batch-YYYY-MM-DD-N` ブランチを作成してください。日付は日本時間を使い、番号は既存ブランチと重複しないものを選んでください。
他の worktree で使用中の `main` に checkout せず、実行中の worktree で `origin/main` を起点にバッチブランチを作成してください。
PR の base は `main` としてください。

## 終了条件と報告

pending がゼロなら、スキルで指定された検証を行い、PR を作らず終了してください。
バッチが完了したら終了し、続けて次のバッチを開始しないでください。
Slack 通知は不要です。

最後に、PR URL、翻訳・更新件数、manifest entries の差分、検証結果、レビュー対応概要、マージ状況を簡潔に報告してください。
未完了の場合は、その理由と残っている作業も報告してください。
