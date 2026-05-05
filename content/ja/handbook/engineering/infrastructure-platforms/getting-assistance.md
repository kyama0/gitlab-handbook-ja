---
title: "インフラストラクチャプラットフォームでのサポートの受け方"
description: "本番プラットフォームの問題に関するサポートを受ける方法"
upstream_path: /handbook/engineering/infrastructure-platforms/getting-assistance/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## GitLab.com

インシデントを報告する必要がある場合は、[インシデント報告ページ](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident) の手順に従ってください。

支援が必要で、どのサービスについて助けを求めたいかわかっている場合は、[テックスタック](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) でオーナーを探してください。以下にリストされている場合は、Request For Help Issue を作成してください。リストにない場合は、テックスタックファイルにある Slack チャンネルからオーナーに連絡してください。

支援が必要だが誰に聞けばよいかわからない場合は、以下のチームを確認して、どのチームが質問に最適かを確認してください。

このページ全体を読んでも進め方がわからない場合は、[#saas-platforms-help](https://gitlab.enterprise.slack.com/archives/C07DU5Z7V6V) チャンネルで質問してください。適切なチームにリダイレクトされます。

私たちはリクエストに 24 時間以内に対応することを目指しています。金曜日にリクエストを提出した場合、月曜日まで対応されない可能性があります。

### Production Engineering

#### Teleport リクエスト

Teleport アクセスリクエストは #teleport-requests Slack チャンネルに表示されます。エンジニアリングおよびセキュリティ部門のマネージャーは、チームメンバーへのすべての読み取り専用 Teleport リクエストを承認します。SRE またはインフラストラクチャマネージャーは、書き込みリクエストの承認を担当します。

Teleport はインフラストラクチャセキュリティチームが所有しています。アクセスまたはサポートの取得方法の詳細については [Teleport ランブック](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/README.md) を参照してください。

#### オブザーバビリティ

[Request For Help Tracker](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-ProductionEngineering-Observability.md) でサポートリクエストを作成してください。

以下について支援できます：

1. オブザーバビリティ
1. ロギング
1. メトリクス
1. Grafana / Kibana / Mimir / Prometheus
1. エラーバジェット
1. キャパシティプランニング

Slack チャンネル: [#g_observability](https://gitlab.enterprise.slack.com/archives/C065RLJB8HK)

#### Runway

[Request For Help Tracker](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-ProductionEngineering-Runway.md) でサポートリクエストを作成してください。

以下について支援できます：

1. Runway
1. フリート管理

Slack チャンネル: [#f_runway](https://gitlab.enterprise.slack.com/archives/C05G970PHSA)

#### ネットワークとインシデント管理

[Request For Help Tracker](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-ProductionEngineering-NetworkingAndIncidentManagement.md) でサポートリクエストを作成してください。

以下について支援できます：

1. ネットワークとトラフィック管理
   1. レート制限: [レート制限リクエストテンプレート](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new?issuable_template=request-rate-limiting) で Issue を作成する
   1. Cloudflare: [Cloudflare トラブルシューティングテンプレート](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new?issuable_template=Cloudflare%20Troubleshooting) で Issue を作成する
1. インシデント管理
1. 災害復旧

Slack チャンネル: [#g_networking_and_incident_management](https://gitlab.enterprise.slack.com/archives/C09BM5XCPBP)

#### Runners プラットフォーム

[Request For Help Tracker](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-ProductionEngineering-RunnersPlatform.md) でサポートリクエストを作成してください。

以下について支援できます：

1. ホステッドランナーに関する質問（.com/Dedicated）
2. パイプラインとジョブのトラブルシューティング
3. ランナー関連のインシデントサポート

Slack チャンネル: [#g_runners_platform](https://gitlab.enterprise.slack.com/archives/C08TJEKF0JZ)

### Software Delivery

#### リリースとデプロイ

[Request For Help Tracker](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Delivery.md) でサポートリクエストを作成してください。

以下について支援できます：

1. GitLab.com へのデプロイ
1. デプロイ後のマイグレーション（デプロイに関連するもの）
1. 自動デプロイ
1. ホットパッチプロセス
1. 本番環境までの平均時間
1. リリース管理
1. リリースプロセス
1. メンテナンスポリシー
1. パッチリリース
1. デプロイ
1. 月次およびパッチリリース
1. バックポート

Slack チャンネル: [#g_release_and_deploy](https://gitlab.enterprise.slack.com/archives/CCFV016SV)

## Dedicated

RFH をできるだけ効率的に処理するために、いくつかの Issue テンプレートを用意しています。リクエストに適した Issue テンプレートを使用してください。

1. Private Link Config リクエストの場合は、[Private Link リクエストテンプレート](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-GitLabDedicatedPrivateLinkRequest) を使用して Request For Help Tracker で Issue を作成してください
1. SAML Config リクエストの場合は、[SAML Config リクエストテンプレート](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-GitLabDedicatedSAMLConfigRequest) を使用して Request For Help Tracker で Issue を作成してください
1. Switchboard の Request for Help の場合は、標準の [Dedicated リクエストテンプレート](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-GitLabDedicatedRequest) を使用して Request For Help Tracker で Issue を作成してください
1. 標準のサポートリクエストの場合は、[Switchboard リクエストテンプレート](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Switchboard) を使用して Request For Help Tracker で Issue を作成してください

以下について支援できます：

1. GitLab Dedicated の質問とサポート

Slack チャンネル: [#f_gitlab_dedicated](https://gitlab.enterprise.slack.com/archives/C01S0QNSYJ2)
