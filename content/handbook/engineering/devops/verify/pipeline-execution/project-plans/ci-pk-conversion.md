---
title: "CI 主キー変換 - 週次プロジェクト計画"
description: "主キーを bigint に変換するための週次プロジェクト計画 - Pipeline Execution グループ。"
upstream_path: /handbook/engineering/devops/verify/pipeline-execution/project-plans/ci-pk-conversion/
upstream_sha: 99a722ddc313408ef3d54d179c211cd76390f2bd
translated_at: "2026-04-28T14:37:32Z"
translator: claude
stale: false
---

## CI データパーティショニング - 週次プロジェクト計画

### マイルストーン目標

- 16.9: ci_builds の外部キーバックフィル完了
- 17.0: ci_pipelines の主キーの bigint への変換完了

<details markdown="1">
    <summary markdown="span">アーカイブ</summary>

### 2023年8月7日の週

#### チーム容量

- BE 1名

#### 目標

##### Bigint 変換

- [x] `ci_pipelines.auto_canceled_by_id` の外部キーバックフィルの進捗を確認
- [x] `ci_sources_pipelines.pipeline_id` と `ci_sources_pipelines.source_pipeline_id` の変換を初期化する MR をマージ
- [~] `ci_pipeline_messages.pipeline_id` の同期インデックス作成（16.4 に移動、~"workflow::in review" 中）

### 2023年8月14日の週

#### チーム容量

- BE 1名

#### 目標

##### Bigint 変換

- [x] `ci_pipelines.auto_canceled_by_id`、`ci_sources_pipelines.pipeline_id`、`ci_sources_pipelines.source_pipeline_id` の外部キーバックフィルの進捗を確認
- [~] `ci_pipeline_messages.pipeline_id` の外部キー制約を作成してカラムを交換（16.4 に移動）

### 2023年8月21日の週

#### チーム容量

- BE 1名

#### 目標

##### Bigint 変換

- [x] `ci_pipelines.auto_canceled_by_id`、`ci_sources_pipelines.pipeline_id`、`ci_sources_pipelines.source_pipeline_id` の外部キーバックフィルの進捗を確認
- [~] `ci_pipeline_chat_data.pipeline_id` と `ci_stages.pipeline_id` の非同期インデックス作成（~"workflow::in review" 中）

### 2023年8月28日の週

#### チーム容量

- BE 1名

#### 目標

##### Bigint 変換

- [x] `ci_pipelines.auto_canceled_by_id` の外部キーバックフィルの進捗を確認
- [x] `ci_sources_pipelines.pipeline_id` と `ci_sources_pipelines.source_pipeline_id` の非同期インデックス作成（週あたり最大 2 件のインデックス作成）

### 2023年9月4日の週

#### チーム容量

- BE 1名

#### 目標

##### Bigint 変換

- [~] `ci_pipelines.auto_canceled_by_id` の非同期インデックス作成（MR デプロイ済み、確認が必要）
- [x] `ci_pipeline_chat_data.pipeline_id` の同期インデックス作成
- [x] `ci_pipeline_chat_data.pipeline_id` の外部キー
- [x] `ci_pipeline_messages.pipeline_id` の同期インデックス作成
- [x] `ci_pipeline_messages.pipeline_id` の外部キー制約を作成してカラムを交換
- [x] `ci_pipeline_chat_data.pipeline_id` と `ci_stages.pipeline_id` の非同期インデックス作成
- [~] `ci_stages.pipeline_id` の同期インデックス作成（非同期インデックス作成を待つ必要がある）
- [~] `ci_stages.pipeline_id` の外部キー制約を作成
- Postgres が 14 にアップグレードされたら、変換を初期化（メインの PG はまだ 12.9、アップグレードを待つ必要がある）：
  - [~] p_ci_builds.auto_canceled_by_id
  - [~] p_ci_builds.upstream_pipeline_id
  - [~] p_ci_builds.commit_id

### 2023年9月11日の週

#### チーム容量

- BE 1名

#### 目標

##### Bigint 変換

- [~] `ci_pipelines.auto_canceled_by_id` の同期インデックス作成、外部キー制約作成、交換（インデックス）
- [~] `ci_sources_pipelines.pipeline_id` と `ci_sources_pipelines.source_pipeline_id` の同期インデックス作成、外部キー制約作成、交換
- [x] `ci_pipelines.auto_canceled_by_id` の非同期インデックス作成（MR デプロイ済み、確認が必要）
- [x] `ci_stages.pipeline_id` の同期インデックス作成（非同期インデックス作成を待つ必要がある）
- Postgres が 14 にアップグレードされたら（9月12日に実施）、変換を初期化：
  - [~] p_ci_builds.auto_canceled_by_id
  - [~] p_ci_builds.upstream_pipeline_id
  - [~] p_ci_builds.commit_id

## マイルストーン 16.5（2023年9月18日 - 2023年10月16日）

### 2023年9月18日の週

#### チーム容量

- BE 1名

#### 目標

##### Bigint 変換

---

### 2023年9月25日の週

#### チーム容量

- BE 1名

#### 目標

##### Bigint 変換

- [ ] パーティション化されたテーブルで analyze を実行
- [ ] カラムの交換に関するヘルパーとドキュメント

### 2023年10月2日の週

#### チーム容量

- BE 1名

#### 目標

##### Bigint 変換

### 2023年10月9日の週

#### チーム容量

- BE 1名

#### 目標

##### Bigint 変換

### 2023年10月16日の週

#### チーム容量

- BE 1名

#### 目標

##### Bigint 変換

- `ci_pipelines.auto_canceled_by_id` について
  - [x] 同期インデックス作成（9/18の週に完了）
  - [x] 非同期外部キー制約作成（9/25の週に完了）
  - [x] 同期外部キー制約の検証
  - [~] カラムの交換
- `ci_sources_pipelines.pipeline_id` と `ci_sources_pipelines.source_pipeline_id` について
  - [x] 同期インデックス作成（9/25の週に完了）
  - [x] 非同期外部キー制約作成（9/25の週に完了）
  - [x] 同期外部キー制約の検証
  - [x] カラムの交換
- `ci_pipeline_chat_data.pipeline_id` について
  - [x] カラムの交換
- `ci_pipeline_variables.pipeline_id` について
  - [~] カラムの交換
- `ci_stages.pipeline_id` について
  - [x] 非同期外部キー制約作成（9/25の週に完了）
  - [x] 同期外部キー制約の検証
  - [~] カラムの交換
- `ci_pipeline_messages.pipeline_id` について
  - [x] 同期外部キー制約の検証（9/18の週に完了）
  - [x] カラムの交換
- 変換を初期化：
  - [~] p_ci_builds.auto_canceled_by_id
  - [~] p_ci_builds.upstream_pipeline_id
  - [~] p_ci_builds.commit_id

### マイルストーン 16.6（2023年10月17日 - 2023年11月10日）

#### チーム容量

- BE 1名

#### 目標

##### Bigint 変換

- `ci_pipelines.auto_canceled_by_id` について
  - [x] カラムの交換
- `ci_pipeline_variables.pipeline_id` について
  - [x] カラムの交換
- `ci_stages.pipeline_id` について
  - [x] カラムの交換
- 変換を初期化：
  - [x] p_ci_builds.auto_canceled_by_id
  - [x] p_ci_builds.upstream_pipeline_id
  - [x] p_ci_builds.commit_id
- **ストレッチ：** トリガーと整数カラムの削除：
  - [x] ci_sources_pipelines.pipeline_id
  - [x] ci_sources_pipelines.source_pipeline_id
  - [x] ci_pipeline_chat_data.pipeline_id
  - [x] ci_pipeline_messages.pipeline_id
  - [~] ci_stages.pipeline_id
  - [x] ci_pipeline_variables.pipeline_id
  - [~] ci_pipelines.auto_canceled_by_id

### マイルストーン 16.7（2023年11月13日 - 2023年12月8日）

#### チーム容量

- BE 1名

#### 目標

このマイルストーンでは ci_builds の外部キーバックフィルの進捗を監視します。インデックスを更新する必要な MR の作成を続けます。

##### Bigint 変換

- トリガーと整数カラムの削除：
  - [ ] ci_stages.pipeline_id
  - [ ] ci_pipelines.auto_canceled_by_id
- 無視ルールの削除：
  - [x] ci_pipeline_chat_data.pipeline_id
  - [ ] ci_pipeline_messages.pipeline_id
  - [x] ci_sources_pipelines.pipeline_id
  - [x] ci_sources_pipelines.source_pipeline_id

</details>

### マイルストーン 16.8（2023年12月11日 - 2024年1月12日）

#### チーム容量

- BE 1名

#### 目標

このマイルストーンでは ci_builds の外部キーバックフィルの進捗を引き続き監視します。前回のマイルストーンで ci_builds をパーティション化した後、バックフィルの進捗に大幅な改善が見られました。バックフィルは 6 ヶ月ではなく 6 週間以内に完了する見込みです。そのため、計画された作業を前倒しすることにしました。データベースチームとの議論の結果、ci_builds のバックフィルが完了する前に ci_pipelines の主キーカラムを交換することが可能です。したがって、16.8 でそれを完了する予定です。これにより、バックフィルが続く間も ci_pipelines のパーティション化を進めることができます。

##### Bigint 変換

- 無視ルールの削除：
  - [ ] ci_stages.pipeline_id
  - [ ] ci_pipelines.auto_canceled_by_id
  - [ ] ci_pipeline_variables.pipeline_id
- [ ] ci_pipelines.id のカラムを交換

### マイルストーン 16.9（2024年1月15日 - 2024年2月9日）

#### チーム容量

- BE 1名

#### 目標

bigint パイプライン外部キーのバックフィルは 2024 年 1 月末頃に完了する見込みです。そのため、p_ci_builds のインデックスと外部キー制約を作成できるはずです。

##### Bigint 変換

- インデックスと外部キー制約の作成、カラムの交換：
  - [ ] p_ci_builds.auto_canceled_by_id
  - [ ] p_ci_builds.upstream_pipeline_id
  - [ ] p_ci_builds.commit_id

### マイルストーン 16.10（2024年2月12日 - 2024年3月8日）

#### チーム容量

- BE 1名

#### 目標

bigint パイプライン外部キーのバックフィルは 2024 年 1 月末頃に完了する見込みです。バックフィルが完了し p_ci_builds の外部キーが更新されたら、ci_pipelines のトリガーと整数カラムを削除できるはずです。

##### Bigint 変換

- [ ] ci_pipelines.id の無視ルールを削除
- [ ] ci_pipelines.id のトリガーと整数カラムを削除

### マイルストーン 16.11（2024年3月11日 - 2024年4月12日）

#### チーム容量

- BE 1名

#### 目標

Tian の 17.0 での限られた可用性を考え、次のマイルストーンの MR もこのマイルストーンで準備しておく予定です。

##### Bigint 変換

- トリガーと整数カラムの削除：
  - [ ] p_ci_builds.auto_canceled_by_id
  - [ ] p_ci_builds.upstream_pipeline_id
  - [ ] p_ci_builds.commit_id

### マイルストーン 17.0（2024年4月15日 - 2024年5月10日）

#### チーム容量

- BE 0名（注：Tian はこのマイルストーンでフロントラインレスポンダーになります）

#### 目標

無視ルールを削除するための最終 MR のマージ。これにより ci_pipelines PK の変換が完了するはずです。主キー変換が必要なテーブルは他にもありますが、それらはより小さく接続が少ないです。それらの完了は他のチーム作業に組み込まれます。

##### Bigint 変換

- 無視ルールの削除：
  - [ ] p_ci_builds.auto_canceled_by_id
  - [ ] p_ci_builds.upstream_pipeline_id
  - [ ] p_ci_builds.commit_id
