---
title: "Create:Code Review BE チーム"
description: Create:Code Review BE チームは、Create ステージの Code Review グループに属するプロダクトカテゴリのすべてのバックエンド側面を担当しています。
upstream_path: /handbook/engineering/devops/create/code-review/backend/
upstream_sha: 8e5460327d5f02f1967a05539db73f8e5cfebbb3
translated_at: "2026-04-28T09:42:29Z"
translator: claude
stale: false
---

## チームのビジョンとミッション

[コードレビューワークフロー](https://about.gitlab.com/direction/create/code_review_workflow/)と [GitLab CLI](https://about.gitlab.com/direction/create/gitlab_cli/) のカテゴリ方向性で、これらのプロダクトの現在の戦略と1年計画をご参照ください。

## 主要な責任

Create:Code Review BE チームは、[DevOps ライフサイクル](/handbook/product/categories/#devops-stages)の [Create ステージ](/handbook/product/categories/#create-stage)の [Code Review グループ](/handbook/product/categories/#code-review-group)に属するプロダクトカテゴリのすべてのバックエンド側面を担当しています:

- [コードレビューワークフロー](https://about.gitlab.com/stages-devops-lifecycle/create/)、主に[マージリクエスト](https://docs.gitlab.com/ee/user/project/merge_requests/)機能
- [GitLab CLI](https://gitlab.com/gitlab-org/cli)

## グループメンバー

以下の方々が Create:Code Review グループの常設メンバーです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/create/code-review/backend/#group-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 安定したカウンターパート

他の機能チームの以下のメンバーが私たちの安定したカウンターパートです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/devops/create/code-review/backend/#group-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 共通リンク

- GitLab チームハンドル: [`@code-review-be`](https://gitlab.com/code-review-be)
- Slack チャンネル: [`#g_create_code-review`](https://gitlab.enterprise.slack.com/archives/C01EMBKS5DW)
- Slack ハンドル: `@code_review_be`
- Issue トラッカー: [`create-stage/code-review-be`](https://gitlab.com/gitlab-com/create-stage/code-review-be)

## 常時監視する Issue リスト

- [計画 Issue](https://gitlab.com/gitlab-org/create-stage/-/issues/?sort=due_date&state=opened&label_name%5B%5D=group%3A%3Acode%20review&label_name%5B%5D=Planning%20Issue)
- [OKR](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=title_asc&state=opened&label_name%5B%5D=devops%3A%3Acreate&label_name%5B%5D=group%3A%3Acode%20review&label_name%5B%5D=backend)
- [リリースボード](https://gitlab.com/groups/gitlab-org/-/boards/2159734)
- [ワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/2365724)（`milestone` フィルターを追加することを忘れずに）
- [信頼性](https://gitlab.com/gitlab-org/gitlab/-/boards/4227439?not[label_name][]=type%3A%3Afeature&label_name[]=group%3A%3Acode%20review)
- [セキュリティ](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=due_date&state=opened&label_name%5B%5D=security&label_name%5B%5D=group%3A%3Acode%20review&amp;not%5Blabel_name%5D%5B%5D=type%3A%3Afeature)
- [InfraDev Issues](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=due_date&state=opened&label_name%5B%5D=infradev&label_name%5B%5D=group%3A%3Acode%20review&amp;not%5Blabel_name%5D%5B%5D=type%3A%3Afeature&amp;not%5Blabel_name%5D%5B%5D=severity%3A%3A4)

## メトリクスと KPI

以下のダッシュボードをご参照ください:

- [集中型エンジニアリングメトリクス](https://10az.online.tableau.com/#/site/gitlab/views/TopEngineeringMetrics_16989570521080/TopEngineeringMetricsDashboard)

## 作業方法

メインの Code Review ページの[作業セクション](/handbook/engineering/devops/create/code-review/#work)をご覧ください。

### チームとの協力

マージリクエストページ、承認ルールなど、より注目度の高い機能の管理者として、これらおよびそれが含む依存機能に関する多数の問い合わせや支援・情報のリクエストを受け取ります。[コラボレーション](/handbook/values/#collaboration)と[成果](/handbook/values/#results)の利益のために、これらを歓迎し、迅速に対応するよう努めていますが、[効率性](/handbook/values/#efficiency)の価値もバランスさせる必要があります。

目標として、入ってくるリクエストには2営業日以内に対応しますが、チームメンバーの可用性、経験、ワークロードによっては、より迅速に対応することも多々あります。

GitLab での Code Review BE チームへの連絡には、`@code-review-be` ハンドルを使用できます。

### アナウンスメント Issue

チーム全体への情報配布を促進し透明性を高めるために、チーム全体のメッセージ共有に Slack ではなくアナウンスメント Issue を使用しています。これらの Issue は固定のケイデンスではなく、必要に応じて送信されます。

アナウンスメント Issue は `~Announcements` ラベルが付けられ、通常はバックエンドエンジニアとエンジニアリングマネージャーを対象にしています。[アナウンスメント Issue テンプレート](https://gitlab.com/gitlab-com/create-stage/code-review-be/-/issues/new?description_template=announcement)はプロダクトマネージャーおよび/または安定したカウンターパートへの通知オプションも提供しています。

チームの誰でもこの形式を使ってアナウンスメントを共有できます。マイナーまたは繰り返しのアナウンスメントはまだ Slack 経由で送信される場合があります（例: PTO のマイルストーンリマインダー）。

### フォローアップ Issue

リリースで何かに取り組んだが技術的負債、フィーチャーフラグのロールアウトや削除、Issue の非ブロッキング作業などのタスクが残っている場合、フォローアップ Issue が蓄積します。これらについては、少なくとも2つの方法で対処できます:

- フォローアップ Issue に重みと、その Issue に取り組むことの重要性についての良い説明を付けた適切な将来のマイルストーンを追加する
- Issue を関連する[計画 Issue](https://gitlab.com/gitlab-org/create-stage/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Acode%20review&search=planning)に追加する

一般的に、[完成の定義](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#definition-of-done)の一部であるフォローアップ作業を引き受けるべきです。できれば元の作業と同じマイルストーン、またはすぐ後のマイルストーンで行います。これが相当量の作業を表す場合は、スケジュールの決定に影響する可能性があるため、マネージャーに知らせてください。

フォローアップ Issue が多数ある場合は、エピックの作成を検討してください。

### バックエンドとフロントエンドの Issue

多くの Issue はバックエンドとフロントエンドの両方での作業を必要としますが、その作業の重みは同じではない場合があります。Issue には単一の重みしか設定できないため、この場合は代わりにスコープ付きラベルを使用します: `~backend-weight::<number>` と `~frontend-weight::<number>`。

### 何に取り組むか

取り組むべきことの主要なソースは、現在のイテレーションサイクルの [Code Review リリースボード](https://gitlab.com/groups/gitlab-org/-/boards/2159734?milestone_title=Started)です。これは、このサイクルにスケジュールされたすべての Deliverable と Stretch の Issue をリスト表示します。

リストはプロダクトマネージャーとエンジニアリングマネージャーが[マイルストーン計画プロセス](/handbook/engineering/devops/create/code-review/backend/manager)に従って、チームと他のステークホルダーのインプットを受けてまとめます。イテレーションサイクルは月の第3木曜日前の月曜日に開始し、リリースされる GitLab バージョンで識別されます。

[Code Review バックエンド _割り当て_ Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/2142016?milestone_title=Started)もあります。これは同じ Deliverable と Stretch の Issue を担当者別にグループ化して表示し、左端のリストにはバックエンドエンジニアに現在割り当てられていない Issue が表示されます。

#### 最初に何に取り組むか

Deliverable は最高優先度とみなされ、月の第3木曜日前の金曜日に終了するイテレーションサイクルの最後までに完了することが期待されています。これは[月次リリース](/handbook/engineering/releases/)に間に合わせるためです。

これらの最高優先度 Issue はマイルストーン開始時またはそれ以前にエンジニアに割り当てられ、そのサイクル中に最善を尽くして完了させる責任があります。成功の妨げになるものがあればエンジニアリングマネージャーに知らせる必要があります。
割り当てられた Issue は [Code Review バックエンド割り当て Issue ボード](https://gitlab.com/groups/gitlab-org/-/boards/2142016?milestone_title=Started)で確認できます。

月中には様々なことが起こり、Deliverable が実際にサイクルの終わりまでに完了しない結果になる可能性があります。これは通常、エンジニアリングマネージャーが Issue の重みを楽観的に見積もりすぎたか、エンジニアの他の責任が予想以上に時間を要したことを示していますが、これがエンジニアリングマネージャーへの驚きになってはいけません。

この潜在的な結果が早く予測され伝達されるほど、Deliverable のスコープを縮小したり、まだ開始されていない Deliverable を完了させる時間がより多くあるエンジニアを見つけたりするなど、防ぐために何かできることがあるかどうかを確認する時間が増えます。
この結果が回避できず Deliverable がサイクルを見逃す場合、それは単純に終了するために次のサイクルに移動され、エンジニアとエンジニアリングマネージャーは何が起こったかを振り返り学ぶ機会を得ます。

一般的に、Deliverable は月の作業時間の約75%を占めることが期待されます。残りの25%は他の責任（コードレビュー、コミュニティマージリクエストのコーチング、[Slack での人々の助け、Issue でのディスカッションへの参加](/handbook/values/#collaboration)など）、および月中に発生してすぐに対応する必要がある緊急の Issue（回帰、セキュリティ問題、顧客問題など）のために確保されています。

#### 次に何に取り組むか

Deliverable と他の活動が終了した後に時間がある場合、同じ Issue ボードにある Stretch Issue の作業に残りの時間を費やすことができます。

これらの低優先度 Issue はイテレーションサイクルの終わりまでに完了することは期待されていませんが、_次の_サイクルでの Deliverable となるため、事前に進捗があればボーナスです。

Stretch Issue は通常、誰かが作業する最も適切な人であることが明らかな場合（最近誰かが行った作業に関連した技術的負債やバグ、または以前に開始したが終える機会がなかった Issue など）を除き、直接人に割り当てられません。

まだ割り当てられた Stretch Issue がない場合、[Code Review リリースボードをフィルタリング](https://gitlab.com/groups/gitlab-org/-/boards/2159734?&assignee_id=None&milestone_title=Started)して新しいものを選ぶことができます。

Issue をすぐに開始することを妨げるものがある場合（未回答の質問や不明確な要件など）、Issue をスキップして別の Issue を考えることができます。ただし、次に来るエンジニアがより良い状態で見つけられるように、結果と質問を Issue に入力してください。

Stretch Issue を取り上げる代わりに、プロダクトや会社全体に大きな正の影響を与えると信じる他の何かに余裕時間を費やすことも選択できます。
[一般的なガイドライン](/handbook/values/)が述べているように、「インスピレーションは消えやすいものと認識しているため、比較的短い時間で大きな成果を生む何かに熱狂している場合は、それに取り組んでください。」

私たちは人々が[自分自身のマネージャー](/handbook/values/#efficiency)であることを期待し、[硬直性よりも責任](/handbook/values/#efficiency)を好みます。
そのため、Issue ボードにないものに取り組む場合は許可を求める必要はありませんが、他の責任を念頭に置き、Issue があること、それに割り当てられていること、そして [#g_create_code-review](https://gitlab.slack.com/archives/g_create_code-review) で共有することを検討してください。

### ディープダイブ


<!-- include omitted: includes/engineering/create/deep-dives.md (no localized version under content/ja/) -->


### 可用性とパフォーマンスの監視

Create:Code Review BE チームは、一部の API エンドポイントとコントローラーアクションを可用（つまりエラー/500 を出さない）かつ高性能（つまりレイテンシ目標以下）に保つ責任があります。

#### 可用性ダッシュボード

以下のダッシュボードを使用して、エラーバジェットとフィーチャーユーザーに影響する問題を監視・特定します:

- [（Grafana）Code Review: グループエラーバジェット詳細](https://dashboards.gitlab.net/d/stage-groups-detail-code_review)（内部のみ）
- [（Sentry）Code Review ワークフロー - エラーを経験しているユーザー](https://new-sentry.gitlab.net/organizations/gitlab/dashboard/27/?dataset=events&project=3&statsPeriod=24h)（内部のみ）
- [（Sentry）MR ホームページ - エラーを経験しているユーザー](https://new-sentry.gitlab.net/organizations/gitlab/dashboard/33)（内部のみ）

根本原因分析のために、サイト全体/インフラの不安定性が問題を引き起こしているかどうかを調べます:

- 他のステージグループが同じ apdex/エラーパターンを経験しているかどうかを確認: [ステージグループ](https://dashboards.gitlab.net/dashboards/f/stage-groups/stage-groups)
- 影響のためのシステム固有のダッシュボードを確認:
  - [sidekiq: 概要](https://dashboards.gitlab.net/d/sidekiq-main/sidekiq3a-overview)
  - [sidekiq: シャード詳細](https://dashboards.gitlab.net/d/sidekiq-shard-detail/sidekiq3a-shard-detail)
- [gitlab-com/gl-infra/production/-/issues](https://gitlab.com/gitlab-com/gl-infra/production/-/issues?sort=created_date&state=opened&first_page_size=100) で最近のインシデントを検索

#### 監視の自動化

フィーチャーカテゴリに影響するイベントのアラートは [#g_create_code-review_alerts](https://gitlab.enterprise.slack.com/archives/C082E78PJJK) Slack チャンネルに投稿されます:

- Prometheus SLO 違反アラート（[設定](https://gitlab.com/gitlab-com/runbooks/-/blob/aab93b33baa1da414f4d03454f887c78d7222463/services/teams.yml#L253-262)）
- エラーを経験しているユーザーへの Sentry アラート:
  - すべての Code Review ワークフローエラー（[設定](https://new-sentry.gitlab.net/organizations/gitlab/alerts/rules/details/9)）
  - MR ホームページ API エラー（[設定](https://new-sentry.gitlab.net/organizations/gitlab/alerts/rules/details/16)）

毎週月曜日、過去1週間の7日間エラーバジェットが [#g_create_code-review](https://gitlab.enterprise.slack.com/archives/C01EMBKS5DW) に自動的に投稿されます。

以下のデータベース問題に対して Issue が自動的に作成されます:

- [テーブル成長の異常](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-com/-/issues/?state=opened&label_name%5B%5D=anomaly&label_name%5B%5D=group%3A%3Acode_review)
- [テーブルサイズが限界に近い、または超えている](https://gitlab.com/gitlab-org/gitlab/-/issues/?state=opened&label_name%5B%5D=database%3A%3Atable%20size&label_name%5B%5D=group%3A%3Acode%20review)

#### パフォーマンスダッシュボード

エンドポイント/アクションでグループ化され P90 でソート（最も遅いものが先頭）された Kibana ダッシュボード:

- [Create::Code Review コントローラーアクション](https://log.gprd.gitlab.net/app/visualize#/edit/f21d2820-8643-11eb-966b-2361593353f9?_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-7d%2Cto%3Anow)))（内部のみ）
- [Create::Code Review: API エンドポイント](https://log.gprd.gitlab.net/app/visualize#/edit/89f9a6f0-8644-11eb-a990-d72c312ff8e9?_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-7d%2Cto%3Anow)))（内部のみ）
- [Create::Code Review: Sidekiq ワーカー](https://log.gprd.gitlab.net/goto/b73a4a65e136eeedfa00b404a009e31f)（内部のみ）

Grafana ダッシュボード:

- [general: アプリケーション SLI 違反](https://dashboards.gitlab.net/d/general-application-sli-violations/general3a-application-sli-violations?orgId=1&from=now-1h&to=now&timezone=utc&var-PROMETHEUS_DS=mimir-gitlab-gprd&var-environment=gprd&var-environment-2=gprd&var-stage=main&var-product_stage=$__all&var-stage_group=code_review&var-component=$__all): エンドポイントごとの apdex とエラーレート
- [stage-groups: Code Review: グループダッシュボード](https://dashboards.gitlab.net/d/stage-groups-code_review/stage-groups-group-dashboard-create-code-review?orgId=1): 各アクションとエンドポイントのより詳細な情報

AI 機能の監視に特化したダッシュボードもあります: [Create: Code Review: AI Features](https://log.gprd.gitlab.net/app/dashboards#/view/f959393c-82c1-4b69-a4d3-2446aab9476c?_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-7d%2Cto%3Anow)))（内部のみ）。このダッシュボードはコードレビュー AI 機能のパフォーマンスを監視し、特に Sidekiq と GraphQL 操作の両方の P50（中央値）期間を追跡します。

#### Issue 特定プロセス

1. 過去1週間の7日間エラーバジェットが赤の場合、根本原因を特定するための調査 Issue を作成します（[例](https://gitlab.com/gitlab-org/gitlab/-/issues/584137)）
2. エラーバジェットに大幅に貢献しているエンドポイントまたはワーカーを特定した場合、（まだ作成されていなければ）Issue を作成し、[重大度](/handbook/product-development/how-we-work/issue-triage/#severity)と[優先度](/handbook/product-development/how-we-work/issue-triage/#priority)の基準に基づいてラベルを付けます
   - Issue がすでに作成されている場合、重大度/優先度を更新する必要があるかどうかを確認します
3. パフォーマンス Issue は専用の GLQL ビューを使用して計画中に自動的に表面化され、それに応じて優先順位付けされます

## エンジニアリングオンボーディング

オンボーディングを開始するには、[バックエンドエンジニアの Code Review オンボーディングテンプレート](https://gitlab.com/gitlab-com/create-stage/code-review-be/-/issues/new?description_template=onboarding)を使用して Issue をオープンしてください。

## その他の関連ページ

- [Create:Code Review BE エンジニアリソース](/handbook/engineering/devops/create/code-review/backend/engineers)（チームビルディングやキャリア開発など）
- [Create:Code Review BE エンジニアリングマネージャーの責任](/handbook/engineering/devops/create/code-review/backend/manager)（マイルストーン計画、タレント評価、プロジェクト管理など）
- [Create:Code Review AI プロンプト](/handbook/engineering/devops/create/code-review/ai-prompts/)（より効率的に使用する一般的なプロンプト）
