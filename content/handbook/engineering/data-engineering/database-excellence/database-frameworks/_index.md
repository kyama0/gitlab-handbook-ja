---
title: Database Framework Group
upstream_path: /handbook/engineering/data-engineering/database-excellence/database-frameworks/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T10:00:00Z"
translator: claude
stale: false
---

## ビジョン

データベースとのインタラクションに関するスケーラビリティ、アプリケーションパフォーマンス、データ増加、そして開発者支援に向けたソリューションを開発します。

## ミッション

データベースにフォーカスし、私たちのミッションはお客様の要求に応じてスケールできるソリューションを提供することです。データベース上のパフォーマンスボトルネックを事前に特定し、開発ライフサイクルの早い段階で開発者に情報を提供するためのツールを提供します。

データベースメンテナーの数を増やし、コミュニティコントリビューターおよび GitLab 内の開発チームにデータベースのベストプラクティスを提供します。

## チームメンバー

以下の方々がデータベースチームの常任メンバーです:


<p class="my-3 text-sm text-gray-600 italic">チームメンバー情報は <a href="https://handbook.gitlab.com/handbook/engineering/data-engineering/database-excellence/database-frameworks/#team-members" rel="external noopener">原文 (英語)</a> を参照してください。</p>


## 安定したカウンターパート

他の機能チームのメンバーで、私たちの安定したカウンターパートは以下の通りです:

| **名前**                                                 | **役割** |
| -------------------------------------------------------- | -------- |
| [Mark Wood](/handbook/company/team#mjwood) | [グループプロダクトマネージャー, Data Access](/job-description-library/product/product-manager) |
| [Mark Nagle](/handbook/company/team#mnagle2) | [サポートエンジニア](/job-description-library/engineering/support-engineer/) |
| [Chris Nightengale](/handbook/company/team#cnightingale) | [サポートエンジニア](/job-description-library/engineering/support-engineer/) |

### 他チームへの安定したカウンターパート

データベースグループは、他グループへのコンサルティングを頻繁に求められます。
これらのリクエストをより効率的にサポートするため、この[安定したカウンターパートテーブル](stable.html)を作成しました。

## ミーティング

可能な限り、Issue、マージリクエスト、Slack を使った非同期コミュニケーションを好みます。ただし、個人的なつながりを構築したり、ブロッカーなど同期的な議論の方が効率的な項目に対処するために、対面ミーティングも有益です。

- データベースフレームワークグループシンク: 毎週火曜日と木曜日
  - 火曜日（15:00 UTC | EMEA） — [~infradev Issue](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=infradev&label_name%5B%5D=group%3A%3Adatabase%20frameworks&first_page_size=100) で注意が必要なものを確認した後、週次優先事項に集中します。
  - 木曜日（21:30 UTC | APAC） — 当週の[トリアージ Issue](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/?sort=created_date&state=opened&search=Database%20Group%20Triage%20for%20week%20ending&first_page_size=100) を確認し、週次優先事項に集中します。
- [データベースオフィスアワー](https://docs.google.com/document/d/1wgfmVL30F8SdMg-9yY6Y8djPSxWNvKmhR5XmsvYX1EI/edit?usp=sharing)
（内部リンク）; [YouTube 録画](https://www.youtube.com/playlist?list=PL05JrBw4t0Kp-kqXeiF7fF7cFYaKtdqXM)
  - 水曜日、15:30 UTC（隔週）
  - （APAC）木曜日、3:30 UTC（隔週、交互）

## 作業

GitLab の[エンジニアリングワークフロー](/handbook/engineering/workflow/)ガイドラインに従います。私たちの注意を引くための Issue は、関連プロジェクトに作成してください。`~"group::database frameworks"` ラベルと、その他の関連ラベルを追加してください。

緊急の Issue の場合は、[エンジニアリングマネージャー](#team-members)または Slack チャンネル（[#g_database_frameworks](https://gitlab.slack.com/app_redirect?channel=g_database_frameworks)）に連絡してください。

### 私たちがやること

チームは、高パフォーマンスなクエリを実現しながら、スケーラビリティのサポートと可用性の強化のための機能を提供するために、PostgreSQL アプリケーションインタラクションに責任を持ちます。PostgreSQL は Rails アプリケーションの中核であり、データベースの観点から GitLab をよりパフォーマントで、スケーラブルで、高可用性を持つものにする作業には事欠きません。

過去の作業の一部を以下に示します:

- クエリパフォーマンスの向上とテーブル増加の制御のために、様々な[パーティショニング](https://docs.gitlab.com/development/database/partitioning/)戦略と関連ツールを実装しました。
- [データベースマイグレーションパイプライン](https://docs.gitlab.com/development/database/database_migration_pipeline/)を導入し、開発中の各 MR で DB マイグレーションを実行することで、潜在的な問題を早い段階で特定できるようになりました。
- [バッチバックグラウンドマイグレーション](https://docs.gitlab.com/development/database/batched_background_migrations/)を開発し、データベースヘルスに基づくスロットリングを備えた大規模データマイグレーションを効率的に実行できるようにしました。

現在進行中のプロジェクトの一部を以下に示します:

- GitLab SQL トラフィックリプレイ — [epics/17719](https://gitlab.com/groups/gitlab-org/-/epics/17719)
- データベースサチュレーションポイントを管理するツールとグラフの構築
- バッチバックグラウンドオペレーション — [epics/16152](https://gitlab.com/groups/gitlab-org/-/epics/16152)

私たちは常にデータベースのパフォーマンスを継続的に向上させ、開発者向け[ドキュメント](https://docs.gitlab.com/development/database/)を改善する方法を探しています。
私たちが取り組んでいる内容の詳細については、[ロードマップ](#roadmap)セクションをご確認ください。

データベースグループが現在取り組んでいる内容を把握するには、[新マイルストーンのグループキックオフプレゼンテーション](https://www.youtube.com/playlist?list=PL05JrBw4t0KqP3MYrcoQHrqPUqn_jJZSN)および[対応するマイルストーンプランニング Issue](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues?scope=all&state=all&search=database+group+planning) を確認することをお勧めします。

### アクティビティログ

2021年末から、過去のプロジェクトと成果を追跡するための[アクティビティログ](activity-log.html)を維持しています。

## プランニング

[プランニング Issue](https://gitlab.com/gitlab-org/database-team/team-tasks/-/blob/master/.gitlab/issue_templates/Planning.md) を使って、マイルストーンの優先事項とコミットメントについて議論します。これは主に非同期で行われますが、同期的な議論が必要な場合は、同期チーム[ミーティング](#meetings)のタイムスロット中に議論します。

### Issue の重み付け

データベースフレームワークグループは、Issue の重みとして期待されるマージリクエスト数を使う実験を行っています。各マイルストーンが始まる前に、重みのない割り当て済み Issue にそれぞれ重みを追加するようお願いします。

マージリクエスト数を Issue の重みとして使う理由は以下の通りです:

- このプロセスにより、Issue をより細かく分解する方法を事前に検討し、事前に列挙することが促されます。
- 説明と学習が容易で、チーム全体で共通理解を得やすくなります。
- マージリクエストのレートは、チームが測定される主な指標の1つです。

#### Issue の重み付けプロセス

1. 長期間かかりレビューとマージが難しくなる可能性のある大きな変更よりも、小さく反復的な変更を重視し、この Issue をいくつのマージリクエストに分解できるかを検討してください。
2. 期待されるマージリクエストを列挙したコメントを追加してください。例:

   > ドキュメントへの1つのマージリクエストのみ
   >
   > データベース変更用に gitlab への1つ、新機能用に1つ、ドキュメント変更用に1つ、omnibus への1つ

3. カウントを重みとして追加してください。例えば、データベース変更用に gitlab への1つ、新機能用に1つ、ドキュメント変更用に1つ、omnibus への1つがあると思われる場合は、`/weight 4` を割り当てます。

### トリアージローテーション

シンプルなトリアージローテーションを実施しています。毎週、1人のチームメンバーがデータベースフレームワークグループの受信 Issue のトリアージ専任となります。これにより、残りのチームメンバーは割り込みを最小限に抑えて現在の優先事項に集中できます。毎週、ボットがローテーションの次のチームメンバーに自動割り当てされる Issue を作成します。非常にシンプルにするため、ローテーションの順序はファーストネームのアルファベット順としています。割り当てられた週に PTO 中のチームメンバーがいる場合、Issue は次の人に再割り当てされます。

トリアージが必要な Issue はさまざまな経路で届きます。トリアージ中に監視すべき一般的な領域:

- `~database` ラベルが付いているがグループに割り当てられていない新しい Issue（7日未満）。[検索例](https://gitlab.com/groups/gitlab-org/-/issues?label_name%5B%5D=database&scope=all&sort=created_date&state=opened&utf8=%E2%9C%93)
- `~group::database frameworks` が割り当てられているが、スループットラベルや `~database::triage` ラベルが付いていない新しい Issue。[検索例](https://gitlab.com/dashboard/issues?scope=all&state=opened&label_name[]=group%3A%3Adatabase%20frameworks&not[label_name][]=type%3A%3Abug&not[label_name][]=type%3A%3Afeature&not[label_name][]=type%3A%3Amaintenance&not[label_name][]=type%3A%3Aignore)
- `~database::triage` が割り当てられているが、これまでにレビューされていない新しい Issue。
- `#g_database` Slack チャンネルで支援を求められた場合。

トリアージ担当者がチームの注意が必要な Issue を発見した場合、想定される対応は以下の通りです:

- 簡単な修正であれば Issue に直接対処する
- 必要に応じてカスタマーサポートのカウンターパートに誘導する
- `~database::triage` ラベルを追加してチーム同期ミーティング中にレビューする
- マイルストーンを追加してマネージャーに ping するか、Issue に `~workflow::scheduling` ラベルを付ける
- 重複としてクローズし、重複 Issue にリンクする
- 非同期で回答されなかった質問がある場合はチーム同期で議論する

トリアージ Issue の数を少なく管理しやすい状態に保つことが目標です。

ヒント: クローズ済み Issue をトリアージボードから除外するには、[この検索](https://gitlab.com/gitlab-org/gitlab/-/issues?scope=all&state=closed&label_name[]=group%3A%3Adatabase%20frameworks&label_name[]=database%3A%3Atriage)を使い、複数の Issue を一度に編集して `~database::triage` ラベルを削除してください。

### ボード

[マイルストーン別データベース](https://gitlab.com/groups/gitlab-org/-/boards/1426239)
マイルストーンボードは、各マイルストーンで計画されている Issue の「全体像」を提供します。

[Database: Build · Boards · GitLab.org · GitLab](https://gitlab.com/groups/gitlab-org/-/boards/1324138) ビルドボードは、`group::database frameworks` の現在の作業状況の概要を提供します。これらの Issue はすでにバリデーションを経ており、[プロダクト開発ビルドトラック](/handbook/product-development/how-we-work/product-development-flow/#build-track)に乗っています。
Issue は現在有効なマイルストーンと `group::database frameworks` ラベルを追加することでこのボードに追加されます。`workflow::ready for development` 列の Issue は優先度順（上から下）に並んでいます。チームメンバーはこの列を使って次に取り組む項目を選択します。

[Database: Validation](https://gitlab.com/groups/gitlab-org/-/boards/2305758?scope=all&utf8=%E2%9C%93&label_name[]=database%3A%3Avalidation)
バリデーションボードは、プロダクトマネージャーがレビューする受信 Issue のキューです。データベースチームのバリデーションボードでよく見られるシナリオは、アクションを起こす前にさらなる定義が必要な Issue が作成された場合です。Issue は通常、大きなアイデアを述べていますが、アクションを起こすには詳細が不十分です。その後、データベースチームは Issue を実行可能なステップに分解し、終了条件を作成し、進行中の取り組みと優先順位付けを行う改善プロセスを行います。Issue が大きすぎる場合はエピックに昇格され、小さなサブ Issue が作成されます。

[Database: Triage](https://gitlab.com/groups/gitlab-org/-/boards/2305765?scope=all&utf8=%E2%9C%93&label_name[]=database%3A%3Atriage)
トリアージボードは、チームの割り当て、優先順位付け、既存 Issue の調査などが必要な受信 Issue のためのものです。データベースフレームワークグループでは、1人のチームメンバーが適時な対応のためにこのボードを監視する週次トリアージローテーションを実施しています。

#### Say/Do 比率

`~Deliverable` ラベルを使って Say/Do 比率を追跡しています。各マイルストーンの開始時、データベースグループ週次ミーティング中に Issue をレビューし、マイルストーン内に確実に届けられると判断した Issue を特定します。その Issue には `~Deliverable` ラベルが付けられます。マイルストーン終了時、`~Deliverable` ラベルが付いた正常完了 Issue は2か所で追跡されます。マイルストーン内に届けられた数を計算し、移動した Issue を考慮する Tableau のダッシュボードがあります。また、マイルストーンレトロ Issue には、マイルストーンを逃したものと合わせて、出荷したすべての `~Deliverable` Issue がリストアップされます。

#### ロードマップ

データベースグループの[ロードマップ](https://gitlab.com/groups/gitlab-org/-/roadmap?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=Roadmap&label_name[]=group%3A%3Adatabase%20frameworks)は、現在進行中のプロジェクトと、今後3か月以上で優先付けされたプロジェクトを確認できます。

### 週次チームアップデート

進行中の各エピックには `@service-epic-status-automation` からステータステンプレート付きの自動コメントが届き、そのプロジェクトに取り組むチームメンバーがステータス詳細を返信として投稿します。これは[データベースフレームワークステータス](https://gitlab.com/groups/gitlab-org/data-access/dbf/-/epics/1)エピックに追加され、進行中のすべてのエピックのステータスが含まれます。

### ドキュメント

このセクションでは、私たちの知見、ロードマップ、その他の関連資料を文書化しています。

1. [データベースレキシコン — データベースに関連する用語と定義](doc/lexicon.html)
1. [データベース戦略: 提案されたデータベース変更のガイダンス](doc/strategy.html)
1. [テーブルパーティショニングについて](doc/partitioning.html)（2020年2月）
1. [PostgreSQL: フォーリンデータラッパーとパーティショニングによるシャーディング](doc/fdw-sharding.html)
1. [トップレベルネームスペースによる GitLab のシャーディング](doc/root-namespace-sharding.html)
1. [CitusDB によるシャーディング](doc/citus.html)（2020年4月）
1. [テーブルパーティショニング: Issue グループ検索を例として](doc/issue-group-search-partitioning.html)（2020年3月）
1. [開発者向け GitLab.com データベースの操作方法](doc/gitlab-com-database.html)
1. [コンテナレジストリのデータベーススキーマ提案](doc/container-registry.html)（2020年9月）
1. [GitLab.com のワークロード分析](doc/workload-analysis.html)（2020年10月）
1. [マルチデータベースバックグラウンドマイグレーション](doc/multidb-bg-migrations.html)（2021年10月）

### パフォーマンス指標（内部）

1. [Enablement::Database — パフォーマンス指標ダッシュボード](https://10az.online.tableau.com/#/site/gitlab/workbooks/2326872/views)
1. GitLab.com の平均クエリ Apdex
   - マスター
     - [目標: 100ms — 許容: 250ms](https://tinyurl.com/64e6acku)
     - [目標: 50ms — 許容: 100ms](https://tinyurl.com/4mjw5azv)
   - レプリカ
     - [目標: 100ms — 許容: 250ms](https://tinyurl.com/yde68e2k)
     - [目標: 50ms — 許容: 100ms](https://tinyurl.com/42wc7n2z)

### 共通リンク

- Slack チャンネル [#g_database_frameworks](https://gitlab.slack.com/app_redirect?channel=g_database_frameworks) — 公式業務
- Slack チャンネル [#db-lounge](https://gitlab.slack.com/app_redirect?channel=db-lounge) — チームチャット
- [データベースフレームワークエピック](https://gitlab.com/groups/gitlab-org/-/epics?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Adatabase%20frameworks)
- [データベースサブグループ](https://gitlab.com/gitlab-org/database-team) — チームプロセスとプロジェクトに関連する Issue とテンプレート
- [プロダクト開発タイムライン](/handbook/engineering/workflow/#product-development-timeline)
- [YouTube: データベースチームプレイリスト](https://www.youtube.com/watch?v=BqwsRDpknfg&list=PL05JrBw4t0KoxfN-uO2YfvQUabp2kdUYT)
- [YouTube: データベースオフィスアワープレイリスト](https://www.youtube.com/watch?v=p3ful2h8H-c&list=PL05JrBw4t0Kp-kqXeiF7fF7cFYaKtdqXM)
