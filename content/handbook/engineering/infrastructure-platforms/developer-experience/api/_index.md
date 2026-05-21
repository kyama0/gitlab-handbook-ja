---
title: "API Platformチーム"
description: "API Platformチームは、GitLab のコントリビューターが顧客向けに発見しやすく安定した API を効率的に構築・維持できるよう支援します"
upstream_path: "/handbook/engineering/infrastructure-platforms/developer-experience/api/"
upstream_sha: "1e195b58b9f249ff10bd0e705106c320fee86141"
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-05T14:52:16+01:00"
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

**フォーカス: Documentation - API 戦略と発見可能性、Platform Health** (FY27-Q2)

- [REST API DocsのProduction ReadinessおよびGAローンチ](https://gitlab.com/groups/gitlab-org/quality/-/work_items/402)
- [Grapeを2.0.0から2.4.xにアップグレード](https://gitlab.com/groups/gitlab-org/quality/-/work_items/385)
- [OpenAPI アノテーション - RESTエンドポイントティア](https://gitlab.com/groups/gitlab-org/quality/-/work_items/366)

現在のプロジェクトの詳細については、[トップレベルエピック](https://gitlab.com/groups/gitlab-org/quality/-/epics/218)を参照してください。

### Next（次）

**フォーカス: Data-driven - 信頼と可視性の構築** (FY27-Q3)

- GraphQLエンドポイントのライフサイクル管理ポリシーを確立
- GraphQL API の観測性と監視機能の向上
- RESTおよびGraphQL API の API 使用パターンと顧客ニーズへの可視性の構築

### Later（後で）

**フォーカス: Development - デフォルトで API ファーストを有効化** (FY27-Q3以降)

- RESTおよびGraphQL API の API 開発を効率的にするツールを作成
- RESTおよびGraphQL API 間の同等性と一貫性のためのアーキテクチャ改善を探索
- チームが開発から廃止予定までの API ニーズ全体をセルフサービスで対応できるようにする

### Keeping The Lights On (KTLO)

計画された作業に加えて、API Platformチームは、セキュリティ脆弱性や重要なバグ修正など、API 表面領域全体の共有機能に影響する継続的なメンテナンスも担当します。

## 私たちとの協働

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
