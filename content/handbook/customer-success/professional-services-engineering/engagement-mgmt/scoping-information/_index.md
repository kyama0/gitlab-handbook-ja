---
title: "Professional Services EM スコーピングガイドライン"
description: "PS エンゲージメントのスコーピングプロセスについて説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/engagement-mgmt/scoping-information/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
---

## スコーピング情報

私たちは [Engagement Estimate TEMPLATES](https://docs.google.com/spreadsheets/d/1YKMyflzsA-VPEVobB82zC8-n0hlC-uRBtiNB7Fm-kZg/edit?usp=sharing) ワークブックを、Professional Services の機会のアクティビティ、期間、価格を決定するための起点として使用します。

見積り合計が 50,000 USD を超える Professional Services の機会では、SOW を作成する前にテクニカルアーキテクト（Technical Architect、TA）によるスコーピング Issue のレビューが必要です。エンゲージメントマネージャーは、見積りが 50,000 ドルを超えるスコーピング Issue に `TA::Needs-Review` ラベルを追加してください。TA が見積りをレビューしたら、ラベルを `TA:Approved` に変更し、スコーピング Issue をレビューおよび承認したことを示します。

エンゲージメントマネージャーが、複雑な技術要件や技術的な入力が必要なその他の要因によりスコーピングのサポートを必要とする場合、スコーピング Issue に `Scoping::Needs_TA_Assistance` ラベルを追加できます。このラベルは、TA にスコーピングコールへの参加を依頼する場合や、技術的に複雑なソリューション提案への入力を求める場合に使用できます。GitLab アーキテクチャに関する内容、現在の実装に関するパフォーマンス問題の評価、モニタリングのリクエスト、その他の技術的な実装トピックに関するスコーピング Issue や会話には、テクニカルアーキテクトのアシスタンスを依頼してください。

このラベルを適用すると、スコーピング Issue が [TA Board](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ww-consulting/ps-plan/-/boards/4566296?label_name[]=Services%20Calculator) に追加されます。エンゲージメントマネージャーは Slack で `@ps-ta` をメンションしてヘルプを依頼していることを伝え、TA が対応するための追加詳細を提供することも必要です。

TA が依頼されたアシスタンスを提供したら、ラベルを `Scoping::TA_Assisted` に変更します。これらのラベルを一貫して使用することで、現在 TA のアシスタンスが必要な機会の可視性が向上するとともに、TA の関与が必要だった機会の履歴データも得られます。

## サービスタイプ別のスコーピング

各サービスタイプの詳細ノートページは以下を参照してください。

- [GitLab 実装スコーピング](/handbook/customer-success/professional-services-engineering/engagement-mgmt/scoping-information/implementation/)
- [GitLab Readiness Assessment（ヘルスチェック）](/handbook/customer-success/professional-services-engineering/engagement-mgmt/scoping-information/readiness/)
- [GitLab マイグレーションスコーピング - GitLab、Bitbucket Server、または GitHub（Enterprise または .com）→ GitLab](/handbook/customer-success/professional-services-engineering/engagement-mgmt/scoping-information/migrations/)
- [CI パイプラインマイグレーションスコーピング](/handbook/customer-success/professional-services-engineering/engagement-mgmt/scoping-information/ci-pipeline/)
- [トランスフォーメーショナルサービスのスコーピング](/handbook/customer-success/professional-services-engineering/engagement-mgmt/scoping-information/transformational-services/)

## スコーピングにおけるエスカレーション

EM や TA が、Professional Services に対して顧客が提案したソリューションアプローチに同意できない場合があります。このような場合は、以下の手順に従い、アカウントチーム（SAE/AE、SA、CSM）にスコープをエスカレーションする必要があります。

1. アカウントチーム（スコーピングで連携している相手に応じて、SAE と CSM または SA、場合によっては両方）との内部コールをスケジュールします。TA と EM の両方が内部コールに参加する必要があります。
1. 現在のソリューションパスが正しい道ではないと考える理由を説明します。
1. より適した代替ソリューションを定義します。
1. 顧客とのコミュニケーション計画、次のステップ、コミュニケーションの DRI についてアカウントチームと合意します。
