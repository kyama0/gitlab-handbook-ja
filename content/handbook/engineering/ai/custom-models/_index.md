---
title: Custom Models グループ
description: "Custom Models グループは、お客様固有のデータやユースケースをサポートするため、GitLab Duo の機能を支える追加のカスタムモデルに注力しています。"
upstream_path: /handbook/engineering/ai/custom-models/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-06T00:00:00Z"
translator: claude
stale: false
---

## ビジョン

Custom Models グループは、お客様固有のデータやユースケースをサポートするため、GitLab Duo の機能を支える追加のカスタムモデルに注力しています。

## 組織

AI-powered:Custom Models チームは、GitLab の Custom Model 機能群に注力し、[DevOps ライフサイクル](/handbook/product/categories/#devops-stages) における [AI Powered ステージ](/handbook/product/categories/#ai-powered-stage) の [Custom Models グループ](/handbook/product/categories/#custom-models-group) に属するすべてのプロダクトカテゴリのバックエンド面を担当しています。私たちのプロダクト方針は [Category Direction - Custom Models Management](https://about.gitlab.com/direction/ai-powered/custom_models/) ページにあります。

私たちが取り組んでいる機能は [Features by Group ページ](/handbook/product/categories/features/#custom-models) に掲載されています。

### チームメンバー

**エンジニアリングマネージャーとエンジニア**

{{< team-by-manager-slug "aying-gl" >}}

**Stable Counterpart**

以下の他職能チームのメンバーが私たちの stable counterpart です。

| **氏名**                                                 | **役割** |
| ---------------------------------------------------------| ------------------------------------------------------------------------------- |
| [Jordan Janes](/handbook/company/team#jordanjanes  )     | [Principal Product Manager](/job-description-library/product/product-manager/) |

### 連絡方法

- Issue Tracker: [`~group::custom models`](https://gitlab.com/dashboard/issues?sort=title_asc&state=opened&label_name[]=group::custom+models)
- Slack チャンネル: [#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F)
- ラベル購読: [`~group::custom models`](https://gitlab.com/groups/gitlab-com/-/labels?subscribed=&search=group%3A%3Acustom+models)

#### 組織ラベル

Custom Models グループが所有する Issue には、必要に応じて以下のラベルを付けるべきです。

- `~"group::custom models"`
- `~"devops::ai-powered"`
- `~"section::data science"`
- `~"Category:Model personalization"`
- `~"Category:Self-Hosted models"`

加えて、Issue には適切な `~type:` ラベルとサブタイプラベルを含めるべきです。

## Epic と Tech Lead を使ったスコープ設定

Epic は、1 つの Issue より大きいすべての作業項目に対するスコープの主要な定義として使用すべきです。これは新機能、複雑なリファクタリング、バグなどです。Epic に含まれる Issue が作業項目全体のスコープを構成し、すべてがクローズされたときに作業が完了し、Epic がクローズされます。Epic は明確な改善を加えるイテレーションを内包するべきですが、必ずしも機能全体を表すわけではなく、複数の Epic が必要になることもあります。

Epic で定義された個々の作業項目の技術的オーナーシップは、エンジニアである「Tech Lead」に委譲されます。エンジニアは Epic にアサインされ、スコープが正しいことを確認します。Tech Lead は EM、PM、他のエンジニアと協力して作業します。

Tech Lead 自身を含め、チームの任意のエンジニアが、Kanban プロセスを使ってセルフアサインで Epic 内の Issue に取り組めます。

## チームのマイルストーンプランニングプロセス

Custom Models は [Product Development Flow](/handbook/product-development/how-we-work/product-development-flow/) と [Cross Functional Prioritization](/handbook/engineering/workflow/cross-functional-prioritization/) に従います。チームはプランニング Issue とボードを使ってプランニングプロセスを管理します。このプロセスを容易にするための [プランニング自動化](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models/-/blob/main/doc/planning/index.md) スクリプトが利用可能です。
各マイルストーンの [プランニング Issue](https://gitlab.com/groups/gitlab-org/-/epics/13440) は PM によって作成され、PM、EM、stable counterpart 間で今後の作業を調整するために使用されます。

各マイルストーン中に、次のマイルストーンのためのプランニングが完了します。次の活動が行われます。

- プランニング Issue とボードの作成（EM または PM）
- リファインメント Issue は [自動化](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models/-/merge_requests/95) によって毎週作成される
- マイルストーンの候補 Issue の特定とプランニングボードへの追加（PM、EM、SET）
- チームメンバーのキャパシティプランニング（EM）
- ウェイトを使った労力の見積もり（エンジニアと EM）
- プランニングボードを最終化するための合同プランニングセッション（PM、EM、SET）
- エンジニアへの作業の割り当て、`~Deliverable` ラベルの追加、プランニング Issue の更新（EM）

### プランニング Issue

毎月、PM が自動化と [Custom Models Planning テンプレート](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models/-/blob/main/.gitlab/issue_templates/milestone-planning-template.md) を使ってプランニング Issue を作成します。これは、特定のマイルストーンに関するプランニングチームメンバー（PM、EM、Software Engineer in Test (SET)）の議論エリアであり、Planning Board と Build Board へのリンクが張られます。

### プランニングボード

[Planning Board](https://gitlab.com/groups/gitlab-org/-/boards/7762631?milestone_title=17.7&label_name[]=group%3A%3Acustom%20models) は各マイルストーンに対して PM によって作成され、カテゴリ別にキュレーションされた Issue のリストです。プランニングボードは Issue で過剰に埋まることがあり、超過分はプランニングコール中に次マイルストーンまたは Next 1-3 Milestones ボードに移動されます。

PM は Issue に `~workflow::planning breakdown` をマークします。これは EM に対して、Issue 説明が明確で開発の準備ができていることを確認するため、エンジニアにレビューを依頼するよう合図するものです。エンジニアはその後ウェイトを割り当て、`~workflow::ready for development` ラベルを適用します。

### Issue リファインメントの自動化

毎週、Issue リファインメントを支援するために [Custom Models プロジェクト](https://gitlab.com/gitlab-org/ai-powered/custom-models/custom-models) 内に新しい Issue が作成されます。

エンジニアは毎週 Issue をリファインし、タスクをレビューして複雑度を見積もり、開発に向けて準備します。リファインメントプロセス中に、必要な作業を評価し、必要に応じて実装計画を追加し、[ウェイト](#issue-weights) を加えて、Issue を [開発準備完了](#ready-for-development-status) としてマークします。このプロセスにより、Issue が開発開始前にしっかり定義されていることを保証します。

### 開発準備完了ステータス

エンジニアが取り組む準備ができている Issue は `workflow::ready for development` ラベルが付けられます。このラベルが付いている Issue のみを Deliverable としてエンジニアにアサインすべきです。研究が必要な場合は `~spike` ラベルが割り当てられますが、spike のスコープは Issue に明確に記載されるべきで、結果としてコードが書かれるか、リファインされた Issue が作成されることがあります。

### キャパシティプランニング用スプレッドシート

EM は、チームのキャパシティを計算するための [Google スプレッドシート](https://docs.google.com/spreadsheets/d/18LhwZpsJ6G-1GBv0EDOq0E7EIAMpgsHqEg8Dn5GJmz0/edit#gid=1428069441)（_GitLab 社内のみ_）を維持しており、同じスプレッドシートはウェイトと優先度に基づいてリリースに Issue を割り当てるプロセスにも使用されます。EM はチームのキャパシティをプランニング Issue に投稿します。

### Build Board

EM は次の基準に基づいて [Planning Board](#planning-board) から Issue を選びます。

- 前マイルストーンのスリッページ
- PM の選好
- ウェイト
- 優先度

EM はその後、リリースの各 Issue に `~Deliverable` ラベルを適用してエンジニアにアサインします。Issue は Build Board でリリースを通じて追跡されます。

### Say / Do 比率

Say / Do 比率は `Completed Issues / Assigned Issues` の式で計算されます。

- `~Deliverable` ラベルが付いた状態で Build Board に追加された Issue が Assigned Issues
- マイルストーン終了までにクローズされた Issue が Completed Issues

### Issue ウェイト

Issue を閉じるための作業見積もりとして各 Issue にウェイトが割り当てられます。ウェイト 1 はおおよそ 2 営業日の労力です。一般的に Issue はウェイト 3 より上には付けられません。それより大きなウェイトは Issue をさらに分解すべきことを示します。

### プランニングと配信ボード

[Product Development Flow](/handbook/product-development/how-we-work/product-development-flow/) のすべてのワークフローステータスが有効であり、ボードに紐づくステータスとマイルストーンは以下のとおりです。

[Next 1-3](https://gitlab.com/groups/gitlab-org/-/boards/7472817?milestone_title=Next%201-3%20releases&label_name[]=group%3A%3Acustom%20models) と [Next 4-6 milestones](https://gitlab.com/groups/gitlab-org/-/boards/7472821?milestone_title=Next%204-6%20releases&label_name[]=group%3A%3Acustom%20models) ボードは、リファインメントが必要な Issue や取り組む準備ができている Issue を保持するために使用されます。

| ボード       | フィルタ           | カラム            |
|-------------|-------------------|--------------------|
| Planning Board | Milestone, `~group::custom models` | `~type::bug`, `~type::maintenance`, `~type::feature` |
| Build Board    | Milestone, `~group::custom models`, `~Deliverable` | `~workflow::ready for development`, `~workflow::in dev`, `~workflow::in review`, `~workflow::awaiting security release`, `~workflow::blocked` |
| Next 1-3 Milestones | `%Next 1-3 Milestones` | `~workflow::problem validation`, `~workflow::problem validation`, `~workflow::design`, `~workflow::solution validation`, `~workflow::planning breakdown`, `~workflow::ready for development`     |
| Next 4-6 Milestones | `%Next 4-6 Milestones` | `Next 1-3 Milestones` と同じ     |

### Issue マイルストーン

- Issue は、取り組む予定または現在取り組んでいる場合、現在または次のマイルストーンが割り当てられます。
- Issue が取り組む予定がない場合は `%Backlog` のマイルストーンが割り当てられますが、コミュニティコントリビューションによって対応される可能性はあります。
- マイルストーンが `%Awaiting Customer Feedback` の Issue は、顧客の関心待ちで取り組まれる可能性があります。

[Issue triage report](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/17099) は、マイルストーン割り当てが必要な Issue を強調表示します。

## ブログ記事

Custom Model のチームメンバーが書いたブログ記事

- [Developing GitLab Duo: How we validate and test AI models at scale](https://about.gitlab.com/blog/2024/05/09/developing-gitlab-duo-how-we-validate-and-test-ai-models-at-scale/) [@susie.bee](https://gitlab.com/susie.bee)
- [GitLab Duo Self-Hosted: Enterprise AI built for data privacy](https://about.gitlab.com/blog/2025/02/27/gitlab-duo-self-hosted-enterprise-ai-built-for-data-privacy/) [@susie.bee](https://gitlab.com/susie.bee)
- [Speed meets governance: Model Selection comes to GitLab Duo](https://about.gitlab.com/blog/speed-meets-governance-model-selection-comes-to-gitlab-duo/) [@susie.bee](https://gitlab.com/susie.bee)

## コミュニケーション

Custom Models は次のガイドラインに基づいてコミュニケーションを取ります。

1. 同期ミーティングよりも常に非同期コミュニケーションを優先する。
1. 非同期が非効率的になっている場合は、[同期コール](#ad-hoc-sync-calls) のセットアップをためらわず、ただし常に録画してチームメンバーと共有するよう努める。
1. [デフォルトで透明性](/handbook/security/transparency-by-default/)
1. 業務関連コミュニケーションの主要チャネルは [#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F) Slack チャンネル。
1. 社内のチーム Issue とプロジェクトは [`gitlab-org/ai-powered/custom-models`](https://gitlab.com/gitlab-org/ai-powered/custom-models) 配下に名前空間化されている。

## LLM ジャッジ

LLM を活用したアプリケーションの開発において、Custom Models チームはモデル評価のために異なる LLM をジャッジとして使用できます。Custom Models チームは、以下の要件のもとで OpenAI モデルをジャッジとして使用する許可を得ています。

- 入力に関しては、OpenAI が私たちの入力をサービス改善に使うことが許可されているため、独自情報、SAFE 情報、その他の機密情報を OpenAI モデルへの入力として提供しないようにしてください。
- 出力に関しては、通常の制限と同様に、ChatGPT または GPT が生成した出力を GitLab の Issue、MR、マーケティング資料、その他のコンテンツに追加しないようにしてください。
- モデルから自動的またはプログラム的にデータや出力を抽出することはできません。つまり、自動ベンチマークはおそらく不可です。同様に、レート制限や制約を回避することを含め、サービスを妨害したり混乱させたりすることはできません。
- OpenAI が私たちの入力／出力をモデル学習に使うことをオプトアウトできるので、[こちら](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance) の手順に従ってオプトアウトしてください。

詳細なコンテキストは [この社内ノート](https://gitlab.com/gitlab-org/gitlab/-/issues/470559#note_1997562193) を参照してください。

## ヘルプを求める

顧客サポートのためには、[ヘルプリクエスト Issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?description_template=SupportTemplateRequest-SelfHostedModels) を作成し、[#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F) Slack チャンネルで共有してください。

[#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F) Slack チャンネルで他のチームメンバーに気軽に助けを求めてください。

## 顧客サポート

顧客（既存および見込み）とのコールをよりよくサポートするため、Custom Models は顧客サポートリクエストを優先するエンジニアを提供します。これにより、負荷と知識の両方がチームメンバー間で共有されます。

オンコール期間中、サポートリクエストは 24 時間以内に確認するべきです。

### サポート担当のリードエンジニアの責任

- [ヘルプリクエスト](https://gitlab.com/gitlab-com/request-for-help/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Acustom%20models&first_page_size=20) のトリアージ。
- [#g_custom_models](https://gitlab.enterprise.slack.com/archives/C06DCB3N96F) Slack チャンネルで届くリクエストを監視。
- ヘルプリクエスト Issue が作成されることを確認。
- 可能な限りドキュメントへリダイレクトしながら、Slack でサポート質問に回答。
- 必要に応じてソリューションアーキテクトや営業担当主導の顧客コールに参加し、解決またはサポートエンジニアへの引き継ぎまで顧客とのコミュニケーションを所有。
- 直面した問題の結果に対するアクション:
   1. SA や顧客が自立できるようドキュメントを追加できるか?
   1. より良いツーリングで Issue を改善できるか? 必要な変更を含む Issue を作成。
   1. キャッチできなかったバグだったか? 次回どう避けられるか?
- 不在になる場合は事前にエンジニアリングマネージャーとバックアップエンジニアに通知。
- 次のサポート担当エンジニアに必要なコンテキストを引き継ぐ。

サポート担当エンジニアに **期待されない** こと:

- 自分の好む業務時間外に対応すること。ただし、緊急のリクエストは翌営業日の早い時間に対応すべき。これらの状況についてはエンジニアリングマネージャーおよびプロダクトマネージャーと相談する。
- 顧客コールをリードすること（特定のケースで別途議論された場合を除く）
- デモを行うこと（特定のケースで別途議論された場合を除く）

### バックアップエンジニアの責任

- シャドウとして顧客コールに参加。主な役割は、議論されているやり取りや Issue を観察して注意深く聞くことですが、リードエンジニアからの依頼に応じて支援する準備もしておく。
- 不測の事態でリードエンジニアが対応できない場合に支援。
- 前週から未完のサポートタスクを引き継ぐ。

## メンションへの確認

Slack や GitLab で名指しでメンションされた場合は、次のいずれかでメンションを確認してください。

- スレッドコメント
- 絵文字

## 休暇

チームメンバーは、エンジニアリングマネージャーがキャパシティプランニング中に正しい休暇日数を使えるよう、[有給休暇](/handbook/people-group/time-off-and-absence/time-off-types/) を「Workday」Slack アプリに追加してください。可能であれば、休暇は 1 マイルストーン前に追加してください。

直前の予定外の PTO のニーズが常に発生し得ることは認識しています。必要な時間を取ってください。ただし、Workday に入力し、できるだけ早く EM とコミュニケーションを取ってください。

## アドホック同期コール

私たちはデフォルトで非同期コミュニケーションを利用します。同期での議論が有益な場合もあるため、必要に応じて関係するチームメンバーと同期コールをスケジュールすることを推奨します。
