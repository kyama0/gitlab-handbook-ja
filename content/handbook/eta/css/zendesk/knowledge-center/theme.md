---
title: 'テーマ'
description: 'Zendesk テーマに関するドキュメント'
upstream_path: "/handbook/eta/css/zendesk/knowledge-center/theme/"
upstream_sha: "db1b52fb5e65d37509c3eaaaebfd50dd491e4b36"
translated_at: "2026-07-22T06:32:52+09:00"
translator: codex
stale: false
lastmod: "2026-07-21T11:29:58-05:00"
---

このガイドでは、GitLab で Zendesk テーマを作成、編集、管理する方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/theme)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/theme)

{{% /alert %}}
{{% alert title="危険" color="danger" %}}

- どのインスタンス（サンドボックスまたは本番環境）でも、Zendesk UI でテーマを直接変更しないでください。変更するとセットアップ全体が大きく壊れ、修正も容易ではありません。
- これは顧客に直接表示される項目です。変更する際は注意し、サンドボックスで変更のプレビューを十分に確認してください。
- FY27 にテーマの扱い方を刷新、変更する予定です。詳細については、[gitlab-com/gl-security/corp/cust-support-ops/issue-tracker#752](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/752)および[gitlab-com/gl-security/corp/cust-support-ops/issue-tracker#727](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/727)を参照してください。

{{% /alert %}}

## テーマについて

### テーマとは

テーマは、サポートポータルの見た目を決定するファイルのセットです。

### テーマの管理方法

Zendesk は UI からテーマを完全に管理する方法を提供していますが、私たちはよりバージョン管理された手法を採用しています。これにより、定められたレビュープロセス、必要に応じたロールバック機能などを実現できます。

そのため、同期リポジトリを使用します。

## 非管理者としてテーマを作成する

テーマを作成する場合は、[Feature Request issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動介入が必要になるためです）。

## 非管理者としてテーマを編集する

テーマを変更する場合は、[Feature Request issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動介入が必要になるためです）。

## 非管理者としてライブテーマを変更する

ライブテーマを変更するには、[Feature Request issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動介入が必要になるためです）。

## 非管理者としてテーマを削除する

テーマの削除を依頼するには、[Feature Request issue](https://gitlab.com/gitlab-com/eta/css/issue-tracker/-/issues/new?description_template=Feature)を作成してください（Customer Support Systems チームによる手動介入が必要になるためです）。

## 管理者タスク

{{% alert title="注記" color="primary" %}}

- このセクション内のすべての項目には、Zendesk の `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### Zendesk でテーマを表示する

Zendesk でテーマを表示するには:

1. [ナレッジセンターにアクセスする](../knowledge-center/#accessing-the-knowledge-center)
1. 左側にある `Customize design` アイコンをクリックします:
   - プライマリブランドの場合:
     - [Zendesk Global（本番環境）](https://gitlab.zendesk.com/theming/workbench)
     - [Zendesk Global（サンドボックス）](https://gitlab1707170878.zendesk.com/theming/workbench)
     - [Zendesk US Government（本番環境）](https://gitlab-federal-support.zendesk.com/theming/workbench)
     - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082.zendesk.com/theming/workbench)
   - 内部ブランドの場合:
     - [Zendesk Global（本番環境）](https://gitlab-internal.zendesk.com/theming/workbench)
     - [Zendesk Global（サンドボックス）](https://gitlab1707170878-internal.zendesk.com/theming/workbench)
     - [Zendesk US Government（本番環境）](https://gitlab-federal-internal.zendesk.com/theming/workbench)
     - [Zendesk US Government（サンドボックス）](https://gitlabfederalsupport1585318082-internal.zendesk.com/theming/workbench)

### テーマを作成する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、最初に作成し、対応を開始する前に標準プロセスを通過させる必要があります。
- これは、顧客がサポートポータルを使用する際に目にするものの使いやすさと外観に、大きな影響を与える可能性があります。慎重に進めてください。

{{% /alert %}}

これはシステムに統合するには非常に複雑なプロセスです。そのため、Customer Support Systems チームの Fullstack Engineer に支援を依頼してください。非常に手作業の多いプロセスです。

### テーマを編集する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、最初に作成し、対応を開始する前に標準プロセスを通過させる必要があります。
- これは、顧客がサポートポータルを使用する際に目にするものの使いやすさと外観に、大きな影響を与える可能性があります。慎重に進めてください。
- [バージョン管理情報](#versioning-information)に従うことが*非常に重要*です。従わないと、深刻な問題が発生する可能性があります。

{{% /alert %}}

テーマを編集するには、同期リポジトリに MR を作成する必要があります。具体的な変更はリクエスト自体によって異なりますが、変更には必ず[バージョン管理情報](#versioning-information)を使用してください。

MR が作成されると、MR のコメントにプレビューリンクが生成されます。このリンクにより、マージ前にテーマの変更をプレビューできます。MR に新しいコミットをプッシュすると、新しいプレビューリンクが生成されます。

同僚が MR をレビューして承認した後、MR をマージできます。

マージされると、生成されたプレビューテーマ（プレビューリンク用）はシステムから自動化により削除されます。これが完了すると、デフォルトブランチに完全にマージされます。

次回のデプロイが行われると、Zendesk に同期されます。

#### バージョン管理情報

{{% alert title="バージョン管理クイックガイド" color="primary" %}}

- 1 桁目: 常に `api_version` と一致します（現在は 4）
- 2 桁目: 新しい MR を作成する際に増分します
- 3 桁目: 0 から開始し、同じ MR へのコミットごとに増分します

{{% /alert %}}

テーマには正しいバージョン管理形式を使用することが非常に重要です。バージョン自体は、`data/theme/manifest.json` ファイルの `version` 属性に由来します。ピリオドで区切られた 3 桁の数字を使用します。変更する際は、これらの数字の意味を念頭に置いてください:

- 1 桁目: 常に `api_version` 属性と一致する必要があります
- 2 桁目: 新しい MR を作成する際は、前の値に 1 を加算します
- 3 桁目:
  - 新しい MR を作成する際は、`0` にします（[例 1](#example-1)を参照）
  - 作成後に MR に新しい変更をプッシュする場合は、1 を加算します（[例 2](#example-2)を参照）

##### 例 1

テーマに変更を加える必要があるため、変更を開発してから新しい MR を作成します。変更を加える前の `data/theme/manifest.json` ファイルには次が含まれていました:

```plaintext
{
  "name": "GitLab Zendesk Global Theme",
  "author": "Jason Colyer",
  "version": "4.0.39",
  "api_version": 4,
  "default_locale": "en-us",
```

新しい MR を作成するため、新しい値は次のようになります:

```plaintext
{
  "name": "GitLab Zendesk Global Theme",
  "author": "Jason Colyer",
  "version": "4.1.0",
  "api_version": 4,
  "default_locale": "en-us",
```

作成後に MR に新しい変更をプッシュする必要がある場合、新しい値は次のようになります:

```plaintext
{
  "name": "GitLab Zendesk Global Theme",
  "author": "Jason Colyer",
  "version": "4.1.1",
  "api_version": 4,
  "default_locale": "en-us",
```

##### 例 2

テーマ変更のために、既存の MR で同僚と作業しています。開発後、既存の MR に変更をプッシュすることにします。変更を加える前の `data/theme/manifest.json` ファイルには次が含まれていました:

```plaintext
{
  "name": "GitLab Zendesk US Government Theme",
  "author": "Jason Colyer",
  "version": "4.10.9",
  "api_version": 4,
  "default_locale": "en-us",
```

MR はすでに存在し、新しい変更をプッシュするため、新しい値は次のようになります:

```plaintext
{
  "name": "GitLab Zendesk US Government Theme",
  "author": "Jason Colyer",
  "version": "4.10.10",
  "api_version": 4,
  "default_locale": "en-us",
```

### ライブテーマを変更する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、最初に作成し、対応を開始する前に標準プロセスを通過させる必要があります。
- これは、顧客がサポートポータルを使用する際に目にするものの使いやすさと外観に、大きな影響を与える可能性があります。慎重に進めてください。

{{% /alert %}}

これはシステムに統合するには非常に複雑なプロセスです。そのため、Customer Support Systems チームの Fullstack Engineer に支援を依頼してください。非常に手作業の多いプロセスです。

### テーマを削除する

{{% alert title="警告" color="warning" %}}

- 対応するリクエスト Issue（Feature Request、Administrative、Bug など）がある場合にのみ実施してください。存在しない場合は、最初に作成し、対応を開始する前に標準プロセスを通過させる必要があります。
- これは、顧客がサポートポータルを使用する際に目にするものの使いやすさと外観に、大きな影響を与える可能性があります。慎重に進めてください。
- 現在のライブテーマは削除できません。

{{% /alert %}}

ライブではないテーマを削除する場合は、通常どおり進められます。実施するには:

1. [テーマ一覧に移動する](#viewing-themes-in-zendesk)
1. 対象のテーマを見つけ、その右側にある縦に並んだ 3 つの点をクリックします
1. `Delete` をクリックします
1. 削除を確認するために `Delete theme` をクリックします

### 例外デプロイを実行する

テーマの例外デプロイを実行するには、対象のテーマ同期プロジェクトに移動し、スケジュール済みパイプラインページを開いて、同期項目の再生ボタンをクリックします。これにより、テーマの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後にテーマの変更が表示されない

テーマは `Standard` デプロイタイプに従うため、通常のデプロイサイクル中（または例外デプロイが実行された場合）にのみデプロイされます
