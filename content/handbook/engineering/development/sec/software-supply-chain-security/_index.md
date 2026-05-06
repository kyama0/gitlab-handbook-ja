---
title: Software Supply Chain Security サブ部門
upstream_path: /handbook/engineering/development/sec/software-supply-chain-security/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T08:31:27Z"
translator: claude
stale: false
---

Software Supply Chain Security サブ部門のチームは、製品の [Software Supply Chain Security ステージ](https://about.gitlab.com/direction/software_supply_chain_security/) のエンジニアリングチームです。

## ビジョン

[Software Supply Chain Security ステージ](https://about.gitlab.com/direction/software_supply_chain_security/) の製品方向性との整合性を通じて、GitLab の製品ビジョンをサポートします。

## SSCS チャーター

**Software Supply Chain Security（SSCS）ステージチームチャーター**

### 私たちのミッション

開発者のベロシティを維持しながら、GitLab の顧客をサプライチェーン攻撃から保護します。

コードコミットから本番デプロイまでのソフトウェア開発ライフサイクル全体を保護します。すべてのアーティファクトが検証され、すべてのアクセスが認可され、すべてのリスクが可視化されるようにします。

### 私たちが行うこと

SSCS は3つの重要なサーフェスを保護します:

#### 1. ビルドとパイプラインのセキュリティ

- アーティファクトが信頼できるソースコードから検証可能にビルドされることを確実にします
- SLSA コンプライアンスとアーティファクト証明
- ランナーのセキュリティと分離
- シークレット管理
- パイプラインの整合性

#### 2. アイデンティティとアクセス管理

- プラットフォーム全体で誰が何をできるかを制御します
- 認証（ユーザーがアイデンティティを証明する方法）
- 認可（認証されたユーザーができること）
- ゼロトラストアーキテクチャ

#### 3. コンプライアンスとポリシー

- セキュリティを測定可能かつ監査可能にします
- コードとしてのセキュリティポリシー
- コンプライアンスエビデンスの生成
- 監査証跡と可視性

### 私たちの優先事項と GitLab 経営陣の優先事項との整合

会社レベルの優先事項をサポートする計画外のクロスファンクション作業のために、キャパシティの30%バッファを維持します。これにより、以下のような会社レベルの優先事項に対応できます:

- **GitLab Duo と AI** - DAP や AI セキュリティをブロックするもの
- **Protocells** - Cells アーキテクチャの認証/認可基盤

### 私たちのトップ3優先事項

#### 優先事項1: AuthN/AuthZ の強固なセキュリティ基盤の構築

**目的:** セキュリティインシデントを削減する
**重要な理由:** インシデントが発生するたびに顧客の信頼が損なわれ、エンジニアリングキャパシティが消耗します。

**私たちが行っていること:**

- 認証の統合（CYCP）
- トークンセキュリティの改善
- 重大な監査ギャップへの対処

#### 優先事項2: エンジニアリングエクセレンス

**目的:** 高いパフォーマンスで予測可能なエンジニアリング組織になる
**重要な理由:** 消火活動やサポートエスカレーションに溺れていたら、戦略的価値を提供することはできません。

**私たちが行っていること:**

- サポートエスカレーション率を30%から<15%に削減する
- 提供の確信度を改善する（現在60〜70% → 85%+）

#### 優先事項3: サプライチェーンリーダーシップ

**目的:** GitLab を最も信頼できるサプライチェーンセキュリティプラットフォームとして確立する
**重要な理由:** サプライチェーン攻撃は前年比で増加しています。GovTech などの顧客や企業は検証可能なセキュリティを要求しています。

**私たちが行っていること:**

- SLSA レベル3コンプライアンス
- ランナーのアイデンティティと検証
- アーティファクトとコンテナのエンドツーエンド証明
- サプライチェーン可視性ダッシュボード

### トップ3優先事項が戦略的なクロスファンクション作業をどのように可能にするか

私たちの優先事項は SSCS 内部の目標だけのためにあるわけではありません。会社の目標をサポートする戦略的なクロスファンクション作業を可能にするように設計されています。

#### 優先事項1: 強固な基盤の構築 → プラットフォーム能力を可能にする

Code Yellow/Purple（CYCP）認証統合とセキュリティアーキテクチャは以下を可能にします:

- ワークロードアイデンティティフェデレーション
- ProtoCells の OAuth - ProtoCells が依存する認証基盤
- 顧客向けのきめ細かいアクセス制御
- セキュアなマシンアイデンティティに基づくエージェント認証

#### 優先事項2: エンジニアリングエクセレンス → 計画外作業のキャパシティを生み出す

サポート負荷の削減、提供の確信度の改善、品質のためのキャパシティ保護により以下が可能になります:

- より速い対応時間 - コミットメントを壊さずに緊急リクエストにピボットできます
- より高い品質 - 戦略的な作業が私たちに負の遺産をもたらさない技術的負債を生み出しません
- より良い見積もり - 計画外作業のために利用可能な真のキャパシティを把握できます
- 持続可能なペース - チームが絶え間ないコンテキストスイッチングで燃え尽きません

#### 優先事項3: サプライチェーンリーダーシップ → エンタープライズ商談での差別化

SLSA コンプライアンス、ランナーセキュリティ、アーティファクト証明、脅威分析、高度なコンプライアンス機能により以下が可能になります:

- エンタープライズ信頼性 - SLSA 認定により戦略的作業の資金となる商談が可能になります
- コンプライアンス基盤 - DAP と ProtoCells が継承するセキュリティアーキテクチャ

### AI セキュリティ: 私たちの最新のフロンティア

#### AI セキュリティが重要な理由

AI フィーチャー（GitLab Duo、AI エージェント、コード生成）は私たちのセキュリティモデルを根本的に変えています:

- AI エージェントはユーザーの代わりに行動します - 複合アイデンティティが必要です
- AI はコードを生成しリポジトリを変更します - 帰属と監査可能性が必要です
- AI は顧客データにアクセスします - プライバシーとコンプライアンス制御が必要です
- AI は組織の境界を越えます - 堅牢な認可が必要です

課題: AI フィーチャーを保護しながら、同時に必要なプラットフォーム能力を構築しています。これにより避けられない依存関係と計画外の作業が生まれます。

### 私たちの働き方

#### リソース配分モデル

- **70%** - 計画作業
- **30%** - 計画外作業

計画外の作業は例外ではなく、仕事の一部です。クロスファンクションの依存関係、緊急の顧客ニーズ、セキュリティ Issue、再編による技術的負債が典型的なマイルストーンでキャパシティの30%を消費します。存在しないふりをするのではなく、この現実に予算を組みます。

#### 計画外作業の管理

30%の計画外予算には以下が含まれます:

- クロスファンクションの依存関係（Protocells、Dedicated、DAP など）
- セキュリティインシデントと脆弱性修正
- 顧客エスカレーションとサポート
- 再編とドメイン移転による技術的負債
- 緊急対応が必要なインフラ Issue

#### 可視性と説明責任

**計画外作業ログ**（週次更新）:

- 到着した計画外作業
- 消費されたキャパシティ（エンジニア週単位）
- 結果として遅延したもの
- 関連リクエストへのリンク

この可視性が説明責任を生み出し、将来のリクエストに対するプッシュバックを正当化するのに役立ちます。

## グループ

- [Authentication](authentication/)
- [Authorization](authorization/)
- [Compliance](compliance/)
- [Pipeline Security](pipeline-security/)

### 製品ドキュメントリンク

- [Authentication and Authorization](https://docs.gitlab.com/administration/auth/)
- [Compliance Center](https://docs.gitlab.com/user/compliance/compliance_center/)
- [Security glossary](https://docs.gitlab.com/ee/user/application_security/terminology/)
- [Pipeline Security](https://docs.gitlab.com/ee/ci/pipelines/pipeline_security.html)

## 全チームメンバー

### Authentication


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/sec/software-supply-chain-security/#pipeline-security" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### Authorization


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/sec/software-supply-chain-security/#pipeline-security" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### Compliance


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/sec/software-supply-chain-security/#pipeline-security" rel="external noopener">原文 (英語)</a> を参照してください。</p>


### Pipeline Security


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/sec/software-supply-chain-security/#pipeline-security" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 安定したカウンターパート

他の機能チームの以下のメンバーが私たちの安定したカウンターパートです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/development/sec/software-supply-chain-security/#pipeline-security" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## Software Supply Chain Security スタッフミーティング

Software Supply Chain Security ステージのエンジニアリング部門リーダーは、`Software Supply Chain Security スタッフミーティング` でステージとグループのトピックを議論するために週次で集まります。このミーティングはすべてのチームメンバーに開かれており、Software Supply Chain Security ステージカレンダーに公開されています。

ミーティングにはアジェンダがあり、非同期ファーストで行われます。目標は議論を非同期で解決し、ミーティング時間をより深い議論が必要なトピックのために残すことです。

私たちは [Software Supply Chain Security サブ部門ボード](https://gitlab.com/gitlab-com/software_supply_chain_security-sub-department/-/boards/4833026) を使用して議論をより整理します。

### 週次更新

Software Supply Chain Security 開発チームは、Issue テンプレートと CI スケジュールジョブを使用して [週次ステータス更新](https://gitlab.com/groups/gitlab-com/-/epics/2126) を提供します。
優先事項が変わるにつれて、エンジニアリングマネージャーは優先事項、機会、リスク、セキュリティと可用性の懸念事項などの関心領域を含めるために [テンプレート](https://gitlab.com/gitlab-com/software_supply_chain_security-sub-department/-/blob/main/.gitlab/issue_templates/sscs_stage_weekly_update.md) を更新します。更新は GitLab 内部向けです。

### 四半期レビュー更新

毎四半期、Software Supply Chain Security サブ部門の各グループのエンジニアリングマネージャーが、Issue テンプレートを使用して四半期レビュー更新を準備し、エンジニアリングの観点から前四半期を要約し、次の四半期の製品戦略への対応と次の四半期のグループの目標を説明する高レベルの計画を提示するために約5分間を録画します。

Software Supply Chain Security サブ部門のエンジニアリングマネージャー間のコラボレーションとコミュニケーションを育て、次の四半期の製品優先事項についてグループを整合させ、一緒に成功を祝うことを目指しています。

四半期レビュー更新テンプレートは[こちら](https://gitlab.com/gitlab-com/software_supply_chain_security-sub-department/-/blob/main/.gitlab/issue_templates/sscs_stage_quarterly_review.md)から入手できます。

### PTO

私たちは [休暇を取るためのエンジニアリングプロセス](/handbook/engineering/#taking-time-off) と [GitLab チームメンバーの休暇ガイド](/handbook/people-group/time-off-and-absence/time-off-types/) に従います。

#### エンジニアリングリーダーシップ - PTO または不在

チームメンバーは、本番インシデントやフィーチャーチェンジロックなど、直属のマネージャーが不在の場合に問題が発生した際に管理サポートが必要な場合は、`#sd_sscs_engineering` または `#sscs-development-people-leaders` でメンションして Software Supply Chain Security エンジニアリングマネージャーに連絡してください。Software Supply Chain Security マネージャーは、チームメンバーが適切なサポートを受けられるよう指導と調整を提供できます。

[Workday](https://theloop.gitlab.com/site/4455aa7f-24d9-41f2-b940-467b54962e4d/page/0fa19bf4-fd6a-41b9-9316-c2dcf3add854) や [Navan Expense](/handbook/business-technology/enterprise-applications/guides/navan-expense-guide) などの一部の人事管理タスクでは、エスカレーションまたは委任が必要になる場合があります。

## スキル

カバーする必要があるドメインが広範なため、さまざまな専門知識とスキルが必要です:

| テクノロジースキル | 関心領域 |
|-------------------|----------------------|
| Ruby on Rails     | バックエンド開発 |
| Go                | バックエンド開発 |
| Vue, Vuex         | フロントエンド開発 |
| GraphQL           | *さまざま* |
| SQL (PostgreSQL)  | *さまざま* |
| Docker/Kubernetes | 脅威検出 |
| [New Auth Claude Expert](https://claude.ai/project/019a0ff4-0efe-7373-af96-82a23aaac734) | 新しい認証設計 |

## 誰でも貢献できます

GitLab では [誰でも貢献できる](/handbook/company/mission/#contribute-to-gitlab-application) ことが目標です。これは GitLab チームメンバーとコミュニティ貢献を通じた広いコミュニティに適用されます。私たちはすべてのフィーチャーへの貢献を歓迎しますが、初めてのコントリビュータはより小さなフィーチャーから始めることを好む場合があることを認識しています。これをサポートするために、Software Supply Chain Security のドメインに初めて参加するコントリビュータや初めてのコントリビュータに適した `quick wins` のリストを維持します。

コントリビュータが EE ライセンスを必要とする場合は、コミュニティコントリビュータワークフローページの [GitLab Enterprise Edition（EE）への貢献](/handbook/marketing/developer-relations/engineering/community-contributors-workflows/#contributing-to-the-gitlab-enterprise-edition-ee) セクションを案内できます。

## テスト

マイルストーンのプランニングフェーズ中、各グループの EM は [エピック](https://gitlab.com/groups/gitlab-org/quality/quality-engineering/-/epics/70) のテンプレートを使用して新しい Issue を作成し、主要な新フィーチャーに Software Supply Chain Security の Software Engineer in Test をタグ付けします。Test Engineering の SET と EM は定期的にオープンな Issue のリストをレビュー/議論し、適切な優先度ラベルを追加できます。

[左シフトと適切なレベルでのテスト](https://docs.gitlab.com/ee/development/testing_guide/testing_levels.html#how-to-test-at-the-correct-level) の意図は、チームがテストに責任を持ち、エンジニアがフィーチャーカバレッジレビューを行い、必要に応じてスペックや E2E テストを追加することです。SET を含める理由は、グループ全体の監視を提供し、指導/サポートを行うためです。SET にキャパシティがある場合は優先度ラベルを使用して必要に応じて貢献できますが、これは期待されていません。

## リンクとリソース


<!-- include omitted: includes/engineering/software_supply_chain_security-shared-links.md (no localized version under content/ja/) -->


### AI と学習リソース

- [New Auth Expert Claude Project](https://claude.ai/project/019a0ff4-0efe-7373-af96-82a23aaac734) - New Auth と Code Purple イニシアティブ、設計、進捗に関する回答と情報を得るための AI エキスパート
  - **注意:** このプロジェクトへのアクセスには組織の Claude アクセスが必要です。チームメンバーはこのプロジェクトにアクセスするために Claude の GitLab 組織のメンバーである必要があります。

#### New Auth Expert のプロンプト例

**アーキテクチャと設計**

- "GATE アーキテクチャとその L0/L1/L2 レイヤーとは何ですか？"
- "TS（トポロジーサービス）と IAM サービスの違いを説明してください"
- "Code Purple のために行われた主要なアーキテクチャ上の決定は何ですか？"
- "3レベルのアーキテクチャ設計を見せてください"

**タイムラインと成果物**

- "Code Yellow と Code Purple の提供タイムラインは何ですか？"
- "Q2/Q3 FY27 の成果物は何ですか？"
- "GATE はいつ本番環境に入りますか？"
- "トークン統合のロードマップは何ですか？"

**トークンとパーミッション**

- "粒度の細かい Personal Access Token（PAT）パーミッションの計画は何ですか？"
- "OAuth トークンのパーミッションはどのように機能しますか？"
- "Workload Identity Federation のタイムラインを説明してください"
- "CI/CD ジョブトークンの要件は何ですか？"

**実装状況**

- "現在進行中の POC は何ですか？"
- "Code Purple のスコープ内とスコープ外のフィーチャーはどれですか？"
- "現在のブロッカーは何ですか？"
- "最新の週次ステータスノートを見せてください"

**依存関係とインフラ**

- "GATE デプロイにはどのようなインフラ依存関係がありますか？"
- "これは Cells アーキテクチャとどのように関連していますか？"
- "どのようなデータベース操作が必要ですか？"
- "セルフマネージド vs GitLab.com デプロイに何が必要ですか？"

**サービスアカウントとマシンアイデンティティ**

- "サービスアカウントはどのように統合されていますか？"
- "マシンアイデンティティの計画は何ですか？"
- "サービスアカウントはいつ Free ティアで利用可能になりますか？"

**特定の Issue とエピック**

- "粒度の細かい PAT パーミッションに関連する GitLab Issue を見つけてください"
- "Code Purple の提供を追跡しているエピックはどれですか？"
- "トークンスコープに関する最近の議論を見せてください"

**クイックステータスチェック**

- "最新の Code Purple ステータスは何ですか？"
- "今週にブロッカーはありますか？"
- "最近の同期ミーティングで何が決まりましたか？"

### 技術ドキュメントリンク

- [End-to-end tests](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa/qa/specs/features/ee/browser_ui/10_govern)
