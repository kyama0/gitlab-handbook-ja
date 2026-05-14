---
title: "AI 統合"
description: "GitLab AI 統合ワーキンググループは、すべてのプロダクトエリアへの AI 機能の統合を定義、調整、拡大することを目的としています。"
status: active
upstream_path: "/handbook/company/working-groups/ai-integration/"
upstream_sha: "1e195b58b9f249ff10bd0e705106c320fee86141"
translated_at: "2026-05-14T00:00:00Z"
translator: "claude"
stale: false
---

## 属性

| プロパティ      | 値                                                                                                                                                |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| 作成日          | 2022-03-23       |
| 終了日          | 2022-11-13              |
| Slack           | CLOSED `#wg_ai_integration` - ワーキンググループ用 Slack チャンネル。AI を本番環境向けに準備することのハイレベルな整合のため   |
| Slack           | `#ai_integration_dev_lobby` - 実装関連のすべてのトピックと実際の AI 機能の議論用チャンネル   |
| Slack | `#g_ai_framework` - すべての機能の基盤を構築している AI Framework Team 用チャンネル（実験 API、アブストラクションレイヤー、エンベディングなど） |
| Slack | `#ai_strategy` - GitLab における AI/ML を取り巻く戦略的およびビジネスイニシアチブに関する議論。 |
| Slack | `#ai-infrastructure` - AI 統合のためのインフラストラクチャ/プラットフォームサポート。[&969](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/969) も参照。 |
| AI アーキテクチャドキュメント | [ドキュメント](https://docs.gitlab.com/ee/development/ai_architecture/) |
| Google Doc      | [ワーキンググループアジェンダ](https://docs.google.com/document/d/19jVbWVYUPW3m7d2SzsXa2zXIAW7pSb2tdQ-AXWzT_DE/edit) |
| 機能トラッキング | [スプレッドシート](https://docs.google.com/spreadsheets/d/1rDEQjJ6NYRdXL9GT6xCSgrRdA-VU3gSnIh-JrjxByA8/edit#gid=0) |
| YouTube プレイリスト | [GitLab Unfiltered のプレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KqFfwW4qBmATBftnvEwxXpg) |
| Parent Epic     | [Parent epic](https://gitlab.com/groups/gitlab-org/-/epics/9997)           |
| Epic/Issue ワーキンググループラベル | [`wg-ai-integration` issue ボード](https://gitlab.com/gitlab-org/gitlab/-/boards/5512012?label_name[]=wg-ai-integration) と [`wg-ai-integration` epic 検索](https://gitlab.com/groups/gitlab-org/-/epics?state=opened&page=1&sort=start_date_desc&label_name[]=wg-ai-integration)  |
| 優先プロトタイプの Epic ラベル | [`wg-ai-integration-prioritized-prototype`](https://gitlab.com/groups/gitlab-org/-/epics?state=opened&page=1&sort=start_date_desc&label_name[]=wg-ai-integration-prioritized-prototype) |
| AI Framework グループの Issue ボード | [Issue ボードリンク](https://gitlab.com/gitlab-org/gitlab/-/boards/5518200)（ラベル `group::ai framework` を使用） |
| 概要とステータス | 以下の [終了基準](#exit-criteria) を参照 |
| ミーティングスケジュール | 月、火、水曜日の 8am Pacific と、木曜日の 1pm Pacific |

## 目標

GitLab AI 統合ワーキンググループは、すべてのプロダクトエリアへの AI 機能の統合を定義、調整、拡大することを目的としています。

### 概要

[対応する Epic](https://gitlab.com/groups/gitlab-org/-/epics/9997)

すべてのプロダクトチームが高度な AI 機能を使ってプロダクトの改善と機能追加を行えるようにし、ユーザーが DevSecOps ライフサイクルでより迅速かつ生産的になれるようにしたいと考えています。プロダクトチームに対しては、AI 機能を使用する際にアイデアから実験、本番環境へ移行するための明確で迅速な方法を確立したいと考えています。MLOps グループが時間をかけて構築し、より広いチームに提供できるサービス、モデル、ノウハウを取り入れていきます。

ワーキンググループは、AI 機能の迅速な実験とプロトタイピングを促進します。また、本番環境に移行する前に考慮すべきこと（場合によっては明示的な承認を取得すべきこと）について助言します。これには、法務承認、AI の倫理的使用、利用規約の必要な変更の可能性、パフォーマンスへの影響、ホスティングコストへの影響、インフラストラクチャの準備状況、セキュリティの準備状況、サードパーティソフトウェア/サービスのライセンス、機能に対する適切な GitLab ライセンスレベル、ユーザーが目標とニーズを達成するうえでの付加価値などが含まれます。

この取り組みと計画に関する詳細情報は、[内部ハンドブック](https://internal.gitlab.com/handbook/product/ai-strategy/ai-integration-effort/) で確認できます。

### 目標

これは、私たちが議論したいトピックのリストです。

- AI の可能性と複雑性の分類
- アイデア出しと実験の方法の理解
- [Rapid ML Prototyping](https://docs.google.com/document/d/1y-g4DfxKgBRg7vJCGCIGIKL-XWtajyNQSXYldYWgAt4/edit#heading=h.cax3xpkdgfp)
  - 実験のための API とフレームワーク
  - フィーチャーフラグ付きプロトタイプ
  - Product Design 担当のないチームがどう検証を進められるかの決定
- 基盤作り
  - すべてのチーム向けの基盤 API
  - インフラストラクチャ
  - ドキュメント
  - 影響を受ける Jobs とユーザーニーズの理解
- 既存の ML 機能
- 機能の本番への道
  - 異なるゲート

### 終了基準 {#exit-criteria}

グループが解散するためには、以下の基準を満たす必要があります。

- プロダクトチームが、AI を GitLab のプロダクトエリアに構築・統合するための明確な方法を持っている。
- 統合プラットフォームに、メンテナンスと機能開発を担当する [プロダクトグループ](/handbook/product/categories/) がいる。
- 新しい AI モデルを評価し、それを統合プラットフォームに追加してプロダクトチームが利用できるようにする構造化された方法論を持つ。
- 最初の AI 実験を GA にするロードマップ計画を持つ。
- [優先順位付けフレームワーク](/handbook/product/product-processes/#prioritization) の一部として、AI 機能提案を処理するための文書化されたプロセス。
- [SAFE](/handbook/legal/safe-framework/) コンテンツを、適切な場合かつ [SAFE](/handbook/legal/safe-framework/) であるときに、[内部ハンドブック](https://internal.gitlab.com/handbook/product/ai-strategy/ai-integration-effort/) からパブリックハンドブックに移行する。
- 私たちが推奨するエンジニアリングソリューションについてより知的な意思決定を行うため、ユーザーエクスペリエンスの選択肢間の評価プロセスを開発する。

### Q2 OKR

[X 個の experimental、Y 個の beta、Z 個の GA AI 機能を提供する](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/2048)

## 役割と責任

| ワーキンググループの役割 | ユーザー名      | 担当者                                                                   | 役職                                                            |
| :---------------------- | :-------------- | ------------------------------------------------------------------------ | :-------------------------------------------------------------- |
| Executive Stakeholder   | @hbenson        | [Hillary Benson](https://gitlab.com/hbenson)       | Senior Director, Product Management - Sec, Data Science & Monitor              |
| Executive Stakeholder   | @timzallmann    | [Tim Zallmann](https://gitlab.com/timzallmann)       | Senior Director of Engineering, Dev                             |
| Facilitator             | @tmccaslin  | [Taylor McCaslin](https://gitlab.com/tmccaslin)   | Group Manager, Product - Data Science                    |
| Functional Lead - AI Model Validation      | @mray  | [Monmayuri Ray](https://gitlab.com/mray2020)   | Engineering Manager AI Model Validation |
| Functional Lead - UX             | @jmandell  | [Justin Mandell](https://gitlab.com/jmandell)   | Product Design Manager: Analytics, Govern, ModelOps, and Secure |
| Functional Lead - UX             | @pedroms  | [Pedro Moreira da Silva](https://gitlab.com/pedroms)   | Staff Product Designer |
| Functional Lead - Legal             | @m_taylor  | [Matthew Taylor](https://gitlab.com/m_taylor)   | Sr. Director of Legal |
| Pricing representative             | TBH | TBH  | Principal Pricing Manager, Product |
| Product representative             | @mushakov | [Melissa Ushakov](https://gitlab.com/mushakov)   | Group Manager, Product - Plan |
| Product representative             | @sarahwaldner | [Sarah Waldner](https://gitlab.com/sarahwaldner)   | Group Manager, Product - Create |
| Product representative             | @abellucci| [Alana Bellucci](https://gitlab.com/abellucci)   | Senior Product Manager, Govern:Threat Insights |
| Product representative             | @joshlambert | [Joshua Lambert](https://gitlab.com/joshlambert)   | Director of Product, Enablement |
| Product representative             | @tlinz | [Torsten Linz](https://gitlab.com/tlinz)   | PM, Source Code |
| Development representative             | @johnhope | [John Hope](https://gitlab.com/johnhope)   | SEM, Plan |
| Development representative             | @andr3 | [André Luís](https://gitlab.com/andr3)   | FEM: Source Code |
| Development representative             | @cdu1  | [Chun Du](https://gitlab.com/cdu1)   | Director of Engineering, Enablement |
| Development representative             | @igor.drozdov  | [Igor Drozdov](https://gitlab.com/igor.drozdov)   | Staff Backend Engineer, Source Code |
| Development representative             | @jeromezng | [Jerome Ng](https://gitlab.com/jeromezng) | Director of Engineering, Fulfillment |
| Development representative             | @pcalder | [Phil Calder](https://gitlab.com/pcalder) | Senior Engineering Manager, Anti-abuse, Govern, and Growth |
| Development representative             | @nmccorrison | [Neil McCorrison](https://gitlab.com/nmccorrison) | Engineering Manager, Govern: Threat Insights |
| Development representative             | @carlad-gl | [Carla Drago](https://gitlab.com/carlad-gl) | Senior Backend Engineer, Manage: Import & Integrate |
| Development representative             | @donaldcook | [Donald Cook](https://gitlab.com/donaldcook)   | EM, Project Management |
| Legal representative             | @jbackerman | [Jesse Backerman](https://gitlab.com/jbackerman)   | Managing Legal Counsel |
| Vulnerability Research Representative | @idawson | [Isaac Dawson](https://gitlab.com/idawson) | Staff Vulnerability Researcher |
| Vulnerability Research Representative | @dbolkensteyn | [Dinesh Bolkensteyn](https://gitlab.com/dbolkensteyn) | Sr. Vulnerability Researcher |
| Third Party Security Risk Representative | @tdilbeck | [Ty Dilbeck](https://gitlab.com/tdilbeck) | Security Risk Manager |
| Governance and Field Security Representative | @jlongo_gitlab | [Joseph Longo](https://gitlab.com/jlongo_gitlab) | Governance and Field Security Manager |
| Security Compliance Representative | @kbray | [Ken Bray](https://gitlab.com/kbray) | Sr. Security Compliance Engineer (Dedicated Markets) |
| Security Compliance Representative | @lcoleman | [Liz Coleman](https://gitlab.com/lcoleman) | Security Compliance Manager (Commercial) |
| Security Automation Representative | @agroleau | [Alexander Groleau](https://gitlab.com/agroleau) | Senior Security Engineering Manager (Automation) |
| Security Automation Representative | @imand3r | [Ian Anderson](https://gitlab.com/imand3r) | Staff Security Engineer (Automation) |
| Application Security Representative | @greg | [Greg Myers](https://gitlab.com/greg) | Security Engineer (Application Security) |
| Solutions Architecture Representative / Rapid Prototyping Team Member | @bartzhang | [Bart Zhang](https://gitlab.com/bartzhang) | Channel Solutions Architect |
| Product Marketing Representative| @laurenaalves | [Laurena Alves](https://gitlab.com/laurenaalves) | Senior Product Marketing Manager |
| Developer Relations Representative | @johncoghlan | [John Coghlan](https://gitlab.com/johncoghlan) | Director, Developer Advocacy |
| Privacy Representative | @emccrann | [Eugene McCrann](https://gitlab.com/emccrann) | Lead Legal Counsel, Privacy |
| Quality Engineering Representative | @at.ramya | [Ramya Authappan](https://gitlab.com/at.ramya) | Engineering Manager, Quality, Dev & Analytics Section |
| Infrastructure | @lmcandrew  | [Liam McAndrew](https://gitlab.com/lmcandrew)  | Engineering Manager, Scalability Frameworks |
| Infrastructure | @igorwwwwwwwwwwwwwwwwwwww | [Igor Wiedler](https://gitlab.com/igorwwwwwwwwwwwwwwwwwwww) | Staff SRE, Scalability Frameworks |
| Infrastructure | @mbursi | [Michele Bursi](https://gitlab.com/mbursi) | Engineering Manager, Delivery System |
| Support | @ralfaro | [Ronnie Alphero](https://gitlab.com/ralfaro) | Support Engineering Manager |
| Enablement | @cs.wang | [Christopher Wang](https://gitlab.com/cs.wang) | Sr. Manager, Enablement (Sales Development) |

## Engineering グループ

私たちは現在、GitLab に 2 つのコアな AI 開発グループを持っています。AI Framework グループと AI Model Validation グループです。

### AI Model Validation グループ

AI Model Validation グループは、すべてのプロダクトグループに対して、解決すべきユーザー課題と適切なモデルおよび AI/ML ベースの手法をマッチさせる手助けをします。それを、GitLab が使用する多くのモデルを評価、構築、トレーニング、チューニングすることや、AI のリソースと経験をプロアクティブに共有することで行います。今日、彼らはユーザー向けの AI 機能の一部を直接構築・維持しています。

- [AI Model Validation グループ](/handbook/product/categories/#ai-powered-stage) は、GitLab のインフラストラクチャ内でネイティブに実行される自社開発の AI 機能を開発します。このグループは、能力、品質、カスタマイズ可能性、プライバシー、コストの要件を満たすためにこれらのモデルを開発します。これらのコンポーネントには、推論エンジン、アブストラクションレイヤー、モデルが含まれます。
- カスタムビルドされたモデルは、顧客プロプライエタリデータ（その顧客のすべてのマージリクエストとコミットなど）でモデルをトレーニングする必要があるユースケースや、サードパーティモデルが私たちのニーズを満たさない場合に役立ちます。
- 現在リリースされている機能は、現在カスタマーベータの [code suggestions](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/) と GA の [suggested reviewer](https://docs.gitlab.com/ee/user/project/merge_requests/reviews/#suggested-reviewers) です。
- このグループは、メトリクスと（しばしば大きな）ベンチマークデータセットに基づいて、機能的正確性と [モデルパープレキシティ](https://surge-ai.medium.com/evaluating-language-models-an-introduction-to-perplexity-in-nlp-f6019f7fb914) についてモデルを評価する手助けができます。これは手動テストよりも統計的な評価です。これにより、機能のユースケースに対する最も品質の高いモデルを特定するのに役立ちます。
- 彼らは Ruby on Rails、Golang、Python（機械学習とデータサイエンス向け）、Typescript（VS Code Plugin 向け）を含む多くの言語で作業します。このグループは [ML Scientist](https://medium.com/cogitotech/what-is-the-difference-between-machine-learning-engineer-vs-machine-learning-scientist-cfcf4e48363f)、[MLOps Engineer](https://www.databricks.com/glossary/mlops)、[ML Infrastructure Engineer](https://www.reddit.com/r/MLQuestions/comments/zd55mv/what_exactly_is_a_machine_learning_infrastructure/)、[Fullstack Engineer](/job-description-library/engineering/development/fullstack/) で構成されます。

このグループへの連絡は Slack の [#g_ai_model_validation](https://gitlab.slack.com/archives/C023YB2FEUC) を通じて可能です。彼らの [Issue ボードはこちら](https://gitlab.com/groups/gitlab-org/modelops/applied-ml/-/boards/5588960?label_name[]=group%3A%3Aai%20assisted&group_by=epic) で確認できます。この取り組みに従事している人を確認するには、[こちら](/handbook/product/categories/#ai-model-validation-group) を参照してください。

### AI Framework

AI Framework は、すべてのプロダクトグループに AI サービスとその基盤となるモデル（サードパーティまたは GitLab ネイティブモデル）を公開します。

- AI Framework グループは、[アブストラクションレイヤー](https://docs.gitlab.com/ee/development/ai_features/) を通じて、Development 部門の他のメンバーが AI 機能を構築できるようにします。
- アブストラクションレイヤーは OpenAI をサポートしており、同等の Google AI 機能をサポートするように拡張されています。その他の商用、オープンソース、GitLab カスタムビルドモデルも検討されています。
- このグループは、[Experimentation API](https://docs.gitlab.com/ee/development/ai_features/) を通じて、他のグループが *手動の人間によるテスト* でモデルを評価することを可能にします。
- このグループは、`gitlab/gitlab-org` リポジトリを通じて GitLab プロダクトに AI 機能を追加しやすくしているため、Ruby on Rails で作業しています。

このグループへの連絡は Slack の [#g_ai_framework](https://gitlab.slack.com/archives/C051K31F30R) を通じて可能です。彼らの [Issue ボードはこちら](https://gitlab.com/gitlab-org/gitlab/-/boards/5518200) で確認できます。

### AI Engineering Allocation

AI の取り組みと参加するメンバーがダイナミックな性質を持つため、AI の作業を Engineering Allocation の下に置いています。これは、焦点と優先順位が変わるにつれてアサインメントが急速に変わる可能性があることを意味します。現在の焦点は Code Suggestions の採用です。

| 名前 | 役割 | 作業領域 |
| ---- | ---- | ------------ |
| Alexandru Croitor | Senior Backend Engineer | AI Enablement |
| Eulyeon Ko | Backend Engineer | AI Enablement |
| Nicolas Dular |  Senior Backend Engineer | AI Enablement |
| Denys Mishunov | Staff Frontend Engineer | AI Enablement |
| Jan Provaznik | Staff Backend Engineer | AI Enablement |
| Mikołaj Wawrzyniak | Staff Backend Engineer | AI Enablement |
| Pavel Shutsin | Senior Backend Engineer | AI Enablement |
| Max Woolf | Staff Backend Engineer | AI Enablement |
| Tan Le | Senior Fullstack Engineer | AI Enablement |
| Andras Herczeg | Backend Engineer | AI Enablement |
| Sebastian Rehm | Engineering Manager | AI Enablement |
| Daniel Tian | Senior Frontend Engineer | Threat Insights |
| Gregory Havenga | Backend Engineer | Threat Insights |
| Kerri Miller | Staff Backend Engineer | Code Review |
| Stanislav Lashmanov | Senior Frontend Engineer | Code Review |
| Simon Knox | Senior Frontend Engineer | Plan:Project Management |
| Nikola Milojevic | Senior Backend Engineer | Application Performance |
| Aleksei Lipniagov | Senior Backend Engineer | Application Performance |
| Matthias Käppler | Staff Backend Engineer | Application Performance |
| Roy Zwambag | Backend Engineer | Application Performance |
| Paul Phillips | Engineering Manager | Application Performance |
| Igor Drozdov | Staff Backend Engineer | Source Code |
| Patrick Cyiza | Backend Engineer | Source Code |
| Natalia Radina | Frontend Engineer | Source Code |
| Alper Akgun| Staff Fullstack Engineer | VS Code Extension |
| Tomas Vik| Staff Fullstack Engineer | VS Code Extension |
| Enrique| Staff Frontend Engineer | VS Code Extension |
| André Luís | Engineering Manager | Editor Extensions  |
| Mike Eddington | Staff Backend Engineer | Editor Extensions (Visual Studio) |
| Ross Fuhrman | Senior Backend Engineer | Editor Extensions (Visual Studio) |
| Gabriel Mazetto | Senior Backend Engineer | Editor Extensions (JetBrains) |
| Naman Gala | Senior Backend Engineer | Editor Extensions (JetBrains) |
| Marshall Cottrell | Principal | Editor Extensions (Code Suggestions/VS Code) |
| Illya Klymov | Senior Frontend Engineer | Editor Extensions (Code Suggestions/VS Code) |
| Lena Horal-Koretska | Senior Frontend Engineer | Editor Extensions (Language Server) |
| Erran Carey | Staff Incubation Engineer | Editor Extensions (Neovim) |
| Ash McKenzie | Staff Backend Engineer | Editor Extensions (Neovim) |
| Jay Swain | Engineering Manager |  Model Evaluation |
| Andrei Zubov | Senior Frontend Engineer | Deploy:Environments, Model Evaluation |
| Allison Browne | Senior Backend Engineer | Model Evaluation, Verify:Pipeline Execution |
| Dylan Bernardi | Associate Backend Engineer | Model Evaluation |
| Stephan Rayner | Senior Backend Engineer | Model Evaluation |
| Igor Wiedler | Staff Site Reliability Engineer | Model Evaluation |
| Alejandro Pineda | Staff Site Reliability Engineer | Model Evaluation |
