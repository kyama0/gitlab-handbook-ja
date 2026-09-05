# .agents

Codex repository-local skills live under `.agents/skills`.

This repository keeps Claude Code assets under `.claude/` for compatibility, but Codex workflows should be added here so Codex can discover them automatically.

## 定期実行

翻訳バッチの定期実行用プロンプトは [`prompts/translate-batch.md`](prompts/translate-batch.md) に置いています。翻訳・レビューの手順は既存のスキルを参照し、このファイルでアプリからの実行条件を指定します。

アプリのスケジュールは毎日 06:00（Asia/Tokyo）、対象プロジェクトはこのリポジトリ、作業場所は Worktree に設定してください。プロンプト欄には次の 1 行を指定します。

```text
.agents/prompts/translate-batch.md を読み、その内容に従って実行してください。
```

Worktree から参照できるよう、このファイルと参照先のプロンプトをスケジュールの実行元ブランチにコミットして反映してください。
