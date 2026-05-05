---
title: "データベーストランザクション内での Topology Service クレーム"
owning-stage: "~devops::tenant-scale"
group: cells-infrastructure
creation-date: "2025-05-09"
authors: ["@sxuereb"]
coach: "@ayufan"
approvers: ["@ayufan"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/cells/decisions/021_claims_in_database_transaction/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
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
<td class="px-3 py-2 border border-gray-300"></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/sxuereb" class="text-blue-600 hover:underline">@sxuereb</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ayufan" class="text-blue-600 hover:underline">@ayufan</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/ayufan" class="text-blue-600 hover:underline">@ayufan</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::tenant-scale</span></td>
<td class="px-3 py-2 border border-gray-300">2025-05-09</td>
</tr>
</tbody>
</table>
</div>


## コンテキスト

GitLab の Cells アーキテクチャでは、[Topology Service のトランザクション](../topology_service_transactional_behavior.md)で詳しく説明されているように、メールアドレスやルートなどのクラスター全体で一意なリソースをクレームするために Topology Service との調整が必要です。
重要な決定事項は、これらのクレームリクエストをデータベーストランザクションの内部で行うか外部で行うかという点です。

**主な要件**:

- 複数の Cell をまたいだ競合を防ぐためにリソースをクレームする。
- Rails DB と Topology Service の間のデータ整合性を維持する。
- パフォーマンスクレームのバッチ処理をサポートする。
- 平均 50 クレーム/秒を処理し、最大 6 倍の 300 クレーム/秒に対応できること。
- データベースの安定性に影響を与えないこと。

**技術的な制約**:

- Topology Service へのネットワーク呼び出し：[P99.95 で約 200ms](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues/488#note_2767889339)
- 現在のコネクションプール：58 コネクションで [200ms で約 290 クレーム/秒をサポート](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues/488#note_2773726223)
- user.id など、Postgres のプライマリキーが必要。これはトランザクション内でレコードをデータベースに保存するときに生成される。
- Rails はトランザクション内で作成/更新を自動的にラップする

## 決定事項

[ActiveRecord](https://guides.rubyonrails.org/active_record_basics.html) トランザクション**内部**でコールバックを使用してクレームを実装します。実装では以下を行います：

- [`after_save`](https://api.rubyonrails.org/v8.0.3/classes/ActiveRecord/Callbacks/ClassMethods.html#method-i-after_save)（公式にドキュメント化）または [`before_commit`](https://github.com/rails/rails/blob/v7.2.2.2/activerecord/lib/active_record/connection_adapters/abstract/transaction.rb#L135-L137)（ドキュメント未掲載）コールバックを使用し、トランザクション内で実行します。
- INSERT 後、COMMIT 前（すべての ID が利用可能になった時点）にリソースをクレームします。
- 可能な場合は同一トランザクションからの複数のクレームをバッチ処理します。
- Topology Service リクエストにクライアント側 200ms タイムアウトを設定します。
- トランザクション内の Topology Service リクエストが `N` クレーム/秒になった時点でクライアント側サーキットブレーカーを実装します。`N` は設定可能で、データベース負荷を考慮します。
- クレームのロールアウトでは、フィーチャーフラグを使用して実施するクレームの割合を段階的に増やし、データベースへの悪影響を観察します。正確なロールアウト手順はまだ決定されておらず、[レガシー Cell として GitLab.com を Cell クラスターに採用](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1625)の一部として決定されます。

**監視要件**:

- コネクションプールの使用率と待機時間。
- クレーム関連操作のトランザクション時間。
- Topology Service リクエストのレイテンシ（P50、P99、P99.95）。
- クライアント側サーキットブレーカーのヒット数。
- クライアント側タイムアウトのヒット数。
- クライアントとサーバーからの失敗したクレームとロールバック率。

## 結果と影響

**ポジティブ**:

- シンプルな実装：既存の Rails パターンとコールバック内で動作する
- 早期本番投入：最小限のアーキテクチャ変更が必要
- アトミックなロールバック：クレームが失敗した場合にトランザクションがクリーンにロールバックされる
- 副作用の問題なし：コミット前にクレームが発生するため、Topology Service への確認前にデータベースにコミットしてしまう状況を防ぐ
- 十分な容量：現在のインフラストラクチャがピーク負荷の 6 倍をサポート
- バッチ処理サポート：すべての ID が利用可能になった後、同一トランザクション内でクレームをバッチ処理できる

**ネガティブ**:

- コネクションプールの使用：ネットワーク呼び出し中はクレームのためにデータベースコネクションを保持する。
- トランザクション時間：約 200ms のより長いトランザクションはデータベースへの負荷増加につながる可能性：
  - [WAL の蓄積](https://www.percona.com/blog/five-reasons-why-wal-segments-accumulate-in-the-pg_wal-directory-in-postgresql/)
  - 各トランザクションがコネクションを保持するため、コネクションプールの枯渇
- スケーラビリティの上限：コネクションプールサイズに制限される（現在 290 クレーム/秒）

## 代替案

### オプション 1：トランザクション外でのクレーム

以下の理由で延期：

- 大規模なリファクタリングが必要。例えば何千もの `User.create!` 呼び出しの変更が必要で、クレームするモデルごとに必要となる。
- トランザクションの自動ラップという Rails の慣習に反する。
- 実装の複雑さとエラーハンドリングが高い。
- ID がまだ利用できない場合にクレームのバッチ処理が難しい。
- 現在の容量（ピークの 6 倍）は最適化を時期尚早にする。

### オプション 2：データベーストリガー

以下の理由で却下：

- データベース以外の副作用を処理できない。
- Rails アプリケーション層の外に複雑さを追加する。
- テストと保守が難しい。
- カスケード削除ケースはすでに検証ループで処理されている。
- クラスター全体でリソースがクレーム可能かどうかを検証できない。

### オプション 3：ActiveRecord の save/update のオーバーライド

以下の理由で却下：

- 複数の属性を効率的にバッチ処理できない。
- バッチリクエストではなく属性ごとに 1 つのクレームをトリガーする。
- `update_column` などのメソッドでは動作しない。
