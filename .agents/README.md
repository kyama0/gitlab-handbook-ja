# .agents

Codex repository-local skills live under `.agents/skills`.

This repository keeps Claude Code assets under `.claude/` for compatibility, but Codex workflows should be added here so Codex can discover them automatically.

## 定期実行

翻訳バッチの定期実行用プロンプトは [`prompts/translate-batch.md`](prompts/translate-batch.md) に置いています。翻訳・レビューの手順は既存のスキルを参照し、このファイルでアプリからの実行条件を指定します。

各回の開始時に、別のエージェントが作成したものや draft を含む未マージの翻訳 PR を確認します。引き継いで進められる最も古い PR 1 件を優先し、既存 PR の対応がなければ新規バッチを 1 件実行します。新規翻訳の pending がゼロでも、既存 PR の確認と引き継ぎは行います。

アプリのスケジュールは毎日 06:00（Asia/Tokyo）、対象プロジェクトはこのリポジトリ、作業場所は Worktree に設定してください。プロンプト欄には次の 1 行を指定します。

```text
.agents/prompts/translate-batch.md を読み、その内容に従って実行してください。
```

Worktree から参照できるよう、このファイルと参照先のプロンプトをスケジュールの実行元ブランチにコミットして反映してください。
