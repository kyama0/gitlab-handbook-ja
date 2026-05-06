---
title: エンジニアリング
upstream_path: /handbook/engineering/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

[GitLab プロダクトチーム](/handbook/product/) はプラットフォームを拡張するための「何を (What)」(顧客のニーズ) と「なぜ (Why)」(ビジネス戦略) を見据え、エンジニアリングはプラットフォームリリースの「どのように (How)」(技術的実装) と「いつ (When)」(スケジューリング) を決定します。このページのコンテンツでは、私たちが GitLab でどのようにエンジニアリングを行っているかを説明します。

## エンジニアリングの方向性

GitLab には 3 か年戦略があり、エンジニアリング部門のすべてのメンバーがその達成に貢献することを楽しみにしています。新しいものを作るにせよ、既存のものを改善するにせよ、スケーラビリティ、ユーザビリティ、レジリエンス、システムアーキテクチャの改善を通じて、プロダクトの方向性に影響を与える最良のアイデアを発信できると感じてほしいと思います。そして特定の分野で知識を広げる必要があると感じたときは、スキルを学び向上させるためのリソースが用意されていることを知っておいてください。

私たちの焦点は、GitLab があらゆる能力でエンタープライズグレードであることを保証し、AI 機能を一般提供 (GA) に正常にローンチするために必要な AI の取り組みをサポートすることです。

GitLab がエンタープライズグレードであることを保証するには、複数のチームが協力して、GitLab Dedicated および Cells インフラストラクチャに関する継続的な作業を通じて、ディザスタリカバリとサポート提供を改善する必要があります。ここでの目標は、可用性とサービス復旧の改善です。

## エンジニアリング文化

GitLab のエンジニアリング文化は、すべて [GitLab Values](/handbook/values/) に由来するプロセス、ワークフロー、原則、優先順位を包含しています。これらすべてが、私たちのエンジニアリングのクラフトマンシップを継続的に強化し、エンジニアがエンジニアリングの卓越性を達成しながら、プロダクト、人々、会社全体に重要かつポジティブな影響を与え、成長することを可能にします。私たちのエンジニアリング文化は、主に知識の共有とコラボレーションを通じて運ばれ、進化しています。GitLab では誰でも貢献できるため、誰もがこのプロセスの一部になることができます。

### エンジニアリングの卓越性

エンジニアリングの卓越性は、ソフトウェア製品を構築する際にエンジニアリング効率、ソフトウェア品質を向上させ、より良い結果を提供するための内発的な動機付けと定義できます。エンジニアリングの卓越性は、強いエンジニアリング文化と「誰もが貢献できるより良いソフトウェアを構築する」というミッションの組み合わせによって支えられています。

### エンジニアリング・イニシアチブ

エンジニアリングは、GitLab プロジェクトのパフォーマンス、可用性、セキュリティの第一の擁護者です。プロダクトマネジメントがエンジニアリング時間の 60% を優先順位付けするため、エンジニアリング機能の全員がプロダクトマネジメントの[優先順位付けプロセス](/handbook/product/product-processes/cross-functional-prioritization/)に参加し、これらの分野でプロジェクトが先んじていることを確認する必要があります。エンジニアリングは時間の 40% を、プロダクト、基盤となるプラットフォーム、私たちが使用する基礎技術を改善するイニシアチブに優先します。

40% の時間予算での作業は、チームのエンジニアリングマネージャーが調整し、優先順位付けする必要があります。Issue や MR のうちこの時間で行うものには `Engineering Time` ラベルを使用してください。これによりエンジニアリング部門全体で作業と結果を追跡できます。

- 広範なエンジニアリング・イニシアチブへの貢献およびワーキンググループ関連タスクへの参加。
- サポートチームからの修正のレビュー。これらのマージリクエストには `Support Team Contributions` ラベルが付与されています。[オープンな MR をフィルタリング](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?label_name%5B%5D=Support%20Team%20Contributions)できます。
- [Issue トリアージ](/handbook/product-development/how-we-work/issue-triage/) の結果としての高優先度 Issue への取り組み。これはコミュニティへの私たちのコミットメントであり、コミュニティから提起された MR のレビューや欠陥の修正のための一定の能力を含める必要があります。
- 機能や依存関係 (基盤となるインフラストラクチャを含む) のパフォーマンス、安定性、スケーラビリティの改善。これも、プロダクトチームがこれらの Issue の定義に関与する必要がありますが、エンジニアリングが推奨される改善を計画、優先順位付け、調整することでリードする場合があります。
- 効率を高めるためのツールチェーンの改善とアップグレード。
- コードベースの改善: 技術的負債の除去、古い依存関係の更新または置き換え、ロギングおよびモニタリング機能の強化。
- 新技術、機能強化、新たな可能性の徹底的な探求のための Proof-of-Concept モデルの構築。
- 内部のコミュニティ貢献という意味で、プロダクトの改善や機能強化に取り組み、現在バックログで低優先度に割り当てられているすぐ着手できるアイテムに焦点を当てて、内部のエンジニアリング生産性を向上させる。

### エンジニアリング・イノベーション

エンジニアリング・イノベーションは、エンジニアが新しいアイデアと Proof-of-Concept を探求することを奨励する、個人または小規模チームのコラボレーションを目的とした新しいプロセスです。これらのプロジェクトは通常、リーンで、時間制限があり、イテレーティブで、アイデアが実現可能な実験的機能や製品に発展する可能性があるかどうかを検証するように設計されています。[GitLab における Innovation ガイド](./workflow/engineering-innovation.md)を参照してください。

### テクニカルロードマップ

40% 時間予算の上記の例の一部は、グループの長期的なテクニカルロードマップを形成し、全体的なビジネス目標をサポートするために技術的な作業をどのように優先順位付けするのが最適かを判断するのに役立ちます。上記の例に加えて、以下を行います。

- 自分自身に次の質問をしてください
  - 最も頻繁な遅延の原因は何ですか？(開発中に対処する必要がある長年の技術的負債、ドメイン用のレビュアーの不足、パイプライン期間のようなチーム外の要因など)
  - 特定の領域に起因して常に発生する類似のバグやセキュリティ問題はありますか？
  - チームで何らかの領域のリファクタリングについて話し合っていますか？
  - チームが特定のプロセスに苦労していますか？
  - より大きな問題を示唆する最近のインシデントがありましたか？
  - 特定の領域でのヘルプの依頼を頻繁に受けていますか？
  - チームが頻繁に成果物のコミットメントを逃していますか？何が役に立つでしょうか？
  - あなたの領域には、パフォーマンス (遅いエンドポイント、一貫性のない応答、断続的なエラー) またはスケーラビリティ (機能や領域が現状ではスケールしない) の懸念がありますか？
  - 最大の不安定性はどこに見られますか？あなたの領域に関するフィードバックについて、運用とサポートに話しましたか？
  - アプリケーションまたはレートリミットを適切な場所に配置していますか？
  - セキュリティ、是正措置、infradev Issue を消化しましたか？
  - エラー予算は緑色ですか？
  - 機能フラグはコードベースから削除されましたか？
  - 適切なユニットテスト、統合テスト、E2E カバレッジがありますか？
  - 機能に関する適切なドキュメントがありますか？
  - 機能の適切なテレメトリ、ロギング、モニタリングがありますか？
  - 高速で容易な診断を可能にする適切なエラーハンドリングとエラーコードがありますか？
- このようなデータを収集してください
  - Master:Broken Issue
  - ~"severity::1" および ~"severity::2" バグ
  - Missed-Slo Issue
  - Flaky test Issue
  - ~"type::maintenance" Issue
- プロダクトの将来の状態について考えてください
  - 来年の今頃、プロダクトをどこに置きたいですか？
  - それを達成するための技術的要件は何ですか？
  - 研究/POC から恩恵を受ける技術的トピックは何ですか？
  - もはや要因でなくなれば、それを達成するのが容易になるものは何ですか？
  - これらの問題に対処することで、パフォーマンスおよび/またはビジネスへの影響はどうなりますか？
  - テクニカルロードマップを定期的にレビューするためのチームプロセスをどのように進化させますか？

#### テクニカルロードマップのプロセス

エンジニアリングマネージャー (EM) は、チームのテクニカルロードマップのバックログを協力して開発する責任があります。すべてのアイテムは「Technical Roadmap」ラベルを使用してエピックと Issue としてドキュメント化する必要があります。

グローバルなイニシアチブが定義され、各グループのロードマップと優先順位付けに組み込まれる必要があります (例: フロントエンドの能力の 40% を Vue アップグレードに割り当てる、特定の領域の Cells Issue をマイルストーン XYZ までに完了する)。

アイテムの優先順位付けは以下と整合させる必要があります。

1. 一般的なビジネス目標
2. エンジニアリングのビジョン
3. チームの能力と専門知識

計画ガイドライン:

- 通常のマイルストーン計画プロセスでテクニカルロードマップアイテムに全体時間予算の 40% を割り当てます。
- すべての関連 Issue に「Technical roadmap」ラベルを使用して、追跡と調整を容易にします。

主要なステップ:

1. 技術的負債と改善機会を特定し、ドキュメント化する
2. 各アイテムの影響と労力を評価する
3. ビジネス価値と戦略的整合性に基づいて優先順位付けする
4. 既存のイテレーション/マイルストーン計画と統合する
5. ロードマップを定期的にレビューし、調整する

このプロセスは、機能開発と技術的改善のバランスのとれたアプローチを保証し、エンジニアリング組織の長期的な持続可能性と効率を促進します。

### コミュニティ貢献

私たちには、新しいステージを成熟させ、ロードマップにない顧客が望む機能を追加し、さらにはプロダクトを複数の言語に翻訳する手段として、[月間 1,000 人の貢献者に到達する](/handbook/company/strategy/#2-build-on-our-open-core-strength) という 3 か年目標があります。

### ダイバーシティ {#diversity}

[多様なチームはより良いパフォーマンスを発揮します](https://www.cio.com/article/189194/5-ways-diversity-and-inclusion-help-teams-perform-better.html)。それらは、より高いレベルの信頼、より良い意思決定、そしてより大きな人材プールにつながる帰属意識を提供します。[また、事実により重点を置き、事実をより慎重に処理し、よりイノベーティブです](https://hbr.org/2016/11/why-diverse-teams-are-smarter)。グローバルに採用し、エンジニアリング部門の女性および過小代表のグループ (URG) の数を増やすことで、誰もが最高の自分を仕事に持ち込めるよう支援しています。

### チームの成長

戦略的な採用は最優先事項であり、私たちのプロダクトに情熱を持ち、市場で最高の DevSecOps ツールにするスキルを持つ人々を採用し続けることに興奮しています。現在の重点分野には、オファーから入社日までの時間を短縮することと、多様なチームを採用することが含まれます (上記の[ダイバーシティ](#diversity)を参照)。また、各役職に最適な候補者を特定するのに役立つ一貫した面接プロセスを確保するため、構造化、行動、状況面接などの業界標準のアプローチも実施しています。マネージャーが採用に費やす時間と、現在のチームメンバーへの投資に費やす時間のバランスを取る中で、リクルーティング組織と提携できることに興奮しています。

### 深さと安定性を通じた顧客重視の拡大

予想通り、私たちの焦点の大部分はプロダクトの改善にあります。

**エンタープライズ顧客**向けに、顧客が SaaS プラットフォームから当然要求するセキュリティと信頼性のレベルを満たすようにプロダクトを洗練しています _(SaaS Reliability)_。また、独自の DevOps トランスフォーメーションに関連する機能を発見できるよう、より堅牢な使用状況メトリクスを提供し _(Usage Reporting)_、Sales や Support に連絡する時間を費やすことなくライセンスを購入・管理する機能を提供しています _(E-Commerce and Cloud Licensing)_。最後に、エンタープライズ顧客の要望に応えて、Suggested Reviewers、Work Items を通じたより良いポートフォリオ管理、ユーザーの受動的なアクションへの追加の可視性を提供する Audit Events をサポートする機能を追加しています。

**Free ユーザー**向けには、オープンコア提供をより効率的にし、学生、スタートアップ、教育機関、オープンソースプロジェクト、GitLab 貢献者、非営利団体への支援と還元を継続できるようにしています。

**連邦機関**向けには、SaaS 提供で要求されるセキュリティ基準への信頼を強化するため、FedRAMP 認証を取得しています。これは、米国の連邦機関が私たちのプロダクトを使用するための必須の前提条件です。

**ホスト顧客**向けには、Workspace イニシアチブを通じて Self-Managed と GitLab Hosted 環境の機能パリティをサポートしています。また、シングルテナント環境のセキュリティとパフォーマンスを備えたクラウドの柔軟性を望む顧客向けに GitLab Dedicated を立ち上げています。

**CI/CD** を使用する顧客向けには、利用可能な Runner のタイプを macOS、Linux/Docker、Windows を含むよう拡張し、ビルドエージェントをオートスケーリングしています。

### 休暇の取得


{{% note %}}
このプロセスは、隣接する祝日 (週末を除く) を含む 5 営業日連続以上の PTO に対して期待されます。5 営業日未満の PTO の場合 (5 営業日未満の PTO ブロックが複数あり、間に数営業日が挟まれているケースを含む)、coverage Issue は必要ありませんが、特にチームの継続性と個人の柔軟性のバランスを取るのに役立つ場合は、任意の長さの PTO に対して coverage Issue を提出できます。
{{% /note %}}


ビジネスの継続性を確保し、コミットメントを実現するため、エンジニアリング部門は PTO Coverage Issue Process を採用しています。このようなプロセスは GitLab で既に正式化されており (例: [PM Coverage Issue](/handbook/product/product-management/product-manager-role/#creating-a-pm-coverage-issue))、エンジニアリング内の一部のチームでは管理職以上のレベルで定期的に実施されています。これにより、チームの残りに悪影響を与えることなく、休暇を通じてチームメンバーのウェルビーイングをサポートし続けることができます。

PTO Coverage Issue は適切な職位レベルで必要です。下位の職位レベル以下では PTO Coverage Issue は推奨されます — (すべてのレベルにとって) 含めるアイテムが最小限であっても、PTO Coverage Issue を作成するプロセスを経ることに価値があり、自分が抱えていることと PTO がそれらのアイテムに与える影響について考えることを強制するためです。したがって、結果として作業が待機するか、代理 DRI として誰かが指名されるかにかかわらず、決定が明示的でドキュメント化されます。

マイルストーンの計画が完了したら ([**マイルストーン開始の 5 日前の月曜日**](/handbook/engineering/workflow/#product-development-timeline) を参照)、隣接する祝日 (週末を除く) を含む 5 営業日連続を超える期間の PTO は要求できません。これは、そのマイルストーンの計画を妨げないためです。これには例外がありますが、すべてマネージャーと相談する必要があります。例には以下が含まれます。

- 緊急シナリオ
- チーム/個人がマイルストーンの早い段階で目標を達成した場合 ([私たちは活動ではなく影響を測定します](/handbook/values/#measure-impact-not-activity))
- チームメンバーがこの長さの PTO を取る強い必要性

これらの Issue は、チームがマイルストーンを計画する際に、コミットされた作業が利用可能なスタッフで達成できるか、またはそれらのコミットメントを達成するスタッフが不足する場合に、顧客に成果を提供するために何ができるかをチームメンバーと協力して確認するための情報提供に役立ちます。

以下のプロセスは、チームメンバーのマネージャーとの調整を明示的にすることで、[Flexible PTO Policy](/handbook/people-group/time-off-and-absence/time-off-types/) を明確にし拡張します。

#### 1. エンジニアリング coverage Issue の作成

[この Issue テンプレート](https://gitlab.com/gitlab-com/engineering-division/pto-coverage/-/issues/new)を使用して、引き継ぎの責任を定義する必要があります。長期休暇の場合、不在中に意思決定を行える 1 人以上の Directly Responsible Individual (DRI) を見つけることが重要です。これは、マネージャー、別のエンジニア、またはチームのプロダクトマネージャーかもしれません。coverage Issue には、不在中に DRI が良い決定を下すために必要なすべての情報を含める必要があるため、必要なだけ詳細を含めるようにしてください。coverage Issue では、作業への影響の見積もり、特定された緩和策、および coverage の代替案を強調する必要があります。

coverage Issue に色を付けるために追加のコンテキストを共有する必要がある場合は、詳細をカバーする特定の引き継ぎミーティングを検討できます。

coverage タスクの割り当てのためのクロスファンクショナルなチームメイトの能力を検討する際は、マネージャーや他のステークホルダーと協力することが推奨されます。たとえば、PM、EM、PD は顧客やユーザーを含むプロダクトエリアの共通の知識を持つため、互いをカバーするのに最適ですが、PM のチームメイトはエンジニアリング固有の責任をカバーするための帯域幅や専門知識を持っていない場合があります。あるいは、エンジニアのマネージャーまたは同じステージの別のエンジニアが coverage を支援する方が良い場合もあります。チームとマネージャー間で必要な会話を行う計画を立ててください。

#### 2. エンジニアリング coverage Issue をマネージャーと共有する

エンジニアリング coverage Issue を提出したら、マイルストーン計画の前にマネージャーと共有して、マネージャーがレビューおよび承認できるようにしてください。必要な通知期間については、[PTO ポリシーの最新ガイダンス](/handbook/people-group/time-off-and-absence/time-off-types/) を確認してください。

新しいコミットメントが計画した PTO に影響されるかどうかを検討してください。チームメンバーが何かに遅れた場合、コミットメントの成功を確実にするために coverage プランを用意する必要があります。

#### 3. マネージャーが coverage Issue をレビューする

チームメンバーが coverage Issue をマネージャーと共有したら、マネージャーは coverage Issue をレビューし、必要に応じてステークホルダーや影響を受けるプロジェクト DRI と仮定を検証します。

マネージャーは承認の決定を下すか、異なる調整やその他のコンティンジェンシープランについて話し合います。マネージャーが coverage Issue 上で休暇を承認するチェックボックスをオンにしたら、Workday に休暇を入力します。

#### 4. 休暇を伝達する

チームメンバーの coverage Issue が承認された後、チームメンバーは [休暇を伝達](/handbook/people-group/time-off-and-absence/time-off-types/) し、coverage Issue へのリンクを含めて Deel/Workday に PTO を入力します。チームメンバーは、マイルストーン計画の前に Slack チャンネル、GitLab ステータスなどを介して関連する同僚と coverage Issue を共有します。

#### 5. 休暇を取る

切断して、必要な休暇を取ってください！

#### 6. 休暇からの復帰

休暇からの復帰は圧倒的で大変なことがあります。DRI と協力して、不在中に何が変わったか、現在の優先事項が何かを理解してください。また、追いついている最中なので応答時間が遅くなる可能性があることを透過的に伝えてください。[休暇後の仕事への戻り方](/handbook/people-group/time-off-and-absence/time-off-types/) に関する追加のヒントもあります。

## エンジニアリング部門

エンジニアリング部門には 5 つの部署があります。

- [DevOps Engineering 部署](/handbook/engineering/devops/)
- [AI Engineering 部署](/handbook/engineering/ai/)
- [Sec 部署](/handbook/engineering/development/sec/)
- [Infrastructure Platforms](/handbook/engineering/infrastructure-platforms/)
- [Support Engineering 部署](/handbook/support/)

## その他の関連ページ

- [CTO Leadership Team](/handbook/engineering/cto-leadership-team/)
- [Database Engineering](/handbook/engineering/development/database/)
- [Development Principles](/handbook/engineering/development/principles/)
- [Engineering Metrics](/handbook/product/groups/product-analysis/engineering/dashboards/)
- [Engineering READMEs](/handbook/engineering/readmes/)
- [Frequently Used Projects](/handbook/engineering/projects/)
- [GitLab Innovation Program](/handbook/legal/patent-program/) (GitLab 法務チームが管理)
- [Mentorship](/handbook/people-group/learning-and-development/mentor/)
- [Pajamas Design System](/handbook/product/ux/pajamas-design-system/)
- [R&D Tax Credit Applications](/handbook/engineering/tax-credits)

### ワークフロー

- [Engineering Workflow](/handbook/engineering/workflow/)
  - [Code Review](/handbook/engineering/workflow/code-review/)
  - [Security Issues](/handbook/engineering/workflow/#security-issues)
  - [Architecture Design](/handbook/engineering/architecture/workflow/)
  - [Root Cause Analysis](/handbook/engineering/workflow/root-cause-analysis/)
  - [Strategic Priority Codes](/handbook/engineering/workflow/strategic-priority-codes/)
  - [Automation](/handbook/engineering/workflow/automation/)
  - [GitLab Repositories](/handbook/engineering/workflow/gitlab-repositories/)
  - [Hiring](/handbook/engineering/workflow/hiring/)
  - [Demos](/handbook/engineering/workflow/demos/)
  - [Cross-Functional Prioritization](/handbook/engineering/workflow/cross-functional-prioritization/)
  - [Developer Onboarding](/handbook/engineering/workflow/developer-onboarding/)
  - [Engineering Communication](/handbook/engineering/workflow/engineering-comms/)
  - [Development Processes](/handbook/engineering/workflow/development-processes/)
  - [Development Onboarding](/handbook/engineering/workflow/development-onboarding/)
- [Issue Triage Policies](/handbook/product-development/how-we-work/issue-triage/)
- [Contributing to Go projects](https://docs.gitlab.com/ee/development/go_guide/index.html)
- [Wider Community Merge Request Triage Policies](/handbook/engineering/infrastructure-platforms/developer-experience/merge-request-triage/)
- [Unplanned Critical Patch releases](/handbook/engineering/releases/patch-releases/#patch-release-types)
- [Incident Management](/handbook/engineering/infrastructure-platforms/incident-management/)

### 本番環境の GitLab

- [Workflow Diagram](/handbook/engineering/workflow/related-workflows/)
- [Error Budgets](/handbook/engineering/error-budgets/)
- [Performance of GitLab](/handbook/engineering/performance/)
- [Monitoring of GitLab.com](/handbook/engineering/monitoring/)
- [Production Readiness Guide](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/.gitlab/issue_templates/production_readiness.md)

### 人材マネジメント

- [Engineering Career Development](/handbook/engineering/careers/)
- [Engineering Career Mobility Principles](/handbook/engineering/careers/#mobility-principles)
- [Emerging Talent @ GitLab](/handbook/hiring/)
- [Engineering Management](/handbook/engineering/careers/management/)

### クロスファンクショナルな優先順位付け

詳細については、[Cross-Functional Prioritization ページ](/handbook/engineering/workflow/cross-functional-prioritization) を参照してください。

### SaaS Availability 週次スタンドアップ {#saas-availability-weekly-standup}

高可用性を維持するため、エンジニアリングは週次の SaaS Availability スタンドアップを実施しています。

- 高重要度 (S1/S2) のパブリック向けインシデントのレビュー
- 重要な SaaS メトリクスのレビュー
- 是正措置の進捗を追跡
- [Feature Change Locks](#feature-change-locks) の進捗を追跡

病院で実施される Rounds と同様に、このミーティングはエンジニアリングリーダーシップにすべての GitLab プラットフォームの信頼性のレビューを提供し、部門横断的な議論と意思決定を可能にすることを目的としています。

- [SaaS Availability Meeting Agenda](https://docs.google.com/document/d/1vCPb5VsF0nldiVVAfQXWegeNrvejvxn07TxorTn8E-Y/edit?usp=sharing)

毎週、エンジニアリング部門のチームがインシデントと主要なメトリクスについて報告します。

1. インシデントレビュー
   - Page Volume - 対応するチームへのストレスを示します
   - 高重要度インシデント (S1/S2) - すべての GitLab プラットフォームが直面する課題の可視性を高めます
1. [Capacity Planning](/handbook/engineering/infrastructure-platforms/capacity-planning/)
   - P1 および P2 Issue や各 GitLab プラットフォームのその他のハイライトが提起されます。
1. アクション概要
   - 各部署からの期限切れ S1/S2 [infradev Issue](/handbook/engineering/workflow/#infradev)
    [アジェンダ](https://docs.google.com/document/d/164hNObllaLWosG110-A0UouYlcaqOxbPpHATFD38_Gw/edit#heading=h.59wtcja0o8t7) に以下のグラフのスクリーンショットを含めてください。
   - [Feature Change Locks](#feature-change-locks) - FCL に入っている各チームが更新を提供します
1. ディスカッションとディープダイブ - 特定の部門横断的なディスカッション

### Feature Change Locks {#feature-change-locks}

Feature Change Lock (FCL) は、GitLab プラットフォームの信頼性と可用性を改善するためのプロセスです。FCL は、License App、Customers Dot、Versions を含む任意の GitLab プラットフォーム (GitLab.com または Dedicated) のすべての S1 および S2 重要度インシデントに対して発令されます。

すべての例外は VP of Engineering の承認が必要です。FCL 例外の理由には以下が含まれる場合があります。

- インシデントにパブリック向けの影響がなかった
- インシデントがエンジニアリング部門の変更によって引き起こされなかった

関与する [チーム](/handbook/company/structure/#organizational-structure) はサービスまたは機能のオーナーです。チームは FCL の調整と完了の両方に責任があります。チームのマネージャーは以下の責任を負います。

- FCL の下で作業するエンジニアグループを編成する。デフォルトでは、これは所有チームになりますが、全員に十分な作業がない場合は縮小されたグループになる場合があります。
- FCL を計画し実行する。
- マネージャー (例: シニアマネージャー / ディレクター) およびプロダクトのカウンターパートに、チームが FCL に注力することを通知し、これがキャパシティプランニングに影響を与える可能性があることを伝える。
- [SaaS Health Review](/handbook/engineering/infrastructure-platforms/saas-health-review) で更新を提供する。

アクティブな [borrow](/handbook/product/product-processes/pm-procedures/#borrow) に関与している直属部下は、変更の作成者またはレビュアーであった場合に含める必要があります。

その目的は、チーム内でオーナーシップと説明責任の感覚を育むことですが、これは私たちの非難なしの文化に挑戦するものではありません。

#### タイムライン

FCL の期待値と緊急性を設定するために、タイムラインに関する大まかなガイダンスをここで提供します。緊急に動くことと、信頼性を改善するための思慮深い重要な作業を行うことのバランスを取りたいと考えています。時間が変化するにつれて、それに応じて調整できることに注意してください。FCL の DRI は、可能な場合はタイムラインを前倒しすべきです。

以下の箇条書きリストは、インシデントから FCL の完了までの推奨タイムラインを提供します。この場合の「営業日 x」は、インシデントの x 営業日後を指します。

- Day 0: インシデント
- 営業日 1: FCL Issue を開いて計画を開始。FCL が必要ないと考えられる場合は、VP of engineering からの承認を要求。
- 営業日 2-3: 計画時間
- 営業日 2-9: 計画された作業を完了
- 営業日 10-11: 終了セレモニー、レトロスペクティブ、SaaS Health Review への報告

#### 活動

FCL 中は、影響を受けるサービスまたは機能カテゴリで、進行中のすべての機能作業が一時停止されます。FCL に関与するチームメンバーは、[信頼性作業](#scope-of-work-during-fcl) に専念します。Maintainer の業務はこの期間中も実施でき、他のチームを前進させ続ける必要があります。セキュリティやデータ損失防止など、明示的により高い優先度の作業も継続されるべきです。

FCL は通常、機能カテゴリまたはサービスを所有するチームを含みますが、機能やサービスの開発に貢献する他のチームメンバーが含まれる場合があります。FCL のセットアップの一環として、チームは以下を行うべきです。

1. チームが責任を持つ FCL 下のすべてのサービスと機能カテゴリを特定する
2. それらのサービスや機能カテゴリに変更を加える可能性のある密接に結合または依存しているサービスとチームを特定する
3. それらのチームに FCL について通知し、変更が [スコープ](#determining-fcl-scope) 内で適切であることを確認するために調整する
4. サービスの意図しないデプロイを防ぐために、チームのサービスに [Change Lock](https://gitlab.com/gitlab-com/gl-infra/change-lock/-/blob/master/README.md) の適用を検討する。

FCL のチームが所有するサービスや機能カテゴリに変更を加えるチームは、FCL チームと調整し、可視性のために FCL Issue に含める必要があります。[Feature Change Locks プロジェクト](https://gitlab.com/gitlab-com/feature-change-locks/-/work_items) は、すべてのオープンな FCL を追跡します。

チームは以下を行わなければなりません。

- `#fcl-incident-[number]` という名前のパブリック Slack チャンネルを作成し、メンバーは以下とする
  - チームのマネージャー
  - 作成者とそのチームメイト
  - プロダクトマネージャー、ステージのプロダクトリーダー、セクションのプロダクトリーダー
  - すべてのレビュアー
  - すべての Maintainer
  - マネージャーから VP までの指揮系統 (Sr Manager、Sr/Director、VP など)
- 説明に以下の情報を含めて [FCL プロジェクト](https://gitlab.com/gitlab-com/feature-change-locks/) で [FCL Issue](https://gitlab.com/gitlab-com/feature-change-locks/-/issues/new?issuable_template=feature-change-lock) を作成する
  - Issue 名: `[Group Name] FCL for Incident(s) ####`
  - インシデント、元の変更、Slack チャンネルへのリンク
  - FCL タイムライン
  - 作業項目のリスト
- インシデントが解決した後、最優先で書かれたインシデントレビューを完了する。インシデントレビューには、Issue テンプレートのインシデントレビューセクションのすべてのフィールドの完了が含まれる必要があります。インシデント Issue は、リンクされた機密 Issue が必要でない限り、この情報の唯一の信頼できる情報源として機能する必要があります。それを完了することで、問題空間に関する共通の理解を作成し、完了する必要がある作業のための共有された方向性を設定する必要があります。
- すべての手順が守られたかだけでなく、手順への改善がそれを防げたかどうかも見る
- すべての関連する Issue、エピック、および/または関与する MR を参照する作業計画を作成し、FCL の作業範囲を特定するために使用する必要があります。作業計画自体は Issue またはエピックである必要があります。
- 毎日 - 次のテンプレートを使用して FCL Issue またはエピックに更新コメントを追加する
  - エグゼクティブレベルの要約
    - 目標終了日
    - ハイライト/ローライト
- [SaaS Availability 週次スタンドアップ](/handbook/engineering/#saas-availability-weekly-standup) にアジェンダ項目を追加し、FCL がオープンのままである毎週ステータスを要約する。
- FCL の完了時に、Issue や Slack チャンネルで非同期の `終了セレモニー` を開催し、レトロスペクティブをレビューし、学びを祝う。すべての学びを Issue にドキュメント化する。
  - すべての FCL ステークホルダーと参加者は非同期で参加するものとする。FCL に参加しているグループのマネージャー (Sr. EM やディレクターを含む) を招待する必要があります。
  - 結果には、該当する場合 [ハンドブック](/handbook/) と [GitLab Docs](https://docs.gitlab.com/ee/) の更新が含まれる。

##### FCL のスコープの決定 {#determining-fcl-scope}

**スコープ内の内容**

インシデントの原因または貢献として特定されたサービスまたは機能カテゴリを所有する **チーム** が FCL に入ります。チームは責任を持つサービスと機能カテゴリで進行中のすべての機能作業を一時停止します。

共有サービスインフラストラクチャを保守するチーム (例: Sidekiq インフラストラクチャを保守するチーム) が FCL に入った場合、そのインフラストラクチャに変更を加えることはできません。他のチームはサービスを通常通りに使用し続けることができます — たとえば、新しい Sidekiq ジョブを追加したり、データベースマイグレーションを実行したりすること。FCL のセットアップの一環として、チームはインフラストラクチャに変更を加える可能性のある他のチームに FCL について通知する必要があります

**副作用 vs 関連原因**

FCL のスコープを決定する際には、副作用と関連原因を区別することが重要です。

**副作用 (チームは FCL スコープに含まれない):**

これらは、ある機能やサービスへの変更が別の機能やサービスに予期せず影響を与えるインシデントです。

- _例_: Topology Service の設定変更が Repository tree ページで 404 エラーを引き起こすが、リポジトリコード自体は 404 を引き起こすことに貢献しなかった。リポジトリチームのコードが貢献要因ではなかったため、リポジトリチームは FCL の対象になりません。両チームはインシデントを引き起こした依存関係や結合をよりよく理解し、改善するために、ポストインシデントレビューに貢献する必要があります。

**関連原因 (チームは FCL スコープに含まれる):**

これらは、外部の変更が発生するが、チームのコード、設定、またはサービスが効果を複合化または貢献するインシデントです。

- _例_: 共有サービスの設定変更が発生し、機能カテゴリ X からの sidekiq ジョブが遅いクエリのために効果を複合化し、インシデントに貢献する。機能カテゴリ X を所有するチームは、コードがインシデントの影響に貢献したため、FCL の対象になります。

主要な区別は、チームのコード、サービス、または設定が、外部の変更の受動的な受信者であることを超えて、インシデントに能動的に貢献したかどうかです。

##### FCL 中の作業範囲 {#scope-of-work-during-fcl}

インシデントレビューが完了した後、チームの焦点は同様の問題の再発を防ぎ、検出を改善することにあります。これには以下が含まれますが、これらに限定されません。

- 短期的にインシデントの再発を防ぐための即時の是正措置に対処する
- インシデント検出時間を短縮するための変更を導入する (収集されるメトリクス、サービスレベルモニタリング、影響を受けるユーザーの改善)
- 緩和時間を短縮するための変更を導入する (機能フラグによるロールアウトプロセスの改善、クリーンなロールバック)
- インシデントが本番環境外の環境で再現可能であることを確認する (ステージングで問題を検出、エンドツーエンド統合テストカバレッジを増やす)
- 問題を検出するための開発テストカバレッジを改善する (ユニットテストを強化、レビュー中に問題を検出しやすくする)
- 一般的なプロセス改善や他のチームへの依頼の Issue を作成する

この作業の例には以下が含まれますが、これらに限定されません。

- インシデントの原因または貢献として特定されたインシデントレビューからのアイテムの修正。
- 可観測性の改善
- ユニットテストカバレッジの改善
- 統合テストの追加
- サービスレベルモニタリングの改善
- プリプロダクション環境の対称性の改善
- [GitLab Performance Tool](https://gitlab.com/gitlab-org/quality/performance) の改善
- テストや環境へのモックデータの追加
- プロセス改善
- さらなる信頼性作業によるバックログの追加
- セキュリティ作業
- 他のチームやカウンターパートとのコミュニケーションとワークフローの改善

この期間中に開始された特定のチームの作業は、FCL の期間より長くかかる場合でも完了する必要があります。インシデントに直接関連する作業は、FCL が終了しても開始および完了する必要があります。FCL のために一時停止された作業は、FCL が終了した後に再開する優先事項であるべきです。他のチームのためにまたはグローバルレベルで作成されたアイテムは、FCL の終了に影響しません。

## エンジニアリングパフォーマンス指標プロセス

[Product Analytics チーム](/handbook/product/groups/product-analysis/engineering/metrics/) は、Engineering Performance Indicator の維持に責任があります。KPI / RPI に関する作業は、[Product Analytics タスク受付トラッカー](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=PI%20Chart%20Help) を使用して追跡されます。

## 手動検証

私たちはコードが期待通りに動作することを手動で検証します。自動テストカバレッジは不可欠ですが、手動検証は機能が意図通りに動作し、バグが修正されているという、より高いレベルの信頼を提供します。

私たちは Issue が `workflow::verification` 状態にあるときに手動で検証します。一般的に、何かを手動で検証した後、関連する Issue をクローズできます。この Issue 状態の詳細については、[Product Development Flow](/handbook/product-development/how-we-work/product-development-flow/) を参照してください。

可能な限りステージング環境で手動検証を行います。場合によっては、本番環境で手動検証する必要があるかもしれません。

GitLab Ultimate 用に構築された機能をテストする必要がある場合は、[#development](https://gitlab.slack.com/archives/C02PF508L) Slack チャンネルで尋ねることで、本番環境とステージング環境の [issue-reproduce](https://gitlab.com/issue-reproduce) グループに追加してもらえます。これらのグループは Ultimate プランです。

## 重要顧客エスカレーション

既存の [重要顧客エスカレーション](/handbook/customer-success/csm/escalations) でバグ修正や開発作業の即時スケジューリングが必要な場合は、以下のプロセスに従います。

### 重要エスカレーションの要件

- 顧客が [重要エスカレーション](/handbook/customer-success/csm/escalations/#escalation-for-non-professional-services-projects) 状態にある
- エスカレーションされた Issue が顧客に重要なビジネス影響を与えると、Customer Success と Support Engineering のリーダーシップが判断
  - スケジューリングを迅速化しないと、GitLab に連鎖的なビジネス影響がある可能性がある
- スケジューリングを迅速化するには、Customer Success の VP と Support Engineering のディレクターの両方からの承認が必要
  - Customer Success: VP, Customer Success Management - [Sherrod Patching](https://gitlab.com/spatching) からの承認
  - Support Engineering: VP, Support - [Johnny Scarborough](https://gitlab.com/jscarborough) からの承認

### プロセス

- Issue の優先度を重要度に関係なく `~"priority::1"` に設定
- ラベル `~"critical-customer-escalation"` を Issue に適用
- Issue を 1 営業日以内にスケジュール
  - 機能タイプの Issue については、Product DRI の承認が必要。
- DRI またはその代理人が、エスカレーションされた顧客 Slack チャンネルで毎日プロセスの更新を提供

### DRI

- Issue がバグタイプの場合、DRI は Director of Development
- Issue が機能タイプの場合、DRI は Director of Product
- Issue がインフラストラクチャ作業を必要とする場合、DRI は Infrastructure の Engineering Manager

DRI は、コードレビューとマージを迅速化するために [customer critical merge requests](https://docs.gitlab.com/ee/development/code_review.html#customer-critical-merge-requests) プロセスを使用できます。

## priority::1/severity::1 Issue でのエンジニアのペアリング

ほとんどの場合、1 人のエンジニアと Maintainer のレビューで priority::1/severity::1 Issue を処理するには十分です。ただし、一部の Issue は非常に困難または複雑です。エンジニアはこれらの Issue を高い緊急性を持って扱うべきです。複雑な priority::1/severity::1 Issue については、複雑性のレベルに基づいて複数のエンジニアを割り当てる必要があります。Issue の説明には、チームメンバーとその責任を含める必要があります。

| チームメンバー | 責任 |
| ----------- | -------------- |
| `Team Member 1` | `問題の再現` |
| `Team Member 2` | `これが発生する可能性のある他の場所のコードベースの監査` |

3 人や 5 人または X 人が必要なケースがある場合、エンジニアリングマネージャーは計画を迅速に実行する自由を感じるべきです。

この手順に従うことで以下が可能になります。

- priority::1/severity::1 Issue を解決するのにかかる時間を短縮
- OOO や 1 日の終わりに備えて Issue のスムーズな引き継ぎを可能に
- エンジニアが問題で行き詰まった場合のサポートを提供
- 高い緊急性のあるトピックやセキュリティ関連の修正の確保について、別の目を提供

## 内部エンジニアリングハンドブック

エンジニアリングハンドブックには [内部のみ](/handbook/communication/confidentiality-levels/#internal) のトピックがいくつかあります。これらのトピックは、GitLab チームメンバーが [内部ハンドブックのエンジニアリングセクション](https://internal.gitlab.com/handbook/engineering/) で閲覧できます。
