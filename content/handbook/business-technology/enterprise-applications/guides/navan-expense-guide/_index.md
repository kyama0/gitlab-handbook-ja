---
title: "Navan Expense エンドユーザーガイド"
description: "Navan Expense エンドユーザーガイド"
upstream_path: "/handbook/business-technology/enterprise-applications/guides/navan-expense-guide/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T06:02:44Z"
translator: "claude"
stale: false
lastmod: "2026-03-26T15:23:59-04:00"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Navan Expense とは

Navan Expense は、出張中の経費管理を改善する経費・支払いプラットフォームです。

### Navan Expense へのアクセス方法

**ブラウザ**

Navan Expense は Okta 経由でアクセスできます。プラットフォームにアクセスするには:

- [Okta ホームページ](https://gitlab.okta.com/app/UserHome)にログインします。
- `Navan` タイルを見つけます。
  - *Navan はユーザーがログインした状態で新しいタブで開きます。*
- ページ左上の `Navan Travel` をクリックします。
- `Expenses` を選択します。

**モバイルアプリ**

- お使いの[モバイルアプリストア](https://app.navan.com/app/liquid/user/redirect)からアプリをダウンロードします。
  - Navan モバイルアプリは iOS 15 以降に対応しています。
- アプリを開き、`Sign in with Email` を選択します。

![navan-image-20](/images/business-technology/enterprise-applications/guides/navan-expense-guide/signin.jpg)

- GitLab のメールアドレスを入力し、`Continue` をクリックします。

![navan-image-21](/images/business-technology/enterprise-applications/guides/navan-expense-guide/work-email.png)

- `Sign in with Okta SSO` を選択します。

![navan-image-22](/images/business-technology/enterprise-applications/guides/navan-expense-guide/okta.jpg)


{{% alert title="Note" color="info" %}}
**Note**
*TripActions Liquid* アプリをお持ちの場合は、デバイスから削除してください。
{{% /alert %}}


> モバイルアプリの使い方の詳細については、*[Getting started with Navan expense on mobile](https://app.navan.com/app/helpcenter/articles/expense/myself/getting-started-for-expense-users/navan-expense-on-mobile)* の記事をご確認ください。

## Navan Expense - はじめに

### モバイルでの Navan Expense

モバイルアプリは `My reimbursements`（払い戻し管理）、`My cards`（カード管理）、`My policies`（ポリシー管理）、`My transactions`（取引管理）の 4 つのメインセクションで構成されています。注意が必要なトランザクション（レシートの追加など）は、画面上部の `To dos` セクションに表示されます。右上のバッジから Navan プロフィールにアクセスして、払い戻し用の個人カードやカレンダー連携を管理できます。

#### My reimbursements（払い戻し管理）

現金で支払いまたは個人カードで請求された業務上の取引を Navan モバイルアプリから払い戻し申請として登録します。このフォルダを使って、払い戻し申請中のトランザクションを追跡します。

- **Submitted（申請済み）**: 管理者レビュー中または給与計算での払い戻し待ちのトランザクション。対応が必要なトランザクションには紫色のマーカーが付きます。リストから該当するものを選択して必要な対応を行うことで解決できます。
- **Scheduled（予定済み）**: 承認されて払い戻し予定日別に一覧表示されたトランザクション。
- **Deposited（振込済み）**: 振り込まれたトランザクションと振込日。
- **Rejected（却下済み）**: 承認者によって却下されたトランザクション。

![liquid-image-14](/images/business-technology/enterprise-applications/guides/navan-expense-guide/reimbursement-process.png)

#### My policies（ポリシー管理）

ポリシータブでは、経費の種類別に割り当てられたポリシーの概要を確認できます。このセクションは Finance チームが割り当てた特定のポリシーに基づいてカスタマイズされるため、ユーザーによって表示内容が異なります。

![liquid-image-23](/images/business-technology/enterprise-applications/guides/navan-expense-guide/policies.png)

#### My transactions（取引管理）

Navan Expense の 4 種類のトランザクションは、`My transactions` セクション内のフォルダに整理されています: `Drafts`（下書き）、`Navan card`（該当する場合）、`Purchase cards`（該当する場合）、`Manual`（手動）。設定によっては、これらの種類の一部またはすべてがタブの下に表示されます。

![liquid-image-24](/images/business-technology/enterprise-applications/guides/navan-expense-guide/transactions.png)

#### To dos（要対応）

トランザクションに注意や追加対応が必要な場合、`To dos` セクションの以下のカテゴリのいずれかに配置されます:

- **Missing receipt（レシート未添付）**: 会社のポリシーに基づき、特定のトランザクションにはレシートの添付が必要な場合があります。
- **You need to pay（支払いが必要）**: 管理者またはマネージャーに承認されていない、ポリシー外のトランザクションで、全額または一部を会社に返金する必要があります。
- **Info needed（情報が必要）**: 承認者から追加情報の提供を求められているトランザクション。
- **Needs your review（確認が必要）**: 会社の管理者が設定したカスタムフィールドへの入力が必要な、Navan カードによるトランザクション。
- **Drafts（下書き）**: Navan にインポートされたレシートや、下書きとして保存された手動経費は、申請準備ができるまで保存されます。

#### Profile（プロフィール）

アプリ右上の `Profile` アイコンをタップし、`Expense settings` を選択してプロフィールにアクセスします。このページから以下の機能を管理できます:

- **Calendar integration（カレンダー連携）**: 有効にすると、カードのトランザクションに関連するカレンダー内のイベント情報（名前、場所、参加者など）を取得し、トランザクションの詳細を自動入力します。
- **Personal cards（個人カード）**: 個人の支払い方法を連携して、自己負担の経費をインポートしたり、Navan カードで承認されなかった請求を会社に返金したりします。
- **Personal bank account（個人銀行口座）**: 個人銀行口座を連携して、承認された手動トランザクション（自己負担経費）の払い戻しを受け取ります。
- **Call or Email support（電話またはメールサポート）**: 電話またはメールでサポートエージェントにすばやく連絡できます。

> モバイルアプリの使い方については、*[Getting started with Navan expense on mobile](https://app.navan.com/app/helpcenter/articles/expense/myself/getting-started-for-expense-users/navan-expense-on-mobile)* の記事をご確認ください。

### Web での Navan Expense

ウェブブラウザから Navan アカウントにサインインし、左側の `Navan Expense` タブをクリックし、Expense セクションの `Expense` を選択します。Navan Expense ウェブアプリには 3 つの主要コンポーネントがあります: `Transactions`（すべて、To-do、My money、Drafts）、`Cards`、`Settings`。

![liquid-image-25](/images/business-technology/enterprise-applications/guides/navan-expense-guide/components.png)

#### Transactions（All）

`All` タブで、手動追加トランザクション、Navan カードトランザクション、購買カードトランザクションをすべて表示・管理します。各トランザクションには加盟店名、金額、取引日、ステータスが表示されます。トランザクションをクリックすると、詳細の確認、編集可能なフィールドの変更、または経費のステータスに応じたアクションを実行できます。対応が必要なトランザクションは To-do タブにも分類されます。

#### Transactions（To-do）

To-do タブには、追加情報またはアクションが必要なトランザクションが表示されます。以下の各カテゴリの横にある下矢印をクリックして関連するトランザクションを表示します:

- Missing receipt（レシート未添付）: このセクションのトランザクションは、割り当てられた経費ポリシーに従ってレシートが必要です。トランザクションの横の「Upload」をクリックしてレシートを追加し、レシート画像ファイルをドラッグ＆ドロップするか `Upload file(s)` をクリックして保存済みの画像ファイルを選択します。
- Repayment needed（返金が必要）: このセクションのトランザクションはポリシー外であり、GitLab への返金が必要です。
- Add more information（追加情報が必要）: このセクションのトランザクションはポリシー外であり、承認者が承認または却下する前に追加情報の提供を求めています。「Add information」をクリックして情報を入力し、「Submit」をクリックします。
- Needs more information（さらなる情報が必要）: このセクションのトランザクションは、Finance チームから要求された追加のトランザクション詳細の入力が必要です。トランザクションを選択し、不足している情報を入力します。

#### Transactions（My money）

`My money` タブでは、トランザクションをステータスに基づいてカテゴリにグループ化し、更新を追跡できます。各カテゴリの横にある下矢印をクリックして関連するトランザクションを表示します。

- **Submitted（申請済み）**: 管理者レビュー中または給与計算での払い戻し待ちのトランザクション。対応が必要なトランザクションには紫色のマーカーが付きます。リストから選択して必要な対応を行うことで解決できます。
- **Scheduled（予定済み）**: 承認されて払い戻し予定日別に一覧表示されたトランザクション。
- **Deposited（振込済み）**: 振り込まれたトランザクションと振込日。
- **Rejected（却下済み）**: 承認者によって却下されたトランザクション。

#### Transactions（Drafts）

`Drafts` タブには、レシート転送またはまだ申請されていない手動トランザクションから作成されたトランザクションが含まれます。トランザクションを選択して確認し、不足している詳細やレシートを追加してから申請するか、後で保存します。

#### ウェブアプリでの手動経費の申請

`Transactions` ページのいずれかのタブから `Add transaction` ボタンを使用して、現金または個人カードを使用した購入のトランザクションを手動で入力します。


{{% alert title="Note" color="info" %}}
**Note**
トランザクション詳細を手動で入力する代わりに個人カードから手動経費をインポートするには、Navan アプリをご利用ください。
{{% /alert %}}


#### Cards（カード）

`Cards` セクションで Navan カードと購買カードを管理します。`Navan card` の画像をクリックするか、リストから `purchase card`（購買カード）を選択してその設定を管理します。各カードについて、カード情報と関連するトランザクション（対応が必要なトランザクションのセクションを含む）が表示される新しいページに移動します。

#### Settings（設定）

設定タブを使用して、カレンダー連携で業務カレンダーを接続したり、承認された手動トランザクションの払い戻しを受け取るための銀行口座を追加したりします。

- **Calendar integration（カレンダー連携）**: 有効にすると、カードのトランザクションに関連するカレンダー内のイベント情報（名前、場所、参加者など）を取得し、トランザクションの詳細を自動入力します。
- **Personal cards（個人カード）**: 個人の支払い方法を連携して、自己負担の経費をインポートしたり、Navan カードで承認されなかった請求を会社に返金したりします。
- **Personal bank account（個人銀行口座）**: 個人銀行口座を連携して、承認された手動トランザクション（自己負担経費）の払い戻しを受け取ります。
- **Call or Email support（電話またはメールサポート）**: 電話またはメールでサポートエージェントにすばやく連絡できます。

#### Support（サポート）

Navan アカウント、カード、トランザクションについてご質問やサポートが必要な場合は、ウェブアプリのいずれかのページからサポートをクリックしてチームにお問い合わせください。

> Navan を Web で使用する方法については、*[How do I use Navan Expense on the web?](https://app.navan.com/app/helpcenter/articles/expense/myself/getting-started-for-expense-users/navan-expense-on-the-web)* の記事をご確認ください。

### Navan Expense への個人銀行情報の連携方法

個人銀行口座または個人カードを Navan に連携することで、手動経費の申請、自己負担経費の払い戻し、および会社への返金を簡単に行えます。


{{% panel header="**IMPORTANT NOTE**" header-bg="danger" %}}

- 個人銀行口座が接続できない場合は、GitLab の通常の給与計算プロセスに従って払い戻しが行われます。
{{% /panel %}}


#### トランザクションのインポート

米国発行の個人カードをお持ちのユーザーは、カードを Navan アカウントに連携して自己負担経費のトランザクションをインポートできます。個人カードを追加すると、カードで行ったトランザクションを確認してインポートできます。インポート用にカードを連携するには:

1. Navan モバイルアプリを開きます。
2. `Profile` アイコンをタップし、`Expense settings` をタップします。
3. `Personal cards` を選択します。
4. `For importing transactions` セクションの `+Add account` をタップし、案内に従って操作します。

#### 払い戻し用の銀行口座の接続

銀行口座を Navan に接続して、自己負担経費の払い戻しを受け取ります。銀行口座は [Plaid](https://plaid.com/en-eu/)（米国の銀行口座のみ）経由で銀行アカウントのログイン情報を入力して連携できます。また、米国の銀行口座および[直接払い戻しが可能な国](/handbook/business-technology/enterprise-applications/guides/navan-expense-guide/#in-what-countries-are-direct-reimbursements-available)の口座は、銀行口座情報を手動で入力することで連携できます。

- カナダの銀行口座の場合、ルーティング番号の形式は 0XXXYYYYY です
  - 電子送金の場合は先頭に 0 を付けてください
  - XXX = 金融機関番号の下 3 桁
  - YYYYY = 支店/トランジット番号の最初の 5 桁


{{% alert color="warning" %}}
接続できるのは一度に 1 つのアカウントのみです。払い戻し用に別のアカウントを追加するには、まず既存のアカウントの連携を解除する必要があります。
{{% /alert %}}


##### モバイルアプリ

**銀行口座へのログイン**

1. Navan アプリで `Profile` アイコンに移動し、`Expense settings` をタップします。
2. `Bank account` をタップします。
3. `Login to bank account` を選択します。
4. 検索バーを使用するかリストから銀行を選択して `Select your bank` を操作します。
5. `Enter your credentials`（認証情報）を入力し、`Submit` をクリックします。

**銀行口座の手動連携**

1. Navan アプリで `Profile` アイコンに移動し、`Expense settings` をタップします。
2. `Bank account` をタップします。
3. `Link bank account manually` を選択します。
4. ドロップダウンメニューで銀行口座が開設された国を選択します。
5. 必要な銀行口座情報を入力します。
6. `Review` をタップし、`Link account` をタップして接続を承認します。

##### ウェブアプリ

1. メニューを開き、`Expenses` を選択します。
2. `Settings` を選択します。
3. `Bank Account` セクションを展開します。
4. `Link bank account manually` をクリックします。

![liquid-image-31](/images/business-technology/enterprise-applications/guides/navan-expense-guide/web-bank-account.png)

> カードまたは口座の接続方法については、*[How do I connect my personal banking information to Navan Expense?](https://app.navan.com/app/helpcenter/articles/expense/myself/getting-started-for-expense-users/connect-personal-banking)* の記事をご確認ください。

### 自己負担経費の払い戻しを受ける方法

現金で支払いまたは個人カードで請求された業務上のトランザクションを Navan モバイルアプリから登録して払い戻しを受けます。「手動経費」として知られるこれらのトランザクションは、割り当てられたポリシーに準拠していれば自動的に払い戻し承認されます。割り当てられたポリシーの範囲外のトランザクションは、会社の管理者チームによるレビューのために申請されます。

払い戻し申請にはいくつかの方法があり、すべての手動経費は申請前に下書きとして保存できます:

- **Receipt scanner（レシートスキャナー）**: レシートの写真を撮影またはアップロードすると、関連するすべての詳細が対応するフィールドに自動入力されます。
- **Personal card import（個人カードインポート）**: 個人カードを連携してトランザクションをインポートして払い戻しを申請します。
  - 注意: このオプションは、米国の銀行口座を持つユーザーのみご利用いただけます。
- **Type in expenses（経費を手動入力）**: 個人カードを連携できない場合やレシートを紛失した場合は、トランザクションの詳細を手動で入力します。
- **Receipt Import（レシートインポート）**: レシートのコピーを Navan（*receipts@navan.com*）にメールで送ると、既存の Navan Expense トランザクションに自動的に添付されるか、トランザクションの下書きとして作成されます。


{{% panel header="**IMPORTANT NOTE**" header-bg="danger" %}}

- レシートは GitLab のメールアドレスから *receipts@navan.com* に転送する必要があります。メール送信後、レシートは数分から数時間以内に表示されます。
{{% /panel %}}


<br>


{{% alert title="Tip" color="info" %}}
**Tip**
手動経費を入力中に `Save & close` をタップすると、トランザクションを下書きとして保存できます。下書きは `Drafts` フォルダに保存され、申請または削除するまでいつでもアクセスして変更できます。
{{% /alert %}}


#### Receipt Scanner（レシートスキャナー）

レシートをアップロードするには、`+New transaction` をタップし、`Scan a receipt` をタップします。レシートの写真を撮影またはアップロードします。同じトランザクションに複数のレシートをアップロードする方法については、*[How to attach multiple receipts to the same transaction](/handbook/business-technology/enterprise-applications/guides/navan-expense-guide/#how-to-attach-multiple-receipts-to-the-same-transaction)* セクションをご確認ください。

レシート画像をアップロードすると、必要なトランザクション情報のほとんどが自動入力されます。精度を確保するために、経費を申請する前に最終的な数値とトランザクションの詳細を確認することをお勧めします。

![liquid-image-11](/images/business-technology/enterprise-applications/guides/navan-expense-guide/receipt-scanner.png)


{{% alert title="Note" color="warning" %}}
**Note**
レシートの写真を撮影または保存した写真にアクセスするには、Navan Expense アプリにスマートフォンのカメラまたはカメラロールへのアクセスを許可する必要があります。
{{% /alert %}}


#### Import from Personal Card（個人カードからのインポート）（米国の銀行口座を持つユーザーのみ）

個人カードで請求された業務上のトランザクションの払い戻しを受けるには、`+New transaction` をタップして `Import from personal card` を選択します。個人カードを事前に連携していない場合は、詳細な手順について *[How to connect my personal banking details to Navan Expense](/handbook/business-technology/enterprise-applications/guides/navan-expense-guide/#how-to-connect-my-personal-banking-details-to-navan-expense)* セクションをご確認ください。カードが連携されたら、`Import and submit` 画面に表示されるトランザクションから選択して払い戻しを申請します。

![liquid-image-12](/images/business-technology/enterprise-applications/guides/navan-expense-guide/import.png)


{{% alert title="Tip" color="info" %}}
**Tip**
最近 Navan で予約した出張があり、出張関連の経費の払い戻しを希望する場合は、`View by trips` をオンにして、出張期間中のトランザクションのみを表示します。
{{% /alert %}}


#### Type in details（詳細を手動入力）

個人カードをプロフィールに連携していない場合、またはレシートを紛失したり受け取れなかった場合は、`+New transaction` をタップし、`Type in details` を選択して経費の詳細を入力します。レシートなしでは経費が払い戻し承認されない場合があるため、レシートを申請する必要があることに注意してください。

![liquid-image-13](/images/business-technology/enterprise-applications/guides/navan-expense-guide/manually-type.png)

#### Receipt Import（レシートインポート）

レシートを転送してトランザクションを照合し、トランザクション詳細を自動入力することで手動経費の申請プロセスを簡略化します。Navan に送られたレシートはインポートされて分析されるため、トランザクションの詳細を確認して申請するだけで済みます。

> 手動トランザクションを申請する方法の詳細については、*[How can I get reimbursed for out-of-pocket spend?](https://app.navan.com/app/helpcenter/articles/expense/myself/submitting-expenses/submitting-manual-transaction)* の記事をご確認ください。

#### Reimbursement Process（払い戻しプロセス）

払い戻し申請されたトランザクションは `My reimbursements` フォルダから追跡できます。`Submitted（申請済み）、Scheduled（予定済み）、Deposited（振込済み）、Rejected（却下済み）` の 4 つのカテゴリに分類されます。個人銀行口座をプロフィールに連携している場合は、手動経費が承認されると直接振込で払い戻しを受け取れます。個人銀行口座が連携されていない場合は、GitLab の通常の給与計算プロセスに従って払い戻しが行われます。

> 詳細については、*[My reimbursements](/handbook/business-technology/enterprise-applications/guides/navan-expense-guide/#my-reimbursements)* セクションをご確認ください。

### トランザクション詳細の変更または追加方法

Navan Expense のトランザクションを変更して、レシートの追加、関連出張の紐付け、経費の種類の変更、参加者の追加などの詳細情報を提供します。これには、トランザクションの下書き、レビュー保留中の申請済み経費、または会社の Expense 管理者から追加情報を求められた場合が含まれます。

#### トランザクション詳細へのアクセス

トランザクションはトランザクションの種類に基づいてフォルダに整理されます。フォルダを選択して該当するトランザクションをすべて表示し、以下の手順に従ってトランザクションの詳細を変更するトランザクションを選択します:

- Navan モバイルアプリの `My transactions` セクションに移動します。
- 異なるトランザクションの種類に基づいてフォルダを選択します:
  - **Drafts（下書き）:** レシート転送機能またはまだ申請されていない手動トランザクションから作成されたトランザクション。
  - **Manually added（手動追加）:** 自己負担経費として申請されたトランザクション。
  - **Navan card（Navan カード）**: バーチャルまたはフィジカルの Navan カードで請求されたトランザクション。
  - **Purchase cards（購買カード）**: 購買カードで請求されたトランザクション。
- 変更または取り消したいトランザクションを選択し、以下に示すいずれかの変更を行います。

#### レシートの追加

割り当てられたポリシーによっては、経費にレシートのコピーを添付することが求められる場合があります。最初にトランザクションを申請した際にレシートを提出しなかった場合は、任意のトランザクション詳細ページの下部にスクロールし、`Receipt` セクションの `Add` を選択することでレシートを追加できます。

> 同じトランザクションに複数のレシートをアップロードする方法については、*[How to attach multiple receipts to the same transaction](/handbook/business-technology/enterprise-applications/guides/navan-expense-guide/#how-to-attach-multiple-receipts-to-the-same-transaction)* セクションをご確認ください。

#### 参加者の追加

参加者は特定の種類のトランザクションに追加して、支出に関する追加のコンテキストを会社の管理者やマネージャーに提供できます。たとえば、チームイベント、食事、または複数の乗客がいたため高コストが正当化できる UberXL のトランザクションに参加者情報を追加することができます。参加者を追加するには:

- トランザクション詳細ページで、`Participants` フィールドをタップします。
  - *注意: 参加者フィールドが表示されない場合は、そのトランザクションの種類ではこの情報を申請できないことを意味します。*
- `Search` ボックスが表示され、各参加者の名前を入力できます。
  - 会社の他の Navan ユーザーが参加者リストに表示され、情報が事前入力されます。
  - 顧客やゲストなど、会社外の参加者を追加するには、`+` アイコンを使用して新しい参加者の情報（名、姓、メールアドレス）を入力します。
- `Save` をタップして変更を保存します。

![liquid-image-1](/images/business-technology/enterprise-applications/guides/navan-expense-guide/add-participants.png)

#### 経費の種類の変更

Navan カードで請求されたトランザクションの経費の種類は、カードが使用された加盟店に基づいて自動的に割り当てられます。ただし、トランザクションが正しい経費の種類に割り当てられていることを確認する必要があります。間違った経費の種類で経費を申請すると、承認者によってトランザクションがレビューのためにフラグが立てられる場合があります。その後、承認者はトランザクションをそのまま承認するか、または正しい経費カテゴリを割り当てるためにあなたに差し戻すかを決定します。別の経費の種類にトランザクションを再割り当てする必要がある場合は、以下の手順に従ってください:

- トランザクション詳細ページで、`Expense type` フィールドをタップします。
- Navan が推奨カテゴリのリストを提供します。または `all expense types`（すべての経費の種類）のリストから選択できます。
- `Save` をタップして変更を保存します。

#### 総勘定元帳（GL）コードの追加または編集

GitLab は GL コードを使用して、特定の種類の経費の支出を対応付け・追跡します。システム管理者がトランザクションに関連する GL コードを追加または編集する権限を付与している場合、（手動/自己負担経費の）トランザクションを申請する際にそれを行うことができます。GL コードを追加または編集するには、該当するトランザクションを見つけて以下の手順に従ってください:

- トランザクション詳細ページで、`GL code` フィールドをタップします。
- GL コードを検索するか、提供されたリストをスクロールします。
- GL コードを選択して `Save` をクリックします。
- トランザクション詳細ページで `Save` をタップします。

![liquid-image-3](/images/business-technology/enterprise-applications/guides/navan-expense-guide/change-gl.png)

#### 関連出張の紐付け

出張中に Navan カードで行ったトランザクションは、Navan プラットフォームで予約した対応する旅行に自動的に関連付けられます。手動（自己負担経費）の場合は、経費を申請する前にこの情報が正確に入力されていることを確認する必要があります。経費を出張に関連付けるには、以下の手順に従ってください:

- トランザクション詳細ページで、`Trip` フィールドをタップします。
- Navan Expense が Navan で予約した推奨出張のリストを提供します。
- 出張を選択したら、`Save` をタップして変更を保存します。

![liquid-image-4](/images/business-technology/enterprise-applications/guides/navan-expense-guide/related-trip.png)

#### トランザクションの取り消し

割り当てられた経費ポリシーに準拠していない自己負担経費の手動トランザクションを申請すると、経費承認者によるレビューのためにフラグが立てられます。これらのトランザクションは `In review`（レビュー中）としてマークされ、`My Transactions` セクションの `Manual` フォルダで確認できます。承認者がアクションを実行する前にこれらのトランザクションの一つを取り消したい場合は、以下の手順に従ってください:

- トランザクション詳細ページで、右上の `ellipsis`（三点リーダー）をタップします。
- `Withdraw transaction` をクリックしてトランザクションを完全に削除します。

トランザクションが取り消されると、管理者のダッシュボードおよびトランザクション履歴に表示されなくなります。

![liquid-image-5](/images/business-technology/enterprise-applications/guides/navan-expense-guide/withdraw.png)

> 手動トランザクションの変更方法の詳細については、*[How can I modify or add transaction details?](https://app.navan.com/app/helpcenter/articles/expense/myself/managing-my-expenses/modify-transaction-details)* の記事をご確認ください。

### 同じトランザクションに複数のレシートを添付する方法

現金で支払いまたは個人カードで請求された業務上の経費は、Navan Expense モバイルアプリを通じて手動トランザクションとして払い戻し申請をインポートでき、**ユーザーは**払い戻し申請のすべての手動トランザクションにレシートを添付することが**必要です**。場合によっては、同じトランザクションに複数のレシートをアップロードする必要があることがあります。方法については以下をご覧ください。

#### 新規トランザクション

複数のレシートで手動経費を申請するには、Navan Expense モバイルアプリを開き、`Expense`、`+New transaction` をタップし、以下の手順に従ってください:

1. `Scan a receipt` を選択し、カメラのシャッターボタンをタップして各レシートの画像を撮影します。または、`Photos` や `PDF` をタップして保存済みのレシート画像や PDF をアップロードできます。`Email` をタップしてレシートのメールコピーを Navan に転送します。写真を撮影したり保存済みの画像を追加するたびに、画面右下に撮影した写真の数が表示されたサムネイルが表示されます。
2. 写真を確認したら、`Use photos` ボタンをタップします。
3. 編集が必要な場合は `crop icon`（切り取りアイコン）を使用します。不要な画像はゴミ箱アイコンで削除します。
4. `Use photos` をタップします。レシート情報がスキャンされると、経費画面に戻り、レシートから取得した情報を確認してトランザクションの詳細の入力を完了できます。

![liquid-image-6](/images/business-technology/enterprise-applications/guides/navan-expense-guide/new-transactions.png)

#### 申請済みトランザクション

既に申請されたトランザクションに複数のレシートを添付するには、以下の手順に従ってください:

1. Navan モバイルアプリの `My transactions` セクション、`Navan card` に移動します。
2. レシートを追加したいトランザクションを見つけて選択します。
   - レシートをまだアップロードしていない場合は、`Add receipt` をタップし、アップロード方法（`Add photos`、`Add PDF`、または `Replace receipt`）を選択します。
   - すでにレシートが添付されているトランザクションにさらにレシートを追加する必要がある場合は、`View` をタップし、アップロード方法（`Add photos`、`Add PDF`、または `Replace receipt`）を選択します。

![liquid-image-7](/images/business-technology/enterprise-applications/guides/navan-expense-guide/submitted-transactions.png)

> 詳細については、*[How do I attach multiple receipts to the same transaction?](https://app.navan.com/app/helpcenter/articles/expense/myself/submitting-expenses/multiple-receipts)* の記事をご確認ください。

### Navan Expense でトランザクションを明細化する方法

Navan Expense では、1 つのトランザクションを複数の項目に自動的に分割する機能が提供されており、経費の種類、GL コード、カスタムフィールドの割り当て、および管理者による項目別のトランザクションの承認または却下が可能です。明細化の一般的なユースケースはホテルの経費で、GitLab が負担すべき料金（ホテルの宿泊費や駐車料金など）と個人負担すべき料金（ホテルのスパサービスなど）が混在する場合です。


{{% alert color="warning" %}}
ユーザーが自分の手動トランザクションを明細化できるのは、**申請前**または申請後にシステム管理者によってレビューのためにフラグが立てられており、まだ管理者がアクションを実行していない場合に限ります。
{{% /alert %}}



{{% panel header="**IMPORTANT NOTE**" header-bg="danger" %}}

- トランザクションの明細化は、現在ウェブアプリでは利用できません。
{{% /panel %}}


#### 手動トランザクションの明細化

1. Navan モバイルアプリを開き、`Expense` をタップします。
2. 新しいトランザクションを開始します。
3. `Scan a receipt` をタップして Navan にトランザクション情報を自動入力させるか、`Type in details` をタップしてトランザクション情報を手動で入力します。
4. すべてのトランザクションの詳細を入力したら、`Itemize` をタップします。
5. スキャンされた項目ページを確認し、必要に応じて編集します。
   - *注意: 宿泊経費を明細化する場合は、チェックイン・チェックアウト日、滞在コスト、1 泊料金などのトランザクションの追加フィールドへの入力が求められます。*
6. `Continue` をタップし、`Let's do it!` をタップして項目の分類を開始します。
7. レシートから取得した項目を確認します。経費の種類を変更したり、項目を削除したり、項目を個人経費としてマークして払い戻し申請から除外したりします。トランザクションに別の項目を追加する必要がある場合は `Add new item` をタップします。
8. `Save` をタップしてトランザクションの入力を完了して申請します。

![liquid-image-8](/images/business-technology/enterprise-applications/guides/navan-expense-guide/itemize.png)

#### 経費申請後の手動トランザクションの明細化

申請された手動トランザクションが割り当てられた経費ポリシーのパラメーター内に収まっている場合は自動的に承認され、明細化できません。申請された明細化されていない手動トランザクションが割り当てられた経費ポリシーに準拠していないとシステム管理者によってフラグが立てられた場合、管理者が承認または却下する前に明細化できます。

1. Navan Expense アプリのホームページで `Needs your review` タイルをタップします。
2. トランザクションを選択します。
3. `Itemize` をタップし、[Itemizing a manual transaction](/handbook/business-technology/enterprise-applications/guides/navan-expense-guide/#itemizing-a-manual-transaction) セクションに記載された手順に従います。会社の管理者が承認または却下するまで明細化を編集できます。

> 詳細については、*[How do I itemize a transaction?](https://app.navan.com/app/helpcenter/articles/expense/myself/submitting-expenses/itemize-a-transaction)* の記事をご確認ください。

### Navan Expense トランザクションにレシートを自動追加する方法

メールのレシートを Navan Expense に転送すると、既存のトランザクションに自動的に照合されます。Navan に送られたレシートはインポートされて分析され、トランザクションの詳細が自動入力されるため、内容を確認して申請するだけで済みます。


{{% panel header="**IMPORTANT NOTE**" header-bg="danger" %}}

- 1 通のメールに含まれる複数のレシートは 1 つのトランザクションとしてカタログに登録されます。複数のトランザクションのレシートを申請する必要がある場合は、別々のメールとして転送してください。
{{% /panel %}}


#### Navan へのレシートのメール送信

Navan にメールで送ったレシートはスキャンされ、トランザクション情報が Navan Expense アカウントにインポートされます。既存のトランザクションと一致するレシートは自動的にそのトランザクションに追加されます。一致するものが見つからない場合は、レシートとトランザクションの詳細を使って新しいトランザクションの下書きが作成されます。レシートをインポートするには、**GitLab の業務メールアドレス**から *receipts@navan.com* にレシートのコピーをメールで送信します。

受信後、プッシュ通知（デバイスで有効な場合）によってレシートが正常にインポートされたことが確認され、そのステータスが通知されます:

- **レシート/トランザクションの照合成功:** レシートをメール送信後すぐに、既存の Navan Expense トランザクションにレシートが照合されたことを示すプッシュ通知が届きます。通知をタップするとモバイルアプリのトランザクションに移動するか、`My Transactions` セクションに移動してレシートが追加されたトランザクションを確認します。すべての情報が正確であることを確認するためにトランザクションを確認します。
- **下書き作成済み:** レシートをメール送信後すぐに、レシートがインポートされてトランザクションの下書きが作成され `Drafts` フォルダに保存されたことを示すプッシュ通知が届きます。トランザクションを開いて確認し、必要なすべてのフィールドに入力してから申請します。

![liquid-image-26](/images/business-technology/enterprise-applications/guides/navan-expense-guide/emailing-receipts.png)


{{% alert color="warning" %}}
レシートのインポートが間違ったトランザクションに添付された場合や、置き換える必要がある場合は、次のセクション [Managing Imported Receipts](/handbook/business-technology/enterprise-applications/guides/navan-expense-guide/#managing-imported-receipts) の手順をご確認ください。
{{% /alert %}}


<br>


{{% panel header="**IMPORTANT NOTE**" header-bg="danger" %}}

- 各メールに含まれるすべてのレシートは 1 つのトランザクションとしてカタログに登録されます。複数のトランザクションのレシートを申請する必要がある場合は、別々のメールとして転送してください。
{{% /panel %}}


#### インポートされたレシートの管理

レシートの三点リーダーメニューから、レシートを別のトランザクションに移動したり、置き換えたりします。また、トランザクションから写真や PDF を追加したり、レシートを保存したり、削除したりすることもできます。

1. `Drafts` フォルダを開いてトランザクションを選択します。
2. レシートの角にある `ellipsis`（三点リーダー）メニューをタップします。
3. メニューからオプションを選択します。
4. デバイスのカメラが起動し、新しいレシートの写真を撮影したり、フォトライブラリ、PDF、またはメールアドレスからレシートを転送したりできます。
5. `Use photo` をタップして新しいレシートをトランザクションに追加します。
6. トランザクションの詳細を確認して、`Delete`、`Save & close`、または `Submit` を選択します。

**レシートを別のトランザクションに移動する**

1. `Drafts` フォルダを開いてトランザクションを選択します。
2. レシートの角にある `ellipsis`（三点リーダー）メニューをタップします。
3. `Move receipt to another transaction` を選択します。
4. 検索バーを使用するかスクロールしてトランザクションを見つけます。
5. `Move` をタップします。
6. 次の画面で、レシートが別のトランザクションに正常に添付されたことが確認されます。元のトランザクションの下書きを削除するかどうかをチェックボックスで指定します。

**レシートの置き換え**

- `Drafts` フォルダを開いてトランザクションを選択します。
- レシートの角にある `ellipsis`（三点リーダー）メニューをタップします。
- `Replace receipt` を選択します。
- デバイスのカメラが起動し、新しいレシートの写真を撮影できます。`Use photo` をタップして新しいレシートをトランザクションにインポートします。
- トランザクションの詳細を確認して、`Delete`、`Save & close`、または `Submit` を選択します。

![liquid-image-9](/images/business-technology/enterprise-applications/guides/navan-expense-guide/replace_receipt.png)

> 詳細については、*[How can I automatically add receipts to my transactions?](https://app.navan.com/app/helpcenter/articles/expense/myself/submitting-expenses/automatic-receipts)* の記事をご確認ください。

### Google カレンダーを Navan Expense に接続する方法

カレンダー連携を有効にすると、カードのトランザクションに関連するカレンダー内のイベント情報（名前、場所、参加者など）が取得され、トランザクションの詳細が自動入力されます。

カレンダーを接続するには、アプリ右上の `Profile` アイコンをタップしてプロフィールにアクセスし、`Calendar Integration` を選択して Google カレンダーを有効にします。

### 走行距離の払い戻し申請の提出方法

Navan Expense では、個人車両を使った業務での走行距離の払い戻しを簡単に申請できます。GitLab の Navan Expense 管理者が割り当てた業務上の経費ポリシーによって、走行距離の払い戻し資格が決まります。


{{% alert color="warning" %}}
走行距離のログは Navan Expense モバイルアプリでのみ利用可能です。お使いの[モバイルアプリストア](https://app.navan.com/app/liquid/user/redirect)からアプリをダウンロードしてください。
{{% /alert %}}


#### 走行距離の経費申請（モバイルアプリのみ対応）

走行距離の払い戻し申請を提出するには、`+New transaction` をタップし、`Log distance driven` をタップします。出張の詳細の入力を進めます。

- Google マップを使って出発地と目的地を入力してルートを選択するか、情報を手動で入力できます。走行距離と払い戻し合計金額が自動的に計算されます。
- 払い戻し金額は、総走行距離に GitLab が払い戻す走行距離レートを掛けて計算されます（この値を確認するには `Total` の横の `Information` アイコンをクリックします）。
- 最後に `Date of travel`（出張日）（必須）および Navan Expense 管理者チームに経費の詳細とコンテキストを提供するための追加情報（任意）を入力します。


{{% panel header="**Note**" header-bg="danger" %}}

- `Log distance driven` オプションが表示されない場合は、会社から走行距離の払い戻しを許可する経費ポリシーが割り当てられていないことを意味します。詳しくは Accounts Payable チームにお問い合わせください。
{{% /panel %}}


> 詳細については、*[How do I submit a mileage reimbursement request?](https://app.navan.com/app/helpcenter/articles/expense/myself/submitting-expenses/mileage-reimbursement)* の記事をご確認ください。

### ポリシー外経費の返金

GitLab から割り当てられた経費ポリシーに違反する Navan Expense カード（フィジカル）での請求は、Accounts Payable チームによってレビューされます。レビュー後、承認者はその経費を却下して全額または一部の返金を求める場合があります。また、トランザクションが返金を必要とすることを事前に把握している場合は、承認者がレビューする前に支払いを行えます。返金は Navan モバイルアプリから直接処理できます。

> 詳細については、*[How can I repay my company for out-of-policy spend?](https://app.navan.com/app/helpcenter/articles/expense/myself/managing-my-expenses/repaying-company)* の記事をご確認ください。

### 他のユーザーの代わりに経費を申請または管理する方法

Navan Expense では、Navan アプリを通じて組織内の他のユーザーの代わりに手動経費（フィジカルカードで請求されない経費）を申請したりトランザクションを管理したりできます。

#### 他のチームメンバーの代わりに予約するデリゲートアクセスのリクエスト

1. Navan ホームページから、プロフィールアイコンに移動して `Profile` をクリックします。
1. `Contact info` タブで `Delegate info` を見つけ、次に `I book travel for these users` を見つけます。出張の予約または管理を行いたいチームメンバーの名前を入力します。
1. リストに追加されたチームメンバーにはアクセスを承認または拒否するメールが届きます。リクエストが承認または拒否されるとメールで通知されます。保留中のリクエストは承認されるまでグレー表示されます。

#### デリゲートとしての自分自身の削除

別のチームメンバーのデリゲートから自分を削除するには、出張を予約するリストから削除したい人の名前の横にある `X` を選択します。ユーザーが削除されると、変更を知らせるメールが届きます。

#### 別のチームメンバーへのデリゲートアクセスの指定 {#designating-delegate-access-to-another-team-member}

トランザクションを代わりに承認したり、他のチームメンバーに出張の予約または管理を委任したい場合は、以下の手順に従ってください:

1. Navan ホームページから、プロフィールアイコンに移動して `Profile` をクリックします。
1. `Contact info` タブで `Delegate info` を見つけ、次に `These users can book travel on my behalf` を見つけます。権限を付与したいユーザーの名前を入力します。
1. リストに追加されたユーザーには、直属部下の代わりに承認したり、代わりに出張の予約や管理を行う権限が付与されたことを知らせるメールが届きます。

#### デリゲート権限の取り消し

他のチームメンバーに出張を予約または管理してほしくなくなった場合は、削除したい人の名前の横にある `X` を選択します。デリゲートのプロフィールへのアクセスを削除すると、変更を知らせるメールが届きます。


{{% alert title="Note" color="info" %}}
**Note**
デリゲートリストからユーザーを削除できない場合は、Navan Expense 管理者がそのユーザーを会社全体のデリゲートとして設定していることを意味します。会社全体のデリゲートは会社の管理者のみが追加または削除できます。
{{% /alert %}}


#### 別のユーザーの代わりに手動経費を申請する {#submitting-a-manual-expense-for-another-user}

**Navan モバイルアプリ**

1. モバイルアプリの `Profile` タブに移動します。
1. `Expense settings` を選択します。
1. `Switch users` をタップして、経費を申請または管理したいユーザーの名前を検索バーに入力します。これによりアプリ内でそのユーザーになりすまし、`Logged in as [ユーザー名]` というバナーが表示されます。
1. 自分のプロフィールに戻る準備ができたら、`Profile` をタップして自分の名前を選択します。

**Navan Expense ウェブアプリ**

1. Navan アカウントのホームページから `Log in as`（人物アイコン）をクリックします。
1. 経費を申請または管理したいユーザーの名前を検索バーに入力します。これにより Navan 内でそのユーザーになりすまし、`You are currently logged in as [ユーザー名]` というバナーが表示されます。
1. ユーザーとしてログインしたら、`Access your expenses` をクリックして `Add transaction` を選択します。
1. `Upload receipt` または `Type in details` を選択し、案内に従ってトランザクションを申請します。
1. 上部バナーの `End session` をクリックして自分のプロフィールに戻ります。
1. 最近ログインしたユーザーは、検索ページの右側に小さな連絡先アイコンとして表示され、自分のプロフィールと他のユーザーを簡単に切り替えられます。
   - *注意: 他のユーザーの代わりに申請されたトランザクションは、そのユーザーの割り当てられたポリシー（経費の割り当て）に従います。モバイルアプリでそのユーザーとしてログイン中に Policy タブに移動すると、そのユーザーの経費割り当てを確認できます。*

#### 別のユーザーの代わりにトランザクションを確認する

1. [上記の手順](#submitting-a-manual-expense-for-another-user)を繰り返して別のユーザーとしてログインします。なお、先にそのユーザーが[自分のアカウントへのアクセス権を委任](#designating-delegate-access-to-another-team-member)している必要があります。
1. 申請されたトランザクションを確認できるようになります。そのユーザーがマネージャーの場合は、チームのトランザクションも確認できます。

#### 別のユーザーのトランザクションを管理する

- 手動トランザクション: 払い戻し申請された手動トランザクションは 4 つのレビューカテゴリのいずれかに分類されます（`Transactions` からアクセス）。追加情報の要求、レシート未添付、または部分的もしくは完全に却下された申請の会社への返金など、トランザクションに追加の対応が必要な場合は、上記のセクションに記載された手順でそのユーザーとしてログインしてアクションを実行できます。
- Navan カードトランザクション: ユーザーのフィジカル Navan カードで請求されたトランザクションは、そのユーザーの割り当てられた経費ポリシーに準拠している場合は自動承認されます。自動承認されないトランザクションは、追加情報の提供、レシート未添付、またはトランザクションが部分的もしくは完全に却下された場合の会社への返金など、追加の対応が必要な場合があります。トランザクションに追加の対応が必要な場合は、上記のセクションに記載された手順でそのユーザーとしてログインして必要な情報を入力できます。

> 詳細については、*[How do I submit or manage an expense for someone else](https://app.navan.com/app/helpcenter/articles/expense/myself/managing-my-expenses/expenses-for-other-users)* の記事をご確認ください。

### 残りの予算を確認する方法

ポリシー内で経費として計上できる残額を確認したい場合（例：[オフィス機器](https://internal.gitlab.com/handbook/finance/expenses/#equipment)に経費として計上できる額）:

1. `Policy` タブに移動します。
1. `Benefits` をクリックします。
1. `Work from home` の下で `Show transactions` をクリックします。
1. 右側に合計使用金額と残額が表示されます。

### Navan Expense マネージャーダッシュボードの活用（デスクトップブラウザのみ）

Navan Expense マネージャーダッシュボードでは、マネージャーが直属部下のトランザクションアクティビティと支出データを一目で確認できるほか、トランザクションのレビューと承認（経費承認者に指定されているマネージャー向け）が可能です。マネージャーダッシュボードには、Navan デスクトップブラウザから左側のメインドロップダウンメニューをクリックし、Expense セクションの `Manager` をクリックしてアクセスできます。このページには 4 つの主要コンポーネントと、検索を絞り込むためのフィルターがあります。

**Activity（アクティビティ）**

Activity タブでは、すべてのトランザクションアクティビティの概要を確認できます。`Navan Expense transactions` を選択すると Navan のフィジカルカードとバーチャルカードのすべてのアクティビティを、`Manual transactions` を選択すると払い戻し申請された経費をすべて確認できます。

**Analysis（分析）**

Navan Expense ダッシュボードの Analysis セクションでは、Navan Expense フィジカルカード、バーチャルカード、購買カードへの請求、および手動払い戻しとして申請されたトランザクションを含む会社の業務支出の概要を確認できます。マネージャーはこの情報を以下の用途に使用できます:

- 合計支出とトランザクション数のグループ化と可視化。
- さまざまな請求の種類（フィジカルカード vs. 手動トランザクション）の内訳を表示して、経費の申請に使用されている方法を確認する。
- さまざまな期間、グループ、発行通貨でデータをフィルタリングする。

ページ上部の `Filters`（フィルター）を使用して `Spend overview`（支出の概要）を調整します。期間、グループ、経費の種類、発行通貨、個人ユーザーなどでフィルタリングできます。

ダッシュボードにアクセスするには、`Navan Travel > Manager > Analysis` に移動します。`Overview`（概要）ページに、請求の種類別に分類された会社の合計支出が表示されます。請求の種類とは、Navan Expense で経費を申請するさまざまな方法です。以下の内訳が表示されます（該当する場合）:

- **Physical Cards（フィジカルカード）**: Navan のフィジカルカードで請求された合計金額とトランザクション数。
- **Virtual Cards（バーチャルカード）**: Navan のバーチャルカードで請求された出張支出の合計金額とトランザクション数。
- **Manual Transactions（手動トランザクション）**: 自己負担経費として手動で申請された承認済みの合計金額とトランザクション数。

**Users（ユーザー）**

Users タブでは、マネージャーが直属部下の発行通貨、コストセンターなどの従業員データを確認できます。ユーザーの名前をクリックすると、トランザクション履歴やポリシーの割り当てなどの追加情報が表示されます。Activity タブに加えて、指定された承認者はユーザーのトランザクション履歴からトランザクションを直接レビュー、承認、却下、および追加情報の要求ができます。


{{% alert title="Note" color="warning" %}}
**Note**
Navan ユーザーリストでマネージャーに指定されているユーザーはマネージャーダッシュボードにアクセスできます。マネージャーダッシュボードのオプションが表示されない場合は、割り当てられた直属部下がいないか、直属部下に支出アクティビティがないことを意味します。
{{% /alert %}}


> 詳細については、*[Leveraging the Navan Expense manager dashboard](https://app.navan.com/app/helpcenter/articles/expense/myself/expense-approvals/expense-manager-dashboard)* の記事をご確認ください。

## Navan Expense よくある質問（FAQ）

### 誤った銀行口座情報を入力した場合はどうなりますか？

口座情報は申請時に検証されます。ただし、それがあなたの正しい口座であるかどうかは確認できません。銀行口座情報が正確に入力されていることを確認してください。誤った口座に送金された場合、Navan は責任を負いません。

### サポートされている通貨以外で取引している銀行口座の場合はどうすればよいですか？

銀行口座の通貨が現在サポートされていない場合や、その他の理由で銀行口座を連携したくない場合でも、GitLab の給与計算を通じて払い戻しを受け取れます。GitLab の給与計算サイクルとプロセスの詳細については、Accounts Payable チームにお問い合わせください。

### 個人カードを連携したくない場合、会社への返金はどうすればよいですか？

個人カードを Navan Expense に連携していない状態で、承認されなかった経費の返金が必要になった場合は、Accounts Payable チームと連絡を取り、最善の返金方法を確認する必要があります。

### 直接払い戻しが可能な国はどこですか？

払い戻しと支払いタイムラインの詳細については、経費ハンドブックページの[このセクション](https://internal.gitlab.com/handbook/finance/expenses/#44-reimbursement-payout-timelines)をご確認ください。

### 払い戻しが失敗した場合、どうすれば資金を受け取れますか？

払い戻しが失敗した場合は、モバイルアプリの `My reimbursements` タブまたはウェブアプリの `Settings` タブから銀行口座の連携を解除してから再連携してください。再連携後、Navan が銀行に資金を再送します。

### トランザクションに参加者を含めることは必須ですか？

必須ではありませんが、トランザクションに参加者を追加することで、管理者チームが一人当たりのコストをよりよく把握し、より高額の経費に対する正当な理由を提供するのに役立ちます。

### 参加者としてトランザクションに同僚を追加した場合、誰のポリシーが適用されますか？

トランザクションに参加者を追加しても、適用されるポリシーには影響しません。入力された参加者に関わらず、あなたが申請するトランザクションはすべて自分に割り当てられたポリシーのパラメーターが適用されます。

### 往復のドライブに対して走行距離を申請できますか？

はい。目的地を入力する際に `+` アイコンをクリックして場所を追加するだけです。

### マイルではなくキロメートルで申請できますか？

Navan Expense 管理者チームが割り当てたリージョンによって、キロメートルまたはマイルで申請できるかどうかが決まります。**注意:** 米国を拠点とする従業員が海外出張で個人車両を使用する場合も、払い戻し申請はマイルで提出する必要があります。

### Navan で予約した出張に紐付けなくても、走行距離の出張を申請できますか？

はい。割り当てられた経費ポリシーで走行距離の払い戻しが認められている限り可能です。

### Navan が接続できるライドシェアアプリはどれですか？

Navan は Lyft、Uber、Grab との接続を提供しており、出張中に場所と目的地の情報を自動的に共有して乗り物を利用できます。

> 詳細については、*[What rideshare applications can Navan connect to?](https://app.navan.com/app/helpcenter/articles/travel/myself/getting-started-for-travelers/rideshare-applications)* の記事をご確認ください。

### Lyft の経費を自動的に申請できますか？

Navan Expense ユーザーは Lyft アカウントを Navan Expense に接続して、業務出張に関連する Lyft 乗車のレシートを自動送信して経費を申請できます。このオプションを利用するには、まず Navan で使用しているのと同じメールアドレスで Lyft ビジネスプロフィールを作成する必要があります。

> 詳細については、*[How can I automatically submit Lyft expenses?](https://app.navan.com/app/helpcenter/articles/expense/myself/submitting-expenses/lyft-expenses)* の記事をご確認ください。

### ウェブアプリでできないことはモバイルアプリでできますか？

割り当てられた経費ポリシーの確認や業務での走行距離のログには、Navan アプリをご利用ください。これらの機能は現在ウェブアプリでは利用できません。

### Navan Expense のトランザクションに税金の詳細を追加する必要がありますか？

チームメンバーは経費トランザクションに税金の詳細を追加する必要はありません。

> 詳細については、*[How do I add tax information to my transactions?](https://app.navan.com/app/helpcenter/articles/expense/myself/submitting-expenses/tax-details)* の記事をご確認ください。

### 複数のレシートが自動承認された場合、一括払いと個別払いのどちらになりますか？

各トランザクションに対して個別の振り込みが銀行口座に行われます。手動経費を 5 件申請した場合は、各トランザクションに対してそれぞれ 5 件の個別の銀行振込が行われます。

### 経費が却下された場合、編集して再申請できますか？

経費が却下された場合は、完全に再申請する必要があります。

### Navan Expense の製品リリース情報はどこで確認できますか？

Navan Expense の製品リリースは次のブログで共有されています: [Navan Expense product release announcements](https://app.navan.com/app/helpcenter/articles/expense/admin/general-settings/navan-expense-product-release-announcements)

## Navan Expense トレーニング

### エンドユーザートレーニング

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/3lnIPfXwyk0" frameborder="0" allowfullscreen="true"> </iframe>
</figure>


{{% alert title="Note" color="warning" %}}
**Note**
動画を視聴するには、[GitLab Unfiltered アカウント](/handbook/marketing/marketing-operations/youtube/#unable-to-view-a-video-on-youtube)をご使用ください。また、[GitLab Unfiltered コンテンツ](https://studio.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A/videos)で `Navan Expense` を検索して見つけることもできます。
{{% /alert %}}


このビデオの内容:

- Navan Expense とは
- Navan モバイルアプリ
- 銀行口座を Navan に接続する方法
- 経費を申請する方法
- 経費を明細化する方法
- 参加者を追加する方法
- 走行距離を申請する方法
- 払い戻し管理
- ポリシー
- カレンダー連携
- Navan ウェブアプリの使い方
- Q&A

### マネージャートレーニング

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/3OJn7UbGAJ0" frameborder="0" allowfullscreen="true"> </iframe>
</figure>


{{% alert title="Note" color="warning" %}}
**Note**
動画を視聴するには、[GitLab Unfiltered アカウント](/handbook/marketing/marketing-operations/youtube/#unable-to-view-a-video-on-youtube)をご使用ください。また、[GitLab Unfiltered コンテンツ](https://studio.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A/videos)で `Navan Expense` を検索して見つけることもできます。
{{% /alert %}}


このビデオの内容:

- Navan Expense とは
- Navan モバイルアプリ
- 銀行口座を Navan に接続する方法
- 経費を申請する方法
- 経費を明細化する方法
- 参加者を追加する方法
- 走行距離を申請する方法
- 払い戻し管理
- ポリシー
- カレンダー連携
- Navan ウェブアプリの使い方
- マネージャーダッシュボード
- Q&A

## Navan Expense サポート

- **機能**に関する質問については、Navan Expense プラットフォームの使い方や経費に関するあらゆる質問について **Accounts Payable チーム**が最初の窓口となります。
- **技術的**な質問については、技術的な問題やご質問（アクセスリクエスト、ログイン問題、バグなど）について **Finance System Admins** が最初の窓口となります。


{{% alert color="info" %}}
Accounts Payable チームまたは Finance System Admins に連絡するには、質問内容を記載した HelpLab リクエストを開いてください。
{{% /alert %}}

