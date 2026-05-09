---
title: GitLab Dedicated 月次ビジネスレビュー準備
description: GitLab Dedicated Support Stable Counterpart がサポート部門の月次ビジネスレビューに向けた準備を行えるようにします。
upstream_path: /handbook/support/support-pods/gitlab-dedicated/ssc-monthly-business-review-prep/
upstream_sha: 1426909c018f3e75bf94ea36ef7e2a30be77e167
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
---

毎月、Support Stable Counterpart（SSC）は GitLab サポートの月次ビジネスレビュー（MBR）で利用する情報を準備します。このハンドブックページでは、GitLab Dedicated SSC が任意の MBR 向けに GitLab Dedicated に関するメモを準備するためにどのような手順を踏むべきかをドキュメント化しています。GitLab Dedicated SSC であれば誰でも MBR の調整を主導できます。

## ℹ️ 情報源

各 MBR には次の情報源からの情報を含める必要があります。

- 他の SSC
- チケット
- RFH
- インシデント

各 MBR には他の情報源からの情報も含まれる場合があります。

私たちは GitLab Dedicated（商用）と GitLab Dedicated for Government についてレポートします。GitLab Dedicated for Government に関する具体的なデータを取得するには、Brie または Wade と連携する必要があります。それらの領域は明示的に注記されています。

## メトリクスのまとめ方

再現性を確保するため、MBR 向けにメトリクスをまとめる際は次の手順に従ってください。

### テナント数のカウント

この[スプレッドシート](https://docs.google.com/spreadsheets/d/1tckSKeZkKHrxOfE2otruH8GrHCDxdPYc7ZJIagisqxk/edit?usp=sharing)を参照し、テナントおよび ASE のソースに関してリストが最新であることを確認してください。テナント数をカウントする際には、本番、プリプロダクション、内部テナントの区別に留意してください。Assigned Support Engineer を持つテナントの割合をカウントする際は本番テナントのみを対象とし、その点を MBR スライド内で明示します。

### 📅 集計期間 {#-cutoff-period}

各 MBR では先月の状況を確認します。物事を一度だけカウントするためにも、MBR を準備する際にどの日付を見ているかを特に意識してください。MBR の前週の終わりが[適切な集計区切り](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6738#note_2394065104)になります。

このページの末尾の表に、使用した開始日と終了日を記録してください。

### 🎫 チケット数のカウント

#### GitLab Dedicated（商用）

GitLab Dedicated SSC は[Zendesk Explore ダッシュボード](https://gitlab.zendesk.com/explore/studio#/dashboards/07CF8C533919A5124620021181BA5AD59F3463F6A1D60F1FC2C789D5E49079E4)にアクセスできます。チケット数のカウントにはこちらを使用してください。準備対象の MBR に応じた正確なチケット数を集計するためには、**Custom range** オプションを使用してください。

#### GitLab Dedicated for Government

_作業中です。_

### 🆘 RFH 数のカウント

#### GitLab Dedicated（商用）

1. 統合 `request-for-help` [プロジェクト](https://gitlab.com/gitlab-com/request-for-help)内の[Issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/?sort=created_date&state=opened&first_page_size=100) を、`Label` `is one of` `Help group::Dedicated`、`Help group::switchboard`（[直接リンク](https://gitlab.com/gitlab-com/request-for-help/-/issues/?sort=created_date&state=all&or%5Blabel_name%5D%5B%5D=Help%20group%3A%3ASwitchboard&or%5Blabel_name%5D%5B%5D=Help%20group%3A%3ADedicated&first_page_size=20)）でフィルタします。

1. **All** を選択
1. **Created Date** でソート
1. **Sort direction** を **Descending** に設定

集計期間内にオープンされた Issue をすべてカウントしてください。

#### GitLab Dedicated for Government

CompSecGov 上の[該当プロジェクト](https://compsecgov.gitlab-dedicated.us/gitlab-dedicated-us-public-sector/incident-management)にある RFH Issue について、上記と同じ手順を実施してください。

執筆時点では、Wade と Brie だけがこの情報を取得できる GitLab Dedicated SSC です。（US Government Support チームの他のメンバーが手伝うことができます。）

### 🚨 ページ数のカウント

私たちは、インシデントの総数ではなくページの総数をカウントします。（すべてのインシデントが GitLab サポートチームに関わるわけではありません。）

#### GitLab Dedicated（商用）

[Incident Management - GDCMOC](https://gitlab.pagerduty.com/service-directory/P8WVAI0) サービスを使用し、集計期間内の **Resolved Incidents** の数を数えてください。

#### GitLab Dedicated for Government

[Incident Management - GitLab Dedicated for US Gov CMOC](https://gitlab.pagerduty.com/service-directory/PQRVHA8) サービスを使用し、集計期間内の **Resolved Incidents** の数を数えてください。

執筆時点では、Wade と Brie だけがこの情報を取得できる GitLab Dedicated SSC です。（US Government Support チームの他のメンバーが手伝うことができます。）

## 取り扱う領域

MBR スライドでは、通常次の項目を取り扱います。

- 主要なメトリクスとトレンド
- 達成事項
- Issue・学び・アップデート
- 助けが必要な領域

また、次の表も含まれます。

| | グローバル | US Government |
|-|--------|---------------|
| チケット | | |
| RFH | | |
| GDCMOC ページ | | |

各セルには `X（前月比の増加率、先月の X の値）` を記載します。

## 📜 過去の MBR の日付

MBR の準備に使用する **開始日** と **終了日** を記録してください。日付は両端を含めます（`inclusive`）。

| MBR | SSC | 開始日 | 終了日 |
| ------ | ------ | ------ | ------ |
| 2025年4月 | Brie Carranza |  N/A      | `2025-04-27` |
| 2025年5月 | Brie Carranza | `2025-04-28` | `2025-05-16` |
| 2025年6月 | Armin Hergenhan | `2025-05-17` | `2025-06-20` |
| 2025年7月 | Armin Hergenhan | `2025-06-21`  | `2025-07-18` |
| 2025年8月 | Daphne Kua | `2025-07-19`  | `2025-08-24` |
| 2025年9月 | TBD | `2025-08-24`  |  |
