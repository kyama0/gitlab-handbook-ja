---
title: 'セクション'
description: 'Zendesk セクションに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/knowledge-center/sections/"
upstream_sha: "1312dadbdf7381446077faefcfae17ba323692b6"
lastmod: "2026-07-14T15:22:25-05:00"
translated_at: "2026-07-19T08:01:00+09:00"
translator: codex
stale: false
---

このガイドでは、GitLab における Zendesk セクションを作成、編集、管理する方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/sections)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/sections)
- `CustSuppOps Zendesk Test Suite Generator` が有効

{{% /alert %}}

## セクションを理解する

### セクションとは

[Zendesk](https://support.zendesk.com/hc/en-us/articles/4408845897370-Organizing-knowledge-base-content-in-categories-and-sections#topic_ysj_wtt_zz)によると:

> セクションには関連する記事が含まれます。

基本的に、カテゴリーを関連するグループに細分化するための項目です。

ナレッジセンターでは、3 層構造を使用しています:

- **カテゴリー**（最上位） - 主要なトピック領域を整理します。[カテゴリーのページ](/handbook/eta/css/zendesk/knowledge-center/categories)で説明します
- **セクション**（中間レベル） - カテゴリーを関連するグループに細分化します。このページで説明します
- **記事**（コンテンツレベル） - 個々のヘルプ記事です。[記事のページ](/handbook/eta/css/zendesk/knowledge-center/articles)で説明します

### セクションの管理方法

現在、すべてのセクションを Zendesk 自体で管理しています。

**注記:** 同期リポジトリを通じたセクション管理（カテゴリーと同様）は、FY27 での将来実装を予定しています。

## 現在使用中のセクション

- Zendesk Global
  - [GitLab Support について](https://support.gitlab.com/hc/en-us/categories/19831379587100-About-GitLab-Support)カテゴリー内:
    - [Support Pages](https://support.gitlab.com/hc/en-us/sections/360004459140)
  - [ナレッジ記事](https://support.gitlab.com/hc/en-us/categories/360002276159-Knowledge-Articles)カテゴリー内:
    - [管理](https://support.gitlab.com/hc/en-us/sections/19926471791772-Administrative)
    - [アジャイルプランニング](https://support.gitlab.com/hc/en-us/sections/25409845632540-Agile-Planning)
    - [AI](https://support.gitlab.com/hc/en-us/sections/25409833616540-AI)
    - [CI/CD Pipeline & Runner](https://support.gitlab.com/hc/en-us/sections/19926474845852-CI-CD-Pipeline-Runner)
    - [CoreDevOps](https://support.gitlab.com/hc/en-us/sections/25409846247964-CoreDevOps)
    - [エラー](https://support.gitlab.com/hc/en-us/sections/19926502520220-Errors)
    - [ハウツー](https://support.gitlab.com/hc/en-us/sections/19926486239772-How-To)
    - [インフラストラクチャ](https://support.gitlab.com/hc/en-us/sections/25409833204508-Infrastructure)
    - [Kubernetes](https://support.gitlab.com/hc/en-us/sections/19926440992668-Kubernetes)
    - [ライセンスとサブスクリプション](https://support.gitlab.com/hc/en-us/sections/19926470769820-Licensing-Subscription)
    - [移行](https://support.gitlab.com/hc/en-us/sections/19926477110044-Migrations)
    - [可観測性](https://support.gitlab.com/hc/en-us/sections/25409828080540-Observability)
    - [パフォーマンス](https://support.gitlab.com/hc/en-us/sections/19926476335644-Performance)
    - [R&D RPM](https://support.gitlab.com/hc/en-us/sections/25192479183388-R-D-TPM)
    - [セキュリティ](https://support.gitlab.com/hc/en-us/sections/19926473238940-Security)
    - [セキュリティとコンプライアンス](https://support.gitlab.com/hc/en-us/sections/25409832587932-Security-and-Compliance)
    - [トラブルシューティング](https://support.gitlab.com/hc/en-us/sections/19926475879196-Troubleshooting)
    - [アップグレード](https://support.gitlab.com/hc/en-us/sections/19926489354268-Upgrades)
    - [その他の記事](https://support.gitlab.com/hc/en-us/sections/15215649512604-Other-Articles)
    - [テンプレート](https://support.gitlab.com/hc/en-us/sections/20197250020508-Templates)
- Zendesk US Government
  - [GitLab Support について](https://federal-support.gitlab.com/hc/en-us/categories/37060125978004-About-GitLab-Support)カテゴリー内:
    - [Support Pages](https://federal-support.gitlab.com/hc/en-us/sections/10593044624020)
  - [ナレッジ記事](https://support.gitlab.com/hc/en-us/categories/360002276159-Knowledge-Articles)カテゴリー内:
    - [管理](https://federal-support.gitlab.com/hc/en-us/sections/37233537790740-Administrative)
    - [アジャイルプランニング](https://federal-support.gitlab.com/hc/en-us/sections/46141240478612-Agile-Planning)
    - [AI](https://federal-support.gitlab.com/hc/en-us/sections/46141244316564-AI)
    - [CI/CD Pipeline & Runner](https://federal-support.gitlab.com/hc/en-us/sections/37233605456788-CI-CD-Pipeline-Runner)
    - [CoreDevOps](https://federal-support.gitlab.com/hc/en-us/sections/46141281147668-CoreDevOps)
    - [エラー](https://federal-support.gitlab.com/hc/en-us/sections/37233604397460-Errors)
    - [ハウツー](https://federal-support.gitlab.com/hc/en-us/sections/37233538834324-How-To)
    - [インフラストラクチャ](https://federal-support.gitlab.com/hc/en-us/sections/46141282089236-Infrastructure)
    - [Kubernetes](https://federal-support.gitlab.com/hc/en-us/sections/37233537044372-Kubernetes)
    - [ライセンスとサブスクリプション](https://federal-support.gitlab.com/hc/en-us/sections/37233526841364-Licensing-Subscription)
    - [移行](https://federal-support.gitlab.com/hc/en-us/sections/37233603216404-Migrations)
    - [可観測性](https://federal-support.gitlab.com/hc/en-us/sections/46141255714068-Observability)
    - [パフォーマンス](https://federal-support.gitlab.com/hc/en-us/sections/37233547873812-Performance)
    - [R&D RPM](https://federal-support.gitlab.com/hc/en-us/sections/45829936967700-R-D-TPM)
    - [セキュリティ](https://federal-support.gitlab.com/hc/en-us/sections/37233602184980-Security)
    - [セキュリティとコンプライアンス](https://federal-support.gitlab.com/hc/en-us/sections/46141257746452-Security-and-Compliance)
    - [トラブルシューティング](https://federal-support.gitlab.com/hc/en-us/sections/37233516064532-Troubleshooting)
    - [アップグレード](https://federal-support.gitlab.com/hc/en-us/sections/37233572862356-Upgrades)
    - [その他の記事](https://federal-support.gitlab.com/hc/en-us/sections/29015014994068-Other-Articles)
    - [テンプレート](https://federal-support.gitlab.com/hc/en-us/sections/37233549693332-Templates)

## 非管理者としてセクションを作成する

セクションを作成する場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

## 非管理者としてセクションを編集する

セクションを変更する場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

## 非管理者としてセクションを削除する

セクションの無効化をリクエストする場合は、[機能リクエスト Issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動対応が必要なため）。

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクションのすべての項目には、Zendesk の `Administrator` レベルのアクセス権が必要です。

{{% /alert %}}

### Zendesk でセクションを表示する

Zendesk で現在のセクションを確認するには:

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
1. セクションが属するカテゴリーの名前をクリックします

### セクションを作成する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。
- **SEO への影響:** セクションは URL 構造、検索インデックス、記事の見つけやすさに影響します。セクション名または構造を変更すると、既存のリンクが切れ、検索エンジンのランキングに影響する可能性があります。
- セクションを変更する場合は注意してください。

{{% /alert %}}

セクションを作成するには、同期リポジトリで MR を作成する必要があります。正確な変更内容はリクエスト自体によって異なります。次の開始テンプレートを使用できます:

```yaml
---
---
name: 'Your section name here'
previous_name: 'Your section name here'
description: 'Your description here'
locale: 'en-us' # This should always be used
position: 0 # Integer representing section display order
```

ピアが MR をレビューして承認した後、MR をマージできます。次回のデプロイ時に Zendesk に同期されます。

### セクションを編集する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。
- **SEO への影響:** セクションは URL 構造、検索インデックス、記事の見つけやすさに影響します。セクション名または構造を変更すると、既存のリンクが切れ、検索エンジンのランキングに影響する可能性があります。
- セクションを変更する場合は注意してください。

{{% /alert %}}

セクションを編集するには、同期リポジトリで MR を作成する必要があります。正確な変更内容はリクエスト自体によって異なります。

ピアが MR をレビューして承認した後、MR をマージできます。次回のデプロイ時に Zendesk に同期されます。

#### セクション名を変更する

セクション名を変更する必要がある場合は、現在の値を `previous_name` 属性にコピーしてから、`name` 属性を変更します。これにより、同期は更新対象のセクションを引き続き特定できます。

### セクションを新しい場所へ移動する

{{% alert title="警告" color="warning" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。
- **SEO への影響:** セクションは URL 構造、検索インデックス、記事の見つけやすさに影響します。セクションの場所または構造を変更すると、既存のリンクが切れ、検索エンジンのランキングに影響する可能性があります。
- セクションを変更する場合は注意してください。

{{% /alert %}}

セクションを新しいカテゴリーに移動するには、同期リポジトリで MR を作成する必要があります。変更は、現在のフォルダー（現在のカテゴリー）から新しいフォルダー（新しいカテゴリー）へファイルを移動するだけです。

ピアが MR をレビューして承認した後、MR をマージできます。次回のデプロイ時に Zendesk に同期されます。

### セクションを削除する

{{% alert title="危険" color="danger" %}}

- これは、対応するリクエスト Issue（機能リクエスト、管理、バグなど）がある場合にのみ実行してください。存在しない場合は、まず作成し、作業を開始する前に標準プロセスを経る必要があります。
- セクションを削除すると、そのセクションに含まれるすべての記事（翻訳を含む）がアーカイブされます。
- 実行する際は細心の注意を払ってください。

{{% /alert %}}

同期リポジトリは削除を実行しないため、セクションを削除するには 2 つのアクションを行う必要があります。

まず、同期リポジトリから対応するファイルを削除する必要があります。ピアが MR をレビューして承認した後、MR をマージできます。

その後、Zendesk 自体から削除する必要があります。

Zendesk からセクションを削除するには:

1. [セクション一覧に移動します](#viewing-sections-in-zendesk)
1. 対象セクションの右側にある縦に並んだ 3 つの点をクリックします
1. `Edit section` をクリックします
1. ページ左側の `Delete section` をクリックします
1. `OK` をクリックして変更を確認します

### 例外デプロイを実行する

セクションの例外デプロイを実行するには、該当するセクション同期プロジェクトに移動し、スケジュールパイプラインページで同期項目の再生ボタンをクリックします。これにより、セクションの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後にセクションの変更が表示されない

セクションは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが実行された場合）にのみデプロイされます
