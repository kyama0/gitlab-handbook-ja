---
title: "API Platform チーム"
description: "API Platform チームは、GitLab のコントリビューターが顧客向けに発見しやすく安定した API を効率的に構築・維持できるよう支援します"
upstream_path: "/handbook/engineering/infrastructure-platforms/developer-experience/api/"
upstream_sha: "3dfe7f05ed4a09b9eb0c0f24cd7eb7f1ac83404d"
translated_at: "2026-11-12T14:20:07+00:00"
translator: codex
stale: false
lastmod: "2026-11-11T10:41:57Z"
---

## チームのスコープ

API Platform チームは GitLab の API アーキテクチャ、標準、プラットフォーム全体の機能を所有しています。横断的な API 懸念事項、設計パターン、基礎的な改善についてはお問い合わせください。機能固有のエンドポイントや機能については、[その機能領域を所有するチームに連絡してください](/handbook/product/categories/features/)。

API Platform チームへのすべてのリクエストは、私たちの[ヘルプリクエストプロセス](/handbook/engineering/infrastructure-platforms/developer-experience/api/#working-with-us)に従ってください。または、GitLab チームメンバーは毎月最終火曜日の**英国時間の午前 11 時**に開催される[オフィスアワー](https://docs.google.com/document/d/1MuN71IU-Y_EhMRKouiANMHdz7yG5znhO4lhT0Lyfdpk/edit?tab=t.0#heading=h.k0ifed17isg9)に参加できます。

## ミッション

API Platform チームは GitLab の REST および GraphQL API を製品として所有し、GitLab 全体で API ファーストな開発を可能にします。Developer Experience の一部として、API Platform チームは、コントリビューターが顧客向けに効率的に API を構築・維持するためのツール、プロセス、プラクティスを提供します。

FY26-Q2 に新しく結成されたチームとして、私たちはプラットフォームレベルのプロジェクトに取り組み、既存の領域専門家と緊密に連携しながら、`#f_rest_api` および `#f_graphql` での専門知識を構築しています。時間の経過とともに、API Platform チームの専門知識は、GitLab 全体の API 標準と意思決定のステアリングコミッティを推進する方向へと進化します。

## ビジョン

API Platform チームは GitLab を、顧客やエージェントが GitLab と統合する方法のコアとなる API ファーストプラットフォームへと変革します。これを 4Ds フレームワークを通じて達成し、各投資が継続的改善サイクルの中で他を強化します:

- **Documentation（ドキュメンテーション）**
  - REST API エンドポイント向けの自動化された OpenAPI 仕様
  - インタラクティブなドキュメントと実用的なワークフロー例

- **Deprecations（廃止予定）**
  - 実験段階から GA までの明確なライフサイクル進行
  - 顧客の統合を決して破壊しない予測可能な廃止予定タイムライン

- **Data-driven（データ駆動）**
  - 集約された製品使用メトリクスを収集し、API の改善と投資の決定を導く
  - GraphQL API の観測性の向上

- **Development（開発）**
  - コントリビューターが自動化ツールと舗装された道を使って、デフォルトで API を出荷
  - REST/GraphQL API 間の一貫性を促進するアーキテクチャ

これらのイニシアチブはフライホイール効果を生み出します。優れたドキュメンテーションが採用を促進し、廃止予定管理が信頼を構築し、データインサイトが改善を導き、開発ツールがそれらすべてを持続可能にします。

GitLab における API のオーナーとして、API Platform チームは、私たちの API を顧客が信頼できる製品へと変革するために必要なスチュワードシップとプラットフォームレベルの投資を提供します。一度限りの修正ではなくスケーラブルな自動化とツールを通じて、コントリビューターと顧客の両方に利益をもたらす規模の経済を達成します。

## チーム構造

API Platform チームは、4 名のエンジニア（Staff 2 名、Intermediate 2 名）と 1 名の Engineering Manager で構成されています。

### メンバー

{{< team-by-manager-slug manager="pjphillips" team="Developer Experience:API(.*)" >}}

## ロードマップ

リーンなチームとして、私たちは「Now」のコミットメントへの高い信頼を維持しつつ、「Next」と「Later」のコミットメントを方向性として整合させ、柔軟に保ちます。技術ロードマップの詳細については、[Infrastructure Platforms ロードマップ](https://infra-roadmap-c6d14f.gitlab.io/)を参照してください。

今四半期と次四半期に取り組むイニシアチブについては、[API Platform のロードマップ Issue](https://gitlab.com/gitlab-org/quality/api-platform/general-discussion/-/work_items/5)を参照してください。

### 継続的な運用維持（KTLO） {#keeping-the-lights-on-ktlo}

計画された作業に加えて、API Platform チームは、セキュリティ脆弱性や重要なバグ修正など、API 表面領域全体の共有機能に影響する継続的なメンテナンスも担当します。

## 私たちとの協働 {#working-with-us}

**チーム形成期間中:**

- REST API に関する質問: 領域専門家が支援できる `#f_rest_api` で開始
- GraphQL に関する質問: 領域専門家が支援できる `#f_graphql` で開始
- プラットフォームレベルの API 改善: **[Issue を作成](https://gitlab.com/gitlab-org/quality/request-for-help/-/issues/new?issuable_template=api_team_request)**し、[RFH リポジトリ](https://gitlab.com/gitlab-org/quality/request-for-help#developer-experience---request-for-help)で依頼してください。または `#g_api-platform` で私たちに連絡できます
- その能力を構築するまでは、API Platform チームによるレビューはまだ必須ではありません

個別の質問については、GitLab.com 上でチームメンバーに直接メンションするか、Slack チャンネル経由でチームに連絡してください。

### Slack チャンネル

| チャンネル | 目的 |
| :---: | :--- |
| [#g_api-platform](https://gitlab.enterprise.slack.com/archives/C095E77BLHJ) | API Platform チームと直接やり取り |
| [#f_rest_api](https://gitlab.enterprise.slack.com/archives/C08LQBMLXPF) | REST API の領域専門家とやり取り |
| [#f_graphql](https://gitlab.enterprise.slack.com/archives/C6MLS3XEU) | GraphQL API の領域専門家とやり取り |

## 私たちの働き方

API Platform チームは AMER および EMEA リージョンに地理的に分散しており、デフォルトで非同期に作業します。

### ミーティング

API Platform は週に 1 回同期的にミーティングを行います。同期ミーティングの詳細については、[アジェンダノート](https://docs.google.com/document/d/1GeZ47_EIHVYw1KB4fCn-VUGe-fRNrs5ezTjm2s51YZE/edit?tab=t.0#heading=h.1n5rp8nv4ncb)を参照してください。

### プロジェクト管理

API Platform チームは[Infrastructure Platforms 部門](/handbook/engineering/infrastructure-platforms/project-management/)のプロジェクト管理プロセスに従います。

現在のプロジェクトの詳細については、[親エピック](https://gitlab.com/groups/gitlab-org/quality/-/epics/200)を参照してください。
