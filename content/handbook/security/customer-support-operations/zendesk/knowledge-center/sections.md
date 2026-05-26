---
title: 'セクション'
description: 'Zendesk セクションに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/knowledge-center/sections/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
lastmod: "2026-05-26T12:05:00-05:00"
translated_at: "2026-05-26T18:30:00Z"
translator: claude
stale: false
---

このガイドでは、GitLab における Zendesk セクションの作成・編集・管理方法を説明します。管理者は [管理者タスク](#administrator-tasks) のセクションを確認してください。

{{% alert title="Technical Details" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/sections)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/sections)
- `CustSuppOps Zendesk Test Suite Generator` 有効

{{% /alert %}}

## Understanding sections

### What are sections

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408845897370-Organizing-knowledge-base-content-in-categories-and-sections#topic_ysj_wtt_zz) によると:

> セクションには関連する記事が含まれます。

本質的には、カテゴリーを関連するグループに細分化するために使用される項目です。

ナレッジセンターは 3 階層の構造を使用します:

- **Categories**（最上位）- 主要なトピック領域を整理します。[categories ページ](/handbook/security/customer-support-operations/zendesk/knowledge-center/categories) に記載
- **Sections**（中間レベル）- カテゴリーを関連するグループに細分化します。このページに記載
- **Articles**（コンテンツレベル）- 個々のヘルプ記事。[articles ページ](/handbook/security/customer-support-operations/zendesk/knowledge-center/articles) に記載

### How we manage sections

現在、すべてのセクションを Zendesk 自体の中で管理しています。

**注:** （カテゴリーと同様の）同期リポジトリ経由でのセクション管理は、FY27 での将来的な実装が予定されています。

## Current sections in use

- Zendesk Global
  - [About GitLab Support](https://support.gitlab.com/hc/en-us/categories/19831379587100-About-GitLab-Support) カテゴリー配下:
    - [Support Pages](https://support.gitlab.com/hc/en-us/sections/360004459140)
  - [Knowledge articles](https://support.gitlab.com/hc/en-us/categories/360002276159-Knowledge-Articles) カテゴリー配下:
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
  - [About GitLab Support](https://federal-support.gitlab.com/hc/en-us/categories/37060125978004-About-GitLab-Support) 配下
    - [Support Pages](https://federal-support.gitlab.com/hc/en-us/sections/10593044624020)
  - [Knowledge articles](https://support.gitlab.com/hc/en-us/categories/360002276159-Knowledge-Articles) 配下
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

## Creating a section as a non-admin

セクションの作成については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要となるため）。

## Editing a section as a non-admin

セクションの変更については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要となるため）。

## Deleting a section as a non-admin

セクションの無効化をリクエストするには、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要となるため）。

## Administrator tasks

{{% alert title="Note" color="primary" %}}

- このセクションのすべての項目には、Zendesk への `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### Viewing sections in Zendesk

Zendesk で現在のセクションを表示するには:

1. 該当する Zendesk インスタンスのナレッジセンターダッシュボードに移動します
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
1. セクションが含まれているカテゴリーの名前をクリックします

### Creating a section

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成し、作業前に標準プロセスを通してください。
- **SEO への影響:** セクションは URL 構造、検索インデックス、記事の発見可能性に影響します。セクション名や構造を変更すると、既存のリンクが壊れたり、検索エンジンのランキングに影響したりする可能性があります。
- セクションに変更を加える場合は注意してください。

{{% /alert %}}

セクションを作成するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト自体によって異なります。使用できる開始テンプレートは次のとおりです:

```yaml
---
---
name: 'Your section name here'
previous_name: 'Your section name here'
description: 'Your description here'
locale: 'en-us' # This should always be used
position: 0 # Integer representing section display order
```

ピアレビューで承認された後、MR をマージできます。次のデプロイが発生したときに、Zendesk へ同期されます。

### Editing a section

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成し、作業前に標準プロセスを通してください。
- **SEO への影響:** セクションは URL 構造、検索インデックス、記事の発見可能性に影響します。セクション名や構造を変更すると、既存のリンクが壊れたり、検索エンジンのランキングに影響したりする可能性があります。
- セクションに変更を加える場合は注意してください。

{{% /alert %}}

セクションを編集するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト自体によって異なります。

ピアレビューで承認された後、MR をマージできます。次のデプロイが発生したときに、Zendesk へ同期されます。

#### Changing the name of a section

セクションの名前を変更する必要がある場合は、現在の値を `previous_name` 属性にコピーしてから `name` 属性を変更します。これにより、同期処理が更新対象のセクションを引き続き特定できるようになります。

### Moving sections to a new location

{{% alert title="Warning" color="warning" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成し、作業前に標準プロセスを通してください。
- **SEO への影響:** セクションは URL 構造、検索インデックス、記事の発見可能性に影響します。セクションの場所や構造を変更すると、既存のリンクが壊れたり、検索エンジンのランキングに影響したりする可能性があります。
- セクションに変更を加える場合は注意してください。

{{% /alert %}}

セクションを新しいカテゴリーに移動するには、同期リポジトリで MR を作成する必要があります。変更は単に、ファイルを現在のフォルダー（つまり現在のカテゴリー）から新しいフォルダー（つまり新しいカテゴリー）へ移動するだけです。

ピアレビューで承認された後、MR をマージできます。次のデプロイが発生したときに、Zendesk へ同期されます。

### Deleting a section

{{% alert title="Danger" color="danger" %}}

- これは、対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行ってください。存在しない場合は、まず作成し、作業前に標準プロセスを通してください。
- セクションを削除すると、そのセクションに含まれるすべての記事（翻訳を含む）がアーカイブされます。
- 実施する際は細心の注意を払ってください。

{{% /alert %}}

同期リポジトリは削除を実行しないため、セクションを削除するには 2 つのアクションを行う必要があります。

まず、同期リポジトリから対応するファイルを削除する必要があります。ピアレビューで承認された後、MR をマージできます。

それが完了したら、次に Zendesk 自体からそれを削除する必要があります。

Zendesk からセクションを削除するには:

1. [セクションビューに移動します](#viewing-sections-in-zendesk)
1. 該当するセクションの右側にある縦に並んだ 3 つの点をクリックします
1. `Edit section` をクリックします
1. ページ左側の `Delete section` をクリックします
1. `OK` をクリックして変更を確定します

### Performing an exception deployment

セクションの例外デプロイを実行するには、該当するセクションの同期プロジェクトに移動し、スケジュールされたパイプラインのページに移動して、同期項目の再生ボタンをクリックします。これにより、セクションの同期ジョブがトリガーされます。

## Common issues and troubleshooting

### Not seeing section changes after a merge

セクションは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが実行されたとき）にのみデプロイされます。
