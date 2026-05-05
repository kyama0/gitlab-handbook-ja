---
title: "AI 統合"
description: "GitLab AI 統合ワーキンググループは、すべてのプロダクトエリアへの AI 機能の統合を定義、調整、拡大することを目的としています。"
status: active
upstream_path: /handbook/company/working-groups/ai-integration/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T09:00:00Z"
translator: claude
stale: false
---

## 属性

| プロパティ        | 値                                                                                                                                             |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| 作成日    | 2022-03-23       |
| 終了日 | 2022-11-13              |
| Slack           | CLOSED `#wg_ai_integration` - ワーキンググループと AI の本番準備に向けた高レベルな調整のための Slack チャンネル   |
| Slack           | `#ai_integration_dev_lobby` - 実際の AI 機能に関するすべての実装トピックと議論のためのチャンネル   |
| Slack | `#g_ai_framework` - すべての機能のベースを構築している AI フレームワークチームのチャンネル（実験 API、抽象化レイヤー、エンべディングなど） |
| Slack | `#ai_strategy` - GitLab での AI/ML に関する戦略的・ビジネス的イニシアチブについての議論 |
| Slack | `#ai-infrastructure` - AI 統合のためのインフラストラクチャ/プラットフォームサポート。[&969](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/969) もご参照ください。 |
| AI アーキテクチャドキュメント | [ドキュメント](https://docs.gitlab.com/ee/development/ai_architecture/) |
| Google ドキュメント      | [ワーキンググループアジェンダ](https://docs.google.com/document/d/19jVbWVYUPW3m7d2SzsXa2zXIAW7pSb2tdQ-AXWzT_DE/edit) |
| 機能追跡 | [シート](https://docs.google.com/spreadsheets/d/1rDEQjJ6NYRdXL9GT6xCSgrRdA-VU3gSnIh-JrjxByA8/edit#gid=0) |
| YouTube プレイリスト | [GitLab Unfiltered のプレイリスト](https://www.youtube.com/playlist?list=PL05JrBw4t0KqFfwW4qBmATBftnvEwxXpg) |
| 親エピック     | [親エピック](https://gitlab.com/groups/gitlab-org/-/epics/9997)           |
| エピック/Issue ワーキンググループラベル | [`wg-ai-integration` Issue ボード](https://gitlab.com/gitlab-org/gitlab/-/boards/5512012?label_name[]=wg-ai-integration) および [`wg-ai-integration` エピック検索](https://gitlab.com/groups/gitlab-org/-/epics?state=opened&page=1&sort=start_date_desc&label_name[]=wg-ai-integration)  |
| 優先プロトタイプのエピックラベル | [`wg-ai-integration-prioritized-prototype`](https://gitlab.com/groups/gitlab-org/-/epics?state=opened&page=1&sort=start_date_desc&label_name[]=wg-ai-integration-prioritized-prototype) |
| AI フレームワークグループの Issue ボード | ラベル `group::ai framework` を使用した [Issue ボードリンク](https://gitlab.com/gitlab-org/gitlab/-/boards/5518200) |
| 概要 & ステータス | 以下の[終了基準](#exit-criteria)を参照 |
| ミーティングスケジュール | 月・火・水曜日の太平洋時間午前 8 時、木曜日の太平洋時間午後 1 時 |

## 目標

GitLab AI 統合ワーキンググループは、すべてのプロダクトエリアへの AI 機能の統合を定義、調整、拡大することを目的としています。

### 概要

[対応するエピック](https://gitlab.com/groups/gitlab-org/-/epics/9997)

私たちは、すべてのプロダクトチームが高度な AI 機能を活用して製品の機能を改善・追加できるようにし、ユーザーが DevSecOps ライフサイクルでより速く、より生産的に作業できるようにしたいと考えています。プロダクトチームに対して、AI 機能を使用する際にアイデアから実験、本番へと移行するための明確で迅速な方法を確立したいと考えています。MLOps グループが長年にわたって構築し、より広いチームに提供できるサービス、モデル、ノウハウを取り入れます。

ワーキンググループは AI 機能の迅速な実験とプロトタイプ作成を促進します。また、法的承認、AI の倫理的使用、サービス利用規約への必要な変更、パフォーマンスへの影響、ホスティングコストへの影響、インフラストラクチャの準備状況、セキュリティの準備状況、サードパーティソフトウェア/サービスのライセンス、機能の適切な GitLab ライセンスレベル、ユーザーの目標とニーズを達成する際の付加価値などを含む、本番移行前に考慮すべき点（一部の場合は明示的な承認を得る必要があること）についてもアドバイスします。

取り組みと計画の詳細については、[内部ハンドブック](https://internal.gitlab.com/handbook/product/ai-strategy/ai-integration-effort/)をご覧ください。

### 目標

以下は議論したいトピックのリストです：

- AI の可能性と複雑さの分類
- 実験の実施方法のアイデアと理解
- [ラピッド ML プロトタイピング](https://docs.google.com/document/d/1y-g4DfxKgBRg7vJCGCIGIKL-XWtajyNQSXYldYWgAt4/edit#heading=h.cax3xpkdgfp)
  - 実験のための API とフレームワーク
  - フィーチャーフラグ付きプロトタイプ
  - プロダクトデザイン担当者がいないチームが検証を進める方法の決定
- 基盤整備
  - すべてのチームのためのベース API
  - インフラストラクチャ
  - ドキュメント
  - 影響を受けるジョブとユーザーニーズの理解
- 既存の ML 機能
- 機能の本番への道
  - 異なるゲート

### 終了基準 {#exit-criteria}

グループが解散するために満たすべき基準：

- プロダクトチームが GitLab プロダクトエリアに AI を構築・統合するための明確な方法を持っている。
- 統合プラットフォームにはメンテナンスと機能開発を担当する[プロダクトグループ](/handbook/product/categories/)が存在する。
- 新しい AI モデルを評価し、プロダクトチームが利用できるよう統合プラットフォームに追加するための体系的な方法論がある。
- 最初の AI 実験で GA を達成するためのロードマッププランがある。
- [優先順位付けフレームワーク](/handbook/product/product-processes/#prioritization)の一部として AI 機能の提案を扱う文書化されたプロセスがある。
- 適切な場合は [SAFE](/handbook/legal/safe-framework/) な [SAFE](/handbook/legal/safe-framework/) コンテンツを[内部ハンドブック](https://internal.gitlab.com/handbook/product/ai-strategy/ai-integration-effort/)からパブリックハンドブックに移行する。
- よりインテリジェントな意思決定のために、どのエンジニアリングソリューションを推奨するかを決定するためのユーザーエクスペリエンス評価プロセスを開発する。

### Q2 OKR

[X 個の実験的、Y 個のベータ、Z 個の GA AI 機能を提供する](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/2048)

## ロールと責任

| ワーキンググループのロール      | ユーザー名        | 担当者                                                                   | 役職                                                           |
| :---------------------- | :-------------- | ------------------------------------------------------------------------ | :-------------------------------------------------------------- |
| エグゼクティブステークホルダー   | @hbenson        | [Hillary Benson](/handbook/company/team/#hbenson)       | シニアディレクター、プロダクトマネジメント - Sec、データサイエンス & Monitor              |
| エグゼクティブステークホルダー   | @timzallmann    | [Tim Zallmann](/handbook/company/team/#timzallmann)       | シニアエンジニアリングディレクター、Dev                             |
| ファシリテーター             | @tmccaslin  | [Taylor McCaslin](/handbook/company/team/#tmccaslin)   | グループマネージャー、プロダクト - データサイエンス                    |
| ファンクショナルリード - AI モデル検証      | @mray  | [Monmayuri Ray](https://gitlab.com/mray2020)   | エンジニアリングマネージャー AI モデル検証 |
| ファンクショナルリード - UX             | @jmandell  | [Justin Mandell](/handbook/company/team/#jmandell)   | プロダクトデザインマネージャー：Analytics、Govern、ModelOps、Secure |
| ファンクショナルリード - UX             | @pedroms  | [Pedro Moreira da Silva](/handbook/company/team/#pedroms)   | スタッフプロダクトデザイナー |
| ファンクショナルリード - 法務             | @m_taylor  | [Matthew Taylor](/handbook/company/team/#m_taylor)   | シニアディレクター、法務 |
| 価格代表             | TBH | TBH  | プリンシパル価格マネージャー、プロダクト |
| プロダクト代表             | @mushakov | [Melissa Ushakov](/handbook/company/team/#mushakov)   | グループマネージャー、プロダクト - Plan |
| プロダクト代表             | @sarahwaldner | [Sarah Waldner](/handbook/company/team/#sarahwaldner)   | グループマネージャー、プロダクト - Create |
| プロダクト代表             | @abellucci| [Alana Bellucci](/handbook/company/team/#abellucci)   | シニアプロダクトマネージャー、Govern:Threat Insights |
| プロダクト代表             | @joshlambert | [Joshua Lambert](/handbook/company/team/#joshlambert)   | プロダクトディレクター、Enablement |
| プロダクト代表             | @tlinz | [Torsten Linz](/handbook/company/team/#tlinz)   | PM、ソースコード |
| 開発代表             | @johnhope | [John Hope](/handbook/company/team/#johnhope)   | SEM、Plan |
| 開発代表             | @andr3 | [André Luís](/handbook/company/team/#andr3)   | FEM：ソースコード |
| 開発代表             | @cdu1  | [Chun Du](/handbook/company/team/#cdu1)   | エンジニアリングディレクター、Enablement |
| 開発代表             | @igor.drozdov  | [Igor Drozdov](/handbook/company/team/#igor.drozdov)   | スタッフバックエンドエンジニア、ソースコード |
| 開発代表             | @jeromezng | [Jerome Ng](/handbook/company/team/#jeromezng) | エンジニアリングディレクター、Fulfillment |
| 開発代表             | @pcalder | [Phil Calder](/handbook/company/team/#pcalder) | シニアエンジニアリングマネージャー、Anti-abuse、Govern、Growth |
| 開発代表             | @nmccorrison | [Neil McCorrison](/handbook/company/team/#nmccorrison) | エンジニアリングマネージャー、Govern: Threat Insights |
| 開発代表             | @carlad-gl | [Carla Drago](/handbook/company/team/#carlad-gl) | シニアバックエンドエンジニア、Manage: Import & Integrate |
| 開発代表             | @donaldcook | [Donald Cook](/handbook/company/team/#donaldcook)   | EM、プロジェクトマネジメント |
| 法務代表             | @jbackerman | [Jesse Backerman](/handbook/company/team/#jbackerman)   | マネージングリーガルカウンセル |
| 脆弱性リサーチ代表 | @idawson | [Isaac Dawson](/handbook/company/team/#idawson) | スタッフ脆弱性リサーチャー |
| 脆弱性リサーチ代表 | @dbolkensteyn | [Dinesh Bolkensteyn](/handbook/company/team/#dbolkensteyn) | シニア脆弱性リサーチャー |
| サードパーティセキュリティリスク代表 | @tdilbeck | [Ty Dilbeck](/handbook/company/team/#tdilbeck) | セキュリティリスクマネージャー |
| ガバナンス & フィールドセキュリティ代表 | @jlongo_gitlab | [Joseph Longo](/handbook/company/team/#jlongo_gitlab) | ガバナンス & フィールドセキュリティマネージャー |
| セキュリティコンプライアンス代表 | @kbray | [Ken Bray](/handbook/company/team/#kbray) | シニアセキュリティコンプライアンスエンジニア（Dedicated Markets） |
| セキュリティコンプライアンス代表 | @lcoleman | [Liz Coleman](/handbook/company/team/#lcoleman) | セキュリティコンプライアンスマネージャー（Commercial） |
| セキュリティオートメーション代表 | @agroleau | [Alexander Groleau](/handbook/company/team/#agroleau) | シニアセキュリティエンジニアリングマネージャー（オートメーション） |
| セキュリティオートメーション代表 | @imand3r | [Ian Anderson](/handbook/company/team/#imand3r) | スタッフセキュリティエンジニア（オートメーション） |
| アプリケーションセキュリティ代表 | @greg | [Greg Myers](/handbook/company/team/#greg) | セキュリティエンジニア（アプリケーションセキュリティ） |
| ソリューションアーキテクチャ代表 / ラピッドプロトタイピングチームメンバー | @bartzhang | [Bart Zhang](/handbook/company/team/#bartzhang) | チャネルソリューションアーキテクト |
| プロダクトマーケティング代表| @laurenaalves | [Laurena Alves](/handbook/company/team/#laurenaalves) | シニアプロダクトマーケティングマネージャー |
| デベロッパーリレーションズ代表 | @johncoghlan | [John Coghlan](https://gitlab.com/johncoghlan) | ディレクター、デベロッパーアドボカシー |
| プライバシー代表 | @emccrann | [Eugene McCrann](/handbook/company/team/#emccrann) | リードリーガルカウンセル、プライバシー |
| 品質エンジニアリング代表 | @at.ramya | [Ramya Authappan](/handbook/company/team/#at.ramya) | エンジニアリングマネージャー、品質、Dev & Analytics セクション |
| インフラストラクチャ | @lmcandrew  | [Liam McAndrew](/handbook/company/team/#lmcandrew)  | エンジニアリングマネージャー、スケーラビリティフレームワーク |
| インフラストラクチャ | @igorwwwwwwwwwwwwwwwwwwww | [Igor Wiedler](/handbook/company/team/#igorwwwwwwwwwwwwwwwwwwww) | スタッフ SRE、スケーラビリティフレームワーク |
| インフラストラクチャ | @mbursi | [Michele Bursi](/handbook/company/team/#mbursi) | エンジニアリングマネージャー、デリバリーシステム |
| サポート | @ralfaro | [Ronnie Alphero](https://gitlab.com/ralfaro) | サポートエンジニアリングマネージャー |
| イネーブルメント | @cs.wang | [Christopher Wang](https://gitlab.com/cs.wang) | シニアマネージャー、イネーブルメント（セールスデベロップメント） |

## エンジニアリンググループ

現在、GitLab には 2 つのコアな AI 開発グループがあります：AI フレームワークグループと AI モデル検証グループです。

### AI モデル検証グループ

AI モデル検証グループは、すべてのプロダクトグループが解決すべきユーザー問題に適切なモデルと AI/ML ベースの技術を照合するのを支援します。GitLab が使用する多くのモデルを評価、構築、トレーニング、チューニングし、AI リソースと経験を積極的に共有することによって、これを実現します。現在は、いくつかのユーザー向け AI 機能を直接構築・維持しています。

- [AI モデル検証グループ](/handbook/product/categories/#ai-powered-stage)は、GitLab のインフラストラクチャ上でネイティブに動作するインハウス AI 機能を開発します。このグループは、機能性、品質、カスタマイズ性、プライバシー、コスト要件を満たすためにこれらのモデルを開発します。これらのコンポーネントには、推論エンジン、抽象化レイヤー、モデルが含まれます。
- カスタム構築モデルは、顧客固有のデータ（顧客のすべてのマージリクエストやコミットなど）でモデルをトレーニングする必要がある場合や、サードパーティモデルがニーズを満たしていない場合のユースケースに役立ちます。
- 現在リリースされている機能には、現在顧客ベータ中の[コードサジェスション](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/)と、GA になっている[推奨レビュアー](https://docs.gitlab.com/ee/user/project/merge_requests/reviews/#suggested-reviewers)があります。
- このグループは、メトリクスと（しばしば大規模な）ベンチマークデータセットに基づいて機能的な正確性と[モデルパープレキシティ](https://surge-ai.medium.com/evaluating-language-models-an-introduction-to-perplexity-in-nlp-f6019f7fb914)でモデルを評価するのに役立ちます。これは手動テストよりも統計的な評価であり、機能のユースケースに最も適したモデルを決定するのに役立ちます。
- Ruby on Rails、Golang、Python（機械学習とデータサイエンス用）、Typescript（VS Code プラグイン用）など、多くの言語で作業しています。グループは [ML サイエンティスト](https://medium.com/cogitotech/what-is-the-difference-between-machine-learning-engineer-vs-machine-learning-scientist-cfcf4e48363f)、[MLOps エンジニア](https://www.databricks.com/glossary/mlops)、[ML インフラストラクチャエンジニア](https://www.reddit.com/r/MLQuestions/comments/zd55mv/what_exactly_is_a_machine_learning_infrastructure/)、および[フルスタックエンジニア](/job-description-library/engineering/development/fullstack/)で構成されています。

このグループには Slack の [#g_ai_model_validation](https://gitlab.slack.com/archives/C023YB2FEUC) でご連絡いただけます。[こちらから Issue ボードを確認](https://gitlab.com/groups/gitlab-org/modelops/applied-ml/-/boards/5588960?label_name[]=group%3A%3Aai%20assisted&group_by=epic)できます。この取り組みに携わっているメンバーについては[こちら](/handbook/product/categories/#ai-model-validation-group)をご参照ください。

### AI フレームワーク

AI フレームワークは、AI サービスと基盤となるモデル（サードパーティまたはネイティブ GitLab モデル）をすべてのプロダクトグループに提供します。

- AI フレームワークグループは、[抽象化レイヤー](https://docs.gitlab.com/ee/development/ai_features/)を通じて、開発部門の他のグループが AI 機能を構築できるよう支援します。
- 抽象化レイヤーは OpenAI をサポートしており、同等の Google AI 機能のサポートも拡張中です。その他の商用、オープンソース、GitLab カスタム構築モデルも検討されています。
- このグループは、[実験 API](https://docs.gitlab.com/ee/development/ai_features/) を通じて、*手動ヒューマンテスト*によるモデル評価を他のグループに提供します。
- このグループは Ruby on Rails を使用しており、`gitlab/gitlab-org` リポジトリを通じて GitLab プロダクトが AI 機能を簡単に追加できるようにします。

このグループには Slack の [#g_ai_framework](https://gitlab.slack.com/archives/C051K31F30R) でご連絡いただけます。[こちらから Issue ボードを確認](https://gitlab.com/gitlab-org/gitlab/-/boards/5518200)できます。

### AI エンジニアリング割り当て

AI 作業とその関与者の動的な性質により、AI 作業をエンジニアリング割り当て下に置いています。これは、フォーカスと優先度の変化に応じて割り当てが迅速に変わる可能性があることを意味します。現在の焦点はコードサジェストの採用にあります。

| 氏名 | ロール | 担当エリア |
| ---- | ---- | ------------ |
| Alexandru Croitor | シニアバックエンドエンジニア | AI イネーブルメント |
| Eulyeon Ko | バックエンドエンジニア | AI イネーブルメント |
| Nicolas Dular | シニアバックエンドエンジニア | AI イネーブルメント |
| Denys Mishunov | スタッフフロントエンドエンジニア | AI イネーブルメント |
| Jan Provaznik | スタッフバックエンドエンジニア | AI イネーブルメント |
| Mikołaj Wawrzyniak | スタッフバックエンドエンジニア | AI イネーブルメント |
| Pavel Shutsin | シニアバックエンドエンジニア | AI イネーブルメント |
| Max Woolf | スタッフバックエンドエンジニア | AI イネーブルメント |
| Tan Le | シニアフルスタックエンジニア | AI イネーブルメント |
| Andras Herczeg | バックエンドエンジニア | AI イネーブルメント |
| Sebastian Rehm | エンジニアリングマネージャー | AI イネーブルメント |
| Daniel Tian | シニアフロントエンドエンジニア | Threat Insights |
| Gregory Havenga | バックエンドエンジニア | Threat Insights |
| Kerri Miller | スタッフバックエンドエンジニア | コードレビュー |
| Stanislav Lashmanov | シニアフロントエンドエンジニア | コードレビュー |
| Simon Knox | シニアフロントエンドエンジニア | Plan:プロジェクトマネジメント |
| Nikola Milojevic | シニアバックエンドエンジニア | アプリケーションパフォーマンス |
| Aleksei Lipniagov | シニアバックエンドエンジニア | アプリケーションパフォーマンス |
| Matthias Käppler | スタッフバックエンドエンジニア | アプリケーションパフォーマンス |
| Roy Zwambag | バックエンドエンジニア | アプリケーションパフォーマンス |
| Paul Phillips | エンジニアリングマネージャー | アプリケーションパフォーマンス |
| Igor Drozdov | スタッフバックエンドエンジニア | ソースコード |
| Patrick Cyiza | バックエンドエンジニア | ソースコード |
| Natalia Radina | フロントエンドエンジニア | ソースコード |
| Alper Akgun | スタッフフルスタックエンジニア | VS Code エクステンション |
| Tomas Vik | スタッフフルスタックエンジニア | VS Code エクステンション |
| Enrique | スタッフフロントエンドエンジニア | VS Code エクステンション |
| André Luís | エンジニアリングマネージャー | エディタエクステンション  |
| Mike Eddington | スタッフバックエンドエンジニア | エディタエクステンション（Visual Studio） |
| Ross Fuhrman | シニアバックエンドエンジニア | エディタエクステンション（Visual Studio） |
| Gabriel Mazetto | シニアバックエンドエンジニア | エディタエクステンション（JetBrains） |
| Naman Gala | シニアバックエンドエンジニア | エディタエクステンション（JetBrains） |
| Marshall Cottrell | プリンシパル | エディタエクステンション（コードサジェスション/VS Code） |
| Illya Klymov | シニアフロントエンドエンジニア | エディタエクステンション（コードサジェスション/VS Code） |
| Lena Horal-Koretska | シニアフロントエンドエンジニア | エディタエクステンション（ランゲージサーバー） |
| Erran Carey | スタッフインキュベーションエンジニア | エディタエクステンション（Neovim） |
| Ash McKenzie | スタッフバックエンドエンジニア | エディタエクステンション（Neovim） |
| Jay Swain | エンジニアリングマネージャー | モデル評価 |
| Andrei Zubov | シニアフロントエンドエンジニア | Deploy:Environments、モデル評価 |
| Allison Browne | シニアバックエンドエンジニア | モデル評価、Verify:パイプライン実行 |
| Dylan Bernardi | アソシエイトバックエンドエンジニア | モデル評価 |
| Stephan Rayner | シニアバックエンドエンジニア | モデル評価 |
| Igor Wiedler | スタッフサイトリライアビリティエンジニア | モデル評価 |
| Alejandro Pineda | スタッフサイトリライアビリティエンジニア | モデル評価 |
