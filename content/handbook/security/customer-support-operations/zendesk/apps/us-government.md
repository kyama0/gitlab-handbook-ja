---
title: 'US Government アプリ'
description: 'Zendesk US Government アプリに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/apps/us-government/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、US Government Zendesk インスタンスで現在使用されている Zendesk アプリについて説明します。

## Advanced SAST App

<sup>*[support-team-meta#6652](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6652) で導入*</sup>

Advanced SAST App は、GitLab Advanced SAST 内の LGPL ライセンスコンポーネントのソースコードに関するユーザーリクエストを迅速に処理できるようにするチケットアプリです。

{{% alert title="Technical Details" color="primary" %}}

- 場所: チケットサイドバー
- グループによる制限:
  - Support
  - Support Managers
  - Support Operations
- このアプリは社内で開発されており、[Advanced SAST App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/apps/advanced-sast-app) で見られます。

{{% /alert %}}

## Advanced Search

Advanced Search は、チケット、ユーザー、組織 (orgs) に対して複雑な検索クエリを構築するためのシンプルなビジュアルインターフェースを提供するアプリです。検索結果を CSV 形式でエクスポートすることもできます。

{{% alert title="Technical Details" color="primary" %}}

- 場所: ナビバー
- このアプリは [Zendesk](https://www.zendesk.com/marketplace/partners/zendesk/) によって開発され、[Zendesk Marketplace](https://www.zendesk.com/marketplace/apps/support/198393/advanced-search/) で利用可能です。

{{% /alert %}}

## Architecture Diagrams

<sup>*[support-ops-project#801](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/801) で導入*</sup>

このアプリは、組織フィールド `AM Project ID` を使用して既存の Account Management プロジェクトを確認します。見つかった場合、そのプロジェクトの Architecture Diagram にリンクします。

{{% alert title="Technical Details" color="primary" %}}

- 場所: チケットサイドバー
- このアプリは社内で開発されており、[Architecture Diagrams プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/apps/gitlab-architecture) で見られます。

{{% /alert %}}

## GitLab Reminders App

<sup>*[support-team-meta#3036](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/3036) で導入*</sup>

Reminders App はナビバーに表示され、エージェントが関与しているチケットをより専門的に表示します。現在は次を表示します:

- Closed 状態ではない、ペンディング/期限超過のタスクが付いた、自分にアサインされたチケット
- 最近自分が閲覧したチケット
- Closed 状態ではない、自分にアサインされたチケット
- Closed 状態ではない、自分が CC されているチケット

また、タスクのために残したメモ、いつ期限を迎えるか、タスクを完了済みとしてすばやくマーク (メモと期限日の削除) するボタンを見ることで、自分のタスクをすばやく管理できます。

{{% alert title="Technical Details" color="primary" %}}

- 場所: ナビバー
- このアプリは社内で開発されており、[GitLab Reminders App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/apps/reminders-app) で見られます。

{{% /alert %}}

## Salesforce Account Info

アカウントの ID 値を提供することで、Salesforce アカウントに関する基本情報を表示します。

{{% alert title="Technical Details" color="primary" %}}

- 場所: ナビバー
- ロールによる制限:
  - Admins
  - Support Managers
- このアプリは社内で開発されており、[SFDC Account Info プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/apps/sfdc-account-info) で見られます。

{{% /alert %}}

## Salesforce Contact Info

メールアドレスを提供することで、Salesforce のコンタクトに関する基本情報を表示します。

{{% alert title="Technical Details" color="primary" %}}

- 場所: ナビバー
- ロールによる制限:
  - Admins
  - Support Managers
- このアプリは社内で開発されており、[SFDC Contact Info プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/apps/sfdc-contact-info) で見られます。

{{% /alert %}}

## Show Related Tickets

これは、チケットの件名を使用して類似の件名を持つ他のチケットを検索します。これは、関連する可能性があるチケットを見つけて、それらがどのように解決されたかを確認するのに役立ちます。

{{% alert title="Technical Details" color="primary" %}}

- 場所: チケットサイドバー
- このアプリは [Zendesk](https://www.zendesk.com/marketplace/partners/zendesk/) によって開発され、[Zendesk Marketplace](https://www.zendesk.com/marketplace/apps/support/5131/show-related-tickets/) で利用可能です。

{{% /alert %}}

## STAR

<sup>*[support-team-meta#4694](https://gitlab.com/gitlab-com/support/support-team-meta/-/work_items/4694) で導入*</sup>

Support Ticket Attention Requests (STAR) は、GitLab チームメンバーがチケットに追加の注意を払うよう依頼するための仕組みです。これは、エージェントが Zendesk で STAR プロセスを開始するために使用するアプリです。

{{% alert title="Technical Details" color="primary" %}}

- 場所: チケットサイドバー
- このアプリは社内で開発されており、[STAR プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/apps/star) で見られます。

{{% /alert %}}

## Zendesk Super App

<sup>*[support-ops-project#801](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/801) で導入*</sup>

Zendesk 関連のさまざまなことを実行できる、プラグインで制御されるアプリです。

- Create new ticket
  > エージェントが現在開いているチケットと同じユーザーを使って、新しいチケットを作成できるようにします。
- Due date picker
  > Task チケットの Due Date の設定をカスタマイズできるようにします。デフォルトでは Zendesk は日付の設定のみを許可しています。これにより、日付、時刻、タイムゾーンを設定できます。
  >
  > このアプリを使って Due Date Note を設定し、タスク通知を無効化 (または有効化) することもできます。
- Escalated tickets
  > 過去 6 か月以内にエスカレーションされた組織配下のチケットを検索します。
- Related tickets
  > チケットが現在使用しているカテゴリ (またはサブカテゴリ) に基づいて、現在のチケットに関連するチケットを探します。それらを最大 5 件表示します (チケットの update_at 値の降順で並び替え)。
- Attachments
  > チケットに存在する添付ファイルを表示します。
- Ticket Info
  > チケットに関するさまざまなメトリクス情報を表示します:
  >
  > - Agent Wait Time
  > - Customer wait time
  > - Last assignee update
  > - Last customer update
  > - Assigned at
  > - On-hold time
  > - Time to first reply
  > - SLA Policy
  > - First reply SLA
  > - Next reply SLA
  > - Schedule

{{% alert title="Technical Details" color="primary" %}}

- 場所: チケットサイドバー
- グループによる制限:
  - Support
  - Support Managers
  - Support Operations
- このアプリは社内で開発されており、[Zendesk Super App プロジェクト](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/apps/zendesk-super-app) で見られます。

{{% /alert %}}
