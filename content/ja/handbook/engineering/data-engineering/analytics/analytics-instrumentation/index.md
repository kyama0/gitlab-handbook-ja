---
title: Analytics Instrumentation グループ
description: "Analytics Instrumentation グループは、GitLab プロジェクト全体でプライバシーを重視したプロダクトアナリティクスの機能強化と実装に取り組んでいます"
upstream_path: /handbook/engineering/data-engineering/analytics/analytics-instrumentation/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-28T02:21:43Z"
translator: claude
stale: false
---

## ビジョン

Analytics Instrumentation グループは Analytics セクションの一部です。
私たちのグループは以下に注力しています:
    1. GitLab 内の内部チームにデータ駆動型のプロダクトインサイトを提供し、より良い GitLab を構築できるよう支援する。
    2. 顧客価値にコストを合わせた使用量ベースのサービスを含む GitLab の製品提供を進化させるよう支援する。

そのために、プライバシーを重視した方法で GitLab 製品内にデータ収集とアナリティクスツールを構築します。

Analytics Instrumentation から生まれるインサイトにより、人材とリソースを投資する最善の場所・製品カテゴリの成熟が速いところ・ユーザー体験を改善できる箇所・製品の変更がビジネスに与える影響を特定できます。

Analytics Instrumentation ツールによって収集されたビリングイベントにより、GitLab は GitLab の製品ポートフォリオ全体で堅牢な使用量測定機能を提供できます。

チームの全体的な方向性の詳細は [Analytics Instrumentation 方向性ページ](https://about.gitlab.com/direction/monitor/analytics-instrumentation/)からご覧いただけます。
チームのロードマップは [Analytics Instrumentation wiki ページ](https://gitlab.com/groups/gitlab-org/analytics-section/analytics-instrumentation/-/wikis/Analytics-Instrumentation-Direction-and-Roadmap)からご確認いただけます。

## 働き方

- 私たちは [GitLab の価値観](/handbook/values/)に従って働きます。
- ほぼすべてを公開にして[透明性高く](/handbook/values/#transparency)働きます。
- 取り組みたいことに取り組む機会を得ます。
- 行動偏重です。
- データ駆動型の意思決定を行います。
- 誰でも私たちの仕事に貢献できます。

## 連絡方法

ご質問がある場合は、Analytics Instrumentation グループのプロダクトマネージャーに @ メンションするか、Issue ボードに Issue を作成してください。

## 責任

### 内部イベント

私たちは内部イベントと呼ぶシステムを通じて、GitLab のサービス全体のプロダクト使用イベントのインストルメンテーションを可能にするツールを提供しています。これはフードの下で [Snowplow イベント収集インフラ](https://snowplow.io/)を使用しています。
すべてのインストルメント済みイベントのリストは[メトリクスディクショナリ](https://metrics.gitlab.com/snowplow)で確認できます。
これらのイベントはドメイン固有のものであるため、各エンジニアリンググループがそれぞれのイベントを作成・維持する責任があります。しかし Analytics Instrumentation は、ペアプログラミングやコードレビューを通じてそれらの Issue を常に喜んでお手伝いします。

私たちは [Monte Carlo のアラートと Tableau ダッシュボード](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/monitoring_troubleshooting/#snowplow)を通じて内部イベントの全体的な健全性を積極的に監視しています。

### ビリングイベント

私たちは内部イベントシステムを通じても、GitLab のサービス全体でビリングイベントを発行するためのツールを提供しています。Usage Billing ドキュメントの詳細は[こちら](https://docs.google.com/document/d/1uJXz4PaRysMPS6yAo8V9W_gOFp4qb27a-q0VYGz1-04/edit?tab=t.0#heading=h.wgt8cuxlxai7)から確認できます。

### Service Ping メトリクス

私たちは SaaS およびセルフマネージドインスタンスで毎週実行される信頼性の高い [Service Ping](https://docs.gitlab.com/ee/development/internal_analytics/service_ping/) を提供する責任があります。私たちの責任は、会社が Service Ping データをデータウェアハウスに届けるための成功基盤を整えるためのメトリクス収集のツールと自動化です。
これらのメトリクスはドメイン固有のものであるため、各エンジニアリンググループがそれぞれのメトリクスを作成・維持する責任があります。しかし Analytics Instrumentation は、ペアプログラミングや[オフィスアワー](https://docs.google.com/document/d/13GHTIfaPTHKh_eYXAhhCyYHHisZQvKlVNqhlo6EyqbE)を通じてそれらの Issue を常に喜んでお手伝いします。
すべてのメトリクスのリストは [metrics.gitlab.com](https://metrics.gitlab.com/) で確認できます。

特定のメトリクスの定義や実装に関する質問については、そのメトリクスを所有するグループのプロダクトマネージャーにお問い合わせください。[データカテゴリ](/handbook/legal/privacy/customer-product-usage-information/)・xMAU メトリクスかどうか・グループ指定などのメトリクス情報は[メトリクスディクショナリ](/handbook/product/product-processes/analytics-instrumentation-guide/)で確認できます。
私たちは [Monte Carlo のアラートと Tableau ダッシュボード](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/monitoring_troubleshooting/#monitoring-1)を通じて Service Ping の全体的な健全性を積極的に監視しています。

### プロジェクト

以下は、メインの GitLab コードベースへの関与に加えて私たちが維持している重要なプロジェクトです。

1. [Version App](https://gitlab.com/gitlab-org/gitlab-services/version.gitlab.com)
1. [Metrics Dictionary](https://gitlab.com/gitlab-org/analytics-section/analytics-instrumentation/metric-dictionary) と [Growth グループからの Metrics Dictionary](https://gitlab.com/gitlab-org/growth/product-intelligence/metric-dictionary)
1. [Snowplow Pseudonymization](https://gitlab.com/gitlab-org/analytics-section/analytics-instrumentation/snowplow-pseudonymization)
1. [GitLab 用 Iglu Schema リポジトリ](https://gitlab.com/gitlab-org/iglu)

## チームメンバー {#team-members}

以下は Analytics Instrumentation グループの正式メンバーです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/data-engineering/analytics/analytics-instrumentation/" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## プロジェクト管理プロセス

私たちのチームはプロジェクト管理にスクラムのハイブリッドを使用しています。このプロセスは GitLab の[月次マイルストーンリリースサイクル](/handbook/marketing/blog/release-posts/#schedule)に従います。

- Issue ボードのみから業務を行い、それが唯一の信頼できる情報源となっています。
- Issue を継続的に次のワークフローステージに進めます。
- プロダクトイニシアチブとエンジニアリングイニシアチブの両方に取り組みます。
- 取り組むすべての Issue に優先順位をつけ、見積もりを行います。
- 次のマイルストーンに備えるために月次のマイルストーン計画を行います。
- チーム内で更新情報を共有するために週次チェックインを行います。

### チェックイン

私たちは[専用の Slack チャンネル](https://gitlab.slack.com/archives/C04SHHKTQFM)内で週次の自動チェックインを行います。
週次のケイデンスはチーム内で最も重要な動向を全員が把握するのに十分だと感じています。
ボットが毎週初めに各チームメンバーに自動的に以下の質問をし、チャンネルに投稿します。

- **先週どんな勝利がありましたか？**: 先週の最も重要な成果であるべきです。個人的な成果でも構いません。
- **先週どんな障害がありましたか？今週どんな障害が予想されますか？**: これは他のステークホルダーにとって重要な情報であり、チームメンバーがどこでサポートを必要としているかを理解するためのものです。
- **今週の優先事項は何ですか？**: 今週中に達成したい最も重要なことであるべきです。

### レトロスペクティブ

私たちは継続的に進化し、仕事の進め方を改善することが良い成果を生み出すために不可欠だと考えています。従来、レトロスペクティブはこの改善を促進するために使用されます。
地理的な分散のため、全員を含む典型的な同期レトロスペクティブを実施することができません。
また、完全に非同期のレトロスペクティブでは限られた参加と議論しか見られないことも分かっています。

現在、混合レトロスペクティブ形式を試用しています。チームメンバーがペアを組んでレトロ Issue に記入する方式です。プロセスは以下の通りです:

1. 各マイルストーンに [async-retrospective プロジェクト](https://gitlab.com/gitlab-org/async-retrospectives)が [analytics-instrumentation レトロプロジェクト](https://gitlab.com/gl-retrospectives/analytics-instrumentation/-/issues)に自動的に Issue を作成します。この Issue にはレトロの質問リストが含まれています。
1. 4 週間ごとに [donut Slackbot](https://www.donut.com/) が全チームメンバーをランダムに 2 名のグループにペアリングします。
1. 2 名のグループはそれぞれ、その週中に現在のマイルストーンのレトロ Issue を一緒に記入します:
   1. 同期ミーティング、または Slack を通じて行うのが理想的です。
   1. 前回のペアリング以降の最後の 2 週間に起きたことに焦点を当てます。
   1. ペアリングでは、質問を考える時間を取り、ペアと答えについて話し合い、特定した問題に基づいてアクションアイテムを考えることが含まれます。
   1. 2 週間ごとのペアリングに全体で 30 分から 1 時間の時間を見込んでください。
1. 2 週間ごとに 30 分の時間ブロッカーイベントがあり、全員がレトロの議論に回答するための時間を取るためのものです。

### ワークフロー

私たちのチームは[プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/#workflow-summary)で定義された以下のワークフローステージを使用しています:

#### バリデーションステージ

| ラベル | 使用方法 |
| -- | -- |
| `~"workflow::validation backlog"` | まだ精緻化も優先順位付けもされていない受信 Issue に対してプロダクトマネージャーが適用。 |
| `~"workflow::problem validation"` | PM が問題を徹底的に理解している Issue に対してプロダクトマネージャーが適用。 |
| `~"workflow::design"` | ソリューションをアイデア出し・提案するためにプロダクトマネージャーまたはデザイナー（または Analytics Instrumentation エンジニア）が適用。提案されたソリューションは技術的な実現可能性を確認するためにエンジニアリングによってレビューされるべきです。 |
| `~"workflow::solution validation"` | ユーザーインタビューやユーザビリティテストを通じて提案されたソリューションを検証するためにプロダクトマネージャーまたはデザイナー（または Analytics Instrumentation エンジニア）が適用。 |

#### ビルドステージ

| ラベル | 使用方法 |
|--|--|
| `~"workflow::planning breakdown"` | エンジニアが Issue を分解して[見積もりを追加する](#estimation)ために、プロダクトマネージャーが適用。 |
| `~"workflow::ready for development"` | Issue が分解されて開発にスケジュールされた後、エンジニアリングまたはプロダクトマネージャーのいずれかが適用。 |
| `~"workflow::in dev"` | Issue に対する業務（ドキュメントを含む）が開始した後、エンジニアが適用。通常、このステージのある時点で MR が Issue にリンクされます。 |
| `~"workflow::in review"` | Issue をクローズするために必要なすべての MR がレビュー中であることを示すために、エンジニアが適用。 |
| `~"workflow::verification"` | Issue の MR がマージされた後にエンジニアが適用し、Issue をステージングまたは本番で検証する必要があることを示します。 |
| `~"workflow::complete"` | すべての MR がマージされ Issue が検証された後にエンジニアが適用。このステップで Issue もクローズされるべきです。 |
| `~"workflow::blocked"` | 開発中のいつでも Issue がブロックされた場合に任意のチームメンバーが適用。例: 技術的な Issue、PM または PD への未解決の質問、グループ間の依存関係。 |

### Issue ボード

私たちは日次で Issue の進捗を追跡するために Issue ボードを使用しています。Issue ボードは業務状況の唯一の情報源です。Issue ボードは、ネストされたすべてのプロジェクトの可視性を確保するために最上位のグループレベルで表示されるべきです。

- [**Analytics Instrumentation Issue Board - 現在のマイルストーン**](https://gitlab.com/groups/gitlab-org/-/boards/5071664?milestone_title=Started)
- [**Analytics Instrumentation Issue Board _- マイルストーン別_**](https://gitlab.com/groups/gitlab-org/-/boards/2774881?scope=all&not[label_name][]=product%20work&not[label_name][]=Technical%20Writing&not[label_name][]=UX)

### Issue ラベル

#### ステージとセクションのラベル

Analytics Instrumentation チームによって行われた業務を追跡するために以下のラベルを使用します

- グループ: `~group::analytics instrumentation`

上記のラベルの使用により、GitLab Bot によってセクションラベルの追加が自動的にトリガーされます

- セクション: `~section::analytics`

#### プロダクト方向性ラベル

プロダクト方向性の各目標に従ったエピックと Issue を追跡するために以下のラベルを使用します。私たちが取り組むすべての Issue またはエピックには、全体的な目標にどう貢献するかを示すために以下のラベルの少なくとも一つが必要です。

| プロダクト方向性からの目標 | ラベル |
| -- | -- |
| Easy Instrumentation |  `~"Analytics Instrumentation::Easy Instrumentation"` |
| Broaden Instrumentation Coverage |  `~"Analytics Instrumentation::Broaden Instrumentation Coverage"` |
| Deepen Instrumentation Adoption |  `~"Analytics Instrumentation::Deepen Instrumentation Adoption"` |
| Data Quality |  `~"Analytics Instrumentation::Data Quality"` |
| Engineering & Tech Debt |  `~"Analytics Instrumentation::Engineering & Tech Debt"` |

#### 未スケジュール Issue のラベル

現在のマイルストーンで計画・スケジュールされていない Issue やタスクに取り組む必要がある場合があります。
その場合は `~Unscheduled` ラベルを適用し、[マイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/5071664?milestone_title=Started)で追跡できるよう現在のマイルストーンに割り当てます。
これにより、チームは計画プロセスの非効率性を追跡できます。

#### インシデントのラベル

インシデントには以下のラベルを使用します

| インシデントラベル |
|---|
| `~"Analytics Instrumentation::Incident-High Severity"` |
| `~"Analytics Instrumentation::Incident-Medium Severity"` |
| `~"Analytics Instrumentation::Incident-Low Severity"` |

### 作業の選択

エンジニアは[現在のマイルストーンのボード](https://gitlab.com/groups/gitlab-org/-/boards/5071664?milestone_title=Started)を見つけて開くことができます。
エンジニアは "workflow::ready for development" 列の先頭から始めて、割り当てられていない最初の利用可能な Issue を選びます。
Issue を選ぶ際、エンジニアは Issue の所有権を取ることを示すシグナルとして自分をアサインし、開発の開始を示すために "workflow::in development" に移します。

次の利用可能な Issue が（キャパシティ対 Issue のウェイト・複雑さ・知識領域などの理由で）実行可能な候補でない場合、エンジニアはその Issue をスキップして優先順位の次の Issue を選ぶことができます。

マイルストーン内のすべての業務が選択済みの場合、エンジニアは自由に取り組むものを選ぶことができます。許容される選択肢は以下です:

- 取り組んでいることのヘルプやペアを希望するエンジニアがいないか Slack チャンネルに投稿する
- EM に連絡して次のマイルストーンから現在のマイルストーンに何かを引き込む
- テクニカルデット Issue を作成・取り組む
- パッションプロジェクトの Issue に取り組む
- その他（勉強、リサーチ、学習）

### 優先順位付け

私たちは[マイルストーン別 Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/2774881)でプロダクトロードマップの優先順位付けをしています。Issue は各リストに優先順位の順番で表示され、プロダクトロードマップの優先順位付けはプロダクトマネージャーによって決定されます。

開発時間の 60% はプロダクトマネジメントによって優先されている Issue に費やされ、残り 40% は[エンジニアリングイニシアチブ](/handbook/engineering/)に記載されているエンジニアリングによって優先された Issue に費やされます。

### 四半期 OKR 計画

Analytics Instrumentation チームは OKR を使用して、会社の目標とチームの実行の間の明確な整合性を提供します。OKR は EM と PM によって、チームメンバーの密接な関与のもとで定義されます。OKR プロセスの目標は、会社全体の目標に対する進捗を追跡する測定可能な成果を定義することです。

**タイムライン: [会計四半期](/handbook/finance/#fiscal-year)が始まる 1 ヶ月前**

- **Week 1:** 取り組むべき幅広いテーマを特定する。
  - PM/EM は以下に基づいて四半期の 3〜4 つの主要テーマを特定します:
    - [会社全体の目標](https://levelup.edcast.com/pathways/ECL-4c48518c-565b-4817-a15c-62a98d80c79f)
    - プロダクトの方向性とロードマップの優先事項
    - [Analytics Instrumentation: Engineering & Tech Debt](https://gitlab.com/gitlab-org/gitlab/-/issues?sort=updated_desc&state=opened&label_name%5B%5D=Analytics%20Instrumentation%3A%3AEngineering%20%26%20Tech%20Debt&first_page_size=100) というラベルが付いたテクニカルデットとプラットフォーム改善のエピック

- **Week 2:** テーマについてチームのインプットを得る
  - PM/EM がエンジニアリングチームにテーマを提示する。
  - 実現可能性・依存関係・技術的考慮事項についてフィードバックを収集する。
  - チームのインプットに基づいてテーマを精緻化する。

- **Week 3:** OKR の作成
  - PM/EM が目標と主要な成果を作成する
  - 各目標は会社の目標にどう貢献するかを明確に述べるべきです
  - 主要な成果は測定可能で時間制限のあるものであるべきです

- **Week 4:** 最終化
  - PM/EM がチームに OKR の草案を提示する
  - フィードバックを取り入れて精緻化する
  - 四半期が始まる前に OKR を最終化する
  - 透明性のために wiki ロードマップに OKR を追加する

### マイルストーン計画とタイムライン

私たちのチームはほぼ[プロダクト開発タイムライン](/handbook/engineering/workflow/#product-development-timeline)に従っています。私たちのグループは [GitLab セルフマネージドリリースサイクル](https://about.gitlab.com/upcoming-releases/)に依存しています。

このタイムラインの Analytics Instrumentation マイルストーン計画プロセスへの具体的な適用は以下にまとめています。

#### 概要

私たちはマイルストーンの開始日と終了日を中心に計画を立てています。
次のマイルストーンの計画・分解フェーズは現在のマイルストーンの終了 2 週間前に始まり、現在のマイルストーンの終了前に完了することが期待されます。
開発フェーズは次のマイルストーンの開始時に始まります。

#### 1. 計画・分解フェーズ

- **タイムライン**: 現在のマイルストーンの終了 2 週間前

##### タスク

1. 初期計画
    1. PM: マイルストーン計画 Issue が作成される（[例](https://gitlab.com/gitlab-org/analytics-instrumentation/-/issues/623)）。
    1. PM: 計画 Issue にマイルストーンの全体的な目標とテーマを追加する
    1. PM: プロダクトの観点から計画 Issue に Issue を追加して優先順位を付ける。
    1. EM: エンジニアリングの観点から Issue を追加し、計画 Issue の高優先度バグも追加する。
    1. EM & PM: 計画 Issue のすべての Issue が正しいマイルストーンに割り当てられており、計画 Issue にない他のすべての Issue はマイルストーンから除かれていることを確認する。

2. 分解と重み付け
    1. EM: 重みが 6 ヶ月以上前に計算されている Issue から重みを削除して、重みが最近の変更を考慮していることを確認する。
    1. EM: すべての未重み付け Issue を `~"workflow::planning breakdown"` ステージに移動し、見積もりのためにエンジニアにタグ付けする。
    1. エンジニア: まだない場合はソリューション提案を追加する。
    1. エンジニア: [見積もり](#estimation)を追加し、明確化の質問をし、潜在的なブロッカーをリンクし、必要に応じて Issue をさらに分解する。
    1. EM: 見積もりされ分解された Issue を `~"workflow::ready for development"` ステージに移動する。
    1. エンジニア: キャパシティプランニングシートで次のマイルストーンの稼働可能状況を示す。

3. 最終計画
    1. EM: 見積もられた[キャパシティ](#milestone-capacity)を計算する。
    1. EM: 現在のマイルストーンから持ち越す必要がある Issue を計画 Issue に追加する。
    1. EM & PM: ウェイトとキャパシティに基づいて Issue を追加または削除する。
    1. EM: 計画 Issue に基づいて[マイルストーン別 Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/2774881)の Issue に優先順位を付ける。
    1. EM & PM: 前のマイルストーンの最後の Analytics Instrumentation 同期で、全体的な目標とテーマに焦点を当ててマイルストーンの計画を提示する。

#### 2. 開発フェーズ

- **タイムライン**: 新しいマイルストーンの開始

##### タスク

1. エンジニア: 述べられた優先順位に基づいてマイルストーン内の Issue に取り組む:
    1. エンジニアは興味/経験に基づいて Issue をアサインする。
    2. マイルストーン内にもう Issue がない場合は、まずマイルストーン内の別のエンジニアにアサインされた問題を引き受けるか手伝えるか確認する。そうでない場合は EM に知らせて、EM が次のマイルストーンから Issue を引き込む。

#### マイルストーンキャパシティ {#milestone-capacity}

私たちのマイルストーンキャパシティは、与えられたマイルストーンで完了できる Issue ウェイトの数を示します。これを見積もるために、過去 3 つのマイルストーン全体でエンジニア 1 人が 1 日あたりに完了した平均日次ウェイトを計算します。これに与えられたマイルストーンで実際に利用可能な業務日数を掛けます。

**過去 3 つのマイルストーン:**

- **完了した総ウェイト:** 140 ウェイト
- **利用可能な業務日数:** 60 日 * 5 エンジニア = 300 日
- **実際の業務日数:** 300 日 - 20 日休み = 280 日
- **エンジニア/日あたりの平均ウェイト:** 140 ウェイト / 280 日 = 0.5 ウェイト/日

**次のマイルストーン:**

- **利用可能な業務日数:** 20 日 * 5 エンジニア = 100 日
- **実際の業務日数:** 100 日 - 10 日休み = 90 実際の日数
- **最大キャパシティ:** 90 日 * 0.5 ウェイト/日 = 45 ウェイト

この例では、次のマイルストーンのキャパシティはチーム全体で 0.5 ウェイトです。見積もりもこの計算も正確な科学ではないことに留意してください。キャパシティ計画は EM と PM が社内外で成果物に関する現実的な期待を設定するのを助けるためのものです。予測されたウェイトの正確な量を達成することは期待していません。

#### マイルストーンコミットメント

マイルストーンコミットメントは、チームがマイルストーンで完了することを目指す Issue のリストです。プロダクトチームは GitLab の[野心的な計画](/handbook/product/product-principles/#how-this-impacts-planning)の原則に従っており、すべてのマイルストーンで計画したことすべてを常に完遂できるわけではないことを想定しています。Issue が分解・見積もり・優先順位付けされた後、プロダクトマネージャーは該当する Issue に `~Deliverable` ラベルを適用します。`~Deliverable` ラベルが付いた Issue は、そのマイルストーンでリリースすることを意図しているコミットメントを表します。

#### 期日

プロダクトマネージャーや他のステークホルダーの期待を適切に設定するために、チームは Issue に期日を追加することができます。期日はチームにプレッシャーをかけるためのものではなく、予期される納期を伝えるために使用されます。

また、イテレーションをタイムボックスする方法として期日を使用することもあります。機能のリリースに 1 ヶ月かけるのではなく、より小さなイテレーションを考案するために 1 週間の期日を設定することがあります。

### 見積もり {#estimation}

私たちは非同期で Issue の見積もりを行い、次のマイルストーンにスケジュールされているすべての Issue に初期見積もり（ウェイト）を提供することを目指します。

Issue を重み付けするために最低 2 つの見積もりが必要です。マイルストーン中に発生する Issue や、必要な専門性を持つエンジニアが 1 人しかいない場合は例外とすることができます。見積もりに ➕ 絵文字でリアクションすることは同意（ひいては最低限の見積もり数に貢献）とみなされます。
両方の見積もりが一致した場合、2 番目の見積もりを行ったエンジニアが同意されたウェイトを Issue に追加します。意見の相違がある場合は、2 番目のエンジニアが最初のエンジニアに @メンションして衝突を解決します。

見積もりには、まだドキュメント化されていないか、見積もりによって元々ドキュメント化されたものと異なるものが出た場合、Issue への「提案されたソリューション」の追加が含まれます。
スパイクはソリューションの発見がその主な目的であるため免除され、スパイク Issue のデフォルトウェイトは 8 です。

計画と見積もりにおいて、私たちは予測可能性よりも速度を重視します。計画と見積もりの主な目標は [MVC](/handbook/values/#minimal-valuable-change-mvc) に集中し、盲点を明らかにし、過度に最適化せずに基本的な予測可能性のレベルを達成することです。90% ではなく 70% の予測可能性を目指します。

Issue に多くの未知数があり、1 なのか 5 なのかが不明確な場合、慎重に高め（5）に見積もります。

初期見積もりを調整する必要がある場合は、すぐに見積もりを修正し、プロダクトマネージャーに知らせます。プロダクトマネージャーとチームは、マイルストーンのコミットメントを変更する必要があるかどうか決定します。

- [gitlab-org の未重み付け、今後の Issue](https://gitlab.com/groups/gitlab-org/-/issues?sort=created_date&state=opened&label_name[]=group::analytics+instrumentation&weight=None&milestone_title=Upcoming&not[label_name][]=product+work)
- [gitlab-services の未重み付け、今後の Issue](https://gitlab.com/groups/gitlab-services/-/issues?sort=created_date&state=opened&label_name[]=group::analytics+instrumentation&weight=None&milestone_title=Upcoming&not[label_name][]=product+work)

#### Issue 見積もりの例

| ウェイト | 定義 | 例（エンジニアリング） |
| ------ | ---------- | ------------------------- |
| 1 | 最もシンプルな変更。副作用がないと確信している。 | [Add missing metric definition for "counts_monthly.promoted_issues"](https://gitlab.com/gitlab-org/gitlab/-/issues/340940),<br />[Add instrumentation classes for license standard metrics](https://gitlab.com/gitlab-org/gitlab/-/issues/336340),<br />[Update Registration Features text](https://gitlab.com/gitlab-org/gitlab/-/issues/335051) |
| 2 | シンプルな変更（最小限のコード変更）で、すべての要件を理解している。 | [VersionApp: Add indexed on other tables that are exported](https://gitlab.com/gitlab-org/gitlab/-/issues/352019),<br />[Set values for StandardContext in Frontend](https://gitlab.com/gitlab-org/gitlab/-/issues/342993) |
| 3 | シンプルな変更だが、コードのフットプリントが大きい（例: 多くの異なるファイルやテストに影響）。要件は明確。 | [Update Registration Features CTA for repository size limit](https://gitlab.com/gitlab-org/gitlab/-/issues/349307),<br />[More paid features available to free users](https://gitlab.com/gitlab-org/gitlab/-/issues/341442) |
| 5 | コードベースの複数の領域に影響を与えるより複雑な変更で、リファクタリングも必要な場合があります。要件は理解されているが、途中でいくつかのギャップが生じる可能性があると感じている。 | [Spike Service Ping health dashboard](https://gitlab.com/gitlab-org/gitlab/-/issues/346431),<br />[Remove `deprecated` metric status](https://gitlab.com/gitlab-org/gitlab/-/issues/340847) |
| 8 | 複雑な変更で、コードベースの多くを含むか、要件を決定するために他の人々からの多くのインプットが必要になります。 | [Dispatch Snowplow events from their event definitions](https://gitlab.com/gitlab-org/gitlab/-/issues/346751),<br />[Add metrics yml files for usage data metrics definition](https://gitlab.com/gitlab-org/gitlab/-/issues/270107) |
| 13| 依存関係（他チームまたはサードパーティ）がある可能性が高く、すべての要件をまだ理解していない重大な変更。マイルストーンでこれをコミットする可能性は低く、要件をさらに明確化するか小さな Issue に分解することを好みます。 | [Create Snowplow monitoring framework](https://gitlab.com/gitlab-org/gitlab/-/issues/331103),<br />[Enable batch counting for some individual queries](https://gitlab.com/gitlab-org/gitlab/-/issues/208923) |
| ? | 見積もり方法が分からない Issue | |

#### 見積もりテンプレート

以下は、エンジニアが Issue の見積もりに貢献する際に考慮するためのガイドとなるメンタルフレームワークです。

```markdown
### Refinement / Weighing

**Ready for Development**: Yes/No

<!--
Yes/No

Is this issue sufficiently small enough, or could it be broken into smaller issues? If so, recommend how the issue could be broken up.

Is the issue clear and easy to understand?
-->

**Weight**: X

**Reasoning**:

<!--
Add some initial thoughts on how you might break down this issue. A bulleted list is fine.

This will likely require the code changes similar to the following:

- replace the hexdriver with a sonic screwdriver
- rewrite backups to magnetic tape
- send up semaphore flags to warn others

Links to previous example. Discussions on prior art. Notice examples of the simplicity/complexity in the proposed designs.
-->

**Iteration MR/Issues Count**: Y
<!--

Are there any opportunities to split the issue into smaller issues?

- 1 MR to update the driver worker
- 1 MR to update docs regarding mag tape backups

Let me draw your attention to potential caveats.
-->

**Documentation required**: Y/N
<!--
- Do we need to add or change documentation for the issue?
-->
```

## エピック・Issue・MR の作成

私たちは将来のマージリクエストが存在するのと同じプロジェクトに Issue を作成することを目指し、エピックはその子エピックと Issue のコレクションとして最も意味をなす最上位グループに作成することを目指します。
例えば、CustomersDot で実験が実行されている場合、エピックは `gitlab-org` グループに作成され、Issue は `gitlab-org/customers-gitlab-com` プロジェクトに作成されるべきです。

後の開発プロセスでクローズして移動しなくて済むように、適切なプロジェクトに Issue を作成することに集中します。

Issue を作成する際は、[リンクされたテンプレート](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Analytics%20Instrumentation%20Issue)を使用してその指示に従ってください。

Issue が [GitLab プロジェクト](https://gitlab.com/gitlab-org/gitlab)用でない場合は、テンプレートの内容を適切なプロジェクトにコピーしてください。

### Issue と MR の比率

Issue と MR の比率は担当エンジニアの裁量に任されています。MR は [MVC の原則](/handbook/values/#minimal-valuable-change-mvc)に従うべきです。
Issue が 2 つ以上の MR を必要とすることが事前に明らかな場合は、業務の分割をより明確に文書化するために Issue をさらに分割できるかどうかを評価すべきです。

### マージリクエストラベル

MR ラベルは Issue ラベルを反映すべきです（Issue から作成された場合は自動的に行われます）:

**必須ラベル**

- セクション: `~section::analytics`
- グループ: `~group::analytics instrumentation`
- タイプ: `~"type::bug"`、`~"type::feature"`、`~"type::tooling"`、`~"type::maintenance"`

### マイルストーン

私たちは各 Issue と MR に計画されたマイルストーンまたは完了時のマイルストーンをタグ付けします。

## チームミーティング

私たちのグループは非同期の議論に関する追加の明確さと整合性を得るために同期ミーティングを開催します。チームメンバーはいくつかのタイムゾーンに分散しており、予定時刻に参加できないことが多いため、すべてのミーティングを録画することを目指します。

### ミーティングのルール

- アジェンダアイテムはミーティングの 6 時間前までに記入されるべきです。そうでなければミーティングのキャンセルが可能です。
- 同期ミーティングで事前に考えていなかったことが出てきた場合は、ミーティング中にアジェンダアイテムを追加しても構いません。
- ミーティングは開始時刻の 30 秒後に始まります。
- 最初のアジェンダアイテムを持つ人がミーティングを開始します。
- 最後のアジェンダアイテムを持つ人がミーティングを終了します。
- ミーティングは早めに終了するか時間通りに終了します。
- 残ったアジェンダアイテムは次のミーティングに持ち越します。

### 私たちのミーティング

- **Analytics Instrumentation 同期:** Analytics Instrumentation チームが好きなトピックを議論するための任意の週次ミーティング。同期の終わりに録画を止めて、ソーシャルチャットとして会話を続けます。

## エラーバジェット

私たちはイベントを追跡するために `service_ping` 機能下の [UsageData API エンドポイント](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html)を維持しているため、[バジェット消費](/handbook/engineering/error-budgets/)を監視する必要があります。

バジェット消費を調査するには、Analytics Instrumentation の [概要](https://dashboards.gitlab.net/d/stage-groups-analytics_instrumentation?orgId=1)と[詳細](https://dashboards.gitlab.net/d/stage-groups-detail-analytics_instrument?orgId=1) Grafana ダッシュボードを参照してください。また、`service_ping` 機能でフィルタリングすることで Kibana でバジェット消費に貢献するリクエストを確認することもできます。Kibana のビュー例は[こちら](https://log.gprd.gitlab.net/goto/8e82ff10-ecb8-11ec-8656-f5f2137823ba)で確認できます。

バジェット消費はターゲットを超えた量ではなく、apdex で失敗するかエラーで失敗するリクエストの割合によって計算されることに注意してください。例えば、リクエスト期間の目標が 1 秒のエンドポイントがある場合、リクエスト期間を 10 秒から 5 秒に短縮してもバジェットは改善されません。

## インシデント

Analytics Instrumentation 内では、[データガバナンスチーム](/handbook/enterprise-data/data-governance/incident-management/)によって定義されたインシデント管理フレームワークと一致したインシデントプロセスがあります（関連する議論は[こちら](https://gitlab.com/gitlab-data/analytics/-/issues/24468)）。

以下のプロセスは Analytics Instrumentation のインシデント検出と解決プロセスのさまざまな段階と、対応する DRI（Directly Responsible Individuals）が取るべき手順を示しています。
プロセスへの変更の推奨については、[Analytics Instrumentation グループ EM/PM](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/#team-members) にお問い合わせください。

### インシデントの定義

私たちはインシデントを、即座のアクションが必要なほどメトリクスのレポートを著しく妨げる意図されたプロセスからの逸脱と定義します。

インシデントは以下を通じて現れる可能性があります:

- **可用性の問題:** データ・ダッシュボード・アナリティクスツールがユーザーにアクセスできなくなるまたは利用不可になること
- **品質の低下:** データの不正確さ・破損・バリデーションの失敗・予期しないスキーマの変更
- **タイムリーさの違反:** 期待される時間枠内でデータが更新されない・古いメトリクス・遅延したレポート
- **処理の失敗:** パイプラインの破損・データのロード・変換または抽出ジョブの失敗・モデルエラー・ダウンストリームプロセスに影響するインストルメンテーションロジックの失敗
- **セキュリティ上の懸念:** 不正なデータ露出・アクセス制御の違反・データ漏洩
- **収集の中断:** イベント追跡・データキャプチャメカニズム・ソースシステムの失敗の中断

インシデント基準 - すべての Issue がインシデントに該当するわけではありません。インシデントは以下の基準の 1 つ以上を満たす必要があります:

- ダウンストリームモデルや依存関係・ビジネスオペレーション・データコンシューマーへの即時影響があるかどうか
- SLO 違反があるかどうか
- 即座に対処しないと永続的なデータ損失や破損の可能性があるかどうか
- 他のエンジニアリングチームの顧客 SLA SLO への影響を防ぐために即時アクションが必要かどうか

 これらの理由によりインシデントの作成に至るべきです:

1. 既存のインシデントに直接関連していない、#g_analytics_instrumentation_alerts に投稿された SEV-1 Monte Carlo アラート。
1. メインの Snowplow イベント収集インフラでのイベント収集の中断。
1. `performance_indicator_type` を持つメトリクスに影響を与え、Analytics Instrumentation ドメインから発生している可能性がある分析データのその他の疑わしい損失または遅延。

インシデントの例:

- [高重大度インシデント](https://gitlab.com/gitlab-org/gitlab/-/issues/442875)
- [中重大度インシデント](https://gitlab.com/gitlab-org/gitlab/-/issues/443639)

インシデントを宣言するかどうかを選択する際:

1. インシデントでないリスクがあっても、インシデントを宣言する側を選ぶ。偽陽性としてインシデントをクローズする方が、見逃すよりも良い。
1. データチームの既存のインシデント Issue がある場合でも、私たちのプロセスに従い、データチームの Issue を私たちの Issue にリンクする。

### インシデントの重大度

インシデントの重大度は 3 つの主要な次元を評価することで決定されます:

- ビジネスの中断と影響
- データの重要性と影響
- ダウンストリームの依存関係

上記の要因に基づいて、以下の重大度レベルを策定します:

- `~"Analytics Instrumentation::Incident-High Severity"`: 本番データパイプラインの失敗・顧客向けチームのブロッカー・重要なビジネス意思決定の不能・データ侵害/露出・複数のシステム/メトリクスに影響する差し迫ったまたは実際のデータ損失・ビジネスクリティカルなメトリクスの中程度から重大な劣化。

- `~"Analytics Instrumentation::Incident-Medium Severity"`: 手動の回避策を必要とする重大なワークフローの中断・ダウンストリームコンシューマーに影響を与えるデータパイプラインの遅延・潜在的なセキュリティ脆弱性/コンプライアンス Issue・部分的なシステム/サービスの劣化。

- `~"Analytics Instrumentation::Incident-Low Severity"`: 最小限の影響の不便・重要でないデータパイプラインの遅延・内部専用データへの不適切なアクセス・開発/ステージング環境でのパフォーマンスの劣化・既知の回避策を持つ軽微なデータ品質 Issue。

- **インシデントではない:** ニーズのある機能/改善の欠如・表面的な Issue・ドキュメント更新の必要性・即時の運用上の影響のないテクニカルデット項目。

2 つの重大度レベルの間で迷っている場合は、最初に高い方を選択してください。より多くの情報が利用可能になり理解が深まるにつれて、重大度はダウングレードまたは再分類できます。

### インシデントの作成 {#incident-creation}

_（DRI: 問題を検出したチーム/個人またはアラートを最初に見たチームメンバー）_

1. Issue を作成し、[Analytics Instrumentation インシデントテンプレート](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Analytics+Instrumentation+Incident)を使用して必要なすべての情報を記入します。
1. 上記の重大度ガイドラインを使用して適切なラベルを追加します。
1. [Analytics Instrumentation グループ PM と EM](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/#team-members) に Issue をアサインします。
1. [#g_analyze_analytics_instrumentation](https://gitlab.slack.com/archives/CL3A7GFPF) Slack チャンネルに投稿し、[Analytics Instrumentation グループ PM と EM](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/#team-members) にタグ付けします。
1. Issue へのリンクとともに [#analytics-section](https://gitlab.slack.com/archives/C03GRURTGM9)・[#data-rd-analytics](https://gitlab.slack.com/archives/C02C82WDP0U)・[#data](https://gitlab.slack.com/archives/C8D1LGC23) の Slack チャンネルに通知します。
1. 自分の経験に応じて解決 DRI の役割を担うか、インシデントの DRI を見つけるために Slack でEM とエンジニアに積極的にタグ付けします。

### インシデントの解決 {#incident-resolution}

_（DRI: Analytics Instrumentation グループの EM によって特定される）_

1. DRI は可能な限り速く問題の解決に取り組む。最初の優先事項は、長期的な解決策に取り組む前に、それが一時的なものであっても修正を見つけることです。[監視とトラブルシューティングガイド](./monitoring_troubleshooting.html)はここで役立つことがあります。
1. EM は検出 DRI によって割り当てられた重大度をレビューします。

#### さまざまな重大度レベルの運用手順

1. `~"Analytics Instrumentation::Incident-High Severity"` インシデントの場合:

- DRI は Slack でインシデントの一時チャンネルを作成し、グループ全員（PM および インシデントに基づいた関連ステークホルダー）を招待します。
- EM（または EM が利用できない場合は DRI）が Analytics Instrumentation グループ固有の機能変更ロックを宣言します。
- すべてのグループメンバーが問題の修正を見つけることに集中します。
- DRI は少なくとも 1 日 2 回チャンネルに現在の状況の更新を投稿します。

1. `~"Analytics Instrumentation::Incident-Medium Severity"` インシデントの場合:

- DRI は [#g_analyze_analytics_instrumentation](https://gitlab.slack.com/archives/CL3A7GFPF) 内にインシデントに関するコーディネーションのための Slack スレッドを作成します。
- DRI はインシデントの現在の状況について毎日チャンネルと Issue に更新を投稿します。

1. `~"Analytics Instrumentation::Incident-Low Severity"` インシデントの場合:

- DRI はインシデントの現在の状況について毎日 Issue に更新を投稿します。

すべてのインシデントについて

- DRI は Issue が軽減されるまで既存のコミットメントの業務を一時停止することが期待されます。
- DRI は明確になり次第、予想される解決時間を Issue に更新することが期待されます。
- EM は、PM およびインシデントを報告した個人/チームと調整しながら、修正が機能していることを確認した後に Issue をクローズします。
- パッチリリースが必要な場合:
- DRI は必要に応じてパッチリリースのマージリクエストを作成し、メインの Issue にマージリクエストをリンクします
- DRI はパッチリリースが完了したらメインの Issue に告知します

### インシデント SLO

インシデントへの対応に期待されるタイムライン。

| 重大度 | 軽減までの時間（TTM）(1) | 解決までの時間（TTR）(2) |
|-|-|-|
| `~"Analytics Instrumentation::Incident-High Severity"` | 24 時間以内 | 7 日以内 |
| `~"Analytics Instrumentation::Incident-Medium Severity"` | 72 時間以内 | 30 日以内 |
| `~"Analytics Instrumentation::Incident-Low Severity"` | 7 日以内 | 60 日以内 |

(1) - 軽減は可能な限り速く原因を調査して対処することで、さらなる影響を減らすことを目的とします。

(2) - 解決は標準的な業務プロセス（例: コードレビュー）を使用して、原因を完全に修正し可能であれば失われたデータを回復します。

### インシデント通知

_（DRI: Analytics Instrumentation グループの PM）_

1. Issue へのリンクとともに [#g_analyze_product_analytics](https://gitlab.slack.com/archives/C03M4R74NDU)・[#data_rd_fusion](https://gitlab.slack.com/archives/C02C82WDP0U)・[#data](https://gitlab.slack.com/archives/C8D1LGC23) の Slack チャンネルに通知します。
1. Analytics ステージエンジニアリング & プロダクト GPM に通知します。
1. 解決時間・解決時間の変更・インシデントが解決された時点について上記の Slack チャンネルと個人に更新します。
1. インシデントと状況が次の[月次データ状況 Issue](https://gitlab.com/groups/gitlab-com/-/epics/1608 "Monthly State of Data")に反映されていることを確認します。

## 休暇時のカバレッジプロセス

休暇カバレッジプロセスにより、仕事を離れる準備をする際に「すべてのことを覚えておく」という精神的負担を軽減します。このプロセスにより、休暇前に完了する必要があるタスクを整理し、チームを成功させることができます。

[Analytics Instrumentation プロジェクト](https://gitlab.com/gitlab-org/analytics-section/analytics-instrumentation/internal/-/issues/new?issuable_template=out_of_office_coverage_template)に [`out_of_office_coverage_template`](https://gitlab.com/gitlab-org/analytics-section/analytics-instrumentation/internal/-/blob/master/.gitlab/issue_templates/out_of_office_coverage_template.md) を使用して新しい Issue を開きます。

## オンボーディング

Analytics Instrumentation チームへのすべての新しいチームメンバーには、アナリティクスツールに慣れるためのオンボーディング Issue が提供されます。新しいチームメンバーは `engineer_onboarding` テンプレートを使用して [gitlab-org/analytics-section/analytics-instrumentation/internal プロジェクト](https://gitlab.com/gitlab-org/analytics-section/analytics-instrumentation/internal/-/issues)に自分のオンボーディング Issue を作成します。

## クイックリンク

| リソース                                                                                                                          | 説明                                               |
|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [内部アナリティクスドキュメント](https://docs.gitlab.com/ee/development/internal_analytics/) | GitLab での内部アナリティクスのインストルメンテーションのドキュメント |
| [Analytics Instrumentation 監視とトラブルシューティング](monitoring_troubleshooting.html) | Analytics Instrumentation インフラのトラブルシューティング情報 |
| [Analytics Instrumentation インフラ](infrastructure.html) | 私たちが運用するインフラについての情報 |
| [Service Ping ガイド](https://docs.gitlab.com/ee/development/internal_analytics/service_ping/)     | Service Ping の実装ガイド      |
| [プライバシーポリシー](https://about.gitlab.com/privacy/)        | 収集するデータとその取り扱い方を概説したプライバシーポリシー     |
| [Analytics Instrumentation 方向性](https://about.gitlab.com/direction/monitor/analytics-instrumentation/)  | GitLab の Analytics Instrumentation のロードマップ  |
