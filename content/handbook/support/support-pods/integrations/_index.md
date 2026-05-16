---
title: インテグレーションサポートポッド
description: インテグレーション関連のチケットに共同で取り組む専任グループです。
upstream_path: /handbook/support/support-pods/integrations/
upstream_sha: 1426909c018f3e75bf94ea36ef7e2a30be77e167
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-14T17:59:32+00:00"
---

## 目的

インテグレーション関連のチケットに共同で取り組む専任グループを作ります。

これにより、メンバー全員がさまざまな GitLab インテグレーションに関する知識を深められ、地域を越えて知識を共有しやすい場所を提供できます。

## 現在の目標

- [GitLab で提供されるさまざまなインテグレーション](https://about.gitlab.com/direction/foundations/#integrations) に関連するチケットでの協働。
- 知識の獲得と共有
- ドキュメントの更新

## サポートポッドメンバー

- リード: {{< member-by-name "Anton Smith" >}} (`@anton`)
- {{< member-by-name "Justin Farmiloe" >}} (`@jfarmiloe`)
- {{< member-by-name "Emily Chang" >}} (`@emchang`)
- {{< member-by-name "David Wainaina" >}} (`@dwainaina`)

## コラボレーションチャネル

- Slack チャネル: [#spt_pod_integrations](https://gitlab.enterprise.slack.com/archives/C08VB43K9N0)
- エピック - https://gitlab.com/groups/gitlab-com/support/-/epics/145

## インテグレーションビューの作成

Zendesk の制約により各ポッドが共有ビューを持てないため、手動で作成する必要があります。
以下の手順に従えば、すぐに個人ビューを作成できます。

1. `Manage views` をクリック
1. 新しいウィンドウの右上で `Add view` をクリック
1. ビューに分かりやすい名前を付ける (`Integrations (All regions)`)
1. `Conditions` に移動
   1. `Tickets must meet all of these conditions to appear in the view`
      1. `Add condition` をクリックし、左から右へ
         - `Status`
         - `Less than`
         - `Pending`
      1. `Add condition` をクリックし、左から右へ
         - `Tags`
         - `Contains at least one of the following`
         - `support_category_integrations_datadog support_category_integrations_datadog_setup support_category_integrations_datadog_errors support_category_integrations_datadog_questions support_category_integrations_datadog_other support_category_integrations_gitpod support_category_integrations_gitpod_setup support_category_integrations_gitpod_errors support_category_integrations_gitpod_questions support_category_integrations_gitpod_other support_category_integrations_jira support_category_integrations_jira_setup support_category_integrations_jira_errors support_category_integrations_jira_questions support_category_integrations_jira_other support_category_integrations_plantuml support_category_integrations_plantuml_setup support_category_integrations_plantuml_errors support_category_integrations_plantuml_questions support_category_integrations_plantuml_other support_category_integrations_project_ support_category_integrations_project_asana support_category_integrations_project_bamboo support_category_integrations_project_discord support_category_integrations_project_emails_on_push support_category_integrations_project_github support_category_integrations_project_google_chat support_category_integrations_project_irker support_category_integrations_project_jenkins support_category_integrations_project_mattermost support_category_integrations_project_ms_teams support_category_integrations_project_status_emails support_category_integrations_project_pivotal support_category_integrations_project_prometheus support_category_integrations_project_slack support_category_integrations_project_unify_circuit support_category_integrations_project_webex support_category_integrations_project_webhooks support_category_integrations_project_other support_category_integrations_external_trackers support_category_integrations_external_trackers_bugzilla support_category_integrations_external_trackers_ibm support_category_integrations_external_trackers_redmine support_category_integrations_external_trackers_youtrack support_category_integrations_external_trackers_zentao support_category_integrations_external_trackers_other support_category_integrations_gmail support_category_integrations_gmail_setup support_category_integrations_gmail_errors support_category_integrations_gmail_questions support_category_integrations_gmail_other support_category_integrations_sourcegraph support_category_integrations_sourcegraph_setup support_category_integrations_sourcegraph_errors support_category_integrations_sourcegraph_questions support_category_integrations_sourcegraph_other support_category_integrations_trllo support_category_integrations_trllo_setup support_category_integrations_trllo_errors support_category_integrations_trllo_questions support_category_integrations_trllo_other support_category_integrations_visual_studio support_category_integrations_visual_studio_setup support_category_integrations_visual_studio_errors support_category_integrations_visual_studio_questions support_category_integrations_visual_studio_other support_category_integrations_akismet support_category_integrations_akismet_setup support_category_integrations_akismet_errors support_category_integrations_akismet_questions support_category_integrations_akismet_other support_category_integrations_kroki support_category_integrations_kroki_setup support_category_integrations_kroki_errors support_category_integrations_kroki_questions support_category_integrations_kroki_other support_category_integrations_mailgun support_category_integrations_mailgun_setup support_category_integrations_mailgun_errors support_category_integrations_mailgun_questions support_category_integrations_mailgun_other support_category_integrations_pim support_category_integrations_pim_setup support_category_integrations_pim_errors support_category_integrations_pim_questions support_category_integrations_pim_other support_category_integrations_recaptcha support_category_integrations_recaptcha_setup support_category_integrations_recaptcha_errors support_category_integrations_recaptcha_questions support_category_integrations_recaptcha_other support_category_integrations_other support_category_integrations_other_setup support_category_integrations_other_errors support_category_integrations_other_questions support_category_integrations_other_other
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
