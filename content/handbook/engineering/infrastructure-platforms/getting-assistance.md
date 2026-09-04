---
title: "インフラストラクチャプラットフォームでのサポートの受け方"
description: "本番プラットフォームの問題に関するサポートを受ける方法"
upstream_path: /handbook/engineering/infrastructure-platforms/getting-assistance/
upstream_sha: 68426776f854464b95a942162d83ddb29afbcf7d
translated_at: "2026-09-04T12:11:57+09:00"
translator: claude
stale: false
lastmod: "2026-08-28T15:18:47+10:00"
---

## GitLab.com

インシデントを報告する必要がある場合は、[インシデント報告ページ](/handbook/engineering/infrastructure-platforms/incident-management/#reporting-an-incident) の手順に従ってください。

支援が必要で、どのサービスについて助けを求めたいかわかっている場合は、[Tech Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) でオーナーを探してください。以下にリストされている場合は、Request For Help Issue を作成してください。リストにない場合は、Tech Stack ファイルにある Slack チャンネルからオーナーに連絡してください。

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

Slack チャンネル: [#f_runway](https://gitlab.enterprise.slack.com/archives/C05G970PHSA)

#### Fleet Management

[Request For Help トラッカー](https://gitlab.com/gitlab-com/request-for-help/-/issues/new)でヘルプリクエストを開いてください

私たちが助けられること:

1. Kubernetes のコアインフラストラクチャ（GKE クラスター）
1. Kubernetes ワークロードツール（ArgoCD、Helmfile、Helm チャート）
1. 仮想マシンと OS イメージの管理
1. `ops.gitlab.net` と Ops ランナー
1. シークレット管理（Vault）
1. Infrastructure-as-Code と共有 CI ツール

Slack チャンネル: [#g_fleet_management](https://gitlab.enterprise.slack.com/archives/C0ACE4T2R6W)

#### Cloud Cost Utilization

CCU Issue トラッカーで [Issue を作成](https://gitlab.com/gitlab-com/gl-infra/finops/team/-/issues/new?description_template=issue)してヘルプリクエストを開いてください

私たちが助けられること:

1. クラウドコストの分析とレポート
1. コストの予測と予算策定
1. リソース利用率と無駄のモニタリング
1. コスト配分のラベル付けとタグ付け戦略

Slack チャンネル: [#g_cloud-cost-utilization](https://gitlab.enterprise.slack.com/archives/C09MUMXRECC)

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
