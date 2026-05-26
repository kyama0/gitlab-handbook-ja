---
title: 'Pagerduty'
description: 'Pagerduty のシステムチェッカーに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/system-checkers/pagerduty/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

<sup>[gitlab-com/support/support-ops/support-ops-project#1891](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/1891) を経て導入</sup>

{{% alert title="技術的詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
- プロジェクトリポジトリ: [gitlab-support-readiness/system-checkers/pagerduty](https://gitlab.com/gitlab-support-readiness/system-checkers/pagerduty)

{{% /alert %}}

## Pagerduty のシステムチェッカーを理解する

### Pagerduty のシステムチェッカーとは

Pagerduty のシステムチェッカーは、（Pagerduty から送信される）パイプライントリガーを使って Pagerduty のステータスを報告する仕組みです。[#feed_status-pagerduty Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C086Z7LAFB2) に投稿します。

### 仕組み

Pagerduty が（Pagerduty の Webhook 経由で）プロジェクトに通知すると、`bin/process_webhook` スクリプトが実行され、以下が実施されます。

- Pagerduty のペイロードを整形済みの Slack メッセージに変換します
- そのメッセージを [#feed_status-pagerduty Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C086Z7LAFB2) に投稿します

## Pagerduty のシステムチェッカーを変更する

{{% alert title="注意" color="primary" %}}

- これにはプロジェクトに対して少なくとも `Developer` 権限が必要です。
- 対応する依頼 Issue（機能リクエスト、管理上のもの、バグなど）が存在する場合に限り実施するべきです。存在しない場合は、まず作成し、標準のプロセスを経てから対応してください。

{{% /alert %}}

Pagerduty のシステムチェッカーに変更を加えるには、プロジェクトリポジトリでマージリクエストを作成する必要があります。具体的な変更内容は依頼そのものによって異なります。

ピアによるレビューと承認を受けたら、マージリクエストをマージできます（次回のトリガー実行時に変更が適用されます）。

## よくある問題とトラブルシューティング

このセクションは必要に応じて項目が追加されていくリビングドキュメントです。
