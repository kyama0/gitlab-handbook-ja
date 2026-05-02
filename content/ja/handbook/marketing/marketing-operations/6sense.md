---
title: 6sense
description: 6sense は、予測モデルを使用して理想的なタイミングで適切な顧客を特定する Account Based Marketing プラットフォームです
upstream_path: /handbook/marketing/marketing-operations/6sense/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## 概要

[6sense](https://6sense.com/) は、予測モデルを使用して理想的なタイミングで適切な顧客を特定する [Account Based Marketing](/handbook/marketing/account-based-marketing/) プラットフォームです。

**このページは 6sense と私たちの利用方法に関する公開情報を含んでいます。このページに加えて、GitLab チームメンバー向けの追加の非公開情報は [internal handbook](https://internal.gitlab.com/handbook/marketing/marketing-ops-and-analytics/marketing-operations/6sense/) にあります。**

## インテグレーション

6sense は Salesforce、Marketo、Outreach、Qualified、Slack と統合されています。さらに、ユーザー管理は Okta を通じて行われます。

### Salesforce

6sense と Salesforce は双方向に統合されています。Salesforce は 6sense にデータを渡し、6sense インスタンスの基盤である 6sense 予測データモデルに情報を提供し最適化します。6sense 予測データモデルは、Salesforce のキャンペーンエンゲージメントアクティビティを含むさまざまなソースからデータを取り込み、その intent モデルを決定します。6sense はまた、関連する Opportunity の定義をレビューして profile モデルを決定します。最後に、6sense は Salesforce のタスクとイベントアクティビティをレビューして reach モデルを決定します。

6sense のデータは Salesforce にもプッシュされます。6sense フィールドは Salesforce の Account、Contact、および Lead オブジェクトで確認できます。

6sense ログインを持つ Salesforce ユーザーは、Salesforce 内の 6sense iframe も利用できます。

### Marketo

Marketo のアクティビティは予測モデルに情報を提供するため 6sense に渡されます。Marketo のフォーム入力とメールアクティビティは intent モデルに含まれます。Marketo からのアウトバウンドメールアクティビティは reach モデルで使用されます。

加えて、[Marketo は更新を監視](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC53002B2ZN19) しており、`6sense Account 6QA Start Date` フィールドを使用して、識別された `6QA` リードに 20 ポイントの `behavior` ベースのスコアを追加します。`6QA` に基づくスコアリングは 3 ヶ月に 1 回までの制限があります。リードが初期フィルターをクリアすると、6 日間の `wait` ステップに置かれた後、`6QA` に基づくスコアリングを受けます。この遅延により、Marketo はチェックボックスステータスが最初に変更された後にリードが `Accepted`、`Qualifying`、`Qualified`、`Disqualified`、`Ineligible`、`Recycle` のいずれかにラベル付けされていないことを確認でき、他のリード行動に基づくオーバースコアリングを防ぎつつも、リードがポイントを得られるようにします。

### Outreach

### Qualified

### Integrate (DAP)

### Slack

6sense <> Slack 統合は、Slack 経由で 6sense アラートを送信するために使用できます。Slack アラートの設定方法に関するドキュメントは [こちら](https://support.6sense.com/knowledge-base/360062370233-how-to-set-up-a-6sense-alert/#h_01EWYS24ZQXD947P52J1N5YFC4)（6sense ログインが必要）にあります。

## サポート

- [6sense ナレッジベース](https://support.6sense.com/) (6sense ユーザーアカウントが必要)
- Slack の `#mktgops`
- [6sense カスタマーサポート](https://revcity.6sense.com/entry/connect/jsconnect)

## アクセス

以下のチームが 6sense へのロールベースアクセスを持っています:

- Account Based Marketing
- Marketing Campaigns
- Digital Marketing
- Field Marketing
- Sales & Business Development

Marketing Operations チームは、各ロール/機能に対する適切なレベルのアクセスのアクセスリクエスト管理とプロビジョニングを担当しています。6sense はベースラインのエンタイトルメントとしてはプロビジョニングされません。アクセスが必要な場合は、[Lumos App Store](https://app.lumosidentity.com/app_store) 経由でリクエストし、アクセスが必要なビジネス上の理由を提供してください。アクセスリクエストの際は、以下のリストからロールを指定し、そのロールが必要な理由とともに正当性を示してください。アクセスがプロビジョニングされると、6sense タイルが Okta のホームページに表示されます。

### ユーザー設定

ユーザーが 6sense プラットフォームと Salesforce との 6sense インテグレーションの両方にアクセスするには、以下の手順が必要です:

| アクション | 担当者 | 説明 |
| ------ | ------ | ------ |
|  ユーザーを 6sense Okta Google Group に追加。 |  Marketing Ops | これにより 6sense アカウントが作成されます |
| ユーザーは 6sense Okta タイルを検索してクリックすることで 6sense アカウントを有効化。 | ユーザー | これにより 6sense プラットフォーム上でアカウントが有効化されます |
| ユーザーは 6sense プラットフォームで適切なロールを割り当てられる。 | Marketing Ops | デフォルトでは、Okta でアカウントを有効化した後 `View Only` が割り当てられます。これにより、ユーザーがプラットフォーム内で適切なアクションを取れるようになります |
|  ユーザーの Salesforce プロファイルに `6sense User` 権限セットを割り当て。 | Sales Systems | これにより、ユーザーが Salesforce で 6sense ダッシュボード iframe を表示できるようになります |
| ユーザーの Salesforce プロファイルのページレイアウトで `6sense Sales Intelligence` Visualforce を有効化。 | Sales Systems | これにより、6sense カスタムフィールドと iframe が Salesforce の Account ページレイアウトに表示されるようになります |

### 6sense ユーザーロール

- Operation User: このロールは 6sense の insights 機能、orchestration、アラート、管理者レポート、およびインテグレーションとセールスイネーブルメントに関連する設定への完全なアクセスを持ちます。また、キャンペーンや一部のその他の設定への閲覧アクセスも持ちます。
- Marketing User: このロールは 6sense の insights 機能、キャンペーン機能、アラート、管理者レポートへの完全なアクセス、および一部の設定への閲覧アクセスを持ちます。加えて、Ad Inventory Exclusion リストへの編集アクセスも持ちます。
- View Only User（デフォルト）: このロールは Marketing User がアクセスできるすべての機能と設定への閲覧アクセスを持ちます。
- Insights User: このロールはセグメントとアカウントに対する 6sense insights への完全なアクセスを持ちます。
- Sales User: このロールはセグメントとアカウントに対する 6sense insights への完全なアクセスを持ちます。

### 6sense ユーザーシート

6sense ではユーザーシートに制限があるため、ユーザーシートを管理し新規ユーザーへより多くのシートを提供するために、非アクティブユーザーを排除しています。

ユーザー監査レビュー時、過去 6 ヶ月間 6sense プラットフォームまたは Sales のダッシュボードのいずれにもログインしていないユーザーは、シートが取り消されます。

### BDR への 6sense プロビジョニング

6sense アクセスは BDR にのみプロビジョニングします。AE または SDR がアクセスをリクエストする場合は、拒否し、次のように返信してください:
>6sense ライセンスのリクエストは却下しました。AE にはアクセスを提供していませんが、Salesforce のアカウント iFrame と App Launcher の 6sense Dashboard 経由で 6sense にアクセスすることはできます。

BDR がアクセスをリクエストする場合は、適用してから次のように返信します:

> Okta にログインし、6sense タイルを選択して 6sense ユーザーシートを有効化する必要があります。これには最大 24 時間かかる場合があります。
>
> 6sense へのアクセスを取得したら、開始するために以下の手順に従ってください。
>
> 1. Salesforce に移動
> 2. アプリランチャーで 6sense Dashboards を検索
> 3. 6sense Dashboards を選択 - これにより、高い intent を持つ 6sense Qualified Accounts (6QA) を確認するためのパーソナルダッシュボードに移動します
> 4. 地域、従業員数の範囲、セグメントを入力してダッシュボードをカスタマイズするために必要なフィルターを追加してください。
>
> 詳細なリソースについては、専用の [Highspot](https://gitlab.highspot.com/items/664b5bdfd0db5a6c4a965b21) ページをご覧ください:
>
> 1. クイックリファレンス one-pager
> 2. 高い intent を持つ購入アカウントを特定する方法を示す動画チュートリアル
> 3. セールスアプローチで intent データを活用するためのベストプラクティス

BDR が Okta で 6sense を有効化すると、ABM "View Only" で 6sense に追加されます。ABM アクセスを削除して、SI "SI Lite" アクセスを提供する必要があります。

## トレーニングリソース

### Sales Dev トレーニング録画

- [EMEA 6Sense Training](https://www.youtube.com/watch?v=fOPXzpcs_5k)
- [AMER 6Sense Training](https://www.youtube.com/watch?v=z3fmYcoiRXs)

### マーケティングトレーニング

- [2023-09-27: 6sense Field Marketing Enablement Option 1](https://youtu.be/DwPZIp2L1dw)
- [2023-09-27: 6sense Field Marketing Enablement Option 2](https://youtu.be/SeWPi1flQZM)

## オーケストレーション

### アカウントからシーケンスにリードを追加

6Sense では、セグメントを使用して、Salesforce の Sales Intelligence ダッシュボードから対象アカウントの intent とエンゲージメントを監視できます。

1. Sales Intelligence ダッシュボードで、購買者の intent シグナルを示しているアカウントの `Profile Fit`、`Account Reach`、`Buying Stage` を確認します。
2. Persona Map で、強い `Engagement Grade` を持つ理想的な顧客プロファイルに合致するリードを特定できます。
3. リードを選択して `add to Outreach` をクリック
4. Outreach から Outreach Sequence のプロンプトが表示されるので、リードを追加したいシーケンスを選択します。

### 新規コンタクトの Outreach Sequence への取得

6Sense Naive Web Application 上で、Outreach Sequence にセグメントを直接追加できます。これを行うには、`acquire new contacts` してそれらを `an Outreach Sequence` に追加する条件で新しいオーケストレーションを作成する必要があります。

ステップごとの詳細な手順は [ナレッジベース](https://support.6sense.com/knowledge-base/360062650793-getting-started-with-acquire-new-contacts-to-outreach-sequence/)（ナレッジベースへのアクセスにはログインが必要）を参照してください。

## セグメント

セグメントは 6sense 内のすべてのユースケースを駆動し、ユーザーが選択したフィルター、リストアップロード、または CRM 同期に基づいて作成されたアカウントのグループで構成されます。6sense セグメントの詳細については [こちら](https://support.6sense.com/knowledge-base/360060411613-segments-overview/) を参照してください。

6sense セグメント名はオーケストレーション経由で Salesforce に同期されます。セグメントが Salesforce に同期されるためには、セグメントが公開（published）されている必要があります。セグメントの公開が解除されると、そのセグメントのレコードは Salesforce から削除されます。これは 6sense セグメント名フィールドを関連性のある状態に保つ良い方法ですが、ヒストリカルレポートの目的では注意が必要です。

### セグメントの公開

6sense セグメントを公開すると、そのアカウントメンバーシップが特定の 6sense エクスペリエンスや外部システムワークフローに拡張されます。セグメントを公開することで、セグメントとアカウントをより適切に相互参照でき、メッセージング推奨を伝達し、セグメントとアカウントのステータスへの可視性を高め、内部整合を促進する効果的な方法となります。マーケティングユーザーはこの Issue リクエストテンプレートを使用して、6sense でセグメントを公開するようリクエストできます。

`admin users` および `operations users` のみが 6sense でセグメントを公開できます。6sense でセグメントを公開する必要がある場合は、[新規 Marketing Operations Issue を開いてください](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=6sense_publish_segment_req)。

セグメントを Marketo にプッシュするには、Add to Audience オーケストレーションが必要です。この [Marketing Operations Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=6sense_add_audience_to_marketo) を使用してリクエストを開くことができます。仕組みの詳細については、この [internal handbook ページ](https://internal.gitlab.com/handbook/marketing/marketing-ops-and-analytics/marketing-operations/6sense/#add-audience-to-marketo-list) を参照してください。

## ベストプラクティス

### フォルダ命名規則

セグメントとプラットフォーム全体を整理するために、以下のフォルダ命名規則を使用してください:

- `Team Name - FY## Q# - Name of Campaign/Account List`

例:

- `ABM - FY24 Q2 - Tier 1 Accounts`
- `XDR - FY24 Q3 - Campaign Name`

### タグ

タグはトピック別にリストを整理するために使用すべきです。たとえば、大規模キャンペーン、セグメント（SMB、MM など）、ティアなどにタグを使うことができます。

### Sales Dev 命名規則

Sales Dev ユーザーは、Outreach で使用されているのと同じ命名規則でリストに名前を付けるべきです。

## 用語

**Reach Activities:**
アカウントとエンゲージするために、あなたのチームが行う Sales および Marketing アクティビティ。アカウントの担当者に連絡したり、キャンペーンに追加したりするアクティビティが含まれる場合があります。

**Engagement Activities:**
アカウントの担当者が行う、あなたの会社や製品に関心を示すアクティビティ。メールや広告のクリック、フォーム入力、製品に関連する Web リサーチなどのアクティビティが含まれる場合があります。

**Engaged Contacts**
一般的に、アカウントが MAP / CRM のアクティビティ（メールクリック、フォーム入力、エンゲージメントに紐づく CRM Campaign Members（例: ポジティブな反応、ウェビナー出席など））に参加していることを意味します。タクソノミーに基づき、アカウントのコンタクト/リードがこれらのアクティビティにどれだけ参加しているかに基づいてエンゲージメントスコアが計算されます。

**6 Qualified Accounts (6QA)**
6sense によって認定された 6QA は、セールスエンゲージメントの準備が整ったアカウントです。

intent、profile fit、エンゲージメントの増加により、アカウントが初期の購買ステージ（Target、Awareness、または Consideration）から後期の購買ステージ（Decision または Purchase）に移行すると 6QA となり、セールス活動の対象となります。マーケティングのゴールは、アカウントを inbound または 6QA のいずれかに導くことです。

6QA ステータスは 1 と 2 が満たされた場合に true となります:

1. GitLab に対する `Account Profile Fit` が Moderate または Strong である。
2. GitLab に対する `Account In-Market Stage` が Decision または Purchase である。

**6sense Account Buying Stage の定義**

- **Target** - 購買者は問題が存在することに気づいていない可能性があるが、売り手の TAM 内に該当する可能性がある。
- **Awareness** - 購買者は問題があることを認識している。購買者は、問題をより明確に理解、構成、特定するために教育的なリサーチを行っている。
- **Consideration** - 購買者は問題を定義し、解決するためのオプションをリサーチする。購買者は定義した問題を解決するために利用可能なすべてのオプションをリサーチしている。
- **Decision** - 購買者はソリューションを選択する。購買者は、最終的な購入決定を下すために、潜在的なベンダーのリストを絞り込んでいる。
- **Purchase** - 購買者は特定のソリューションにコミットし、購入の理由を正当化する。

上記にリストされていない用語の定義をお探しの場合は、[6sense glossary](https://6sense.com/glossary/) を参照してください。
