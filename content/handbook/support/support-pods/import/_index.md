---
title: インポートサポートポッド
description: インポート関連のチケットに共同で取り組む専任グループです。
upstream_path: /handbook/support/support-pods/import/
upstream_sha: 1426909c018f3e75bf94ea36ef7e2a30be77e167
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
---

## 目的

インポート関連のチケットに共同で取り組む専任グループを作ります。

これにより、メンバー全員がさまざまな GitLab のインテグレーションに関する知識を深められ、地域を越えて知識を共有しやすい場所を提供できます。

## 現在の目標

- 以下に関連するチケットでの協働:
  - GitLab プロジェクトのインポート/エクスポート
  - GitLab インスタンス間の GitLab リソース移行
  - サードパーティプロバイダーから GitLab へのインポート
- 知識の獲得と共有
- ドキュメントの更新

## サポートポッドメンバー

- リード: {{< member-by-name "Anton Smith" >}} (`@anton`)
- {{< member-by-name "Justin Farmiloe" >}} (`@jfarmiloe`)
- {{< member-by-name "Emily Chang" >}} (`@emchang`)
- {{< member-by-name "David Wainaina" >}} (`@dwainaina`)

## コラボレーションチャネル

- Slack チャネル: [#spt_pod_import](https://gitlab.slack.com/archives/C052K0Z1F8T)
- エピック - https://gitlab.com/groups/gitlab-com/support/-/epics/145

## インポート/エクスポートビューの作成

Zendesk の制約により各ポッドが共有ビューを持てないため、手動で作成する必要があります。
以下の手順に従えば、すぐに個人ビューを作成できます。

1. `Manage views` をクリック
1. 新しいウィンドウの右上で `Add view` をクリック
1. ビューに分かりやすい名前を付ける (`Import (All regions)`)
1. `Conditions` に移動
   1. `Tickets must meet all of these conditions to appear in the view`
      1. `Add condition` をクリックし、左から右へ
         - `Status`
         - `Less than`
         - `Pending`
      1. `Add condition` をクリックし、左から右へ
         - `Tags`
         - `Contains at least one of the following`
         - `support_pg_management_project_import_export support_category_pg_management_project_import_export`
1. `Formatting options` に進む
   1. ここはお好みに応じて調整できますが、以下にいくつかの提案を示します。
      1. Next SLA breach
      1. Priority
      1. Preferred Region for Support
      1. Subject
      1. Organization
      1. Assignee
      1. Request date
      1. Latest update by assignee
1. `Order by` を `Next SLA breach`、`Ascending` に変更
1. `Save` をクリック

おめでとうございます！これで個人用のインテグレーションポッドビューができました。
