---
title: Software Supply Chain Security サブ部門
upstream_path: /handbook/engineering/development/sec/software-supply-chain-security/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-22T14:47:44+02:00"
---

Software Supply Chain Security サブ部門のチームは、製品の [Software Supply Chain Security ステージ](https://about.gitlab.com/direction/software_supply_chain_security/)におけるエンジニアリングチームです。

## ビジョン

[Software Supply Chain Security ステージ](https://about.gitlab.com/direction/software_supply_chain_security/)の製品の方向性との整合を通じて、GitLab の製品ビジョンを支援すること。

## SSCS チャーター

**Software Supply Chain Security（SSCS）ステージチームチャーター**

### 私たちのミッション

開発者のベロシティを維持しながら、サプライチェーン攻撃から GitLab の顧客を守ります。

私たちは、すべてのアーティファクトが検証され、すべてのアクセスが認可され、すべてのリスクが可視化されることを確保することで、コードのコミットから本番環境へのデプロイまで、ソフトウェア開発ライフサイクル全体を保護します。

### 私たちが行うこと

SSCS は 3 つの重要なサーフェスを保護します:

#### 1. ビルド & パイプラインのセキュリティ

- アーティファクトが信頼できるソースコードから検証可能な形でビルドされることの確保
- SLSA コンプライアンスとアーティファクトのアテステーション
- ランナーのセキュリティと分離
- シークレット管理
- パイプラインの整合性

#### 2. ID & アクセス管理

- プラットフォーム全体で誰が何をできるかの制御
- 認証（ユーザーがどのように ID を証明するか）
- 認可（認証されたユーザーが何をできるか）
- ゼロトラストアーキテクチャ

#### 3. コンプライアンス & ポリシー

- セキュリティを測定可能で監査可能にすること
- コードとしてのセキュリティポリシー
- コンプライアンスの証跡の生成
- 監査証跡と可視性

### 私たちの優先事項が GitLab のエグゼクティブ優先事項とどう整合するか

私たちは、会社レベルの優先事項を支援する計画外のチーム横断的な作業のために 30% の capacity バッファーを維持しています。これにより、以下のような会社レベルの優先事項に対応できます:

- **GitLab Duo & AI** - DAP または AI セキュリティをブロックするあらゆるもの
- **Protocells** - Cells アーキテクチャの認証/認可の基盤

### 私たちのトップ 3 の優先事項

#### 優先事項 1: AuthN/AuthZ のための強固なセキュリティ基盤を構築する

**目的:** セキュリティインシデントを削減する
**なぜ重要か:** すべてのインシデントは顧客の信頼を損ない、エンジニアリングの capacity を消耗させます。

**私たちが行っていること:**

- 認証の統合（CYCP）
- トークンセキュリティの改善
- 重要な監査のギャップ

#### 優先事項 2: エンジニアリングエクセレンス

**目的:** 高パフォーマンスで予測可能なエンジニアリング組織になる
**なぜ重要か:** 火消しやサポートエスカレーションに溺れていては、戦略的価値を提供できません。

**私たちが行っていること:**

- サポートエスカレーション率を 30% から 15% 未満に削減する
- 提供の信頼度を向上させる（現在 60 〜 70% → 85% 以上）

#### 優先事項 3: サプライチェーンのリーダーシップ

**目的:** GitLab を最も信頼されるサプライチェーンセキュリティプラットフォームとして確立する
**なぜ重要か:** サプライチェーン攻撃は前年比で増加しています。GovTech やエンタープライズのような顧客は、検証可能なセキュリティを求めています。

**私たちが行っていること:**

- SLSA Level 3 コンプライアンス
- ランナーの ID と検証
- エンドツーエンドのアーティファクトとコンテナのアテステーション
- サプライチェーンの可視性ダッシュボード

### 私たちのトップ 3 の優先事項が戦略的なチーム横断作業をどう可能にするか

私たちの優先事項は、単に SSCS 内部の目標についてのものではなく、会社の目標を支援する戦略的なチーム横断作業を可能にするように設計されています。

#### 優先事項 1: 強固な基盤の構築 → プラットフォーム機能を可能にする

Code Yellow/Purple（CYCP）の認証統合とセキュリティアーキテクチャは以下を可能にします:

- Workload Identity federation
- ProtoCells 向けの OAuth - ProtoCells が依存する認証基盤
- 顧客向けのきめ細かいアクセス制御
- セキュアなマシン ID に基づいて構築されたエージェント認証

#### 優先事項 2: エンジニアリングエクセレンス → 計画外作業のための capacity を生み出す

サポート負担の削減、提供の信頼度の向上、品質のための capacity の保護は以下を可能にします:

- より速い応答時間 - コミットメントを破ることなく緊急のリクエストに切り替えられる
- より高い品質 - 戦略的作業が私たちを悩ませる技術的負債を生まない
- より良い見積もり - 計画外作業に利用できる真の capacity を把握する
- 持続可能なペース - 絶え間ないコンテキストスイッチでチームが燃え尽きない

#### 優先事項 3: サプライチェーンのリーダーシップ → エンタープライズ商談で差別化する

SLSA コンプライアンス、ランナーセキュリティ、アーティファクトのアテステーション、脅威分析、高度なコンプライアンス機能は以下を可能にします:

- エンタープライズの信頼性 - SLSA 認証が戦略的作業の資金となる商談を可能にする
- コンプライアンスの基盤 - DAP と ProtoCells が継承するセキュリティアーキテクチャ

### AI セキュリティ: 私たちの最新のフロンティア

#### なぜ AI セキュリティが重要か

AI 機能（GitLab Duo、AI エージェント、コード生成）は、私たちのセキュリティモデルを根本的に変えています:

- AI エージェントはユーザーの代わりに行動する - composite identity が必要
- AI はコードを生成しリポジトリを変更する - アトリビューションと監査可能性が必要
- AI は顧客データにアクセスする - プライバシーとコンプライアンスの制御が必要
- AI は組織の境界を越える - 堅牢な認可が必要

課題: 私たちは AI 機能を保護すると同時に、それらが必要とするプラットフォーム機能を構築しています。これは避けられない依存関係と計画外作業を生み出します。

### 私たちの働き方

#### リソース配分モデル

- **70%** - 計画された作業
- **30%** - 計画外の作業

計画外作業は例外ではなく、仕事の一部です。チーム横断的な依存関係、緊急の顧客ニーズ、セキュリティ Issue、再編からの技術的負債は、典型的なマイルストーンで capacity の 30% を消費します。私たちは、それが存在しないふりをするのではなく、この現実を見込んで予算化しています。

#### 計画外作業の管理

30% の計画外バジェットには以下が含まれます:

- チーム横断的な依存関係（Protocells、Dedicated、DAP など）
- セキュリティインシデントと脆弱性の修正
- 顧客エスカレーションとサポート
- 再編とドメイン移管からの技術的負債
- 緊急の対応が必要なインフラ Issue

#### 可視性 & 説明責任

**Unplanned Work Log**（毎週更新）:

- どんな計画外作業が到着したか
- 消費された capacity（eng-weeks）
- その結果何が遅れたか
- 関連するリクエストへのリンク

この可視性は説明責任を生み出し、将来のリクエストへの押し戻しを正当化するのに役立ちます。

## グループ

- [Authentication](authentication/)
- [Authorization](authorization/)
- [Compliance](compliance/)
- [Pipeline Security](pipeline-security/)

### 製品ドキュメントのリンク

- [Authentication and Authorization](https://docs.gitlab.com/administration/auth/)
- [Compliance Center](https://docs.gitlab.com/user/compliance/compliance_center/)
- [Security glossary](https://docs.gitlab.com/ee/user/application_security/terminology/)
- [Pipeline Security](https://docs.gitlab.com/ee/ci/pipelines/pipeline_security.html)

## すべてのチームメンバー

### Authentication

{{% team-by-manager-slug manager="adil.farrukh" team="Engineer(.*)Software Supply Chain Security:Authentication" %}}

### Authorization

{{% team-by-manager-slug manager="jpr0c" team="Engineer(.*)Software Supply Chain Security:Authorization" %}}

### Compliance

{{% team-by-manager-slug manager="nrosandich" team="Engineer(.*)Software Supply Chain Security:Compliance" %}}

### Pipeline Security

{{% team-by-manager-slug manager="mmishaev" team="Engineer(.+)Software Supply Chain Security:Pipeline Security" %}}

## Stable Counterparts

他の機能チームの以下のメンバーが私たちの stable counterpart です:

{{% engineering/stable-counterparts role="Software Supply Chain Security" other-manager-roles="Engineering Manager(.*)Software Supply Chain Security:(.*)|Director of Engineering(.*)Software Supply Chain Security" %}}

## Software Supply Chain Security スタッフミーティング

Software Supply Chain Security ステージのエンジニアリング部門のリーダーは、毎週 `Software Supply Chain Security staff meeting` でステージとグループのトピックについて議論します。このミーティングはすべてのチームメンバーに公開されており、Software Supply Chain Security ステージのカレンダーに掲載されています。

ミーティングにはアジェンダがあり、async-first です。議論を非同期で解決し、より多くの議論を要するトピックを深掘りする時間をミーティングに残すことを目指しています。

私たちは [Software Supply Chain Security Sub-department Board](https://gitlab.com/gitlab-com/software_supply_chain_security-sub-department/-/boards/4833026) を使って、議論をより良く整理しています。

### 週次アップデート

Software Supply Chain Security 開発チームは、Issue テンプレートと CI のスケジュールされたジョブを使って[週次ステータスアップデート](https://gitlab.com/groups/gitlab-com/-/epics/2126)を提供します。
優先順位が変わると、Engineering Manager は[テンプレート](https://gitlab.com/gitlab-com/software_supply_chain_security-sub-department/-/blob/main/.gitlab/issue_templates/sscs_stage_weekly_update.md)を更新して、優先事項、機会、リスク、セキュリティと availability の懸念などの関心領域を含めます。アップデートは GitLab 社内向けです。

### 四半期レビューアップデート

四半期ごとに、Software Supply Chain Security サブ部門の各グループの Engineering Manager が Issue テンプレートを使って四半期レビューアップデートを準備し、エンジニアリングの観点から前四半期を要約し、四半期の Product 戦略に応える次四半期のグループの高レベルの計画を提示し、次四半期の目標を説明するために約 5 分の録画を行います。

私たちは、Software Supply Chain Security サブ部門の Engineering Manager 間のコラボレーションとコミュニケーションを促進し、次四半期の製品優先事項についてグループの足並みを揃え、共に成功を祝うことを目指しています。

四半期レビューアップデートのテンプレートは[こちら](https://gitlab.com/gitlab-com/software_supply_chain_security-sub-department/-/blob/main/.gitlab/issue_templates/sscs_stage_quarterly_review.md))にあります。

### PTO

私たちは [Engineering の休暇取得プロセス](/handbook/engineering/#taking-time-off)と [GitLab team members Guide to Time Off](/handbook/people-group/time-off-and-absence/time-off-types/)に従います。

#### Engineering Leadership - PTO または不在

チームメンバーは、本番インシデントや機能変更ロックのような問題が発生し、直属のマネージャーが不在で管理側のサポートが必要な場合、`#sd_sscs_engineering` または `#sscs-development-people-leaders` でメンションして、いずれかの Software Supply Chain Security Engineering Manager に連絡すべきです。Software Supply Chain Security のマネージャーは、チームメンバーが適切な支援を受けられるよう、ガイダンスと調整を提供できます。

[Workday](https://theloop.gitlab.com/site/4455aa7f-24d9-41f2-b940-467b54962e4d/page/0fa19bf4-fd6a-41b9-9316-c2dcf3add854) や [Navan Expense](/handbook/business-technology/enterprise-applications/guides/navan-expense-guide) を含む一部のピープルマネジメントのタスクは、エスカレーションや委任が必要な場合があります。

## スキル

カバーすべきドメインが幅広いため、多くの異なる専門知識とスキルが必要です:

| 技術スキル | 関心領域    |
|-------------------|----------------------|
| Ruby on Rails     | バックエンド開発  |
| Go                | バックエンド開発  |
| Vue, Vuex         | フロントエンド開発 |
| GraphQL           | *Various*            |
| SQL (PostgreSQL)  | *Various*            |
| Docker/Kubernetes | Threat Detection     |
| [New Auth Claude Expert](https://claude.ai/project/019a0ff4-0efe-7373-af96-82a23aaac734) | New Auth Design |

## 誰もが貢献できる

GitLab では、誰もが貢献できることを目標としています。これは GitLab のチームメンバーと、コミュニティ貢献を通じたより広いコミュニティの双方に適用されます。私たちはあらゆる機能への貢献を歓迎しますが、初めての貢献者はより小さな機能から始めることを好むかもしれないと認識しています。これを支援するため、私たちは初めての貢献者や Software Supply Chain Security のドメインに新しい貢献者により適しているかもしれない `quick wins` のリストを維持しています。

貢献者が EE ライセンスを必要とする場合、Community contributors workflows ページの [Contributing to the GitLab Enterprise Edition (EE)](/handbook/marketing/developer-relations/engineering/community-contributors-workflows/#contributing-to-the-gitlab-enterprise-edition-ee) セクションを案内できます。

## テスト

マイルストーンの計画フェーズ中に、各グループの EM は[エピック](https://gitlab.com/groups/gitlab-org/quality/quality-engineering/-/epics/70)のテンプレートを使って、新しい主要な機能のために新しい Issue を作成します。エンジニアは、機能カバレッジのレビューや、必要に応じた spec や E2E テストの追加を含め、適切なレベルでテストを書く責任があります。テスト戦略と E2E テストカバレッジに関するガイダンスについては、[RFH](/handbook/engineering/infrastructure-platforms/developer-experience/#request-for-help-process)を作成して [Developer Experience](/handbook/engineering/infrastructure-platforms/developer-experience/) チームに連絡してください。

[シフトレフトと適切なレベルでのテスト](https://docs.gitlab.com/ee/development/testing_guide/testing_levels.html#how-to-test-at-the-correct-level)の意図は、チームがエンドツーエンドでテストと品質に責任を持つことです。

## リンクとリソース

{{% include "includes/engineering/software_supply_chain_security-shared-links.md" %}}

### AI と学習リソース

- [New Auth Expert Claude Project](https://claude.ai/project/019a0ff4-0efe-7373-af96-82a23aaac734) - New Auth と Code Purple イニシアチブ、設計、進捗についての回答と情報を得るための AI エキスパート
  - **注:** このプロジェクトへのアクセスには組織の Claude アクセスが必要です。チームメンバーがこのプロジェクトにアクセスするには、Claude 内の GitLab 組織の一員である必要があります。

#### New Auth Expert のプロンプト例

**アーキテクチャ & 設計**

- "What is the GATE architecture and its L0/L1/L2 layers?"
- "Explain the difference between TS (Topology Service) and IAM services"
- "What are the key architectural decisions made for Code Purple?"
- "Show me the 3-level architecture design"

**タイムライン & 成果物**

- "What's the delivery timeline for Code Yellow vs Code Purple?"
- "What are the Q2/Q3 FY27 deliverables?"
- "When will GATE be in production?"
- "What's the roadmap for token consolidation?"

**トークン & 権限**

- "What's the plan for granular Personal Access Token (PAT) permissions?"
- "How will OAuth token permissions work?"
- "Explain Workload Identity Federation timeline"
- "What are the requirements for CI/CD job tokens?"

**実装状況**

- "What POCs are currently in progress?"
- "Which features are in scope vs out of scope for Code Purple?"
- "What are the current blockers?"
- "Show me the latest weekly status notes"

**依存関係 & インフラ**

- "What infrastructure dependencies exist for GATE deployment?"
- "How does this relate to the Cells architecture?"
- "What database operations are needed?"
- "What's required for self-managed vs GitLab.com deployment?"

**サービスアカウント & マシン ID**

- "How are service accounts being consolidated?"
- "What's the plan for machine identities?"
- "When will service accounts be available on Free tier?"

**特定の Issue & エピック**

- "Find GitLab issues related to granular PAT permissions"
- "What epics are tracking Code Purple delivery?"
- "Show me recent discussions about token scopes"

**クイックステータスチェック**

- "What's the latest Code Purple status?"
- "Are there any blockers this week?"
- "What was decided in the most recent sync meeting?"

### 技術ドキュメントのリンク

- [End-to-end tests](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa/qa/specs/features/ee/browser_ui/10_govern)
