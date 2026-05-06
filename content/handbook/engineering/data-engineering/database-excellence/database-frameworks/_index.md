---
title: Database Framework グループ
upstream_path: /handbook/engineering/data-engineering/database-excellence/database-frameworks/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-06T12:00:00Z"
translator: claude
stale: false
---

## ビジョン

データベースとのインタラクションに関わるスケーラビリティ、アプリケーションパフォーマンス、データ増加、そして開発者の生産性向上に向けたソリューションを開発します。

## ミッション

データベースに焦点を当て、私たちのミッションはお客様の要求に応じてスケールできるソリューションを提供することです。データベースのパフォーマンスボトルネックを能動的に特定し、開発ライフサイクルの早い段階で開発者に情報を提供するためのツールを提供します。

データベースメンテナーの数を増やし、コミュニティコントリビューターおよび GitLab 内の開発チームにデータベースのベストプラクティスを提供します。

## チームメンバー {#team-members}

以下のメンバーは Database チームの常任メンバーです。

{{< team-by-departments "Database BE Team" >}}

## 安定したカウンターパート

他の機能チームのメンバーで、私たちの安定したカウンターパートは以下のとおりです。

| **名前**                                                 | **ロール** |
| -------------------------------------------------------- | -------- |
| [Mark Wood](/handbook/company/team#mjwood) | [Group Product Manager, Data Access](/job-description-library/product/product-manager) |
| [Mark Nagle](/handbook/company/team#mnagle2) | [Support Engineer](/job-description-library/engineering/support-engineer/) |
| [Chris Nightengale](/handbook/company/team#cnightingale) | [Support Engineer](/job-description-library/engineering/support-engineer/) |

### 他チームに対する安定したカウンターパート

Database グループは他のグループへのコンサルティングを依頼されることが頻繁にあります。これらの依頼をより効率的にサポートするため、[安定したカウンターパートのテーブル](stable.html) を作成しました。

## ミーティング {#meetings}

可能な限り、私たちは Issue、マージリクエスト、Slack を使った非同期コミュニケーションを優先します。ただし、対面ミーティングは個人的なつながりを構築する上で有用であり、ブロッカーのように同期的に議論するほうが効率的な事項に対処するのにも役立ちます。

- Database Frameworks グループの同期は毎週火曜日と木曜日に実施。
  - 火曜日 (15:00 UTC | EMEA) - 注意が必要な [~infradev Issue](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=infradev&label_name%5B%5D=group%3A%3Adatabase%20frameworks&first_page_size=100) から開始し、その後 1 週間の優先事項に集中します。
  - 木曜日 (21:30 UTC | APAC) - その週の [トリアージ Issue](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/?sort=created_date&state=opened&search=Database%20Group%20Triage%20for%20week%20ending&first_page_size=100) から開始し、1 週間の優先事項に集中します。
- [Database Office Hours](https://docs.google.com/document/d/1wgfmVL30F8SdMg-9yY6Y8djPSxWNvKmhR5XmsvYX1EI/edit?usp=sharing)
(社内リンク); [YouTube 録画](https://www.youtube.com/playlist?list=PL05JrBw4t0Kp-kqXeiF7fF7cFYaKtdqXM)
  - 水曜日、3:30pm UTC (隔週)
  - (APAC) 木曜日、3:30am UTC (隔週、交互)

## ワーク

私たちは GitLab の [エンジニアリングワークフロー](/handbook/engineering/workflow/) ガイドラインに従います。注目してほしい Issue がある場合は、関連するプロジェクトに Issue を作成してください。`~"group::database frameworks"` ラベルと、その他の関連するラベルを追加してください。

緊急の Issue の場合は、[エンジニアリングマネージャー](#team-members) または Slack チャンネル ([#g_database_frameworks](https://gitlab.slack.com/app_redirect?channel=g_database_frameworks)) に連絡してください。

### 私たちが行うこと

このチームは、PostgreSQL アプリケーションのインタラクションを担当し、スケーラビリティをサポートし可用性を強化する機能を提供しながら、高パフォーマンスなクエリを実現することに責任を持ちます。PostgreSQL は Rails アプリケーションの中核であり、データベースの観点から GitLab をよりパフォーマンスが高く、スケーラブルで、高可用性なものにする作業には事欠きません。

過去の取り組みには、以下のようなものがあります。

- クエリパフォーマンスの改善とテーブル成長の制御のために、さまざまな [パーティショニング](https://docs.gitlab.com/development/database/partitioning/) 戦略と関連ツールを実装。
- 開発中の各 MR で DB マイグレーションを実行する [Database migration pipeline](https://docs.gitlab.com/development/database/database_migration_pipeline/) を導入し、潜在的な問題を早い段階で特定できるようにしました。
- データベースの健全性に基づいたスロットリングを備えた [Batched Background migrations](https://docs.gitlab.com/development/database/batched_background_migrations/) を開発し、大規模なデータマイグレーションを効率的に実行できるようにしました。

現在進行中のプロジェクトには、以下のようなものがあります。

- GitLab SQL トラフィックリプレイ - [epics/17719](https://gitlab.com/groups/gitlab-org/-/epics/17719)。
- データベースの飽和点を管理するためのツールとグラフの構築。
- Batched Background operations - [epics/16152](https://gitlab.com/groups/gitlab-org/-/epics/16152)。

私たちは常にデータベースのパフォーマンスを継続的に気遣い、開発者向け [ドキュメント](https://docs.gitlab.com/development/database/) を改善する方法を探しています。私たちが取り組んでいる内容のより詳細については、以下の [ロードマップ](#roadmap) セクションをご覧ください。

データベースグループが現在取り組んでいる内容を追うには、[新しいマイルストーンに向けたグループのキックオフプレゼンテーション](https://www.youtube.com/playlist?list=PL05JrBw4t0KqP3MYrcoQHrqPUqn_jJZSN) と [それぞれのマイルストーンの計画 Issue](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues?scope=all&state=all&search=database+group+planning) を視聴することをおすすめします。

### アクティビティログ

2021 年末から、過去のプロジェクトと成果を追跡するために [アクティビティログ](activity-log.html) を維持しています。

## 計画

私たちは [計画 Issue](https://gitlab.com/gitlab-org/database-team/team-tasks/-/blob/master/.gitlab/issue_templates/Planning.md) を使ってマイルストーンの優先順位とコミットメントを議論します。これは主に非同期で行われますが、同期的な議論が必要な場合はチームの同期 [ミーティング](#meetings) のタイムスロットで議論します。

### Issue の重み付け

Database Frameworks グループは、想定されるマージリクエスト数を Issue の重みとして使用する実験を行っています。各マイルストーンが始まる前に、重みが付いていないアサイン済みの Issue にメンションして、メンバーに重みを追加してもらうよう依頼します。

私たちがマージリクエスト数を Issue の重みとして使うことに決めた理由はいくつかあります。

- このプロセスは、Issue がどのように分割可能か、事前にどのように列挙できるかを考えるよう促します。
- 説明と学習が容易で、チームが共通理解に到達しやすくなります。
- マージリクエストレートは、私たちのチームが評価される主要な指標の 1 つです。

#### Issue の重み付けプロセス

1. レビューとマージに時間がかかる大きな変更ではなく、より小さくイテレーティブな変更を重視し、これがいくつのマージリクエストに分割できるかを検討します。
2. 想定されるマージリクエストを列挙したコメントを追加します。例えば:

   > ドキュメントへのマージリクエストが 1 つ
   >
   > データベース変更のための gitlab への 1 つ、新機能のための 1 つ、ドキュメント変更のための 1 つ、omnibus への 1 つ

3. 数を重みとして追加します。例えば、データベース変更のための gitlab への 1 つ、新機能のための 1 つ、ドキュメント変更のための 1 つ、omnibus への 1 つがあると考える場合は、`/weight 4` をアサインします。

### トリアージローテーション

私たちはかなりシンプルなトリアージローテーションを採用しています。毎週、1 人のチームメンバーが Database Frameworks グループに入ってくる Issue のトリアージを担当します。これにより、残りのチームメンバーは中断を少なくして現在の優先事項に集中できます。毎週、ボットが Issue を作成し、ローテーションの次のチームメンバーに自動的にアサインされます。シンプルさを保つため、ファーストネームのアルファベット順でトリアージローテーションを並べています。アサインされた週にチームメンバーが PTO 中の場合、その Issue はローテーションの次の人に再アサインされます。

トリアージが必要な Issue は、さまざまな経路で入ってきます。トリアージ中に監視する一般的な領域は以下のとおりです。

- グループにアサインされていない `~database` ラベル付きの新しい Issue (作成 7 日以内)。[検索例](https://gitlab.com/groups/gitlab-org/-/issues?label_name%5B%5D=database&scope=all&sort=created_date&state=opened&utf8=%E2%9C%93)
- `~group::database frameworks` がアサインされたものの、スループットラベルや `~database::triage` ラベルが付いていない新しい Issue。[検索例](https://gitlab.com/dashboard/issues?scope=all&state=opened&label_name[]=group%3A%3Adatabase%20frameworks&not[label_name][]=type%3A%3Abug&not[label_name][]=type%3A%3Afeature&not[label_name][]=type%3A%3Amaintenance&not[label_name][]=type%3A%3Aignore)
- `~database::triage` がアサインされたが、まだレビューされていない新しい Issue。
- #g_database Slack チャンネルで支援のためにメンションされたとき。

トリアージ担当のチームメンバーがチームの注意を要する Issue を発見した場合、考えられる結果には以下のようなものがあります。

- 簡単な修正であれば直接対処
- 適切に応じてカスタマーサポートのカウンターパートに振り分け
- `~database::triage` ラベルを追加し、チームの同期ミーティングでレビュー
- マイルストーンを追加してマネージャーにメンションするか、`~workflow::scheduling` で Issue をラベル付け
- 重複としてクローズし、重複している Issue にリンク
- 非同期で答えが出ていない未解決の質問があれば、チームシンクで議論する。

目標は、トリアージのための Issue 数を少なく管理可能に保つことです。

ヒント: トリアージボードからクローズ済み Issue を削除するには、[この検索](https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&state=closed&label_name[]=group%3A%3Adatabase%20frameworks&label_name[]=database%3A%3Atriage) を使用し、複数の Issue を一度に編集して `~database::triage` ラベルを削除してください。

### ボード

[Database by Milestone](https://gitlab.com/groups/gitlab-org/-/boards/1426239)
マイルストーンボードは、各マイルストーンで計画された Issue の「全体像」ビューを提供します。

[Database: Build · Boards · GitLab.org · GitLab](https://gitlab.com/groups/gitlab-org/-/boards/1324138) ビルドボードでは、`group::database frameworks` の作業の現在の状態の概要が確認できます。これらの Issue はすでにバリデーションを通過し、[製品開発ビルドトラック](/handbook/product-development/how-we-work/product-development-flow/#build-track) にあります。
Issue は、現在のアクティブなマイルストーンと `group::database frameworks` ラベルを追加することでこのボードに追加されます。`workflow::ready for development` カラムの Issue は、優先順位順 (上から下へ) で並べられます。チームメンバーは次に取り組む項目を選ぶためにこのカラムを使用します。

[Database: Validation](https://gitlab.com/groups/gitlab-org/-/boards/2305758?scope=all&utf8=%E2%9C%93&label_name[]=database%3A%3Avalidation)
バリデーションボードは、プロダクトマネージャーがレビューする受信 Issue のキューです。Database チームバリデーションボードの一般的なシナリオは、優先順位を付ける前にさらなる定義が必要な Issue が作成された場合です。Issue は通常、大きな構想を述べていますが、行動を起こすのに十分な詳細がまだありません。Database チームはその後、Issue を実行可能な手順に分解し、終了基準を作成し、進行中の取り組みに対して優先順位を付けるリファインメントプロセスを進めます。Issue が大きすぎる場合は、エピックに昇格させ、小さなサブ Issue が作成されます。

[Database: Triage](https://gitlab.com/groups/gitlab-org/-/boards/2305765?scope=all&utf8=%E2%9C%93&label_name[]=database%3A%3Atriage)
トリアージボードは、チームへのアサイン、優先順位付け、既存 Issue の確認などのために、さらなる調査が必要な受信 Issue 用です。Database Frameworks グループでは、適時の対応のためにこのボードを監視する週次トリアージローテーションを実装しています。

#### Say/Do 比

私たちは Say/Do 比を追跡するために `~Deliverable` ラベルを使用します。各マイルストーンの開始時、Database Group Weekly ミーティング中に、私たちは Issue をレビューし、マイルストーン内で配信できる自信のある Issue を決定します。Issue は `~Deliverable` ラベルでマークされます。マイルストーン終了時に、`~Deliverable` ラベル付きの正常に完了した Issue は 2 か所で追跡されます。Tableau のダッシュボードがマイルストーン内に何件配信されたかを計算し、移動された Issue を考慮してくれます。さらに、私たちのマイルストーン振り返り Issue では、出荷されたすべての `~Deliverable` Issue が、マイルストーンに間に合わなかったものと併せて一覧表示されます。

#### ロードマップ {#roadmap}

Database グループの [ロードマップ](https://gitlab.com/groups/gitlab-org/-/roadmap?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=Roadmap&label_name[]=group%3A%3Adatabase%20frameworks) は、現在進行中のものに加えて、今後 3 か月以上先の優先順位の高いプロジェクトのビューを提供します。

### ウィークリーチームアップデート

進行中の各エピックでは `@service-epic-status-automation` からステータステンプレート付きの自動コメントが入り、それらのプロジェクトに取り組んでいるチームメンバーがステータスの詳細を返信投稿します。それは [Database Frameworks Status](https://gitlab.com/groups/gitlab-org/data-access/dbf/-/epics/1) エピックに追加され、進行中のすべてのエピックのステータスがここに含まれます。

### ドキュメント

このセクションでは、私たちのインサイト、ロードマップ、その他の関連資料を文書化しています。

1. [Database Lexicon - データベースに関連する用語と定義](doc/lexicon.html)
1. [Database Strategy: 提案されたデータベース変更のためのガイダンス](doc/strategy.html)
1. [テーブルパーティショニングについて](doc/partitioning.html) (2020 年 2 月)
1. [Postgres: foreign data wrapper とパーティショニングによるシャーディング](doc/fdw-sharding.html)
1. [トップレベル名前空間による GitLab のシャーディング](doc/root-namespace-sharding.html)
1. [CitusDB によるシャーディング](doc/citus.html) (2020 年 4 月)
1. [テーブルパーティショニング: Issue グループ検索を例として](doc/issue-group-search-partitioning.html) (2020 年 3 月)
1. [開発者向けの GitLab.com データベースの操作](doc/gitlab-com-database.html)
1. [コンテナレジストリのデータベーススキーマ提案](doc/container-registry.html) (2020 年 9 月)
1. [GitLab.com のワークロード分析](doc/workload-analysis.html) (2020 年 10 月)
1. [マルチデータベースバックグラウンドマイグレーション](doc/multidb-bg-migrations.html)
   (2021 年 10 月)

### Performance Indicator (内部)

1. [Enablement::Database - Performance Indicators Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2326872/views)
1. GitLab.com の平均クエリ Apdex
   - マスター
     - [ターゲット: 100ms - 許容 250ms](https://tinyurl.com/64e6acku)
     - [ターゲット: 50ms - 許容 100ms](https://tinyurl.com/4mjw5azv)
   - レプリカ
     - [ターゲット: 100ms - 許容 250ms](https://tinyurl.com/yde68e2k)
     - [ターゲット: 50ms - 許容 100ms](https://tinyurl.com/42wc7n2z)

### よく使われるリンク

- Slack チャンネル
  [#g_database_frameworks](https://gitlab.slack.com/app_redirect?channel=g_database_frameworks) -
  公式業務用
- Slack チャンネル
  [#db-lounge](https://gitlab.slack.com/app_redirect?channel=db-lounge) - チームチャット
- [Database Frameworks Epics](https://gitlab.com/groups/gitlab-org/-/epics?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Adatabase%20frameworks)
- [Database Subgroup](https://gitlab.com/gitlab-org/database-team) - チームプロセスとチームが所有するプロジェクトに関する Issue とテンプレート。
- [製品開発タイムライン](/handbook/engineering/workflow/#product-development-timeline)
- [YouTube: Database Team Playlist](https://www.youtube.com/watch?v=BqwsRDpknfg&list=PL05JrBw4t0KoxfN-uO2YfvQUabp2kdUYT)
- [YouTube: Database Office Hours Playlist](https://www.youtube.com/watch?v=p3ful2h8H-c&list=PL05JrBw4t0Kp-kqXeiF7fF7cFYaKtdqXM)
