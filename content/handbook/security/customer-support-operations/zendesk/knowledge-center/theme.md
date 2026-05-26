---
title: 'テーマ'
description: 'Zendesk テーマに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/zendesk/knowledge-center/theme/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

このガイドでは、GitLab における Zendesk テーマの作成、編集、管理方法について説明します。管理者は[管理者タスク](#administrator-tasks)セクションを確認してください。

{{% alert title="技術的な詳細" color="primary" %}}

- デプロイメントタイプ: `Standard`
- 同期リポジトリ
  - [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/theme)
  - [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/theme)

{{% /alert %}}
{{% alert title="危険" color="danger" %}}

- どのインスタンス（サンドボックスまたは本番）でも、Zendesk UI でテーマを直接変更しないでください。これを行うと、セットアップ全体が深刻に壊れます（修正は容易ではありません）。
- これは非常に顧客に向けた項目です。変更時には注意し、サンドボックスで変更のプレビューを十分にレビューしてください。
- FY27 でテーマの取り扱い方法を刷新・変更することを検討中です。詳細は [gitlab-com/gl-security/corp/cust-support-ops/issue-tracker#752](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/752) と [gitlab-com/gl-security/corp/cust-support-ops/issue-tracker#727](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/727) を参照してください。

{{% /alert %}}

## テーマを理解する

### テーマとは

テーマとは、サポートポータルの外観を決定する一連のファイルです。

### 私たちのテーマの管理方法

Zendesk は UI を通じてテーマを完全に管理する方法を提供していますが、私たちはよりバージョン管理されたメソドロジーを採用しています。これにより、定められたレビュープロセス、必要に応じたロールバック実行などが可能になります。

そのため、私たちは同期リポジトリを利用しています。

## 管理者以外の立場でテーマを作成する

テーマの作成については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 管理者以外の立場でテーマを編集する

テーマの変更については、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 管理者以外の立場でライブテーマを変更する

ライブテーマを変更するには、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 管理者以外の立場でテーマを削除する

テーマの削除を依頼するには、[Feature Request issue](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?description_template=Feature) を作成してください（Customer Support Operations チームによる手動対応が必要なため）。

## 管理者タスク {#administrator-tasks}

{{% alert title="注意" color="primary" %}}

- このセクションのすべての項目には、Zendesk への `Administrator` レベルのアクセスが必要です。

{{% /alert %}}

### Zendesk のテーマを表示する {#viewing-themes-in-zendesk}

Zendesk のテーマを表示するには:

1. [ナレッジセンターにアクセス](../knowledge-center/#accessing-the-knowledge-center)します
1. 左側の `Customize design` アイコンをクリックします:
   - プライマリブランドの場合:
     - [Zendesk Global (production)](https://gitlab.zendesk.com/theming/workbench)
     - [Zendesk Global (sandbox)](https://gitlab1707170878.zendesk.com/theming/workbench)
     - [Zendesk US Government (production)](https://gitlab-federal-support.zendesk.com/theming/workbench)
     - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082.zendesk.com/theming/workbench)
   - 内部ブランドの場合:
     - [Zendesk Global (production)](https://gitlab-internal.zendesk.com/theming/workbench)
     - [Zendesk Global (sandbox)](https://gitlab1707170878-internal.zendesk.com/theming/workbench)
     - [Zendesk US Government (production)](https://gitlab-federal-internal.zendesk.com/theming/workbench)
     - [Zendesk US Government (sandbox)](https://gitlabfederalsupport1585318082-internal.zendesk.com/theming/workbench)

### テーマを作成する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。
- これは顧客がサポートポータルを使用する際に目にするものの使用感や見た目に大きな影響を与える可能性があります。実行時には注意してください。

{{% /alert %}}

これは、私たちのシステムに統合する非常に複雑なプロセスです。そのため、これについては Customer Support Operations チームのフルスタックエンジニアにサポートを依頼してください。これは非常に手作業のプロセスです。

### テーマを編集する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。
- これは顧客がサポートポータルを使用する際に目にするものの使用感や見た目に大きな影響を与える可能性があります。実行時には注意してください。
- [バージョニング情報](#versioning-information)に従うことが _不可欠_ です。これを行わないと、深刻な障害を引き起こす可能性があります。

{{% /alert %}}

テーマを編集するには、同期リポジトリで MR を作成する必要があります。具体的な変更内容は、依頼自体に依存しますが、変更時には必ず[バージョニング情報](#versioning-information)を使用してください。

MR が作成されると、MR のコメントにプレビューリンクが生成されます。このリンクにより、マージ前にテーマの変更をプレビューできます。MR に新しいコミットをプッシュすると、新しいプレビューリンクが生成されます。

ピアによるレビューと承認の後、MR をマージできます。

マージされると、生成されたプレビューテーマ（プレビューリンク用）はシステムから自動化により削除されます。それが完了すると、デフォルトブランチに完全にマージされます。

次のデプロイメントが行われる際に、Zendesk に同期されます。

#### バージョニング情報 {#versioning-information}

{{% alert title="バージョニングのクイックガイド" color="primary" %}}

- 1 桁目: 常に `api_version` と一致する（現在は 4）
- 2 桁目: 新しい MR を作成する際にインクリメント
- 3 桁目: 0 から開始し、同じ MR への各コミットでインクリメント

{{% /alert %}}

テーマで正しいバージョニングスタイルを使用することは不可欠です。バージョン自体は `data/theme/manifest.json` ファイルの `version` 属性に由来します。これはピリオドで区切られた 3 桁を使用します。変更を行う際には、これらの桁の意味を念頭に置いてください:

- 1 桁目: 常に `api_version` 属性と一致する必要があります
- 2 桁目: 新しい MR を作成する際は、前の値に 1 を加算します
- 3 桁目:
  - 新しい MR を作成する際は `0` であるべきです（[Example 1](#example-1) 参照）
  - 作成後に MR に新しい変更をプッシュする場合は、1 を加算します（[Example 2](#example-2) 参照）

##### Example 1 {#example-1}

テーマに変更を加える必要があり、変更を開発した後、新しい MR を作成します。`data/theme/manifest.json` ファイルには変更前は以下が記載されていました:

```plaintext
{
  "name": "GitLab Zendesk Global Theme",
  "author": "Jason Colyer",
  "version": "4.0.39",
  "api_version": 4,
  "default_locale": "en-us",
```

新しい MR を作成しているため、新しい値は次のようになるべきです:

```plaintext
{
  "name": "GitLab Zendesk Global Theme",
  "author": "Jason Colyer",
  "version": "4.1.0",
  "api_version": 4,
  "default_locale": "en-us",
```

作成後に MR に新しい変更をプッシュする必要がある場合は、新しい値は次のようになるべきです:

```plaintext
{
  "name": "GitLab Zendesk Global Theme",
  "author": "Jason Colyer",
  "version": "4.1.1",
  "api_version": 4,
  "default_locale": "en-us",
```

##### Example 2 {#example-2}

テーマ変更の既存の MR でピアと協力しています。開発後、既存の MR に変更をプッシュすることにします。`data/theme/manifest.json` ファイルには変更前は以下が記載されていました:

```plaintext
{
  "name": "GitLab Zendesk US Government Theme",
  "author": "Jason Colyer",
  "version": "4.10.9",
  "api_version": 4,
  "default_locale": "en-us",
```

MR がすでに存在し、新しい変更をプッシュしているため、新しい値は次のようになるべきです:

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

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。
- これは顧客がサポートポータルを使用する際に目にするものの使用感や見た目に大きな影響を与える可能性があります。実行時には注意してください。

{{% /alert %}}

これは、私たちのシステムに統合する非常に複雑なプロセスです。そのため、これについては Customer Support Operations チームのフルスタックエンジニアにサポートを依頼してください。これは非常に手作業のプロセスです。

### テーマを削除する

{{% alert title="警告" color="warning" %}}

- これは、対応する Issue（Feature Request、Administrative、Bug 等）がある場合にのみ実施してください。存在しない場合は、まず Issue を作成し（標準プロセスに従って処理されるのを待ってから）作業してください。
- これは顧客がサポートポータルを使用する際に目にするものの使用感や見た目に大きな影響を与える可能性があります。実行時には注意してください。
- 現在のライブテーマは削除できません。

{{% /alert %}}

ライブではないテーマを削除する場合は、通常通り進めることができます。これを行うには:

1. [テーマ一覧に移動](#viewing-themes-in-zendesk)します
1. 対象のテーマを見つけ、その右側にある縦に並んだ 3 つの点をクリックします
1. `Delete` をクリックします
1. `Delete theme` をクリックして削除を確認します

### 例外デプロイメントを実行する

テーマの例外デプロイメントを実行するには、対象のテーマ同期プロジェクトに移動し、スケジュールパイプラインのページに移動して、同期項目の再生ボタンをクリックします。これにより、テーマの同期ジョブがトリガーされます。

## よくある問題とトラブルシューティング

### マージ後にテーマの変更が反映されない

テーマは `Standard` デプロイメントタイプに従うため、通常のデプロイメントサイクル（または例外デプロイメントが行われたとき）にのみデプロイされます。
