---
title: "キャンペーンとプログラム"
description: "Campaign は、マーケティング施策の取り組みを追跡するために使用します"
upstream_path: /handbook/marketing/marketing-operations/campaigns-and-programs/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
lastmod: "2026-05-26T13:36:07-06:00"
translated_at: "2026-05-26T21:32:55Z"
translator: claude
stale: false
---

## キャンペーン

Campaign は、マーケティング施策（フィールドイベント、ウェブキャスト、コンテンツダウンロードなど）の取り組みを追跡するために使用します。Campaign タイプは、マーケティングがどのように支出を追跡するかに合わせて整理されており、私たちの 3 つのコアシステム（Marketo、Salesforce、Bizible）でレコードが追跡される方法を一貫した追跡のために揃えています。Campaign を活用することで、Marketing、Sales、Finance をまたいだ取り組みを揃えられます。

Marketing Ops は Field Marketing チームおよび Corporate Events チームと連携し、Marketo プログラムのセットアップと設定を提供します。これにより、これらのチームに対して、目標達成のための最適な技術的セットアップに関するアドバイスを提供し、より複雑なプログラム要件を効率化する社内パートナーとして機能します。詳細は [Marketo Program/Campaign Support ページ](/handbook/marketing/marketing-operations/campaign-operations/)を参照してください。

以下の表で「Valid for List Import」は、この特定のステータスが[セルフサービスのリストインポート](/handbook/marketing/marketing-operations/automated-list-import/)で使用できるかどうかを示しています。ごくまれに、イベントによっては MOps への相談が必要な特別な考慮事項があり、それらは表内でフラグが付けられています。

### Campaign のコスト追跡

マーケティングが Campaign のコストをどのように追跡するかについては、[このページ](/handbook/marketing/marketing-team-processes/#how-marketing-tracks-campaign-expenses)を参照してください。

### Campaign タイプとステータスの進行

レコードは一連のイベントステータスを**一方向にのみ**進行できます。レコードはステータスを逆方向に移動 _できません_。

例: `Registered` に設定されたレコードを `Waitlisted` に戻すことはできません。

#### Conference

スポンサー費用を支払い、ブース／プレゼンスを設け、GitLab から代表者を派遣しているあらゆるイベント（例: AWS re:Invent、DevOps Enterprise Summit）。これには、登録を私たちが所有していないものの参加者リストやエンゲージメントが生成される、スポンサーまたは参加するバーチャルイベントも含まれます。

バーチャルカンファレンスでは、GitLab はスポンサー料を支払ってバーチャルブース、場合によってはスピーキングセッションの枠やパネルへの参加を獲得します。成功基準のため、バーチャルブースの存在は必須要件です。[詳細はこちら](/handbook/marketing/virtual-events/external-virtual-events/#virtual-conferences)。

5,000 名を超える `attendees` のリストロードでは、Mktgops は `Field Marketing Director` と協議し、プログラムメンバーを `success` とラベル付けすることの妥当性を確認する必要があります。これは `Bizible Touchpoints` に影響するためです。これを行う方法については、[こちらの手順](/handbook/marketing/marketing-operations/campaigns-and-programs/#instructions-how-to-update-conferences-with-more-than-5000-attendees)に従ってください（MktgOps のみ）。

**Bizible:** これは _オフライン_ チャネルとして追跡されます。登録ページをホストしておらず、イベント後にブース来訪者のリストを受け取るためです。オフラインチャネルのタッチポイントは、AMM（旧 Bizible）の Campaign 同期ルールによって作成されます。これは[このスプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)で確認できます。

| Member Status | 定義 | Success | Valid for list import |
| ------------- | ---------- | ------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  | No |
| Sales Invited | Sales/SDR がイベントに関する招待／情報を送信 |  | No |
| Sales Nominated | Sales がレコードを指定し、Marketing が送信するトリガーイベントメールを受け取る |  | No |
| Marketing Invited | Marketing の地域ターゲットメール |  | No |
| Waitlisted| 登録が満員の場合の保留状態。空きが出れば Registered に移動| | No |
| Registered | イベントに登録|| No（特別条件については MOps に確認） |
| No Show | 登録したが参加の確認なし、欠席と推定 | | Yes |
| Meeting Requested | カンファレンスで開催予定のミーティングを設定 |  | No（特別条件については MOps に確認） |
| Meeting No Show | カンファレンスで予定されたミーティングがキャンセルまたは不参加 |  | Yes |
| Meeting Attended | カンファレンスで予定されたミーティングに参加 | Yes | Yes |
| Attended| イベントに参加、ブースではエンゲージしなかった、または expo フロアのスピーキングセッションに参加 | Yes | Yes |
| Visited Booth | 何らかの理由でブースに立ち寄った（最も一般的なカンファレンスステータス） | Yes | Yes |
| Follow Up Requested | イベント後に Sales によるフォローアップを要求 | Yes | Yes |
| Attended On-Demand | イベント後にオンデマンドでカンファレンス資料を視聴／消費 | Yes| Yes |

#### Content Syndication

サードパーティがホストするホワイトペーパーまたはその他のコンテンツオファー。

**Bizible:** これは _オフライン_ チャネルとして追跡されます。オフラインチャネルのタッチポイントは、AMM（旧 Bizible）の Campaign 同期ルールによって作成されます。これは[このスプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)で確認できます。

| Member Status | 定義 | Success | Valid for list import |
| ------------- | ---------- | ------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  | No |
| Downloaded | コンテンツをダウンロード | Yes | Yes |

#### Direct Mail

パッケージまたは郵送物が発送される場合です。現在の手順では Brilliant Gifts と Qualified の使用が必要です。配送プログラムのステータスとアラートを利用するには、Marketing チームメンバーが Brilliant のインターフェースを通じて受信者に注文フォームメールを送信し、Marketo または SFDC のいずれかでプログラムステータスを手動で変更する必要があります。受信者にギフトを選択するオプションが与えられる場合は、Brilliant 内で `Send a Gift -> Campaign or Quick Send` を使用します。ギフトが Marketing または Sales チームによって選択される場合は、`Send a Gift -> Surprise Send` を利用します。`Meeting Booked` ステータスは Qualified を介して更新され、`Meeting Attended` はミーティング成功後に Sales または Marketing が手動で更新する必要があります。`Meeting No Show` は、Qualified の自動メールを介して Sales/Sales Dev が更新します。

**Bizible:** これは _オフライン_ チャネルとして追跡されます。オフラインチャネルのタッチポイントは、AMM（旧 Bizible）の Campaign 同期ルールによって作成されます。これは[このスプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)で確認できます。

| Member Status | 定義 | Success | ギフトの webhook をトリガーするか？|
| ------------- | ---------- | ------- | ------------ |
| No Action | すべてのレコードのデフォルトの開始位置 |  |  |
| Nominated | このステータスでプログラムに追加されたリードは、ミーティング招待を受け取ることを示す |  |  |
| Invite Sent | ミーティングのメール招待が送信されたことを示す |  |  |
| Email Opened | 現在このプログラムタイプ内では使用されていない | | |
| Gift Accepted | 受信者がギフトリクエストフォームに記入 | | |
| Gift Ordered | ギフトが Brilliant で手動注文され、Sales に知らせるためプログラムステータスが手動で変更された | | |
| Gift Shipped | ギフトが発送され、Sales に知らせるためプログラムステータスが手動で変更された | | |
| Gift Delivered | ギフトが配達され、Sales に知らせるためプログラムステータスが手動で変更された | | |
| Meeting Booked | ミーティング招待の受信者が Qualified を介してミーティングをスケジュール | Yes | |
| Meeting Attended | 受信者が予定されたミーティングで No Show とラベル付けされなかった | Yes | Yes |
|Cancelled | 本人が予定されたミーティングの前にキャンセルした  | | |
| No Show | Sales Dev が Qualified の自動メールを介してミーティングが行われなかったことを示した  | | |

#### Email Send

このプログラムタイプは Marketo のメールプログラムと組み合わせて使用します。このプログラムタイプは SFDC への同期が可能ですが、SFDC に同期すべきなのは、対象のメール送信が関連する商談追跡を必要とする重要なビジネス上の影響を持つ場合に限られます。一部のメールアドレスは Marketo のトラッキングをブロックするため、これらは 100% 正確にはならない点に留意してください。

**Bizible:** 技術的には、これは _オンライン_ チャネルでも _オフライン_ チャネルでもありません。タッチポイントは技術的にはプログラムタイプ自体によって作成されるのではなく、メール受信者がメール内リンクをクリックし、タッチポイント対応のウェブサイトを訪問するというアクションによって作成されます。

| Member Status | 定義 | Success |
| ------------- | ---------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  |
| Member | プログラムに追加された。メール送信後もこのステータスのままの場合、メールの送信がブロックされたと推定できる |  |
| Email Bounced | Marketo のメールトラッキングが、受信者のメールアドレスがバウンスしたことを検出   |  |
| Email Delivered | Marketo のメールトラッキングが、受信者のメールアドレスが送信されたメールを受信したことを検出 |  |
| Email Opened | Marketo のメールトラッキングが、受信者がメールを開封したことを検出 |  |
| Clicked In-Email Link | Marketo のメールトラッキングが、受信者がメール内のリンクを開いたことを検出 | Yes |
| Replied to Email | メール返信を促していないため、おそらく未使用のステップ |  |
| Unsubscribed | Marketo のメールトラッキングが、受信者がメール内の設定リンクを介して以降の通信を購読解除したことを検出 |  |

#### Executive Roundtables

これは、サードパーティのベンダーまたは GitLab のいずれかを通じて開催できる Campaign に使用され、対面とバーチャルの両方の Roundtable をカバーします。これは高レベルの CxO 参加者の集まりで、モデレーター／ホスト、GitLab エキスパート、デリゲートの間でのオープンなディスカッションとして実施されます。通常プレゼンテーションはなく、代わりに誰もが発言に加われるディスカッションが行われます。ホストはディスカッショントピックをリードする質問を準備し、デリゲートに順番に質問して回答を求めます。[詳細はこちら](/handbook/marketing/virtual-events/external-virtual-events/#overview)。

プログラムタイプは、`dietary restriction`（食事制限）関連のフィールドをクリアするスマートキャンペーンに含まれています。イベントのプログラムステータスが記録されてから 7 日後に、フィールドは自動的にクリアされます。

**Bizible:** これは _オフライン_ チャネルとして追跡されます。オフラインチャネルのタッチポイントは、AMM（旧 Bizible）の Campaign 同期ルールによって作成されます。これは[このスプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)で確認できます。

| Member Status | 定義 | Success | Valid for list import |
| ------------- | ---------- | ------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  | No |
| Sales Nominated | Sales がレコードを指定し、Marketing が送信するトリガーイベントメールを受け取る |  | No |
| Waitlisted | 登録が満員の場合の保留状態。空きが出れば `Registered` に移動 |  | No |
| Registered | イベントに登録 |  | No（特別条件については MOps に確認） |
| Cancelled | 登録したが、イベント前にキャンセル | | No |
| No Show | 登録したが、イベントに参加しなかった |  | Yes |
| Attended | イベントに参加 | Yes | Yes |
| Follow Up Requested | イベント中にフォローアップを要求 | Yes | Yes |

#### Gated Content

ホワイトペーパーまたはその他のコンテンツオファー。

**Bizible:** これは _オンライン_ チャネルとして追跡されます。

| Member Status | 定義 | Success |
| ------------- | ---------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  |
| Downloaded | コンテンツをダウンロード | Yes |

#### Inbound - offline

**Bizible:** これは _オフライン_ チャネルとして追跡されます。タッチポイントを Qualified や PQL の handraise などのオンライン手段で直接適用できないためです。オフラインチャネルのタッチポイントは、AMM（旧 Bizible）の Campaign 同期ルールによって作成されます。これは[このスプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)で確認できます。

| Member Status | 定義 | Success |
| ------------- | ---------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  |
| Requested Support | handraise アクションを取り、GitLab チームにサポートを要求した ||
| Requested Contact | Contact、Professional Services、Demo、または Pricing Request に記入した | Yes |

#### Inbound Request

フォローアップを必要とするあらゆるタイプのインバウンドリクエスト。

**Bizible:** これは _オンライン_ チャネルとして追跡されます。

| Member Status | 定義 | Success |
| ------------- | ---------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  |
| Requested Support | handraise アクションを取り、GitLab チームにサポートを要求した ||
| Waitlisted | 将来の SKU の購入リクエストを送信した  ||
| Requested Contact | Contact、Professional Services、Demo、または Pricing Request に記入した | Yes |

#### Live Event

このイベントタイプは `Owned Event` と同様に機能しますが、対面イベントプラットフォームである Accelevents でのみ使用されるという条件があります。Accelevents が製品を拡充するにつれて、より多くのステータスが含まれるようになります。これは、私たちが作成し、登録を所有し、スピーカー／会場を手配するイベントです（例: GitLab Commit や Meetup）。このグループに含まれると考えられるのは、カンファレンススポンサーシップに付随して追加されるサードパーティの補助的イベント（カンファレンスでのハッピーアワーや VIP ディナーなど）です。

**Bizible:** これは _オンライン_ チャネルおよび _オフライン_ チャネルとして追跡されます。登録プロセスを私たちのウェブサイトを通じて管理しているためです。誰かが登録するたびに、そのオンラインアクティビティに基づいて TP が作成され、さらに success ステータスを持つ Campaign メンバーについては Campaign 同期ルールに基づいて別の TP が追加されます。

| Member Status | 定義 | Success | Valid for list import |
| ------------- | ---------- | ------- | ------- |
| Invited | Sales/SDR がイベントに関する招待／情報を送信 |  | No |
|Pending|承認のための保留ステータス||No|
| Waitlisted | 登録が満員の場合の保留状態。空きが出れば `Registered` に移動 |  | No |
| Denied | ユーザーがイベントに承認されなかった | | No |
| Approved | ユーザーがイベントに承認されたが、Registered よりも使用される可能性は低い| | No |
| Registered | イベントに登録 |  | Yes |
| No Show | 登録したがイベントに参加しなかった |  | Yes |
| Attended | イベントにライブで参加 | Yes | Yes |
| Canceled| 本人がイベント前に登録をキャンセルした| | No |
| Refunded | 本人がイベント前にイベント関連の支払いを返金された| |  No |

#### Operational

これは、非伝統的なリストアップロードに使用されます。具体的には、a) アップロードされたリードのスコアリングを回避する、b) 伝統的なナーチャリングメールを回避する、c) その他のさまざまな運用関連タスクを実行する、といった目的です。例: 教育的なカンファレンスリストのアップロード。

**Bizible:** これは _オンライン_ チャネルとして追跡されます。該当する場合、私たちがイベントに参加したためです。

| Member Status | 定義 | Success | Valid for list import |
| ------------- | ---------- | ------- | ------- |
| Member | すべてのレコードのデフォルトの開始位置 |  | MOps のみ |
| Registered | 登録した（おそらく参加しなかった） |  | MOps のみ |
| Attended | ライブイベントに参加 |  Yes | MOps のみ |
| Attended Virtually | イベントにバーチャルで参加。参加はライブまたはイベント後のいずれか | Yes | MOps のみ |

#### Owned Event

これは、私たちが作成し、登録を所有し、スピーカー／会場を手配するイベントです（例: GitLab Commit や Meetup）。このグループに含まれると考えられるのは、カンファレンススポンサーシップに付随して追加されるサードパーティの補助的イベント（カンファレンスでのハッピーアワーや VIP ディナーなど）です。

**Bizible:** これは _オンライン_ チャネルおよび _オフライン_ チャネルとして追跡されます。登録プロセスを私たちのウェブサイトを通じて管理しているためです。誰かが登録するたびに、そのオンラインアクティビティに基づいて TP が作成され、さらに success ステータスを持つ Campaign メンバーについては Campaign 同期ルールに基づいて別の TP が追加されます。

プログラムタイプは、`dietary restriction`（食事制限）関連のフィールドをクリアするスマートキャンペーンに含まれています。イベントのプログラムステータスが記録されてから 7 日後に、フィールドは自動的にクリアされます。

| Member Status | 定義 | Success | Valid for list import |
| ------------- | ---------- | ------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  | No |
| Subscribed to Updates | フォーム記入を介して GitLab イベントの更新を購読 |  | No |
| Sales Invited | Sales/SDR がイベントに関する招待／情報を送信 |  | No |
| Sales Nominated | Sales がレコードを指定し、Marketing が送信するトリガーイベントメールを受け取る |  | No |
| Marketing Invited | Marketing の地域ターゲットメール |  | No |
| Declined Invitation | 受信者がイベント招待を辞退 | | No |
| Waitlisted | 参加人数が限られるイベントの保留状態。空きが出れば `Registered` に、出なければ `Declined` に移動 |  | No |
| Declined | 空きがない場合のステータス | | No |
| Registered | イベントに登録 |  | No（特別条件については MOps に確認） |
| Cancelled | 登録したが、イベント前にキャンセル |  | No |
| No Show | 登録したがイベントに参加しなかった |  | Yes |
| Attended | イベントにライブで参加| Yes | Yes |
| Attended On-demand| イベント後にオンデマンドでプレゼンテーション資料を視聴／消費| Yes | Yes |
| Follow Up Requested | イベント後に GitLab に関する追加詳細の送付を要求 | Yes | Yes |

#### Paid Social

**Bizible:** このプログラムは、ソーシャル関連の Campaign（例: LinkedIn キャンペーン）によって取り込まれたリードとプログラムを格納するために指定されており、_オフライン_ チャネルとして追跡されます。オフラインチャネルのタッチポイントは、AMM（旧 Bizible）の Campaign 同期ルールによって作成されます。これは[このスプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)で確認できます。

| Member Status | 定義 | Success |
| ------------- | ---------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  |
| Responded | フォーム記入などのソーシャルキャンペーンに関連するアクションを取った  | Yes |

#### Partner - MDF

これは、Channel Partner が MDF 資金を活用して実行するアクティビティ向けです。私たちはメンバーシップを追跡しますが、これらのリードに対するフォローアップは GitLab ではなくパートナーが行います。詳細は[こちら](/handbook/marketing/marketing-operations/campaigns-and-programs/#partner---mdf)を参照してください。

**Bizible:** これは _オフライン_ チャネルとして追跡されます。オフラインチャネルのタッチポイントは、AMM（旧 Bizible）の Campaign 同期ルールによって作成されます。これは[このスプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)で確認できます。

| Member Status | 定義 | Success | Valid for list upload |
| ------------- | ---------- | ------- | ------- |
| Member | すべてのレコードのデフォルトの開始位置 |  | Yes |
| Sales Nominated | リードがプログラムのために sales nominated された場合のステータス |  | No |
| Responded | イベントまたは Campaign に参加 |Yes| Yes |

#### Prospecting

このプログラムタイプは、パートナーリストやデータアップロード中心のリストなど、非イベント関連のリストアップロードに特化しています。

**Bizible:** これは Bizible では追跡されません。

| Member Status | 定義 | Success | Valid for list uploads |
| ------------- | ---------- | ------- | ----- |
| No Action | すべてのレコードのデフォルトの開始位置 |  | MOps のみ |
| Uploaded | アップロード成功時にリードが通常移行するステータス |  | MOps のみ |
| Do Not Use (Responded) | 使用しないこと。Marketo が `success` ステップを要求するために含まれている  | Yes  | No |
| Member | このプログラムタイプの特別なメンバーステータスを示す。「特別」の意味はユースケースに依存する |  | MOps のみ |

#### Speaking Session

この Campaign タイプは、より大規模な Field/Conference/Owned イベントの一部となることがありますが、影響を測定するために、より大きなイベントとは独立してエンゲージメントのやり取りを追跡します。これは私たちが登録を促進できるものです。私たちのスピーキング登壇への参加を追跡するためのものです。

**Bizible:** これは _オフライン_ チャネルとして追跡されます。オフラインチャネルのタッチポイントは、AMM（旧 Bizible）の Campaign 同期ルールによって作成されます。これは[このスプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)で確認できます。

| Member Status | 定義 | Success | Valid for list upload |
| ------------- | ---------- | ------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  | No |
| Sales Invited | Sales/SDR がイベントに関する招待／情報を送信 |  | No |
| Sales Nominated | Sales がレコードを指定し、Marketing が送信するトリガーイベントメールを受け取る |  | No |
| Marketing Invited | Marketing の地域ターゲットメール |  | No |
| Registered | セッションに登録または参加を表明 |  | No（特別条件については MOps に確認） |
| No Show | 登録したがイベントに参加しなかった |  | Yes |
| Attended | スピーキングセッションのイベントに参加 | Yes | Yes |
| Follow Up Requested | スピーカーと会話した、またはイベント後に Sales によるフォローアップを要求 | Yes | Yes |

#### Sponsored Webcast

これは、外部パートナー／ベンダーのプラットフォームでホストされるウェブキャストです。`Attended On-demand` ステータスは、GitLab ホストのオンデマンドと GitLab 以外がホストするオンデマンドの両方のウェブキャストを考慮します。[詳細はこちら](/handbook/marketing/virtual-events/external-virtual-events/#overview)。

**Bizible:** これは、以下で述べる両方のタイプのタッチポイント（TP）について _オフライン_ チャネルとして追跡されます。

Sponsored Webcast では、2 つの方法で TP を作成しています。

1. **Registration TP**。これは、オンライン登録方式（私たちの LP 上の bizible スクリプト）を通じて Owned Event 向けに作成される TP を模倣したものです。ただし、Sponsored Webcast では LP 登録を所有していないため、この方式は利用できません。代わりに、これらの TP を Marketo Program メンバーシップ方式を通じて複製しています。

Marketo Program メンバーシップのルールは、フォルダー名に "Sponsored Webcasts" を含む Marketo フォルダーに置かれた Marketo プログラムに格納されているすべてのプログラムメンバーに対して「Registration TP」を作成します。この命名規則に従っている限り、これらの TP は自動的に作成されます。これらのタッチポイントの Touchpoint Date は `Program Membership Date` です。

1. **Responded Status TP**。これは、responded ステータスの Campaign メンバーのみを対象に、[AMM Channel/Sub-Channel Rules for Offline Touchpoints](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit?gid=92970564#gid=92970564)（19 行目のルール）に基づいて作成されます。これらの TP の TP Date は、関連付けられた SFDC Campaign 内の `Member First Associated Date` です。Sponsored Webcast Campaign タイプの Campaign ステータスについては、以下を参照してください。

| Member Status | 定義 | Success | Valid for list upload |
| ------------- | ---------- | ------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  | No |
| Sales Nominated | 招待者追跡のために Marketing が使用 | | No |
| Registered | ウェブキャストに登録 |  | No |
| No Show| 登録したがイベントに参加しなかった |  | Yes |
| Attended | イベントに参加 | Yes | Yes |
| Follow Up Requested | GitLab からのフォローアップを要求 | Yes | Yes |
| Attended On-demand | イベント後にオンデマンドでプレゼンテーション資料を視聴／消費 | Yes | Yes |

#### Survey

私たちまたはサードパーティが送信するサーベイ。回答者と、受け取った新規リードを追跡します。

**Bizible:** これは _オフライン_ の Bizible チャネルとして追跡されます。オフラインチャネルのタッチポイントは、AMM（旧 Bizible）の Campaign 同期ルールによって作成されます。これは[このスプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)で確認できます。

| Member Status | 定義 | Success | Valid for list upload |
| ------------- | ---------- | ------- | ------- |
| Member | すべてのレコードのデフォルトの開始位置 |  | No |
| Sales Nominated | Sales がレコードを指定し、Marketing が送信するトリガーイベントメールを受け取る |  | No |
| Invited | 招待されたが、サーベイに参加しなかった |  | Yes |
| Filled-out Survey | サーベイに記入 | Yes | Yes |
| Follow Up Requested | サーベイに記入し、Sales からの連絡を要求 | Yes | Yes |

#### Trial

各製品ライン（Self-managed または SaaS）の Trial のコホートを追跡し、その影響を確認します。

**Bizible:** プロダクト内の self-managed および SaaS のトライアルは、**オフライン** の Bizible タッチポイントとして追跡されます。Marketo フォームを利用する self-managed トライアルは **オンライン** の Bizible タッチポイントです。

| Member Status | 定義 | Success |
| ------------- | ---------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  |
| Signed Up | Trial にサインアップ | Yes |

#### Vendor Arranged Meetings

サードパーティのベンダーが見込み客または顧客アカウントとの 1 対 1 のミーティングを組織する Campaign に使用します。これは GitLab チームメンバーが社内で設定するミーティングは組織しません。例としては、ベンダーが GitLab にとって関心のある見込み客とのミーティングを組織する「スピードデーティング」スタイルのミーティングセットアップが挙げられます。[詳細はこちら](/handbook/marketing/virtual-events/external-virtual-events/#overview)。

**Bizible:** これは _オフライン_ の Bizible チャネルとして追跡されます。オフラインチャネルのタッチポイントは、AMM（旧 Bizible）の Campaign 同期ルールによって作成されます。これは[このスプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)で確認できます。

プログラムタイプは、`dietary restriction`（食事制限）関連のフィールドをクリアするスマートキャンペーンに含まれています。イベントのプログラムステータスが記録されてから 7 日後に、フィールドは自動的にクリアされます。

| Member Status | 定義 | Success | Valid for list upload |
| ------------- | ---------- | ------- | ------ |
| No Action | すべてのレコードのデフォルトの開始位置 |  | No |
| Registered | イベントに登録 |  | No |
| No Show | 登録したが、イベントに参加しなかった |  | Yes |
| Attended | イベントに参加 | Yes | Yes |
| Follow Up Requested | スピーカーと会話した、またはイベント後に追加詳細の送付を要求 | Yes | Yes |

#### Webcast

GitLab がホストおよび開催するあらゆるウェブキャスト。ウェブキャストを実施するグループはいくつかあります。セットアップの追加詳細については、それぞれの専用ページを参照してください。

- [Campaign webcast](/handbook/marketing/virtual-events/webcasts/#campaign-webcasts)
- [Field Marketing webcast](/handbook/marketing/field-marketing/field-marketing-owned-virtual-events/#webcasts-1)
- [Goldcast webcast](/handbook/marketing/marketing-operations/goldcast)

**Bizible:** これは _オンライン_ の Bizible チャネルおよび _オフライン_ チャネルとして追跡されます。登録プロセスを私たちが所有しているため、誰かがウェブキャストに登録するたびに、ランディングページ上に置かれた Bizible スニペットに基づいて TP が作成され、さらに success/responded ステータスを持つ Campaign メンバーについては別の TP が作成されます。

| Member Status | 定義 | Success | Valid for list upload |
| ------------- | ---------- | ------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  | No |
| Sales Invited | Sales/SDR がイベントに関する招待／情報を送信 |  | No |
| Sales Nominated | Sales がレコードを指定し、Marketing が送信するトリガーイベントメールを受け取る |  | No |
| Marketing Invited | Marketing の地域ターゲットメール |  | No |
| Registered | オンラインフォームを通じて登録 |  | No（特別条件については MOps に確認） |
| No Show | 登録したが、ライブウェブキャストに参加しなかった |  | Yes |
| Attended | ライブウェブキャストに参加 | Yes | Yes |
| Follow Up Requested | イベント後に Sales によるフォローアップを要求 | Yes | Yes |
| Attended On-demand | 録画されたウェブキャストを視聴 | Yes | Yes |

#### Workshop

参加者が GitLab 内での実際のユースケースのアジェンダに沿ってガイドされる、対面またはバーチャルのワークショップ。

ロジスティクスのセットアップと詳細については、[こちら](/handbook/marketing/field-marketing/field-marketing-owned-virtual-events/#virtual-workshops-1)を参照してください。
**Bizible:** これは _オフライン_ の Bizible チャネルとして追跡されます。オフラインチャネルのタッチポイントは、AMM（旧 Bizible）の Campaign 同期ルールによって作成されます。これは[このスプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)で確認できます。

プログラムタイプは、`dietary restriction`（食事制限）関連のフィールドをクリアするスマートキャンペーンに含まれています。イベントのプログラムステータスが記録されてから 7 日後に、フィールドは自動的にクリアされます。

| Member Status | 定義 | Success | Valid for list upload |
| ------------- | ---------- | ------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  | No |
| Sales Invited | Sales/SDR がイベントに関する招待／情報を送信 |  | No |
| Sales Nominated | Sales がレコードを指定し、Marketing が送信するトリガーイベントメールを受け取る |  | No |
| Marketing Invited | Marketing の地域ターゲットメール |  | No |
| Waitlisted | 登録が満員の場合の保留状態。空きが出れば Registered に移動 |  | No |
| Registered | セッションに登録または参加を表明 |  | No（特別条件については MOps に確認） |
| Cancelled | 登録したが、イベント前にキャンセル |  | No |
| No Show | 登録したが、イベントに参加しなかった |  | Yes |
| Attended | ワークショップのイベントに参加 | Yes | Yes |
| Follow Up Requested | イベント後に GitLab に関する追加詳細の送付を要求 | Yes | Yes |

## SFDC Campaign の手順

SFDC キャンペーンには、一般的な必須フィールドのセットがあります。このセクションでは、それらのフィールドと、いつ入力する必要があるかを説明します。この手順は、Marketo から Campaign を同期した後（または Content Syndication/LinkedIn キャンペーンを設定する際）に実施します。必須フィールドへの変更が一元的に管理され、手順が古くならないように、手順はこのセクションに含めています。

### SFDC フィールドの更新

- Salesforce.com にアクセスし、[All Campaigns by create date](https://gitlab.lightning.force.com/lightning/o/Campaign/list?filterName=00B4M000004oVF9) ビューを確認します。作成日でソートすると、あなたの Campaign が一番上に表示されるはずです。検索ボックスで Campaign タグを検索することもできます。Campaign を選択します。
  - イベントを Accelevents で管理している場合は、SFDC Campaign の名前を更新する必要があります。このステップは Accelevents で管理されるイベントにのみ適用されます。他のすべての Campaign タイプは正しい命名フォーマットになっているためです。Campaign 名の横にある「Edit campaign name」アイコンをクリックし、命名規則を反映するように名前を更新します: YYYYMMDD_OwnedEventName_RegionOrCity。Marketo では名前を変更せず、SFDC でのみ変更してください。
  - `Campaign owner` を自分の名前に変更します
  - `Active` ボックスがチェックされていることを確認します
  - ステータスは、[このセクションのチャート](/handbook/marketing/marketing-operations/campaigns-and-programs/#important-notes)に従って更新する必要があります。通常は「In Progress」を使用します
  - 開始日と終了日が正しく入力されていることを確認します（これは自動化されています）。
  - `in-person` か `virtual` かのタイプに基づいて `Is this an in person event` ドロップダウンを更新します
  - `Budget Holder` を更新します - `Budget Holder` フィールドは **以下の場合にのみ** 更新すべき点に留意してください:
    - Campaign タイプに基づいて Campaign がオフラインの Bizible タッチポイントをもたらす場合（例: content syndication、sponsored webcast など） - **注意:** オフラインの Bizible タッチポイントは、リードをオフラインで収集した場合に発生し、システムがこの名前を持つためには[リストアップロードプロセス](/handbook/marketing/marketing-operations/list-import/)を通す必要があります
  - `Is a Channel Partner involved?` を更新します - 「No」の場合は空白のままで構いません
    - Yes の場合は `Channel Partner Name` を追加します
  - `Is an Alliance Partner involved?` を更新します - 「No」の場合は空白のままで構いません
    - Yes の場合は `Alliance Partner Name` を追加します
  - `Will there be MDF Funding` を更新します - 「No」の場合は空白のままで構いません
    - Yes の場合は、このフィールドで `MDF Request` をルックアップします: [詳細な手順](/handbook/marketing/channel-marketing/mdf-operations-process/#step-3-add-mdf-request-on-the-salesforce-campaign)
  - 該当する場合は `Integrated Campaign` を更新します
  - 該当する場合は `GTM Motion` を更新します
  - `Sales Dev Invite Support` がある場合 - このボックスをチェックします。それ以外の場合は空白のままにします
  - `Sales Dev Onsite Support` がある場合 - このボックスをチェックします。それ以外の場合は空白のままにします
  - hyperscaler が関与する場合は `Is Hyperscaler involved?` を Yes に更新します。
    - Yes の場合は、Campaign 名の日付の後に hyperscaler パートナー名を追加します。Executive Roundtable を使用する例: YYYYMMDD_HyperscalerPartner_ExecutiveRoundtable_Topic_Region_EventType。詳細は[こちら](/handbook/marketing/marketing-operations/campaigns-and-programs/#partner-campaign-setup)を参照してください
    - Yes の場合は、`Hyperscaler` フィールドに hyperscaler パートナー名を入力します
    - Yes の場合は、`Will there be Hyperscaler Funding?` を使用して Hyperscaler Funding のタイプを選択します。オプションは `MDF` または `Credits` です
      - その後、`Hyperscaler Fund Requested Amount` を更新します
  - イベントの epic を更新します
  - 説明を更新します（ある場合）
  - わかっている場合は `Form submission page` を入力します。それ以外の場合は、ランディングページが作成された後に追加する必要があります（該当する場合）
  - `Budgeted Cost` を更新します - コストが $0 の場合は `Budgeted Cost` フィールドに `1` をリストします。- 注意: ROI 計算のためにここには少なくとも 1 の値が必要です。そうしないと、pipeline を `0` で割ると、pipe2spend の計算で常に `0` が得られます。
  - これらがローカルまたは特定の地域をターゲットとしている場合は、`Region` と `Sub-region` を更新します
  - Corporate Events または Field Marketing が実行するすべての SFDC Campaign タイプについては、Campaign レベルで `High Priority` チェックボックスをチェックしてください。
    - これを追加することにつながった business development チームと実施した[パイロット](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/6905)の詳細！

    **または:**

    - Campaign で GitLab Dollars が支出された場合（Field、Digital、Corporate、Community など） - 予算を利用しない Campaign がある場合は空白のままで構いません。- **注意:** budget holder を更新しても、タッチポイントを二重カウントするリスクは **ない** ものの、このフィールドは常に入力されているわけではないため、各チームのパフォーマンス測定には使用すべきではない点に留意してください。
- 「Save」をクリックします
- Marketo プログラムのリンクと SFDC キャンペーンのリンクを epic に追加します。

#### Allocadia を利用する場合の SFDC キャンペーン作成手順

Allocadia > Marketo > SFDC のインテグレーションを使用すると、Allocadia で提供した情報が SFDC キャンペーンにプッシュされます。

**注意:** Allocadia コネクタが同期を完了するまで、SFDC キャンペーンを編集してはいけません。これは通常ほぼリアルタイムで行われますが、データがすぐにプッシュされない場合は、数分から数時間かかることがある点に注意してください。Allocadia コネクタが作業を完了したことは、SFDC キャンペーンのオーナーが Marketo Integration から Campaign を実行している人の名前に変わったとき、および Allocadia から SFDC にすべての詳細が入力されたときにわかります。コネクタがデータをプッシュする前に Campaign を編集すると、ビルドが壊れ、リストされたすべてのフィールドを手動で編集する必要が生じます。Allocadia の追加詳細は[こちら](/handbook/enterprise-data/marketing-analytics/allocadia/#salesforcecom-sfdc)を参照してください。

- Salesforce.com にアクセスし、[All Campaigns by create date](https://gitlab.my.salesforce.com/701?fcf=00B4M000004oVF9) ビューを確認します。作成日でソートすると、あなたの Campaign が一番上に表示されるはずです。検索ボックスで Campaign タグを検索することもできます。Campaign を選択します。
- 開始日と終了日が正しく入力されていることを確認します（これは自動化されています）
- `Budgeted Cost` を追加します
  - SFDC の `Budgeted Cost` は、Allocadia の `forecast` 数値ではなく `plan` 数値から取得されます。Allocadia に plan 数値がない場合、SFDC の `Budgeted Cost` は空白のままになります。Allocadia に plan 金額がある場合、その金額は夜間同期で SFDC に取り込まれます。
  - 施策のコストが $0 の場合（例: バーチャルワークショップ）は、`Budgeted Cost` フィールドに `1` をリストします。ROI 計算のためにここには少なくとも 1 の値が必要です。そうしないと、pipeline を `0` で割ると、pipe2spend の計算で常に `0` が得られます。

### Parent/Child Campaign のセットアップ

一部の施策では、単一のイニシアチブの一部として複数の Campaign が発生します。これらの例としては、スピーキングセッションや付随イベントを伴うカンファレンス、content syndication、ハイブリッドイベント（対面とバーチャルのリードを別々に追跡する）などが挙げられます。この場合、SFDC に `parent` Campaign を作成し、各 `child` Campaign が個々の施策を表すようにする必要があります。

parent Campaign を作成／編集する際に避けるべき重要な点が 2 つあります:

1. parent Campaign には Campaign メンバーを一切追加しないでください。同じアクティビティに対して重複した bizible タッチポイントが作成されるリスクを最小限にしたいためです。
1. parent Campaign を作成する際は、必ず Campaign 名の末尾に `_PARENT` を付けて名前を付けるべきです。これは、Campaign を二重に報告しないようにするためです。
1. parent Campaign は `Actual Cost in Campaign` フィールドに値を持つべきではなく、`Budgeted Cost in Campaign` フィールドには $1 を超える値を入れないでください。真の Budgeted Cost と Actual Cost は child Campaign にのみ更新し、parent Campaign には更新しないでください。parent Campaign では ROI を実行すべきではないためです。
1. Allocadia ユーザーの場合、parent Campaign にはサブカテゴリ ID を含めません。Allocadia ID を使用するのは child Campaign を作成するときだけです。Marketo には同じ parent/child の関係構造が用意されていないため、共有するすべての施策をまとめて格納するフォルダーを作成します。

#### parent SFDC Campaign の作成

- [以下の手順](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-marketo-programs-and-salesforce-campaigns)を使用して、最初の child Campaign を作成します
- 完了したら、Campaign の右上に移動して `Clone` をクリックします
- Campaign 名を編集し、末尾に _PARENT を含めます（例: 20250409_GoogleCloudNext_PARENT）
- `Active` ボックスがチェックされていることを確認します
- Allocadia Sub-Category ID を削除します
- `Budgeting Cost in Campaign` を $1 に調整します
- `Save` をクリックします

#### SFDC で child Campaign を parent Campaign に関連付ける方法

- SFDC にログインし、child Campaign を検索します
- Campaign に入ったら、`Parent Campaign` フィールドの横にある編集ボタンをクリックします
- parent Campaign 名（例: 20250409_GoogleCloudNext_PARENT）をフィールドにコピー＆ペーストするか、parent Campaign 名を入力し始めて `Save` をクリックします
- 追加の child Campaign についても同じ操作を続けます
- Campaign 階層は右側のパネルで確認できます（`View All` をクリックすると完全な階層ビューが表示されます）

#### Allocadia ID と Parent/Child Campaign

Allocadia ユーザーで、私たちの Allocadia > Marketo > SFDC 同期を使用している場合、個々の child Campaign のいずれにおいても Allocadia サブカテゴリ ID を利用しない点に注意してください。各 Campaign には、その特定の Campaign 用の独自の line item ID があり、それらはすべて parent Campaign にロールアップされます。以下に例を示します。

**AWS Summit London - PARENT (Allocadia ID なし)**

- AWS Summit Conference/Booth - 個別の Line Item ID
- AWS Summit Speaking Session - 個別の Line Item ID
- AWS Summit Executive Meetings - 個別の Line Item ID

**Parent/Child の SFDC 階層の例は[こちら](https://gitlab.lightning.force.com/one/one.app#eyJjb21wb25lbnREZWYiOiJzZmE6aGllcmFyY2h5RnVsbFZpZXciLCJhdHRyaWJ1dGVzIjp7InJlY29yZElkIjoiNzAxUEwwMDAwMFVqMGs5WUFCIiwic09iamVjdE5hbWUiOiJDYW1wYWlnbiIsInRyZWVEaXJlY3Rpb24iOiJjdXJyZW50VG9Eb3duIiwibGF5b3V0VHlwZSI6IlJFTEFURURfTElTVCIsImxheW91dE92ZXJyaWRlIjoiQ2hpbGRDYW1wYWlnbnMifSwic3RhdGUiOnt9fQ%3D%3D)で確認できます。**

#### parent Marketo プログラム（別名フォルダー）の作成

- Marketo にログインします
- 会計年度と四半期に基づいて正しいイベントタイプのフォルダーに移動します（例: FY26 - Q1 Conference）
- フォルダーを右クリックし、`New Campaign Folder` を選択します
- `Campaign Folder Name` として Campaign 名を追加します（例: 20250409_GoogleCloudNext）
- `Save` を押します
- イベントのすべての Marketo プログラムは、このメインフォルダーの下にネストできます
  - 既存の Marketo プログラムをフォルダーに移動するには、プログラムをドラッグ＆ドロップするか、プログラムを右クリックして `Move` を選択し、作成したフォルダーを指定します。

ネストされたプログラムを持つ Marketo プログラムフォルダーの例は[こちら](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/MF25757A1)で確認できます。

### 重要な注意事項

1. Marketo が Campaign を「見る」ことができるようにするには、SFDC キャンペーンで `Active` チェックボックスをチェックする必要があります。以下のプロセスに従えば自動的に行われますが、Marketo で SFDC キャンペーンが見つからない場合は、SFDC でそのボックスがチェックされていることを確認してください。さらに、このボックスがチェックされていないと、Marketo はその SFDC キャンペーンに対してリードを送信したり、Campaign メンバーのステータスを更新したりできません。
1. parent Campaign を作成する場合は、Campaign 名の末尾に `_Parent` を追加することで、それが parent であるという事実を parent Campaign の Campaign 名が反映していることを確認してください。万が一、responded の Campaign メンバーを格納するために parent Campaign が誤ってセットアップされた場合、Campaign 名の末尾に `_Parent` を追加することで、[オフライン Campaign のタッチポイント生成を制御する](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564) Campaign 同期ルールがそれを確実に認識し、parent と child の両方の Campaign に格納されている可能性のある Campaign メンバーに対して二重のタッチポイントを作成しないようにします。
1. オフラインタッチポイント生成に依存する Campaign を作成する場合は、Campaign タイプが適切に選択されていること、および Campaign 名に `test`、`DONTUSE`、`template`、`parent` のような単語が含まれていないことをダブルチェックしてください。[オフラインタッチポイントの作成を管理する Campaign 同期ルール](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)に基づき、これらの Campaign にはタッチポイントが作成されないためです。
1. SFDC には、Campaign 名の最初の 8 文字（それらが数字の場合）を取得して日付に変換することで、開始日、終了日、レポート日、会計四半期をスタンプするトリガーがあります（例: 20210505 == 5/5/2021、つまり YYYYMMDD）。したがって、数字で始まる Campaign には有効な日付が含まれている必要があり、そうでない場合はエラーを受け取ります。
1. `Aborted` 以外の Campaign ステータスは、開始日と終了日に基づいて SFDC ワークフローによって自動的に設定されます。

|ステータス|定義|いつ更新されるか？|
|------|--------|--------|
|Planned|Campaign が予定され、セットアップされているが、開始日がまだ到来していない（イベントが延期された場合に引き戻される先でもある）|Campaign 開始日より前 - 作成時|
|In Progress|Campaign が開始した |開始日|
|Aborted|Campaign が一時停止、キャンセル、中止された|Campaign が中止されたときに手動で|
|Completed|Campaign が実施され、終了した|Campaign 終了日の後|

## Marketo プログラムと Salesforce キャンペーンのセットアップ

対応する Campaign タイプの Marketo プログラムは、プログラムの構築で活用される、必要となりうるすべてのスマートキャンペーン、メールプログラム、リマインダーメール、トークンを含めて事前構築されています。

**LinkedIn Social Ads** については、[LinkedIn セクション](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-linkedin-lead-gen-form)に記載された手順に従ってください

**バーチャルイベント** については、この[ページ](/handbook/marketing/virtual-events)に追加のセットアップ詳細があります。

**Accelevents を使用したライブイベント** については、ここにある Marketo セットアップ手順に従ってください。

その他すべての Campaign タイプについては、以下のステップに従ってください。すべてのステップが必須です。

## Marketo プログラムと Salesforce キャンペーンのセットアップ手順

### ステップ 1: 以下に示す Marketo プログラムをクローンする

一部のテンプレートは `in-person`（対面）と `virtual events`（バーチャルイベント）の両方に使用されている点に注意してください。これらのテンプレートには `Hybrid template` というマークが付いています。これらのテンプレートでは、追加の Campaign 情報が名前に表示されるため、命名規則がわずかに異なります。プログラムに名前を付ける際、`EventType` は `Virtual`、`In-Person`、または `Hybrid`（イベントが対面とバーチャルの両方になる場合）のいずれかに置き換えます。

これが channel partner を含むプログラムのセットアップである場合は、その[セットアップページ](/handbook/marketing/channel-marketing/#joint-gitlab-and-partner-campaigns)の指示にも従う必要があります。開始するには、引き続き以下のリストからプログラムをクローンします。

#### Marketo プログラムをクローンする方法

- 以下の施策に適したテンプレートをクリックします（続行するには Marketo にログインしている必要があります）
- Marketo でテンプレートを右クリックし、`Clone` を選択します
- `Clone To` フィールドで `A campaign folder` を選択します
- `Name` フィールドに Campaign 名を入力します（これは以前 Allocadia で作成した Campaign 名であるべきです - 例: 20220704_BestEventEver） - 日付は Campaign の開始日であるべきです。
- `Folder` フィールドで、Campaign タイプに基づいて適切なフォルダーを選択します。ほとんどのフォルダーは会計年度と四半期でも整理されています。
- `Description` フィールドに epic の URL を貼り付けます
- `Create` をクリックします

#### パートナー Campaign のセットアップ

現在、Channel MDF キャンペーン、Joint GitLab/Partner キャンペーン、Hyperscaler キャンペーン、Hyperscaler Funded キャンペーンなど、いくつかのタイプのパートナー Campaign があります。

##### Channel MDF Campaign

Channel MDF は、Channel Marketing チームが管理する、パートナーが開始した Campaign の 50% を GitLab がカバーする場合です。生成されたすべてのリードは Channel Partner に帰属し、Partner Queue のオーナーシップの下にあります。Channel MDF には専用の Marketo テンプレートがあります。Campaign のセットアップ手順については[このページ](/handbook/marketing/channel-marketing/mdf-operations-process/)を参照してください。

#### Joint GitLab/Partner Campaign

Joint GitLab/Partner キャンペーンは、GitLab Field Marketing チームがマーケティング Campaign を全額出資し、管理する場合です。パートナーがソースとなったリードは channel partner にルーティングされますが、BDR/SDR が積極的にリードに取り組んでいる場合は GitLab のオーナーシップにとどまります。パートナーがリードを受け取ったものの、30 日以内に正式に受諾しない（share status を更新しない）場合、私たちのシステムは自動的にそのリードをリコールし、「Recycled」とマークして、GitLab のナーチャープログラムに戻します。以下の各 Campaign タイプの Campaign セットアップ手順に従ってください。Joint/Partner キャンペーンの詳細については[こちら](/handbook/marketing/channel-marketing/#joint-gitlab-and-partner-campaigns)を参照してください - これらのステップが完了していることを確認してください。

##### Hyperscaler Campaign

Hyperscaler キャンペーンは、私たちの Hyperscaler アライアンスとのパートナーシップで実施される戦略的マーケティングイニシアチブです。これらのマーケティングアクティビティには、Executive Roundtable、Vendor-Arranged Meetings、Conference、Owned イベントなどが含まれます。

Campaign のセットアップには、以下の [Hybrid](/handbook/marketing/marketing-operations/campaigns-and-programs/#hybrid-marketo-templates) と [Other Tactic](/handbook/marketing/marketing-operations/campaigns-and-programs/#other-tactic-marketo-templates) セクションで利用できる Marketo テンプレートを利用します。

Executive Roundtable を使用する例: `YYYYMMDD_HyperscalerPartner_ExecutiveRoundtable_Topic_Region_EventType`

- 資金なしで Hyperscaler キャンペーンを管理する場合:
  - 日付の後に Hyperscaler Partner 名を追加します: `YYYYMMDD_AWS_ExecutiveRoundtable_Topic_Region_EventType`。
- Hyperscaler Partner からの MDF を伴う Hyperscaler キャンペーンを管理する場合:
  - 日付の後に Hyperscaler Partner 名と "MDF" を追加します: `YYYYMMDD_AWS _MDF_ExecutiveRoundtable_Topic_Region_EventType`。
- Hyperscaler Partner からの Credits を伴う Hyperscaler キャンペーンを管理する場合:
  - 日付の後に Hyperscaler Partner 名と Credits を表す "CR" を追加します: `YYYYMMDD_GCP _CR_ExecutiveRoundtable_Topic_Region_EventType`。

Content Syndication チーム向けの特別な手順: Content Syndication フォルダーの Marketo トークンの Asset Name を更新し、Hyperscaler Name を含めます

Hyperscaler が出資する Hyperscaler キャンペーンは、Marketo の Hyperscaler Funded Campaign フォルダーに追加してください。

**重要なリードオーナーシップに関する注意:** Hyperscaler キャンペーンを通じて生成されたすべてのリードは、GitLab の排他的なオーナーシップの下にとどまります。これらのコンタクトは私たちの標準ナーチャリングプロセスに入り、エンゲージメント指標に応じてリードスコアを蓄積していきます。MQL ステータスに達すると、パーソナライズされたフォローアップのために自動的に適切な BDR/SDR チームに割り当てられます。

##### Hybrid Marketo テンプレート

- Executive Roundtables - `Hybrid template`: [YYYYMMDD_ExecutiveRoundtable_Topic_Region_EventType_template](https://app-ab13.marketo.com/#ME6028A1)
- Speaking Session - `Hybrid template`: [YYYYMMDD_SpeakingSession_EventType_Template](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME5092A1)
- Vendor Arranged Meetings (1:1 meetings) - `Hybrid template`: [YYYYMMDD_ArrangedMeetingsVendorName_Region_EventType_template](https://app-ab13.marketo.com/#PG5698A1)
- GitLab Hosted Workshops - `Hybrid template`:
[バーチャルワークショップについては、virtual workshop set-up セクションの指示に従ってください。](/handbook/marketing/field-marketing/field-marketing-owned-virtual-events/#virtual-workshop-logistical-set-up) 対面ワークショップは同様のセットアップを利用しますが、Zoom 要件は含みません。以下にリストされていないワークショップをセットアップする場合でも、これらのテンプレートのいずれかをバックエンドのセットアップに利用し、その後[コピードキュメント](https://docs.google.com/document/d/1j43mf7Lsq2AXoNwiygGAr_laiFzmokNCfMHi7KNLjuA/edit#heading=h.tl82wncgutxu)を使用して、必要なすべてのコピー調整を示すことができます（セットアッププロセス中にベースラインの Marketo トークンも更新します）。
  - Project Management: [YYYYMMDD_Workshop_ProjectManagement_EventType](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/ME6536A1)
  - Security: [YYYYMMDD_Workshop_SecurityWorkshop_EventType](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/ME6521A1)
  - CI Workshop: [YYYYMMDD_Workshop_CI_EventType](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/ME6807A1)
  - GitLab Duo Agent Platform Workshop: [YYYYMMDD_Workshop_DuoAgent_EventType](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/ME16197A1)
  - GitHub GitLab Migration: [YYYYMMDD_Workshop_GitHubGitLab_EventType](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/ME13738A1)
  - GitLab Basics: [YYYYMMDD_Workshop_GitLabBasics_EventType](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/ME17530A1)
  - GitLab Platform Engineering Workshop: [YYYYMMDD_Workshop_PlatformEngineering_EventType](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/ME22364A1)

##### Other Tactic Marketo テンプレート

- Conference - `Virtual`: [YYYYMMDD_YYYYMMDD_Vendor_VirtualConfName1 (Virtual Conference Template)](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME7624A1)
- Conference - `In person`: [特定のセットアップ詳細はこちらにスキップ](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-in-person-conferences)
- Conference - Meetings (FM led) `In person`: [特定のセットアップ詳細はこちらにスキップ](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-in-person-conference-meetings)
- Content Syndicaton: [特定のセットアップ詳細はこちらにスキップ](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-content-syndication-in-marketo-and-sfdc)
  - 注意: hyperscaler キャンペーンを管理している場合は、Content Syndication フォルダーの Marketo トークンの Asset Name を更新し、Hyperscaler Name を含めます。
- Direct Mail: [FY00_Q0_Brilliant Gifts Direct Mail TEMPLATE](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/PG24060A1)
- Gated Content: [YYYY_Type_Content_Template](https://app-ab13.marketo.com/#PG5111A1)
- Integrated Campaign: [FY20IntegratedCampaign_Template](https://app-ab13.marketo.com/#PG4924A1)
- Surveys - サーベイのテンプレートとセットアップ手順については、[こちら](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-surveys-in-marketo-and-sfdc)の特定のセットアップ詳細にスキップしてください。
- Owned Event - `Hybrid`: [YYYYMMDD_OwnedEvent_EventType_Template](https://app-ab13.marketo.com/#ME4722A1)

##### Webcast Marketo テンプレート

- Zoom GitLab Hosted Webcast: [YYYYMMDD_WebcastTopic_Region](https://app-ab13.marketo.com/#ME5512A1)
- Sponsored Webcast: [YYYYMMDD_ExternalWebcastVendorName_Topic_Region](https://app-ab13.marketo.com/#PG5523A1)

### ステップ 2: Salesforce への同期

- Marketo のプログラムメイン画面で、`Salesforce Sync` が "not set" となっている箇所の "not set" をクリックします
  - 「Create New」をクリックします。プログラムが自動的に Campaign タグを入力するため、何も編集する必要はありません。
  - Allocadia のユーザーの場合は、`Description` フィールドに Allocadia サブカテゴリ ID を追加する必要があります。
  - 「Save」をクリックします

### ステップ 3: Marketo トークンの更新

- 各トークンの情報を入力します。各トークンに何を入力するかの手順はテンプレートに含まれています。
  - 「Interesting Moments」スマートキャンペーンがトークンに基づいて情報を Salesforce にプッシュするため、すべてのトークンを入力することが重要です。Campaign によっては、一部の自動応答メールやメールもトークンに依存します。
  - `Event Location` のトークンは、`In-Person` イベントでは `City` を、`virtual events` では `Virtually` を入力する必要がある点に注意してください。
  - セットアップ時に以下のトークンを更新する必要はありません:
    - `{{my.email header image url}}` - これはオプションです。カスタム画像を作成した場合に必要です。
    - `{{my.ondemandurl}}` - これはイベント日の後に入力します。録画されたウェブキャストへのリンクです。イベント後に戻ってきて、このトークンを更新する必要があります。
- [こちら](/handbook/marketing/utm-strategy/#the-new-utm_campaign-structure)に概説されているプロセスに従って、utm_campaign フィールドを更新します。
- プログラムが Action Streams の対象となる場合（現在は Security のみで利用可能）は、[こちら](/handbook/marketing/lifecycle-marketing/email-processes-requests/#action-streams)の関連タイプで {{my.Action Stream}} トークンを更新してください。[動画による手順](https://drive.google.com/file/d/1hBuYcScoJGVo8VUhKbiwToSE1g4Kr8Tl/view?usp=sharing) - 手順はカンファレンスでは異なり、以下のカンファレンス手順に概説されている点に注意してください。

### ステップ 4: Marketo スマートキャンペーンの活性化

- プログラムの Action Stream タグ付け: 以下は、Content Syndication と LinkedIn Lead Gen フォームを除くすべての Campaign タイプに関連します。これらは異なる方法で処理されます。ウェブキャスト、ワークショップ、イベント、Gated Content については、リードを Action Streams に適切にルーティングするために以下の手順に従ってください。
  - [関連するストリームタイプ](/handbook/marketing/lifecycle-marketing/email-processes-requests/#action-streams)を {{my.Action Stream}} トークンに追加します
  - `Processing` フローで、右側のパネルから「Execute Campaign」を選択し、フローにドラッグします。これは、「Remove from Flow」ステップの前、フローの下部付近に配置すべきです。
  - `Execute Campaign` フローステップを完了します: Executed Campaign: *Air Traffic Control Automation.Action Stream tagging (programs)、Use Parent Campaign Token Context: True  
- これが `Gated Content` Campaign の場合は、[content in campaigns ページ](/handbook/marketing/demand-generation/campaigns/content-in-campaigns/#steps-gated-landing-pages)の詳細なセットアップ手順に従ってください。
- これが `Vendor Arranged Meeting` の場合:
  - `Smart Campaigns` フォルダーをクリックします
  - `01 Interesting Moments` スマートキャンペーンを選択します
    - クローン時に正しいプログラムが自動的に適用されるはずなので、_ここで何もする必要はありません。_ ただし、Campaign を確認できます
- これが `Speaking Session` の場合は、以下の活性化手順に従ってください:
  - `Smart Campaigns` フォルダーをクリックします
  - `01a Registration Flow` スマートキャンペーンを選択します
    - クローン時に正しいプログラムが自動的に適用されるはずなので、_ここで何もする必要はありません。_ ただし、Campaign タグが Smart List と Flow に表示されることを確認できます。テンプレートの名前がどこかに表示される場合は、Campaign タグに置き換えてください。
  - `Schedule` タブをクリックし、`Activate` をクリックします
  - `04 Interesting Moments` スマートキャンペーンを選択します
    - クローン時に正しいプログラムが自動的に適用されるはずなので、_ここで何もする必要はありません。_ ただし、Campaign タグが Smart List と Flow に表示されることを確認できます。テンプレートの名前がどこかに表示される場合は、Campaign タグに置き換えてください。
  - `Schedule` タブをクリックし、`Activate` をクリックします
  - （アクション不要）登録者／参加者をインポートするためにリストが使用される場合、リストがアップロードされた後に `03 - Processing - No Shows / Attendees` スマートキャンペーンが実行されます。
  - `Speaking Session` については、`02-Interesting Moments` スマートキャンペーンも選択し、`Schedule` タブをクリックして `Activate` をクリックします
- これが `Executive Roundtable` の場合
  - `Campaigns` フォルダーをクリックします
  - `Interesting Moments` をクリックし、`Schedule` タブをクリックして `Activate` をクリックします
  - このイベント用に Marketo ランディングページを作成している場合は、`01 Registration Flow` をクリックし、`Schedule` タブをクリックして `Activate` をクリックします。リストアップロードを行っている場合、このステップは不要です。
- これが `Workshop` の場合は、以下の活性化手順に従ってください:
  - `Smart Campaigns` フォルダーをクリックします
  - `00 Interesting Moment` スマートキャンペーンを選択し、Schedule タブに移動して `Activate` を選択します
  - `01a Registration Flow` スマートキャンペーンを選択します
  - クローン時に正しいプログラムが自動的に適用されるはずなので、_ここで何もする必要はありません。_ ただし、Campaign タグが Smart List と Flow に表示されることを確認できます。テンプレートの名前がどこかに表示される場合は、Campaign タグに置き換えてください。
  - `Schedule` タブをクリックし、`Activate` をクリックします
- これが `Owned Event` の場合は、以下の活性化手順に従ってください:
  - `Campaigns` フォルダーをクリックします
  - このイベント用に Marketo 登録ページがある場合は、`01b - Registration` スマートキャンペーンを選択します
  - クローン時に正しいプログラムが自動的に適用されるはずなので、_ここで何もする必要はありません。_ ただし、Campaign タグが Smart List と Flow に表示されることを確認できます。テンプレートの名前がどこかに表示される場合は、Campaign タグに置き換えてください。
  - `Schedule` タブをクリックし、`Activate` をクリックします
  - `02a - Interesting Moments` スマートキャンペーンを選択します
  - クローン時に正しいプログラムが自動的に適用されるはずなので、_ここで何もする必要はありません。_ ただし、Campaign タグが Smart List と Flow に表示されることを確認できます。テンプレートの名前がどこかに表示される場合は、Campaign タグに置き換えてください。
  - `Schedule` タブをクリックし、`Activate` をクリックします
  - リストアップロードのみ: 登録ページがなく、回答がリストロードでアップロードされる場合、必要に応じて MOps が `02b - Manual Upload Processing` Campaign を活性化します。
- その他すべての Campaign タイプについては、以下の活性化手順に従ってください:
  - 「Smart Campaigns」フォルダーをクリックします
  - `Interesting Moments` スマートキャンペーンを選択します。
  - クローン時に正しいプログラムが自動的に適用されるはずなので、_ここで何もする必要はありません。_ ただし、Campaign タグが Smart List と Flow に表示されることを確認できます。テンプレートの名前がどこかに表示される場合は、Campaign タグに置き換えてください。
  - 「Schedule」タブをクリックし、`Activate` をクリックします。
  - `01 Processing` スマートキャンペーンを選択します。（Virtual Conference または External Webcast には適用されません）
  - クローン時に正しいプログラムが自動的に適用されるはずなので、_ここで何もする必要はありません。_ ただし、Campaign タグが Smart List と Flow に表示されることを確認できます。テンプレートの名前がどこかに表示される場合は、Campaign タグに置き換えてください。
  - 「Schedule」タブをクリックし、`Activate` をクリックします。

- `Interesting Moments` Campaign が表示されない場合は、そのステップが `01 Processing` または `Viewed on Demand` Campaign にあるかどうかを確認してください。
- 事前登録のある `Speaking Sessions` については、`Pre-Registration` フォルダーを見つけ、正しいフォームとランディングページで smart list を入力した後、`01 - Form Fill` ステップを活性化します。

### ステップ 5: ランディングページ／スマートキャンペーンの有効期限の設定（Asset Expiration）

2022 年初頭、Adobe は Marketo に `asset expiration` という新機能を導入しました。これについては Marketo のドキュメント[こちら](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/programs/working-with-programs/local-asset-expiration.html?lang=en#:~:text=Right%2Dclick%20on%20your%20desired,Choose%20an%20expiration%20date)で読むことができます。これはスマートキャンペーンとランディングページに適用されます。GitLab のユースケースでは、以下のロール権限に対してこの機能を有効にしています: `Field Marketing User`、`Marketing Program Managers`、`Marketing User`。これらの権限を持っておらず、この機能を有効にしたい場合は、`access request` を送信してください。

#### Asset Expiration のユースケース

すべてのプログラムには異なる必要性があるため、さまざまなプログラムタイプで `asset expiration` をどのように利用すべきかを判断することが重要になります。必要に応じて MktgOps からガイダンスを提供できますが、大半のケースでは以下の方法を利用してください:

- `Conference`、`Direct Mail`、`Executive Roundtable`、`Owned Event`、`Speaking Session`、`Sponsored Webcast`（オンデマンドコンポーネントがない場合）、`Survey`、`Vendor Arranged Meeting`、`Workshop`: 特定の日付の後に完全に終了し、時間の経過とともに `Attended On-Demand` メンバーステータスを使用しない一回限りのプログラムについては、アセットの有効期限をイベントの 4 週間後の終日、つまり 23:55 PST に設定します。例えば、`conference` または `executive roundtable` プログラムタイプが 4 月 3 日に発生する場合、アセットの有効期限を 5 月 1 日の終日にスケジュールします。
- `Content syndication` または Campaign の終了を特定するのが難しい Campaign: 考慮すべき 2 つの異なるオプションがあります:
  - **推定 Campaign 終了の 12 週間後** に有効期限を設定し、これも終日とします。これは、サードパーティが私たちに代わってリード収集を行い、私たちがリードリストを手動でアップロードしている Campaign に役立ちます。これはまた、SLA が予定どおりに満たされず、Campaign が予想よりも長く実行される場合のバッファも提供します。
  - **asset expiration をまったく使用しない**。content syndication 中心のプログラムは無期限に続くことが多いため、この場合は有効期限を利用するのは理にかなっていません。アセットは将来的に廃止できます。
- `Gated Content`: これらは長期間使用され続けるため、asset expiration の使用は推奨されません。
- `Webcast`: これらは通常オンデマンドコンポーネントを持つため、asset expiration の使用は推奨されません。

#### プログラムへの Asset Expiration の設定

- Marketo プログラムを右クリックしてプログラムメニューを開き、`Set local asset expiration` を選択します。これは正しい権限がないと機能しない点に注意してください。
- 有効期限を設定できるすべてのアセットがセグメント化されたリストとして表示されます。表示されうるアセットの例は、`landing pages`、`active trigger campaigns`、`Reocurring batch campaigns` です。
- アセットのチェックボックスを使用して、有効期限を設定したいすべてのアセットを選択し、準備ができたら `set expiration` を選択します。有効期限を設定すべきアセットは、`landing pages`、`active trigger campaigns`、`Reocurring batch campaigns` です。日付と時刻を設定して送信します。
  - `smart campaigns` への有効期限設定を優先します。
  - そのようなイベントはプログラムの `registation` および `on-demand` フローを無効にするため、どのスマートキャンペーンがいつ期限切れになるように設定されているかに注意してください。
- 後で有効期限を削除するには、プログラムを右クリックして対象アセットに戻り、変更を送信します。

### ステップ 6 オプションのセルフサービスキャンセルのセットアップ

*このオプションは特定のプログラムテンプレート（Owned Event テンプレートと Executive Roundtable テンプレート）でのみ利用可能です。Workshop テンプレートは後日追加される可能性があります。_ 誰かがキャンセルフォームに記入すると、プログラム内のステータスが cancelled に更新され、トークンにリストされたイベントオーナーにアラートが送信されます。別のメールアドレスを使用してキャンセルした場合、その人は cancelled として Campaign に追加され、イベントオーナーは元の登録を cancelled に更新する必要があります。

- セルフサービスキャンセルは、Field Marketing の Owned Event および Executive Roundtable プログラムには常に利用すべきです。
- 前述のテンプレートには、`Self Service Cancellation Assets` フォルダー内に 2 つのランディングページと 2 つのメールテンプレートが含まれています。受信者が予約をキャンセルするためのセルフサービスオプションを提供するには、これらのランディングページとメールテンプレートを更新する必要があります。
- `Cancel Page` ランディングページの URL を取得し、`my.cancellation page` というトークンに配置します。**これを行わないと、登録確認メールに含まれるリンクが壊れます**。
- `01 Cancellation Flow` スマートキャンペーンを活性化します
- `Send Alert` ステップでは、キャンセルアラートを受け取る GitLab の優先内部メールアドレスを決定します。このフローステップのアラートは、ステークホルダーにキャンセルを通知します。1 つのメールのみに通知すべき場合は、プログラムトークンの {{my.event owner email address}} トークンに適切なメールを入力します。複数のメールに通知すべき場合は、前述のとおりトークンを変更し、その後 `3 - Send Alert` フローステップ内で、トークンの後の `To Other Emails` フィールドに追加の各メールを、各メールをカンマで区切って追加します
- すべてのライブキャンセルアセットについて、イベント終了の 2〜3 日後に asset expiration を活性化します

### ステップ 7: Salesforce キャンペーンの更新

[上記](/handbook/marketing/marketing-operations/campaigns-and-programs/#step-5-update-the-salesforce-campaign)の手順を参照してください。

### ステップ 8: Salesforce キャンペーンの更新 - Allocadia を使用する場合

[上記](/handbook/marketing/marketing-operations/campaigns-and-programs/#instructions-for-sfdc-campaign-creation-when-utilizing-allocadia)の手順を参照してください。

#### SFDC キャンペーンのセットアップのトレーニング動画 - Allocadia を使用する場合

- [説明動画](https://youtu.be/1681EBw5344)
- [同期結果動画](https://youtu.be/PocOPnJY4w0)

### Waitlist 処理 - Owned Event、Workshop、Webcast

イベントを登録から waitlist に変更する必要がある場合、または waitlist から開始したい場合は、これらの手順を使用してください。

- 使用したいメールコピーが `Confirm - Waitlist` メールにセットアップされていることを確認します。このメールはトークンを使用しており、設定されているはずですが、必要に応じてカスタマイズできます。
- トークンセクションで `{{my.event owner email address}}` が入力されていることを確認します。Waitlist プログラムはこのメールアドレスにアラートを送信するため、このトークンに基づいて、誰かが待機リストに追加されるたびに通知を受け取れます。
- `01b Registration` スマートキャンペーンを無効化します
- `01a Waitlist` スマートキャンペーンを活性化します
- `01c Waitlist to Registered` スマートキャンペーンを活性化します
- イベントで受け入れられない登録者に通知を送信したい場合は、`01d Waitlist to Declined` スマートキャンペーンを活性化します。通知が不要な場合でも、`Declined` ステータスを使用でき、通知は送信されません。このオプションを使用するにはメールコピーを提供する必要があります。
これで待機リスト処理が活性化されました。Registration を再度有効化する必要がある場合は、Waitlist キャンペーンを無効化し、`01b Registration` を再活性化します。

### Waitlist からの移動 - Owned Event、Workshop、Webcast

待機リストから Registered または Declined に人を移動するには、これらの手順を使用してください。

Waitlist > Registered

- Marketo プログラム（Campaign の名前）をクリックします
- `Members` をクリックします
- フィルターを `Waitlisted` に変更します
- Registered に移動したい人をクリックします。選択されるとハイライトされます。
- `Change Status` をクリックします
- `Registered` を選択します

`Registered` をクリックすると、ステータスが変更され、`01c Waitlist to Registered` スマートキャンペーンが登録確認メールを送信します。

Waitlist > Declined

- Marketo プログラム（Campaign の名前）をクリックします
- `Members` をクリックします
- フィルターを `Waitlisted` に変更します
- Registered に移動したい人をクリックします。選択されるとハイライトされます。
- `Change Status` をクリックします
- `Declined` を選択します

`Declined` をクリックすると、ステータスが変更され、活性化されている場合は `01d Waitlist to Declined` スマートキャンペーンが通知メールを送信します。通知を送信したい場合はメールコピーを提供する必要がある点に注意してください。

### Waitlisted メンバーのイベント後処理 - Owned Event、Workshop、Webcast

waitlist 機能を有効にしたイベントで定員に達した状況では、これらのステップに従って waitlisted リードを処理します。No Show + Attended リードを処理した後、Waitlisted リードを処理する必要があります。これらは技術的には `Attended` でも `No Show` でもないためです。ここで重要なのは、彼らが No Show や Attended のフォローアップメールを受け取らないようにすることです。メールが送信されず、interesting moments と behavior score が更新されるように、これらのステップに従ってください。

- Marketo プログラム（Campaign の名前）をクリックします
- `Campaigns Folder` に移動します
- `01c Waitlist to Registered` Campaign に移動します。
- 「Schedule」に移動し、`Deactivate` をクリックします
- `01d Waitlist to Declined` Campaign に移動します。
- 「Schedule」に移動し、`Deactivate` をクリックします。これは Campaign が現在活性化されている場合にのみ行ってください。ボタンが `Activate` と表示されている場合は、ここで何もしないでください。
- イベントの `Member list` に戻ります。
- ステータスを `waitlisted` でフィルタリングするか、Registered に移動したい人をクリックします。選択されるとハイライトされます。
- `Change Status` をクリックします
- `Registered` を選択します
`Registered` をクリックすると、ステータスが変更され、`Interesting Moments` と `behavior score` が更新され、登録確認メールは送信され **ません**。これが完了し、registered ステータスに移動された後も、registered ステータスに基づいてフォローアップメールを送信できます。no show、attended、registered（すべて別々のコピー）のメール案件を完了する必要があります。

### 複数日イベントのコントローラー Marketo プログラムのセットアップ

これは、含まれるすべての日で同じフォームとランディングページを使用しながら、複数日にわたってイベントを実行したい人向けのオプション機能です。ただし、各日には独自の Marketo プログラム／SFDC キャンペーンがあります。この合理化されたワークフローは現在 2 つのテンプレートにのみ存在しますが、両方のテンプレートで同様に機能します: [YYYYMMDD_EventName_Webcast_On24_template](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME12620A1) と [YYYYMMDD_WebcastTopic_Region](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME5512A1)。需要があれば、他のプログラムテンプレートに対しても Issue を介してこれをリクエストできます。

- まず、イベントに必要な日数を決定します。イベントに 3 日とは異なる日数が必要な場合は、以下の指示に従って可能な限りセットアップを完了し、その後現在の Issue で MktgOps に ping を送り、セットアップを完了できるようにします。ここでの意図は、各プログラムに個別のフォームではなく、トークン化されたグローバルフォームの使用を可能にすることです。フォームは `FORM 1419: Webcast_MultipleTimeSlots` です。イベントに異なる日数が必要な場合、MktgOps は `1419` をクローンし、ドロップダウンで割り当てられた日数を変更する必要があります
- 複数日イベントに必要な日数分、必要なプログラムテンプレートをクローンし、さらにもう 1 つクローンして、その追加プログラムを `controller` プログラムとして、child プログラムを何となく示唆する名前で名付けます。可能であれば、すべてのプログラムを互いに近くに、同じ Q1/2/3 または Q4 フォルダー内に保管します。MktgOps による仕上げが必要な場合は、対象のプログラムを必ず Issue にリストしてください
- `controller` プログラムで、Marketo ランディングページに `FORM 1419: Webcast_MultipleTimeSlots` を追加します。`FORM 1419` は、これらのローカルプログラムトークンでトークン化されています: `Date 1`、`Date 2`、`Date 3`、`Date 1 Option`、`Date 2 Option`、`Date 3 Option`。`Date` トークンには、ランディングページのドロップダウンメニューに表示されるべきとおりに、時刻、日付、タイムゾーンを **正確に** 入力します。ドロップダウンはユーザーが選択するためにランディングページに表示されるため、フォーマットが重要です。`Option` トークンには、個々の複数日イベントに関連するキーワードを入力します。例: `Day 1 = Aug 23 7:00`、`Day 2 = Sept 1 5:00` の場合、`Day 1 Option = August`、`Day 2 Option = September`。`Option` トークンは処理スマートキャンペーンの一部の `contains` ロジックの一部であるため、重複する情報を持つことはできません
- それに関連して、引き続き `controller` プログラムで、スマートキャンペーン `01 Registration Flow (Multi-timeslot)` に進みます。このセットアップの残りは、通常のプログラムセットアップと同様に続きます。`Flow` をクリックし、`step 3` までスクロールダウンします。`Option 1`、`Option 2`、`Option 3` を `Date 1/2/3 Option` トークンのキーワードに一致するように変更します。これにより、リードが安全保管のために静的リストに追加されます。また、エラーの監視にも役立ちます。イベントが 2 日間のみの場合は `Option 3` を削除し、3 日を超える場合は、より多くのロジックとトークンが必要になるため、MktgOps が日数の追加を処理します
- `Flow Step 4` でも、`Option 1/2/3` をトークンのキーワードに一致するように変更します。`Requested Campaign` フィールドで、`child` プログラムの `registration` スマートキャンペーンを見つけ、ここに接続します。ここで正しいスマートキャンペーンを選択するよう注意してください。それらの名前は child Campaign の名前で始まりますが、すべて `01a Registration Flow - Form fill` という同じまたは類似のスマートキャンペーン名を持ちます
  - 注意: child プログラムの registration 処理スマートキャンペーンは、`controller` プログラムの `Multi-timeslot` スマートキャンペーンで `request campaign` オプションとして表示されるために **活性化される必要があります**
- registration フローに不具合がある場合、選択したメールにアラートが設定される点に注意してください
- controller Campaign 自体には、これ以上セットアップするものはありません。`Interesting moments`、`Attended` フロー、`Follow up Requested` など、必要なすべての処理を含め、child プログラムで適切な処理スマートキャンペーンを活性化します（通常どおり）。child Campaign を sfdc に同期することを忘れないでください。ただし、`controller` プログラムは関連するプログラムステータスを持つプログラムメンバーを格納しないため、sfdc に同期する必要はありません

### Late/In-person Registration 用アセットのセットアップ

これは `Owned Event` プログラムテンプレートでのみ利用可能な _オプション_ 機能です。`owned event` に `in-person`（対面）で現れた未登録の参加者を、ランディングページフォームによる通常の登録プロセスが以前に閉じられている場合でも `register` する柔軟性をチームが求める場合に、この機能を利用します。**イベントを担当するチームは、イベントの _前_ にこの機能を使用するかどうかについて合意し、セットアップはイベント開始前に行うべきです**。これにより、ランディングページ／フォームを GitLab 所有の `tablets` や `laptops` などの `check-in` デバイスにブックマークとして手動で追加できます。

- `Assets` フォルダー内にある `Late Registration Assets` サブフォルダーを見つけます。これは `YYYYMMDD_OwnedEvent_EventType_Template` テンプレートにのみ存在します
- Marketo プログラムアセットを承認するために必要な権限を持つ人に、`Late Registration page` と `Late Thank you page` のランディングページを活性化するよう、MktgOps の Slack チャンネルでリクエストします。これらはプログラムテンプレートでデフォルトで承認 `されていません`。ランディングページに含まれる `form` など、変更が必要なものがないか事前に確認してください。
  - ランディングページを承認する前に、ランディングページの URL を短く入力しやすいものに変更することを強く推奨します。例: `https://page.gitlab.com/EventNameLateReg.html`
- `Late Registration page` の URL を取得し、`https://` を除いて {{my.late registration page}} という名前のプログラム `token` に配置します。これにより、登録の `Thank you` ページに循環パターンを持たせることができます。`Thank you` ページには、次の登録者が利用できるように `late registration page` への戻りリンクが表示されます
- フローを活性化するために `01 Late Registration` スマートキャンペーンを活性化します
- プログラムを右クリックして、**すべての** `late registration` アセットの asset expiration の日付を設定します。これらは有効のままにしておくべきではなく、イベント終了の翌日、またはこれ以上登録者が受け入れられないと推定される時点で期限切れになるように設定すべきです
- 今後のイベントに参加する適切なチームと `late registration page` の URL を共有し、ページを GitLab 所有の `tablets` や `laptops` などのチェックインデバイスに追加して、イベントフロアで簡単にアクセスできるようにします

## 対面 Conference のセットアップ手順

### ステップ 1: このプログラムをクローンする

- [このプログラムをクローンする](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME12196A1)
- フォーマット `YYYYMMDD_Hyperscaler(該当する場合)_Conference_EventType` を使用します
- Executive Meetings または Booth Demos/Meetings の設定に Jifflenow を使用している場合は、各タイプごとに Marketo プログラムと SFDC キャンペーンが必要になる点に注意してください。これらはすべて `Conference` Campaign タイプであるため、これらの手順に従って最初のものを作成し（トークンの入力を含む）、そのプログラムをクローンできます。これにより、毎回すべてのトークンを完了する必要がなくなります（軽微な変更は必要ですが、この方法のほうが速くなります）。以下に説明するように、各プログラムを SFDC に同期して SFDC キャンペーンを作成します。

### ステップ 2: Salesforce への同期

- Marketo のプログラムメイン画面で、`Salesforce Sync` が "not set" となっている箇所の "not set" をクリックします
  - 「Create New」をクリックします。プログラムが自動的に Campaign タグを入力するため、何も編集する必要はありません。
  - Allocadia のユーザーの場合は、`Description` フィールドに Allocadia ID サブカテゴリ ID を追加する必要があります。
  - 「Save」をクリックします

### ステップ 3: Marketo トークンの更新

- すべてのトークンはメールと interesting moments に供給されるため、それらを更新します
  - カンファレンスのためにミーティングが設定されていない場合、`Request` トークンを更新する必要はありません
  - 対面ミーティングをスケジュールしている場合は、`reply email` トークンを必ず更新してください。これは確認メールで使用されます。キャンセルや特別な対応のために正しいメールアドレスを追加し、件名を説明的なものに更新する必要があります。件名が正しく入力されるように、各単語の間の `%20` を保持してください。
  - プログラムが Action Streams の対象となる場合（現在は Security のみで利用可能）は、[こちら](/handbook/marketing/lifecycle-marketing/email-processes-requests/#action-streams)の関連タイプで {{my.Action Stream}} トークンを更新してください。

### ステップ 4: Marketo スマートキャンペーンの活性化

- `00 Send Sales-Driven Invite`（オプション）は、Sales と XDR がカンファレンスに人を招待する場合に、定期的に送信するようにオンにしてスケジュールできます。これはすべての Campaign で必須ではなく、Sales-Driven メールを構築した後に活性化すべきです。スケジュール後、Sales は SFDC で誰かを Campaign に追加でき、その人には自動的にメール招待が送信されます。`email` フォルダーには Sales 招待用の別のメールがリストされています
- `01 Manual upload processing` これは、手動アップロードが必要な場合に MOps によって活性化されます。セルフサービスプロセスを使用してアップロードする場合、これは不要です。
- `02 Add as Marketing Invited` は、XDR がフォローアップしてイベントへの参加を促進する予定がある場合にのみ使用すべきです。これは最初のメール招待がスケジュールされて送信された **後** にスケジュールすべきです。これにより、メール招待が送信されたすべての人が `Marketing Invited` として更新されます。彼らは Campaign で更新され、SFDC で表示されます。**計画されたイベントドライバーがない限り、これを使用しないでください**
- `03 Interesting Moments` この Campaign を活性化します。これはリストがアップロードされる前にオンにすべきです。
- `04 Action stream processing` カンファレンスが関連する [Action Stream トピック](/handbook/marketing/lifecycle-marketing/email-processes-requests/#action-streams)をカバーする場合は、Action Stream をトークンに追加したことを確認してから、この Campaign を活性化します。

### ステップ 4a. Meeting Request 処理

これらのステップはまだ設定されていません。次のイベントでこれを行う予定がある場合は、Marketing Operations チームと Issue を作成してください。

### ステップ 4b. Asset Expiration のセットアップ

- Marketo プログラムを右クリックしてプログラムメニューを開き、`Set local asset expiration` を選択します。これは正しい権限がないと機能しない点に注意してください。
- 有効期限を設定できるすべてのアセットがセグメント化されたリストとして表示されます。表示されうるアセットの例は、`landing pages`、`active trigger campaigns`、`Reocurring batch campaigns` です。
- アセットのチェックボックスを使用して、有効期限を設定したいすべてのアセットを選択し、準備ができたら `set expiration` を選択します。有効期限を設定すべきアセットは、`landing pages`、`active trigger campaigns`、`Reocurring batch campaigns` です。日付と時刻を設定して送信します。
  - `smart campaigns` への有効期限設定を優先します。
  - そのようなイベントはプログラムの registation フローを無効にするため、どのスマートキャンペーンがいつ期限切れになるように設定されているかに注意してください。
- 後で有効期限を削除するには、プログラムを右クリックして対象アセットに戻り、変更を送信します。

### ステップ 5: Salesforce キャンペーンの更新

[上記](/handbook/marketing/marketing-operations/campaigns-and-programs/#step-5-update-the-salesforce-campaign)の手順を参照してください。

- Marketo プログラムのリンクと SFDC キャンペーンのリンクを epic に追加します。
- プログラムが Digital Marketing によって実行されている場合は、parent Campaign `Demand Gen Pulishers/Sponsorships` の下に SFDC キャンペーンを追加します

Allocadia を利用する場合は、[上記](/handbook/marketing/marketing-operations/campaigns-and-programs/#instructions-for-sfdc-campaign-creation-when-utilizing-allocadia)の手順を参照してください。

## 対面 Conference Meetings のセットアップ手順

以下の手順は、大規模なカンファレンスで Field Marketing がリードするミーティング向けに設計されています。

### ステップ 1: このプログラムをクローンする

- [このプログラムをクローンする](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ME17801A1)
- フォーマット `YYYYMMDD_Hyperscaler(該当する場合)_Conference_ExecutiveMeetings` を使用します
- Executive Meetings または Booth Demos/Meetings の設定に Jifflenow を使用している場合は、各タイプごとに Marketo プログラムと SFDC キャンペーンが必要になる点に注意してください。

### ステップ 2: Salesforce への同期

- Marketo のプログラムメイン画面で、`Salesforce Sync` が "not set" となっている箇所の "not set" をクリックします
  - 「Create New」をクリックします。プログラムが自動的に Campaign タグを入力するため、何も編集する必要はありません。
  - Allocadia のユーザーの場合は、`Description` フィールドに Allocadia ID サブカテゴリ ID を追加する必要があります。
  - 「Save」をクリックします

### ステップ 3: Marketo トークンの更新

- すべてのトークンはメールと interesting moments に供給されるため、それらを更新します。epic トークンは内部アラートに含まれるため、スキップしないでください。
  - `reply email` トークンを必ず更新してください。これは確認メールで使用されます。キャンセルや特別な対応のために正しいメールアドレスを追加し、件名を説明的なものに更新する必要があります。件名が正しく入力されるように、各単語の間の `%20` を保持してください。
  - プログラムが Action Streams の対象となる場合（現在は Security のみで利用可能）は、[こちら](/handbook/marketing/lifecycle-marketing/email-processes-requests/#action-streams)の関連タイプで {{my.Action Stream}} トークンを更新してください。

### ステップ 4: Marketo スマートキャンペーンの活性化

- `00 Send Sales-Driven Invite`（オプション）は、Sales と XDR がカンファレンスに人を招待する場合に、定期的に送信するようにオンにしてスケジュールできます。これは必須ではなく、スケジュール前にメールを更新する必要があります。スケジュール後、Sales は SFDC で誰かを Campaign に追加でき、その人には自動的にメール招待が送信されます。`email` フォルダーには Sales 招待用の別のメールがリストされています
- `01 Manual upload processing` これは、手動アップロードが必要な場合に MOps によって活性化されます。セルフサービスプロセスを使用してアップロードする場合、これは不要です。
- `02 Add as Marketing Invited` は、XDR がフォローアップしてイベントへの参加を促進する予定がある場合にのみ使用すべきです。これは最初のメール招待がスケジュールされて送信された **後** にスケジュールすべきです。これにより、メール招待が送信されたすべての人が `Marketing Invited` として更新されます。彼らは Campaign で更新され、SFDC で表示されます。**計画されたイベントドライバーがない限り、これを使用しないでください**
- `03 Interesting Moments` この Campaign を活性化します。これはリストがアップロードされる前にオンにすべきです。
- `01a Meeting Request Processing` ランディングページがある場合はこの Campaign を活性化します。リードをアップロードするだけの場合は活性化しないでください。
- `04 Action stream processing` カンファレンスが関連する [Action Stream トピック](/handbook/marketing/lifecycle-marketing/email-processes-requests/#action-streams)をカバーする場合は、Action Stream をトークンに追加したことを確認してから、この Campaign を活性化します。

### ステップ 4b. Asset Expiration のセットアップ

- Marketo プログラムを右クリックしてプログラムメニューを開き、`Set local asset expiration` を選択します。これは正しい権限がないと機能しない点に注意してください。
- 有効期限を設定できるすべてのアセットがセグメント化されたリストとして表示されます。表示されうるアセットの例は、`landing pages`、`active trigger campaigns`、`Reocurring batch campaigns` です。
- アセットのチェックボックスを使用して、有効期限を設定したいすべてのアセットを選択し、準備ができたら `set expiration` を選択します。有効期限を設定すべきアセットは、`landing pages`、`active trigger campaigns`、`Reocurring batch campaigns` です。日付と時刻を設定して送信します。
  - `smart campaigns` への有効期限設定を優先します。
  - そのようなイベントはプログラムの registation フローを無効にするため、どのスマートキャンペーンがいつ期限切れになるように設定されているかに注意してください。
- 後で有効期限を削除するには、プログラムを右クリックして対象アセットに戻り、変更を送信します。

### ステップ 5: Salesforce キャンペーンの更新

[上記](/handbook/marketing/marketing-operations/campaigns-and-programs/#step-5-update-the-salesforce-campaign)の手順を参照してください。

Allocadia を利用する場合は、[上記](/handbook/marketing/marketing-operations/campaigns-and-programs/#instructions-for-sfdc-campaign-creation-when-utilizing-allocadia)の手順を参照してください。

## Marketo と SFDC での Content Syndication のセットアップ手順

Integrate DAP を通じて作業していない場合は、これらの手順を使用してください。DAP を通じた Campaign の手順については、[以下のセクション](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-content-syndication-in-marketo-and-sfdc---campaigns-through-integrate-dap)を参照してください。

### ステップ 1: このプログラムをクローンする

[このプログラムをクローンする](https://app-ab13.marketo.com/#PG5149A1)。

- Campaign が Integrate DAP を通じて実行されている場合は、このプログラムを使用しないでください。DAP については[以下](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-content-syndication-in-marketo-and-sfdc---campaigns-through-integrate-dap)の手順を参照してください。
- フォーマット `YYYY_Vendor_NameofAsset` を使用します
- content syndication が外部ベンダーとのパッケージの一部で、複数のアセットやウェブキャストをプロモーションする場合は、単一のベンダープログラムの一部としてアクセスしやすいように、すべての Marketo プログラムをフォルダーにまとめて保管します。

### ステップ 2: Salesforce への同期

- Marketo のプログラムメイン画面で、`Salesforce Sync` が "not set" となっている箇所の "not set" をクリックします
  - 「Create New」をクリックします。プログラムが自動的に Campaign タグを入力するため、何も編集する必要はありません。
  - Allocadia のユーザーの場合は、`Description` フィールドに Allocadia ID サブカテゴリ ID を追加する必要があります。
  - 「Save」をクリックします

### ステップ 3: Marketo トークンの更新

- `Content Title` を、Content Syndication プログラムに表示されるタイトルに変更します
  - 複数のアセットがある場合は、テキストトークンをメインウィンドウにドラッグして名前を付けることで（例: Content Title2）、追加のトークンを追加できます
- `Content Type` をコンテンツのタイプに変更します
  - 利用可能なオプションは `Whitepaper`、`eBook`、`Report`、`Video`、`General` のみです
  - 上記以外の Content Type 値を追加すると、これらが `Initial Source` の現在唯一利用可能なピックリスト項目であるため、Salesforce への同期時にレコードがエラーになります

### ステップ 4: Marketo スマートキャンペーンの活性化

- `02 Interesting Moments` 複数のアセットがある場合は、どのアセットがダウンロードされたかを示す異なる interesting moments を作成できます。これを行うには、Flow をクリックします。step 1（Interesting Moment）で Add Choice をクリックします。Choice 1 が表示されます。If `Last Event Notes` contains [アセット名] を選択します。次に、Type: Milestone、Description: 表示させたい Interesting Moment を入力します。これは持っているアセットの数だけ行えます。この Campaign を活性化します。これはリストがアップロードされる前にオンにすべきです。
- 「Schedule」タブをクリックし、`Activate` をクリックします。1 人がフローを 1 回だけ実行できるように設定すべきです。
  - 重要: リストアップロードを行う際は、自動化がトリガーされるように、`Last Event Notes` フィールドでまったく同じ文言を使用する必要があります。例えば、Last Events Notes フィールドに `Downloaded Guide to Software Supply Chain Security` と記載できます。Marketo では、choice で `software supply chain` を使用でき、正しい Description がトリガーされます。choice で同じ単語の文字列を使用しないでください。Interesting Moments のセットアップの例は、[プログラム](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC21549C3ZN19)のフローで確認できます。私たちのプロセスは変更されたため、残りの処理は無視してください。
- `01 Manual upload processing` - これは、必要な場合に MOps によって活性化されます。手動アップロードでのみ使用され、セルフサービスアップロードプロセスを使用する場合は不要です。
  - リードが Campaign にロードされると、リードはすぐに interesting moment、+15 score、および必要に応じて initial source、person source、person status の更新を持ちます。
- アセットが Finserv または PubSec 向けの場合、人々が現在のナーチャープログラムに入るように、SFDC キャンペーンをナーチャー処理に追加する必要があります。
  - Finserv の場合: [00d - Add to Finserv nurture](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC62869A1ZN19) と [Vertical check](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC64233B2ZN19) の Smart List を更新します
  - PubSec の場合: [Nurture - PubSec check](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC64118A1ZN19)、[00 - Add to PUBSEC](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC24342A1ZN19)、[PubSec - Action Stream check](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC64194A1ZN19) の Smart List を更新します

### ステップ 4a: Asset Expiration のセットアップ

- `Content syndication` または Campaign の終了を特定するのが難しい Campaign: 考慮すべき 2 つの異なるオプションがあります:
  - **推定 Campaign 終了の 12 週間後** に有効期限を設定し、これも終日とします。これは、サードパーティが私たちに代わってリード収集を行い、私たちがリードリストを手動でアップロードしている Campaign に役立ちます。これはまた、SLA が予定どおりに満たされず、Campaign が予想よりも長く実行される場合のバッファも提供します。
  - **asset expiration をまったく使用しない**。content syndication 中心のプログラムは無期限に続くことが多いため、この場合は有効期限を利用するのは理にかなっていません。アセットは将来的に廃止できます。

#### プログラムへの Asset Expiration の設定

- Marketo プログラムを右クリックしてプログラムメニューを開き、`Set local asset expiration` を選択します。これは正しい権限がないと機能しない点に注意してください。
- 有効期限を設定できるすべてのアセットがセグメント化されたリストとして表示されます。表示されうるアセットの例は、`landing pages`、`active trigger campaigns`、`Reocurring batch campaigns` です。
- アセットのチェックボックスを使用して、有効期限を設定したいすべてのアセットを選択し、準備ができたら `set expiration` を選択します。有効期限を設定すべきアセットは、`active trigger campaigns`、`Reocurring batch campaigns` です。日付と時刻を設定して送信します。
  - `smart campaigns` への有効期限設定を優先します。
  - そのようなイベントはプログラムの registation フローを無効にするため、どのスマートキャンペーンがいつ期限切れになるように設定されているかに注意してください。
- 後で有効期限を削除するには、プログラムを右クリックして対象アセットに戻り、変更を送信します。

### ステップ 5: Salesforce キャンペーンの更新

[上記](/handbook/marketing/marketing-operations/campaigns-and-programs/#step-5-update-the-salesforce-campaign)の手順を参照してください。

- Marketo プログラムのリンクと SFDC キャンペーンのリンクを epic に追加します。
- プログラムが Digital Marketing によって実行されている場合は、parent Campaign `Demand Gen Pulishers/Sponsorships` の下に SFDC キャンペーンを追加します

Allocadia を利用する場合は、[上記](/handbook/marketing/marketing-operations/campaigns-and-programs/#instructions-for-sfdc-campaign-creation-when-utilizing-allocadia)の手順を参照してください。

## Marketo と SFDC での Content Syndication のセットアップ手順 - Integrate DAP を通じた Campaign

content syndication プログラムが Integrate DAP を通じて実行されていない場合は、[上記](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-content-syndication-in-marketo-and-sfdc)の手順を使用してください。

これらの SFDC キャンペーンは、Region/Vendor/Asset の組み合わせごとにセットアップされます。Marketo プログラムは Region/Vendor のペアごとに作成されます。Region/Vendor がすでに Marketo に存在する場合は、新しいアセットをトークンと自動化に追加するだけで済みます。Marketo の既存の Region/Vendor ペアに新しいアセットを追加するだけの場合は、以下の手順にスキップしてください。

既存のアセットには同じ Asset 番号を維持する必要があります。そうしないと、既存の自動化が失敗します。現在のアセットの完全なリストは[こちら](https://docs.google.com/spreadsheets/d/1PY2_uO2qg4vszSFOBrWXoHfIlNIt2qmjdr6A6fBEtcg/edit#gid=161086184)で確認できます。参照のために SSOT を維持するため、新しいアセットを必ずこのリストに追加してください。

content syndication の Interesting Moments はグローバルです。つまり、以下の手順に従って、フォルダーレベルでトークンを、プログラムレベルで Vendor を更新するだけで済みます。IM はこのデータを使用して自動化されます。

### 新しい Region-Vendor-Asset の組み合わせを追加する手順

### ステップ 1: SFDC キャンペーンを作成する

- SFDC キャンペーンを Salesforce で直接作成します。各アセットには Campaign が必要です。
- フォーマット: YYYY_Region_Vendor_Asset#_ContentCode（例: 2027_EMEA_Integrate_Asset77_whitepaper-resilient-soft-dev-practice、2027_AMER_ASSET75_DZone_ebook-start-devops-automotive）。Content Code は Tableau のレポートに必要です。Campaign 名が SFDC の文字数制限を超えて Content Code が切り捨てられる場合は、Asset## を削除します（例: 2027_AMER_Integrate_solutionbrief-why-ai-cod-assistants-alone-dont-save-time）。
  - **Content Code の見つけ方**:
    - FY26 以降のアセット: Content Code は [Content URL builder](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit?gid=1807603787#gid=1807603787) の H 列にリストされています。
    - FY26 以前のアセット: [content_keystone.yaml](https://gitlab.com/gitlab-data/analytics/-/blob/master/extract/gitlab_data_yaml/content_keystone.yaml) でそのアセットにリストされている `url-slug` を使用します。
  - **Hyperscaler キャンペーン**: 追加の命名要件が適用されます。[Hyperscaler Campaign ハンドブックページ](/handbook/marketing/channel-marketing/hyperscalers)と [Content Syndication チーム向けの特別な手順](/handbook/marketing/channel-marketing/hyperscalers/#special-instructions-for-content-syndication-teams)を参照してください。
  - [Content Syndication Salesforce Campaign Name Generator](https://docs.google.com/spreadsheets/d/1PY2_uO2qg4vszSFOBrWXoHfIlNIt2qmjdr6A6fBEtcg/edit?gid=839155620#gid=839155620) を使用して、hyperscaler 以外の Campaign 名を自動生成できます。
- この Campaign を適切な [parent campaign](https://docs.google.com/spreadsheets/d/1PY2_uO2qg4vszSFOBrWXoHfIlNIt2qmjdr6A6fBEtcg/edit#gid=365937335) に関連付けます。
- [上記](/handbook/marketing/marketing-operations/campaigns-and-programs/#updating-sfdc-fields)の手順を参照してください。

### ステップ 2: このプログラムをクローンする

[このプログラムをクローンする - ContentSynd_Region_Vendor_DAP](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG15954A1)

- フォーマット `ContentSynd_Region_Vendor` を使用します
- プログラムをフォルダー「DAP Content Syndication」に保存します
- **新しい EMEA プログラムのみの場合**: MOps チームのメンバーに以下の更新を依頼してください。`#mktgops` Slack チャンネルにメモを残し、新しいプログラムの Marketo リンクとこれらの手順へのリンクを提供するか、またはセットアップ Issue に `MktgOps:: 00: Triage` ラベルを追加し、この情報をコメントに記載できます。**MOPS**: [このプログラム](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC42027A1ZN19)（opt-in value change）に移動します。Marketo プログラム名を `Member of program` 除外リストに追加します。これにより、ドイツのコンプライアンスフィールドが私たちのシステムプロセスによって上書きされないようにします。

### ステップ 3: Marketo トークンの更新

- アセット名とタイプのトークンはフォルダーレベル（DAP Content Syndication）で処理されます。SFDC キャンペーンのトークンはプログラムレベル（例: ContentSynd_AMER_Integrate）で処理されます。
- トークンを完了する際は、[既存のアセットリスト](https://docs.google.com/spreadsheets/d/1PY2_uO2qg4vszSFOBrWXoHfIlNIt2qmjdr6A6fBEtcg/edit#gid=161086184)を必ず参照してください。トークン値に `Asset [number] -` を含めないでください。
- 新しいアセットを追加するには、[DAP Content Syndication](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/MF26194C3) フォルダーをクリックします。「My Tokens」をクリックします。
- `Text` という単語をトークンエリアにクリック＆ドラッグします。
- Token Name で、トークンに `Assetx-Title` と名前を付けます。Marketo は `my.` と括弧を追加します。例えば、アセット 18 を追加する場合は、トークンに `Asset18-Title` と名前を付けます。
- Value で、Asset Number を含めずにアセットの名前を入力します。これは Interesting Moments の入力に使用され、アセット番号は不要です。
- Save をクリックします。
- `Text` という単語をトークンエリアにクリック＆ドラッグします。
- Token Name で、トークンに `Assetx-Type` と名前を付けます。Marketo は `my.` と括弧を追加します。例えば、アセット 18 を追加する場合は、トークンに `Asset18-Type` と名前を付けます。
- Value で、アセットタイプを入力します。オプションは `Whitepaper`、`eBook`、`Report`、`Video`、`General`、`Infographic` です
- Save をクリックします。
- メインの content syndication フォルダーにアセット名とタイプを追加した後、この region/vendor 用に作成したプログラムをクリックします。
- `{{campaign owner email}}`、`{{region}}`、`{{vendor}}` トークンを完了します。
- `{{my.Assetx-sfdc_campaign}}` を完了するには、まず SFDC でキャンペーンを作成し、SFDC のキャンペーンが `Active` としてマークされている必要があります。このトークンは、入力するために SFDC にキャンペーンが存在することを検証します。入力しているアセット番号に細心の注意を払ってください。トークンは順番に並んでいません。
- この Region/Vendor ペアに使用している各アセットの SFDC キャンペーンを追加します。

### ステップ 4: Marketo スマートキャンペーンの変更と活性化

Marketo の自動化（トークンではない）でのアセット番号への参照は、すべて `Asset [number] -`（「アセット番号 スペース -」）のフォーマットを使用することが重要です。例: `Asset 1 -`、`Asset 12 -`。これにより、自動化のトリガーに「contains」を使用しているため、自動化が適切なアセットを選択できます。アセット番号の後に `(スペース) -` がないと、Asset 12 と Asset 1 の両方が Asset 1 として記録されます。

- アセットが Action Stream の対象となる場合は、[Check for Action Stream asset (content synd)](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC58170A1ZN19) Campaign をクリックします。アセットが Action Stream の対象とならない場合は、このステップをスキップします。
  - **Smart list**: Filter 1 - Asset 番号を追加します（フィルターに表示される既存のフォーマットに従います）
  - **Flow**: 関連する Choice に Asset 番号を追加します。"New Value" に Action Stream がリストされているのが見えます
- `01 Processing`
  - **Smart list**: 変更なし。Marketo プログラムへのすべての参照がプログラム名と一致することを確認します。
  - **Flow**（プログラムの参照が Marketo プログラム名と一致することを確認します）:
  - `Step 3 - Add to SFDC Campaign` - 関連する Choice の横の X をクリックして、この Region/Vendor に使用していないアセットの選択を削除します。正しいアセットを参照する choice を削除していることを確認します。
  - リストに SFDC キャンペーンを追加する場合は、フィルターで "Content Syndication asset CONTAINS Asset x -" を必ず使用してください。
  - **Double touch campaigns** - テンプレートは double touch campaigns に対応するようにセットアップされています。"Content Syndication Asset 2" に基づく 2 つ目の `Add to SFDC Campaign` フローステップがあります。これを削除する必要はありません。ただし、vendor/region で double touch campaign を絶対に使用しない場合は、このフローステップを削除することを推奨します。削除しない場合でも、"Content Syndication Asset 2" が空であれば、ステップはスキップされるように設定されています。
  - `Step 6 - Execute Campaign`（Content Syndication Asset）-（Action Streams）プロモーションされているアセットのいずれかが Action Stream に関連付けられている場合は、それらをこの Execute Campaign フローステップに追加します。いくつかのアセットはすでにリストされています。これにより、リードが適切に関連する Action Stream に追加されるように、別の Campaign を呼び出してリードを処理します。
  - **Double touch campaigns** - "Content Syndication Asset 2" について Action Stream の対象資格を確認するために、2 つ目の Execute Campaign を追加する必要があります。2 つ目の execute campaign が処理フローにないことを確認します（1 つは Content Syndication Asset 用、もう 1 つは Content Syndication Asset 2 用）。ない場合は、「Execute Campaign」を追加し、2 つの choice を追加します。Choice 1: Content Syndication Asset 2 が空の場合、Do Nothing。Choice 2: Content Syndication Asset 2 が "list of asset x -"（Content Syndication Asset の execute campaign からコピーできます）を含む場合、Executed campaign: Check for Action Stream asset (content syndication)。Use parent token context: false。Default Choice: Do nothing
  - **Schedule**: `Activate` をクリックします。これは `Each person can run through the flow every time` に設定すべきです。
- `03 Manual upload processing` - ここでアクションは不要です。この Campaign は DAP の同期が失敗した場合に使用されます。
- `Interesting Moments` - これらはグローバルですが、`Flow` に新しいアセットを追加する必要があります。グローバルの [Interesting Moments - Content Syndication](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC58353C3ZN19) 実行可能 Campaign をクリックします。
  - `Add Choice` をクリックします。
  - 新しい choice を追加するには、`Content Syndication Asset contains Asset x -`、`Type: Milestone, Description: Downloaded {{my.Assetx-Type}}-{{my.Assetx-Title}} from 3rd party site: {{my.vendor}}` に変更します。トークンの x をアセット番号に置き換えます。
  - 新しいアセット番号をリストの一番下に移動します（番号を順番に保つため）。
- `Not added to SFDC` - これは活性化する Campaign ではありませんが、このレポートはリードが SFDC に追加される際の問題を追跡するのに役立ちます。
  - **Smart List**: filter 2 - `Member of SFDC Campaign` で、このプログラムの特定の SFDC キャンペーンを追加します。緑色のプラス記号をクリックして入力を始めます。SFDC キャンペーンのリストが表示され、それらをクリックしてリストに追加できます。OK をクリックします。
- アセットが Finserv または PubSec 向けの場合、人々が現在のナーチャープログラムに入るように、SFDC キャンペーンをナーチャー処理に追加する必要があります。
  - Finserv の場合: [00d - Add to Finserv nurture](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC62869A1ZN19) と [Vertical check](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC64233B2ZN19) の Smart List を更新します
  - PubSec の場合: [Nurture - PubSec check](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC64118A1ZN19)、[00 - Add to PUBSEC](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC24342A1ZN19)、[PubSec - Action Stream check](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC64194A1ZN19) の Smart List を更新します

### ステップ 5: content syndication リストアップロードに関する重要な情報

これは手動アップロードまたは DAP からの同期に適用されます。

リストアップロードを行う際は、自動化がトリガーされるように、各アセットに対応する `Asset [number] -` が `Content Syndication Asset` フィールドに含まれていることを、`Asset [number] -`（「アセット番号 スペース -」）のフォーマットを使用して確認する必要があります。`Content Syndication Asset` フィールドは、`Asset [number] - Name of asset` のフォーマットを使用して入力することが推奨されます（例: `Asset 2 - 2023 Global DevSecOps Report: Security & Compliance`）。アセット番号付きの現在のアセットの完全なリストは[こちら](https://docs.google.com/spreadsheets/d/1PY2_uO2qg4vszSFOBrWXoHfIlNIt2qmjdr6A6fBEtcg/edit#gid=161086184)で確認できます。これは、回答がベンダーから直接設定される場合にも適用されます。それらは適切なアセット番号でベンダーシステムにセットアップされる必要があります。

アップロードまたはベンダーからの送信でのアセット番号への参照は、すべて `Asset [number] -`（「アセット番号 スペース -」）のフォーマットを使用することが重要です。例: `Asset 1 -`、`Asset 12 -`。これにより、自動化のトリガーに「contains」を使用しているため、自動化が適切なアセットを選択できます。アセット番号の後に `(スペース) -` がないと、Asset 12 と Asset 1 の両方が Asset 1 として記録されます。これらの手順は、double touch campaigns の "Content Syndication Asset 2" フィールドにも適用されます。

### ステップ 6: Content Syndication プログラムへのリードフローのテスト

Content Syndication のリードでよく見られるエラーがいくつかあります。最初のテストを送信する前に、ベンダーと協力して正しい値を持っていることを確認することで、これらの大半に対処できます。

- `Employee Bucket`（従業員数）: 値は[こちら](/handbook/marketing/marketing-operations/automated-list-import/#data-cleaning-instructions)。これらの値は表示どおりに正確に記述する必要があります（カンマと正しいスペースを使用）。
- `State`: United States、Canada、Australia の [State 値](/handbook/marketing/marketing-operations/marketo/#standardization-of-country-or-state-values)のみを受け入れます。ベンダーは他の国については空白値を渡す必要があります。そうしないと SFDC がリードを拒否します。
- `Content Syndication Asset`: 必須フィールド。このフィールドの値は、上記のステップ 5 に概説されているとおりに正確に渡す必要があります。そうでない場合、プログラムの自動化が失敗します。
- `Content Syndication Asset 2`: double touch campaigns にのみ必須。それ以外の場合、この値は空白でプッシュすべきです。このフィールドの値は、上記のステップ 5 に概説されているとおりに正確に渡す必要があります。そうでない場合、プログラムの自動化が失敗します。
- 上記の一般的なフィールドの誤りを確認した後、ベンダーと協力して DAP を通じてテストリードを送信します。

1. テストリードが送信されたら、Marketo にアクセスし、「Database」タブをクリックして、「Quick Find」の検索ボックスにテストレコードのメールアドレスを入力します。左サイドバーの「Default」フォルダーをクリックすることで、いつでもこのボックスにアクセスできます。
   - レコードが見つかった場合、Marketo へのパスが正常に機能したことを意味し、次のステップに進めます。
   - 見つからなかった場合は、メールアドレスを確認して再度検索します。データベースでレコードがまだ見つからない場合は、ベンダーがテストリードを送信したこと、およびそのシステムがレコードを Marketo に直接渡すように適切に設定されていることを確認します。
1. Marketo データベースでテストレコードを開きます。`Activity History` タブに移動します。これを以前に行ってビューを保存している場合は、「Content Syndication Verification」というカスタムビューを選択します。このプロセスを初めて完了する場合は、「Filter: None」をクリックし、「Custom」を選択して、以下のようにカスタムビューをセットアップします:
   - Smart Campaign で、「Change Program Status」、「Interesting Moment」を選択します
   - Salesforce.com で、「Add to SFDC Campaign」を選択します
   - 「Save As」をクリックし、ビューに「Content Syndication verification」と名前を付けます
1. テスト中のプログラムが、リードが "Downloaded" ステータスで追加されたプログラムであることを確認します。これは「Change Program Status」として表示され、「プログラム名」が「Not in program」から「Downloaded」に変更されたことが表示されます。
   - レコードがプログラムに追加されなかった場合は、プログラムで `01 Processing` Campaign が活性化されていることを確認します。活性化されていない場合は、活性化して別のテストを送信してもらいます。Campaign が活性化されている、またはリードが間違ったプログラムに追加された場合、これはベンダーがプログラムの ID を誤ってプッシュしたことを意味し、直接フォローアップして修正する必要があります。
1. レコードがテストされたアセットの正しい SFDC Campaign に追加されたことを確認します。
   - SFDC キャンペーン名が表示される場合、これは SFDC への追加が成功したことを意味します。
   - 「Add to SFDC Campaign」アクティビティタイプで `"Failed: {Invalid_OR_NULL_FOR_RESTRICTED_PICKLIST}` に似たエラーが表示される場合、これはレコードが SFDC にプッシュされなかったことを意味します。エラーを読んでください。何が問題だったかを教えてくれます。これは通常、State 値または Employee Bucket の不正な値のいずれかが原因です。ベンダーにこれを修正してもらい、別のテストリードをプッシュしてもらいます。
   - 失敗はなかったがリードが追加されなかった、または間違った Campaign に追加された場合、これは SFDC キャンペーンが正しいトークンに追加されなかった、アセットが Flow ステップに追加されなかった、または `Content Syndication Asset` フィールド値がベンダーから不正だったことを意味します。
1. 正しい Interesting Moment がトリガーされたことを確認します
   - IM がトリガーされなかった場合は、アセットが [Interesting Moments - Content Syndication](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC58353C3ZN19) Campaign に追加されたことを確認します。アセットがリストされている場合は、すべてのアセットが Flow ステップで正しくセットアップされていることを確認します。Flow ステップでアセットが不足しているか、`Content Syndication Asset` フィールドのフォーマットがベンダーから不正だった可能性が高いです。
1. メールのデプロイを確認する必要がある場合は、「Filter」ビューを Email に変更し、正しいメールが送信されたことを確認します。ほとんどの場合、これは言語が指定されていない Welcome Email であるべきです。
1. テストリードがそこに表示されないことを確認するために、`Not Added to SFDC` Smart List を確認します。

### Content Syndication のセットアップ手順 - Integrate DAP を通じた Campaign - 新しいアセットの追加

content syndication プログラムが DAP を通じて実行されていない場合は、[上記](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-content-syndication-in-marketo-and-sfdc)の手順を使用してください。

これらの SFDC キャンペーンは、Region/Vendor/Asset の組み合わせごとにセットアップされます。Marketo プログラムは Region/Vendor のペアごとに作成されます。Region/Vendor がすでに Marketo に存在する場合は、新しいアセットをトークンと自動化に追加するだけで済みます。これらの手順は、Marketo の既存の region/vendor プログラムに新しいアセットを追加するためのものです。これらの手順を使用して、新しい Region/Vendor Marketo プログラムに（すでに決定されている 58 を超える）追加のアセットを追加することもできます。

### ステップ 1: SSOT スプレッドシートに新しいアセットを追加する

既存のアセットには同じ Asset 番号を維持する必要があります。そうしないと、既存の自動化が失敗します。現在のアセットの完全なリストは[こちら](https://docs.google.com/spreadsheets/d/1PY2_uO2qg4vszSFOBrWXoHfIlNIt2qmjdr6A6fBEtcg/edit#gid=161086184)で確認できます。参照のために SSOT を維持するため、新しいアセットを必ずこのリストに追加してください。

### ステップ 2: SFDC キャンペーンを作成する

- SFDC キャンペーンを Salesforce で直接作成します。各アセットには Campaign が必要です。
- フォーマット: YYYY_Region_Vendor_Asset#_ContentCode（例: 2027_EMEA_Integrate_Asset77_whitepaper-resilient-soft-dev-practice、2027_AMER_ASSET75_DZone_ebook-start-devops-automotive）。Content Code は Tableau のレポートに必要です。Campaign 名が SFDC の文字数制限を超えて Content Code が切り捨てられる場合は、Asset## を削除します（例: 2027_AMER_Integrate_solutionbrief-why-ai-cod-assistants-alone-dont-save-time）。
  - **Content Code の見つけ方**:
    - FY26 以降のアセット: Content Code は [Content URL builder](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit?gid=1807603787#gid=1807603787) の H 列にリストされています。
    - FY26 以前のアセット: [content_keystone.yaml](https://gitlab.com/gitlab-data/analytics/-/blob/master/extract/gitlab_data_yaml/content_keystone.yaml) でそのアセットにリストされている `url-slug` を使用します。
  - **Hyperscaler キャンペーン**: 追加の命名要件が適用されます。[Hyperscaler Campaign ハンドブックページ](/handbook/marketing/channel-marketing/hyperscalers)と [Content Syndication チーム向けの特別な手順](/handbook/marketing/channel-marketing/hyperscalers/#special-instructions-for-content-syndication-teams)を参照してください。
  - [Content Syndication Salesforce Campaign Name Generator](https://docs.google.com/spreadsheets/d/1PY2_uO2qg4vszSFOBrWXoHfIlNIt2qmjdr6A6fBEtcg/edit?gid=839155620#gid=839155620) を使用して、hyperscaler 以外の Campaign 名を自動生成できます。
- この Campaign を適切な [parent campaign](https://docs.google.com/spreadsheets/d/1PY2_uO2qg4vszSFOBrWXoHfIlNIt2qmjdr6A6fBEtcg/edit#gid=365937335) に関連付けます。
- [上記](/handbook/marketing/marketing-operations/campaigns-and-programs/#updating-sfdc-fields)の手順を参照してください。

### ステップ 3: Region/Vendor ペアの既存の Marketo プログラムを見つける

### ステップ 4: 新しい Marketo トークンを追加する

- アセット名とタイプのトークンはフォルダーレベル（DAP Content Syndication）で処理されます。SFDC キャンペーンのトークンはプログラムレベル（例: ContentSynd_AMER_Integrate）で処理されます。
- トークンを完了する際は、[既存のアセットリスト](https://docs.google.com/spreadsheets/d/1PY2_uO2qg4vszSFOBrWXoHfIlNIt2qmjdr6A6fBEtcg/edit#gid=161086184)を必ず参照してください。トークン値に `Asset [number] -` を含めないでください。
- 新しいアセットを追加するには、[DAP Content Syndication](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/MF26194C3) フォルダーをクリックします。「My Tokens」をクリックします。
- `Text` という単語をトークンエリアにクリック＆ドラッグします。
- Token Name で、トークンに `Assetx-Title` と名前を付けます。Marketo は `my.` と括弧を追加します。例えば、アセット 18 を追加する場合は、トークンに `Asset18-Title` と名前を付けます。
- Value で、Asset Number を含めずにアセットの名前を入力します。これは Interesting Moments の入力に使用され、アセット番号は不要です。
- Save をクリックします。
- `Text` という単語をトークンエリアにクリック＆ドラッグします。
- Token Name で、トークンに `Assetx-Type` と名前を付けます。Marketo は `my.` と括弧を追加します。例えば、アセット 18 を追加する場合は、トークンに `Asset18-Type` と名前を付けます。
- Value で、アセットタイプを入力します。オプションは `Whitepaper`、`eBook`、`Report`、`Video`、`General`、`Infographic` です
- Save をクリックします。
- アセットを追加する Region/Vendor のプログラムに移動します（例: ContentSynd_ABM_AMER_Madison Logic）。「My Tokens」をクリックします
- `SFDC Campaign` をトークンエリアにクリック＆ドラッグします。
- Token Name で、トークンに `Assetx-sfdc_campaign` と名前を付けます。Marketo は `my.` と括弧を追加します。例えば、アセット 18 を追加する場合は、トークンに `Asset18-sfdc_campaign` と名前を付けます。
- Value で、ステップ 2 で作成した SFDC キャンペーンを入力し始めます。SFDC が Marketo に同期するまで時間がかかる場合があるため、すぐに利用できない場合は、プレースホルダー Campaign を使用し、他のステップを完了した後に戻ってくるためのリマインダーを設定します。
- Save をクリックします。

### ステップ 5: Marketo スマートキャンペーンの変更

以下の Marketo 自動化でのアセット番号への参照は、すべて `Asset [number] -`（「アセット番号 スペース -」）のフォーマットを使用することが重要です。例: `Asset 1 -`、`Asset 12 -`。これにより、自動化のトリガーに「contains」を使用しているため、自動化が適切なアセットを選択できます。アセット番号の後に `(スペース) -` がないと、Asset 12 と Asset 1 の両方が Asset 1 として記録されます。

- `Interesting Moments` - これらはグローバルですが、`Flow` に新しいアセットを追加する必要があります。グローバルの [Interesting Moments - Content Syndication](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC58353C3ZN19) 実行可能 Campaign をクリックします。
  - `Add Choice` をクリックします。
  - 新しい choice を追加するには、`Content Syndication Asset contains Asset x -`、`Type: Milestone, Description: Downloaded {{my.Assetx-Type}}-{{my.Assetx-Title}} from 3rd party site: {{my.vendor}}` に変更します。トークンの x をアセット番号に置き換えます。
  - 新しいアセット番号をリストの一番下に移動します（番号を順番に保つため）。  

- `01 Processing`
  - **Flow**:
  - `Step 3 - Add to SFDC Campaign` - `Add Choice` をクリックします。新しい choice を追加するには、`Content Syndication Asset contains Asset x -`、`Campaign: {{my.Assetx-sfdc_campaign}}.` に変更します。トークンの x をアセット番号に置き換えます。これはステップ 4 で追加したトークンです。`Status: Downloaded`。

- **Double touch campaigns** - テンプレートは double touch campaigns に対応するようにセットアップされています。"Content Syndication Asset 2" に基づく 2 つ目の `Add to SFDC Campaign` フローステップがあります。これを削除する必要はありません。ただし、vendor/region で double touch campaign を絶対に使用しない場合は、このフローステップを削除することを推奨します。削除しない場合でも、"Content Syndication Asset 2" が空であれば、ステップはスキップされるように設定されています。

  - `Step 6 - Execute Campaign`（Content Syndication Asset）- プロモーションされているアセットのいずれかが Action Stream に関連付けられている場合は、それらをこの Execute Campaign フローステップに追加します。いくつかのアセットはすでにリストされています。これにより、リードが適切に関連する Action Stream に追加されるように、別の Campaign を呼び出してリードを処理します。

- `03 Manual upload processing` - ここでアクションは不要です。この Campaign は DAP の同期が失敗した場合に使用されます。

- `Not added to SFDC`: これは活性化する Campaign ではありませんが、このレポートはリードが SFDC に追加される際の問題を追跡するのに役立ちます。
  - **Smart List**: filter 2: `Member of SFDC Campaign` で、このプログラムの特定の SFDC キャンペーンを追加します。緑色のプラス記号をクリックして入力を始めます。SFDC キャンペーンのリストが表示され、それらをクリックしてリストに追加できます。OK をクリックします。

### ステップ 6: content syndication リストアップロードに関する重要な情報

リストアップロードを行う際は、自動化がトリガーされるように、各アセットに対応する `Asset [number] -` が `Content Syndication Asset` フィールドに含まれていることを、`Asset [number] -`（「アセット番号 スペース -」）のフォーマットを使用して確認する必要があります。`Content Syndication Asset` フィールドは、`Asset [number] - Name of asset` のフォーマットを使用して入力することが推奨されます（例: `Asset 2 - 2023 Global DevSecOps Report: Security & Compliance`）。アセット番号付きの現在のアセットの完全なリストは[こちら](https://docs.google.com/spreadsheets/d/1PY2_uO2qg4vszSFOBrWXoHfIlNIt2qmjdr6A6fBEtcg/edit#gid=161086184)で確認できます。これは、回答がベンダーから直接設定される場合にも適用されます。それらは適切なアセット番号でベンダーシステムにセットアップされる必要があります。

アップロードまたはベンダーからの送信でのアセット番号への参照は、すべて `Asset [number] -`（「アセット番号 スペース -」）のフォーマットを使用することが重要です。例: `Asset 1 -`、`Asset 12 -`。これにより、自動化のトリガーに「contains」を使用しているため、自動化が適切なアセットを選択できます。アセット番号の後に `(スペース) -` がないと、Asset 12 と Asset 1 の両方が Asset 1 として記録されます。これらの手順は、double touch campaigns の "Content Syndication Asset 2" フィールドにも適用されます。

### ステップ 7: Content Syndication プログラムで新しいアセットをテストする

新しいアセットをテストするには、[上記のステップ 6](/handbook/marketing/marketing-operations/campaigns-and-programs/#step-6-test-lead-flow-into-your-content-syndication-programs)の手順に従ってください。新しいアセットを QA するために、特に `Add to SFDC Campaign` と `Interesting Moments` に注目してください。

## Integrate DAP のクローズドループフィードバック

Integrate サービスを介して受け取ったリードに関するフィードバックは、Marketo の webhook を介して行われる自動化されたプロセスで、合計 7 つあります。自動化に使用されるスマートキャンペーントリガー、smartlist フィルター、「holding」スマートキャンペーンは、[このプログラム](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG16388A1)で見つかります。3 つのスマートキャンペーンが 2 つの理由で使用されています: `Activation` トリガーは 4 日間の保留セルとして機能し、新しく受け取ったリードが webhook を呼び出す前に複数の GitLab プロセスを通過できるようにします（例: SDR からの連絡、スコアリングの受信、配信不能メールとしてのマーク）。フローはまた、通常のリードを `test` リードから分離し、通常のリードを静的な `Hold` リストに追加します。これは Integrate のプラットフォームに送信される自動隔週リード品質レポートに使用されます。2 つ目のスマートキャンペーン `Scheduled Integrate Webhook Calls` は、隔週の月曜日に実行されるようにスケジュールされています。フローは、Integrate が受け取ったリードについて静的な `Hold` リストをチェックし、webhook 呼び出しスマートキャンペーンをトリガーします。3 つ目のトリガー `Webhook calls` は、適切な webhook を呼び出します。新しいリードがこのプロセスを通過する合計時間は、`Marketo に入ってから 4 日間` に、リードが `隔週` のケイデンスに入ったタイミングを加えたものです。通常は 2 週間ですが、場合によってはもう少し長くなることもあります。

webhook を呼び出すとき、Marketo は最初の webhook 呼び出しに `Integrate Webhook - First` フィールドでタイムスタンプを付け、webhook の 2 回目の実行がある場合は、タイムスタンプが `Integrate Webhook - Second` フィールドに入ります。webhook を通過したすべてのリードは、`Static Checks` フォルダーにある静的リストに追加されます。

Integrate に送信する 7 つの webhook フィードバック自動化は以下のとおりです:

### 受諾された Webhook

- **Accept**: これは一般的に受諾されたリードです
- **Low**: これも受諾されたリードですが、リードが低品質だったというフィードバックを共有します。これは、リードが `Disqualified` であることから、非常に低い `demographic` スコアを持つことまで、複数の理由がありえます

### 受諾されなかった Webhook

- **Bad Data**: これは一般的に「spam」リードに似たものと考えるべきです
- **Bad Phone**: SDR がリードにリストされた電話番号を使用不可または誤りとマークした場合に発火します。Inegrate は電話番号を修正してこれらのリードを返すことができますが、他の return webhook は返すことができません
- **Invalid**: メールアドレスが Marketo によって無効と判断されました。私たちのメールがブロックされているか、メールアドレスが存在しないか、ドメインが使い捨てメールアドレスとして識別されたかのいずれかです。Marketo がメールアドレスが本物かどうかを判断できないため、リードを受諾したり使用したりできません
- **Competitor**: リードは競合企業の一員であり、この競合からこれ以上リードを受け取ることに関心がありません。これはエラー通知として使用してください。つまり、対処が必要な私たちのリードソーシングフィルターを意味します
- **Test**: Integrate が私たちにテストリードを送信する必要がある場合、この webhook はそれらの受信リードによってトリガーされます。サービスを介してリードを送信するチームが、webhook を介した自動フィードバックをトリガーするために必要なフィルターを認識していることを確認してください

### クローズドループのステータスリセット

- リードが Integrate によって私たちのシステムに送信されると、[the Processing for Initial Integrate Closed Loop](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC64759A1ZN19) スマートキャンペーンによってタイムスタンプが付けられます。リードが closed loop フィードバックロジックによって拒否され、Integrate がリードの情報を修正した後に最終的に私たちに返された場合、[the Processing for Repeat Integrate Closed Loop](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC64760A1ZN19) スマートキャンペーンが一部のリードステータスとその理由をリセットします。これにより、リードが古い情報で closed loop ロジックを再度トリップしないようにします。

## Marketo と SFDC でのサーベイのセットアップ手順

**注意: サーベイプログラムを作成したら、`#mktops` Slack チャンネルで Marketing Ops に ping を送り、レビューのためにプログラムをリンクしてください。各サーベイはユニークであり、セットアップに微調整が必要な場合があります。**

### ステップ 1: プログラムテンプレートをクローンする

- [General survey template](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG6402A1)
- フォーマット `YYYY_MM_SurveyName` を使用します

### ステップ 2: Salesforce への同期

- Marketo のプログラムメイン画面で、`Salesforce Sync` が "not set" となっている箇所の "not set" をクリックします
  - 「Create New」をクリックします。プログラムが自動的に Campaign タグを入力するため、何も編集する必要はありません。
  - Allocadia のユーザーの場合は、`Description` フィールドに Allocadia ID サブカテゴリ ID を追加する必要があります。
  - 「Save」をクリックします

### ステップ 3: リードアップロードのための Issue を作成する

- サーベイがリストアップロードを介した手動アップロードを必要とする場合は、`01 Processing` バッチスマートキャンペーンの更新に注意を集中します。手動リストアップロードの場合、バッチはアップロードプロセス中に MktgOps によって手動で活性化されます。
- サーベイが Zapier 自動化を必要とする場合は、自動化の構築について [Issue を介して](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/blob/master/.gitlab/issue_templates/zapier_connection_request.md) MktgOps に相談してください。MktgOps が `01 processing` Campaign を活性化する担当者にもなります

### ステップ 4: Salesforce キャンペーンの更新

- [上記](/handbook/marketing/marketing-operations/campaigns-and-programs/#updating-sfdc-fields)の手順を参照してください。
- Marketo プログラムのリンクと SFDC キャンペーンのリンクを epic に追加します。

Allocadia を利用する場合は、[上記](/handbook/marketing/marketing-operations/campaigns-and-programs/#instructions-for-sfdc-campaign-creation-when-utilizing-allocadia)の手順を参照してください。

### ステップ 5: トラブルシューティング

1. スマートキャンペーンの `Results` タブを見ます。エラーがある場合は、そこに明確に表示されます。
1. リードが SFDC にプッシュされていない場合は？ `Person Source` が `SurveyName` になっていないことを確認します
1. 既存のリードがプログラムに取り込まれない場合は、`SurveyName` フィールドが間違った名前を取得している可能性が高いです。
1. net-new のリードがプログラムに取り込まれない場合は、`Person Source` SurveyName が正しく更新されなかった可能性が高いです。

## Direct Mail キャンペーンのセットアップ手順

Direct Mail キャンペーンには Qualified、Marketo、Brilliant Gifts の使用が必要な点に注意してください。私たちのマーチャンダイズベンダーである Brilliant Gifts は、自社側で Preferred Gift キャンペーンをセットアップする必要があり、これには最大 1 ヶ月かかることがあり、サポートへの連絡が必要です。Qualified のミーティング予約リンクのセットアップには、現在の Qualified テックオーナーが必要になります。適切な連絡先については、[tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) を参照してください。Marketo テンプレートは簡単にクローンできるようにセットアップされているため、セットアップ中はゆっくりと慎重に進めてください

### ステップ 1: Marketo プログラムと Salesforce キャンペーンを作成する

- [#TEMPLATE - FY00_Q0_Brilliant Gifts Direct Mail TEMPLATE](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/PG24060A1) を適切なフォルダーにクローンし、プログラムの名前を変更します。1 つの地域で実行する意図がある場合は、1 回クローンします。複数の地域で実行する意図がある場合は、「parent」プログラムと、すべての地域に十分な数のプログラム（例: AMER、APJ、EMEA）をクローンし、それら専用のフォルダーに配置します。地域別／child プログラムの命名規則を似たものに保ちますが、プログラム名の末尾に地域タグを追加します（例: `FY00_Q0_Campaign_AMER`）。parent プログラムについては、SFDC キャンペーンで冗長なタッチポイントを防ぐために、プログラム名の末尾に `_Parent` を追加します
- 1 つのプログラムをクローンした場合は、それを SFDC に同期します。複数のプログラムを作成した場合は、それらの **すべて** を SFDC に同期します。
  - 地域別の SFDC キャンペーンを parent Campaign の下にアンカーしないでください。parent Campaign は Qualified と同期するために存在しますが、Campaign が _完全に_ 完了したら、parent のすべてのメンバーを Campaign から削除し、parent を child Campaign にリンクできます。parent は child Campaign を持ちながらメンバーを含むことはできません

### ステップ 2: Marketo プログラムをセットアップする

- 必須のプログラムトークンを入力します。このプログラムタイプに固有のトークンは `my.qualifiedlink` トークンで、`Sales Nominated Invite` メールに表示されます。Qualified リンクは、準備ができたときに Qualified テックオーナーによって共有されます（詳細は以下）
- スマートキャンペーンフォルダーには多くのフローがあり、どれを使用するかは、Direct Mail キャンペーンが単一地域向けか、プログラムが Qualified と通信する「parent」プログラムか（Qualified は SFDC キャンペーンと同期）、または地域別の「child」プログラムかによって異なります
- Campaign が単一地域で行われ、プログラムが 1 つしかない場合は、`01 Processing - Single region campaign` を確認し、フローステップで更新されるすべてのフィールドが適切なプログラム名で最新であることを確認します
- Campaign が複数の地域で行われている場合は、`parent` プログラムで、関与する地域のすべての地域別処理スマートキャンペーンを活性化します。例: EMEA と AMER のプログラムがある場合は `00 Processing - Parent - AMER` と `00 Processing - Parent - EMEA`。各地域別 child プログラムでは、`00 Processiong - Child` スマートキャンペーンを活性化します
  - parent プログラムは Qualified からの入力を処理し、ギフト引き換えメールを送信するために Brilliant への webhook を呼び出し（プログラムステータスが `Meeting Attended` の場合のみ）、また地域別 child プログラムにプログラムステータス更新を中継します
- 処理スマートキャンペーン内では、最初の `if` フローステップで、スマートキャンペーンが参照するプログラムを正しい地域別 child プログラムに必ず変更してください。スマートキャンペーンの名前が `AMER` の場合、フローステップは `AMER` プログラムを呼び出すべきです。
- このテンプレートは複数の地域での使用のためにセットアップされているため、ロジックに余分な部分がある場合は、ロジックエラーを避けるためにそれらの部分を削除しても構いません
- `no show` アクティビティを登録するために、単一または parent プログラムで `03 Change to No Show` を活性化します * この機能は現時点では実験的です

### ステップ 3: ターゲットリストと nominated リードのロード

プログラムテンプレートには、各地域の静的リストとスマートリストの両方を含む複数のターゲットリストアセットが含まれています。この段階では MktgOps に相談することを推奨します。

- ターゲットリストを計画するには、`target list w/leads (global)` を使用します。複数地域の Campaign の場合は、事前に作成された地域スマートリストでスマートリストを再作成するか、グローバルをクローンしてスマートキャンペーンでアセットを入れ替えます
- プログラムが 1 つしかない場合は、スマートキャンペーン `Load static list and parent program from target list` を使用して、ターゲットリストを静的リストとプログラムにロードします
- 複数の地域別プログラムがある場合は、スマートキャンペーン `Load static lists and child programs from target list` を使用して、ターゲットリストを適切な地域別静的リストと地域別 child プログラムにロードします
  - プログラムにロードされたリードは、ロードされると `Nominated` ステータスを持つべきです

### ステップ 4: ターゲットリストへのメール送信

スマートキャンペーン `02 Send Sales Nominated Invite` はテンプレートに存在しますが、他のアウトリーチ手法が使用される可能性もあります。`02a Sales Nominated Invite Sent` は、すでにメールが送信されたリードのプログラムステータスを変更する方法として存在します。このスマートキャンペーンを使用してプログラムステータスを変更するために、送信された正しいメールアセットを接続するか、レポートをリクエストすれば MktgOps がレポートの処理を支援します

### ステップ 5: Brilliant のセットアップ

このステップでは Brilliant サポートチームへの連絡が必要であり、完了までに 1 ヶ月以上かかることがあります。Brilliant テックオーナーに連絡を取ってください。テックオーナーは（リクエスト者を CC に入れて）私たちの Brilliant の連絡先にメールを送ります。そこから、Brilliant チームはリクエスト者に意図された Campaign に関する一連の質問をし、セットアップについて議論します。決定される項目のいくつか:

- 新しい Preferred Gift キャンペーンが必要か？
- Brilliant のストアフロントが確立されており、この Campaign のニーズに適切か？
- Brilliant でどのバックエンドアセットを更新する必要があるか？ 例: ブランド化されたギフト引き換えメール

Brilliant チームは、Marketo の webhook がバックエンドに到達していることも確認する必要があります

注意: MktgOps は、プログラムテンプレートにある `Call to Brilliant TEST` と `Call to Brilliant TEST trigger` を利用して webhook が機能していることを確認する必要があります。webhook を呼び出すにはトリガー Campaign が必要なため、2 つのスマートキャンペーンがあります

### ステップ 6: Qualified を活用したミーティング予約のセットアップ

この次のステップでは、Qualified テックオーナーの支援が必要になります。単一または parent Campaign として使用されている SFDC キャンペーンをテックオーナーに提供します。そこから、Qualified リンクが作成され、テックオーナーによってリクエスト者に共有されます。このリンクは、nominated された見込み客が Sales Dev とのミーティングを予約するために必要な手法として、見込み客へのアウトリーチ中に使用されます

- 見込み客がミーティングを予約すると、Qualified はプログラムステータスを `Meeting Booked` に変更します
- ミーティングの 1 時間前にリマインダーメールが送信されます
- ミーティングが行われた後、Qualified はミーティングが行われたか欠席だったかを確認するために、Sales Dev チームメンバーに確認メールを送信します
- Qualified がミーティングのアクティビティを `not attended` で更新した場合に `no show` とマークするかどうかを監視する実験的な自動化があります

### ステップ 7: Campaign の完了

Campaign の終了時に、Qualified のロジックを取り下げるようリクエストします。Brilliant のストアフロントと preferred キャンペーンへの更新は未定です。複数地域の Campaign の場合、リードは parent SFDC キャンペーン／Marketo プログラムから削除できます。リードが parent Campaign から削除されている限り、地域別 Campaign は SFDC で parent Campaign の child Campaign として追加できます

## LinkedIn Lead Gen Form のセットアップ手順

私たちは Marketo に特定のパラメータをリッスンするリスナーをセットアップしています。プログラムがすでに Marketo にセットアップされているかどうかを確認するには、以下の `Marketo Listener` 列を確認してください。セットアップされている場合は、新しいリスナーを作成する必要はなく、コンテンツをプログラムに追加するだけです。それ以外の場合は、リードがキャプチャされるように、以下に概説するプロセスに従ってください。

**アクティブまたは進行中のキャンペーン**

| Campaign                                 | 追跡用の Campaign パラメータ |Marketo Listener?|
|------------------------------------------|---------------------------------|-----------------|
| Digital Retargeting                     | fy27_rtg                          |[Yes](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/PG16666A1) |
| Digital Retargeting                         | fy26_rtg_global               |[Yes](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/PG16666A1)|
| ABM - DevSecOps                    | abmkey_devsecops                       | [Yes](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/PG16770A1) |
| ABM - DevOps GTM                    | abmkey_devopsgtm                     |[Yes](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/PG16770A1)  |
| ABM - DevSecOps Plat                              | abmkey_devsecopsplat   |[Yes](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/PG16770A1)|
| Digital Contact Us                       | fy27_rtg_2026_scaled_contactsales_amer |[Yes](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/PG26750A1)|
| Digital Contact Us Free to Paid       | fy27_rtg_2026_scaled_f2pcontactsales_amer  |[Yes](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/PG26851A1)|

**無効化された、または古いキャンペーン、もはや使用されていない** これらのリスナーはもはやアクティブではなく、それらに対して LinkedIn キャンペーンを実行する前にセットアップする必要があります。

| Campaign                                 | 追跡用の Campaign パラメータ |Marketo Listener?|
|------------------------------------------|---------------------------------|-----------------|
| Version Control & Collaboration Use Case | vccusecase                      |  |
| Simplify DevOps                          | simplifydevops                  |  |
| Jenkins                                  | cicdcmp2                        |      |
| Increase Operational Efficiencies           | operationalefficiences          ||
| Deliver Better Products Faster           | betterproductsfaster            ||
| Reduce Security and Compliance Risk       | reducesecurityrisk              ||
| CI Build & Test Auto                       | cicdcmp3                        ||
| OctoCat                                   | octocat                         ||
| DevSecOps Use Case                       | devsecopsusecase                | |
| AWS                                       | awspartner                      ||
| GitOps Use Case                          | iacgitops                       | |
| DevOps GTM                               | devopsgtm                        | |
| AutoSD                                    | autosd                          | |
| DevSecOps Platform                        | devsecopsplat                   | |
| Security & Compliance                     | seccomp                         | |
| CI Use Case                               | singleappci                     | |
| PubSec - DevOps GTM only                  | amer-pubsec                     | |

このフォームが別の言語の場合は、LinkedIn フォームのフォーム名にその正確な言語（以下に表記されているスペル）が含まれていることを確認してください。現在サポートしているのは:

- Japanese
- Italian
- French
- Spanish
- Korean
- German
- Portuguese

誰かがこれらのフォームに記入すると、自動的に [Language Segmentation](/handbook/marketing/marketing-operations/marketo/#segmentations) に追加され、現地の言語でメッセージを受け取れるようになります。

### LinkedIn で LinkedIn Lead Gen Form を作成する（digital marketing）

- Campaign が所在する地域（AMER、EMEA/APAC）に応じてフォームテンプレートをクローンします。異なるフォームがある理由はコンプライアンス関連であるため、地域に合った正しいテンプレートを必ず使用してください。3 つすべての地域をセットアップする場合は、両方のテンプレートを使用する必要があります。
  - 「form name」に、上記の表に表示されているとおりに正確に utm_campaign が含まれていることを確認します
  - フォーム名には、Issue にリストされているとおりに正確に utm_content も含めるべきです
  - AMER フォームのフォーム名には、フォーム名に `amer` も含める必要があります
  - 正しいフォーマットの例
    - _例: devopsgtm_amer_guide-to-devops_feb2023_
    - 注意: セグメント固有のバージョンがある場合は、より良い追跡のためにコンテンツ名内にセグメントを追加します。_devopsgtm_amer_guide-to-smb-devops_feb2023..._
- 「offer headline」と「offer details」を入力します
- 「confirmation message」と `landing page URL` を更新します
  - テンプレートには標準のランディングページ URL としてホームページがありますが、より適切なページがある場合は URL を更新し、UTM は同じに保ちます
- `utm_campaign` と `utm_content` の hidden field を更新します
  - リードデータが Marketo に渡されるように、正しい Campaign 命名を持つことが非常に重要です
- フォームを保存します
- 新しいフォームを使用する Campaign に移動して編集します
- `form details` で call-to-action として `download` を選択し、新しいフォームを選択します
  - 注意: 新しいアセットが複数の地域で立ち上げられる場合は、正しいフォームを正しい地域別 Campaign に追加していることを確認します

### ステップ 1: Salesforce Campaign を作成する

[このプログラムをクローンする](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG8361A1)

- フォーマット `YYYY_Region_Social_[Name]_[parameter]_LinkedIn Lead Gen` を使用します
- Campaign パラメータは [GTM campaign パラメータ](/handbook/marketing/utm-strategy/#the-new-utm_campaign-structure)（通常 utm_campaign として使用 - 例: `devopsgtm` または `autosd`）のいずれかである必要があります。回答が Sisense ダッシュボードで正しい Campaign にロールアップされるように、Salesforce キャンペーン名には Campaign パラメータを含める必要があります。
- 1 つのアセットに複数の地域にまたがる複数のフォームがある場合は、各地域に対して別々の SFDC キャンペーンを作成する必要があります。
例: fy27_rtg_2025_eBook_CostFragmentedDevSecOpsAI_apac と fy27_rtg_2025_eBook_CostFragmentedDevSecOpsAI_amer のフォームは同じアセットをプロモーションします — APAC 用に 1 つ、AMER 用に 1 つの SFDC キャンペーンを作成します。

_例: 2020_Social_AutomatedSoftwareDelivery_autoSD_LinkedIn Lead Gen_

- `2020_Social_LinkedIn_Lead Gen` の `Parent Campaign` を追加します
- [上記](/handbook/marketing/marketing-operations/campaigns-and-programs/#step-5-update-the-salesforce-campaign)の手順を参照してください。
- budget holder を更新します
- GTM Motion を更新します
- SFDC キャンペーンのリンクを epic または Issue に追加します。

### ステップ 3: 自動応答メール

- 複数のアセットを活性化する場合は、自動応答メールをクローンし、各アセットについてプログラムに追加した追加トークンに一致するように、メール内のすべてのトークンを更新する必要があります。

### ステップ 4: Marketo プログラムの更新

- Digital LinkedIn Lead Gen フォームを追加するには、[Digital Paid Social Marketo Program](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/PG16666A1) に移動します。ABM LinkedIn Lead Gen フォームについては、[ABM Paid Social Marketo Program](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/PG16770A1) に移動します。

- ローカルプログラムトークンを作成します。これらのプログラムは複数の LI lead gen フォームを処理するようにセットアップされています。活性化しているアセットの新しいトークンを追加します。

**Smart List**

- `01 Filled Out Form - Autoresponder` Campaign の smart list フィルターを、`contains` とプレフィックスで確認します
  - `Fills out LinkedIn Lead Gen Form`、`Lead Gen Form Name contains [parameter]`
  - 利用可能なパラメータは[上記にリスト](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-linkedin-lead-gen-form)されているか、リストにない場合は新規作成します。
- `Filled out LinkedIn Lead Gen Form` フィルター - 新しい Campaign が類似の LinkedIn Lead Gen フォーム名を使用する場合は、他のプログラムが除外されていることを確認します。一般的な除外は `amer-pubsec`、`contactsales`、`abmkey` で、これらは別々の Campaign を流れます。これは必要なすべての除外の完全なリストではなく、セットアップしている内容に基づきます。除外の例については、既存の LI Lead Gen プログラムを確認できます。
- 他のプログラムは[上記にリスト](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-linkedin-lead-gen-form)されているパラメータを探しています。LI Lead Gen フォームにこれらのいずれかが含まれている場合は、既存のプログラム処理から Campaign を除外する必要があります（例えば、LI Lead Gen Form に `devsecopsusecase` が含まれている場合は、`devsecopsusecase` を使用する他のプログラムを通じた処理から LI Lead Gen フォーム名を除外する必要があります）。除外を適切にキャプチャしたことを確認する手順を提供しているため、以下のテストセクションを参照してください。ABM チームは `abmkey` と上記の Campaign パラメータを使用して LinkedIn キャンペーンを実行するため、`abmkey` は常に除外する必要がある点に注意してください。
**Flow**
- `1 - Remove from Flow` に変更なし - テストのために一時的にこれを削除する場合は、本番稼働前に必ず元に戻してください。`Remove from Flow`: Choice 1: Email Address が @gitlab.com を含む場合。Campaign: this campaign。Default Choice: Campaign は Do nothing
- `2 - Send Email` - このステップは異なります。一般的には、Choice 1: Filled out LinkedIn Lead Gen Form が [フォームからのコンテンツ名] を含む場合、Email [適切なメール自動応答を選択] を設定します。ここには複数の choice があり、各アセットに 1 つずつあります。このステップにアセットが 1 つしかない場合でも、ベストプラクティスはデフォルトを Do Nothing にした choice をセットアップすることです。これは自動化が失敗した場合のもう 1 つのバックアップであり、コンテンツ名が見つからないために人々が別のアセットの自動応答メールを受け取らないようにします。複数のアセットの例は[こちら](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC21615C3ZN19)で確認できます。複数の LinkedIn Lead Gen フォームが同じアセットをプロモーションする場合は、プラス記号をクリックして各フォームを同じ choice に追加します。
- `3 - Change Program Status` に変更なし - これはテンプレートに自動的に含まれています。Program: [Marketo プログラム名] - New Status Paid Social > Responded
- `4 - Interesting Moment` Send Email ロジックと同じ方法でこれをセットアップしますが、description をアセットに一致するように変更します。一般的には、Choice 1: Filled out LinkedIn Lead Gen Form が [フォームからのコンテンツ名] を含む場合、Type Milestone、Description: Filled out LinkedIn form to view asset: [アセット名] を設定します。Default choice は汎用的であるべきです: "Filled out LinkedIn form to view [GTM 名] asset."
  - 各アセットの追加トークンをセットアップした場合は、トークンを使用して Interesting Moments を入力できます
- `5 - Add to SFDC Campaign` - Send Email ロジックと同じ方法でこれをセットアップしますが、Campaign ドロップダウンフィールドを LinkedIn Lead Gen フォーム用に作成した SFDC キャンペーンに設定し、Status = Responded とします。活性化している各フォームについてこのステップを繰り返します。
- ステップ 6、7、8 に変更なし。
- ステップ 9: `Execute campaign` - これは Action Stream タグ付けを処理します。このステップでアクションは不要です。これは次のようになるべきです: Executed Campaign: Action Stream tagging: (LinkedIn) Check Asset
- ステップ 10 に変更なし。
- スマートキャンペーンの `schedule` タブで、トリガー Campaign をオン／活性化します
- フォームプレフィックスを持つすべての LinkedIn プログラムは、この Campaign を流れるようになります
- 新しいフォームが [action stream の対象となる](/handbook/marketing/lifecycle-marketing/email-processes-requests/#action-streams)アセットをプロモーションする場合は、[Action Stream tagging: (LinkedIn) Check Asset](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC58851A1ZN19) プログラムをクリックします。それ以外の場合は、このステップをスキップします。
- Smart List: filter 1 に LinkedIn Lead Gen フォームの名前を追加します。
- Flow: filter 1 に LinkedIn Lead Gen フォームの名前を追加します。
- アセットが Finserv または PubSec 向けの場合、人々が現在のナーチャープログラムに入るように、SFDC キャンペーンをナーチャー処理に追加する必要があります。
  - Finserv の場合: [00d - Add to Finserv nurture](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC62869A1ZN19) と [Vertical check](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC64233B2ZN19) の Smart List を更新します
  - PubSec の場合: [Nurture - PubSec check](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC64118A1ZN19)、[00 - Add to PUBSEC](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC24342A1ZN19)、[PubSec - Action Stream check](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SC64194A1ZN19) の Smart List を更新します

### ステップ 6: LinkedIn Lead Gen のセットアップをテストする

- Digital Marketing にフォームを通じてテストレコードを送信してもらいます。Issue で以下のテキストを使用して、指定されたセクションを更新してリクエストできます:   `The Marketo program has been set-up for [name of asset] in [segment/region if applicable - you will not always need to provide this]. The automation will trigger based on [gtm code] and [content name]. Please submit a test record.`
- テストリードが送信されたら、Marketo データベースでテストレコードを開きます。`Activity History` に移動して確認します:
   1. 送信されたフォーム。gtm 名とコンテンツ名に注目します。これがテストしたいフォームであることを確認します。確認できたら、ステップ 2 に進みます。
   1. リクエストされたアセットの正しい自動応答がデプロイされたことを確認します（digital）
   1. 他の自動応答が送信されなかったことを確認します（campaigns）
   1. 正しい Interesting Moment がトリガーされたことを確認します（campaigns）
   1. テストレコードが SFDC キャンペーンに追加されたことを確認します（数分かかる場合があります）（campaigns）
   1. このテストの結果として、テストレコードが他のメールを送信されたり、他のプログラムに追加されたりしなかったことを確認します（campaigns）

### ステップ 7: このハンドブックページを更新する

- この[ハンドブックページをパラメータで](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-linkedin-lead-gen-form)、`yes` と、セットアップしたパラメータと Campaign へのリンクで更新します。

## Marketo プログラムのセットアップをテストする

1. この Campaign のウェブページでテスト登録を送信します。（既存のメールアドレスを使用する代わりに）新しいテストレコードを作成する必要がある場合は、ユーザー名の後に `+` を追加できます: 例 `jdoe+testuser@gitlab.com`。テストを実行する際は、フローに GitLab メールアドレス用の「Remove from flow」があるかどうかに注目してください。これがある場合は、そのフローステップを削除するか、別のメールアドレスでテストする必要があります。
1. テストリードが送信されたら、Marketo ナビゲーションの `Database` をクリックして Marketo データベースに移動します。次に、左側のメニューで `Default` をクリックします。
1. テストレコードに使用したメールアドレスを検索し、Marketo データベースでテストレコードを開きます。Activity History に移動して確認します:
     1. フォームが送信されたこと
     1. レコードが成功ステータス（No Action であるべきではない）で正しいプログラムに追加されたこと
     1. リクエストされたアセットの正しい自動応答がデプロイされたことを確認します
     1. 他の自動応答が送信されなかったことを確認します
     1. 正しい Interesting Moment がトリガーされたことを確認します
     1. テストレコードが SFDC キャンペーンに追加されたことを確認します（数分かかる場合があります）
     1. このテストの結果として、テストレコードが他のメール（該当する場合、ドイツ向けの double opt-in メールを除く）を送信されたり、他のプログラムに追加されたりしなかったことを確認します

### LinkedIn Lead Gen Contact Us のセットアップ

- LinkedIn Lead Gen Contact Us フォームは、Free to Paid ではない Campaign については [Request - Digital Contact Us](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/PG26750A1) を通じて処理されます。Free to Paid LinkedIn Lead Gen Contact us フォームは [Request - Digital Contact Us Free to Paid](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/PG26851A1) を通じて処理されます。
**Smart List**
- `01 - Filled-out form` Smart List の `Fills Out LinkedIn Lead Gen Form` トリガーに LinkedIn Lead Gen フォーム名を追加します。
**Flow - Free to Paid ではないフォームのみ**
- `6 - Interesting Moment` LinkedIn Lead Gen フォームを Choice 1 のオプションとして追加します。Free to Paid LinkedIn Lead Gen contact us フォームをセットアップしている場合は、このステップをスキップします。
**Alert**
- [Request - Contact](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/PG2466A1) の `02 Alert for Contact Us` Smart List の `Fills Out LinkedIn Lead Gen Form` トリガーに LinkedIn Lead Gen フォーム名を追加します。

## LinkedIn Lead Gen Contact Us のセットアップをテストする

- Digital Marketing にフォームを通じてテストレコードを送信してもらいます。Issue で以下のテキストを使用して、指定されたセクションを更新してリクエストできます:  `Marketo Contact Us processing has been set-up for form [form name]. Please submit a test record using a non-GitLab email address and non-GitLab company name.`
- テストリードが送信されたら、Marketo データベースでテストレコードを開きます。`Activity History` に移動して確認します:
      1. 送信されたフォーム。gtm 名とコンテンツ名に注目します。これがテストしたいフォームであることを確認します。確認できたら、ステップ 2 に進みます。
      1. 正しい自動応答がデプロイされたことを確認します（digital）
      1. 他の自動応答が送信されなかったことを確認します（campaigns）
      1. 正しい Interesting Moment がトリガーされたことを確認します（campaigns）
      1. テストレコードが SFDC キャンペーンに追加されたことを確認します（数分かかる場合があります）（campaigns）
      1. このテストの結果として、テストレコードが他のメールを送信されたり、他のプログラムに追加されたりしなかったことを確認します（campaigns）
      1. lead gen フォームで収集されたコメントが webform フィールドにキャプチャされたことを確認します
      1. MQL がトリガーされたことを確認します
      1. Sales Alert が送信されたことを確認します

### イベント登録を促進するための LinkedIn Lead Gen フォームの追加

LinkedIn Lead Gen フォームは、新しい Marketo プログラムを追加せずにイベント登録を促進するために使用できます。

1) 上記の手順に従って LI Lead Gen フォームを作成します。回答が標準の LI フォーム処理ではなくイベント登録処理のみを流れるように、必ず行わなければならない変更がいくつかあります。
2) ABM LI Lead Gen フォームについては、イベント登録の促進には命名規則 `abmkey_region_gtm` を使用します。標準（非イベント）フォーマットは `abmkey_gtm_region` です。`region` と `gtm` の順序を変更することで、メインの LI Lead Gen フォーム処理に除外を追加する必要がなくなります。
3) Digital Marketing フォームについては、フォーム名に `gtm` を使用しないでください。イベントを表すユニークな名前を使用します。
4) Marketo で、プロモーションしているイベントの Marketo プログラムに移動します。
5) ほとんどのイベントでは、LinkedIn からの回答に対して waitlist をセットアップすることを推奨します。これにより、イベント DRI が登録を承認できます。waitlist 処理 Campaign がすでにプログラムで活性化されている場合は、ステップ 6 にスキップできます。
     a) WAITLIST 処理がアクティブでない場合にのみこれを行ってください: `Registration` 処理 Campaign のみがアクティブな場合は、LI 回答用に waitlist を活性化する必要があります。`Waitlist` をクリックし、"Filled out form" トリガーを **削除** します。次に、ステップ 6 のタスクを完了し、`Waitlist` Campaign を活性化します。また、"Waitlist to Registered" Campaign も活性化する必要があります。
6) "Fills out LinkedIn Lead Gen Form" のトリガーを追加します。Lead Gen Form Name: `contains`（ここにステップ 1 で作成した Lead Gen フォーム名を入力）。このイベントに複数のフォームがある場合は、`contains` の後のボックスで緑色のプラス記号をクリックして複数のフォームを追加できます。
7) フォームが AMER の回答のみをターゲットとしている場合は、「Flow」ステップをクリックし、一番下に「Change Data Value」を追加します。Add Choice。LinkedIn Lead Gen Form name が `contains`（LI lead gen フォームの名前）。Attribute: Opt-in、New value: True
8) 更新をテストします。何を確認すべきかの詳細は [Marketo プログラムのセットアップをテストする](/handbook/marketing/marketing-operations/campaigns-and-programs/#test-your-marketo-program-setup) で確認できます - 人が waitlist に追加されると、自動応答は受け取りませんが、プログラムに追加されたのが見えます。
9) 質問がある場合や、セットアップを確認してもらいたい場合は、Campaign を本番稼働させる前に Marketing Ops に連絡してください。

## Accelevents 用の Marketo プログラムのセットアップ手順

1. [Accelevents ハンドブックページ](/handbook/marketing/marketing-operations/accelevents/)の手順を使用して、Accelevents でイベントを作成します。
1. Accelevents を通じてテスト登録を送信します。これにより Marketo にプログラムが作成されます。MARKETO でプログラムの名前を変更しないでください。同期が壊れます。
1. すべての Accelevents プログラムは [Program_Events フォルダー](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/MF29385A1)に作成されます。プログラム（ランディングページをセットアップしたときに使用した URL で名付けられます）を見つけてクリックします。
1. プログラムの Summary ページで、`Salesforce Campaign Sync` を選択し、「Create New」を選択します。これにより salesforce.com キャンペーンが作成されます。後でこれに戻って更新します。
1. 以下の Marketo トークンを完了します。各トークンに何を入力するかの手順はプログラムに含まれています。
     - 「event」という単語を含むすべてのトークン（例: {{my.event name}}）。「Interesting Moments」スマートキャンペーンがトークンに基づいて情報を Salesforce にプッシュするため、すべてのイベント詳細関連トークンを完了することが重要です。Campaign によっては、一部の自動応答メールやメールもトークンに依存します。Event Location のトークンは、In-Person イベントでは City を、virtual events では Virtually を入力する必要があります。
     - {{my.epic link}} - これは GitLab epic または Asana プロジェクトへのリンクであることができます
     - {{my.landingpageURL}}
     - {{my.utm}} - utm_campaign 値を入力します（残りの utm はそのままにします）。[UTM Generator](/handbook/marketing/utm-strategy/#how-to-create-utms) を使用して Campaign UTM を作成できます。
     - {{my.reply email}}
     - プログラムが Action Streams の対象となる場合（現在は Security のみで利用可能）は、ここで関連タイプで {{my.Action Stream}} トークンを更新してください。
1. 処理 Campaign とメールをプログラムにクローンします。
     - [テンプレート](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/ME24226A1)をクリックして、ドロップダウンを展開します。
     - 適切な処理 Campaign を選択し、右クリックして Clone を選択します。ポップアップで以下を選択します: Clone to: Programs、Program: Accelevents が作成したプログラム（上記でトークンを追加したもの）を選択、Name: 01 Processing。Clone をクリックします。
     - Invitation Email を選択し、右クリックして Clone を選択します。ポップアップで、Clone to: Different program、Name: Invite Email 1、Program: Accelevents が作成したプログラム（上記でトークンを追加したもの）を選択。Create をクリックします。
     - Target List を選択し、右クリックして Clone Smart List を選択します。ポップアップで、Clone to Marketing Activities、Program: Accelevents が作成したプログラム（上記でトークンを追加したもの）を選択、Name: Target List。Clone をクリックします。
1. Accelevents が作成した新しいプログラムに戻ります。
1. 01 Processing をクリックします
1. Smart List で、両方のフィルターでプログラム名を Marketo プログラムの名前に変更します。これは正確に一致する必要があります（ドロップダウンから選択できます）。
1. Flow で、Acquisition program NEW VALUE を Marketo プログラムの名前に変更します。
1. Schedule で、`Activate` をクリックします。このプログラムのセットアップについて質問がある場合は、MOps に連絡してレビューしてもらってください。
1. セットアップを完了するために、[SFDC Campaign セクション](/handbook/marketing/marketing-operations/campaigns-and-programs/#sfdc-campaign-instructions)の手順に従ってください。

## ラッフル

ラッフルはさまざまな Campaign タイプに関連付けることができ、参加方法もさまざまです。ラッフルを開始する前に、[法的要件](/handbook/legal/marketing-collaboration/#engaging-legal-for-approval)を完了する必要があります。

一般的に、ラッフルには [YYYYMMDD_SurveyName](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG6402A1) Marketo プログラムと Survey Campaign タイプが使用されます。ラッフルのセットアップは複雑になる可能性があるため、以下の手順を使用する場合でも Marketing Ops が関与する必要があります。プログラムを作成し、追加のセットアップやレビューのために Marketing Ops に関与してもらうには、これらの手順を使用してください。

### ラッフルのために Smart List、Flow、Token を更新する

- [YYYYMMDD_SurveyName](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG6402A1) をクローンします
- 以下の構文を使用してプログラムに名前を付けます: `YYYYMMDD_NameofProgram_Raffle`。おそらく別の Campaign タイプも関連付けられており（例えばカンファレンス）、このプログラムはそのイベントのフォルダーに格納すべきです。これはカンファレンスに関連付けられたスピーキングセッションを作成するのと同様のプロセスです。
- Marketo のプログラムメイン画面で、Salesforce Sync が "not set" となっている箇所の "not set" をクリックして SFDC に同期し、「Create New」をクリックします。プログラムが自動的に Campaign タグを入力するため、`Save` をクリックする以外は何も編集する必要はありません。
  - Allocadia のユーザーの場合は、`Description` フィールドに Allocadia raffle line item ID を追加する必要があります。`Save` をクリックします。
- [SFDC キャンペーンを更新](/handbook/marketing/marketing-operations/campaigns-and-programs/#step-4-update-the-salesforce-campaign)し、該当する場合は [parent campaign](/handbook/marketing/marketing-operations/campaigns-and-programs/#parentchild-campaigns-setup) に関連付けます。
  - Allocadia のユーザーの場合は、[こちら](/handbook/marketing/marketing-operations/campaigns-and-programs/#step-8-update-the-salesforce-campaign---using-allocadia)の手順を参照してください。
- Marketo プログラムに戻り、トークンを完了します。{{my.Survey Name}} トークンを「Default」という単語で更新します - このトークンに別のエントリを使用しないでください。
- ランディングページを使用している場合: [Registration ページ](/handbook/marketing/demand-generation/campaigns/landing-pages/#general-marketo-landing-page-creation-instructions)、thank you ページ、登録確認メールを更新します。
- ランディングページを使用している場合: `01a Registration Flow` をクリックし、Smart List を "Form Name is any" に変更します。"Web page is" は、このプログラムの登録ページですでに入力されているはずです。Flow はすでに入力されているはずですが、Step 5 - Interesting Moment を更新して、Step 5 の `Description` フィールドに "Filled out form to enter raffle {{my.Survey Title}}" と読むようにします。`Schedule` に移動して「Activate」をクリックします。
- フォームへの回答者は、`Filled out Survey` としてプログラムと SFDC キャンペーンに追加され、[scoring model](/handbook/marketing/marketing-operations/marketo/#behavior-scoring) の `Survey - Low` エントリに従ってスコアリングされます。
- ラッフルのセットアップは複雑になる可能性があるため、Marketing Ops が関与する必要があります。セットアップの支援のために、`Marketo LP and Automation` Issue に `MktgOps::00:Triage` と `MktgOps-Support` のラベルを追加できます。
- ランディングページを使用していない場合は、MarketingOps がこの Campaign の正しい処理を決定する支援をします。

## Marketo プログラムから Owned Event のメンバーステータスを更新する

`Owned Event`（リードを収集した GitLab 運営のランディングページを含むもの）が完了すると、DRI は[リードリストアップロード](/handbook/marketing/marketing-operations/automated-list-import/)を送信する代わりに、Marketo から直接メンバーステータスを更新できます。**注意:** これはステータス変更 **のみ** に対するものです。リードにメモを追加する場合は、[リードリストアップロード](/handbook/marketing/marketing-operations/automated-list-import/)を送信する必要があります。

1. Marketo にログインし、Campaign の適切なプログラムをクリックします
1. ページ上部の `Members` タブをクリックします
1. ステータス変更が必要なメンバーの行項目をクリックします
1. 画面上部の `Change Status` を選択します
1. ドロップダウンで適切なステータス（`Attended`、`Follow up Requested`、`No Show` など）を選択します
1. Marketo がステータスを調整するのに少し時間がかかり、その後ステータスが更新されます

## Marketo プログラムから登録を削除する

Campaign 用にランディングページがセットアップされたら、すべてが統合され適切に実行されていることを確認するために、複数の人に登録をテストしてもらうことが良いプラクティスです。その結果、Marketo プログラムにはさまざまなテスト登録が含まれることがよくあります。これらのテスト登録を削除するには、以下の手順に従ってください。

1. Marketo にログインし、Campaign の適切なプログラムをクリックします
1. ページ上部の `Members` タブをクリックします
1. 削除したいメンバーの行項目をクリックし、その行項目がハイライトされていることを確認します
1. 画面上部の `Change Status` を選択します
1. ドロップダウンで `Not in Program` を選択します
1. Marketo がステータスを調整するのに少し時間がかかり、その後名前が `Members` リストから削除されます

### Marketo プログラムと Zoom から SPAM を削除する

時折、SPAM ボットが私たちのウェブキャスト登録を攻撃します。Marketo と SFDC から削除するには、これらのステップに従ってください。完了するには Mops と Issue を開く必要があります。Issue リクエストに Marketo プログラムのリンクとイベントの日付を含めてください。SPAM 登録者は zoom からは削除されず、手動で削除する必要があります。ただし、Campaign の数値に影響しないため、zoom Campaign に残しておいても問題ありません。

1. Marketo でプログラムを見つけます
1. SPAM を分離し、新しく作成した静的リストに追加します。
1. 静的リストで `Select All` を行い、プログラムから SPAM を削除します。次に右クリックして Marketing > Change Program Status を選択します。Campaign を選択し、ステータスを `Not in Program` に更新します。これにより Salesforce.com キャンペーンからも削除されます
1. 静的リストに移動します。すべてをハイライトして `Delete Person` を行います
1. ポップアップに同意し、SFDC からも削除します。

プログラム終了後、Marketo プログラムに SPAM がないかダブルチェックしてください。（登録フィルターから除外されたものの）登録した人々は、フォームがそのプログラムの一部であるため、`No Action` としてプログラムに追加されます。上記の手順を再実行して、それらをすべての Campaign 統計から完全に削除してください。

## メール送信のキャンセル

メールが送信されるように設定されているものの、キャンセルする必要がある場合があります。プログラムのタイプに基づいて、これを行う方法がいくつかあります。

### Smart Campaign - Scheduled Send

1. スマートキャンペーン > schedule に移動し、送信の日付と時刻の横にある赤い `x` をクリックすることで、特定の実行をキャンセルできます。
1. 実行全体をキャンセルするには、スマートキャンペーン > schedule > campaign actions > `Abort Campaign` に移動します。
   - 中止した後でも送信を再スケジュールできます

Marketo ドキュメント:

- [Campaign 実行の停止](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/smart-campaigns/using-smart-campaigns/cancel-a-scheduled-batch-campaign-run.html?lang=en)
- [Campaign の中止](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/smart-campaigns/using-smart-campaigns/abort-a-smart-campaign.html?lang=en)

### Smart Campaign - Triggered Send

1. Campaign がトリガーベースで実行されている場合は、スマートキャンペーン > schedule に移動し、`deactivate` ボタンをクリックすべきです。これにより、リードが Campaign から再度資格を得るのを停止します。
1. Campaign が複数のフローステップを実行している場合、リードがフローを継続するのを止めるには、スマートキャンペーン > schedule > campaign actions > `Abort Campaign` に移動する必要があります。これにより、リードがフローを継続するのを停止し、それ以上のメールが送信されるのを停止します。

Marketo ドキュメント:

- [スマートキャンペーンの無効化](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/smart-campaigns/using-smart-campaigns/deactivate-a-trigger-smart-campaign-schedule-tab.html?lang=en)
- [スマートキャンペーンの中止](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/smart-campaigns/using-smart-campaigns/abort-a-smart-campaign.html?lang=en)

### Email Batch Campaign

このプログラムタイプにはメールボックスのアイコンがあります。

1. Campaign がスケジュールされているが、まだ送信されていない場合。メインプログラム（メールボックス）をクリックし、コントロールパネルを表示します。4 つのボックスが表示されます。右下のボックスで `unapprove` をクリックすると、メールは送信されません。再スケジュールする準備ができたら、日付と時刻を更新し、右下のボックスで `approve` をクリックします。すべてのボックスに緑色のチェックマークが付き、送信準備ができたことを示します。
1. Campaign がアクティブに送信中で、それを停止したい場合は、メインプログラム（メールボックス）をクリックし、右下のボックスで `Abort Program` をクリックします。これにより、メールの送信が停止しますが、すでに送信されたメールをリコールすることはありません。送信した数は `dashboard` ビューで確認できます。メールプログラムが中止されると、再度スケジュールすることはできません。

スクリーンショットと詳細なドキュメントは、こちらの Marketo から確認できます:

- [メールプログラムの中止](https://experienceleague.adobe.com/docs/marketo/using/product-docs/email-marketing/email-programs/email-program-actions/abort-email-program.html?lang=en)
- [メールプログラムの未承認](https://experienceleague.adobe.com/docs/marketo/using/product-docs/email-marketing/email-programs/email-program-actions/approve-unapprove-an-email-program.html?lang=en)

### 手順: 5,000 名を超える参加者がいる Conference を更新する方法

5,000 名を超える参加者がいるカンファレンスのリストロードでは、それらを `success` としてマークしないことを検討してください。担当の `Field Marketing Director` がこれらのメンバーを `success` としてマークしないことに同意した場合、それが起こらないようにするためのステップは以下のとおりです。**これは MktgOps チームのメンバーのみが行えます！**

1. Marketo を開き、Admin>Tags>Channel>Conference に移動します
1. `Attended` の `Success` ボックスのチェックを外して保存します
1. attended メンバーのリストをロードします
1. リストの処理が完了し、Campaign メンバーが追加されたら、Admin>Tags>Channel>Conference に戻り、`Attended` の `Success` ボックスを再度チェックします

## 手順: イベント登録で食事制限を収集し、回答を表示する方法

1. owned event（Field Marketing）については、`FORM 4286: Owned event with Dietary Restriction` を LP に追加します。このデータを収集する他のフォームもある点に注意してください。例えば DevSecOps World Tour フォームです。使用するフォームがわからない場合は MOps に確認してください。
1. Registration Processing SC で `FORM 4286` を探すように Smart Campaign を更新します。
1. フォームからの回答を探すために smartlist を作成します。プログラムから「New」、「New local asset」、「Smart List」の順にクリックします。smart list に「Dietary Requirements」と名前を付けます。フィルター `Member of Program`（プログラム名）と `Dietary Restriction Details`（is not empty）を追加します。
1. 次に、詳細を表示するために Marketo で[カスタムビューを作成](https://experienceleague.adobe.com/en/docs/marketo/using/product-docs/core-marketo-concepts/smart-lists-and-static-lists/using-smart-lists/create-and-change-views-for-lists-and-smart-list)する必要があります。ビューを作成すると、常にドロップダウンで選択できるようになります。
1. 作成した `Dietary Requirements` smart list をクリックし、People タブに移動します。
1. `View: Default` と表示されている箇所をクリックします
1. Create View を選択します
1. ビューに Dietary Restrictions と名前を付け、hidden columns で `Dietary Restriction Detail` と `Dietary Restrictions: Other` を選択します
1. Create をクリックします
1. Marketo レポートで Physical Accommodation リクエストを表示する必要がある場合も、上記と同じ手順に従える点に注意してください。これのフィールドは `Physical Assistance Needs` と `Physical Assistance Detail` です。

作成したビューは今後の使用のために保存されるため、将来この特定のビューを表示する必要があるときはいつでも、View: Default をクリックしてドロップダウンから「Dietary Restrictions」を選択します（リストはあなた固有のものなので、他の人とは異なるオプションになります）。プライバシー要件のため、この情報を SFDC にプッシュしていませんが、イベントの 7 日後まで Marketo で確認できます。食事制限フィールドは、リードリストがロードされてから 7 日後に自動的にクリアされます。

## Sales Play Salesforce Campaign のセットアップ手順

1. Campaigns タブに移動します

   1. Campaigns が表示されない場合は、+ を選択してすべてのタブを表示し、Campaigns をクリックします

2. New ボタンをクリックして新しい Campaign を作成します。このフレームワークを使用して、Campaign に名前を付けます: `FYXX_QX_Sales Play_NameofSalesPlay`
  
   1. 例: FY25_Q1_Sales Play_Dedicated & Compliance Play

3. `Active` をチェックします
4. Type = `Prospecting`
5. Type Detail = `Acceleration`
6. 適切な `GTM Motion` を選択します
7. `Description` を更新します
8. 関連する Issue または epic を `Event Epic` に追加します
9. `Status` を適切に更新します
10. `Start Date` と `End Date` を追加します
11. `Region` と `Sub-region` を更新します
12. Campaign の `Budgeted Cost` を更新します（必須フィールド）
