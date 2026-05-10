---
title: 'カテゴリ'
description: 'Zendesk のカテゴリに関するドキュメント'
date: 2025-12-23
upstream_path: /handbook/security/customer-support-operations/zendesk/knowledge-center/categories/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T23:27:10Z"
translator: claude
stale: false
---

このガイドでは、GitLab における Zendesk カテゴリの作成・編集・管理方法について説明します。管理者は [管理者タスク](#administrator-tasks) のセクションを確認してください。

{{% alert title="技術詳細" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/help-center-categories)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/help-center-categories)

{{% /alert %}}

## カテゴリを理解する

### カテゴリとは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408845897370-Organizing-knowledge-base-content-in-categories-and-sections#topic_hjs_tl4_kk) によると:

> Categories are the top-level organizing containers of the help center. Categories contain sections. The help center must have at least one category. If you have only one category in your help center, then the category itself is hidden to end users, and they see only the sections in your help center.

ナレッジセンターは 3 階層の構造を使用します:

- **カテゴリ** (最上位) - 主要なトピック領域を整理。本ページでドキュメント化
- **セクション** (中間レベル) - カテゴリを関連グループに細分化。[セクションページ](/handbook/security/customer-support-operations/zendesk/knowledge-center/sections) でドキュメント化
- **記事** (コンテンツレベル) - 個々のヘルプ記事。[記事ページ](/handbook/security/customer-support-operations/zendesk/knowledge-center/articles) でドキュメント化

### カテゴリの管理方法

Zendesk は UI からカテゴリをフルに管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これによって、定型化されたレビュープロセスや、必要に応じたロールバック等が可能になります。

そのため、私たちは同期リポジトリを利用しています。

## 現在使用中のカテゴリ {#current-categories-in-use}

- Zendesk Global
  - [About GitLab Support](https://support.gitlab.com/hc/en-us/categories/19831379587100-About-GitLab-Support)
  - [Knowledge articles](https://support.gitlab.com/hc/en-us/categories/360002276159-Knowledge-Articles)
- Zendesk US Government
  - [About GitLab Support](https://federal-support.gitlab.com/hc/en-us/categories/37060125978004-About-GitLab-Support)
  - [Knowledge articles](https://support.gitlab.com/hc/en-us/categories/360002276159-Knowledge-Articles)

## 非管理者としてカテゴリを作成する

カテゴリを作成するには、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください (Customer Support Operations チームによる手動対応が必要なため)。

## 非管理者としてカテゴリを編集する

カテゴリを変更するには、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください (Customer Support Operations チームによる手動対応が必要なため)。

## 非管理者としてカテゴリを削除する

カテゴリの非アクティブ化を要求するには、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください (Customer Support Operations チームによる手動対応が必要なため)。

## 管理者タスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目は Zendesk への `Administrator` レベルのアクセスを必要とします。

{{% /alert %}}

### Zendesk でカテゴリを表示する {#viewing-categories-in-zendesk}

Zendesk の現在のカテゴリを見るには:

1. Zendesk インスタンスのナレッジセンターダッシュボードに移動します
   - プライマリブランドの場合:
     - [Zendesk Global (本番)](https://gitlab.zendesk.com/knowledge/lists/default/1/1?brand_id=3252896)
     - [Zendesk Global (サンドボックス)](https://gitlab1707170878.zendesk.com/knowledge/lists/default/1/1?brand_id=12510498177436)
     - [Zendesk US Government (本番)](https://gitlab-federal-support.zendesk.com/knowledge/lists/default/1/1?brand_id=360002482351)
     - [Zendesk US Government (サンドボックス)](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/lists/default/1/1?brand_id=360003799392)
   - 内部ブランドの場合:
     - [Zendesk Global (本番)](https://gitlab.zendesk.com/knowledge/lists/default/1/1?brand_id=22781249167132)
     - [Zendesk Global (サンドボックス)](https://gitlab1707170878.zendesk.com/knowledge/lists/default/1/1?brand_id=22687153149724)
     - [Zendesk US Government (本番)](https://gitlab-federal-support.zendesk.com/knowledge/lists/default/1/1?brand_id=41824350085780)
     - [Zendesk US Government (サンドボックス)](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/lists/default/1/1?brand_id=41389709130900)
1. 左側の `Arrange content` アイコンをクリックします
   - プライマリブランドの場合:
     - [Zendesk Global (本番)](https://gitlab.zendesk.com/knowledge/arrange/?brand_id=3252896)
     - [Zendesk Global (サンドボックス)](https://gitlab1707170878.zendesk.com/knowledge/arrange/?brand_id=12510498177436)
     - [Zendesk US Government (本番)](https://gitlab-federal-support.zendesk.com/knowledge/arrange/?brand_id=360002482351)
     - [Zendesk US Government (サンドボックス)](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/arrange/?brand_id=360003799392)
   - 内部ブランドの場合:
     - [Zendesk Global (本番)](https://gitlab.zendesk.com/knowledge/lists/arrange/?brand_id=22781249167132)
     - [Zendesk Global (サンドボックス)](https://gitlab1707170878.zendesk.com/knowledge/lists/arrange/?brand_id=22687153149724)
     - [Zendesk US Government (本番)](https://gitlab-federal-support.zendesk.com/knowledge/lists/arrange/?brand_id=41824350085780)
     - [Zendesk US Government (サンドボックス)](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/lists/arrange/?brand_id=41389709130900)

### カテゴリを作成する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue (Feature Request、Administrative、Bug 等) が存在する場合のみ実施してください。存在しない場合は、まず Issue を作成し、標準プロセスを通してから着手してください。
- **SEO への影響:** カテゴリは URL 構造、検索インデックス、記事の発見可能性に影響します。カテゴリ名や構造を変更すると、既存のリンクが壊れたり、検索エンジンのランキングに影響したりする可能性があります。
- カテゴリを変更する場合は注意してください。

{{% /alert %}}

カテゴリを作成するには、同期リポジトリでマージリクエストを作成する必要があります。具体的な変更内容はリクエスト次第です。利用できる開始テンプレートは以下です:

```yaml
---
name: 'Your category name here'
previous_name: 'Your category name here'
description: 'Your description here'
locale: 'en-us' # This should always be used
position: 0 # Integer representing category display order
source_locale: 'en-us' # This should always be used
```

ピアがレビューして マージリクエストを承認した後、マージリクエストをマージできます。次のデプロイが行われると、Zendesk に同期されます。

### カテゴリを編集する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue (Feature Request、Administrative、Bug 等) が存在する場合のみ実施してください。存在しない場合は、まず Issue を作成し、標準プロセスを通してから着手してください。
- **SEO への影響:** カテゴリは URL 構造、検索インデックス、記事の発見可能性に影響します。カテゴリ名や構造を変更すると、既存のリンクが壊れたり、検索エンジンのランキングに影響したりする可能性があります。
- カテゴリを変更する場合は注意してください。

{{% /alert %}}

カテゴリを編集するには、同期リポジトリでマージリクエストを作成する必要があります。具体的な変更内容はリクエスト次第です。

ピアがレビューして マージリクエストを承認した後、マージリクエストをマージできます。次のデプロイが行われると、Zendesk に同期されます。

#### カテゴリの名前を変更する

カテゴリの名前を変更する必要がある場合、現在の値を `previous_name` 属性にコピーしてから `name` 属性を変更します。これにより、同期処理が引き続き対象のカテゴリを特定して更新できます。

### カテゴリを削除する

{{% alert title="危険" color="danger" %}}

- 対応するリクエスト Issue (Feature Request、Administrative、Bug 等) が存在する場合のみ実施してください。存在しない場合は、まず Issue を作成し、標準プロセスを通してから着手してください。
- カテゴリを削除すると、そのカテゴリに含まれるすべてのセクションも削除され、セクションに含まれるすべての記事 (翻訳を含む) はアーカイブされます。
- これを行う際は細心の注意を払ってください。

{{% /alert %}}

同期リポジトリは削除を行わないため、カテゴリを削除するには 2 つのアクションを行う必要があります。

まず、同期リポジトリから対応するファイルを削除する必要があります。ピアがレビューして マージリクエストを承認した後、マージリクエストをマージできます。

それが完了したら、Zendesk 自体からも削除する必要があります。

Zendesk からカテゴリを削除するには:

1. [カテゴリリストに移動する](#viewing-categories-in-zendesk)
1. 削除したいカテゴリの右にある 3 つの縦のドットをクリックします
1. `Edit category` をクリックします
1. 左側の `Delete category` をクリックします
1. `OK` をクリックして変更を確認します

### 例外的なデプロイを実施する

カテゴリの例外デプロイを実施するには、対象のカテゴリ同期プロジェクトに移動し、スケジュールパイプラインのページに行き、同期項目の再生ボタンをクリックします。これにより、カテゴリの同期ジョブがトリガーされます。

## 一般的な問題とトラブルシューティング

### マージ後にカテゴリの変更が反映されない

カテゴリは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中 (または例外デプロイが行われた場合) にのみデプロイされます。
