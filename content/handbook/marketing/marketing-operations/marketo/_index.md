---
title: "Marketo"
description: "Marketo は、メールマーケティング、リード管理、プログラム管理に使用される私たちのマーケティングオートメーションプラットフォームです。"
upstream_path: /handbook/marketing/marketing-operations/marketo/
upstream_sha: f15ab5a3da7a00a0393f92b1eb69968e8abddf52
translated_at: "2026-06-04T12:00:00Z"
translator: claude
stale: false
lastmod: "2026-06-03T16:50:03-06:00"
---

## Marketo について

[Marketo](https://business.adobe.com/products/marketo.html) は、メールマーケティング、リード管理、プログラム管理に使用される私たちのマーケティングオートメーションプラットフォームです。

## Marketo Tech Stack Guide

プロビジョニング、インテグレーション、システム図に関する詳細については、[Marketo Tech Stack Guide](/handbook/marketing/marketing-operations/marketo/tech-stack-guide-marketo/#integrations) を参照してください。

### Marketo Salesforce.com 接続

SFDC でリード/コンタクトが作成されると、自動的に同期され Marketo にも作成されます — 何もせき止められません。同様に、SFDC でリード/コンタクトが削除されると、Marketo でも削除されます。

逆に、Marketo はすべてのレコードを自動的に SFDC にプッシュしませんし、Marketo で削除されたレコードは特に指示されない限り SFDC で削除されません。

リードは次のシナリオで Marketo から SFDC に同期されます:

1. SFDC に同期されているプログラムのメンバーである
1. 人物が `Inquiry` ステータスに到達したとき
1. `MQL` ステータスに到達したとき
1. `PTP` スコアが `4` または `5` のとき
1. フローステップ `Sync to SFDC` で同期するように明示的に指示されたとき

データは Marketo User Permission Set を経由して `Read` または `Read/Write` のパーミッションで両者間で共有されます。Accounts フィールドはデフォルトで `Read Only` です。レビュー用のクイックリンクは次のとおりです:

- [Leads](https://gitlab.my.salesforce.com/0PS4M000001136E?s=EntityPermissions&o=Lead)
- [Contacts](https://gitlab.my.salesforce.com/0PS4M000001136E?s=EntityPermissions&o=Contact)
- [Accounts](https://gitlab.my.salesforce.com/0PS4M000001136E?s=EntityPermissions&o=Account)

Marketo は SFDC キャンペーンを作成・編集することもできます。Marketo がそのキャンペーンにマッピングできるようにするには、`Active` チェックボックスをオンにする必要があります。[キャンペーン設定の手順はこちら](/handbook/marketing/marketing-operations/campaigns-and-programs/#marketo-program-and-salesforce-campaign-set-up)。

SFDC のフィールド値に大規模な更新が行われると、Marketo への同期バックログが発生する可能性があります。バックログを確認するには、[このページ](https://app-ab13.marketo.com/supportTools/sfdcSyncStats) に移動し、確認したいオブジェクトを選択して `Get Stats` をクリックしてください。Marketo>SFDC はプッシュ数で、SFDC>Marketo はプルとみなされます。この情報を表示するには Marketo にログインしている必要があります。バックログは自動的にクリアされ、システム使用率（GitLab だけでなく Marketo のユーザーベース全体）により業務時間中は遅くなりますが、業務時間外や週末には同期速度が上がります。

### Salesforce のカスタム同期ルール

特定のプロセスが SFDC で空のメールアドレスを持つレコードを作成するため、それらが実行可能でなく、データベースのコストがレコード数に応じて増加することから、これらのレコードが Marketo に流入するのを避けたいと考えています。

Sales Systems と協力して、`Block_Marketo_Sync__c` というカスタム数式フィールドを実装しました。フィールドがチェックされていると、レコードはカスタム同期ルールにより同期がブロックされます。同様に、フィールドがチェックされていないと、Marketo に流入します。

サンドボックスでは、別の[同期ルール](/handbook/marketing/marketing-operations/marketo/#sandbox)があります。

### Sandbox

Marketo で作業するためのサンドボックスを用意しています。サンドボックスはトレーニング、API リンクの作成、本番に移行する前の全体的なテストに使用されます。

サンドボックスへのアクセスをご希望の場合は、[AR](/handbook/security/corporate/end-user-services/access-requests/#application-specific-templates) を記入してください。

SFDC ステージングから Marketo サンドボックスに渡されるリード数を制限するため、`Marketo Sync` = TRUE の場合にのみ SFDC ステージングから Marketo サンドボックスにリードが同期されるカスタムルールを設けています。これは本番環境のロジックとは逆になります。

#### サンドボックスを SFDC ステージングに再接続する

Sales Systems は [SFDC ステージング環境](/handbook/sales/field-operations/sales-systems/#sandbox-refreshes) を定期的にリフレッシュします。これが発生したときに Marketo サンドボックスに再接続するための手順は、そのページに記載されています。

## フォーム

以下の手順を、[こちらの](https://internal.gitlab.com/handbook/marketing/marketing-ops-and-analytics/marketing-operations/operational-setup-marketo/) ドキュメントとあわせて使用してください。私たちのウェブサイト（`about.gitlab.com`）上のフォームのほぼすべては Marketo の埋め込みフォームです。Marketing Operations は既存フォームの維持と新規フォームの作成を担当します。

主に Global フォームを使用しており、これはフォームが複数のランディングページで使用され、フォームの自動化は個々の Marketo プログラムで処理されることを意味します。Global フォームにないフィールドが必要な場合は、カスタムフォームをリクエストする必要があります。

カスタムフォームが必要となる例:

- 現在のフォームに表示されていないフィールドを追加する
- 1 つのランディングページを使用して複数の関連イベントの登録を収集する
- 特定のイベント日付のためのドロップダウンやチェックボックスの追加
- コメントや一般的でない情報（T シャツのサイズなど）を収集する
- 登録者が好みを示す必要がある場合（参加するセッショントラックなど）

プログラムにカスタムフォームが必要かわからないけれども、プログラムが標準のセットアップから外れたものを必要としている場合は、プランニング過程で MOps チームに相談してください。プログラムのタイムラインを順調に進められるよう、私たちがガイドできます。

新しいカスタムフォームの作成が必要な場合は、[フォーム作成 Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=form_request) を開いてください。フォーム作成と複雑な自動化の一般的なタイムラインは 2 週間です。

既存のフォームを新しいページで使用する場合は、[リクエストを入力](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=form_processing) してください。これにより、フォームの背後にある自動化を構築できます。フォームに自動化が作成されていないと、フォームを記入した人は Marketo に入りますが、キャンペーンに処理されたりフォローアップに送られたりすることはありません。

フォームのドキュメントは [こちら](https://docs.google.com/spreadsheets/d/1cV_hI2wAzLxYYDI-NQYF5-FDDPXPXH0VV5qRBUJAQQk) で確認できます。現在のすべてのフォーム、および標準化された国・州のピックリストが含まれています。

**利用可能な翻訳済みフォーム**: スペイン語、フランス語、イタリア語、韓国語、ドイツ語、ポルトガル語、日本語。これらは Global フォームです。Design Studio > Forms > Translated Forms に移動してください。これらを使用する（クローンしない）ことが重要です。なぜなら、`Language Preference` の [ローカライズセグメンテーション](/handbook/marketing/marketing-operations/marketo/#segmentations) に影響を与えるためです。

ローカライズフォームは `Preferred Language` を適切に取得するために特別な非表示フィールドが必要です。詳細なセットアップ手順については [この Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/10025) を参照してください。

新しい言語が必要な場合や新しいフォームが必要な場合は、[翻訳](/handbook/marketing/localization/) を集めて、[サポートをリクエスト](https://form.asana.com/?k=1i4lL5h0RLzfTqNWBTH84Q&d=306855239930259) してください。

すべてのフォームは次のガイドラインに従う必要があります:

- ライトボックスは使用しない
- ラベル幅 = 150 / フィールド幅 = 300
- フィールドは縦一列に積み重ねる
- `Country` フィールドのラベルは `Country/Region` とする
- `State/Province` は `Country` = `United States`、`Canada`、または `Australia` のときのみ表示する。`Canada` が選択されると `Province`、`United States` または `Australia` が選択されると `State` を可視化ルールで動的に表示する
  - 同期エラーを避けるため、[Country および/または State の値の標準化](/handbook/marketing/marketing-operations/marketo/#standardization-of-country-or-state-values) について詳細を参照してください
- 一般的に `City` は `Country` = `Ukraine` のときのみ表示する
- すべてのフォームに、メール経由のコミュニケーションへの `opting in` 同意を得るためのチェックボックスを含める必要がある
- `Country` = `Ukraine` の場合は、送信者がウクライナのクリミア地域に住んでいないことを確認する追加のチェックボックスがある
- Country には [禁輸国](/handbook/legal/trade-compliance/) を含めない
- すべてのフォームには `gclid` と Google Analytics 追跡のための非表示フィールドが必要

ダイレクトメールキャンペーン用に自宅住所を収集する場合は、ランディングページまたはフォームに次の文言を含める必要があります。さらに、アイテムを送付した後にその住所情報を削除するための削除キャンペーンを Marketo にセットアップする必要があります。また、アイテムを発送するために使用しているベンダーも、その情報をレコードから削除することを確認してください。`By giving us your home address, you are giving us permission to mail items to your home. We will not use this data for any other purposes.`

### ウェブサイトフォーム管理

about.gitlab のフォームは埋め込みの Marketo フォームです。フィールド、レイアウト、ラベル、CSS への変更は Marketo 内で行われ、GitLab のソースファイルに変更を加えることなくライブにプッシュできます。フォームを変更したり、まったく新しいフォームを埋め込んだりする必要がある場合は、`form_request` [テンプレート](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/blob/master/.gitlab/issue_templates/form_request.md) を使用して Issue を開いてください。

各 Marketo フォームは、Google Analytics でイベントをトリガーするために、送信成功後にイベントをプッシュする必要があります。次のイベントラベルを使用してどのイベントを発火するかを指定します。

1. `demo` - `/demo/` と `/demo-leader/` の静的デモ用
1. `webcasts` - `/webcast/` 内のあらゆるページのフォーム用
1. `trial` - `/free-trial/` のフォーム用
1. `resources` - `/resources/` 内のあらゆるページのフォーム用
1. `events` - `/events/` 内のあらゆるページのフォーム用
1. `services` - `/services/` のフォーム用
1. `sales` - `/sales/` のフォーム用
1. `public-sector` - `/solutions/public-sector/` のフォーム用
1. `mktoLead` - ニュースレター購読フォームの送信イベントで使用されるレガシーなカスタムイベントラベル。現在は、プライマリー、セキュリティ、オールリモートニュースレターのフォーム送信に使用されています。

フォーム埋め込みコードの `return false` の上に次の行を追加します。`demo` のイベントラベルは適切なフォーム完了を反映するように更新してください。

```javascript
dataLayer.push(
{
  'event' : 'demo',
  'mktoFormId' : form.getId(),
  'eventCallback' : function()
  {}, 'eventTimeout' : 3000
});
```

### データベースの定期パージ

Marketing Operations は、データベースから非アクティブなリードを定期的にパージする自動化プロセスを作成しました。これは、データ品質を維持し、不要なレコードの保管に関連するコストを削減するのに役立ちます。リードは Marketo と Salesforce の両方から削除され、次の基準に従います:

| フィルター説明                   | 基準                                          | アクティビティ日付 |
|----------------------------------|-----------------------------------------------|------------------|
| メール内のリンクをクリックしていない | Email: is any                                 | 過去 2 年間 |
| 商談に追加されていない           | Opportunity: is any                           | 過去 2 年間 |
| メールを開封していない           | Email: is any                                 | 過去 2 年間 |
| フォームに記入していない         | Form Name: is any                             | 過去 2 年間 |
| Web ページのリンクをクリックしていない | Link Name: is any                             | 過去 2 年間 |
| Interesting Moment がない        | Type: is not empty                            | 過去 2 年間 |
| Web ページを訪問していない       | Web Page: is any                              | 過去 2 年間 |
| Person が作成されていない        |                          | 過去 2 年間 |
| SFDC タイプ                      | SFDC Type: is Lead                            | - |
| Person ステータス                | Person Status: is 'Raw', 'Inquiry', 'Disqualified', 'Recycle', 'Ineligible' | - |
| Account タイプ                   | Account Type: is not Customer; Partner; Reseller | - |
| SFDC アクティビティが記録されていない | Subject: is any                         | 過去 2 年間 |
| 現在 Outreach でシーケンスに入っていない|||

このパージプロセスは毎週実行され、上記のすべての基準を満たすリードを永久に削除します。

このプロセスは、最近のアクティビティがあるリード、プログラムを経験したリード、商談や現在の顧客に関連付けられているリードには影響しないことに注意することが重要です。これにより、価値のあるリードを保持しつつ、本当に非アクティブなレコードのみを削除します。

Marketing Operations チームメンバーは、プロセスが正しく実行されていることを確認し、対処が必要な潜在的な問題や例外を特定するために、パージログを定期的に確認する必要があります。

このプロセスは [このスマートキャンペーン](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC53025A1ZN19) を通じて実行され、[このリスト](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52963827C3LA1) から基準を満たすすべてのレコードを削除します。

### プログラムアセットの有効期限

2022 年 11 月以降、Marketo 内のチームは、2022 年初頭にプロダクトに追加された [アセット有効期限機能](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/programs/working-with-programs/local-asset-expiration.html?lang=en#:~:text=Right%2Dclick%20on%20your%20desired,Choose%20an%20expiration%20date) を活用し、期限切れのランディングページや関連性のなくなったスマートキャンペーンを整理します。このプロセスの詳細な手順は、ハンドブックの [Campaigns and Programs](/handbook/marketing/marketing-operations/campaigns-and-programs/) ページに記載されています。

2024 年 7 月から、Marketo はアセットの有効期限のためにイベントページ（https://about.gitlab.com/events/）にリンクするようになります。これがホームページに代わる新しいリダイレクト先となります。アセット有効期限を活用することで、使用されなくなった各 LP を手動で更新することを避けることができ、ホームページではなく /events にリダイレクトすることができます。注: フォールバックページは、認識できないランディングページ用と、ランディングページが利用できないときのみ使用されます。アセット有効期限を設定せず、ページをより長く利用可能にしたい場合は、その状態のままにしておき、後で手動でリダイレクトを設定して閉じることも可能です。

### Marketo のプロダクトデータ

データチームとエンジニアリングチームは、プロダクト内の顧客と試用利用に関するデータを Marketo に取り込むインテグレーションを開発しました。

1. [Marketing Contact Datamart & Pump](https://internal.gitlab.com/marketing-operations/product-data/#marketing-datamart-pump-and-pql-information-email-marketing-data-mart): フィールドは `[CDB]` で始まります。このデータは Hightouch によって夜間に反映されます
1. [SaaS Trial & Hand-Raises](https://internal.gitlab.com/marketing-operations/product-data/#saas-trials--handraise): フィールドは `[PQL]` で始まります
1. [Propensity to Buy Models](/handbook/enterprise-data/organization/data-science/#conversion): フィールドは `[PTP]` で始まります - 現時点では試用ユーザーのみ

### キャンペーンの制限

特定のスマートまたはメールキャンペーンを通じて処理できるレコード数には 250,000 件という設定上限があります。スマートキャンペーンのスマートリストが 250,000 件を超えるレコードの更新やメール送信を行うように設定されている場合、それは実行されず `aborted` となります。これは、意図しない大量更新やメールを防ぐためのものです。この制限を超えてキャンペーンを実行する必要がある場合は、#mktgops に連絡してください。

#### Country および/または State の値の標準化

`Country` および/または `State` フィールドをクリーンにして値が必要な Salesforce のフォーマットに合うようにするワークフローがいくつかあります。State は省略形ではなくスペルアウトする必要があります（例: CA は California とする）。`Country` および/または `State/Province` の標準化が SFDC と完全に一致しない場合、リードは同期されません。新しい標準化が必要な場合は、[Marketing Operations プロジェクト](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=) で Issue を開いてください。SFDC で国/州が更新された場合は、同期問題を防ぐために [customersDOT YML](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/3a7b78445d5cc1a5d53de7f003958004ec337ba5/data/countries.yml) ファイルも更新する必要があります。

すべての標準化スマートキャンペーンは次に含まれます:

`Marketing Activities` -> `Operational - Do not edit` -> `Data Management` -> `01 Data Management` -> `04-Normalize Data`

- 州の値を受け付ける国は次のものだけです: United States、Canada、Ireland、India、Brazil、Australia、China、Italy、Mexico
- すべての米国 50 州とすべてのカナダの州には、2 文字の略語からフルスペルに設定する標準化キャンペーンがあります。
- 次の国は、一般的なバリエーションが受け入れられる値に更新されます: United States、Bolivia、Canada、China、France、Germany、Hong Kong、India、Iran、Ireland、Macao、Myanmar、Netherlands、Russia、South Korea、Sweden、Switzerland、United Kingdom、Venezuela、Viet nam。

## MQL とリードスコアリング

Marketing Qualified Lead は、デモグラフィック/ファーモグラフィックおよび/または行動情報に基づいて、`100` ポイントのしきい値に到達したリードです。[MQL スコアリング](/handbook/marketing/marketing-operations/marketo/#scoring-models) は以下に詳述されており、ポジティブまたはネガティブのポイント値で重み付けされたさまざまなアクションおよび/またはプロフィールデータで構成されています。

ビジュアルな概要については、[このスライド](https://docs.google.com/presentation/d/1KMyzQm_-7V7jeSJZuiedmIINti_uEWiW0NBYiX5viSA) を使用してください。

### Re-MQL

追加情報については、[リードライフサイクルページ](/handbook/marketing/marketing-operations/lead-lifecycle/#lead-lifecycle) を参照してください。

リード/コンタクトが `Recycle` ステータスにあり、再度 [MQL しきい値](/handbook/marketing/marketing-operations/) に到達した場合、Re-MQL することが許可されます。

`MQL` した回数は `MQL Counter` フィールドでカウントされます。`Initial MQL DateTime` には、見込み客が [MQL しきい値](/handbook/marketing/marketing-operations/#lead-scoring-lead-lifecycle-and-mql-criteria) に到達した最初の時刻が含まれます。`MQL Date` は、リードが MQL しきい値に到達した最も新しい日付で上書きされます。

リードが `Recycle` に設定されると、その `Behavior Score` は 0 にリセットされます。その `Person Score` は `Demographic Score` の値にリセットされます。さらに、過去に `MQL` に到達した人物が `Recycle` にリセットされ、行動スコアを増やすアクションを取ると、追加のスコア `+20` が与えられます。MQL しきい値に到達する前に `Accepted` だったリードが 30 日以内に `Recycle` に設定された場合、リードの `Behavior Score` はアクションを取ったときに `Inquiry` 中だった値にリセットされ、`Demographic Score` は再計算され、全体の `Person Score` はこれら 2 つの値の合計になります。

リードが `Recycle` から `MQL` に `Re-MQL` すると、その `Recycle Reason` フィールドは `Null` に設定されますが、その `Recycle Reason` の値はリードまたはコンタクトの `Previous Recycle Value` フィールドに保存されます。このフィールドは Marketo のみが設定します。`Recycle DateTime` は最初の 1 回だけ更新されます。リードが再度 `MQL` ステータスに到達したとき、LeanData によるラウンドロビン再ルーティングは行われず、元のオーナー名のままになります。

[figjam フローチャート](https://www.figma.com/file/lycXH6cMKK5oNaKj2RSigx/Re-MQL-Workflows_2023-08-22_10-56-57?type=whiteboard&t=HDkNJDbCt6265Ezf-1) に従ってリードのライフサイクルを確認してください。後のステップから `Raw` または `Inquiry` のステータスに戻ることはできないことに注意してください。

### スコアリングモデル

リードスコアリングモデルは MQL するために 100 ポイントシステムです。レコードのデモグラフィックおよび/またはファーモグラフィック情報、行動および/または GitLab マーケティングとのエンゲージメントに基づいて、ポジティブおよびネガティブなポイントが割り当てられます。`Person Score` は `Behavior Score` と `Demographic Score` の合計です。MQL するためには `Person Score` が `100` に到達する必要があり、`Behavior Score` を `0` にはできません。

毎晩、マイナスになったリードを `0` にリセットするフローが実行されます。

MQL の瞬間の `Demographic`、`Behavior`、`Person` スコアは、`X Score at MQL` という 3 つの別のフィールドを通じて Marketo 内に記録されます。

次に当てはまるリードはスコアリングから除外されます:

- `@gitlab.com` のメールアドレスを持つ
- 競合他社である
- ステータス = `Disqualified` または `Ineligible`
- 会社名が `student`、`personal`、`test` などである
- パートナーによって積極的にワークされている（`Prospect Share Status` = `Sending to Partner`、`Accepted`、または `Pending`）
  - スコアはパートナーと共有されるタイミングでタイムスタンプが付けられ、リードがインハウスの SDR チームに戻るまで保存されます。リードがチームメンバーに戻ってさらにプロスペクティングするときには、スコアの減衰とともに再適用されます

#### なぜスコアリングモデルを使用するのか?

スコアリングモデルを使用する「理由」のスライドデッキは、いくつかのポインターとともに [こちら](https://docs.google.com/presentation/d/1Xl1xcrOeFsDar2B9kTmMH1Hrw5WKsNx7mDL9xtVeBMs/edit#slide=id.g1d24c3e4ddd_5_252) で確認できます。これは LevelUp コースで使用されているスライドデッキです。

#### スコアリングモデルの更新

Sales Development と Marketing Analytics チームと協力して、Marketing Operations は会計年度ごとに Q4 の間にリードスコアリングモデルを更新します。モデルを更新する時期を制限することにより、MQL 量を年次で公正に比較できます。年間を通じての変更を考慮する必要がなく、レポートで注釈付けできる小さなタイムフレームに集約できます。

年間を通じてリードスコアリングモデルに関するフィードバックを共有するには、[この Epic](https://gitlab.com/groups/gitlab-com/marketing/-/epics/5621) にコメントを残すか、既存の Issue をその Epic にリンクしてください。私たちはこの Issue を頻繁にレビューし、リードスコアリングモデルを更新する際に各項目を考慮します。変更がバグ修正であると判断した場合は、Q4 のタイムフレームの前に更新を検討します。

フィードバックを残すときは、変更がリクエストされている理由について有効な詳細を提供することが重要です。これらの詳細がないと、変更の調査に時間がかかり、時間とともにその妥当性の背景にある必要なコンテキストを失う可能性があります。最低限、次を含めてください:

- 影響を受ける SFDC リードへのリンク - または複数のリードの場合、分析に役立つ列を含む Google スプレッドシート、または SFDC レポート
- 認識された問題の概要と、それがどのようにワークフローに影響を与えているか
- 該当する場合、より多くまたはより少なくスコアリングされるべきだった最近のキャンペーンをリスト

#### Auto-MQL

特定の基準に基づいて、リードが auto-MQL する場合があります。auto-MQL は `Behavior` スコアカテゴリの一部とみなされることに注意してください。シナリオは以下にリストされています:

<!-- Self-Managed Trial + Business email domain
- SaaS Trial - Signed Up + Business email domain
- SaaS Trial Signed Up + `Setup for Company/Use = TRUE`-->

| **Auto-MQL 行動** | **キャンペーン説明 / プログラムステータス** | **割り当てポイント** | **スケジュール/フロー制限** |
| ------ | ------ | ------ | ------|
| Follow Up Requested  | Workshop > Follow Up Requested, <br> Vendor Arranged Meetings > Follow Up Requested, <br> Sponsored Webcast > Follow Up Requested, <br> Survey > Follow up Requested, <br> Owned Event > Follow Up Requested, <br> Webcast > Follow Up Requested, <br> Field Event > Follow Up Requested, <br> Conference > Follow Up Requested, <br> Executive Roundtables > Follow Up Requested| +100 | 毎回 |
| Meeting Requested, <br> Meeting Attended  | Conference > Meeting Attended, <br> Vendor Arranged Meeting > Meeting Requested   | +100 | 毎回 |
| Inbound - High  | Contact Request, <br> Renewals, <br> In-app Health Check, <br> Duo Requests <br> | +100 | 1/日 |
| Inbound - Hand Raise  | [Hand Raise PQL](/handbook/product/product-principles/#a-pql-can-be-further-broken-down-into-two-types-usage-and-hand-raise) | +100 | 1/日 |
| [PTP Score](https://internal.gitlab.com/handbook/sales/propensity_models/)  |Propensity Model を通じて新しく 4 または 5 のスコアが割り当てられ、Lead Score Classification を通じて `A` または `B` のランキングが割り当てられた。<br> 詳細は [Educational deck](https://docs.google.com/presentation/d/1dxSXekzw-SIF1g4pjNf6QGNBUY1L6euggsqqr9BTHUY/edit#slide=id.g1d24c3e4ddd_5_252) またはハンドブックを参照 <br>  | +100 | 1/90 日 |
| Web Chat - <br>Qualified  |Web チャットの対話またはミーティングが予定された | +100 | 1/日 |
|* Inbound - Med|インバウンドフォーム、上記以外、Startup 申請者を除く |    +100|1/日|
|MM+ Valuable Trials | MM+ かつ Valuable Trials（EDU 除外、SaaS および Self-Managed）  |+100 |1/6 ヶ月|

#### 行動スコアリング

行動スコアリングは、その人物が取ったアクションに基づきます。スコアリング頻度は以下にリストされています。`Person Score` が `300 pts` を超えると、行動スコアリングは null になります。キャンペーンのスコアリングについては、スコアをキャプチャするためには成功が必要です。以下で * が付いているものがそれにあたります。`success` を構成するものについては、[プログラムページとプログレッションステータス](/handbook/marketing/marketing-operations/campaigns-and-programs) を参照してください。

|**行動**|**キャンペーン説明 / プログラムステータス**|**割り当てポイント**|**スケジュール/フロー制限**|
|:------:|:------:|:------:|:------:|
|*カンファレンス参加 | Conference > Attended, <br> Conference > Attended On-Demand | +10 | 毎回|
|*対面参加 | Executive Roundtables > Attended, <br> Owned Event > Attended, <br> Owned Event > Attended On-demand, <br> Speaking Session > Attended, <br> Vendor Arranged Meetings > Attended, <br> Vendor Arranged Meetings > Meeting Attended, <br> Live Event > Attended | +40 | 毎回|
|*オンライン参加| Sponsored Webcast > Attended, <br> Sponsored Webcast > Attended On-demand, <br> Workshop > Attended, <br> Workshop > Attended On-demand, <br> Webcast > Attended (techdemo only), <br> Webcast > Attended On-demand (techdemo only)| +20| 毎回 |
|*ウェブキャスト参加 | Webcast > Attended, <br> Webcast > Attended On-demand | +40 | 毎回|
|*カンファレンスブース | Conference > Visited Booth| +20 | 毎回|
|*Content Syndication ダウンロード| Content Syndication > Downloaded| +10| 1/30 日|
|*Gated Content - High|Gated Content > Downloaded（Forrester または Gartner を含む必要あり）| +35|毎回|
|*Gated Content - Med|Gated Content > Downloaded|+15|  毎回|
|*Paid Social | Paid Social > Responded  |+10| 毎回|
|*PathFactory |PF コンテンツを消費|+10| 毎回|
|対面登録 |Owned Event > Registered, <br> Field Event > Registered, <br> Speaking Session > Registered, <br> Conference > Meeting Requested, <br> Live Event > Registered|    +20    |毎回|
|オンライン登録 |Workshop > Registered, <br> Sponsored Webcast > Registered, <br> Webcast > Registered, <br> Executive Roundtables > Registered, <br> Vendor Arranged Meetings > Registered|    +20    |毎回|
|サブスクリプション|Subscription Form に記入    |+5|1/週    |
|*Survey - High|(None Defined)    |+45| 毎回|
|*Survey - Med|(None Defined)    |+30| 毎回|
|*Survey - Low|Googleforms, <br> Default    |+15|  毎回|
|主要ウェブページ訪問|`/pricing/`,<br> `/sales`,<br> `/install`,<br> `/features`,<br> `/direction`,<br> `/solutions/startups/`,<br> `/releases/gitlab-com/`    |+25    |1/週    |

##### 自動ブースター

スコアへのブーストは、上記の従来のアクションよりも上の自動アクションが行われたときに発生します。

|**インタラクションブースター**|キャンペーン説明|**割り当てポイント**|**スケジュール/フロー制限**|
|:-------------:|:-------:|:-----:|:--------:|
|Re-MQL Score|    Status は Nurture、ユーザーが行動スコアを増加させるアクティビティを取る<br>MQL Counter >0    |+20    |    1/月|
| [6QA identified](/handbook/marketing/marketing-operations/6sense/#marketo) | 6sense の予測インテントデータモデルが GitLab に関心を示しているリードとコンタクトを特定したとき。Integrate の DAP ツールを通じて Marketo にプッシュされたリードは、最後の Integrate プッシュから 30 日間除外されます | +20| 1/3 ヶ月|

<!--|PF Engagement Booster 2|Engagement Time > 4 minutes|+15|Everytime|
|PF Engagement Booster 1|Engagement Time >  2 minutes < 4 minutes|+10|Everytime|

-->

#### デモグラフィックスコアリング

職務役割/職務機能と職位の説明は [こちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing) で確認できます。デモグラフィックスコアリングには 70 pt のハードリミットがあり、最大に達した後はデモグラフィックスコアに関する person score の蓄積を制限します。

|**デモグラフィック特性**|キャンペーンタイプ|**ポイント**|**スケジュール/フロー制限**|
|:-------------:|:-------:|:-----:|:--------:|
|Setup for Company/Team Use|プロダクト内で会社またはチームで使用していると自己申告|    +25    |1 回|
|ビジネスメールドメイン|有効なビジネスメールアドレスを持つ|    +35    |1 回|
|Seniority - High|[説明はこちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    +15    |   1 回|
|Seniority - Med|[説明はこちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    +15    |   1 回|
|Seniority - Low|[説明はこちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    +5    |    1 回|
|Function - High|[説明はこちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    +20    |   1 回|
|Function - Med|[説明はこちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|+15|   1 回|
|Function - Low|[説明はこちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    +10 |    1 回|
|Country - Tier 1, Tier 2 |[Country = Tier 1, Tier 2](/handbook/marketing/localization/)|    +5   |1 回|

#### スコア減衰

`partner` ステータスのリードによってスコアが凍結された場合にも、スコア減衰が適用されることに注意してください

|**行動減衰**|**キャンペーン説明**|**減点ポイント**|**スケジュール/フロー制限**|
|:-------------:|:-------:|:-----:|:--------:|
|30 日間のアクティビティなし|過去 30 日間に Web、スコアリング、プログラムのアクティビティなし、過去 30 日間に作成されていない|    -10    |    1/月|
|Web: 低価値の訪問|`/jobs`, `/careers`, `/unsubscribe`|    -10    |1/日|
|Email: バウンス    |Email ハードバウンス|    -20|1/月|
|Email: 配信停止|メールから配信停止|    Demographic score に基づいてスコアをリセット    |1/月|

| **デモグラフィック減衰** |**キャンペーン説明**|**減点ポイント**|**スケジュール/フロー制限**|
|------|------|------|------|
|汎用ドメイン|[汎用メールドメインを含む](https://docs.google.com/spreadsheets/d/1IO7DAIvhAhvIydkvLjwP-X_g97Zharf8JpkSVIsmiSs/edit?usp=sharing)|    -10    |1 回|
|Seniority - Negative|[説明はこちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    -10    |    1 回|
|Function - Negative|[説明はこちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    -20    |  1 回|

#### 試用しきい値スコアリング

標準のリードスコアリングモデルに加えて、GitLab は GitLab の試用専用に二次スコアリングモデルを利用しています。特定の特性を示す試用ユーザーを `MQL` することを目的としています。試用しきい値スコアリングシステムは、元のリードスコアリングワークフローと連携して動作します。スコアリングメカニズムは、AMER、APAC、EMEA リージョン内で、リージョンの最も早いタイムゾーンに基づいて、08:00 と 14:00 の 1 日 2 回発火します。試用ユーザーは `25` ポイントに達した後 `MQL` し、その後さらなるスコアリングから除外されます。スコアリングメカニズムは、プログラムメンバーシップと [Days Since Trial Counter](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC72010C3ZN19) でフィルターされ、これは試用開始から `40 日後` に終了します。

| **試用スコアリング特性**| **スコアリング説明** | **割り当てポイント** | 
| ------ | ------ | ------| ------ |
|   6sense Grade     |   A-D のうち 6sense が割り当てたランキング     | `A` = +15<br>`B` = +7<br>`C` = +0<br>`D` = +3 |
|   6sense Profile     |  6sense が割り当てた `Weak`、`Moderate`、または `Strong` のランキング      | `Strong` = +12<br>`Moderate` = +5<br>`Weak` = +0|
|非パブリックメールドメイン|メールアドレスが公開されているドメインとして識別されていない|+10 |
|利用された Duo 機能数|試用期間中に採用された Duo 機能の数に応じてスコアが割り当てられる| `0` = +0<br>`1` = +5<br>`2` = +10<br>`3+` = +15 |
|ユーザーの職位はマネジメントロールか?| Customer Database から引き継がれるブール値で判定| +10|
|ユーザーは一致するアカウントを持つか?|コンタクト+アカウントの関係、または Traction がリードをアカウントに一致させようとすることで決定される一致するアカウント|+5 |
|ユーザーは対象の職位を持つか?|Customer Database が `Upper Management` または `Platform / Ops / Infrastructure Engineering` に関連する職位を共有している場合にスコアリング| `Upper Management` = +8 <br>`Platform / Ops / Infrastructure Engineering` = +0 |
|PTP Score| PTP グループが 3-5 の場合にスコアリング| `3` = +2 <br> `4` = +7<br> `5` = +10|
|非 LATAM リージョン + 非 SMB セールスセグメント|LATAM リージョンと SMB セールスセグメントはこのスコアを受け取らず、他のすべてのリージョンとセールスセグメントはこのスコアを受け取る| `+3` |
|有効化された GitLab プロダクトステージ数| プロダクトが特定のレベルのプロダクトステージ採用を記録した場合にスコアを受け取る| `1 ステージ` = +2 <br> `2 ステージ` = +7 <br> `3+ ステージ` = +12 |

### Lead Score Classification

`lead score classification` は、見込み客が SAO に変換される可能性を分類するための 2 文字のスコア/指定で、リードの現在の `demographic` および `behavior` スコアに基づいてモデル化されたスコアです。スコアとその定義のビジュアルな表現は、以下の `Lead Classification Matrix` に示されています。リードステータスが `Ineligible` または `Disqualified` に設定されたリードは、`lead score classification` が `Disqualified` または `Ineligible` に設定されます。

ハンドブックページが壊れた場合に備えて、Lead Classification Matrix と Lead Classification Definitions Table は [Figma に存在](https://www.figma.com/file/U4GBe693vvyyrXZnMGGjS7/Welcome-to-FigJam?type=whiteboard&node-id=0%3A1&t=PZBNGKUfGQo8Ocvn-1) します。

![Lead Classification Matrix](/images/marketing/marketing-operations/marketo/lead_classification_matrix.png)

#### Lead Classification Matrix の使い方と Lead Classification の読み方

リード分類スコア — そしてそのビジュアル版マトリクス — は、プロファイルのフィットとエンゲージメントレベルの両方に基づいてリードのフォローアップに優先順位を付けるのに役立つように設計されています。リードの `demographic fit` は、文字/列 `A`、`B`、`C`、`D` に関連付けられます。リードの `behavior level` は、行 `1`、`2`、`3`、`4` に関連付けられます。`A` と `1` の両方が最高の指定で、`D` と `4` が最低です。マトリクスを見ると、最低の分類は左下の `D4` で、最高の分類は右上の `A1` です。

リードスコア分類を最大限に活用するには、マトリクスまたは以下の定義テーブルで提供される定義を読み、適切に行動してください。たとえば、`B2` または `A2` として分類されたリードは、カテゴリ `A` と `B` 内の属性が GitLab によって定義された理想のバイヤーのプロファイルに適合するため、`D2` として分類されたリードよりも closed-won の商談を生み出す可能性が高いです。`D2` のリードでも、関心が示されているため closed-won の商談につながる可能性がありますが、`demographic` のフィットが低いため、より高いコンバージョンと商談につながることが多い理想のバイヤーの属性が欠けている可能性が高いです。[リードスコアリングの教育用スライドデッキ](https://docs.google.com/presentation/d/1Xl1xcrOeFsDar2B9kTmMH1Hrw5WKsNx7mDL9xtVeBMs/edit#slide=id.g2b1545a7631_0_1) で指摘されているように、緑色の分類四角は、理想のバイヤーペルソナの属性を持つ人が `MQL` する _レンジ_ を示し、`A1` は確定的な `MQL` を示します。

|  | D <br> (Demographic - Low) | C | B | A <br> (Demographic - High) |
| ------ | ------ | ------ | ------ | ------ |
|   **1**  <br> **(Behavior - High)** |  フィットが悪い、強い関心      |  理想ではない見込み客、強い関心      |   フィットが良い、強い関心    |    最適な見込み客、強い関心     |
|    **2**   |    フィットが悪い、関心あり    |   理想ではない見込み客、関心あり     |    フィットが良い、関心あり   |    最適な見込み客、関心あり     |
|   **3**     |   フィットが悪い、関心少    |    理想ではない見込み客、関心少    |    フィットが良い、関心少   |   最適な見込み客、関心少      |
|    **4** <br>**(Behavior - Low)**    |  フィットが悪い、関心なし      |    理想ではない見込み客、関心なし    |    フィットが良い、関心なし   |     最適な見込み客、関心なし    |

## リストとセグメンテーション

### Segmentations

Marketo のセグメンテーションは smartlist と同様に使用されますが、永続的で marketing ops のみが変更できます。動的なコンテンツ（メールとランディングページ）を作成するために使用され、リストの高速処理に使用されます。セグメンテーションは Marketo のバックグラウンドで常に実行されているため、最新の数値のためにリフレッシュする必要はありません。Marketo には合計 20 個のセグメンテーションしか持てません。セグメンテーション基準は、セグメンテーションを構成するセグメントリストの順序に基づいてウォーターフォール形式で適用されます。あなたはセグメンテーションの 1 つのセグメントにしか入れません。

承認されてライブになっているセグメンテーションは次のとおりです。

<details><summary>Buyer Personas - Function</summary>

[Marketo 内のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1008A1)

[Buyer Persona ページ](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/#buyer-personas) のガイダンスに基づいています。

- App Dev
- Back Office
- Blank title
- Compliance
- InfoSec
- Platform
- PMO
- Release
- Tech Leader
- Default

</details>

[Compliant and Emailable](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SG1016A1)

<details><summary>Personas - Level</summary>

[Marketo 内のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1018A1)

- C-Level Executives
- Executives
- Directors
- Managers
- Individual Contributor
- Student / intern
- Blank title
- Default

</details>

<details><summary>Sales Segment</summary>

[Marketo 内のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1017A1)

- Enterprise
- Mid-Market
- SMB
- PUBSEC
- Default

</details>

<details><summary>Region</summary>

メール用には推奨されません。`Region` は親アカウントの国を使用しますが、これはメールを送信する人の所在地ではない可能性があります。このセグメンテーションは、メッセージが Account Demographics に基づいたものでない限り、メールマーケティングに推奨されません。

[Marketo 内のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1013A1)

- AMER
- EMEA
- APAC
- LATAM
- Default

</details>

<details><summary>Person Region</summary>

メールリストに推奨されます。`Person Region` はアカウントではなくリード/コンタクトの国を使用します。地元のイベントを提供する場合や、リージョン内の人々にメッセージを送信する場合は `Person Region` を使用してください。

[Marketo 内のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1031A1)

- AMER
- EMEA
- APAC
- LATAM
- Default

</details>

<details><summary>Funnel Stage</summary>

[Marketo 内のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1021A1)

- Raw > INQ - `Status = NULL, Inquiry or Raw` または (`Status = Recycle` かつ `Person Score < 75`)
- INQ > MQL - `Status = MQL, Accepted or Qualifying` または (`Status = Recycle` かつ `Person Score > 74`)
- MQL > SAO - `Status = Qualified` または `1 Open Opportunity` または `Has an Open Opportunity`
- Customer - `Is Paid Tier = True` または `SFDC Type = Customer`
- Disqualified - Status が `Disqualified` または `Ineligible`

</details>

<details><summary>Priority Countries</summary>

優先国の完全なリストは [こちら](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/6648) で確認できます。

[Marketo 内のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1024A1)

- Tier 1
- Tier 2
- Tier 3
- Embargoed
- Default

</details>

<details><summary>Language Preference</summary>

[Marketo 内のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1023A1)

- French
- Japanese
- German
- Korean
- Spanish
- Portuguese
- Italian
- Non-English, not otherwise listed
- Default (English)

</details>

<details><summary>Personas - Role</summary>

[Marketo 内のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1020A1)

- Developer
- DevOps
- Security / Compliance
- Engineering
- Education (Student / Professor)
- Analyst
- Architect
- Database Admin
- Project Manager
- Sales and Marketing
- IT
- HR
- Purchasing / Buyer
- Accounting / Finance
- C-Level (President / CEO/ COO)
- Retired
- Default

</details>

<details><summary>Sales Territories</summary>

[Marketo 内のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1026A1)

- 現在は US Public Sector のみで利用可能
- 利用可能なセグメントのリストは [このドキュメント](https://docs.google.com/spreadsheets/d/1UAD3JKqe5y-NJBPB5CbjmN5Wq1OObzh_vsLqbuGk9dk/edit#gid=0) で確認できます

</details>

<details><summary>Order Type</summary>

[Marketo 内のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1028A1)

- First Order
- Growth
- Default

</details>

<details><summary>Product</summary>

[Marketo 内のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1027A1)

- Ultimate
- Premium
- Bronze
- SM Trial
- SaaS Trial
- Free User - with previous trial
- Free User
- Previous trial - unknown
- Default

</details>

<details><summary>Education Sector</summary>
このセグメントの説明ドキュメントは [こちら](https://docs.google.com/spreadsheets/d/1Q_TwMimeBOR3rJ8CK4EM6DJ9YWYO56bTLNYevCS8UA0/edit?gid=0#gid=0) で確認できます

[Marketo 内のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1033A1)

- Students
- Teachers
- Faculty
- Unrelated Faculty
- Edu Domain

</details>

<details><summary>Industry</summary>

[Marketo 内のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1032A1)

- Aerospace & Defense
- Automotive
- Banking
- Education
- Energy & Utilities
- Financial services
- Healthcare & Life Sciences
- High tech
- Insurance
- Manufacturing
- Media
- No industry populated
- Nonprofit
- PubSec
- Retail & Consumer goods
- Services
- Telecommunications
- Travel, Transportation & Hospitality
- Default

</details>

### スニペット

[ローカライズドメールフッター（配信停止文言のみ）](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/15/overview/details) - このスニペットは、ローカライズドメールに適用して翻訳された配信停止文言を自動的に含めることができます。受信者が既知の `Preferred Language` を持っている場合、配信停止文言はローカライズされます。優先言語が登録されていない場合、フッターは英語になります。

[ローカライズドフッター、グレーフルフッター - LOC-Full footer(gray)](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/138/overview/details) - これは `View in Web Browser` とローカライズドブログへの直接リンクを含むフルフッターです。グレーフッターのメールで使用します。

[ローカライズドフッター、charcoal フルフッター - Footer - LOC - Charcoal](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/143/overview/details) - これは `View in Web Browser` とローカライズドブログへの直接リンクを含むフルフッターです。charcoal フッターのメールで使用します。

[ローカライズドフッター、ブルーフルフッター - Footer - LOC - Blue](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/145/overview/details) - これは `View in Web Browser` とローカライズドブログへの直接リンクを含むフルフッターです。ブルーフッターのメールで使用します。

{{% details summary="ローカライズドメールフッタースニペットの使い方" %}}
メールでローカライズドメールフッタースニペットを使用するには:

1. 右サイドバーのメールモジュールテンプレートから "Body Text 1 Column" モジュールを選択します。このセクションを既存の配信停止文言の下にドラッグします。
1. 汎用コピーをクリックし、次に表示されるギアをクリックします。ここで選択できるものが 2 つあることに注意してください - コピーとモジュール自体です。コピーのギアを選択するようにしてください。
1. `Replace with Snippet` を選択し、次に `Localized email footer` を選択して Save をクリックします。
1. 次に、既存の配信停止文言のモジュールを選択し、ギアをクリックして `Delete` をクリックします。配信停止文言/フッターは 1 つだけ表示されるはずです。

スニペットをテストするには、`Preview` をクリックし、`View by: Segmentation` を選択します。"Language Preference" を選択し、プレビューしたい言語を選択します。選択した言語に基づいて配信停止文言が変化することがわかります。
{{% /details %}}

[Trust Logo スニペット](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/8/overview/details) - このスニペットは、承認された顧客ロゴを表示するために使用されます。通常は thank you ページで使用されますが、ランディングページでも使用できます。スニペットは、ランディングページの `Trust Logos` セクションがオンに切り替えられたときに表示されます。Marketing Operations のみが、顧客アドボカシーチームからの指示に基づいてこのスニペットを編集する必要があります。

{{% details summary="MOps の使用 - trust logo スニペットの編集方法" %}}
以下の手順は MOps Admin ユーザー向けです。

1. すべての画像は黒またはグレースケールで、高さ 50px x 幅 110px 以下にサイズ調整する必要があります。Canva 内の [このテンプレート](https://www.canva.com/design/DAFiV-KHYew/OazKFgDLLNOIjnVHaJrpKw/edit?utm_content=DAFiV-KHYew&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) を使用して画像のサイズを調整できます。Marketo は Canva からダウンロードした .svg ファイルを拒否するため、ファイルを .png として保存するのが最も簡単です。
1. テンプレートには 14 個のロゴ用のスペースがあります。ロゴを追加する場合は、同数のロゴを削除する必要があります。顧客アドボカシーチームが、どのロゴを更新するかについてのガイダンスを提供する必要があります。
1. サイズ調整した画像を [Design Studio](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/imagesandfiles/25821) に追加します。プレビューは画像のサイズよりも大きく表示されるため、画像がプレビューでは歪んで見えます。ページ上では問題ありません。html を編集するときに自分が楽になるように、各ロゴのリンクを別のドキュメントにコピーしてください。
1. [TEST trust logo スニペット](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/40/overview/details) も利用可能です。ライブスニペットへの変更前に、テストスニペットで変更を行ってそれらを表示し、顧客アドボカシーチームから承認を得ることを推奨します。ライブスニペットへの変更は、すべてのライブランディングページに適用されます。[この](https://page.gitlab.com/TestHopinEvent_Thankyoupage.html) テスト thank you ページで、変更がどのように見えるかを確認できます。以下の編集手順は、テストスニペットとライブスニペットの両方に適用されます。
1. [Trust Logo スニペット](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/8/overview/details)（または更新を始めたばかりの場合はテストスニペット）のドラフトを作成します。HTML をクリックしてスニペットを編集します。スニペットのフォーマットはランディングページテンプレートによって制御されるため、スニペット自体は見栄えがよくありません。
1. "HTML" をクリックして編集します。次のコードをコピーします:
`<a href="INSERT LINK TO CUSTOMER CASE STUDY" target="_blank"> <img src="/images/marketing/marketing-operations/marketo/INSERT LINK FROM DESIGN STUDIO" alt="ENTER NAME OF COMPANY logo" /></a>`
1. html の下部の `</div>` の直前に配置し、指示に従って大文字のテキストを置き換えます。alt テキストはすべて大文字にしないでください。これにより、リストの末尾に新しいロゴが追加されます。別の場所に配置する場合は、ロゴを表示したい場所にコードを配置してください。
1. コードを更新したら、Apply をクリックします。自動保存が完了したら、スニペットを閉じます。次に、ドラフトを承認し "Update all" を選択します。"Update All" はすべての承認済みアセットとすべてのドラフトアセットにスニペットを追加します。ドラフトアセットは自動承認されません。[ノードラフトスニペットの更新](https://nation.marketo.com/t5/knowledgebase/no-draft-snippet-limitations-and-troubleshooting/ta-p/300799) に関する詳細は、Marketo のドキュメントで確認できます。
{{% /details %}}

### その他のフィールドドキュメントと定義

{{% details summary="Email Validations - ZoomInfo 接続とバウンスなどの他の Marketo データポイントによって反映されます。" %}}

|フィールド名|定義              | 送信して大丈夫か?|
|----------|------------------------|------------|
|Valid     |実際のアドレスとして検証された| はい |
|Invalid   |有効でないと検証された   | いいえ |
|Disposable|一時的・使い捨てアドレス    | いいえ|
|Accept all (Unverifiable)| ドメイン全体の設定（詳しくはこちら）| はい/いいえ|
|Unknown   |サーバーに到達できない| いいえ|

{{% /details %}}

### Account Based Marketing List

ABM リストは、Field Marketing と Marketing Program チームが、セールスが高優先と判断したアカウントをターゲットにしてメール/招待状を送るために、依頼に応じて構築されます。これらのリストは、[Marketo Database](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52943077A1) の DMA フォルダーで見つけることができます。
**MktgOps** チームは、これらのリストの作成と維持を担当します。

新しい ABM リストが必要な場合は、[Target list issue template](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new#request-confirm-target-list) を使用して Issue を開き、marketing ops にタグを付けてください。

### Geographic DMA List

Geographic DMA（direct marketing area）は、Field Marketing と Marketing Campaigns チームが、Field 関連および/または Corporate マーケティングイベントに関連するメール/招待状をターゲットにして送るために構築されました。**MktgOps** チームは、これらのリストの作成と維持を担当します。これらのリストは、Marketo の `Database` の `Geographic DMA List` [フォルダー](https://app-ab13.marketo.com/#SL52900024A1) で見つけることができます。

新しい DMA リストが必要な場合は、Marketing Operations プロジェクトで Issue を開き、[DMA_request issue template](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=dma_request) を活用してください。

#### フォーカスメールリスト

Field Marketing と Marketing Campaigns チームは、特定のリージョン、セクター、または会社を追求する際のツールとして、ターゲットメールリストを使用します。メールリストのリクエストは [このテンプレート](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new#request-confirm-target-list) を使用して提出する必要があります。そこから、キャンペーンマネージャーまたは marketing ops がリストを構築またはレビューします。

#### ターゲットリストの SLA

- リストリクエストはメール展開の 7 日前までに必要 - FMM / MPM
- 最終的なスマートリストはメール展開の 2 日前までに利用可能 - MOps

#### リストエクスポート

リストのエクスポートが必要な場合は、[エクスポートリクエスト Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=export_request) を記入してください。

少数のユーザーがエクスポートする権限を持っており、適切なデータ管理手順に従い、データ分析のために PII をダウンロードしないようにする必要があります。

## Marketo Sales Insight

Marketo Sales Insight (MSI) は、SFDC ユーザーが Marketo の異なるアクションや、Marketo を通じたユーザーアクションを見えるようにするのに役立ちます。ユーザーはこのインテリジェンスを使用して、見込み客とのより意味のある会話を持ち、スコアに基づいてリードに優先順位を付けることができます。詳細は [Marketo のドキュメントページ](https://experienceleague.adobe.com/docs/marketo/using/product-docs/marketo-sales-insight/msi-for-salesforce/features/insights-dashboard-feature-overview.html?lang=en) を参照してください。

MSI タブは、Leads、Contacts、Accounts のページレイアウトに配置できます。表示されない場合、またはアクセス権が欲しい場合は、[Sales Systems の Issue](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/new) を作成してください。

SFDC インスタンスのタブで MSI を見つけることもできます。SFDC のメインバナーで `+` アイコンをクリックして `Marketo` を見つけてください。そのタブで MSI の集計ビューを確認できます。

MSI にはいくつかの主要コンポーネントがあります:

### Insights

このタブには、人物の最新のアクティビティのタイムラインが表示されます。`ALL` 今後のメールキャンペーンとイベント（注意: これにはその見込み客に送信されたものだけでなく、すべての今後のメール/イベントが含まれます）が表示されます。タイムラインでは、ウェブアクティビティ、メールの開封/クリック、interesting moments を確認できます。リードタイムラインをクリックして、各アクションの詳細を確認できます。全体のスコアと過去 30 日間の変化のグラフも確認できます。以下のスクリーンショットを参照してください:

![Marketo Sales Insight](/images/marketing/marketing-operations/marketo/MSI.png)

### Interesting Moments

Interesting moments は、人物がイベントに参加したとき、プログラムステータスが変更されたとき、またはフォームに記入したときなど、マイルストーンに達したときにキャプチャされます。SDR は、リードビューの `Last Interesting Moments` フィールドを使用して、見込み客が Inquiry または MQL になる前に取った最後のアクションをすばやく確認します。特定のアクティビティ用に interesting moment を追加したい場合は、MOps に連絡して構築してもらってください。

追加情報については、[このページ](/handbook/marketing/marketing-operations/marketo/interesting-moments) を参照してください

### Web Activity

このタブには、このビューで cookie 化されたユーザーのすべてのウェブアクティビティが表示され、参照元ページが含まれます。リード/コンタクトの場合は、その特定の人物のアクティビティが表示され、Accounts の場合はそのアカウントに関連するすべてのコンタクトのアクティビティが表示されます。

### Score

このタブを使用して、最新のスコア変更を確認します。これは、人物が現在のスコアを達成するために取ったさまざまなアクティビティをすべて確認するのに役立ちます。スコアリングを引き起こしたキャンペーンは、上記の [スコアリングルーブリック](/handbook/marketing/marketing-operations/marketo/#scoring-models) と相互参照できます。

### Email

このタブには、その特定の人物に送信されたすべてのメール、日付、開封またはクリックしたかどうかのチェックボックスが表示されます。

### Quick Actions と Watch List

人物をウォッチリストに追加して、より注意深く監視できます。`email` の横にあるメガネをクリックすると、そのウォッチリストにアクセスできます。Quick actions は現在は設定されていませんが、将来的にはキャンペーンへの見込み客の追加や Marketo 経由でメールを送信するために使用される可能性があります。
