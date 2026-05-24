---
title: Custom Models グループ
description: "Custom Models グループは、顧客固有のデータとユースケースをサポートして GitLab Duo の機能を支える、追加のカスタムモデルに注力しています。"
upstream_path: /handbook/engineering/ai/custom-models/
upstream_sha: 877082e5cd4baeabe3d6e802b3b4b1efdb6573f1
lastmod: "2026-05-22T14:47:44+02:00"
translated_at: "2026-05-23T00:00:00Z"
translator: claude
stale: false
---

## ビジョン

Custom Models グループは、顧客固有のデータとユースケースをサポートして GitLab Duo の機能を支える、追加のカスタムモデルに注力しています。

## 組織

AI-powered:Custom Models チームは、GitLab の Custom Model 機能群に注力し、[DevOps ライフサイクル](/handbook/product/categories/#devops-stages)の [AI Powered ステージ](/handbook/product/categories/#ai-powered-stage)の [Custom Models グループ](/handbook/product/categories/#custom-models-group)に属する製品カテゴリーのすべてのバックエンド側面に責任を負います。私たちの製品の方向性は、[Category Direction - Custom Models Management](https://about.gitlab.com/direction/ai-powered/custom_models/) ページにあります。

私たちが取り組む機能は、[Features by Group ページ](/handbook/product/categories/features/#custom-models)に記載されています。

### チームメンバー

**Engineering Manager と Engineer**

{{< team-by-manager-slug "aying-gl" >}}

**ステーブルカウンターパート**

以下の他の機能チームのメンバーは、私たちのステーブルカウンターパートです。

| **Name**                                                 | **Role** |
| ---------------------------------------------------------| ------------------------------------------------------------------------------- |
| [Jordan Janes](/handbook/company/team#jordanjanes  )     | [Principal Product Manager](/job-description-library/product/product-manager/) |

### 連絡方法

- Issue トラッカー: [`~group::custom models`](https://gitlab.com/dashboard/issues?sort=title_asc&state=opened&label_name[]=group::custom+models)
- Slack チャンネル: [#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F)
- ラベルサブスクリプション: [`~group::custom models`](https://gitlab.com/groups/gitlab-com/-/labels?subscribed=&search=group%3A%3Acustom+models)

#### 組織ラベル

Custom Models グループが所有する Issue には、必要に応じてこれらのラベルを付けるべきです。

- `~"group::custom models"`
- `~"devops::ai-powered"`
- `~"section::data science"`
- `~"Category:Model personalization"`
- `~"Category:Self-Hosted models"`

加えて、Issue には関連する `~type:` とサブタイプのラベルを含めるべきです。

## エピックとテックリードを使った作業のスコープ設定

エピックは、単一の Issue よりも大きいあらゆる作業項目のスコープの主要な定義として使用すべきです。これは、新機能、複雑なリファクタリング、バグなどです。エピック内の Issue が作業項目の全体のスコープを構成し、それらがすべてクローズされると作業は完了し、エピックがクローズされます。エピックは、明確な改善を加えるイテレーションを内包すべきですが、必ずしも機能全体を表すわけではなく、機能全体には複数のエピックが必要になる場合があります。

エピックによって定義される個々の作業項目の技術的なオーナーシップは、エンジニアである「テックリード」に委譲されます。エンジニアはエピックにアサインされ、スコープが正しいことを保証します。テックリードは EM、PM、他のエンジニアと協力します。

チームのどのエンジニアも、テックリード自身を含め、カンバンプロセスを使って自己アサインすることで、エピックに含まれる Issue に取り組むことができます。

## チームのマイルストーン計画プロセス

Custom Models は、[製品開発フロー](/handbook/product-development/how-we-work/product-development-flow/)と[クロスファンクショナルプライオリタイゼーション](/handbook/engineering/workflow/cross-functional-prioritization/)に従います。チームは、計画プロセスを管理するために計画 Issue とボードを使用します。このプロセスを容易にするために、[計画自動化](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models/-/blob/main/doc/planning/index.md)スクリプトが利用できます。
各マイルストーンの[計画 Issue](https://gitlab.com/groups/gitlab-org/-/epics/13440) は PM によって作成され、PM、EM、ステーブルカウンターパートの間で今後の作業を調整するために使用されます。

各マイルストーン中に、次のマイルストーンの計画が完了します。以下のアクティビティが実施されます。

- 計画 Issue とボードの作成（EM または PM）
- リファインメント Issue は[自動化](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models/-/merge_requests/95)によって毎週作成される
- マイルストーンの候補 Issue の特定と計画ボードへの追加（PM、EM）
- チームメンバーのキャパシティ計画（EM）
- ウェイトを使った工数の見積もり（エンジニアと EM）
- 計画ボードを確定するための合同計画セッション（PM、EM）
- エンジニアへの作業のアサイン、`~Deliverable` ラベルの追加、計画 Issue の更新（EM）

### 計画 Issue

毎月、自動化と [Custom Models 計画テンプレート](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models/-/blob/main/.gitlab/issue_templates/milestone-planning-template.md)を使って、PM が計画 Issue を作成します。これは、特定のマイルストーンの計画チームメンバー（PM、EM）のためのディスカッションエリアであり、計画ボードとビルドボードへのリンクを持ちます。

### 計画ボード {#planning-board}

[計画ボード](https://gitlab.com/groups/gitlab-org/-/boards/7762631?milestone_title=17.7&label_name[]=group%3A%3Acustom%20models)は各マイルストーンについて PM によって作成され、カテゴリー別に厳選された Issue のリストです。計画ボードには Issue を過剰に載せることができ、超過分は計画コール中に次のマイルストーンまたは Next 1-3 Milestones ボードに移動されます。

PM は Issue に `~workflow::planning breakdown` を付けます。これは EM に対し、Issue の説明が明確で開発の準備ができていることを確認するためにエンジニアにレビューを依頼するよう知らせるシグナルです。エンジニアはその後ウェイトを割り当て、`~workflow::ready for development` ラベルを適用します。

### Issue リファインメントの自動化

毎週、Issue リファインメントを支援するために [Custom Models プロジェクト](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models)内に新しい Issue が作成されます。

エンジニアは毎週、タスクをレビューし、複雑さを見積もり、開発に向けて準備することで Issue をリファインします。リファインメントプロセス中、必要な作業を評価し、必要に応じて実装計画を追加し、[ウェイト](#issue-weights)を追加し、Issue を[開発準備完了](#ready-for-development-status)としてマークします。このプロセスにより、開発が始まる前に Issue が適切に定義されます。

### 開発準備完了ステータス {#ready-for-development-status}

エンジニアが着手できる準備が整った Issue には `workflow::ready for development` ラベルが付きます。Deliverable としてエンジニアにアサインすべきなのは、このラベルが付いた Issue のみです。リサーチが必要な場合は `~spike` ラベルが付きますが、スパイクのスコープは Issue 内で明確に記述すべきであり、成果はコードの記述またはリファインされた Issue の作成になる場合があります。

### キャパシティ計画スプレッドシート

EM は、チームのキャパシティを計算するために [Google Sheet](https://docs.google.com/spreadsheets/d/18LhwZpsJ6G-1GBv0EDOq0E7EIAMpgsHqEg8Dn5GJmz0/edit#gid=1428069441)（_GitLab 社内のみ_）を保守しており、同じスプレッドシートは、ウェイトと優先度に基づいて Issue をリリースにアサインするプロセスを実行するためにも使用されます。EM は計画 Issue にチームのキャパシティを投稿します。

### ビルドボード

EM は、以下に基づいて[計画ボード](#planning-board)から Issue を選びます。

- 前のマイルストーンからのスリップ
- PM の優先傾向
- ウェイト
- 優先度

EM はその後、リリース内の各 Issue に `~Deliverable` ラベルを適用し、エンジニアにアサインします。Issue は、ビルドボードを使ってリリースを通じて追跡されます。

### Say / Do 比率

Say / Do 比率は、`完了した Issue / アサインされた Issue` という式を使って計算されます。

- `~Deliverable` ラベルを付けてビルドボードに追加された Issue が、アサインされた Issue です
- マイルストーンの終了までにクローズされた Issue が、完了した Issue です

### Issue ウェイト {#issue-weights}

各 Issue には、その Issue をクローズするための作業の見積もりとしてウェイトが割り当てられます。ウェイト 1 は、おおよそ 2 営業日の工数です。一般的に、Issue にはウェイト 3 を超えるウェイトは割り当てられません。より大きなウェイトは、Issue をさらに分割すべきであることを示します。

### 計画ボードとデリバリーボード

[製品開発フロー](/handbook/product-development/how-we-work/product-development-flow/)のすべてのワークフローステータスが有効であり、ボードに紐づけられたステータスとマイルストーンは以下のとおりです。

[Next 1-3](https://gitlab.com/groups/gitlab-org/-/boards/7472817?milestone_title=Next%201-3%20releases&label_name[]=group%3A%3Acustom%20models) と [Next 4-6 マイルストーン](https://gitlab.com/groups/gitlab-org/-/boards/7472821?milestone_title=Next%204-6%20releases&label_name[]=group%3A%3Acustom%20models)のボードは、リファインメントが必要な、または着手の準備ができた Issue を収容するために使用されます。

| ボード       | フィルター           | カラム            |
|-------------|-------------------|--------------------|
| 計画ボード | Milestone、`~group::custom models` | `~type::bug`、`~type::maintenance`、`~type::feature` |
| ビルドボード    | Milestone、`~group::custom models`、`~Deliverable` | `~workflow::ready for development`、`~workflow::in dev`、`~workflow::in review`、`~workflow::awaiting security release`、`~workflow::blocked` |
| Next 1-3 Milestones | `%Next 1-3 Milestones` | `~workflow::problem validation`、`~workflow::problem validation`、`~workflow::design`、`~workflow::solution validation`、`~workflow::planning breakdown`、`~workflow::ready for development`     |
| Next 4-6 Milestones | `%Next 4-6 Milestones` | `Next 1-3 Milestones` と同じ     |

### Issue マイルストーン

- 着手予定または現在着手中の Issue には、現在または次のマイルストーンがアサインされます。
- 着手予定ではない Issue には `%Backlog` のマイルストーンがアサインされますが、コミュニティの貢献によって対処される場合があります。
- `%Awaiting Customer Feedback` のマイルストーンを持つ Issue は、顧客の関心次第で着手される場合があります。

[Issue トリアージレポート](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/17099)は、マイルストーンのアサインが必要な Issue を浮き彫りにします。

## ブログ記事

Custom Model のチームメンバーが執筆したブログ記事

- [Developing GitLab Duo: How we validate and test AI models at scale](https://about.gitlab.com/blog/2024/05/09/developing-gitlab-duo-how-we-validate-and-test-ai-models-at-scale/) [@susie.bee](https://gitlab.com/susie.bee)
- [GitLab Duo Self-Hosted: Enterprise AI built for data privacy](https://about.gitlab.com/blog/2025/02/27/gitlab-duo-self-hosted-enterprise-ai-built-for-data-privacy/) [@susie.bee](https://gitlab.com/susie.bee)
- [Speed meets governance: Model Selection comes to GitLab Duo](https://about.gitlab.com/blog/speed-meets-governance-model-selection-comes-to-gitlab-duo/) [@susie.bee](https://gitlab.com/susie.bee)

## コミュニケーション

Custom Models は、以下のガイドラインに基づいてコミュニケーションを行います。

1. 常に同期ミーティングよりも非同期コミュニケーションを優先する。
1. 非同期が非効率であることが分かった場合は、[同期コール](#ad-hoc-sync-calls)を手配することをためらわないでください。ただし、チームメンバーと共有できるよう録画するよう努めてください。
1. [デフォルトでの透明性](/handbook/security/transparency-by-default/)
1. 業務関連のコミュニケーションの主要チャンネルは [#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F) Slack チャンネルです。
1. チーム内部の Issue とプロジェクトは [`gitlab-org/ai-powered/custom-models`](https://gitlab.com/gitlab-org/ai-powered/custom-models) の下にネームスペース化されています

## LLM ジャッジ

LLM を活用したアプリケーションの開発において、Custom Models チームはモデル評価の目的でさまざまな LLM をジャッジ
として使用できます。Custom Models チームは、以下の要件のもとで OpenAI モデルをジャッジとして使用する許可を得ています。

- 入力に関しては、OpenAI が私たちの入力を自社サービスの改善に使用することを許可されているため、プロプライエタリ、SAFE、その他の機密情報を OpenAI モデルへの入力として提供しないように注意してください。
- 出力に関しては、私たちの通常の制約のとおり、ChatGPT または GPT が生成した出力を GitLab の Issue、MR、マーケティング資料、その他のコンテンツに追加しないようにしてください。
- 私たちは、モデルからデータや出力を自動的またはプログラムによって抽出することはできません。つまり、おそらく自動ベンチマークはできません。同様に、レート制限や制約を回避することを含め、それらのサービスを妨害または中断することはできません。
- OpenAI が私たちの入力／出力をモデルのトレーニングに使用することをオプトアウトできるので、[こちら](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance)の手順に従ってオプトアウトしてください。

より詳しいコンテキストについては、[この社内ノート](https://gitlab.com/gitlab-org/gitlab/-/issues/470559#note_1997562193)を参照してください。

## ヘルプを求める

顧客をサポートするには、[ヘルプリクエスト Issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?description_template=SupportTemplateRequest-SelfHostedModels) を作成し、[#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F) Slack チャンネルで共有してください。

[#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F) Slack チャンネルで、他のチームメンバーにヘルプを求めることをためらわないでください。

## 顧客サポート

顧客（既存および見込み）とのコールをよりよくサポートするため、Custom Models は顧客サポートリクエストを優先するエンジニアを提供します。これにより、負荷と知識の両方がチームメンバー間で共有されます。

オンコール期間中、サポートリクエストは 24 時間以内に確認されるべきです。

### サポートのリードエンジニアの責任

- [ヘルプリクエスト](https://gitlab.com/gitlab-com/request-for-help/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Acustom%20models&first_page_size=20)をトリアージする。
- [#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F) Slack チャンネルで届くリクエストを監視する。
- ヘルプリクエスト Issue が作成されていることを確認する。
- Slack でサポートの質問に答え、可能な限り私たちのドキュメントにリダイレクトする。
- 必要に応じて Solution Architect や営業担当者が主導する顧客コールに参加し、解決またはサポートエンジニアへの引き継ぎが完了するまで顧客とのコミュニケーションを所有する。
- 直面した問題の結果に基づいて行動する。
   1. SA や顧客がより自立できるよう、ドキュメントを追加できるか？
   1. より良いツールによって Issue を改善できるか？ 必要な変更を含む Issue を作成する。
   1. それは私たちが見逃したバグだったか？ 次回どうすれば避けられるか？
- 対応できない場合は、エンジニアリングマネージャーとバックアップエンジニアに事前に通知する。
- 必要なコンテキストをサポートの次のエンジニアに引き継ぐ。

サポートのエンジニアに期待されないことは以下のとおりです。

- 希望する勤務時間外に対応すること。ただし、一部のリクエストは緊急の場合があり、翌営業日の最初に取り組むべきです。そのような状況については、エンジニアリングマネージャーとプロダクトマネージャーに相談してください
- 顧客コールを主導すること。特定のケースで別途議論されない限り
- デモを提示すること。特定のケースで別途議論されない限り

### バックアップエンジニアの責任

- シャドウとして顧客コールに参加する。あなたの主な役割は、議論されるやり取りや問題を注意深く観察し傾聴することですが、要請に応じてリードエンジニアを支援する準備もしておいてください。
- 予期せぬ事情でリードエンジニアが対応できない場合に、サポートのリードエンジニアを支援する。
- 前週から持ち越された未完了のサポートタスクを引き継ぐ。

## ピングの確認

Slack または GitLab で名前を指定して ping された場合は、以下のいずれかで ping を確認してください。

- スレッド内のコメント
- 絵文字

## 休暇

チームメンバーは、エンジニアリングマネージャーがキャパシティ計画の際に正しい休暇日数を使用できるよう、「Workday」Slack アプリにすべての[有給休暇](/handbook/people-group/time-off-and-absence/time-off-types/)を追加すべきです。可能な場合は、マイルストーン 1 つ分前に休暇を追加するようにしてください。

直前の計画外の PTO のニーズは常に発生しうることは認識しています。必要な休暇は取得してください。ただし、Workday に入力し、できるだけ早く EM とコミュニケーションを取ってください。

## アドホックな同期コール {#ad-hoc-sync-calls}

私たちはデフォルトで非同期コミュニケーションを使って運営しています。同期的な議論が有益な場合もあり、私たちは必要に応じてチームメンバーが必要なチームメンバーと同期コールをスケジュールすることを推奨します。
</content>
