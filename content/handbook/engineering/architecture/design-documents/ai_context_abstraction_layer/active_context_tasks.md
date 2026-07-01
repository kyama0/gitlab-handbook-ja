---
title: "Active Context Tasks"
description: "Active Context Tasks フレームワークの設計ドキュメント"
status: implemented
creation-date: "2026-06-23"
authors: [ "@partiaga" ]
coaches: [ ]
dris: [ "@wortschi" ]
owning-stage: "~devops::ai platform"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/ai_context_abstraction_layer/active_context_tasks/
upstream_sha: 4253b2ab72b0791916a54411ca71a25276e128bd
lastmod: 2026-06-25T09:42:09+02:00
translated_at: "2026-07-02T06:06:16+09:00"
translator: codex
stale: false
---

## 概要

`ActiveContext::Task` は、ActiveContext システム内で長時間実行される非同期処理を管理するためのフレームワークです。複数の順次ステップや依存ステップを伴う可能性がある複雑なワークフローを定義、実行、追跡するための構造化された方法を提供します。

これは、埋め込みモデルの切り替え、埋め込みフィールドの作成とバックフィル、メタデータ同期のように、慎重なオーケストレーションとエラー処理を必要とする処理を扱うよう設計されています。

## コンポーネント

### Task ベースクラス（`ActiveContext::Task[1.0]`）

すべてのタスク実装のための抽象基底クラスであり、すべてのサブクラスが従う必要があるインターフェースを定義します。

具象クラスの実装は、タスクの実際のロジックを定義します。

**バッチタスク:**

タスクは `batched!` としてマークでき、これによりバッチ単位で作業を実行し、完了までに複数回の実行が必要になる可能性があることを示します。バッチタスクでは、すべての作業が完了したタイミングを判断するために `completed?` を実装する必要があります。

**Task クラス実装の例**

- `Ai::ActiveContext::Tasks::BackfillEmbeddings`: 新しい埋め込みモデルを使用して、既存ドキュメントの埋め込みを生成します。
- `Ai::ActiveContext::Tasks::SyncFeatureSettings`: 機能設定を埋め込みモデル設定と同期します。

### Task モデル（`Ai::ActiveContext::Task`）

タスク情報を永続化する ActiveRecord モデルです。

**データベーススキーマ:**

- `connection_id` - ベクターストア接続への外部キー
- `depends_on_id` - 先行タスクへの外部キー（[タスクチェーン](#task-chains)用）
- `name` - タスククラス名
- `status` - 現在の実行ステータス（`pending`、`in_progress`、`completed`、`failed`）
- `params` - タスクに渡される JSON パラメータ
- `retries_left` - 残りのリトライ試行回数（デフォルト: 3）
- `started_at` - 実行が開始された時刻
- `completed_at` - 実行が完了した時刻
- `error_message` - タスクが失敗した場合のエラー詳細

### Task Dictionary（`ActiveContext::Task::Dictionary`）

定義済みタスククラスのレジストリです。これはグローバルアクセス用のシングルトンインスタンスを提供します。

```ruby
# Find a task class by name
task_class = ActiveContext::Task::Dictionary.instance.find_by_name('Ai::ActiveContext::Tasks::BackfillEmbeddings')

# Or use the shorthand
task_class = ActiveContext::Task::Dictionary.find_by_name('Ai::ActiveContext::Tasks::BackfillEmbeddings')

# Returns an array of task class objects that have been loaded
ActiveContext::Task::Dictionary.instance.tasks
```

### Task Service（`Ai::ActiveContext::TaskService`）

タスクチェーンを作成し、管理します。

- `create_task(task_class, params: {}, depends_on: nil)` - 単一のタスクを作成する
- `create_chain(*tasks_with_params)` - 依存関係を持つ一連のタスクを作成する

**使用例:**

```ruby
service = Ai::ActiveContext::TaskService.new
service.create_chain(
  [Ai::ActiveContext::Tasks::AddEmbeddingsField, { collection: 'code', field: 'embeddings_v2', dimensions: 768 }],
  [Ai::ActiveContext::Tasks::BackfillEmbeddings, { collection: 'code', field: 'embeddings_v2' }],
  [Ai::ActiveContext::Tasks::UpdateCollectionMetadata, { collection: 'code', metadata: {...} }]
)
```

### Task Worker（`Ai::ActiveContext::TaskWorker`）

作成されたタスクの実行を担う Sidekiq Worker です。

**実行フロー:**

1. Worker が次に処理可能なタスクレコードを見つける
1. タスクレコードの `name` から正しいタスクオブジェクトをインスタンス化する
1. タスクレコードを `in_progress` としてマークする
1. タスクオブジェクトの `execute!` を呼び出す
1. 成功時: タスクレコードを `completed` としてマークする
1. 失敗時: 下記の「エラー処理」の詳細を参照
1. タスクがバッチタスクで、まだ完了していない場合: Worker を再エンキューする
1. 処理可能なタスクが残っていない場合: Worker は終了する

**エラー処理:**

- タスク実行中の例外を捕捉する
- 失敗した実行ごとにリトライ回数が減り、次のようになります。
  - タスクはリトライが 1 つ少ない状態で `in_progress` のままになり、cron Worker が次回実行時に取得する
  - リトライが残っていない場合、タスクは `failed` としてマークされ、依存タスクへカスケードする

**再エンキューのロジック:**

- 完了していないバッチタスクでは、Worker が処理を継続するために自身を再エンキューする
- バッチではないタスクが成功した後、Worker は終了し、cron スケジュールされた呼び出しが次のタスクを取得する

## タスクチェーン

タスクは `depends_on` リレーションを通じて他のタスクに依存できます。タスクが処理可能になるのは、次の場合だけです。

- ステータスが `pending` または `in_progress` であり、かつ
- 依存関係がない、または依存先のステータスが `completed` である

これにより、タスク実行の有向非巡回グラフ（DAG）が作成されます。

## タスク実行フローの概要

1. **タスク作成** - サービスが `TaskService` を使用して 1 つ以上のタスクを作成する
1. **依存関係の解決** - タスクは `depends_on` リレーションを通じて連結される
1. **処理可能なタスクの選択** - `Ai::ActiveContext::Task.processable` スコープが実行可能なタスクを見つける
1. **Worker のポーリング** - `TaskWorker` が `Ai::ActiveContext::Task.current` を通じて次に処理可能なタスクを見つける
1. **実行** - `TaskWorker` がタスクの `execute!` メソッドを呼び出す
1. **ステータス遷移** - タスクのステータスが pending → `in_progress` → `completed`/`failed` に移行する
1. **依存タスクの実行** - タスクが完了すると、その依存タスクが処理可能になる
1. **Worker の再エンキュー** - バッチタスクでは Worker が自身を再エンキューし、それ以外の場合は cron スケジュールされた呼び出しが次のタスクを取得する
1. **エラー処理** - 失敗したタスクはすべての依存タスクへ失敗をカスケードする

## 今後予定している機能強化

- **タスクの優先順位付け** - 優先度の高いタスクを他より先に実行できるようにする
- **並列実行** - 独立したタスクを並行して実行する
- **タスクのキャンセル** - pending または進行中のタスクをキャンセルできるようにする
- **条件付きタスク** - 条件または以前の結果に基づいてタスクを実行する
