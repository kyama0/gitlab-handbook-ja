---
title: "ClickHouse セルフマネージドコンポーネントのコストと保守要件"
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/clickhouse_usage/self_managed_costs_and_requirements/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T10:00:00Z"
translator: claude
stale: false
---

## 概要

[ClickHouse](https://clickhouse.com/) はセルフマネージドのお客様にとって追加のコストと保守が必要です:

- **リソース割り当てコスト**: ClickHouse は最適な動作のためにかなりの量のリソースが必要です。
  - [最小コスト見積もり](#minimum-self-managed-component-costs)によると、ClickHouse の設定は非常に大きなリファレンスアーキテクチャ（25k 以上）にのみ適用可能であることがわかります。
- **高可用性**: ClickHouse SaaS は HA をサポートします。現時点でセルフマネージド向けの HA 設定のドキュメントはありません。
- **Geo セットアップ**: GitLab Geo セットアップの同期とレプリケーションの複雑さ。
- **アップグレード**: 既存の PostgreSQL データベースと併せて維持・アップグレードする追加のデータベース。また、GitLab バージョンと ClickHouse バージョンのマッピングの互換性の問題と最新状態の維持も含まれます。
- **バックアップとリストア:** セルフマネージドのお客様は、ClickHouse のバックアップ戦略と災害復旧プロセスに精通したエンジニアを確保するか、ClickHouse SaaS に切り替える必要があります。
- **モニタリング**: ClickHouse は Prometheus を使用できるため、監視とトラブルシューティングのための追加コンポーネントが必要です。
- **制限**: Azure オブジェクトストレージはサポートされていません。GitLab はセルフマネージド ClickHouse のデプロイと運用をお客様が支援するためのドキュメントやサポート専門知識を持っていません。
- **ClickHouse SaaS**: 規制やコンプライアンス要件、またはレイテンシーの懸念を持つセルフマネージド GitLab インスタンスを使用しているお客様は、ClickHouse SaaS を使用できない可能性があります。

### セルフマネージドの最小コスト

[ClickHouse スペック要件](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/14384#note_1307456092)の分析と ClickHouse チームとの協力に基づいて、セルフマネージド ClickHouse の以下の最小設定を特定しました:

1. ClickHouse 高可用性（HA）
    - ClickHouse - 16 コア以上、64 GB 以上の RAM、SSD、10 GB インターネットを備えた 2 台のマシン。各マシンは Keeper も実行します。
    - [Keeper](https://clickhouse.com/docs/en/guides/sre/keeper/clickhouse-keeper) - 2 CPU、4 GB RAM、高 IOPS の SSD を備えた 1 台のマシン
1. ClickHouse 非 HA
    - ClickHouse - 16 コア以上、64 GB 以上の RAM、SSD、10 GB インターネットを備えた 1 台のマシン。

以下の[コストテーブル](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/14384#note_1324085466)は、ClickHouse の CPU とメモリ要件と GitLab リファレンスアーキテクチャのサイズおよび GCP 計算ツールからの[コスト](https://docs.gitlab.com/ee/administration/reference_architectures/index.html#cost-calculator-templates)を比較してまとめたものです。

| リファレンスアーキテクチャ | ClickHouse タイプ | ClickHouse コスト / （GitLab コスト + ClickHouse コスト） |
|-------------|-----------------|-----------------------------------|
| [20 RPS / 1k ユーザー - 非 HA](https://cloud.google.com/products/calculator#id=a6d6a94a-c7dc-4c22-85c4-7c5747f272ed) | [非 HA](https://cloud.google.com/products/calculator#id=9af5359e-b155-451c-b090-5f0879bb591e)          | 78.01%                            |
| [40 RPS / 2k ユーザー - 非 HA](https://cloud.google.com/products/calculator#id=0d3aff1f-ea3d-43f9-aa59-df49d27c35ca) | [非 HA](https://cloud.google.com/products/calculator#id=9af5359e-b155-451c-b090-5f0879bb591e)          | 44.50%                            |
| [60 RPS / 3k ユーザー - HA](https://cloud.google.com/products/calculator/#id=15fc2bd9-5b1c-479d-bc46-d5ce096b8107)     | [HA](https://cloud.google.com/products/calculator#id=9909f5af-d41a-4da2-b8cc-a0347702a823)              | 37.87%                            |
| [100 RPS / 5k ユーザー - HA](https://cloud.google.com/products/calculator/#id=9a798136-53f2-4c35-be43-8e1e975a6663)     | [HA](https://cloud.google.com/products/calculator#id=9909f5af-d41a-4da2-b8cc-a0347702a823)              | 30.92%                           |
| [200 RPS / 10k ユーザー - HA](https://cloud.google.com/products/calculator#id=cbe61840-31a1-487f-88fa-631251c2fde5)   | [HA](https://cloud.google.com/products/calculator#id=9909f5af-d41a-4da2-b8cc-a0347702a823)              | 20.47%                            |
| [500 RPS / 25k ユーザー - HA](https://cloud.google.com/products/calculator#id=b4b8b587-508a-4433-adc8-dc506bbe924f)    | [HA](https://cloud.google.com/products/calculator#id=9909f5af-d41a-4da2-b8cc-a0347702a823)              | 14.30%                            |
| [1000 RPS / 50k ユーザー - HA](https://cloud.google.com/products/calculator/#id=48b4d817-d6cd-44b8-b069-0ba9a5d123ea)    | [HA](https://cloud.google.com/products/calculator#id=9909f5af-d41a-4da2-b8cc-a0347702a823)              | 8.16%                            |

注意:
ClickHouse セルフマネージドコンポーネントの評価は、簡略化されたアーキテクチャでのコストの最小見積もりです。

以下のコンポーネントはコストを増加させますが、最小計算では考慮されていません:

- ディスクサイズ - データサイズによって異なり、見積もりが困難です。
- ディスクタイプ - ClickHouse は[高速 SSD](https://clickhouse.com/docs/ru/operations/tips#storage-subsystem) を推奨しています。
- ネットワーク使用量 - ClickHouse は[可能であれば 10 GB ネットワーク](https://clickhouse.com/docs/en/operations/tips#network)を推奨しています。
- HA の場合、60 RPS / 3k ユーザーから 1000 RPS / 50k ユーザーまでのすべてのリファレンスアーキテクチャの最小コストを合計しますが、HA スペックはユーザー数に応じて増加する傾向があります。

### リソース

- [GitLab で ClickHouse インスタンスを実行するためのコンポーネントコストと保守要件の調査と理解](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/14384)
- [GitLab.com でのエラートラッキング向け ClickHouse](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/library/database/clickhouse/index.md)
