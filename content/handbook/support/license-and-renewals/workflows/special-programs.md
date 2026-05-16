---
title: "GitLab コミュニティプログラムのサポート"
category: General
description: コミュニティプログラムのサブスクリプションに関する問い合わせを適切な窓口へ案内するための手順
upstream_path: /handbook/support/license-and-renewals/workflows/special-programs/
upstream_sha: 9da08370100b76603b2eb82901592f9d21c9766c
translated_at: "2026-05-08T11:18:50Z"
translator: claude
stale: false
lastmod: "2026-02-27T11:47:23+01:00"
---

GitLab は、本来であれば最も強力な機能にアクセスする手段を持たないコミュニティに対し、それらを紹介するためのいくつかのプログラムを提供しています。代表的なものは以下のとおりです。

- [GitLab for Education](/handbook/marketing/developer-relations/programs/education-program/)
- [GitLab for Open Source](/handbook/marketing/developer-relations/programs/open-source-program/)

これらのプログラムの DRI は [Developer Relations Programs チーム](/handbook/marketing/developer-relations/programs/) です。

登録済みの非営利団体については、GitLab は割引も提供しています。本プログラムについて詳しくは GitLab の [Environmental, Social, and Governance (ESG) チーム](/handbook/legal/esg/#faq) にお問い合わせください。スタートアップ向けには、HVS と FOs チームが [GitLab for Startups](/handbook/sales/high-velocity-sales-fo-team/startups-program/) プログラムを通じて割引を提供しています。

[GitLab for Education](https://about.gitlab.com/solutions/education/)、[GitLab for Open Source](https://about.gitlab.com/solutions/open-source/)、[GitLab for Startups](https://about.gitlab.com/solutions/startups/) に関するチケットを受け付けたら、以下の該当ワークフローを使用してください。

{{% alert title="Note" color="info" %}}
プログラムメンバーは、コミュニティプログラム経由で付与されたサブスクリプションについては限定的なサポートのみを受けられます。[GitLab Support Portal](https://about.gitlab.com/support/#issues-with-billing-purchasing-subscriptions-or-licenses) からサポートチケットを開けるのは、CustomersDOT の Community Self-checkout Portal に関するエラーや、サブスクリプションに関するエラーに限られます。GitLab for Education および GitLab for Open Source の社内エスカレーションは Slack チャンネル [`#developer-relations-programs`](https://gitlab.enterprise.slack.com/archives/CB21NTDJQ) で行えます。Startups Program については Slack チャンネル [`#startups-program-questions`](https://gitlab.enterprise.slack.com/archives/C04SS1ERWP9) を利用してください。
{{% /alert %}}

## ワークフロー

### 申請と更新

リクエスターがプログラムへの加入申請、または既存メンバーシップの更新を希望する場合、プログラムの申請フォームを送信してもらう必要があります。適切な Zendesk マクロを使用してください。

- GitLab for Education (EDU):
  [`General::EDU Response`](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/General/EDU%20Response.yaml)
- GitLab for Open Source (OSS):
  [`General::OSS Response`](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/General/OSS%20Response.yaml)
- GitLab for Startups:
  [`General::Startup Response`](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/General/Startup%20Response.yaml)

更新を希望する場合は、加えて以下の点も案内してください。

1. 新規申請と同じフォームを使用すること
1. サブスクリプションの更新を申請する人物は、**必ず** その機関について GitLab Customer Portal でサブスクリプションを作成した本人であること
1. 別の人物に更新申請を行わせる必要がある場合は、現在のオーナーが [Customers Portal アカウントの所有権を移譲](https://support.gitlab.com/hc/en-us/articles/17767356437148-How-to-transfer-subscription-ownership) する必要があること

### 製品の切り替え

コミュニティプログラムのクーポンを引き換える際、顧客が誤って間違った製品タイプを選択してしまうことがあります（Self-Managed のつもりで SaaS を選んでしまった、またはその逆）。[このナレッジベース記事](https://support.gitlab.com/hc/en-us/articles/22725476432028-Making-changes-to-Community-programs-EDU-OSS-Non-profits-or-Startups-subscriptions) をリンクして使用してください。あわせて [プログラム別の問い合わせ用メールアドレス](#program-specific-contact-inboxes) ワークフローも利用します。

### クーポンの引き換え時に "This code has already been used." エラーが発生する場合

クーポンが誤って発行されている可能性があるため、`#developer-relations-programs` でチケットを共有してください。

### 顧客がシート使用数または True-Up を懸念している場合

申請時に顧客は希望シート数を入力します。サブスクリプション期間中はその数を超過しても構わず、更新時の True-Up コストはゼロになります（超過分のシートは更新後の期間に追加されます）。顧客が紐付けられているシート数を変更したい場合は、[このナレッジベース記事](https://support.gitlab.com/hc/en-us/articles/22725476432028-Making-changes-to-Community-programs-EDU-OSS-Non-profits-or-Startups-subscriptions) をリンクして使用してください。

## プログラム別の問い合わせ用メールアドレス {#program-specific-contact-inboxes}

特定のプログラムに関する問い合わせ（上記に該当するか否かにかかわらず）については、以下のワークフローに従ってください。

1. リクエスターに対し、各プログラム専用のメールアドレスへ連絡するよう案内します。
   1. EDU: `education@gitlab.com`
   1. OSS: `opensource@gitlab.com`
   1. Startups: `startups@gitlab.com`
   1. Non-Profits: `nonprofits@gitlab.com`
1. 顧客から有意義な返信があったらすぐに、または 2 営業日待っても有意義な返信を受け取れていない場合は、いずれか早いほうのタイミングで状況を私たちに連絡するよう依頼します
1. チケットを On-hold（保留）にします
1. 顧客から「対応を受けている」と連絡があれば、チケットをクローズします
1. 一方、顧客から「対応してもらえていない」と連絡があった場合は、必要なサポートが受けられるよう自分からプログラムチームに連絡することを伝え、`#developer-relations-programs` Slack チャンネルで連絡を取ります。非営利団体の場合は `#gitlab-for-nonprofits` チャンネルで連絡してください
1. それ以外で、顧客から **連絡がなく** チケットが保留から戻ってきた場合は、適切なメッセージを添えてチケットをクローズします

## トラブルシューティング

GitLab の Developer Relations Programs チームは、[自動化されたワークフロー](/handbook/marketing/developer-relations/programs/program-resources/#automated-application-workflow) に従ってプログラム申請を処理しています。動作の詳細についてはそのワークフロー関連のハンドブックページをご覧ください。

登録プロセス中のエラーをトラブルシューティングするには、[Troubleshoot Errors While Making Purchases on CustomersDot](/handbook/support/license-and-renewals/workflows/customersdot/troubleshoot_errors_while_making_purchases#getting-error-message-from-sentry) のドキュメントに従ってください。

{{% alert title="Note" color="info" %}}
顧客はまだサインアップしていないため、`user:customerID` は存在しません。代わりに `user.ip:CustomerIP` を使用してください。
{{% /alert %}}

`CustomerIP` は次の手順で取得できます。

1. Zendesk チケットで `Conversations` をクリック
1. ドロップダウンから `Events` を選択
1. 顧客の各返信の下に IP が表示されています

{{% alert title="Note" color="info" %}}
IP は顧客が Zendesk にサインインしている場合のみ取得できます。顧客がメール経由でチケットを送信した場合、IP は取得できないため、サインアッププロセス時に使用した IP を顧客に尋ねてください。
{{% /alert %}}

## 過去のケース例

- [ZD Ticket 288871](https://gitlab.zendesk.com/agent/tickets/288871)
- [関連する Sentry イベント 2575450](https://sentry.gitlab.net/gitlab/customersgitlabcom/issues/2575450/events/40335146/)
- [バグ Issue](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/4288)

## 関連項目

- [Collaborating with Developer Relations Programs (Sales Training)](/handbook/sales/training/sales-enablement-sessions/enablement/collaborating-community-programs/)
