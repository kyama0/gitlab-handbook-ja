---
title: "Kubernetes マイグレーション ワーキンググループ"
description: "このワーキンググループのチャーターは、PostgreSQL を除いて GitLab.com のすべてを Kubernetes に移行することです。"
upstream_path: "/handbook/company/working-groups/multi-large/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T12:00:00Z"
translator: "claude"
stale: false
---

## 属性

| プロパティ        | 値           |
|-----------------|-----------------|
| 作成日    | 2020年6月22日 |
| 終了日        | 2022年12月12日 |
| Slack           | [#wg_k8s-migration](https://gitlab.slack.com/archives/C016JU3CZKJ)（社内からのみアクセス可能） |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/1dbJZNAiTVvwJ9ICu10FpxP9AaAVDXDVkATmpzSONztE/edit#)（社内からのみアクセス可能） |
| 概要とステータス | [GitLab.com on Kubernetes Epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/112) |

### チャーター

このワーキンググループのチャーターは、GitLab.com の Kubernetes プラットフォームへの移行をサポートするために、部門横断的な取り組みを同期させることです。この移行は、大きな人員負担なしに複数の大規模で独立した GitLab サイトを実行する必要がある他のイニシアチブの基盤となるため、不可欠です。

### スコープと定義

このコンテキストにおいて、このワーキンググループのスコープは、[2020-07-13](https://docs.google.com/document/d/1dbJZNAiTVvwJ9ICu10FpxP9AaAVDXDVkATmpzSONztE/edit#bookmark=id.dej0jql4zr9f)のワーキンググループアジェンダに従って成果物の順序を定義し、[2021-02-01](https://docs.google.com/document/d/1dbJZNAiTVvwJ9ICu10FpxP9AaAVDXDVkATmpzSONztE/edit?ts=60183e13#bookmark=id.ncj5do925oqy)にさらに精緻化された以下のリストで定義されます。このリストの目的は、ワーキンググループのチャーターが有限になるように成果物を定義することです。

#### NFS の廃止

1. NFS なしで Web/API が動作するようにする（[Issue トラッカー](https://gitlab.com/groups/gitlab-org/-/epics/1316#note_377457528)）
1. NFS なしで CI/CD ライブトレースが動作するようにする（[Issue トラッカー](https://gitlab.com/groups/gitlab-org/-/epics/3791)）
1. NFS なしで Pages が動作するようにする（Scalability: [https://gitlab.com/groups/gitlab-org/-/epics/3980](https://gitlab.com/groups/gitlab-org/-/epics/3980)）

#### Helm チャート

1. .com の Web/API ノードを Helm チャートに移行する（[Issue トラッカー](https://gitlab.com/groups/gitlab-org/-/epics/5327)）
1. .com の Pages ノードを Helm チャートに移行する（[Issue トラッカー](https://gitlab.com/groups/gitlab-org/-/epics/5326)）

#### ステートフルノード

1. Gitaly を K8s へ
1. Redis を K8s へ

PostgreSQL を含むすべてのステートフルノードがここに含まれているわけではなく、これは意図的なものです。

## 役割と責任

| ワーキンググループの役割                       | 担当者                          | 役職                                    |
|------------------------------------------|---------------------------------|------------------------------------------|
| エグゼクティブステークホルダー                    | Steve Loyd  | VP of Infrastructure |
| ファシリテーター                              | Chun Du, Michele Bursi  | Director of Engineering, Enablement and Engineering Manager, Delivery             |
| ファンクショナルリード                          | Nailia Iskhakova                | Software Engineer in Test, Database      |
| ファンクショナルリード                          | Andrew Thomas                    | Principal Product Manager, Enablement  |
| ファンクショナルリード                          | Gerardo "Gerir" Lopez-Fernandez | Engineering Fellow, Infrastructure       |
| メンバー                                   | Jason Plum                      | Staff Engineer, Distribution             |
| メンバー                                   | Tanya Pazitny                   | Quality Engineering Manager, Enablement  |
| メンバー                                   | Mek Stittri                     | Director of Quality Engineering          |
| メンバー | Marin Jankovski | Sr Engineering Manager, Infrastructure, Delivery & Scalability |
| メンバー | Dilan Orrino | Senior Prouct Manager, Distribution |
| メンバー | Mark Wood | Senior Prouct Manager, Create:Gitaly |
| メンバー | Andras Horvath | Engineering Manager, Gitaly |

## 成果

Kubernetes マイグレーション ワーキンググループは、運用コストを削減し、日常業務の効率を高めるために設立されました。

ワーキンググループは、各サービスの移行パスを担当チームと共同で定義しました。このコラボレーションには、Cloud Native アーキテクチャへのサービス移行を成功させるためのターゲットワークロードの分析が含まれていました。取り組みの一部として、新しいオブザーバビリティソリューションや新しいリリース・デプロイ機能など、移行を成功させるために必要なサポートインフラのすべての関連サービスの作業も行いました。

移行はすべてのステートレスサービスと一部の選択されたステートフルサービスに対応しました。近い将来に新しいアーキテクチャが採用されることを考慮し、すぐに置き換えられるコンポーネントの移行に費やす労力を避けるために、Gitaly の移行は意図的に行わないことが決定されました。移行パスの特定のための作業は今でも有効であり、新しいアーキテクチャが部分的に実装された時点で再評価されます。これを再訪する目標は FY24Q2 末に設定されています。

Kubernetes へのサービス移行により、GitLab はインフラのサイズとコストを最適化しながら、サービスをより柔軟かつ効率的にスケーリングできるようになりました。同様に、[一部のケースでは同等またはそれ以上のパフォーマンスを維持](https://gitlab.com/gitlab-com/gl-infra/delivery/-/issues/920?_gl=1*1u90s8c*_ga*MTM3MjI4MTA0NC4xNjY4MTU3MTUw*_ga_ENFH3X7M5Y*MTY3MTc4MzE0OS4xMTAuMS4xNjcxNzgzMTY0LjAuMC4w#shard-performance)できています。パフォーマンスの向上に加え、もう一つの成功要因はデプロイ速度で、約 1.5 倍の改善が観察されています。

GitLab.com を Kubernetes 上で実行するよう移行したことは、顧客が利用できる新しいインストール方法の作成も意味しました。私たちはこれらの新しいインストール方法をドッグフーディングし継続的に改善しており、セルフマネージドの顧客もその恩恵を受けられます。

## 移行されたサービスのタイムライン

| 日付       | サービス                                           |
|------------|---------------------------------------------------|
| 2019-08-30 | Container Registry                                |
| 2019-09-27 | PlantUML                                          |
| 2019-11-21 | Mailroom                                          |
| 2020-05-30 | Sidekiq Memory-bound Shard                        |
| 2020-05-15 | Sidekiq Elasticsearch Shard                       |
| 2020-06-09 | Sidekiq Low-urgency-cpu-bound Shard               |
| 2020-06-16 | Sidekiq Urgent-other Shard                        |
| 2020-07-07 | Sidekiq Database-throttled Shard                  |
| 2020-07-07 | Sidekiq Gitaly-throttled Shard                    |
| 2020-07-14 | Sidekiq Urgent-cpu-bound Shard                    |
| 2020-08-15 | Websockets                                        |
| 2020-10-26 | Git HTTPS                                         |
| 2020-12-01 | Git SSH                                           |
| 2021-06-28 | API Service                                       |
| 2021-07-13 | Remaining Sidekiq Queues                          |
| 2021-07-22 | Enhanced Services Observability                   |
| 2021-09-23 | Web traffic on Kubernetes                         |
| 2021-12-01 | Pages                                             |
| 2022-08-05 | Camoproxy                                         |

移行をサポートするために達成された作業の完全なリストは、[GitLab.com on Kubernetes](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/112) トラッキング Epic で確認できます。

## 関連リンク

- [ワーキンググループキックオフミーティング](https://www.youtube.com/watch?v=TguakWdOPlw&feature=youtu.be)
- [Day-2 オペレーションの定義 - DZone Agile](https://dzone.com/articles/defining-day-2-operations)
- [Scalability チーム - GitLab](/handbook/engineering/infrastructure-platforms/team-history#scalability-group-history)
