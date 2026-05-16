---
title: "グループコストメトリクス"
description: "グループコストメトリクス"
upstream_path: /handbook/engineering/infrastructure-platforms/cost-management/group-cost-metrics/
upstream_sha: 6a459a3ca969603754a3b5133342edb804d3012c
translated_at: "2026-04-28T15:53:35Z"
translator: claude
stale: false
lastmod: "2025-07-04T16:26:48+00:00"
---

---

## 概要

[グループコストメトリクス SSOT](https://app.periscopedata.com/app/gitlab/744908/Group-GCP-Cost-PI's)

[エンゲージ方法](/handbook/engineering/infrastructure-platforms/cost-management/how-to-engage)

この[ダッシュボード](https://app.periscopedata.com/app/gitlab/744908/Infrafin-Base-Cost-Metric-SSOT---Groups)の Periscope で、グループが使用するための基本的なコストメトリクスのセットを管理しています。これらは、何がメトリクスに含まれ何が含まれないかを説明する厳格な定義と連携して作成されているため、定義を理解することがメトリクス自体を理解するために不可欠です。

現在、グループごとに最大 5 つのメトリクスを目標としていますが、拡張する可能性があります。一般的に、総コスト用の 1 つのメトリクス、前月比での総コスト成長率用の 1 つのメトリクス、グループ内の特定のコストサブカテゴリに関する最大 3 つの追加メトリクスを用意しています。これは、より多くのグループに展開するにつれてメトリクスの数を管理しやすいよう保つためです。

## メトリクスの使用

これらの種類のメトリクスをすべて 1 か所に集約する理由は、グループレベルのメトリクスの単一情報源（SSOT）としてここを使用し、全員がメトリクスの正確な定義を読める場所を設けるためです。

最終的な KPI を作成するためにこれらのメトリクスを使用したい場合（たとえば、Gitaly コストを総ストレージ量で割るなど）、使用しているクエリをコピー&ペーストしてご自身のダッシュボードのサブクエリに組み込み、残りのメトリクスの SQL と組み合わせて最終的なメトリクスを作成できます。これを行う際は、グラフの説明の一部として元の定義を含めるようにしてください。これらのいずれかについて助けが必要な場合は、#infrafin または #g_engineering_analytics Slack チャンネルで助けを求めてください。

## 要件 / 制限

- 元のメトリクス定義を新たに作成したグラフに含めるか、ソースにリンクする
- グループごとに基本レベルのコストメトリクスは 6 未満

## 新しいグループレベルのコストメトリクスのリクエスト

PM またはメトリクスの追加が必要だと感じた場合は、[エンゲージ方法](/handbook/engineering/infrastructure-platforms/cost-management/how-to-engage)の「新しいグループまたはサービスレベルのコストメトリクスを見たい」の手順をお読みください。
