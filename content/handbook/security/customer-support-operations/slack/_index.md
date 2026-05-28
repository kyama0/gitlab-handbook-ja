---
title: 'Slack'
description: 'Slack に関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/slack/
upstream_sha: 78b430bc8e2a925f210024d512218ce1d8d42106
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、現在私たちが Slack を利用して管理しているものについて取り扱います。

## Notify Oncall

{{% alert title="技術的詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
- プロジェクト: [Notify Oncall](https://gitlab.com/gitlab-support-readiness/slack/notify-oncall)
- Zendesk US Government のみで動作

{{% /alert %}}

### Notify Oncall とは

Notify Oncall は、直接ページングする DRI が設定されていない緊急チケットが作成された際に、対応可能な US Government サポートチームのエージェント全員にアラートを送るために利用している仕組みです。[#spt_us-government Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C03RTN3JEJ2) にメッセージを投稿します。

### Notify Oncall の仕組み

US Government の緊急チケットが作成されると、Zendesk が Pagerduty にシグナルを送信します。[Customer Support - US Federal サービス](https://gitlab.pagerduty.com/service-directory/P8K2XHK) 上の [Pagerduty Webhook](https://developer.pagerduty.com/docs/db0fa8c8984fc-overview) 経由で、[Notify Oncall](https://gitlab.com/gitlab-support-readiness/slack/notify-oncall) プロジェクト上の GitLab CI/CD パイプラインがトリガーされます。

その後、Notify Oncall は Pagerduty から送信されたペイロードに含まれる担当者リストをチェックし、処理を継続するかどうかを判断します。担当者として人間がリストに含まれている場合、ステータスコード 0 で終了します（すでに人間がページングされている緊急事態について通知する必要がないため）。

次に、Notify Oncall は以下の基準を用いて、対応可能なエージェントのリストを判定します。

- Zendesk US Government インスタンス上のサポートチームのエージェントである
- PTO 中ではない（`Support - Time Off` カレンダーで判定）
- 勤務時間内である（サポートチームの YAML ファイルで判定）

そして、このエージェントのリストを Slack のユーザー ID に変換します（サポートチームの YAML ファイルで対応付け）。この情報をもとに、Notify Oncall は [#spt_us-government Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C03RTN3JEJ2) に投稿し、緊急チケットについて通知します。

### Notify Oncall の変更

{{% alert title="注意" color="primary" %}}

- これには [Notify Oncall](https://gitlab.com/gitlab-support-readiness/slack/notify-oncall) プロジェクトに対して少なくとも `Developer` 権限が必要です。
- 対応する依頼 Issue（機能リクエスト、管理上のもの、バグなど）が存在する場合に限り実施するべきです。存在しない場合は、まず作成し、標準のプロセスを経てから対応してください。

{{% /alert %}}

Notify Oncall に変更を加えるには、プロジェクトリポジトリでマージリクエストを作成する必要があります。具体的な変更内容は依頼そのものによって異なります。

ピアによるレビューと承認を受けたら、マージリクエストをマージできます（次回のトリガー実行時に変更が適用されます）。

## Very Breached Ticket slackbot

{{% alert title="技術的詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
- プロジェクト: [Very Breached Ticket Slackbot](https://gitlab.com/gitlab-support-readiness/slack/very-breached-ticket-slackbot)
- Zendesk Global のチケットでのみ動作

{{% /alert %}}

### VBT slackbot とは

Very Breached Ticket（VBT）Slackbot は、48 時間を超えて SLA を違反している特定のチケットを報告するために利用しているツールです。発見したチケットに関する通知を [#spt_leaders-daily Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C03LL7Z2291) に投稿します。

### VBT slackbot の仕組み

これは Zendesk API の [preview views](https://developer.zendesk.com/api-reference/ticketing/business-rules/views/#preview-views) エンドポイントを用いてチケットのリストを生成することで動作します。プレビューに使用される条件は次のとおりです。

- 以下のすべての条件を満たす必要があります
  - SLA 違反からの経過時間が 48 営業時間を超えている
  - チケットの `Ticket form` が `Billing` ではない
  - チケットの `Ticket form` が `Support Ops` ではない
  - チケットのステータスが `solved` 未満（つまり `new`、`open`、`on-hold`）
- 以下のいずれかの条件を満たす必要があります
  - チケットの `Ticket Stage` が `Emergencies`
  - チケットの `Ticket Stage` が `FRT`

VBT slackbot は次に [#spt_leaders-daily Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C03LL7Z2291) に投稿し、発見したチケットについて通知します。各チケットには以下が含まれます。

- チケットへのリンク
- チケットの `Ticket form`
- 違反したタイムスタンプ
- 何時間前に違反したか

### VBT slackbot の実行タイミング

VBT slackbot は、GitLab のスケジュール済みパイプラインを介して、決まった 3 つの時刻に実行されます。

- UTC 14:00、月曜から金曜（`0 14 * * 1-5`）
- UTC 21:30、日曜から木曜（`30 21 * * 0-4`）
- UTC 07:00、月曜から金曜（`0 7 * * 1-5`）

### VBT slackbot の変更

{{% alert title="注意" color="primary" %}}

- これには [Very Breached Ticket Slackbot](https://gitlab.com/gitlab-support-readiness/slack/very-breached-ticket-slackbot) プロジェクトに対して少なくとも `Developer` 権限が必要です。
- 対応する依頼 Issue（機能リクエスト、管理上のもの、バグなど）が存在する場合に限り実施するべきです。存在しない場合は、まず作成し、標準のプロセスを経てから対応してください。

{{% /alert %}}

VBT slackbot に変更を加えるには、プロジェクトリポジトリでマージリクエストを作成する必要があります。具体的な変更内容は依頼そのものによって異なります。

ピアによるレビューと承認を受けたら、マージリクエストをマージできます（次回のスケジュール実行時に変更が適用されます）。

## よくある問題とトラブルシューティング

このセクションは必要に応じて項目が追加されていくリビングドキュメントです。
