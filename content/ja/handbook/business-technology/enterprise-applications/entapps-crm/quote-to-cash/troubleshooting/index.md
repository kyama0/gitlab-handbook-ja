---
title: "トラブルシューティング: トゥルーアップ、ライセンス + EULA"
upstream_path: /handbook/business-technology/enterprise-applications/entapps-crm/quote-to-cash/troubleshooting/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-25T06:00:00Z"
translator: claude
stale: false
---

## 社内向け重要リンク

- [L&R ノーティスボード](https://gitlab.com/gitlab-com/support/license-and-renewals/-/issues/1)
- [CustomersDot](https://customers.gitlab.com/admins/sign_in) へのアクセスが必要ですか？
  - CustomersDot のログインを取得するには、[アクセスリクエストを開く](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request)ことで手続きが可能です。リスト内の CustomersDot 行以外のすべてのシステムを削除してください。
これらの認証情報は通常の GitLab 認証情報とは別に保存してください。
- [バージョンアプリケーション](https://version.gitlab.com/users/sign_in)へのアクセスが必要ですか？
  - バージョンアプリケーションのログインを取得するには、[アクセスリクエストを開き](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request)、`GitLab DEV` の行以外のすべてのシステムを削除してください。これをアプリケーションへの OAuth 認証に使用します。
これらの認証情報は通常の GitLab 認証情報とは別に保存してください。
- [Kyla の見積もり作成動画](https://drive.google.com/drive/u/0/folders/1CAXWx2SSXbIIW5bmPv4Lahlv_VPYdJce)
- [サポート: 一般的なライセンス・トランザクション・請求トラブルシューティング](/handbook/support/license-and-renewals/workflows/license_troubleshooting/)
- [営業イネーブルメント更新ドキュメント](https://docs.google.com/document/d/15WKHS-LxE4c4BbZ4eNREwwH_n_DhX_Q2yzT0OYTNjh0/edit)
- 見積もりの作成方法
  - [新規サブスクリプション見積もり](/handbook/sales/field-operations/sales-operations/deal-desk/#new-subscription-quote)
  - [サブスクリプション修正見積もり](/handbook/sales/field-operations/sales-operations/deal-desk/#amend-subscription-quote)
  - [サブスクリプション更新見積もり](/handbook/sales/field-operations/sales-operations/deal-desk/#renew-subscription-quote)
- [見積もり承認手順](/handbook/sales/field-operations/order-processing/#how-to-submit-a-quote-for-discount-and-payment-term-approval)
- [CSM からの役立つリンク集](https://gitlab.com/gitlab-com/account-management/commercial/triage/blob/master/LINKS.md)
- [GitLab.com サブスクリプションの仕組み](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/enablement/dotcom-subscriptions/)

## 顧客・見込み客向けの重要リンク

- トライアル中の見込み客向けリソース
  - [GitLab を始める](https://docs.gitlab.com/)
  - [GitLab エピック](https://docs.gitlab.com/ee/user/group/epics/)
- [セルフマネージドの更新方法](https://about.gitlab.com/pricing/licensing-faq/#how-do-i-renew-my-subscription)
- [顧客向け: ライセンス・更新・サブスクリプション FAQ](https://about.gitlab.com/pricing/licensing-faq/)
- [サブスクリプションのセットアップと管理（ユーザー向け）](https://docs.gitlab.com/ee/subscriptions/)

## トゥルーアップ、シート追加、ユーザー

### ユーザー数: トゥルーアップ、アドオン、ライセンス超過ユーザー

#### トゥルーアップとは何ですか？

トゥルーアップとは、前年中にライセンス数を超過した顧客に対する追払い（バックペイメント）です。
私たちはトゥルーアップモデルを採用することで、ライセンスがクライアントの導入の障壁にならないようにしています。

#### トゥルーアップエラーはなぜ発生しますか？

更新時に、顧客がライセンスに必要なトゥルーアップユーザー数を誤って計算してしまう場合があります。

トゥルーアップは、管理者ダッシュボードで収集されたライセンス超過ユーザー数と一致している必要があります。一致しない場合、ライセンスのアクティベーションが失敗します。

例:

顧客がサブスクリプション開始時に 10 ユーザーを購入し、サブスクリプション年間中に 12 名のユーザーがライセンスに登録されて 2 名追加された場合、管理者ダッシュボードにはライセンス超過 2 ユーザーと表示されます。
更新時には、次の更新サブスクリプションに希望するユーザー数とともに、ライセンス超過した 2 名分（トゥルーアップユーザーとして）の支払いも必要になります。
トゥルーアップが追加されていない、またはライセンス超過ユーザー数が誤っている場合、ライセンスキーは機能しません。

顧客は、前年より少ない人数であっても、希望する人数で更新することができます。ただし、トゥルーアップ分は全額支払う必要があります。

購入に必要なライセンス数の確認に問題がある顧客には、[スクリーンショットをリクエスト](/handbook/business-technology/enterprise-applications/entapps-crm/quote-to-cash/troubleshooting/#how-to-ask-the-customer-for-a-screenshot-needed-for-users-over-license-with-self-managed)するか、[バージョンアプリケーション](https://version.gitlab.com/)から利用状況 Ping データにアクセスすることができます。
利用状況 Ping を通じたデータが利用できない場合は、インスタンスで使用状況 Ping が無効になっていると考えられ、手動でこの情報を取得する必要があります。

**顧客の質問: 管理者ダッシュボードの「Maximum Users」と「Users」に差異があるのはなぜですか？（セルフマネージド）**

サブスクリプション期間中、インスタンスは毎日のアクティブユーザー数を記録します。

以下のユーザーは請求対象のアクティブユーザーとして**カウントされません**:

- Ultimate プランのゲストユーザー
- Support Bot や Alert Bot などの GitLab 自動生成ボット
- ゴーストユーザー
- ブロックされたユーザー
- 非アクティブ化されたユーザー

インスタンスの「Maximum Users」カウントは、このアクティブユーザー数の記録リストを参照し、最大値を表示します。

**顧客の質問: GitLab のセルフマネージドインスタンスにユーザーシートを追加するにはどうすればよいですか？**

顧客への案内:

>>>
- [CustomersDot](https://customers.gitlab.com) に移動し、GitLab.com アカウントでサインインするか、[ワンタイムサインインリンクをリクエスト](https://docs.gitlab.com/ee/subscriptions/customers_portal.html#sign-in-to-customers-portal)してください
- `Manage Purchases` に移動します
- ユーザーを追加したいサブスクリプションを探し、`Add more seats` ボタンをクリックします
- 追加したいユーザー数を入力します（例: 50 ユーザーが 60 ユーザーにしたい場合は 10 を入力）
- `Proceed to checkout` をクリックして購入を完了します
- 修正されたライセンスキーがメールで送付されます
>>>

## ライセンス

### ライセンスとは何ですか？

- ライセンスは**セルフマネージド**の顧客またはトライアルにのみ生成されます。SaaS はライセンスを使用しません。
- ライセンスは CustomersDot アプリケーションによって生成され、顧客にライセンスキーがメールで送付されます。ライセンスは CustomersDot アプリケーション内でも確認できます。
- ライセンスキーを手動で生成することも可能です。
- ライセンスまたはバージョンアプリケーションへのアクセスが必要な場合は、[アクセスリクエストを開き](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request)、`GitLab DEV (required for license and version access)` の行以外のすべてのシステムを削除してください。
dev の認証情報を使用して、`GitLab でログイン` でライセンスおよびバージョンアプリにOAuth 認証するため、他の GitLab 認証情報と区別できるよう保存してください。

### ライセンスが送信されたことを確認するにはどうすればよいですか？

ライセンスが送信された場合、自動か手動かを問わず、SFDC のコンタクトレコードにアクティビティが記録されます。

### セルフマネージドでのライセンス超過ユーザーに必要なスクリーンショットを顧客に依頼する方法

顧客への案内:

>>>
更新についてより適切なサポートを提供するために、追加情報が必要です。以下の手順に従ったスクリーンショットを提供していただけますか？

1. 管理者エリアに移動します
1. [こちら](https://docs.gitlab.com/ee/administration/license_file.html#view-license-details-and-history)に記載のとおり `License` をクリックして送信してください
   - GitLab.com の場合
1. グループ設定に移動します
1. 請求に移動します
   - そこに表示されている Maximum Users と Users over License の詳細を共有いただければ、見積もりを送付できます。
>>>

### サポートにライセンスの再送を依頼するにはどうすればよいですか？

`License Issue` テンプレートを使用して [Issue を開いてください](https://gitlab.com/gitlab-com/support/internal-requests/issues/new?issuable_template=license%20issue)。

### license.gitlab を使用したセルフマネージドインスタンスのライセンスオーナーを変更するにはどうすればよいですか？

2 つの方法があります:

サポートリクエスト

[Issue を開いて](https://gitlab.com/gitlab-com/support/internal-requests/issues/new?issuable_template=license%20issue)、サポートに依頼してください。

セルフサービス: CustomersDot

1. [CustomersDot](https://customers.gitlab.com/admin) 管理者ダッシュボードに移動します
2. 左側のサイドメニューから「Licenses」を選択します
3. 検索オプションを使用して会社のアカウントを探します
4. 送信が必要な最新のライセンスを選択します
5. 下部までスクロールして「duplicate license」を選択します
6. ライセンスを複製した後、メールアドレスを変更します

### ライセンスが手動で生成される場合はどんな時ですか？

ライセンスはセルフマネージドにのみ適用されます。

- 問題やエラーを修正するため: これは通常、顧客が Web ストアを使用して更新を試み、システムが期待する内容と一致しないユーザー数を入力した後の更新前後に発生します。
- 顧客が Ultimate 以外の異なる階層をトライアルするため。
- リセラーの更新とアドオンで異なる割引率がある場合。このシナリオでは、同じ製品の 2 行の注文が作成されますが、このような場合に自動的にライセンスが生成されると最初の製品行のみが取り込まれ、完全ではないため、手動でのライセンス作成が必要です。
- ライセンスは、マルチイヤー契約でアドオンがある顧客に対して手動で生成される場合があります。

### トライアルまたはトゥルーアップ問題を修正するためのライセンス手動生成

*注: GitLab.com サブスクリプションにはライセンスキーは提供されません*

[Issue を開いて](https://gitlab.com/gitlab-com/support/internal-requests/issues/new?issuable_template=license%20issue)、サポートに依頼してください。

トライアルライセンスの場合:

1. [CustomersDot](https://customers.gitlab.com/admin) 管理者ダッシュボードに移動します
2. サイドメニューから「Licenses」を選択します
3. 顧客名（Salesforce に記載されているとおり正確に）またはメールアドレスのドメイン名で検索します
4. ライセンスが表示されると、1 件または複数件ある場合があります
    - `expires at` 日付に基づいて最新のライセンスに移動します
    - `Name` をクリックします
    - `duplicate license` までスクロールします
    - 正しいユーザー数を入力します
    - トライアルであることを示すチェックボックスをオンにします
    - プランを選択します: `starts at` と `expires at` がトライアルの正確な日付を反映していることを確認します。*ライセンスは取り消せない*ため、誤って有効期限を 1 年後に設定すると、1 年間の無料アクセスを許可してしまいます
    - メモを追加します
    - `Create License` をクリックします
5. ライセンスは入力したメールアドレスに自動的に送信され、その画面からダウンロードして見込み客に直接添付ファイルとして送信することもできます。

トゥルーアップ問題を修正するためのライセンス生成（トライアル以外）

1. [CustomersDot](https://customers.gitlab.com/admin) 管理者ダッシュボードに移動します
2. サイドメニューから「Licenses」を選択します
3. 顧客名（Salesforce に記載されているとおり正確に）またはメールアドレスのドメイン名で検索します
4. ライセンスが表示されると、1 件または複数件ある場合があります
    - `expires at` 日付に基づいて最新のライセンスに移動します
    - `Name` をクリックします
    - `duplicate license` までスクロールします
    - 正しいユーザー数またはトゥルーアップ数を入力します
    - `starts at` と `expires at` の日付が変更されていないことを確認します
    - ライセンスを修正する理由と、トゥルーアップ調整を承認したマネージャーの名前をメモに追加します
    - `Create License` をクリックします
5. ライセンスはファイルに登録されているメールアドレスに自動的に送信され、その画面からダウンロードして見込み客に直接添付ファイルとして送信することもできます。

## 利用規約（EULA / TOS / T&C）

### 概要

エンドユーザーライセンス契約（EULA）、利用規約（TOS）、または条件（T&C）は、このドキュメントでは総称して「Terms（利用規約）」と呼びます。利用規約はすべての顧客に適用され、トライアル版であっても GitLab（セルフマネージドまたは .com）を使用する前に同意する必要があります。

### 利用規約への同意が必要な場合はいつですか？

- Web ストアを通じて購入する顧客は、購入プロセス中に利用規約への同意が必要です。
- 営業から購入する顧客は、注文書に署名することで利用規約に同意します。
- 製品のトライアルを希望するユーザー。
- ライセンスをインスタンスにアップロードしたい顧客。

### EULA の問題はどうすればよいですか？

- EULA の問題については [Issue を開いてください](https://gitlab.com/gitlab-com/support/internal-requests/issues/new?issuable_template=EULA)
- ライセンスの問題については [Issue を開いてください](https://gitlab.com/gitlab-com/support/internal-requests/issues/new?issuable_template=license%20issue)

### EULA は誰が承認しますか？

利用規約は、セルフマネージドインスタンスにライセンスをインストールする際に承認されます。

### 利用規約（EULA / T&C / TOS）とライセンスの違いは何ですか？

- *EULA（エンドユーザーライセンス契約）*または *T&C（利用条件）*は、顧客とユーザーがソフトウェアを使用する前に同意しなければならない使用条件とプライバシーポリシーの法的契約です。
    詳細は[企業ウェブサイト](https://about.gitlab.com/terms/)でご確認いただけます。

- *ライセンス*は、開始日と終了日を持ち、顧客のサブスクリプションやトライアルに紐付けられた文字列です。
    ライセンスを適用しないと、セルフマネージドのソフトウェアは正常に機能しません。
    利用規約が承認された**後**に、顧客にメールで送付されるか、ダウンロードで取得できます。

### EULA が送信されたかどうかを確認する方法は？

EULA はエンドユーザーに送信されなくなりました。
利用規約は、セルフマネージドインスタンスにライセンスをインストールする際に承認されます。

## トライアル

### SaaS 顧客のトライアルをリクエストするにはどうすればよいですか？

`Plan Change Request` [テンプレート](https://gitlab.com/gitlab-com/support/internal-requests/issues)を使用して Issue を提出してください。

### トライアルはどのくらい続きますか？終了日はどこで確認できますか？

30 日間です。CustomersDot 管理者でネームスペースがトライアル中の場合、終了日を確認できます。

### 顧客の SaaS トライアルを延長するにはどうすればよいですか？

トライアル延長については [Issue を開いてください](https://gitlab.com/gitlab-com/support/internal-requests/issues/new?issuable_template=Trial%20Extension)。

### 顧客に Gold または Ultimate 以外の階層をリクエストするにはどうすればよいですか？

1. `Plan Change Request` テンプレートを使用して [Issue を開いてください](https://gitlab.com/gitlab-com/support/internal-requests/issues/new?issuable_template=Plan%20Change%20Request)。
    - **注意**: ユーザーや GitLab 従業員がネームスペースで Bronze または Silver のトライアルを直接開始することはまだできません。
    - 必要な場合は、ユーザーに Gold トライアルを開始させてから、上記リンクを使用して `Plan Change Request` テンプレートで Issue を開き、プランを手動で変更してもらうようにしてください。
この機能の実装については[このエピック](https://gitlab.com/groups/gitlab-org/-/epics/3475)で議論されています。

### 顧客の質問: SaaS トライアルをセットアップするにはどうすればよいですか？

顧客への案内:

>>>
- グループを作成しましたか？
- まだの場合は作成してください。このドキュメントが参考になります: <https://docs.gitlab.com/ee/user/group/#create-a-new-group>
- グループを作成したら、そのグループに関連付けられたメールアドレスを使用してこちらからトライアルを再試行してください: <https://customers.gitlab.com/trials/new?gl_com=true>
- それでもエラーが発生する場合はお知らせください。サポートがトライアルグループを手動でアップグレードします。
>>>

### ヘルプが必要なトライアルユーザー

- トライアルユーザーは、営業支援がない限りサポートへのアクセス権を持ちません
- 営業担当と協力している見込み客がヘルプを必要とする場合は、`trials@gitlab.zendesk.com` にメールを送付してください。SLA はありません

## サブスクリプションまたはプランの問題

### 顧客が購入したサブスクリプションを GitLab.com グループに適用できない

ユーザーに[サポートチケットを開く](https://support.gitlab.com/hc/en-us/requests/new?ticket_form_id=334447)よう依頼してください。

### GitLab.com ユーザーまたはグループのプランを変更したい

`Plan Change Request` テンプレートを使用して [Issue を開いてください](https://gitlab.com/gitlab-com/support/internal-requests/issues/new?issuable_template=Plan%20Change%20Request)。

### 更新後に Free / Core にダウングレードされてしまった場合

まず customers.gitlab.com にアクセスして、ネームスペースがリンクされているか確認してください。
リンクされていない場合は、顧客に Web ストアアカウントにログインして「change linked namespace」をクリックするよう依頼してください。
これで問題が解決されます。
上記の方法で解決しない場合は、顧客にサポートチケットを開くよう依頼してください。

## 顧客からのよくある質問

### 顧客の質問: コンピュートミニッツの使用量をどこで確認できますか？

GitLab.com の個人ユーザーは、ユーザー設定に移動し、一番下に `pipeline quotas` があり、使用量が表示されます。
グループ設定にも同様のページがありますが、`Usage Quotas` が表示されます。

### 顧客の質問: 個人アカウントにサブスクリプションを購入したが、グループに適用するにはどうすればよいですか？

*グループに再関連付けするだけです。*

顧客への案内:

>>>
手順:

- メール **EMAIL** を使用して <https://customers.gitlab.com/customers/sign_in> にログインします
- **Manage Purchases** に移動します
- **Change linked group** を選択します
- **This subscription is for** ドロップダウンから希望のグループを選択します
- Proceed to checkout を選択します

注: グループ（サブグループおよびネストされたプロジェクトを含む）に関連付けられているユーザー数がサブスクリプションに含まれるユーザー数を超えている場合、この最後のステップで超過ユーザー分の料金が請求されます。
>>>

### 顧客をアップグレードするにはどうすればよいですか？

1. [Salesforce](https://login.salesforce.com/) で顧客のアカウントに移動します。
1. `opportunities` に移動し、最新の購入をクリックします: `renewal` または `new business` のはずです（`add-on` ではありません）
1. オポチュニティビューから `New Add On Opportunity` をクリックします
   - これによってアップグレード用の新しいオポチュニティが作成されます
   - オポチュニティに適切な名前を付けます
   - 新しいアドオンオポチュニティビューから `New Quote` をクリックします
   - [サブスクリプションを修正します](/handbook/sales/field-operations/sales-operations/deal-desk/#amend-subscription-quote)
     - 新しい SKU を追加します
     - 古いアイテムを削除します
     - `Save`
     - PDF を生成します

## 請求

### 直接注文でクレジットカードで支払う方法

**セルフマネージド**

顧客への案内:

>>>
- 注文を確定するには、2 ページ目に署名・日付を記入してすべてのページを返送してください。
- その後、ライセンスキーと請求書が記載された自動メールが届き、クレジットカードに請求されます。

*顧客が customers.gitlab.com の Web ストア内の支払い方法にクレジットカードを追加していることを確認してください。*

**SaaS**
顧客への案内:

>>>
注文を確定するには、2 ページ目に署名・日付を記入してすべてのページを返送してください。
その後、グループが新しいユーザーでアップグレードされ、請求書が届き、クレジットカードに請求されます。
>>>

**顧客がサブスクリプションをグループに適切に適用するために、アカウントと*グループ*の両方を作成していることを確認してください。**

### クレジットカードによる支払い（新規顧客）e-Sertifi

1. 見積もりオブジェクト内から開始します（オポチュニティページからは*行いません*）
1. Sertifi e-sign
    - メール招待メッセージ
    - メールアドレスを入力して `next` をクリック
    - `related notes and attachments` をクリックして正しい見積もりを選択
    - `preview/prefill document` をクリック
1. 左側のバーで `payment authorization without address` に移動します
1. 署名フィールドの右にボックスを移動します
1. `Save`
1. `Exit`
1. `send for signature`

*署名済みの見積もりが返送された場合、Deal Desk にチャッターで通知する必要はありません。*

または

*オポチュニティのチャッターで Billing Ops にこのリクエストをタグ付けします*

### 直接注文で電信送金で支払う方法

顧客への案内:

**セルフマネージド:**

>>>
注文を確定するには、2 ページ目に署名・日付を記入してすべてのページを返送してください。
その後、ライセンスキーと電信送金用の請求書が記載された自動メールが届きます。
>>>

**SaaS**

添付の見積もりをご確認ください。
注文を確定するには、2 ページ目に署名・日付を記入してすべてのページを返送してください。

その後、グループが新しいユーザーでアップグレードされ、電信送金用の請求書が届きます。
>>>

*注: SaaS にはライセンスはありません。*

### 顧客の質問: 返金またはダウングレードを申請するにはどうすればよいですか？

*顧客が現在使用している製品のダウングレードをリクエストする場合、購入後 45 日以内は返金を処理できませんが、プランをダウングレードすることは可能です。*

顧客自身が返金を申請できます:

顧客への案内:

>>>
`AR@gitlab.com` に直接連絡することで、この請求を取り消すことができます

1. 請求書を添付します
1. 2 回目の請求が誤購入であったことを説明して返金を申請します
1. 元の購入から 45 日以内に行う必要があります

ご不明な点があればお知らせください！
>>>

### 顧客のために返金またはダウングレードを実行するにはどうすればよいですか？

顧客が現在使用している製品のダウングレードをリクエストする場合、購入後 45 日以内は返金を処理できませんが、プランをダウングレードすることは可能です。
顧客のために返金を実行できます:

- `ar@gitlab.com` にメールを送って顧客への返金を申請します。
- すべてのサブスクリプション情報と SFDC アカウントレコードへのリンクを含めます。

## 見積もり

### 見積もりの「Sold to」と「Bill to」の意味は何ですか？

- `Sold To` メールアドレスは、customers.gitlab.com のアカウントが生成され、ライセンスキーが送付されるアドレスです
- `Bill To` メールアドレスは、最終請求書が記載された自動メッセージのみが送付されるアドレスです

### エンティティ

すべての Web 直接注文は GitLab Inc. となります。
ただし、顧客が以前 Web 直接で購入した、営業支援による更新が予定されている場合で、顧客が別のエンティティが存在する国（英国、ドイツ、オランダ、オーストラリア）に所在する場合、更新見積もりには正しいエンティティを反映させる必要があります。
例: 英国の顧客が Web 直接で購入した場合、（営業支援の場合）更新見積もりには GitLab Ltd.（英国エンティティ）を反映させる必要があります。
これにより、税 ID や VAT ID の申請が行われ、顧客が税金や VAT を支払わなくてもよくなります。

以下の画像は、見積もりオブジェクト内でエンティティを US に変更する方法を示しています。
<img src="/images/business-technology/enterprise-applications/applications/troubleshooting/entity2.png" class="full-width" alt="">

## 見積もりのチェックリスト

### アドオンオポチュニティの見積もり

- アカウントに住所はありますか？
- コンタクトに住所はありますか？
- 元のエンティティは何で、アドオン見積もりと一致していますか？
- 支払い方法は正しいですか - クレジットカードか電信送金か？

### 通常の見積もりに必要な情報

- 会社のフルネーム
- 会社の完全な住所
- Sold To コンタクトの役職、氏名、メールアドレス
- Bill To コンタクトの役職、氏名、メールアドレス
- プラン
- ユーザー数

### 更新のためのコピー＆ペースト

1. 顧客の管理者エリアのスクリーンショット
1. Sold To コンタクトの氏名、メールアドレス、郵送先住所
1. Bill To コンタクトの氏名、メールアドレス、郵送先住所
1. プラン
1. ユーザー数

### リセラー見積もりに必要な情報

1. リセラー名
1. コンタクト名
1. コンタクトメールアドレス
1. リセラーの住所
1. エンドユーザー会社名
1. コンタクト名
1. コンタクトメールアドレス

## 顧客への一般的なコミュニケーション

### 予算

質問内容:

> 使用ケースを検討する際に注意すべき予算の制約はありますか？

## 必要なドキュメント

- 更新や購入プロセスのバグや問題の報告を受けた場合はどうすればよいですか？
- 営業支援による電信送金を処理するための手順はどこにありますか？
