---
title: 'Slack'
description: 'Slack に関するドキュメント'
upstream_path: "/handbook/eta/css/slack/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
translated_at: "2026-07-19T06:29:35+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このガイドでは、現在 Slack を使用して私たちが管理しているものについて説明します。

## Notify Oncall

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクト: [Notify Oncall](https://gitlab.com/gitlab-support-readiness/slack/notify-oncall)
- Zendesk US Government 専用

{{% /alert %}}

### Notify Oncall とは

Notify Oncall は、直接ページされる DRI がいない緊急チケットが作成されたとき、対応可能なすべての US Government Support チームエージェントに通知するために使用している設定です。[#spt_us-government  Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C03RTN3JEJ2)にメッセージを投稿します。

### Notify Oncall の仕組み

US Government の緊急チケットが作成されると、Zendesk は Pagerduty にシグナルを送信します。[Customer Support - US Federal サービス](https://gitlab.pagerduty.com/service-directory/P8K2XHK)の [Pagerduty webhook](https://developer.pagerduty.com/docs/db0fa8c8984fc-overview)を通じて、[Notify Oncall](https://gitlab.com/gitlab-support-readiness/slack/notify-oncall) プロジェクトで GitLab CI/CD パイプラインがトリガーされます。

その後、Notify Oncall は Pagerduty から送信されたペイロードの担当者リストを確認し、続行するかどうかを判断します。担当者として人間が記載されている場合は、ステータスコード 0 で終了します（すでに人間をページしている緊急事態を通知する必要がないためです）。

次に、Notify Oncall は次の条件を使用して対応可能なエージェントのリストを決定します。

- Zendesk US Government インスタンスの Support チームエージェントである
- `Support - Time Off` カレンダーに基づき PTO 中ではない
- Support Team YAML ファイルに基づき勤務時間内である

次に、Support Team YAML ファイルに基づき、このエージェントリストを Slack ユーザー ID に変換します。この情報を使用して、Notify Oncall は緊急チケットを通知するために [#spt_us-government  Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C03RTN3JEJ2)に投稿します。

### Notify Oncall を変更する

{{% alert title="注記" color="primary" %}}

- [Notify Oncall](https://gitlab.com/gitlab-support-readiness/slack/notify-oncall) プロジェクトへの少なくとも `Developer` アクセスが必要です。
- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、最初に作成し、作業を開始する前に標準プロセスを通過させてください。

{{% /alert %}}

Notify Oncall を変更するには、プロジェクトリポジトリで MR を作成する必要があります。正確にどのような変更を行うかは、リクエスト自体によって異なります。

ピアが MR をレビューして承認したら、MR をマージできます（変更は次にトリガーされる実行で適用されます）。

## Very Breached Ticket slackbot

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクト: [Very Breached Ticket Slackbot](https://gitlab.com/gitlab-support-readiness/slack/very-breached-ticket-slackbot)
- Zendesk Global チケット専用

{{% /alert %}}

### VBT slackbot とは

Very Breached Ticket（VBT）Slackbot は、48 時間を超えて SLA 違反した特定のチケットをレポートするために使用しているツールです。見つかったチケットについて、[#spt_leaders-daily Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C03LL7Z2291)に通知を投稿します。

### VBT slackbot の仕組み

これは、Zendesk API の [プレビュービュー](https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#preview-views)エンドポイントを使用してチケットのリストを生成することで動作します。プレビューに使用する条件は次のとおりです。

- 次のすべての条件を満たす必要があります
  - SLA 違反からの時間が 48（営業時間）を超えている
  - チケットの `Ticket form` が `Billing` ではない
  - チケットの `Ticket form` が `Support Ops` ではない
  - チケットのステータスが解決未満である（つまり、`new`、`open`、`on-hold`）
- 次のいずれかの条件を満たす必要があります
  - チケットの `Ticket Stage` が `Emergencies` である
  - チケットの `Ticket Stage` が `FRT` である

次に VBT slackbot は、見つかったチケットを通知するために [#spt_leaders-daily Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C03LL7Z2291)に投稿します。リストに含まれる各チケットには、次の情報が含まれます。

- チケットへのリンク
- チケットの `Ticket form`
- 違反した時刻
- 違反してからの経過時間

### VBT slackbot の実行時刻

VBT slackbot は、GitLab のスケジュールされたパイプラインを通じて 3 つの決まった時刻に実行されます。

- 月曜日から金曜日の 1400 UTC（`0 14 * * 1-5`）
- 日曜日から木曜日の 2130 UTC（`30 21 * * 0-4`）
- 月曜日から金曜日の 0700 UTC（`0 7 * * 1-5`）

### VBT slackbot を変更する

{{% alert title="注記" color="primary" %}}

- [Very Breached Ticket Slackbot](https://gitlab.com/gitlab-support-readiness/slack/very-breached-ticket-slackbot) プロジェクトへの少なくとも `Developer` アクセスが必要です。
- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、最初に作成し、作業を開始する前に標準プロセスを通過させてください。

{{% /alert %}}

VBT slackbot を変更するには、プロジェクトリポジトリで MR を作成する必要があります。正確にどのような変更を行うかは、リクエスト自体によって異なります。

ピアが MR をレビューして承認したら、MR をマージできます（変更は次にスケジュールされた実行で適用されます）。

## よくある問題とトラブルシューティング

このセクションは必要に応じて項目を追加する継続的なセクションです。
