---
title: 'カテゴリー'
description: 'Zendesk カテゴリーに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/knowledge-center/categories/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
lastmod: "2026-07-14T15:22:25-05:00"
translated_at: "2026-07-19T07:20:00+09:00"
translator: codex
stale: false
---

このガイドでは、GitLab における Zendesk カテゴリーを作成、編集、管理する方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/help-center-categories)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/help-center-categories)
- `CustSuppOps Zendesk Test Suite Generator` が有効

{{% /alert %}}

## カテゴリーを理解する

### カテゴリーとは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408845897370-Organizing-knowledge-base-content-in-categories-and-sections#topic_hjs_tl4_kk)によると:

> カテゴリーは、ヘルプセンターの最上位の整理コンテナです。カテゴリーにはセクションが含まれます。ヘルプセンターには少なくとも 1 つのカテゴリーが必要です。ヘルプセンターにカテゴリーが 1 つしかない場合、カテゴリー自体はエンドユーザーには非表示になり、ヘルプセンターのセクションのみが表示されます。

ナレッジセンターでは、3 層構造を使用しています:

- **カテゴリー**（最上位） - 主要なトピック領域を整理します。このページで説明します
- **セクション**（中間レベル） - カテゴリーを関連するグループに細分化します。[セクションページ](/handbook/eta/css/zendesk/knowledge-center/sections)で説明します
- **記事**（コンテンツレベル） - 個々のヘルプ記事です。[記事ページ](/handbook/eta/css/zendesk/knowledge-center/articles)で説明します

### カテゴリーの管理方法

Zendesk は UI を通じてカテゴリーを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、定められたレビュープロセス、必要に応じたロールバックの実行などが可能になります。

このため、同期リポジトリを使用しています。

## 現在使用中のカテゴリー

- Zendesk Global
  - [GitLab Support について](https://support.gitlab.com/hc/en-us/categories/19831379587100-About-GitLab-Support)
  - [ナレッジ記事](https://support.gitlab.com/hc/en-us/categories/360002276159-Knowledge-Articles)
- Zendesk US Government
  - [GitLab Support について](https://federal-support.gitlab.com/hc/en-us/categories/37060125978004-About-GitLab-Support)
  - [ナレッジ記事](https://support.gitlab.com/hc/en-us/categories/360002276159-Knowledge-Articles)

## 非管理者としてカテゴリーを作成する

カテゴリーを作成する場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

## 非管理者としてカテゴリーを編集する

カテゴリーを変更する場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

## 非管理者としてカテゴリーを削除する

カテゴリーの無効化をリクエストする場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクションのすべての項目には、Zendesk の `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### Zendesk でカテゴリーを表示する

Zendesk で現在のカテゴリーを確認するには:

1. Zendesk インスタンスのナレッジセンターダッシュボードに移動します
   - プライマリブランド:
     - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/knowledge/lists/default/1/1?brand_id=3252896)
     - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/knowledge/lists/default/1/1?brand_id=12510498177436)
     - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/knowledge/lists/default/1/1?brand_id=360002482351)
     - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/lists/default/1/1?brand_id=360003799392)
   - 内部ブランド:
     - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/knowledge/lists/default/1/1?brand_id=22781249167132)
     - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/knowledge/lists/default/1/1?brand_id=22687153149724)
     - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/knowledge/lists/default/1/1?brand_id=41824350085780)
     - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/lists/default/1/1?brand_id=41389709130900)
1. 左側の `Arrange content` アイコンをクリックします
   - プライマリブランド:
     - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/knowledge/arrange/?brand_id=3252896)
     - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/knowledge/arrange/?brand_id=12510498177436)
     - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/knowledge/arrange/?brand_id=360002482351)
     - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/arrange/?brand_id=360003799392)
   - 内部ブランド:
     - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/knowledge/lists/arrange/?brand_id=22781249167132)
     - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/knowledge/lists/arrange/?brand_id=22687153149724)
     - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/knowledge/lists/arrange/?brand_id=41824350085780)
     - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/knowledge/lists/arrange/?brand_id=41389709130900)

### カテゴリーを作成する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。
- **SEO への影響:** カテゴリーは URL 構造、検索インデックス、記事の見つけやすさに影響します。カテゴリー名または構造を変更すると、既存のリンクが切れ、検索エンジンのランキングに影響する可能性があります。
- カテゴリーを変更する場合は注意してください。

{{% /alert %}}

カテゴリーを作成するには、同期リポジトリで MR を作成する必要があります。正確な変更内容はリクエスト自体によって異なります。次の開始テンプレートを使用できます:

```yaml
---
name: 'Your category name here'
previous_name: 'Your category name here'
description: 'Your description here'
locale: 'en-us' # This should always be used
position: 0 # Integer representing category display order
source_locale: 'en-us' # This should always be used
```

ピアが MR をレビューして承認した後、MR をマージできます。次回のデプロイ時に Zendesk に同期されます。

### カテゴリーを編集する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。
- **SEO への影響:** カテゴリーは URL 構造、検索インデックス、記事の見つけやすさに影響します。カテゴリー名または構造を変更すると、既存のリンクが切れ、検索エンジンのランキングに影響する可能性があります。
- カテゴリーを変更する場合は注意してください。

{{% /alert %}}

カテゴリーを編集するには、同期リポジトリで MR を作成する必要があります。正確な変更内容はリクエスト自体によって異なります。

ピアが MR をレビューして承認した後、MR をマージできます。次回のデプロイ時に Zendesk に同期されます。

#### カテゴリー名を変更する

カテゴリー名を変更する必要がある場合は、現在の値を `previous_name` 属性にコピーしてから、`name` 属性を変更します。これにより、同期は更新対象のカテゴリーを引き続き特定できます。

### カテゴリーを削除する

{{% alert title="危険" color="danger" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。
- カテゴリーを削除すると、そのカテゴリーに含まれるすべてのセクションも削除され、セクションに含まれるすべての記事（翻訳を含む）はアーカイブされます。
- 実行する際は細心の注意を払ってください。

{{% /alert %}}

同期リポジトリは削除を実行しないため、カテゴリーを削除するには 2 つのアクションを行う必要があります。

まず、同期リポジトリから対応するファイルを削除する必要があります。ピアが MR をレビューして承認した後、MR をマージできます。

その後、Zendesk 自体から削除する必要があります。

Zendesk からカテゴリーを削除するには:

1. [カテゴリー一覧に移動します](#viewing-categories-in-zendesk)
1. 削除するカテゴリーの右側にある縦に並んだ 3 つの点をクリックします
1. `Edit category` をクリックします
1. 左側にある `Delete category` をクリックします
1. `OK` をクリックして変更を確認します

### 例外デプロイを実行する

カテゴリーの例外デプロイを実行するには、該当するカテゴリ―同期プロジェクトに移動し、スケジュールパイプラインページで同期項目の再生ボタンをクリックします。これにより、カテゴリーの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後にカテゴリーの変更が表示されない

カテゴリーは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが実行された場合）にのみデプロイされます
