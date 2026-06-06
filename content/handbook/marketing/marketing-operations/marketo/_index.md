---
title: "Marketo"
description: "Marketo は、メールマーケティング、リード管理、プログラム管理に使用される私たちのマーケティングオートメーションプラットフォームです。"
upstream_path: "/handbook/marketing/marketing-operations/marketo/"
upstream_sha: "7b4218e2684ab0e2d919cef32fcfba84065bf46b"
translated_at: "2026-06-06T12:00:00Z"
translator: "claude"
stale: false
lastmod: "2026-06-03T16:50:03-06:00"
---

## Marketo について

[Marketo](https://business.adobe.com/products/marketo.html) は、メールマーケティング、リード管理、プログラム管理に使用される私たちのマーケティングオートメーションプラットフォームです。

## Marketo テックスタックガイド

プロビジョニング、インテグレーション、システム図に関する詳細については、[Marketo テックスタックガイド](/handbook/marketing/marketing-operations/marketo/tech-stack-guide-marketo/#integrations)をご覧ください。

### Marketo Salesforce.com 接続

SFDC でリード/コンタクトが作成されると、自動的に同期され Marketo にも作成されます — 何もせき止められません。同様に、SFDC でリード/コンタクトが削除されると、Marketo でも削除されます。

逆に、Marketo はすべてのレコードを自動的に SFDC にプッシュしませんし、Marketo で削除されたレコードは特に指示されない限り SFDC で削除されません。

リードは以下のシナリオで Marketo から SFDC に同期されます:

1. SFDC に同期されているプログラムのメンバーである
1. 人物が `Inquiry` ステータスに到達した時
1. `MQL` ステータスに到達した時
1. `PTP` スコアが `4` または `5` の時
1. フローステップ `Sync to SFDC` で特に同期するように指示された時

データは Marketo User Permission Set 経由で `Read` または `Read/Write` パーミッションで両者間で共有されます。Accounts フィールドはデフォルトで `Read Only` です。レビュー用のクイックリンクは以下の通りです:

- [Leads](https://gitlab.my.salesforce.com/0PS4M000001136E?s=EntityPermissions&o=Lead)
- [Contacts](https://gitlab.my.salesforce.com/0PS4M000001136E?s=EntityPermissions&o=Contact)
- [Accounts](https://gitlab.my.salesforce.com/0PS4M000001136E?s=EntityPermissions&o=Account)

Marketo は SFDC キャンペーンを作成・編集することもできます。Marketo がそのキャンペーンにマッピングできるようにするには、`Active` チェックボックスをオンにする必要があります。[キャンペーン設定の手順はこちら](/handbook/marketing/marketing-operations/campaigns-and-programs/#marketo-program-and-salesforce-campaign-set-up)。

SFDC のフィールド値に大規模な更新が行われると、Marketo への同期バックログが発生する可能性があります。バックログをチェックするには、[このページ](https://app-ab13.marketo.com/supportTools/sfdcSyncStats)に行き、レビューしたいオブジェクトを選択して `Get Stats` をクリックしてください。Marketo>SFDC はプッシュ数で、SFDC>Marketo はプルとみなされます。この情報を表示するには Marketo にログインしている必要があります。バックログは自動的にクリアされ、システム使用率（GitLab だけでなく Marketo のユーザーベース全体）により業務時間中は遅くなりますが、業務時間外や週末には同期速度が上がります。

### Salesforce のカスタム同期ルール

特定のプロセスが SFDC で空のメールアドレスを持つレコードを作成するため、それらが実行可能でなく、データベースのコストがレコード数に比例して増加することから、これらのレコードが Marketo に流入するのを避けたいと考えています。

Sales Systems と協力して、`Block_Marketo_Sync__c` というカスタム数式フィールドを実装しました。フィールドがチェックされていると、レコードはカスタム同期ルールにより同期がブロックされます。同様に、フィールドがチェックされていないと、Marketo に流入します。

サンドボックスでは、別の[同期ルール](/handbook/marketing/marketing-operations/marketo/#sandbox)があります。

### サンドボックス

Marketo にはサンドボックスがあります。サンドボックスはトレーニング、API リンクの作成、本番に移す前の全体的なテストに使用されます。

サンドボックスへのアクセスを希望する場合は、[AR](/handbook/security/corporate/end-user-services/access-requests/#application-specific-templates) に記入してください。

SFDC ステージングから Marketo サンドボックスに通過するリード数を制限するため、`Marketo Sync` = TRUE の場合のみ、SFDC ステージングから Marketo サンドボックスにリードが同期されるカスタムルールを設定しています。これは本番環境とは反対のロジックです。

#### サンドボックスを SFDC ステージングに再接続する

Sales Systems は、[SFDC ステージング環境](/handbook/sales/field-operations/sales-systems/#sandbox-refreshes)を定期的にリフレッシュします。これが起こると、Marketo サンドボックスに再接続するためのいくつかのステップを取る必要があります。詳細はそのページに記載されています。

## フォーム

[こちら](https://internal.gitlab.com/handbook/marketing/marketing-ops-and-analytics/marketing-operations/operational-setup-marketo/)のドキュメントとともに、以下の手順を使用してください。私たちのウェブサイト（`about.gitlab.com`）のほぼすべてのフォームは Marketo 埋め込みフォームです。マーケティングオペレーションは、既存のフォームの維持と新しいフォームの作成を担当しています。

私たちは主に Global フォームを使用しています。これは、フォームが複数のランディングページで使用され、フォームの自動化が個々の Marketo プログラムで処理されることを意味します。Global フォームで利用できないフィールドが必要な場合は、カスタムフォームをリクエストする必要があります。

カスタムフォームが必要な例:

- 現在のフォームに表示されていないフィールドの追加
- 単一のランディングページを使用して、複数の関連イベントの登録を収集する
- 特定のイベント日のドロップダウンやチェックボックスの追加
- コメントや珍しい情報（T シャツのサイズなど）の収集
- 登録者が好みを示す必要がある場合（参加するセッショントラックなど）

プログラムにカスタムフォームが必要かどうかわからない場合や、プログラムが標準セットアップ以外の何かを必要とする場合は、計画プロセス中に MOps チームに尋ねて、ガイダンスを受け、プログラムのタイムラインを軌道に乗せられるようにしましょう。

新しいカスタムフォームの作成が必要な場合は、[フォーム作成 Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=form_request) を開いてください。フォーム作成と複雑な自動化の一般的なタイムラインは 2 週間です。

既存のフォームを新しいページで使用している場合は、フォームの背後にある自動化を構築できるよう、[リクエストを入力](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=form_processing)してください。フォームに対する自動化が作成されていない場合、フォームを記入した人物は Marketo に登録されますが、キャンペーンに処理されたり、フォローアップに送信されたりしません。

フォームのドキュメントは[こちら](https://docs.google.com/spreadsheets/d/1cV_hI2wAzLxYYDI-NQYF5-FDDPXPXH0VV5qRBUJAQQk)で確認できます。これには、現在のすべてのフォーム、および標準化された国と州のピックリストが含まれています。

**翻訳済みフォームの利用可能な言語**: スペイン語、フランス語、イタリア語、韓国語、ドイツ語、ポルトガル語、日本語。これらは Global フォームで、Design Studio > Forms > Translated Forms にあります。これらを使用することは重要です（クローンしないこと）、なぜなら `Language Preference` の[ローカリゼーションセグメンテーション](/handbook/marketing/marketing-operations/marketo/#segmentations)に影響するからです。

ローカライズされたフォームでは、`Preferred Language` を適切にキャプチャするために特別な隠しフィールドが必要です。詳細なセットアップ手順については、[この Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/10025) を参照してください。

新しい言語が必要、または新しいフォームが必要な場合は、[翻訳](/handbook/marketing/localization/)を集めて、その後[サポートをリクエスト](https://form.asana.com/?k=1i4lL5h0RLzfTqNWBTH84Q&d=306855239930259)してください。

すべてのフォームは以下のガイドラインに従う必要があります:

- ライトボックスを使用しない
- ラベル幅 = 150 / フィールド幅 = 300
- フィールドは縦に積み重ねる
- `Country` フィールドのラベルは `Country/Region` にする
- `State/Province` は `Country` = `United States` または `Canada` または `Australia` の場合のみ表示する。可視性ルールは、`Canada` が選択されると `Province` を、`United States` または `Australia` が選択されると `State` を動的に表示する
  - 同期エラーを避けるため、[国 &/または州値の標準化](/handbook/marketing/marketing-operations/marketo/#standardization-of-country-or-state-values)について詳細を参照してください
- 一般的に、`City` は `Country` = `Ukraine` の場合のみ表示する
- フォームには、メールでの通信に `オプトイン` する同意を取得するチェックボックスを必ず含める
- `Country` = `Ukraine` の場合、提出者がウクライナのクリミア地域に住んでいないことを確認する追加チェックボックスを表示する
- Country には[禁輸国](/handbook/legal/trade-compliance/)を含めない
- すべてのフォームには `gclid` および Google Analytics トラッキング用の隠しフィールドを設定する

ダイレクトメールキャンペーン用に自宅住所を収集する場合、ランディングページまたはフォームに以下の文言を含める必要があります。さらに、アイテムを送付した後にアドレス情報を削除する Marketo の削除キャンペーンを設定する必要があります。また、アイテムを送付するベンダーがレコードからこれを削除することも確認してください。`自宅住所をお伝えいただくことで、お客様の自宅へのアイテム送付の許可を頂いたものといたします。このデータは他の目的では使用しません。`

### ウェブサイトフォーム管理

about.gitlab のフォームは埋め込み Marketo フォームです。フィールド、レイアウト、ラベル、CSS の変更はすべて Marketo 内で行われ、GitLab のソースファイルに変更を加えることなく本番にプッシュできます。フォーム全体を変更または埋め込みする必要がある場合は、`form_request` [テンプレート](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/blob/master/.gitlab/issue_templates/form_request.md)を使用して Issue を開いてください。

各 Marketo フォームは、Google Analytics でイベントをトリガーするために、送信成功後にイベントをプッシュする必要があります。発火するイベントを指定するために、以下のイベントラベルを使用しています。

1. `demo` - `/demo/` および `/demo-leader/` の静的デモ用
1. `webcasts` - `/webcast/` の任意のページのフォーム用
1. `trial` - `/free-trial/` のフォーム用
1. `resources` - `/resources/` の任意のページのフォーム用
1. `events` - `/events/` の任意のページのフォーム用
1. `services` - `/services/` のフォーム用
1. `sales` - `/sales/` のフォーム用
1. `public-sector` - `/solutions/public-sector/` のフォーム用
1. `mktoLead` - ニュースレター購読フォーム送信イベントで使用されるレガシーカスタムイベントラベル。現在は primary、security、all-remote のニュースレターフォーム送信に使用されています。

フォーム埋め込みコードの `return false` の上に以下の行を追加します。`demo` から適切なフォーム完了を反映するようにイベントラベルを更新してください。

```javascript
dataLayer.push(
{
  'event' : 'demo',
  'mktoFormId' : form.getId(),
  'eventCallback' : function()
  {}, 'eventTimeout' : 3000
});
```

### データベースの定期的な削除

マーケティングオペレーションは、データベースから非アクティブなリードを定期的に削除する自動化プロセスを作成しました。これにより、データ品質を維持し、不要なレコードを保管することに伴うコストを削減できます。リードは Marketo と Salesforce の両方から削除され、以下の基準に従います:

| フィルタの説明              | 基準                                         | アクティビティ日 |
|----------------------------------|-----------------------------------------------|------------------|
| メール内のリンクをクリックしていない        | Email: is any                                 | 過去 2 年間  |
| 商談に追加されていない     | Opportunity: is any                           | 過去 2 年間  |
| メールを開いていない                 | Email: is any                                 | 過去 2 年間  |
| フォームに記入していない              | Form Name: is any                             | 過去 2 年間  |
| ウェブページのリンクをクリックしていない     | Link Name: is any                             | 過去 2 年間  |
| インタレスティングモーメントがない       | Type: is not empty                            | 過去 2 年間  |
| ウェブページを訪問していない                | Web Page: is any                              | 過去 2 年間  |
| 人物が作成されていない           |                          | 過去 2 年間  |
| SFDC タイプ                        | SFDC Type: is Lead                            | -                |
| 人物ステータス                    | Person Status: is 'Raw', 'Inquiry', 'Disqualified', 'Recycle', 'Ineligible' | - |
| アカウントタイプ                     | Account Type: is not Customer; Partner; Reseller | -                |
| SFDC アクティビティが記録されていない          | Subject: is any                         | 過去 2 年間   |
|現在 Outreach でシーケンス処理されていない|||

削除プロセスは毎週実行され、上記のすべての基準を満たすリードを永久に削除します。

このプロセスは、最近のアクティビティがあるリード、プログラムを通過したリード、商談や現在の顧客に関連付けられたリードには影響しないことに注意してください。これにより、本当に非アクティブなレコードを削除しながら、価値のあるリードを保持できます。

マーケティングオペレーションのチームメンバーは、プロセスが正しく実行されていることを確認し、対処が必要となる潜在的な問題や例外を特定するために、削除ログを定期的にレビューする必要があります。

このプロセスは[このスマートキャンペーン](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC53025A1ZN19)を通じて実行され、[このリスト](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52963827C3LA1)から基準を満たすすべてのレコードを削除します。

### プログラムアセットの有効期限

2022 年 11 月から、Marketo 内のチームは、期限切れのランディングページや関連性のなくなったスマートキャンペーンを整理する方法として、2022 年初頭に製品に追加された[アセット有効期限機能](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/programs/working-with-programs/local-asset-expiration.html?lang=en#:~:text=Right%2Dclick%20on%20your%20desired,Choose%20an%20expiration%20date)を活用するように移行します。このプロセスの詳細手順は、[キャンペーンとプログラム](/handbook/marketing/marketing-operations/campaigns-and-programs/)ページのハンドブックで確認できます。

2024 年 7 月から、Marketo はアセット有効期限のためにイベントページ（https://about.gitlab.com/events/）にリンクするようになります。これがホームページの代わりに新しいリダイレクトになります。アセット有効期限を活用することで、使用されなくなった各 LP を手動で更新する必要がなくなり、ホームページではなく /events にリダイレクトされるようになります。注意: フォールバックページは、認識できないランディングページの場合と、ランディングページが利用できない場合にのみ使用されます。アセット有効期限を設定せず、より長くページを利用可能にしたい場合は、後で手動でリダイレクトをクローズすることもできます。

### Marketo の製品データ

データおよびエンジニアリングチームは、製品内の顧客およびトライアル使用に関するデータを Marketo に取り込むためのインテグレーションを開発しました。

1. [Marketing Contact Datamart & Pump](https://internal.gitlab.com/marketing-operations/product-data/#marketing-datamart-pump-and-pql-information-email-marketing-data-mart): フィールドは `[CDB]` で始まる。このデータは Hightouch により毎晩投入される
1. [SaaS Trial & Hand-Raises](https://internal.gitlab.com/marketing-operations/product-data/#saas-trials--handraise): フィールドは `[PQL]` で始まる
1. [Propensity to Buy Models](/handbook/enterprise-data/organization/data-science/#conversion): フィールドは `[PTP]` で始まる - 現時点ではトライアルユーザーのみ

### キャンペーン制限

特定のスマートまたはメールキャンペーンを通じて処理できるレコード数には 250,000 件の上限が設定されています。スマートキャンペーンのスマートリストが 250,000 レコードを超える更新またはメール送信を行うように設定されている場合、実行されず `aborted` になります。これは、誤った大量更新やメール送信を防ぐために設けられています。この上限を超えるキャンペーンを実行する必要がある場合は、#mktgops に連絡してください。

#### 国 &/または州値の標準化

`Country` &/または `State` フィールドの値が必要な Salesforce フォーマットを満たすことを保証するために、いくつかのワークフローでこれらのフィールドをクリーニングしています。州は省略形ではなく、スペルアウトする必要があります（例: CA は California）。`Country` &/または `State/Province` の標準化が SFDC と完全に一致しない場合、リードは同期されません。新しい標準化が必要な場合は、[マーケティングオペレーションプロジェクト](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=)で Issue を開いてください。SFDC で国/州が更新された場合、同期問題を防ぐために [customersDOT YML](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/3a7b78445d5cc1a5d53de7f003958004ec337ba5/data/countries.yml) ファイルも更新する必要があります。

すべての標準化スマートキャンペーンは以下に含まれています:

`Marketing Activities` -> `Operational - Do not edit` -> `Data Management` -> `01 Data Management` -> `04-Normalize Data`

- 州の値を受け付ける国は以下のみです: United States、Canada、Ireland、India、Brazil、Australia、China、Italy、Mexico
- 米国の全 50 州とカナダのすべての州には、2 文字の省略形をフルスペルに設定する標準化キャンペーンがあります。
- 以下の国には、共通のバリエーションを受容値に更新する仕組みがあります: United States、Bolivia、Canada、China、France、Germany、Hong Kong、India、Iran、Ireland、Macao、Myanmar、Netherlands、Russia、South Korea、Sweden、Switzerland、United Kingdom、Venezuela、Viet nam。

## MQL とリードスコアリング

マーケティング適格リード（Marketing Qualified Lead）とは、デモグラフィック/ファーモグラフィックおよび/または行動情報に基づいて `100` ポイントの閾値に達したリードのことです。[MQL スコアリング](/handbook/marketing/marketing-operations/marketo/#scoring-models)は以下に詳述されており、ポジティブまたはネガティブなポイント値で重み付けされたさまざまなアクションおよび/またはプロフィールデータで構成されています。

ビジュアルな概要については、この[スライド](https://docs.google.com/presentation/d/1KMyzQm_-7V7jeSJZuiedmIINti_uEWiW0NBYiX5viSA)を使用してください。

### Re-MQL

詳細については、[リードライフサイクルページ](/handbook/marketing/marketing-operations/lead-lifecycle/#lead-lifecycle)をご覧ください。

リード/コンタクトが `Recycle` ステータスにあり、再び [MQL 閾値](/handbook/marketing/marketing-operations/)に到達した場合、re-MQL が許可されます。

`MQL` する回数は `MQL Counter` フィールドでカウントされます。`Initial MQL DateTime` は、見込み客が[MQL 閾値](/handbook/marketing/marketing-operations/#lead-scoring-lead-lifecycle-and-mql-criteria)に最初に到達した時刻を保持します。`MQL Date` は、リードが MQL 閾値に到達した最新の日付に上書きされます。

リードが `Recycle` に設定されると、`Behavior Score` は 0 にリセットされます。`Person Score` は `Demographic Score` の値にリセットされます。さらに、過去に `MQL` に到達した人物は、`Recycle` にリセットされた後にビヘイビアスコアを上げるアクションを取ると、追加で `+20` のスコアが付与されます。リードが MQL 閾値に達する前に `Accepted` だった場合、その後 30 日以内に `Recycle` に設定されると、リードの `Behavior Score` はアクションを取った時に `Inquiry` だった時の値にリセットされ、`Demographic Score` は再度実行され、全体の `Person Score` はこの 2 つの値の合計になります。

リードが `Recycle` から `MQL` に `Re-MQL` すると、`Recycle Reason` フィールドは `Null` に設定されますが、その `Recycle Reason` の値はリードまたはコンタクトの `Previous Recycle Value` フィールドに保持されます。このフィールドは Marketo によってのみ設定されます。`Recycle DateTime` は最初の 1 回のみ更新されます。リードが再度 `MQL` ステータスに達した場合、ラウンドロビンのために LeanData によって再ルーティングされず、元のオーナーの名前のままになります。

リードのライフサイクルを確認するには、[figjam フローチャート](https://www.figma.com/file/lycXH6cMKK5oNaKj2RSigx/Re-MQL-Workflows_2023-08-22_10-56-57?type=whiteboard&t=HDkNJDbCt6265Ezf-1)を参照してください。後のステップから `Raw` または `Inquiry` のステータスに戻ることはできないことに注意してください。

### スコアリングモデル

リードスコアリングモデルは、MQL に到達するための 100 ポイントシステムです。レコードのデモグラフィックおよび/またはファーモグラフィック情報、および GitLab マーケティングとの行動およびエンゲージメントに基づいて、ポジティブおよびネガティブポイントが割り当てられます。`Person Score` は `Behavior Score` と `Demographic Score` の合計です。MQL するには `Person Score` が `100` に達する必要があり、`Behavior Score` は `0` であってはなりません。

毎晩実行されるフローがあり、ネガティブになったリードを `0` にリセットします。

MQL の瞬間の `Demographic`、`Behavior`、`Person` スコアは、Marketo 内で `X Score at MQL` という 3 つの別々のフィールドを通じて記録されます。

一部のリードは、以下の場合スコアリングから除外されます:

- `@gitlab.com` のメールアドレスを持っている
- 競合他社である
- Status = `Disqualified` または `Ineligible`
- 会社名が `student`、`personal`、`test` および類似のもの
- パートナーによって積極的に取り組まれている（`Prospect Share Status` = `Sending to Partner`、`Accepted`、または `Pending`）
  - スコアはパートナーと共有される時にタイムスタンプが付けられ、リードが社内 SDR チームに戻る時のために保存されます。スコアは、さらなる見込み顧客活動のためにチームメンバーに戻る際、スコア減衰とともにリードに再適用されます

#### なぜスコアリングモデルを使用するのか？

スコアリングモデルを使用する「なぜ」のスライドデッキと、いくつかのポインターは[こちら](https://docs.google.com/presentation/d/1Xl1xcrOeFsDar2B9kTmMH1Hrw5WKsNx7mDL9xtVeBMs/edit#slide=id.g1d24c3e4ddd_5_252)で確認できます。注: これは LevelUp コースで使用されるスライドデッキです。

#### スコアリングモデルの更新

セールスデベロップメントとマーケティングアナリティクスチームと協力し、マーケティングオペレーションは毎会計年度の Q4 にリードスコアリングモデルを更新します。モデルを更新する時期を制限することで、MQL の前年比ボリュームを公平に比較できます。年間を通じて変更を考慮する必要がある代わりに、レポーティングで言及できる小さな期間に変更を凝縮します。

年中にリードスコアリングモデルへのフィードバックを共有するには、[このエピック](https://gitlab.com/groups/gitlab-com/marketing/-/epics/5621)にコメントを残すか、既存の Issue をそのエピックにリンクしてください。私たちはこの Issue を頻繁にレビューし、リードスコアリングモデルを更新する際に各項目を考慮します。バグ修正と判断した場合は、Q4 のタイムフレーム前の更新を検討します。

フィードバックを残す際は、変更がリクエストされる理由について効果的な詳細を提供することが重要です。これらの詳細がないと、変更の調査に時間がかかり、その妥当性の背景にある必要なコンテキストが時間の経過とともに失われる可能性があります。少なくとも、以下を含めてください:

- 影響を受ける SFDC リードへのリンク - または複数のリードの場合、分析に役立つ列を含む Google sheet または SFDC レポート
- 認識される問題の概要と、それがワークフローに与える影響
- 該当する場合、より高い/低いスコアになるべきだった最近のキャンペーンを記載

#### Auto-MQL

特定の基準に基づいて、リードが auto-MQL する場合があります。なお、auto-MQL は `Behavior` スコアカテゴリの一部とみなされます。シナリオは以下のとおりです:

<!-- Self-Managed Trial + Business email domain
- SaaS Trial - Signed Up + Business email domain
- SaaS Trial Signed Up + `Setup for Company/Use = TRUE`-->

| **Auto-MQL ビヘイビア** | **キャンペーン説明 / プログラムステータス** | **割り当てポイント** | **スケジュール/フロー制限** |
| ------ | ------ | ------ | ------|
| Follow Up Requested  | Workshop > Follow Up Requested, <br> Vendor Arranged Meetings > Follow Up Requested, <br> Sponsored Webcast > Follow Up Requested, <br> Survey > Follow up Requested, <br> Owned Event > Follow Up Requested, <br> Webcast > Follow Up Requested, <br> Field Event > Follow Up Requested, <br> Conference > Follow Up Requested, <br> Executive Roundtables > Follow Up Requested| +100 | 毎回 |
| Meeting Requested, <br> Meeting Attended  | Conference > Meeting Attended, <br> Vendor Arranged Meeting > Meeting Requested   | +100 | 毎回 |
| Inbound - High  | Contact Request, <br> Renewals, <br> In-app Health Check, <br> Duo Requests <br> | +100 | 1日1回 |
| Inbound - Hand Raise  | [Hand Raise PQL](/handbook/product/product-principles/#a-pql-can-be-further-broken-down-into-two-types-usage-and-hand-raise) | +100 | 1日1回 |
| [PTP Score](https://internal.gitlab.com/handbook/sales/propensity_models/)  |Propensity Model 経由で新たに 4 または 5 のスコアが割り当てられ、Lead Score Classification 経由で `A` または `B` のランキングが割り当てられた場合。<br> 詳細は[教育用デッキ](https://docs.google.com/presentation/d/1dxSXekzw-SIF1g4pjNf6QGNBUY1L6euggsqqr9BTHUY/edit#slide=id.g1d24c3e4ddd_5_252)またはハンドブックを参照 <br>  | +100 | 90日に1回 |
| Web Chat - <br>Qualified  |ウェブチャットインタラクションまたはミーティング予約 | +100 | 1日1回 |
|* Inbound - Med|インバウンドフォーム、上記以外で Startup 申請者を除く |    +100|1日1回|
|MM+ Valuable Trials | MM+ および EDU 除外の Valuable Trials（SaaS および Self-Managed）  |+100 |6ヶ月に1回|

#### ビヘイビアスコアリング

ビヘイビアスコアリングは、人物が取ったアクションに基づいています。スコアリングできる頻度のケイデンスは以下に記載されています。`Person Score` が `300 pts` を超えると、ビヘイビアスコアリングは null になります。キャンペーンスコアリングでは、スコアをキャプチャするために成功が必要であり、以下にアスタリスク(*)で印付けされたものはそうです。`success` を構成するものを確認するには、[プログラムページとプログレッションステータス](/handbook/marketing/marketing-operations/campaigns-and-programs)を参照してください。

|**ビヘイビア**|**キャンペーン説明 / プログラムステータス**|**割り当てポイント**|**スケジュール/フロー制限**|
|:------:|:------:|:------:|:------:|
|*Conference 参加 | Conference > Attended, <br> Conference > Attended On-Demand | +10 | 毎回|
|*対面参加 | Executive Roundtables > Attended, <br> Owned Event > Attended, <br> Owned Event > Attended On-demand, <br> Speaking Session > Attended, <br> Vendor Arranged Meetings > Attended, <br> Vendor Arranged Meetings > Meeting Attended, <br> Live Event > Attended | +40 | 毎回|
|*オンライン参加| Sponsored Webcast > Attended, <br> Sponsored Webcast > Attended On-demand, <br> Workshop > Attended, <br> Workshop > Attended On-demand, <br> Webcast > Attended (techdemo only), <br> Webcast > Attended On-demand (techdemo only)| +20| 毎回 |
|*Webcast 参加 | Webcast > Attended, <br> Webcast > Attended On-demand | +40 | 毎回|
|*Conference Booth | Conference > Visited Booth| +20 | 毎回|
|*コンテンツシンジケーションダウンロード| Content Syndication > Downloaded| +10| 30日に1回|
|*Gated Content - High|Gated Content > Downloaded（Forrester または Gartner を含む必要あり）| +35|毎回|
|*Gated Content - Med|Gated Content > Downloaded|+15|  毎回|
|*Paid Social | Paid Social > Responded  |+10| 毎回|
|*PathFactory |PF コンテンツを消費|+10| 毎回|
|対面登録 |Owned Event > Registered, <br> Field Event > Registered, <br> Speaking Session > Registered, <br> Conference > Meeting Requested, <br> Live Event > Registered|    +20    |毎回|
|オンライン登録 |Workshop > Registered, <br> Sponsored Webcast > Registered, <br> Webcast > Registered, <br> Executive Roundtables > Registered, <br> Vendor Arranged Meetings > Registered|    +20    |毎回|
|Subscription|Subscription Form を記入    |+5|1週間に1回    |
|*Survey - High|(None Defined)    |+45| 毎回|
|*Survey - Med|(None Defined)    |+30| 毎回|
|*Survey - Low|Googleforms, <br> Default    |+15|  毎回|
|キーウェブページの訪問|`/pricing/`,<br> `/sales`,<br> `/install`,<br> `/features`,<br> `/direction`,<br> `/solutions/startups/`,<br> `/releases/gitlab-com/`    |+25    |1週間に1回    |

##### 自動ブースター

スコアへのブーストは、上記の従来のアクションを超える自動アクションが行われた時に発生します。

|**インタラクションブースター**|キャンペーン説明|**割り当てポイント**|**スケジュール/フロー制限**|
|:-------------:|:-------:|:-----:|:--------:|
|Re-MQL Score|    ステータスが Nurture、ユーザーがビヘイビアスコアを上げるアクティビティを取る<br>MQL Counter >0    |+20    |    1ヶ月に1回|
| [6QA 識別](/handbook/marketing/marketing-operations/6sense/#marketo) | 6sense の予測インテントデータモデルが GitLab に関心を示すリードとコンタクトを識別した場合。Integrate の DAP ツール経由で Marketo にプッシュされたリードは、最後の Integrate プッシュから 30 日間除外されます | +20| 3ヶ月に1回|

<!--|PF Engagement Booster 2|Engagement Time > 4 minutes|+15|Everytime|
|PF Engagement Booster 1|Engagement Time >  2 minutes < 4 minutes|+10|Everytime|

-->

#### デモグラフィックスコアリング

ジョブロール/ファンクションとシニアリティの説明は[こちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)で確認できます。デモグラフィックスコアリングには 70 pt のハードリミットがあり、最大値に達した後は、デモグラフィックスコアに関連するさらなるパーソンスコアの蓄積が制限されます。

|**デモグラフィック特性**|キャンペーンタイプ|**ポイント**|**スケジュール/フロー制限**|
|:-------------:|:-------:|:-----:|:--------:|
|Setup for Company/Team Use|製品で会社またはチーム用に使用していると自己識別|    +25    |1回|
|ビジネスメールドメイン|有効なビジネスメールアドレスを持っている|    +35    |1回|
|シニアリティ - 高|[説明はこちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    +15    |   1回|
|シニアリティ - 中|[説明はこちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    +15    |   1回|
|シニアリティ - 低|[説明はこちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    +5    |    1回|
|ファンクション - 高|[説明はこちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    +20    |   1回|
|ファンクション - 中|[説明はこちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|+15|   1回|
|ファンクション - 低|[説明はこちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    +10 |    1回|
|国 - Tier 1, Tier 2 |[Country = Tier 1, Tier 2](/handbook/marketing/localization/)|    +5   |1回|

#### スコア減衰

スコア減衰は、リードが `partner` ステータスにあることでスコアが凍結されている場合にも適用されることに注意してください

|**ビヘイビア減衰**|**キャンペーン説明**|**削除ポイント**|**スケジュール/フロー制限**|
|:-------------:|:-------:|:-----:|:--------:|
|30日間アクティビティなし|過去 30 日間にウェブ、スコアリング、プログラムのアクティビティなし、過去 30 日間に作成されていない|    -10    |    1ヶ月に1回|
|Web: 低価値訪問|`/jobs`, `/careers`, `/unsubscribe`|    -10    |1日1回|
|Email:  Bounce    |Email Hard Bounces|    -20|1ヶ月に1回|
|Email: Unsubscribed|Email から購読解除|    デモグラフィックスコアに基づくスコアリセット    |1ヶ月に1回|

| **デモグラフィック減衰** |**キャンペーン説明**|**削除ポイント**|**スケジュール/フロー制限**|
|------|------|------|------|
|ジェネリックドメイン|[ジェネリックメールドメインを含む](https://docs.google.com/spreadsheets/d/1IO7DAIvhAhvIydkvLjwP-X_g97Zharf8JpkSVIsmiSs/edit?usp=sharing)|    -10    |1回|
|シニアリティ - ネガティブ|[説明はこちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    -10    |    1回|
|ファンクション - ネガティブ|[説明はこちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    -20    |  1回|

#### トライアル閾値スコアリング

標準のリードスコアリングモデルに加えて、GitLab は GitLab トライアル専用のセカンダリスコアリングモデルを活用し、特定の特性を示すトライアルユーザーを `MQL` させることを意図しています。トライアル閾値スコアリングシステムは、元のリードスコアリングワークフローと連携して機能します。スコアリングメカニズムは、AMER、APAC、EMEA リージョン内で、各リージョンの最も早いタイムゾーンに基づき、1 日 2 回、08:00 と 14:00 に発火します。トライアルユーザーは `25` ポイントに達すると `MQL` し、その後さらなるスコアリングから除外されます。スコアリングメカニズムは、プログラムメンバーシップと [Days Since Trial Counter](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC72010C3ZN19) でフィルタリングされ、これはトライアル開始の `40 日` 後に終了します。

| **トライアルスコアリング特性**| **スコアリングの説明** | **割り当てポイント** | 
| ------ | ------ | ------| ------ |
|   6sense Grade     |   A-D のうち 6sense が割り当てるランキング     | `A` = +15<br>`B` = +7<br>`C` = +0<br>`D` = +3 |
|   6sense Profile     |  6sense が割り当てる `Weak`、`Moderate`、または `Strong` のランキング      | `Strong` = +12<br>`Moderate` = +5<br>`Weak` = +0|
|非公開メールドメイン|メールアドレスが一般公開されているドメインとして識別されていない|+10 |
|利用された Duo 機能の数|トライアル期間中に採用された Duo 機能の数に応じてスコアを割り当て| `0` = +0<br>`1` = +5<br>`2` = +10<br>`3+` = +15 |
|ユーザーの役職が管理職か？| Customer Database から引き継がれたブール値で判定| +10|
|ユーザーに一致するアカウントがあるか？|コンタクトとアカウントの関係、または Traction がリードをアカウントに一致させようとすることで判定された一致アカウント|+5 |
|ユーザーに対象となる役職があるか？|Customer Database が `Upper Management` または `Platform / Ops / Infrastructure Engineering` に関連する役職を共有している場合にスコアリング| `Upper Management` = +8 <br>`Platform / Ops / Infrastructure Engineering` = +0 |
|PTP Score| PTP グループが 3-5 の場合にスコアリング| `3` = +2 <br> `4` = +7<br> `5` = +10|
|LATAM 以外のリージョン + SMB 以外のセールスセグメント|LATAM リージョンと SMB セールスセグメントはこのスコアを受け取らず、それ以外のすべてのリージョンとセールスセグメントがこのスコアを受け取る| `+3` |
|有効化された GitLab 製品ステージの数| 製品が一定レベルの製品ステージ採用を記録した場合にスコアを受け取る| `1 stage` = +2 <br> `2 stages` = +7 <br> `3+ stages` = +12 |

### リードスコア分類

`リードスコア分類` は、見込み客が SAO に変換する可能性を分類することを目的とした 2 文字のスコア/指定であり、スコアはリードの現在の `デモグラフィック` および `ビヘイビア` スコアに基づいてモデル化されます。スコアとその定義のビジュアル表現は、`Lead Classification Matrix` として以下に示されています。リードステータスが `Ineligible` または `Disqualified` に設定されたリードは、`リードスコア分類` が `Disqualified` または `Ineligible` に設定されます。

ハンドブックページが壊れた場合のために、Lead Classification Matrix と Lead Classification Definitions Table は [Figma に存在](https://www.figma.com/file/U4GBe693vvyyrXZnMGGjS7/Welcome-to-FigJam?type=whiteboard&node-id=0%3A1&t=PZBNGKUfGQo8Ocvn-1)します。

![Lead Classification Matrix](/images/marketing/marketing-operations/marketo/lead_classification_matrix.png)

#### Lead Classification Matrix の使用方法と Lead Classification の読み方

リード分類スコア（およびそのビジュアルコンパニオンマトリックス）は、プロフィール適合度とエンゲージメントレベルの両方に基づいてリードフォローアップを優先するように設計されています。リードの `デモグラフィック適合度` は、文字/列 `A`、`B`、`C`、`D` に関連付けられています。リードの `ビヘイビアレベル` は、行 `1`、`2`、`3`、`4` に関連付けられています。`A` と `1` が最高の指定であり、`D` と `4` が最低です。マトリックスを見ると、最低の分類は左下の `D4` で、最高の分類は右上の `A1` です。

リードスコア分類を最適に活用するには、マトリックスまたは以下の定義表で提供されている定義を読み、適切に行動してください。例えば、`B2` または `A2` に分類されたリードは、`D2` に分類されたリードよりも closed-won の商談を生み出す可能性が高いです。なぜなら、カテゴリ `A` と `B` の属性は GitLab が定義した理想的なバイヤープロファイルに適合しているからです。`D2` リードでも、関心が示されているために closed-won の商談に至る可能性はありますが、デモグラフィック適合度が低いため、より高いコンバージョンと商談につながる理想的なバイヤー属性が欠けている可能性があります。[リードスコアリングの教育スライドデッキ](https://docs.google.com/presentation/d/1Xl1xcrOeFsDar2B9kTmMH1Hrw5WKsNx7mDL9xtVeBMs/edit#slide=id.g2b1545a7631_0_1)で指摘されているように、緑色の分類四角は、理想的なバイヤーペルソナの属性を持つ人物が `MQL` する _範囲_ を示し、`A1` は確定的な `MQL` を示します。

|  | D <br> (デモグラフィック - 低) | C | B | A <br> (デモグラフィック - 高) |
| ------ | ------ | ------ | ------ | ------ |
|   **1**  <br> **(ビヘイビア - 高)** |  不適合、強い関心      |  理想的でない見込み客、強い関心      |   良い適合、強い関心    |    適切な見込み客、強い関心     |
|    **2**   |    不適合、関心を示している    |   理想的でない見込み客、関心を示している     |    良い適合、関心を示している   |    適切な見込み客、関心を示している     |
|   **3**     |   不適合、関心が低い     |    理想的でない見込み客、関心が低い    |    良い適合、関心が低い   |   適切な見込み客、関心が低い      |
|    **4** <br>**(ビヘイビア - 低)**    |  不適合、関心なし      |    理想的でない見込み客、関心なし    |    良い適合、関心なし   |     適切な見込み客、関心なし    |

## リストとセグメンテーション

### セグメンテーション

Marketo セグメンテーションはスマートリストに似ていますが、永続的でマーケティングオペレーションのみが変更できます。動的コンテンツ（メールとランディングページ）を作成し、リストの高速処理に使用されます。セグメンテーションは Marketo のバックグラウンドで常に実行されているため、最新の数値のために更新する必要はありません。Marketo には合計 20 個のセグメンテーションしか持てません。セグメンテーション基準は、セグメンテーションを構成するセグメントリストの順序に基づいてウォーターフォールします。セグメンテーションの 1 つのセグメントにのみ存在できます。

承認され、稼働中の以下のセグメンテーションがあります。

<details><summary>バイヤーペルソナ - ファンクション</summary>

[Marketo のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1008A1)

[バイヤーペルソナページ](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/#buyer-personas)のガイダンスに基づきます。

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

<details><summary>ペルソナ - レベル</summary>

[Marketo のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1018A1)

- C-Level Executives
- Executives
- Directors
- Managers
- Individual Contributor
- Student / intern
- Blank title
- Default

</details>

<details><summary>セールスセグメント</summary>

[Marketo のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1017A1)

- Enterprise
- Mid-Market
- SMB
- PUBSEC
- Default

</details>

<details><summary>リージョン</summary>

メールには推奨されません。`Region` は親アカウントの国を使用しており、これはメール送信先の人物の所在地ではない場合があります。このセグメンテーションは、メッセージがアカウントデモグラフィックに基づくものでない限り、メールマーケティングには推奨されません。

[Marketo のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1013A1)

- AMER
- EMEA
- APAC
- LATAM
- Default

</details>

<details><summary>パーソンリージョン</summary>

メールリストに推奨されます。`Person Region` はアカウントではなく、リード/コンタクトの国を使用します。地元のイベントを提供する場合や、地域内の人々にメッセージを送信する場合は `Person Region` を使用してください。

[Marketo のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1031A1)

- AMER
- EMEA
- APAC
- LATAM
- Default

</details>

<details><summary>ファネルステージ</summary>

[Marketo のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1021A1)

- Raw > INQ - `Status = NULL, Inquiry または Raw` または (`Status = Recycle` かつ `Person Score < 75`)
- INQ > MQL - `Status = MQL, Accepted または Qualifying` または (`Status = Recycle` かつ `Person Score > 74`)
- MQL > SAO - `Status = Qualified` または `1 Open Opportunity` または `Has an Open Opportunity`
- Customer - `Is Paid Tier = True` または `SFDC Type = Customer`
- Disqualified - Status が `Disqualified` または `Ineligible`

</details>

<details><summary>優先国</summary>

優先国の完全なリストは[こちら](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/6648)にあります。

[Marketo のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1024A1)

- Tier 1
- Tier 2
- Tier 3
- Embargoed
- Default

</details>

<details><summary>言語設定</summary>

[Marketo のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1023A1)

- French
- Japanese
- German
- Korean
- Spanish
- Portuguese
- Italian
- 英語以外、上記以外の言語
- Default (English)

</details>

<details><summary>ペルソナ - ロール</summary>

[Marketo のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1020A1)

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

<details><summary>セールステリトリー</summary>

[Marketo のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1026A1)

- 現在は US Public Sector のみ利用可能
- 利用可能なセグメントのリストは[このドキュメント](https://docs.google.com/spreadsheets/d/1UAD3JKqe5y-NJBPB5CbjmN5Wq1OObzh_vsLqbuGk9dk/edit#gid=0)で確認できます

</details>

<details><summary>注文タイプ</summary>

[Marketo のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1028A1)

- First Order
- Growth
- Default

</details>

<details><summary>製品</summary>

[Marketo のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1027A1)

- Ultimate
- Premium
- Bronze
- SM Trial
- SaaS Trial
- Free User - 過去にトライアルあり
- Free User
- 過去にトライアルあり - 不明
- Default

</details>

<details><summary>教育セクター</summary>
このセグメントを記述したドキュメントは[こちら](https://docs.google.com/spreadsheets/d/1Q_TwMimeBOR3rJ8CK4EM6DJ9YWYO56bTLNYevCS8UA0/edit?gid=0#gid=0)で確認できます

[Marketo のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1033A1)

- Students
- Teachers
- Faculty
- Unrelated Faculty
- Edu Domain

</details>

<details><summary>業界</summary>

[Marketo のセグメンテーション](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1032A1)

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
- 業界が記入されていない
- Nonprofit
- PubSec
- Retail & Consumer goods
- Services
- Telecommunications
- Travel, Transportation & Hospitality
- Default

</details>

### スニペット

[ローカライズされたメールフッター（購読解除文言のみ）](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/15/overview/details) - このスニペットをローカライズされたメールに適用すると、翻訳された購読解除文言を自動的に含められます。受信者が既知の `Preferred Language` を持っている場合、購読解除文言はローカライズされます。記録された言語設定がない場合、フッターは英語になります。

[ローカライズされたフッター、グレーフルフッター - LOC-Full footer(gray)](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/138/overview/details) - これは `View in Web Browser` とローカライズされたブログへの直接リンクを含むフルフッターです。グレーのフッターを持つメールに使用してください。

[ローカライズされたフッター、チャコールフルフッター - Footer - LOC - Charcoal](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/143/overview/details) - これは `View in Web Browser` とローカライズされたブログへの直接リンクを含むフルフッターです。チャコールのフッターを持つメールに使用してください。

[ローカライズされたフッター、ブルーフルフッター - Footer - LOC - Blue](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/145/overview/details) - これは `View in Web Browser` とローカライズされたブログへの直接リンクを含むフルフッターです。ブルーのフッターを持つメールに使用してください。


{{% details summary="ローカライズされたメールフッタースニペットの使用方法" %}}
ローカライズされたメールフッタースニペットをメールで使用するには:

1. 右サイドバーのメールモジュールテンプレートから「Body Text 1 Column」モジュールを選択します。このセクションを既存の購読解除文言の下にドラッグします。
1. 一般的なコピーをクリックし、表示されるギアをクリックします。ここで選択できるものは 2 つあることに注意してください - コピーとモジュール自体です。コピーのギアを選択してください。
1. `Replace with Snippet` を選択し、`Localized email footer` を選択して保存をクリックします。
1. 既存の購読解除文言を持つモジュールを選択し、ギアをクリックして `Delete` をクリックします。今、購読解除文言/フッターは 1 度だけ表示されるはずです。

スニペットをテストするには、`Preview` をクリックし、`View by: Segmentation` を選択します。「Language Preference」を選択し、プレビューしたい言語を選択します。選択した言語に基づいて購読解除文言が変わるのが確認できます。
{{% /details %}}


[Trust Logo スニペット](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/8/overview/details) - このスニペットは、承認された顧客ロゴを表示するために使用されます。通常はサンクスページで使用されますが、ランディングページでも使用できます。スニペットは、ランディングページの `Trust Logos` セクションがオンに切り替えられた時に表示されます。マーケティングオペレーションのみが、カスタマーアドボカシーチームの指示に基づいてこのスニペットを編集できます。


{{% details summary="MOps 用 - Trust Logo スニペットの編集方法" %}}
以下の手順は MOps Admin ユーザー向けです。

1. すべての画像は、黒またはグレースケールで、50px 高 x 110px 幅以下のサイズである必要があります。Canva の[このテンプレート](https://www.canva.com/design/DAFiV-KHYew/OazKFgDLLNOIjnVHaJrpKw/edit?utm_content=DAFiV-KHYew&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)を使用して画像のサイズを変更できます。Marketo は Canva からダウンロードされた .svg ファイルを拒否するため、ファイルを .png として保存するのが最も簡単です。
1. テンプレートには 14 個のロゴ用のスペースがあります。ロゴを追加する場合は、同じ数を削除する必要があります。カスタマーアドボカシーチームが、更新するロゴについてのガイダンスを提供する必要があります。
1. サイズ変更された画像を [Design Studio](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/imagesandfiles/25821) に追加します。プレビューは画像のサイズより大きく表示されるため、画像はプレビューで歪んで見えます。ページ上では問題ありません。HTML を編集する際に、自分で簡単にできるよう、各ロゴのリンクを別のドキュメントにコピーします。
1. [TEST trust logo スニペット](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/40/overview/details)が利用可能です。ライブスニペットを変更する前に、まずテストスニペットで変更を加えて表示し、カスタマーアドボカシーチームから承認を得ることをお勧めします。ライブスニペットの変更は、すべてのライブランディングページに適用されます。[こちら](https://page.gitlab.com/TestHopinEvent_Thankyoupage.html)のテストサンクスページで変更がどのように見えるかを確認できます。以下の編集手順は、テストスニペットとライブスニペットの両方に適用されます。
1. [Trust Logo スニペット](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/8/overview/details)（または更新を始めたばかりの場合はテストスニペット）のドラフトを作成します。HTML をクリックしてスニペットを編集します。スニペットのフォーマットはランディングページテンプレートで制御されているため、スニペット自体は見た目が良くありません。
1. 「HTML」をクリックして編集します。このコードをコピーします:
`<a href="INSERT LINK TO CUSTOMER CASE STUDY" target="_blank"> <img src="/images/marketing/marketing-operations/marketo/INSERT LINK FROM DESIGN STUDIO" alt="ENTER NAME OF COMPANY logo" /></a>`
1. これを HTML の下部にある `</div>` の直前に配置し、指示通りに大文字のテキストを置き換えます。alt テキストはすべて大文字にしないでください。これにより、新しいロゴがリストの末尾に追加されます。別の場所に配置したい場合は、ロゴを表示したい場所にコードを配置します。
1. コードを更新したら、Apply をクリックします。自動保存が完了したら、スニペットを閉じることができます。次に、ドラフトを承認し、「Update all」を選択します。「Update All」は、すべての承認されたアセットとすべてのドラフトアセットにスニペットを追加します。ドラフトアセットを自動承認することはありません。[ドラフトなしスニペット更新](https://nation.marketo.com/t5/knowledgebase/no-draft-snippet-limitations-and-troubleshooting/ta-p/300799)の詳細は、Marketo ドキュメントで確認できます。
{{% /details %}}


### その他のフィールドドキュメントと定義


{{% details summary="メール検証 - ZoomInfo 接続およびバウンスなどの他の Marketo データポイントによって入力されます。" %}}
|フィールド名|定義              | 送信可能か?|
|----------|------------------------|------------|
|Valid     |実在のアドレスとして検証済み| はい |
|Invalid   |有効でないとして検証済み   | いいえ |
|Disposable|一時的な使い捨てアドレス    | いいえ|
|Accept all (Unverifiable)| ドメイン全体の設定（詳細は説明を参照）| はい/いいえ|
|Unknown   |サーバーに到達できない| いいえ|
{{% /details %}}


### アカウントベースドマーケティングリスト

ABM リストは、フィールドマーケティングおよびマーケティングプログラムチームが、セールスによって優先度が高いと判断されたアカウントをターゲットにしてメール/招待状を送信するために、リクエストに応じて構築されます。これらのリストは [Marketo データベース](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52943077A1)の DMA フォルダで見つけることができます。
**MktgOps** チームは、これらのリストの作成と維持を担当しています。

新しい ABM リストが必要な場合は、[Target list issue テンプレート](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new#request-confirm-target-list)を使用して Issue を開き、マーケティングオペレーションをタグ付けしてください。

### 地理的 DMA リスト

地理的 DMA（direct marketing area）は、フィールドマーケティングおよびマーケティングキャンペーンチームが、フィールド &/または企業マーケティングイベントに関連するメール/招待状をターゲットに送信するために構築されました。**MktgOps** チームは、これらのリストの作成と維持を担当しています。これらのリストは Marketo の `Database` の `Geographic DMA List` [フォルダ](https://app-ab13.marketo.com/#SL52900024A1)で見つけることができます。

新しい DMA リストが必要な場合は、マーケティングオペレーションプロジェクトで Issue を開き、[DMA_request issue テンプレート](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=dma_request)を活用してください。

#### フォーカスメールリスト

フィールドマーケティングおよびマーケティングキャンペーンチームは、特定のリージョン、セクター、または企業を追求する際のツールとしてターゲットメールリストを使用します。メールリストリクエストは、[このテンプレート](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new#request-confirm-target-list)を使用して提出する必要があります。そこから、キャンペーンマネージャーまたはマーケティングオペレーションがリストを構築またはレビューします。

#### ターゲットリストの SLA

- リストリクエストはメール展開の 7 日前までに必要 - FMM / MPM
- 最終スマートリストはメール展開の 2 日前までに利用可能 - MOps

#### リストエクスポート

リストエクスポートが必要な場合は、[エクスポートリクエスト Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=export_request)に記入してください。

少数のユーザーがエクスポートのパーミッションを持っており、適切なデータ管理手順に従い、データ分析のために PII をダウンロードすることを避けるべきです。

## Marketo Sales Insight

Marketo Sales Insight（MSI）は、SFDC ユーザーが Marketo が取っているさまざまなアクションと Marketo を介したユーザーアクションを可視化するために使用されます。ユーザーはこのインテリジェンスを使用して、見込み客とより有意義な会話を行い、スコアに基づいてリードに優先順位を付けることができます。詳細については [Marketo のドキュメントページ](https://experienceleague.adobe.com/docs/marketo/using/product-docs/marketo-sales-insight/msi-for-salesforce/features/insights-dashboard-feature-overview.html?lang=en)で読むことができます。

MSI タブは Leads、Contacts、Accounts のページレイアウトに配置できます。表示されない、またはアクセスしたい場合は、[セールスシステム Issue](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/new) を作成してください。

SFDC インスタンスのタブで MSI を見つけることもできます - メイン SFDC バナーの `+` アイコンをクリックして `Marketo` を見つけます。そのタブでは、MSI の集計ビューが表示されます。

MSI には主要なコンポーネントがいくつかあります:

### Insights

このタブは、人物の最近のアクティビティのタイムラインを表示します。`すべての` 今後のメールキャンペーンとイベントが表示されます（注: これにはその見込み客に送信されたものだけでなく、すべての今後のメール/イベントが含まれます）。タイムラインでは、ウェブアクティビティ、メールの開封/クリック、インタレスティングモーメントを確認できます。各アクションの詳細を確認するために、リードタイムラインをクリックできます。また、全体的なスコアと過去 30 日間の変化のグラフも表示されます。以下のスクリーンショットを参照してください:

![Marketo Sales Insight](/images/marketing/marketing-operations/marketo/MSI.png)

### Interesting Moments

インタレスティングモーメントは、人物がイベントに参加した時、プログラムステータスが変更された時、フォームを記入した時など、マイルストーンに到達した時にキャプチャされます。SDR は、リードビューの `Last Interesting Moments` フィールドを使用して、見込み客が Inquiry または MQL になる前に取った最後のアクションを素早く確認します。特定のアクティビティに対してインタレスティングモーメントを追加したい場合は、Mops に連絡して構築を依頼してください。

詳細については、[このページ](/handbook/marketing/marketing-operations/marketo/interesting-moments)をご覧ください

### Web Activity

このタブは、このビューで Cookie 化されたユーザーのすべてのウェブアクティビティを表示し、参照ページを含みます。リード/コンタクトでは、その特定の人物のアクティビティが表示され、Accounts では、そのアカウントに関連するすべてのコンタクトのアクティビティが表示されます。

### Score

最近のスコア変更を確認するには、このタブを使用します。これは、人物が現在のスコアを達成するために取ったさまざまなアクティビティをすべて確認するのに役立ちます。スコアリングを引き起こしたキャンペーンは、上記の[スコアリングルーブリック](/handbook/marketing/marketing-operations/marketo/#scoring-models)とクロスリファレンスできます。

### Email

このタブは、その特定の人物に送信されたすべてのメール、日付、開封またはクリックしたかどうかのチェックボックスを表示します。

### クイックアクションとウォッチリスト

人々をウォッチリストに追加して、より注意深く監視できます。`email` の隣のメガネをクリックして、そのウォッチリストにアクセスできます。クイックアクションは現在設定されていませんが、将来的には見込み客をキャンペーンに追加したり、Marketo を介してメールを送信するために使用される可能性があります。
