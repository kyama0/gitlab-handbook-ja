---
title: 'オンコール'
description: 'Customer Support Operations のオンコールに関するドキュメント'
upstream_path: /handbook/security/customer-support-operations/pagerduty/oncall/
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
lastmod: "2026-05-26T12:05:00-05:00"
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
---

Customer Support Operations チームは、Support Operations を担当するメンバーのためにオンコールローテーションを維持しています。このローテーションにより、サポートチームが常にサポートを提供できる状態を確保しています。

{{% alert title="PagerDuty へのアクセス権がない場合" color="warning" %}}

Customer Support Operations チーム (または Customer Support Operations チームの特定の人) にページを送る必要があるが PagerDuty へのアクセス権がない場合は、ページを送ってもらえるよう同僚に相談してください! 誰に依頼すればよいか分からない場合、一般的におすすめなのは以下の Slack チャンネルです。

- [#it_help](https://gitlab.enterprise.slack.com/archives/CK4EQH50E)
- [#support_leadership](https://gitlab.enterprise.slack.com/archives/C01F9S37AKT)

ロールに PagerDuty へのアクセス権が必要な場合は、それを取得できるようマネージャーに相談してください。

{{% /alert %}}

## Customer Support Operations へのページング

Customer Support Operations チームにページを送るには、PagerDuty を介して手動でトリガーする必要があります。手順は次のとおりです。

1. gitlab.pagerduty.com にログインします
1. ページ右上の `New Incident` ボタンをクリックします
   - または、[Create New Incident ページ](https://gitlab.pagerduty.com/incidents/create) に移動します
1. インシデントに適切な `Title` を入力します
   - 簡潔かつ説明的になるよう心がけます
1. `Incident Type` には `Base Incident` を選択します
1. `Impacted Service` には `Customer Support Operations` を選択します
1. `Description` には、ページを送る理由の詳細な説明を入力します。関連する Issue のリンクがあれば含めてください。
1. `Urgency` には `High` を選択します
1. `Priority` には `P1` を選択します
1. `Assignee` には `Customer Support Operations` を選択します
1. `Advanced Options` セクションには何も入力する必要がないため、スキップできます
1. ページ下部の `Create Incident` ボタンをクリックします

### 特定の人へのページング

Customer Support Operations チーム内の特定の人にページを送る必要がある場合は、PagerDuty を介して手動でトリガーする必要があります。手順は次のとおりです。

1. gitlab.pagerduty.com にログインします
1. ページ右上の `New Incident` ボタンをクリックします
   - または、[Create New Incident ページ](https://gitlab.pagerduty.com/incidents/create) に移動します
1. インシデントに適切な `Title` を入力します
   - 簡潔かつ説明的になるよう心がけます
1. `Incident Type` には `Base Incident` を選択します
1. `Impacted Service` には `Customer Support Operations` を選択します
1. `Description` には、ページを送る理由の詳細な説明を入力します。関連する Issue のリンクがあれば含めてください。
1. `Urgency` には `High` を選択します
1. `Priority` には `P1` を選択します
1. `Assignee` では入力ボックスをクリックし、`Users` タブをクリックします
1. 入力ボックスを再度クリックし、ページを送りたい特定の人の名前を入力します (見つかった結果をクリックします)
1. `Advanced Options` セクションには何も入力する必要がないため、スキップできます
1. ページ下部の `Create Incident` ボタンをクリックします

## オンコールを担当する

Customer Support Operations チームのメンバーはローテーションで対応します。Customer Support Operations のオンコールは、一般的に次のことを担当します。

- GitLab がサポートを提供する能力に影響を与えるオペレーション上の緊急事態に対処する。
- 根本原因の分析が進行中の間も、サービス提供の継続性を確保するための暫定計画を策定・伝達するため、Support Manager と協力する。
- 根本原因を特定し、対処する。
