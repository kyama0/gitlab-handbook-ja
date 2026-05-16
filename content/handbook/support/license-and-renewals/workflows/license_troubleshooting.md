---
title: サブスクリプションと請求の問題
category: Legacy pages
description: ユーザーがセルフマネージドまたは GitLab.com の取引、ライセンス、請求に関する質問／問題を抱えている場合は、このページを参照してください。
upstream_path: /handbook/support/license-and-renewals/workflows/license_troubleshooting/
upstream_sha: 9da08370100b76603b2eb82901592f9d21c9766c
translated_at: "2026-05-08T10:35:08Z"
translator: claude
stale: false
lastmod: "2026-04-06T15:48:24+08:00"
---

## 概要

ユーザーがセルフマネージドまたは GitLab.com の取引、ライセンス、請求に関する質問／問題を抱えている場合は、このページを参照してください。例外として明示されている箇所を除き、本ページの情報はセルフマネージドおよび GitLab.com 両方のユーザー／製品に適用されることに留意してください。

## ライセンス vs サブスクリプションの説明

セルフマネージドの場合、ライセンスとは、サブスクリプションに含まれる有料機能にアクセスするために顧客が自分のインスタンスへアップロードする必要のある成果物です。GitLab.com のサブスクリプションには存在せず、必要ありません。

GitLab.com の場合、アップロードする成果物はありませんが、サブスクリプション（CustomersDot で確認可能）を namespace（GitLab.com 上）に紐付ける必要があります。ポータルと GitLab.com の間で紐付けがされていなければ、GitLab.com はサブスクリプションが存在することを認識できません。

また、サブスクリプションは購入されたベース製品の総称です。例えば、`サブスクリプション` を果物とすると、`Premium` や `Ultimate`（セルフマネージド／GitLab.com）は購入できる果物の種類にあたります。

## Opportunity からサブスクリプションを見つける

内部リクエストに取り組む際、チケットには Opportunity のリンクが提供されます。場合により、Opportunity が顧客のポータルアカウントで見つかる既存サブスクリプションと一致しないことがあります。サブスクリプションを見つけるには次の手順を使用できます。

1. SFDC の Opportunity ページで、`Related List Quick Links` セクションを確認し、`Quotes` にカーソルを合わせます。
2. 複数の見積が表示された場合は、`Sent to Z-Billing` とマークされているものを選択します。
3. 見積ページで `Subscription Name` を確認できます。これを使用して Zuora でサブスクリプションを検索できます。
   - スクロールダウンすると、`Zuora Account ID` および `Zuora Subscription ID` も確認できます。

## 取引

GitLab における取引とは、購入に関連するあらゆること、すなわち問題や質問を指します。例: クレジットカードの問題、バグ、購入を試みた際に発生する混乱／問題などです。

1. **ユーザーが有料プランから別の有料プランへアップグレードできないと報告した場合。**

    - GitLab.com ユーザーは [CustomersDot](https://customers.gitlab.com/customers/sign_in) でサブスクリプションウィジェットの下にある `Upgrade` ボタンを選択することで、有料プランを上位ティアへアップグレードできます。
    - セルフマネージド GitLab ユーザーは、上位ティアへプランをアップグレードするためには Sales 担当者へ繋ぐ必要があります。Zendesk の [`General::Upgrade Plan Request`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360089766413) マクロを利用してください。これによりユーザーから必要な情報をリクエストし、チケットが License, Renewals and Upgrades キューへ再割り当てされます。

1. **ユーザーが GitLab.com サブスクリプションの購入手順を知らない場合。**

   - [GitLab.com](https://gitlab.com/users/sign_in) でアカウントを作成する
   - 必要に応じて GitLab.com で [グループを作成](https://docs.gitlab.com/user/group/#create-a-new-group) し、[グループメンバーを追加](https://docs.gitlab.com/user/group/#add-users-to-a-group) する
   - [CustomersDot](https://customers.gitlab.com/customers/sign_up) でアカウントを作成する
   - GitLab.com アカウントを CustomersDot アカウントと紐付ける。まず GitLab.com にログインし、同じブラウザの別タブで CustomersDot を開き、`My Account` に移動して `Change Linked Account` を選択する
   - <https://about.gitlab.com/pricing/#compare-options> から希望のサブスクリプションを購入し、購入プロセスで希望のグループを選択する。

1. **ユーザーが購入プロセスでグループを表示できない場合。** 顧客がサブスクリプション購入時にグループを確認できない場合、以下のいずれかが起きている可能性があります。
   - 先に GitLab.com でグループを作成する必要がある
   - GitLab.com アカウントを CustomersDot アカウントに紐付ける必要がある

1. **ユーザーが期中に追加するか、更新時に追加するかを知りたい場合。** - 期中に CustomersDot で「Add more seats」ボタン（セルフマネージド向け）を使用すると、追加ユーザーは日割り計算で課金されます。更新時に [true-up users](https://about.gitlab.com/pricing/licensing-faq/#what-does-users-over-license-mean) プロセスで追加ユーザーを購入する場合は、12 か月分の利用料金が課金されます。

1. **ユーザーが [CustomersDot](https://customers.gitlab.com/customers/sign_in) にログインできないと報告した場合。** - ユーザーは間違ったシステム（通常は GitLab.com）にログインしている可能性が高いです。[#144710 のチケット](https://gitlab.zendesk.com/agent/tickets/144710) の例にあるように、正しい URL をユーザーに提供してください。

## ライセンス

ライセンスリクエストは、セルフマネージド製品のライセンスキーに関する問題や質問を指します。

1. **ユーザーがいつライセンスキーを受け取るか、または誰にライセンスが送られるかを知りたい場合。** ライセンスキーは、Billing チームによりサブスクリプション支払いが内部承認された後、[CustomersDot のサブスクリプションに紐づいたメールアドレス](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/1044#note_318221832) にメールで送信されます。異常に長い遅延がある場合は、チケットを「License, Renewals and Upgrades」キューに割り当てるか、「license issue」テンプレートを使って [Issue を作成](https://gitlab.com/gitlab-com/support/internal-requests/issues/new?issuable_template=license%20issue) してください。

## CustomersDot Staging へのアクセス

[CustomersDot staging](https://customers.staging.gitlab.com/customers/sign_in) にユーザー（管理者ではない）としてアクセスしたい場合は、リンクへ移動して新しいアカウントを登録できます。検証を受け取るには @gitlab.com のメールアドレスを使用する必要があります。例として <yourname+test@gitlab.com> を使えば、通常の <yourname@gitlab.com> メールアドレスにメールが届きます。

ユーザーアカウントを作成したら、テストには [stripe テストカード](https://docs.stripe.com/testing#cards) を使用できます。

注: CustomersDot staging に管理者としてアクセスするには Access Request が必要です。
