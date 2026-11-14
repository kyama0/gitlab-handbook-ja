---
title: CSS 概要レポート
description: CSS 概要レポートのドキュメントとプロセス
upstream_path: /handbook/eta/css/summary-reports/
upstream_sha: 8fce82673398dbfad74c667e7b35eb75d101d55d
lastmod: "2026-11-09T14:42:51-06:00"
translated_at: "2026-11-14T08:38:42.466927+00:00"
translator: codex
stale: false
---

週に 1 回、Issue の概要レポートを生成し、主要メンバーに通知します。

## プロセス

### レポートを生成する

毎週金曜日の UTC 18:00 に、[CSS Summary Generator](https://gitlab.com/gitlab-com/eta/css/css-summary-generator) プロジェクトでスケジュールされたパイプラインが実行されます。概要をまとめた Issue を生成し、その Issue とこのハンドブックページへのリンクを CSS Lounge の Slack チャンネル（`#css-lounge`）に投稿します。

Issue が生成され、Slack への投稿が完了したら、[レポートをレビューする](#review-the-report)に進みます。

### レポートをレビューする {#review-the-report}

レポートの内容にエラーや不適切な要約がないか確認します。見つけた問題を修正します。

レビューが完了したら、[Duo で要約を生成する](#generate-duo-summary)に進みます。

### Duo で要約を生成する {#generate-duo-summary}

Issue をレビューしたら、GitLab Duo を使って、現在のマイルストーンでクローズした Issue の要約を生成する必要があります。

手順は次のとおりです。

- 現在のマイルストーンのコメントへのリンクをコピーします
- 新しい Duo チャットを開きます
- `Duo prompt`（下記）を使い、`COMMENT_LINK` を先ほどコピーしたリンクに置き換えます

  <details>
  <summary>Duo プロンプト</summary>

  >
  > コメント COMMENT_LINK にリンクされている Issue をレビューしてください
  >
  > 「closed」リスト内の各 Issue について、Issue の詳細とコメントを取得し、次のことを行ってください。
  >
  > 1. 次の情報源を優先順位順に使い、影響を受けた Zendesk インスタンスを判断してください。
  >    - Issue の説明内の [x] チェックボックス（例：[x] Zendesk Global または [x] Zendesk Government）— 常に存在し、正式な判断根拠となります
  >    - 親エピックが存在する場合はそのタイトル（例：「Zendesk Global のアクションフローのエラーに対するアラートを追加」）— 複数のインスタンスにチェックが付いている場合や、説明が曖昧な場合に使ってください
  > 2. Issue の末尾近くに、次のいずれかの内容のコメントがあるかを確認し、Issue の対応が実装済みか判断してください。
  >    - "The work on this issue has been completed at this time. As components of the changes are tied to ad-hoc deployments, it is now fully live." — 本番環境への即時デプロイが完了したことを示します
  >    - "The work on this issue has been completed at this time. As components of the changes are tied to scheduled deployments, it will be fully live [date]." — 記載された日付にデプロイされることを示します
  >    - 上記の表現のバリエーション（例："it is now live"、"it is fully live now"、"it will be fully live YYYY-MM-DD"）
  >    - ステータスが「Complete」に設定されているだけでは不十分です — 上記の完了コメントが必要です
  >
  > 実装完了のコメントがある場合にのみ、その Issue をデプロイの要約に含めてください。
  >
  > カテゴリー別にまとめたデプロイの要約を生成してください。同じカテゴリー内の Issue が異なるインスタンスに影響する場合は、インスタンス別のサブグループに分けるか、各項目に影響を受けるインスタンスを併記してください。

  </details>

Duo による要約の生成が完了したら、その内容を使って、現在のマイルストーンのコメント（先ほどコピーしたもの）のスレッドに返信します。

これが完了したら、[他のメンバーに通知する](#notify-others)に進みます。

### 他のメンバーに通知する {#notify-others}

レポートを生成してレビューしたら、TJ、Jeff、Kirsty、Kasey をメンションするコマンドを追加します。

```plaintext
cc @tjpais @jstone10 @KirstyAllen @ktague
```

完了したら、Issue をクローズします。
