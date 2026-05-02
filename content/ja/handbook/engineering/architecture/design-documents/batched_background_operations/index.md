---
title: バッチ化バックグラウンド操作
status: proposed
creation-date: "2025-07-16"
authors: [ "@praba.m7n", "@morefice" ]
coaches: [ "@DylanGriffith", "@ahegyi" ]
dris: [ "@alexives" ]
owning-stage: "~devops::data access"
participating-stages: []
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/batched_background_operations/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

<!-- This renders the design document header on the detail page, so don't remove it-->

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
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/praba.m7n" class="text-blue-600 hover:underline">@praba.m7n</a>, <a href="https://gitlab.com/morefice" class="text-blue-600 hover:underline">@morefice</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/DylanGriffith" class="text-blue-600 hover:underline">@DylanGriffith</a>, <a href="https://gitlab.com/ahegyi" class="text-blue-600 hover:underline">@ahegyi</a></td>
<td class="px-3 py-2 border border-gray-300"><a href="https://gitlab.com/alexives" class="text-blue-600 hover:underline">@alexives</a></td>
<td class="px-3 py-2 border border-gray-300"><span class="inline-block rounded px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700">~devops::data access</span></td>
<td class="px-3 py-2 border border-gray-300">2025-07-16</td>
</tr>
</tbody>
</table>
</div>


## サマリー

バッチ化バックグラウンドデータ操作 (Batched Background data Operations、BBO) を実行するためのフレームワークを作成します。大規模なレコード集合を対象とするデータ操作は、(サブ)バッチ化して安全に実行されるべきです。

操作には 2 種類あります。

1. セルローカル。アプリケーション全体に対して実行され、ほとんどの場合システム (例: cronjob) によってトリガーされます。
2. 組織固有。ユーザー固有であり、ほとんどの場合ユーザー操作によってトリガーされます。

BBO は、操作の進捗を追跡できるよう、十分なロギングおよびモニタリングシステムを備える必要があります。

## 動機

私たちは、async ワーカーやカスタムマイグレーションから、ほとんどの場合レコードをバッチ化する形で、大規模なデータ操作を行いがちです。
このような操作は、適切な対策が施されないままに膨大なレコードに触れるため、データベースのパフォーマンスを低下させる可能性があります。

より安全に行うために、現状 sidekiq ワーカーは以下のことを行えます。

1. 独自のバッチ化ロジックでレコードを分割し、それらを処理する。
2. [defer_on_database_health_signal](https://docs.gitlab.com/development/sidekiq/#deferring-sidekiq-workers) を使って、データベース健全性シグナルが悪い場合に遅延させる。
3. バッチ間でスリープして、息を整える時間を与える。
4. 設定された時間を超えて実行されないようにガードレールを持つ。

しかし、このような (大規模な) 操作の進捗を任意の時点で簡単に追跡することはできず、上記のオプションはワーカーごとに異なるため、現状では明確な構造がありません。

[BBM (Batched Background Migrations)](https://docs.gitlab.com/development/database/batched_background_migrations/) には、組み込みの [スロットリング](https://docs.gitlab.com/development/database/batched_background_migrations/#throttling-batched-migrations)、[最適なバッチ化](https://gitlab.com/gitlab-org/gitlab/blob/9eab5b3eb225897bc6a00464f29137f8d0392d94/lib/gitlab/database/background_migration/batched_migration.rb#L277)、および [リトライ](https://docs.gitlab.com/development/database/batched_background_migrations/#job-retry-mechanism) 機構があります。
ですが、これらは通常の Rails マイグレーションからしかキューイングできず、セルフマネージドインスタンスでも確実に実行されるよう、`finalize` するための手動介入が必要です。

BBM は多くの大規模なデータ操作で広く使われている成熟したフレームワークなので、その機能を BBO フレームワークでも活用できます。
そうすれば、大規模操作を行うワーカーが最適にバッチ化され、自動的に遅延処理されるようになります。
これにより、BBM と BBO の間でコア部分を共有でき、今後の開発 (例: より多くの DB 健全性チェック指標の追加) は両方に適用できます。

BBM と同様に、`batched_background_operations` も `job_class` および `job_arguments` に対するユニーク性チェックを持ち、既存の操作が完了 (または失敗) するまで、同じ目的の重複操作が作成されないことを保証します。

### ゴールと提案

以下の理由から、私たちは BBO を BBM フレームワーク (基盤となるテーブル/モジュール) と混在させたくありません:

1. BBM 関連のテーブルには、バッチ化バックグラウンド操作 (BBO) では役に立たない詳細があります。例: `batched_background_migrations.queued_migration_version` カラムやその他のマイグレーション固有のツール
2. [STI を避ける](https://docs.gitlab.com/development/database/single_table_inheritance) ため。
3. BBO に対応するために BBM フレームワークのロジックに介入し、その後それらを Admin UI などから隠す必要が出てくるのを避けるため。
4. BBM はユーザーアクションによってトリガーされない (組織固有ではない) ので、テーブルの成長は BBO とは異なり制御下に置きやすいです。

そこで私たちは、BBM のモジュールを (再) 利用しつつ、バッチ化バックグラウンドデータ操作のための新しいフレームワークを開発したいと考えています。

#### セル互換性

`batched_background_operations` は、組織固有 BBO に対して投入される `organization_id` (シャーディングキー) と `user_id` 属性を持ち、セルローカル (例: `inactive_projects_deletion_cron_worker`) の場合は _NULL_ になります。

そのため、組織を移動する場合、組織固有 BBO は移動されますが、セルローカルのものはセル間で同じであるため移動する必要はありません。
また、これらは cronjob から作成されるので、セルに移動された組織は (その後の実行で) 最終的にそれらによって処理されます。

### ユースケース

適切なサイズのバッチを持ち、DB 健全性シグナルが悪い場合に BBO を停止させることが目的なので、`high` 緊急度のワーカーよりも `low/medium` 緊急度のワーカーの方が適しています。
理想的には、データベースレコードをバッチ処理し、最終的に完了するアクションを実行するワーカーであれば、BBO を採用できるはずです。

以下に、BBO を利用するように変換/採用できる既存シナリオをいくつか示します。

#### Projects::InactiveProjectsDeletionCronWorker (ソース: CronJob)

`inactive_projects_deletion_cron_worker` cron は 10 分ごとに実行され、`Projects::InactiveProjectsDeletionCronWorker` を呼び出します。
これは 100 プロジェクトずつバッチ化し、4 分のランタイムリミッターを持ちます。時間切れになると、最後の ID (カーソル) をキャッシュし、次回の実行で選択に利用します。

**現状:**

```ruby
Settings.cron_jobs['inactive_projects_deletion_cron_worker'] ||= {}
Settings.cron_jobs['inactive_projects_deletion_cron_worker']['cron'] ||= '*/10 * * * *'
Settings.cron_jobs['inactive_projects_deletion_cron_worker']['job_class'] = 'Projects::InactiveProjectsDeletionCronWorker'
```

```ruby
def perform
  project_id = last_processed_project_id

  Project.where('projects.id > ?', project_id).each_batch(of: 100) do |batch|
    inactive_projects = batch.inactive.not_aimed_for_deletion

    inactive_projects.each do |project|
      if over_time?
        save_last_processed_project_id(project.id)
        raise TimeoutError
      end

      with_context(project: project, user: admin_bot) do
        deletion_warning_email_sent_on = notified_inactive_projects["project:#{project.id}"]

        if deletion_warning_email_sent_on.blank?
          send_notification(project)
          log_audit_event(project, admin_bot)
        elsif grace_period_is_over?(deletion_warning_email_sent_on)
          Gitlab::DormantProjectsDeletionWarningTracker.new(project.id).reset
          delete_project(project, admin_bot)
        end
      end
    end
  end
  reset_last_processed_project_id
rescue TimeoutError
  # no-op
end

def save_last_processed_project_id(project_id)
  with_redis do |redis|
    redis.set(LAST_PROCESSED_INACTIVE_PROJECT_REDIS_KEY, project_id)
  end
end


def reset_last_processed_project_id
  with_redis do |redis|
    redis.del(LAST_PROCESSED_INACTIVE_PROJECT_REDIS_KEY)
  end
end
```

**BBO で実装する場合:**

cronjob から新しい BBO を投入するために、以下のオプションを利用できます。

_オプション 1 (Worker を利用):_

```ruby
Settings.cron_jobs['inactive_projects_deletion_cron_worker'] ||= {}
Settings.cron_jobs['inactive_projects_deletion_cron_worker']['cron'] ||= '*/10 * * * *'
Settings.cron_jobs['inactive_projects_deletion_cron_worker']['job_class'] = 'EnqueueBatchedBackgroundOperationWorker'
Settings.cron_jobs['inactive_projects_deletion_cron_worker']['job_arguments'] = { bbo_job_class_name: 'Projects::InactiveProjectsDeletionCronWorker', min_cursor: [<last_processed_project_id>] }
```

`EnqueueBatchedBackgroundOperationWorker` は、一緒に送られた _job_arguments_ を使って BBO を作成します。

_オプション 2 (Sidekiq サーバーミドルウェアを利用):_

```ruby
Settings.cron_jobs['inactive_projects_deletion_cron_worker'] ||= {}
Settings.cron_jobs['inactive_projects_deletion_cron_worker']['cron'] ||= '*/10 * * * *'
Settings.cron_jobs['inactive_projects_deletion_cron_worker']['job_class'] = 'Projects::InactiveProjectsDeletionCronWorker'
Settings.cron_jobs['inactive_projects_deletion_cron_worker']['job_arguments'] = { min_cursor: [<last_processed_project_id>] }
Settings.cron_jobs['inactive_projects_deletion_cron_worker']['batched_operation'] = true
```

上記の cronjob はアプリイニシャライザーから設定されるため、`job_arguments.min_cursor` は静的にできず、キャッシュストアから取得する必要があります。

sidekiq サーバーミドルウェアは、`{ batched_operation: true }` を持つジョブを解釈して、_job_class_ と _job_arguments_ を使って新しい `batched_background_operations` を作成します。

`オプション 1` の方が直感的ですが、トレードオフを検討した上で、開発中に決定します。

```ruby
module Gitlab
  module BackgroundOperation
    # BatchedOperationJob will have the sub-batch iteration logic, similar to BBM
    class Project::DeleteInactiveProjects < Gitlab::Database::BatchedOperationJob
      feature_category <feature_category>

      # 'last_processed_project_id' from current design can be set as the min_cursor
      cursor(:id)

      def perform
        each_sub_batch do |sub_batch|
          inactive_projects = sub_batch.inactive.not_aimed_for_deletion

          inactive_projects.each do |project|
            with_context(project: project, user: admin_bot) do
              deletion_warning_email_sent_on = notified_inactive_projects["project:#{project.id}"]

              if deletion_warning_email_sent_on.blank?
                send_notification(project)
                log_audit_event(project, admin_bot)
              elsif grace_period_is_over?(deletion_warning_email_sent_on)
                Gitlab::DormantProjectsDeletionWarningTracker.new(project.id).reset
                delete_project(project, admin_bot)
              end
            end
          end
        end
      end
    end
  end
end
```

#### Todos::DeleteAllDoneWorker (ソース: ユーザーアクション)

このワーカーを現在のユーザーに対して使用する GraphQL API が公開されており、_delete_until_ パラメータはデフォルトで現在時刻に設定されます。

**現状:**

```ruby
module Mutations
  module Todos
    class DeleteAllDone < ::Mutations::BaseMutation
      def resolve(updated_before: nil)
        delete_until = (updated_before || Time.now).utc.to_datetime.to_s

        ::Todos::DeleteAllDoneWorker.perform_async(current_user.id, delete_until)

        {
          message: format(_('Your request has succeeded. Results will be visible in a couple of minutes.')),
          errors: []
        }
      end
    end
  end
end
```

```ruby
module Todos
  class DeleteAllDoneWorker
    include ApplicationWorker
    include EachBatch

    LOCK_TIMEOUT = 1.hour
    BATCH_DELETE_SIZE = 10_000
    SUB_BATCH_DELETE_SIZE = 100
    SLEEP_INTERVAL = 100
    MAX_RUNTIME = 2.minutes

    def perform(user_id, time)
      runtime_limiter = Gitlab::Metrics::RuntimeLimiter.new(MAX_RUNTIME)
      delete_until = time.to_datetime
      pause_ms = SLEEP_INTERVAL

      in_lock("#{self.class.name.underscore}_#{user_id}", ttl: LOCK_TIMEOUT, retries: 0) do
        Todo.where(user_id: user_id)
            .with_state(:done)
            .each_batch(of: BATCH_DELETE_SIZE) do |batch|
              batch.each_batch(of: SUB_BATCH_DELETE_SIZE) do |sub_batch|
                sql = <<~SQL
                      WITH sub_batch AS MATERIALIZED (
                        #{sub_batch.select(:id, :updated_at).limit(SUB_BATCH_DELETE_SIZE).to_sql}
                      ), filtered_relation AS MATERIALIZED (
                      SELECT id FROM sub_batch WHERE updated_at < '#{delete_until.to_fs(:db)}' LIMIT #{SUB_BATCH_DELETE_SIZE}
                    )
                    DELETE FROM todos WHERE id IN (SELECT id FROM filtered_relation)
                    SQL

                Todo.connection.exec_query(sql)

                sleep(pause_ms * 0.001) # Avoid hitting the database too hard
              end

              next unless runtime_limiter.over_time?

              self.class.perform_in(MAX_RUNTIME, user_id, time)

              break
            end
      end
    end
  end
end
```

注:

1. 同じユーザーの DoneTodos を削除するために 1 時間 TTL の `in_lock` が使われています。
2. 外側のバッチとして `10_000`、内側のサブバッチとして `100` が使われています。
3. サブバッチ間でスリープします。
4. 2 分のランタイムリミッターが使われており、その後 2 分後に同じジョブを再キューします。

**BBO で実装する場合:**

```ruby
module Mutations
  module Todos
    class DeleteAllDone < ::Mutations::BaseMutation
      def resolve(updated_before: nil)
        delete_until = (updated_before || Time.now).utc.to_datetime.to_s

        queue_batched_background_operation(
          'Gitlab::Database::BackgroundOperation::DeleteAllDoneTodos',
          :todos,
          :id,
          user: current_user,
          job_arguments: {
            delete_until: delete_until
          }
        )

        {
          message: format(_('Your request has succeeded. Results will be visible in a couple of minutes.')),
          errors: []
        }
      end
    end
  end
end
```

```ruby
def queue_batched_background_operation(job_class_name, table_name, column_name, user: nil, job_arguments: {})
  user_specific_args = user.present? ? { user_id: user.id, organization_id: user.organization_id } : {}

  # Having only crucial args for simplicity, it will also assign other attrs during the development (eg: batch_size, sub_batch_size, cursors, etc.,)
  Gitlab::Database::BatchedBackgroundOperation.create!({
    job_class_name: job_class_name,
    table_name: table_name,
    column_name: column_name,
    job_arguments: job_arguments
  }.merge(user_specific_args))
end
```

```ruby
module Gitlab
  module BackgroundOperation
    # BatchedOperationJob will have the sub-batch iteration logic, similar to BBM
    class DeleteAllDoneTodos < BatchedOperationJob
      feature_category <feature_category>

      # rubocop:disable Database/AvoidScopeTo -- supporting index: index_todos_on_user_id_and_id_done ON todos USING btree (user_id, id) WHERE ((state)::text = 'done'::text);
      scope_to ->(relation) { relation.with_state(:done).where("user_id = ?", user_id) }

      cursor(:id)

      def perform
        each_sub_batch do |sub_batch|
          sub_batch.where("updated_at < ?", delete_until.to_fs(:db))
                   .delete_all
        end
      end
      # rubocop:enable Database/AvoidScopeTo
    end
  end
end
```

BBO フレームワークは、スコープ化された ToDo を取得し、十分な間隔をあけた最適な範囲のサブバッチを作成します。
そして、操作全体は DB 健全性チェック指標のステータスに基づいて一時停止/再開されます。

**類似のユースケース:**

以下は、同様の方法で BBO に移行できる他のワーカーです。

- AdjournedProjectsDeletionCronWorker
- MemberInvitationReminderEmailsWorker
- Users::UnconfirmedSecondaryEmailsDeletionCronWorker
- Analytics::CycleAnalytics::ConsistencyWorker
- Analytics::ValueStreamDashboard::CountWorker
- Packages::Cleanup::DeleteOrphanedDependenciesWorker
- Vulnerabilities::DeleteExpiredExportsWorker
- ClickHouse::SyncStrategies::BaseSyncStrategy
- Gitlab::Counters::FlushStaleCounterIncrementsWorker
- LooseForeignKeys::CleanupWorker

#### 大規模データ操作の追跡

上記のユースケースとは異なり、大規模なデータ操作の進捗を追跡するために構築されたシステムが存在することもあります。BBO はすでに操作の進捗を取得する手段を持っているので、これらに対しても拡張できます。

**例:**

- AI Context Abstraction Layer
- 検索インデキシング

### 非ゴール

以下のワーカーには BBO は適していません

- 小さなレコード集合を操作するもの。
- データベーステーブルをバッチ化するのではなく、ID の Array (Ruby オブジェクト) をループしたり、保存されたキャッシュから次の ID を取得したりするもの。
- BBO は停止される可能性があるので、`high` 緊急度のもの。

#### データベース以外からのレコード選択

```ruby
module Ci
  class DestroyOldPipelinesWorker
    def perform_work(*)
      Project.find_by_id(fetch_next_project_id).try do |project|
        ...
        # This pushes the next ID to the redis store
        Ci::DestroyPipelineService.new(project, nil).unsafe_execute(pipelines)
      end
    end

    def fetch_next_project_id
      Gitlab::Redis::SharedState.with do |redis|
        redis.lpop(queue_key)
      end
    end
  end
```

```ruby
module Ci
  class UnlockPipelinesInQueueWorker
    def perform_work(*_)
      # `next!` fetches the next ID from cache
      pipeline_id, enqueue_timestamp = Ci::UnlockPipelineRequest.next!
      return log_extra_metadata_on_done(:remaining_pending, 0) unless pipeline_id

      Ci::Pipeline.find_by_id(pipeline_id).try do |pipeline|
        log_extra_metadata_on_done(:pipeline_id, pipeline.id)
        log_extra_metadata_on_done(:project, pipeline.project.full_path)

        result = Ci::UnlockPipelineService.new(pipeline).execute
        ...
      end
    end
  end
end
```

`Ci::DestroyOldPipelinesWorker` と `Ci::UnlockPipelinesInQueueWorker` は次に処理する項目をキャッシュから取得します。
これらのワーカーの選択/イテレーションプロセスの性質を変えなければ、BBO を採用できません。

#### 高緊急度操作

```ruby
module WorkItems
  class CopyTimelogsWorker
    include ApplicationWorker
    urgency :high

    BATCH_SIZE = 100

    def perform(from_issue_id, to_issue_id)
      ...
      ...
      from_issue = Issue.find_by_id(from_issue_id)

      reset_attributes = { project_id: to_issue.project_id, issue_id: to_issue.id }
      ApplicationRecord.transaction do
        from_issue.timelogs.each_batch(of: BATCH_SIZE) do |timelogs|
          new_timelogs_attributes = timelogs.map do |timelog|
          timelog.attributes.except('id').merge(reset_attributes)
        end

        Timelog.insert_all!(new_timelogs_attributes)
      end
    end
  end
end
```

理論的には `WorkItems::CopyTimelogsWorker` は BBO を使って実行できますが、対象 Issue が大量の `timelogs` レコードを持つことはなく、`high urgency` ワーカーであるため、BBO フレームワークの待機時間に耐えられない (可能性がある) ので適していません。

## 設計および実装の詳細

`Database::BatchedBackgroundMigrationWorker` cron と同様に、`Database::BatchedBackgroundOperationWorker` は毎分実行され、新しく追加された `batched_background_operations` を処理します。

[workers/database/batched_background_migration](https://gitlab.com/gitlab-org/gitlab/blob/676e40c4dfa0071d4931b25ddbaf1375e59baeb0/app/workers/database/batched_background_migration/) のモジュール/クラスから共通メソッドを抽出して、BBO フレームワークで再利用します。

### データベース設計

#### batched_background_operations

新しい操作は `batched_background_operations` テーブルに作成され、`sliding_list` 戦略でパーティション分割されます。

各パーティションには **7 日間** のデータが含まれ、実行可能な (active/paused ステータスの) ものは実行前に再挿入され、常に新しいパーティションに入るようにします。古いパーティションは最終的に失敗/完了した操作のみを含むようになり、デタッチして削除できます。

ログは失敗した操作をエラーメッセージとともに収集します。フィーチャーチームがデプロイ後に利用できるよう、これに対するモニタリングダッシュボードがあると良いでしょう。

```ruby
PARTITION_DURATION = 7.days

partitioned_by :partition_id, strategy: :sliding_list,
  next_partition_if: ->(active_partition) do
    oldest_record_in_partition = BatchedBackgroundOperation
      .select(:id, :created_at)
      .for_partition(active_partition.value)
      .order(:id)
      .limit(1)
      .take

    oldest_record_in_partition.present? && oldest_record_in_partition.created_at < PARTITION_DURATION.ago
  end,
  detach_partition_if: ->(partition) do
    !BatchedBackgroundOperation
      .for_partition(partition.value)
      .executable # with status [active, paused]
      .exists?
  end
end
```

#### batched_background_operation_jobs

BBM フレームワークでは、_batched_background_migrations_ レコードを削除する際の進行中のパフォーマンス [問題](https://gitlab.com/gitlab-org/gitlab/-/issues/434089) があり、_batched_background_migration_jobs_ および _batched_background_migration_transition_logs_ の参照レコードへカスケードします。大規模 BBM の場合、ジョブ/遷移ログのボリュームは膨大で、削除がタイムアウトします。

BBO でこの問題を回避するため、`batched_background_migration_jobs` がバッチ化ジョブ情報を保持し、最後のジョブの `max_cursor` だけが次のジョブの作成に利用されることから、最後のジョブの max-cursor 情報を `batched_background_operations` テーブル自体に保存することで、操作ジョブを安全に削除できます。

これは ['pending', 'running', 'failed', 'succeeded'] のステータスを持ちます。一括削除を回避するため、新しいパーティション `batched_background_migration_jobs_executed` を作成して、7 日の保持期間で failed/succeeded ジョブを保持します。
これにより、`batched_background_operations` の削除をジョブテーブルにカスケードする必要がなくなります。

#### batched_background_operation_transition_logs

(BBM フレームワークで) このテーブルを持たず、例外を別の場所で扱うことに関する進行中の [議論](https://gitlab.com/gitlab-org/gitlab/-/issues/434089#note_2653929336) があります。

私たちはこの追加テーブルを避けるよう試みます。そうでない場合は、BBM フレームワークと同様の保持期間で created タイムスタンプに基づいてパーティション分割されます。

##### 決定: ログをデータベースに保存しない

BBM では、`batched_background_migration_job_transition_logs` が状態遷移ログを保存するために使われていますが、バックグラウンド操作のモニタリングではデータベースに保存しないことを決定しました。

代わりに、他のタイプのメトリクスを使用します:

- 時系列メトリクスには **Prometheus**
- ログ集約と分析には **Kibana**

このアプローチにより、データベース内の大きなログテーブルを管理するためのメンテナンスオーバーヘッドが減少します。これには以下のような項目が含まれます:

- パーティショニングと保持ポリシー
- インデックスの最適化
- データクリーンアップ手順
- データベースの成長とストレージ要件

これらのツールは大量のメトリクスとログを扱うために専用に作られており、データベーステーブルと比較してより良いスケーラビリティと運用上のシンプルさを提供します。

決定議論については [gitlab-org/gitlab!218794](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/218794) を参照してください。

### 検討事項

- ユーザー向け操作の待機時間を減らすため、セルローカルの操作よりも組織固有の操作を優先すべきです。
- Sidekiq ワーカーには、データベースのロードバランシングを利用するための [data_consistency](https://docs.gitlab.com/development/sidekiq/worker_attributes/#job-data-consistency-strategies) 戦略があります。
  これを BBO にも追加する必要があるかもしれません。
- バグのある/破壊的な BBO の実行を回避するため、特定の BBO の一時停止/再開を制御する FF があると便利です。
