---
title: 'Reclaim'
description: 'Reclaim に関するドキュメント'
upstream_path: /handbook/eta/css/reclaim/
upstream_sha: d51496d2a9ca5dfcbd3a4eef779fc95c357103f3
lastmod: "2026-08-06T12:08:12-05:00"
translated_at: "2026-08-07T07:39:49+09:00"
translator: codex
stale: false
---

## Reclaim to gCal

{{% alert title="技術詳細" color="primary" %}}

- デプロイタイプ： `Ad-hoc`
- プロジェクトリポジトリ： [Reclaim to gCal](https://gitlab.com/gitlab-support-readiness/reclaim-to-gcal)

{{% /alert %}}

### Reclaim to gCal とは

Reclaim to gCal は、Reclaim の Webhook からペイロードを受け取り、Google カレンダーの予定に変換する仕組みです。

### 利用を開始する方法

デフォルトでは、他の人がイベントを利用しても、あなたの[スケジュールリンク](https://app.reclaim.ai/scheduling-links)からプロジェクトへペイロードは送信されません。プロジェクトへのペイロード送信を有効にする（これにより、チームの Google カレンダーに追加されます）には、スケジュールリンクを編集して Webhook を追加する必要があります。イベントを編集する際、Webhook は設定（Booking Page Customization）の一番下にあります。使用する Webhook はチームによって異なります。

- Global Customer Support の場合： `Add to Global Support calendar`
- US Government Customer Support の場合： `Add to US Gov Support calendar`

### Reclaim to gCal の変更

{{% alert title="注記" color="primary" %}}

- これには、[Reclaim to gCal](https://gitlab.com/gitlab-support-readiness/reclaim-to-gcal)プロジェクトへの `Developer` 以上のアクセス権が必要です。
- 対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実施してください。存在しない場合は、まず作成し（作業に着手する前に標準プロセスを経るようにして）ください。

{{% /alert %}}

Reclaim to gCal を変更するには、プロジェクトリポジトリで MR を作成する必要があります。具体的な変更内容は、リクエスト自体によって異なります。

同僚が MR をレビューして承認した後、MR をマージできます（変更は次回のスケジュール実行時に適用されます）。

## よくある問題とトラブルシューティング

このセクションは随時更新され、必要に応じて項目が追加されます。
