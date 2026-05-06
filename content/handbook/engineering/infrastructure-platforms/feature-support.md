---
title: "インフラストラクチャ フィーチャーサポート"
description: "インフラストラクチャ部門が本番環境へのフィーチャーリリースをサポートする方法"
upstream_path: /handbook/engineering/infrastructure-platforms/feature-support/
upstream_sha: 0e6f01390a34aeb6706ace17d8d3c50e74e82d0d
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

## はじめに

GitLab のフィーチャーが本番環境にリリースされると、Experiment、Beta、Generally Available のいずれかのレベルでリリースされます。
（詳細は [プロダクトドキュメント](https://docs.gitlab.com/ee/policy/development_stages_support.html) を参照してください。）

フィーチャーの可用性は、SaaS プラットフォームでそのフィーチャーをサポートする能力と密接に関連しています。

これらのガイドラインは、本番環境のフィーチャーが期待されるサポートレベルに合致するよう、[信頼性チーム](/handbook/engineering/infrastructure/team/) が運用できることを確実にします。

### 新しい GCP インフラリソースのリクエストと作成

Runway は新しいサービスを作成・起動するための推奨方法です。セルフサービスのオンボーディングは [オンボーディングガイド](https://docs.runway.gitlab.com/guides/onboarding/) で利用可能で、質問は [`#f_runway` Slack チャンネル](https://gitlab.enterprise.slack.com/archives/C05G970PHSA) に向けてください。Runway には自動化された設定が含まれており、多くのインフラストラクチャ準備要件が標準で提供されます。Runway を使用することで、新しいフィーチャーを本番環境で Generally Available な状態に移行する作業が容易かつ迅速になります。

要件が現在 Runway でサポートされていない場合、または [Runway のロードマップ](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/969) にない場合は、[Sandbox Cloud GCP Group Project Issue テンプレート](https://gitlab.com/gitlab-com/business-technology/engineering/infrastructure/issue-tracker/-/issues/new?issuable_template=gcp_group_account_create_request) を使用して新しいリソースをリクエストできます。GCP プロジェクトが作成された後、必要に応じて設定でき、初期プロビジョニングと IAM 管理が提供されます。基本的なリソースを提供し、チームメンバー全員が利用できます。

## 製品の成熟度に応じたセベリティレベル

1. Experimental および Beta フィーチャーのインシデントは [Severity 4](/handbook/engineering/infrastructure-platforms/incident-management/#incident-severity) として割り当てられます
1. Generally Available フィーチャーのインシデントは、インシデント管理ページの[インシデントセベリティ表](/handbook/engineering/infrastructure-platforms/incident-management/#incident-severity) に従って割り当てられます。

## フィーチャーを General Availability に向けて迅速に進める方法

フィーチャーを General Availability に向けて迅速に進めることができます。

プロトタイプフィーチャーを迅速に進めるには、General Availability に到達するために必要な作業を追跡するエピックに `~expedite_prototype` ラベルを追加してください。
インフラストラクチャのリーダーシップはこのラベルをサブスクライブしており、このフィーチャーを迅速に進める意図があることが通知されます。

インフラストラクチャのリーダーシップは、エピックの DRI と協力してこれをサポートできるか確認します。

このラベルのついたエピックは [Prototype Status エピックボード](https://gitlab.com/groups/gitlab-org/-/epic_boards/44867) で確認できます。
