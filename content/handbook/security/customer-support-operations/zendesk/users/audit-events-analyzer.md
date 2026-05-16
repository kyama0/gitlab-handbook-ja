---
title: 'Audit Events Analyzer'
description: 'Audit Events Analyzer に関するドキュメント'
date: 2026-02-09
upstream_path: /handbook/security/customer-support-operations/zendesk/users/audit-events-analyzer/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T21:03:24Z"
translator: claude
stale: false
lastmod: "2026-02-09T11:41:45-06:00"
---

このガイドは、Zendesk で使用するために私たちが作成したカスタムセットアップである Audit Events Analyzer について説明します。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `Ad-hoc`
- プロジェクト:
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/audit-events-analyzer)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/audit-events-analyzer)

{{% /alert %}}

## Audit Events Analyzer の理解 {#understanding-audit-events-analyzer}

### Audit Events Analyzer とは {#what-is-audit-events-analyzer}

Audit Events Analyzer は、Zendesk webhook と CI/CD スクリプトの組み合わせで、特定タイプの監査イベントを分析し、Customer Support Operations チームに通知します。

### Audit Events Analyzer はどのように動作するか {#how-does-audit-events-analyzer-work}

[Zendesk User events webhook](https://developer.zendesk.com/api-reference/webhooks/event-types/user-events/) を活用し、対応するプロジェクト（Zendesk インスタンスに応じたもの）で webhook が送信したペイロード付きの CI/CD パイプラインがトリガーされます。現在監視されているユーザーイベントは以下の通りです。

- Support user role changed

CI/CD パイプラインが作成されると、`bin/analyze` スクリプトが実行され、以下を行います。

- イベントがロールのダウングレードであるかチェック（新しいロールが `end-user`、または `admin` が `agent` に変更された場合）
  - そうであればステータスコード 0 で終了
- イベントが light agent へのアップグレードであるかチェック（以前のロールが `end-user`、新しいロールが `agent`、メールアドレスが `@gitlab.com` で終わる場合）
  - そうであればステータスコード 0 で終了
- アップグレードされたユーザーの以前のロールが `end-user` だった場合、`@channel` タグを使用して Slack に投稿
- アップグレードされたユーザーの以前のロールが `agent` だった場合、`@here` タグを使用して Slack に投稿

## 管理者タスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目には Zendesk への `Administrator` レベルのアクセスが必要です。
- このセクションのすべての項目にはプロジェクトへの `Developer` レベルのアクセスが必要です。

{{% /alert %}}

### Audit Events Analyzer プロジェクトの変更 {#modifying-the-audit-events-analyzer-project}

{{% alert title="警告" color="warning" %}}

- これは対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合のみ実施してください。存在しない場合は、まず作成し（標準プロセスを通してから対応）してください。

{{% /alert %}}

Audit Events Analyzer プロジェクトを変更するには、プロジェクトリポジトリで MR を作成する必要があります。実際の変更内容はリクエスト自体によります。

ピアレビューと承認の後、MR をマージできます。これは `Ad-hoc` デプロイメントタイプであるため、変更は即座に反映されます。

### webhook の変更 {#modifying-the-webhooks}

webhook の変更については、[Webhook](/handbook/security/customer-support-operations/zendesk/webhooks/) のドキュメントをご覧ください。

## よくある問題とトラブルシューティング {#common-issues-and-troubleshooting}

これは必要に応じて項目が追加されていくセクションです。
