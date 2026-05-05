---
title: "ADR-004: OAK でのマルチノード Omnibus サポート"
owning-stage: "~devops::gitlab delivery"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/omnibus_adjacent_kubernetes/decisions/004_multi_node_omnibus_support/
upstream_sha: a27a2f7fbaedbd4b422d73ed991c16ee9a112ca9
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

## 概要

OAK はマルチノード Omnibus デプロイメントをサポートします。ネットワーク設定とサービス公開はお客様の責任です。ベータフェーズで計画されているオートメーションと既存の Omnibus 設定の組み合わせにより、お客様が起動・実行するために必要なものをカバーします。それ以外はスコープ外です。Omnibus は自身のノードのみを管理し、デプロイメント内の他のノードについての知識や制御を持ちません。

## コンテキスト

マルチノード Omnibus とは、Omnibus コンポーネントが別々の仮想マシンに分散されているデプロイメントを指します。Rails、Sidekiq、PostgreSQL、Redis、Gitaly がそれぞれ別のノードに配置されます。これはスケーリングのためにコンポーネントを分割する必要がある場合に一般的です。

GKE 上の OpenBao でマルチノード Omnibus デプロイメントを検証した概念実証により、以下が確認されました:

1. 標準的なマルチノード Omnibus 設定を超えた Omnibus 設定の変更は不要です。
2. ネットワーク設定はお客様固有であり、インフラ（VPC ピアリング、ファイアウォールルール、セキュリティグループ）に依存します。
3. Rails ノードが Helm values と設定の詳細を生成するための正規ソースです。
4. 3 つのステートフルな Omnibus サービス（PostgreSQL、Redis、Gitaly）は同じ公開パターンに従います。お客様がネットワークアクセスを設定し、Omnibus が接続の詳細を提供します。

## 決定事項

OAK はマルチノード Omnibus デプロイメントをサポートします。高度なコンポーネントには PostgreSQL、Redis、Gitaly へのアクセスが必要です。Omnibus は計画された OAK 設定オプションと Helm values 生成を提供します。ネットワーク設定とサービス公開はお客様の責任です。

### データストレージの考慮事項

高度なコンポーネントは GitLab の 3 つのステートフルサービス（PostgreSQL、Redis、Gitaly）へのアクセスが必要な場合があります。

**PostgreSQL**

PostgreSQL のデプロイ方法に応じて 3 つのケースがあります。

単一ノードの Omnibus PostgreSQL の場合、高度なコンポーネントはファイアウォールルール、CIDR 許可リスト、および `postgresql['md5_auth_cidr_addresses']` を通じて接続します。

外部 PostgreSQL（PaaS またはセルフマネージド）の場合は、標準的なネットワーク設定で十分です。

Patroni を使用する Omnibus PostgreSQL クラスターの場合、お客様は高度なコンポーネント用に別の外部データベースをプロビジョニングする必要があります。Patroni クラスターは `gitlabhq_production` のサポートのためだけに存在します。フェイルオーバー後、PgBouncer はその接続プールのみを更新します。同じクラスター上の他の論理データベースは古いプライマリを指す古い接続を持ち、サイレントな障害を引き起こします。この制限は[ADR: gitlabhq_production を超えたデータベースの Omnibus HA サポートなし](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18927)に文書化されています。

**Gitaly**

高度なコンポーネントはファイアウォールルールと CIDR 許可リストを通じて Omnibus Gitaly に到達します。ネットワークアクセスが整った後、追加の Omnibus 設定は必要ありません。

**Redis**

Omnibus Redis と外部 Redis（PaaS またはセルフマネージド）の両方が、標準的なネットワーク設定を通じてアクセス可能です。

## 根拠

PoC により、既存の Omnibus 設定メカニズムがマルチノードデプロイメントに十分であることが確認されました。ネットワーク設定は環境固有であり、Omnibus のスコープ外です。お客様はファイアウォールルールを設定して Kubernetes Pod ネットワークから Omnibus サービスへのアクセスを許可し、それらのサービスを適切なネットワークインターフェースでリッスンするように設定し、環境が必要とするインフラレベルのネットワーク（VPC ピアリング、セキュリティグループなど）を管理します。

Omnibus はこのセットアップに対して以下の 3 つを提供します:

- **PostgreSQL の公開**: `postgresql['md5_auth_cidr_addresses']` を Rails ノード用に設定しているお客様は、計画された OAK ベータオートメーションを使用するか、直接設定を継続できます。
- **Redis と Gitaly の公開**: どちらのサービスも Omnibus に CIDR 許可リスト設定がありません。ファイアウォールルールが整い、Pod が認証情報（Redis パスワード、Gitaly トークン）を持てば、それ以上の Omnibus 設定は不要です。
- **Helm values の生成**: Rails ノードはすべてのデータサービスアドレスについての完全な知識を持ち、サービスが同一ノードにあるか複数ノードに分散しているかに関係なく、既存の設定から Helm values ファイルを生成できます。

Omnibus は複数のノードにわたる設定をオーケストレーションしたり、自身の外部のリソースを管理したり、Kubernetes クラスタートポロジーの知識を前提としたりすべきではありません。これにより運用境界が明確に保たれます。Omnibus は自身を管理し、お客様がネットワークとオーケストレーションを管理します。

## デプロイワークフロー

### お客様向け: マルチノード Omnibus + OAK

**ステップ 1: ネットワークアクセスの設定**

Kubernetes Pod ネットワーク CIDR を特定し、Pod が PostgreSQL、Redis、Gitaly に到達できるようにファイアウォールルールを設定します。OAK オートメーションまたは直接設定を通じて、適切なインターフェースでリッスンするように Omnibus サービスを設定します:

- PostgreSQL: `postgresql['md5_auth_cidr_addresses']` に Pod CIDR を追加する
- Redis と Gitaly: 高度なコンポーネントが必要とする場合に Pod ネットワークインターフェースでリッスンするように設定する

**ステップ 2: Helm values の生成**

PostgreSQL 接続の詳細、Redis と Gitaly の接続の詳細（該当する場合）、GitLab 統合エンドポイントを含む Helm values ファイルを生成します。

**ステップ 3: Kubernetes コンポーネントのデプロイ**

前のステップの接続の詳細を使用して、クラスターに高度なコンポーネントをデプロイします。

### フィーチャーチーム向け: サービス要件の文書化

Omnibus サービスへのアクセスが必要な新しい高度なコンポーネントを導入する際は、必要なサービス、設定が必要な Omnibus ノード、ネットワーク要件（ポート、プロトコル、認証）、マルチノードの考慮事項（例えば、非同期ワーカーの設定が必要な Sidekiq ノード）を文書化してください。

これらの要件は [PREP（本番環境リファレンスと環境パターン）](../../../../infrastructure-platforms/production/prep.md) の一部として追跡してください。

**例**: OpenBao は PostgreSQL アクセスを必要とします。Sidekiq はシークレットプロビジョニングのための非同期ワーカーを実行するため、Rails ノードと Sidekiq ノードの両方で `gitlab_rails['openbao']` 設定が必要です。

## Geo デプロイメント

Geo セットアップでは、Helm values はプライマリサイトの Rails ノードから生成する必要があります。セカンダリサイトは読み取り専用データベースを実行するため、セカンダリに対して設定された高度なコンポーネントは PostgreSQL への書き込みができなくなります。

## 参考資料

- [OAK デザインドキュメント](../index.md)
- [マルチノード Omnibus PoC — work item #9691](https://gitlab.com/gitlab-org/omnibus-gitlab/-/work_items/9691)
- PoC: [デモ（内部リンク）](https://drive.google.com/file/d/1ZriEHz1Sjg-9rJLSi0EpUurmaHVscPTP/view) と [実装の詳細](https://gitlab.com/-/snippets/5974860)
- [ADR: `gitlabhq_production` を超えたデータベースの Omnibus HA サポートなし](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/18927)
