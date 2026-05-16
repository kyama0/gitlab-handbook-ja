---
title: アナリティクスインストルメンテーションガイド
upstream_path: /handbook/product/product-processes/analytics-instrumentation-guide/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
lastmod: "2025-08-18T10:18:01-07:00"
---

## アナリティクスインストルメンテーションの概要

GitLab では、より良い製品を作るために役立てる目的で製品利用データを収集しています。データは、製品のどの部分を改善すべきか、次にどの機能を開発すべきかを GitLab が理解するのに役立ちます。また、製品利用データは、人々が GitLab を利用する理由をチームがより深く理解する助けにもなります。この知見により、より良い製品判断ができるようになります。

データの収集から、社内チームや顧客にとって有用なものにするまでには、いくつかのステージとチームが関与します。

| ステージ | 説明 | DRI | サポートチーム |
| ----- | ----------- | --- | ------------- |
| プライバシー設定 | データ分類、データアクセス、GitLab と共有されるデータをコントロールするためのユーザー設定を含む、当社プライバシーポリシーの実装。 | Analytics Instrumentation | Legal、Data |
| 収集 | GitLab SaaS、GitLab self-managed、CustomerDot、VersionDot、[about.gitlab.com](https://about.gitlab.com/) を含むすべての GitLab アプリケーションで使用されるデータ収集ツール。現在のツーリングには Snowplow、Service Ping、Google Analytics が含まれます。 | Analytics Instrumentation | Infrastructure |
| 抽出 | Product、Infrastructure、Enterprise Apps のデータソースからデータを抽出するために使用されるデータ抽出ツール。現在のツーリングには Stitch、Fivetran、カスタムが含まれます。 | Data |  |
| ロード | Product、Infrastructure、Enterprise Apps のデータソースからデータを抽出し、データウェアハウスにロードするために使用されるデータロードツール。現在のツーリングには Stitch、Fivetran、カスタムが含まれます。 | Data |  |
| オーケストレーション | ソースから Enterprise Data Warehouse にデータを移動するための抽出およびロードツーリングのオーケストレーション。現在のツーリングには Airflow が含まれます。 | Data |  |
| ストレージ | GitLab の企業データ、パフォーマンス分析、Key Performance Indicator などの全社的データの唯一の情報源である Enterprise Data Warehouse (EDW)。現在の EDW は Snowflake 上に構築されています。 | Data |  |
| 変換 | データ分析の準備として Enterprise Data Warehouse 内でのデータの変換とモデリング。現在のツーリングは dbt と Python スクリプトです。 | Data | Analytics Instrumentation |
| 分析 | クエリと可視化ツールを使用した Enterprise Data Warehouse 内のデータの分析。現在のツーリングは Tableau です。 | Data、Product Data Insights | Analytics Instrumentation |
| ローンチ後のインストルメンテーション | より大きな製品インサイトを提供するために、機能全体にわたって製品インストルメンテーションを拡充します。過去の機能ローンチでインストルメンテーションが施された機能と、インストルメンテーションが必要な機能を遡及的に評価する必要があります。ローンチ後の実装によって、現在見逃されているインサイトを収集できるようになり、CSM チームが顧客の組織内における機能の利用状況と採用状況の理解を支援できるようになります。 | Product、Product Data Insights | Analytics Instrumentation |

[編集可能なソースファイル](https://docs.google.com/spreadsheets/d/144-BLh7uyX4aY23QNrvke5BqCcb9xfPk2BL4qGFvzFY/edit?usp=sharing)

## クイックリンク

| リソース | 説明 |
| -------- | ----------- |
| [Analytics Instrumentation 入門](https://docs.gitlab.com/development/internal_analytics/) | Analytics Instrumentation ツールの実装と利用方法を網羅したガイド |
| [Metrics Dictionary](https://metrics.gitlab.com/) | 収集されるすべてのメトリクスとイベントの SSoT |
| [プライバシーポリシー](https://about.gitlab.com/privacy/) | 当社が収集するデータとその取り扱い方法について概説したプライバシーポリシー |
| [Product Usage Data プライバシーポリシー](/handbook/legal/privacy/customer-product-usage-information/) | 当社が収集する製品利用データとその取り扱い方法について概説したプライバシーポリシー |
| [Analytics Instrumentation 方針](https://about.gitlab.com/direction/monitor/analytics-instrumentation/) | GitLab における Analytics Instrumentation のロードマップ |
| [Analytics Instrumentation 開発プロセス](/handbook/engineering/data-engineering/analytics/analytics-instrumentation/) | Analytics Instrumentation グループの開発プロセス |

_2024-05-16: 最終更新_
