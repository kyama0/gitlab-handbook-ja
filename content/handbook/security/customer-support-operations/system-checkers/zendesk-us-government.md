---
title: 'Zendesk US Government'
description: 'Zendesk US Government のシステムチェッカーに関するドキュメント'
date: 2026-01-06
upstream_path: /handbook/security/customer-support-operations/system-checkers/zendesk-us-government/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

<sup>[gitlab-com/support/support-ops/support-ops-project#1890](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/1890) を経て導入</sup>

{{% alert title="技術的詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
- プロジェクトリポジトリ: [gitlab-support-readiness/system-checkers/zendesk-us-government](https://gitlab.com/gitlab-support-readiness/system-checkers/zendesk-us-government)

{{% /alert %}}

## Zendesk US Government のシステムチェッカーを理解する

### Zendesk US Government のシステムチェッカーとは

Zendesk US Government のシステムチェッカーは、スケジュール済みパイプラインを使って Zendesk US Government のステータスをチェックする仕組みです。[#feed_status-zendesk-usgov Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C08PBULKRUH) に投稿します。

### 仕組み

毎時 0 分（UTC、`0 * * * *`）に、スケジュール済みパイプラインが `bin/run` スクリプトを実行します。これにより以下が実施されます。

- 以下の API エンドポイントから現在の Zendesk のステータス情報を取得します:
  - [List Active Incidents](https://developer.zendesk.com/api-reference/status_api/status_api/#list-active-incidents)
  - [List Maintenance Incidents](https://developer.zendesk.com/api-reference/status_api/status_api/#list-maintenance-incidents)
- インシデントについて、現在の Zendesk のステータス情報を `data/incidents.yaml` ファイルに保存されている情報と比較します
  - インシデントについての Zendesk のステータス情報が保存情報の中に含まれていない場合（かつまだ解消されていない場合）、その情報は新規インシデントとして保存されます
  - インシデントについての Zendesk のステータス情報が保存情報の中に含まれているものの両者に差異がある場合、その情報は更新されたインシデントとして保存されます
    - 更新内容が解消（resolved）の場合、その項目は後ほど `data/incidents.yaml` ファイルから削除されます
- メンテナンスについて、現在の Zendesk のステータス情報を `data/maintenances.yaml` ファイルに保存されている情報と比較します
  - メンテナンスについての Zendesk のステータス情報が保存情報の中に含まれていない場合（かつまだ完了していない場合）、その情報は新規メンテナンスとして保存されます
  - メンテナンスについての Zendesk のステータス情報が保存情報の中に含まれているものの両者に差異がある場合、その情報は更新されたメンテナンスとして保存されます
    - 更新内容が解消（resolved）の場合、その項目は後ほど `data/maintenances.yaml` ファイルから削除されます
- 新規または更新項目がある場合、`data/incidents.yaml` および `data/maintenances.yaml` ファイルを更新する新規コミットをプロジェクトに作成します
- [#feed_status-zendesk-usgov Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C08PBULKRUH) に新規または更新項目の詳細を投稿します

## Zendesk US Government のシステムチェッカーを変更する

{{% alert title="注意" color="primary" %}}

- これにはプロジェクトに対して少なくとも `Developer` 権限が必要です。
- 対応する依頼 Issue（機能リクエスト、管理上のもの、バグなど）が存在する場合に限り実施するべきです。存在しない場合は、まず作成し、標準のプロセスを経てから対応してください。

{{% /alert %}}

Zendesk US Government のシステムチェッカーに変更を加えるには、プロジェクトリポジトリでマージリクエストを作成する必要があります。具体的な変更内容は依頼そのものによって異なります。

ピアによるレビューと承認を受けたら、マージリクエストをマージできます（次回のトリガー実行時に変更が適用されます）。

## よくある問題とトラブルシューティング

このセクションは必要に応じて項目が追加されていくリビングドキュメントです。
