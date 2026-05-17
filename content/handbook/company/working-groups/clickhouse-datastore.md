---
title: "ClickHouse ワーキンググループ"
description: "ClickHouse データストア ワーキンググループの属性、目標、ロールと責任について説明します。"
upstream_path: /handbook/company/working-groups/clickhouse-datastore/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-04T01:51:25+00:00"
---

## 属性

| プロパティ        | 値           |
|-----------------|-----------------|
| 作成日           | 2022-12-01 |
| 終了日           | 2024-04-25 |
| Slack           | #f_clickhouse（社内からのみアクセス可能）|
| Google Doc      | [アジェンダ](https://docs.google.com/document/d/1ZZ7fE7s18Yxww9wp0-lO7mFxJmwop3pWvqINCQPNubA/edit#)（社内からのみアクセス可能）|
| Epic            | [リンク](https://gitlab.com/groups/gitlab-com/-/epics/2070) |
| 概要 & ステータス | [終了条件の進捗](#exit-criteria-progress)を参照 |

### 背景

[ClickHouse](https://clickhouse.com) はオープンソースの列指向データベース管理システムです。大量の行に対するフィルタリング、集計、合計を効率的に処理できます。

FY23 に ClickHouse は、大規模データおよび挿入多発の要件を持つ機能（例：オブザーバビリティ、アナリティクスなど）に対する GitLab の標準データストアとして選定されました。ClickHouse は GitLab のスタックにおける Postgres や Redis を置き換えることを意図していません。

FY23 Q2 に Monitor:Observability チームがエラートラッキングおよびその他のオブザーバビリティ機能のデータを保存・クエリするための [ClickHouse データプラットフォーム](https://gitlab.com/groups/gitlab-org/-/epics/7772)を開発・提供しました。他のチームも現在または計画中のアーキテクチャに ClickHouse を組み込み始めています。

新機能開発時にチームが ClickHouse データプラットフォームを効率的に活用できるようにし、SaaS およびセルフマネージドのお客様に対してこの機能を効果的に維持・サポートできるようにすることが目標です。

### WG の終了

2024 年 4 月に ClickHouse ワーキンググループはクローズされました。このグループは GitLab のアナリティクスおよびモニタリング機能をサポートするために、ClickHouse を GitLab のアーキテクチャに導入するという大きな進歩を遂げました。

* 顧客の RED データの保存に関するセキュリティおよび法務の承認、本番準備レビューを含め、ClickHouse Cloud と GitLab の使用を可能にしました。
* 複数の ClickHouse ホスティング設定を ClickHouse Cloud に統合し、チームの運用負荷を削減し信頼性を向上させました。
* ClickHouse の機能なしには実現できなかった複数の機能をリリースしました。
* GitLab.com でパフォーマンスが低下していた Contributor Analytics などの機能を修正しました。
* GitLab の開発プロセスにおける ClickHouse 使用に関するドキュメントとツールを開発しました。

最近設立された [Product Usage Data Architecture Working Group](https://internal.gitlab.com/handbook/company/internal-working-groups/product-usage-data-architecture/) との重複から、ClickHouse グループを解散し、分析機能のアーキテクチャを定義するそのグループの作業に統合することが決定されました。

### 終了条件 {#exit-criteria}

このワーキンググループには以下の目標があります：

1. 現在の使用状況・機能と将来のユースケースを文書化・レビューする。
1. ClickHouse 使用に関するアーキテクチャ戦略を開発・普及させる。
    1. GitLab における ClickHouse 使用のアーキテクチャ設計書。
    1. GitLab における ClickHouse のスケーラブルなデータインジェストパイプラインのアーキテクチャ設計書。
    1. スケーリングおよびクエリ設計・デバッグ・ガードレールなどに関する期待値を設定するガイダンスを提供する。
    1. 適切でセキュアなデフォルト設定を定義する。セキュリティに関する推奨事項とガードレールを提供する。
1. ロールアウト戦略と計画を策定する（例：フィーチャーフラグ、顧客が無効化・削除を希望するケースがあるか、など）。
    1. 特定のユースケースに対する SaaS ロールアウト戦略。
    1. セルフマネージドサポートを通じて ClickHouse を[リファレンスアーキテクチャ](https://docs.gitlab.com/ee/administration/reference_architectures/)に追加するための基盤を整える。
        * セルフマネージドインストール用の ClickHouse パッケージング。
        * ClickHouse インスタンス運用のコンポーネントコストとメンテナンス要件の調査・理解。
        * ClickHouse の追加が意味をなすスケールおよびデプロイ対象の決定。
        * ClickHouse とのインタラクションや代替手段に対する抽象化レイヤーの検討。
1. ワーキンググループの成果に関するコミュニケーション計画を策定・実施する。

#### 終了条件の進捗 {#exit-criteria-progress}

| 条件 | 開始日 | 完了日 | 進捗 | DRI |
|----------|------------|------------|------------|------------|
| [ClickHouse の現在の使用状況・機能と将来のユースケースの文書化・レビュー](https://gitlab.com/groups/gitlab-com/-/epics/2075) | 2022-12-08 | 2023-02-01 | 100% | Marshall Cottrell |
| [ClickHouse 使用に関するアーキテクチャ戦略の開発・普及](https://gitlab.com/groups/gitlab-com/-/epics/2076) | 2023-01-05 | 2023-05-25 | 100% | Nick Nguyen |
| [ClickHouse ロールアウト戦略と計画の策定](https://gitlab.com/groups/gitlab-com/-/epics/2077) | 2023-01-05 | | 60% | Sam Goldstein |
| [ClickHouse オーナーシップモデルに関する推奨事項の策定](https://gitlab.com/groups/gitlab-com/-/epics/2094) | | | 0% | |
| [ワーキンググループのコミュニケーション計画の策定・実施](https://gitlab.com/groups/gitlab-com/-/epics/2078) | 2023-01-18 | | 0% | Nicole Williams |
| [GA に向けた本番準備の完了](https://gitlab.com/groups/gitlab-com/-/epics/2316) | 2023-08-04 | | 75% | Nathan Rosandich |

### 現在および計画中のユースケース

* [ClickHouse と GitLab の実装の現状](https://gitlab.com/gitlab-com/ops-sub-department/ops-engineering-management/-/issues/205)
* [ClickHouse ユースケース](https://gitlab.com/gitlab-org/gitlab/-/issues/384184)

### ロールと責任

| ワーキンググループの役割 | 担当者                | 役職                          |
|-----------------------|-----------------------|--------------------------------|
| エグゼクティブスポンサー | Christopher Lefelhocz | VP of Development            |
| ファシリテーター DRI    | Sam Goldstein | Director of Engineering, Ops |
| 共同ファシリテーター    | Nick Nguyen | Senior Engineering Manager, Data Stores |
| 共同ファシリテーター    | Nicole Williams | Senior Engineering Manager, Monitor & Runner |
| 共同ファシリテーター    | Nathan Rosandich | Engineering Manager, Govern:Compliance |
| ファンクショナルリード - アナリティクス | Mikołaj Wawrzyniak | Staff Backend Engineer, Analytics:Analytics Instrumentation |
| ファンクショナルリード - Optimize  | Adam Hegyi | Staff Backend Engineer, Plan:Optimize |
| ファンクショナルリード - ModelOps  | Mon Ray| Engineering Manager, ModelOps |
| ファンクショナルリード - Monitor   | Mat Appelman | Principal Engineer, Monitor |
| ファンクショナルリード - Distribution | Dmytro Makovey | Senior Backend Engineer, Distribution:Build|
| ファンクショナルリード - Quality   | Kassandra Svoboda | Quality Engineering Manager, Enablement & SaaS Platforms |
| ファンクショナルリード - インフラ   | Reuben Pereira | Senior Backend Engineer, Delivery:System |
| ファンクショナルリード - プロダクト | Dilan Orrino | Senior Product Manager, Enablement:Distribution |
| メンバー               | Pavel Shutsin | Senior Backend Engineer, Plan:Optimize |
| メンバー               | Dennis Tang | Engineering Manager, Analyze:Product Analytics |
| メンバー               | Max Woolf            | Senior Backend Engineer, Analyze:Product Analytics |
| メンバー               | Sebastian Rehm | Engineering Manager, Analytics:Analytics Instrumentation  |
| メンバー               | Piotr Skorupa   | Backend Engineer, Analytics:Analytics Instrumentation |
| メンバー               | Alex Ives | Engineering Manager, Database (PostgreSQL) |
| メンバー               | Brandon Labuschagne | Engineering Manager, Plam:Optimize |
| メンバー               | Dylan Griffith | Principal Engineer, Data Stores |
| メンバー               | João Pereira | Staff Backend Engineer, Package:Container Registry |
| メンバー               | Haim Snir | Senior Product Manager, Plan:Optimize |
| メンバー               | Lucas Charles | Staff Backend Engineer, Secure::Static Analysis |
| メンバー               | Kamil Niechajewicz | Engineering Manger, Growth:Acquisition  |
| メンバー               | Doug Stull | Staff FullStack Engineer, Growth:Acquisition  |
| メンバー               | Nicholas Klick | Engineering Manager, Observability |
| メンバー               | Arun Sori | Senior Backend Engineer, Monitor:Observability |
| メンバー               | Nailia Ishakkova | Senior Software Engineer in Test, Enablement: Distribution |
