---
title: Software Supply Chain Security サブ部門
upstream_path: /handbook/engineering/development/sec/software-supply-chain-security/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

Software Supply Chain Security サブ部門のチームは、製品の [Software Supply Chain Security ステージ](https://about.gitlab.com/direction/software_supply_chain_security/) のエンジニアリングチームです。

## ビジョン

[Software Supply Chain Security ステージ](https://about.gitlab.com/direction/software_supply_chain_security/) の製品方針との整合性を通じて、GitLab の製品ビジョンを支えること。

## SSCS Charter

**Software Supply Chain Security (SSCS) ステージチームチャーター**

### 私たちのミッション

開発者の速度を維持しながら、サプライチェーン攻撃から GitLab のお客様を守ること。

私たちはソフトウェア開発ライフサイクル全体 — コードコミットから本番デプロイまで — を、すべてのアーティファクトが検証され、すべてのアクセスが認可され、すべてのリスクが可視化されるようにすることで保護します。

### 私たちの活動内容

SSCS は3つの重要な領域を保護します:

#### 1. ビルドとパイプラインのセキュリティ

- アーティファクトが信頼できるソースコードから検証可能な形でビルドされていることの保証
- SLSA 準拠とアーティファクト証明
- Runner のセキュリティと分離
- シークレット管理
- パイプラインの完全性

#### 2. アイデンティティとアクセス管理

- プラットフォーム全体で誰が何をできるかを制御
- 認証 (ユーザーがアイデンティティを証明する方法)
- 認可 (認証されたユーザーができること)
- ゼロトラストアーキテクチャ

#### 3. コンプライアンスとポリシー

- セキュリティを測定可能かつ監査可能にする
- コードとしてのセキュリティポリシー
- コンプライアンス証拠の生成
- 監査証跡と可視化

### 私たちの優先事項が GitLab 経営陣の優先事項とどう整合するか

会社レベルの優先事項を支える計画外のクロスファンクショナル業務のために、30% のキャパシティバッファを維持します。これにより、以下のような会社レベルの優先事項に対応できます:

- **GitLab Duo と AI** - DAP や AI セキュリティをブロックするもの
- **Protocells** - Cells アーキテクチャ向けの認証/認可の基盤

### 私たちのトップ 3 優先事項

#### 優先事項 1: AuthN/AuthZ のための強固なセキュリティ基盤を構築する

**目的:** セキュリティインシデントを減らす
**重要性:** あらゆるインシデントはお客様の信頼を損ない、エンジニアリングキャパシティを浪費します。

**実施していること:**

- 認証の統合 (CYCP)
- トークンセキュリティの改善
- 重要な監査ギャップ

#### 優先事項 2: エンジニアリングエクセレンス

**目的:** 高パフォーマンスかつ予測可能なエンジニアリング組織になる
**重要性:** 火消しやサポートエスカレーションに溺れていては、戦略的価値を届けられません。

**実施していること:**

- サポートエスカレーション率を 30% から 15% 未満に削減
- デリバリーへの信頼度を向上 (現在 60-70% → 85%+)

#### 優先事項 3: サプライチェーンリーダーシップ

**目的:** GitLab を最も信頼されるサプライチェーンセキュリティプラットフォームとして確立する
**重要性:** サプライチェーン攻撃は年々増加しています。GovTech や企業のようなお客様は検証可能なセキュリティを求めています。

**実施していること:**

- SLSA レベル 3 準拠
- Runner のアイデンティティと検証
- エンドツーエンドのアーティファクトとコンテナの証明
- サプライチェーン可視化ダッシュボード

### 私たちのトップ 3 優先事項が戦略的なクロスファンクショナル業務を可能にする方法

私たちの優先事項は、SSCS 内部の目標だけにとどまらず、会社の目標を支える戦略的なクロスファンクショナル業務を可能にするように設計されています。

#### 優先事項 1: 強固な基盤の構築 → プラットフォームの能力を可能にする

Code Yellow/Purple (CYCP) の認証統合とセキュリティアーキテクチャは、以下を可能にします:

- Workload Identity フェデレーション
- ProtoCells 向けの OAuth - ProtoCells が依存する認証基盤
- お客様向けの細粒度アクセス制御
- セキュアなマシンアイデンティティを基盤とするエージェント型認証

#### 優先事項 2: エンジニアリングエクセレンス → 計画外業務のキャパシティを生む

サポート負担の削減、デリバリー信頼度の改善、品質のためのキャパシティ保護は、以下を可能にします:

- より速い応答時間 - コミットメントを破ることなく緊急のリクエストにピボットできる
- より高い品質 - 戦略的業務がのちに私たちを苦しめる技術的負債を生まない
- より良い見積り - 計画外業務に使える真のキャパシティを把握できる
- 持続可能なペース - 絶え間ないコンテキストスイッチによるチームの燃え尽きを防ぐ

#### 優先事項 3: サプライチェーンリーダーシップ → エンタープライズ取引で差別化する

SLSA 準拠、Runner セキュリティ、アーティファクト証明、脅威分析、高度なコンプライアンス機能は、以下を可能にします:

- エンタープライズの信頼性 - SLSA 認証は戦略的業務に資金を提供する取引を可能にする
- コンプライアンス基盤 - DAP や ProtoCells が継承するセキュリティアーキテクチャ

### AI セキュリティ: 私たちの最新のフロンティア

#### AI セキュリティが重要な理由

AI 機能 (GitLab Duo、AI エージェント、コード生成) は、私たちのセキュリティモデルを根本的に変えつつあります:

- AI エージェントはユーザーの代わりに行動する - 複合的なアイデンティティが必要
- AI はコードを生成しリポジトリを変更する - 帰属と監査可能性が必要
- AI はお客様のデータにアクセスする - プライバシーとコンプライアンス制御が必要
- AI は組織の境界を越える - 堅牢な認可が必要

課題: 私たちは AI 機能をセキュアにすると同時に、それらが必要とするプラットフォームの能力を構築しています。これは避けられない依存関係と計画外業務を生みます。

### 私たちの働き方

#### リソース配分モデル

- **70%** - 計画された業務
- **30%** - 計画外の業務

計画外業務は例外ではなく、仕事の一部です。クロスファンクショナルな依存関係、緊急のお客様のニーズ、セキュリティ問題、再編による技術的負債は、典型的なマイルストーンでキャパシティの 30% を消費します。この現実が存在しないふりをするのではなく、私たちはこれを予算化しています。

#### 計画外業務の管理

30% の計画外予算には以下が含まれます:

- クロスファンクショナルな依存関係 (Protocells、Dedicated、DAP など)
- セキュリティインシデントと脆弱性修正
- お客様のエスカレーションとサポート
- 再編やドメイン移管による技術的負債
- 緊急対応を要するインフラ問題

#### 可視性と説明責任

**計画外業務ログ** (週次更新):

- どのような計画外業務が発生したか
- 消費されたキャパシティ (エンジニア週単位)
- その結果、何が遅延したか
- 関連リクエストへのリンク

この可視化は説明責任を生み、将来のリクエストへの押し戻しを正当化するのに役立ちます。

## グループ

- [Authentication](authentication/)
- [Authorization](authorization/)
- [Compliance](compliance/)
- [Pipeline Security](pipeline-security/)

### 製品ドキュメントへのリンク

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

以下の他の機能チームのメンバーは、私たちの stable counterpart です:

{{% engineering/stable-counterparts role="Software Supply Chain Security" other-manager-roles="Engineering Manager(.*)Software Supply Chain Security:(.*)|Director of Engineering(.*)Software Supply Chain Security" %}}

## Software Supply Chain Security スタッフミーティング

Software Supply Chain Security ステージのエンジニアリング部門リーダーは、`Software Supply Chain Security staff meeting` でステージとグループのトピックを毎週議論します。このミーティングはすべてのチームメンバーに開かれており、Software Supply Chain Security ステージのカレンダーに公開されています。

ミーティングにはアジェンダがあり、非同期ファーストで、議論を非同期で解決し、より多くの議論が必要なトピックを深掘りするための時間をミーティング中に残すことを目指しています。

[Software Supply Chain Security サブ部門ボード](https://gitlab.com/gitlab-com/software_supply_chain_security-sub-department/-/boards/4833026) を使って、議論をより良く整理しています。

### 週次アップデート

Software Supply Chain Security の開発チームは、Issue テンプレートと CI のスケジュールジョブを使って [週次ステータスアップデート](https://gitlab.com/groups/gitlab-com/-/epics/2126) を提供しています。
優先事項が変わるにつれ、エンジニアリングマネージャーは [テンプレート](https://gitlab.com/gitlab-com/software_supply_chain_security-sub-department/-/blob/main/.gitlab/issue_templates/sscs_stage_weekly_update.md) を更新して、優先事項、機会、リスク、セキュリティおよび可用性に関する懸念事項などの関心領域を含めます。アップデートは GitLab 内部向けです。

### 四半期レビューアップデート

四半期ごとに、Software Supply Chain Security サブ部門の各グループのエンジニアリングマネージャーは、Issue テンプレートを使って四半期レビューアップデートを準備し、エンジニアリングの観点から前四半期をまとめ、次四半期のグループに対する高レベルな計画を提示するために約 5 分間を録画します。これは四半期の製品戦略に応え、次四半期の目標を説明するためのものです。

私たちは、Software Supply Chain Security サブ部門のエンジニアリングマネージャー間の協業とコミュニケーションを促進し、次四半期の製品優先事項についてグループを揃え、共に成功を祝うことを目指しています。

四半期レビューアップデートのテンプレートは [こちら](https://gitlab.com/gitlab-com/software_supply_chain_security-sub-department/-/blob/main/.gitlab/issue_templates/sscs_stage_quarterly_review.md)) にあります。

### PTO

私たちは [休暇取得に関するエンジニアリングプロセス](/handbook/engineering/#taking-time-off) と [GitLab チームメンバーの休暇ガイド](/handbook/people-group/time-off-and-absence/time-off-types/) に従います。

#### エンジニアリングリーダーシップ - PTO または不在

チームメンバーは、自分の直属マネージャーが対応不可能なときに本番インシデントや機能変更ロックなどの問題に対するマネジメントサポートが必要な場合、`#sd_sscs_engineering` または `#sscs-development-people-leaders` でメンションして任意の Software Supply Chain Security エンジニアリングマネージャーに連絡してください。Software Supply Chain Security のマネージャーは、チームメンバーが適切な支援を受けられるようガイダンスと調整を提供できます。

[Workday](https://theloop.gitlab.com/site/4455aa7f-24d9-41f2-b940-467b54962e4d/page/0fa19bf4-fd6a-41b9-9316-c2dcf3add854) や [Navan Expense](/handbook/business-technology/enterprise-applications/guides/navan-expense-guide) を含む一部のピープルマネジメントタスクは、エスカレーションまたは委任が必要になる場合があります。

## スキル

カバーするドメインの範囲が広いため、多くの異なる専門知識とスキルが必要です:

| テクノロジースキル | 関心領域    |
|-------------------|----------------------|
| Ruby on Rails     | バックエンド開発  |
| Go                | バックエンド開発  |
| Vue, Vuex         | フロントエンド開発 |
| GraphQL           | *さまざま*            |
| SQL (PostgreSQL)  | *さまざま*            |
| Docker/Kubernetes | 脅威検知     |
| [New Auth Claude Expert](https://claude.ai/project/019a0ff4-0efe-7373-af96-82a23aaac734) | New Auth Design |

## 誰もが貢献できる

GitLab の目標は、誰もが貢献できることです。これは GitLab のチームメンバーと、コミュニティコントリビューションを通じた広いコミュニティの両方に適用されます。私たちはあらゆる機能への貢献を歓迎しますが、初めての貢献者はより小さな機能から始めるのを好むかもしれないことを認識しています。これをサポートするために、初めての貢献者や Software Supply Chain Security の領域に新しい貢献者により適している可能性のある `quick wins` のリストを維持しています。

貢献者が EE ライセンスを必要とする場合、コミュニティコントリビューターワークフローページの [Contributing to the GitLab Enterprise Edition (EE)](/handbook/marketing/developer-relations/engineering/community-contributors-workflows/#contributing-to-the-gitlab-enterprise-edition-ee) セクションを案内できます。

## テスト

マイルストーンの計画フェーズで、各グループの EM は、主要な新機能について [epic](https://gitlab.com/groups/gitlab-org/quality/quality-engineering/-/epics/70) のテンプレートを使って新しい Issue を作成し、Software Supply Chain Security の Software Engineer in Test をタグ付けします。Test Engineering の SET と EM は、オープン Issue のリストを定期的にレビュー/議論し、適切な優先度ラベルを追加できます。

[シフトレフトおよび適切なレベルでのテスト](https://docs.gitlab.com/ee/development/testing_guide/testing_levels.html#how-to-test-at-the-correct-level) の意図は、チームがテストに責任を持ち、エンジニアが機能カバレッジレビューを行い、必要に応じて spec や E2E テストを追加することです。SET を含める理由は、グループ全体を見渡し、ガイダンス/サポートを提供することです。SET にキャパシティがあれば、優先度ラベルに従って必要に応じて貢献できますが、これは期待される作業ではありません。

## リンクとリソース

{{% include "includes/engineering/software_supply_chain_security-shared-links.md" %}}

### AI と学習リソース

- [New Auth Expert Claude Project](https://claude.ai/project/019a0ff4-0efe-7373-af96-82a23aaac734) - New Auth と Code Purple イニシアチブ、設計、進捗に関する回答と情報を得るための AI エキスパート
  - **注:** このプロジェクトへのアクセスには組織の Claude アクセスが必要です。チームメンバーはこのプロジェクトにアクセスするために Claude の GitLab 組織に所属している必要があります。

#### New Auth Expert 向けのプロンプト例

**アーキテクチャと設計**

- "What is the GATE architecture and its L0/L1/L2 layers?"
- "Explain the difference between TS (Topology Service) and IAM services"
- "What are the key architectural decisions made for Code Purple?"
- "Show me the 3-level architecture design"

**タイムラインと成果物**

- "What's the delivery timeline for Code Yellow vs Code Purple?"
- "What are the Q2/Q3 FY27 deliverables?"
- "When will GATE be in production?"
- "What's the roadmap for token consolidation?"

**トークンとパーミッション**

- "What's the plan for granular Personal Access Token (PAT) permissions?"
- "How will OAuth token permissions work?"
- "Explain Workload Identity Federation timeline"
- "What are the requirements for CI/CD job tokens?"

**実装状況**

- "What POCs are currently in progress?"
- "Which features are in scope vs out of scope for Code Purple?"
- "What are the current blockers?"
- "Show me the latest weekly status notes"

**依存関係とインフラ**

- "What infrastructure dependencies exist for GATE deployment?"
- "How does this relate to the Cells architecture?"
- "What database operations are needed?"
- "What's required for self-managed vs GitLab.com deployment?"

**サービスアカウントとマシンアイデンティティ**

- "How are service accounts being consolidated?"
- "What's the plan for machine identities?"
- "When will service accounts be available on Free tier?"

**特定の Issue と Epic**

- "Find GitLab issues related to granular PAT permissions"
- "What epics are tracking Code Purple delivery?"
- "Show me recent discussions about token scopes"

**クイックステータスチェック**

- "What's the latest Code Purple status?"
- "Are there any blockers this week?"
- "What was decided in the most recent sync meeting?"

### 技術ドキュメントへのリンク

- [End-to-end tests](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa/qa/specs/features/ee/browser_ui/10_govern)
