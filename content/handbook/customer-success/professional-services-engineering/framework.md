---
title: "プロフェッショナルサービス オファリングフレームワーク"
description: "GitLab のさまざまなプロフェッショナルサービスオファリングと、それらがカテゴリおよびタイプにどのように組織化されているかを紹介します。"
upstream_path: /handbook/customer-success/professional-services-engineering/framework/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-14T17:59:32+00:00"
---

### サービスオファリングフレームワークとは？

これは、私たちが提供するサービス群を、GitLab のプロフェッショナルサービスの販売とデリバリーに関わるさまざまな人々によって理解および管理できる方法で整理する手段です。

### なぜタクソノミーを使ってサービスをカテゴライズする必要があるのか？

短く答えると、それはビジネスの管理に役立ち、標準化された普遍的に理解される言語を使うことで販売プロセスを容易にするからです。

ブッキングおよびレベニューデータを使って市場のトレンドを判断する手段が必要です。私たちは販売するサービスを以下のタクソノミーにカテゴライズして、ブッキングおよびレベニューを測定し、市場のトレンドを特定します。これにより、判断によらずデータドリブンな投資優先順位の意思決定が可能になります。さらに、特定のサービスカテゴリおよびタイプ別にデリバリーフォーキャストを把握する手段も必要です。これにより、デリバリーするためのスタッフィングおよび／またはパートナーシップが整っていることを保証できます。

サービスの販売およびデリバリーには、多くの人々が関与します: 顧客、アカウントチーム（SA、CSM、SAE）、PS エンゲージメントマネージャー、PS プロジェクトコーディネーター、PS プロジェクトマネージャー、PS エンジニア（パートナー販売モーションを導入すれば、もっと多くの人が関与する可能性があります）。曖昧さを最小化するため、全員が同じ普遍的に理解される言語を使うことが重要です。これにより、スコーピング精度が向上し、超過分が減少し、予測可能性が高まり、全体的な顧客満足度が向上します。

### サービスタクソノミー

1. **顧客の GitLab 採用ジャーニー**: プロフェッショナルサービスは、顧客の GitLab ジャーニーに対応するようサービスを組織化しており、次のサービスピラーがあります: `ソースコード管理（SCM）コンソリデーション`、`CI/CD モダナイゼーション`、`DevSecOps トランスフォーメーション`、`バリューストリーム管理`。一部のサービスは、複数のピラーをまたぐ可能性があります（例: オンボーディング、エデュケーション、Duo）。
1. **カテゴリ**: 現在、プロフェッショナルサービスは 2 つの主要なカテゴリのサービスを提供しています: `エデュケーション` と `コンサルティング`。
1. **タイプ**: サービスのタイプをさらに分類することで、ビジネストレンドの分析、投資の優先順位付け、デリバリーのスケジューリングに役立ちます。サービスのタイプは、サービスのカテゴリごとに分類されます。これらのサービスタイプはユビキタス言語を使用しています。これらは、顧客のバイヤー、アカウントチーム、エンゲージメントマネージャー、デリバリーチームに対して同じ意味を持つべきです。`マイグレーション`、`実装（Implementation）`、`CI/CD`、`セキュリティ` は、`コンサルティング` カテゴリのサービスタイプの例です。`カスタム` および `スタンダード` は、`エデュケーション` カテゴリのサービスタイプです。
1. **オファリング**: 各サービスタイプには複数のオファリングがあります。市場のトレンドを特定するにつれて、サービスタイプごとにより多くのオファリングを蓄積し構築していきます。例えば、`コンサルティング` カテゴリの `実装` タイプには、[セルフマネージドヘルスチェック](https://drive.google.com/file/d/1OWZdw44MMaYLyrvxGo96vYuzz5wTXeaq/view) およびその他の一般的な実装サービスがあります。

<!-- ### Offering Maturity Model

The services maturity framework provides for 5 maturity levels for offerings: planned, minimal, viable, complete and lovable.

- **Planned**: A future planned offering
- **Minimal**: The offering is defined, a vision for moving to complete exists
- **Viable**: We have delivered the offering at least once, feeding lessons learned into the completion plan. At least some marketing materials and execution plans from Complete
- **Complete**: An offering that can be consistently delivered: predictability in timing, results, and margin.
- **Lovable**: The offering is at full maturity, positive NPS & impact on customer's adoption of GitLab product -->

## サービスオファリングフレームワーク

一般的には、私たちが公に展開しているサービスは [サービスカタログページ](https://about.gitlab.com/professional-services/catalog/) で見ることができ、より詳しい情報は [Consulting Delivery Kits](https://gitlab.com/gitlab-org/professional-services-automation/delivery-kits) と [Education Service Info](https://about.gitlab.com/professional-services/education/) にあります。

## 新規サービスプロセス

エンゲージメントマネージャーが新たなニーズを特定したときに、テクニカルアーキテクト、エンゲージメントマネージャー、プラクティスマネジメントが協働して新しいサービスやオファリングを市場に投入するプロセスです。

### 新規オファリングニーズの特定

- **ニーズの特定**: エンゲージメントマネージャー、テクニカルアーキテクト、プラクティスマネジメントは、しばしば顧客とのオポチュニティに基づき、新しいサービスやオファリングのニーズを特定します。
  - すべての新規サービスは SOW として開始し、イテレーションおよびスコープ／価格／LOE のライトサイジングを可能にします。サービスがクッキーカッターのように再現可能で頻繁にデリバリーされるようになったら、最終ステップとして SKU を作成します。
- **スライドデッキのレビュー／更新**: エンゲージメントマネージャーおよびプラクティスマネージャーは、必要に応じて以下をレビュー／更新します:
  - [FY25 GitLab Global Services](https://docs.google.com/presentation/d/1M-7aA7f9S6dULvzuKuTJs4j3A4V1z2DtMsoN0T0SMZg/edit#slide=id.g277ce56021a_0_2036) デッキ（考慮事項および方法論）。
  - [PS Proposal Deck Templates](https://drive.google.com/drive/folders/1Mw8rE0weTB3C6D5XnR34K4ZxNv2C1j-7)（個別サービスのプリセールスピッチ用）。
- **カスタムスコープサービス**: エンゲージメントマネージャーは、テクニカルアーキテクトと連携してカスタム SOW または DOW を作成し、関連するツールエンハンスメント、Runbook、ドキュメントを含むサービスをスコープします。

### 初期ドキュメンテーションと計画

- **データシートの執筆**: プラクティスマネジメントは、このフォルダの[テンプレート](https://drive.google.com/drive/folders/15qTq8OTpuMP4wDEBn14kzaMNfQaDaR7q) に従って、Google スライドを作成し PDF として保存することでデータシートのドラフトを作成します。
- **テンプレート SOW の作成（必要な場合のみ DOW も）**: エンゲージメントマネージャーは TA とプラクティスチームと連携して、これらのドキュメントの Google ドキュメント版および PDF 版を作成します。[こちらのサンプル](https://drive.google.com/drive/folders/1sXW6ZoAOXhrvVvHw6eRK-w3g_EwTWmrs) を参照してください。
- **見積もり明細の作成**: エンゲージメントマネージャーは、TA とプラクティスチームと一緒にコスト見積もりを概説し、[ビルドシート](https://docs.google.com/spreadsheets/d/15zx0JzyfZkX_jKQ9mCSJQd3HZ_u_jKXyXnS9UwsO9rs/edit?gid=1402627007#gid=1402627007) を更新します。これには、リソースロールごとの時間内訳とプロジェクトマージンを表すための COGS（Cost of Goods Sold）の更新が含まれます。

### ツーリングと自動化

- **ツーリング／自動化**: プラクティスと TA は協力して、エンゲージメントの一環として必要な再利用可能なツーリングや自動化を作成します。
- **デリバリーキットの作成**: プラクティスは、エンゲージメント中に [デリバリーキット](https://gitlab.com/gitlab-org/professional-services-automation/delivery-kits) の最初のイテレーションを作成します。これには次のものが含まれます:
  - ドキュメンテーション
  - デリバリー手順を含む Runbook
  - 顧客向けデリバリー成果物を含む PS 用のハイレベルデリバリードキュメントテンプレート
  - このエンゲージメントのデリバリーを支援するために使用されるツーリングへのリンク
  - PM 方法論およびデリバリーガイド
- **レビューと承認**: プラクティスチームがデリバリーキットをレビューしマージします。その後、プラクティスとデリバリーチームメンバーの組み合わせが指定 CODEOWNERS となり、高品質な貢献を奨励し、レビュートリアージプロセスを支援します。
- **レトロおよび貢献**: エンゲージメント後、デリバリーおよびプラクティスチームはエンゲージメントに関するレトロを実施し、ツーリング、デリバリーキット、付帯資料、見積もり、プロセスの改善点を分析します。

### ドキュメンテーションと更新

- **クオリフィケーション質問の更新**: エンゲージメントマネージャーおよびテクニカルアーキテクトは、必要に応じてクオリフィケーション質問を更新します。
  - これらは、EM がビルドシートのスコープ見積もりへのインプットを収集するのに役立つディスカバリー質問です。
- **PSQ オファリングの更新**: プラクティスマネジメントは、テンプレート SOW に基づいて PSQ オファリングの文言を更新します。
- **初期イネーブルメントセッションの実施**: プラクティスはテクニカルアーキテクトおよびエンゲージメントマネージャーと連携して、初期イネーブルメントセッションを実施します。
  - エンゲージメントマネジメント
  - デリバリー
  - トレーニング & エデュケーション
  - 録画

### マーケティングとセールス

- **マーケティングページの更新**: プラクティスは必要に応じてマーケティングページを更新します。
  - [サービスカタログ](https://about.gitlab.com/professional-services/catalog/)
  - [about.gitlab.com/services](https://about.gitlab.com/services/) ページを [Contentful](https://be.contentful.com/) で更新
  - [プロフェッショナルサービスリソースページ](https://gitlab.highspot.com/spots/66e33314264c184203383750?list=all&overview=true) を HighSpot で更新

### 継続的なイネーブルメントセッション

- **デイリー PS オファリングワーキングセッション**: プラクティスマネジメントが主導
- **金曜日 PS イネーブルメントセッション**: プロフェッショナルサービスエンジニアおよびテクニカルアーキテクトが主導

### SKU の追加ステップ

- [systems issue](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/new) を作成して Zuora を更新します。
  - SKU プロセスは、リクエストの緊急度や必要なリーダーシップ承認をどれだけ速く取得できるかに応じて、通常数週間から数か月かかります。
- SKU サービス記述を作成します（[サンプルはこちら](https://drive.google.com/drive/folders/1SyHydeJSF5BJUgphn_ayJW3wjBwWBXQu)）。
  - SKU サービス記述は、Zuora 経由で購入された SKU の SOW に相当するものです。これらはオーダーフォーム経由で取引され、固定価格であるため、サービス記述には時間要件および承認要件は含まれません。

<!-- ### Delivery Kit Creation and Contribution

- **Indicate Need for Delivery Kit**: During the Engagement Manager → Transition call, indicate the need for a delivery kit to be created. This will be tracked with labels  <span style="background-color:orange">Delivery-Kit-Update</span>, and <span style="background-color:purple">Practice-Management</span> in the [Retro Issue](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ww-consulting/ps-plan/-/blob/master/.gitlab/issue_templates/project_retrospective.md?ref_type=heads)
- **Schedule Time for Contributions**: Ops schedules additional time for delivery kit contributions.
- **Initial Delivery Kit Creation**: Architect builds the initial delivery kit as part of the delivery process.
- **Review and Approval**: Practice team reviews and approves the delivery kit. -->

<!-- ### Grooming and Maturity Matrix

- **Groom Current Delivery Kits**: Practice and Delivery regularly grooms delivery kits.
- **Create Maturity Matrix/Score**: Practice and Delivery maintain a maturity matrix to evaluate the quality and completeness of delivery kits. -->

<!-- | Category | Type | Public Offering | Offering Delivery Kit | Maturity |
| :--      | :--:    | :--      | :--:     | ---- |
| Education | Standard | [Standard Instructor Led Training](https://about.gitlab.com/services/education/) | [Education](/handbook/customer-success/professional-services-engineering/education-services/) | Lovable |
| Education | Standard | [Asynchronous eLearning](https://gitlab.edcast.com) | [Education](/handbook/customer-success/professional-services-engineering/education-services/) | Minimal |
| Education | Standard | [GitLab Certification](/handbook/customer-success/professional-services-engineering/gitlab-technical-certifications/) | [Education](/handbook/customer-success/professional-services-engineering/education-services/) | Viable |
| Education | Custom | [Custom Education Content Creation](/handbook/customer-success/professional-services-engineering/instruct-dev/) | [Education](/handbook/customer-success/professional-services-engineering/education-services/) | Complete |
| Consulting | Implementation | [Rapid Results (Self Managed)](https://about.gitlab.com/services/catalog/) | [rr-self-managed](https://gitlab.com/gitlab-com/customer-success/professional-services-group/global-practice-development/implementation/rapid-results-self-managed) | Viable |
| Consulting | Implementation | [Rapid Results (SaaS)](https://about.gitlab.com/services/catalog/) | [rr-saas](https://gitlab.com/gitlab-com/customer-success/professional-services-group/global-practice-development/implementation/rapid-results-com) | Viable |
| Consulting | Implementation | [Custom implementation](https://about.gitlab.com/services/catalog/) | [implementation-template](https://gitlab.com/gitlab-com/customer-success/professional-services-group/global-practice-development/implementation/implementation-template) | Complete |
| Consulting | Implementation | [Readiness Assessment](https://about.gitlab.com/services/catalog/health-check/) | [readiness-assessment](https://gitlab.com/gitlab-com/customer-success/professional-services-group/global-practice-development/implementation/readiness-assessment) | Complete |
| Consulting | Migration | [SCM Migration](https://about.gitlab.com/services/catalog/enterprise/) | [migration-template](https://gitlab.com/gitlab-com/customer-success/professional-services-group/global-practice-development/migration/migration-template) | Complete |
| Consulting | Migration | [CI Migration](https://about.gitlab.com/services/catalog/enterprise/ci-cd-migration/) | TBD | Minimal |
| Consulting | Migration | [Migration+](https://about.gitlab.com/services/#migration-services) | [migration-template](https://gitlab.com/gitlab-com/customer-success/professional-services-group/global-practice-development/migration/migration-template) | Viable |
| Consulting | Integration | [Jenkins](https://about.gitlab.com/services/catalog/) | TBD | Complete |
| Consulting | Integration | [LDAP, SAML, SSO](https://about.gitlab.com/services/catalog/) | TBD | Complete |
| Consulting | Integration | [Jira](https://about.gitlab.com/services/catalog/) | TBD | Complete |
| Consulting | Advisory | [CI/CD Transformation](https://docs.google.com/presentation/d/1gCULkwewztptWPO4wnr6xU-E3B_C7oVqVAdT-yAc0SE/edit) | TBD | Planned |
| Consulting | Advisory | [General Advisory Services](https://about.gitlab.com/services/advisory/) | [Advisory Services](https://gitlab.com/gitlab-com/customer-success/professional-services-group/global-practice-development/consulting) | Minimal |
| Consulting | Advisory | Agile/Plan Workflow Advisory | [Agile/Plan Advisory](https://gitlab.com/gitlab-com/customer-success/professional-services-group/global-practice-development/consulting/workflow-agile-ceremonies) | Minimal
| Consulting | Advisory | Dedicated Services (Center of Excellence) | TBD | Planned |
| Consulting | Advisory | DevSecOps Workflow Advisory | TBD | Planned |
| Consulting | Development | Development | TBD | Planned | -->
