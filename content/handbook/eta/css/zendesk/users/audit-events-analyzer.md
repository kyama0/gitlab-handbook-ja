---
title: 'Audit Events Analyzer'
description: 'Audit Events Analyzer のドキュメント'
upstream_path: "/handbook/eta/css/zendesk/users/audit-events-analyzer/"
upstream_sha: "1c5f183add4a3220f2aa77e0c98565c4fad645e2"
translated_at: "2026-07-18T06:53:00+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このガイドでは、Zendesk で使用するために私たちが作成したカスタム設定、Audit Events Analyzer について説明します。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクト:
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/audit-events-analyzer)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/audit-events-analyzer)

{{% /alert %}}

## Audit Events Analyzer を理解する

### Audit Events Analyzer とは

Audit Events Analyzer は、特定の種類の監査イベントを分析し、それに応じて Customer Support Systems チームへ通知する Zendesk Webhook と CI/CD スクリプトの組み合わせです。

### Audit Events Analyzer の仕組み

[Zendesk User events Webhook](https://developer.zendesk.com/api-reference/webhooks/event-types/user-events/)を使用して、対応するプロジェクト内で、Webhook が送信したペイロードにより CI/CD パイプラインがトリガーされます。プロジェクトは Zendesk インスタンスに基づいて決まります。現在監視するユーザーイベントは次のとおりです。

- Support ユーザーロールの変更

CI/CD パイプラインが作成されると、`bin/analyze` スクリプトが実行され、次を行います。

- イベントがロールのダウングレードか確認する（新しいロールが `end-user`、または `admin` が `agent` に変更された場合）
  - 該当する場合、ステータスコード 0 で終了する
- イベントが light agent のアップグレードか確認する（前のロールが `end-user`、新しいロールが `agent`、メールアドレスが `@gitlab.com` で終わる場合）
  - 該当する場合、ステータスコード 0 で終了する
- アップグレードされたユーザーの前のロールが `end-user` の場合、`@channel` タグを使用して Slack に投稿する
- アップグレードされたユーザーの前のロールが `agent` の場合、`@here` タグを使用して Slack に投稿する

## 管理者のタスク

{{% alert title="注記" color="primary" %}}

- このセクションのすべての項目には、Zendesk に対する `Administrator` レベルのアクセスが必要です。
- このセクションのすべての項目には、プロジェクトに対する `Developer` レベルのアクセスが必要です。

{{% /alert %}}

### Audit Events Analyzer プロジェクトの変更

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実行してください。存在しない場合は、最初に作成し、通常のプロセスを完了させてから対応してください。

{{% /alert %}}

Audit Events Analyzer プロジェクトを変更するには、プロジェクトリポジトリで MR を作成する必要があります。正確にどの変更を行うかは、リクエスト自体によって決まります。

同僚が MR をレビューして承認した後、MR をマージできます。これは `Ad-hoc` デプロイタイプであるため、変更は直ちに反映されます。

### Webhook の変更

Webhook を変更する方法については、[Webhooks](/handbook/eta/css/zendesk/webhooks/)に関するドキュメントを参照してください。

## よくある問題とトラブルシューティング

これは必要に応じて項目を追加する、生きたセクションです。
