---
title: CI/CD サポート Pod
description: CI/CD に関するチケット/Issue を議論し、CI/CD の機能を学び、関連ドキュメントを改善します。
upstream_path: /handbook/support/support-pods/ci-cd/
upstream_sha: 1426909c018f3e75bf94ea36ef7e2a30be77e167
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
---

## 目的

CI/CD に関するチケット/Issue を議論し、CI/CD の機能を学び、関連ドキュメントを改善します。

## スコープ

この Pod のトピックは、できる限り次の製品グループと整合させます。

- [Pipeline Authoring](/handbook/product/categories/#pipeline-authoring-group)
- [Pipeline Execution](/handbook/product/categories/#pipeline-execution-group)
- [Pipeline Security](/handbook/product/categories/#pipeline-security-group)

「CI/CD」という文脈では、問題がどこに該当するか正確に特定するのが難しい場合があります。このリストは Pod でのヘルプを求めることを思いとどまらせる意図ではありません。迷ったら気軽に聞いてください！最悪でも、誰かがより良い質問先を提案してくれるだけです。

## 現在の目標

- 定例ミーティングを継続する
- CI/CD のすべてに関して最新情報を把握する
- CI/CD のチケットでお互いを助け合う！

## サポート Pod のメンバー

- {{< member-by-name "Cleveland Bledsoe Jr" >}} (`@cleveland`)
- {{< member-by-name "Ryan Kelly" >}} (`@rkelly`)
- {{< member-by-name "Elif Munn" >}} (`@e_munn`)
- {{< member-by-name "Edward Hilgendorf IV" >}} (`@edwardhilgendorf`)
- {{< member-by-name "Duncan Harris" >}} (`@duncan_harris`)
- {{< member-by-name "Alejandro Guerrero de Alba" >}} (`@alejguer`)
- {{< member-by-name "Segolene Bouly" >}} (`@sbouly`)
- {{< member-by-name "Charl Marais" >}} (`@cmarais`)
- {{< member-by-name "Sarah Crowle" >}} (`@sacrowle`)

## 参加方法

1. マネージャーと話す。
1. [Support Team データ](https://gitlab.com/gitlab-support-readiness/support-team/-/tree/master/data/agents?ref_type=heads) の自分の knowledge areas に CI を追加する。すでに存在する場合は、レベルをそれに応じて調整する。
1. チームメイトとグループメイトに新しい注力分野について伝える。
1. [#spt_pod_cicd](https://gitlab.slack.com/archives/C04DHQ91WJE) Slack チャネルに参加する。
1. このページに自分を追加する。
1. CI/CD ペアリングセッションに参加する（カレンダーの扱い方を解明できれば）。`定例ミーティング` を参照し、最新のミーティング時刻については GitLab Support カレンダーを確認してください

## 定例ミーティング

- CI/CD Pod ペアリングセッション:
  - 月曜 11:00 CET（DST により 09:00 / 10:00 UTC、`GitLab Support` カレンダー参照）
  - 木曜 15:30 CET（DST により 13:30 / 14:30 UTC、`GitLab Support` カレンダー参照）

## コラボレーションチャネル

- Slack チャネル: [#spt_pod_cicd](https://gitlab.slack.com/archives/C04DHQ91WJE)

## Zendesk で CI/CD ビューをセットアップする

CI/CD 関連のすべてのチケット用に個人ビューを設定することをおすすめします。

1. [Manage Views](https://gitlab.zendesk.com/admin/workspaces/agent-workspace/views) に移動
2. Add View をクリック
3. 次のパラメーターでビューを設定する:
   - **Title**: CI/CD Pod
   - **Conditions**:
     - Tickets must meet all of these conditions to appear in the view:
       - Status is not Closed
       - Status is not Solved
       - Status is not pending
     - Tickets can meet any of these conditions to appear in the view:
       - Tags contains at least one of the following:
         - すべての `support_cicd_*` タグを追加
         - `support_category_cicd` を追加
   - **Columns**（推奨ですが、お好みで選択できます）:
     - Next SLA breach
     - Subject
     - Requester
     - Request date
     - Assignee
     - Priority
     - Organization
   - **Order by**:
     - Next SLA breach - Ascending
