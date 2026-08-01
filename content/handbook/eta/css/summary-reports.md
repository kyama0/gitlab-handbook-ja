---
title: CSS 概要レポート
description: CSS 概要レポートのドキュメントとプロセス
upstream_path: /handbook/eta/css/summary-reports/
upstream_sha: "ad217b024ba77ae34e6f41cb4a28107135c5dba5"
lastmod: "2026-07-31T08:53:42-05:00"
translated_at: "2026-08-01T15:50:15+09:00"
translator: codex
stale: false
---

週に 1 回、Issue の概要レポートを生成し、SIG チームの主要メンバーに通知します。

## プロセス

### レポートを生成する

週の終わりに、[Issue トラッカープロジェクト](https://gitlab.com/gitlab-com/eta/css/issue-tracker)に移動します。そこで Duo Chat を開き、`CSS Summary Report` エージェントを選択します。タスクを実行させます（`Run your task` と言うだけでかまいません）。

Issue をレビューし、レポートを含む Issue を生成します。

Issue が作成されたら、[レポートをレビューする](#review-the-report)に進みます。

### レポートをレビューする {#review-the-report}

レポートの内容にエラーや不適切な要約がないか確認します。見つけた問題を修正します。

レビューが完了したら、[他のメンバーに通知する](#notify-others)に進みます。

### 他のメンバーに通知する {#notify-others}

レポートを生成してレビューしたら、Jeff、Kirsty、Kasey をメンションするコマンドを追加します。

```plaintext
cc @jstone10 @KirstyAllen @ktague
```

完了したら、Issue をクローズします。
