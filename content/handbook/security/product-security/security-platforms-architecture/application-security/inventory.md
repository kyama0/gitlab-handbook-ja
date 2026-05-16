---
title: "GitLab Application Securityインベントリ"
description: "AppSecインベントリは、AppSecにとって重要なすべてのプロジェクト、コンポーネント、依存関係を識別および追跡するためのプライベートGitLabプロジェクトです"
upstream_path: /handbook/security/product-security/security-platforms-architecture/application-security/inventory/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-06T19:27:57-05:00"
---

## GitLab Application Securityインベントリ

GitLabをセキュアにするということは、大規模なセキュリティプログラムを構築することを意味します。コードベースの変更数は、サイドプロジェクトの数とともに常に増加しています。
これらの動的に変化するパーツをすべて把握するには、現在のGitLabソフトウェアアーキテクチャに関する私たちの理解とビジョンだけに頼ることはできません。
自動化は私たちの作業の重要な側面であり、GitLabも例外ではありません。

AppSecインベントリは、私たちにとって重要なすべてのプロジェクト、コンポーネント、依存関係を識別および追跡するためのプライベートGitLabプロジェクトです。
プロジェクトはGitLabチームメンバー向けに [https://gitlab.com/gitlab-com/gl-security/product-security/inventory](https://gitlab.com/gitlab-com/gl-security/product-security/inventory) で利用可能です。
インベントリは、この[CLIツール](https://gitlab.com/gitlab-com/gl-security/product-security/gib/)を使用して構築されています。

すべてのプロジェクトが重要なわけではなく、POC、デモ、テストであるプロジェクトを監視したくはありません。
そのため、GitLabチームメンバーが作成したプロジェクトをカテゴライズし、その性質を理解し、大規模に意思決定を行う必要があります。

### カテゴリ

プロジェクトの目的と特性をすばやく特定するために、厳密なカテゴリ化が必要です。
以下のカテゴリを使用して、監視したいプロジェクトを装飾できます。

| カテゴリ | 説明 |
| -------- | ----------- |
| `product` | GitLabのソフトウェアサプライチェーンの一部(つまり、GitLabのビルド、パッケージ化、リリース、デプロイに使用される、または製品の一部として使用される) |
| `library` | ライブラリ、パッケージソース、コンポーネント(必ずしも `product` のものではない) |
| `deploy` | GitLab.comのデプロイに使用 |
| `website` | Webサイトにデプロイされている(URLが必要) |
| `api/service` | |
| `green/yellow/orange/red_data` | [Data classification standard](/handbook/security/policies_and_standards/data-classification-standard/) |
| `3rdparty` | サードパーティとの対話 |
| `demo/test/poc` | |
| `temporary` | 一時的なプロジェクト(いずれ削除される必要がある) |
| `internal` | GitLabチームメンバーのみ利用可能 |
| `external` | ユーザー向け |
| `use_pat` | パーソナルアクセストークンが使用されている |
| `marked_for_deletion` | プロジェクトを削除すべき |
| `keep_private` | 無期限にプライベートのまま維持すべき |
| `docs` | ドキュメントの生成に使用 |
| `tooling` | エンジニアリングツール |
| `container` | Dockerイメージがビルドされる |
| `fork` | 別のプロジェクトのフォーク(gitlab.com上または他の場所) |
| `secrets_monitoring` | グループ内のシークレットを監視(この[コンフィデンシャルIssue](https://gitlab.com/gitlab-com/gl-security/product-security/gib/-/issues/64)を参照) |
| `security_policy_project` | [GitLabセキュリティポリシープロジェクト](https://docs.gitlab.com/user/application_security/policies/#security-policy-project) |

### ポリシー

上記で定義されたカテゴリに応じて、いくつかのポリシーを適用します。これらのポリシー(セキュリティ要件を含む)は、[こちら](https://gitlab.com/gitlab-com/gl-security/product-security/gib/-/tree/main/policies)および(社内のみの)[インベントリ](https://gitlab.com/gitlab-com/gl-security/product-security/inventory)で利用可能です。

これらは、私たちの[GitLab Projects Baseline Requirements](/handbook/security/policies_and_standards/gitlab_projects_baseline_requirements/)のためのコントロールとして使用されます。

### プロジェクトをカテゴリ化する方法

インベントリは、`data/` フォルダ内のフォルダツリー構造をデータベースとして使用しています。
リーフはフォルダで、グループまたはプロジェクトであり、特定のファイル(プロジェクトの場合は `project.json`、グループの場合は `group.json`)で識別されます。
これらのファイルは、インベントリを同期する際に自動的に作成されます。

ツリー構造は、GitLabインスタンス(私たちの場合は https://gitlab.com)におけるグループとプロジェクトの組織を反映しています。
例えば、[GitLabプロジェクト](https://gitlab.com/gitlab-org/gitlab/)はインベントリの[`data/gitlab-org/gitlab/`](https://gitlab.com/gitlab-com/gl-security/product-security/inventory/-/tree/main/data/gitlab-org/gitlab) 配下に配置されます。

プロジェクトは、フォルダ内に `properties.yml` ファイルを作成することでカテゴリ化できます。このファイルには、プロジェクトのカテゴリを含む `categories` 配列を含められます。

例えば、`product` および `library` カテゴリを追加するには:

```yaml
categories:
  - product
  - library
```

サブグループは、フォルダに `ignore` ファイルを追加することで無視(同期中にスキップ)できます。

[GitLab Inventory Builder Documentation](https://gitlab.com/gitlab-com/gl-security/product-security/gib/-/blob/main/README.md)、およびこの[サンプルインベントリ](https://gitlab.com/gitlab-com/gl-security/product-security/inventory-example)で詳しく学んでください。

#### GitLabプロジェクトの追加または更新方法

1. プロジェクトの名前空間をメモする。
1. <https://gitlab.com/gitlab-com/gl-security/product-security/inventory/-/tree/main/data/> にアクセスする
1. フォルダ構造をナビゲートして、プロジェクトの既存の `properties.yml` ファイルを見つける。
    1. プロジェクトが存在しない場合は、`data/your-namespace/your-project/properties.yml` にファイルを作成する。
    1. GitLabの名前空間で作成されたプロジェクトは、毎週自動的に追加される。
1. カテゴリを追加または更新するマージリクエストを開く。「何を」だけでなく「なぜ」を伝えることを忘れないでください。

### Webサイト

プロジェクトのカテゴリ化に加えて、インベントリはデプロイするWebサイトとプロジェクトをリンクするためにも使用されます。`properties.yml` ファイルには、プロジェクトのすべてのURL(`https://` で始まる)をリストする `urls` 配列を含めることができます。これらのURLは、サーバーのSSL設定を検証するために使用され、安全でない検出結果が報告されます。

例えば、GitLab WebサイトのURLを追加するには:

```yaml
urls:
  - https://gitlab.com
```

### 週次トリアージプロセス

同期パイプラインは毎週月曜日の朝に実行されます。成功すると、変更をレビューするための[マージリクエストが生成されます](https://gitlab.com/gitlab-com/gl-security/product-security/inventory/-/merge_requests)。

レビューの目的は以下のとおりです。

1. 新規作成されたプロジェクトをカテゴリ化する: プロジェクトフォルダに `properties.yml` ファイルを追加してそのカテゴリを指定する。不明な場合はプロジェクトオーナーに尋ねる。
1. 追跡したくない新規作成されたグループを無視する: グループを無視する必要がある場合は `ignore` ファイルを追加する。レビューマージリクエストでそのサブグループとプロジェクトを削除する。
1. プロジェクトとグループの更新をレビューする: `project.json` および `group.json` の変更、特に可視性(public/private)をレビューする。

マージリクエストはテストカバレッジを報告し、これはカテゴリ化されたプロジェクトの比率に対応します。理想的には、これらのレビューマージリクエストは同じカバレッジを維持し、新規プロジェクトがマージされる前にカテゴリ化されることを意味します。
