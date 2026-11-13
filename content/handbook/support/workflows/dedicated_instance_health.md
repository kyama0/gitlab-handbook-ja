---
title: GitLab Dedicated のオブザーバビリティとモニタリング (Grafana)
category: GitLab Dedicated
description: "GitLab Dedicated サポート - オブザーバビリティとモニタリング"
upstream_path: /handbook/support/workflows/dedicated_instance_health/
upstream_sha: "a8cc2359102ed497a1f4304a53c23ab6ca0f8554"
translated_at: "2026-11-13T13:54:55+00:00"
translator: codex
stale: false
lastmod: "2026-11-10T17:57:42+08:00"
---


## Grafana のデータは主に内部利用向け {#grafana-data-is-primarily-for-internal-use}

Grafana のモニタリングおよびオブザーバビリティのグラフは、デフォルトでは
顧客と共有すべきではありません。

グラフの共有が顧客の利益になると考える場合は、
[内部のログ、データ、グラフの共有](/handbook/support/workflows/dedicated/#sharing-internal-logs-data--graphs)をお読みください。

## Grafana へのアクセス {#accessing-grafana}

Grafana インスタンスは認証に Okta を使用します。ログインページで **Sign in with OAuth** をクリックします。

アクセスを申請するには、Lumos で **GitLab Dedicated Observability (Prod)** および／または **GitLab Dedicated Observability (PreProd)** へのリクエストを提出します。supportsandbox テナントについては、**GitLab Dedicated Observability (Test)** を申請します。

**注:** Okta SSO への移行前、Grafana の認証では 1Password の `GitLab Dedicated - Support` 保管庫に保存された認証情報を使用していました。現在、これらの認証情報はデフォルトでは無効で、緊急時の特別なアクセス（'break glass'）のためにのみ確保されています。移行済みのテナントでこれらを使用すると、`"Login failed: RBAC: access denied"` エラーが発生します。

### Preprod デプロイ {#preprod-deployments}

特定の顧客の Grafana ダッシュボードへのリンクを見つけるには、[GitLab Dedicated Preprod switchboard](./dedicated_switchboard.md#customers-with-dedicated-preprod-deployments)を使用してください。

## ダッシュボードを見つける {#finding-dashboards}

初めてログインしたとき、ダッシュボードはすぐには表示されず、Grafana のウェルカム画面で迎えられます。ダッシュボードを見つけるには:

1. 左ペインで `Dashboards` をクリックします。
1. `Dashboards` ページには、利用可能なすべてのダッシュボードの検索可能なリストが表示されます
1. `Triage` ダッシュボードは、特に Grafana に不慣れな場合、最良の出発点です。

## Grafana のヒント {#grafana-tips}

`General / Triage` ダッシュボードは、すべてのポッドが 1 つのビューに配置されているため、緊急対応に最も役立ちます。デフォルトでは 6 時間分のデータが表示されます。突発的な変動や急落を見つけるのに便利です。このデータを他のダッシュボードと相互に関連付けて使用してください。

ダッシュボードの特定のグラフに注目すべき点がある場合、`click + drag` でグラフを拡大できます。

Grafana は問題の可視化と発見のために使用されることを覚えておいてください。直接何が悪いのかを教えてくれるわけではありません。正確な問題を見つけるには、[ログ](/handbook/support/workflows/dedicated_logs/)と相関させる必要があります。

例として、Triage ダッシュボードは `webservice` のエラーが増加していることを示すかもしれません。これを使ってだいたいの時刻を相関させ、`kubernetes.labels.app` で他のログを [フィルタ](/handbook/support/workflows/dedicated_logs/#fields-and-filters)して、`webservice` のみのエラーを見つけてください。

`General / Triage` ダッシュボードには、そのダッシュボードに含まれる各サービスの **Service Apdex** (アプリケーションパフォーマンスインデックス)、**Service Error Ratio**、**RPS** (1 秒あたりのリクエスト数)、**Saturation** 情報が含まれています。一般的に、**Service Error Ratio** の増加は **Service Apdex** の減少に対応していることに気付くでしょう。[GitLab Dedicated SLA](https://docs.gitlab.com/administration/dedicated/disaster_recovery/) について詳しくお読みください。
