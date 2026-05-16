---
title: GitLab Dedicated 向けの Hosted Runner
category: GitLab Dedicated
description: "GitLab Dedicated サポート - Hosted Runner"
upstream_path: /handbook/support/workflows/dedicated_runners/
upstream_sha: 47fdb6582389288bed0f04a23aa5d972c3ce1ff5
translated_at: "2026-05-08T21:00:00Z"
translator: claude
stale: false
lastmod: "2025-02-24T23:06:08+00:00"
---
## Hosted Runner

[GitLab Dedicated 向けの Hosted Runner](https://docs.gitlab.com/administration/dedicated/hosted_runners/) は、GitLab Dedicated の顧客に対して
FY25 Q4 のベータテストとして最初に提供された製品で、FY26 Q2 の一般提供を目標としています。

## 誰が Hosted Runner を使用しているか? {#who-is-using-hosted-runners}

顧客が Hosted Runner を使用しているかを特定するには、Switchboard を使用してください。

1. Switchboard にログイン -- すべてのサポートエンジニアは [Switchboard にアクセス可能](dedicated_switchboard.md#accessing-switchboard) です。
1. 関心のあるテナントの横にある **Manage** をクリック
1. 上部に **Hosted runners** があるか確認します（**Hosted runners** が表示されない場合、そのテナントは GitLab Dedicated 向けの Hosted Runner を使用していません）

## ログの表示 {#viewing-logs}

`gitlab-runner` および `systemd` のログは、[GitLab Dedicated アプリケーションログ](dedicated_logs.html) と並んで OpenSearch で利用できます。

Runner 関連のログのみを表示するには:

1. 全般的に `fluentd_tag:cloudwatch.*` でフィルタします
2. 初期結果の `_source` 列からより正確な `fluentd_tag:cloudwatch.<name>-fleeting-logs` を取得し、適用します。
   `<name>` は顧客固有の値（[Runner Model](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/runner-model-schema/) の **CommonProperties** の属性）ですが、まだ Switchboard では利用できません。
3. `cloudwatch.<name>` に基づいた同じプレフィックスを使用して、`manager-logs` も利用できます。

ジョブログについては顧客にお問い合わせください。

## モニタリング

Hosted Runner のモニタリングは Grafana で行います。Grafana へのアクセス方法の詳細は [GitLab Dedicated Observability and Monitoring (Grafana)](dedicated_instance_health) を参照してください。

Grafana に入ったら、**Dashboards** に移動し **Hosted Runner(s) Overview** ダッシュボードを検索します。このダッシュボードには、さまざまな Runner メトリクスのプロットがあります。
ダッシュボードはすべてのテナントで利用できますが、顧客が Hosted Runner を使用している場合のみデータが入力されます。

## アーキテクチャ

GitLab Hosted Runner は `ec2` AWS インスタンス上に作成されます。

## 有用なリファレンス

- [Dedicated チームの Hosted Runner Model](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/runner-model-schema/-/blob/main/docs/model-examples.md)
- [Dedicated チームの Hosted Runner 技術文書](https://gitlab-com.gitlab.io/gl-infra/gitlab-dedicated/team/engineering/projects/dedicated_hosted_runners/index.html)
