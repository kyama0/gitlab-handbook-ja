---
owning-stage: "~devops::tenant scale"
title: 'グループおよびプロジェクト操作 ADR 005: 移行戦略と後方互換性'
status: accepted
creation-date: "2025-09-04"
authors: [ "@rymai" ]
upstream_path: /handbook/engineering/architecture/design-documents/group_and_project_operations_and_state_management/decisions/005_migration_strategy_and_backward_compatibility/
upstream_sha: 33ef35e4327874fd4153c5606125f5de47ff7924
translated_at: "2026-04-27T05:00:00Z"
translator: claude
stale: false
---

## コンテキスト

現在の一貫性のない状態管理システムから統一状態管理システムへの移行には、以下を確保するための慎重な計画が必要です:

- 移行中のゼロダウンタイム
- 既存の API およびユーザーインターフェースとの後方互換性
- 移行プロセス全体を通じたデータ整合性
- 進行中の操作への最小限の影響
- 問題が発見された場合のロールバック能力

現在の状態管理の実装には以下が含まれます:

- プロジェクト削除スケジュールのための `projects.marked_for_deletion_at`
- グループ削除スケジュールのための `group_deletion_schedules` テーブル
- さまざまなモデルにわたるさまざまなアーカイブフラグとタイムスタンプ
- グループとプロジェクト間で一貫性のない転送メカニズム

移行は、システムの可用性とデータの一貫性を維持しながら、何百万もの既存の名前空間を処理する必要があります。

## 決定

後方互換性の保証を伴う段階的な移行戦略を実装します:

### フェーズ 1: インフラストラクチャのセットアップ（第 1〜2 週）

1. **データベーススキーマの変更**:
   - `namespaces` テーブルに `state` カラムを追加（SMALLINT、デフォルト 0）
   - `namespace_details` テーブルに `state_metadata` カラムを追加（JSONB）
   - 必要なデータベースインデックスを作成
   - フィーチャーフラグを無効にしたままスキーマ変更をデプロイ

2. **コードインフラストラクチャ**:
   - `Namespaces::Stateful` concern を実装
   - ステートマシンの定義を追加
   - 移行ユーティリティと検証ヘルパーを作成

### フェーズ 2: 双方向同期（第 3〜4 週）

1. **デュアルライトの実装**:
   - 既存の状態変更操作を更新して、ActiveRecord コールバック（before_save など）を使用して同じトランザクション内で古いシステムと新しいシステムの両方に書き込み、整合性の問題を回避します
   - 過去のデータをバックフィルするためのバッチ処理されたバックグラウンド移行を実装
   - 古いシステムと新しいシステムの状態表現の一貫性を確保するための検証を追加

2. **後方互換性レイヤー**:

   ```ruby
   module Namespaces
     module BackwardCompatibility
       extend ActiveSupport::Concern

       # 既存の API メソッドを維持する
       def marked_for_deletion_at
         return nil unless deletion_scheduled?
         # フィーチャーフラグが無効の場合は既存のカラムを使用
         return deletion_schedule.marked_for_deletion_on unless Feature.enabled?('namespace_state_management')

         # フィーチャーフラグが有効の場合は状態管理を使用
         state_metadata.dig('scheduled_at').to_time
       end

       def marked_for_deletion_at=
         # 既存のカラムと状態管理データの両方を更新する
         self.deletion_schedule.marked_for_deletion_on = state_metadata['scheduled_at'] = self.deletion_schedule.marked_for_deletion_on
       end
     end
   end
   ```

### フェーズ 3: フィーチャーフラグのロールアウト（第 5〜8 週）

1. **段階的なフィーチャーの有効化**:
   - 最初に新しい操作のために新しい状態システムを有効化
   - フィーチャーフラグの背後で既存の操作を段階的に移行
   - パフォーマンスと一貫性のメトリクスを監視

2. **API の互換性**:
   - 既存の REST API のレスポンスを維持
   - API レスポンスに新しい状態フィールドを追加（追加のみの変更）
   - GraphQL スキーマの後方互換性を確保

### フェーズ 4: データ移行（第 9〜12 週）

1. **過去データの移行**:

   ```ruby
   class MigrateNamespaceStatesBatchedMigrationJob < ::Gitlab::BackgroundMigration::BatchedMigrationJob
     def perform
       each_sub_batch.find_each do |namespace|
         migrate_namespace_state(namespace)
       end
     end

     private

     def migrate_namespace_state(namespace)
       new_state = determine_state_from_legacy_data(namespace)
       metadata = build_metadata_from_legacy_data(namespace)

       namespace.update_columns(
         state: new_state,
         state_metadata: metadata
       )
     end
   end
   ```

2. **検証と整合性チェック**:
   - 整合性検証ジョブを実行
   - 移行レポートを生成
   - エッジケースとデータ異常を処理

### フェーズ 5: レガシーのクリーンアップ（第 13〜16 週）

1. **デュアルライトの削除**:
   - 後方互換性レイヤーを無効化
   - レガシー状態管理コードを削除
   - 未使用のデータベースカラムとテーブルをクリーンアップ

2. **パフォーマンスの最適化**:
   - 新しい状態システムのデータベースクエリを最適化
   - レガシーカラムから不要なインデックスを削除
   - ドキュメントとトレーニング資料を更新

### 後方互換性の保証

1. **API の互換性**:
   - 既存のすべての REST API エンドポイントがレスポンス形式を維持
   - GraphQL スキーマは後方互換性を維持
   - 移行中、Webhook ペイロードには古いシステムと新しいシステムの両方の状態表現が含まれます

2. **データベースの互換性**:
   - 移行中もレガシーカラムは読み取り可能
   - 既存のクエリは互換性レイヤーで機能し続けます
   - データベース制約への破壊的変更はありません

3. **UI の互換性**:
   - 既存の UI コンポーネントは機能し続けます
   - 状態インジケーターは一貫した情報を表示します
   - 移行中にユーザーワークフローへの変更はありません

### ロールバック戦略

1. **即時ロールバック**（フェーズ 1〜3 で問題が検出された場合）:
   - フィーチャーフラグを無効化
   - レガシー状態管理に戻す
   - デュアルライトがレガシーシステムを維持しているため、データ損失なし

2. **データロールバック**（フェーズ 4 で問題が検出された場合）:
   - [ChatOps を使用して](https://docs.gitlab.com/development/database/batched_background_migrations/#pause-a-batched-background-migration)バッチ処理されたバックグラウンド移行を一時停止
   - 必要に応じてデータベースバックアップから復元
   - デュアルライトでレガシーシステムを再有効化

3. **緊急ロールバック**（重大な問題）:
   - 自動ロールバック手順
   - 読み取りレプリカへのデータベースフェイルオーバー
   - インシデント対応手順

## 結果

### ポジティブな結果

- **ゼロダウンタイム**: 段階的なアプローチにより継続的なシステム可用性を確保
- **データの安全性**: デュアルライトと検証によりデータ損失がありません
- **段階的なリスク**: 問題を増分的に検出して対処できます
- **ロールバックの安全性**: 各フェーズで複数のロールバックオプション
- **チームの信頼性**: 各ステップでの徹底的なテストと検証

### 技術的な結果

- **複雑性の増加**: 一時的なデュアルライトシステムにより複雑性が追加されます
- **リソース使用量**: 移行中の追加のデータベース書き込みとバックグラウンドジョブ
- **長い期間**: 安全のための 16 週間の移行タイムライン
- **監視オーバーヘッド**: 移行中の広範な監視が必要
- **コードメンテナンス**: 一時的な後方互換コードのメンテナンスが必要

### 移行リスクと軽減策

| リスク | 軽減策 |
|------|------------|
| データの不一貫性 | デュアルライト + 検証ジョブ + 整合性チェック |
| パフォーマンスの低下 | 段階的なロールアウト + 監視 + ロールバック手順 |
| API の破壊的変更 | 後方互換性レイヤー + 広範なテスト |
| 移行の失敗 | バッチ処理 + リトライロジック + 手動介入手順 |
| ユーザーエクスペリエンスへの影響 | フィーチャーフラグ + 段階的な有効化 + コミュニケーション計画 |

## 代替案

### 代替案 1: ビッグバン移行

- **長所**: より速い完了、よりシンプルな最終状態
- **短所**: 高リスク、長時間のダウンタイムの可能性、困難なロールバック

### 代替案 2: 並列システムアプローチ

- **長所**: 完全な分離、容易なロールバック
- **短所**: リソース集約的、複雑なデータ同期、長い期間

### 代替案 3: 機能ごとの段階的移行

- **長所**: 機能ごとの低リスク、テストが容易
- **短所**: 一貫性のないユーザーエクスペリエンス、移行中の複雑な状態管理
