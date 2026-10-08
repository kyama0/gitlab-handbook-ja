---
title: "API Platformチーム"
description: "API Platformチームは、GitLab のコントリビューターが顧客向けに発見しやすく安定した API を効率的に構築・維持できるよう支援します"
upstream_path: "/handbook/engineering/infrastructure-platforms/developer-experience/api/"
upstream_sha: "e8a5a866cb11056dc11bec53f53747ceddafc748"
translated_at: "2026-10-08T21:04:47+00:00"
translator: claude
stale: false
lastmod: "2026-10-08T16:39:44+01:00"
---

## チームのスコープ

API Platformチームは GitLab の API アーキテクチャ、標準、プラットフォーム全体の機能を所有しています。横断的な API 懸念事項、設計パターン、基礎的な改善についてはお問い合わせください。機能固有のエンドポイントや機能については、[その機能領域を所有するチームに連絡してください](/handbook/product/categories/features/)。

API Platformチームへのすべてのリクエストは、私たちの[ヘルプリクエストプロセス](/handbook/engineering/infrastructure-platforms/developer-experience/api/#working-with-us)に従ってください。または、GitLab チームメンバーは毎月最終火曜日の**UK時間 午前11時**に開催される[オフィスアワー](https://docs.google.com/document/d/1MuN71IU-Y_EhMRKouiANMHdz7yG5znhO4lhT0Lyfdpk/edit?tab=t.0#heading=h.k0ifed17isg9)に参加できます。

## ミッション

API Platformチームは GitLab のRESTおよびGraphQL API を製品として所有し、GitLab 全体で API ファーストな開発を可能にします。Developer Experienceの一部として、API Platformチームは、コントリビューターが顧客向けに効率的に API を構築・維持するためのツール、プロセス、プラクティスを提供します。

FY26-Q2に新しく結成されたチームとして、私たちはプラットフォームレベルのプロジェクトに取り組み、既存の領域専門家と緊密に連携しながら、`#f_rest_api`および`#f_graphql`での専門知識を構築しています。時間の経過とともに、API Platformチームの専門知識は、GitLab 全体の API 標準と意思決定のステアリングコミッティを推進する方向へと進化します。

## ビジョン

API Platformチームは GitLab を、顧客やエージェントが GitLab と統合する方法のコアとなる API ファーストプラットフォームへと変革します。これを4Dsフレームワークを通じて達成し、各投資が継続的改善サイクルの中で他を強化します:

- **Documentation（ドキュメンテーション）**
  - REST API エンドポイント向けの自動化されたOpenAPI 仕様
  - インタラクティブなドキュメントと実用的なワークフロー例

- **Deprecations（廃止予定）**
  - 実験的からGAまでの明確なライフサイクル進行
  - 顧客の統合を決して破壊しない予測可能な廃止予定タイムライン

- **Data-driven（データ駆動）**
  - 集約された製品使用メトリクスを収集し、API の改善と投資の決定を導く
  - GraphQL API の観測性の向上

- **Development（開発）**
  - コントリビューターが自動化ツールと舗装された道を使って、デフォルトで API を出荷
  - REST/GraphQL API 間の一貫性を促進するアーキテクチャ

これらのイニシアチブはフライホイール効果を生み出します。優れたドキュメンテーションが採用を促進し、廃止予定管理が信頼を構築し、データインサイトが改善を導き、開発ツールがそれらすべてを持続可能にします。

GitLab における API のオーナーとして、API Platformチームは、私たちの API を顧客が信頼できる製品へと変革するために必要なスチュワードシップとプラットフォームレベルの投資を提供します。一度限りの修正ではなくスケーラブルな自動化とツールを通じて、コントリビューターと顧客の両方に利益をもたらす規模の経済を達成します。

## チーム構造

API Platformチームは、4名のエンジニア（Staff 2名、Intermediate 2名）と1名のエンジニアリングマネージャーで構成されています。

### メンバー

{{< team-by-manager-slug manager="pjphillips" team="Developer Experience:API(.*)" >}}

## ロードマップ

リーンなチームとして、私たちは「Now」のコミットメントへの高い信頼を維持しつつ、「Next」と「Later」のコミットメントを方向性として整合させ、柔軟に保ちます。技術ロードマップの詳細については、[Infrastructure Platformsロードマップ](https://infra-roadmap-c6d14f.gitlab.io/)を参照してください。

### Now（今）

**重点領域: ドキュメントと開発 - モジュール型機能のための単一 API モデル** (FY27-Q3)

- [REST API ドキュメントの本番運用準備とパブリックベータ公開](https://gitlab.com/groups/gitlab-org/quality/-/work_items/402)
- [REST API ドキュメントの一般提供: Markdown リファレンスの廃止](https://gitlab.com/groups/gitlab-org/quality/-/work_items/471)
- [OpenAPI アノテーション - REST エンドポイントのティア](https://gitlab.com/groups/gitlab-org/quality/-/work_items/366)
- [GitLab のすべてのモジュール型機能に共通する単一の API 定義モデルの確立](https://gitlab.com/groups/gitlab-org/quality/-/work_items/465)
- [新しいモジュール型機能には標準で API 仕様を同梱](https://gitlab.com/groups/gitlab-org/quality/-/work_items/429)
- [すべてのモジュール型機能の API で認証方法を明示](https://gitlab.com/groups/gitlab-org/quality/-/work_items/466)

進行中、着手準備済み、完了済みの作業の全一覧については、[親エピック](https://gitlab.com/groups/gitlab-org/quality/-/work_items/200)を参照してください。

### Next（次）

**重点領域: 廃止予定管理とデータ駆動 - GraphQL の品質とチーム別の API の可視性** (FY27-Q4)

- **GraphQL スキーマのライフサイクル**: GitLab 20.0 に先立ち、廃止予定のフィールドを予定どおり削除し、実験的機能を正式機能へ移行し、CI でスキーマの破壊的変更を阻止します。
- **GraphQL の N+1 とクエリコスト**: 効率的なデータ読み込みを標準にし、マージ前に N+1 クエリを検出します。
- **GraphQL スキーマの一貫性**: CI で新しく追加されたスキーマに lint を実行し、単一のエラーモデルを定義します。
- **チーム別の API スコアカード**: 各ステージグループが所有する REST API と GraphQL API の品質を、グループごとに 1 つのビューで確認できるようにします。
- [Scalar の upstream に GraphQL サポートを追加](https://gitlab.com/groups/gitlab-org/quality/-/work_items/439)

### Later（後で）

**重点領域: 開発 - GitLab コンポーネント全体で安全で一貫した API を実現** (FY28 以降)

- [OpenAPI アノテーション - REST パラメーター](https://gitlab.com/groups/gitlab-org/quality/-/work_items/474)
- [GitLab の全コンポーネントで API の破壊的変更を CI で阻止](https://gitlab.com/groups/gitlab-org/quality/-/work_items/432)
- [GitLab API のコントラクトテストフレームワークを提供](https://gitlab.com/groups/gitlab-org/quality/-/work_items/434)
- [Rails に到達する前のリクエスト検証により、事後対応の API セキュリティ作業を削減](https://gitlab.com/groups/gitlab-org/quality/-/work_items/430)
- [共有の GitLab protobuf モノレポを所有し、提供](https://gitlab.com/groups/gitlab-org/quality/-/work_items/431)
- [GitLab モノリスの REST API フレームワーク（Grape）を 3.2 から 4.0 にアップグレード](https://gitlab.com/groups/gitlab-org/quality/-/work_items/473)
- [API ファースト開発の導入を促進](https://gitlab.com/groups/gitlab-org/quality/-/work_items/383)

### 最近提供したもの {#recently-delivered}

2026 年 5 月の前回のロードマップ更新以降、以下を提供しました。

- [すべての Grape キーワードをサポート](https://gitlab.com/groups/gitlab-org/quality/-/work_items/321)
- [REST API ドキュメントの社内ベータ公開](https://gitlab.com/groups/gitlab-org/quality/-/work_items/369)
- [Redocly OpenAPI 3.0 仕様のエラーと警告を解消](https://gitlab.com/groups/gitlab-org/quality/-/work_items/363)
- [Grape を 2.0.0 から 2.4.x にアップグレード](https://gitlab.com/groups/gitlab-org/quality/-/work_items/385)
- [Canary 環境を壊す GraphQL フロントエンドおよびバックエンドの変更の検出を改善](https://gitlab.com/groups/gitlab-org/quality/-/work_items/436)
- [REST Entity の公開範囲の拡大を防止](https://gitlab.com/groups/gitlab-org/-/work_items/20829)
- [対話型リファレンスで複数の API 仕様を表示](https://gitlab.com/groups/gitlab-org/quality/-/work_items/433)
- [GitLab モノリスの REST API フレームワーク（Grape）を 2.4.0 から 3.2.1 にアップグレード](https://gitlab.com/groups/gitlab-org/quality/-/work_items/438)
- [公開 API リファレンスに Orbit と Artifact Registry の REST API を掲載](https://gitlab.com/groups/gitlab-org/quality/-/work_items/428)

### Keeping The Lights On (KTLO)

計画された作業に加えて、API Platformチームは、セキュリティ脆弱性や重要なバグ修正など、API 表面領域全体の共有機能に影響する継続的なメンテナンスも担当します。

## 私たちとの協働 {#working-with-us}

**チーム形成期間中:**

- REST API に関する質問: 領域専門家が支援できる`#f_rest_api`で開始
- GraphQLに関する質問: 領域専門家が支援できる`#f_graphql`で開始
- プラットフォームレベルの API 改善: [RFHリポジトリ](https://gitlab.com/gitlab-org/quality/request-for-help#developer-experience---request-for-help)で**[Issue を作成](https://gitlab.com/gitlab-org/quality/request-for-help/-/issues/new?issuable_template=api_team_request)**してください。または`#g_api-platform`で私たちに連絡できます
- その能力を構築するまでは、API Platformチームによるレビューはまだ必須ではありません

個別の質問については、GitLab.com 上でチームメンバーに直接メンションするか、Slack チャンネル経由でチームに連絡してください。

### Slack チャンネル

| チャンネル | 目的 |
| :---: | :--- |
| [#g_api-platform](https://gitlab.enterprise.slack.com/archives/C095E77BLHJ) | API Platformチームと直接やり取り |
| [#f_rest_api](https://gitlab.enterprise.slack.com/archives/C08LQBMLXPF) | REST API の領域専門家とやり取り |
| [#f_graphql](https://gitlab.enterprise.slack.com/archives/C6MLS3XEU) | GraphQL API の領域専門家とやり取り |

## 私たちの働き方

API Platformチームは AMER および EMEA リージョンに地理的に分散しており、デフォルトで非同期に作業します。

### ミーティング

API Platformは週に1回同期的にミーティングを行います。同期ミーティングの詳細については、[アジェンダノート](https://docs.google.com/document/d/1GeZ47_EIHVYw1KB4fCn-VUGe-fRNrs5ezTjm2s51YZE/edit?tab=t.0#heading=h.1n5rp8nv4ncb)を参照してください。

### プロジェクト管理

API Platformチームは[Infrastructure Platforms部門](/handbook/engineering/infrastructure-platforms/project-management/)のプロジェクト管理プロセスに従います。

現在のプロジェクトの詳細については、[親エピック](https://gitlab.com/groups/gitlab-org/quality/-/epics/200)を参照してください。
