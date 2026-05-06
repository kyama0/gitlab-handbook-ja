---
title: "GitLab Compliance - ハンズオンラボ: コンプライアンスレポート"
description: "このハンズオンガイドでは、プロジェクト内のさまざまなコンプライアンスレポートを表示する方法を説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcompliancehandsonlab8/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
---

> 完了までの推定時間: 15分

## 目標

このラボでは、監査レポートや SBOM レポートを含むさまざまなコンプライアンスレポートへのアクセス方法を説明します。

## タスク A. コンプライアンスレポートと権限の表示

1. プロジェクトに移動してください。

1. 左サイドバーで **Secure > Compliance center** を選択してください。

1. レポートの内容を確認してください。

1. ユーザー権限を表示するには、**Manage > Members** に移動してください。

1. このセクションのさまざまなユーザーとロールを確認してください。あなたのユーザーがプロジェクトのオーナーであり、すべてのレポートの全詳細を表示できることを確認してください。

1. 右上にプロジェクトにユーザーを追加するためのさまざまなオプションが表示されます。各オプションと各オプションで利用可能なさまざまなロールを探索します。

## タスク B. SBOM レポートの表示

コンプライアンスラボの一環として、依存関係スキャナーを実行してきました。このスキャナーは実行時に SBOM レポートを生成します。SBOM レポートを表示するには:

1. 左サイドバーで **Build > Pipelines** を選択してください。

1. 最近成功したパイプラインを選択してください。

1. `dependency-scanning` ジョブを選択してください。

1. 右サイドバーで **Job artifacts** の下にある **Browse** を選択してください。

1. ここに表示されるレポートを確認してください。これらのレポートをダウンロードして詳細を表示できます。

## ラボガイド完了

このラボ演習を完了しました。[このコースの他のラボガイド](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcompliancehandson)を参照できます。

## ご提案はありますか?

ラボに変更を加えたい場合は、マージリクエストで変更内容を送信してください。
