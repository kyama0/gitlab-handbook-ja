---
title: Global Search グループ
description: "Global Search チームは、GitLab.com および自己管理インスタンスにワールドクラスの検索機能を提供することに注力しています。"
upstream_path: /handbook/engineering/ai/search/
upstream_sha: "4246c71d16beefada2a847b698b152ff280860c5"
lastmod: "2026-09-10T02:00:57-04:00"
translated_at: "2026-09-11T21:09:10+00:00"
translator: claude
stale: false
---

## ビジョン

Global Search グループは、GitLab.com および自己管理インスタンスにワールドクラスの検索機能を提供することに注力しています。

このページでは、Global Search グループに固有のプロセスと情報を扱います。あわせて [Global Search](https://about.gitlab.com/direction/global-search/) および [Code Search](https://about.gitlab.com/direction/global-search/code-search/) のディレクションページも参照してください。

## ミッション

グループは、Elasticsearch、PostgreSQL、Zoekt、Gitaly を使用した現在のグローバル検索の実装を改善・拡張する責任を負います。責任範囲には、グローバル検索機能、UI、取り込み機構、最適なインデキシング、管理ツール、自己管理インストール向けのインストール機構が含まれます。

加えて、私たちは重要な AI コンテキストインフラストラクチャを構築・保守しており、その中心が **GitLab Zoekt** です。GitLab のスケーラブルな完全一致コード検索サービスおよびファイルベースのデータベースシステムであり、従来の検索を超えたさまざまな AI コンテキストのユースケースをサポートする柔軟なアーキテクチャを備えています。オープンソースのコード検索エンジン Zoekt の上に構築されています。

これらのシステムは、Retrieval Augmented Generation の取り組みを通じて AI 機能に高品質なコンテキストを提供するための基盤となります。これには以下が含まれます。

- 機能チームおよび AI Framework チームと協力して、AI 搭載機能向けの新しい有用なデータを特定し準備すること
- エピック、Issue、MR、ソースコードなどのベクター埋め込みを保存すること
- それらのベクター埋め込みに対する取得 API、メタデータフィルタリングを提供し、権限が確実に適用されるようにすること
- AI コンテキストに不可欠な、高速で精密なコード検索とコンテキスト取得を可能にすること

このチームは、特定の機能向けのカスタム検索（たとえば Issue の「フィルターバー」など）は所有しません。これは [Issue Tracking](https://about.gitlab.com/direction/plan/project_management/team_planning/) カテゴリーの一部であり、[Project Management グループ](/handbook/product/categories/#project-management-group)が所有しています。

## チームメンバー

以下のチームメンバーは、Global Search グループの常設メンバーです。John Mason がこのグループの Engineering Manager 代行です。

<!--
This list is maintained by hand. `group-by-slugs` matches each argument exactly against the
`slug` field in team.yml, and a slug that no longer matches is skipped silently -- the page
builds green with that person simply missing. Re-check the slugs whenever membership changes.

Slugs come from the file names under data/team_members/person in
https://gitlab.com/gitlab-com/www-gitlab-com

The same roster is also listed by hand on
content/handbook/engineering/data-engineering/analytics/platform-insights.md -- update both.
-->

{{< group-by-slugs john-mason rkumar555 siddharthdungarwal >}}

## ステーブルカウンターパート

以下の他の機能チームのメンバーは、私たちのステーブルカウンターパートです。

| **名前**                                                 | **ロール** |
| ---------------------------------------------------------| ------------------------------------------------------------------------------- |
| [Ashraf Khamis](/handbook/company/team#ashrafkhamis)     | [Senior Technical Writer](/job-description-library/product/technical-writer/) |
| [Cleveland Bledsoe Jr](/handbook/company/team#cleveland) | [Senior Support Engineer](/job-description-library/engineering/support-engineer/) |
| [Brenda Nyaringita](/handbook/company/team#bnyaringita)  | [Support Engineer(EMEA)](/job-description-library/engineering/support-engineer/) |

## 共有責任

Global Search チームは、![Retrieval Augmented Generation](/images/handbook/engineering/ai/search/rag_ownership_framwework.png) (RAG) の領域で AI Framework チームと責任を共有しています。具体的には、RAG プロセスのデータ準備段階と情報取得段階で協力します。

## AI コンテキストインフラストラクチャと Advanced Search のデータストア

![グローバル検索のデータストアとインターフェースの図](/images/global_search_interfaces.png)

Global Search チームは、従来の検索と AI コンテキスト機能の両方を支えるいくつかの主要システムを保守しています。

### コアインフラストラクチャコンポーネント

- **Elasticsearch**: 全文検索、集計、ベクター類似度検索の機能を備えた Advanced Search 機能を支えます
- **GitLab Zoekt**: GitLab のスケーラブルなファイルベースのデータベースシステムで、エンタープライズ規模のパフォーマンス（GitLab.com で 48 TiB 以上をインデックス化）で完全一致コード検索を提供します。コード検索を超えて、Zoekt の柔軟なアーキテクチャはさまざまな AI コンテキストのユースケースの基盤として機能します

これらのシステムは連携して、従来のキーワード検索から AI 機能向けの高度なベクター類似度マッチングまで、包括的な検索と AI コンテキストの機能を提供します。

### インフラストラクチャのオーナーシップと DRI

サービスのオーナーシップは、アラートとエラーバジェットの通知先を決めるための機械可読な唯一の情報源である [runbooks のサービスカタログ](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/service-catalog.yml)に定義されています。Global Search Engineering Manager は、チームが所有する両サービスの DRI を務め、日常の運用作業をチームに委任します。

| システム | サービスカタログのエントリ | DRI | SRE ガイド | アラート |
| --- | --- | --- | --- | --- |
| Elasticsearch（Advanced Search） | `search`、オーナー `global_search` | Global Search Engineering Manager | [runbooks.gitlab.com/search](https://runbooks.gitlab.com/search/)、[runbooks.gitlab.com/elastic](https://runbooks.gitlab.com/elastic/) | [`Service::Elasticsearch`](https://alerts.gitlab.net/#/alerts?filter=%7Btype%3D%22search%22%2C%20tier%3D%22inf%22%7D) |
| GitLab Zoekt（完全一致コード検索） | `zoekt`、オーナー `global_search` | Global Search Engineering Manager | [runbooks.gitlab.com/zoekt](https://runbooks.gitlab.com/zoekt/) | [`Service::Zoekt`](https://alerts.gitlab.net/#/alerts?filter=%7Btype%3D%22zoekt%22%2C%20tier%3D%22inf%22%7D) |

両サービスのアラートは `#g_global_search_alerts` に呼び出し通知を送り、毎週のエラーバジェットレポートは `#g_global_search` に送信されます。どちらのチャンネルも [`services/teams.yml`](https://gitlab.com/gitlab-com/runbooks/-/blob/master/services/teams.yml) の `global_search` チームのエントリに設定されています。

#### Elasticsearch クラスターの保守

本番とステージングの Advanced Search クラスターは Elastic Cloud 上で稼働しています。クラスター設定、インデックスライフサイクル管理ポリシー、watcher、インデックスおよびコンポーネントテンプレート、API キーは、[`elastic-cloud`](https://gitlab.com/gitlab-com/gl-infra/observability/elastic-cloud)リポジトリでコードとして管理し、`main` へのマージ時に Atlantis が適用します。Kibana UI からこれらを変更しないでください。次の Terraform apply で元に戻されます。

[Elastic ランブック](https://runbooks.gitlab.com/elastic/)には、バージョンアップグレードのチェックリスト、クラスターの正常性確認、ディスク容量の飽和への対処、失われた Advanced Search 更新の災害復旧などの運用手順が記載されています。

#### Active Context とセマンティックコード検索

**ActiveContext** 抽象化レイヤーとセマンティックコード検索を支えるベクターストアは、Global Search ではなく [AI Core Infra の Semantic Code Search チーム](/handbook/engineering/ai/ai-core-infra/semantic-code-search/)が所有しています。運用ドキュメントは [Active Context ランブック](https://runbooks.gitlab.com/ai-active-context/)にあり、埋め込みパイプライン、ベクターストア管理、コードベースのインデキシングを扱います。ActiveContext がバッキングストアとして使用する可能性のある Elasticsearch クラスターは引き続き Global Search が所有するため、インシデントには両チームの対応が必要な場合があります。

### イネーブリングフレームワークとしての Advanced Search

GitLab のグローバル検索機能を支えるだけでなく、Advanced Search は、複雑な検索・分析のユースケースにおける PostgreSQL の本質的な制約を GitLab 全体の他のチームが克服できるようにする重要なフレームワークとして機能します。各チームは Advanced Search インフラストラクチャを活用して、以下を行います。

- **PostgreSQL の制約を超えてスケールする**: PostgreSQL では法外にコストが高い、または遅くなる大規模なテキスト検索、集計、分析を処理する
- **高度なフィルタリングを可能にする**: 複雑な複数フィールドのクエリ、ファセット検索、高度なフィルタリング機能をサポートする
- **分析とインサイトを支える**: プライマリデータベースのパフォーマンスに影響を与えることなく、大規模なデータセットから集計、統計、インサイトを生成する
- **AI および ML ワークフローをサポートする**: AI 機能に不可欠なベクター類似度検索、埋め込みの保存、取得機能を提供する

このフレームワークアプローチにより、機能チームは、Global Search チームが保守する実戦で鍛えられたスケーラブルな検索インフラストラクチャを活用しながら、自身のドメインの専門性に集中できます。

### ベーシック検索に関する注記

ベーシック検索は、テキスト検索に Postgres を、コード検索に Gitaly を利用します。どちらの機能も、Advanced Search と比べて大幅に制限されています。

## Advanced Search のスコープの現状

Advanced Search のインターフェースを通じて、多くのデータタイプと検索スコープがすでに利用可能です。以下の表は、利用可能なさまざまなデータタイプと、権限、グループ横断検索、埋め込みなどのさまざまな機能要素のステータスを示しています。

| データタイプ / スコープ | プライバシー / 権限 | ネームスペース横断 / グループ横断検索 | キーワード検索 | 類似度検索 & 埋め込み | メタデータフィルタリング |
|-------------------|-----------------------|-----------------------------------------|----------------|--------------------------------|--------------------|
| **コード** | はい | はい | はい | 進行中 | Group、Project、アーカイブの含む/除外、フォークの含む/除外、Language、Filename、Path、Extension |
| **Issue** | はい | はい | はい | はい | Group、Project、Status、Confidentiality、Labels、アーカイブの含む/除外 |
| **マージリクエスト** | はい | はい | はい | いいえ | Group、Project、Status、アーカイブの含む/除外 |
| **エピック** | はい | はい | はい | いいえ | Group、Project |
| **コメント** | はい | はい | はい | いいえ | Group、Project、アーカイブの含む/除外 |
| **ユーザー** | はい | はい | はい | いいえ | Group、Project |
| **コミット** | はい | はい | はい | いいえ | アーカイブの含む/除外 |
| **マイルストーン** | はい | はい | はい | いいえ | Group、Project、アーカイブの含む/除外 |
| **プロジェクト** | はい | はい | はい | いいえ | Group |
| **Wiki** | はい | はい | はい | いいえ | Group、Project |

## ミーティング

可能な限り、私たちは Issue、マージリクエスト、Slack を使って非同期でコミュニケーションすることを好みます。ただし、対面のミーティングは、個人的なつながりを築いたり、ブロッカーなど同期的に議論したほうが効率的な項目に対処したりするのに役立ちます。

- Global Search グループは毎週火曜日 14:00 UTC にミーティングを行います。
- Global Search グループは、毎週木曜日 12:30 UTC にオープンディスカッションアワーも設けています。

## ワーク

私たちは、[製品開発フロー](/handbook/product-development/how-we-work/product-development-flow/)と[エンジニアリングワークフロー](/handbook/engineering/workflow/)で定義された一般的なワークフローと原則に従います。私たちに Issue を知らせるには、該当するプロジェクトに Issue を作成してください。`~"group::global search"` ラベルとその他の適切なラベルを追加してください。緊急の Issue の場合は、上記の[ステーブルカウンターパート](/handbook/engineering/ai/search/#stable-counterparts)セクションに記載されている Product Manager または Engineering Manager に連絡してください。

以下は、チームが日々の業務で従っているいくつかのガイドラインです。

- 私たちは、GitLab、Slack、Google Docs などを介して、互いに、および他の GitLab チームと非同期コミュニケーションを行います。
- 私たちは、毎週のチームミーティング、1on1 ミーティング、Zoom 経由のバーチャルハッピーアワーを行い、さまざまなトピックを議論しチームの結束を高めます。
- 私たちは、チーム内のすべてのバックエンドエンジニアに対し、変更をグループ内の他の誰かにレビューしてもらうことを推奨しています。これは知識共有に最適です。
- 私たちはタスクをエピックと Issue の下に整理します。Product Manager と Engineering Manager は、各リリースの計画フェーズでバックログを確認し、Issue を次の 1 つか 2 つのマイルストーンに配置します。[マイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/1339901?label_name[]=group%3A%3Aglobal%20search)上の Issue は優先度に基づいてソートされます。優先度の高い Issue が上部に配置されます。
- 私たちは、マイルストーンの開始前にそのマイルストーンでクローズする予定の Issue に Deliverable ラベルを適用します。マイルストーン中に追加された Issue には Deliverable ラベルを適用すべきではありません。私たちはこれらの Issue をマイルストーンの中間、通常は毎月第 1 週にレビューします。リリースに間に合いそうにない Issue からは Deliverable ラベルを削除します。
- 私たちは、マイルストーン中に着手する予定だがクローズすることをコミットしていない Issue に Stretch ラベルを適用します。
- 私たちは、デザインの入力が必要な機能については、Issue に UX ワークフローラベルを付け、対応する UX チームのカウンターパートをアサイニーとして追加することで UX チームと協力します。ユーザーリサーチには `workflow::problem validation` と `workflow::solution` validation を、UI デザインとプロトタイピングには `workflow::design` を使用します。デザインが完了すると、開発を開始できることを示すインジケーターとして `workflow::ready for development` ラベルが追加されます。軽微な UX/UI の変更については、UX のカウンターパートまたは Product Design Manager に連絡し、迅速なイテレーションのためのレビューを依頼します。
- 私たちは、テストの観点から入力が必要な Issue については、[Developer Experience](/handbook/engineering/infrastructure-platforms/developer-experience/)チームと協力するために [RFH](/handbook/engineering/infrastructure-platforms/developer-experience/#request-for-help-process) を作成します。
- 私たちは、ドキュメントの変更が必要な Issue については、Issue に <code>documentation</code> ラベルを付け、Technical Writing チームのカウンターパートをアサイニーとして追加することで Technical Writing チームと協力します。私たちのテクニカルライターは、対応するドキュメントの更新を手伝ってくれます。ドキュメントの変更は通常、コードの変更と同時に行われます。
- 私たちは、セキュリティの観点から入力が必要な Issue については、Security チームのステーブルカウンターパートと協力します。コミュニケーションには、たとえば[このような](https://gitlab.com/gitlab-org/search-team/team-tasks/-/issues/17)チームプランニング Issue を使用することを推奨します。
- 私たちは、Issue に直接協力することで Support Engineering チームと協力します。毎月、Support Engineering チームのカウンターパートをチームミーティングに招待し、直接コミュニケーションを取ります。
- チームメンバーは次のタスクの準備ができたら、マイルストーンボードから Issue を選び、その Issue を自分にアサインすることで Issue オーナーになります。チームメンバーは Deliverable ラベルの付いた Issue を優先すべきです。Issue オーナーは、その Issue の解決策を見つける責任を負います。マージリクエストを作成することで解決策を提案できます。また、反復的なアプローチを取るのが理にかなっている場合は、Issue をより小さなサブ Issue に分割することもできます。
- 長期間オフィスを離れる前に、まだレビュー中の項目を Engineering Manager にアサインしてください。Engineering Manager は必要に応じて再アサインできます。
- チームメンバーが長期間オフィスを離れている作成者の作業をレビューする場合、残りの作業に自信があると判断すれば、要求された変更を完了させても構いません。
- 私たちは毎週バグをレビューし、優先順位を付けます。バグが影響を特定せずに問題だけを表していることはよくあります。なぜなら、Product Management と QA がすべてのバグの優先度、重大度、詳細を評価する責任を共有しているからです。重大度は、潜在的なリスクと頻度を特定するためにリスクマトリクスの近似を使用します。優先度は、時間経過に伴う総合的な影響に基づきます。スケジュール済みの作業に関連する場合、優先度／重大度の低いものがマイルストーンに追加されることがときどきあります。
    1. すべての新しいバグを内容、優先度、重大度、マイルストーンの観点でレビューする
    1. 優先度または重大度が欠けているバグをレビューする
    1. 現在のマイルストーンのバグに優先順位を付ける。スケジュール済みの作業の 10% はバグに充てるべき
    1. キャパシティ、重大度、優先度、スケジュール済みの作業との関係に基づいて、将来のマイルストーンのバグをスケジュールする

### 破壊的変更のプロセス

メジャーマイルストーンが始まる前に、私たちはすべての破壊的変更の Issue をリンクしたエピックを準備します。いつものように承認を得るよう努めますが、メジャーマイルストーンの前にマージされないように MR はドラフトのままにします。MR が独立している場合は、`master` をターゲットブランチにできます。そうでない場合は、ターゲットブランチを互いに設定した MR の連なりにできます。最初の MR がマージされるとすぐに、次の MR が自動的に `master` をターゲットにします。

破壊的変更のマイルストーンの前に作成されたすべての MR は、説明にこの警告または同様の警告を含めるべきです。`:warning: This MR must be kept as a draft and cannot be merged until **DATE** :warning:`

### バグ修正のバックポートプロセス

私たちはバグ修正のマージリクエストを毎週レビューします。このプロセスを円滑にするため、スコープ付きラベル `backport::required`、`backport::skip`、`backport::complete` を作成しました。

- バックポートが不要な場合、マージリクエストに `backport::skip` ラベルを追加します。
- 初回レビューで過去のリリースへのバックポートが必要なマージリクエストには `backport::required` ラベルを追加します。DRI は[パッチリリースプロセス](/handbook/engineering/releases/patch-releases#patch-release-overview)に従って、修正を過去のリリースにバックポートします。バックポートが完了したら、プロセス全体が完了したことを示すために `backport::complete` ラベルを追加します。

### GitLab.com での Advanced Global Search のロールアウト

チームは、GitLab.com で Elasticsearch を活用した Advanced Search を有効化することに積極的に取り組んできました。[私たちの分析](https://gitlab.com/groups/gitlab-org/-/epics/1736)に基づき、まず GitLab.com のすべての有料グループに対してこの機能をロールアウトすることを最初の目標としました。タイムラインと進捗の詳細は、以下のリンクで確認できます。

- [GitLab.com での Advanced. Search ロールアウト計画](https://gitlab.com/groups/gitlab-com/-/epics/649)
- [GitLab.com での Advanced Search ロールアウトのステップと拡張](/handbook/engineering/ai/search/es-rollout-timeline/)

### 検索 Issue の重大度ラベル（`~advanced search`、`~global search`）

| 操作のタイプ | `~severity::1` - Blocker | `~severity::2` - Critical | `~severity::3` - Major  | `~severity::4` - Low |
| ------------------|--------------------------|---------------------------|-------------------------|----------------------|
| Recall Record, Global | 10 秒超〜タイムアウト | 7〜10 秒 | 4〜7 秒 | 2〜4 秒 |
| 挿入されたレコードが呼び出し可能になるまでの時間 | 15 分超 | 15〜10 分 | 10〜5 分 | 3〜5 分|

上記で重大度の指標を詳述した 2 つの操作タイプは以下のとおりです。

- Recall Record, Global: GitLab.com のグローバルにスコープされた検索を使用してレコードを呼び出すのにかかる時間です。レコードには、プロジェクト、ユーザー、グループなどのエンティティが含まれます。
- 挿入されたレコードが呼び出し可能になるまでの時間: 新しいレコードを追加してから、その新しいレコードが検索で呼び出し可能になるまでの経過時間です。このプロセスは、[Go インデクサー](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer)、[Sidekiq キュー](https://docs.gitlab.com/ee/development/advanced_search.html#how-does-it-work)、Elasticsearch データベースなど、多くの基盤技術に依存します。

### 検索 Issue のウェイティング

私たちは、検索 Issue にウェイトを割り当てるためにフィボナッチ評価システムを使用します。以下は、Issue のウェイトを設定する際のいくつかのガイドラインです。

- `~backend` と `~frontend` の作業を含む Issue は、作業量を表す合計ウェイトとなるよう、それぞれのウェイトを加算すべきです。
- スパイク Issue には、作業をタイムボックス化するためにウェイトが割り当てられます。
- バグにはウェイトを割り当てません。
- 5 を超えるウェイトの Issue は、`~backend` と `~frontend` の作業を含まない場合、より小さな反復的なステップに分割すべきです。

| ウェイト | 説明 |
|--------|--------|
| 0      | 作業なし、または些細な作業（例: ドキュメントのタイポ、フィーチャーフラグのロールアウト） |
| 1      | 軽い作業（データベースマイグレーションや Advanced Search マイグレーションなし） |
| 2      | 軽〜中程度の作業 |
| 3      | 中程度の作業 |
| 5      | 重い作業 |

### MR レビュー

私たちは、Global Search チームの MR のレビューを行う際に以下のガイドラインを設けています。

- MR の作成者は、初回レビューまたはメンテナーレビューを Global Search チームのメンバーが行うべきかを判断する責任を負い、コメントまたはレビュアーのアサインによってそれを示すことができます。
- ドラフトステータスは、MR がマージの準備ができていないことを示しますが、作成者はドラフトモードのままレビュアーをアサインすることを決めても構いません。レビューが緊急でない限り、作成者はレビュアーをアサインする前にパイプラインが通過するのを待つべきです。
- 私たちはレビューコメントで効果的にコミュニケーションするために [Conventional Comments](https://conventionalcomments.org/) を使用します。
- マージリクエストの作成者は、完全に対処したと感じ、すべてのディスカッションがクローズされたスレッドのみを解決します。それ以外はレビュアーが解決します。マージリクエストに多くのスレッドがある場合、レビュアーがオープンなスレッドに戻って、以前のディスカッションが残されていたところから再開すると役立ちます。

#### レビュアーとメンテナーの種類

通常のバックエンドとフロントエンドのメンテナーロールに加え、チームは専用のメンテナーグループを持つ 2 つの共有コンポーネントを所有しています。どちらも `gitlab-org/gitlab` の [`.gitlab/CODEOWNERS`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/CODEOWNERS) によって適用されるため、以下のパスを変更する MR は、作成者にかかわらずそのグループの承認が必要です。

| メンテナーグループ | CODEOWNERS セクション | 対象 |
| --- | --- | --- |
| [`@gitlab-org/search-team/maintainers/advanced-framework`](https://gitlab.com/groups/gitlab-org/search-team/maintainers/advanced-framework) | `[Advanced Search Framework]`（必須）と `[Advanced Search Framework - Entity Implementations]`（任意） | `ee/lib/search/elastic/` と `ee/lib/elastic/` 配下のコアフレームワークの抽象化、バルクインデクサー、クライアント、クエリビルダーと DSL、Elastic の concern、サービスとワーカー、および `doc/development/advanced_search.md`。新しいエンティティの実装（クエリビルダー、型、参照、レコードの事前読み込み）は任意のセクションに該当します。 |
| [`@gitlab-org/search-team/maintainers/advanced-migrations`](https://gitlab.com/groups/gitlab-org/search-team/maintainers/advanced-migrations) | `[Advanced Search Migration]`（`ee/elastic/migrate/` と `ee/elastic/docs/` では必須、spec では任意） | Advanced Search のマイグレーション。誤ったマイグレーションはデータベースマイグレーションと同様に可用性に影響するため、任意ではなく必須としています。 |

CODEOWNERS の必須セクションと任意セクションの区別は重要です。コアフレームワークの抽象化への変更はフレームワークメンテナーの承認を待つ必要がありますが、新しいエンティティの実装では承認を依頼するだけです。マイグレーショングループでレビューする前に、[Advanced Search マイグレーションのレビューガイドライン](https://docs.gitlab.com/development/search/advanced_search_migration_review/)を参照してください。

### 自動化

チームはいくつかの自動化を利用しています。それぞれのプロセスは実行元のリポジトリに記載しています。以下のリンクはその入口であり、プロセスを重複して記載するものではありません。

#### Advanced Search マイグレーションを廃止済みとしてマークする

最後の必須アップグレード停止点の 1 マイルストーン前よりも古いマイグレーションは、自動的に廃止済みとしてマークされます。どちらも `gitlab-org/gitlab` にある 2 つの [GitLab Housekeeper](https://gitlab.com/gitlab-org/gitlab/-/blob/master/gems/gitlab-housekeeper/README.md) の keep がこの作業を行います。

1. [`Keeps::MarkOldAdvancedSearchMigrationsAsObsolete`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/keeps/mark_old_advanced_search_migrations_as_obsolete.rb) — `Search::Elastic::MigrationObsolete` を prepend し、spec を廃止済みマイグレーションの共有 example に置き換え、辞書ファイルを更新し、Global Search のバックエンドエンジニアをアサインします。
2. [`Keeps::DeleteObsoleteAdvancedSearchMigrations`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/keeps/delete_obsolete_advanced_search_migrations.rb) — 廃止済みマイグレーションのうち最新のものを除いてすべて削除します。

**パイプラインの場所：** マークを付ける keep は、[`engineering-productivity/team` のスケジュール済みパイプライン](https://gitlab.com/gitlab-org/quality/engineering-productivity/team/-/pipeline_schedules)から毎月実行されます。このプロジェクトの [`.gitlab-ci.yml`](https://gitlab.com/gitlab-org/quality/engineering-productivity/team/-/blob/main/.gitlab-ci.yml) で定義された `automatic-mark-search-migrations-obsolete` ジョブを使用します。スケジュールは `AUTO_MARK_OBSOLETE_SEARCH_MIGRATIONS` を設定し、これがジョブの実行と、失敗時の `#g_global_search_alerts` へのアラート送信を制御します。削除する keep は手動で実行します。

MR のアサイニーには、引き続き手動で完了すべき手順があります。`marked_obsolete_by_url` の確認、`.rubocop_todo/` の参照の削除、`migration_has_finished?` の後方互換性のための分岐の削除、削除したマイグレーションの[マイグレーション墓地](https://gitlab.com/gitlab-org/search-team/migration-graveyard)へのバックアップです。これらは [Advanced Search マイグレーションのスタイルガイド](https://docs.gitlab.com/development/search/advanced_search_migration_styleguide/#cleaning-up-advanced-search-migrations)に記載されています。

#### インデクサーのリリース

両インデクサーはスケジュール済みパイプラインから毎週自動でリリースし、そのプロセスをリポジトリ内に記載しています。

1. **Elasticsearch インデクサー**：`gitlab-org/gitlab-elasticsearch-indexer` の [`doc/process.md`](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer/-/blob/main/doc/process.md)。`SCHEDULE_TYPE=weekly_release` を設定した毎週のスケジュールが `release_create_mr` を実行します。これは `git-cliff` を使い、Conventional Commits に基づいてバージョンを上げる必要があるかを判断し、リリース MR を作成し、マージ時にタグを付けます。その後、`renovate-gitlab-bot` が `gitlab-org/gitlab` の `GITLAB_ELASTICSEARCH_INDEXER_VERSION` を更新する MR を作成します。このドキュメントには、現在のメンテナーとメンテナー研修のプロセスも記載されています。
2. **Zoekt インデクサー**：`gitlab-org/gitlab-zoekt-indexer` の [`DEPLOYMENT_PROCESS.md`](https://gitlab.com/gitlab-org/gitlab-zoekt-indexer/-/blob/main/DEPLOYMENT_PROCESS.md)。インデクサーと Zoekt Web サーバーの両方を扱います。タグ付けは同じ方法（毎週のスケジュールで `release_create_mr` を実行）で自動化されていますが、リリースの反映には CI イメージ、CNG、[`gitlab-zoekt` チャート](https://gitlab.com/gitlab-org/cloud-native/charts/gitlab-zoekt)、メインの GitLab チャートを順に手動で更新する必要があります。ここに手順を重複して記載せず、そのファイルの手順に従ってください。

### オンコールエスカレーションのカバレッジ

Global Search チームは Elasticsearch などの特別なドメイン知識を必要とするため、
人員が不足しているとき、特に休暇シーズン中には、このドメイン知識を持つチームメンバーを
他のグループから借りてオンコールエスカレーションをカバーします。一般的に、ドメインの専門知識を要する
エスカレーションについては [Tier 2 オンコールプログラム](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/)
に従います。プロフィールの domain_expertise によって識別される Elasticsearch ドメインエキスパートは、
SRE と Tier 2 のオンコールエンジニアが本番のインシデントを解決できない場合に連絡されることがあります。私たちは、
ドメインエキスパートが通常の勤務時間外に作業することを期待していません。緊急の場合は、
[インシデント管理](/handbook/engineering/infrastructure-platforms/incident-management/)ハンドブックに
概説されたルールとベストプラクティスに従います。チームメンバーが最新の開発状況に追いつき、
潜在的なインシデントを解決するのを支援するため、参考資料として
[グローバル検索インシデント管理ドキュメント](https://gitlab.com/gitlab-org/search-team/training-materials/-/tree/main/2021-12-14-production-incident-management)
を作成しました。

#### 本番インシデントエスカレーションをカバーするための他グループからのドメインエキスパートのオンボーディング

本番インシデントエスカレーションのカバーを手伝う他グループのドメインエキスパートをオンボーディングする際は、以下のアクションを検討します。

- チームメンバーに、チームメンバープロフィールの `domain_expertise` に `elasticsearch` を追加するよう提案する
- 緊急時に SRE や他のオンコールエンジニアが連絡に使える Slack グループ global-search-team にチームメンバーを追加する
- Elasticsearch クラスターへのアクセス権限を付与するためのアクセスリクエストをチームメンバー向けに作成する
- 最新のアーキテクチャと開発状況を説明する[ウォークスルーセッション](https://youtu.be/dK-G-pLVRfE)をチームメンバーとスケジュールする

#### 本番インシデントエスカレーションのカバレッジからのドメインエキスパートのオフボーディング

- Slack グループ global-search-team からチームメンバーを削除する
- Elasticsearch クラスターへのチームメンバーのアクセス権限を取り消す

### 共通リンク

- [Global Search チームのマイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/1339901?label_name[]=group%3A%3Aglobal%20search)
- [Global Search チームのワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/4440461?not[label_name][]=UX%20Paper%20Cuts&label_name[]=group%3A%3Aglobal%20search&milestone_title=Started)
- [Global Search チームのエピック](https://gitlab.com/groups/gitlab-org/-/epics?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Aglobal%20search)
- Global Search チームの Slack チャンネル（社内）[#g_global_search](https://gitlab.slack.com/app_redirect?channel=g_global_search)
- [グローバル検索ロードマップ](https://gitlab.com/groups/gitlab-org/-/roadmap?state=all&sort=start_date_asc&layout=MONTHS&timeframe_range_type=CURRENT_YEAR&label_name%5B%5D=group%3A%3Aglobal+search&label_name%5B%5D=Roadmap&progress=COUNT&show_progress=true&show_milestones=false&milestones_type=ALL)
- [バグレビューボード](https://gitlab.com/groups/gitlab-org/-/boards/2118530?label_name[]=type::bug&label_name[]=group%3A%3Aglobal%20search)

### JTBD

私たちは、顧客とユーザーのニーズをよりよく理解するために [Jobs to be Done](/handbook/product/ux/jobs-to-be-done/) (JTBD) フレームワークを活用しています。私たちの現在の JTBD のリストは[こちら](/handbook/engineering/ai/search/jtbd/#jobs-to-be-done)で確認できます。

### パフォーマンステスト

私たちは、Elasticsearch クラスターのパフォーマンステストのために [Rally](https://esrally.readthedocs.io/en/stable/) を検討しています。ワークロードデータは Kibana を使用して決定され、[Google Sheet](https://docs.google.com/spreadsheets/d/1K_MteuTEX0spu0jOiRt9BqDLZXywUhQ9NUw7PbU8odw/edit?usp=sharing)（社内）に保存されます。

## リソース

### ドキュメント

#### 検索と Advanced Search

- [GitLab の Elasticsearch 連携](https://docs.gitlab.com/ee/integration/advanced_search/elasticsearch.html)
- [GitLab Advanced Search 開発ガイドライン](https://docs.gitlab.com/ee/development/advanced_search.html)
- [GDK の Elasticsearch セットアップ手順](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/elasticsearch.md)

#### AI コンテキストインフラストラクチャ

- [Zoekt 設計ドキュメント](/handbook/engineering/architecture/design-documents/code_search_with_zoekt/) - 包括的なアーキテクチャと実装の詳細
- [GDK の Zoekt セットアップ手順](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/zoekt.md)
- [セマンティックコード検索](/handbook/engineering/ai/ai-core-infra/semantic-code-search/) - ActiveContext フレームワークとコード向け RAG を扱う AI Core Infra チームのページ

### ブログ記事

- [GitLab.com で Elasticsearch によるグローバルコード検索を有効化する取り組みから得た教訓](https://about.gitlab.com/blog/2019/03/20/enabling-global-search-elasticsearch-gitlab-com/)
- [更新: GitLab.com で Elasticsearch を有効化する課題](https://about.gitlab.com/blog/2019/07/16/elasticsearch-update/)
- [更新: Advanced Global Search 向け Elasticsearch から学んだ教訓 2020-04-28](https://about.gitlab.com/blog/2020/04/28/elasticsearch-update/)
- [GitLab の Search チームが自動テストの取り組みの方向付けにリスクマップを導入した方法](https://about.gitlab.com/blog/2020/09/03/risk-mapping/)
- [GitLab の Advanced Search 向けデータマイグレーションプロセス](https://about.gitlab.com/blog/2021/06/01/advanced-search-data-migrations/)

### 製品デモ

- [カスタム検索エンジンによる GitLab 検索](https://www.youtube.com/watch?v=YESlLDxHH4o)
- [GitLab の検索バーで移動する](https://www.youtube.com/watch?v=OE9b0Qc6KaI)
- [最近閲覧した Issue とマージリクエストの検索候補](https://www.youtube.com/watch?v=_5s4ZjnDZPo)
- [GitLab でエピックを検索する方法](https://www.youtube.com/watch?v=bu6kaBqcYFc)
- [Elasticsearch の Issue を独立したインデックスに移行する技術概要](https://youtu.be/1znFvPH_wjU)
