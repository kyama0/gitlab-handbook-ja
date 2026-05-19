---
title: "セキュリティインベントリ"
status: ongoing
creation-date: "2025-04-07"
authors: [ "@rossfuhrman", "@gkatz1" ]
coach: "@theoretick"
approvers: [  ]
owning-stage: "~devops::security risk management"
participating-stages: ["~group::security platform management"]
toc_hide: true
no_list: true
upstream_path: /handbook/engineering/architecture/design-documents/security_inventory/
upstream_sha: 86cfa2bd7d73df5a673fe5ebd33b028d0f540434
translated_at: "2026-04-27T08:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-09T13:01:28-07:00"
---


{{< engineering/design-document-header >}}


## 概要

このアーキテクチャブループリントは、セキュリティインベントリ機能を実装するための包括的なアプローチを概説します。この機能は、AppSec および DevSecOps チームにすべてのデジタルアセットのセキュリティ態勢に対する可視性を提供することを目指しています。現在のシステムはプロジェクト中心のアーキテクチャのためアセットレベルの可視性が欠如しており、セキュリティワークフローはプロジェクトレベルから始まり、主に個々のプロジェクト内の脆弱性の特定に焦点を当てており、グループ全体の態勢インサイトを提供していません。この設計によって盲点が生じています。チームは関連プロジェクトやビジネスクリティカルなアプリケーショングループ全体のセキュリティカバレッジを評価できず、リスクベースの意思決定を効率的に優先付けできず、手動インベントリ管理プロセスに悩まされています。

この提案では、グループ、サブグループ、プロジェクト、そのセキュリティスキャンカバレッジと脆弱性統計への可視性を提供するパフォーマンスの高い階層型インベントリシステムを導入します。このデータを事前計算して効率的に保存することで、コストのかかる集計操作なしに迅速なクエリと可視化が可能になり、最大規模のお客様にも対応できるスケーラブルなシステムになります。

### 提案

プロジェクトおよびグループレベルの可視性を提供するセキュリティインベントリ機能を実装し、セキュリティアナライザーのカバレッジと脆弱性統計を表示します。システムは以下を実施します。

1. プロジェクトと名前空間の両レベルで最新のアナライザーステータス情報を維持する
2. コストのかかる集計操作を避けるために名前空間レベルの統計を事前計算する
3. プロジェクトレベルで更新が発生した際に階層を上方向に変更を伝播させる
4. データドリフトを検出・修正する定期的な調整サービスを含む

### 動機

今日の AppSec チームは可視性の欠如により、会社のデジタルアセットを保護する上で大きな課題を抱えています。包括的なアセットインベントリがないと、以下のことができません。

- セキュリティカバレッジのギャップを把握する
- 効率的なリスクベースの優先付け決定を行う
- どのセキュリティコントロールがどこに実装されているかを追跡する
- 古くなった依存関係やフレームワークを特定する
- どのアセットが機密情報を扱っているかを判断する

セキュリティインベントリ機能を実装することで、GitLab はセキュリティチームが全アセットポートフォリオと各アセットに適用されているセキュリティ対策を可視化し、完全な情報に基づいてより良いセキュリティ判断を下せるようにします。

### 可視性

セキュリティインベントリへのアクセスは、特定のグループのオーナーとメンテナーに限定されます。データは `/-/security/inventory` および GraphQL API を通じて利用可能です。

### 目標

- GitLab の最大規模のお客様に対しても効率的に動作するパフォーマンスの高いスケーラブルなインベントリシステムを作成する
- グループ、サブグループ、プロジェクト全体のセキュリティ態勢への階層的な可視性を提供する
- セキュリティ統計を事前計算して効率的に保存することで計算オーバーヘッドを削減する

### 非目標

- セキュリティダッシュボードの置き換え。この機能はセキュリティダッシュボードを置き換えません。
- 個々の脆弱性のトリアージ。この機能は個々の脆弱性のトリアージには適していません。
- デフォルトブランチ以外のセキュリティデータの反映。この機能はデフォルト以外のブランチをカバーしません。

### 用語集

- **セキュリティインベントリ**: すべてのアセットとそのセキュリティ態勢の包括的なビュー。
- **アナライザー**: [セキュリティ用語集の定義](https://docs.gitlab.com/user/application_security/terminology/#analyzer)を参照。
- **アナライザーステータス**: 特定のセキュリティアナライザーがプロジェクトに対して設定・実行されているかどうかに関する情報。MVC では `Success`、`Failed`、`Not Configured` の3種類。
- **脆弱性統計**: 深刻度レベル別に事前計算された脆弱性数
- **名前空間**: GitLab でのプロジェクトのコンテナ。ユーザー名前空間またはグループ名前空間がある。
- **グループ**: GitLab でのプロジェクトとサブグループのコレクション
- **データドリフト**: 計算済み統計とテーブルに保存された実際のデータ間の不整合
- **定期的な調整サービス**: データドリフトを定期的にチェックして修正するバックグラウンドサービス

### 設計の詳細

#### アプローチ

1. **データの保存と計算**:

   - プロジェクトと名前空間ごとに深刻度別の脆弱性統計を事前計算する
   - プロジェクトレベルと集計名前空間レベルの両方でアナライザーステータス情報を保存する
   - プロジェクトレベルで更新が発生した際に階層を上方向に変更を伝播させる
   - 集計なしに高速クエリを実現するための効率的なデータベース構造を使用する

2. **データ収集**:

   - パイプライン実行後のステップでセキュリティスキャナーの実行を検出した結果に基づいてアナライザーステータスを更新する
   - 新しい脆弱性が生成されたとき、脆弱性の状態を変更したとき、プロジェクト/グループを移動したとき、またはプロジェクト/グループを削除したときに脆弱性統計を計算・保存する

3. **データの整合性**:

   - データドリフトを検出・修正するためのスケジュール調整サービスを実装する
   - プロジェクトと名前空間の統計が同期されていることを確認するための定期的なチェックを実行する
   - 潜在的なバグについてアラートするために、データドリフトが検出された際に開発通知を生成する

4. **ユーザーインターフェース**:

   - フィルタリングとページネーション機能を含む

#### 要件

1. **データベースパフォーマンス**:

   - 読み取りパフォーマンスに最適化されたデータベーススキーマ
   - 効率的なインデックス戦略を実装する
   - ページロード時の JOIN や集計の必要性を最小限に抑える

2. **データ伝播**:

   - プロジェクトレベルの変更がすべての祖先名前空間に確実に伝播されるようにする
   - グループ間のプロジェクト転送やプロジェクト削除などのエッジケースを処理する

3. **データの一貫性**:

   - 適切な箇所でデータベーストランザクションを使用する
   - 不整合を検出するためのスケジュール調整サービスを設計する

4. **スケーラビリティ**:

   - 可能な限りバックグラウンドジョブとワーカーで統計を事前計算することを優先する
   - ページネーションと効率的なフィルタリングを実装する
   - スケール時のパフォーマンス低下を避けるためにクエリパターンを最適化する

5. **ユーザーパーミッション**:

   - ユーザーがアクセス権を持つプロジェクトとグループのみを表示する
   - セキュリティ情報に対して適切なアクセス制御を適用する

#### アプリケーションプログラマーインターフェース (API)

UI との統合には、既存のグループ GraphQL API を活用します。また、この機能の一部として以下の API を実装します。

##### 脆弱性 API

```graphql
query GetGroupVulnerabilityStatistics($fullpath: ID!) {
  group(fullPath: $fullpath) {
    descendantGroups(includeParentDescendants: false, first: 20) {
      nodes {
        vulnerabilityNamespaceStatistic {
          critical
          medium
        }
      }
    }
  }
}
```

```graphql
query GetGroupVulnerabilityStatisticsForProjects($fullpath: ID!) {
  group(fullPath: $fullpath) {
    projects(first: 20) {
      nodes {
        vulnerabilityStatistic {
          critical
          medium
        }
      }
    }
  }
}
```

##### アナライザーステータス API

```graphql
query GetGroupVulnerabilityStatistics($fullpath: ID!) {
  group(fullPath: $fullpath) {
    descendantGroups(includeParentDescendants: false, first: 20) {
      nodes {
        analyzerStatuses {
          analyzerType
          success
          failure
          notConfigured
        }
      }
    }
  }
}
```

```graphql
query GetGroupVulnerabilityStatisticsForProjects($fullpath: ID!) {
  group(fullPath: $fullpath) {
    projects(first: 20) {
      nodes {
        analyzerStatuses {
          analyzerType
          status
          buildId
        }
      }
    }
  }
}
```

### データベーススキーマ

システムは以下のテーブルを使用します。

1. **analyzer_project_statuses**

   ```sql
    CREATE TABLE analyzer_project_statuses (
    id bigint NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    project_id bigint NOT NULL,
    analyzer_type smallint NOT NULL,
    status smallint NOT NULL,
    last_call timestamp with time zone NOT NULL,
    traversal_ids bigint[] DEFAULT '{}'::bigint[] NOT NULL
   );
   ```

2. **analyzer_namespace_statuses**

   ```sql
    CREATE TABLE analyzer_namespace_statuses (
    id bigint NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    namespace_id bigint NOT NULL,
    analyzer_type smallint NOT NULL,
    success bigint DEFAULT 0 NOT NULL,
    failure bigint DEFAULT 0 NOT NULL,
    traversal_ids bigint[] DEFAULT '{}'::bigint[] NOT NULL
   );
   ```

3. **vulnerability_statistics** - 既存:

   ```sql
   CREATE TABLE vulnerability_statistics (
    id bigint NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    project_id bigint NOT NULL,
    total integer DEFAULT 0 NOT NULL,
    critical integer DEFAULT 0 NOT NULL,
    high integer DEFAULT 0 NOT NULL,
    medium integer DEFAULT 0 NOT NULL,
    low integer DEFAULT 0 NOT NULL,
    unknown integer DEFAULT 0 NOT NULL,
    info integer DEFAULT 0 NOT NULL,
    letter_grade smallint NOT NULL,
    latest_pipeline_id bigint,
    archived boolean DEFAULT false NOT NULL,
    traversal_ids bigint[] DEFAULT '{}'::bigint[] NOT NULL
   );
   ```

4. **vulnerability_namespace_statistics**

   ```sql
   CREATE TABLE vulnerability_namespace_statistics (
    id bigint NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    namespace_id bigint NOT NULL,
    total integer DEFAULT 0 NOT NULL,
    critical integer DEFAULT 0 NOT NULL,
    high integer DEFAULT 0 NOT NULL,
    medium integer DEFAULT 0 NOT NULL,
    low integer DEFAULT 0 NOT NULL,
    unknown integer DEFAULT 0 NOT NULL,
    info integer DEFAULT 0 NOT NULL,
    traversal_ids bigint[] DEFAULT '{}'::bigint[] NOT NULL
   );
   ```
