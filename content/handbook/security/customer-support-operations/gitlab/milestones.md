---
title: 'マイルストーン'
description: 'マイルストーンに関するドキュメント'
date: 2026-01-13
upstream_path: /handbook/security/customer-support-operations/gitlab/milestones/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
---

このガイドでは、Customer Support Operations が GitLab のマイルストーンを使って、1 デプロイ期間（1 か月）に含まれる変更（と作業）をどのように追跡しているかを説明します。マイルストーンは、月次デプロイのすべての Issue とマージリクエストをグループ化します。

## マイルストーンについて

### マイルストーンとは

Customer Support Operations では、マイルストーンを特定のデプロイ期間に含まれる変更（と作業）をグループ化・追跡するために使用します。各マイルストーンは 1 か月分（ある月の 1 日から翌月の 1 日まで）を表します。

## 現在のマイルストーン一覧の表示

Customer Support Operations のマイルストーン一覧を見るには、[このページ](https://gitlab.com/groups/gitlab-com/gl-security/corp/-/milestones?sort=due_date_desc&state=all) にアクセスします。

マイルストーンをクリックすると、そのデプロイ期間に紐付いている Issue やマージリクエストを確認できます。

## マイルストーンを項目に適用する

Issue やマージリクエストにマイルストーンを適用するには、Issue/マージリクエストの右側パネルにある `Milestone` の横の `Edit` をクリックするか、[milestone クイックコマンド](https://docs.gitlab.com/user/project/quick_actions/#milestone) を使用します。

```plaintext
/milestone %"TITLE_OF_MILESTONE"
```

注意: パーセント記号 (`%`) は必須です。`TITLE_OF_MILESTONE` はマイルストーン自体のタイトルに置き換えてください。例えば次のようになります。

```plaintext
/milestone %"CustSuppOps Deployment 2026-02-01"
```

## 項目からマイルストーンを削除する

Issue やマージリクエストからマイルストーンを削除するには、Issue/マージリクエストの右側パネルにある `Milestone` の横の `Edit` をクリックするか、[remove_milestone クイックコマンド](https://docs.gitlab.com/user/project/quick_actions/#remove_milestone) を使用します。

```plaintext
/remove_milestone
```

## マイルストーンのセットアップ

私たちのマイルストーンはすべて、GitLab 会計年度の最終月に向けた期間に手動で作成されます。伝統的には GitLab 会計年度の最終月（1 月）に行いますが、将来の計画作業に必要であれば、もっと早く実施することもできます。

各マイルストーンは次のフォーマットを使用します。

- タイトル: `CustSuppOps Deployment YYYY-MM-01`
  - `YYYY-MM-01` はデプロイ日の 4 桁の年と 2 桁の月
- 開始日: タイトルにある日付の 1 か月前
  - 例: デプロイ日が `2025-05-01` なら、開始日は `2025-04-01`
- 期限日: タイトルにある日付と同じ
