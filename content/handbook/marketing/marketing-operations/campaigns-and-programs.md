---
title: "キャンペーンとプログラム"
description: "キャンペーンはマーケティング施策の取り組みを追跡するために使用されます"
upstream_path: /handbook/marketing/marketing-operations/campaigns-and-programs/
upstream_sha: "7f50ef5c825dfb207a7a1e42224bbd3d77dc35cc"
lastmod: 2026-05-14T15:08:50-06:00
translated_at: "2026-05-27T00:00:00Z"
translator: claude
stale: false
---

## キャンペーン {#campaigns}

キャンペーンは、フィールドイベント、ウェブキャスト、コンテンツダウンロードといったマーケティング施策の取り組みを追跡するために使用されます。キャンペーンタイプは、マーケティングが支出を追跡する方法と整合しており、一貫した追跡のために、私たちの中核となる 3 つのシステム（Marketo、Salesforce、Bizible）でレコードを追跡する方法を揃えています。キャンペーンを活用することで、Marketing、Sales、Finance にまたがって私たちの取り組みを整合させます。

Marketing Ops は、Field Marketing チームおよび Corporate Events チームと連携して、Marketo プログラムのセットアップと構成を提供します。これらのチームに対して、目標達成のための最適な技術的セットアップを助言し、より複雑なプログラム要件を効率化する社内パートナーを提供します。詳細については [Marketo プログラム/キャンペーンサポートのページ](/handbook/marketing/marketing-operations/campaign-operations/)を参照してください。

下記の表における「リストインポートに使用可能（Valid for List Import）」は、その特定のステータスが[セルフサービスのリストインポート](/handbook/marketing/marketing-operations/automated-list-import/)で使用できるかどうかを示します。ごくまれに、MOps への相談が必要となる特別な考慮事項があるイベントがあり、それらは表内でフラグが立てられています。

### キャンペーンコストの追跡 {#campaign-cost-tracking}

マーケティングがキャンペーンコストをどのように追跡するかについては、[このページ](/handbook/marketing/marketing-team-processes/#how-marketing-tracks-campaign-expenses)を参照してください。

### キャンペーンタイプと進行ステータス {#campaign-type--progression-status}

レコードは一連のイベントステータスを **一方向にのみ** 進行できます。レコードはステータスを逆方向に移動 _できません_。

例: `Registered` に設定されたレコードは、`Waitlisted` に逆戻りできません。

#### Conference {#conference}

スポンサーとして費用を支払い、ブース/プレゼンスを持ち、GitLab から代表者を派遣するイベント全般（例: AWS re:Invent、DevOps Enterprise Summit）。これには、登録を私たちが所有しないものの参加者リストやエンゲージメントを生成する、スポンサーおよび/または参加するバーチャルイベントも含まれます。

バーチャルカンファレンスでは、GitLab はバーチャルブースを受け取るためにスポンサー料を支払い、時には講演セッションの枠やパネルへの参加権を得ます。成功基準により、バーチャルブースの存在は要件となっています。[詳細はこちら](/handbook/marketing/virtual-events/external-virtual-events/#virtual-conferences)。

`attendees` が 5,000 件を超えるリストロードの場合、プログラムメンバーを `success` とラベル付けすることの妥当性について、Mktgops は `Field Marketing Director` と協議する必要があります。これは `Bizible Touchpoints` に影響するためです。実施方法については[こちらの手順](/handbook/marketing/marketing-operations/campaigns-and-programs/#instructions-how-to-update-conferences-with-more-than-5000-attendees)に従ってください（MktgOps のみ）。

**Bizible:** これは _offline_ チャネルとして追跡されます。私たちは登録ページをホストせず、イベント後にブース来訪者のリストを受け取るためです。offline チャネルのタッチポイントは、AMM（旧称 Bizible）のキャンペーン同期ルールによって作成されます。同期ルールはこの[スプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)にあります。

| Member Status | 定義 | Success | リストインポートに使用可能 |
| ------------- | ---------- | ------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  | No |
| Sales Invited | Sales/SDR がイベントに関する招待/情報を送信 |  | No |
| Sales Nominated | Sales が、Marketing 送信のトリガーイベントメールを受け取るレコードを指定 |  | No |
| Marketing Invited | Marketing のジオターゲットメール |  | No |
| Waitlisted| 登録が満員の場合の保留状態。空きが出れば Registered に移動する| | No |
| Registered | イベントに登録済み|| No（特別な条件は MOps に確認） |
| No Show | 登録済みだが参加の確認が取れず、欠席と推定 | | Yes |
| Meeting Requested | カンファレンスで実施予定のミーティングを設定 |  | No（特別な条件は MOps に確認） |
| Meeting No Show | カンファレンスで予定されたミーティングがキャンセルまたは不参加 |  | Yes |
| Meeting Attended | カンファレンスで予定されたミーティングに参加 | Yes | Yes |
| Attended| イベントに参加したが、ブースでエンゲージしなかった、または展示会場の講演セッションに参加 | Yes | Yes |
| Visited Booth | 何らかの理由でブースに立ち寄った（最も一般的なカンファレンスステータス） | Yes | Yes |
| Follow Up Requested | イベント後に Sales によるフォローアップを要求 | Yes | Yes |
| Attended On-Demand | イベント後にオンデマンドでカンファレンス資料を視聴/消費 | Yes| Yes |

#### Content Syndication {#content-syndication}

第三者がホストするホワイトペーパーまたはその他のコンテンツオファー。

**Bizible:** これは _offline_ チャネルとして追跡されます。offline チャネルのタッチポイントは、AMM（旧称 Bizible）のキャンペーン同期ルールによって作成されます。同期ルールはこの[スプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)にあります。

| Member Status | 定義 | Success | リストインポートに使用可能 |
| ------------- | ---------- | ------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  | No |
| Downloaded | コンテンツをダウンロード | Yes | Yes |

#### Direct Mail {#direct-mail}

パッケージまたは郵便物が送付される場合に使用します。現在の手順では Brilliant Gifts と Qualified の使用が必要です。配送プログラムのステータスとアラートを利用するには、Marketing チームメンバーが Brilliant のインターフェース経由で受信者にオーダーフォームのメールを送信し、Marketo または SFDC のいずれかでプログラムステータスを手動で変更する必要があります。受信者にギフトを選択するオプションを与える場合は、Brilliant 内の `Send a Gift -> Campaign or Quick Send` を使用します。ギフトを Marketing または Sales チームが選択する場合は、`Send a Gift -> Surprise Send` を利用します。`Meeting Booked` ステータスは Qualified 経由で更新され、`Meeting Attended` はミーティング成立後に Sales または Marketing が手動で更新する必要があります。`Meeting No Show` は Qualified の自動メール経由で Sales/Sales Dev が更新します。

**Bizible:** これは _offline_ チャネルとして追跡されます。offline チャネルのタッチポイントは、AMM（旧称 Bizible）のキャンペーン同期ルールによって作成されます。同期ルールはこの[スプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)にあります。

| Member Status | 定義 | Success | ギフトの webhook をトリガーするか?|
| ------------- | ---------- | ------- | ------------ |
| No Action | すべてのレコードのデフォルトの開始位置 |  |  |
| Nominated | リードがこのステータスでプログラムに追加され、ミーティング招待を受け取ることを示す |  |  |
| Invite Sent | ミーティングのメール招待が送信されたことを示す |  |  |
| Email Opened | 現在このプログラムタイプ内では使用されていない | | |
| Gift Accepted | 受信者がギフトリクエストフォームに入力 | | |
| Gift Ordered | ギフトが Brilliant で手動注文され、Sales に知らせるためプログラムステータスが手動変更された | | |
| Gift Shipped | ギフトが発送され、Sales に知らせるためプログラムステータスが手動変更された | | |
| Gift Delivered | ギフトが配達され、Sales に知らせるためプログラムステータスが手動変更された | | |
| Meeting Booked | ミーティング招待の受信者が Qualified 経由でミーティングを予約した | Yes | |
| Meeting Attended | 受信者が予定されたミーティングに No Show とラベル付けされなかった | Yes | Yes |
|Cancelled | 予定されたミーティングの前に本人がキャンセルした  | | |
| No Show | Sales Dev が Qualified の自動メール経由でミーティングが行われなかったことを示した  | | |

#### Email Send {#email-send}

このプログラムタイプは Marketo メールプログラムと併用されます。このプログラムタイプは SFDC への同期が可能ですが、SFDC に同期すべきなのは、対象のメール送信が関連する商談の追跡を必要とする重要なビジネスインパクトを持つ場合のみです。一部のメールアドレスは Marketo の追跡をブロックするため、これらは 100% 正確ではありえない点に留意してください。

**Bizible:** これは厳密には _online_ チャネルでも _offline_ チャネルでもなく追跡されます。タッチポイントは厳密にはプログラムタイプ自体によって作成されるのではなく、メール受信者がメール内リンクをクリックし、タッチポイント対応のウェブサイトを訪問する行動によって作成されます。

| Member Status | 定義 | Success |
| ------------- | ---------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  |
| Member | プログラムに追加済み。メール送信後もこのステータスのままの場合、メールの送信がブロックされたと推定できる |  |
| Email Bounced | Marketo のメール追跡が、受信者のメールアドレスでバウンスを検出した   |  |
| Email Delivered | Marketo のメール追跡が、受信者のメールアドレスが送信メールを受信したことを検出した |  |
| Email Opened | Marketo のメール追跡が、受信者がメールを開封したことを検出した |  |
| Clicked In-Email Link | Marketo のメール追跡が、受信者がメール内のリンクを開いたことを検出した | Yes |
| Replied to Email | メールへの返信を促していないため、おそらく使用されないステップ |  |
| Unsubscribed | Marketo のメール追跡が、受信者がメール内の設定リンク経由で今後の連絡を配信停止したことを検出した |  |

#### Executive Roundtables {#executive-roundtables}

第三者ベンダーまたは GitLab のいずれかが企画でき、対面とバーチャルの両方のラウンドテーブルを対象とするキャンペーンに使用します。これは、モデレーター/ホスト、GitLab のエキスパート、参加者の間でオープンディスカッションとして運営される、ハイレベルな CxO 参加者の集まりです。通常プレゼンテーションはなく、代わりに誰もが発言に加われるディスカッション形式です。ホストはディスカッショントピックを主導する質問を準備し、参加者に順番に質問して回答してもらいます。[詳細はこちら](/handbook/marketing/virtual-events/external-virtual-events/#overview)。

このプログラムタイプは、`dietary restriction`（食事制限）関連のフィールドをクリアするためのスマートキャンペーンに含まれています。イベントのプログラムステータスが記録されてから 7 日後に、フィールドは自動的にクリアされます。

**Bizible:** これは _offline_ チャネルとして追跡されます。offline チャネルのタッチポイントは、AMM（旧称 Bizible）のキャンペーン同期ルールによって作成されます。同期ルールはこの[スプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)にあります。

| Member Status | 定義 | Success | リストインポートに使用可能 |
| ------------- | ---------- | ------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  | No |
| Sales Nominated | Sales が、Marketing 送信のトリガーイベントメールを受け取るレコードを指定 |  | No |
| Waitlisted | 登録が満員の場合の保留状態。空きが出れば `Registered` に移動する |  | No |
| Registered | イベントに登録済み |  | No（特別な条件は MOps に確認） |
| Cancelled | 登録済みだが、イベント前にキャンセル | | No |
| No Show | 登録済みだが、イベントに参加しなかった |  | Yes |
| Attended | イベントに参加 | Yes | Yes |
| Follow Up Requested | イベント中にフォローアップを要求 | Yes | Yes |

#### Gated Content {#gated-content}

ホワイトペーパーまたはその他のコンテンツオファー。

**Bizible:** これは _online_ チャネルとして追跡されます。

| Member Status | 定義 | Success |
| ------------- | ---------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  |
| Downloaded | コンテンツをダウンロード | Yes |

#### Inbound - offline {#inbound---offline}

**Bizible:** これは _offline_ チャネルとして追跡されます。タッチポイントを Qualified や PQL のハンドレイズなど、オンラインの手段で直接適用できないためです。offline チャネルのタッチポイントは、AMM（旧称 Bizible）のキャンペーン同期ルールによって作成されます。同期ルールはこの[スプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)にあります。

| Member Status | 定義 | Success |
| ------------- | ---------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  |
| Requested Support | GitLab チームにサポートを要求するハンドレイズアクションを行った ||
| Requested Contact | Contact、Professional Services、Demo、または Pricing Request に入力した | Yes |

#### Inbound Request {#inbound-request}

フォローアップが必要なあらゆる種類のインバウンドリクエスト。

**Bizible:** これは _online_ チャネルとして追跡されます。

| Member Status | 定義 | Success |
| ------------- | ---------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  |
| Requested Support | GitLab チームにサポートを要求するハンドレイズアクションを行った ||
| Waitlisted | 将来の SKU を購入するリクエストを送信した  ||
| Requested Contact | Contact、Professional Services、Demo、または Pricing Request に入力した | Yes |

#### Live Event {#live-event}

このイベントタイプは `Owned Event` と同様に機能しますが、対面イベントプラットフォームの Accelevents でのみ使用されるという点が異なります。Accelevents が製品を拡張するにつれて、より多くのステータスが含まれるようになります。これは、私たちが作成し、登録を所有し、スピーカー/会場を手配するイベントです（例: GitLab Commit や Meetups）。このグループに含まれると見なされるものには、カンファレンスのスポンサーシップに追加される第三者の付随イベント（例: カンファレンスでのハッピーアワーや VIP ディナー）もあります。

**Bizible:** これは _online_ チャネルおよび _offline_ チャネルとして追跡されます。私たちが自社ウェブサイトを通じて登録プロセスを管理しているためです。誰かが登録するたびに、そのオンラインアクティビティに基づいて TP が作成され、別の TP が success ステータスを持つキャンペーンメンバーに対してキャンペーン同期ルールに基づいて追加されます。

| Member Status | 定義 | Success | リストインポートに使用可能 |
| ------------- | ---------- | ------- | ------- |
| Invited | Sales/SDR がイベントに関する招待/情報を送信 |  | No |
|Pending|承認のための保留ステータス||No|
| Waitlisted | 登録が満員の場合の保留状態。空きが出れば `Registered` に移動する |  | No |
| Denied | ユーザーがイベントに承認されなかった | | No |
| Approved | ユーザーがイベントに承認されたが、Registered よりこれが使用されることはまずない| | No |
| Registered | イベントに登録済み |  | Yes |
| No Show | 登録済みだがイベントに参加しなかった |  | Yes |
| Attended | イベントにライブで参加 | Yes | Yes |
| Canceled| 本人がイベント前に登録をキャンセルした| | No |
| Refunded | 本人がイベント前にイベント関連の支払いを返金された| |  No |

#### Operational {#operational}

a) アップロードしたリードのスコアリングを回避する、b) 通常のナーチャリングメールを回避する、c) その他のさまざまな運用関連タスクを遂行する、といった目的の非伝統的なリストアップロードに使用します。例: 教育カンファレンスのリストアップロード。

**Bizible:** 該当する場合、私たちがイベントに参加したため、これは _online_ チャネルとして追跡されます。

| Member Status | 定義 | Success | リストインポートに使用可能 |
| ------------- | ---------- | ------- | ------- |
| Member | すべてのレコードのデフォルトの開始位置 |  | MOps のみ |
| Registered | 登録済み（おそらく参加していない） |  | MOps のみ |
| Attended | ライブイベントに参加 |  Yes | MOps のみ |
| Attended Virtually | イベントにバーチャルで参加。参加はライブまたはイベント後のいずれでもよい | Yes | MOps のみ |

#### Owned Event {#owned-event}

これは、私たちが作成し、登録を所有し、スピーカー/会場を手配するイベントです（例: GitLab Commit や Meetups）。このグループに含まれると見なされるものには、カンファレンスのスポンサーシップに追加される第三者の付随イベント（例: カンファレンスでのハッピーアワーや VIP ディナー）もあります。

**Bizible:** これは _online_ チャネルおよび _offline_ チャネルとして追跡されます。私たちが自社ウェブサイトを通じて登録プロセスを管理しているためです。誰かが登録するたびに、そのオンラインアクティビティに基づいて TP が作成され、別の TP が success ステータスを持つキャンペーンメンバーに対してキャンペーン同期ルールに基づいて追加されます。

このプログラムタイプは、`dietary restriction`（食事制限）関連のフィールドをクリアするためのスマートキャンペーンに含まれています。イベントのプログラムステータスが記録されてから 7 日後に、フィールドは自動的にクリアされます。

| Member Status | 定義 | Success | リストインポートに使用可能 |
| ------------- | ---------- | ------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  | No |
| Subscribed to Updates | フォーム入力経由で GitLab イベントの更新情報を購読 |  | No |
| Sales Invited | Sales/SDR がイベントに関する招待/情報を送信 |  | No |
| Sales Nominated | Sales が、Marketing 送信のトリガーイベントメールを受け取るレコードを指定 |  | No |
| Marketing Invited | Marketing のジオターゲットメール |  | No |
| Declined Invitation | 受信者がイベント招待を辞退 | | No |
| Waitlisted | 参加人数制限のあるイベントの保留状態。空きが出れば `Registered` に、出なければ `Declined` に移動する |  | No |
| Declined | 空きがない場合のステータス | | No |
| Registered | イベントに登録済み |  | No（特別な条件は MOps に確認） |
| Cancelled | 登録済みだが、イベント前にキャンセル |  | No |
| No Show | 登録済みだがイベントに参加しなかった |  | Yes |
| Attended | イベントにライブで参加| Yes | Yes |
| Attended On-demand| イベント後にオンデマンドでプレゼンテーション資料を視聴/消費| Yes | Yes |
| Follow Up Requested | イベント後に GitLab に関する追加詳細の送付を要求 | Yes | Yes |

#### Paid Social {#paid-social}

**Bizible:** このプログラムは、ソーシャル関連のキャンペーン（例: LinkedIn キャンペーン）によって獲得したリードとプログラムを収容するために指定されており、_offline_ チャネルとして追跡されます。offline チャネルのタッチポイントは、AMM（旧称 Bizible）のキャンペーン同期ルールによって作成されます。同期ルールはこの[スプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)にあります。

| Member Status | 定義 | Success |
| ------------- | ---------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  |
| Responded | フォーム入力など、ソーシャルキャンペーンに関連するアクションを行った  | Yes |

#### Partner - MDF {#partner---mdf}

これは、Channel Partner が MDF 資金を活用して実行するアクティビティ用です。私たちはメンバーシップを追跡しますが、これらのリードのフォローアップは GitLab ではなくパートナーが行います。詳細は[こちら](/handbook/marketing/marketing-operations/campaigns-and-programs/#partner---mdf)を参照してください。

**Bizible:** これは _offline_ チャネルとして追跡されます。offline チャネルのタッチポイントは、AMM（旧称 Bizible）のキャンペーン同期ルールによって作成されます。同期ルールはこの[スプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)にあります。

| Member Status | 定義 | Success | リストアップロードに使用可能 |
| ------------- | ---------- | ------- | ------- |
| Member | すべてのレコードのデフォルトの開始位置 |  | Yes |
| Sales Nominated | リードがこのプログラムに対して sales nominated された場合のステータス |  | No |
| Responded | イベントまたはキャンペーンに参加 |Yes| Yes |

#### Prospecting {#prospecting}

このプログラムタイプは、パートナーリストやデータアップロード中心のリストなど、イベントに関連しないリストアップロードに特化しています。

**Bizible:** これは Bizible では追跡されません。

| Member Status | 定義 | Success | リストアップロードに使用可能 |
| ------------- | ---------- | ------- | ----- |
| No Action | すべてのレコードのデフォルトの開始位置 |  | MOps のみ |
| Uploaded | アップロード成功時にリードが通常移行するステータス |  | MOps のみ |
| Do Not Use (Responded) | 使用しないこと。Marketo が `success` ステップを必要とするため含まれている  | Yes  | No |
| Member | このプログラムタイプ向けの特別なメンバーステータスを示す。「特別」の意味はユースケースに依存する |  | MOps のみ |

#### Speaking Session {#speaking-session}

このキャンペーンタイプは、より大きな Field/Conference/Owned イベントの一部となりえますが、インパクトを測定するために、より大きなイベントとは独立してエンゲージメントのインタラクションを追跡します。登録を促進できるものです。私たちの講演におけるアテンダンスを追跡するためのものです。

**Bizible:** これは _offline_ チャネルとして追跡されます。offline チャネルのタッチポイントは、AMM（旧称 Bizible）のキャンペーン同期ルールによって作成されます。同期ルールはこの[スプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)にあります。

| Member Status | 定義 | Success | リストアップロードに使用可能 |
| ------------- | ---------- | ------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  | No |
| Sales Invited | Sales/SDR がイベントに関する招待/情報を送信 |  | No |
| Sales Nominated | Sales が、Marketing 送信のトリガーイベントメールを受け取るレコードを指定 |  | No |
| Marketing Invited | Marketing のジオターゲットメール |  | No |
| Registered | セッションへの登録または参加を表明 |  | No（特別な条件は MOps に確認） |
| No Show | 登録済みだがイベントに参加しなかった |  | Yes |
| Attended | 講演セッションのイベントに参加 | Yes | Yes |
| Follow Up Requested | スピーカーと会話した、またはイベント後に Sales によるフォローアップを要求 | Yes | Yes |

#### Sponsored Webcast {#sponsored-webcast}

これは外部パートナー/ベンダーのプラットフォームでホストされるウェブキャストです。`Attended On-demand` のステータスは、GitLab がホストするオンデマンドおよび GitLab 以外がホストするオンデマンドのウェブキャストの両方を対象とします。[詳細はこちら](/handbook/marketing/virtual-events/external-virtual-events/#overview)。

**Bizible:** これは、以下で述べる両方のタイプのタッチポイント（TP）について _offline_ チャネルとして追跡されます。

Sponsored Webcasts では、2 つの方法で TP を作成します。

1. **Registration TP**。これは、オンライン登録方式（LP 上の bizible スクリプト）を通じて Owned Events で作成される TP を模倣したものです。ただし、Sponsored Webcasts では LP 登録を私たちが所有していないため、この方式は使用できません。代わりに、Marketo プログラムメンバーシップ方式を通じてこれらの TP を複製しています。

   Marketo プログラムメンバーシップルールは、フォルダ名に「Sponsored Webcasts」を含む Marketo フォルダ内にある Marketo プログラムに収容されたすべてのプログラムメンバーに対して「Registration TP」を作成します。この命名規則に従う限り、これらの TP は自動的に作成されます。これらのタッチポイントのタッチポイント日付は `Program Membership Date` です。

1. **Responded Status TP**。これは、responded ステータスのキャンペーンメンバーのみを対象に、[offline タッチポイント用の AMM チャネル/サブチャネルルール](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit?gid=92970564#gid=92970564)（19 行目のルール）に基づいて作成されます。これらの TP の TP 日付は、関連する SFDC キャンペーンの `Member First Associated Date` です。Sponsored Webcasts キャンペーンタイプのキャンペーンステータスは以下を参照してください。

| Member Status | 定義 | Success | リストアップロードに使用可能 |
| ------------- | ---------- | ------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  | No |
| Sales Nominated | 招待者の追跡のためにマーケティングが使用 | | No |
| Registered | ウェブキャストに登録済み |  | No |
| No Show| 登録済みだがイベントに参加しなかった |  | Yes |
| Attended | イベントに参加 | Yes | Yes |
| Follow Up Requested | GitLab からのフォローアップを要求 | Yes | Yes |
| Attended On-demand | イベント後にオンデマンドでプレゼンテーション資料を視聴/消費 | Yes | Yes |

#### Survey {#survey}

私たちまたは第三者が送信するアンケート。回答者と新たに獲得したリードを追跡します。

**Bizible:** これは _offline_ の Bizible チャネルとして追跡されます。offline チャネルのタッチポイントは、AMM（旧称 Bizible）のキャンペーン同期ルールによって作成されます。同期ルールはこの[スプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)にあります。

| Member Status | 定義 | Success | リストアップロードに使用可能 |
| ------------- | ---------- | ------- | ------- |
| Member | すべてのレコードのデフォルトの開始位置 |  | No |
| Sales Nominated | Sales が、Marketing 送信のトリガーイベントメールを受け取るレコードを指定 |  | No |
| Invited | 招待されたが、アンケートに参加しなかった |  | Yes |
| Filled-out Survey | アンケートに回答 | Yes | Yes |
| Follow Up Requested | アンケートに回答し、Sales からの連絡を要求 | Yes | Yes |

#### Trial {#trial}

各製品ライン（Self-managed または SaaS）のトライアルのコホートを追跡し、その影響を確認します。

**Bizible:** インプロダクトの Self-managed および SaaS トライアルは **offline** の Bizible タッチポイントとして追跡されます。Marketo フォームを利用する Self-managed トライアルは **online** の Bizible タッチポイントです。

| Member Status | 定義 | Success |
| ------------- | ---------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  |
| Signed Up | トライアルにサインアップ | Yes |

#### Vendor Arranged Meetings {#vendor-arranged-meetings}

第三者ベンダーが、見込み顧客または顧客アカウントとの 1 対 1 のミーティングを企画するキャンペーンに使用します。これは GitLab チームメンバーが社内で設定するミーティングを企画するものではありません。例としては、ベンダーが GitLab にとって関心のある見込み顧客とのミーティングを企画する「スピードデート」スタイルのミーティングセットアップが挙げられます。[詳細はこちら](/handbook/marketing/virtual-events/external-virtual-events/#overview)。

**Bizible:** これは _offline_ の Bizible チャネルとして追跡されます。offline チャネルのタッチポイントは、AMM（旧称 Bizible）のキャンペーン同期ルールによって作成されます。同期ルールはこの[スプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)にあります。

このプログラムタイプは、`dietary restriction`（食事制限）関連のフィールドをクリアするためのスマートキャンペーンに含まれています。イベントのプログラムステータスが記録されてから 7 日後に、フィールドは自動的にクリアされます。

| Member Status | 定義 | Success | リストアップロードに使用可能 |
| ------------- | ---------- | ------- | ------ |
| No Action | すべてのレコードのデフォルトの開始位置 |  | No |
| Registered | イベントに登録済み |  | No |
| No Show | 登録済みだが、イベントに参加しなかった |  | Yes |
| Attended | イベントに参加 | Yes | Yes |
| Follow Up Requested | スピーカーと会話した、またはイベント後に追加詳細の送付を要求 | Yes | Yes |

#### Webcast {#webcast}

GitLab がホストし開催するウェブキャスト全般。ウェブキャストを運営するグループはいくつかあります。セットアップの詳細については各グループの専用ページを参照してください。

- [Campaign webcasts](/handbook/marketing/virtual-events/webcasts/#campaign-webcasts)
- [Field Marketing webcasts](/handbook/marketing/field-marketing/field-marketing-owned-virtual-events/#webcasts-1)
- [Goldcast webcasts](/handbook/marketing/marketing-operations/goldcast)

**Bizible:** これは _online_ の Bizible チャネルおよび _offline_ チャネルとして追跡されます。私たちが登録プロセスを所有しているため、誰かがウェブキャストに登録するたびに、ランディングページ上にある Bizible スニペットに基づいて TP が作成され、別の TP が success/responded ステータスを持つキャンペーンメンバーに対して作成されます。

| Member Status | 定義 | Success | リストアップロードに使用可能 |
| ------------- | ---------- | ------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  | No |
| Sales Invited | Sales/SDR がイベントに関する招待/情報を送信 |  | No |
| Sales Nominated | Sales が、Marketing 送信のトリガーイベントメールを受け取るレコードを指定 |  | No |
| Marketing Invited | Marketing のジオターゲットメール |  | No |
| Registered | オンラインフォームを通じて登録済み |  | No（特別な条件は MOps に確認） |
| No Show | 登録済みだが、ライブウェブキャストに参加しなかった |  | Yes |
| Attended | ライブウェブキャストに参加 | Yes | Yes |
| Follow Up Requested | イベント後に Sales によるフォローアップを要求 | Yes | Yes |
| Attended On-demand | 録画されたウェブキャストを視聴 | Yes | Yes |

#### Workshop {#workshop}

参加者が GitLab 内の実際のユースケースのアジェンダに沿ってガイドされる、対面またはバーチャルのワークショップ。

ロジスティクスのセットアップと詳細については[こちら](/handbook/marketing/field-marketing/field-marketing-owned-virtual-events/#virtual-workshops-1)を参照してください。
**Bizible:** これは _offline_ の Bizible チャネルとして追跡されます。offline チャネルのタッチポイントは、AMM（旧称 Bizible）のキャンペーン同期ルールによって作成されます。同期ルールはこの[スプレッドシート](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)にあります。

このプログラムタイプは、`dietary restriction`（食事制限）関連のフィールドをクリアするためのスマートキャンペーンに含まれています。イベントのプログラムステータスが記録されてから 7 日後に、フィールドは自動的にクリアされます。

| Member Status | 定義 | Success | リストアップロードに使用可能 |
| ------------- | ---------- | ------- | ------- |
| No Action | すべてのレコードのデフォルトの開始位置 |  | No |
| Sales Invited | Sales/SDR がイベントに関する招待/情報を送信 |  | No |
| Sales Nominated | Sales が、Marketing 送信のトリガーイベントメールを受け取るレコードを指定 |  | No |
| Marketing Invited | Marketing のジオターゲットメール |  | No |
| Waitlisted | 登録が満員の場合の保留状態。空きが出れば Registered に移動する |  | No |
| Registered | セッションへの登録または参加を表明 |  | No（特別な条件は MOps に確認） |
| Cancelled | 登録済みだが、イベント前にキャンセル |  | No |
| No Show | 登録済みだが、イベントに参加しなかった |  | Yes |
| Attended | ワークショップのイベントに参加 | Yes | Yes |
| Follow Up Requested | イベント後に GitLab に関する追加詳細の送付を要求 | Yes | Yes |
