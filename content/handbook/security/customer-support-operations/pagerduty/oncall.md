---
title: 'オンコール'
description: 'Customer Support Operations のオンコールに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/pagerduty/oncall/
upstream_sha: 6f812a8fec541dba51e50314e85d7890b9e71d7d
translated_at: "2026-05-28T21:12:16Z"
translator: claude
stale: false
lastmod: "2026-05-26T12:05:00-05:00"
---

Customer Support Operations チームは、Support Operations を担当するメンバーのオンコールローテーションを維持しています。このローテーションにより、サポートチームが常にサポートを提供できる状態を確保しています。

{{% alert title="PagerDuty へのアクセス権がない場合" color="warning" %}}

Customer Support Operations チーム (または Customer Support Operations チームの特定の人) をページングする必要があるが PagerDuty へのアクセス権がない場合は、ページを送ってもらえるよう同僚に相談してください! 誰に依頼すればよいか分からない場合、一般的におすすめなのは以下の Slack チャンネルです。

- [#it_help](https://gitlab.enterprise.slack.com/archives/CK4EQH50E)
- [#support_leadership](https://gitlab.enterprise.slack.com/archives/C01F9S37AKT)

ロール上 PagerDuty へのアクセス権が必要な場合は、マネージャーに相談してアクセス権を取得してください。

{{% /alert %}}

## Customer Support Operations のページング {#paging-customer-support-operations}

Customer Support Operations チームをページングするには、PagerDuty で手動でトリガーする必要があります。手順:

1. gitlab.pagerduty.com にログインします
1. ページ右上の `New Incident` ボタンをクリックします
   - もしくは、[Create New Incident ページ](https://gitlab.pagerduty.com/incidents/create) に移動します
1. インシデントの `Title` に関連性のあるものを入力します
   - 簡潔かつ説明的にしてください
1. `Incident Type` には `Base Incident` を選択します
1. `Impacted Service` には `Customer Support Operations` を選択します
1. `Description` にはページングする理由の詳細な説明を入れます。関連する Issue リンクがある場合は含めてください。
1. `Urgency` には `High` を選択します
1. `Priority` には `P1` を選択します
1. `Assignee` には `Customer Support Operations` を選択します
1. `Advanced Options` セクションには何も入力する必要がないため、スキップして構いません
1. ページ下部の `Create Incident` ボタンをクリックします

### 特定の人をページングする {#paging-a-specific-person}

Customer Support Operations チーム内の特定の人をページングする必要がある場合、PagerDuty で手動でトリガーする必要があります。手順:

1. gitlab.pagerduty.com にログインします
1. ページ右上の `New Incident` ボタンをクリックします
   - もしくは、[Create New Incident ページ](https://gitlab.pagerduty.com/incidents/create) に移動します
1. インシデントの `Title` に関連性のあるものを入力します
   - 簡潔かつ説明的にしてください
1. `Incident Type` には `Base Incident` を選択します
1. `Impacted Service` には `Customer Support Operations` を選択します
1. `Description` にはページングする理由の詳細な説明を入れます。関連する Issue リンクがある場合は含めてください。
1. `Urgency` には `High` を選択します
1. `Priority` には `P1` を選択します
1. `Assignee` の入力欄をクリックし、`Users` タブをクリックします
1. もう一度入力欄をクリックし、ページングしたい特定の人の名前を入力 (見つかった結果をクリック) します
1. `Advanced Options` セクションには何も入力する必要がないため、スキップして構いません
1. ページ下部の `Create Incident` ボタンをクリックします

## オンコール業務

Customer Support Operations チームのメンバーはローテーションで業務を担当します。Customer Support Operations のオンコール担当者は一般的に以下を担当します。

- GitLab がサポートを提供する能力に影響を及ぼす運用上の緊急事態に対処する。
- 根本原因分析が進行している間、サービス提供の継続性を確保するための暫定計画を Support Manager と協力して策定し、伝達する。
- 根本原因を特定し、対処する
