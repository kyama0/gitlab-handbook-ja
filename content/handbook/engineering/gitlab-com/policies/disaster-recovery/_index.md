---
title: "GitLab.com のディザスタリカバリ"
description: "このポリシーは GitLab.com のディザスタリカバリに関する要件を規定します"
controlled_document: true
upstream_path: "/handbook/engineering/gitlab-com/policies/disaster-recovery/"
upstream_sha: "27d1e9b21984fe11eff53db49a85c2ba08ef901c"
translated_at: "2026-04-28T15:26:32Z"
translator: claude
stale: false
lastmod: "2025-11-19T12:25:32-08:00"
---

{{< label name="Visibility: Audit" color="#E24329" >}}

## 目的

GitLab はプラットフォーム全体にわたるリカバリ機能の改善方法を継続的に評価し、万が一災害が発生した場合でも、通常の運用をできる限り迅速かつ最小限の中断で復旧できるようにしています。

このポリシーは、GitLab.com の災害シナリオへの対応能力の現状、[GitLab.com バックアップ](/handbook/engineering/gitlab-com/policies/backup/)が復元のために検証・テストされる方法、および大規模なサービス停止という万が一の事態に備えて GitLab がサービスリカバリ手順をテストする方法を概説します。

## ディザスタリカバリ

### スコープ

GitLab.com のディザスタリカバリ戦略は以下のコンポーネントを対象とします:

1. 復元手順の定期的な検証とテスト
2. バックアップの自動復元と検証
3. 局所的な障害に対する耐性を確保するための `us-east1` 内の複数データセンターへのデプロイ

### 復元手順の検証とテスト

ゲームデイと呼ばれる模擬ディザスタリカバリ（DR）イベントを四半期ごとに実施し、1つ以上のサービスに影響するインシデントをシミュレートします。
これらの演習により DR プロセスを検証し、実際のインシデントへの対応準備を評価します。

これらの[ゲームデイ](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/disaster-recovery/gameday.md)では、[各手順の測定値を記録する](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/disaster-recovery/recovery-measurements.md)ことで RTO と RPO の目標値を検証します。

### リージョナルリカバリ

すべての [GitLab.com バックアップ](/handbook/engineering/gitlab-com/policies/backup/)は、万が一のリージョナル災害時にお客様データを復旧できるよう、マルチリージョンのオブジェクトストレージに保存されます。
リージョナルバックアップからの復旧は、以下に説明する自動リカバリとデータ検証プロセスによって検証されます。

### バックアップの自動復元テストとデータ整合性検証

GitLab はバックアップのデータ整合性を確保するために自動化されたメカニズムを採用しています。

#### PostgreSQL

GitLab.com アプリケーションデータベースの日次復元テストは、[PostgreSQL Database Restore Validation](https://gitlab.com/gitlab-com/gl-infra/data-access/durability/gitlab-restore/postgres-gprd) プロジェクトを使用して [CI パイプライン](https://ops.gitlab.net/gitlab-com/gl-infra/data-access/durability/gitlab-restore/postgres-gprd/-/pipelines)（社内）で実施されます。
このプロセスは新しいインスタンスへのポイントインタイムリカバリ（PITR）復元を実行し、復元されたデータベースにクエリを実行することでデータ整合性を検証します。
同じプロセスが CustomersDOT データベースにも使用され、[postgres-prdsub](https://gitlab.com/gitlab-com/gl-infra/data-access/durability/gitlab-restore/postgres-prdsub) プロジェクトの[スケジュールされたパイプライン実行](https://ops.gitlab.net/gitlab-com/gl-infra/data-access/durability/gitlab-restore/postgres-prdsub/-/pipelines)（社内）で行われます。

#### Gitaly ディスクスナップショット

Git リポジトリの毎時復元テストは、[Gitaly スナップショット検証](https://gitlab.com/gitlab-com/gl-infra/data-access/durability/gitlab-restore/gitaly-snapshot-verification)プロジェクトを介して [CI パイプライン](https://ops.gitlab.net/gitlab-com/gl-infra/data-access/durability/gitlab-restore/gitaly-snapshot-verification/-/pipelines)（社内）でランダムに選択された Gitaly ディスクを使用して実施されます。
このプロセスはランダムな Gitaly スナップショットを取得して新しいディスクに復元し、復元後に最近のコミットを確認することでデータ整合性を検証します。

#### オブジェクトストレージ

バージョニングとソフトデリートによる固有の保護があるため、オブジェクトストレージの自動復元検証は不要です。

### マルチゾーンデプロイ

GitLab.com は `us-east1` リージョン内の複数の GCP アベイラビリティゾーンにデプロイされています。
`us-east1` 内の単一ゾーンに影響する短期間の停止が発生した場合、影響を受けていないゾーンがスケールアップしてサービスを復旧します。
Gitaly サービスについては、データ損失が発生した場合にバックアップからの復旧が必要となります。

## 例外

このポリシーの例外は、[情報セキュリティポリシー例外管理プロセス](/handbook/security/controlled-document-procedure/#exceptions)に従って管理されます。

## 参考資料

- [バックアップ](/handbook/engineering/gitlab-com/policies/backup/)
- [PostgreSQL Database Restore Validation プロジェクト](https://gitlab.com/gitlab-com/gl-infra/data-access/durability/gitlab-restore/postgres-gprd)
- [PostgreSQL Database Restore Validation パイプライン実行](https://ops.gitlab.net/gitlab-com/gl-infra/data-access/durability/gitlab-restore/postgres-gprd/-/pipelines)
- [Gitaly スナップショット検証プロジェクト](https://gitlab.com/gitlab-com/gl-infra/data-access/durability/gitlab-restore/gitaly-snapshot-verification)
- [Gitaly スナップショット検証プロジェクト パイプライン実行](https://ops.gitlab.net/gitlab-com/gl-infra/data-access/durability/gitlab-restore/postgres-prdsub/-/pipelines)
- [レコード保持・廃棄](/handbook/security/policies_and_standards/records-retention-deletion/)
- [ディザスタリカバリランブック](https://runbooks.gitlab.com/disaster-recovery/recovery/)
- [GameDay](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/disaster-recovery/gameday.md)
