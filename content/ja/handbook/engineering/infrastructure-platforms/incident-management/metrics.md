---
title: "インシデントメトリクス"
description: "GitLab.com および Dedicated のインシデントパフォーマンスメトリクスの定義、ターゲット、スコープ（MTTR、検知率、軽減タイムフレームを含む）。"
upstream_path: "/handbook/engineering/infrastructure-platforms/incident-management/metrics/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

このページでは GitLab.com および Dedicated のインシデントパフォーマンスメトリクスを定義します。各メトリクスの意味とスコープのハンドブックレベルのリファレンスです。基盤となるデータパイプラインと SQL レベルの定義については、[技術ドキュメント](https://gitlab.com/gitlab-com/gl-infra/data/sqlmesh-catalog/-/blob/main/docs/design-docs/incident-metrics.md)をご覧ください。

Observability チームがメトリクスを生成するデータパイプラインを所有しています。インシデント管理チームがメトリクスが報告される[ダッシュボード](https://dashboards.gitlab.net/d/incident-mttr/incident-mttr-dashboard)を所有しています。

## ターゲットメトリクス

以下のターゲットは [CTO インシデントメトリクス epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/work_items/2014) の一環として定義されました。

| メトリクス | ターゲット |
|--------|--------|
| MTTR（軽減まで） | 30 分未満 |
| 30 分以内に軽減された S1/S2 の割合 | 80% 超 |
| 60 分超かかって軽減されたインシデント | 0 に向けてトレンド |
| 内部検知された S1/S2 インシデントの割合 | 80% 超 |

## スコープ

特に断りのない限り、報告されるメトリクスは `resolved_at` タイムスタンプが設定されているすべてのインシデントを含み、incident.io のステータスが `Closed`、`Merged`、`Paused`、または `Cancelled` のいずれかに関わらず対象となります。解決からクローズまでの時間はプロセスのアーティファクトであり、数値に影響すべきでないため、`Closed` ステータスのみには制限しません。

重大度スコープのメトリクス（例：「30 分以内に軽減された S1/S2 の割合」）はその基本的な母集団の上に重大度フィルターを適用します。

## メトリクスの定義

### 回復までの時間（TTR）

TTR は顧客への影響が始まった時から影響が軽減されるまでの経過時間を測定します。

- **開始**：`Impact started at`、`Impact started at` が設定されていない場合は `Declared at` にフォールバック。
- **終了**：`Fixed at`、`Fixed at` が設定されていない場合は `Resolved at` にフォールバック。

フォールバック後に開始と終了の両方が欠けている場合、そのインシデントの TTR は計算されません。フォールバック戦略により、TTR は基本的にすべての S1/S2 インシデントで計算可能です。基礎となるフィールドレベルのカバレッジは実質的に低いです（フォールバックを動機付けるカバレッジ分析については[技術ドキュメント](https://gitlab.com/gitlab-com/gl-infra/data/sqlmesh-catalog/-/blob/main/docs/design-docs/incident-metrics.md#time-to-recovery-ttr)をご覧ください）。

**MTTR** は、ローリング 30 日間のウィンドウにわたる対象母集団での TTR の中央値です。

### 30 分以内に軽減された S1/S2 の割合

ローリング 30 日間のウィンドウ内のすべての S1 および S2 インシデントのうち、`TTR ≤ 30 分` となったインシデントの割合。

### 60 分超かかって軽減されたインシデント

ローリング 30 日間のウィンドウ内の `TTR > 60 分` となったインシデントの数。これは強制的なレトロスペクティブが必要かどうかを判断する指標です。

### 内部検知（`is_internally_detected`）

インシデントが**内部検知**とみなされる条件：

1. incident.io でリンクされたアラートが少なくとも1件あること、かつ
2. それらのアラートの最初のものがインシデント作成時刻*以前または同時*に発火したこと。

これは「S1/S2 インシデントの 80% 超が最初の顧客報告より前に内部で検知される」という意図を捉えています：インシデントはインシデントが存在した瞬間に遅くとも発火した自動化にさかのぼれる必要があります。事後にアラートが関連付けられるだけの手動で宣言されたインシデント（アラートが最終的にリンクされた場合でも）は内部検知としてカウントされません。リンクされたアラートのないインシデントもカウントされません。

## 数値の確認方法

- [インシデント MTTR ダッシュボード](https://dashboards.gitlab.net/d/incident-mttr/incident-mttr-dashboard) — 上記のメトリクスの主要なレポーティングサーフェス。全体、重大度別、プラットフォーム別（GitLab.com、Dedicated など）を含む。
- [インシデントメトリクス技術ドキュメント](https://gitlab.com/gitlab-com/gl-infra/data/sqlmesh-catalog/-/blob/main/docs/design-docs/incident-metrics.md) — このページを裏付けるパイプライン、レポートビュー、SQL レベルの定義。

## 定義の変更

メトリクスの定義が変更された場合は、すべての3つを同期して維持するために、このページを[技術ドキュメント](https://gitlab.com/gitlab-com/gl-infra/data/sqlmesh-catalog/-/blob/main/docs/design-docs/incident-metrics.md)とダッシュボードパネルと合わせて更新してください。
