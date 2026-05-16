---
title: ライセンス／サブスクリプションの統合または分割リクエスト
category: General
description: ライセンスまたはサブスクリプションの統合または分割リクエストへの対応方法に関するガイドです。
upstream_path: /handbook/support/license-and-renewals/workflows/merge_or_split_subscription/
upstream_sha: 9da08370100b76603b2eb82901592f9d21c9766c
translated_at: "2026-05-08T10:35:08Z"
translator: claude
stale: false
lastmod: "2024-06-27T22:14:31+00:00"
---

## 概要

これは、サブスクリプションの統合または分割リクエストへの対応方法に関するガイドです。

**簡潔に言えば: いいえ、Support はサブスクリプションを統合または分割しません。たとえ望んだとしてもできません。**

## サブスクリプションの統合

一般的に、当社は単一の GitLab インスタンスや GitLab.com グループに対して、混在するライセンスや複数のサブスクリプションをサポートしていません。GitLab インスタンスでは一度に 1 つのライセンスしか使用できません。同様に、GitLab.com のグループ namespace に対しても一度に 1 つのサブスクリプションしか紐付けられません。顧客が複数のサブスクリプションを持っており、それらを GitLab インスタンス／GitLab.com グループ上で使用したい場合、最新のサブスクリプションは既存のサブスクリプションへのアドオンとして提出される必要があります。

SFDC の Opportunity が両方とも `New Business` として提出されている場合、サブスクリプションを統合することはできません。

![Salesforce のスクリーンショット。Opportunity Details の "type" フィールドが強調表示されています。](/images/support/opportunity_type.png)

2 つの個別サブスクリプション用に 2 つの Opportunity があり、顧客が両方の Opportunity に対して 1 つのライセンスを必要とする場合、最新の Opportunity はクレジット用 Opportunity 経由でクレジット処理する必要があり、新しい Opp は既存サブスクリプションの既存 Opportunity へのアドオンとして提出する必要があります。Opportunity に関するさらなる質問については、Sales Support チームに連絡してください。

例: [ZD ticket: #162478](https://gitlab.zendesk.com/agent/tickets/162478)（内部）

**例外**: 顧客が直接購入した既存サブスクリプションを持っており、リセラー経由で追加シートを購入したい場合、条件が異なるため新しいサブスクリプションを生成する必要があります。同様に、顧客がリセラー A と契約しているサブスクリプションを持っており、リセラー B 経由で追加シートを購入したい場合、アドオン購入のために新しいサブスクリプションが必要です。

これは [Route to Market Mid-Term Change Alignment](https://gitlab.com/gitlab-com/Finance-Division/finance/-/issues/3334) で活発に議論されています。現時点では、既存サブスクリプションと新しいサブスクリプションの両方のシートを含む新しいライセンスを顧客向けに生成する必要があります。

注意点：リセラーサブスクリプションと直接購入サブスクリプションは同じ顧客アカウント上にあるべきではありません。つまり、場合によっては 2 つの顧客アカウントにまたがる 2 つのサブスクリプションの合計に対するライセンスを生成することになります。

## サブスクリプションの分割

これは統合とは逆ですが、よく似た状況です。顧客が複数のシートを購入し、それらのシートを複数の GitLab インスタンスや複数の GitLab.com グループのサブスクリプションで使用したい場合、2 つの異なるサブスクリプションが必要になります。

例: [ZD ticket: #126634](https://gitlab.zendesk.com/agent/tickets/126634)（内部）
追加コンテキスト: [Internal Request #450](https://gitlab.com/gitlab-com/support/internal-requests/-/issues/450#note_192403894)

## チケットを進める方法

チケットを進めるには、新しいサブスクリプションが別のリセラーを通じて購入されたかを確認してください。これは次の方法で行えます。

1. [Zuora でサブスクリプションを検索する](https://drive.google.com/file/d/1c7ChL7iCp9nYByBttX_RvWTrOxkVcDAn/view?t=2m09s)
1. リセラーは `Invoice Owner` フィールドにリストされているはずです

両方のサブスクリプションで `Invoice Owner` が異なる場合、両方のサブスクリプションの `Users in license` を含む新しいライセンスを生成できます。

両方のサブスクリプションで `Invoice Owner` が同じ場合：

1. SFDC で関連する Opportunity Owner を検索するか、Zuora で Sales rep を検索します
1. 顧客に対して、内部で問題を処理していることを伝え、アカウントオーナー（Opportunity Owner）をチケットに CC します
1. [#support_sales_escalation](https://gitlab.slack.com/archives/C011JT165J5) で Opportunity Owner にメンションし、新しいサブスクリプション Opp はクレジット処理し、既存の Opp のアドオンとして新しい Opp を提出すべきだと伝えます。詳細は [example case: ZD ticket #162478](https://gitlab.zendesk.com/agent/tickets/162478) を参照してください。
