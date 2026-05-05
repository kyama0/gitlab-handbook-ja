---
title: オンコールのプロセスとポリシー - ベストエフォートローテーション
upstream_path: "/handbook/engineering/infrastructure-platforms/incident-management/on-call/best-effort-rotations/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
---

一部のシステムは、オンコールシステムではなくベストエフォートローテーションを使用しています。例えば、リリースマネージャーローテーションは、エンジニアのペアが1週間ずつ担当するベストエフォートローテーションです。

ベストエフォートローテーションには SLA がありません。

ベストエフォートローテーションを使用するかどうかの判断は、チームの規模や性質ではなく、オンコールの要件を中心に行うべきです。ただし、チームの規模からベストエフォートローテーションが最善の選択肢となる場合があることも認識されています。

ベストエフォートローテーションでは：

1. 設定されたオンコールローテーションはありません（チームメンバーはオンコールではありません）。
2. このグループへのエスカレーションがある場合、その地域のすべてのチームメンバーにページが送信されます。
3. ページが来た場合、ページに対応するためにベストを尽くすことが期待されます。
4. 逆に、Tier 1 ローテーションは、真に緊急な状況でのみページを発行するよう最善を尽くします。

ベストエフォートローテーションを使用したい場合は、[追跡用の Issue を作成してください](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new?description_template=onboarding-best-effort-rotation)。以下を含めてください。

1. このローテーションの参加者
2. 参加者の所在地
3. ベストエフォートローテーションを選択する理由
4. ローテーションを 24x5 に昇格させるための準備方法とその予定期間

## アクティブなベストエフォートローテーション

### リリースマネージャー

- ローテーションリーダー: Michele Bursi
- カバレッジ: ベストエフォート
- スケジュール: [スケジュール](https://gitlab.pagerduty.com/schedules#PY12KEX)

### データベースオペレーション

- ローテーションリーダー:
- カバレッジ: ベストエフォート
- スケジュール: スケジュール

#### 詳細情報

データベースオペレーション — ([詳細](/handbook/engineering/data-engineering/database-excellence/database-operations/dbre-escalation-process))
