---
title: "Coupa バーチャルカードガイド"
description: "Coupa バーチャルカードガイド"
upstream_path: "/handbook/business-technology/enterprise-applications/guides/coupa-virtual-cards/"
upstream_sha: "b4eeb07f0d5f46e2fc5f8572be1a2547261aed89"
translated_at: "2026-04-25T05:49:40Z"
translator: "claude"
stale: false
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## バーチャルカードとは

GitLab がサプライヤーへの支払いに優先する方法は、サポートドキュメントとしてサプライヤーの請求書を添付した電子送金です。サプライヤーとのこのオプションが利用できない場合、代替の支払い方法として一時的なクレジットカードであるバーチャルカードを使用することができます。

## バーチャルカードの申請方法

バーチャルカードは、`Zip` で **新規リクエスト** を作成する際に依頼者が支払いオプションとして選択できます。

`Zip` の **一般情報** ナビゲーションページで:

1. 「このベンダーへの支払いにバーチャルカードを使用しますか？」という質問に **はい** をクリックします。
1. 「ベンダーの名前は？」フィールドで **American Express- Virtual Card** を選択します。
1. ページの残りのフィールドを入力します。

 > 新規リクエストの完了方法については、[`Zip ハンドブックページ`](/handbook/business-technology/enterprise-applications/guides/zip-guide/)をご確認ください。

<br>

![vcard-image-20](/images/business-technology/enterprise-applications/guides/coupa-virtual-cards/vcard20.png)

<br>

購買依頼が完全に承認されると、Coupa 発注書が生成されます。その発注書でバーチャルカードが利用可能になったことを通知するメールが届きます。PO リンクをクリックしてバーチャルカードの詳細を確認してください。<br>
**注意 - バーチャルカードの詳細を確認できるのは、依頼者であるあなただけです。**

<br>

![vcard-image-6](/images/business-technology/enterprise-applications/guides/coupa-virtual-cards/vcard6.png)

<br>


<div class="my-4 border border-sky-300 rounded overflow-hidden">

<div class="bg-sky-100 text-sky-900 px-4 py-2 font-semibold border-b border-sky-300">

**重要事項**

</div>

<div class="px-4 py-3">

**前提条件: バーチャルカードを確認するには、Coupa で 2FA を設定する必要があります。** 詳細は [二段階認証（2FA）の有効化方法](/handbook/business-technology/enterprise-applications/guides/coupa-guide/#how-to-enable-two-factor-authentication) をご確認ください。

</div>

</div>


<br>

バーチャルカード情報は発注書の **支払い** セクションに表示されます。リンクをクリックしてカードの詳細を確認してください。二段階認証（2FA）の確認コードの入力が求められます。

![vcard-image-7](/images/business-technology/enterprise-applications/guides/coupa-virtual-cards/vcard7.png)

<br>

依頼者はカード番号、有効期限、CVV コードを確認できます。この時点で依頼者はカードの詳細を使用して購入を完了することができます。バーチャルカードを使用する際の請求先住所には **GitLab Inc; 268 Bush Street #350; San Francisco, CA 94104** をご使用ください。

<br>

![vcard-image-8](/images/business-technology/enterprise-applications/guides/coupa-virtual-cards/vcard8.png)

<br>


<div class="my-4 border border-sky-300 rounded overflow-hidden">

<div class="bg-sky-100 text-sky-900 px-4 py-2 font-semibold border-b border-sky-300">

**重要事項**

</div>

<div class="px-4 py-3">

**バーチャルカードのサポートドキュメントは購買依頼の金額と一致している必要があります。** バーチャルカードに請求された金額が PO 金額と異なる場合、更新されたドキュメントを提出する必要があります。

</div>

</div>


<br>

## バーチャルカード FAQ

- **バーチャルカードの有効期限はどのくらいですか？**
  - デフォルトでは、バーチャルカードは 365 日間有効です。その後、セキュリティ上の理由からカードは期限切れになります。365 日以内に支払いができずバーチャルカードが期限切れになった場合は、発注書の **コメント** セクションで **@Accounts Payable Approval Group** をタグ付けしてください。カードの再発行に関するビジネス上の正当性をコメントに含める必要があります。

- **バーチャルカードの金額を増額するにはどうすればよいですか？**
  - [発注書変更リクエストの作成方法](/handbook/business-technology/enterprise-applications/guides/coupa-guide/#how-to-do-a-purchase-order-change-request)と同じプロセスに従ってください。変更リクエストが承認されると、バーチャルカードの金額が増額されます。

- **発注書発行後にレシートや請求書を添付するにはどうすればよいですか？**
  - バーチャルカードの請求にはレシートは**不要**です。
  - レシートの添付を求める通知が届いた場合は、右上の名前 > 設定 > 通知 の順にクリックし、以下の 2 つの通知を削除します:
         - 「チャージ作成済み」
         - 「チャージのレシート提出リマインダー」

 ![vcard-image-16](/images/business-technology/enterprise-applications/guides/coupa-virtual-cards/chargenotification_jun2023.png)

<br>

- **緊急のリクエストがある場合はどうすればよいですか？**
  - 5 営業日未満で承認が必要な緊急リクエストは、以下の手順に従って #procurement チャンネルで優先処理のエスカレーションが必要です:
    - Slack メッセージには**必ず**以下を含めてください:
      - `Zip` リクエストへのリンク。
        - 契約書を Slack に直接投稿しないでください。
      - 必要な日付。
      - 日付が守られなかった場合のビジネスへの具体的かつ定量化可能な影響。
        - 「サプライヤーが今日中に署名を求めている」はエスカレーションの理由として認められず、このようなリクエストは拒否されます。
        - 「金曜日までに署名しなければ価格が 45K ドル上昇する」や「PR 締め切りが守られないため金曜日までに署名しなければブランドに重大な悪影響を与える」のような具体的で有形のビジネス上の影響はレビューされます。
  - 緊急リクエストは評価されます。これらはワークフローや定時申請の SLA 達成能力を乱すことに注意してください。
  - リスクと利用可能なリソースに基づいて、緊急リクエストに応えられる場合とそうでない場合があります。
  - 重要なリクエストがある場合は、エスカレーションを避けるために**承認が必要な 1〜2 週間前に `Zip` でリクエストを入力してください**。

<br>

- **質問や問題がある場合はどうすればよいですか？**
  - バーチャルカードの申請に関するサポートは `#zip-faq` Slack チャンネルにご連絡ください。
  - 発行済みバーチャルカードに関するサポートは `#coupa_help` Slack チャンネルにご連絡ください。
