---
title: グローバル検索グループ
description: "グローバル検索チームは、GitLab.com および自己管理インスタンスにワールドクラスの検索機能を提供することに注力しています。"
upstream_path: /handbook/engineering/ai/search/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## ビジョン

グローバル検索グループは、GitLab.com および自己管理インスタンスにワールドクラスの検索機能を提供することに注力しています。

このページでは、グローバル検索グループに固有のプロセスや情報を扱います。[グローバル検索](https://about.gitlab.com/direction/global-search/) と [コード検索](https://about.gitlab.com/direction/global-search/code-search/) のディレクションページもご覧ください。

## ミッション

このグループは、Elasticsearch、PostgreSQL、Zoekt、Gitaly を使用する現在のグローバル検索実装を改善・拡張する責任を負っています。責任範囲には、グローバル検索機能、UI、取り込みメカニズム、最適なインデキシング、管理ツール、自己管理インストール向けのインストールメカニズムが含まれます。

加えて、私たちは以下を含む重要な AI コンテキストインフラストラクチャを構築・維持しています:

- **AI Context Abstraction Layer**: 複数のベクターデータベース（Elasticsearch、OpenSearch、pgvector を備えた PostgreSQL）にまたがる Retrieval Augmented Generation (RAG) のための統一インターフェース。基盤ストレージに関係なく AI 機能が動作することを可能にします
- **GitLab Zoekt**: GitLab のスケーラブルな完全一致コード検索サービスおよびファイルベースのデータベースシステム。柔軟なアーキテクチャにより、従来の検索を超えたさまざまな AI コンテキストユースケースをサポートします。オープンソースのコード検索エンジン Zoekt をベースに構築されています。

これらのシステムは、Retrieval Augmented Generation の作業を通じて AI 機能に高品質なコンテキストを提供する基盤となります。具体的には:

- 機能チームや AI Framework チームと協力して、AI 駆動機能向けの新しい有用なデータを特定し準備すること
- Epic、Issue、MR、ソースコードなどのベクター埋め込みを保存すること
- それらのベクター埋め込み、メタデータフィルタリング、権限の強制を保証する取得 API を提供すること
- AI コンテキストに不可欠な、高速で精密なコード検索とコンテキスト取得を可能にすること

このチームは、Issue の「フィルターバー」のような特定機能のカスタム検索は所有していません。これは [プロジェクトマネジメントグループ](/handbook/product/categories/#project-management-group) が所有する [Issue Tracking](https://about.gitlab.com/direction/plan/project_management/team_planning/) カテゴリーの一部です。

## チームメンバー

以下のチームメンバーがグローバル検索グループの常勤メンバーです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/ai/search/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 安定したカウンターパート

以下の他の機能チームのメンバーが、私たちの安定したカウンターパートです:

| **氏名**                                                 | **役割** |
| ---------------------------------------------------------| ------------------------------------------------------------------------------- |
| [Ashraf Khamis](/handbook/company/team#ashrafkhamis)     | [シニアテクニカルライター](/job-description-library/product/technical-writer/) |
| [Cleveland Bledsoe Jr](/handbook/company/team#cleveland) | [シニアサポートエンジニア](/job-description-library/engineering/support-engineer/) |
| [Brenda Nyaringita](/handbook/company/team#bnyaringita)  | [サポートエンジニア (EMEA)](/job-description-library/engineering/support-engineer/) |

## 共有された責任

グローバル検索チームは、![Retrieval Augmented Generation](/images/handbook/engineering/ai/search/rag_ownership_framwework.png) (RAG) の領域で AI Framework チームと責任を共有しています。具体的には、RAG プロセスのデータ準備段階と情報取得段階で協働します。

## AI コンテキストインフラストラクチャと Advanced Search データストア

![グローバル検索のデータストアとインターフェースの図](/images/global_search_interfaces.png)

グローバル検索チームは、従来の検索と AI コンテキスト機能の両方を支えるいくつかの主要システムを維持しています:

### コアインフラストラクチャコンポーネント

- **Elasticsearch**: 全文検索、集計、ベクター類似検索機能を備えた Advanced Search 機能を支えます
- **GitLab Zoekt**: GitLab のスケーラブルなファイルベースデータベースシステムで、エンタープライズ規模のパフォーマンス（GitLab.com で 48+ TiB をインデックス）で完全一致コード検索を提供します。コード検索を超えて、Zoekt の柔軟なアーキテクチャはさまざまな AI コンテキストユースケースの基盤として機能します
- **AI Context Abstraction Layer**: 複数のベクターデータベース（Elasticsearch、OpenSearch、pgvector を備えた PostgreSQL）にまたがる RAG を可能にする統一 Ruby gem インターフェース。基盤ストレージソリューションに関係なく AI 機能が動作することを保証します

これらのシステムは協働して、従来のキーワード検索から AI 機能向けの高度なベクター類似マッチングまで、包括的な検索と AI コンテキスト機能を提供します。

### 有効化フレームワークとしての Advanced Search

GitLab のグローバル検索機能を支えるだけでなく、Advanced Search は、複雑な検索や分析のユースケースにおける PostgreSQL の固有の制約を、GitLab 全体の他チームが克服できるようにする重要なフレームワークとして機能します。チームは Advanced Search のインフラを活用して以下を行います:

- **PostgreSQL の制約を超えてスケールする**: PostgreSQL では非常に高コストまたは低速になる大規模なテキスト検索、集計、分析を処理する
- **高度なフィルタリングを可能にする**: 複雑な複数フィールドクエリ、ファセット検索、高度なフィルタリング機能をサポートする
- **分析とインサイトを支える**: プライマリデータベースのパフォーマンスに影響を与えずに、大規模データセットから集計、統計、インサイトを生成する
- **AI と ML ワークフローをサポートする**: AI 機能に不可欠なベクター類似検索、埋め込みストレージ、取得機能を提供する

このフレームワークアプローチにより、機能チームは自らのドメイン専門性に集中できる一方、グローバル検索チームが維持する実証済みのスケーラブルな検索インフラを活用できます。

### Basic Search に関する注意

Basic Search はテキスト検索に Postgres、コード検索に Gitaly を利用します。両機能とも Advanced Search に比べて大幅に制限されています。

## Advanced Search スコープの現状

Advanced Search のインターフェース経由で利用できるデータタイプと検索スコープは多数あります。以下の表は、利用可能なさまざまなデータタイプと、権限、クロスグループ検索、埋め込みなどのさまざまな機能要素のステータスを示しています。

| データタイプ／スコープ | プライバシー／権限 | クロス名前空間／クロスグループ検索 | キーワード検索 | 類似検索 ＆ 埋め込み | メタデータフィルタリング |
|-------------------|-----------------------|-----------------------------------------|----------------|--------------------------------|--------------------|
| **Code** | あり | あり | あり | 進行中 | グループ、プロジェクト、アーカイブの含める/除外、フォークの含める/除外、言語、ファイル名、パス、拡張子 |
| **Issues** | あり | あり | あり | あり | グループ、プロジェクト、ステータス、機密性、ラベル、アーカイブの含める/除外 |
| **Merge requests** | あり | あり | あり | なし | グループ、プロジェクト、ステータス、アーカイブの含める/除外 |
| **Epics** | あり | あり | あり | なし | グループ、プロジェクト |
| **Comments** | あり | あり | あり | なし | グループ、プロジェクト、アーカイブの含める/除外 |
| **Users** | あり | あり | あり | なし | グループ、プロジェクト |
| **Commits** | あり | あり | あり | なし | アーカイブの含める/除外 |
| **Milestones** | あり | あり | あり | なし | グループ、プロジェクト、アーカイブの含める/除外 |
| **Project** | あり | あり | あり | なし | グループ |
| **Wiki** | あり | あり | あり | なし | グループ、プロジェクト |

## ミーティング

可能な限り、私たちは Issue、マージリクエスト、Slack を使った非同期コミュニケーションを好みます。ただし、対面ミーティングは個人的なつながりを築くことや、ブロッカーなど同期で議論したほうが効率的な事項に対処するのに役立ちます。

- グローバル検索グループは毎週火曜 14:00 UTC にミーティングを行います。
- グローバル検索グループは木曜 12:30 UTC にもオープンディスカッションアワーを設けています。

## 作業

私たちは [プロダクト開発フロー](/handbook/product-development/how-we-work/product-development-flow/) と [エンジニアリングワークフロー](/handbook/engineering/workflow/) で定義された一般的なワークフローと原則に従います。チームに Issue を持ち込むには、関連するプロジェクトで Issue を作成してください。`~"group::global search"` ラベルとその他適切なラベルを追加します。緊急の Issue の場合は、上記の [安定したカウンターパート](/handbook/engineering/ai/search/#stable-counterparts) セクションに記載されているプロダクトマネージャーまたはエンジニアリングマネージャーにご連絡ください。

以下は、チームが日々の作業で従っているガイドラインの一部です。

- 私たちは GitLab、Slack、Google Docs などを介して、お互いに、そして他の GitLab チームと非同期コミュニケーションを使用します。
- さまざまなトピックを議論しチームの結束を高めるため、Zoom で週次チームミーティング、1on1 ミーティング、バーチャルハッピーアワーを行います。
- 私たちはチームのバックエンドエンジニア全員に、変更をグループ内の他のメンバーにレビューしてもらうことを奨励しています。知識共有に最適です。
- 私たちはタスクを Epic と Issue で整理します。プロダクトマネージャーとエンジニアリングマネージャーは、各リリースの計画フェーズでバックログを確認し、Issue を次の1〜2マイルストーンに振り分けます。[マイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/1339901?label_name[]=group%3A%3Aglobal%20search) の Issue は優先度に基づいてソートされます。優先度の高い Issue が上部に配置されます。
- マイルストーンが始まる前にそのマイルストーンでクローズする予定の Issue に Deliverable ラベルを適用します。マイルストーン中に追加された Issue には Deliverable ラベルを適用すべきではありません。これらの Issue はマイルストーンの中盤、通常は毎月最初の週にレビューします。リリースに入る可能性が低い Issue からは Deliverable ラベルを除去します。
- マイルストーン中に開始する予定だが、クローズすることをコミットしていない Issue には Stretch ラベルを適用します。
- デザイン入力が必要な機能については、Issue に UX ワークフローラベルを付けて UX チームのカウンターパートをアサインし、UX チームと協働します。ユーザーリサーチには `workflow::problem validation` と `workflow::solution validation`、UI デザインとプロトタイピングには `workflow::design` を使用します。デザインが完了したら、開発を開始できる指標として `workflow::ready for development` ラベルが追加されます。軽微な UX/UI 変更については、UX のカウンターパートまたはプロダクトデザインマネージャーに連絡し、迅速なイテレーションのためのレビューを依頼します。
- テストの観点からの入力が必要な Issue については、`workflow::planning breakdown` ラベルを付けて SET カウンターパートをアサインし、Quality チームと協働します。SET が Issue をレビューしたら、[`quad-planning::complete-action` または `quad-planning::complete-no-action`](/handbook/product-development/how-we-work/product-development-flow/#build-phase-1-plan) ラベルで返事します。
- ドキュメント変更が必要な Issue については、<code>documentation</code> ラベルを付けてテクニカルライティングチームのカウンターパートをアサインし、テクニカルライティングチームと協働します。テクニカルライターが対応するドキュメントの更新を支援します。ドキュメント変更は通常、コード変更と一緒に行われます。
- セキュリティの観点からの入力が必要な Issue については、Security チームの安定したカウンターパートと協働します。コミュニケーションには [この例](https://gitlab.com/gitlab-org/search-team/team-tasks/-/issues/17) のようなチーム計画 Issue を使用することをお勧めします。
- サポートエンジニアリングチームとは Issue 上で直接協力して作業します。直接的なコミュニケーションを取るため、毎月チームミーティングにサポートエンジニアリングチームのカウンターパートを招待します。
- 次のタスクの準備ができたチームメンバーは、マイルストーンボードから Issue を選び、自分自身に Issue をアサインしてオーナーになります。チームメンバーは Deliverable ラベルが付いた Issue を優先すべきです。Issue オーナーは Issue の解決策を見つけることに責任を持ちます。マージリクエストをオープンして解決策を提案できます。イテレーションのアプローチを取るのが理にかなう場合は、Issue を小さなサブ Issue に分割することもできます。
- 長期間オフィスを離れる前に、レビュー中の項目はエンジニアリングマネージャーにアサインしてください。エンジニアリングマネージャーは必要に応じて再アサインできます。
- チームメンバーが長期間オフィスを離れる作成者の作業をレビューしている場合、残りの作業に自信があれば、要求された変更を完了することを歓迎します。
- 私たちは毎週バグをレビューし優先順位付けします。バグは影響を特定せずに問題を表すことが一般的です。プロダクトマネジメントと QA はすべてのバグの優先度、重大度、詳細を評価する責任を共有します。重大度はリスクマトリクスの近似を用いて潜在的なリスクと頻度を特定します。優先度は時間にわたる総影響度に基づきます。低い優先度／重大度のものでも、現在スケジュールされている作業に関連する場合、マイルストーンに追加されることがあります。
    1. すべての新しいバグの内容、優先度、重大度、マイルストーンをレビューします
    1. 優先度または重大度が欠けているバグをレビューします
    1. 現在のマイルストーン向けにバグの優先順位を付けます。スケジュールされた作業の10%はバグに集中させるべきです
    1. キャパシティ、重大度、優先度、スケジュールされた作業との関係に基づき、将来のマイルストーンにバグをスケジュールします

### 破壊的変更プロセス

メジャーマイルストーンが始まる前に、すべての破壊的変更 Issue がリンクされた Epic を準備します。通常通り承認を得るよう努めますが、メジャーマイルストーンの前にマージされないよう、MR はドラフトに保ちます。MR が独立している場合、`master` をターゲットブランチにできます。そうでない場合は、互いをターゲットブランチに設定した一連の MR を持てます。最初の MR がマージされると、次のものは自動的に `master` をターゲットにします。

破壊的変更マイルストーン前に作成されたすべての MR は、説明にこのまたは類似の警告を入れるべきです: `:warning: This MR must be kept as a draft and cannot be merged until **DATE** :warning:`

### バグ修正バックポートプロセス

毎週バグ修正のマージリクエストをレビューします。このプロセスを促進するため、スコープ付きラベル `backport::required`、`backport::skip`、`backport::complete` を作成しました。

- バックポートが必要ないマージリクエストには `backport::skip` ラベルが追加されます。
- 初期レビューで以前のリリースにバックポートが必要なマージリクエストには `backport::required` ラベルが追加されます。DRI は [パッチリリースプロセス](/handbook/engineering/releases/patch-releases#patch-release-overview) に従って修正を以前のリリースにバックポートします。バックポートが完了すると、プロセス全体が完了したことを示すために `backport::complete` ラベルが追加されます。

### GitLab.com 上の Advanced Global Search ロールアウト

チームは GitLab.com 上で Elasticsearch を駆使した Advanced Search の有効化に積極的に取り組んできました。[私たちの分析に基づき](https://gitlab.com/groups/gitlab-org/-/epics/1736)、最初のターゲットを GitLab.com 上のすべての有料グループにこの機能をロールアウトすることに設定しました。タイムラインと進捗の詳細は以下のリンクで確認できます。

- [GitLab.com 上の Advanced Search ロールアウトの計画](https://gitlab.com/groups/gitlab-com/-/epics/649)
- [GitLab.com 上の Advanced Search ロールアウトのステップと強化](/handbook/engineering/ai/search/es-rollout-timeline/)

### Search Issue の重大度ラベル（`~advanced search`、`~global search`）

| 操作のタイプ | `~severity::1` - Blocker | `~severity::2` - Critical | `~severity::3` - Major  | `~severity::4` - Low |
| ------------------|--------------------------|---------------------------|-------------------------|----------------------|
| Recall Record, Global | 10秒以上タイムアウト | 7〜10秒 | 4〜7秒 | 2〜4秒 |
| 挿入されたレコードが取得可能になるまでの時間 | 15分以上 | 15〜10分 | 10〜5分 | 3〜5分|

上記で詳述した2種類の操作は次のとおりです:

- Recall Record, Global: GitLab.com のグローバルスコープ検索を使ってレコードを取得するのにかかる時間です。レコードはプロジェクト、ユーザー、グループなどのエンティティです。
- 挿入されたレコードが取得可能になるまでの時間: 新しいレコードを追加してから、その新しいレコードが検索で取得可能になるまでの経過時間です。このプロセスは [Go indexer](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer)、[Sidekiq queues](https://docs.gitlab.com/ee/development/advanced_search.html#how-does-it-work)、Elasticsearch データベースなどの基盤技術に依存します。

### Search Issue の重み付け

Search Issue の重みを割り当てるには、フィボナッチ評価システムを使用します。Issue の重みを設定する際のガイドラインは以下のとおりです:

- `~backend` と `~frontend` の両方の作業を含む Issue は、それぞれの重みを足した、作業量を表す総重みを持つべきです。
- スパイク Issue は、作業をタイムボックス化するために重みを割り当てられます。
- バグには重みが割り当てられません。
- 重みが5を超える Issue は、`~backend` と `~frontend` の作業を含まない場合、より小さなイテレーションのステップに分解されるべきです。

| 重み | 説明 |
|--------|--------|
| 0      | 作業がないか軽微な作業（例: ドキュメントのタイポや Feature Flag のロールアウト） |
| 1      | 軽い作業（データベース移行や Advanced Search 移行なし） |
| 2      | 軽〜中程度の作業 |
| 3      | 中程度の作業 |
| 5      | 重い作業 |

### MR レビュー

グローバル検索チームの MR のレビューについては、以下のガイドラインがあります:

- MR 作成者は、初期レビューまたはメンテナーレビューをグローバル検索チームのメンバーが行うべきかを決定する責任を持ち、コメントまたはレビュアーのアサインによって示すことができます。
- ドラフトステータスは MR がマージの準備ができていないことを示しますが、作成者はドラフトモードでもレビュアーをアサインすることを決定できます。レビューが緊急でない限り、作成者はレビュアーをアサインする前にパイプラインがパスするのを待つべきです。
- レビューコメントで効果的にコミュニケーションするため、私たちは [Conventional Comments](https://conventionalcomments.org/) を使用します。
- マージリクエストの作成者は、自分が完全に対処したと感じたスレッドのみを解決し、すべての議論がクローズされていない場合は、それ以外はレビュアーが解決します。マージリクエストに多くのスレッドがある場合、レビュアーがオープンスレッドに戻って前回の議論の続きを取り上げるのに役立ちます。

### オンコールエスカレーションのカバレッジ

グローバル検索チームは Elasticsearch などの特別なドメイン知識を必要とするため、人員不足時、特に休暇シーズン中に、このドメイン知識を持つチームメンバーを他のグループから借りてオンコールエスカレーションをカバーします。一般的に、ドメイン専門性を必要とするエスカレーションについては [Tier 2 オンコールプログラム](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/) に従います。プロフィールの domain_expertise で識別される Elasticsearch ドメインエキスパートは、SRE と Tier 2 オンコールエンジニアが本番インシデントを解決できない場合に連絡されることがあります。ドメインエキスパートが通常の勤務時間外に作業することは期待していません。緊急時には、[インシデント管理](/handbook/engineering/infrastructure-platforms/incident-management/) ハンドブックで概説されているルールとベストプラクティスに従います。チームメンバーが最新の開発状況をキャッチアップし、潜在的なインシデントを解決するのを支援するため、参考として [グローバル検索インシデント管理ドキュメント](https://gitlab.com/gitlab-org/search-team/training-materials/-/tree/main/2021-12-14-production-incident-management) を作成しました。

#### 本番インシデントエスカレーションをカバーするために他グループからドメインエキスパートをオンボーディング

本番インシデントエスカレーションのカバレッジを支援するために他グループからドメインエキスパートをオンボーディングする際、次のアクションを検討することがあります:

- チームメンバーに、チームメンバープロファイルの `domain_expertise` に `elasticsearch` を追加することを提案します
- 緊急時に SRE や他のオンコールエンジニアが連絡できる Slack グループ global-search-team にチームメンバーを追加します
- Elasticsearch クラスターへのアクセス権限を付与するアクセスリクエストを作成します
- 最新のアーキテクチャと開発状況を説明する [ウォークスルーセッション](https://youtu.be/dK-G-pLVRfE) をチームメンバーとスケジュールします

#### 本番インシデントエスカレーションカバレッジからのドメインエキスパートのオフボーディング

- Slack グループ global-search-team からチームメンバーを削除します
- Elasticsearch クラスターへのチームメンバーのアクセス権限を取り消します

### 共通リンク

- [グローバル検索チームマイルストーンボード](https://gitlab.com/groups/gitlab-org/-/boards/1339901?label_name[]=group%3A%3Aglobal%20search)
- [グローバル検索チームワークフローボード](https://gitlab.com/groups/gitlab-org/-/boards/4440461?not[label_name][]=UX%20Paper%20Cuts&label_name[]=group%3A%3Aglobal%20search&milestone_title=Started)
- [グローバル検索チーム Epic](https://gitlab.com/groups/gitlab-org/-/epics?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Aglobal%20search)
- グローバル検索チームの Slack チャンネル（内部）[#g_global_search](https://gitlab.slack.com/app_redirect?channel=g_global_search)
- [グローバル検索ロードマップ](https://gitlab.com/groups/gitlab-org/-/roadmap?state=all&sort=start_date_asc&layout=MONTHS&timeframe_range_type=CURRENT_YEAR&label_name%5B%5D=group%3A%3Aglobal+search&label_name%5B%5D=Roadmap&progress=COUNT&show_progress=true&show_milestones=false&milestones_type=ALL)
- [バグレビューボード](https://gitlab.com/groups/gitlab-org/-/boards/2118530?label_name[]=type::bug&label_name[]=group%3A%3Aglobal%20search)

### JTBD

私たちは、顧客とユーザーのニーズをより深く理解するため、[Jobs to be Done](/handbook/product/ux/jobs-to-be-done/) (JTBD) フレームワークを活用しています。現在の私たちの JTBD のリストは [こちら](/handbook/engineering/ai/search/jtbd/#jobs-to-be-done) で確認できます。

### パフォーマンステスト

Elasticsearch クラスターのパフォーマンステストには [Rally](https://esrally.readthedocs.io/en/stable/) を試行しています。ワークロードデータは Kibana を使って決定し、[Google Sheet](https://docs.google.com/spreadsheets/d/1K_MteuTEX0spu0jOiRt9BqDLZXywUhQ9NUw7PbU8odw/edit?usp=sharing)（内部）に保存されます。

## リソース

### ドキュメント

#### Search と Advanced Search

- [GitLab Elasticsearch インテグレーション](https://docs.gitlab.com/ee/integration/advanced_search/elasticsearch.html)
- [GitLab Advanced Search 開発ガイドライン](https://docs.gitlab.com/ee/development/advanced_search.html)
- [GDK Elasticsearch セットアップ手順](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/elasticsearch.md)

#### AI コンテキストインフラストラクチャ

- [Zoekt 設計ドキュメント](/handbook/engineering/architecture/design-documents/code_search_with_zoekt/) - 包括的なアーキテクチャと実装の詳細
- [GDK Zoekt セットアップ手順](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/zoekt.md)
- [AI Context Abstraction Layer 設計ドキュメント](/handbook/engineering/architecture/design-documents/ai_context_abstraction_layer/) - 統一 RAG インターフェースアーキテクチャ
- [AI Context Abstraction Layer ソースコード](https://gitlab.com/gitlab-org/gitlab/-/tree/master/gems/gitlab-active-context) - Ruby gem 実装

### ブログ記事

- [GitLab.com 上で Elasticsearch によるグローバルコード検索を有効化する旅から得た教訓](https://about.gitlab.com/blog/2019/03/20/enabling-global-search-elasticsearch-gitlab-com/)
- [Update: GitLab.com 上で Elasticsearch を有効化する課題](https://about.gitlab.com/blog/2019/07/16/elasticsearch-update/)
- [Update: Advanced Global Search 向け Elasticsearch から学んだ教訓 2020-04-28](https://about.gitlab.com/blog/2020/04/28/elasticsearch-update/)
- [GitLab の Search チームが自動テストの取り組みを方向付けるためにリスクマップを実装した方法](https://about.gitlab.com/blog/2020/09/03/risk-mapping/)
- [Advanced Search 向け GitLab のデータ移行プロセス](https://about.gitlab.com/blog/2021/06/01/advanced-search-data-migrations/)

### プロダクトデモ

- [カスタム検索エンジンを使った GitLab 検索](https://www.youtube.com/watch?v=YESlLDxHH4o)
- [GitLab 検索バーを使用してナビゲートする](https://www.youtube.com/watch?v=OE9b0Qc6KaI)
- [最近表示した Issue とマージリクエストの検索候補](https://www.youtube.com/watch?v=_5s4ZjnDZPo)
- [GitLab で Epic を検索する方法](https://www.youtube.com/watch?v=bu6kaBqcYFc)
- [Elasticsearch Issue を別インデックスに移行する技術概要](https://youtu.be/1znFvPH_wjU)
