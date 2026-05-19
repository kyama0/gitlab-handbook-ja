---
title: "GitLab における ClickHouse の使用"
status: proposed
creation-date: "2023-02-02"
authors: [ "@nhxnguyen" ]
coach: "@grzesiek"
approvers: [ "@dorrino", "@nhxnguyen" ]
owning-stage: "~devops::data stores"
participating-stages: ["~section::ops", "~section::dev"]
toc_hide: true
upstream_path: /handbook/engineering/architecture/design-documents/clickhouse_usage/
upstream_sha: 0ee1352c26e468fa8032143d735391a793de7086
translated_at: "2026-04-26T10:00:00Z"
translator: claude
stale: false
lastmod: "2025-04-28T10:53:04-07:00"
---


{{< engineering/design-document-header >}}


## 概要

[ClickHouse](https://clickhouse.com/) はオープンソースの列指向データベース管理システムです。大量の行にわたる効率的なフィルタリング、集計、集計演算が可能です。FY23 に、GitLab は ObservabilityとAnalyticsなどのビッグデータと書き込みが多い要件を持つ機能の標準データストアとして ClickHouse を選択しました。このブループリントは[ClickHouse ワーキンググループ](../../../../company/working-groups/clickhouse-datastore/)の成果物です。GitLab での ClickHouse 採用のハイレベルなブループリントとして機能し、特定の ClickHouse 関連の技術的課題に対応する他のブループリントを参照しています。

## 動機

FY23-Q2 に、Monitor:Observability チームはエラートラッキングや他のオブザービリティ機能のデータを保存・クエリするための [ClickHouse データプラットフォーム](https://gitlab.com/groups/gitlab-org/-/epics/7772)を開発・出荷しました。他のチームも現在または計画中のアーキテクチャに ClickHouse を組み込み始めています。製品開発チーム全体での ClickHouse への関心の高まりを踏まえると、ClickHouse を使用した機能開発の一貫した戦略を持つことが重要です。これにより、チームが ClickHouse をより効率的に活用できるようになり、SaaS とセルフマネージドのお客様向けにこの機能を効果的に維持・サポートできるようになります。

### ユースケース

GitLab の多くの製品チームが、新機能の開発や既存機能のパフォーマンス改善において ClickHouse を検討しています。

ClickHouse ワーキンググループの開始時に、[既存および潜在的なユースケースをドキュメント化](https://gitlab.com/groups/gitlab-com/-/epics/2075#use-cases)し、すべての DevSecOps ステージグループのチームから ClickHouse への関心があることを確認しました。

### 目標

ClickHouse はすでに GitLab での使用に選択されているため、現在の主な目標は GitLab 全体での ClickHouse の採用を成功させることです。この目標を製品開発ワークフローの異なるフェーズに分解すると便利です。

1. 計画: 開発チームが ClickHouse が自分の機能に適しているかどうかを理解しやすくします。
1. 開発とテスト: ClickHouse バックエンドの機能を開発するためのベストプラクティスとフレームワークをチームに提供します。
1. リリース: SaaS とセルフマネージド向けの ClickHouse バックエンド機能をサポートします。
1. 改善: ClickHouse の使用を成功裏にスケールさせます。

### 非目標

ClickHouse を GitLab Dedicated に統合するための戦略はまだ始まっていません。ClickHouse バックエンド機能に対する明確な需要が生じるまで待つようにリーダーシップからのガイダンスがあります。

### 製品ロードマップ

#### FY24 H2（過去）

FY24 Q2 に、開発中の複数の機能をサポートするために GitLab.com と ClickHouse の統合作業を開始しました（[Issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/34299) を参照）。セルフマネージドインスタンスのコストと管理要件が不明確なため、現時点ではセルフマネージドとの統合には進みませんでした。この近期実装はセルフマネージドユーザーへの指針のためのベストプラクティスと戦略の開発に使用されます。また、早期に ClickHouse をオンボードしたいセルフマネージドインスタンスに対する推奨事項を継続的に形成します。FY24 Q3 時点で ClickHouse は GitLab.com で使用可能になっています。

#### FY25 H1（現在）

GitLab.com 向けに ClickHouse を自分たちで管理するベストプラクティスを確立した後、ClickHouse を自分たちで実行したいセルフマネージドインスタンス向けのサポートされた推奨事項を提供し始めます。このフェーズでは、[Elasticsearch に対するアプローチ](https://docs.gitlab.com/ee/integration/advanced_search/elasticsearch.html#install-elasticsearch-or-aws-opensearch-cluster)と同様に、ユーザーが「自分の ClickHouse を持ち込む」ことを許可します。最適な使用のために ClickHouse を必要とする機能（Value Streams Dashboard、[プロダクトアナリティクス](https://gitlab.com/groups/gitlab-org/-/epics/8921)）に対して、これが最初の市場投入アクションになります。なお、Observability チームはこのアプローチを踏まえず、GitLab Cloud Connector を介してセルフマネージドユーザーをサポートする決定を行っています。

#### 長期

セルフマネージドユーザーのコスト増加を最小限に抑えて管理が容易な ClickHouse のパッケージ化されたリファレンスバージョンに向けて取り組みます。ClickHouse の管理についてユーザーに確実に指示し、使用に対する正確なコストを提供できるようになるはずです。これにより、いかなる機能も ClickHouse に依存でき、エンドユーザーへのエクスポージャーを低下させません。

## ベストプラクティス

ClickHouse を使用したパフォーマンス、セキュリティ、スケーラブルな機能開発のためのベストプラクティスとガイドラインは、[ClickHouse 開発者向けドキュメント](https://docs.gitlab.com/ee/development/database/clickhouse/index.html)に記載されています。

## コストと保守分析

ClickHouse コンポーネントのコストと保守分析は [ClickHouse セルフマネージドコンポーネントのコストと保守要件](self_managed_costs_and_requirements.md)にあります。
