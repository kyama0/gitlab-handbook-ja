---
title: 'Pagerduty'
description: 'Pagerduty システムチェッカーのドキュメント'
upstream_path: "/handbook/eta/css/system-checkers/pagerduty/"
upstream_sha: "1c5f183add4a3220f2aa77e0c98565c4fad645e2"
translated_at: "2026-07-18T06:43:41+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

<sup>[gitlab-com/support/support-ops/support-ops-project#1891](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/1891)で導入</sup>

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクトリポジトリ: [gitlab-support-readiness/system-checkers/pagerduty](https://gitlab.com/gitlab-support-readiness/system-checkers/pagerduty)

{{% /alert %}}

## Pagerduty システムチェッカーを理解する

### Pagerduty システムチェッカーとは

Pagerduty システムチェッカーは、Pagerduty の状態を報告するために、Pagerduty から送信されるパイプライントリガーを使用する仕組みです。[#feed_status-pagerduty Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C086Z7LAFB2)に投稿します。

### 仕組み

Pagerduty が Pagerduty Webhook を介してプロジェクトに通知すると、`bin/process_webhook` スクリプトが実行され、次を行います。

- Pagerduty ペイロードを整形した Slack メッセージに変換する
- [#feed_status-pagerduty Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C086Z7LAFB2)にメッセージを投稿する

## Pagerduty システムチェッカーの変更

{{% alert title="注記" color="primary" %}}

- プロジェクトに対する少なくとも `Developer` アクセスが必要です。
- これは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実行してください。存在しない場合は、最初に作成し、通常のプロセスを完了させてから対応してください。

{{% /alert %}}

Pagerduty システムチェッカーを変更するには、プロジェクトリポジトリで MR を作成する必要があります。正確にどの変更を行うかは、リクエスト自体によって決まります。

同僚が MR をレビューして承認した後、MR をマージできます（次のトリガー実行時に変更が適用されます）。

## よくある問題とトラブルシューティング

これは必要に応じて項目を追加する、生きたセクションです。
