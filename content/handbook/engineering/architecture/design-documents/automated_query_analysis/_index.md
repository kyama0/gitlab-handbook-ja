---
title: "自動クエリ解析"
status: proposed
creation-date: "2023-02-08"
authors: [ "@mattkasa", "@jon_jenkins" ]
coach: "@DylanGriffith"
approvers: [ "@rogerwoo", "@alexives" ]
owning-stage: "~devops::data stores"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/automated_query_analysis/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/mattkasa" class="text-blue-600 hover:underline">@mattkasa</a>, <a href="https://gitlab.com/jon_jenkins" class="text-blue-600 hover:underline">@jon_jenkins</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/DylanGriffith" class="text-blue-600 hover:underline">@DylanGriffith</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/rogerwoo" class="text-blue-600 hover:underline">@rogerwoo</a>, <a href="https://gitlab.com/alexives" class="text-blue-600 hover:underline">@alexives</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::data stores</span></td>
<td class="px-3 py-2 border border-gray-300">2023-02-08</td>
</tr>
</tbody>
</table>
</div>


## 課題のサマリー

私たちの全体的な目標は、GitLab のデータベースレビュープロセスの信頼性とスループットを向上させることです。現在のプロセスでは、新しいクエリを導入したり既存のクエリを更新したりする際に、マージリクエストの作成者が手作業でクエリプランと生 SQL を提供する必要があります。これは時間がかかるだけでなく、エラーが発生しやすいプロセスです。

私たちは、新たに導入された SQL クエリを自動的に特定して解析することで、運用効率を改善できると考えています。これにより、人為的ミスのリスクが低下し、システムの安定性向上とパフォーマンス低下の総量削減につながります。

主要な成功指標は、データベース関連のコード貢献に対して一貫した基準を維持しつつ、コード貢献者・データベースレビュアー双方の手作業を削減することです。

## ゴール

1. 作成者が手作業で SQL とクエリプランを取得する現在のプロセスを、自動化されたプロセスで置き換えます。
1. 手動プロセスでパフォーマンスの悪いクエリが見落とされることによるパフォーマンス低下の発生率を削減します。
1. データベースレビューのうちクエリテスト部分を自動化することで、貢献者およびレビュアーの効率を高めます。

## 課題

- `gitlab-org/gitlab` ほどの規模のアプリケーションが生成する SQL クエリの数を、CI 時間やリソースの増加を伴わずに収集するのは難しい場合があります。
- `gitlab-org/gitlab` ほどの規模のアプリケーションが生成する SQL クエリの数を保存するには、大量のデータベースストレージを消費する可能性があります。

## 機会

- `rspec` テストスイートのような自動テストスイートはすでに大量の SQL クエリを生成しており、これを収集して自動解析に活用できます。
- 私たちはすでに `postgres.ai` をクエリパフォーマンス解析に利用しており、本番ライクな現実的なデータを持つデータベースクローンを自動作成して解析できる API を備えています。
- `postgres.ai` のようなものを利用していない顧客でも、CI でテストデータベースに接続している場合は、その接続を利用してクエリプランを生成できます。クエリプランの精度はテストデータの現実性に左右されるので、本番ライクなデータでテストデータベースをシードすることで改善できます。
- クエリとそのクエリプランを保存することで、クエリプランをプランのコンポーネントへトークン化し、コストと重みを割り当てて、機械学習モデルとマッチングできます。スロークエリログのクエリに対してクエリプランを生成し、そのプラン要素に実コスト・実重みを割り当てることで、このモデルを構築できます。これにより、私たちのクエリのコーパスとスロークエリログを活用して、他のアプリケーションや顧客の任意のクエリテキストのパフォーマンスを予測できるようになります。

## 提案

私たちは、新規および変更されたデータベースクエリを特定するプロセスを自動化することで、貢献者やレビュアーがコード変更によるデータベースパフォーマンスへの影響をより正確かつ効率的に評価できるようにする計画です。

CI でテストを実行する副作用として生成されるクエリを収集し、正規化、重複排除、1 つ以上のアナライザーによる解析を行ったうえで、その解析結果やその他のメタデータとともに保存し、後で取得・比較できるようにします。

新規および変更されたクエリのサマリーを、その解析へのリンクとともに、また確立されたタイミング基準やその他のパフォーマンスガイドラインを超えるクエリを強調して、元となったマージリクエストにコメントとして投稿します。

## 設計および実装の詳細

### イテレーション 1

最初のイテレーションでは、正規化、重複排除、保存を含むクエリ収集の方法に焦点を当てます。収集中の CI パイプラインに対するパフォーマンスとリソースの影響を考慮し、保存する情報のパーティショニングや時系列での減衰といった事項も含めて検討する必要があります。

#### クエリの収集

CI パイプラインに対する時間とリソースの影響を可能な限り抑えるよう努めます。クエリ収集について、以下の選択肢を検討します:

- **`ruby` での `ActiveRecord` のインストルメンテーション**
  - 課題:
    - `ruby` プロジェクトのみに適用できるので、`container-registry` のようなプロジェクトには適用できません。
    - CI パイプラインの時間とリソースに非ゼロの影響があります（この影響は [!111638](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/111638) で確認できます）
  - 機会:
    - シンプルで実装しやすいです。
    - より多くの情報（例: スタックトレースや呼び出し位置）にアクセスできます。
- **ロギング機能を備えたコネクションプロキシ**
  - 課題:
    - 複雑さが増し、パフォーマンスのオーバーヘッドが発生する可能性があります。
    - プロキシのコードをメンテナンスする必要があります。
  - 機会:
    - 収集をカスタマイズできます。
    - 収集時に正規化・重複排除を実行できます。
- **`postgresql` の組み込みロギング**
  - 課題:
    - ロギングを有効にするための設定追加が必要です。
    - 結果のログを取得するのが難しい場合があります。
  - 機会:
    - コードのメンテナンスが不要です。
    - パフォーマンスへの影響が軽微です。
- **`pg_stat_statements` からの収集**
  - 課題:
    - テストデータベースに拡張機能を作成する必要があります。
    - すべてのクエリを収集できる程度に高い値を `pg_stat_statements.max` に設定する設定追加が必要です。
    - `pg_stat_statements.max` に比例した共有メモリを消費します。
  - 機会:
    - 必要なコードが最小限です。
    - データの取得が簡単です。
    - データはすでに正規化されています。

私たちはすでに [!111638](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/111638) で `ruby` の `ActiveRecord` をインストルメンテーションする概念実証（PoC）を構築しているので、最初のステップとして、これを基準に他の収集方式をベンチマークし、最適なものを選定します。

#### クエリの保存

最初のイテレーションの次のステップでは、[!111638](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/111638) の概念実証と、他の収集手段のテストから得たデータを使って、プロジェクトごとの行数を見積もり、`gitlab-org/gitlab` のパイプライン実行統計からスループットを見積もります。これらの見積もりにより、目的に適したストレージ機構を評価できるようになります。

評価予定のストレージ機構をいくつか挙げます:

- **GitLab データベースインスタンスの `ci` データベース内**
  - 課題:
    - `GitLab.com` ではこのリソースに追加負荷がかかります。
  - 機会:
    - `CI_JOB_TOKEN` の形式で既存の認証およびアクセス制御を活用できます。
    - `ci_builds` および `ci_pipelines` との関連を活用できます。
    - セルフマネージドのデプロイがシンプルになります。
- **GitLab データベースインスタンスの新たな分解されたデータベース内**
  - 課題:
    - 開発・テスト工数が増加します。
    - `GitLab.com` でのデプロイ工数が増加します。
  - 機会:
    - 既存の `main` および `ci` データベースインスタンスから DB パフォーマンスへの影響を切り離せます。
- **新たな外部サービス内**
  - 課題:
    - 開発・テスト工数が増加します。
    - `GitLab.com` とセルフマネージド双方でのデプロイ工数が増加します。
  - 機会:
    - `gitlab-org/gitlab` からパフォーマンスへの影響を切り離せます。
    - メインアプリケーションに影響を与えずに、より速くイテレーションできます。
- **ClickHouse 内**
  - 課題:
    - セルフマネージドではまだ利用できません。
  - 機会:
    - 既存の `main` および `ci` データベースインスタンスから DB パフォーマンスへの影響を切り離せます。

クエリ保存用のデータベーススキーマの例:

```sql
CREATE TABLE queries (
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    id bigint NOT NULL,
    project_id bigint NOT NULL,
    analysis_id bigint,
    hash text,
    sql text
);
CREATE TABLE pipeline_queries (
    id bigint NOT NULL,
    project_id bigint NOT NULL,
    pipeline_id bigint NOT NULL,
    query_id bigint NOT NULL
);
CREATE TABLE analyses (
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    id bigint NOT NULL,
    project_id bigint NOT NULL,
    query_id bigint NOT NULL,
    buffers int,
    walltime int,
    explain text,
    analysis_url text
);
```

上記の例のようなスキーマをパーティショニングする方法の 1 つとして、[サブパーティショニング](https://github.com/pgpartman/pg_partman/blob/master-old/doc/pg_partman.md#sub-partitioning) を活用する方法があります。`project_id` でパーティション分割し、その下を `updated_at` のある間隔でパーティション分割し、クエリを観測するたびに行を更新（touch）すれば、コードベースがまだ実行しているクエリのみを保存し、コードがもはや生成しないクエリしか含まないパーティションを刈り取ることができます。

### イテレーション 2

2 つ目のイテレーションでは、新規および変更されたクエリを特定し、サマリーを含む MR コメントを投稿する計画です。情報の正確性と有用性についてフィードバックの収集を開始し、有用性を最大化できるよう改善またはフィルタリングします。

### イテレーション 3 以降

3 つ目以降のイテレーションでは、1 つ以上のアナライザーを使ってクエリ解析を自動化し、その解析結果を保存して、MR コメントに追加する計画です。また、クエリ情報の保存と取得 API でのデータベース利用を再評価し、これを外部サービスへ移行する可能性についても検討します。
