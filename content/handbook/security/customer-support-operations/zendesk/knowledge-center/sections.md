---
title: 'セクション'
description: 'Zendesk セクションに関するドキュメント'
date: 2025-12-23
upstream_path: /handbook/security/customer-support-operations/zendesk/knowledge-center/sections/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T20:47:52+00:00"
---

このガイドでは、GitLab における Zendesk セクションの作成、編集、管理方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/sections)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/sections)

{{% /alert %}}

## セクションを理解する

### セクションとは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408845897370-Organizing-knowledge-base-content-in-categories-and-sections#topic_ysj_wtt_zz) によると:

> セクションには関連する記事が含まれます。

要するに、カテゴリを関連するグループに細分化するために使用される項目です。

ナレッジセンターは 3 階層構造を使用します:

- **カテゴリ**（最上位レベル） - 主要なトピック領域を整理。[カテゴリページ](/handbook/security/customer-support-operations/zendesk/knowledge-center/categories)に文書化
- **セクション**（中間レベル） - カテゴリを関連するグループに細分化。本ページに文書化
- **記事**（コンテンツレベル） - 個別のヘルプ記事。[記事ページ](/handbook/security/customer-support-operations/zendesk/knowledge-center/articles)に文書化

### 私たちのセクションの管理方法

現在、すべてのセクションは Zendesk 内で管理しています。

**注:** 同期リポジトリ経由でのセクション管理（カテゴリと同様）は、FY27 での将来の実装が計画されています。

## 現在使用中のセクション

- Zendesk Global
  - [About GitLab Support](https://support.gitlab.com/hc/en-us/categories/19831379587100-About-GitLab-Support) カテゴリの下:
    - [Support Pages](https://support.gitlab.com/hc/en-us/sections/360004459140)
  - [Knowledge articles](https://support.gitlab.com/hc/en-us/categories/360002276159-Knowledge-Articles) カテゴリの下:
    - [Administrative](https://support.gitlab.com/hc/en-us/sections/19926471791772-Administrative)
    - [Agile Planning](https://support.gitlab.com/hc/en-us/sections/25409845632540-Agile-Planning)
    - [AI](https://support.gitlab.com/hc/en-us/sections/25409833616540-AI)
    - [CI/CD Pipeline & Runner](https://support.gitlab.com/hc/en-us/sections/19926474845852-CI-CD-Pipeline-Runner)
    - [CoreDevOps](https://support.gitlab.com/hc/en-us/sections/25409846247964-CoreDevOps)
    - [Errors](https://support.gitlab.com/hc/en-us/sections/19926502520220-Errors)
    - [How-To](https://support.gitlab.com/hc/en-us/sections/19926486239772-How-To)
    - [Infrastructure](https://support.gitlab.com/hc/en-us/sections/25409833204508-Infrastructure)
    - [Kubernetes](https://support.gitlab.com/hc/en-us/sections/19926440992668-Kubernetes)
    - [Licensing & Subscription](https://support.gitlab.com/hc/en-us/sections/19926470769820-Licensing-Subscription)
    - [Migrations](https://support.gitlab.com/hc/en-us/sections/19926477110044-Migrations)
    - [Observability](https://support.gitlab.com/hc/en-us/sections/25409828080540-Observability)
    - [Performance](https://support.gitlab.com/hc/en-us/sections/19926476335644-Performance)
    - [R&D RPM](https://support.gitlab.com/hc/en-us/sections/25192479183388-R-D-TPM)
    - [Security](https://support.gitlab.com/hc/en-us/sections/19926473238940-Security)
    - [Security and Compliance](https://support.gitlab.com/hc/en-us/sections/25409832587932-Security-and-Compliance)
    - [Troubleshooting](https://support.gitlab.com/hc/en-us/sections/19926475879196-Troubleshooting)
    - [Upgrades](https://support.gitlab.com/hc/en-us/sections/19926489354268-Upgrades)
    - [Other Articles](https://support.gitlab.com/hc/en-us/sections/15215649512604-Other-Articles)
    - [Templates](https://support.gitlab.com/hc/en-us/sections/20197250020508-Templates)
- Zendesk US Government
  - [About GitLab Support](https://federal-support.gitlab.com/hc/en-us/categories/37060125978004-About-GitLab-Support) の下
    - [Support Pages](https://federal-support.gitlab.com/hc/en-us/sections/10593044624020)
  - [Knowledge articles](https://support.gitlab.com/hc/en-us/categories/360002276159-Knowledge-Articles) の下
    - [Administrative](https://federal-support.gitlab.com/hc/en-us/sections/37233537790740-Administrative)
    - [Agile Planning](https://federal-support.gitlab.com/hc/en-us/sections/46141240478612-Agile-Planning)
    - [AI](https://federal-support.gitlab.com/hc/en-us/sections/46141244316564-AI)
    - [CI/CD Pipeline & Runner](https://federal-support.gitlab.com/hc/en-us/sections/37233605456788-CI-CD-Pipeline-Runner)
    - [CoreDevOps](https://federal-support.gitlab.com/hc/en-us/sections/46141281147668-CoreDevOps)
    - [Errors](https://federal-support.gitlab.com/hc/en-us/sections/37233604397460-Errors)
    - [How-To](https://federal-support.gitlab.com/hc/en-us/sections/37233538834324-How-To)
    - [Infrastructure](https://federal-support.gitlab.com/hc/en-us/sections/46141282089236-Infrastructure)
    - [Kubernetes](https://federal-support.gitlab.com/hc/en-us/sections/37233537044372-Kubernetes)
    - [Licensing & Subscription](https://federal-support.gitlab.com/hc/en-us/sections/37233526841364-Licensing-Subscription)
    - [Migrations](https://federal-support.gitlab.com/hc/en-us/sections/37233603216404-Migrations)
    - [Observability](https://federal-support.gitlab.com/hc/en-us/sections/46141255714068-Observability)
    - [Performance](https://federal-support.gitlab.com/hc/en-us/sections/37233547873812-Performance)
    - [R&D RPM](https://federal-support.gitlab.com/hc/en-us/sections/45829936967700-R-D-TPM)
    - [Security](https://federal-support.gitlab.com/hc/en-us/sections/37233602184980-Security)
    - [Security and Compliance](https://federal-support.gitlab.com/hc/en-us/sections/46141257746452-Security-and-Compliance)
    - [Troubleshooting](https://federal-support.gitlab.com/hc/en-us/sections/37233516064532-Troubleshooting)
    - [Upgrades](https://federal-support.gitlab.com/hc/en-us/sections/37233572862356-Upgrades)
    - [Other Articles](https://federal-support.gitlab.com/hc/en-us/sections/29015014994068-Other-Articles)
    - [Templates](https://federal-support.gitlab.com/hc/en-us/sections/37233549693332-Templates)

## 管理者以外の立場でセクションを作成する

セクションの作成については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 管理者以外の立場でセクションを編集する

セクションの変更については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 管理者以外の立場でセクションを削除する

セクションの非アクティブ化を依頼するには、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 管理者タスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目には、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### Zendesk のセクションを表示する {#viewing-sections-in-zendesk}

Zendesk で現在のセクションを表示するには:

1. Zendesk インスタンスのナレッジセンターダッシュボードに移動します
   - プライマリブランドの場合:
     - [Zendesk Global (production)](https://gitlab.zendesk.com/knowledge/lists/default/1/1?brand_id=3252896)
     - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/knowledge/lists/default/1/1?brand_id=12510498177436)
     - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/knowledge/lists/default/1/1?brand_id=360002482351)
     - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/lists/default/1/1?brand_id=360003799392)
   - 内部ブランドの場合:
     - [Zendesk Global (production)](https://gitlab.zendesk.com/knowledge/lists/default/1/1?brand_id=22781249167132)
     - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/knowledge/lists/default/1/1?brand_id=22687153149724)
     - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/knowledge/lists/default/1/1?brand_id=41824350085780)
     - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/lists/default/1/1?brand_id=41389709130900)
1. 左側の `Arrange content` アイコンをクリックします
   - プライマリブランドの場合:
     - [Zendesk Global (production)](https://gitlab.zendesk.com/knowledge/arrange/?brand_id=3252896)
     - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/knowledge/arrange/?brand_id=12510498177436)
     - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/knowledge/arrange/?brand_id=360002482351)
     - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/arrange/?brand_id=360003799392)
   - 内部ブランドの場合:
     - [Zendesk Global (production)](https://gitlab.zendesk.com/knowledge/lists/arrange/?brand_id=22781249167132)
     - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/knowledge/lists/arrange/?brand_id=22687153149724)
     - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/knowledge/lists/arrange/?brand_id=41824350085780)
     - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/lists/arrange/?brand_id=41389709130900)
1. セクションが含まれるカテゴリの名前をクリックします

### セクションを作成する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。
- **SEO への影響:** セクションは URL 構造、検索インデックス、記事の発見可能性に影響します。セクション名や構造を変更すると、既存のリンクが壊れたり、検索エンジンのランキングに影響を与える可能性があります。
- セクションに変更を加える場合は注意してください。

{{% /alert %}}

セクションを作成するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容は、依頼自体に依存します。利用可能な開始テンプレートは以下のとおりです:

```yaml
---
---
name: 'Your section name here'
previous_name: 'Your section name here'
description: 'Your description here'
locale: 'en-us' # This should always be used
position: 0 # Integer representing section display order
```

ピアによるレビューと承認の後、MR をマージできます。次のデプロイメントが行われる際に、Zendesk に同期されます。

### セクションを編集する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。
- **SEO への影響:** セクションは URL 構造、検索インデックス、記事の発見可能性に影響します。セクション名や構造を変更すると、既存のリンクが壊れたり、検索エンジンのランキングに影響を与える可能性があります。
- セクションに変更を加える場合は注意してください。

{{% /alert %}}

セクションを編集するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容は、依頼自体に依存します。

ピアによるレビューと承認の後、MR をマージできます。次のデプロイメントが行われる際に、Zendesk に同期されます。

#### セクションの名前を変更する

セクションの名前を変更する必要がある場合は、現在の値を `previous_name` 属性にコピーしてから `name` 属性を変更します。これにより、同期処理が対象のセクションを引き続き特定して更新できます。

### セクションを新しい場所に移動する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。
- **SEO への影響:** セクションは URL 構造、検索インデックス、記事の発見可能性に影響します。セクションの場所や構造を変更すると、既存のリンクが壊れたり、検索エンジンのランキングに影響を与える可能性があります。
- セクションに変更を加える場合は注意してください。

{{% /alert %}}

セクションを新しいカテゴリに移動するには、同期リポジトリで MR を作成する必要があります。変更は単純に、ファイルを現在のフォルダ（つまり現在のカテゴリ）から新しいフォルダ（つまり新しいカテゴリ）に移動するだけです。

ピアによるレビューと承認の後、MR をマージできます。次のデプロイメントが行われる際に、Zendesk に同期されます。

### セクションを削除する

{{% alert title="危険" color="danger" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。
- セクションを削除すると、そのセクションに含まれるすべての記事（任意の翻訳を含む）がアーカイブされます。
- これを行う際には細心の注意を払ってください。

{{% /alert %}}

同期リポジトリは削除を実行しないため、セクションを削除するには 2 つのアクションを実行する必要があります。

まず、同期リポジトリから対応するファイルを削除する必要があります。ピアによるレビューと承認の後、MR をマージできます。

それが完了したら、次に Zendesk 自体から削除する必要があります。

Zendesk からセクションを削除するには:

1. [セクションビューに移動](#viewing-sections-in-zendesk)します
1. 対象のセクションの右側にある縦に並んだ 3 つの点をクリックします
1. `Edit section` をクリックします
1. ページ左側の `Delete section` をクリックします
1. `OK` をクリックして変更を確認します

### 例外デプロイメントを実行する

セクションの例外デプロイメントを実行するには、対象のセクション同期プロジェクトに移動し、スケジュールパイプラインのページに移動して、同期項目の再生ボタンをクリックします。これにより、セクションの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後にセクションの変更が反映されない

セクションは `Standard` デプロイメントタイプに従うため、通常のデプロイメントサイクル（または例外デプロイメントが行われたとき）にのみデプロイされます。
