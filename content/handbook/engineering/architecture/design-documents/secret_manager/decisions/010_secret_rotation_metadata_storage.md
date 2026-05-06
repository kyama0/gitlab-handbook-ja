---
owning-stage: "~sec::software supply chain security"
title: 'GitLab Secrets Manager ADR 010: シークレットローテーションメタデータへの Rails ActiveRecord の使用'
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/secret_manager/decisions/010_secret_rotation_metadata_storage/
upstream_sha: 86cfa2bd7d73df5a673fe5ebd33b028d0f540434
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
---

### コンテキスト

バックグラウンドジョブは、すべてのプロジェクトにわたってローテーションリマインダーが必要なシークレットを効率的に特定する必要があります。

私たちの設計目標は以下のとおりです：

1. 日次/時間次のバックグラウンドジョブ処理に対して効率的なクエリをサポートする。
2. 標準的な間隔（30/60/90 日）とカスタム cron スケジュールの両方を有効にする。
3. 期限超過のローテーションのコンプライアンス状況を追跡する。
4. OpenBao をシークレットのシングルソースオブトゥルースとして維持する。

### 決定

OpenBao がシークレット値のシングルソースオブトゥルースとして引き続き機能しながら、ローテーションスケジューリングメタデータを保存するために PostgreSQL を使用します。これにより、バックグラウンドジョブがすべてのプロジェクトにわたって効率的にクエリを実行し、標準間隔とカスタム cron ベースのスケジュールの両方をサポートしながら、ローテーションリマインダーが必要なシークレットを特定できます。データ同期の問題が生じる可能性というトレードオフは、ローテーションメタデータのみを保存し、シークレット値やアクセス制御を複製しないため、許容可能です。
私たちは意図的に ADR 008 のデータベースストレージを避けるという原則から逸脱します。

### 実装の詳細

#### データベーススキーマ

```sql
CREATE TABLE rotation_infos (
  id SERIAL PRIMARY KEY,
  project_id INTEGER NOT NULL REFERENCES projects(id),
  secret_name VARCHAR NOT NULL,

  -- Rotation scheduling
  rotation_interval_days INTEGER,  -- Computed days for standard intervals (30, 60, 90)
  rotation_interval_raw_value VARCHAR NOT NULL,  -- Original input: "30", "60", "90", or cron syntax
  next_reminder_at TIMESTAMP NOT NULL,

  -- Notification tracking
  last_reminder_sent_at TIMESTAMP,

  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Indexes for performance
CREATE UNIQUE INDEX idx_rotation_infos_project_secret ON rotation_infos(project_id, secret_name);
CREATE INDEX idx_rotation_infos_reminder_at ON rotation_infos(next_reminder_at);
```

#### データ一貫性戦略

重大な障害を回避するために、**「ローテーション優先、後で検証」**アプローチを使用します。

**作成フロー：**

1. ユーザーがローテーションを設定したときにローテーションレコードを作成する（シークレットが存在する前）
2. 同じ決定論的パスを使用して OpenBao にシークレットを作成する

**失敗シナリオ：**

- **防止済み：** ローテーション追跡なしでシークレットが存在する → ローテーションレコードが最初に作成されるため、発生不可能
- **処理済み：** シークレットなしでローテーションレコードが存在する → バックグラウンドジョブが孤立したレコードを検出してクリーンアップ
- **処理済み：** Rails 外でシークレットが削除される → バックグラウンドジョブが欠落したシークレットを検出してローテーションレコードを削除

この戦略により、孤立したレコードを適切に処理しながら、ローテーションが必要なシークレットのローテーションリマインダーを見逃すことがなくなります。

### バックグラウンドジョブ処理

以下のサンプル Ruby コードは、バックグラウンドジョブがローテーションリマインダーを効率的に処理する方法を示しています（実際の本番実装は異なる場合があります）：

```ruby
class SecretRotationReminderWorker
  def perform
    # Single database query to find all secrets due for rotation
    RotationInfo
      .where('next_reminder_at <= ?', Time.current)
      .find_in_batches(batch_size: 1000) do |batch|

      batch.each do |rotation_info|
        # Verify secret exists in OpenBao before sending reminder
        if secret_exists_in_vault?(rotation_info)
          send_rotation_reminder(rotation_info)
          rotation_info.update!(
            last_reminder_sent_at: Time.current,
            next_reminder_at: calculate_next_reminder(rotation_info)
          )
        else
          # Handle orphaned rotation records
          rotation_info.destroy
        end
      end
    end
  end
end
```

このアプローチにより以下が可能になります：

- 数時間ではなく数分ですべてのプロジェクトにわたる効率的なバッチ処理
- 必要な場合のみシークレットの存在を遅延検証
- 孤立したローテーションレコードの自動クリーンアップ

#### 将来のスケーリング考慮事項

何千ものプロジェクトにわたって数十万のシークレットがある場合のパフォーマンス問題が発生した場合、バックグラウンドジョブを分割できます：

- プロジェクト（またはプロジェクトグループ）ごとに 1 つのワーカーに分割
- ワーカーは並列で実行し、それぞれが割り当てられたプロジェクトのみをクエリ
- コア設計を変更せずに水平スケーリングを可能にする

このパーティショニング戦略は、スキーマがすでに `project_id` でインデックス付けされているため、実装は簡単です。

### 代替アプローチ：OpenBao メタデータストレージ

すべてのローテーション属性を OpenBao シークレットメタデータに保存する方法（[Issue #547863 のオプション 1](https://gitlab.com/gitlab-org/gitlab/-/issues/547863)）を評価しました：

```ruby
# Rejected approach - requires constant OpenBao queries even when no rotations are due
class RotationCheckerWithOpenBao
  def perform
    Project.find_each do |project|
      # LIST operation for every project, every hour
      secrets = vault_client.logical.list("#{project.path}/secret/metadata")
      next if secrets.blank?

      secrets.each do |secret|
        # READ operation for each secret to check rotation date
        metadata = vault_client.logical.read("#{project.path}/secret/metadata/#{secret}")
        rotation_date = metadata.data[:custom_metadata][:next_rotation_at]

        if Time.parse(rotation_date) <= Time.current
          send_rotation_reminder(project, secret)
        end
      end
    end
  end
end
```

このアプローチは以下の理由で却下されました：

- **常時 API 負荷**: 時間次で実行するバックグラウンドジョブは、ローテーションが必要なシークレットがなくても OpenBao をクエリしなければなりません。
- **パフォーマンス**: 100 個のシークレットを持つ 10,000 プロジェクトの場合、1 時間ごとに 1,000,000 回の API 呼び出しが必要です。
- **早期終了なし**: リマインダーを送信する必要があるかどうかを迅速に判断できません。
- **クエリフィルタリングなし**: ローテーションが必要なシークレットを効率的に特定するための時間ベースのクエリをサポートしません。すべてのシークレットを確認する必要があります。

### 参考資料

- [Issue #547863](https://gitlab.com/gitlab-org/gitlab/-/issues/547863): ストレージアーキテクチャの技術評価
- [Issue #499945](https://gitlab.com/gitlab-org/gitlab/-/issues/499945): シークレットローテーション API の実装
- [ADR 008](/handbook/engineering/architecture/design-documents/secret_manager/decisions/008_no_database/): シークレットのデータベースストレージを使用しない
