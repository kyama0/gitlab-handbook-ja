---
title: 'セクション'
description: 'Zendesk のセクションに関するドキュメント'
date: 2025-12-23
upstream_path: /handbook/security/customer-support-operations/zendesk/knowledge-center/sections/
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
lastmod: 2026-05-26T12:05:00-05:00
---

このガイドでは、GitLab で Zendesk のセクションを作成、編集、管理する方法を説明します。管理者は [管理者タスク](#administrator-tasks) のセクションを確認してください。

{{% alert title="Technical Details" color="primary" %}}

- デプロイタイプ: `Standard`
- Sync repos
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/sections)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/sections)
- `CustSuppOps Zendesk Test Suite Generator` が有効

{{% /alert %}}

## セクションを理解する

### セクションとは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408845897370-Organizing-knowledge-base-content-in-categories-and-sections#topic_ysj_wtt_zz) によると:

> セクションには関連する記事が含まれます。

本質的に、セクションはカテゴリを関連するグループに細分化するために使用される項目です。

ナレッジセンターは 3 階層の構造を使用します:

- **カテゴリ**（最上位レベル） - 主要なトピック領域を整理する。[categories ページ](/handbook/security/customer-support-operations/zendesk/knowledge-center/categories) に記載
- **セクション**（中間レベル） - カテゴリを関連するグループに細分化する。本ページに記載
- **記事**（コンテンツレベル） - 個々のヘルプ記事。[articles ページ](/handbook/security/customer-support-operations/zendesk/knowledge-center/articles) に記載

### セクションの管理方法

現在、すべてのセクションは Zendesk 自体の中で管理しています。

**注:** sync repos 経由でのセクション管理（カテゴリと同様）は、FY27 に将来の実装が予定されています。

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
  - [About GitLab Support](https://federal-support.gitlab.com/hc/en-us/categories/37060125978004-About-GitLab-Support) の下:
    - [Support Pages](https://federal-support.gitlab.com/hc/en-us/sections/10593044624020)
  - [Knowledge articles](https://support.gitlab.com/hc/en-us/categories/360002276159-Knowledge-Articles) の下:
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

## 管理者以外がセクションを作成する

セクションの作成については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要となるため）。

## 管理者以外がセクションを編集する

セクションの変更については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要となるため）。

## 管理者以外がセクションを削除する

セクションの無効化を依頼するには、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要となるため）。

## 管理者タスク

{{% alert title="Note" color="primary" %}}

- このセクションのすべての項目には、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### Zendesk でセクションを表示する

Zendesk の現在のセクションを確認するには:

1. Zendesk インスタンスのナレッジセンターダッシュボードに移動する
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
1. 左側の `Arrange content` アイコンをクリックする
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
1. セクションが含まれているカテゴリの名前をクリックする

### セクションを作成する

{{% alert title="Warning" color="warning" %}}

- これは対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、まず作成し、対応する前に標準プロセスを通してください。
- **SEO への影響:** セクションは URL 構造、検索のインデックス化、記事の発見可能性に影響します。セクション名や構造を変更すると、既存のリンクが壊れたり、検索エンジンのランキングに影響したりする可能性があります。
- セクションに変更を加える場合は注意してください。

{{% /alert %}}

セクションを作成するには、sync repo で MR を作成する必要があります。実際に行う変更はリクエスト自体によって異なります。利用できる開始用テンプレートは次のとおりです:

```yaml
---
---
name: 'Your section name here'
previous_name: 'Your section name here'
description: 'Your description here'
locale: 'en-us' # This should always be used
position: 0 # Integer representing section display order
```

ピアがあなたの MR をレビューして承認した後、MR をマージできます。次のデプロイが発生したときに、Zendesk に同期されます。

### セクションを編集する

{{% alert title="Warning" color="warning" %}}

- これは対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、まず作成し、対応する前に標準プロセスを通してください。
- **SEO への影響:** セクションは URL 構造、検索のインデックス化、記事の発見可能性に影響します。セクション名や構造を変更すると、既存のリンクが壊れたり、検索エンジンのランキングに影響したりする可能性があります。
- セクションに変更を加える場合は注意してください。

{{% /alert %}}

セクションを編集するには、sync repo で MR を作成する必要があります。実際に行う変更はリクエスト自体によって異なります。

ピアがあなたの MR をレビューして承認した後、MR をマージできます。次のデプロイが発生したときに、Zendesk に同期されます。

#### セクションの名前を変更する

セクションの名前を変更する必要がある場合は、現在の値を `previous_name` 属性にコピーしてから `name` 属性を変更します。これにより、同期が対象のセクションを引き続き見つけて更新できます。

### セクションを新しい場所に移動する

{{% alert title="Warning" color="warning" %}}

- これは対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、まず作成し、対応する前に標準プロセスを通してください。
- **SEO への影響:** セクションは URL 構造、検索のインデックス化、記事の発見可能性に影響します。セクションの場所や構造を変更すると、既存のリンクが壊れたり、検索エンジンのランキングに影響したりする可能性があります。
- セクションに変更を加える場合は注意してください。

{{% /alert %}}

セクションを新しいカテゴリに移動するには、sync repo で MR を作成する必要があります。変更は、ファイルを現在のフォルダー（つまり現在のカテゴリ）から新しいフォルダー（つまり新しいカテゴリ）に移動するだけです。

ピアがあなたの MR をレビューして承認した後、MR をマージできます。次のデプロイが発生したときに、Zendesk に同期されます。

### セクションを削除する

{{% alert title="Danger" color="danger" %}}

- これは対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、まず作成し、対応する前に標準プロセスを通してください。
- セクションを削除すると、そのセクションに含まれるすべての記事（翻訳を含む）がアーカイブされます。
- これを行う際は細心の注意を払ってください。

{{% /alert %}}

sync repo は削除を実行しないため、セクションを削除するには 2 つのアクションを行う必要があります。

まず、sync repo から対応するファイルを削除しなければなりません。ピアがあなたの MR をレビューして承認した後、MR をマージできます。

それが完了したら、次に Zendesk 自体から削除しなければなりません。

Zendesk からセクションを削除するには:

1. [セクションビューに移動する](#viewing-sections-in-zendesk)
1. 対象のセクションの右にある縦に並んだ 3 つの点をクリックする
1. `Edit section` をクリックする
1. ページの左側にある `Delete section` をクリックする
1. `OK` をクリックして変更を確定する

### 例外デプロイを実行する

セクションの例外デプロイを実行するには、対象のセクション sync プロジェクトに移動し、スケジュールされたパイプラインのページに移動して、sync 項目の再生ボタンをクリックします。これにより、セクションの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後にセクションの変更が反映されない

セクションは `Standard` のデプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが実施されたとき）にのみデプロイされます。
