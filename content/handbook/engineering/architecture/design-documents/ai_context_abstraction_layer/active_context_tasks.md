---
title: "Active Context タスク"
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
upstream_sha: c9aef34f52e9f619472aeed4981f6aaec80de2b3
lastmod: "2026-06-25T09:42:09+02:00"
translated_at: "2026-06-26T21:24:33+09:00"
translator: codex
stale: false
---

## 概要

`ActiveContext::Task` は、ActiveContext システム内で長時間実行される非同期オペレーションを管理するためのフレームワークです。複数の連続したステップや依存関係のあるステップを伴う複雑なワークフローを定義、実行、追跡するための構造化された方法を提供します。

これは、埋め込みモデルの切り替え、埋め込みフィールドの作成とバックフィル、メタデータ同期のように、慎重なオーケストレーションとエラーハンドリングを必要とするオペレーションを扱うために設計されています。

## コンポーネント

### タスク基底クラス（`ActiveContext::Task[1.0]`）

すべてのタスク実装のための抽象基底クラスであり、すべてのサブクラスが従う必要のあるインターフェースを定義します。

具象クラス実装では、タスクの実際のロジックを定義します。

**バッチタスク:**

タスクは `batched!` としてマークでき、バッチで作業を実行し、完了までに複数回の実行が必要になる可能性があることを示せます。バッチタスクでは、すべての作業がいつ完了したかを判断するために `completed?` を実装する必要があります。

**タスククラス実装の例**

- `Ai::ActiveContext::Tasks::BackfillEmbeddings`: 新しい埋め込みモデルを使用して、既存ドキュメントの埋め込みを生成します。
- `Ai::ActiveContext::Tasks::SyncFeatureSettings`: 埋め込みモデル設定と機能設定を同期します。

### タスクモデル（`Ai::ActiveContext::Task`）

タスク情報を永続化する ActiveRecord モデルです。

**データベーススキーマ:**

- `connection_id` - ベクトルストア接続への外部キー
- `depends_on_id` - 先行タスクへの外部キー（[タスクチェーン](#task-chains)用）
- `name` - タスククラス名
- `status` - 現在の実行ステータス（`pending`、`in_progress`、`completed`、`failed`）
- `params` - タスクに渡される JSON パラメーター
- `retries_left` - 残りのリトライ試行回数（デフォルト: 3）
- `started_at` - 実行が開始された日時
- `completed_at` - 実行が終了した日時
- `error_message` - タスクが失敗した場合のエラー詳細

### タスク辞書（`ActiveContext::Task::Dictionary`）

定義済みタスククラスのレジストリです。グローバルアクセス用の singleton インスタンスを提供します。

```ruby
# Find a task class by name
task_class = ActiveContext::Task::Dictionary.instance.find_by_name('Ai::ActiveContext::Tasks::BackfillEmbeddings')

# Or use the shorthand
task_class = ActiveContext::Task::Dictionary.find_by_name('Ai::ActiveContext::Tasks::BackfillEmbeddings')

# Returns an array of task class objects that have been loaded
ActiveContext::Task::Dictionary.instance.tasks
```

### タスクサービス（`Ai::ActiveContext::TaskService`）

タスクチェーンを作成し、管理します。

- `create_task(task_class, params: {}, depends_on: nil)` - 単一のタスクを作成します
- `create_chain(*tasks_with_params)` - 依存関係のあるタスクのシーケンスを作成します

**使用例:**

```ruby
service = Ai::ActiveContext::TaskService.new
service.create_chain(
  [Ai::ActiveContext::Tasks::AddEmbeddingsField, { collection: 'code', field: 'embeddings_v2', dimensions: 768 }],
  [Ai::ActiveContext::Tasks::BackfillEmbeddings, { collection: 'code', field: 'embeddings_v2' }],
  [Ai::ActiveContext::Tasks::UpdateCollectionMetadata, { collection: 'code', metadata: {...} }]
)
```

### タスクワーカー（`Ai::ActiveContext::TaskWorker`）

作成されたタスクを実行する Sidekiq ワーカーです。

**実行フロー:**

1. ワーカーが次に処理可能なタスクレコードを見つけます
1. タスクレコードの `name` から正しいタスクオブジェクトをインスタンス化します
1. タスクレコードを `in_progress` としてマークします
1. タスクオブジェクトの `execute!` を呼び出します
1. 成功時: タスクレコードを `completed` としてマークします
1. 失敗時: 下記の「エラーハンドリング」の詳細を参照してください
1. タスクがバッチタスクで、完了していない場合: ワーカーを再エンキューします
1. 処理可能なタスクがほかにない場合: ワーカーは終了します

**エラーハンドリング:**

- タスク実行中の例外をキャッチします
- 失敗した実行ごとに、リトライ回数を減らし、次のいずれかを行います。
  - タスクはリトライを 1 回減らした状態で `in_progress` のままになり、cron ワーカーが次回実行時にそのタスクを取得します
  - タスクは `failed` としてマークされ、依存タスクへカスケードします（リトライが残っていない場合）

**再エンキューのロジック:**

- 完了していないバッチタスクでは、ワーカーを再エンキューして処理を継続します
- バッチではないタスクが成功した後、ワーカーは終了します。cron でスケジュールされた呼び出しが次のタスクを取得します

## タスクチェーン {#task-chains}

タスクは `depends_on` の関係を通じてほかのタスクに依存できます。タスクが処理可能になるのは、次の場合のみです。

- ステータスが `pending` または `in_progress` であり、かつ
- 依存関係がない、または依存先のステータスが `completed` である

これにより、タスク実行の有向非巡回グラフ（DAG）が作成されます。

## タスク実行フローの概要

1. **タスク作成** - サービスが `TaskService` を使用して 1 つ以上のタスクを作成します
1. **依存関係の解決** - タスクは `depends_on` 関係を通じてチェーン化されます
1. **処理可能なタスクの選択** - `Ai::ActiveContext::Task.processable` スコープが、実行準備のできたタスクを見つけます
1. **ワーカーのポーリング** - `TaskWorker` が `Ai::ActiveContext::Task.current` を通じて次に処理可能なタスクを見つけます
1. **実行** - `TaskWorker` がタスクの `execute!` メソッドを呼び出します
1. **ステータス遷移** - タスクのステータスは pending → `in_progress` → `completed`/`failed` と移行します
1. **依存タスクの実行** - タスクが完了すると、その依存タスクが処理可能になります
1. **ワーカーの再エンキュー** - バッチタスクではワーカーが自身を再エンキューし、それ以外の場合は cron でスケジュールされた呼び出しが次のタスクを取得します
1. **エラーハンドリング** - 失敗したタスクは、すべての依存タスクへ失敗をカスケードします

## 今後予定している機能強化

- **タスクの優先順位付け** - 優先度の高いタスクをほかのタスクより先に実行できるようにします
- **並列実行** - 独立したタスクを並行して実行します
- **タスクのキャンセル** - pending または in-progress のタスクをキャンセルできるようにします
- **条件付きタスク** - 条件や前の結果に基づいてタスクを実行します
