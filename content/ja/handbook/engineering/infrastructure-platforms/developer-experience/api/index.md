---
title: "API Platform チーム"
description: "API Platform チームは、GitLab のコントリビューターが顧客向けに発見しやすく安定した API を効率的に構築・維持できるよう支援します"
upstream_path: "/handbook/engineering/infrastructure-platforms/developer-experience/api/"
upstream_sha: "6a459a3ca969603754a3b5133342edb804d3012c"
translated_at: "2026-04-28T16:51:32Z"
translator: claude
stale: false
---

## チームのスコープ

API Platform チームは GitLab の API アーキテクチャ、標準、プラットフォーム全体の機能を所有しています。横断的な API の懸念事項、設計パターン、基盤となる改善についてはお問い合わせください。機能固有のエンドポイントや機能については、[その機能エリアを所有するチームにお問い合わせください](/handbook/product/categories/features/)。

すべての API Platform チームへのリクエストは、[ヘルプリクエストプロセス](/handbook/engineering/infrastructure-platforms/developer-experience/api/#working-with-us) に向けてください。また、GitLab チームメンバーは月の最終火曜日の**午前 11 時 UK 時間**に開催される[オフィスアワー](https://docs.google.com/document/d/1MuN71IU-Y_EhMRKouiANMHdz7yG5znhO4lhT0Lyfdpk/edit?tab=t.0#heading=h.k0ifed17isg9)への参加も歓迎しています。

## ミッション

API Platform チームは GitLab の REST および GraphQL API を製品として所有し、GitLab 全体で API ファーストな開発を実現します。Developer Experience の一部として、API Platform チームは顧客向けの API をコントリビューターが効率的に構築・維持するためのツール、プロセス、プラクティスを提供します。

FY26-Q2 に新しく結成されたチームとして、プラットフォームレベルのプロジェクトに取り組み、既存のドメインエキスパートと緊密に連携することで `#f_rest_api` と `#f_graphql` の専門知識を構築しています。時間の経過とともに、API Platform チームの専門知識は GitLab 全体の API 標準と意思決定のための運営委員会の推進へと発展していきます。

## ビジョン

API Platform チームは GitLab を API ファーストのプラットフォームへと変革します。API は顧客とエージェントが GitLab とインテグレーションする方法のコア部分となります。私たちは 4D フレームワークを通じてこれを達成します。各投資が継続的改善サイクルで他を強化します:

- **ドキュメント（Documentation）**
  - REST API エンドポイントの自動化された OpenAPI 仕様
  - インタラクティブなドキュメントと実践的なワークフロー例

- **非推奨管理（Deprecations）**
  - 実験的から GA への明確なライフサイクル進行
  - 顧客インテグレーションを決して壊さない予測可能な非推奨タイムライン

- **データ駆動（Data-driven）**
  - API の改善と投資決定を導く集約された製品使用メトリクスを収集
  - GraphQL API の改善された観測可能性

- **開発（Development）**
  - コントリビューターが自動化されたツールと舗装された道を使用してデフォルトで API を提供
  - REST/GraphQL API 全体で一貫性を促進するアーキテクチャ

これらの取り組みはフライホイール効果を生み出します: より良いドキュメントが採用を促進し、非推奨管理が信頼を構築し、データインサイトが改善を導き、開発ツールがすべてを持続可能にします。

GitLab の API のオーナーとして、API Platform チームは API を顧客が信頼できる製品へと変革するために必要なスチュワードシップとプラットフォームレベルの投資を提供します。一度限りの修正ではなく、スケーラブルな自動化とツールを通じて、コントリビューターと顧客の両方にメリットをもたらす規模の経済を達成します。

## チーム構成

API Platform チームは 4 人のエンジニア（Staff 2 名、Intermediate 2 名）と 1 名のエンジニアリングマネージャーで構成されています。

### メンバー


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/developer-experience/api/#members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## ロードマップ

リーンなチームとして、「Now」のコミットメントに高い確信を持ちながら、「Next」と「Later」のコミットメントを方向性を持って柔軟に維持します。技術的なロードマップの詳細については、[Infrastructure Platforms ロードマップ](https://infra-roadmap-c6d14f.gitlab.io/)をご参照ください。

### Now（現在）

**フォーカス: ドキュメント — API 戦略と発見しやすさ** (FY26-Q3 〜 FY26-Q4)

- REST API の OpenAPI v3.0 仕様の自動生成
- REST API の一貫性のためのリンターを使用したスタイルガイドの自動適用
- OpenAPI v3.0 仕様のインタラクティブなドキュメントのデプロイ
- エンドポイントの製品カテゴリ帰属を拡張することによるフロントエンド GraphQL クエリの観測可能性の向上
- GraphQL と REST 間の機能パリティの計画やライフサイクル管理の導入（実験的/ベータ/GA など）を含む GitLab API の戦略的方向性の設定

現在のプロジェクトの詳細については、[トップレベルエピック](https://gitlab.com/groups/gitlab-org/quality/-/epics/218)をご参照ください。

### Next（次）

**フォーカス: 非推奨管理 & データ駆動 — 信頼と可視性の構築** (FY27-Q1 〜 FY27-Q2)

- REST および GraphQL API の API 使用パターンと顧客ニーズへの可視性の構築
- REST および GraphQL API のライフサイクル管理ポリシー、ツール、通知システムの確立
- GraphQL API の API 観測可能性とモニタリング機能の向上

### Later（将来）

**フォーカス: 開発 — デフォルトで API ファーストを実現** (FY27-Q3 以降)

- REST および GraphQL API の API 開発を効率化するツールの作成
- REST と GraphQL API 間のパリティと一貫性のためのアーキテクチャ改善の探索
- チームが開発から非推奨まで API ニーズをセルフサービスできるよう実現

### Keeping The Lights On (KTLO)

計画された作業に加えて、API Platform チームは、セキュリティ脆弱性、重大なバグ修正など、API サーフェス全体の共有機能に影響するオンゴーイングなメンテナンスも担当します。

## 私たちとの協働

**チーム形成期間中:**

- REST API の質問: ドメインエキスパートが助けてくれる `#f_rest_api` から始めてください
- GraphQL の質問: ドメインエキスパートが助けてくれる `#f_graphql` から始めてください
- プラットフォームレベルの API 改善: [RFH リポジトリ](https://gitlab.com/gitlab-org/quality/request-for-help#developer-experience---request-for-help) に **[Issue を作成](https://gitlab.com/gitlab-org/quality/request-for-help/-/issues/new?issuable_template=api_team_request)** してください。または `#g_api-platform` で関与してください
- 私たちはその能力を構築するまで、まだ API Platform チームによるレビューを必須としていません

個人的な質問については、GitLab.com でチームメンバーを直接メンションするか、Slack チャンネルを通じてチームに連絡してください。

### Slack チャンネル

| チャンネル | 目的 |
| :---: | :--- |
| [#g_api-platform](https://gitlab.enterprise.slack.com/archives/C095E77BLHJ) | API Platform チームと直接関与する |
| [#f_rest_api](https://gitlab.enterprise.slack.com/archives/C08LQBMLXPF) | REST API のドメインエキスパートと関与する |
| [#f_graphql](https://gitlab.enterprise.slack.com/archives/C6MLS3XEU) | GraphQL API のドメインエキスパートと関与する |

## 作業方法

API Platform チームは AMER と EMEA 地域に地理的に分散しており、デフォルトで非同期で作業します。

### ミーティング

API Platform は週 1 回同期でミーティングを行います。同期ミーティングの詳細については、[アジェンダノート](https://docs.google.com/document/d/1GeZ47_EIHVYw1KB4fCn-VUGe-fRNrs5ezTjm2s51YZE/edit?tab=t.0#heading=h.1n5rp8nv4ncb)をご参照ください。

### プロジェクト管理

API Platform チームは [Infrastructure Platforms 部門](/handbook/engineering/infrastructure-platforms/project-management/)のプロジェクト管理プロセスに従います。

現在のプロジェクトの詳細については、[親エピック](https://gitlab.com/groups/gitlab-org/quality/-/epics/200)をご参照ください。
