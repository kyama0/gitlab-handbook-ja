---
title: "Salesforce へのメールの紐付け"
description: "Salesforce へのメールの紐付けに関するクイックガイド"
upstream_path: /handbook/sales/prospect-engagement-best-practices/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
---

このページには、Salesforce にメールを紐付ける方法のヒントが含まれています。

## Opportunity へのメールの紐付け

Salesforce へのメールの紐付けは、すべてのユーザーが従うべきベストプラクティスです。
Lead、Account、Contact、Opportunity レコードにメールを添付することは透明性のために不可欠であり、任意の数のチームメンバーが GitLab とお客様／見込みアカウント間のやりとりを確認できます。
すべてのやりとりがユーザーの受信トレイに保管されている状態は、誰にとっても良いことではありません。

そうは言っても、メールを Opportunity に紐付ける方法は複数あります。
ただし、その前に、Contact レコードが Contact Roles オブジェクト経由で Opportunity に紐付けられていることをまず確認する必要があります。

### まず、Contact Roles

Contact Role を Opportunity に追加するには:

1. Opportunity に移動します。
1. Contact Role 関連リストに移動します。
1. 'New' をクリックします。
1. Contact を追加します。
1. この担当者がプライマリーコンタクトである場合、'Primary' ラジオボタンをクリックします。
1. この担当者が Opportunity で果たす Role を追加します（Economic Buyer、Technical Buyer など）。
1. 手順を繰り返します。ただし、Opportunity ごとに 1 つのプライマリーコンタクトしか持てません。
1. 詳細については、[Salesforce Knowledge Center](https://help.salesforce.com/articleView?id=contactroles_add_cex.htm&type=5) をご覧ください。

### Email to Salesforce

Email to Salesforce は、メールを Contact に紐付ける長いメール文字列を使って Opportunity にメールを紐付けることを可能にします。
これを設定するには:

1. Salesforce の任意のページの右上にある自分の 'Name' をクリックします。
1. 'My Settings' を選択します。
1. 左サイドバーに移動し 'Email' をクリックします。
1. 次に 'My Email to Salesforce' をクリックします。
1. メール文字列をコピーします。
1. My Acceptable Email Addresses に移動し、自分の GitLab メールアドレスがあることを確認します。
1. 'Email Associations' で、"Automatically assign them to Salesforce records" がチェックされていることを確認します。
1. Opportunities、Leads、Contacts をチェックします。
1. Leads および Contacts セクションでは、必ず "All Records" を選択します。
1. すべての添付ファイルを保存するか、また紐付けの確認メールを受け取るかは、あなた次第です（私の推奨は、最初の数週間は機能していることを確認するために Yes、その後はいつでもオフにできます）。
1. Save をクリックします。
1. Gmail に移動し、このメールアドレスを Contact レコードに保存します。良いプラクティスは、姓名を 'BCC SFDC' と名付けることです。
1. Gmail からメールを送信する場合、"BCC SFDC" コンタクトを BCC に入れると、ステップ 5 でコピーした長い文字列にメールが送信されます。

### Outreach

Outreach を使って Opportunity にメールを紐付けたい場合、次の手順に従ってください:

1. 左下の自分の写真に移動します。
1. Settings をクリックします。
1. 左メニューから 'Plugins' を選択します。
1. SFDC (Salesforce) プラグインを選択します。
1. 'Contact' をクリックします。
1. 右下で、'Automatically associate activity with Opportunity' を有効にします。
1. 右上の 'Save' ボタンをクリックします。

### Salesforce Plugin for Gmail

Salesforce Plugin for Gmail プラグインを使って Opportunity または他のレコードにメールを紐付けたい場合、次の手順に従ってください:

1. Chrome ストアにアクセスして [Salesforce Plugin for Gmail](https://chrome.google.com/webstore/detail/salesforce-lightning-for/jjghhkepijgakdammjldcbnjehfkfmha) プラグインをダウンロードします。
1. `Add to Chrome` をクリックします。
1. `Add Extension` をクリックします。
1. Gmail に移動し、右サイドバーを開きます。
1. Salesforce 内の既存の Lead または Contact のメールアドレスを含む可能性のあるメールを開くと、そのメールに紐づくすべての関連レコード（Lead、Contact、Account、Opportunity、Cases）が表示され、メールを関連付けたい任意のレコードまたはすべてのレコードを選択できます。
1. メールを紐付けたい各レコードについて、各レコードのアップロードアイコンをクリックします。
1. 必要に応じて、各添付ファイルの横のチェックボックスをクリックして、添付ファイルの一部またはすべてをレコードに含めることもできます。

設定で問題が発生した場合は、Slack、メール、または SFDC Chatter 経由でセールスオペレーションディレクターにご連絡ください。
