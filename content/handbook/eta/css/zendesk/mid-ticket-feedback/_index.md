---
title: 'チケット対応中のフィードバック'
description: 'Zendesk のチケット対応中のフィードバックに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/mid-ticket-feedback/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
translated_at: "2026-07-19T06:29:35+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このガイドでは、顧客による送信と処理のワークフローを含む、GitLab におけるチケット対応中のフィードバックについて説明します。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- フォームリポジトリ:
  - [Zendesk Global](https://gitlab.com/gitlab-com/support/customer-feedback)
    - **注記**: Customer Support Systems による管理対象外です
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/forms/us-government-customer-feedback-form)
- プロセッサーリポジトリ:
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/customer-feedback-processor)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/customer-feedback-processor)
- フィードバックプロジェクト: [Customer Feedback](https://gitlab.com/gitlab-com/support/feedback)

{{% /alert %}}

## チケット対応中のフィードバックを理解する

### チケット対応中のフィードバックとは

チケット対応中のフィードバックは、顧客からのフィードバックを受け取るフォームとプロセッサーのシステムです（チケット作成後、[CES アンケート](/handbook/eta/css/zendesk/satisfaction/#ces-surveys)前に実施することを想定しています）。

### チケット対応中のフィードバックの構成要素

#### フォーム

これは顧客が使用する実際のアンケートフォームです。使用する正確なリンクは、顧客が利用している Zendesk インスタンスによって異なります。

- [Zendesk Global](https://gitlab-com.gitlab.io/support/customer-feedback/)
- [Zendesk US Government](https://support.gitlab.io/us-federal-customer-feedback/)

フォームからの送信内容は Workato に送信されます。

#### プロセッサー

これはフォームからの回答を受信して処理するものです。

### チケット対応中のフィードバックの仕組み

顧客がフィードバックフォームを送信すると、送信内容は Workato に送られます。次に、対応する Zendesk インスタンスのプロセッサープロジェクトで CI/CD パイプラインをトリガーするために使用されます。この CI/CD パイプラインは `bin/process` スクリプトを実行し、次の処理を行います。

- チケット URL が指定されているか確認する
  - 指定されていない場合は、ステータスコード 0 で終了する
- 指定されたフィードバックタイプが有効か確認する
  - 有効でない場合は、ステータスコード 0 で終了する
- チケットがクローズされているか確認する
  - クローズされている場合は、ステータスコード 0 で終了する
- フィードバックタグを追加するなど、チケットに内部コメントを追加する
- [Customer Feedback プロジェクト](https://gitlab.com/gitlab-com/support/feedback)に Issue を作成する
- Slack に投稿する
  - Zendesk US Government の場合は、すべてのフィードバック送信内容を Slack に投稿する
  - Zendesk Global の場合は、マネージャーからの連絡を求めるフィードバック送信内容のみを Slack に投稿する

## 管理者以外が変更をリクエストする

Zendesk Global のチケット対応中のフィードバックフォームを変更するには、Customer Support チームにワークフローについて相談します。

それ以外の場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要になるためです）。

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このアクションには、プロジェクトへの `Developer` レベルのアクセスが必要です。

{{% /alert %}}

### フォームを変更する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、最初に作成し、作業を開始する前に標準プロセスを通過させてください。
- Zendesk Global は Customer Support チームが管理しているため、これは Zendesk US Government にのみ適用されます。

{{% /alert %}}

チケット対応中のフィードバックフォームを変更するには、プロジェクトリポジトリで MR を作成する必要があります。正確にどのような変更を行うかは、リクエスト自体によって異なります。

ピアが MR をレビューして承認したら、MR をマージできます。これは `Ad-hoc` デプロイタイプのため、変更は即座に反映されます。

### プロセッサーを変更する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、最初に作成し、作業を開始する前に標準プロセスを通過させてください。

{{% /alert %}}

チケット対応中のフィードバックプロセッサーを変更するには、プロジェクトリポジトリで MR を作成する必要があります。正確にどのような変更を行うかは、リクエスト自体によって異なります。

ピアが MR をレビューして承認したら、MR をマージできます。これは `Ad-hoc` デプロイタイプのため、変更は即座に反映されます。

## よくある問題とトラブルシューティング

このセクションは必要に応じて項目を追加する継続的なセクションです。
