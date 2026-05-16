---
title: "CI キュー待ち時間安定化 ワーキンググループ"
description: "GitLab CI キュー待ち時間安定化ワーキンググループは、GitLab.com における CI ジョブのキュー待ち時間の安定性と予測可能性を高めることを目的としています。"
upstream_path: /handbook/company/working-groups/ci-queue-stability/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T00:00:00Z"
translator: claude
stale: false
lastmod: "2023-12-18T14:49:14+00:00"
---

## 属性

| プロパティ     | 値 |
|--------------|-------|
| 作成日         | 2019年11月1日 |
| 終了日         | 2019年1月22日 |
| Slack        | [#wg_ci_queue_stability](https://gitlab.slack.com/archives/CPNJU64N9/p1572646264000100)（社内からのみアクセス可能）|
| Google Doc   | [CI Queue Stability Working Group](https://docs.google.com/document/d/1wgdb0Uv1YBOYX4vEtHoGOYxuBAxSP3A_1SPQ1mc5NXM/edit?usp=sharing)（社内からのみアクセス可能）|
| Issue ラベル  | wg_CIQueueStability（gitlab-com/-org）|

## ビジネス目標

GitLab.com における CI ジョブのキュー待ち時間の安定性と予測可能性を高めます。

目的は以下のとおりです：

1. 共有ランナーの CI ジョブキュー待ち時間が合理的な期待値を超える状況を分析・修正する
1. CI ジョブキューの期待値により正確に対応するメトリクスを定義し、アラートを調整する
1. CI ジョブキュー待ち時間が過大になった場合に使用するトラブルシューティングおよび調査ガイドを作成する
1. システムの健全性と成長に関する予測分析を実施し、将来予想されるボトルネックを解消する Issue を作成する

## 終了条件

1. システムの動作が期待値と一致しなくなったときにトリガーされるメトリクスとアラートを作成・調整する -> 完了
1. 上記で調整されたアラートが発火しない状態が 1 週間継続する -> 完了
1. 異常な動作を正常に診断・対応・復旧するためのランブック情報の文書化を公開または更新する -> 完了

## 成果物

1. `ci-runners service  has a apdex score (latency) below SLO` アラートがトリガーされる可能性がある場合のための[更新済みランブック](https://gitlab.com/gitlab-com/runbooks/-/merge_requests/2117/)

## ロールと責任

| ワーキンググループの役割 | 担当者                | 役職                                  |
|-----------------------|-----------------------|----------------------------------------|
| ファシリテーター        | Elliot Rushton        | Engineering Manager, Runner            |
| エグゼクティブスポンサー | Christopher Lefelhocz | Senior Director of Development         |
| エンジニアリングリード   | Tomasz Maczukin       | Backend Engineer                       |
| インフラリード          | Andrew Newdigate      | Distinguished Engineer, Infrastructure |
| メンバー               | Darby Frey            | Senior Engineering Manager, Verify     |
| メンバー               | Steve Azzopardi       | Backend Engineer                       |
| メンバー               | Darren Eastman        | Senior Product Manager, GitLab-Runner  |
| メンバー               | Kamil Trzciński       | Distinguished Engineer                 |
