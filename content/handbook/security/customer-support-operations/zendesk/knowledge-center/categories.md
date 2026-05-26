---
title: 'カテゴリ'
description: 'Zendesk のカテゴリに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/knowledge-center/categories/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
lastmod: "2026-05-26T12:05:00-05:00"
translated_at: "2026-05-26T12:00:00Z"
translator: claude
stale: false
---

このガイドでは、GitLab における Zendesk カテゴリの作成、編集、管理方法について説明します。管理者は [管理者向けタスク](#administrator-tasks) のセクションを確認してください。

{{% alert title="Technical Details" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/help-center-categories)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/help-center-categories)
- `CustSuppOps Zendesk Test Suite Generator` 有効

{{% /alert %}}

## カテゴリを理解する

### カテゴリとは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408845897370-Organizing-knowledge-base-content-in-categories-and-sections#topic_hjs_tl4_kk) によると:

> カテゴリは、ヘルプセンターの最上位の整理用コンテナです。カテゴリにはセクションが含まれます。ヘルプセンターには少なくとも 1 つのカテゴリが必要です。ヘルプセンターにカテゴリが 1 つしかない場合、そのカテゴリ自体はエンドユーザーには非表示となり、ユーザーにはヘルプセンター内のセクションのみが表示されます。

ナレッジセンターは 3 階層の構造を使用しています:

- **Categories**（最上位）- 主要なトピック領域を整理します。このページで説明しています。
- **Sections**（中間レベル）- カテゴリを関連するグループに細分化します。[セクションのページ](/handbook/security/customer-support-operations/zendesk/knowledge-center/sections) で説明しています。
- **Articles**（コンテンツレベル）- 個々のヘルプ記事です。[記事のページ](/handbook/security/customer-support-operations/zendesk/knowledge-center/articles) で説明しています。

### カテゴリの管理方法

Zendesk は UI を通じてカテゴリを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、定められたレビュープロセス、必要に応じたロールバックの実行などが可能になります。

そのため、私たちは同期リポジトリを利用しています。

## 現在使用中のカテゴリ

- Zendesk Global
  - [About GitLab Support](https://support.gitlab.com/hc/en-us/categories/19831379587100-About-GitLab-Support)
  - [Knowledge articles](https://support.gitlab.com/hc/en-us/categories/360002276159-Knowledge-Articles)
- Zendesk US Government
  - [About GitLab Support](https://federal-support.gitlab.com/hc/en-us/categories/37060125978004-About-GitLab-Support)
  - [Knowledge articles](https://support.gitlab.com/hc/en-us/categories/360002276159-Knowledge-Articles)

## 非管理者としてカテゴリを作成する

カテゴリの作成については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 非管理者としてカテゴリを編集する

カテゴリの変更については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 非管理者としてカテゴリを削除する

カテゴリの無効化をリクエストするには、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 管理者向けタスク

{{% alert title="Note" color="primary" %}}

- このセクションのすべての項目は、Zendesk への `Administrator` レベルのアクセスを必要とします。

{{% /alert %}}

### Zendesk でカテゴリを表示する

Zendesk で現在のカテゴリを確認するには:

1. 該当する Zendesk インスタンスのナレッジセンターダッシュボードに移動します。
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
1. 左側の `Arrange content` アイコンをクリックします。
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

### カテゴリを作成する

{{% alert title="Warning" color="warning" %}}

- これは対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行うべきです。存在しない場合は、まず作成してください（そして作業を始める前に標準プロセスを通してください）。
- **SEO への影響:** カテゴリは URL 構造、検索インデックス、記事の発見性に影響します。カテゴリ名や構造を変更すると、既存のリンクが壊れたり、検索エンジンのランキングに影響したりする可能性があります。
- カテゴリに変更を加える場合は注意してください。

{{% /alert %}}

カテゴリを作成するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト自体によって異なります。出発点として使用できるテンプレートは次のとおりです:

```yaml
---
name: 'Your category name here'
previous_name: 'Your category name here'
description: 'Your description here'
locale: 'en-us' # This should always be used
position: 0 # Integer representing category display order
source_locale: 'en-us' # This should always be used
```

ピアがあなたの MR をレビューして承認したら、MR をマージできます。次のデプロイが行われると、Zendesk に同期されます。

### カテゴリを編集する

{{% alert title="Warning" color="warning" %}}

- これは対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行うべきです。存在しない場合は、まず作成してください（そして作業を始める前に標準プロセスを通してください）。
- **SEO への影響:** カテゴリは URL 構造、検索インデックス、記事の発見性に影響します。カテゴリ名や構造を変更すると、既存のリンクが壊れたり、検索エンジンのランキングに影響したりする可能性があります。
- カテゴリに変更を加える場合は注意してください。

{{% /alert %}}

カテゴリを編集するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容はリクエスト自体によって異なります。

ピアがあなたの MR をレビューして承認したら、MR をマージできます。次のデプロイが行われると、Zendesk に同期されます。

#### カテゴリの名前を変更する

カテゴリの名前を変更する必要がある場合は、現在の値を `previous_name` 属性にコピーしてから `name` 属性を変更します。これにより、同期が更新対象のカテゴリを引き続き特定できるようになります。

### カテゴリを削除する

{{% alert title="Danger" color="danger" %}}

- これは対応するリクエスト issue（Feature Request、Administrative、Bug など）がある場合にのみ行うべきです。存在しない場合は、まず作成してください（そして作業を始める前に標準プロセスを通してください）。
- カテゴリを削除すると、そのカテゴリに含まれるすべてのセクションも削除され、セクションに含まれるすべての記事（翻訳を含む）がアーカイブされます。
- これを行う際は細心の注意を払ってください。

{{% /alert %}}

同期リポジトリは削除を実行しないため、カテゴリを削除するには 2 つのアクションを行う必要があります。

まず、同期リポジトリから対応するファイルを削除する必要があります。ピアがあなたの MR をレビューして承認したら、MR をマージできます。

それが完了したら、次に Zendesk 自体から削除する必要があります。

Zendesk からカテゴリを削除するには:

1. [カテゴリ一覧に移動](#viewing-categories-in-zendesk) します。
1. 削除したいカテゴリの右側にある縦 3 点のドットをクリックします。
1. `Edit category` をクリックします。
1. 左側の `Delete category` をクリックします。
1. `OK` をクリックして変更を確定します。

### 例外デプロイを実行する

カテゴリの例外デプロイを実行するには、該当するカテゴリの同期プロジェクトに移動し、スケジュール済みパイプラインのページに移動して、同期項目の再生ボタンをクリックします。これにより、カテゴリの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後にカテゴリの変更が表示されない

カテゴリは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが行われたとき）にのみデプロイされます。
