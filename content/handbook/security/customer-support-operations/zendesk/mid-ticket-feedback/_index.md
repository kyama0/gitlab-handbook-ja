---
title: 'チケット途中フィードバック'
description: 'Zendesk のチケット途中フィードバックに関するドキュメント'
date: 2026-02-09
upstream_path: /handbook/security/customer-support-operations/zendesk/mid-ticket-feedback/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T23:27:10Z"
translator: claude
stale: false
---

このガイドでは、GitLab におけるチケット途中フィードバック (顧客の送信フローと処理ワークフローを含む) について説明します。

{{% alert title="技術詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- フォームリポジトリ:
  - [Zendesk Global](https://gitlab.com/gitlab-com/support/customer-feedback)
    - **注**: Customer Support Operations による管理対象外
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/forms/us-government-customer-feedback-form)
- プロセッサーリポジトリ:
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/customer-feedback-processor)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/customer-feedback-processor)
- フィードバックプロジェクト: [Customer Feedback](https://gitlab.com/gitlab-com/support/feedback)

{{% /alert %}}

## チケット途中フィードバックを理解する

### チケット途中フィードバックとは

チケット途中フィードバックは、顧客からのフィードバックを受け付ける一連のフォームとプロセッサーです (チケット作成後、[CES 調査](/handbook/security/customer-support-operations/zendesk/satisfaction/#ces-surveys) より前のタイミングを想定)。

### チケット途中フィードバックのコンポーネント

#### フォーム

これは顧客が実際に使用する調査フォームです。実際のリンクは、顧客が利用している Zendesk インスタンスによって異なります:

- [Zendesk Global](https://gitlab-com.gitlab.io/support/customer-feedback/)
- [Zendesk US Government](https://support.gitlab.io/us-federal-customer-feedback/)

フォームからの送信は Workato に送られます。

#### プロセッサー

フォームからの応答を受け取って処理するものです。

### チケット途中フィードバックの仕組み

顧客がフィードバックフォームを送信すると、送信内容は Workato に送られます。これが対応する Zendesk インスタンスのプロセッサープロジェクトの CI/CD パイプラインをトリガーするのに使われます。この CI/CD パイプラインは `bin/process` スクリプトを実行し、以下の処理を行います:

- チケット URL が指定されたかチェックする
  - 指定されていなかった場合、ステータスコード 0 で終了
- 指定されたフィードバックタイプが有効かチェックする
  - 有効でなかった場合、ステータスコード 0 で終了
- チケットがクローズされているかチェックする
  - されていた場合、ステータスコード 0 で終了
- チケットに内部コメントを追加する (フィードバックタグの追加を含む)
- [Customer Feedback プロジェクト](https://gitlab.com/gitlab-com/support/feedback) に Issue を作成する
- Slack に投稿する
  - Zendesk US Government の場合、すべてのフィードバック送信が Slack に投稿される
  - Zendesk Global の場合、マネージャーへの連絡を要求するフィードバック送信のみが Slack に投稿される

## 非管理者として変更をリクエストする

Zendesk Global のチケット途中フィードバックフォームに変更を加えるには、Customer Support チームと相談して、彼らのワークフローについて確認してください。

その他については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください (Customer Support Operations チームによる手動対応が必要なため)。

## 管理者タスク

{{% alert title="注意" color="primary" %}}

- このアクションはプロジェクトへの `Developer` レベルのアクセスを必要とします。

{{% /alert %}}

### フォームを変更する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue (Feature Request、Administrative、Bug 等) が存在する場合のみ実施してください。存在しない場合は、まず Issue を作成し、標準プロセスを通してから着手してください。
- これは Zendesk US Government にのみ適用されます。Zendesk Global は Customer Support チームが管理しているためです。

{{% /alert %}}

チケット途中フィードバックフォームを変更するには、プロジェクトリポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト次第です。

ピアがレビューして MR を承認した後、MR をマージできます。これは `Ad-hoc` デプロイタイプであるため、変更は即座に反映されます。

### プロセッサーを変更する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue (Feature Request、Administrative、Bug 等) が存在する場合のみ実施してください。存在しない場合は、まず Issue を作成し、標準プロセスを通してから着手してください。

{{% /alert %}}

チケット途中フィードバックプロセッサーを変更するには、プロジェクトリポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト次第です。

ピアがレビューして MR を承認した後、MR をマージできます。これは `Ad-hoc` デプロイタイプであるため、変更は即座に反映されます。

## 一般的な問題とトラブルシューティング

これは生きたセクションで、必要に応じて項目が追加されていきます。
