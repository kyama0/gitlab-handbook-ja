---
title: 'ケース'
description: 'Salesforce ケースのドキュメント'
upstream_path: "/handbook/eta/css/salesforce/cases/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
translated_at: "2026-07-19T06:15:29+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このページでは、自動ワークフロー、管理者向け手順、トラブルシューティングのガイダンスを含め、Zendesk チケットを Salesforce ケースに同期する方法を説明します。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Ad-hoc`
- プロジェクトリポジトリ:
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/salesforce-cases)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/salesforce-cases)

{{% /alert %}}

## Salesforce ケースを理解する

### Salesforce ケースとは

Salesforce では、ケースは顧客からの質問、問題、フィードバック、またはリクエストを追跡するレコードです。

### チケットが Salesforce ケースになる仕組み

**注記:** Zendesk 組織に関連付けられたチケットのみが Salesforce に同期されます。組織がないチケット（無料ユーザーからの問い合わせなど）は同期されません。

組織に関連付けられたチケットが作成またはクローズされるたびに、Zendesk インスタンスのトリガーが、対応する Zendesk インスタンス用のプロジェクトにあるパイプラインを（Zendesk webhook を介して）トリガーします。

これにより `bin/run` スクリプトが実行され、次の処理が行われます:

- Zendesk からチケットの情報を取得します（組織、リクエスター、担当者の情報を含む）
- Zendesk フォームのリストを取得します
- Salesforce を検索して、ケースが存在するかを確認します

  <details>
  <summary>使用する SOQL</summary>

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

- 存在しない場合はケースを作成します
- 存在する場合はケースを更新します

チケットから Salesforce ケースに同期される情報は次のとおりです:

- チケットの優先度
- チケットのステータス
- チケットの担当者名（担当者がいる場合）
- チケットフォーム名
- チケットのリクエスターのメールアドレス
- チケットのリクエスター名
- チケットの件名
- エージェントがアクセスできるチケット URL

## 管理者タスク

管理者タスクは、プロジェクトリポジトリへの適切なアクセス権を持つ Customer Support Systems のチームメンバーが実施します。

### 同期プロジェクトを変更する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実施してください。存在しない場合は、先に作成し（対応に取りかかる前に標準プロセスを通過させます）。

{{% /alert %}}

Salesforce ケースを管理する同期を変更するには、対応するプロジェクトリポジトリで MR を作成する必要があります（どのリポジトリかは実施する変更によって異なります）。実施する正確な変更は、リクエスト自体によって異なります。

同僚が MR をレビューして承認した後、MR をマージできます。これは `Ad-hoc` デプロイタイプであるため、チケットが次に作成またはクローズされたとき（同期がトリガーされたとき）に変更が使用されます。

## よくある問題とトラブルシューティング

### Salesforce でケースが作成されない

Zendesk チケットに対応する Salesforce ケースがない場合、そのチケットは作成時に Zendesk で組織に関連付けられていなかったことを示します。チケットがクローズされる前に関連付けられた場合は、チケットのクローズ時にケースが作成されます。
