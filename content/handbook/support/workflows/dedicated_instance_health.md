---
title: GitLab Dedicated のオブザーバビリティとモニタリング (Grafana)
category: GitLab Dedicated
description: "GitLab Dedicated サポート - オブザーバビリティとモニタリング"
upstream_path: /handbook/support/workflows/dedicated_instance_health/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T20:30:00Z"
translator: claude
stale: false
---

## Grafana のデータは主に内部利用向け

Grafana のモニタリングおよびオブザーバビリティのグラフは、デフォルトでは
顧客と共有すべきではありません。

グラフの共有が顧客の利益になると考える場合は、
[内部のログ、データ、グラフの共有](/handbook/support/workflows/dedicated/#sharing-internal-logs-data--graphs) をお読みください。

## Grafana へのアクセス

各 GitLab Dedicated テナントに関連付けられた Grafana インスタンスへのアクセスのための認証情報は、`GitLab Dedicated - Support` [1Password Vault](/handbook/security/#vaults) に保存されています。[OpenSearch インスタンス](/handbook/support/workflows/dedicated_logs/) と同様に、パスワードは顧客番号で参照されます。チケット内の内部ノートの情報と、1Password の `website` フィールドのサブドメインを使用して、正しい GitLab Dedicated テナントの認証情報を見つけてください。

### Preprod デプロイ

特定の顧客の Grafana ダッシュボードへのリンクを見つけるには、[GitLab Dedicated Preprod switchboard](./dedicated_switchboard.md#customers-with-dedicated-preprod-deployments) を使用してください。

## ダッシュボードを見つける

初めてログインしたとき、ダッシュボードはすぐには表示されず、Grafana のウェルカム画面で迎えられます。ダッシュボードを見つけるには:

1. 左ペインで `Dashboards` をクリックします。
1. `Dashboards` ページには、利用可能なすべてのダッシュボードの検索可能なリストが表示されます
1. `Triage` ダッシュボードは、特に Grafana に不慣れな場合、最良の出発点です。

## Grafana のヒント

`General / Triage` ダッシュボードは、すべてのポッドが 1 つのビューに配置されているため、緊急対応に最も役立ちます。デフォルトでは 6 時間分のデータが表示されます。突発的な変動や急落を見つけるのに便利です。このデータを他のダッシュボードと相互に関連付けて使用してください。

ダッシュボードの特定のグラフに注目すべき点がある場合、`click + drag` でグラフを拡大できます。

Grafana は問題の可視化と発見のために使用されることを覚えておいてください。直接何が悪いのかを教えてくれるわけではありません。正確な問題を見つけるには、[ログ](/handbook/support/workflows/dedicated_logs/) と相関させる必要があります。

例として、Triage ダッシュボードは `webservice` のエラーが増加していることを示すかもしれません。これを使ってだいたいの時刻を相関させ、`kubernetes.labels.app` で他のログを [フィルタ](/handbook/support/workflows/dedicated_logs/#fields-and-filters) して、`webservice` のみのエラーを見つけてください。

`General / Triage` ダッシュボードには、そのダッシュボードに含まれる各サービスの **Service Apdex** (アプリケーションパフォーマンスインデックス)、**Service Error Ratio**、**RPS** (1 秒あたりのリクエスト数)、**Saturation** 情報が含まれています。一般的に、**Service Error Ratio** の増加は **Service Apdex** の減少に対応していることに気付くでしょう。[GitLab Dedicated SLA](https://docs.gitlab.com/administration/dedicated/disaster_recovery/) について詳しくお読みください。
