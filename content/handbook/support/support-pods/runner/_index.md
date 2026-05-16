---
title: GitLab Runner サポートポッド
description: サポートエンジニアが Runner に関するヘルプを得たり、共同作業したりするためのスペースです。
upstream_path: /handbook/support/support-pods/runner/
upstream_sha: 1426909c018f3e75bf94ea36ef7e2a30be77e167
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-01-20T14:30:51+00:00"
---

## 目的

サポートエンジニアが Runner に関するヘルプを得たり、共同作業したりするためのスペースを提供します。

## スコープ

Runner に関連するすべて。CI/CD を補完するものです。

## 現在の目標

- 知識を獲得し共有する
- ドキュメントの更新

## サポートポッドメンバー

- リード: {{< member-by-name "Justin Farmiloe" >}} (`@jfarmiloe`)
- リード: {{< member-by-name "Tony Marsh" >}} (`@tmarsh1`)
- {{< member-by-name "Kenneth Chu" >}} (`@kenneth`)
- {{< member-by-name "Michael Trainor" >}} (`@tmike`)

## コラボレーションチャネル

- [#spt_pod_runner](https://gitlab.slack.com/archives/C05MBS5RZ50)
- (隔)週次ミーティング: 未定 - リードしてくださる方は、Support カレンダーに追加し、ここにも記載してください！

## Zendesk ビュー

Zendesk の制約により各ポッドが共有ビューを持てないため、手動で作成する必要があります。
以下の手順に従えば、すぐに個人ビューを作成できます。

1. `Manage views` をクリック
1. 新しいウィンドウの右上で `Add view` をクリック
1. ビューに名前を付ける
1. `Conditions` に移動
   1. `Tickets must meet all of these conditions to appear in the view`
      1. `Add condition` をクリックし、左から右へ
         - `Status`
         - `Less than`
         - `Pending`
      1. `Add condition` をクリックし、左から右へ
         - `Tags`
         - `Contains at least one of the following`
         - `support_category_runners support_category_category_runners support_category_runners_shared support_category_runners_shared_installation support_category_runners_shared_configuration support_category_runners_shared_questions support_category_runners_shared_errors support_category_runners_shared_other_topic support_category_runners_docker support_category_runners_docker_installation support_category_runners_docker_configuration support_category_runners_docker_questions support_category_runners_docker_errors support_category_runners_docker_other_topic support_category_runners_freebsd support_category_runners_freebsd_installation support_category_runners_freebsd_configuration support_category_runners_freebsd_questions support_category_runners_freebsd_errors support_category_runners_freebsd_other_topic support_category_runners_helm support_category_runners_helm_installation support_category_runners_helm_configuration support_category_runners_helm_questions support_category_runners_helm_errors support_category_runners_helm_other_topic support_category_runners_agent support_category_runners_agent_installation support_category_runners_agent_configuration support_category_runners_agent_questions support_category_runners_agent_errors support_category_runners_agent_other_topic support_category_runners_operator support_category_runners_operator_installation support_category_runners_operator_configuration support_category_runners_operator_questions support_category_runners_operator_errors support_category_runners_operator_other_topic support_category_runners_linux support_category_runners_linux_installation support_category_runners_linux_configuration support_category_runners_linux_questions support_category_runners_linux_errors support_category_runners_linux_other_topic support_category_runners_macos support_category_runners_macos_installation support_category_runners_macos_configuration support_category_runners_macos_questions support_category_runners_macos_errors support_category_runners_macos_other_topic support_category_runners_windows support_category_runners_windows_installation support_category_runners_windows_configuration support_category_runners_windows_questions support_category_runners_windows_errors support_category_runners_windows_other_topic support_category_runners_other support_category_runners_other_installation support_category_runners_other_configuration support_category_runners_other_questions support_category_runners_other_errors support_category_runners_other_other`
1. `Formatting options` に進む
   1. お好みに合わせて表示する列を更新
1. `Order by` を `Next SLA breach`、`Ascending` に変更
1. `Save` をクリック
