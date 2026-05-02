---
title: "Accelevents"
description: "Accelevents は、対面イベントを開催したいイベントプランナー向けのオールインワンのイベント登録およびイベント管理ソリューションです。"
upstream_path: /handbook/marketing/marketing-operations/accelevents/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T00:00:00Z"
translator: claude
stale: false
---

# Accelevents

## Accelevents サポートおよびドキュメントハブ

Accelevents チームによる詳細かつ継続的に更新されるドキュメントは、[こちら](https://support.accelevents.com/en/) のトピックパスをたどることで見つけられます。

## Okta

Accelevents のログインは、プラットフォームが SSO/Okta と統合されているため、Lumos 経由でリクエストする必要があります。すべてのユーザーには現在、Lumos リクエストが成功するとすぐに `Admin` 権限が付与されます。Lumos リクエストが満たされた後にログインが機能しない場合は、MktgOps に Accelevents 内でユーザーシートが作成されたかどうかを調査するよう依頼してください。

## Accelevents ナビゲーション

特別な注意: **同じブラウザで複数のイベントを開かないでください**。設定変更時にイベント間でキャッシュ汚染が発生する可能性があります。

私たちのインスタンスの Accelevents UX は、2 つの異なるエリアに分かれています:

- `White Label Plan` ダッシュボード: このエリアはインスタンスとインスタンスのいくつかの設定を制御します。ここで見つけられるものの最も近い例: インスタンス全体のインテグレーション、ユーザー管理、課金、オーディエンス分析（すべてのイベントにわたる）、ブランディング、SSO 設定、メール+ランディングページ設定。
- `Event Settings` ダッシュボード: イベントごとの設定を制御。イベント内で制御するものの例: ここでフォームフィールドへの変更（`Registration; Order form` の下）、イベント詳細（時間/日付、場所、名前）への変更、イベントタイプの選択（対面、ハイブリッド、オンライン）、参加者用のチケットタイプの作成（例: 有料 vs 無料、または顧客 vs パートナー）、確認メールの作成、参加者リストの表示、スポンサー設定の選択、イベントレベルでのサードパーティインテグレーションの制御。
  - Accelevents チームによって作成されたカスタムスクリプトは、`Integrations -> Landing page` の下にある `Landing Page` 設定に存在します。これらの設定は調整しないでください。調整すると登録フォームに影響します。変更する前に Accelevents Support または MOps に相談してください

## Accelevents でのイベント作成

1. Events 画面から、`Templates` をクリックします
1. Accelevents には現在、イベントシナリオに対する 2 つの主要なテンプレートがあります:
   - 公開予定のイベントには `GitLab Owned + Public Event Template (w/ Marketo connection)` を使用します。このテンプレートには、登録者情報を CRM に転送するための Marketo インテグレーションが含まれています
   - 登録者情報がセールス目的で使用されない内部イベントには `Internal GitLab Template (w/o Marketo connection)` を使用します。このテンプレートはデフォルトで Marketo に接続されていません
1. 上記のオプションから正しいテンプレートを選択し、`Use Template (create event)` を選択します
   - イベントをゼロから作成することも可能ですが、場合によっては推奨されません。`GitLab Owned + Public Event Template (w/ Marketo connection)` テンプレートはそのユースケース用にカスタマイズされています。ランディングページ + 登録フォームには、公開イベントの特定のニーズを満たすカスタムコードが組み込まれています。さらに、このテンプレートはリードを Marketo に同期するように設定されています。内部のみのイベントの場合、ゼロから始めるか「内部」テンプレートを使用することは許容されますが、テンプレートを使わないことは、潜在的に長いセットアップを意味します。
1. イベントに名前を付けます
1. [ランディングページ命名規則](/handbook/marketing/demand-generation/campaigns/landing-pages/#landing-page-naming-convention) を使用してイベント URL を作成します。これらの命名規則はレポーティングシステムで使用され、参加者にも表示されます。これは Marketo でのイベントの表示方法でもあります。
1. Event Organizer は GitLab Events です
1. "Create" をクリックします
1. 日付、設定、説明、場所などを更新します
1. 外部向け（公開）イベントをセットアップした場合は、Marketo プログラムもセットアップする必要があります。Accelevents でイベントをセットアップした後、フォーム入力を介してテスト登録を提出してください。最初の登録者がイベントに追加されると、Marketo プログラムが自動的に作成されます。
   - Marketo セットアップを完了するには、[Campaigns and Programs ページ](/handbook/marketing/marketing-operations/campaigns-and-programs/#adding-linkedin-lead-gen-forms-to-drive-event-registration) で Marketo と SFDC のセットアップに関する詳細な手順を確認してください。LinkedIn でイベントを宣伝する場合は、[Campaigns and Programs ページ](/handbook/marketing/marketing-operations/campaigns-and-programs/#adding-linkedin-lead-gen-forms-to-drive-event-registration) の詳細なセットアップ手順にも従う必要があります。
   - Accelevents によって作成された Marketo プログラムは、Accelevents 登録ランディングページの URL に基づく名前が割り当てられ、Marketo フォルダ `Program_Events` に追加されます。Marketo プログラムの名前と場所は変更できません。変更すると 2 つのプラットフォーム間の同期が壊れます（2025 年 8 月時点でこれは引き続き有効です）。ただし、Salesforce キャンペーン名は変更できます。

**内部イベントのイベント作成 - テンプレートなし（公開イベントには許可されません）**

1. Accelevents プラットフォーム内で新しいイベントを作成するには、`White Label Plan` ダッシュボードの右上にある青い `+ Create Event` ボタンを押します。
2. プロンプトでは、イベント形式が `Online`、`Hybrid`、`In Person` のいずれかを選択するよう求められます。次のプロンプトでは、イベントの要素を求めます - 詳細については Accelevents ドキュメントを参照してください。チケット制のイベントには `Registration` を選択します。最後のプロンプトは、名前、場所、時間/日付などのイベント詳細の記入用です。
3. イベント詳細を記入します
4. 上記の他のすべてのステップが適用されます（イベント URL、Marketo セットアップ）

イベントを削除する必要がある場合は、events リストページに表示されるイベント名の右側にある 3 つのドットをクリックします

### 登録フォームへの更新

Accelevents チームは、登録ランディングページで実行される多くのカスタムスクリプトを作成しています。これらは、登録フォームの外観とアクションの多くの側面を制御します。登録ランディングページのフォームフィールドへの変更は、カスタムスクリプトに影響していないことを検証するためにテストする必要があります。

## Marketo Sync

### このセクションのさらなる更新を期待してください

Accelevents エンジニアリングチームが Marketo インテグレーションを更新中であることに注意してください。新機能の進捗状況を学ぶにつれて、このセクションは更新されます。

#### Accelevents と Marketo テンプレート

Accelevents 内の特定のフィールドは、Marketo 用にデータをクリーンにするための自動化を実行します。Accelevents 登録フォームの条件付きフォーマットが Marketo の条件付きフォーマットと異なるため、Marketo は [このスマートキャンペーン](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC63981A1ZN19) を介して `State`、`Province`、`Territory` の値のデータを移動させます。Accelevents はこれらのフィールドのデータを別々に収集し、Marketo はそれらすべてを `State` フィールドに統合します。

### Marketo に同期されているフィールド

| フィールド名 | 同期動作 |
| ------ | ------ |
|   First Name     |   常に更新     |
|   Last Name     |   常に更新     |
| Email Address| 常に更新 |
|Country/Region|常に更新|
|State (US)| ターゲットが空の場合に更新|
|State (AU)|ターゲットが空の場合に更新|
|Province | ターゲットが空の場合に更新|
|Job Title| ターゲットが空の場合に更新|
|Company Name| ターゲットが空の場合に更新|
|Work phone number|ターゲットが空の場合に更新|
|Working City|ターゲットが空の場合に更新|
|Opt-in version 1 | 常に更新|
|Opt-in version 2| ターゲットが空の場合に更新|
| Ticket Type | 常に更新|

## Google Sheet インテグレーション

GitLab の Google Sheets アカウントはプラットフォーム全体で Accelevents に接続されており、エクスポートされるデータは個々のイベントごとにカスタマイズできます。

注意: Sheets への登録エクスポートは、`GitLab Epic Conference Template` テンプレートから作成されたイベントでのみ **自動的に** アクティブ化されますが、任意のイベントに対してアクティブ化および設定できます。

Google Sheets エクスポート機能にアクセスしてカスタマイズするには、イベントまたはテンプレート内でイベントの `Settings` をクリックし、続いて `Integrations` をクリックします。CRM & Marketing Automation 設定の下で、トグルを使用してエクスポート機能を有効化/無効化します。

`Configure` をクリックして、Google Sheet にエクスポートされるフィールドをマッピングします。Accelevents が独自の Sheet を作成するか、エクスポートを既存の Sheet にマッピングするかをここで決定します。ファイルは、イベント URL の最後の部分をファイル名として、接続された Google Drive に保存されます。ファイルを別のフォルダに移動できますが、名前は変更しないでください。

登録者はフォーム入力時に自動的にエクスポートされるため、登録を開始する前にインテグレーションがライブであることを確認するのが最善です。

公式の Accelevents ドキュメントは [こちら](https://support.accelevents.com/en/articles/10085600-integrate-with-google-sheets) にあります。

## Stripe インテグレーション

Stripe インテグレーションはプラットフォーム全体で動作するように設定されているため、インテグレーションが完了した後に作成されたイベントである限り、任意のイベントフォームへの実装が可能です。Stripe は作成されたイベントに後付けで追加することはできません。

イベントに Stripe 機能を追加するには、まずイベントを作成します。次に、以下の手順に従います:

- 指定された価格と適切な数量で新しいチケットを作成します。これを行うには、`Create Ticket` メニューで `Paid Ticket` を選択します
- 有料チケットの販売開始時間と販売終了時間に正しい時間枠を設定します。GitLab がトランザクション手数料を支払うかを判断し、希望する結果に対してオプションを設定します
- 必要に応じて、チケット説明を入力し、その説明をイベントのランディングページに表示するかを選択します
- 購入者に送信される確認メールを選択します
- チケットが何を許可するかについて提出するためのオプションがいくつかあります。たとえば、特定のセッションへのアクセス、ラウンジへのアクセス、確認メールに添付ファイルとして PDF チケットを含めるなど。これらのオプションを希望に応じて設定します
- Stripe 支払いに追跡コードを配置し、Stripe 内で簡単に識別できるようにするには、個々の Accelevents イベントのサイドバーメニュー内で `Settings` -> `Payment Processing` -> `Event Billing ID` の順に進みます。受信する Stripe 支払いを特定のイベントに関連付けるには、このフィールドにイベント固有の識別コードを配置します

## よくある質問

Q: イベントが Marketo に同期されている場合、イベント後にリストアップロードを完了する必要がありますか?
A: いいえ。イベントで登録者をチェックインする場合、別途リストロードを完了する必要はありません。登録は Marketo と SFDC の両方で参加者にほぼリアルタイムで更新されます（wifi がある場合、そうでなければ接続時に更新されます）。
