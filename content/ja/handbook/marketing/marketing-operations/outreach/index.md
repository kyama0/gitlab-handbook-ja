---
title: "Outreach"
upstream_path: /handbook/marketing/marketing-operations/outreach/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-04-30T12:00:00Z"
translator: claude
stale: false
---

### Outreach

Outreach は、Sales および Sales Dev チームメンバーが見込み顧客や顧客に対して効率的かつ効果的にエンゲージメントし、より多くのパイプラインを促進し、商談成約率を向上させるための、当社のセールスアウトバウンドエンゲージメントプラットフォームです。

## サポート

Outreach は、マーケティングオペレーションチームとセールスオペレーションチームが共同で所有しているツールです。
このハンドブックページや Highspot ページの内容外でさらにサポートが必要な場合は、ご自身の役割に応じて適切な Slack チャンネルに連絡してください:

- マーケティングまたは Sales Development のリクエストは、Slack の #mktgops に連絡してください。
- Sales のリクエストは、Slack の #sales-tools-support に連絡してください。

## アクセス

Outreach のアクセスは、ご自身の役割によって異なります。以下は、オンボーディング中に自動的にアクセスが付与される役割の一覧です。

### 役割ベースのエンタイトルメント

- Sales Development
- Business Development Representatives
- Managers, SDR or BDR
- Account Executives
- Regional Directors
- SMB Advocates
- SMB Managers
- Renewals Managers
- Managers, Renewals Managers

アクセスを取得したら、以下の手順を実行してください:

- Outreach Chrome 拡張機能をダウンロードしてインストールしてください。
- カレンダーとメールを接続してください。
- LinkedIn Sales Navigator アカウントを接続してください（該当する場合）。

## Outreach シーケンスの作成とベストプラクティス

### ベストプラクティス

#### シーケンスの命名規則

**すべての Sales Dev チームメンバーは、シーケンスにこの命名規則を使用する必要があります**

以下の命名規則に注意してください。シーケンスは次の形式で簡単に区別できる必要があります:

**部門, インバウンドまたはアウトバウンド, ハイタッチまたはローテッチ, 地域, 説明/モーション, 言語**

- **部門**
  - Sales
  - SD
  - RM
  - All Field
- **インバウンドまたはアウトバウンド**
  - IB
  - OB
- **ハイタッチまたはローテッチ**
  - HT
  - LT
- **地域**
  - Global
  - AMER
  - APJ
  - EMEA
  - PubSec
- **チーム**
  - EAST
  - SEUR
  - META
  - LATAM
- **説明/モーション**
  - Trial
  - Contact Request
  - Overage
  - Google Cloud Follow Up
  - GitHub Takeout
- **言語**
  - ESP
  - FR
  - GER
  - JP
  - KOR
  - PT

**例:**

- SD IB LT EMEA Content GER
- SD OB HT Global CE User
- Sales Global PIpeGen Day #PGDay

#### 確認すべきシーケンス設定

- すべてのメールステップでメール追跡が有効になっていることを確認してください
- Interval Type = Schedule Days
- シーケンスにすべてのタグが付いており、コレクションの一部であることを確認してください
- Throttle Settings = "Max active prospects per user = 1000" および "Max adds per user every 24 hours = 75"

#### タグ

- Outreach タグは、シーケンスやプロスペクトに追加できるラベルです。情報の分類や検索を素早く行うのに役立ちます。レポート要件のため、独自のタグを作成せず、Sales Ops または Sales Dev Ops にタグの作成を依頼してください。

**タグカテゴリと例（網羅的ではありません）**

- チーム/グループ
  - SD
  - AE  
  - RNWL
  - SMB
- インバウンドまたはアウトバウンド
  - IB
  - OB
- ハイタッチ vs ローテッチ
  - HT
  - LT
- Geo
  - AMER
  - EMEA
  - APJ
- チーム別
  - East
  - NEUR
  - DACH
- シーケンスタイプ
  - Competitor
  - GitHub
  - Jenkins
  - Atlassian
  - Closed Lost
  - Event
  - Free to Paid
- 言語
  - ESP
  - FR
  - KOR
  - JP
  - GER

#### ハイタッチ vs ローテッチ

- ハイタッチシーケンスは、複数のコミュニケーション手段（電話、LinkedIn、メール）を含むシーケンスで、通常 2 週間以上かけて少なくとも 10 ステップを含みます。ハイタッチシーケンスが標準であるべきです。
- ローテッチシーケンスは、通常 4 ステップ以下の自動メールステップです。これらのシーケンスは、電話番号が見つからない場合や、イベント招待などの特定の状況でのみ使用してください。

#### Outreach 変数

- Outreach 変数は、プロスペクトや送信者の詳細を自動的に取得するプレースホルダーで、メールが大規模にパーソナライズされた感じを与えます。例外はパーソナライズ変数で、以下の例で確認できます。

**変数の例**

- {{first_name}} – プロスペクトの名前を挿入します。
- {{company}} – プロスペクトの会社名を挿入します。
- {{!personalization}} – XDR がカスタムノートを追加できます。「!」の後に書かれたものは内部ノートになります。例: {{!Event Name}}
{{Personalize this based off recent account news}} {{!Your AEs Name}}.
- {{sender.first_name}} – 送信者の名前を挿入します。
- {{sender.calendar_url}} - 送信者のカレンダーリンクを挿入します。

#### シーケンスを作成すべきでない場合

- 現在のメッセージへの一度限りの編集
- プロスペクトをシーケンスに追加しながらメールステップを編集できることを覚えておいてください。
- メッセージを A/B テストに組み込める場合
- A/B テストは任意のシーケンスのメールステップで実行できます

#### 時間ベースのシーケンス（イベント）

- 一度限りのイベントのために高度にパーソナライズされたシーケンスを作成する必要がある場合は、Ops チームがアーカイブする時期がわかるよう、シーケンスのタイトルにイベントの日付を入れてください。

#### 新規シーケンスを作成すべき場合

- 現在ない、メッセージのギャップを埋める場合
- 異なるステップ順序、異なる時間枠、使用する異なるチャンネルが必要なため、A/B テストの反復では十分ではない場合

### 共有ポリシー

#### コレクションポリシー

- Sales Dev
  - Inbound Collections
    - すべてのインバウンド MQL は Inbound コレクションのシーケンスでアクション化する必要があります

#### チームコレクションポリシー

- 各 Sales Dev チームには独自のチームコレクションがあり、特定の地域向けにメッセージをテストできます。これらのシーケンスのグローバルに適用可能なバージョンも、Good コレクション用に作成できます。

#### Testing および Good コレクション

- 新しいシーケンスリクエストがグローバルに適用可能な場合は、チームコレクションではなく「Testing Collection」に格納されます。

### Sales

#### AE から BDR への共有

- AE が BDR とシーケンスを共有したい場合は、BDR のマネージャーとシーケンスを共有できます。BDR マネージャーは、グローバルに承認されたすべての sales コレクションと、その地域のコレクションへのアクセス権を持ちます。BDR マネージャーは以下のプロセスに従ってシーケンスのクローンを作成できます。

### Sales Dev シーケンス作成プロセス

- リクエスト – シンプルな A/B テストでメッセージギャップを埋められない場合、XDR マネージャーは XDR を代表して新しいシーケンスリクエスト Issue を提出します。
- マネージャーレビュー – XDR マネージャーがシーケンスのセットアップ（命名、タグ、設定、トラッキング、適用性）を確認し、承認します。
- ディレクター承認とアクティベーション – ディレクターがダブルチェックし、シーケンスを起動し、60 日後のレビュー日を設定します。
- パフォーマンスレビュー – 60 日後、ディレクター、Ops、および/またはマネージャーが結果をレビューし、シーケンスを維持、拡張、または廃止するかを決定します。

完全なプロセスの詳細 → [BDR Sequence Creation Request Issue Template](https://gitlab.com/gitlab-com/marketing/sales-development/-/blob/main/.gitlab/issue_templates/BDR_Sequence_Creation_Request.md?ref_type=heads)

## 署名

Sales Development の署名は Opensense で設定されます。統合は稼働中なので、Gmail を同期するだけで反映されます。署名に変更を加える必要がある場合は、Opensense を通じて行ってください。

## メール送信制限

組織の送信スコアを保護するため、メール送信制限を設定しています。このスコアは受信トレイ内の配置に影響するため、これらの制限を悪用しないことが非常に重要です。これらの制限を超える量を送信する必要がある場合は、より大量に送信できるツールを持つフィールドマーケター（field marketer）と連携してください。

- Outreach 内から 1 日 500 通のメールを送信できます。これは、各ユーザーが 1 日に Outreach を使って送信できるメール数です。
- GitLab 内から 1 日 1000 通のメールを送信できます。Outreach ユーザーが 1 日に送信できるメール配信の合計数です。
- 1 つのメールドメインに 1 日 25 通のメールを送信できます。これは、1 日に 1 つのメールドメインに送信できるメールの合計数です。以下のドメインは制限していません:

  - gmail.com
  - microsoft.com
  - Outlook.com

このリストへの追加をご希望の場合は、Marketing Ops にご連絡ください。

## ルールセット

Outreach のルールセットはシーケンスに適用され、プロスペクトのステータスを制御します。あなたまたはプロスペクトがシーケンスに参加中に特定のアクションを実行すると、プロスペクトのステータスが変更され、SFDC に同期されます。これは、プロスペクトのライフサイクルをよりよく管理するためです。

### デフォルトルールセット

- シーケンスの最初のタスクが完了すると、ステータスが Accepted に移行します。
- プロスペクトが返信すると、ステータスが Qualifying に移行します。
- ミーティングが予約されると、シーケンスは終了とマークされ、ステータスは Qualifying になります。
- プロスペクトがシーケンス中にオプトアウトすると、ステータスが Disqualified に移行します。
- プロスペクトがシーケンス中に返信せず、シーケンスの最後に到達すると、ステータスが Recycle に移行します。
- ユーザーがシーケンス内でプロスペクトを手動で完了とマークすると、Recycle に移行します。
- Outreach がプロスペクトが OOO であることを検出した場合、シーケンスを 1 週間一時停止するか、OOO 通知に復帰日が記載されている場合は、その日付までシーケンスを一時停止します。

### フォローアップルールセット

- シーケンスの最初のタスクが完了すると、ステータスが Qualifying に移行します。
- プロスペクトが返信すると、ステータスが Qualifying に移行します。
- ミーティングが予約されると、シーケンスは終了とマークされ、ステータスは Qualifying になります。
- プロスペクトがシーケンス中にオプトアウトすると、ステータスが Disqualified に移行します。
- プロスペクトがシーケンス中に返信せず、シーケンスの最後に到達すると、ステータスが Recycle に移行します。
- ユーザーがシーケンス内でプロスペクトを手動で完了とマークすると、Recycle に移行します。
- Outreach がプロスペクトが OOO であることを検出した場合、シーケンスを 1 週間一時停止するか、OOO 通知に復帰日が記載されている場合は、その日付までシーケンスを一時停止します。

### サポートルールセット

- シーケンスの最初のタスクが完了すると、ステータスが Ineligible に移行します。
- プロスペクトがシーケンス中にオプトアウトすると、ステータスが Disqualified に移行します。
- プロスペクトがシーケンス中に返信せず、シーケンスの最後に到達すると、ステータスが Ineligible に移行します。
- ユーザーがシーケンス内でプロスペクトを手動で完了とマークすると、Ineligible に移行します。
- Outreach がプロスペクトが OOO であることを検出した場合、シーケンスを 1 週間一時停止するか、OOO 通知に復帰日が記載されている場合は、その日付までシーケンスを一時停止します。

### 電話番号

グローバルな電話番号規制のため、現時点では GitLab がエンティティを持つ国でのみローカル/モバイル電話番号を購入できます。以下は現在購入可能な国です:

- US
- Canada
- United Kingdom
- Ireland
- Germany
- Spain
- Netherlands
- Singapore
- Australia

また、アウトバウンドプロスペクトを行うためにフリーダイヤル番号を購入できる国も調査中です。詳細は近日公開予定です。

担当者は、希望する場合、自身の個人番号をアップロードして使用することもできます。

## EMEA & APJ XDRs

すべての xDR は、担当地域の各エンティティの番号を受け取ります。例: EMEA にいる場合、Germany、France、Spain、Netherlands、Ireland（近日中）の番号を受け取ります。

## AMER XDRs

すべての XDR はローカルダイヤル機能を活用できます。Outreach は、発信先のエリアに基づいて自動的に番号を割り当てるため、そのエリアから電話をかけているように見えます。

## コール処理（Call Disposition）

| Call Disposition Name | 説明  | シグナル | シーケンスステータス | リード/コンタクトステータス |
| ------ | ------ | -------| -------| -------|
| CC: Answered: Info Gathered: Create Stage 0 Opp    |いくつかの認定質問に回答があり、Stage 0 Opp が作成されるべき| ポジティブシグナル| シーケンス終了 | Qualifying |
| CC: Answered: Create follow up task |認定取得のためにフォローアップが必要/現在のユースケースなし/タイミングが合わない| ポジティブシグナル | シーケンス終了 | Recycle |
| CC: Answered: Not Interested |通話で興味がないと述べた| ネガティブシグナル | シーケンス終了 | Recycle |
| CC: Answered: Personal Use |個人的な理由で GitLab を使用している| ネガティブシグナル | シーケンス終了 | Recycle |
| CC: Answered: Asked for Call Back | 悪いタイミングで捕まえてしまい、コールバックを依頼された OR まだツールを評価中で数週間後にコールバック。リードを recycle に移動するか、事前に作成された Call Back Sequence に追加するオプションを提供する一般的なタスクが作成されます | ポジティブシグナル | シーケンス終了 | Qualifying |
| CC: Answered: Using Competition |競合他社を使用している。リードを recycle に移動するか、事前に作成された Competition Objection Follow Up Sequence に追加するオプションを提供する一般的なタスクが作成されます|ネガティブシグナル | シーケンス終了 | Qualifying |
| Automated Switchboard |自動切替機に到達し、進めるオプションがなかった |中立シグナル | シーケンス継続 | Accepted のまま |
| Main Company Line - Can't Transfer Line |この会社番号を通じてプロスペクトに連絡する方法がない | 中立シグナル | シーケンス継続 | Accepted のまま |
| IQM Set | 通話中に IQM をスケジュールすることができた。SFDC にトリガーが存在し、このオプションが選択されると自動的にリードステータスが Qualifying に変更されます| ポジティブシグナル | シーケンス終了 | Qualifying |
| Correct Contact: Left Message |正しいコンタクトのボイスメールに到達し、留守番電話または個人秘書にメッセージを残した | 中立シグナル | シーケンス継続 | Accepted のまま |
| Correct Contact: Not Answered/Other |会社のディレクトリを通じて正しいコンタクトに到達できたが、呼び出し続けた。コンタクトのボイスメールに到達したが、ボイスメールが設定されていなかったため、メッセージを残せなかった|中立シグナル | シーケンス継続 | Accepted のまま |
| Incorrect Contact: Answered |間違った人物がこのコンタクトのために持っていた電話番号に出て、それは間違った人物の電話番号です（彼らは個人秘書ではありませんでした）。リードを recycle に移動するか、事前に作成された Referral Sequence に追加するオプションを提供する一般的なタスクが作成されます。彼らは正しい人物のメッセージを取らず、有用な情報を提供しませんでした |  中立シグナル | シーケンス終了 | Accepted のまま |
| Incorrect Contact: Left Message |間違った人物が電話に出て、それは間違った人物の電話番号です（彼らは個人秘書ではありませんでした）。彼らは正しい人物のメッセージを取った/コンタクトの正しい番号を提供しました| 中立シグナル | シーケンス終了 | Accepted のまま |
| Incorrect Contact: Not Answered/Other |ボイスメールに到達したが、そのボイスメールは連絡しようとしている人物以外のものだった。または、その人物は会社のディレクトリにリストされておらず、会社のメイン番号に電話していた |中立シグナル | シーケンス終了 | Accepted のまま |
| Incorrect Contact: Answered: Gave Referral | 間違った人物だったが、話す紹介先を提供してくれた。紹介先が誰かをノートに記録してください。 | ポジティブシグナル | シーケンス終了 | Qualifying |
| Incorrect Contact: No Authority | 電話に出た人物は、購入を進める権限も決定権も持っていない。| ネガティブシグナル | シーケンス終了 | Accepted のまま |
|Correct Contact: Discovery Call Set  | 通話中にディスカバリーコールをスケジュールすることができた。SFDC にトリガーが存在し、このオプションが選択されると自動的にリードステータスが Qualifying に変更されます | ポジティブシグナル | シーケンス終了 | Qualifying |

## コールトラブルシューティング

- [Call Audio Troubleshooting](https://support.outreach.io/support/solutions/articles/159000426364)- 通話接続後にコールオーディオに問題がある場合、リンク先のページで概説されている手順に従ってください。

- [Call Connection Troubleshooting](https://support.outreach.io/support/solutions/articles/159000425754-troubleshooting-outreach-voice-call-connection-issues) - 通話が接続されない問題が発生している場合、リンク先のページで概説されている手順に従ってください。

## 着信通話

番号が割り当てられている場合、プロスペクトがコールバックすると、あなたに着信します。

**ローカルプレゼンス（AMER）の場合:**

Outreach は以下の順序でローカルプレゼンスの着信通話をルーティングします:

- 着信電話番号が単一のプロスペクトと一致する場合、そのプロスペクトがコールしたローカルプレゼンス番号を使用してこの番号にコールした最後のアクティブユーザーに通話をルーティングします。
- 着信電話番号が単一のプロスペクトと一致する場合、プロスペクトのオーナーにルーティングします。
- 電話番号が単一のプロスペクトと一致する場合、ANY ローカルプレゼンス電話番号を使用してこの番号にコールした最後のアクティブユーザーに通話をルーティングします。
- 電話番号が通話（発信/着信）と一致する場合、その通話に参加していたユーザーにルーティングします。
- ローカル番号が Outreach で使用されたことがない場合（例: 最近購入されたが使用されていないローカル番号）、Outreach は最も最近のアクティブな Outreach ユーザーに通話をルーティングします。

## Outreach での新しい電話番号のリクエスト

**概要**

現在の Outreach 電話番号がスパムとしてフラグされていると思われる場合、以下のプロセスに従って代替番号をリクエストできます。すべてのリクエストには、新しい番号がプロビジョニングされる前に、現在の番号がスパムとしてマークされている証拠が必要です。

**ステップ 1: 番号がスパムとしてマークされていることを確認**

リクエストを提出する前に、番号がフラグされていることを確認し、文書化する必要があります。証拠の許容される形式は次のとおりです:

- [Should I Answer](https://www.shouldianswer.net/) などのスパムチェックツールや、番号レピュテーションサービスのスクリーンショットで、あなたの番号がフラグされていることを示すもの
- プロスペクトの発信者 ID が「Spam」、「Spam Likely」、または「Scam Likely」を表示しているスクリーンショットまたは録画

**ステップ 2: リクエストの提出**

文書化された証拠を取得したら、**#mktgops** Slack チャンネルからリクエストを提出するか、以下の情報を含むマーケティングオペレーションの Issue を作成してください:

- 現在の Outreach 電話番号
- Outreach のユーザー名/メール
- 証拠（上記の通りスクリーンショット）
- 代替番号の希望のエリアコード（該当する場合）

**ステップ 3: レビューとプロビジョニング**

マーケティングオペレーションがリクエストをレビューします。証拠が十分な場合、新しい番号がプロビジョニングされ、Outreach プロファイルに割り当てられます。変更が完了すると、Slack または GitLab の Issue で通知されます。

**重要な注意事項**

- スパム証拠なしで提出されたリクエストは処理されません。
- 番号レピュテーションを維持するため、キャリアのスパムフィルターをトリガーする可能性のある大量のコールドコールパターンを避けてください。[Sales Development Outreach Playbook](/handbook/marketing/marketing-operations/outreach/#best-practices) でベストプラクティスを確認してください。
- 番号の交換は、新しい番号がスパムフリーのままであることを保証するものではありません。コーリングのケイデンスと行動が、番号レピュテーションの主要な要因です。

**質問はありますか？** **#mktgops** のマーケティングオペレーションにお問い合わせください。

## CRM への/からの同期プロセス

Outreach から SFDC への、およびその逆の同期は、自動的に 10 分ごとに行われます。同期を強制する必要がある場合は、Outreach のプロスペクト/アカウントのサイドパネルにある小さなクラウドアイコンを押して、CRM へのプッシュ同期、または Outreach へのプル同期を強制するオプションがあります。

## 利用可能な統合

- Highspot
- 6Sense
- Terminus
- Qualified
  - Qualified for Outreach により、セールス担当者は最も価値のあるプロスペクトとミーティングを行うのに役立つ最新のツールをツールキットに持つことができます。彼らはミーティングを予約するためにメールの返信を待つ必要がなくなりました。代わりに、セールス担当者は、メールシーケンスからプロスペクトがあなたのウェブサイトに到着するその「魔法の瞬間」を活用して、チャンネル間で一貫した会話をすぐに開始できます。これにより、より多くのウェブコンバージョン、より多くのパイプライン、そしてより多くのクローズドウィンビジネスが生まれます。さらに、シームレスな購買体験を提供し、これまで以上に迅速にクリックからクローズまで移行できるようにします。要するに、セールスチームは Outreach を使ってターゲットアカウントへのプロスペクトを行い、Qualified を使ってクローズします。
  - Qualified Signals は、Outreach メールクリックスルーを含むファーストパーティおよびサードパーティのウェブサイトエンゲージメントと Salesforce データを組み合わせて、B2B 企業のターゲットアカウントの購買意図を予測する AI ベースの製品です。Qualified の Outreach との統合により、Outreach プラットフォーム内で Signals データが表示され、アウトバウンドセールス担当者が 1 日を過ごす場所で確認できます。これは、セールス担当者がより多くのパイプラインを生成し、ノルマを達成するために、どのアカウントへのプロスペクトを行うべきかについて、迅速なアクセスと明確な指示を提供するため有益です。ここから、セールス担当者は VIP バイヤーにパーソナライズされたアウトバウンド Outreach メールを迅速に作成して送信し、サイトに戻すことができます。このアプローチは、セールスサイクルを加速し、より効率的により多くのパイプラインを促進するのに役立ちます。
- LISN
  - Sales Navigator for Outreach 統合は、販売を行っている場所でまさに、Sales Navigator の豊富なプロフェッショナルデータと対話することによる強化された体験を提供します。Outreach for Sales Navigator では、LinkedIn Sales Navigator のインテリジェンスタイル（リード情報とアカウント）にアクセスでき、Outreach プラットフォームから直接 LinkedIn Sales Navigator タスクを実行できます。
  - [LinkedIn Sales Navigator を Outreach プロファイルに追加する方法](https://support.outreach.io/hc/en-us/articles/115003566233-How-To-Add-LinkedIn-Sales-Navigator-to-an-Outreach-Profile)

## トリガー

Outreach のトリガーは、特定のプロスペクト/アカウント/タスク条件に基づいてアクションとワークフローを自動化します。次のトリガーが Outreach でアクティブです

| トリガー名 | 説明  |
| ------ | ------ |
| Add Timezone to Prospect | 北米外にいるプロスペクトにタイムゾーンを追加します。 |
| Bad Data - Bad Phone Number/Bounced Email - Stop Sequence | コールが Bad Number としてマークされ、Bad Data Reason が Bounced Email の場合、シーケンス内のプロスペクトを停止します。 |
| Bad Data - Email Bounced/Bad Phone number - Disqualified | メールがバウンスされ、Bad Data Reason が Bad Phone Number の場合、プロスペクトステータスを Disqualified としてマークします。 |
| Campaign - White Glove Sequence |HP Reason が White Glove で、HP が true、ステータスが MQL の場合、プロスペクトを `SD IB HT Global EVT White Glove Task Step 1` に追加します。 |
| Campaign- Uncheck High Priority | HP が true で、Actively Being Sequenced が true の場合、HP チェックを削除します。 |
| New Task - CC: Answered: Asked for Call Back | コール処理が `CC: Answered: Asked for Call Back` に設定されたとき、プロスペクトに新しいタスクを作成します |
| New Task - CC:Answered: Using Competition | コール処理が `CC: Answered: Using Competition` に設定されたとき、プロスペクトに新しいタスクを作成します |
| New Task - Incorrect Contact: Answered: Gave Referral | コール処理が `Incorrect Contact: Gave Referral` に設定されたとき、プロスペクトに新しいタスクを作成します |
| New Task - PTP Score Updated | PTP スコアが 4 または 5 に更新され、プロスペクトが Actively Being Sequenced のとき、プロスペクトに新しいタスクを作成します。 |
| Operational - Attempting to Contact - Bounce - Bad Data | メーリングタスクが Bounced としてマークされた場合、Bad Data Reason を `Bounced Email` に設定します。 |
| Operational - Bad Data - Stop Sequences | プロスペクトが Actively Being Sequenced で、ステータスが Disqualified、Disqualified reason が Bad Data の場合、すべてのシーケンスを停止します。 |
| Operational - Ineligible - Support | プロスペクトステータスが Ineligible で、現在のシーケンス名に `Support` または `Support/Technical Related` が含まれている場合、Ineligible Reason を `Support` に設定します |
| Operational - LinkedIn/Task 1st Step- Accepted | LinkedIn ステップがシーケンスの最初のステップとして完了した後、ステータスを `Accepted` に設定します。 |
| Operational - Meeting Booked - Move to Qualifying | ミーティングが予約されたとき、ステータスを `Qualifying` に設定します。 |
| Operational - Not Interested - Unsubscribe - Disqualified | ステータスが Disqualified で、Disqualified Reason が空白、Date opted out が空白でない場合、Disqualified Reason を `Unsubscribe` に設定します。 |  
| Operational - Recycle- Set No Response | ステータスが Recycle で、Recycle Reason が空の場合、Recycle Reason を `No Response` に設定します。 |
| Operational - Remove Status Reason when updated |ステータスが `MQL`、`Inquiry`、`Accepted`、`Raw`、`Qualifying`、または `Qualified` の場合、すべてのステータス理由を削除します |
| Operational - Set qualifying stage when IQM set | IQM が予約されたとき、ステータスを `Qualifying` に設定します。 |
| Operational- Bad Phone Number - Bad Data Reason | コール処理が Bad Phone Number の場合、Bad Data Reason を `Bad Phone Number` に設定します |
| Set Disqualified Reason - Call Disposition: Incorrect Contact: Answered | コール処理が `Incorrect Contact: Answered` に設定されたとき、ステータスを `Disqualified` に設定します |
| Set Disqualified Reason - Call Disposition: Personal Use | コール処理が `CC: Answered: Personal Use` に設定されたとき、ステータスを `Disqualified` に、Reason を `Personal Use` に設定します |
| Set Nurture Reason - Call Disposition: Competition | コール処理が `CC: Answered: Using Competition` に設定されたとき、ステータスを `Recycle` に、Recycle Reason を `Evaluating` に設定します |
|Set Nurture Reason - Call Disposition: Not Interested | コール処理が `CC: Answered: Not Interested` に設定されたとき、ステータスを `Recycle` に、Recycle Reason を `No Interest` に設定します |
| Set Nurture Reason - Call Disposition: Not Opp yet | コール処理が `CC: Answered: Info Gathered: Not Opp yet` に設定されたとき、ステータスを `Recycle` に、Recycle Reason を `Evaluating` に設定します |
| Set Recycle Reason - Call Disposition: Gave referral |コール処理が `CC: Incorrect Contact: Answered: Gave Referral` に設定されたとき、ステータスを `Recycle` に、Recycle Reason を `Evaluating` に設定します |
| Set to Qualifying - Call Disposition: Answered: Asked for Call Back | コール処理が `CC: Answered: Asked for Call Back` に設定されたとき、ステータスを `Qualifying` に設定します |

## リソース

### コールコーチングのベストプラクティス

#### 許可と選択のガイドライン

**1. グループ/パブリックセッション:**

- チームメンバーは自身のコールを自己推薦するか、コールが共有される前に明示的な書面による許可を提供する必要があります
- 他者の前でコールを再生して誰かを驚かせないでください
- セッションの少なくとも 24〜48 時間前に通知してください
- 議論される特定のセグメントをプレビューできるようにしてください
- 正当化を要求せずにオプトアウトオプションを提供してください

**2. 一対一のセッション:**

- マネージャーと担当者は、レビューするコールを共同で選択する必要があります
- 困難なコールと成功したコールのバランスを取ります（勝利と改善領域の比率は 2:1 を目指す）
- 困難なコールを失敗ではなく、学習の機会として捉えてください

#### フィードバック提供基準

| **すべきこと** | **すべきでないこと** |
|--------|-----------|
| うまくいったことから始める—常に最初に具体的な強みを特定する | 皮肉や嘲笑的な言葉を使う |
| 個人的な属性ではなく、行動とテクニックに焦点を当てる（「あなたはリスナーが上手くない」ではなく「質問はもっとオープンエンドにできた」） | チームメンバーを互いに否定的に比較する |
| 具体的で実行可能な代替案を提供する（「代わりに X と尋ねてみて」または「その反対意見への対処のフレームワーク」） | 議論のための休憩なしに複数の批判を積み重ねる |
| 学習の一部として間違いを正常化する（「これは私たち全員が苦労する難しい反対意見」） | 特に要求されない限り、同じコールを繰り返しレビューする |
| 担当者にまず気づいたことを尋ねる—自己評価は意識を高める | 明示的な許可なしに、Slack や他のチャンネルでコールスニペットを共有する |

#### セッション構造の推奨事項

**1. グループセッション（30〜45 分）**

| **ステップ** | **説明** |
|----------|-----------------|
| 1. グラウンドルールを設定する | 開始時に心理的安全性のグラウンドルールを設定する |
| 2. クリップをレビューする | 2〜3 つの短いクリップ（それぞれ最大 2〜3 分）をレビューする |
| 3. フレームワークを適用する | 「うまくいったこと/さらに良くなるなら」のフレームワークを使用する |
| 4. 観察を求める | 判断ではなくピアの観察を求める（「私が気づいたのは...」 vs.「彼らは...すべきだった」） |
| 5. アクションで締めくくる | 重要なポイントとロールプレイ練習で終了する |

**2. 一対一のセッション（毎週/隔週）**

| **ステップ** | **説明** |
|----------|-----------------|
| 1. コールをレビューする | 1〜2 件の完全なコール、または 3〜4 件のキーモーメントをレビューする |
| 2. 担当者主導の評価 | 担当者にまず観察を主導させる |
| 3. 計画を共同作成する | 1〜2 つの具体的な焦点領域を持つアクション計画を共同作成する |
| 4. フォローアップ | 進捗を追跡するためにフォローアップをスケジュールする |

#### 保護メカニズム

- 苦労を共有することが奨励される「学習ゾーン」文化を確立する
- 誰のコールがレビューされるかをローテーションし、誰もが標的にされていると感じないようにする
- コールレビューをパフォーマンス改善計画（PIP）や懲戒処分に直接結びつけない
- コールが重大なパフォーマンスの問題を明らかにする場合は、最初にプライベートに対処する
- 担当者が共有に同意しない限り、フィードバックは参加者間で機密であることを文書化する
- グループコールコーチングセッションは録画されるべき

<br>

**これらのパターンに気づいた場合、介入が必要です:**

| **赤信号** |
|--------------|
| チームメンバーが自分のコールがレビューされることを積極的に避けている |
| セッション中の防御的または引っ込んだ行動 |
| コールボリュームの減少（録画されることを避けている） |
| 同じ「安全な」コールだけが提供されている |

#### コール録画アクセス & コメントポリシー

**閲覧アクセス**

組織内のすべての従業員は、自己学習および専門能力開発の目的で、録画されたコールを閲覧できます。

**コメント権限**

| **役割** | **権限レベル** | **ガイドライン** |
|----------|---------------------|----------------|
| 担当者の直属マネージャー | コメント可能 | 品質基準に従う必要がある |
| Sales Dev 内のディレクターおよび VP | コメント可能 | 品質基準に従う必要がある |
| Sales Dev Enablement | コメント可能 | 品質基準に従う必要がある |
| その他のすべてのチームメンバー | 閲覧のみ | 担当者のマネージャーを通してフィードバックを共有できる |

**理由**

学習における透明性は価値があるものの、無制限のコメントは以下につながる可能性があります:

- 担当者を混乱させる一貫性のないまたは矛盾するフィードバック
- 複数のソースからの批判の積み重ね
- 専門知識を超えたガイダンスを提供するジュニアチームメンバー
- コーチングではなく憂さ晴らしのフォーラムになるコメント

**その他のすべてのチームメンバー**

- ピアの例から学ぶためにコールを閲覧できる
- コールに関する貴重なフィードバックがある場合:
  - 担当者のマネージャーと共有する
  - マネージャーが評価し、コメントとして追加するかどうかを決定する（適切な場合はソースを帰属させる）
  - またはマネージャーがチームメンバー間の直接的な会話を促進する（より適切な場合）

### Sales Development Spot Checking コールビュー

以下の表は、過去 7 日間に行われたコールを Sales Development チームごとに、ポジティブな結果と反対意見のビューとともに、スポットチェックとコーチング目的で示しています。

| チーム | ポジティブな結果 | 反対意見 |
|------|------------------|------------|
| BDR AMER COMM | [ポジティブコールを表示](https://web.outreach.io/calls?smart_view=25376) | [反対意見を表示](https://web.outreach.io/calls?smart_view=25388) |
| BDR AMER EAST-WEST | [ポジティブコールを表示](https://web.outreach.io/calls?smart_view=25377) | [反対意見を表示](https://web.outreach.io/calls?smart_view=25389) |
| BDR AMER FINS-LATAM | [ポジティブコールを表示](https://web.outreach.io/calls?smart_view=25378) | [反対意見を表示](https://web.outreach.io/calls?smart_view=25390) |
| BDR AMER PUBSEC | [ポジティブコールを表示](https://web.outreach.io/calls?smart_view=25379) | [反対意見を表示](https://web.outreach.io/calls?smart_view=25391) |
| BDR BASE TEAM | [ポジティブコールを表示](https://web.outreach.io/calls?smart_view=25375) | [反対意見を表示](https://web.outreach.io/calls?smart_view=25387) |
| BDR EMEA DACH | [ポジティブコールを表示](https://web.outreach.io/calls?smart_view=25380) | [反対意見を表示](https://web.outreach.io/calls?smart_view=25392) |
| BDR EMEA TELCO EGC | [ポジティブコールを表示](https://web.outreach.io/calls?smart_view=25381) | [反対意見を表示](https://web.outreach.io/calls?smart_view=25393) |
| BDR EMEA NEUR UKI | [ポジティブコールを表示](https://web.outreach.io/calls?smart_view=25382) | [反対意見を表示](https://web.outreach.io/calls?smart_view=25394) |
| BDR EMEA SEUR | [ポジティブコールを表示](https://web.outreach.io/calls?smart_view=25383) | [反対意見を表示](https://web.outreach.io/calls?smart_view=25395) |
| XDR APJ | [ポジティブコールを表示](https://web.outreach.io/calls?smart_view=25384) | [反対意見を表示](https://web.outreach.io/calls?smart_view=25396) |
| SDR AMER | [ポジティブコールを表示](https://web.outreach.io/calls?smart_view=25385) | [反対意見を表示](https://web.outreach.io/calls?smart_view=25398) |
| SDR EMEA | [ポジティブコールを表示](https://web.outreach.io/calls?smart_view=25386) | [反対意見を表示](https://web.outreach.io/calls?smart_view=25397) |

### Sales Development Kaia プレイリスト

以下のプレイリストは、大きな可能性を示しているコールを紹介しています。私たちは [アウトバウンドプロスペクティングプロジェクトでの Claude コールランクプロンプト](/handbook/marketing/sales-development/#claude-sales-dev-bdrsdr-user-guide) を使用して、Outreach で 2 分以上の継続時間を持つすべてのコールを並べ替え、その後の手動スクリーニングを 2 番目のステップとして行います。

完全なリストは [Outreach Kaia](https://web.outreach.io/kaia/playlists/101) で確認でき、以下にランキングの簡単な説明があります。

| カテゴリ | スコア | 説明 |
|----------|-------|-------------|
| **ベンチマークパフォーマンス** | 75-100 | 深いディスカバリー、当社のセールスメソドロジーの目的的な使用、差別化された AI ポジショニング、コンサルタティブアプローチ、強力なパイプライン品質。マイナーなギャップのみ。 |
| **成長機会** | 50-74 | 表面的なディスカバリー、一般的なポジショニング、シングルスレッド。具体的な改良ニーズを伴うしっかりとした基盤。 |
| **開発フォーカス** | 0-49 | スキル構築の機会。リサーチ、パターン中断、ディスカバリーまたはトラップ設定の質問、差別化要素のような要素が存在し、改善できる。 |

### コメント品質基準

**すべての認可されたコメンターは、これらのガイドラインに従う必要があります:**

| **基準** | **説明** |
|--------------|-----------------|
| **建設的** | 改善できることとその方法に焦点を当てる |
| **具体的** | 正確なタイムスタンプを参照し、明確な例を提供する |
| **バランスのとれた** | 改善領域だけでなく強みも記録する |
| **実行可能** | 代替アプローチやテクニックを含める |
| **敬意ある** | 正の意図を仮定するプロフェッショナルなトーン |

#### コメントレビュー

- マネージャーは、毎週、自分の直属の部下のコールに他者が残したコメントをレビューする必要があります
- ディレクター/Enablement は、同じコールに関する冗長または矛盾するフィードバックを避けるために調整する必要があります
- コメントが上記の品質基準に違反する場合、担当者のマネージャーは削除のためにフラグを立てる必要があります

#### 違反

| **インスタンス** | **アクション** |
|--------------|------------|
| 最初のインスタンス | ポリシーに関する口頭でのコーチング |
| 2 回目のインスタンス | 書面による警告 |
| 継続的な違反 | コメント特権の喪失と潜在的なエスカレーション |

## Outreach SFDC レポートのアップロード

正常なアップロードに必要ないくつかの前提条件があります:

- レポート形式は、Leads、Contacts & Accounts、または Opportunity with Contact roles 形式である必要があります
- レポートに Contact ID フィールドが追加されていることを確認してください
- すべてのリードまたはすべてのアカウントに対してレポートを実行してください（My Leads や My Contacts だけでなく）。
- PUBLIC FOLDER に保存する必要があります。
- Salesforce はインポートを 1 インポートあたり 2000 レコードに制限します。
- 必ずこのパブリックレポートにメールアドレスが含まれていることを確認してください。そうでなければ、SFDC への重複/アクティビティのログがリスクにさらされます。

詳細はこちらをご覧ください: https://support.outreach.io/hc/en-us/articles/206297527-How-To-Import-Salesforce-Reports-into-Outreach-to-Bulk-Create-Prospects-and-Opportunities

CSV アップロードは私たちの組織では有効になっておらず、現在のところそうする予定はないことに注意してください。Opportunity レポートも現時点では有効になっていません
