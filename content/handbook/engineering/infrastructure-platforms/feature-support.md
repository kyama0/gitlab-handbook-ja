---
title: "インフラストラクチャ 機能サポート"
description: "インフラストラクチャ部門が本番環境への機能リリースをサポートする方法"
upstream_path: /handbook/engineering/infrastructure-platforms/feature-support/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-15T11:32:24-06:00"
---

## はじめに

GitLab の機能が本番環境にリリースされると、Experiment、Beta、Generally Available のいずれかのレベルでリリースされます。
（詳細は [プロダクトドキュメント](https://docs.gitlab.com/ee/policy/development_stages_support.html) を参照してください。）

機能の可用性は、SaaS プラットフォームでその機能をサポートする私たちの能力と密接に関連しています。

これらのガイドラインは、本番環境の機能が、期待されるサポートレベルに合致するように [Reliability チーム](/handbook/engineering/infrastructure-platforms/) によって運用できることを確実にします。

### 新しい GCP インフラストラクチャリソースのリクエストと作成

Runway は新しいサービスを作成し起動するために推奨される方法です。セルフサービスのオンボーディングは [オンボーディングガイド](https://docs.runway.gitlab.com/guides/onboarding/) から利用可能で、質問は [`#f_runway` Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C05G970PHSA) に向けてください。Runway には自動化された設定が含まれており、多くのインフラストラクチャ Readiness 要件を標準として提供します。Runway を使用することで、本番環境で新しい機能を Generally Available 状態に昇格させることがより簡単かつ迅速になります。

要件が現在 Runway でサポートされていないか、[Runway のロードマップ](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/969) にない場合、[Sandbox Cloud GCP Group Project Issue テンプレート](https://gitlab.com/gitlab-com/business-technology/engineering/infrastructure/issue-tracker/-/issues/new?issuable_template=gcp_group_account_create_request) を使用して新しいリソースをリクエストできます。GCP プロジェクトが作成された後、必要に応じて設定でき、これにより初期プロビジョニングと IAM 管理が提供されます。これは基本的なリソースを提供し、どんなチームメンバーでも利用可能です。

## 異なる製品成熟度のセベリティレベル

1. 実験的および Beta 機能のインシデントは [Severity 4](/handbook/engineering/infrastructure-platforms/incident-management/#incident-severity) として割り当てられます
1. Generally Available 機能のインシデントは、インシデント管理ページに記載されている [インシデントセベリティテーブル](/handbook/engineering/infrastructure-platforms/incident-management/#incident-severity) に従って割り当てられます。

## 機能を General Availability に促進させる方法

私たちは機能を General Availability に促進させるのを支援できます。

プロトタイプ機能を促進させるには、General Availability に到達するために必要な作業を追跡するエピックで `~expedite_prototype` ラベルを含めます。
インフラストラクチャのリーダーシップはこのラベルをサブスクライブしており、この機能を促進させる意図があることが通知されます。

インフラストラクチャのリーダーシップは、これをサポートできる場合はエピック DRI と確認します。

このラベルが付いたエピックは、[Prototype Status エピックボード](https://gitlab.com/groups/gitlab-org/-/epic_boards/44867) で表示できます。
