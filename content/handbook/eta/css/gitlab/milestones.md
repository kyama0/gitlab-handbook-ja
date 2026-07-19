---
title: 'マイルストーン'
description: 'マイルストーンに関するドキュメント'
upstream_path: "/handbook/eta/css/gitlab/milestones/"
upstream_sha: "1c5f183add4a3220f2aa77e0c98565c4fad645e2"
translated_at: "2026-07-18T06:50:00+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このガイドでは、Customer Support Systems が GitLab マイルストーンを使用して、デプロイ期間（1 か月）内の変更と作業を追跡する方法を説明します。マイルストーンは、月次デプロイのすべての Issue とマージリクエストをまとめます。

## マイルストーンを理解する

### マイルストーンとは

Customer Support Systems では、マイルストーンを使用して、特定のデプロイ期間に関わる変更と作業をグループ化・追跡します。各マイルストーンは、ある月の 1 日から次の月の 1 日までの 1 か月を表します。

## 現在のマイルストーン一覧を表示する

Customer Support Systems のマイルストーン一覧を表示するには、[このページ](https://gitlab.com/groups/gitlab-com/gl-security/corp/-/milestones?sort=due_date_desc&state=all)に移動します。

マイルストーンをクリックすると、そのデプロイ期間にリンクされた Issue とマージリクエストをレビューできます。

## 項目にマイルストーンを適用する

Issue またはマージリクエストにマイルストーンを適用するには、Issue またはマージリクエストの右側パネルにある `Milestone` の横の `Edit` をクリックするか、[milestone クイックコマンド](https://docs.gitlab.com/user/project/quick_actions/#milestone)を使用します。

```plaintext
/milestone %"TITLE_OF_MILESTONE"
```

注記: パーセント記号（`%`）は必須です。`TITLE_OF_MILESTONE` はマイルストーン自体のタイトルに置き換えてください。例:

```plaintext
/milestone %"CustSuppOps Deployment 2026-02-01"
```

## 項目からマイルストーンを削除する

Issue またはマージリクエストからマイルストーンを削除するには、Issue またはマージリクエストの右側パネルにある `Milestone` の横の `Edit` をクリックするか、[remove_milestone クイックコマンド](https://docs.gitlab.com/user/project/quick_actions/#remove_milestone)を使用します。

```plaintext
/remove_milestone
```

## マイルストーンの設定

すべてのマイルストーンは、GitLab 会計年度の最終月を迎えるまでに手動で作成します。従来は GitLab 会計年度の最終月（1 月）に行いますが、将来の計画に必要であれば早めに実施できます。

各マイルストーンは次の形式を使用します。

- タイトル: `CustSuppOps Deployment YYYY-MM-01`
  - `YYYY-MM-01` はデプロイ日の 4 桁の年と 2 桁の月です
- 開始日: タイトルの日付の 1 か月前
  - 例: デプロイ日が `2025-05-01` の場合、開始日は `2025-04-01`
- 期日: タイトルの日付と同じ
