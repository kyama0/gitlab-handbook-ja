---
title: "インフラストラクチャプロダクトマネジメント"
upstream_path: "/handbook/engineering/infrastructure-platforms/product-management/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T01:48:37Z"
translator: claude
stale: false
---

## 責任範囲

インフラストラクチャプロダクトマネージャー（Infra PM）の責任は[ジョブファミリーページ](/job-description-library/product/product-manager/)に記載されています。

## エンゲージメントモデル

### インバウンドリクエスト

Infra PM は、内部チームや GitLab.com 顧客からインフラストラクチャへの*インバウンド*リクエストのトリアージと優先順位付けを支援します。

リクエストの種類:

1. ドッグフーディングリクエスト
   - 例: [Runbooks](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/10748)
1. [セキュリティおよびコンプライアンスリクエスト](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/10982)
1. インフラストラクチャ部門の管轄内の GitLab.com 顧客リクエスト:
   - GitLab.com の顧客、特にエンタープライズ顧客は、GitLab.com の運用機能や[非機能要件](https://en.wikipedia.org/wiki/Non-functional_requirement)（例: サービスの可用性、セキュリティ、パフォーマンス）に関連したリクエストを行うことがあります。[アプリケーション自体の機能](https://gitlab.com/gitlab-org/gitlab/)に関連するリクエストは、標準の[機能リクエストテンプレート](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Feature%20proposal%20-%20detailed.md)を使用して適切なステージチームに転送してください。

GitLab.com の運用機能に関連するリクエストの例:

1. 障害回復 SLA
1. [イングレス IP の割り当て範囲の公開](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/10768)
1. データローカリティ（例: GitLab.eu インスタンス）
1. 認証取得（例: FedRAMP）

これらのリクエストはインフラストラクチャ部門のエンジニアリング投資を必要とする可能性があるため、Infra PM が優先順位付けを支援します。

#### GitLab.com に関連する顧客リクエストの提出方法

GitLab.com の運用機能に関連する顧客リクエストを提出するには、[GitLab.com 機能リクエストテンプレート](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/new?issuable_template=request-gitlab-com)を使用して、リクエストの優先順位付けに必要なビジネス機会の規模データを収集してください。

### アウトバウンドリクエスト

Infra PM は、インフラストラクチャを代表して内部チームや GitLab.com 顧客への*アウトバウンド*リクエストを推進することもできます。

リクエストの種類:

1. GitLab アプリケーション内で必要な変更
   - 例: [Kubernetes マイグレーションブロッカー](https://gitlab.com/groups/gitlab-org/-/boards/1836252?label_name[]=kubernetes-migration-blocker)
1. GitLab.com 顧客へのアウトリーチ
   - 例: [SaaS 向けの追加エグレス IP 範囲のドキュメント化](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/37444)
1. ステージ全体のコスト効率の推進
   - 例: [レジストリコスト](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/8163)（社内限定）

### 一般的な質問

一般的なお問い合わせには、[インフラストラクチャ PM Slack チャンネル](https://gitlab.slack.com/archives/infra-product)を使用してください。

## ワークフロー

インフラストラクチャプロダクトマネージャーへの支援をリクエストするには、Issue に `~"infrapm"` ラベルを追加してください。次に、Infra PM は Issue を `~"workflow::problem validation"` フェーズに移動して、検証、スコーピング、優先順位付けを行います。これらのステップを完了した後、Infra PM がその取り組みを進める価値があると判断した場合、適切なチームラベルを追加して Issue を `~"workflow-infra::Triage"` フェーズに移動し、エンジニアリングレビューに向けて確立済みの[インフラストラクチャプラットフォームチーム](/handbook/engineering/infrastructure-platforms/#organization-structure)のワークフローに従います。

## 優先順位付けフレームワーク

イニシアチブの優先順位付けには、Infra PM は[プロダクトハンドブックに記載されているフレームワーク](/handbook/product/product-processes/#prioritization)を使用します。

## Issue ボード

インフラストラクチャプロダクトマネージャーのタスクは[Infra PM Issue ボード](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/1880375?label_name[]=infrapm)で追跡されます。
