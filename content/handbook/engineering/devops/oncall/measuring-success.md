---
title: 成功の測定
upstream_path: /handbook/engineering/devops/oncall/measuring-success/
upstream_sha: 81a617744130f76604f641d4483828edd0d60d2f
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

Tier 2 オンコールプログラムが機能しているかどうかをどのように把握するのでしょうか？運用の卓越性とエンジニアの健全性の両方を反映する特定のメトリクスで測定します。このページでは、何を追跡しているか、そしてそれがなぜ重要なのかを説明します。

## 主要な成功メトリクス

1. 解決時間の短縮: Tier 2 を拡大した主な目的は、インシデントをより迅速に解決するために、オンコールエンジニアに SME（Subject Matter Expert）の専門知識を提供することです。これは Tier 2 に関するインシデント対応全体における主要メトリクスです。
1. エスカレーションの正確性: エラーメッセージ・スタックトレース・オブザービリティの分類などの使いやすさにより、エスカレーションの90%以上が最初の試みで正しいチームに届く
1. [Tier 2 へのページがゼロ件](https://app.incident.io/gitlab/insights/dashboards/core/pager_load_native?date_aggregation=months&schedule%5Bone_of%5D=01K611MG8T5CW874Q5JZER3H0Z)であること（システムの回復力やランブックの効果によるもの）
1. [Tier 2 を越えたエスカレーションがゼロ件](https://app.incident.io/gitlab/insights/dashboards/core/pager_load_native?date_aggregation=months&schedule%5Bone_of%5D=01K611ZT9YX2PSA8WAMEP6A66G)であること（常に15分以内に対応しているため）
1. [持続可能なオンコールスケジュール](https://app.incident.io/gitlab/on-call/schedules/01K611MG8T5CW874Q5JZER3H0Z?timePeriodOption=one_month&calendarToggle=calendar): エンジニアは月1週間を超えてオンコールにならない

### 関連ページ

- [DevOps ローテーションリーダー](/handbook/engineering/devops/oncall/rotation-leader) — ローテーションリーダーがこれらのメトリクスを追跡します
- [コミュニケーションとカルチャー](/handbook/engineering/devops/oncall/communication-and-culture) — 責任追及しないカルチャーがこれらの目標を支えます
- [ローテーションへの参加と脱退](/handbook/engineering/devops/oncall/joining-and-leaving-rotation) — ローテーションの公平性メトリクスを理解する
