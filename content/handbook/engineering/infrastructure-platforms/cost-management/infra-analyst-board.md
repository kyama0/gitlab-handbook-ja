---
title: "Infrastructure Analyst ボード"
description: "Infra Analyst ワークフロープランニング"
upstream_path: "/handbook/engineering/infrastructure-platforms/cost-management/infra-analyst-board/"
upstream_sha: "6a459a3ca969603754a3b5133342edb804d3012c"
translated_at: "2026-04-28T16:26:29Z"
translator: claude
stale: false
lastmod: "2025-07-04T16:26:48+00:00"
---

---

[ワークフローボード](https://gitlab.com/gitlab-com/www-gitlab-com/-/boards/1942495?label_name[]=Engineering%20Metrics)

## 基準

このボードに登録される Issue は、Infrastructure Analyst によるアドホックな作業が必要であり、infrafin イニシアティブの一部となる基準を満たさないイニシアティブを対象とします。

## ラベル付け

`Eng Metrics::Infrastructure Department` ラベルを使用して、このボード上の infra analyst 固有の Issue を指定します。Issue がバックログに存在し、infra analyst の役割に該当する場合は、チームが自動的にこれを行います。

## 優先度付け

- このボード上のすべての Issue は、[Infrafin ボード](/handbook/engineering/infrastructure-platforms/cost-management/infrafin-board) のアクティブな項目から自動的に優先度が下げられます
  - 問題がある場合は #infrafin Slack チャンネルに連絡してください
- このボードの Issue はベストエフォートで完了します。重み付けは 1〜10 のスケールで適用でき、10 が最高優先度です
- 進行中のオープン Issue の重み合計が 10 を超えることはできません
  - このボードで進行中かつオープンの重みの合計が 10 に達した場合、新しい Issue の優先度を再評価するか、新しい Issue をバックログに移動します
- 重みが 10 の場合、可能であれば当週内に解決するよう試み、重みが 1 ポイント少なくなるごとにそれぞれ 1 週間の追加期間が必要です
