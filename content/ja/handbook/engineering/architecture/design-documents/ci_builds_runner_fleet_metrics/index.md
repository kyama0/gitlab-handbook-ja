---
title: "CI Builds と Runner Fleet メトリクスのデータベースアーキテクチャ"
status: proposed
creation-date: "2023-01-25"
authors: [ "@pedropombeiro", "@vshushlin"]
coach: "@grzesiek"
approvers: []
stage: Verify
group: Runner
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ci_builds_runner_fleet_metrics/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T08:00:00Z"
translator: claude
stale: false
---


<div class="my-3 border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-r text-sm text-blue-800">
このページには今後予定されている製品・機能・機能性に関する情報が含まれています。ここに示す情報は参考目的のみです。購入・計画の決定にこの情報を使用しないでください。製品・機能・機能性の開発、リリース、タイミングは変更または延期される可能性があり、GitLab Inc. の独自の判断に委ねられています。
</div>

<div class="overflow-x-auto my-4">
<table class="w-full text-sm border-collapse">
<thead>
<tr class="bg-gray-100 text-left">
<th class="px-3 py-2 border border-gray-300">Status</th>
<th class="px-3 py-2 border border-gray-300">Authors</th>
<th class="px-3 py-2 border border-gray-300">Coach</th>
<th class="px-3 py-2 border border-gray-300">DRIs</th>
<th class="px-3 py-2 border border-gray-300">Owning Stage</th>
<th class="px-3 py-2 border border-gray-300">Created</th>
</tr>
</thead>
<tbody>
<tr>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">proposed</span></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/pedropombeiro" class="text-blue-600 hover:underline">@pedropombeiro</a>, <a href="https://gitlab.com/vshushlin" class="text-blue-600 hover:underline">@vshushlin</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/grzesiek" class="text-blue-600 hover:underline">@grzesiek</a></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300">2023-01-25</td>
</tr>
</tbody>
</table>
</div>


CI セクションは、GitLab の CI Builds と Runner Fleet において、オブザービリティと自動化に焦点を当てた新しい付加価値機能を構想しています。しかし、現在の PostgreSQL のデータベースアーキテクチャを使用してこれらの機能を実装し、オブザービリティ・自動化・AI 最適化のプロダクトビジョンを実現することは非常に困難です。その理由は以下のとおりです:

- CI 関連のトランザクションテーブルが非常に大きいため、変更を加えるとデータベース負荷が増大し、インシデントを引き起こす可能性があります。
- PostgreSQL は集計クエリの実行に最適化されていません。
- ビルド環境からより多くの情報を追加したいため、CI テーブルはさらに大きくなります。
- Runner Fleet AI ソリューションの基盤となる GitLab CI 効率機械学習モデル向けにデータセットを集計するデータモデルも必要です。

私たちは、以下を実現する新しい柔軟なデータベースアーキテクチャの構築を目指しています:

- CI ビルドと Runner Fleet に関する既知のレポート要件をサポートします。
- CI ビルド環境からのデータ取り込みに活用できます。

このデータベースアーキテクチャは、将来的に AI 機能の開発を促進するためにも活用される可能性があります。

ナビゲーションやその他の領域に関する最近のユーザビリティ調査によると、GitLab の UI は情報とナビゲーション要素で過密になっています。
これは、できるだけ多くの情報を追加し、最も見つけやすい場所に機能を配置しようとした結果です。
そのため、これらの新しいオブザービリティ機能を開発する際は、ジョブ・ツー・ビー・ダン調査とソリューション検証に基づき、機能が最大の価値を提供できるようにします。

## Runner Fleet

### メトリクス - MVC

#### インスタンスランナーのキュー内での推定待ち時間は？

この質問に対処する際に解決すべき顧客の問題を以下に示します。ほとんどは、私たちのユーザビリティ調査からの引用です。

**UI**

- 「ランナーキューの予想待ち時間を確認する方法がありません。」
- 「特定のランナーにボトルネックがあるかどうかをより明確に示すビューを探してここに来ました。」

**メトリクスの種類**

- 「GitLab からランナーの可用性とパイプラインの待ち時間を確認するためのメトリクスを取得することはできますか？
  目的 - ランナーフリートをスケールアップして開発者のパイプラインに待ち時間が発生しないようにするかどうかを判断するために、データを評価する必要があります。」
- 「ジョブを開始できるまでのランナーキュー内の推定待ち時間はどれくらいですか？」

**メトリクスの解釈**

- 「ランナーキューのパフォーマンスについて、どのメトリクスを確認すればよいですか？また、そのメトリクスをどのように解釈してアクションを取ればよいですか？」
- 「ランナーキューのパフォーマンスに関するデータを時系列で分析して、開発者からの報告が可用性に関する稀なケースに過ぎないのかどうかを判断できるようにしたいです。」

#### グループランナーのキュー内での推定待ち時間は？

#### すべてのインスタンスランナーのキュー内での平均推定待ち時間は？

#### すべてのグループランナーのキュー内での平均推定待ち時間は？

#### 過去 1 時間に失敗が発生したランナーはどれですか？

## CI Insights

CI Insights は、さまざまなフィルター・検索・動的グラフを備えた、パイプラインとジョブの所要時間に関するデータを主に公開するページです。詳細については、[関連するサブセクション](ci_insights.md)を参照してください。

## 実装

現在の実装計画は [概念実証（PoC）](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/126863) に基づいています。
最新の状況については、[エピック 10682](https://gitlab.com/groups/gitlab-org/-/epics/10682) を参照してください。

### データベースの選定

FY23 に、ClickHouse が[ビッグデータや挿入負荷の高い要件を持つ機能向けの GitLab 標準データストアとして選定されました](../../../../company/working-groups/clickhouse-datastore/#context)。
そのため、CI アナリティクスにも ClickHouse を選択しています。

### データのスコープ

メインデータベースの `ci_builds` テーブルの非正規化バージョンから始め、他のテーブル（例: `ci_runners` および `ci_runner_machines`）のフィールドを含める予定です。

[不変性は ClickHouse における重要な制約](https://docs.gitlab.com/ee/development/database/clickhouse/index.html#how-it-differs-from-postgresql)であるため、`finished` 状態のビルドのみを使用します。

### フィーチャーフラグを使った開発

開発/ステージング環境でデータ取り込みとクエリパフォーマンスを完全にテストすることは困難です。
そのため、フィーチャーフラグの背後でこれらの機能を本番環境に提供し、実際のデータでパフォーマンスをテストする計画です。
データ取り込みと API のフィーチャーフラグは別々にします。

### データ取り込み

ジョブが完了するたびに、`build_id` と `processed` の値を含む新しい `p_ci_finished_build_ch_sync_events` テーブルにレコードが作成されます。
バックグラウンドワーカーが未処理の `p_ci_finished_build_ch_sync_events` レコードをループして、Postgres から ClickHouse へ非正規化された `ci_builds` 情報をプッシュします。

ある時点で、[処理されたビルドの数が増加するため、このワーカーを並列化する必要が生じる可能性](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/126863#note_1494922639)があります。
これは、cron ワーカーがワーカー数を決定する引数を受け入れることで実現されます。cron ワーカーはその引数を使用して、実際に ClickHouse への同期を実行する対応する数のワーカーをキューに入れます。

最新のビルドから開始し、すべての過去データはアップロードしません。

### 「生データ」、マテリアライズドビュー、クエリ

取り込まれたデータは ClickHouse の「生データ」テーブルに格納されます。
このテーブルは、データ取り込みメカニズムが誤って同じバッチを 2 回送信した場合に備えて行を重複排除するために、`ReplacingMergeTree` エンジンを使用します。

生データはクエリの実行に直接使用できますが、ほとんどの場合、`AggregatingMergeTree` エンジンを使用した特化したマテリアライズドビューを作成します。
これにより、クエリ実行時に読み込むデータを大幅に削減できます。

### 制限事項と未解決の問題

以下のトピックはさらなる調査が必要です。

#### 名前空間のデータを効率的にクエリする方法

管理者のみが利用可能な PoC から始めていますが、近い将来グループレベルでの機能実装が必要になります。

グループやプロジェクトが移動すると変更される可能性があるため、ソーステーブルに非正規化された「パス」を格納することはできません。

最もシンプルな解決策は常に `project_id` でビルドをフィルタリングすることですが、ClickHouse が大きなバッチでデータを保存するため、これは非効率で全データの大部分を読み込む必要が生じる可能性があります。

#### データベーススキーマを最新の状態に保つ

現時点では、PostgreSQL で使用しているマイグレーションと同等のメカニズムがありません。
最初の機能を開発する間は、データベーススキーマを手動でメンテナンスし、マイグレーションのメカニズムの開発を続けていきます。

#### スキーマ変更後のデータ再アップロード

データベーススキーマを変更する必要がある場合、古いデータが不完全になる可能性があります。
その場合は、ClickHouse テーブルを単純にトランケートして（一部の）データを再アップロードすることができます。
