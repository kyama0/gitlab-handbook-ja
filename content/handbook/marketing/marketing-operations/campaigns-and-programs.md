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

## SFDC キャンペーンの手順 {#sfdc-campaign-instructions}

SFDC キャンペーンには、一般的な必須フィールドのセットがあります。このセクションでは、それらのフィールドと、いつ入力する必要があるかを説明します。この手順は、Marketo からキャンペーンを同期した後（または Content Syndication/LinkedIn キャンペーンをセットアップする際）に実施します。必須フィールドの変更が一元的に管理され、手順が古くならないように、手順はこのセクションに含まれています。

### SFDC フィールドの更新 {#updating-sfdc-fields}

- Salesforce.com にアクセスし、[作成日順の全キャンペーン（All Campaigns by create date）](https://gitlab.lightning.force.com/lightning/o/Campaign/list?filterName=00B4M000004oVF9)ビューを確認します。作成日でソートすると、あなたのキャンペーンが一番上に表示されるはずです。検索ボックスでキャンペーンタグを検索することもできます。キャンペーンを選択します。
  - イベントが Accelevents で管理されている場合は、SFDC キャンペーンの名前を更新する必要があります。このステップは Accelevents で管理されるイベントにのみ適用されます。他のすべてのキャンペーンタイプは正しい命名形式になっているためです。キャンペーン名の横にある「Edit campaign name」アイコンをクリックし、私たちの命名規則を反映するよう名前を更新します: YYYYMMDD_OwnedEventName_RegionOrCity。Marketo の名前は変更せず、SFDC のみ変更します。
  - `Campaign owner` を自分の名前に変更します
  - `Active` ボックスがチェックされていることを確認します
  - ステータスは[このセクションの表](/handbook/marketing/marketing-operations/campaigns-and-programs/#important-notes)に従って更新する必要があります。通常は「In Progress」を使用します
  - 開始日と終了日が正しく入力されていることを確認します（これは自動化されています）。
  - `in-person` か `virtual` かのタイプに基づいて、`Is this an in person event` のドロップダウンを更新します
  - `Budget Holder` を更新します。`Budget Holder` フィールドは **以下の場合にのみ** 更新すべき点に留意してください:
    - キャンペーンタイプ（例: content syndication、sponsored webcast など）に基づいてキャンペーンが offline の Bizible タッチポイントを生成する場合 - **注意:** offline の Bizible タッチポイントは、私たちがリードを offline で収集した場合に発生し、システムがこの名前を持つためには、[リストアップロードプロセス](/handbook/marketing/marketing-operations/list-import/)を経る必要があります
  - `Is a Channel Partner involved?` を更新します。「No」の場合は空欄のままで構いません
    - Yes の場合は、`Channel Partner Name` を追加します
  - `Is an Alliance Partner involved?` を更新します。「No」の場合は空欄のままで構いません
    - Yes の場合は、`Alliance Partner Name` を追加します
  - `Will there be MDF Funding` を更新します。「No」の場合は空欄のままで構いません
    - Yes の場合は、このフィールドで `MDF Request` をルックアップします: [詳細な手順](/handbook/marketing/channel-marketing/mdf-operations-process/#step-3-add-mdf-request-on-the-salesforce-campaign)
  - 該当する場合は `Integrated Campaign` を更新します
  - 該当する場合は `GTM Motion` を更新します
  - `Sales Dev Invite Support` がある場合は、このボックスをチェックします。それ以外の場合は空欄のままにします
  - `Sales Dev Onsite Support` がある場合は、このボックスをチェックします。それ以外の場合は空欄のままにします
  - hyperscaler が関与する場合は、`Is Hyperscaler involved?` を Yes に更新します。
    - Yes の場合は、キャンペーン名の日付の後に hyperscaler パートナー名を追加します。Executive Roundtable を使った例: YYYYMMDD_HyperscalerPartner_ExecutiveRoundtable_Topic_Region_EventType。詳細は[こちら](/handbook/marketing/marketing-operations/campaigns-and-programs/#partner-campaign-setup)を参照してください
    - Yes の場合は、`Hyperscaler` フィールドに hyperscaler パートナー名を入力します
    - Yes の場合は、`Will there be Hyperscaler Funding?` を使って Hyperscaler Funding のタイプを選択します。オプションは `MDF` または `Credits` です
      - その後、`Hyperscaler Fund Requested Amount` を更新します
  - イベントエピックを更新します
  - 説明（あれば）を更新します
  - わかっている場合は `Form submission page` を入力します。それ以外の場合は、ランディングページが作成された後に追加する必要があります（該当する場合）
  - `Budgeted Cost` を更新します。コストが $0 の場合は `Budgeted Cost` フィールドに `1` を記載します。- 注意: ROI 計算のためにここには少なくとも 1 の値が必要です。さもないと、パイプラインを `0` で割ることになり、pipe2spend 計算は常に `0` になってしまいます。
  - これらがローカルなものであるか、特定のリージョンをターゲットとしている場合は、`Region` と `Sub-region` を更新します
  - Corporate Events または Field Marketing が運営するすべての SFDC キャンペーンタイプについて、キャンペーンレベルで `High Priority` チェックボックスをチェックしてください。
    - これを追加するに至った、business development チームと実施した[パイロット](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/6905)の詳細はこちら!

    **または:**

    - キャンペーンに GitLab Dollars が支出された場合（Field、Digital、Corporate、Community など）- 予算を使用しないキャンペーンの場合は空欄のままで構いません。- **注意:** budget holder を更新しても、タッチポイントが二重カウントされるリスクは生じません。ただし、このフィールドは常に入力されるわけではないため、各チームのパフォーマンス測定には使用すべきではない点に留意してください。
- 「Save」をクリックします
- Marketo プログラムリンクと SFDC キャンペーンリンクをエピックに追加します。

#### Allocadia を利用する場合の SFDC キャンペーン作成手順 {#instructions-for-sfdc-campaign-creation-when-utilizing-allocadia}

Allocadia > Marketo > SFDC の連携を使用すると、Allocadia で入力した情報が SFDC キャンペーンにプッシュされます。

**注意:** Allocadia コネクターが同期を完了するまで、SFDC キャンペーンを編集しては **いけません**。これは通常ほぼリアルタイムで行われますが、データがすぐにプッシュされない場合は、数分から数時間かかる可能性があることに注意してください。SFDC キャンペーンオーナーが Marketo Integration からキャンペーンを運営する人の名前に変わったとき、また Allocadia から SFDC にすべての詳細が入力されたときに、Allocadia の連携が処理を完了したことがわかります。コネクターがデータをプッシュする前にキャンペーンを編集すると、ビルドが壊れ、リストされたすべてのフィールドを手動で編集する必要が生じます。Allocadia の詳細は[こちら](/handbook/enterprise-data/marketing-analytics/allocadia/#salesforcecom-sfdc)を参照してください。

- Salesforce.com にアクセスし、[作成日順の全キャンペーン（All Campaigns by create date）](https://gitlab.my.salesforce.com/701?fcf=00B4M000004oVF9)ビューを確認します。作成日でソートすると、あなたのキャンペーンが一番上に表示されるはずです。検索ボックスでキャンペーンタグを検索することもできます。キャンペーンを選択します。
- 開始日と終了日が正しく入力されていることを確認します（これは自動化されています）
- `Budgeted Cost` を追加します
  - SFDC の `Budgeted Cost` は、Allocadia の `forecast`（予測）の数値ではなく、`plan`（計画）の数値から引き出されます。Allocadia に plan の数値がない場合、SFDC では `Budgeted Cost` は空欄のままになります。Allocadia に plan の金額がある場合は、その金額が夜間同期で SFDC に引き出されます。
  - 施策のコストが $0（例 - バーチャルワークショップ）の場合は、`Budgeted Cost` フィールドに `1` を記載します。ROI 計算のためにここには少なくとも 1 の値が必要です。さもないと、パイプラインを `0` で割ることになり、pipe2spend 計算は常に `0` になってしまいます。

### 親/子キャンペーンのセットアップ {#parentchild-campaigns-setup}

一部の施策では、単一のイニシアチブの一部として複数のキャンペーンが発生します。これらの例としては、講演セッションや付随イベントを伴うカンファレンス、content syndication、またはハイブリッドイベント（対面とバーチャルのリードが別々に追跡される場合）が挙げられます。このような場合、SFDC に `parent`（親）キャンペーンを作成し、各 `child`（子）キャンペーンが個々の施策を表すようにします。

親キャンペーンを作成/編集する際に避ける必要がある重要な側面は、以下の 2 つです:

1. 同じアクティビティに対して重複する bizible タッチポイントを作成するリスクを最小化したいため、親キャンペーンにキャンペーンメンバーを追加しないでください。
1. 親キャンペーンを作成する際は、必ずキャンペーン名の末尾に `_PARENT` を付けて命名する必要があります。これは、キャンペーンを二重に報告しないためです。
1. 親キャンペーンには `Actual Cost in Campaign` フィールドに値を入れず、`Budgeted Cost in Campaign` フィールドには $1 を超える値を入れないでください。真の Budgeted Cost と Actual Cost は子キャンペーンでのみ更新し、親キャンペーンでは更新しません。親キャンペーンでは ROI を実行すべきではないためです。
1. Allocadia ユーザーの場合、親キャンペーンにはサブカテゴリ ID を含めません。Allocadia ID は子キャンペーンを作成する際にのみ使用します。Marketo には同じ親/子の関係構造がないため、共有されるすべての施策をまとめて収容するフォルダを作成します。

#### 親 SFDC キャンペーンの作成 {#create-a-parent-sfdc-campaign}

- [以下の手順](/handbook/marketing/marketing-operations/campaigns-and-programs/#steps-to-setup-marketo-programs-and-salesforce-campaigns)を使って最初の子キャンペーンを作成します
- 完了したら、キャンペーンの右上に移動して `Clone` をクリックします
- キャンペーン名の末尾に _PARENT を含めるよう編集します（例: 20250409_GoogleCloudNext_PARENT）
- `Active` ボックスがチェックされていることを確認します
- Allocadia サブカテゴリ ID を削除します
- `Budgeting Cost in Campaign` を $1 に調整します
- `Save` をクリックします

#### SFDC で子キャンペーンを親キャンペーンに関連付ける方法 {#how-to-associate-a-child-campaign-to-a-parent-campaign-in-sfdc}

- SFDC にログインして子キャンペーンを検索します
- キャンペーン内に入ったら、`Parent Campaign` フィールドの横にある編集ボタンをクリックします
- 親キャンペーン名（例: 20250409_GoogleCloudNext_PARENT）をフィールドにコピー＆ペーストするか、親キャンペーン名を入力し始めてから `Save` をクリックします
- 追加の子キャンペーンについても同様に続けます
- 右側のパネルでキャンペーン階層を表示できます（`View All` をクリックすると完全な階層ビューが表示されます）

#### Allocadia ID と親/子キャンペーン {#allocadia-ids-and-parentchild-campaigns}

Allocadia ユーザーで、Allocadia > Marketo > SFDC の同期を使用している場合は、個々の子キャンペーンのいずれにも Allocadia サブカテゴリ ID を使用しないことに注意してください。各キャンペーンには、その特定のキャンペーン用の独自の line item ID があり、それらはすべて親キャンペーンにロールアップされます。以下に例を示します。

**AWS Summit London - PARENT（Allocadia ID なし）**

- AWS Summit Conference/Booth - 個別の Line Item ID
- AWS Summit Speaking Session - 個別の Line Item ID
- AWS Summit Executive Meetings - 個別の Line Item ID

**親/子の SFDC 階層の例は[こちら](https://gitlab.lightning.force.com/one/one.app#eyJjb21wb25lbnREZWYiOiJzZmE6aGllcmFyY2h5RnVsbFZpZXciLCJhdHRyaWJ1dGVzIjp7InJlY29yZElkIjoiNzAxUEwwMDAwMFVqMGs5WUFCIiwic09iamVjdE5hbWUiOiJDYW1wYWlnbiIsInRyZWVEaXJlY3Rpb24iOiJjdXJyZW50VG9Eb3duIiwibGF5b3V0VHlwZSI6IlJFTEFURURfTElTVCIsImxheW91dE92ZXJyaWRlIjoiQ2hpbGRDYW1wYWlnbnMifSwic3RhdGUiOnt9fQ%3D%3D)にあります。**

#### 親 Marketo プログラム（別名フォルダ）の作成 {#create-a-parent-marketo-program-aka-folder}

- Marketo にログインします
- 会計年度と四半期に基づいて正しいイベントタイプフォルダに移動します（例 - FY26 - Q1 Conference）
- フォルダを右クリックして `New Campaign Folder` を選択します
- キャンペーン名を `Campaign Folder Name` として追加します（例 - 20250409_GoogleCloudNext）
- `Save` を押します
- イベントのすべての Marketo プログラムは、このメインフォルダの下にネストできます
  - 既存の Marketo プログラムをフォルダに移動するには、プログラムを単純にドラッグ＆ドロップするか、プログラムを右クリックして `Move` を選択し、作成したフォルダを指定します。

ネストされたプログラムを持つ Marketo プログラムフォルダの例は[こちら](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/MF25757A1)にあります。

### 重要な注意事項 {#important-notes}

1. Marketo がキャンペーンを「見る」ためには、SFDC キャンペーンの `Active` チェックボックスがチェックされている必要があります。以下のプロセスに従えばこれは自動的に行われますが、Marketo で SFDC キャンペーンが見つからないことがあれば、SFDC でそのボックスがチェックされているか確認してください。さらに、このボックスがチェックされていないと、Marketo はその SFDC キャンペーンに対してリードを送信したり、キャンペーンメンバーステータスを更新したりできません。
1. 親キャンペーンを作成する場合は、キャンペーン名の末尾に `_Parent` を追加することで、親キャンペーンの名前が親であることを反映していることを確認してください。手違いで responded のキャンペーンメンバーを収容するために親キャンペーンが誤ってセットアップされた場合でも、キャンペーン名の末尾に `_Parent` を追加することで、[offline キャンペーンのタッチポイント生成を制御する](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)私たちのキャンペーン同期ルールに確実に認識され、親と子の両方のキャンペーンに収容される可能性のあるキャンペーンメンバーに対して二重のタッチポイントを作成しないようにします。
1. offline タッチポイント生成に依存するキャンペーンを作成する場合は、キャンペーンタイプが適切に選択されていること、およびキャンペーン名に `test`、`DONTUSE`、`template`、`parent` のような単語が含まれていないことを再確認してください。[offline タッチポイントの作成を管理するキャンペーン同期ルール](https://docs.google.com/spreadsheets/d/1xR2Q7YKskfNaxclnfGOkK8Vi739zdKypQ6GgF9MLG58/edit#gid=92970564)に基づき、これらのキャンペーンにはタッチポイントが作成されないためです。
1. SFDC には、キャンペーン名の最初の 8 文字（数字の場合）を取得して日付に変換することで、開始日、終了日、レポート日、会計四半期をスタンプするトリガーがあります（例: 20210505 == 5/5/2021、つまり YYYYMMDD）。したがって、数字で始まるキャンペーンには有効な日付が含まれている必要があり、さもないとエラーが発生します。
1. `Aborted` 以外のキャンペーンステータスは、開始日と終了日に基づいて SFDC のワークフローによって自動的に設定されます。

|ステータス|定義|いつ更新されるか?|
|------|--------|--------|
|Planned|キャンペーンが予定されており、セットアップ済みだが、開始日がまだ来ていない（イベントが延期された場合に引き戻される先にもなりうる）|キャンペーン開始日より前 - 作成時|
|In Progress|キャンペーンが開始された |開始日|
|Aborted|キャンペーンが一時停止、キャンセル、中止された|キャンペーンが中止されたときに手動で|
|Completed|キャンペーンが実施され、終了した|キャンペーン終了日の後|
