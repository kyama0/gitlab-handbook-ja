---
title: Geo サポート Pod
description:
upstream_path: /handbook/support/support-pods/geo/
upstream_sha: 1426909c018f3e75bf94ea36ef7e2a30be77e167
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
---

## 目的

Geo のチケットに一緒に取り組む専用のグループを作ります。

これにより、メンバー全員が Geo に関する知識をより深め、リージョンを越えて知識を共有しやすい場所を持つことができます。

## 現在の目標

- Geo に関するチケットでの協働

- 知識の獲得と共有

- ドキュメントの更新

## サポート Pod のメンバー

- リード: {{< member-by-name "Ronald van Zon" >}} (`@rvzon`)
- 副リード: {{< member-by-name "Anton Smith" >}} (`@anton`)
- 副リード: {{< member-by-name "Keelan Lang" >}} (`@klang`)
- {{< member-by-name "Alexander Strachan" >}} (`@astrachan`)
- {{< member-by-name "Brie Carranza" >}} (`@bcarranza`)
- {{< member-by-name "Bo Carbonell" >}} (`@bocarbonell`)
- {{< member-by-name "Daniel Diniz" >}} (`@dnldnz`)
- {{< member-by-name "Emily Chang" >}} (`@emchang`)
- {{< member-by-name "Łukasz Korbasiewicz" >}} (`@lkorbasiewicz`)
- {{< member-by-name "Mario Mora" >}} (`@mmora`)
- {{< member-by-name "Harish Ramachandran" >}} (`@harishsr`)
- {{< member-by-name "Aric Buerer" >}} (`@abuerer`)

## コラボレーションチャネル

- Slack チャネル: [#spt_pod_geo](https://app.slack.com/client/T02592416/C03D96JF4LD)
- Epic - https://gitlab.com/groups/gitlab-com/support/-/epics/145

## 定例ミーティング

- Geo Pod Sync APAC <> AMER - 火曜 21:30 UTC
- EMEA Geo Group Pairing - 水曜 08:00 UTC
- Geo Pod Sync EMEA <> AMER - 木曜 14:00 UTC

## Geo Pod ビューの作成

Zendesk の制限により、すべての Pod が共有ビューを持つことはできないため、手動で作成する必要があります。
以下の手順に従えば、すぐに個人用のビューが作れます。

1. `Manage views` をクリック
1. 開いた新しいウィンドウの右上で `Add view` をクリック
1. ビューに分かりやすい名前を付ける（`Geo (All regions)`）
1. `Conditions` に移動
    1. `Tickets must meet all of these conditions to appear in the view`
        1. `Add condition` をクリックし、左から右へ `Status`、`Less than`、`Pending` を設定
        1. 2つ目の条件として（左から右へ）`Form`、`Is`、`Self-Managed` を追加
    1. `Tickets can meet any of these conditions to appear in the view`
        1. `Add condition` をクリックし（左から右へ）`Descripition`、`Contains at least one of the following words`、`geo` を設定
1. `Formatting options` に進む
    1. これは好みの部分が大きいですが、以下に推奨例を示します。
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

おめでとうございます、これで個人用の Geo Pod ビューが作成できました。
