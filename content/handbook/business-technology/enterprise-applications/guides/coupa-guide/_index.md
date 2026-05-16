---
title: "Coupa エンドユーザーガイド"
description: "Coupa エンドユーザーガイド"
upstream_path: "/handbook/business-technology/enterprise-applications/guides/coupa-guide/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T05:49:40Z"
translator: "claude"
stale: false
lastmod: "2025-08-15T16:07:26+02:00"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## ビジネスニーズ

ビジネスでは、購買依頼の作成、発注書、3ウェイ請求書マッチング、ベンダー支払い、SOX コンプライアンスのための会計プロトコルを可能にするツールを使って、購買から支払いまでのプロセスを最適化する必要性が特定されました。

## ビジネスソリューション

ビジネスでは、購買から支払いまでのプラットフォームとして `Coupa` を、購買依頼プラットフォームとして `Zip` を導入することが決定されました。両者を組み合わせることで必要な機能が提供され、統合によって調達承認のターンタイムを短縮し、手作業によるワークフローの遅延を減らすことができます。


{{% alert %}}
`Zip` についての詳細は、[`Zip ハンドブックページ`](/handbook/business-technology/enterprise-applications/guides/zip-guide)をご確認ください。
{{% /alert %}}


## Coupa とは

Coupa はクラウドベースの購買・支払いプラットフォームで、GitLab では 2021-06-01 より米国およびオランダ法人向けに、2021-12-13 より残りの法人向けに使用されています。使いやすいインターフェースにより、サプライヤーと GitLab の連携方法が改善されます。すべての新しい発注書、請求書、コミュニケーションは Coupa サプライヤーポータルを通じて管理されます。

### Coupa へのアクセス方法

Coupa は Okta 経由で利用できます。プラットフォームにアクセスするには:

1. [Okta ホームページ](https://gitlab.okta.com/app/UserHome#)にログインします。
1. Coupa (Prod) ボタンをクリックします。
   - 新しいタブが開き、ユーザーとしてログインした状態で表示されます。


{{% alert %}}
毎月、すべての Coupa アクセスがレビューされ、90 日間アクティブでないユーザーはアクセスが削除されます。*（この日数は当月のライセンス数によって異なる場合があります）*
再度アクセスを申請する必要がある場合は、最初のアクセス申請 Issue を再度オープンし、コメントで `@gitlab-com/business-technology/enterprise-apps/financeops` を使用して Finance Systems Admins チームにタグを付けてください。
{{% /alert %}}


職務上、Coupa での予算・管理承認、発注書、請求書承認の管理が必要な場合は、以下の手順に従ってください:

1. [Lumos App Store](/handbook/security/corporate/systems/lumos/ar/) を使用して Coupa へのアクセスを申請します。
1. *アクセスの正当性* を入力し、管理する予算・管理承認・発注書・請求書承認について説明します。
1. Coupa へのアクセスが即時に必要な場合は、`#coupa_help` Slack チャンネルにメッセージを送ってください。


<div class="my-4 border border-sky-300 rounded overflow-hidden">

<div class="bg-sky-100 text-sky-900 px-4 py-2 font-semibold border-b border-sky-300">

**ベストプラクティス**

</div>
<div class="px-4 py-3">

Coupa のライセンス数が限られているため、各部門でチームを代表して購買依頼の予算・管理承認、発注書、請求書承認を管理するパワーユーザーを特定することが推奨されます。

</div>

</div>


## 購買における Coupa の使い方

### ホームページの概要

![coupa-image-40](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa40.png)

1. **ホームアイコン** - このアイコンをクリックするとホームページに戻ります。
1. **アカウント名** - Coupa でのアカウント管理に関するさまざまな個人設定が含まれています。
1. **カート** - 選択済みだがまだ承認申請していないアイテムを含むショッピングカートへのリンクです。
1. **検索バー** - カタログアイテムの検索・閲覧やフリーテキストでのリクエスト作成に使用します。
1. **最近のアクティビティ** - 最近の 5 件のトランザクションを表示します。`すべてを表示` を選択すると、アクティビティページで以前の購買依頼やその他のトランザクションがすべて表示されます。
1. **To Do's** - Coupa 内であなたに割り当てられているアクションアイテムの一覧を表示します。`すべてを表示` を選択すると、Coupa インボックスですべての To Do が表示されます。
1. **追加ストア（"パンチアウト"）** - サプライヤーのポータルから直接商品を検索・選択・購入申請する機能を提供します。
1. **GitLab - 重要リンクとリソース** - Coupa に関する重要な情報と、トレーニング資料やその他の重要なドキュメントへのリンクを表示します。
1. **Coupa コミュニティ** - 他の Coupa 顧客、パートナー、プロダクトマネージャー、Coupa サクセスチームと交流・参加できます。

### ユーザーアカウント

![coupa-image-2](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa2.png)

アカウント名には、Coupa でのアカウント管理に関するさまざまなオプションが含まれています:

- **アクティビティ**: 以前の購買依頼、関連注文、受領書、請求書がすべて表示されます。各トランザクションタブで以下の操作ができます:

![coupa-image-3](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa3.png)

1. **表示**: すべての購買依頼、受領が必要な購買依頼、下書きの購買依頼、その他の事前作成レポートなどを表示するためのフィルターセットを素早く適用でき、カスタムレポートの作成オプションもあります。
1. **レポートスケジューリング**: 受信者に定期的（日次、週次、または月次）にメールで送信される定期レポートを設定できます。
1. **詳細**: 購買依頼のリストにフィルターまたはフィルターセットを適用できます。
1. **検索**: 購買依頼のすべてのフィールドを素早く検索してマッチを見つけられます。
1. **エクスポート**: 購買依頼のリストに適用された現在のフィルターに基づいて、CSV または Excel 形式でレポートをダウンロードできます。
1. **アクション**: 各購買依頼の横にあるアイコンで、購買依頼の編集、コピー、キャンセル、取り下げ、再送が可能です。

- **グループ**: グループの設定にアクセスし、所属するグループにメンバーを追加できます。
- **設定**: 統合された個人設定が含まれています。
  - **一般**: 一般タブでプロフィール写真を読み込み、ユーザーフォームを確認できます。
  - **アドレス帳**: デフォルトの配送先住所を確認し、必要に応じて変更できます（特定の購買依頼の配送先住所は購買依頼ページで変更することもできます）。
  - **代理人**: ユーザーは代理人機能を使用して受領や承認を別のユーザーに委任できます（複数の重複した代理人を追加し、通知を有効にすることが可能です）。*詳細は [Coupa で代理人を追加する方法](/handbook/business-technology/enterprise-applications/guides/coupa-guide/#how-to-add-a-delegate-in-coupa) セクションをご確認ください*。
  - **レポート**: ユーザーは特定のレポートビューに移動してスケジュール詳細を指定することでレポートをスケジュールできます（一部のユーザーのみレポートへのアクセス権があり、レポートビューはロールによって異なります）。
  - **通知**: Coupa の通知はユーザー設定で管理できます。

    ![coupa-image-26](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa26.png)

    各種通知について、ユーザーはメール、Slack、または Coupa 内（オンライン）で通知を受け取るかを選択でき、複数のプラットフォームを選択することもできます。
  - **二段階認証（2FA）**: 金融アカウントや手段が、その使用を意図された個人によって管理・使用されるよう保護するため、ユーザープロフィールで有効にする必要があります。この追加認証レイヤーは、経費や請求書支払いのバッチ作成、アカウント作成、その他の多くのセキュアな支払い機能の操作などの特権アクセス権を付与される前に必要です。*詳細は [二段階認証（2FA）の有効化方法](/handbook/business-technology/enterprise-applications/guides/coupa-guide/#how-to-enable-two-factor-authentication) セクションをご確認ください*。
- **インボックス** - 現在および過去のすべての通知を表示します。
- **サインアウト** - アプリケーションを終了します。

### Coupa で代理人を追加する方法 {#how-to-add-a-delegate-in-coupa}

![coupa-image-19](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa19.png)

1. 「アカウント名」 > 「設定」に移動します。
1. 「代理人」サブタブをクリックします。
1. 「作成」をクリックし、指定した期間の代理人タイプの承認（受領、代理）を選択して理由を記入します。
1. 「保存」をクリックします。


{{% alert %}}
指定された代理人は同等以上の管理レベルである必要があります。<br>
承認グループの一部として承認する場合、その個人はそのグループのメンバーである必要があります。
{{% /alert %}}


### 二段階認証の有効化方法 {#how-to-enable-two-factor-authentication}

1. 「アカウント名」 > 「設定」に移動します。
1. 「二段階認証」サブタブをクリックします。
1. 「有効化」ボタンをクリックします。
1. Google Authentication アプリを使用して QR コードをスキャンします。
1. 認証アプリに表示されている 6 桁のコードを確認コードフィールドに入力します。
1. 「送信」をクリックします。

> 2FA 確認コードを求められた場合は、認証アプリを起動して最新のコードを入力してください。

### 購買依頼の作成方法


{{% alert %}}
2023-02-01 より、すべての購買依頼は `Zip` で作成されます。`Zip` についての詳細は、[`Zip ハンドブックページ`](/handbook/business-technology/enterprise-applications/guides/zip-guide)をご確認ください。
{{% /alert %}}


<br>

### Coupa で購買依頼を確認する方法

**購買依頼ヘッダーレベル**

![coupa-image-42](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa42.png)

- a) On Behalf Of（代理申請） *（`Zip` から同期）*<br>
  - 別のユーザーを代理してリクエストを作成する際に使用します。承認チェーンは「代理申請先」として選択した人物に従って更新されます。このユーザーは請求書受領後に承認する必要があります。
- b) 購入内容の説明 *（`Zip` から同期）*<br>
- c) 価格を非表示 *（任意）*<br>
  - 調達チームがベンダーに発注書の価格を非表示にするために使用します。
- d) 添付ファイル *（`Zip` から同期）*<br>


{{% alert %}}
請求書が添付されている場合、処理のために **ap@gitlab.com** にもメールで送付する必要があります。
{{% /alert %}}


- e) ベンダーの連絡先メールアドレス *（任意）*<br>
- f) ベンダーはレッド/オレンジデータにアクセスできますか？ *（任意）*<br>
- g) 関連するデータとシステムを一覧表示する *（任意）*<br>
- h) ベンダーのセキュリティ連絡先メールアドレス *（任意）*<br>
  - 虫眼鏡アイコンをクリックして別のアドレスを選択または作成します。
- i) バーチャルカードのサポートドキュメント *（任意）*<br>
- j) 住所 *（ユーザーレコードからデフォルト設定）*<br>
- k) 宛名 *（ユーザーレコードからデフォルト設定）*<br>

<br>

**購買依頼ラインレベル**

![coupa-image-43](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa43.png)

- 上記の情報は `Zip` から同期されるか、[Coupa 前払い自動化プロセス](/handbook/business-technology/enterprise-applications/guides/coupa-prepaid/)に該当する場合は FP&A チームによって更新されます。

<br>

### パンチアウト購買依頼

![coupa-image-48](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa48.png)

1. ホームページで、`追加ストア` セクションにあるパンチアウトサプライヤーをクリックします。
1. パンチアウトリンクをクリックすると、承認済みサプライヤーのウェブサイトに移動し、通常のオンラインショッピングのように商品の注文を開始できます。
1. 商品を検索してカートに追加します。
1. カートへの追加が完了したら、「チェックアウト」をクリックします。
1. Coupa の「カートを確認」画面に戻るには、「ショッピングカートを転送」をクリックします。
1. Coupa の「カートを確認」画面に戻ったら、**商品カテゴリーと請求先アカウントなどの必須情報を入力します**。
1. 購買依頼の完全性を確認し、「承認のために送信」をクリックします。


<div class="my-4 border border-sky-300 rounded overflow-hidden">

<div class="bg-sky-100 text-sky-900 px-4 py-2 font-semibold border-b border-sky-300">

**注意事項**

</div>
<div class="px-4 py-3">

- カートのチェックアウトと Coupa の「カートを確認」画面への戻り方はパンチアウトサイトによって異なります。
- 可能な限りパンチアウトを利用して購買することが推奨されます。
- 1 つの購買依頼に複数のパンチアウトサプライヤーを追加しないでください。

</div>

</div>


<br>

### 承認

購買依頼が `Zip` から `Coupa` に統合されると、適用される承認者がカートラインの下に表示されます。

> 購買依頼の金額が大きいほど、より多くの承認者が必要になります。

![coupa-image-44](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa44.png)

### 承認者を追加する方法

- 「追加」ボタンをクリックします。
- 承認者名の数文字を入力すると、システムが考えられるすべての候補を表示します。
  - 新しい承認者は Coupa の既存ユーザーである必要があります。
- その人を現在の承認者の後、チェーンの末尾、またはウォッチャーとしてのみ追加するかを選択します。
  - ウォッチャーはカートを承認または拒否できませんが、購買依頼に関する通知を受け取ります。

![coupa-image-45](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa45.png)
![coupa-image-46](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa46.png)
![coupa-image-47](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa47.png)

<br>
<br>

### トランザクションを承認する方法

Coupa でトランザクションを承認する方法はいくつかあります:

- ホームページの **To Do's** 通知
  - 購買依頼/請求書/PO 変更リクエストの詳細を確認するには、件名の行をクリックします。
  - 承認者は「承認コメント」セクションに、拒否または承認ボタンをクリックする前にコメントを追加できます。
  - すべての承認者は「承認者」セクションに表示されます。
  - 拒否された場合、購買依頼は「下書き」ステータスに戻り、依頼者は変更を加えて再送信する必要があります。（依頼者への拒否理由のコメントを残してください）。
    - 請求書が拒否された場合、「拒否済み」ステータスになり、買掛金担当者が請求書を編集して再送信する必要があります（必要に応じて無効化します）。
- **インボックス**
  - ユーザーは「アカウント名」の下にある「インボックス」セクションからすべての通知にアクセスできます。
  - ユーザーはレポートビューを「To Do」に変更して、アクションが必要なすべての通知をフィルタリングできます。
- **アクティビティ > 「トランザクションタブ」 > 自分の承認が必要** ビュー経由
  - 各アクティビティのトランザクションサブタブで、レポートビューを「自分の承認が必要」に変更できます。
- **メール**
  - ユーザーがトランザクションを送信するとすぐに、購買依頼または請求書に関するシステム生成メールが承認者に届きます。
  - メールには基本情報がすべて表示されます。
  - 承認者は適切なアクション（「購買依頼を表示」/「承認」/「拒否」）を選択します。
    - 「購買依頼を表示」オプションは、システムでトランザクションを確認するための Coupa へのリンクです。
  - 選択をすると、自動メールが作成されます。承認者は Coupa で承認を完了するためにメールを送信する必要があります。
  - メールが送信されると、トランザクションは Coupa の承認チェーンに基づいて次の承認者に移動します。
    - 購買依頼を拒否する場合、承認者は拒否の理由を説明するコメントを含める必要があります。
- **Coupa モバイルアプリ**
  - Coupa のモバイルアプリは Apple または Android ストアからダウンロードできます。アプリをダウンロードしたら、通常通りインスタンスにサインインします。
  - アプリでは購買依頼と請求書の両方を承認できます:
    - 承認する場合: 購買依頼または請求書の通知を開き、情報を確認して承認します。
    - 拒否する場合: 購買依頼または請求書の通知を開き、情報を確認して拒否します。
- **Coupa Slack 統合**
  - Coupa には Slack との組み込み統合があり、Coupa 通知の別の方法をユーザーに提供します。Slack 通知を有効化するには、以下の手順に従うか、Coupa Slack [クイックデモ](https://www.loom.com/share/188a2df7f1cd4b35a3df9e96db7c05e7)をご覧ください:
    - 右上の名前の下にある「設定」をクリックします。
    - 「通知」をクリックします。
    - 「Slack に追加」ボタンをクリックします。新しいウィンドウが開いたら「許可」をクリックします。

   Slack 通知が有効化されると、Slack で受け取りたい通知の種類を選択できます。
   Slack で受け取る通知を指定するには、設定 → 通知 → 「IM」ボックスにチェックを入れます。

   以下は Slack での承認通知の例です:

 ![coupa-image-27](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa27.png)


<div class="my-4 border border-sky-300 rounded overflow-hidden">

<div class="bg-sky-100 text-sky-900 px-4 py-2 font-semibold border-b border-sky-300">

**注意事項**

</div>
<div class="px-4 py-3">

- 購買依頼のステータスが「購買担当者アクション待ち」の場合、調達チームの To Do リストにあり、できるだけ早く（1〜2 営業日以内に）確認します。問題がある場合、調達チームは購買依頼にコメントを追加し、メール、Slack、または To Do リストで通知が届きます（Coupa での通知設定によります）。
- 購買依頼のラインアイテムにサプライヤー名の横に「オンボーディング」と表示されている場合（以下のスクリーンショット参照）、サプライヤーはオンボーディングプロセスを完了していません。購買依頼を完了するには、サプライヤーが Coupa でのオンボーディングを完了する必要があります。

![coupa-image-25](/images/business-technology/enterprise-applications/guides/coupa-guide/Coupa25.png)

</div>

</div>


<br>

### 購買依頼を取り下げる方法

購買依頼がまだ完全に承認されて注文に転換されていない場合、購買依頼を取り下げて変更を加えてから再送信できるのは調達チームのみです。リクエストや質問については、`#procurement` Slack チャンネル（Coupa の購買依頼へのリンクを含めて）にご連絡ください。

![coupa-image-15](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa15.png)

1. 「最近のアクティビティ」または「アクティビティ」セクションに移動します。
1. 「承認待ち」ステータスの購買依頼を見つけて、「購買依頼を取り下げる」アイコン（赤矢印）をクリックします。


<div class="my-4 border border-sky-300 rounded overflow-hidden">

<div class="bg-sky-100 text-sky-900 px-4 py-2 font-semibold border-b border-sky-300">

**注意事項**

</div>
<div class="px-4 py-3">

- 「アクティビティ」で「承認待ち」ビューを選択します。
- 購買依頼がすでに注文に転換されている場合、取り下げることはできません。[発注書変更リクエスト](/handbook/business-technology/enterprise-applications/guides/coupa-guide/#how-to-do-a-purchase-order-change-request)を作成する必要があります。

</div>

</div>


<div class="panel panel-warning">

### 注文を受領する方法


{{% alert %}}
受領はアイテムベース（数量）の購買依頼にのみ必要です。
{{% /alert %}}


1. 依頼者は「マイアカウント」の「アクティビティ」オプションから受領待ちのすべての購買依頼を確認できます。*これにより、依頼者が作成したすべての購買依頼が表示されます。*
   - **受領待ち** ビューから **受領待ち** の購買依頼のみを選択できます。
1. 「アクション」列の受領アイコンをクリックします。*これにより、デスクトップ受領ビューが開きます。*
1. 受領詳細画面で、数量を入力します（受領はアイテムベースの購買依頼にのみ必要です）。
1. 「送信」アイコンをクリックして受領を保存します。
   - 受領成功を示すメッセージが表示されます。


<div class="my-4 border border-sky-300 rounded overflow-hidden">

<div class="bg-sky-100 text-sky-900 px-4 py-2 font-semibold border-b border-sky-300">

**注意事項**

</div>
<div class="px-4 py-3">

- 依頼者は一部または全数量を受領できます。
- 3ウェイマッチルールにより、ベンダーに支払いを行うためには商品（数量）関連の購入の受領が必要です。
- 受領日の追加と添付ファイルも可能です。

</div>

</div>


### 受領を無効化する方法

受領を無効化する必要がある場合があります（例: 誤った受領が行われた場合）。


<div class="my-4 border border-sky-300 rounded overflow-hidden">

<div class="bg-sky-100 text-sky-900 px-4 py-2 font-semibold border-b border-sky-300">

**重要事項**

</div>
<div class="px-4 py-3">

- 受領を無効化できるのは ADMIN と Central Receiver のみです。
- PO がすでにソフトクローズまたはハードクローズされている場合（PO が完全に受領・請求済みになると発生します）、受領を無効化することはできません。

</div>

</div>


**Central Receiver** として、以下の手順に従ってください:

1. 「在庫」タブ → 「受領を表示」に移動します。
1. 無効化するラインを検索します *（詳細検索を使用できます）*。
1. 検索結果から無効化するラインを特定し、「アクション」列の無効化アイコンをクリックします。
1. 無効化ページの下部で「無効化の理由」を選択し、必要に応じてメモを追加します。
1. 「受領を無効化」ボタンをクリックします。
   - 確認プロンプトが表示され、ステータスが「無効化済み」になります。

### 発注書変更リクエストの作成方法 {#how-to-do-a-purchase-order-change-request}

2023-02-01 より、すべての発注書変更リクエストは `Zip` で送信されます。`Zip` についての詳細は、[`Zip ハンドブックページ`](/handbook/business-technology/enterprise-applications/guides/zip-guide)をご確認ください。

<br>


<div class="my-4 border border-sky-300 rounded overflow-hidden">

<div class="bg-sky-100 text-sky-900 px-4 py-2 font-semibold border-b border-sky-300">

**重要事項**

</div>
<div class="px-4 py-3">

**2023-02-01 より `Zip` が実装されたことに伴い、すべての新規サプライヤーリクエストおよびサプライヤー更新リクエストは Coupa で調達チームが作成します。**

</div>

</div>


### 新規サプライヤーを申請する方法

サプライヤーへの購買依頼を送信する前に、そのサプライヤーが `Zip` に存在している必要があります。新規サプライヤーの申請方法については、[`Zip ハンドブックページ`](/handbook/business-technology/enterprise-applications/guides/zip-guide)をご確認ください。

新規サプライヤー申請フォームを記入するには:

- ホームページの `フォーム` ドロップダウンをクリックします。
- `PROC: 新規サプライヤー` を選択します。

![coupa-image-41](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa41.png)

- フォームの詳細を入力し、「確認」ボタン（ページ/画面の下部に表示）をクリックします。
  - 情報を確認し、変更が必要な場合は「編集」ボタン（ページ/画面の下部に表示）をクリックして必要な変更を加えます。
  - 情報が正しければ「送信」ボタン（ページ/画面の下部に表示）をクリックします。
- 外部サプライヤーフォームが自動的にサプライヤーに送信され、追加情報が収集されます。
  - サプライヤーはフォームに記入して送信する必要があります。
- サプライヤーが送信後、外部フォームはレビューと承認のために買掛金承認グループにルーティングされます。
- 承認後、サプライヤーの詳細が NetSuite に統合され、Coupa に反映されて新規サプライヤーの作成が完了します。その後、購買依頼を作成する際に `Zip` でそのサプライヤーが利用可能になります。

### サプライヤー情報の更新を申請する方法

サプライヤー情報の更新申請方法については、[トレーニングビデオ](https://www.loom.com/share/21201b257967414793aec40656959bc5)をご覧ください。

## 請求書と支払いにおける Coupa の使い方

Coupa の請求書モジュールと支払いモジュールの詳細については、以下のリンクをご参照ください:

- [Coupa での請求書発行](/handbook/finance/accounting/#invoicing-in-coupa)
- [Coupa での支払い](/handbook/finance/accounting/#processing-payment-for-invoices-in-coupa)

## Coupa バーチャルカードの申請方法

バーチャルカードの申請方法については、
[Coupa バーチャルカードガイド](/handbook/business-technology/enterprise-applications/guides/coupa-virtual-cards/)をご確認ください。

## Coupa サポート

技術的に関連する Coupa リクエストについては、`Coupa Request` テンプレートを使用して [Issue を開いてください](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/intake/-/issues/new?issue%5Bmilestone_id%5D=#)。


{{% alert %}}
現在のビジネスプロセスへの変更を含むリクエストの場合、リクエストの種類によって調達チームおよび/または買掛金チームの承認が必要です。
{{% /alert %}}


緊急の問題がある場合は、`#coupa_help` Slack チャンネルに問題を説明するメッセージを送ってください。
