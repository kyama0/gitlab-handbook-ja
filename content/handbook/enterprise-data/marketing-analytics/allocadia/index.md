---
title: Allocadia
description: Allocadia はマーケティングパフォーマンス管理ソフトウェアです。
upstream_path: "/handbook/enterprise-data/marketing-analytics/allocadia/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-29T00:00:00Z"
translator: claude
stale: false
---

## Allocadia について

複数のスプレッドシート、分散したデータセット、不整合なマーケティングプランに別れを告げましょう。マーケティングパフォーマンス管理（MPM）の認定リーダーである Allocadia の予算管理および戦略的計画プラットフォームは、マーケティングリーダーとそのチームの業務卓越性の基盤です。データドリブンなインサイトを活用し、マーケティングリーダーは何が機能しているかを可視化して、より大きな計画の俊敏性を実現できます。Allocadia.com で、マーケティングをビジネスのように運営する方法をご覧ください。

💰 購入バージョン：[Allocadia Optimize](https://www.uptempo.io/)

🔑 ログインはマーケティング予算保有者が利用可能

## 概要 - どのように機能するか？

- 年次・四半期別の内訳で、トップダウンの部門予算を `Investment Target`（投資目標）に入力します。これらは取締役会承認済みのプランに結びつく金額です。CMO から取締役会がプランを承認したら、各部門が計画・予測に使用できる資金の枠組みを示すこれらのターゲットをロックします。
- 以前の非ヘッドカウントのスプレッドシートで行ったようなヒエラルキーグリッドに、ボトムアップの部門 `Plans`（プラン）を入力します。各予算保有者は、最も理にかなった形で予算を整理するためにカテゴリーとサブカテゴリーを使用できます。これにより、年間に使用する予定の経費項目のリストが確立されます。合計した `planned` が `investment target` の枠組みと一致しない場合でも、部門は資金を**失いません**。プランが設定されたら、四半期ごとにロックできます。詳細は[Allocadia ドキュメント](https://support.allocadia.com/hc/en-us/articles/115004969767-What-is-a-Plan-Column-)をご覧ください。
- その後、これらの同じ品目に `Forecasts`（予測）を入力し、イベント/キャンペーン/経費の詳細を学ぶにつれて詳細度と精度を高めていきます。

前年度と同様に、**四半期**末にマーケティングに提供された全枠組みを使い切れない場合、その費用は**失われます**。

Allocadia は[以下](/handbook/enterprise-data/marketing-analytics/allocadia/#integrations-behind-the-scenes)で詳しく説明する複数のシステムと統合しています。ただし、[このプレゼンテーション](https://docs.google.com/presentation/d/1tIWyzb6P9_-c-S1tYEGX5fC_jdjrMt8_/edit?usp=sharing&ouid=118269909391513703853&rtpof=true&sd=true)は概要を提供しています。

## Allocadia サポートページの詳細リンク

- [Allocadia 用語集](https://support.allocadia.com/hc/en-us/articles/115005305868-Glossary)
- [Allocadia のナビゲーション](https://support.allocadia.com/hc/en-us/articles/115004960047-Navigating-Allocadia)
- [Activities タブのナビゲーション](https://support.allocadia.com/hc/en-us/articles/115004968067-Navigating-the-Activities-Tab-)
- [アクティビティ/予算明細の検索](https://support.allocadia.com/hc/en-us/articles/115005135427-Searching-your-Budget)
- [予測ステータスタグの理解](https://support.allocadia.com/hc/en-us/articles/115000885934-Understanding-Forecast-Status-Tags)
- [アクティビティプランの切り替え](https://support.allocadia.com/hc/en-us/articles/115004969207-Switching-Between-Activity-Plans)
- [予算の再配分（転送）](https://support.allocadia.com/hc/en-us/articles/360060630433-What-are-Budget-Reallocations-##)

## Finance とのパートナーシップ

マーケティングと Finance は Allocadia を使用する際に共同作業します。[Marketing Finance ハンドブック](https://internal.gitlab.com/handbook/finance/financial-planning-and-analysis/marketing-finance/#important-dates)ページには以下が記載されています：

1. [Finance Marketing Allocadia トレーニング](https://internal.gitlab.com/handbook/finance/financial-planning-and-analysis/marketing-finance/#allocadia-training-materials)
1. Allocadia でのビューに関連する[財務用語](https://internal.gitlab.com/handbook/finance/financial-planning-and-analysis/marketing-finance/#finance-terminology)
1. Finance とマーケティング間の[重要な日程](https://internal.gitlab.com/handbook/finance/financial-planning-and-analysis/marketing-finance/#important-dates)
1. その他！

## Allocadia 社内コミュニケーション

Slack ルームがあります！allocadia_mktg-budget-holders を検索してください。

すべての予算保有者が追加されており、Marketing ops がアクセス付与の責任を担います。

## ホーム

このセクションにはメイングリッドが配置されています。このセクションは Allocadia 管理者向けですが、NetSuite のアップロードが毎月行われる際に経費を品目にマッピングするためにすべての予算保有者が使用します。

このセクションでは、`view-roll up` ボタンをクリックすることで、予測対計画の観点からチームの状況も確認できます。GitLab Unfiltered の[動画ウォークスルー](https://youtu.be/TnY8T9s3o-E)をご覧ください。

ホームは、各チームの年間の四半期別ターゲットが入力される場所でもあります。これを行うには、パネル列のチームの隣にある `Panel`（ホバー時にロールアップパネル）と呼ばれるアイコンをクリックして開きます。下にスクロールして、各四半期の Qx Approved Target フィールドにトップダウンのターゲット/予算を入力します。これは管理者のみが実行できます。

## アクティビティ

アクティビティ計画セクションは、四半期/年次プランの戦術を追加し、`Investment Target` と `Plan` vs. `Forecast` の高レベルメトリクスを素早く確認できる場所です。見ているビューに応じて、四半期ベースか会計年度ベースのデータが表示されます。

### ビュー

画面の右上には、さまざまな `Views` のドロップダウンが表示されます。Allocadia の `plan` がロックされる前にアクティビティを実際に変更する場合は、`plan` ビューにいることを確認してください。`plan` がロックされたら、`Forecast` ビューにいないと変更できません。Finance カレンダーに合わせて四半期ごとにプランをロックしています。

ビュードロップダウン内では、ターゲットを四半期ごとまたは年次で表示するオプションがあります。ビジネスの運営に最も役立つビューを使用してください。

#### ビューの定義

- **FM Forecasting Monthly** - 予測された支出を持つ品目のみを表示 - FMM アクティビティプランでのみ利用可能
- **FM Planning Monthly** - プランがロックされた時点で存在していた品目のみを表示 - FMM アクティビティプランでのみ利用可能
- **My Forecast FYXX** - 計画に対して予測金額を追加したことを確認できる場所
- **Q1 team Tracking** - Q1 に開始日と終了日がある計画済みと予測済みの品目の両方を表示
- **Q2 team Tracking** - Q2 に開始日と終了日がある計画済みと予測済みの品目の両方を表示
- **Q3 team Tracking** - Q3 に開始日と終了日がある計画済みと予測済みの品目の両方を表示
- **Q4 team Tracking** - Q4 に開始日と終了日がある計画済みと予測済みの品目の両方を表示
- **Quarterly Summary** - 四半期別に分類した計画、予測、実績の年次サマリーを表示

### アクティビティグリッド

#### メトリクス

各 `View` の左上にメトリクスが表示され、選択した `View` に応じたターゲット、プラン、予測の合計と比較が提供されます。

#### ボタン

##### カテゴリーとサブカテゴリー

グリッド内のこれらは、ヒエラルキー列に表示されるアイテムです。ビジネスの運営に最も適した方法で整理できます。

四半期/年間のボトムアップ `Plan` を入力するか、経費が確定していくにつれて `Forecast` を入力するかに関わらず、同じカテゴリー（と品目）がこのグリッドに表示されます。

##### 品目

支払われるすべての契約に対して 1 つの品目が必要です。ただし、同じベンダーに関連する/まとめて請求される複数の費用がある場合は、それらすべてを同じ品目にまとめることができます。

品目の整理に困っていますか？少しトリッキーですが、品目を追加した後に品目の左側にある小さな 3 本線の「ハンバーガー」を押すと、正しいカテゴリーまたはサブカテゴリーの下に配置できます。ロールアップを示す矢印が表示される必要があります。手動ソート以外のソートオプションはありません。一度配置すると、そこに残ります。

##### プレースホルダー

プレースホルダーは、経費が生じることはわかっているが、ベンダーなどの情報がほとんどない場合に使用します。これにより、トップダウン予算から何が残っているかを確認できるよう `Investment Target` 全体を完全に `Plan` できます。現在、FM チームはプレースホルダーを使用しないことを好みます。プレースホルダーはより多くの情報が確定するにつれて更新する必要があります。

##### 削除

このボタンにより、品目またはカテゴリーを削除できます。削除ボタンは Marketing Finance および Marketing Ops の管理者のみが使用できます。品目、カテゴリー、またはサブカテゴリーの削除が必要な場合は、#allocadia-mktg-budget-holders Slack チャンネルで Marketing Finance または Marketing Ops に連絡してください。品目に以前の月の経費または請求書データがある場合は削除できません。

##### Transfer のリクエスト

このボタンを使用して別の部門から資金をリクエストできます。Allocadia では特定の承認者が設定されており、電子メールで通知を受け取り、転送を承認または拒否できます。詳細は上の Budget Reallocation リンクをご覧ください。ホームページでは、`transfer` は解決されるまで赤字で表示されます。

行われた転送を確認するには、調べたいアクティビティプランから転送列をクリックし、詳しく知りたいステータスで並べ替えます。[動画ウォークスルー](https://www.youtube.com/watch?v=jKtgDtuo-Hc)をご覧ください。（Unfiltered にログインしている必要があります。）

##### グリッド内

- ヒエラルキー - カテゴリー、サブカテゴリー、品目が整理されている場所。
- ベンダー - Coupa（今後の PO システム）に一致するよう、経費のベンダー名を記入する必要があります。また、詳細パネルにも追加しました（入力に基づいてメイングリッドから削除することも検討中）。
ベンダーレポートで同じベンダーの品目を集計しようとしている場合、標準化された命名規則に準拠するために、同じ大文字/小文字の表記とスペースを使用することが重要です。ベストプラクティスとして、ベンダーのウェブサイトを確認し、正確な命名規則を使用することをお勧めします。よく使用するベンダーの例と記載方法：

1. Demandbase
1. SimplyDirect
1. Tenandone
1. Reachdesk

Coupa への移行に伴い、そのインテグレーションにより、すでにシステムに存在するベンダーについては標準化されたベンダー名のリストを使用できるようになるため、より簡単になるはずです。

ベンダーを詳細パネルに移動しました - 現在は両方に表示されており、どちらでも更新できますが、異議がなければメイングリッドから削除することを検討しています。

- コメント - 支出に関するメモに使用できますが、レポート可能、ソート可能ではなく、コメントが行われたことを予算保有者（または誰にでも）に通知しません。
- 月 - ここに月別の金額を入力します。入力を容易にするためにコピー＆ペースト機能とタブキーで月間を移動できます。年間 12,000 ドルのコストを計算する場合は `12000/12` などの式を入力することもできます。`View` に応じて、ボトムアップの `Plan` と継続的な `Forecast` の列があります。そして毎月 NetSuite から `Actuals` がロードされると、それらの金額はそれらの列に表示されます。

##### 詳細パネル

詳細パネルには、ヒエラルキー列の品目名の右側にある書籍アイコンからアクセスします。書籍が赤い場合は、必須の詳細が欠けていることを意味します。必須事項が完了すると黒くなります。品目を追加した際にシステムで設定されたワークフローが、必須フィールドをすべてキャプチャするのに役立ちます。

カテゴリーまたはサブカテゴリー内のすべての品目は、デフォルトで親（カテゴリー/サブカテゴリー）の詳細を継承し、必要に応じて子の品目でも上書きできます。したがって、最も高いカテゴリーレベルで詳細パネルを記入し、異なる個々の品目を調整することが最も理にかなっています。

**Details** タブ

- 支出タイプ - 勘定コードに関連しますが、マーケターにとってより詳細な情報を提供します。
  - Field Marketing (FM) のみ - [Allocadia Impact Modeller](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/issues/159) を使用すると、選択した支出タイプに基づいて、歴史的な転換率から期待される ROI が出力されます。
  - Field Marketing (FM) のみ：`Spend Type` が以下の場合、イベントが `In person`（対面）かどうかの Y/N が尋ねられます：
    - Conferences
    - Executive Roundtable
    - Field Event
    - Owned Event
    - Speaking Session
    - Vendor Arranged Meetings
    - Workshop
- （FM のみ）チャンネルパートナーが関与していますか？Y/N。Y の場合は、チャンネルパートナー名を手動で入力する必要があります。
- （FM のみ）アライアンスパートナーが関与していますか？Y/N。Y の場合は、アライアンスパートナー名を手動で入力する必要があります。
- GitLab Marketing Issue URL - マーケターがアクティビティを管理している Issue へのリンク（調達 Issue ではありません - 以下を参照）；N/A の場合は空白にしてください
- リージョン - 支出が特定のリージョン向けの場合はここで選択します。
- （FM のみ）サブジオ - フィールドマーケターがより詳細な場所を選択できます。
- （FM のみ）ジオ - フィールドマーケターがより詳細な場所を選択できます。
- （FM のみ）国 - フィールドマーケターがより詳細な場所を選択できます；優先国分析のためにも追跡されます。
- キャンペーンタイプ - Marketo と SFDC で使用されるタイプに合わせる必要があります；上の支出タイプの入力に基づいて制限されます。
- 既存の SFDC キャンペーン - 設定されたヒエラルキーに合致するすべてのキャンペーンを含むドロップダウン；実際の SFDC イベント/キャンペーンに関係しない場合は空白にしておけます。
  - 注：エントリー時に SFDC キャンペーンが作成されていない場合、詳細パネルにキャンペーンを手動で追加する必要はありません。SFDC キャンペーンが作成されると、Allocadia<>SFDC の同期が Allocadia の品目を SFDC キャンペーンに一致させ、詳細パネルにキャンペーンが表示されます。
- 作成するキャンペーン名 - Marketo プログラムと SFDC キャンペーンを作成するために使用するキャンペーン名を追加します（`ISO date_event name` 構造を使用、例：20220520_TheBestEventEver）。
- 支払い方法 - 請求書または Naven Expense のタイプを選択します。Other はほとんど使用されません。
- セグメント - 支出が特定のセグメントまたは複数のセグメント向けの場合はここで選択/パーセンテージを配分します。すべて向けの場合は単純に All を選択して保存します。
- 開始日 - 経費が開始する日付。発生主義に使用され、ソフトウェア更新のタイミングを示すためにレポートに引き込めます。
- 終了日 - 経費が終了する日付。発生主義に使用され、ソフトウェア更新のタイミングを示すためにレポートに引き込めます。開始日や終了日の使用について不明な場合は、Finance ビジネスパートナーにご連絡ください。
- GitLab Procurement Issue URL - Allocadia 内でボタンをクリックして Issue を作成した場合、自動的に入力されます。
- GL Account - 上の支出タイプの入力に基づいて選択されます。GL Account は 3 つの異なるフィールドがあります — FMM 用、Contribute 用、その他のマーケティング用。インテグレーション中に GL Account に問題がある場合は、サポートにこの事実を伝えて応答を迅速化してください。

##### アクティビティグリッド内の便利なテクニック

1. 別のアクティビティプランから品目をコピー＆ペーストしたい場合は、同じアクティビティプラン内で品目を（右クリックして）コピー/ペーストしてから、右クリックの「Move」オプションを使用して品目のコピーを正しいアクティビティプランに移動する必要があります。Field Marketing チームでは、共有アクティビティのために複数のアクティビティプランに同じアクティビティの複数の品目を持つのではなく、FMM が ALL プランにお金を転送するよう求めています。

#### チャンネルマーケティングのセットアップ

**カテゴリー：** FY + 四半期
**サブカテゴリー：** Partner_Activity Name（日付は詳細パネルに記載されるため追加不要）
**品目：** MDF 000 Partner_Activity Name（000 は MDF が承認され、SFDC で資金リクエストが受理されると MDF プログラムオーナーが資金リクエスト番号に変更する「ブックマーク」を示します）

##### 複数月・四半期にまたがる MDF

1. 資金が同じ四半期内にある場合、支払いのマイルストーンが組み込まれていない限り、金額に関わらず 1 ヶ月にプランと予測を入れます。マイルストーンがある場合はそれに従います。
1. キャンペーンが複数の四半期にわたる場合は、実際に実施される内容に基づいてプランと予測の数字を分割します。例えば、9 月、10 月、11 月に合計 12,000 ドルのデジタル広告を掲載する場合、9 月のプランと予測に 8,000 ドル（4,000 ドル = 9 月 + 4,000 ドル = 10 月）、11 月に 4,000 ドルが入ります。

#### 🗓 GitLab 社内カレンダー

GitLab 内の特定のグループには、Allocadia の詳細パネル内から直接カレンダーの招待を作成する機能があります。

- **カレンダー作成アクセスを持つグループ**
- Field Marketing
- Brand Activation
- **カレンダープロセスのマッピング**
- カレンダーの招待は `line item`（品目）レベルでのみ作成できます。`Category`（カテゴリー）または `Sub-category`（サブカテゴリー）レベルではカレンダーの招待を作成**できません**。
- 詳細パネルの入力に基づき、ロジックは次のように構築されています：
  - Allocadia 内の質問：`Is this an in person event?`（対面イベントですか？）
    - 値が YES の場合は `in person events and sponsorships` カレンダーを使用 — 支出タイプに関わらず、対面イベントであればこのカレンダーに表示されます。
    - 値が null または no の場合は次の列を確認
  - 次の列：`Spend Type`（キャンペーンタイプ）
    - 値が `Self-Service Virtual Event` の場合は `GitLab Hosted Self-Service Virtual Events` カレンダーを使用
    - 値が以下のいずれかの場合：
      - `Vendor Arranged Meetings`
      - `Executive Roundtable`
      - `Sponsored Webcast`
      - `Virtual Sponsorship`
        - `External Virtual Events` カレンダーを使用
    - それ以外の場合はカレンダーの招待を作成せず、`Cannot create calendar invite for this Spend Type` というエラーメッセージを表示します。

Workshops と Webcasts にはカレンダーの招待が必要ですが、意図的にプラグインから自動作成カレンダーの招待を除外しました。`GitLab Hosted Zoom Webcasts` カレンダーは Zoom インテグレーションの作業が必要であり、そのキャンペーンタイプを実行するために必要な技術的な作業を考慮してロックされたカレンダーだからです。GitLab がホストするワークショップやウェビナーの予約については、[このハンドブックページ](/handbook/marketing/field-marketing/field-marketing-owned-virtual-events/#securing-a-virtual-workshop-or-webcast-date)をご覧ください。

カレンダーの招待は終日に設定されています。特定の時間でイベントをカレンダーに登録したい場合は、手動で時間を変更することができます。

視覚的に学ぶ方向けに、カレンダーの招待がどのように作成されるかを示す[クイック動画ウォークスルー](https://youtu.be/xa8OpqMDrJw)があります！

#### Impact Modeller

現在、この機能を使用しているのは Field Marketing チームのみです。ビューにこれを追加することに関心がある場合は、Marketing Ops の[この Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new)を開いてください。

Field Marketing が実施したキャンペーンからの MQL>SAO 転換率と SAO>Closed Won データの両方について、前会計年度分の影響を受けた転換データをロードしました。

リージョンがキャンペーンタイプの転換率を持っていない場合（多くの場合、そのリージョンがそのキャンペーンを実施しなかったため）、グローバル転換率が使用されました。また、私たちの MQL は「MQL ステータスをスキップ」できるため（SDR が実際に MQL スコアリングしきい値に達する前にリードを処理できる）、`MQL Inferred Date` フィールドを使用して MQL を仮定しました。スナップショット時点のデータを使用していますが、以下のウィジェットを参照できます。

ライブの MQL>SAO リージョナルデータは[こちら](https://10az.online.tableau.com/#/site/gitlab/views/DraftFieldMarketingMetrics_v2/KPITrend?:iid=1)、ライブの SAO>Won データは[こちら](https://10az.online.tableau.com/#/site/gitlab/views/DraftFieldMarketingMetrics_v2/KPITrend?:iid=1)でご確認いただけます。

リージョン別キャンペーン別の平均取引サイズは[こちら](https://10az.online.tableau.com/#/site/gitlab/views/DraftFieldMarketingMetrics_v2/KPITrend?:iid=13)でご確認いただけます（特定のリージョンのデータを見たい場合は、ダッシュボードに戻ってリージョンを変更する必要があります）。また、成約取引数が 3 未満の場合は、その取引サイズ情報を使用せず、TOPO モデルの ASP を使用して取引サイズを補完しました。

計算は、詳細パネルの品目レベルで指定された MQL、リージョン、セグメントデータ、キャンペーンタイプ（具体的には GitLab Issue タイプ）を考慮して行われます。

[動画ウォークスルー](https://youtu.be/bBLiwdpd5iY)（はい、ご覧には Unfiltered へのログインが必要です！;)）

##### ROI が低い場合 — どうすべきか？

Impact Modeller には歴史的な転換率がロードされているため、Impact Modeller が低い ROI を示しているにもかかわらず、投資を行うべき理由を示すビジネスケースを構築することができます。ビジネスケースには、接続する特定のアカウント、アカウントの LAM（着地可能市場規模）、過去の投資とは異なるキャンペーン前後のフォローアップ方法、提案された投資と歴史的プログラムに関する細かい事実などを含めることができます。まだプログラムをテストしたいと思っており、時には失敗することもあります。それは問題ありません！全体的なプランを確認してください。信じているプログラムのリスクを取れる余裕のある、いくつかのキャンペーンで強い ROI が組み込まれていますか？

## 📊 インサイト

ほとんどのレポートは Allocadia 内の Insights タブで行われます。レポートは最高レベルで構築され、その後ドリルダウン機能を使用するため、各チームはレポートを再作成する必要がありません。

Allocadia のレポートは GoodData を使用しています。初めてレポートにアクセスしようとすると、GoodData へのサインインが求められます。また、ブラウザとして Safari を使用している場合は、以下に注意してください：

**Safari for OS X – サードパーティ Cookie のブロックを無効化**
Safari は「Block Cookies」セクションを廃止しました。現在のバージョンの Safari で動作させるには、「Prevent cross-site tracking」と「Block all cookies」の両方のチェックボックスをオフにする必要があります。

### ダッシュボード

このセクションでは最高レベルの詳細を確認できます。

### レポート

レポートはフォルダー形式で整理されており、フォルダーをクリックするとさらに多くのレポートが開きます。

#### Field Marketing が使用するレポート

- すべての動画を表示するには、GitLab Unfiltered にログインしている必要があります。

1. `Insights>Dashboards>1.Investment Planning Summary` でリージョンの予算（Allocadia では `Current Target` と呼ばれる）を把握します。
    - 動画ウォークスルー - <span class="colour" style="color:rgb(34, 0, 204)">[https://www.youtube.com/watch?v=4hgTgpJLxVQ](https://www.youtube.com/watch?v=4hgTgpJLxVQ)</span> - Finance からプランがオープンされているときにのみ最も有用です。プランがロックされて変更が加えられ/数値が現実のものになったら、2 番目の動画を見るとよいでしょう。
1. `Insights>Dashboards>1.Investment Tracking Summary` で[投資するペースにあるか](https://support.allocadia.com/hc/en-us/articles/115003253034-Investment-Tracking-Summary-Report)を把握します - [こちらの動画](https://youtu.be/MIYFnA5xKnU)ウォークスルーをご覧ください。
1. `Insights>Dashboards>2. Pipeline>Quarterly Drill in Details All>Pipeline Plan by Campaign Type` - このレポートでは Impact Modeller に基づいた ROI データ（MQL、SAO、期待パイプライン）を確認できます -
    - [動画ウォークスルー](https://youtu.be/bauTMmEnaXc)
1. `Insights>Dashboards>2. Pipeline>Quarterly Drill in Details All>Pipeline Plan by Motion` - このレポートでは、プランが Marketing GTM モーションにどう整合しているかを確認できます。リージョンではなくアクティビティプランでフィルタリングしていることを確認してください。
    - [動画ウォークスルー](https://youtu.be/XfgckiT9_1s) -
1. 月次予測レポート - ホーム画面で `view roll-up` ボタンをクリックします。[動画ウォークスルー](https://youtu.be/TnY8T9s3o-E)を参照し、Q1、Q2 などから見たいビューを選択します。
1. 月次/四半期実績レビュー - 計画金額、予測金額、実際の支出額を把握するために。ホーム画面で `view roll-up` ボタンをクリックします。[動画ウォークスルー](https://youtu.be/apiJxzrDZe4)を参照し、Q1、Q2 などから見たいビューを選択します。

##### レポートフォルダーの内訳

1. Finance - Finance チームが使用するレポート
1. Health Check - このフォルダーはまだ詳しく使用していません。続報をお待ちください！
1. Investment Planning
    1. Target vs. Plan Full - 詳細情報でターゲット対プランを確認できます — これは Investment Tracking Summary に反映されている情報と同じです。
    1. Vendor Plan details - 経営陣は Demandbase への支出を把握するためにこのセクションを使用します。Demandbase には四半期ベースでインサーションオーダー（IO）を開くため、いくらの IO を開く必要があるかを把握することが不可欠です。

##### 便利なフィールドのバックエンド名

Allocadia にはさまざまな理由で、フロントエンド（画面で見るもの）とレポートで使用される名前が異なるフィールドがいくつかあります：

| フロントエンドフィールド名 | レポートで使用されるフィールド名 |
| -------------------- | ----------------------------- |
| Start Date | Date (Line Item Start Date) |
| End Date | Date (Line Item End Date) |
| MQL | Estimated Outcome (First Funnel Level Total) |
| SAO | Estimated Outcome (Middle Funnel Level Total) |
| Closed Won | Estimated Outcome (Last Funnel Level Total) |
|  |  |
|  |  |

##### フィールドとレポートの注意点

Allocadia には多くの標準フィールドとそれに関連する定義があります。私たちの定義が異なる場合があり、新しいカスタムフィールドを作成する必要があることがあります。残念ながら、Allocadia のフィールドを削除して現在のフィールドのみを利用可能にすることはできません。これにより、類似したフィールドが多数存在し、レポートを構築する際にどのフィールドを使用するかを文書化する必要があります。以下のリストはレポートを構築する際のフィールドの SSOT として機能します。

1. Campaign Type - Spend Type と Spend Type (FM) の両方でレポートする場合に使用してください。この 2 つのフィールドはレポートで 1 つに統合されています。
   - Campaign Tupe (DNU) または Campaign Type (SF) は使用しないでください。これらのフィールドにはデータをキャプチャしていないため、レポートには何も表示されません。

## インテグレーション（舞台裏）

### Allocadia - GitLab Issue インテグレーション

Allocadia を使用することで得られる効率の一つは、GitLab Issue を作成し、詳細パネルで収集した情報をその Issue に直接プッシュできることです。これにより、すでに入力した情報を再入力する必要がなくなり、チームの時間を節約できます。

#### Allocadia 内から FMM Issue を作成する方法

1. **サブカテゴリー**を作成し、詳細パネルにすべての情報を記入します。
1. 少なくとも 1 つの品目を追加します。
1. サブカテゴリーの詳細パネルに戻り、`Actions` セクションが表示されるまで一番下までスクロールし、GitLab issue と呼ばれるボタンをクリックします — そうすれば 💥 — Issue が作成されます！

   - [GitLab Unfiltered の動画ウォークスルー。](https://youtu.be/EsGlPNeH2P4)

サブカテゴリーレベルで FMM Issue を作成することで、マーケターがアクティビティプランをどのように構成したいかという柔軟性を維持できます。これを別の方法で考えると、サブカテゴリー以下のすべてのものは、作成するキャンペーン名と同じに整合すべきです。

サブカテゴリーを作成する場所に注意してください。システムはサブカテゴリー内にサブカテゴリーを作成することを許可しており、作成したものが実際にはサブカテゴリーとして作成されていないことに気づくのは、新しいサブカテゴリーだと思って作成した後に、詳細パネルがすでに記入されているからです。詳細パネルのデータを変更しないでください。サブカテゴリー内で 1 つの FMM Issue しか作成できないためです。必要なことは、新しく作成されたすでに記入されているサブカテゴリーを削除し、カテゴリーレベルにいることを確認して新しいサブカテゴリーを作成することです。

##### FM Issue の日付/名前変更

キャンペーンの日付を変更する必要があり、Issue がすでに作成されている場合、日付と名前を体系的に変更できます。変更はすべて Allocadia で行う必要があり、一晩のうちに GitLab FMM Issue に変更が反映されます。Issue と Allocadia の両方を手動で変更したい場合はそれも可能です。自動化は支援のためにあります。

##### ヘルプ！詳細パネルから GitLab Issue を作成する機能がない

GitLab Issue は**サブカテゴリー**内からのみ作成できます。サブカテゴリーを作成し、[こちらの手順](/handbook/enterprise-data/marketing-analytics/allocadia/#how-to-create-a-fmm-issue-from-within-allocadia)に記載されている品目を作成したことを再確認してください。

この問題を診断する方法と、カテゴリーを作成してサブカテゴリーに移動する必要がある場合の修正方法を示す[動画ウォークスルー](https://www.youtube.com/watch?v=D-rxIHhbF0Q)をご覧ください。

サブカテゴリーから作成しようとしても Issue が作成できない場合は、#allocadia_mktg-budget-holders Slack チャンネルでご相談ください。

#### Allocadia からチャンネルマーケティング Issue を作成する方法

1. 命名規則 `YYYYMMDD  Partner Name  Activity Name` でサブカテゴリーを作成します。
2. サブカテゴリーの詳細パネルで以下のフィールドを入力します：
   - `Spend Type` = `Partner Rebates`
   - `Start Date` と `End Date`
   - `Is a Channel Partner Involved?` = `Yes`
   - `Channel Partner Name` = `Select Partner`（パートナーを選択）
   - `Is an Alliance Partner Involved?` = `No`
   - `Will there be MDF funding?` = `Yes`
   - `Partner MDF Region Budget`
   - `Campaign Owner` = `Select CMM`（CMM を選択）
   - `Operational Program Owner` = `Select Operational Campaign Owner`（運用キャンペーンオーナーを選択）
3. 命名規則 `MDF 000  Partner Name  Details Related to Spend` で品目を作成します。

   注：`MDF 000` は MDF リクエストが SFDC キャンペーンで選択されると自動的に更新されるプレースホルダーです。
4. 品目の詳細パネルで Actions までスクロールし、`Create/Edit MDF Issue` を選択してチャンネルマーケティング Issue を作成します。
5. チャンネルマーケティング Issue で、キャンペーンの詳細、ユーザージャーニー、共同メッセージングとすべてのセクションを更新します。
6. MDF リクエストが提出され、チャンネルパートナーマーケティングチームが Marketo プログラムと Salesforce キャンペーンを作成したら、Salesforce キャンペーンで MDF リクエスト番号を選択する必要があります。
7. 夜間の同期の間に、品目の「MDF 000」は MDF フィールドとともに選択された MDF 番号で更新されます：
   - Target Number of Contact
   - Expected Number of DR
   - Estimated Pipeline Created (USD)

ステップごとのウォークスルーの[動画](https://youtu.be/Xis0KDi-Iy4)をご覧ください。

##### Allocadia - GitLab Issue インテグレーションサマリー

- Issue は詳細パネルのアウトバウンドアクションボタンを通じて GitLab で作成または更新できます。
  - ボタンラベル：Create/Update MDF Issues
  - アクションはヒエラルキーのパートナー部分でのみ利用可能であることに注意してください。
- Issue 作成は Allocadia の「品目」行レベルでのみ開始でき、品目はサブカテゴリー内にある必要があります。
- Allocadia の詳細パネルのフィールドを使用して、GitLab の Issue テンプレートを入力します。
- 作成後、GitLab で新しい Issue を開くためのリンクがユーザーに提示されます。
- エピックが作成されると、Allocadia アイテムの MDF Issue URL フィールドに自動的にタグ付けされます。
- MDF Issue URL がすでに入力されている場合、アクションは作成ではなく更新として扱われます。
- 同期は毎日 10:30 AM と 10:30 PM PT に 2 回実行されます。

技術的なサマリーは[スライド](https://docs.google.com/presentation/d/13JsM0poTh4TN_U-l-pgRz_gMbaMpZiGT/edit#slide=id.p1)を参照し、Issue フィールドのマッピングは[シート](https://docs.google.com/spreadsheets/d/1leqnCPx6GTdyhg9jzgliZK76WartBJV4k3Q57W4rxTQ/edit?usp=sharing)をご覧ください。

##### GitLab Issue 作成の詳細

- パートナー Issue のタイトルは次のように構築されます：
  - `<item name> - <Start Date Quarter> - <Start Date (MM.DD.YY)>`
  - 例：`MDF 179 Spectrum Groupe Devoxx 23 - FY24-Q1 - 2023.04.12`
- 事前定義されたメッセージテンプレートがパートナー Issue の説明に使用されます。
- メッセージテンプレートには Allocadia のフィールドのいくつかのプレースホルダーと、インテグレーションによってフォーマットされるフィールドがあります。

##### パートナー Issue 更新の詳細

- パートナー Issue がすでに作成された後にアクションボタンが押された場合、更新アクションが適用されます。
- 更新は以下のフィールドにのみ適用されます：
    1. Issue タイトル — タイトルのいずれかのコンポーネントが変更されている場合（開始日または品目名）は更新されます。
    2. Issue 説明 — 開始日/終了日のみが更新されます（変更されている場合）。
    3. 戦術/イベントタイプ
    4. Allocadia 品目 ID
    5. 推定パイプライン作成額（USD）
    6. ターゲット連絡先数
    7. 期待されるディールレジストレーション数
    8. キャンペーン名
    9. Salesforce キャンペーンリンク
    10. リージョン

#### GitLab Issue への変更

上記の Issue のいずれかの調達 Issue テンプレートを更新する必要がある場合は、Marketing Operations チームの[Issue を提出](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new)してください。Allocadia CSM を通じて行う必要があります。

#### 間違った Issue テンプレートが送信された場合...どうすべきか？

GitLab Issue テンプレートボタンを押して間違った Issue テンプレートが作成された場合、心配しないでください！フォルダーへのオーナーまたは管理者権限を持つ人が支援できます。ホーム画面からフォルダーのアクセス権を持つ人を確認するには、フォルダーを見つけ、パネル列の `Users` 列にあるアイコン（人数）をクリックします。そこからアクセス権と権限を持つ人のリストが表示されます。`Owner` または `Administrator` が見つかるまで検索し、#mktg-budget-holders Slack ルームでその人に連絡してください。[動画ウォークスルー](https://youtu.be/PwbWpt3pMX4)（GitLab Unfiltered へのログインが必要です！）をご覧ください。

### SalesForce.com (SFDC)

前述のように、詳細パネルで選択できる FY23 SFDC キャンペーンのリストがあります。Allocadia と SFDC の初期接続が特定のキャンペーンで確立されると（ドロップダウンからキャンペーンを手動で選択するか、Allocadia のサブカテゴリー ID を使用して SFDC キャンペーンを作成することによって。手順は[こちら 2 番と 5 番を参照](/handbook/marketing/marketing-operations/campaigns-and-programs/#marketo-program-and-salesforce-campaign-set-up)）、Allocadia は詳細パネルに記入されたすべてのフィールドをプッシュします。

さらに、計画金額を SFDC キャンペーン予算フィールドに送信し、実績は毎夜同期されます。これは `Existing SFDC Campaign` フィールドでキャンペーンが選択されている場合にのみ行われます。特定の SFDC キャンペーンに複数の品目がある場合、Allocadia サブカテゴリー ID を使用して Allocadia を SFDC キャンペーンに同期しているため、SFDC キャンペーン予算の更新では合計されます。

既存のフィールドに変更するイニシアティブに対応するために新しい値を追加する必要がある場合があります。SFDC キャンペーンと同期する既存のフィールドに新しい値を追加する必要がある場合、その値は最初に SFDC に存在する必要があります。Sales Systems チームに Issue を開いて新しい値を追加してもらう必要があります。新しい値が SFDC に存在したら、一致する値を Allocadia のマスター設定に追加できます。

これを設定するための完全な詳細な手順は、キャンペーンごとに行う必要がありますが、[こちら](/handbook/marketing/marketing-operations/campaigns-and-programs/#marketo-program-and-salesforce-campaign-set-up)でご覧いただけます。

#### 影響を受けた MQL

入力された場合、Impact Modeller で使用された MQL が `Total Planned MQL` というフィールドで SFDC キャンペーンにプッシュされます。そのデータを SFDC から会社の BI ツールにプッシュし、SFDC アトリビューションレポートに表示することで、MQL の影響を予測する精度を理解できます。

#### 詳細パネルのドロップダウン

ドロップダウンセレクターのオプションに新しい値を追加する必要がある場合、新しいオプションが SFDC に正しく引き継がれるよう、新しいドロップダウン値が Allocadia と SFDC の両方に追加されていることを確認する必要があります。それが完了したら、システムをテストして問題がないことを確認してください！

### Okta

すべてのマーケティング予算保有者が別のログインパスワードを心配することなく簡単にサインインできるよう、SSO を使用してログインしてください。Allocadia の eu1 サーバーを使用していることに注意してください。

### Adaptive

Allocadia から Adaptive にプランをアップロードするために CSV 転送ファイルを使用します。Finance ビジネスパートナーがこれの DRI になります。

### Marketo

Marketo とのインテグレーションはありません。ただし、[Marketo プログラム/SFDC キャンペーン作成プロセス](/handbook/marketing/marketing-operations/campaigns-and-programs/#marketo-program-and-salesforce-campaign-set-up)を通じて、Marketo は SFDC キャンペーンの説明に ID を更新します。Allocadia はこの ID を取り込み、Allocadia の詳細パネルのフィールドに合わせて SFDC キャンペーンフィールドを更新します。

### NetSuite

実際の経費は Finance の AP が月末に締まってから利用可能になるため、通常は月末頃です。Marketing Finance が NetSuite から Allocadia に経費をロードします。Allocadia の[管理者向けアップロード手順](https://drive.google.com/file/d/1CldCHFYJtaOo3NAjBHXPsjwPxqBarmOw/view?usp=sharing)は Allocadia によって用意されています。これらの経費は、最初に Allocadia ID が設定されていた場合、品目に自動的にマッピングされてアクティビティプランの `Actuals` 列に表示されます。ただし、すべてが設定されるまで、品目への経費マッピングには手動プロセスが必要です。Allocadia は最善の推測を行いますが、Allocadia ID なしでは確認または修正が必要になります。

#### 品目 ID による経費のマッピング

Allocadia ID がシステム全体でタグ付けされている大きな利点は、品目の計画/予測と実績を簡単に一致させるために使用できることです。**分類（別名：品目 ID）は NetSuite での作成が不要になりました。**

各品目 ID をその独自の予算ラインと考えてください。各 Allocadia 品目 ID はその特定の予算項目を表します（以前の慣行のように、すべてのイベント費用に 1 つのメインの品目 ID を使用するのとは異なります）。

**Allocadia のイベント例：**

![Example Event](/images/marketing/strategy-performance/allocadia/Alloscreenshot.png)

この例では、Zip を通じてスポンサーシップ契約を提出する際にスポンサーシップの品目 ID を使用します。その後、Zip を通じてスワグの注文を提出する際にスワグの品目 ID を使用します。配送費と追加のブース費用に Navan カードを使用した場合、受領書を提出する際に Navan にそれらの個別の品目 ID を入力します（Navan の新しいフィールドに関する詳細情報は以下を参照してください）。

#### 経費の提出

##### Zip/Coupa を通じて提出された経費の場合

- Zip リクエストに品目の Allocadia ID を入力します — これにより PO と請求書が正しい Allocadia 品目にマッピングされます。
- Marketing Finance は Allocadia 品目 ID が正しく、適切に予測されているか確認します。Allocadia ID のない Zip/Coupa リクエストは ID が提供されるまで承認されません。例については[スクリーンショット](https://drive.google.com/file/d/1DoyN4_uTlYO5q1VGPN-NRiL8M0Lv76z9/view?usp=sharing)をご覧ください。

##### Navan を通じて提出された経費の場合

- 経費を提出する際に `Allocadia ID (Marketing Only)` フィールドに Allocadia 品目 ID を入力します。これにより、経費が正しい Allocadia 品目 ID にマッピングされます。例については[スクリーンショット](https://drive.google.com/file/d/1o4eeas6uxeBzUtxevBgZrhQkEv4duD7_/view?usp=sharing)をご覧ください。

NetSuite の実績アップロード後にマッピングが必要な経費を見つけるには、Allocadia のホームページに移動します。`Actuals` 列で、`Map` 列に赤い Map (#) があるか確認します。ある場合は、そのリンクをクリックすると、マッピングが必要なものが表示される新しい画面が開きます。NetSuite からの説明、請求書番号などを確認するためにスクロールします。ヒエラルキーカテゴリーを選択し、それぞれにマッチする品目を選択します。その後、Map をクリックします。また、複数の行を Shift キー/クリックで選択し、独自の「map」ボタンを持つ小さな画面でのバルクマップを使用することもできます。
誤ったマッピングをしてしまった場合は修正できます。誤ってマッピングした品目のアクティビティグリッドに移動し、右クリックして `Go to Actuals` を選択します。新しい画面が表示され、エラーラインが見えれば、右端までスクロールして削除できます。

##### Field Marketing 経費マッピング

Finance による実績ロードから 3 営業日以内に月次経費をすべてマッピングすることを目指しています。

## 廃止されたハンドブックコンテンツ

このセクションには、まだ削除する準備ができていない情報が含まれています。この機能は現在使用されていませんが、何らかの形で再導入することを決めた場合に参照できるよう、この情報を手元に置いておきたいと思います。

## Allocadia から Coupa へのインテグレーション

<details markdown="1">

<summary>Allocadia の詳細パネルから Coupa の発注リクエストを作成する機能をオフにしました。Allocadia と Zip の間のインテグレーションを検討しており、以下に説明されているような類似した機能を作成するために Zip（新しい調達ツール）との連携を模索しています。</summary>

### Coupa

Allocadia と [Coupa](/handbook/business-technology/enterprise-applications/guides/coupa-guide/) のインテグレーションにより、マーケターは Allocadia 内から Coupa リクエストを作成できます。これは Allocadia から Coupa への一方向のデータプッシュなので、Coupa リクエスト内で変更を加えた場合は Allocadia 内で自動的に更新されないことに注意してください。Allocadia から直接 Coupa 購買依頼を作成する方法の動画ウォークスルーは[こちら](https://youtu.be/XroayEye3kY)をご覧ください。

#### 前提条件と注意事項

- Allocadia を通じて Coupa req を提出するには、ベンダー/サプライヤーが Coupa でアクティブ状態になっている必要があります。新しいサプライヤーリクエストを処理する必要がある場合は、[こちら](/handbook/business-technology/enterprise-applications/guides/coupa-guide/#how-to-request-a-new-supplier)の手順に従ってください。
- Coupa req は品目レベルで作成され、カテゴリーまたはサブカテゴリーでは作成できません。
- 品目パネルの詳細が完了しており、品目に関連した計画と予測コストがあることを確認してください。
- サプライヤーごとに 1 つの Coupa req のみ必要です。マルチライン req を提出する場合は、別のサプライヤーから行を追加できません。req で作成する品目は、最終的にサプライヤーが提供する請求書の品目と一致する必要があります。

#### Allocadia を通じて Coupa Req を提出する手順

- 適切なアクティビティプランをクリックします。
- Coupa req を作成しようとしているアクティビティの品目の詳細パネルをクリックします。
- パネルの一番下までスクロールし、`Create PR in Coupa` をクリックするとリクエストフォームが表示されます。表示されない場合は、必要な情報が欠けていることをエラーメッセージが通知します。パネルと品目に戻り、必須フィールドがすべて入力されていることを確認してください。
- `Created By` は、別の人の名前でリクエストを提出したい場合を除き、自分の名前のままにできます。その場合は `On Behalf Of` フィールドのドロップダウンオプションでその人の名前を入力します。
- `Supplier` は Allocadia の品目で入力したサプライヤーに基づいて自動的に入力されます。**注：** Coupa にリストされているサプライヤー名と完全に一致する名前を品目に記載する必要があります。そうでない場合、サプライヤーは自動的に入力されず、ドロップダウンでサプライヤーのリストを検索できます。
- `Description of Purchase` は購入の詳細を提供します — 例：ABC イベントの契約
- `Vendor has access to red or orange data` は必須フィールドです。詳細はフォーム内のリンクされたハンドブックページをご覧ください。
- `List data and system involved` は上のデータ質問に YES と回答した場合にのみ入力するフィールドです。
- `Vendor's Contact Email` は必須フィールドであり、一般的に契約の相互署名リクエストに使用されます。
- `Vendor's Security Contact Email` はベンダーがレッドまたはオレンジデータにアクセスできる場合に入力するフィールドです。
- `Attachment` は必須であり、適切な契約を添付する場所です。
- `Next` をクリックします。
- 購入タイプに基づいて `AMT` または `QTY` を選択します（通常は `AMT` に基づいて Coupa req を提出します）。
- `Item` は品目名から入力されます。
- `Unit Price` は品目の合計コストから入力されます。
- `Need by Date` は Coupa req の期日です。
- `Service Start`、`End Date`、`Chart of Accounts`、`Subsidiary`、`Department`、`GL Account` はすべて品目から入力されます。

##### 単一品目の Coupa req を提出する場合

- 単一品目のリクエストを提出する場合は、`Submit` をクリックします。
- システムは Coupa req へのリンクを提供します（これは Allocadia 品目の詳細パネルにもリンクされます）。
- **注意：** これは Coupa req が提出されたことを意味しません。実際の req を Coupa でレビューするためにここに移動しており、Coupa で req を提出する必要があります。
- Coupa req のリンクをクリックしてレビューします。
- この時点で必要な調整を行い、[承認者を追加](/handbook/business-technology/enterprise-applications/guides/coupa-guide/#how-to-add-an-approver)することもできます。
- req を提出する準備ができたら、`Submit` をクリックします。

##### マルチラインの Coupa req を提出する場合

- `Add Another` をクリックします。
- ドロップダウンを使用してリンクする追加の品目を見つけます。
- `Add Item` をクリックします。
- 上の手順に従って追加のアイテムのフィールドを入力します。
- すべての品目が追加されるまで繰り返します。
- `Submit` をクリックします。
- システムは Coupa req へのリンクを提供します（これは Coupa req の各品目の Allocadia 品目の詳細パネルにもリンクされます）。
- **注意：** これは Coupa req が提出されたことを意味しません。実際の req を Coupa でレビューするためにここに移動しており、Coupa で req を提出する必要があります。
- Coupa req のリンクをクリックしてレビューします。
- この時点で必要な調整を行い、[承認者を追加](/handbook/business-technology/enterprise-applications/guides/coupa-guide/#how-to-add-an-approver)することもできます。
- req を提出する準備ができたら、`Submit` をクリックします。
</details>
