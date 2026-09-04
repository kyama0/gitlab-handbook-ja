---
title: "セルフサービスのリストインポート"
description: "セルフサービスのリストインポートを容易にするため Marketing Operations が開発した自動化プロセス"
upstream_path: /handbook/marketing/marketing-operations/automated-list-import/
upstream_sha: 68426776f854464b95a942162d83ddb29afbcf7d
translated_at: "2026-09-04T13:37:38+09:00"
translator: codex
stale: false
lastmod: "2026-08-27T23:30:57+02:00"
---

自動化によって効率を高めるため、Marketing Operations は、イベントやその他のキャンペーンで入手したリストをキャンペーンマネージャーがインポートしたり、フィールドマーケティングイベントのメンバーステータスを更新したりする際に利用できる、セルフサービスのリストインポートプロセスを開発しました。

このプロセスの目的は、リストのインポートにかかる時間を短縮し、関係する各チームの単純作業を最小限に抑えながら、SDR/BDR チームがリードをできるだけ早くフォローアップできるようにすることです。

### 仕組み

1. リストインポートのアップロード用に [Google Drive フォルダ](https://drive.google.com/drive/folders/1SvDR2KW8_vtPZjJ7WWihA1iOgSJn0_fv?usp=share_link)が作成されています。このフォルダは、新しく作成された CSV を検出します。
1. CSV が作成されると、私たちのシステムの 1 つで処理され、データの整合性を確保するために各レコードが個別に検証されます。国コードや州コードから国名や州名への変換、空白の削除、よくある誤った値から正しい形式への変換など、一定の修正が適用されます。
1. このプロセスは Marketo プログラムの `Interesting Moments` キャンペーンを有効化し、Interesting Moment が正しく適用されるようにします。
1. 各レコードは、インポートファイルで指定された[プログラムステータス](/handbook/marketing/marketing-operations/campaigns-and-programs/#campaign-type--progression-status)に従って Marketo プログラムへ追加されます。
1. 最後に、作成、更新、失敗したリードの情報を含むレポートとともに、#event_list_upload チャンネルへ Slack アラートが送信されます。
1. 1,000 件を超えるリストの場合は、[Issue](/handbook/marketing/marketing-operations/list-import/)を作成して Marketing Operations チームへ割り当ててください。Marketing Ops へ引き渡す前に、リストのクリーニングと関連情報（キャンペーンメンバーステータス、LIM）の追加は引き続き必要です。

#### リストアップロードプロセスの動画説明

## 使用方法

### ステップ 1 - インポート前

`List Import Automation` というインポートフォルダへアクセスできることを確認します。アクセスできない場合は、Marketing Operations チームに AR リクエストを作成し、`List Import Automation` と `Report Folder` の両方へのアクセスを申請してください。

アップロード時点で、`Marketo` にプログラムがすでに存在している必要があります。キャンペーンはキャンペーンオーナーが作成します。プログラムテンプレートの最新リストは[こちら](/handbook/marketing/marketing-operations/campaigns-and-programs/#how-to-clone-the-marketo-program)をご覧ください。

キャンペーンの `tokens` が入力されていることを確認します。これらはメインキャンペーンの `My Tokens` タブにあります。`Tokens` は `Smart Campaigns` で使用され、キャンペーンに表示されるすべてのリードへ `Last Interesting Moments` を適用します。最低限使用すべき `tokens` は、キャンペーンの `Event Name`、`Event Date`、`Landing Page URL` に関するものです。これらを入力しない場合、`Last Interesting Moments` は常に `blank` と表示されます。アップロードが失敗したり完了しなかったりするという意味ではありません。LIM フィールドには、例えば `Attended {{my.event name}}, which starts on {{my.event date}}. Location: {{my.event location}}` と表示され、`Attended Developer Conference, which starts on May 29, 2025, Location: San Francisco` とは表示されないということです。

`Last Interesting Moments` と、それに関連する `My Tokens` は、`Last Event Notes` とは別であることに注意してください。トークンは `Last Event Notes` やリストアップロードシートの他の列からのアップロードとは連携しません。これらを正しく読み込むには、インポートシートの N 列と O 列に SFDC キャンペーンと最終イベントノートが入力されていることを確認してください。これについては、以下のデータクリーニング手順で詳しく説明します。この情報を空白にしてもインポートが失敗するわけではありませんが、リードレコードにはその情報が含まれません。

### ステップ 2 - リードデータをスプレッドシートへ追加

インポートテンプレートの [Google スプレッドシート](https://docs.google.com/spreadsheets/d/143REaMQLyIy7to-CFktL45TTTLZxBQRJUDIOMCA3CVo/edit#gid=257616838)を開き、ドキュメントのコピーを作成します。このスプレッドシートテンプレートでは、編集とデータチェックをすばやく行えます。データクリーニングの助言については、[以下の手順](#data-cleaning-instructions)を参照してください。リストを送信する人は、インポートクリーニングテンプレートを使用してリストをクリーニングする責任があります。

キャンペーンタイプ別に記載された[キャンペーンメンバーステータス](/handbook/marketing/marketing-operations/campaigns-and-programs/#campaign-type--progression-status)を確認してください。これらのステータスはルーティングとフォローアップに不可欠です。見込み客がフォローアップを明示的に依頼していない限り、`Follow Up Requested` は使用しないでください。すべてのメンバーステータスは、リードスコア、高優先度ステータス、White Glove に応じて、スコアリングと自動フォローアップに対応しています。質問がある場合は、#mktgops へ連絡してください。チームが支援します。

<details>
  <summary markdown="span"> クリックしてスクリーンショットを展開</summary>

![代替テキスト](/images/marketing/marketing-operations/automated-list-import/make-a-copy.png)

</details>

### ステップ 3 - CSV をダウンロード

スプレッドシートにリードデータを入力したら、リードタブを `CSV` としてダウンロードします。`File`>`Download`>`CSV` の順に移動します。

<details>
  <summary markdown="span">クリックしてスクリーンショットを展開</summary>

![CSV をダウンロード](/images/marketing/marketing-operations/automated-list-import/download-csv.png)

</details>

### ステップ 4 - Google Drive フォルダへ CSV を配置

1. `List Import Automation` という [Google Drive フォルダ](https://drive.google.com/drive/folders/1SvDR2KW8_vtPZjJ7WWihA1iOgSJn0_fv?usp=share_link)へ移動します。
1. リードデータを含む CSV をフォルダへ配置します
1. 自動化プロセスが CSV を取得し、ファイル内の各レコードを検証しながら処理を開始します。

### ステップ 5 - `#event_list_upload` Slack チャンネルへ移動

**Marketo でインポート処理が完了すると、次の情報を含む Slack メッセージが送信されます:**

1. レポートへのリンク
1. Marketo プログラムへのリンク
1. 作成されたレコード
1. 更新されたレコード
1. 失敗したレコード

<details>
  <summary markdown="span"> クリックしてスクリーンショットを展開</summary>

![Slack アラート](/images/marketing/marketing-operations/automated-list-import/slack-alert-import.png)

</details>

**これらの通知を受け取りたい場合は、インポート完了通知ラベルを購読できます。**

PubSec のフィールドマーケターは、リストインポートの Issue、またはリストインポートの Issue が作成されていない場合は別のイベント関連 Issue で、`List Upload Complete - PubSec` ラベルを使用する必要があります。民間部門のアップロードでは任意であり、`List Upload Complete - Private Sector` を使用します。SDR/BDR/Sales はこのラベルを購読して、インポート完了時に通知を受け取れます

### ステップ 6 - レポートを確認

1. おめでとうございます！インポートが完了しました。Slack アラートで渡された情報を確認します。
1. 失敗したレコードがある場合は、メッセージにリンクされたレポートを確認します。最初の列 `Status` には、特定のリードがインポートに失敗した理由について役立つ情報が含まれます。
1. 失敗したレコードがある場合は、同じレポートでエラーを確認して修正できます。その後、最初の列の `Status` メッセージを削除し、CSV を再度ダウンロードして、エラーを修正後に再インポートできます。

<details>
  <summary markdown="span"> クリックしてスクリーンショットを展開</summary>

![レポートのステータス列](/images/marketing/marketing-operations/automated-list-import/report-status.png)

</details>

## よくあるエラー

1. 国または州の検証失敗: 国と州の値を[厳密な選択リスト](/handbook/marketing/marketing-operations/marketo/#standardization-of-country-or-state-values)と照合します。これらのフィールドに誤った値があると、Salesforce が新しいリードの同期を拒否します。
1. メールアドレス、姓、会社、プログラムステータス、Marketo プログラム名の欠落: これらのフィールドはすべてインポートの成功に必須です。いずれかが欠けるとエラーになります。
1. プログラムステータスが存在しない: インポートファイルのプログラムステータスは、Marketo プログラムの値と完全に一致する必要があります。[リストはこちら](/handbook/marketing/marketing-operations/campaigns-and-programs/#campaign-type--progression-status)です。インポート前にエラーを検出して修正するよう努めていますが、例外的なケースではエラーになります。
1. `Opt-in` の値が不正: このフィールドは TRUE/FALSE または YES/NO のみを受け付けます。それ以外の値はエラーになります。
1. CRM Partner ID の欠落: このフィールドは共同パートナーまたは MDF キャンペーンタイプで必須であり、欠けている場合はエラーが表示されます。

## データクリーニング手順 {#data-cleaning-instructions}

{{% panel header="**注意**" header-bg="danger" %}}
元のスプレッドシートを変更したり、そこへデータを入力したりしないでください。リストアップロードの Issue テンプレートに示されているとおり、完全なコピーを作成してください。

リストアップロードのスプレッドシートには、ヘッダーに保護された範囲が含まれています。ヘッダーを変更するとボットが動作しなくなる可能性があります。スプレッドシートの変更はすべて Marketing Ops を通じて行う必要があり、Bryce、Amy、Jameson、Rob、Jenny が編集権限を持ちます。
{{% /panel %}}

アップロード前、または手動アップロードのため Marketing Operations チームへ送信する前に、すべてのリストで次のデータクリーニングが必要です。**スプレッドシートやデータがこれらのガイドラインを満たしていない場合、リストアップロードでエラーになります。**

**手順（スプレッドシートの _How it Works_ タブにも記載）:**

1. 「Lead Data for upload」タブを使い、関連データを一致する列へ配置します（例: ファイルの「First Name」列をコピーして「First Name」列へ貼り付けます）。

1. 行や列を変更しないでください。これらには、入力を参照して強調表示されたエラー（詳細は以下の説明を参照）を示し、Marketo/Salesforce で受け入れられるデータを提供し、イベント主催者から提供されたメールアドレスの構文を確認する数式が含まれています。

1. 赤く強調表示された「warnings」と、`FALSE` と記された誤ったメールアドレスを確認します。どちらもなければ準備完了です！（強調表示されたセルがある場合は、以下の _Warning Handling_ 手順に従います。エラーを修正してから続行してください。）

1. スプレッドシートの名前をキャンペーンタグ名と一致させます

**エラー処理:**

- **メールアドレスの構文:** メールアドレスの構文を満たさない場合（@ と .com、.co.uk、.io などの適切な末尾を含むこと）、緑色の列見出しの下に FALSE と表示されます。メールアドレスを更新するとアップロード可能になります。Google スプレッドシートは `.mil` や `.us` など、すべてのメールドメインを認識するわけではないため、それらは無視できます

- **GitLab のメールアドレス:** メールアドレスに @gitlab が含まれている場合、青色の列見出しの下で赤く強調表示されるため、削除してください

- **重複レコード:** メールアドレスに基づいて重複している場合、青色の列見出しの下に赤く表示されるため、リストから削除してください。

**ベストプラクティス**

1. メンバーステータスは、[記載されている](/handbook/marketing/marketing-operations/campaigns-and-programs/#campaign-type--progression-status)プログラムタイプとメンバーステータスに完全に一致する必要があります。定義もこちらで確認できます。フォームから登録を収集したイベントのメンバーステータスを更新する場合、`No Show` と `Attended` の両方のレコードを含める必要があります。

1. 不正確なエントリを削除します

     - `Job Title` から "self"、"me"、"n/a" などを**削除**
     - `Phone` から 0000000000、1234567890 など明らかな無効番号を**削除**
     - `State` は、`country` が `United States`、`Canada`、`Australia` のいずれかでない限り空欄にします。[州の値を使用できる国はほかにもあります](/handbook/marketing/marketing-operations/marketo/#standardization-of-country-or-state-values)が、指定された表記に従う必要があります。また、それらの国では州はルーティングに影響しません。
     - フォローアップしない GitLab 社内の従業員やホスト

1. `Washington DC` は `State` の値です。`City` と `State` に分割しないでください。

1. **空欄のフィールド**は無効なデータよりも適切です。空欄フィールドへ書き込むよう設計されたエンリッチメントツールがあります。また、空欄フィールドのレポートを実行してデータの欠落箇所を特定できます。

1. 連絡先の `Phone` がない場合、アカウントの `Phone` で代用しては**いけません**。逆の場合も同様です。空欄のままにしてください。

1. 米国以外の電話番号には必ず国番号を含めてください。

1. スプレッドシートを `Email Address` で並べ替え、重複を削除します。

1. [禁輸対象国](/handbook/legal/trade-compliance/)のレコードをすべて削除します。

1. `Zip Codes` は 5 桁の数字で構成されます。米国東部の州では `0` から始まる場合があるため、`Zip/Postal Code` フィールドを**プレーンテキスト**にして、先頭の `0` が表示されることを確認してください。

1. リストに非ラテン文字（例: アジア言語）が含まれる場合、UTF-8 と UTF-16 を使用して Marketo へアップロードする必要があります。[Marketo の手順はこちら](https://experienceleague.adobe.com/en/docs/marketo/using/product-docs/email-marketing/email-programs/managing-people-in-email-programs/import-a-non-latin-characters-list)です。Salesforce Data Loader には UTF-8 エンコーディングが必要です。[手順はこちら](https://help.salesforce.com/s/articleView?id=sf.faq_import_dataloader_specialchars.htm&type=5)です。

1. `Last Event Notes` 列にノートが追加されている場合、ノートがある各リードについて、`SFDC campaign name` を `Last Event SFDC Campaign Name` という列へ追加します。そのリードにノートがない場合は、どちらの列にも何も追加しないでください。この列は、Salesforce のリードページと連絡先ページにある `Qualification Notes` フィールドへノートを自動的に移動するために使います。このフィールドは `Last Event Notes` フィールドのように上書きされないため、ノートをより長期間保持できます。

1. ノートがある場合は、オンサイトにいた人にも、いなかった人にも明確に伝わる内容にする必要があります。オンサイトにいなかった人が、そのノートから取るべきアクションを理解できるか考えてください。

1. インポートファイルの形式は CSV でなければなりません。それ以外の形式ではエラーが発生し、Slack でファイルオーナーをタグ付けするメッセージによって通知されます。

1. レコードの所有者は、[Traction Complete が制御する](/handbook/marketing/marketing-operations/traction-lead-complete/)既存のリードルーティングを使用して割り当てられます。ルーティングの詳細は、[Lead & Contact routing ページ](https://internal.gitlab.com/handbook/marketing/marketing-ops-and-analytics/marketing-operations/traction/)をご覧ください。

1. `Preferred Language` には場所ではなく、言語を記載する必要があります。一般的な言語については、以下の表を参照してください。

**オプトイン情報**

1. 許可された情報源、つまりリードレコードのデータを合法的に取得した情報源からのリードレコードだけを `Opted-in` としてフラグ付けします。**例外はありません**

     - LinkedIn から氏名のリストを取得して SFDC へレコードをインポートしても、コンプライアンス要件を**満たしません**。EMEA ではこれらのリストは _アップロードされません_
     - 参加者から氏名の共有に同意を得ていないフィールドイベントは、コンプライアンス要件を**満たしません**。
     - 連絡を受けることへの同意では、コミュニケーションを受け取ることに本人が `opted-in` したと明示する必要があり、曖昧さを残してはいけません
     - ミートアップで氏名や名刺を受け取っても、コンプライアンス要件を**満たしません**。

1. リードを `Opt-in = TRUE` としてマークするには、データ収集時にリードが同意した利用規約の記録が必要です。マーケティングコミュニケーション受信のオプトインをリードに設定する**前に**、アップロードの Issue に `terms of service` の文言が記録されていることを確認します。ToS がなければ `Opt-in` にしません。例外はありません。適切な文言は、[Marketing Rules and Consent Language](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-privacy/#marketing-rules-and-consent-language/)を参照してください

     - 何らかの理由で連絡をオプトアウトしたレコードがある場合、スプレッドシートで `Opt-in = FALSE` を選択して明示します
     - ほかに選択肢がない場合は `Opt-In` を空欄にします

| フィールド名             | 必須                                      | 使用できる値                                                                                                                              | 注記                                                                                                                                                                                                                                                                   |
| ---------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Marketo Program Name   | はい                                      | Marketo のプログラム名と完全に一致                                                                                                        | この値は Marketo でレコードをキャンペーンメンバーとして追加するために使用されます                                                                                                                                                                                       |
| First Name             | いいえ                                    |                                                                                                                                           |                                                                                                                                                                                                                                                                         |
| Last Name              | はい                                      |                                                                                                                                           | この値がないと**エラー**になります                                                                                                                                                                                                                                     |
| Email Address          | はい                                      |                                                                                                                                           | この値がないと**エラー**になります                                                                                                                                                                                                                                     |
| Company Name           | はい                                      |                                                                                                                                           | この値がないと**エラー**になります                                                                                                                                                                                                                                     |
| State/Province         | いいえ。ただし米国／カナダ／オーストラリアでは推奨 | 値は[こちら](#reference-values-for-picklists)                                                                                              | |
| Country                | はい                                      | 値は[こちら](#reference-values-for-picklists)                                                                                              | この値がないと**エラー**になります                                                                                                                                                                                                                                     |
| Campaign Member Status | はい                                      | キャンペーンタイプ別の値と定義は[こちら](/handbook/marketing/marketing-operations/campaigns-and-programs/#campaign-type--progression-status) | Marketo プログラム内のステータスを決定します                                                                                                                                                                                                                           |
| Label as Opt-In?       | いいえ                                    | Yes/No または True/False                                                                                                                   | 選択肢が提供されていない場合は空欄にします。リードを Opt-in=TRUE としてマークする場合の詳細は上記を参照してください                                                                                                                                                     |
| CRM Partner ID         | MDF キャンペーンの場合のみ必須            | セットアップ手順は[こちら](/handbook/marketing/growth-marketing/partner-and-industry-marketing/#joint-gitlab-and-partner-campaigns)         | 共同イベントおよびパートナーとの MDF キャンペーンの一部としてインポートする場合、リストアップロードの列に CRM Partner ID を含める必要があります。セットアップ手順は[こちら](/handbook/marketing/growth-marketing/partner-and-industry-marketing/#joint-gitlab-and-partner-campaigns)です |
| Preferred Language | いいえ | 正確に French、German、Japanese、Italian、Korean、Spanish、Portuguese と記載します。その他の言語は[こちら](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/8945)で確認できます。 | 値が English または不明の場合は空欄にします |
| High Priority Reason? | いいえ | High Priority Campaign <br> White Glove  | 購買意欲が高い理由によってリードを [SDR の前へすばやく表示する必要がある](/handbook/sales/sales-development/#sdr-lead-views)場合のみ使用します。[High Priority](/handbook/sales/sales-development/#high-priority-campaigns-and-leads)の詳細をご覧ください。ドロップダウンを使用すべきか判断するため、[White Glove](/handbook/sales/sales-development/#white-glove-event-follow-up-sequences)プロセスを理解してください |

## 選択リストの参照値 {#reference-values-for-picklists}

<details>

<summary  markdown="span"> クリックして国、州、その他の値の参照表を展開 </summary>

| 国 |
|-----------|
| Afghanistan |
| Aland Islands |
| Albania |
| Algeria |
| Andorra |
| Angola |
| Anguilla |
| Antigua and Barbuda |
| Argentina |
| Armenia |
| Aruba |
| Australia |
| Austria |
| Azerbaijan |
| Bahamas |
| Bahrain |
| Bangladesh |
| Barbados |
| Belarus |
| Belgium |
| Belize |
| Benin |
| Bermuda |
| Bhutan |
| Bolivia |
| Bonaire, Saint Eustatius and Saba |
| Bosnia and Herzegovina |
| Botswana |
| Bouvet Island |
| Brazil |
| British Indian Ocean Territory |
| Brunei Darussalam |
| Bulgaria |
| Burkina Faso |
| Burundi |
| Cambodia |
| Cameroon |
| Canada |
| Cape Verde |
| Cayman Islands |
| Central African Republic |
| Chad |
| Chile |
| China |
| Christmas Island |
| Cocos (Keeling) Islands |
| Colombia |
| Comoros |
| Congo |
| Congo, the Democratic Republic of the |
| Cook Islands |
| Costa Rica |
| Cote d'Ivoire |
| Croatia |
| Curaçao |
| Cyprus |
| Czech Republic |
| Denmark |
| Djibouti |
| Dominica |
| Dominican Republic |
| Ecuador |
| Egypt |
| El Salvador |
| Equatorial Guinea |
| Eritrea |
| Estonia |
| Ethiopia |
| Falkland Islands (Malvinas) |
| Faroe Islands |
| Fiji |
| Finland |
| France |
| French Guiana |
| French Polynesia |
| French Southern Territories |
| Gabon |
| Gambia |
| Georgia |
| Germany |
| Ghana |
| Gibraltar |
| Greece |
| Greenland |
| Grenada |
| Guadeloupe |
| Guatemala |
| Guernsey |
| Guinea |
| Guinea-Bissau |
| Guyana |
| Haiti |
| Heard Island and McDonald Islands |
| Holy See (Vatican City State) |
| Honduras |
| Hong Kong |
| Hungary |
| Iceland |
| India |
| Indonesia |
| Iran, Islamic Republic of |
| Iraq |
| Ireland |
| Isle of Man |
| Israel |
| Italy |
| Jamaica |
| Japan |
| Jersey |
| Jordan |
| Kazakhstan |
| Kenya |
| Kiribati |
| Korea, Democratic People's Republic of |
| Korea, Republic of |
| Kuwait |
| Kyrgyzstan |
| Lao People's Democratic Republic |
| Latvia |
| Lebanon |
| Lesotho |
| Liberia |
| Libyan Arab Jamahiriya |
| Liechtenstein |
| Lithuania |
| Macao |
| Macedonia, the former Yugoslav Republic of |
| Madagascar |
| Malawi |
| Malaysia |
| Maldives |
| Mali |
| Malta |
| Marshall Islands |
| Martinique |
| Mauritania |
| Mauritius |
| Mayotte |
| Mexico |
| Moldova, Republic of |
| Monaco |
| Mongolia |
| Montenegro |
| Montserrat |
| Morocco |
| Mozambique |
| Myanmar |
| Namibia |
| Nauru |
| Nepal |
| Netherlands |
| New Caledonia |
| New Zealand |
| Nicaragua |
| Niger |
| Nigeria |
| Niue |
| Norfolk Island |
| Norway |
| Oman |
| Pakistan |
| Palestinian Territory, Occupied |
| Panama |
| Papua New Guinea |
| Paraguay |
| Peru |
| Philippines |
| Pitcairn |
| Poland |
| Portugal |
| Qatar |
| Reunion |
| Romania |
| Russian Federation |
| Rwanda |
| Saint Barthélemy |
| Saint Helena, Ascension and Tristan da Cunha |
| Saint Kitts and Nevis |
| Saint Lucia |
| Saint Martin (French part) |
| Saint Pierre and Miquelon |
| Saint Vincent and the Grenadines |
| Samoa |
| San Marino |
| Sao Tome and Principe |
| Saudi Arabia |
| Senegal |
| Serbia |
| Seychelles |
| Sierra Leone |
| Singapore |
| Sint Maarten (Dutch part) |
| Slovakia |
| Slovenia |
| Solomon Islands |
| Somalia |
| South Africa |
| South Georgia and the South Sandwich Islands |
| South Sudan |
| Spain |
| Sri Lanka |
| Suriname |
| Svalbard and Jan Mayen |
| Swaziland |
| Sweden |
| Switzerland |
| Taiwan |
| Tajikistan |
| Tanzania, United Republic of |
| Thailand |
| Timor-Leste |
| Togo |
| Tokelau |
| Tonga |
| Trinidad and Tobago |
| Tunisia |
| Turkey |
| Turkmenistan |
| Turks and Caicos Islands |
| Tuvalu |
| Uganda |
| Ukraine |
| United Arab Emirates |
| United Kingdom |
| United States |
| Uruguay |
| Uzbekistan |
| Vanuatu |
| Venezuela |
| Viet Nam |
| Virgin Islands, British |
| Wallis and Futuna |
| Western Sahara |
| Yemen |
| Zambia |
| Zimbabwe |

**州の値**

| 国 | 州／都道府県 |
|---------|------------------|
| Australia | New South Wales |
| | Queensland |
| | South Australia |
| | Tasmania |
| | Victoria |
| | Western Australia |
| | Australian Capital Territory |
| | Northern Territory |
| Canada | Alberta |
| | British Columbia |
| | Manitoba |
| | New Brunswick |
| | Newfoundland and Labrador |
| | Nova Scotia |
| | Northwest Territories |
| | Nunavut |
| | Ontario |
| | Prince Edward Island |
| | Quebec |
| | Saskatchewan |
| | Yukon |
| United States | Alabama |
| | Alaska |
| | American Samoa |
| | Arizona |
| | Arkansas |
| | Armed Forces Americas |
| | Armed Forces Europe |
| | Armed Forces Pacific |
| | California |
| | Colorado |
| | Connecticut |
| | Delaware |
| | Federated Micronesia |
| | Florida |
| | Georgia |
| | Guam |
| | Hawaii |
| | Idaho |
| | Illinois |
| | Indiana |
| | Iowa |
| | Kansas |
| | Kentucky |
| | Louisiana |
| | Maine |
| | Marshall Islands |
| | Maryland |
| | Massachusetts |
| | Michigan |
| | Minnesota |
| | Mississippi |
| | Missouri |
| | Montana |
| | Nebraska |
| | Nevada |
| | New Hampshire |
| | New Jersey |
| | New Mexico |
| | New York |
| | North Carolina |
| | North Dakota |
| | Northern Mariana Islands |
| | Ohio |
| | Oklahoma |
| | Oregon |
| | Palau |
| | Pennsylvania |
| | Puerto Rico |
| | Rhode Island |
| | South Carolina |
| | South Dakota |
| | Tennessee |
| | Texas |
| | United States Minor Outlying Islands |
| | US Virgin Islands |
| | Utah |
| | Vermont |
| | Virginia |
| | Washington |
| | Washington DC |
| | West Virginia |
| | Wisconsin |
| | Wyoming |

**従業員数区分（任意）**

使用できる値:

- 1-99
- 100-499
- 500-1,999
- 2,000-9,999
- 10,000+

</details>

## FAQ

**Q: 間違ったキャンペーンへ読み込んだ、フィールドの値を誤った列に入れた、誤ったステータスでアップロードしたなど、アップロードを間違えました。どうすればよいですか？**

A: 正しいリストを再アップロードしたり、エラーの修正を試みたりする前に、`#mktgops` Slack チャンネルで MOps へ連絡してください。手順をお伝えします。誤ったプログラムへアップロードした場合、新しいリストを読み込む前に元に戻す必要があります。そうしないとリードスコアリングに問題が生じ、修正がより困難になります。

**Q: Interesting Moment に Attended {{my.event name}}, which starts on {{my.event date}}. Location: {{my.event location}} と表示されるのはなぜですか？**

A: インポート時までにトークンが入力されていませんでした。この情報を更新するには、新しいバッチキャンペーンを作成する必要があります。

**Q: インポート完了の通知を受け取っていません。ステータスを確認するにはどうすればよいですか？**

A: Marketo へログインできる場合は、キャンペーンへ移動すると、読み込まれたリードの数を確認できます。この数を CSV ファイルと照合して進捗を確認します。このページを定期的に更新し、数が増え続けているか確認してください。増加が止まって最終的な数と一致しないようであれば、mktgops へ通知してください。失敗がないか確認します。

**Q: このシステムを使って既存リストの情報を更新できますか？（例: オプトインステータスや従業員数区分を変更する必要がある場合）**

A: はい。メンバーのメールアドレスと更新する列のデータを含む CSV リストを作成し、同じ方法でインポートするとレコードを更新できます。

**Q: なぜこんなに時間がかかるのですか?!?**

A: Workato は、リードの追加、フィールドの更新、SFDC との同期に必要なすべての処理をリードに対して実行しています。Workato と Google Workspace のインテグレーションには、API への負荷が過剰になってジョブが途中でキャンセルされることを防ぐため、遅延が組み込まれています。大きなリストでは処理に時間がかかる場合がありますが、24 時間の SLA を超えることは想定していません。例として、英語以外のリードが 800 件を超えるリストでは、完全に完了するまで 14 時間近くかかったことがあります。

- 例: 13:20 にアップロード -> 15:00 に進捗確認:（全 807 メンバー中、これまでに 467 メンバーを追加）->
  3:14 にインポート完了メッセージ。

**Q: リストにサイズ制限はありますか？**

A: これまで主に `1,000` 件程度のリードを含むリストをテストしました。制限があるとは考えていませんが、リストサイズは処理時間に影響するようです。リストが 2,000 件以上の場合は、処理時間に影響する可能性があるため MktgOps へ相談してください。

**Q: リストが読み込まれた後はどうなりますか？**

A: リードは要求されたプログラムステータスで Marketo へ追加され、[スコアリング](/handbook/marketing/marketing-operations/marketo/#mql-and-lead-scoring)されて、Marketo の運用プロセスを通ります。それが完了すると SFDC キャンペーンへ追加され、リード／連絡先が SFDC と同期されます。ルーティングの詳細は、[Lead & Contact routing ページ](https://internal.gitlab.com/handbook/marketing/marketing-ops-and-analytics/marketing-operations/traction/)をご覧ください。

**Q: `Follow up Requested` ステータスについて詳しく教えてください。**

A: `Follow Up Requested` とマークされたレコードには、[こちらに記載](/handbook/marketing/marketing-operations/marketo/#auto-mql)されているとおり 100 ポイントが加算され、その結果 [Sales Dev チームの S1（優先度 1）ビュー](/handbook/sales/sales-development/#sdr-lead-views)に表示されます。このステータスは、イベント後にリードが Sales のフォローアップを明示的に依頼した場合にのみ使用してください。
