---
title: "インフラストラクチャプラットフォームでのサポートの受け方"
description: "本番プラットフォームの問題に関するサポートを受ける方法"
upstream_path: /handbook/engineering/infrastructure-platforms/getting-assistance/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-01T07:28:41-06:00"
---

## GitLab.com

インシデントを報告する必要がある場合は、[インシデント報告ページ](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident) の手順に従ってください。

支援が必要で、どのサービスについて助けを求めたいかわかっている場合は、[テックスタック](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) でオーナーを探してください。以下にリストされている場合は、Request For Help Issue を作成してください。リストにない場合は、テックスタックファイルにある Slack チャンネルからオーナーに連絡してください。

助けが必要ですが、誰に聞けばいいかわからない場合は、以下のチームを見て、あなたの質問に最適なチームを探してください。

このページ全体を読んでも進め方が不明な場合は、[#infrastructure-platforms](https://gitlab.enterprise.slack.com/archives/C02D1HQRTKQ) チャンネルで聞いてください。適切なチームに案内されます。

私たちは24時間以内にリクエストに応答することを目指しています。金曜日にリクエストを上げると、月曜日にしか応答されない場合があります。

### Production Engineering

#### Teleport リクエスト

Teleport のアクセスリクエストは #teleport-requests Slack チャンネルに表示されます。Engineering および Security 部門のマネージャーは、チームメンバーのすべての読み取り専用 Teleport リクエストを承認します。SRE またはインフラストラクチャのマネージャーは、書き込みリクエストを承認する責任があります。

Teleport は Infrastructure Security チームが所有しています。アクセスの取得方法や支援について詳しくは [Teleport runbook](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/README.md) を参照してください。

#### Observability

[Request For Help トラッカー](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-ProductionEngineering-Observability.md) でヘルプリクエストを開いてください

私たちが助けられること:

1. オブザーバビリティ
1. ロギング
1. メトリクス
1. Grafana / Kibana / Mimir / Prometheus
1. エラー予算
1. キャパシティプランニング

Slack チャンネル: [#g_observability](https://gitlab.enterprise.slack.com/archives/C065RLJB8HK)

#### Runway

[Request For Help トラッカー](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-ProductionEngineering-Runway.md) でヘルプリクエストを開いてください

私たちが助けられること:

1. Runway
1. フリート管理

Slack チャンネル: [#f_runway](https://gitlab.enterprise.slack.com/archives/C05G970PHSA)

#### Networking and Incident Management

[Request For Help トラッカー](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-ProductionEngineering-NetworkingAndIncidentManagement.md) でヘルプリクエストを開いてください

私たちが助けられること:

1. ネットワーキングとトラフィック管理
   1. レートリミティング: [レートリミティングリクエストテンプレート](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new?issuable_template=request-rate-limiting) で Issue を作成してください
   1. Cloudflare: [Cloudflare トラブルシューティングテンプレート](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new?issuable_template=Cloudflare%20Troubleshooting) で Issue を作成してください
1. インシデント管理
1. ディザスタリカバリ

Slack チャンネル: [#g_networking_and_incident_management](https://gitlab.enterprise.slack.com/archives/C09BM5XCPBP)

#### Runners Platform

[Request For Help トラッカー](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-ProductionEngineering-RunnersPlatform.md) でヘルプリクエストを開いてください

私たちが助けられること:

1. Hosted Runners に関する質問 (.com/Dedicated)
2. パイプラインとジョブのトラブルシューティング
3. Runners 関連のインシデントサポート

Slack チャンネル: [#g_runners_platform](https://gitlab.enterprise.slack.com/archives/C08TJEKF0JZ)

### Software Delivery

#### Release and Deploy

[Request For Help トラッカー](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Delivery.md) でヘルプリクエストを開いてください。

私たちが助けられること:

1. GitLab.com へのデプロイ
1. デプロイ後マイグレーション (デプロイに関連)
1. オートデプロイ
1. ホットパッチプロセス
1. Mean Time To Production
1. リリース管理
1. リリースプロセス
1. メンテナンスポリシー
1. パッチリリース
1. デプロイ
1. 月次リリースとパッチリリース
1. バックポート

Slack チャンネル: [#g_release_and_deploy](https://gitlab.enterprise.slack.com/archives/CCFV016SV)

## Dedicated

RFH を可能な限り効率的に処理するため、いくつかの Issue テンプレートがあります。あなたのリクエストに適切な Issue テンプレートを使用してください。

1. Private Link Config Request の場合は、Request For Help トラッカーで [Private Link Request テンプレート](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-GitLabDedicatedPrivateLinkRequest) を使用して Issue を作成してください
1. SAML Config Request の場合は、Request For Help トラッカーで [SAML Config Request テンプレート](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-GitLabDedicatedSAMLConfigRequest) を使用して Issue を作成してください
1. Switchboard のヘルプリクエストの場合は、Request For Help トラッカーで標準の [Dedicated Request テンプレート](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-GitLabDedicatedRequest) を使用して Issue を作成してください
1. 標準のヘルプリクエストの場合は、Request For Help トラッカーで [Switchboard Request テンプレート](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Switchboard) を使用して Issue を作成してください

私たちが助けられること:

1. GitLab Dedicated に関する質問とサポート

Slack チャンネル: [#f_gitlab_dedicated](https://gitlab.enterprise.slack.com/archives/C01S0QNSYJ2)
