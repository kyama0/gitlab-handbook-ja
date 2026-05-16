---
title: "Impartner"
description: "PRM およびパートナーポータル"
upstream_path: /handbook/marketing/marketing-operations/impartner/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-10-14T17:59:32+00:00"
---

GitLab は、Channel および Alliance パートナー向けの主要な Partner Relationship Management（PRM）プラットフォーム、パートナーポータル、マーケティングセンターとして Impartner を使用しています。

私たちは、チャネルパートナー向けの[GitLab パートナープログラム](/handbook/resellers/)の価値を最大化するため、MDF リクエスト、リード共有、ディール登録に Impartner を活用しています。パートナーがリードを閲覧、承諾、却下、割り当て、ディール登録に変換する手順を解説したビデオはこちらをご覧ください。

## PRM MDF 承認 / プロセス

Channel Marketing チームは、**チャネルパートナー** のマーケティングキャンペーンやイベントを支援するために Market Development Funds（市場開拓資金）を提供しています。チャネルパートナーは MDF リクエストおよびクレームをパートナーポータルから提出し、それらは精算前に承認される必要があります。

このプロセスは Iteration 2 に反映されています。[フローチャートを参照](https://www.figma.com/board/5JXv8yRHDyXttWt669A67E/MDF-Process-Iterations?node-id=0-1&p=f&t=PhdMoT9RvpJz9VKz-0)してください。

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/board/5JXv8yRHDyXttWt669A67E/MDF-Process-Iterations?node-id=0-1&embed-host=share" allowfullscreen></iframe>

PRM 承認プロセスにおけるパートナーおよび GitLab チームメンバーへの通知メールは、[このドキュメント](https://docs.google.com/document/d/1LfI-J77ag1CBRYUtjG5sQF-YuQFPnfT9ol0J26bmNjk/edit?usp=sharing)で確認できます。

### Change Management

1. MDF リクエストおよびクレームは Salesforce に同期されますが、添付ファイルは Salesforce に同期されません。そのため、エピック/Issue で POP タスクを完了する際には、Impartner を SSOT として使用する必要があります。Impartner の URL をエピック/Issue にリンクしてください。
2. 新しい MDF ダッシュボードが用意されており、リクエストが Approved 状態のとき、パートナーはダッシュボードから直接クレームを追加できます。
3. クレームフォームに Claim Title という新しい必須フィールドが追加されています。クレーム名の付け方をパートナーへ案内する必要があります。Claim Title は提出ごとに一意である必要があり、そうでない場合ワークフローが失敗します。
4. パートナーには、クレーム時にリードリストと実施証明（Proof of Performance）を提出することと、PO が作成された通知を受け取った時点で請求書を送付することが求められています。

### Step 1 - MDF リクエストの提出

MDF リクエストフォームでは、パートナーは次の情報を提供する必要があります:

1. Activity Name
2. Type of Marketing Activity
3. In Person or Virtual Event
4. Description
5. Expected Start Date of Activity
6. Expected End Date of Activity
7. Total Cost of Activity (USD)
8. Target Number of Contacts
9. Estimated Pipeline Created (USD)
10. Partner Investment (Your Investment in USD)
11. Total Amount Required (From GitLab MDF Program in USD)
12. Vertical Industry Target Type
13. Segment Target Type

提出後、パートナーには MDF リクエストを受け取った旨の確認メールが送信されます。

### Step 2 - MDF リクエストの承認

MDF リクエスト承認プロセスは、パートナーが MDF リクエストを提出した時点で開始します。

アクティビティ実施場所の GitLab チームメンバーが、MDF リクエストを承諾または却下するよう求める通知を受け取ります。これは、グローバルパートナーが AMER でイベントを実施する場合は AMER の CMM に承認がルーティングされ、EMEA で実施する場合は EMEA の CMM にルーティングされることを意味します。

GitLab チームメンバーは、以下のリンクを使って MDF リクエストの内容を確認する必要がありますが、承認または却下はメール通知から直接のみ行えます。

すべてのリクエストを確認したい場合は、[こちらのセクション](/handbook/marketing/marketing-operations/impartner/#prm-mdf-view)を参照してください。

PTO（休暇）が予定されている場合、Marketing Ops にて代理承認者としてマネージャーを追加する必要があります。以前は Salesforce で対応できましたが、現在は MktgOps のサポート要請として Issue を起票する必要があります。

#### MDF Request Status

MDF Request Status は MDF Request Details セクションで確認できます。

- Open - パートナーがリクエストを提出した時点
- Approved - リクエストが承認された時点
- Closed - リクエストとクレームの両方が完了した時点
- Denied - リクエストが却下された時点
- Canceled - リクエストがキャンセルされた時点

### Step 3 - MDF クレームの提出

MDF イベントの End Date を過ぎると、パートナーには MDF クレームの提出を促すリマインダー通知が、End Date から 2 日目、14 日目、28 日目に送られます。

MDF クレームフォームでは、パートナーは次の情報を提供する必要があります:

1. Claim Title
1. Claim Amount
1. Paid Date
1. Proof of Performance（実施証明）の添付
1. リードリストの添付

提出後、パートナーには MDF リクエストを受け取った旨の確認メールが送信されます。パートナーが 2 つ以上の添付ファイルをアップロードしていない場合、必要な添付がすべて提供されているかを確認するための通知がパートナーに送られます。

### Step 4 - 添付の確認とクレーム承認

パートナーが Proof of Performance とリードリストの添付ファイルをアップロードした後、GitLab チームメンバーはそれらが正しい添付であるかを確認するよう依頼されます。

- 添付が不足している場合、GitLab チームメンバーは MDF Claim Details セクションの `Missing POP` フィールドを更新して不足項目を記載する必要があります。これにより、選択した項目をクレームに追加するよう促す自動メッセージがパートナーに送信されます。
- すべての添付が揃っており問題なければ、GitLab チームメンバーは Claim セクションの `Approval Status` を `Denied` または `Approved` に更新します。

#### MDF Claim Status

利用すべき MDF Claim Status は、Claims セクション内の `Approval Status` です。

- Open - パートナーがクレームを提出した時点
- Approved - POP が承認された時点
- Denied - POP が却下された時点

## キャンセルされた MDF リクエスト

MDF リクエストがキャンセルされた場合、CMM は MDF Request Details の `Status` を `Cancelled` に変更する必要があります。パートナーには資金リクエストがキャンセルされたことを知らせる通知が届きます。パートナーがクレームを送信しようとしても、自動的に却下されます。

## PRM MDF View

MDF リクエストにアクセスするには、PRM へ移動して `MDF` タブを開きます。表示されない場合は、`More` タブから非表示のタブを確認できます。

プリセットフィルターでは、Pending、Approved、Denied のすべての MDF リクエストが表示されます。

カスタマイズしたビューを作成したい場合は、以下の手順に従ってください。

1. `Pending` タブに移動します。
1. 円の中の 3 つの点を選択し、`Create From Current View` を選びます。
1. 名前を「My Pending Requests」に更新します。
1. Visibility を「Private - can only be seen by me」に設定します。
1. Manage Filters で `+Add` をクリックします。

      1. Field: `Channel Marketing Manager - Name`
      1. Operator: `equals`
      1. Type: `Value`
      1. Value: 自分の名前を選択

1. Column Configuration で必要な追加フィールドを加えます。
1. 保存し、Approved と Denied の他のステータスについても同じ手順を繰り返します。

## MDF ダッシュボードへのアクセス

パートナーが MDF ダッシュボードへのアクセス権を取得するには、Authorized パートナーかつ MDF 管理者である必要があります。

ユーザーを MDF 管理者に更新するには:

1. ユーザープロフィールに移動し、編集を選択します。
1. Delegated Administrative Privileges セクションで、Administrative Privileges 配下の `MDF Administrator` をチェックします。

## リード共有

### チャネルパートナー リードフロー概要

**チャネルパートナー** は Channel Marketing チームと協力し、プロスペクトに共有するキャンペーンを作成できます。[キャンペーンタイプ](/handbook/marketing/channel-marketing/#types-of-partner-campaigns) には、Partner sponsored、MDF funded、ジョイントパートナーキャンペーンが含まれます。

フローは Marketo > Salesforce > Traction > Impartner の順で進みます。

パートナーリードは:

1. リストインポートまたはフォーム送信を通じて Marketo に作成される
2. Salesforce Campaign Sync 経由で SFDC に同期される
3. Traction を通じて Partner Queue に割り当てられる
4. パートナーポータルの Prospects に追加される

### Impartner Sync の要件

Salesforce と Impartner の間の同期は、Salesforce 上に新しく作成された「Prospects」というオブジェクトを介して動作します。このオブジェクトは Salesforce のリード/コンタクト構造と Impartner の要件のギャップを橋渡しする中間レイヤーとして機能します。Impartner は Salesforce を通じて 1 種類のオブジェクトとしか同期できないため、このデータ転送を仲介する目的でプレースホルダーとして Prospects オブジェクトが特別に設計されました。

フローは次のように動作します。リードは最初にイベントなどのソースから Marketo にアップロードされ、これまでどおり Salesforce に同期されます。Salesforce からは新しい Prospects オブジェクトに同期され、そこから Impartner に情報がプッシュされます。

### Change Management: Vartopia から Impartner へ

1. Marketo へのリードアップロードプロセスは完全に変更ありません。Marketo から Salesforce への同期もこれまで通りで、テンプレートや日々のワークフローを変更する必要はありません。
2. 手動の「Sync to Vartopia」チェックボックスは廃止され、[基準](/handbook/marketing/marketing-operations/impartner/#partner-campaign-requirements) に基づく自動同期に置き換わります。
3. MDF キャンペーンのリードは Impartner に入った時点で自動的に[受諾](/handbook/marketing/marketing-operations/impartner/#mdf-campaign-auto-acceptance)され、手動の受諾ステップが不要になります。
4. フィールド名の更新:
   1. Vartopia Partner Account → Impartner Partner Account
   2. Partner Prospect Status → Partner Lead Status
   3. Prospect Admin → Impartner Partner Contact
5. 検証用の新しい Partner Sync Date フィールドが追加されます。
6. Salesforce 上の新しい Prospects オブジェクトが同期の中間として機能し、チームは既存のリード/コンタクトレコードを引き続き使用します。
7. パートナーが組織のすべてのリードとディール登録を閲覧するには、「[Opportunity Admin](/handbook/marketing/marketing-operations/impartner/#prospects-and-deals-view-access)」権限（Delegated Administrator Privileges 内）が必要となります。この権限がない場合、パートナーは自分に割り当てられたレコードのみが見えます。

### Sync の要件

1. `Impartner Partner Account` が `NULL` ではないこと。
2. パートナーに紐づく `Impartner Partner Account` のアカウントに `Partner Contact` が存在すること。
3. パートナーリードに以下が含まれていること:
   1. First Name
   2. Last Name
   3. Phone
   4. Email
   5. Address (Country)

同期されると、`Partner Synced Date` にパートナーリードが Impartner に同期された日時が設定されます。Salesforce に Impartner Partner Account があるにもかかわらず `Partner Synced Date` が空の場合は、Marketing Ops に通知してください。

### MDF キャンペーンの自動受諾

Market Development Fund キャンペーンは、追跡システム内で強化された取り扱いを受けます。MDF キャンペーンのリードは Impartner に入った時点で自動的に受諾され、パートナー体験を効率化し、管理上の摩擦を低減します。

### Prospects と Deals のビューアクセス

パートナーがパートナーポータルで組織のすべてのリードとディール登録を閲覧できるよう、パートナーユーザーの権限を更新して「Opportunity Admin」アクセスを付与します。

ユーザーを Opportunity Administrator に更新するには:

1. ユーザープロフィールに移動して編集を選択します。
1. Delegated Administrative Privileges セクションで、Administrative Privileges 配下の `Opportunity Administrator` をチェックします。

## パートナーキャンペーン トラッキング

このプロセスは、どのマーケティングキャンペーンがパートナーのディール登録を促進しているかを追跡し、その効果を測定します。リードはオリジネートしたパートナーキャンペーンに自動的にリンクされるため、パートナーがディール登録を提出すると、プラットフォームはパートナーが追加の作業をしなくとも Impartner の Prospect レコードからキャンペーン帰属データをシームレスに取り込みます。

自動帰属が利用できない場合、パートナーは自分のディール登録に影響を与えた具体的なマーケティング施策を手動で選択することで、コントロールを維持できます。

### Partner Campaign の要件

1. `Channel Partner Name` が Salesforce 上の Partner Account と完全一致していること。
2. Budget Holder = `chnl` または `ptnr`。
3. Status != Aborted。

### ディール登録の変更リクエスト

マーケティングキャンペーンの追加・更新・削除が必要な場合、マーケティングチームはこの[フォーム](https://form.asana.com/?k=1i4lL5h0RLzfTqNWBTH84Q&d=306855239930259) で Request Type に `Partner DR Campaign Request` を指定し、Asana タスクを作成する必要があります。

この変更リクエストでは以下が必要です:

1. 更新が必要な DR を、キャンペーンメンバーまたはタッチポイントの証拠とともに特定する
2. Marketing Ops が DR を検証する
3. Marketing Ops がマーケティングキャンペーンを追加する

なお、9 月 27 日（ローンチ日）以降のキャンペーンのみ承認されます。

変更リクエストの作成方法を視覚的に確認したい場合は、こちらの[ビデオ](https://youtu.be/_t98rC1ug6A)録画をご覧ください。

## Partner Recall（パートナーリコール）

リコールプロセスの第 1 フェーズは、GitLab Partner Portal の「Prospects」モジュールでライブ運用されています。リコールプロセスは、アクションが取られていないリードを引き戻せるように構築されています。

GitLab Inc. によるジョイントキャンペーンを通じて、完全有償の施策から獲得されたパートナーリードのみがリコールの対象です。**Partner sponsored および MDF funded のキャンペーンからリードをリコールすることはありません。**
3 フェーズのうちの第 1 フェーズの一環として、Partner Share Status = Pending（チャネルパートナーがリードを受諾も却下もしていない状態）で 30 日以上経過したパートナーリードはリコールされます。

最終フェーズでは、GitLab Inc. はチャネルパートナーに、リードが Prospect モジュールで割り当てられた日から 5 日間の期間を与え、Partner Share Status を更新してリードを受諾できるようにします。受諾後、チャネルパートナーは受諾日から 10 日間の期間を持って Partner Lead Status を更新でき、それを過ぎるとリードは GitLab Inc. のフォローアップへと再ルーティングされます。

### ルール

1. リコールされたリードがいつでも別のパートナーキャンペーンに参加した場合、そのリードはパートナーに再割り当てされません。
2. パートナーリードがいつでも複数のキャンペーンに参加している場合、最初のキャンペーンのパートナーが優先されます。
3. リードがいつでも MDF キャンペーンに参加している場合、リコールされません/できません。
4. アクティブにワークされているリードはパートナーに共有されません。つまり、CRM Partner ID は更新できないか、削除すべきです。このルールの唯一の例外は MDF キャンペーンに参加するリードです。

## フィールド用語集

### Lead/Contact オブジェクト

| フィールド名               | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Partner Contact| Partner Contact は、組織内のプロスペクトの管理と割り当てを担当する指定リードマネージャーであり、すべてのパートナーリード通知を受け取ります。各 Impartner Partner Account においてこの重要な役割を担えるのは 1 名のみです。<br>Impartner Partner Account 上のこの Salesforce フィールドは必須項目です。空欄の場合、プロスペクトレコードがどこにもルーティングされず、見逃された機会や未割り当てのリードが発生します。|
| Partner Share Status| Partner Share status はリード共有ワークフローの中で、各パートナーリードの現在の段階を追跡します:<br><br>1\. Pending: パートナーがプロスペクトを受諾するか却下するかを決定するのを待っている状態<br>2\. Accepted: パートナーがプロスペクトを適格性判定し、ワークすることにコミットした状態<br>3\. Rejected: パートナーがリードを追求しないと判断し、ワークしない状態。|
| Partner Lead Status | Partner Lead Status は、パートナーがセールスサイクル内でリードをワークしていく際のリードのステータスを示します。<br><br>1\. Qualifying: リードがワークされていることを示す<br>2\. Qualified: パートナーがプロスペクトに連絡し、実際の販売機会があることを確認した状態<br>3\. Disqualified: パートナーがプロスペクトを追求する価値がないと判断した状態<br>4\. Converted to DR: パートナーがプロスペクトをディール登録に転換した状態。|
| Impartner Partner Acount | Impartner Partner Account は Salesforce の Account ID (18) に基づくルックアップフィールドです。このフィールドは、Vartopia 経由でリードが紐づいているパートナーアカウントを示します。|
| Partner Shared Date| この日時フィールドは、プロスペクトがパートナーに共有された日付を追跡します。|
| Partner Synced Date| この日時フィールドは、プロスペクトが Impartner に同期された日付を追跡します。|
| Partner Accepted Date| この日時フィールドは、プロスペクトがパートナーによって受諾された日付を追跡します。|
| Partner Recalled Date| この日時フィールドは、プロスペクトがパートナーからリコールされた日付を追跡します。|

## PRM - Salesforce 連携

PRM から Salesforce への連携は、オブジェクトごとにカスタマイズ可能です。

- Impartner `MDF Request` は SFDC `Funds Request` にマッピング
- Impartner `MDF Claim` は SFDC `Funds Claim` にマッピング
- Impartner `Prospects` は SFDC `Partner Prospects` にマッピング
- Impartner `Deal Registration` は SFDC `Deal Registration` にマッピング

### MDF Request および Claim の Salesforce 同期

MDF Request と MDF Claim オブジェクトの間には双方向同期があります。両者の同期で使われる ID 識別子は Funds Request Number（別名 MDF Number）です。
