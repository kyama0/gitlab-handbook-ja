---
title: オンコールのプロセスとポリシー - ベストエフォートローテーション
upstream_path: "/handbook/engineering/infrastructure-platforms/incident-management/on-call/best-effort-rotations/"
upstream_sha: "e645aac6dc6fbb0b759b92ed32f016aaed5ef4b8"
translated_at: "2026-11-20T21:24:00Z"
translator: claude
stale: false
lastmod: "2026-11-20T12:40:44+01:00"
---

一部のシステムでは、オンコールシステムではなく、ベストエフォートローテーションを使用しています。例えば、Release Manager のローテーションは、一度に 1 週間、2 名のエンジニアのペアが担当するベストエフォート方式です。

ベストエフォートローテーションには SLA はありません。

ベストエフォートローテーションを使用するかどうかの判断は、チームの規模や性質ではなく、オンコールの要件を中心に行うべきです。ただし、チームの規模によってはベストエフォートローテーションが最良の選択肢になり得ることが認識されています。

ベストエフォートローテーションでは:

1. 固定のオンコールローテーションはありません (チームメンバーはオンコールではありません)。
2. このグループへのエスカレーションがあった場合、その地域のすべてのチームメンバーがページされます。
3. ページされた場合、ベストエフォートで対応することが期待されます。
4. 逆に、Tier 1 ローテーションは、本当に必要な状況でのみページを発するベストエフォートを尽くします。

ベストエフォートローテーションを使用したい場合は、[追跡用の Issue を作成する](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new?description_template=onboarding-best-effort-rotation) 必要があります。以下を含めてください:

1. このローテーションの参加者
2. 参加者の所在地
3. ベストエフォートローテーションを選択する理由
4. ローテーションを 24x5 に引き上げる準備と、その時間枠の想定

## アクティブなベストエフォートローテーション

### Release Manager

- ローテーションリーダー: Michele Bursi
- カバレッジ: ベストエフォート
- スケジュール: [schedule](https://gitlab.pagerduty.com/schedules#PY12KEX)

### Database Operations

- ローテーションリーダー:
- カバレッジ: ベストエフォート
- スケジュール: schedule

#### 詳細情報

Database Operations - ([詳細](/handbook/engineering/data-engineering/database-excellence/help/))

### Analytics Instrumentation

- ローテーションリーダー: Ashwin Bilgi
- カバレッジ: ベストエフォート、業務時間のみ。
- スケジュール: なし。各チームメンバーには、それぞれの業務時間中に呼び出しの通知が届きます。
- カバー対象: versiondot ([version.gitlab.com](https://version.gitlab.com)) および Snowflake への夜間エクスポート。
- 追跡用 Issue: [production-engineering#30236](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/work_items/30236)
