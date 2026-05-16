---
title: ライセンスキーの作成
description: "GitLab ライセンスキーの作成方法"
category: GitLab Self-Managed licenses
upstream_path: /handbook/support/license-and-renewals/workflows/self-managed/creating_licenses/
upstream_sha: 460f0fe6722bfe52b151b6a8641368ea38885df5
translated_at: "2026-05-08T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-06-18T12:45:37+02:00"
---

## 概要

ユーザーエラーやシステムエラーが原因で、新しいライセンスキーを生成する必要が頻繁に発生します。

セルフマネージドライセンスは [CustomersDot](https://customers.gitlab.com/admin/license) で管理されています。
このアプリケーションへのアクセスは Okta 経由で管理されます。アクセスをリクエストするには、[アクセスリクエスト](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request)を作成し、
[このリンク](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/blob/master/.gitlab/issue_templates/role_baseline_access_request_tasks/department_customer_support/role_support_engineer.md)を参照して、自分のロールがアクセス権を持つことを示してください。

### ライセンスタイプ {#license-types}

各種ライセンスタイプの概要については、こちらの[ハンドブックページ](https://internal.gitlab.com/handbook/product/fulfillment/provision)（社内専用）をご覧ください。

サブスクリプションのバージョンに紐付くライセンスオブジェクトのタイプは、以下の情報で識別できます。

| ライセンスタイプ | Turn On Cloud Licensing |
| ------ | ------ |
| Cloud License | 'Yes' |
| Offline License | 'Offline' |
| Legacy License | 'No' または null |

### ライセンスを複製する

ライセンスを再発行するには：

1. [CustomerDot](https://customers.gitlab.com/admin/license) にログインします。
1. 顧客のメールアドレスまたは会社名で検索してライセンスを特定します。
1. 右側の `Duplicate license` ボタン（コピーシンボルのような形）をクリックします。
   **注意:** 現時点で複製可能なのは Legacy License のみです。
1. 正しいライセンスタイプを選択します（詳細は[ライセンスタイプの概要](#license-types)を参照）。
1. 必要な値を変更します。`Customer` フィールドは変更しないように注意してください。
   **注意:** `Customer` を変更すると、作成時に名前・メールアドレス・会社の入力値が選択した顧客の情報で上書きされます。これは <https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/3566> で対応予定のバグです。
1. `Notes` フィールドに、このライセンスを発行する理由を記載し、該当する場合はリクエスト元の Zendesk チケットや GitLab Issue へのリンクを追加します。
      - GitLab Issue で作業している場合は、`Manually Generate Trial License`（トライアル用）または `Manually Generate License` のラベルを追加してください。
1. `Save` をクリックします。

ライセンスはすぐにメールで送信されます。ライセンスは常にエンドユーザーに送るべきであることに注意してください。
GitLab のチームメンバーやリセラーにライセンスをメール送付してはいけません。
**注意:** 異なるメールアドレスにライセンスを送りたい場合は、代わりに[このハンドブックページ](/handbook/support/license-and-renewals/workflows/self-managed/sending_license_to_different_email)を使用してください。

複製可能な既存ライセンスがない場合は、[新規ライセンス作成セクション](#create-a-new-license)を使用してください。

### 新しいライセンスを作成する {#create-a-new-license}

新しいライセンスを作成するには、`Add new License` をクリックし、[Legacy License](#create-a-legacy-license) または [Offline Cloud License](#create-an-offline-cloud-license) の作成プロセスに従ってください。

**注意:**

- 選択するライセンスタイプによって必要なフィールドが異なります。詳細は各ライセンスタイプの必須フィールドのセクションを参照してください。
- Zuora サブスクリプション ID を入力する際（タイプの要件によります）、Zuora に対してそのサブスクリプションの存在チェックが行われ、見つからない場合は失敗します。
- Zuora サブスクリプション ID が入力されていると、ライセンス作成時にサブスクリプション名が自動的に設定されます。

#### Legacy License を作成する {#create-a-legacy-license}

1. `License type` ドロップダウンで `Legacy License` を選択します。
1. Zuora サブスクリプション ID を入力します。
   **注意:** これらのフィールドは Legacy License では必須ではありませんが、Support は入力する必要があります。
1. その他のフィールドを入力します。
1. `Notes` フィールドに、このライセンスを発行する理由を記載し、該当する場合はリクエスト元の Zendesk チケットや GitLab Issue へのリンクを追加します。
      - GitLab Issue で作業している場合は、`Manually Generate Trial License`（トライアル用）または `Manually Generate License` のラベルを追加してください。
1. `Save` をクリックします。

##### 必須フィールド

現在、Legacy License では以下のフィールドが必須です。

- `License type`
- `Name`
- `Company`
- `Email`
- `Users count`
- `Plan code`
- `Starts at`
- `Expires at`

Support による入力が必須：

- `Customer`
- `Zuora subscription ID`
- `Notes`

#### Offline Cloud License を作成する {#create-an-offline-cloud-license}

Offline License を作成する際は、事前に以下が揃っている必要があります。

- 入力する Zuora サブスクリプションがクラウドライセンスに対応していること（`Turn on seat reconciliation` フィールドが存在）。
- 入力する Zuora サブスクリプションが Offline Cloud License または無効化された Cloud License であること（`Turn On Cloud Licensing` が `Offline` または `No` に設定されている）。
- そのサブスクリプションに対するアクティベーションコードが存在していること（通常は Zuora サブスクリプション作成時に CustomersDot へのコールバック経由で生成されます）。

1. `License type` ドロップダウンで `Offline Cloud` を選択します。
1. `Customer` フィールドで顧客を選択します。
   **注意:** このフィールドは Offline Cloud License では必須です。
1. Zuora サブスクリプション ID を入力します。
   **注意:** これらのフィールドは Offline Cloud License では必須です。
1. その他のフィールドを入力します。
1. `Notes` フィールドに、このライセンスを発行する理由を記載し、該当する場合はリクエスト元の Zendesk チケットや GitLab Issue へのリンクを追加します。
      - GitLab Issue で作業している場合は、`Manually Generate Trial License`（トライアル用）または `Manually Generate License` のラベルを追加してください。
1. `Save` をクリックします。

##### 必須フィールド

現在、Offline Cloud License では以下のフィールドが必須です。

- `License type`
- `Customer`
- `Name`
- `Company`
- `Email`
- `Zuora subscription ID`
- `Users count`
- `Plan code`
- `Starts at`
- `Expires at`

Support による入力が必須：

- `Notes`

#### Online Cloud License を作成する

[Strict Cloud Licensing](https://gitlab.com/groups/gitlab-org/-/epics/7088) により、Online Cloud Subscription はアクティベーションコードのみを送信します。ライセンスは提供されなくなったため、このタイプのライセンス作成はサポートされません。
