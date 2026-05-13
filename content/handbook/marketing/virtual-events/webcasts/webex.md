---
title: Webex ウェブキャスト
description: GitLab における Webex ウェブキャストの概要
twitter_image: '/images/tweets/handbook-marketing.png'
twitter_site: "@gitlab"
twitter_creator: "@gitlab"
upstream_path: /handbook/marketing/virtual-events/webcasts/webex/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-14T00:00:00Z"
translator: claude
stale: false
---

## LIVE ウェブキャスト登録とトラッキング - WebEx

### ステップ 1: WebEx を設定する

*注: WebEx ライセンスは一度に 1 つのセッションにしか使用できません。このライセンスは、フィールドマーケティングが運営するすべての内部主催ウェブキャストに使用されます。したがって、ウェブキャストがリクエストされた際には、[ウェブキャスト gcal](https://calendar.google.com/calendar?cid=Z2l0bGFiLmNvbV8xcXZlNmc4MWRwOTFyOWhldnRrZmQ5cjA5OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t) を確認して、このライセンスを使用する事前にスケジュールされたセッション（ライブとドライランの両方）で競合が発生しないことを確認してください。バッファを設けて競合の可能性を減らすために、セッション間（前と後）は最低 30 分のスケジュールを設けてください。*
*重要: ウェビナーをスケジュールするには SSO に紐付いていない WebEx アカウントしか使用できません。使用するアカウントは `wbxmeet7@gitlab.com` で、認証情報は 1Password ボルト `GitLab Webex Marketing Vault` にあります*
*注: 登録確認メールとリマインダーメールは WebEx から自動的に送信されません。これらは Marketo から送信する必要があります。登録メールは `01 Registration Flow` smart campaign に統合されています。リマインダーメールは、リマインダーを送信したい時間枠に応じてスケジュールしてトークンを編集する必要があります。*

1. **ログイン**: WebEx にログインし、左下の `WebEx Events(classic)` をクリックします。左ナビバーで `Schedule an Event` をクリックします。*統合を成功させるためには、必ず WebEx クラシックインターフェイスを使用してください*
1. **イベント名**: トピックを以下のように追加します「Webcast title - Month DD, YYYY - HH:MM am/pm PT/HH:MM am/pm UTC」（例: `Debunking Serverless security myths - October 21, 2019 - 8:30 am PT/3:30 pm UTC`）。
1. **説明**: ウェブキャストの内容を高レベルで説明する一文を追加します。
1. **WHEN**: ウェブキャストの日時を追加します。
1. **継続時間**: ウェブキャストの長さに 45 分を加えた時間を追加します。Launchpoint 統合が失敗しないように、イベント前の準備コール用に 45 分を追加で含める必要があります。また、超過時のパディングも必要です。開始時間は参加者が実際に参加すべき時間のままにし、継続時間を増やします。例えば、ウェブキャストが PT で午前 9 時から午前 10 時の場合、開始時間は午前 9 時のままで、継続時間は 1 時間 45 分と入力します。
1. **タイムゾーン**: ウェブキャストの正しいタイムゾーンを選択します。
1. テンプレートで事前に設定されているその他すべての設定は **変更しないでください**。
1. **ALTERNATIVE HOSTS**: ウェブキャスト DRI、内部スピーカー、Q&A リソースを代替ホストとして追加します。
1. **PANELISTS**: 以下のビデオ手順に従って、外部 GitLab スピーカーをパネリストとして追加します。
1. **EMAILS**: Marketo から送信するため、メール確認メールとリマインダーメールのチェックを外します。

### ステップ 2: Marketo/SFDC でウェブキャストを設定し、WebEx と統合する

#### Marketo でプログラムを作成する - WebEx

1. [Webcast プログラムテンプレート](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME8983A1) のいずれかに移動して、Marketo でウェブキャストプログラムを作成します。
1. 適切なテンプレートを右クリックして「clone」を選択します
1. 「Clone To」の横にある `A campaign folder` を選択します。
1. 「Name」に MKTO プログラム名（これは SFDC キャンペーン名でもあります）を追加します。以下の形式を使用します: `YYYYMMDD_{Webcast Title}_[Region - only if applicable]`。例: `20170418_MovingToGit`。
1. 「Folder」で、`GitLab-Hosted Campaign Webcasts` または `GitLab-Hosted Workshops` フォルダ内の適切な四半期を選択します。
1. 「Create」をクリックします（注 - 次のステップで Marketo から SFDC キャンペーンを作成します！）

#### launchpoint 統合経由で Marketo プログラムを WebEx に接続する

1. Marketo プログラムの Summary ビューで、`Event Partner:` と「not set」と書かれたリンクが表示されます。
1. 「not set」をクリックします
1. Event Partner ドロップダウンで `WebEx` を選択し、Login ドロップダウンで `WebEx API` を選択します。
1. Event ドロップダウンで、[ステップ 1: WebEx を設定する](/handbook/marketing/virtual-events/webcasts/) でセットアップした WebEx ウェブキャストの名前を選択します

#### Salesforce でキャンペーンを作成する - WebEx

1. Marketo プログラムの Summary ビューで、`Salesforce Campaign Sync:` と「not set」と書かれたリンクが表示されます。
1. 「not set」をクリックします
1. 「None」と書かれた場所で、ドロップダウンをクリックし「Create New」を選択します
1. Marketo プログラム名が名前に自動入力されます（両方のシステム間の一貫性のため）
1. 「Description」にエピックへのリンクを追加します
1. 「Save」をクリックします
1. これから、簡単なレビューを行うために SFDC のキャンペーンに移動します - [Campaigns へのショートカット](https://gitlab.my.salesforce.com/701/o)
1. SFDC キャンペーンをクリックします
1. キャンペーンオーナーをウェブキャスト DRI に変更します
1. ステータスを `in progress` に変更します
1. `Enable Bizible Touchpoints` フィールドを `Include only "Responded" Campaign Members` に編集します
1. Budgeted Cost（必須）をウェブキャストのコスト、またはコストが関連しない場合は「1」に編集します
1. save をクリックします

### ステップ 3.A: Marketo トークンを更新する

シートベルトを締めて！多くのトークンがありますが、それには正当な理由があります。これは Marketo テンプレート内で効率と速度を向上させるための **高度なプラクティス** と **ベストプラクティス** です。プログラムのトップレベルでこれらを更新することで、ランディングページ、メール、自動化、アラートに反映され、新しいウェブキャストの立ち上げプロセスが大幅に効率化されます。

* `{{my.bullet1}}` - 承認済みの [文字数制限](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442) の箇条書きコピー
* `{{my.bullet2}}` - 承認済みの [文字数制限](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442) の箇条書きコピー
* `{{my.bullet3}}` - 承認済みの [文字数制限](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442) の箇条書きコピー
* `{{my.bullet4}}` - 承認済みの [文字数制限](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442) の箇条書きコピー
* `{{my.emailConfirmationButtonCopy}}`  - メール確認用のコピー（オンデマンドの場合）、`Watch now` のままにする
* `{{my.formButtonCopy}}` - フォームボタンのコピー、`Register now` のままにする（オンデマンドに切り替える際は `Watch now` に変更）
* `{{my.formHeader}}` - フォームのヘッダーのコピー、`Save your spot today!` のままにする（オンデマンドに切り替える際は `View the webcast today!` に変更）
* `{{my.heroImage}}` - ランディングページのフォームの上に表示する画像（[Marketo のオプションはこちら](https://app-ab13.marketo.com/#FI0A1ZN9784)）
* `{{my.introParagraph}}` - ランディングページとナーチャーメールで使用するイントロ段落、承認済みの [文字数制限](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442) 内で
* `{{my.mpm owner email address}}` - 自動化には使用されないが、セットアップについて誰に確認すべきか把握するのに役立つ
* `{{my.ondemandUrl}}` - 初期登録ページのセットアップでの更新はスキップ（オンデマンド切り替え時に更新）、`https://` も email トラッキング部分（`lb_email=`）も含まない Pathfactory リンク
  * 含める正しいリンクの例: `learn.gitlab.com/gartner-voc-aro/gartner-voc-aro` - Marketo テンプレートアセット内のコードは URL `https://learn.gitlab.com/gartner-voc-aro/gartner-voc-aro?lb_email={{lead.email address}}&{{my.utm}}` を生成します
  * この URL の両方の部分にはカスタム URL スラッグが含まれており、トラッキングパラメータの簡素化のためにすべての pathfactory リンクに組み込むべきです
* `{{my.socialImage}}` - URL が共有されたときに、ソーシャル、slack などのプレビューに表示される画像。この画像はデザイン/ソーシャルから提供されます。ウェブキャスト固有の画像が提供されない限り、デフォルトのままにしてください。
* `{{my.speaker1Company}}` トークン、スピーカー 1 の会社名
* `{{my.speaker1ImageURL}}` トークン、marketo design studio 内のスピーカー 1 の画像 URL
* `{{my.speaker1JobTitle}}` トークン、スピーカー 1 の職位
* `{{my.speaker1Name}}` トークン、スピーカー 1 のフルネーム
* スピーカー 2 と 3 についてもこれを繰り返します。スピーカーが多いまたは少ない場合は、一般的なウェブキャストセットアップの最後にある以下の手順に従ってください。
* `{{my.utm}}` - レポートダッシュボードで適切なキャンペーンへのトラフィックを追跡する UTM（ウェブキャストが統合キャンペーンの一部でない場合は、統合キャンペーン utm またはプログラム名を utm キャンペーントークンに追加）
* `{{my.valueStatement}}` トークン、ウェブキャストから視聴者が得るものについての短い値声明、これはフォローアップメールに紐付き、[文字数制限チェッカー](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=1471341556) の最大/最小要件を満たす必要があります
* `{{my.webcastDate}}` - ウェブキャストの LIVE 日付。
* `{{my.webcastDescription}}` - 承認済みの文字数制限内で 2 ～ 3 文。これはソーシャルでのページプレビューに表示され、YouTube と Pathfactory の説明で使用されます。
* `{{my.webcastSubtitle}}` トークン、ウェブキャストのサブタイトル。
* `{{my.webcastTime}}` トークン、ローカルタイムゾーン/UTC タイムゾーンでのウェブキャスト時間。
* `{{my.webcastTitle}}` トークン、ウェブキャストのタイトル。
* `{{my.registrationConfirmationButtonCopy}}` トークン、登録確認ボタンメッセージ。
* `{{my.webcastReminder1}}`: トークン、最初のリマインダーの時間リマインダー値
* `{{my.webcastReminder2}}`: トークン、2 番目のリマインダーの時間リマインダー値
* `{{my.Add To Calendar}}`: ICS ファイル用の Add to Calendar オープン用トークン。ダブルクリックして時間スロットと説明を編集

### ステップ 3.B: Marketo で smart campaigns をオンにする

* `00 Interesting Moments` キャンペーンを有効化します。
* `01a Registration Flow (single timeslot)` smart campaign を有効化します。

### ステップ 3.C: ランディングページを作成する

* ウェブキャストテンプレートをクローンし、Marketo トークンを更新すると、ランディングページはほぼ準備完了です！
  * 「Assets」の下で `Registration Page` を右クリックし、`URL Tools` > `Edit URL Settings` の上にホバーします
  * 形式 `webcast-topic`（または地域が関連する場合は `webcast-topic-region`）を使用します - 例: `webcast-mastering-cicd` または `webcast-mastering-cicd-italian`
* `Thank You Page` についても同じ手順を完了します
  * 形式 `webcast-topic-thank-you`（または地域が関連する場合は `webcast-topic-region-thank-you`）を使用します - 例: `webcast-mastering-cicd-thank-you` または `webcast-mastering-cicd-italian-thank-you`

#### Marketo ランディングページでのスピーカー数の調整

**スピーカー数が少ない場合**
スピーカーモジュールは Marketo ランディングページモジュールで制御されます。テンプレートは最初は 3 名のスピーカーをサポートするようにセットアップされています（注: これは My Tokens とランディングページテンプレートの両方でサポートされています）。スピーカーが少ない場合は、以下の手順に従ってください:

1. Registration Landing Page を右クリックし、`Edit Draft` をクリックします
2. `Speaker` セクションをダブルクリックします
3. ツールバーで `HTML` をクリックします
4. 削除する必要があるスピーカーごとに、以下のコードを削除します

```html
<div><br /></div>
<ul>
<li>{{my.speaker3ImageURL}}</li>
<li>{{my.speaker3Name}}</li>
<li>{{my.speaker3JobTitle}}</li>
<li>{{my.speaker3Company}}</li>
</ul>
```

**スピーカー数が少ない場合**
スピーカーモジュールは Marketo ランディングページモジュールで制御されます。テンプレートは最初は 3 名のスピーカーをサポートするようにセットアップされています（注: これは My Tokens とランディングページテンプレートの両方でサポートされています）。スピーカーが少ない場合は、以下の手順に従ってください:

1. Registration Landing Page を右クリックし、`Edit Draft` をクリックします
2. `Speaker` セクションをダブルクリックします
3. ツールバーで `HTML` をクリックします
4. 削除する必要があるスピーカーごとに、以下のコードを削除します

```html
<div><br /></div>
<ul>
<li>{{my.speaker3ImageURL}}</li>
<li>{{my.speaker3Name}}</li>
<li>{{my.speaker3JobTitle}}</li>
<li>{{my.speaker3Company}}</li>
</ul>
```

追加のサポートが必要な場合は、必要に応じてサポートのために [#marketing_programs slack](https://gitlab.slack.com/archives/CCWUCP4MS) でコメントしてください。

### ウェブキャスト招待 - WebEx

:exclamation: **@jgragnola からの注: 私たちはこれらの招待をさらにテンプレート化して、コピー変更が不要になりトークンがこれらのメールを処理するよう作業を進めています。** ([Issue](https://gitlab.com/gitlab-com/marketing/digital-marketing-programs/-/issues/3422))

1. メール `invitation 1 - 2 weeks prior`、`invitation 2 - 1 week prior`、必要に応じて `invitation 3 - Day before` をウェブキャストに関連するコピーで更新します。*注: 通常、3 つのメールすべてに同じコピーを使用し、テンプレートの件名を調整して「リマインダー」のように聞こえるようにします。*
2. メール `Registration Confirmation`、希望に応じて `Reminder 1` と `Reminder 3` をウェブキャストに関連するコピーで更新します。*注: 通常、3 つのメールすべてに同じコピーを使用し、テンプレートの件名を調整して「リマインダー」のように聞こえるようにします。*
3. コピーを承認し、リクエスト元とプレゼンター（リクエスト元と異なる場合）にサンプルを送信します。
4. List フォルダに移動し、`Target List` smart list を編集して、過去の類似プログラムの名前と該当するプログラムステータスを `Member of program` フィルタに入力します。これにより、過去に類似のトピックのプログラムに参加した人々が招待に含まれます。
5. サンプルメールコピーの承認を得たら、ステップ 1 で概説したメールプログラムをスケジュールします。

### ステップ 4: ウェブキャストを /events ページに追加する

* /events ページにウェブキャストを追加するには、この [ステップバイステップガイド](/handbook/marketing/events/#how-to-add-events-to-aboutgitlabcomevents) に従ってください。

### ステップ 5: セットアップをテストする

1. LIVE ランディングページで GitLab メールを使用してテストリードを送信し、登録が Marketo プログラムで適切に追跡され、確認メールが届くことを確認します。*登録確認メールをチェックしてテストします。Registration Confirmation、Reminder 1、Reminder 2 で `Add to calendar` トークンと Google カレンダー用のメール値を更新することを忘れないでください。*
