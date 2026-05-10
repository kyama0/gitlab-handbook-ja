---
title: 確認メール
category: GitLab.com
subcategory: Accounts
description: "お客様から確認メールを受信していないと報告されたケースのワークフロー"
upstream_path: /handbook/support/workflows/confirmation_emails/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T20:14:55Z"
translator: claude
stale: false
---

## 概要

このワークフローは、ユーザーが確認メールを受信していないと述べているケースを扱います。確認メール内のアクティベーショントークンは24時間のみ有効です。それを過ぎると、ユーザーは新しい確認メールが必要となります。

## **Stage 0:** チケットのトリアージ

チケットに対応する前に、`SaaS Account` フォームと `Did not receive confirmation email` 問題タイプで正しくトリアージされていることを確認し、
[SaaS Account Ticket Helper](/handbook/security/customer-support-operations/zendesk/apps/global#gitlab-super-app) アプリケーションがアクティブになるようにします。

ユーザーが正しい問題タイプをすでに選択している場合、エージェントが初めてチケットを開いたときに自動化がアクティブになります。何らかの理由で SaaS Account Ticket Helper アプリケーションが問題を解決できなかった場合は、以下のセクションの手順に従って手動で解決します。

## **Stage 1:** アカウントの特定

問題を解決する前に、まず該当するアカウントを特定する必要があります。これは、[GitLab User Lookup App](#method-1-check-gitlab-user-lookup-app) または [GitLab Admin](#method-2-check-gitlab-admin) のいずれかを確認することで実行できます。

### Method 1: GitLab User Lookup Appを確認する {#method-1-check-gitlab-user-lookup-app}

1. チケットを表示中、Zendesk インターフェースの右上にある `Apps` ボタンをクリックします。
1. `GitLab User Lookup` アプリまでスクロールダウンします。
1. 結果を確認します。アプリが、ユーザーから提供されたユーザー名またはメールアドレスに関連するアカウントを発見したかを確認します。ユーザー名検索のみで結果が返された場合、提供された `Admin Link` に移動して、アカウントに記載されているメールアドレスを確認します。
1. Check GitLab Admin の Step 2 に進みます。

**アカウントが見つからなかった場合** は、Zendeskマクロ [`Support::SaaS::Gitlab.com::Account does not exist`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Account%20does%20not%20exist.md?ref_type=heads) を使用するか、適用可能と判断する場合は [`General::Verify account self-managed or .com`](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/General/Verify%20account%20self-managed%20or%20.com.yaml) を使用し、ユーザーからのフォローアップを待ちます。

### Method 2: GitLab Adminを確認する {#method-2-check-gitlab-admin}

1. GitLab.com の Admin Area で、ユーザー名で [ユーザーを検索](https://gitlab.com/admin/users) してアカウントが存在することを確認します。または、ブラウザで [API](https://gitlab.com/api/v4/users?search=email@email.test) または [ChatOps](/handbook/support/workflows/chatops#user) を使用して検索します。
1. メールアドレスをユーザーが報告したものと照合し、次のいずれかの修正を実行します:
    - 抑制（suppression）が原因で確認メールを受信していない可能性があります。👉 [Stage 2: Fix](#stage-2-fix) を参照してください。

## **Stage 2:** 修正 {#stage-2-fix}

チケットが以下を持っていることを確認します:

- フォーム `SaaS Account`
- カテゴリ、たとえば `Cannot receive emails`
- サブカテゴリ、たとえば `Cannot get confirmation emails`
- 影響を受けるメールアドレス

Zendesk は自動的に suppression を確認し、見つかった場合は削除します。

自動化により、お客様にアカウント上に suppression があったかどうかと、次に取れるステップを伝えるメールが送信されます。

### タイポの修正

2023-08-07時点で、未確認のユーザーは GitLab.com で [一定の日数後に削除](https://docs.gitlab.com/user/gitlab_com/#confirmation-settings) されます。

#### フリーユーザー

フリーユーザーは、GitLab がアカウントを自動的に削除するのを待つ必要があります。

#### 有料ユーザー

有料ユーザーには GitLab がアカウントを自動的に削除するのを待つことを推奨しますが、必要であればマネージャーの承認のもとで Support がメールアドレスを更新することは可能です。

### Zendesk で suppression を手動で削除する {#manually-remove-a-suppression-in-zendesk}

1. Zendesk インターフェースの右上にある `Apps` ボタンをクリックします。
1. tag locker アプリの下にある `SaaS Account Ticket Helper` アプリまでスクロールダウンします。
1. `Email Suppressions` ボタンをクリックします。
1. 検索フィールドを使用してメールアドレスを検索します。
1. suppression が見つかった場合、必要に応じて `copy` ボタンをクリックして、Mailgun のログをクリップボードに保存し、それをチケットの社内コメントに貼り付けることもできます。
1. `Remove the suppression?` ボタンをクリックします。
1. ユーザーに新しい確認メールを送信します。

このプロセスがうまくいかない場合は、Mailgun で suppression を削除する必要があります。👉 [Mailgunでsuppressionを削除する](#manually-remove-a-suppression-in-mailgun) を参照してください。

### Mailgun で suppression を手動で削除する {#manually-remove-a-suppression-in-mailgun}

何らかの理由で `SaaS Account Ticket Helper` がうまくいかない場合は、Mailgun で直接 suppression を削除できます:

1. 左側ナビゲーションバーの `Suppressions` をクリックします。
1. 結果がロードされるまで少し待ってから検索します。
1. ページの上部で `mg.gitlab.com` がドメインとして設定されていることを確認します。
1. 確認するメールアドレスを `Search for recipients` 検索バーに入力して検索を実行します。
1. エントリの横にある `Delete` ボタンをクリックし、選択を確認して suppression を削除します。
1. ユーザーに新しい確認メールを送信します。👉 [確認メールを再送信する](#stage-3-resend-confirmation-email) を参照してください。

## **Stage 3:** 確認メールの再送信 {#stage-3-resend-confirmation-email}

### プライマリメール

問題が修正された後、メールがアカウント上のプライマリメールである場合、ユーザーに [新しい確認メール](https://gitlab.com/users/confirmation/new) を送信できます。その後、ユーザーに新しい確認メールを送信したことを伝え、受信トレイとスパムフォルダを確認するよう依頼します。

>**注意:** ユーザーがプライマリメールを変更した場合、これは機能しません。👉 [Secondary Email](#secondary-email) を参照してください。

### セカンダリメール {#secondary-email}

ユーザーに、サインインして [https://gitlab.com/-/profile/emails](https://gitlab.com/-/profile/emails) にアクセスし、プロフィールから新しい確認メールをトリガーするように指示します。

### 異常な状態

ユーザーが未確認だが、プライマリメールアドレスが未確認のメールアドレスと一致しない場合（[こちらの社内例](https://gitlab.com/gitlab-org/gitlab/-/issues/239098#note_399726260) を参照）、解決方法が2つあります:

1. ユーザーに代理ログイン（impersonate）し、Settings > Profile ページの Email の下の「Resend confirmation email」をクリックします。
1. [console escalation 社内リクエスト](https://gitlab.com/gitlab-com/support/internal-requests/-/issues/new?issuable_template=GitLab.com%20Console%20Escalation) を提出して、`unconfirmed_email` を `nil` に設定します。

## Customers Portal アカウントのメール

Customers Portal アカウントメールに問題がある場合、ユーザーに [新しい Customers Portal 確認メール](https://customers.gitlab.com/customers/confirmation/new) を送信できます。その後、ユーザーに新しい確認メールを送信したことを伝え、受信トレイとスパムフォルダを確認するよう依頼します。

## エクストラ

### Mailgun ログを確認する {#checking-mailgun-logs}

NOTE:
`mg.gitlab.com` ドメインには Support のトラブルシューティングに関連するデータが含まれています。このリストはどのページのドロップダウンでもドメインオプションとして表示されません。Send > Sending > Domains の下でドメインを選択する必要があります。デフォルトで表示される email.mg.gitlab.com ドメインがありますが、これは機能しません。

最初の試みでメールシステムが通過できなかった場合（通常はサーバーが存在しないなどと言うため）、メールサーバーはそれ以上のメール送信に suppression をかけます。

これは、私たちの側からメールが正常に配信されたかを確認するのに有用です。これは、エラーがユーザーのメールプロバイダーにある可能性があることを意味します。

1. Okta ダッシュボードの Mailgun SSO タイルを利用して [Mailgun](https://app.mailgun.com/app/dashboard) にログインします。
1. 左側ナビゲーションバーの `Send` をクリックします。
1. `Logs` をクリックします。
1. アクティビティグラフの上で `mg.gitlab.com` がドメインとして設定されていることを確認します。
1. 確認するメールアドレスを検索バーに入力して検索し、そのアドレスにメールが配信されているかを確認するため結果をスキャンします。
    - メールが遅延している場合は、ユーザーに返信して待つよう依頼します。
    - suppression によってメールが弾かれている場合（ログ内の `Not delivering to previously bounced address` メッセージで明らか）は、[Zendesk で suppression を削除する](#manually-remove-a-suppression-in-zendesk) または [Mailgun で suppression を削除する](#manually-remove-a-suppression-in-mailgun) に進みます。
    - メールが `Delivered` としてマークされており、`delivery-status` の下のレスポンスコードが `"code": 250` の場合、これはユーザーのメールサーバーが受信を確認応答し、メール配信が成功したことを示します。

#### Mailgun の新しいログ検索を使用する

Mailgun は新しい検索ページを導入しました。これは [こちら](https://www.mailgun.com/blog/product/mailgun-announces-improvements-to-logs-feature-to-increase-visibility-into-deliverability-problems/) でアナウンスされています。古い検索ページの上部にある「Check out our new reporting logs experience with updated functionality here」とラベル付けされた情報ボックスのリンクをクリックすることでこの新しい検索を使用することを選択できます。または、こちらでも見つけられます: <https://app.mailgun.com/mg/reporting/logs>。注: この新しい検索機能は将来的にデフォルトの検索になる可能性があります。

Mailgun の新しい検索機能では、Support Engineer がフィルタを使用して検索結果を絞り込めます。この新しい検索の使用により、上記の手順がやや変わります。Support Engineer は新しい検索を使って、必要に応じてより詳細な検索を実行することもできます。これには、特定のドメインに送信されたすべてのメッセージの検索が含まれます。手順は次のとおりです:

1. Okta ダッシュボードの Mailgun SSO タイルを利用して [Mailgun](https://app.mailgun.com/app/dashboard) にログインします。
1. 左側ナビゲーションバーの `Send` をクリックします。
1. `Logs` をクリックします。
1. `Controls` ボックス上部の日付範囲ピッカーを使用して日付範囲を選択します。
1. 日付範囲ピッカーの右にある `Filters` ボタンをクリックします。
1. 使用したいフィルタを選択します。suppression を検索するには、ソースとして **To** と **Contains** を使用し、`Enter text` フィールドにユーザーのメールアドレスを入力して `Add` ボタンをクリックします。その後、右下の `Apply` をクリックします。
    - メールが遅延している場合は、ユーザーに返信して待つよう依頼します。
    - suppression によってメールが弾かれている場合（ログ内の `Not delivering to previously bounced address` メッセージで明らか）は、[Zendesk で suppression を削除する](#manually-remove-a-suppression-in-zendesk) または [Mailgun で suppression を削除する](#manually-remove-a-suppression-in-mailgun) に進みます。
    - メールが `Delivered` としてマークされており、`delivery-status` の下のレスポンスコードが `"code": 250` の場合、これはユーザーのメールサーバーが受信を確認応答し、メール配信が成功したことを示します。

Support Engineer は **Status message**、**Status code** などでフィルタすることもできます。たとえば、Support Engineer は **Status code** **Equals** "550" と **To** **Contains** "gmail.com" でフィルタして、ユーザーの受信トレイが存在しないために拒否されたすべての未配信メッセージを `@gmail.com` アドレス宛で見つけることもできます。

### Mailgun でメールを表示・再送信する方法

これは送信されたメールの内容を確認するためのものです:

1. [Mailgunログを確認する](#checking-mailgun-logs) セクションの手順に従って Mailgun でメールを特定します - メールの件名は「Verify your identity」である必要があります。
1. ログエントリの右端にある省略記号 `...` アイコンをクリックして、ログ詳細にアクセスします。
1. ログ詳細で、3番目のタブ「quick view」に移動して、フルメールを表示します。
![Mailgun email body](static/images/support/workflows/assets/mailgun_email_view.png)

メールを再送信するには:

**重要な注意**: **異なる** メールアドレスへのメール再送信は、マネージャーによって承認され、所有権の確認後に実行される必要があります。*同じメールアドレスに再送信する場合、承認や所有権の確認は不要です。*

1. ログエントリの右端の省略記号 `...` アイコンの上で、「Resend message」ボタンをクリックします。
1. そこからメールアドレスを入力して「Send」を押します。
![Mailgun resend email](static/images/support/workflows/assets/mailgun_ellipsis_menu.png)

### 単一ドメイン上の複数の suppression を特定する

Mailgun では `Suppressions` セクション内で同じドメイン上の複数の suppression を確認することはできませんが、別の方法を使用すれば、抑制されていると疑われるメールアドレスのリストをお客様に求めることなく見つけられます。これを行うには:

1. Okta ダッシュボードの Mailgun SSO アプリを利用して [Mailgun](https://app.mailgun.com/app/dashboard) にログインします。
1. 左側ナビゲーションバーの `Send` をクリックします。
1. `Logs` をクリックします。
1. アクティビティグラフの上で `mg.gitlab.com` がドメインとして設定されていることを確認します。
1. 検索バーで、ユーザー名のワイルドカードとして `*` を使用してお客様のドメインを入力します。
1. `Event is Permanent Fail` のフィルタを追加します。
1. 結果をスキャンします。`Delivery Status Message` が `Not delivering to previously bounced address` のメールアドレスは、いつかの時点で抑制されていたことを意味します。
1. `Suppressions` タブに移動し、前回の検索からのメールアドレスを入力して、現在抑制されているかどうかを確認します。

### ユーザーに代わってのパスワードリセット

ユーザー（フリーまたは有料）がアカウントのプライマリメールを忘れた場合、私たちはこの情報を開示できませんが、ユーザーに代わってパスワードリセットメールを送信できます:

1. アカウントのプライマリメールアドレスをメモします。
1. インコグニートウィンドウを開きます。
1. <https://gitlab.com/users/password/new> に移動します。
1. ユーザーのプライマリメールアドレスでパスワードリセットをトリガーします。
1. オプション - Mailgun に移動し、ユーザーに以下の内容で戻る前にメールが配信されたかを確認します:

> Due to our privacy policies I am unable to reveal what the primary email address is. That being said we have triggered a password reset for the account <username> just now, if you have access to the primary email address for this account you should see an email and be able to perform the password reset steps.
