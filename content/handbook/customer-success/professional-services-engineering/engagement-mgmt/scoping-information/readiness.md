---
title: "Readiness Assessment のスコーピング"
description: "Readiness Assessment エンゲージメントのスコーピングプロセスについて説明します。"
upstream_path: /handbook/customer-success/professional-services-engineering/engagement-mgmt/scoping-information/readiness/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T03:00:00Z"
translator: claude
stale: false
lastmod: "2024-05-30T07:49:53+00:00"
---

:warning: このページは作成中です

## スコーピング情報

## 一般的なサービス情報

Readiness Assessment は、顧客のアーキテクチャ図のレビューと本番デプロイメントの評価から得られる発見に基づき、今後の成長に備えるための推奨事項を提供することを目的としています。

このサービスは、次のような顧客にとって興味深いものとなる傾向があります:

1. 成長を計画している - 追加のユーザー（例: 500 から 2,000）または追加の使用（例: 大規模に CI を採用）のいずれか
1. GitLab セルフマネージドの新規実装をデプロイしており、大多数のユーザーをオンボーディングする前にアーキテクチャを検証したい

Readiness Assessment **は**、GitLab デプロイメントの現在の問題を解決する方法を調査するサービス**ではありません**。GitLab サポートは、これらの種類の問題の解決を顧客に支援するためにチャーターされています。

Health check の成果は、[Health Check Report](https://docs.google.com/document/d/1j4Jmz_SCJEeeQT4uCIHiw6ngwsZyW_aAMVvSIyO2ndc/edit) における発見と推奨事項のリストです。レポートの推奨事項を実装することはありません。これは 2 つ目の SOW または変更注文でスコーピングする必要があります。

## ディスカバリ質問

1. GitLab インスタンスはオンプレミスにデプロイされていますか、それともパブリッククラウドにデプロイされていますか？ どれですか？（AWS、GCP、Azure Cloud）
1. 現在の GitLab デプロイメントアーキテクチャはどのようなものですか？ アーキテクチャ図を提供できますか？
1. 本番インスタンスとアーキテクチャや設定が類似したテスト環境はありますか？
   - はいの場合、2 つの環境間の違いを説明してください。
   - いいえの場合、本番インスタンスでサーバーをオフラインにしても影響が出ない、使用率の低い時間帯はありますか？
1. エラー率、ネットワークレイテンシー、スループット速度、ディスク I/O、メモリ/CPU 使用率を観測できるよう、本番インスタンスでモニタリングが確立されていますか？
    - どのロギング/可観測性ツールを導入していますか（例: AWS Cloudwatch、Splunk、GCP Cloud Operations、New Relic）？
    - どのコンポーネントが監視されていますか？
1. 本番サーバーで既知の問題はありますか、またはエンドユーザーのフィードバックに基づく疑わしい問題はありますか？
1. GitLab インスタンス用に何個のユーザーライセンスを持っていますか？ アクティブユーザーは何人ですか？ GitLab の採用を拡大する予定の場合、1 年後に何人のアクティブユーザーがいると予想していますか？
1. 追加のユーザー負荷をサポートするために GitLab 実装のスケールアウトを検討していますか？ 実装の望ましい最終状態は何ですか？

### 評価方法

顧客のデプロイメントアーキテクチャを分析する私たちの推奨方法は、[GitLab Performance Tool](https://gitlab.com/gitlab-org/quality/performance#gitlab-performance-tool) を実行してスループット速度とエラーを客観的に分析することです。ただし、導入される負荷（例: ダミーデータ）が本番 GitLab デプロイメントに悪影響を与える可能性があるため、本番 GitLab デプロイメント上ではこれを実行したくありません。

1. 顧客に、GPT を実行できる類似のアーキテクチャ特性を持つ非本番環境はありますか？
    - はいの場合、GPT 負荷方法を使用してスコーピングを進めます。
1. ない場合、顧客はエラー率、ネットワークレイテンシー、スループット速度、ディスク I/O、メモリ/CPU 使用率を理解するためのモニタリングを導入していますか？ 通常、これは [AWS Cloudwatch](https://aws.amazon.com/cloudwatch/)、[GCP Cloud Operations](https://cloud.google.com/products/operations)、[New Relic](https://newrelic.com/)、[Splunk](https://www.splunk.com/) などの可観測性ツールの形式です。
    - はいの場合、それがどれほど堅牢かを理解します。すべての GitLab コンポーネント（例: Rails ノード、データベース、ファイルシステム、Redis キャッシュなど）が監視されているかを尋ねます。

### 一般的な見積り期間

`PS Engagement Estimate Templates` ワークブックの `Readiness Assessment (Health Check)` ワークシートには、新規実装の一部として GPT または User Load Method を介してスタンドアロンの Readiness Assessment を実行するための見積りが提供されています。注: ディスカバリとドキュメント作成がすでに定義されている実装アクティビティの一部として処理されるため、新規実装の一部として実行される場合、見積りはわずかに小さくなります。PS 主導の実装の一部としての GPT 負荷 Readiness Assessment の見積りについては、`WIP - Implementation` ワークシートを参照してください。
