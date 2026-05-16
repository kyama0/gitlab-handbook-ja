---
title: "Create:Code Review BE チーム"
description: Create:Code Review BE チームは、Create ステージの Code Review グループに含まれるプロダクトカテゴリーのバックエンド側面のすべてを担当しています。
upstream_path: /handbook/engineering/devops/create/code-review/backend/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-06T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-19T18:17:46+01:00"
---

## チームのビジョンとミッション

これらのプロダクトの現在の戦略と 1 年計画については、[Code Review Workflow](https://about.gitlab.com/direction/create/code_review_workflow/) と [GitLab CLI](https://about.gitlab.com/direction/create/gitlab_cli/) のカテゴリー方針を参照してください。

## 主要な責務

Create:Code Review BE チームは、[DevOps ライフサイクル](/handbook/product/categories/#devops-stages)の [Create ステージ](/handbook/product/categories/#create-stage)に属する [Code Review グループ](/handbook/product/categories/#code-review-group)のプロダクトカテゴリーのバックエンドに関するすべての側面を担当します。

- [Code Review Workflow](https://about.gitlab.com/stages-devops-lifecycle/create/)、主に[マージリクエスト](https://docs.gitlab.com/ee/user/project/merge_requests/)機能
- [GitLab CLI](https://gitlab.com/gitlab-org/cli)

## グループメンバー

以下のメンバーが Create:Code Review グループの恒久的なメンバーです。

{{< team-by-manager-role role="Engineering Manager, Create:Code Review" team="Code Review" >}}

## ステーブルカウンターパート

他の機能チームから、以下のメンバーが私たちのステーブルカウンターパートとなっています。

{{< engineering/stable-counterparts role="Code Review" manager-role="Engineering Manager, Create:Code Review" >}}

## 共通リンク

- GitLab チームハンドル: [`@code-review-be`](https://gitlab.com/code-review-be)
- Slack チャンネル: [`#g_create_code-review`](https://gitlab.enterprise.slack.com/archives/C01EMBKS5DW)
- Slack ハンドル: `@code_review_be`
- Issue トラッカー: [`create-stage/code-review-be`](https://gitlab.com/gitlab-com/create-stage/code-review-be)

## よく監視している Issue リスト

- [プランニング Issue](https://gitlab.com/gitlab-org/create-stage/-/issues/?sort=due_date&state=opened&label_name%5B%5D=group%3A%3Acode%20review&label_name%5B%5D=Planning%20Issue)
- [OKR](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=title_asc&state=opened&label_name%5B%5D=devops%3A%3Acreate&label_name%5B%5D=group%3A%3Acode%20review&label_name%5B%5D=backend)
- [リリースボード](https://gitlab.com/groups/gitlab-org/-/boards/2159734)
- [ワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/2365724)（`milestone` フィルターを忘れずに追加してください）
- [信頼性](https://gitlab.com/gitlab-org/gitlab/-/boards/4227439?not[label_name][]=type%3A%3Afeature&label_name[]=group%3A%3Acode%20review)
- [セキュリティ](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=due_date&state=opened&label_name%5B%5D=security&label_name%5B%5D=group%3A%3Acode%20review&amp;not%5Blabel_name%5D%5B%5D=type%3A%3Afeature)
- [InfraDev Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=due_date&state=opened&label_name%5B%5D=infradev&label_name%5B%5D=group%3A%3Acode%20review&amp;not%5Blabel_name%5D%5B%5D=type%3A%3Afeature&amp;not%5Blabel_name%5D%5B%5D=severity%3A%3A4)

## メトリクスと KPI

ダッシュボードはこちらにあります。

- [Centralized Engineering Metrics](https://10az.online.tableau.com/#/site/gitlab/views/TopEngineeringMetrics_16989570521080/TopEngineeringMetricsDashboard)

## 私たちの働き方

Code Review メインページの[作業セクション](/handbook/engineering/devops/create/code-review/#work)を参照してください。

### 私たちのチームと協働する

注目度の高いいくつかの機能 — マージリクエストページ、承認ルールなど — の管理者として、私たちは多くの問い合わせや、それらの機能・依存機能に関する支援や情報提供のリクエストを受け取ります。私たちは[コラボレーション](/handbook/values/#collaboration)と[結果](/handbook/values/#results)の観点からこれらを歓迎し、迅速な応答に努めますが、同時に[効率性](/handbook/values/#efficiency)の価値ともバランスを取らなければなりません。

私たちの目標は、入ってくるリクエストに 2 営業日以内に応答することですが、チームメンバーの状況、経験、ワークロードによっては、それより早く応答することが多々あります。

GitLab で Code Review BE チームに連絡するには、`@code-review-be` ハンドルを利用できます。

### お知らせ Issue

チーム内に情報を行き渡らせ、透明性を高めるため、チーム全体への発表には Slack ではなくお知らせ Issue を使用しています。これらの Issue は固定の頻度ではなく、必要に応じて発信されます。

お知らせ Issue は `~Announcements` ラベルが付き、通常はバックエンドエンジニアとエンジニアリングマネージャーを対象とします。[お知らせ Issue テンプレート](https://gitlab.com/gitlab-com/create-stage/code-review-be/-/issues/new?description_template=announcement) では、プロダクトマネージャーやステーブルカウンターパートにも通知するオプションを選べます。

このフォーマットを使ってお知らせを共有することは、チーム内の誰でも行えます。軽微な内容や繰り返しのお知らせは、引き続き Slack で送ることもあります（例: PTO のマイルストーンリマインダーなど）。

### フォローアップ Issue

リリースで何かに取り組んだ結果、技術的負債、フィーチャーフラグの展開や削除、その Issue のためのブロッキングしないタスクなどが残ることがあります。これらに対しては、少なくとも次の 2 つの方法で対処できます。

- フォローアップ Issue に適切な将来のマイルストーンを設定し、ウェイトと、この Issue に取り組む重要性についての良い説明を付ける。
- Issue を、関連する[プランニング Issue](https://gitlab.com/gitlab-org/create-stage/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Acode%20review&search=planning) に追加する。

[Definition of Done](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#definition-of-done) の一部であるフォローアップ作業は、原則として自分で引き受けるべきです。できれば元の作業と同じマイルストーン、または直後のマイルストーンで行うのが望ましいです。これがかなりの量の作業になる場合は、スケジュール判断に影響する可能性があるため、マネージャーに知らせてください。

フォローアップ Issue が多くなる場合は、エピックの作成も検討してください。

### バックエンドとフロントエンドの Issue

多くの Issue ではバックエンドとフロントエンドの両方の作業が必要ですが、それらの作業量は同じとは限りません。Issue には 1 つしかウェイトを設定できないため、こうした場合はスコープラベル `~backend-weight::<number>` と `~frontend-weight::<number>` を代わりに使います。

### 何に取り組むか

取り組むべきことの主な情報源は、現在のイテレーションサイクルの [Code Review Release ボード](https://gitlab.com/groups/gitlab-org/-/boards/2159734?milestone_title=Started)で、
このサイクルにスケジュール済みの Deliverable と Stretch の Issue がすべてリストされています。

リストはプロダクトマネージャーとエンジニアリングマネージャーが、チームや他のステークホルダーからのインプットを踏まえて[マイルストーンプランニングプロセス](/handbook/engineering/devops/create/code-review/backend/manager)に従って作成します。
イテレーションサイクルは、その月の第 3 木曜日の前の月曜日に始まり、リリース予定の GitLab バージョンによって識別されます。

[Code Review backend _アサインメント_ Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/2142016?milestone_title=Started)もあります。これも同じ Deliverable と Stretch の Issue を表示しますが、アサイン先別にグループ化されており、左端のリストは現在どのバックエンドエンジニアにもアサインされていない Issue を表示します。

#### まず何に取り組むか

Deliverable は最優先と位置づけられ、月の第 3 木曜日の前の金曜日に終わるイテレーションサイクル内に完了することが期待されます。これは、[月次リリース](/handbook/engineering/releases/)に間に合わせるためです。

これらの最優先 Issue はマイルストーン開始時かそれ以前にエンジニアにアサインされ、エンジニアはそのサイクル内に最善を尽くして完了させ、成功を妨げる事態が生じた場合はエンジニアリングマネージャーに知らせる責任があります。
自分にアサインされた Issue は [Code Review backend アサインメント Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/2142016?milestone_title=Started)で確認できます。

1 ヶ月の間にはさまざまなことが起こり、Deliverable がサイクルの終わりまでに実際には完了しないという結果になることがあります。これは通常、エンジニアリングマネージャーがその Issue のウェイトの見積もりに楽観的すぎたか、エンジニアの他の責任が想定より時間を要した、ということを示すものですが、それでもエンジニアリングマネージャーにとってサプライズであってはなりません。

この潜在的な結末が早く予測・共有されるほど、Deliverable のスコープを縮める、まだ着手されていない Deliverable をより時間のあるエンジニアにバトンタッチするなど、それを防ぐためにできることを探る時間が増えます。
それでも回避できず Deliverable がサイクルを跨いでしまう場合は、単に次のサイクルに移して仕上げ、エンジニアとエンジニアリングマネージャーは振り返りを通じて学ぶ機会とします。

一般に、Deliverable はその月の作業時間の約 75% を占めることが期待されます。残りの 25% は、コードレビュー、コミュニティのマージリクエストへのコーチング、[Slack で人を助ける、Issue でディスカッションに参加する](/handbook/values/#collaboration)などのその他の責務、加えてその月の途中で発生してすぐに対応すべき Issue（リグレッション、セキュリティ Issue、お客様の Issue など）に充てられます。

#### 次に何に取り組むか

Deliverable とその他の活動を終えてもまだ余裕がある場合は、残り時間を Stretch Issue に充てることができます。Stretch Issue も同じ Issue ボードにあります。

これらは優先度が低めの Issue で、イテレーションサイクル内に完了することは _求められていません_。次のサイクルの Deliverable となる予定なので、事前に進められればボーナスとなります。

Stretch Issue は通常、人に直接アサインされません。ただし、明らかに最適な担当者がいる場合（最近誰かが行った作業に関連する技術的負債やバグ、あるいは以前に始めたが終わらせる機会がなかった Issue など）は例外です。

Stretch Issue がまだ自分にアサインされていない場合は、[Code Review Release ボードを絞り込んで](https://gitlab.com/groups/gitlab-org/-/boards/2159734?&assignee_id=None&milestone_title=Started)新しいものをピックアップできます。

すぐに着手できない事情（質問が未回答、要件が不明瞭など）がある場合は、その Issue を一旦スキップして別の Issue を検討して構いません。ただし、次に取り組むエンジニアがより良い状態で見つけられるように、自分が調べたことや疑問を Issue に書き残してください。

Stretch Issue を取り上げる代わりに、プロダクトや会社全体に大きなプラスのインパクトを与えると信じる別のことに余裕時間を使うことを選んでも構いません。
[一般ガイドライン](/handbook/values/)にあるとおり、「インスピレーションは儚いものだと認識しているので、比較的短い時間で大きな成果を生み出せそうなことに熱中している場合は、それに取り組んで構いません」。

私たちはメンバーが[1 人のマネージャー](/handbook/values/#efficiency)であることを期待し、[硬直よりも責任](/handbook/values/#efficiency)を選ぶため、
Issue ボードに無いことに取り組むときに許可を求める必要はありません。ただし、他の責務も忘れずに、Issue が存在し、それが自分にアサインされていることを確認し、[#g_create_code-review](https://gitlab.slack.com/archives/g_create_code-review) で共有することを検討してください。

### ディープダイブ

{{% include "includes/engineering/create/deep-dives.md" %}}

### 可用性とパフォーマンスの監視

Create:Code Review BE チームは、いくつかの API エンドポイントとコントローラーアクションが利用可能（つまりエラーや 500 を出さない）かつパフォーマンスが目標値以下（つまりレイテンシ目標を下回る）であり続けることに責任を持ちます。

#### 可用性ダッシュボード

私たちは、エラーバジェットや機能利用者に影響する Issue を監視・特定するために、以下のダッシュボードを使用します。

- [(Grafana) Code Review: group error budget detail](https://dashboards.gitlab.net/d/stage-groups-detail-code_review)（社内のみ）
- [(Sentry) Code Review Workflow - Users experiencing errors](https://new-sentry.gitlab.net/organizations/gitlab/dashboard/27/?dataset=events&project=3&statsPeriod=24h)（社内のみ）
- [(Sentry) MR Homepage - Users experiencing errors](https://new-sentry.gitlab.net/organizations/gitlab/dashboard/33)（社内のみ）

根本原因分析のために、サイト全体やインフラの不安定性が問題を引き起こしていないかを以下の方法で確認します。

- 他のステージグループでも同じ apdex / エラーパターンが見られないか確認: [stage groups](https://dashboards.gitlab.net/dashboards/f/stage-groups/stage-groups)
- 影響を見るためにシステム別のダッシュボードを確認:
  - [sidekiq: Overview](https://dashboards.gitlab.net/d/sidekiq-main/sidekiq3a-overview)
  - [sidekiq: Shard detail](https://dashboards.gitlab.net/d/sidekiq-shard-detail/sidekiq3a-shard-detail)
- [gitlab-com/gl-infra/production/-/issues](https://gitlab.com/gitlab-com/gl-infra/production/-/issues?sort=created_date&state=opened&first_page_size=100) で最近のインシデントを検索

#### 監視の自動化

私たちの機能カテゴリーに影響するイベントのアラートは、Slack チャンネル [#g_create_code-review_alerts](https://gitlab.enterprise.slack.com/archives/C082E78PJJK) に投稿されます。

- Prometheus SLO 違反アラート（[設定](https://gitlab.com/gitlab-com/runbooks/-/blob/aab93b33baa1da414f4d03454f887c78d7222463/services/teams.yml#L253-262)）
- ユーザーがエラーに遭遇していることを示す Sentry アラート:
  - すべての Code Review Workflow エラー（[設定](https://new-sentry.gitlab.net/organizations/gitlab/alerts/rules/details/9)）
  - MR ホームページ API エラー（[設定](https://new-sentry.gitlab.net/organizations/gitlab/alerts/rules/details/16)）

毎週月曜日には、過去 1 週間の 7 日エラーバジェットが [#g_create_code-review](https://gitlab.enterprise.slack.com/archives/C01EMBKS5DW) に自動的に投稿されます。

以下のデータベース関連の問題については、Issue が自動で作成されます。

- [テーブルの成長異常](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-com/-/issues/?state=opened&label_name%5B%5D=anomaly&label_name%5B%5D=group%3A%3Acode_review)
- [テーブルサイズが上限に近づく / 超えている](https://gitlab.com/gitlab-org/gitlab/-/issues/?state=opened&label_name%5B%5D=database%3A%3Atable%20size&label_name%5B%5D=group%3A%3Acode%20review)

#### パフォーマンスダッシュボード

エンドポイント / アクションでグループ化し、P90（遅い順）でソートされた Kibana ダッシュボード:

- [Create::Code Review Controller Actions](https://log.gprd.gitlab.net/app/visualize#/edit/f21d2820-8643-11eb-966b-2361593353f9?_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-7d%2Cto%3Anow)))（社内のみ）
- [Create::Code Review: API Endpoints](https://log.gprd.gitlab.net/app/visualize#/edit/89f9a6f0-8644-11eb-a990-d72c312ff8e9?_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-7d%2Cto%3Anow)))（社内のみ）
- [Create::Code Review: Sidekiq Workers](https://log.gprd.gitlab.net/goto/b73a4a65e136eeedfa00b404a009e31f)（社内のみ）

Grafana ダッシュボード:

- [general: Application SLI Violations](https://dashboards.gitlab.net/d/general-application-sli-violations/general3a-application-sli-violations?orgId=1&from=now-1h&to=now&timezone=utc&var-PROMETHEUS_DS=mimir-gitlab-gprd&var-environment=gprd&var-environment-2=gprd&var-stage=main&var-product_stage=$__all&var-stage_group=code_review&var-component=$__all): エンドポイントごとの apdex とエラー率
- [stage-groups: Code Review: Group dashboard](https://dashboards.gitlab.net/d/stage-groups-code_review/stage-groups-group-dashboard-create-code-review?orgId=1): 各アクションやエンドポイントのより詳細な情報

AI 機能の監視に特化したダッシュボードもあります: [Create: Code Review: AI Features](https://log.gprd.gitlab.net/app/dashboards#/view/f959393c-82c1-4b69-a4d3-2446aab9476c?_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-7d%2Cto%3Anow)))（社内のみ）。このダッシュボードは Code Review の AI 機能のパフォーマンスを監視しており、特に Sidekiq と GraphQL の操作の P50（中央値）の所要時間を追跡します。

#### Issue の特定プロセス

1. 過去 1 週間の 7 日エラーバジェットが赤の場合、根本原因を特定するための調査 Issue を作成します（[例](https://gitlab.com/gitlab-org/gitlab/-/issues/584137)）。
2. エラーバジェットに大きく寄与しているエンドポイントやワーカーを特定した場合は、Issue を作成し（まだ無ければ）、私たちの[深刻度](/handbook/product-development/how-we-work/issue-triage/#severity)と[優先度](/handbook/product-development/how-we-work/issue-triage/#priority)の基準に基づきラベル付けします。
   - すでに Issue がある場合は、深刻度／優先度の更新が必要かを確認します。
3. パフォーマンスの Issue は専用の GLQL ビューを使ってプランニング時に自動的に表面化させ、それに応じて優先度を付けます。

## エンジニアリングオンボーディング

オンボーディングを開始するには、[バックエンドエンジニア向けの Code Review オンボーディングテンプレート](https://gitlab.com/gitlab-com/create-stage/code-review-be/-/issues/new?description_template=onboarding)を使って Issue を作成してください。

## その他の関連ページ

- [Create:Code Review BE エンジニア向けリソース](/handbook/engineering/devops/create/code-review/backend/engineers)。チームビルディングやキャリア開発などの内容です。
- [Create:Code Review BE エンジニアリングマネージャーの責務](/handbook/engineering/devops/create/code-review/backend/manager)。マイルストーンプランニング、人材アセスメント、プロジェクトマネジメントなどの内容です。
- [Create:Code Review AI prompts](/handbook/engineering/devops/create/code-review/ai-prompts/)。私たちが効率を高めるためによく使うプロンプト集です。
