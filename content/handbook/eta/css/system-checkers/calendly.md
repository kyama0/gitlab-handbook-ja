---
title: 'Calendly'
description: 'Calendly システムチェッカーのドキュメント'
upstream_path: "/handbook/eta/css/system-checkers/calendly/"
upstream_sha: "1c5f183add4a3220f2aa77e0c98565c4fad645e2"
translated_at: "2026-07-18T06:43:41+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

<sup>[gitlab-com/support/support-ops/support-ops-project#1892](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/1892)で導入</sup>

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクトリポジトリ: [gitlab-support-readiness/system-checkers/calendly](https://gitlab.com/gitlab-support-readiness/system-checkers/calendly)

{{% /alert %}}

## Calendly システムチェッカーを理解する

### Calendly システムチェッカーとは

Calendly システムチェッカーは、Calendly の状態を確認するためにスケジュールされたパイプラインを使用する仕組みです。[#feed_status-calendly Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C086Z7LAFB2)に投稿します。

### 仕組み

毎時 UTC の開始時（`0 * * * *`）に、スケジュールされたパイプラインが `bin/run` スクリプトを実行します。このスクリプトは次を行います。

- https://www.calendlystatus.com/history.rss から現在の Calendly ステータス情報を収集する
- インシデントに関する現在の Calendly ステータス情報を、`data/incidents.yaml` に保存された情報と比較する
  - インシデントの Calendly ステータス情報が保存済み情報に含まれず（まだ解決済みではない場合）、新しいインシデントとして情報を保存する
  - インシデントの Calendly ステータス情報が保存済み情報に含まれるが両者に差異がある場合、更新済みインシデントとして情報を保存する
    - 更新が解決を示す場合、その項目は後で `data/incidents.yaml` ファイルから削除されます
- メンテナンスに関する現在の Calendly ステータス情報を、`data/maintenances.yaml` に保存された情報と比較する
  - メンテナンスの Calendly ステータス情報が保存済み情報に含まれず（まだ完了していない場合）、新しいメンテナンスとして情報を保存する
  - メンテナンスの Calendly ステータス情報が保存済み情報に含まれるが両者に差異がある場合、更新済みメンテナンスとして情報を保存する
    - 更新が解決を示す場合、その項目は後で `data/incidents.yaml` ファイルから削除されます
- 新規または更新済みの項目があれば、`data/incidents.yaml` および `data/maintenances.yaml` ファイルを更新する新しいコミットをプロジェクトに作成する
- 新規または更新済みの項目の詳細を [#feed_status-calendly Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C086Z7LAFB2)に投稿する

## Calendly システムチェッカーの変更

{{% alert title="注記" color="primary" %}}

- プロジェクトに対する少なくとも `Developer` アクセスが必要です。
- これは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実行してください。存在しない場合は、最初に作成し、通常のプロセスを完了させてから対応してください。

{{% /alert %}}

Calendly システムチェッカーを変更するには、プロジェクトリポジトリで MR を作成する必要があります。正確にどの変更を行うかは、リクエスト自体によって決まります。

同僚が MR をレビューして承認した後、MR をマージできます（次のトリガー実行時に変更が適用されます）。

## よくある問題とトラブルシューティング

これは必要に応じて項目を追加する、生きたセクションです。
