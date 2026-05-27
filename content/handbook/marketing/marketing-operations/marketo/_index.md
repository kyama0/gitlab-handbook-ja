---
title: "Marketo"
description: "Marketo は、メールマーケティング、リード管理、プログラム管理に使用される私たちのマーケティングオートメーションプラットフォームです。"
upstream_path: /handbook/marketing/marketing-operations/marketo/
upstream_sha: "154fb2bd6436508aa2d90583cc235d5fe28b1705"
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
lastmod: 2026-05-26T16:05:01-06:00
---

## About Marketo

[Marketo](https://business.adobe.com/products/marketo.html) は、メールマーケティング、リード管理、プログラム管理に使用される私たちのマーケティングオートメーションプラットフォームです。

## Marketo Tech Stack Guide

プロビジョニング、統合、システム図についての詳細は [Marketo Tech Stack Guide](/handbook/marketing/marketing-operations/marketo/tech-stack-guide-marketo/#integrations) を参照してください。

### Marketo Salesforce.com Connection

SFDC でリード/コンタクトが作成されると、自動的に同期されて Marketo にも作成されます。差し止められるものは何もありません。同様に、SFDC でリード/コンタクトが削除されると、Marketo でも削除されます。

一方で、Marketo はすべてのレコードを自動的に SFDC にプッシュするわけではなく、Marketo で削除されたレコードは、特に指示しない限り SFDC では削除されません。

次のシナリオで、リードは Marketo から SFDC へ同期されます。

1. SFDC に同期されたプログラムのメンバーであるとき
1. 人が `Inquiry` ステータスに到達したとき
1. `MQL` ステータスに到達したとき
1. その人の `PTP` スコアが `4` または `5` であるとき
1. フローステップ `Sync to SFDC` によって明示的に同期を指示されたとき

両者の間のデータは、`Read` または `Read/Write` 権限を持つ Marketo User Permission Set を通じて共有されます。アカウントのフィールドはデフォルトで `Read Only` です。これらを確認するためのクイックリンクは次のとおりです。

- [Leads](https://gitlab.my.salesforce.com/0PS4M000001136E?s=EntityPermissions&o=Lead)
- [Contacts](https://gitlab.my.salesforce.com/0PS4M000001136E?s=EntityPermissions&o=Contact)
- [Accounts](https://gitlab.my.salesforce.com/0PS4M000001136E?s=EntityPermissions&o=Account)

Marketo は SFDC キャンペーンを作成・編集することもできます。Marketo がそのキャンペーンにマッピングできるようにするには、`Active` チェックボックスがオンになっている必要があります。[キャンペーンのセットアップ手順はこちら](/handbook/marketing/marketing-operations/campaigns-and-programs/#marketo-program-and-salesforce-campaign-set-up)。

SFDC のフィールド値に大規模な更新が行われると、Marketo への同期バックログを引き起こす可能性があります。バックログを確認するには、[このページ](https://app-ab13.marketo.com/supportTools/sfdcSyncStats) にアクセスし、確認したいオブジェクトを選択して `Get Stats` をクリックします。Marketo>SFDC はプッシュ数、SFDC>Marketo はプル数とみなされます。この情報を表示するには Marketo にログインしている必要があります。バックログは自動的にクリアされますが、システム利用（GitLab だけでなく Marketo のユーザーベース全体）のため業務時間中は遅くなります。一方、業務時間外や週末には同期が速くなります。

### Custom Sync Rules with Salesforce

特定のプロセスは SFDC に空のメールアドレスを持つレコードを作成するため、それらのレコードはアクションにつながらず、データベースはレコード数に応じてコストが増加することから、私たちはそれらが Marketo に流入するのを避けたいと考えています。

Sales Systems と協力して、`Block_Marketo_Sync__c` というカスタムの数式フィールドを実装しました。このフィールドがチェックされていると、カスタム同期ルールによってレコードの同期がブロックされます。同様に、このフィールドのチェックが外れていると、Marketo へ流入します。

サンドボックスについては、別の [同期ルール](/handbook/marketing/marketing-operations/marketo/#sandbox) のセットがあります。

#### Multi-thread Sync

SFDC のバックログを回避またはクリアするために、Marketo ではマルチスレッド同期を利用できます。これにより、SFDC から Marketo へ流れるデータの複数のレーンを使用できるようになり、Marketo サーバーで利用可能なリソースに応じて同期速度が大幅に向上します。Marketo の各レコードは、メールアドレスの最初の文字に基づいて `Marketo Thread ID` フィールドに `1-9` の値が付けられます。レコードは `Marketo Thread ID` の値に基づいてスレッドに同期・分配されます。

| Letter | Value |
| ------ | ------ |
| A B | 1 |
| D E F | 2 |
| G H I | 3 |
| J K L | 4 |
| M N O | 5 |
| P Q R | 6 |
| S T U | 7 |
| V W X | 8 |
| Y Z C | 9 |

**NB: この機能は常時オンではなく、Marketo Support のみが有効化できます。SFDC からの大規模な更新を計画する前、または重大なバックログがある場合はいつでも、7 日前にサポートチケットを開く必要があります**

#### Enabling Multi-Thread Sync

有効化するには、Marketing Operations チームに対して 7 日前までに [Issue を作成](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=request-marketo-multithread) し、私たちが Marketo にチケットを開けるよう、次の内容を含めてください。

1. 大規模更新の予定日
1. ビジネスへの影響
1. バックログを引き起こす、更新されるフィールド

### Sandbox

私たちには Marketo で作業するためのサンドボックスがあります。サンドボックスは、本番環境へ移行する前のトレーニング、API リンクの作成、全般的なテストに使用されます。サンドボックスから本番環境へプログラムを `promote` する方法はないため、まずサンドボックスでプログラムを構築することが常に必要なわけではありません。いつサンドボックスで構築するかのガイドラインは TBD ですが、カスタム API および webhook の統合については強く推奨されます。

サンドボックスへのアクセスが必要な場合は、[AR](/handbook/security/corporate/end-user-services/access-requests/#application-specific-templates) を提出してください。

SFDC ステージングから Marketo サンドボックスへ渡されるリード数を制限するため、`Marketo Sync` = TRUE の場合にのみ SFDC ステージングから Marketo サンドボックスへリードを同期できるカスタムルールを設けています。これは本番環境のロジックとは逆です。

#### Reconnecting Sandbox to SFDC Staging

Sales Systems は [SFDC ステージング環境](/handbook/sales/field-operations/sales-systems/#sandbox-refreshes) を定期的にリフレッシュします。これが行われると、Marketo サンドボックスに再接続するためのいくつかの手順があり、そのページに概説されています。

## Forms

以下の手順を、[こちら](https://internal.gitlab.com/handbook/marketing/marketing-ops-and-analytics/marketing-operations/operational-setup-marketo/) のドキュメントと併せて使用してください。私たちのウェブサイト（`about.gitlab.com`）上のほぼすべてのフォームは Marketo の埋め込みフォームです。既存のフォームの保守と新しいフォームの作成は Marketing Operations が担当します。

私たちは主にグローバルフォームを使用しています。これは、フォームが複数のランディングページで使用され、フォームのオートメーションが個々の Marketo プログラムで処理されることを意味します。グローバルフォームで利用できないフィールドが必要な場合は、カスタムフォームをリクエストする必要があります。

カスタムフォームが必要になる例をいくつか挙げます。

- 現在のフォームに表示されていないフィールドを追加する
- 単一のランディングページを使用して、複数の関連イベントの登録を収集する
- 特定のイベント日のためのドロップダウンやチェックボックスを追加する
- コメントや一般的でない情報（T シャツのサイズなど）を収集する
- 登録者が好み（どのセッショントラックに参加するかなど）を示す必要がある

プログラムにカスタムフォームが必要かどうか分からないが、プログラムが標準のセットアップ以外の何かを必要としている場合は、計画プロセス中に MOps チームに尋ねてください。そうすれば、私たちがガイドし、プログラムのスケジュールを順調に保つ手助けができます。

新しいカスタムフォームの作成が必要な場合は、[フォーム作成 Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=form_request) を開いてください。フォーム作成と複雑なオートメーションの一般的なスケジュールは 2 週間です。

Contentful の新しいページで既存のフォームを使用する場合は、フォームの背後にあるオートメーションを構築できるよう、[リクエストを入力](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=form_processing) してください。フォームのオートメーションが作成されていない場合、フォームに記入した人は Marketo に入りますが、キャンペーンに処理されたりフォローアップのために送られたりしません。

フォームのドキュメントは [こちら](https://docs.google.com/spreadsheets/d/1cV_hI2wAzLxYYDI-NQYF5-FDDPXPXH0VV5qRBUJAQQk) にあります。現在のすべてのフォームと、標準化された国および州のピックリストが含まれています。

**翻訳済みフォームの利用可能言語**: スペイン語、フランス語、イタリア語、韓国語、ドイツ語、ポルトガル語、日本語。これらはグローバルフォームで、Design Studio > Forms > Translated Forms にあります。これらは（クローンせずに）使用することが重要です。なぜなら `Language Preference` の [ローカライズセグメンテーション](/handbook/marketing/marketing-operations/marketo/#segmentations) に影響するからです。

ローカライズされたフォームは、`Preferred Language` を適切にキャプチャするために特別な隠しフィールドを必要とします。詳細なセットアップ手順は [この Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/10025) を参照してください。

新しい言語が必要な場合、または新しいフォームが必要な場合は、[翻訳](/handbook/marketing/localization/) を集めてから、[ヘルプをリクエスト](https://form.asana.com/?k=1i4lL5h0RLzfTqNWBTH84Q&d=306855239930259) してください。

すべてのフォームは次のガイドラインに従う必要があります。

- ライトボックスを使用しない
- ラベル幅 = 150 / フィールド幅 = 300
- フィールドは縦一列に積み重ねる
- `Country` フィールドのラベルは `Country/Region` とする
- `State/Province` は `Country` = `United States` または `Canada` または `Australia` のときのみ表示する。表示ルールは、`Canada` が選択されたときに `Province` を、`United States` または `Australia` が選択されたときに `State` を動的に表示する
  - 同期エラーを避けるための [国および州の値の標準化](/handbook/marketing/marketing-operations/marketo/#standardization-of-country-or-state-values) に関する詳細を参照
- 一般的に `City` は `Country` = `Ukraine` のときのみ表示する
- すべてのフォームには、メールによるコミュニケーションへの `opting in`（オプトイン）の同意を得るためのチェックボックスを含める
- `Country` = `Ukraine` のとき、提出者がウクライナのクリミア地域に住んでいないことを確認するための追加のチェックボックスを設ける
- 国には [禁輸国](/handbook/legal/trade-compliance/) を含めない
- すべてのフォームには `gclid` と Google アナリティクストラッキングのための隠しフィールドを設ける

ダイレクトメールキャンペーンのために自宅住所を収集する場合は、ランディングページまたはフォームに次の文言を含める必要があります。さらに、アイテムを発送し終えたら住所情報を削除するための削除キャンペーンを Marketo でセットアップする必要があります。また、アイテムの発送に使用しているベンダーも、これを自社のレコードから削除することを確認してください。`By giving us your home address, you are giving us permission to mail items to your home. We will not use this data for any other purposes.`

### Website Form Management

about.gitlab 上のフォームは埋め込み Marketo フォームです。フィールド、レイアウト、ラベル、CSS への変更はすべて Marketo 内で行われ、GitLab 上のソースファイルに変更を加えることなく公開できます。フォームを変更したり、まったく新しいフォームを埋め込んだりする必要がある場合は、`form_request` [テンプレート](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/blob/master/.gitlab/issue_templates/form_request.md) を使用して Issue を開いてください。

各 Marketo フォームは、送信成功後に Google アナリティクスでイベントを発火させるためにイベントをプッシュする必要があります。どのイベントを発火させるかを指定するために、次のイベントラベルを使用します。

1. `/demo/` および `/demo-leader/` の静的デモには `demo`
1. `/webcast/` 内のいずれかのページのフォームには `webcasts`
1. `/free-trial/` のフォームには `trial`
1. `/resources/` 内のいずれかのページのフォームには `resources`
1. `/events/` 内のいずれかのページのフォームには `events`
1. `/services/` のフォームには `services`
1. `/sales/` のフォームには `sales`
1. `/solutions/public-sector/` のフォームには `public-sector`
1. `mktoLead` はニュースレター購読フォームの送信イベントで使用されるレガシーのカスタムイベントラベル。現在、primary、security、オールリモートのニュースレターフォーム送信に使用されています。

フォームの埋め込みコードの `return false` の上に次の行を追加します。イベントラベルを `demo` から、適切なフォーム完了を反映するように更新してください。

```javascript
dataLayer.push(
{
  'event' : 'demo',
  'mktoFormId' : form.getId(),
  'eventCallback' : function()
  {}, 'eventTimeout' : 3000
});
```

### Database Recurring Purge

Marketing operations は、非アクティブなリードをデータベースから定期的にパージする自動プロセスを作成しました。これは、データ品質を維持し、不要なレコードの保存に伴うコストを削減するのに役立ちます。リードは Marketo と Salesforce の両方から削除され、次の基準に従います。

| Filter Description               | Criteria                                      | Date of Activity |
|----------------------------------|-----------------------------------------------|------------------|
| Not Clicked Link in Email        | Email: is any                                 | in past 2 years  |
| Not Was Added to Opportunity     | Opportunity: is any                           | in past 2 years  |
| Not Opened Email                 | Email: is any                                 | in past 2 years  |
| Not Filled Out Form              | Form Name: is any                             | in past 2 years  |
| Not Clicked Link on Web Page     | Link Name: is any                             | in past 2 years  |
| Not Had Interesting Moment       | Type: is not empty                            | in past 2 years  |
| Not Visited Web Page             | Web Page: is any                              | in past 2 years  |
| Not Person was Created           |                          | in past 2 years  |
| SFDC Type                        | SFDC Type: is Lead                            | -                |
| Person Status                    | Person Status: is 'Raw', 'Inquiry', 'Disqualified', 'Recycle', 'Ineligible' | - |
| Account Type                     | Account Type: is not Customer; Partner; Reseller | -                |
| Not SFDC Activity was Logged          | Subject: is any                         | in past 2 year   |
|Not currently sequencing in Outreach|||

パージプロセスは毎週実行され、上記のすべての基準を満たすリードを完全に削除します。

このプロセスは、最近何らかのアクティビティがあったリード、プログラムを通過したリード、商談や現在の顧客に関連付けられたリードには影響しないことに注意することが重要です。これにより、本当に非アクティブなレコードを削除しつつ、価値あるリードが保持されることが保証されます。

Marketing Operations のチームメンバーは、プロセスが正しく実行されていることを確認し、対処が必要となりうる潜在的な問題や例外を特定するために、パージのログを定期的に確認するべきです。

このプロセスは [このスマートキャンペーン](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC53025A1ZN19) を通じて実行され、[このリスト](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52963827C3LA1) の中から基準を満たすすべてのレコードを削除します。

### Program Asset Expiration

2022 年 11 月から、Marketo 内のチームは、有効期限が切れたランディングページや関連性がなくなったスマートキャンペーンを整理する方法として、2022 年初頭に製品に追加された [アセット有効期限機能](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/programs/working-with-programs/local-asset-expiration.html?lang=en#:~:text=Right%2Dclick%20on%20your%20desired,Choose%20an%20expiration%20date) の利用へ移行します。このプロセスの詳細な手順は、ハンドブックの [Campaigns and Programs](/handbook/marketing/marketing-operations/campaigns-and-programs/) ページにあります。

2024 年 7 月から、Marketo はアセット有効期限について私たちの Events ページ（https://about.gitlab.com/events/）にリンクするようになります。これがホームページに代わる新しいリダイレクト先となります。アセット有効期限を利用することで、使用されなくなった各 LP を手動で更新する必要がなくなり、ページがホームページではなく /events にリダイレクトされるようになります。注: フォールバックページは、認識されないランディングページや、ランディングページが利用できない場合にのみ使用されます。アセット有効期限をセットアップせず、ページをより長く利用可能にしたい場合は、そのようにして後で手動でリダイレクトを使ってクローズすることもできます。

### Product data in Marketo

データチームとエンジニアリングチームは、製品内の顧客およびトライアルの利用状況に関連するデータを Marketo に取り込む統合を開発しました。

1. [Marketing Contact Datamart & Pump](https://internal.gitlab.com/marketing-operations/product-data/#marketing-datamart-pump-and-pql-information-email-marketing-data-mart): フィールドは `[CDB]` で始まります
1. [SaaS Trial & Handshakes](https://internal.gitlab.com/marketing-operations/product-data/#saas-trials--handraise): フィールドは `[PQL]` で始まります
1. [Propensity to Buy Models](/handbook/enterprise-data/organization/data-science/#conversion): フィールドは `[PTP]` で始まります - 現時点ではトライアルユーザーのみ

### Campaign Limits

特定のスマートキャンペーンまたはメールキャンペーンで処理できるレコード数には 250,000 件という上限が設定されています。スマートキャンペーンのスマートリストが 250,000 件を超えるレコードを更新またはメール送信するように設定されている場合、それは実行されず `aborted` になります。これは、偶発的な大量更新やメール送信を防ぐために設けられています。その上限を超えるキャンペーンを実行する必要がある場合は、MarOps に連絡してください。

#### Standardization of Country &/or State values

`Country` および/または `State` フィールドをクリーンアップして、値が必要な Salesforce のフォーマットを満たすようにするワークフローがいくつかあります。州は略語を使わずにスペルアウトする必要があります（例: CA は California にする）。`Country` および/または `State/Province` の標準化が SFDC と完全に一致しない場合、リードは同期されません。新しい標準化が必要な場合は、[Marketing Operations プロジェクト](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=) で Issue を開いてください。SFDC で国/州が更新された場合、同期の問題を防ぐために [customersDOT YML](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/3a7b78445d5cc1a5d53de7f003958004ec337ba5/data/countries.yml) ファイルも更新する必要があります。

すべての標準化スマートキャンペーンは次に含まれています。

`Marketing Activities` -> `Operational - Do not edit` -> `Data Management` -> `01 Data Management` -> `04-Normalize Data`

- 州の値を受け付ける国は次のものだけです: United States, Canada, Ireland, India, Brazil, Australia, China, Italy, Mexico
- 米国の 50 州とカナダの全州には、2 文字の略語からフルスペルに設定する標準化キャンペーンがあります。
- 次の国には、一般的な表記ゆれを受け入れ可能な値に更新する標準化があります: United States, Bolivia, Canada, China, France, Germany, Hong Kong, India, Iran, Ireland, Macao, Myanmar, Netherlands, Russia, South Korea, Sweden, Switzerland, United Kingdom, Venezuela, Vietnam。

## MQL and Lead Scoring

Marketing Qualified Lead とは、デモグラフィック/ファーモグラフィック情報および/または行動情報に基づいて `100` ポイントのしきい値に達したリードのことです。[MQL スコアリング](/handbook/marketing/marketing-operations/marketo/#scoring-models) は以下に詳述されており、正または負のポイント値で重み付けされたさまざまなアクションおよび/またはプロフィールデータで構成されています。

視覚的な概要については、この [スライド](https://docs.google.com/presentation/d/1KMyzQm_-7V7jeSJZuiedmIINti_uEWiW0NBYiX5viSA) を使用してください。

### Re-MQL

詳細については、[リードライフサイクルのページ](/handbook/marketing/marketing-operations/lead-lifecycle/#lead-lifecycle) を参照してください。

リード/コンタクトは、`Recycle` ステータスにあり、再び [MQL しきい値](/handbook/marketing/marketing-operations/) に達した場合、再 MQL が許可されます。

`MQL` する回数は `MQL Counter` フィールドでカウントされます。`Initial MQL DateTime` には、見込み客が最初に [MQL しきい値](/handbook/marketing/marketing-operations/#lead-scoring-lead-lifecycle-and-mql-criteria) に達した一番最初の時刻が入ります。`MQL Date` は、リードが MQL しきい値に達した最も新しい日付に上書きされます。

リードが `Recycle` に設定されると、その `Behavior Score` は 0 にリセットされます。その `Person Score` は `Demographic Score` の値にリセットされます。さらに、過去に `MQL` に達したことのある人が `Recycle` にリセットされ、行動スコアを上げるアクションを取ると、追加で `+20` のスコアが付与されます。リードが MQL しきい値に達する前に `Accepted` であり、その後 30 日以内に `Recycle` に設定された場合、その人がアクションを取ると、リードの `Behavior Score` は `Inquiry` のときの値にリセットされ、`Demographic Score` は再計算され、その全体の `Person Score` はその 2 つの値の合計になります。

リードが `Recycle` から `MQL` へ `Re-MQL` すると、その `Recycle Reason` フィールドは `Null` に設定されますが、その `Recycle Reason` の値はリードまたはコンタクトの `Previous Recycle Value` フィールドに保持されます。このフィールドは Marketo によってのみ設定されます。`Recycle DateTime` は最初の一度だけ更新されます。リードが再び `MQL` ステータスに達したとき、ラウンドロビンのために LeanData によって再ルーティングされることはなく、元の所有者の名前のままになります。

リードライフサイクルを確認するには、[figjam のフローチャート](https://www.figma.com/file/lycXH6cMKK5oNaKj2RSigx/Re-MQL-Workflows_2023-08-22_10-56-57?type=whiteboard&t=HDkNJDbCt6265Ezf-1) に従ってください。後のステップから `Raw` または `Inquiry` へステータスを逆戻りすることはできない点に注意してください。

### Scoring Models

リードスコアリングモデルは、MQL するための 100 ポイント制です。レコードには、そのデモグラフィックおよび/またはファーモグラフィック情報、ならびに GitLab マーケティングへの行動および/またはエンゲージメントに基づいて、正と負のポイントが割り当てられます。その `Person Score` は、`Behavior Score` と `Demographic Score` の合計です。MQL するには `Person Score` が `100` に達する必要があり、また `Behavior Score` が `0` であってはなりません。

毎晩実行され、マイナスになったリードを `0` に戻すフローがあります。

MQL の瞬間における `Demographic`、`Behavior`、`Person` の各スコアは、`X Score at MQL` という 3 つの別々のフィールドを通じて Marketo 内に記録されます。

一部のリードは、次に該当する場合はスコアリングから除外されます。

- `@gitlab.com` のメールアドレスを持つ
- 競合他社である
- Status = `Disqualified` または `Ineligible`
- 会社名が `student`、`personal`、`test` など
- パートナーによって活発に取り組まれている（`Prospect Share Status` = `Sending to Partner`、`Accepted`、または `Pending`）
  - スコアはパートナーと共有された時点でタイムスタンプが付けられ、リードが社内の SDR チームに戻ってくるときのために保存されます。リードがさらなる開拓のために私たちのチームメンバーに戻ってくる際、スコアは減衰したうえで再適用されます

#### Why Do We Use A Scoring Model?

スコアリングモデルを使う「理由」と、いくつかのポイントをまとめたスライドデッキは [こちら](https://docs.google.com/presentation/d/1Xl1xcrOeFsDar2B9kTmMH1Hrw5WKsNx7mDL9xtVeBMs/edit#slide=id.g1d24c3e4ddd_5_252) にあります。なお、これは LevelUp コースで使用されているスライドデッキです。

#### Scoring Model Updates

Marketing Operations は、Sales Development チームおよび Marketing Analytics チームと協力して、各会計年度の Q4 にリードスコアリングモデルを更新します。モデルを更新する時期を限定することで、MQL の前年比ボリュームを公平に比較できます。年間を通じた変更を考慮する必要がなくなる代わりに、変更をレポートに記載できる小さな時間枠に集約します。

年間を通じてリードスコアリングモデルに関するフィードバックを共有するには、[このエピック](https://gitlab.com/groups/gitlab-com/marketing/-/epics/5621) にコメントを残すか、既存の Issue をそのエピックにリンクしてください。私たちはこの Issue を頻繁にレビューし、リードスコアリングモデルを更新する際に各項目を検討します。その変更がバグ修正にあたると私たちが判断した場合は、Q4 の時間枠より前に更新することを検討します。

フィードバックを残す際は、なぜその変更が要求されているのかについて効果的な詳細を提供することが重要です。それらの詳細がないと、変更の調査に時間がかかり、時間の経過とともにその妥当性の背後にある必要なコンテキストが失われる可能性があります。最低限、次の内容を含めてください。

- 影響を受ける SFDC リードへのリンク - または複数のリードの場合は分析に役立つ列を含む Google シート、もしくは SFDC レポート
- 認識された問題と、それがワークフローにどのように影響しているかの要約
- 該当する場合は、もっと高く/低くスコアリングされるべきだった最近のキャンペーンを記載

#### Scoring Revamp FY25Q1

FY25 の初めにリードスコアリングに加えられたデータ駆動の変更の詳細については、[このスライドデッキ](https://docs.google.com/presentation/d/14bTq_KOyG7jHJR7vghcUVAZ_tMSOgbAN7hI8auI49eU/edit#slide=id.g1d24c3e4ddd_5_252) を参照し、データセットの知見を確認するには [このスライドデッキ](https://docs.google.com/presentation/d/1B8Q3Rq6O7-641rFoGOJOG6TxKHM_uAU29Ejbzqr2KMI/edit#slide=id.g1d24c3e4ddd_5_252) を参照してください。

#### Scoring Logic Documentation

スコアに**直接**影響するすべてのスマートキャンペーンはドキュメント化されており、[この Google シート](https://docs.google.com/spreadsheets/d/1A8ip-_e7CODnZjkigwy6zHV9uT6sqzAoeornixaK8IY/edit?gid=0#gid=0) にあります。なお、これは GitLab の社内チームメンバーのみが利用できます。

#### Auto-MQL

特定の基準に基づいて、リードは自動 MQL する場合があります。自動 MQL はすべて `Behavior` スコアカテゴリの一部とみなされる点に注意してください。シナリオは以下に列挙されています。

<!-- Self-Managed Trial + Business email domain
- SaaS Trial - Signed Up + Business email domain
- SaaS Trial Signed Up + `Setup for Company/Use = TRUE`-->

| **Auto-MQL Behavior** | **Campaign Description / Program Status** | **Points Assigned** | **Schedule/Flow Limit** |
| ------ | ------ | ------ | ------|
| Follow Up Requested  | Workshop > Follow Up Requested, <br> Vendor Arranged Meetings > Follow Up Requested, <br> Sponsored Webcast > Follow Up Requested, <br> Survey > Follow up Requested, <br> Owned Event > Follow Up Requested, <br> Webcast > Follow Up Requested, <br> Field Event > Follow Up Requested, <br> Conference > Follow Up Requested, <br> Executive Roundtables > Follow Up Requested| +100 | Everytime |
| Meeting Requested, <br> Meeting Attended  | Conference > Meeting Attended, <br> Vendor Arranged Meeting > Meeting Requested   | +100 | Everytime |
| Inbound - High  | Contact Request, <br> Renewals, <br> In-app Health Check, <br> Duo Requests <br> | +100 | 1/day |
| Inbound - Hand Raise  | [Hand Raise PQL](/handbook/product/product-principles/#a-pql-can-be-further-broken-down-into-two-types-usage-and-hand-raise) | +100 | 1/day |
| [PTP Score](https://internal.gitlab.com/handbook/sales/propensity_models/)  |Newly assigned a 4 or 5 score via the Propensity Model alongside being assigned an `A` or `B` ranking via Lead Score Classification.<br> See [Educational deck](https://docs.google.com/presentation/d/1dxSXekzw-SIF1g4pjNf6QGNBUY1L6euggsqqr9BTHUY/edit#slide=id.g1d24c3e4ddd_5_252) or handbook for details <br>  | +100 | 1/90 days |
| Web Chat - <br>Qualified  |Web chat interaction or meeting scheduled | +100 | 1/day |
|* Inbound - Med|Inbound form, not above and excluding Startup applicants |    +100|1/day|
|MM+ Valuable Trials | MM+ and Valuable Trials w/ EDU exclusion (SaaS & Self-Managed)  |+100 |1/6 months|

#### Behavior Scoring

行動スコアリングは、その人が取ったアクションに基づきます。スコアリングされる頻度のケイデンスは以下に列挙されています。行動スコアリングは `Person Score` が `300 pts` を超えると無効化されます。キャンペーンのスコアリングでは、スコアをキャプチャするには success が必要であり、以下でそれに該当するものには * が付けられています。何が `success` を構成するかは [programs ページと進行ステータス](/handbook/marketing/marketing-operations/campaigns-and-programs) を参照してください。

|**Behavior**|**Campaign Description / Program Status**|**Points Assigned**|**Schedule/Flow Limit**|
|:------:|:------:|:------:|:------:|
|*Attended Conference | Conference > Attended, <br> Conference > Attended On-Demand | +10 | Every time|
|*Attended In Person | Executive Roundtables > Attended, <br> Owned Event > Attended, <br> Owned Event > Attended On-demand, <br> Speaking Session > Attended, <br> Vendor Arranged Meetings > Attended, <br> Vendor Arranged Meetings > Meeting Attended, <br> Live Event > Attended | +40 | Every time|
|*Attended Online| Sponsored Webcast > Attended, <br> Sponsored Webcast > Attended On-demand, <br> Workshop > Attended, <br> Workshop > Attended On-demand, <br> Webcast > Attended (techdemo only), <br> Webcast > Attended On-demand (techdemo only)| +20| Every time |
|*Attended Webcast | Webcast > Attended, <br> Webcast > Attended On-demand | +40 | Every time|
|*Conference Booth | Conference > Visited Booth| +20 | Every time|
|*Content Syndication downloaded| Content Syndication > Downloaded| +10| 1/30 days|
|*Gated Content - High|Gated Content > Downloaded (must contain Forrester or Gartner)| +35|Everytime|
|*Gated Content - Med|Gated Content > Downloaded|+15|  Everytime|
|*Paid Social | Paid Social > Responded  |+10| Everytime|
|*PathFactory |Consumes PF content|+10| Everytime|
|Registered In Person |Owned Event > Registered, <br> Field Event > Registered, <br> Speaking Session > Registered, <br> Conference > Meeting Requested, <br> Live Event > Registered|    +20    |Every time|
|Registered Online |Workshop > Registered, <br> Sponsored Webcast > Registered, <br> Webcast > Registered, <br> Executive Roundtables > Registered, <br> Vendor Arranged Meetings > Registered|    +20    |Every time|
|Subscription|Fills out Subscription Form    |+5|1/week    |
|*Survey - High|(None Defined)    |+45| Everytime|
|*Survey - Med|(None Defined)    |+30| Everytime|
|*Survey - Low|Googleforms, <br> Default    |+15|  Everytime|
|*Trial - Default | SaaS  |    +20| 1/day    |
|*Trial - Personal | Signed up with generic email domain: <br> SaaS,<br>Self-Managed|    +10|1/day    |
|*Trial | SaaS,<br>Self-Managed  |    +30| 1/day    |
|Visits Key Webpage|`/pricing/`,<br> `/sales`,<br> `/install`,<br> `/features`,<br> `/direction`,<br> `/solutions/startups/`,<br> `/releases/gitlab-com/`    |+25    |1/week    |

##### Automated Boosters

従来の上記アクションに加えて自動アクションが発生すると、スコアへのブーストが行われます。

|**Interaction Boosters**|Campaign Description|**Points Assigned**|**Schedule/Flow Limit**|
|:-------------:|:-------:|:-----:|:--------:|
|Re-MQL Score|    Status is Nurture,user takes an activity that increases behaviour score<br>MQL Counter >0    |+20    |    1/month|
| [6QA identified](/handbook/marketing/marketing-operations/6sense/#marketo) | When 6sense's predictive intent data model identifies leads and contacts showing interest in GitLab. Leads that have been pushed to Marketo via Integrate's DAP tool are excluded for 30 days from last Integrate push | +20| 1/ 3 month|

<!--|PF Engagement Booster 2|Engagement Time > 4 minutes|+15|Everytime|
|PF Engagement Booster 1|Engagement Time >  2 minutes < 4 minutes|+10|Everytime|

-->

#### Demographic Scoring

職務ロール/職務機能および職位レベルの説明は [こちら](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing) にあります。デモグラフィックスコアリングには 70 ポイントのハードリミットがあり、最大に達した後はデモグラフィックスコアに関連する person score のさらなる蓄積が制限されます。

|**Demographic Characteristic**|Campaign Type|**Points**|**Schedule/Flow Limit**|
|:-------------:|:-------:|:-----:|:--------:|
|Setup for Company/Team Use|Self-Identified as using for company or team in the product|    +25    |Once|
|Business Email Domain|Has a valid business email address|    +35    |Once|
|Seniority - High|[Find descriptions here](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    +15    |   Once|
|Seniority - Med|[Find descriptions here](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    +15    |   Once|
|Seniority - Low|[Find descriptions here](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    +5    |    Once|
|Function - High|[Find descriptions here](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    +20    |   Once|
|Function - Med|[Find descriptions here](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|+15|   Once|
|Function - Low|[Find descriptions here](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    +10 |    Once|
|Country - Tier 1, Tier 2 |[Country = Tier 1, Tier 2](/handbook/marketing/localization/)|    +5   |Once|

#### Score Decay

スコア減衰は、リードが `partner` ステータスにあることで凍結されたスコアにも適用される点に注意してください。

|**Behavior Decay**|**Campaign Description**|**Points Removed**|**Schedule/Flow Limit**|
|:-------------:|:-------:|:-----:|:--------:|
|No activity in 30 days|No web, scoring, program activity in last 30, not created in last 30|    -10    |    1/month|
|Web: Visits Low Value|`/jobs`, `/careers`, `/unsubscribe`|    -10    |1/day|
|Email:  Bounce    |Email Hard Bounces|    -20|1/month|
|Email: Unsubscribed|Unsubscribed from Email|    Score Reset based on Demographic score    |1/month|

| **Demographic Decay** |**Campaign Description**|**Points Removed**|**Schedule/Flow Limit**|
|------|------|------|------|
|Generic Domain|[Contains generic email domain](https://docs.google.com/spreadsheets/d/1IO7DAIvhAhvIydkvLjwP-X_g97Zharf8JpkSVIsmiSs/edit?usp=sharing)|    -10    |Once|
|Seniority - Negative|[Find descriptions here](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    -10    |    Once|
|Function - Negative|[Find descriptions here](https://docs.google.com/spreadsheets/d/1EztHU53vE9Y_mmxlb4taQJ5_oo7CatdFvZNxbMklJf4/edit?usp=sharing)|    -20    |  Once|

#### Trial Threshold Scoring

標準のリードスコアリングモデルに加えて、GitLab は特に GitLab トライアル向けのセカンダリスコアリングモデルを利用しています。これは、特定の特性を示すトライアルユーザーを `MQL` させることを意図しています。Trial Threshold スコアリングシステムは、元のリードスコアリングワークフローと連携して動作します。スコアリングの仕組みは、AMER、APAC、EMEA の各リージョンで、そのリージョンの最も早いタイムゾーンに基づいて 08:00 と 14:00 の 1 日 2 回発火します。トライアルユーザーは `25` ポイントに達すると `MQL` し、その後はさらなるスコアリングから除外されます。スコアリングの仕組みは、プログラムメンバーシップと、トライアル開始から `40 日` 後に終了する [Days Since Trial Counter](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC72010C3ZN19) でフィルタリングされます。

| **Trial Scoring Characteristic**| **Scoring Descripton** | **Points Assigned** | 
| ------ | ------ | ------| ------ |
|   6sense Grade     |   A 6sense assigned ranking out of A-D     | `A` = +15<br>`B` = +7<br>`C` = +0<br>`D` = +3 |
|   6sense Profile     |  A 6sense assigned ranking of `Weak`, `Moderate` or `Strong`      | `Strong` = +12<br>`Moderate` = +5<br>`Weak` = +0|
|Non-public Email Domain|Email address has not been identified as a publicly available domain|+10 |
|# of Duo Features Utilized|Score assigned according to the number of Duo features adopted during the trial period| `0` = +0<br>`1` = +5<br>`2` = +10<br>`3+` = +15 |
|Is user's job title a management role?| Determined by a boolean value carried over from the Customer Database| +10|
|Does user have a matching account?|Matching account determined by the contact+account relationship or by Traction attempting to match a lead to an account|+5 |
|Does the user have a targeted job title?|Scored if the Customer Database shares a job title relating to `Upper Management` or `Platform / Ops / Infrastructure Engineering`| `Upper Management` = +8 <br>`Platform / Ops / Infrastructure Engineering` = +0 |
|PTP Score| Scored if the PTP group is 3-5| `3` = +2 <br> `4` = +7<br> `5` = +10|
|Non-LATAM regions + Non-SMB sales segments|The LATAM region and the SMB sales segment do not receive this score, all other regions and sales segments receive this score| `+3` |
|# of GitLab product stages activated| Receives a score if the product records a certain level of product stages adoption| `1 stage` = +2 <br> `2 stages` = +7 <br> `3+ stages` = +12 |

### Lead Score Classification

`lead score classification`（リードスコア分類）は、見込み客が SAO に転換する可能性を分類することを意図した 2 文字のスコア/指定であり、そのスコアはリードの現在の `demographic` および `behavior` スコアをモデルにしています。スコアとその定義の視覚的な表現は、以下の `Lead Classification Matrix` に図示されています。リードステータスが `Ineligible` または `Disqualified` に設定されたリードは、その `lead score classification` が `Disqualified` または `Ineligible` に設定されます。

ハンドブックのページが万一破損した場合に備えて、Lead Classification Matrix と Lead Classification Definitions Table は [Figma にも存在](https://www.figma.com/file/U4GBe693vvyyrXZnMGGjS7/Welcome-to-FigJam?type=whiteboard&node-id=0%3A1&t=PZBNGKUfGQo8Ocvn-1) します。

![Lead Classification Matrix](/images/marketing/marketing-operations/marketo/lead_classification_matrix.png)

#### How to use the Lead Classification Matrix and read the Lead Classification

リードスコア分類（およびその視覚的な相棒であるマトリクス）は、プロフィールの適合性とエンゲージメントレベルの両方に基づいてリードのフォローアップに優先順位を付ける手助けをするように設計されています。リードの `demographic fit`（デモグラフィック適合性）は、文字/列の `A`、`B`、`C`、`D` に関連付けられています。リードの `behavior level`（行動レベル）は、行の `1`、`2`、`3`、`4` に関連付けられています。`A` と `1` の両方が最も高い指定で、`D` と `4` が最も低い指定です。マトリクスを見ると、最も低い分類は左下の `D4` で、最も高い分類は右上の `A1` です。

リードスコア分類を最大限に活用するには、マトリクスまたは以下の定義テーブルに提供されている定義を読み、適切に行動してください。たとえば、`B2` または `A2` に分類されたリードは、`D2` に分類されたリードよりも closed-won の商談を生み出す可能性が高くなります。なぜなら、カテゴリ `A` と `B` 内の属性は GitLab が定義する理想的なバイヤープロファイルに適合するからです。`D2` のリードも、関心が示されているため closed-won の商談につながる可能性はありますが、`demographic` 適合性が低いため、より高い転換率や商談につながることの多い理想的なバイヤー属性を欠いている可能性が高いです。[リードスコアリングの教育用スライドデッキ](https://docs.google.com/presentation/d/1Xl1xcrOeFsDar2B9kTmMH1Hrw5WKsNx7mDL9xtVeBMs/edit#slide=id.g2b1545a7631_0_1) で指摘されているように、緑色の分類の四角は、理想的なバイヤーペルソナ属性を持つ人が `MQL` する _範囲_ を示しており、`A1` は確定的な `MQL` を示しています。

|  | D <br> (Demographic - Low) | C | B | A <br> (Demographic - High) |
| ------ | ------ | ------ | ------ | ------ |
|   **1**  <br> **(Behavior - High)** |  Wrong fit, very interested      |  Not ideal prospect, very interested      |   Good fit, very interested    |    Right prospect, very interested     |
|    **2**   |    Wrong fit, showing interest    |   Not ideal prospect, showing interest     |    Good fit, showing interest   |    Right prospect, showing interest     |
|   **3**     |   Wrong fit, little interest     |    Not ideal prospect, little interest    |    Good fit, little interest   |   Right prospect, little interest      |
|    **4** <br>**(Behavior - Low)**    |  Wrong fit, no interest      |    Not ideal prospect, no interest    |    Good fit, no interest   |     Right prospect, no interest    |

## Lists and Segmentation

### Segmentations

Marketo のセグメンテーションはスマートリストと同様に使われますが、永続的であり、marketing ops のみが変更できます。これらは動的コンテンツ（メールやランディングページ）の作成に使われ、リストの処理を高速化するために使われます。セグメンテーションは Marketo のバックグラウンドで常時実行されているため、最新の数値を得るためにリフレッシュする必要は決してありません。Marketo に持てるセグメンテーションは合計 20 個までです。セグメンテーションの基準は、セグメンテーションを構成するセグメントリストの順序に基づいてウォーターフォールで適用されます。1 つのセグメンテーションの中では、いずれか 1 つのセグメントにしか属せません。

承認されて稼働中のセグメンテーションは次のとおりです。

<details><summary>Buyer Personas - Function</summary>

[Segmentation in Marketo](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1008A1)

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

[Segmentation in Marketo](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1018A1)

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

[Segmentation in Marketo](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1017A1)

- Enterprise
- Mid-Market
- SMB
- PUBSEC
- Default

</details>

<details><summary>Region</summary>

メールには推奨されません。`Region` は親アカウントの国を使用しますが、それはメールを送る相手の所在地ではない可能性があります。メッセージがアカウントのデモグラフィックに基づくことを意図している場合を除き、このセグメンテーションはメールマーケティングには推奨されません。

[Segmentation in Marketo](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1013A1)

- AMER
- EMEA
- APAC
- LATAM
- Default

</details>

<details><summary>Person Region</summary>

メールリストに推奨されます。`Person Region` は、アカウントではなくリード/コンタクトの国を使用します。ローカルなイベントを提供する場合や、地域内の人々向けのメッセージを送る場合は `Person Region` を使用してください。

[Segmentation in Marketo](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1031A1)

- AMER
- EMEA
- APAC
- LATAM
- Default

</details>

<details><summary>Funnel Stage</summary>

[Segmentation in Marketo](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1021A1)

- Raw > INQ - `Status = NULL, Inquiry or Raw` OR (`Status = Recycle` AND `Person Score < 75`)
- INQ > MQL - `Status = MQL, Accepted or Qualifying` OR (`Status = Recycle` AND `Person Score > 74`)
- MQL > SAO - `Status = Qualified` OR `1 Open Opportunity` OR `Has an Open Opportunity`
- Customer - `Is Paid Tier = True` OR `SFDC Type = Customer`
- Disqualified - Status is `Disqualified` or `Ineligible`

</details>

<details><summary>Priority Countries</summary>

優先国の完全なリストは [こちら](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/6648) にあります。

[Segmentation in Marketo](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1024A1)

- Tier 1
- Tier 2
- Tier 3
- Embargoed
- Default

</details>

<details><summary>Language Preference</summary>

[Segmentation in Marketo](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1023A1)

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

[Segmentation in Marketo](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1020A1)

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

[Segmentation in Marketo](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1026A1)

- Currently available for US Public Sector only
- List of available segments can be found in [this doc](https://docs.google.com/spreadsheets/d/1UAD3JKqe5y-NJBPB5CbjmN5Wq1OObzh_vsLqbuGk9dk/edit#gid=0)

</details>

<details><summary>Order Type</summary>

[Segmentation in Marketo](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1028A1)

- First Order
- Growth
- Default

</details>

<details><summary>Product</summary>

[Segmentation in Marketo](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1027A1)

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
このセグメントを説明するドキュメントは [こちら](https://docs.google.com/spreadsheets/d/1Q_TwMimeBOR3rJ8CK4EM6DJ9YWYO56bTLNYevCS8UA0/edit?gid=0#gid=0) にあります

[Segmentation in Marketo](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1033A1)

- Students
- Teachers
- Faculty
- Unrelated Faculty
- Edu Domain

</details>

<details><summary>Industry</summary>

[Segmentation in Marketo](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SG1032A1)

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

### Snippets

[Localized email footer (unsubscribe language only)](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/15/overview/details) - このスニペットは、翻訳された配信停止文言を自動的に含めるために、ローカライズされたメールに適用できます。受信者の `Preferred Language` が判明している場合、配信停止文言はローカライズされます。記録上の優先言語がない場合、フッターは英語になります。

[Localized footer, gray full footer - LOC-Full footer(gray)](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/138/overview/details) - これは `View in Web Browser` とローカライズされたブログへの直接リンクを含むフルフッターです。グレーのフッターを持つメールにこれを使用します。

[Localized footer, charcoal full footer - Footer - LOC - Charcoal](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/143/overview/details) - これは `View in Web Browser` とローカライズされたブログへの直接リンクを含むフルフッターです。チャコールのフッターを持つメールにこれを使用します。

[Localized footer, blue full footer - Footer - LOC - Blue](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/145/overview/details) - これは `View in Web Browser` とローカライズされたブログへの直接リンクを含むフルフッターです。ブルーのフッターを持つメールにこれを使用します。

{{% details summary="ローカライズされたメールフッタースニペットの使い方" %}}
メールでローカライズされたメールフッタースニペットを使用するには:

1. 右サイドバーのメールモジュールテンプレートから「Body Text 1 Column」モジュールを選択します。このセクションを既存の配信停止文言の下にドラッグします。
1. 汎用のコピーをクリックし、次に表示される歯車をクリックします。ここで選択できるものが 2 つあることに注意してください。コピーと、モジュール自体です。必ずコピーの歯車を選択してください。
1. `Replace with Snippet` を選択し、次に `Localized email footer` を選択して Save をクリックします。
1. その後、既存の配信停止文言のあるモジュールを選択し、歯車をクリックして `Delete` をクリックできます。これで配信停止文言/フッターが 1 回だけ表示されているはずです。

スニペットをテストするには、`Preview` をクリックし、次に `View by: Segmentation` を選択します。「Language Preference」を選択し、次にプレビューしたい言語を選択します。選択した言語に基づいて配信停止文言が変わるのが分かります。
{{% /details %}}

[Trust Logo snippet](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/8/overview/details) - このスニペットは、承認された顧客のロゴを表示するために使われます。通常はサンキューページで使われますが、ランディングページでも使えます。スニペットは、ランディングページの `Trust Logos` セクションがオンに切り替えられたときに表示されます。このスニペットを編集できるのは、customer advocacy チームの指示に基づく Marketing Operations のみであるべきです。

{{% details summary="MOps 向け - トラストロゴスニペットの編集方法" %}}
以下の手順は MOps 管理者ユーザー向けです。

1. すべての画像は黒またはグレースケールで、高さ 50px x 幅 110px 以下のサイズにする必要があります。Canva で [このテンプレート](https://www.canva.com/design/DAFiV-KHYew/OazKFgDLLNOIjnVHaJrpKw/edit?utm_content=DAFiV-KHYew&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) を使って画像のサイズを調整できます。Marketo は Canva からダウンロードした .svg ファイルを拒否するため、ファイルを .png として保存するのが最も簡単です。
1. テンプレートには 14 個のロゴのスペースがあります。ロゴを追加する場合は、同じ数だけ削除する必要があります。どのロゴを更新するかについては、customer advocacy チームがガイダンスを提供するはずです。
1. サイズ調整した画像を [Design Studio](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/imagesandfiles/25821) に追加します。プレビューは画像のサイズより大きく表示されるため、画像はプレビューでは歪んで見えます。ページ上では問題ありません。HTML を編集するときに自分が楽になるよう、各ロゴのリンクを別のドキュメントにコピーしておきましょう。
1. [TEST トラストロゴスニペット](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/40/overview/details) が利用できます。ライブのスニペットに変更を加える前に、まずテストスニペットで変更を加えて確認し、customer advocacy チームの承認を得ることをお勧めします。ライブのスニペットへの変更は、すべてのライブランディングページに適用されます。変更がどのように見えるかは、[この](https://page.gitlab.com/TestHopinEvent_Thankyoupage.html) テストサンキューページで確認できます。以下の編集手順は、テストスニペットとライブスニペットの両方に適用されます。
1. [Trust Logo snippet](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/ds/snippet/8/overview/details)（更新を始めたばかりであればテストスニペット）のドラフトを作成します。HTML をクリックしてスニペットを編集します。スニペットのフォーマットはランディングページテンプレートによって制御されるため、スニペット自体は見栄えがよくありません。
1. 「HTML」をクリックして編集します。このコードをコピーします:
`<a href="INSERT LINK TO CUSTOMER CASE STUDY" target="_blank"> <img src="/images/marketing/marketing-operations/marketo/INSERT LINK FROM DESIGN STUDIO" alt="ENTER NAME OF COMPANY logo" /></a>`
1. それを html の一番下の `</div>` の直前に配置し、指示どおりに大文字のテキストを置き換えます。alt テキストはすべて大文字にすべきではありません。これにより、リストの末尾に新しいロゴが追加されます。別の場所に配置したい場合は、ロゴを表示させたい場所にコードを配置してください。
1. コードを更新したら、Apply をクリックします。自動保存が完了したら、スニペットを閉じることができます。次に、ドラフトを Approve し、「Update all」を選択します。「Update All」はスニペットをすべての承認済みアセットとすべてのドラフトアセットに追加します。ドラフトアセットを自動承認することはありません。[No-Draft Snippet の更新](https://nation.marketo.com/t5/knowledgebase/no-draft-snippet-limitations-and-troubleshooting/ta-p/300799) に関する詳細は、Marketo のドキュメントで確認できます。
{{% /details %}}

### Other Field Documentation and Definitions

{{% details summary="Email Validations - ZoomInfo 接続やバウンスなどの他の Marketo データポイントによって入力されます。" %}}

|Field Name|Definition              | OK to send?|
|----------|------------------------|------------|
|Valid     |Verified as real address| Yes |
|Invalid   |Verified as not valid   | No |
|Disposable|A temporary, disposable address    | No|
|Accept all (Unverifiable)| A domain-wide setting (learn more)| Yes/No|
|Unknown   |The server cannot be reached| No|

{{% /details %}}

### Account Based Marketing List

ABM リストは、Sales によって優先度が高いとみなされたアカウントをターゲットにしてメール/招待を送るために、Field Marketing チームと Marketing Program チームの依頼を受けて構築されます。これらのリストは [Marketo Database](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52943077A1) の DMA フォルダーにあります。
これらのリストの作成と保守は **MktgOps** チームが担当します。

新しい ABM リストが必要な場合は、[Target list issue テンプレート](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new#request-confirm-target-list) を使用して Issue を開き、marketing ops をタグ付けしてください。

### Geographic DMA List

Geographic DMA（direct marketing area）は、Field マーケティングおよび/または Corporate マーケティングのイベントに関連するメール/招待をターゲットにして送るために、Field Marketing チームと Marketing Campaigns チーム向けに構築されました。これらのリストの作成と保守は **MktgOps** チームが担当します。これらのリストは Marketo の `Database` の `Geographic DMA List` [フォルダー](https://app-ab13.marketo.com/#SL52900024A1) にあります。

新しい DMA リストが必要な場合は、Marketing Operations プロジェクトで Issue を開き、[DMA_request issue テンプレート](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=dma_request) を利用してください。

#### Focused Email Lists

Field Marketing チームと Marketing Campaigns チームは、特定の地域、セクター、企業を狙う際のツールとしてターゲットを絞ったメールリストを使用します。メールリストのリクエストは [このテンプレート](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new#request-confirm-target-list) を使用して提出する必要があります。そこから、キャンペーンマネージャーまたは marketing ops がリストを構築またはレビューします

#### SLA for Targeted Lists

- リストのリクエストはメール配信の 7 日前までに必要 - FMM / MPM
- 最終的なスマートリストはメール配信の 2 日前までに利用可能 - MOps

#### List Exports

リストのエクスポートが必要な場合は、[エクスポートリクエスト Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=export_request) を記入してください。

数名のユーザーにエクスポートの権限があります。彼らは適切なデータ管理手順に従い、データ分析のために PII をダウンロードすることは避けるべきです。

## Marketo Sales Insight

Marketo Sales Insight（MSI）は、SFDC ユーザーに Marketo が取っているさまざまなアクションや、Marketo を通じたユーザーアクションの可視性を提供する手助けに使われます。ユーザーはこのインテリジェンスを使って、見込み客とより有意義な会話を行い、スコアに基づいてリードに優先順位を付けることもできます。詳細は [Marketo のドキュメントページ](https://experienceleague.adobe.com/docs/marketo/using/product-docs/marketo-sales-insight/msi-for-salesforce/features/insights-dashboard-feature-overview.html?lang=en) で読めます。

MSI タブは、Leads、Contacts、Accounts のページレイアウトに配置できます。表示されていない場合や、アクセスが必要な場合は、[sales systems の Issue](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/new) を作成してください。

MSI は SFDC インスタンスのタブでも見つけられます。SFDC のメインバナーで `+` アイコンをクリックし、`Marketo` を見つけます。そのタブでは MSI の集計ビューを見られます。

MSI にはいくつかの主要なコンポーネントがあります。

### Insights

このタブには、人の最も新しいアクティビティのタイムラインが表示されます。`ALL` の今後のメールキャンペーンとイベントが表示されます（注: これには、その見込み客に送られるものだけでなく、すべての今後のメール/イベントが含まれます）。タイムラインでは、ウェブアクティビティ、メールの開封/クリック、interesting moments を見られます。リードのタイムラインをクリックすると、各アクションの詳細を見られます。また、全体的なスコアと、過去 30 日間の変化のグラフも表示されます。以下のスクリーンショットを参照してください。

![Marketo Sales Insight](/images/marketing/marketing-operations/marketo/MSI.png)

### Interesting Moments

Interesting moments は、マイルストーンに達したとき、通常は人がイベントに参加したとき、プログラムステータスが変わったとき、またはフォームに記入したときにキャプチャされます。SDR は、見込み客が Inquiry または MQL になる前に取った最後のアクションを素早く確認するために、リードビューで `Last Interesting Moments` フィールドを使用します。特定のアクティビティについて interesting moment を追加したい場合は、Mops に連絡して構築してもらってください。

詳細については、[このページ](/handbook/marketing/marketing-operations/marketo/interesting-moments) を参照してください

### Web Activity

このタブには、このビューで cookie が付与されたユーザーのすべてのウェブアクティビティが表示され、参照元ページが含まれます。リード/コンタクトについては、その特定の人のアクティビティを表示し、アカウントについては、そのアカウントに関連するすべてのコンタクトのアクティビティを表示します。

### Score

このタブを使って、最も新しいスコアの変化が何であるかを確認します。これは、その人が現在のスコアを獲得するために取ったさまざまなアクティビティをすべて確認するのに役立ちます。スコアリングを引き起こしたキャンペーンは、上記の [スコアリングルーブリック](/handbook/marketing/marketing-operations/marketo/#scoring-models) と相互参照できます。

### Email

このタブには、その特定の人に送られたすべてのメール、日付、開封またはクリックしたかどうかのチェックボックスが表示されます。

### Quick Actions and Watch List

人々をウォッチリストに追加して、より注意深く見守ることができます。そのウォッチリストには、`email` の隣にあるメガネをクリックしてアクセスできます。Quick actions は現在構成されていませんが、将来的には見込み客をキャンペーンに追加したり、Marketo 経由でメールを送ったりするために使われる可能性があります。
