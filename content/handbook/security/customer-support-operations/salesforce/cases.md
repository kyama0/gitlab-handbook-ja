---
title: 'ケース'
description: 'Salesforce ケースに関するドキュメント'
date: 2026-01-16
upstream_path: /handbook/security/customer-support-operations/salesforce/cases/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T20:47:52+00:00"
---

このページでは、Zendesk チケットが Salesforce ケースとどのように同期されるかを、自動化ワークフロー、管理者の手順、トラブルシューティングのガイダンスを含めて説明します。

{{% alert title="技術詳細" color="primary" %}}

- デプロイ種別: `Ad-hoc`
- プロジェクトリポジトリ:
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/salesforce-cases)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/salesforce-cases)

{{% /alert %}}

## Salesforce ケースについて

### Salesforce ケースとは

Salesforce において、ケースは顧客からの質問、問題、フィードバック、リクエストを追跡するためのレコードです。

### チケットはどのように Salesforce ケースになるか

**注:** Zendesk のオーガニゼーションに関連付けられているチケットのみが Salesforce に同期されます。オーガニゼーションを持たないチケット (フリーユーザーからの問い合わせなど) は同期されません。

(オーガニゼーションに関連付けられた) チケットが作成または完了するたびに、Zendesk インスタンス内のトリガーが (Zendesk Webhook 経由で) 対応する Zendesk インスタンスのプロジェクトでパイプラインを起動します。

これにより `bin/run` スクリプトが実行され、次の処理を行います。

- Zendesk からチケットの情報 (オーガニゼーション、リクエスター、アサイン先の情報を含む) を取得する
- Zendesk フォームのリストを取得する
- Salesforce を検索し、ケースが既に存在するかを判定する

  <details>
  <summary>使用される SOQL</summary>

  ```sql
  SELECT
    Id,
    Zendesk_Support_Ticket_ID__c,
    Priority,
    Status
  FROM Case
  WHERE
    Zendesk_Support_Ticket_URL__c = 'TICKET_URL'

  ```

  </details>

- ケースが存在しない場合は作成する
- ケースが存在する場合は更新する

チケットから Salesforce ケースへ同期される情報は次のとおりです。

- チケットの優先度
- チケットのステータス
- チケットのアサイン先の名前 (存在する場合)
- チケットのフォーム名
- チケットのリクエスターのメールアドレス
- チケットのリクエスターの名前
- チケットの件名
- エージェントがアクセスできるチケット URL

## 管理者タスク {#administrator-tasks}

管理者タスクは、対象プロジェクトリポジトリへの適切なアクセス権を持つ Customer Support Operations チームメンバーが実施します。

### 同期プロジェクトの修正

{{% alert title="警告" color="warning" %}}

- これは対応するリクエスト Issue (機能リクエスト、管理タスク、バグなど) がある場合にのみ実施してください。存在しない場合は、まず Issue を作成してください (そして標準プロセスに沿って進めてから着手してください)。

{{% /alert %}}

Salesforce ケースを管理する同期を修正するには、対応するプロジェクトリポジトリ (どのリポジトリかは変更内容によります) でマージリクエストを作成する必要があります。具体的な変更内容はリクエスト次第です。

ピアによってレビュー・承認されたら、マージリクエストをマージできます。これは `Ad-hoc` デプロイ種別であるため、変更は次にチケットが作成または完了 (同期をトリガーする) されるタイミングで反映されます。

## よくある問題とトラブルシューティング

### Salesforce にケースが作成されない

Zendesk チケットに対応する Salesforce ケースが存在しない場合は、そのチケットが作成時点で Zendesk のオーガニゼーションに関連付けられていなかったことを示します。チケットがクローズされる前にオーガニゼーションへの関連付けが行われれば、チケットがクローズされる時点でケースが作成されます。
