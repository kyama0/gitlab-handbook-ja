---
title: メールプロセス
description: GitLab におけるメールプロセスの概要。
twitter_image: '/images/tweets/handbook-marketing.png'
twitter_site: "@gitlab"
twitter_creator: "@gitlab"
upstream_path: /handbook/marketing/lifecycle-marketing/email-processes-requests/
upstream_sha: 768e1a6af6ab56133195582e6a0b17d225df15f7
translated_at: "2026-05-01T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-20T16:41:12-07:00"
---

## 概要
<!-- DO NOT CHANGE THIS ANCHOR -->

このページは、ライフサイクルマーケティング、マーケティングキャンペーン、マーケティングオペレーションが所有・管理しているメールプロセスを取り扱います。

**関連ハンドブック: [メール管理](/handbook/marketing/marketing-operations/email-management/)**

## GitLab メールカレンダー
<!-- DO NOT CHANGE THIS ANCHOR -->
メールカレンダーを Asana に移行しました！毎週木曜日にメールステークホルダー同期会を実施し、今後 2 週間分のメールをレビューします。このコールをカレンダーに追加してほしい場合は、Allie Klatzkin に依頼してください。スムーズな運用のため、メール送信予定が分かり次第（情報がすべて揃っていなくても）すぐにカレンダーに追加してください。

**送信日の前週のメールステークホルダーコールよりも前に、すべてのメールをカレンダーに追加する必要があります**。コール後に追加されたメールは、翌週送信に持ち越されます。

座席数に限りがあるため、カレンダー上で 1 チームあたり 1〜2 席を提供します。ご質問はお使いのチームの DRI までお願いします。

**カレンダーの目標**

* メールに優先順位を付けて、適切なオーディエンスに適切なタイミングで適切なメールを送信できるようにする。
* 今後の送信予定について、チームをまたいで可視性を提供する。
* メールに関するコミュニケーションとプロセスを効率化する。

**カレンダーへのメール追加プロセス:**

Campaigns、Marketing Ops、Corporate Marketing、Field Marketing の各プロジェクトの [メール Issue テンプレート](/handbook/marketing/lifecycle-marketing/#issue-templates) には ~email-calendar ラベルが付いており、これによりメールが自動的にカレンダーに追加されます。Issue に ~email-calendar ラベルが付いていない場合は、カレンダーへの可視性を確保するためにラベルを追加してください。

Asana カレンダーに追加する手順:

* Issue に「email-calendar」ラベルが追加されていることを確認します。
* 適切なセグメンテーションのラベルを追加します: 「Global-email」、「EMEA-email」、「AMER-email」、「APAC-email」
* 適切なメールタイプのラベルを追加します: 「operational-email」「non-operational-email」
* メール Issue の期限日を送信日に設定します。

### メール依頼 Issue テンプレート
<!-- DO NOT CHANGE THIS ANCHOR -->

**送信前に、上記セクションの重要な注意事項を必ずお読みください**

メール送信を依頼するには、メールアイデアの検討のために [Issue を作成](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-email) し、（特にオーディエンスに関して）可能な限り詳しい情報を記載してください。また、「労力に見合わない」と判断され、基礎となるオーディエンスセグメンテーションが整うまでローンチを延期する場合があることをご理解ください。詳細は下記の `メールレビュープロトコル` セクションをご確認ください。

**SLA:** 新しいメール依頼に対しては標準で 5 営業日の SLA が設定されています。Issue の「Submitter Checklist」のすべての項目を完了していなければ、適切な Campaign Manager もしくは Lifecycle Marketing Manager にトリアージできません。

注意: 招待メールやフォローアップメールは、進行中のナーチャープログラムの都合上、木曜日には送信しません。

**メールコピーテンプレート:** メール本文の作成にはこの [コピードキュメント](https://docs.google.com/document/d/1ZhHihX1tSoMkio2-qN-iH7lX_2WQuudVOBacd5tiHIk/edit?tab=t.0) テンプレートを使用してください。GitLab メールコピードキュメントテンプレートはマーケティングメールを依頼するための標準フォーマットです。これにより、すべてのメールコミュニケーションでの一貫性が確保され、マーケティングチームに対する明確な仕様が提供されます。

**Issue のアサイン先:** 送信前のレビューのために、対応する Lifecycle Marketing Manager に Issue をアサインしてください。

* `@aklatzkin`: グローバル、Public Sector、ローカライズメール、Corporate Events
* `@alee`: AMER、Customer メール
* `@cbaun`: EMEA、APAC、ニュースレター

**Issue を Asana メールカレンダーに追加する:** デフォルトで、Issue に ~"email-calendar" ラベルが追加されますが、オーディエンスのラベルも追加する必要があります:

* ~"Global-emails"
* ~"AMER-emails"
* ~"APAC-emails"
* ~"EMEA-emails"
* ~"customer-email"

**緊急のセキュリティメールはこの SLA の対象外です。**

about.gitlab.com に向かうメール内のすべてのリンクには、この [ドキュメント](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit#gid=0) で示された命名規則に従って utm パラメータを付与する必要があります。これは、メールを追跡しアトリビューションを付与するための仕組みです。

### メール依頼で必要な詳細情報
<!-- DO NOT CHANGE THIS ANCHOR -->

Campaign Manager が適切なシステムでメールを作成する前に、Issue テンプレートで記入する必要がある情報を以下に示します:

* **送信者名 (Sender Name)**: 通常、ほとんどの送信コミュニケーションには GitLab を使用します。セキュリティアラートには GitLab Security を使用します。送信されるメールのタイプや内容に合致する名前を選ぶことが重要です。不明な場合はメモを残してください。私たちが推奨を提示します。
* **送信元メールアドレス (Sender Email Address)**: どのメールアドレスを使用しますか？ デフォルトは info@gitlab.com です。
* **承認者 (Approvers)**: すべての承認者をメール依頼にリストする必要があります。少なくとも 1 名、メールへの返信を受け取る個人を承認者としてリストする必要があります。例えば、メールが security@ から送信される場合、その返信を受け取る人物を承認者の 1 人としてリストする必要があります。下記の承認テーブルをご覧ください。
* **件名 (Subject Line)**: 50 文字以内が推奨です（モバイルデバイスでは 30〜40 文字）。
* **メール本文 (Email Body Copy)**: Issue 内のテキストスニペット、明確に識別された Issue 上のコメント、または本文を含む Google Doc を添付できます。メール依頼前に本文の承認を得ている必要があります。
* **メール送信目標日**: スパム認定（または認識）を避けるためにデータベースに送信されるメール数のバランスを取る必要があるため、最低 5 日前の通知が望まれます。ただし、絶対に必要な場合は、シンプルなメールであれば数時間で対応可能です。
  * 進行中のナーチャープログラムの都合上、招待メールおよびフォローアップメールは木曜日には送信しません
* **受信者リスト**: 既存の [既存セグメント](/handbook/marketing/lifecycle-marketing/email-processes-requests/#target-list-creation) のいずれかにメールを送信できます。または、[リストインポートガイドライン](/handbook/marketing/marketing-operations/list-import/) に従って受信者リストを .csv ファイルとしてアップロードできます。

### メール依頼のタイプ
<!-- DO NOT CHANGE THIS ANCHOR -->

メール管理および各種メールタイプについての詳細は [このページ](/handbook/marketing/marketing-operations/email-management/#types-of-email) をご覧ください。

### メール依頼の承認と通知
<!-- DO NOT CHANGE THIS ANCHOR -->

マーケティング関連のアドホックメールは、Campaigns チームの裁量で送信されます。

すべてのユーザーに影響する利用規約またはプライバシーポリシーの更新は、社内ミーティング、`#whats-happening-at-gitlab` および `#community-advocates` Slack チャネルでアナウンスし、メール依頼を提出する前に下記のテーブルに従って承認を得る必要があります。

ユーザーの一部に送信されるサポートメールおよびセキュリティメールは、`#community-advocates` および `#support_escalations` Slack チャネルでアナウンスし、関連する場合は `#whats-happening-at-gitlab` でも言及してください。

下記の承認テーブルは、マーケティング以外のメールに適用されます。

|  **連絡対象のユーザー** | **承認者** |
| --- | --- |
|  < 1,000 | reply-to オーナー |
|  1,001-4,999 | PR、reply-to オーナー、コミュニティアドボケイト |
|  5,000-499,999 | PR、reply-to オーナー、コミュニティアドボケイト、発信元部門のディレクター以上 |
|  500,000+ | PR、reply-to オーナー、コミュニティアドボケイト、発信元部門のディレクター以上、e-group メンバー |

## アドホック（単発）メール
<!-- DO NOT CHANGE THIS ANCHOR -->

### メールのセットアップ・編集の手順
<!-- DO NOT CHANGE THIS ANCHOR -->

単発メール（リードを取得しないプログラムを宣伝する一斉送信など）の場合:

1. 依存関係: メールを送信する前にターゲットリスト Issue が完了している必要があります（ターゲットリスト作成の SLA は 15 営業日）
2. [この Marketo メール送信テンプレート](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/EBP7320A1) をクローンします
    * クローン先: `A campaign folder`
    * フォルダ: `Ad-hoc (one time) emails`
    * 名前: `YYYYMMDD_NameOfEmail` のフォーマットに従う（YYYYMMDD は送信日、例: 20210603_DORAsurvey）
    * 説明: GitLab メール Issue へのリンク
3. 送信プログラム内でメールを更新します
4. メール送信用に Marketo の **My Tokens** で utm_campaign を更新します

**ハウツー動画:**

* [メールの作成方法に関する動画](https://www.youtube.com/watch?v=pfl71Hh5e2E)
* [メールの編集方法に関する動画](https://www.youtube.com/watch?v=RUvykCohLqI)

### ターゲットリスト作成
<!-- DO NOT CHANGE THIS ANCHOR -->

* **ライフサイクルステージ (Lead Status):** (Raw, Inquiry, MQL, Accepted, Qualifying, Qualified)
  * **ファネルステージ:** ([オプションを参照](/handbook/marketing/marketing-operations/marketo/#segmentations))
  * **セールスセグメント:** (Large, MM, SMB, PUBSEC - US PubSec の場合は、テリトリー (NSG, DoD など) も指定可能)
  * **リージョン:** (APAC, AMER, EMEA)
  * **サブリージョン (East/West/PubSec または Southern/Northern/UKI/DACH):**
* **ペルソナレベル:** ([オプションを参照](/handbook/marketing/marketing-operations/marketo/#segmentations))
  * **バイヤーペルソナ - 機能:** ([オプションを参照](/handbook/marketing/marketing-operations/marketo/#segmentations))
  * **言語の好み:** ([オプションを参照](/handbook/marketing/marketing-operations/marketo/#segmentations))
  * **アクティビティフィルター（必要に応じて）:** ([オプションを参照](/handbook/marketing/lifecycle-marketing/emails-nurture/#Active-Lists))
  * **包含 (Inclusions):**（過去のキャンペーンのレコードを含める場合、SFDC キャンペーンに表示されている名前と、除外するキャンペーンメンバーシップステータスを必ず含めてください）
  * **除外 (Exclusions):**（過去のキャンペーンのレコードを除外する場合、SFDC キャンペーンに表示されている名前と、除外するキャンペーンメンバーシップステータスを必ず含めてください）

### アクティブリスト
<!-- DO NOT CHANGE THIS ANCHOR -->
メールターゲットリストの構築を支援するため、MktgOps は特定の時間間隔に基づいてリードのアクティブ度を判定するための一連の Marketo スマートリストを開発しました。メール送信のために最新のアクティブユーザーリストを取得するには、これらのスマートリストを呼び出してください。スマートリストは Marketo の Database セクションにあります。以下のとおりです:

* [01 Active List 30 days](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SL52980708A1)
* [02 Active List 60 days](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SL52980709A1)
* [03 Active List 90 days](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SL52980710A1)
* [04 Active List 6 months days](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SL52979300A1)
* [05 Active List 12 months](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SL52980711A1)
* [06 Active List 18 months](https://experience.adobe.com/#/@gitlab/so:194-VVC-221/marketo-engage/classic/SL53477916A1)

## QA プロセス
<!-- DO NOT CHANGE THIS ANCHOR -->
**FY23-Q4**: ライフサイクルマーケティングは、メールベストプラクティスへの準拠を確保するため、Q4 の試行として送信前に **すべての** メールをレビューします。チームメンバーは、最新の [ライフサイクルマーケティングのメールベストプラクティス](/handbook/marketing/lifecycle-marketing/email-best-practices) に従って、自身のメールをレビューし最適化する責任があります。ライフサイクルはメールステークホルダーと連携し、メールパフォーマンスを向上させてキャンペーンに最良の結果をもたらすとともに、すべてのメールタッチポイントでブランドの一貫性を維持します。

**FY24-Q1**: FY24 の Q1 では、メールレビュープロセスをどのようにスケールしていくかを共有します。

メールワークフロー:
ライフサイクルにメールを依頼する最初のステップは、適切な [Issue テンプレート](/handbook/marketing/lifecycle-marketing/#request-issue-templates) を使用して GitLab で Issue を作成することから始まります。

### QA プロセスにおけるチームごとのバリエーション
<!-- DO NOT CHANGE THIS ANCHOR -->
* Campaigns: 自分でメールを構築し、ライフサイクルに QA を依頼します。
* FMM: MOps にメールの構築を依頼し、承認のためにライフサイクルに送ります。
* Corp: 以前 [こちら](https://docs.google.com/spreadsheets/d/1aTCrUlc87BDLAqqAju7ZEbL8Wu0VZNfWd1MhdAccRDA/edit#gid=0) に概説したプロセスを使用します。

#### Campaigns チームの QA プロセス
<!-- DO NOT CHANGE THIS ANCHOR -->
*QA とスケジューリングのために最終的なメールを提出する*

* ステップ 1: Campaign Manager: 適切なメールタイプのメール Issue を提出し、自分とライフサイクル担当者をメールにアサインします。メールカレンダー用の適切なラベルを必ず含めてください。これは SLA 日付の前、もしくは遅くとも送信前週の木曜日午前 9 時 PT までに（オーディエンス情報を含めて）実施する必要があります（例: 翌週金曜日に送信する場合でも、その前週の木曜日までに提出する必要があります）
* ステップ 2: 希望する送信日時を強調表示します。（ライフサイクルチームによってレビューされ、変更される可能性があります）
* ステップ 3: 私たちの [メールマーケティングベストプラクティス](https://docs.google.com/presentation/d/1j6F-3ZOFtFM9Tjz1srzbqLjSA56sK7lR2LPdKSl57Vo/edit?usp=sharing) を参考にしながら Marketo でプログラムとメールを構築し、それに応じてメールをセグメント化します。
* ステップ 4: [メール Issue リクエスト](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-email) を提出する際に、Marketo プログラムへのリンクを含めます。
* ステップ 5: ライフサイクルが QA するためにサンプルを送信します
  * Global/EMEA/Localized/PubSec/Corporate/Nurture = [Allie](mailto:aklatzkin@gitlab.com) によりレビュー
  * Customers/AMER = [Alison](mailto:alee@gitlab.com) によりレビュー
  * EMEA/APAC/Newsletters = [Christian](mailto:cbaun@gitlab.com) によりレビュー
* ステップ 6: ライフサイクルが修正を行い、メールを Campaign Manager に返却します。
* ステップ 7: ライフサイクルが、依頼された時間枠でメールが送信されるようスケジュール設定します。

*SLA:*

1. 大規模イベント（GitLab 18 は通常ライフサイクル所有ですが、同程度の規模のイベント）: 7 営業日
2. テックデモ: 5 営業日
3. メールフォローアップ: 2 営業日

#### Field Marketing の QA プロセス
<!-- DO NOT CHANGE THIS ANCHOR -->
*MOps にメール構築を依頼*

1. FMC など担当者が（通常通り）Issue リクエストを提出します
2. MOps がレビューし、必要な要素がすべて揃っていれば（通常通り）トリアージに入れます
3. トリアージ中に、MOps が新しいラベル `Lifecycle Copy Review` を追加します
4. ライフサイクルがコピーをレビューし、提案を行い、提出者と往復します
5. 承認されたら、ライフサイクルが `Lifecycle Copy Approved` ラベルを追加します
6. その後、Marketing Ops がメールの構築を開始します
7. 構築完了後、MOps はレイアウト/フォーマットのレビューが必要であることを示します
8. ライフサイクルがレイアウト/フォーマットを承認します
9. MOps がデプロイします

注意事項:

* ライフサイクルは、私たちが事前に構築済みテンプレートを持っているメール（ワークショップなど）は承認しません
* フォローアップメールについては、新しい事前構築済みテンプレートでもライフサイクルがコピーのクイックレビューを行います

*サードパーティ会議/トレードショーに関する重要な注意事項*
私たちは、以下の基準を満たすサードパーティ会議/トレードショー向けのメールのみを送信します:

1. GitLab 固有の CTA がある（自社ランディングページ、ミーティング予約リンク、アクティベーション登録ページなど）
2. ブラインドリストアカウントリスト、または以前の参加者オーディエンスにメールを送信する場合

これを行う理由の詳細については、[この Issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/4047) をご覧ください。

#### Corporate Marketing の QA プロセス
<!-- DO NOT CHANGE THIS ANCHOR -->
*プロモーションコンテンツを決定するためにライフサイクルへ依頼*

依頼があれば、私たちは Corporate Events チームと協力して、スポンサーしているコーポレートカンファレンスのプロモーションとフォローアップを行います。

プロモーションは Tier 1 のイベント、および付随イベントが追加されているイベントに対してのみ実施します。以前にイベントに参加したオーディエンス、およびペルソナに合致するローカルオーディエンスにプロモーションを行います。完全な基準と手順については、[このスプレッドシート](https://docs.google.com/spreadsheets/d/1aTCrUlc87BDLAqqAju7ZEbL8Wu0VZNfWd1MhdAccRDA/edit?usp=sharing) を参照してください。

プロセスは、プロモーションとフォローアップに必要な情報をすべて把握するために、イベントの 1 か月前にキックオフする必要があります。

#### ニュースレターの QA プロセス
<!-- DO NOT CHANGE THIS ANCHOR -->
ニュースレター依頼の完全な情報は [こちら](/handbook/marketing/lifecycle-marketing/email-processes-requests/#newsletter) でご確認いただけます。

### メール QA チェックリスト - 技術面
<!-- DO NOT CHANGE THIS ANCHOR -->
以下は、ライフサイクル、MOps、Campaigns を含むすべてのメールビルダーがメールを構築した後に完了すべき技術的な QA をまとめたものです。これは、デプロイ前に二次的な QA を提供する人にも適用されます。

メールビルダーとして、あなたは以下に責任があります: メールが私たちのテンプレートに沿って適切にフォーマットされていること、リンクが追跡と利用のために適切にフォーマットされていること、トークン化されたセクションが適切に表示されていること、適切な配信停止文言が含まれていること、ビジネスオーナーからの特別なリクエストがテンプレートガイドラインに沿ってメール内で適切に表示されていること、です。スペル、文法、日時、ビジネスオーナーから提供されたリンクの QA については責任を負いません（例えば、ビジネスオーナーがウェブページに誘導していて、誤ったリンクを提供してきた場合 — メール内で適切にフォーマットされている限り）。スペル/文法に不正確な点を見つけた場合は、メール内で更新してください。ただし、これらに対する責任はビジネスオーナーにあります。メールが見栄えよく、ユーザーにとって読みやすいことを確認する責任は、ビジネスオーナーと共同で持ちます。

* メールで使用されているすべてのトークンがプログラム内で完了していることを確認します。これはメールごとに異なる場合があるため、エディタでメールを確認してどのトークンが使用されているかを確認する必要があります。一般的に、{{my.landingpageURL}}、{{my.utm}}、イベントタイトル・日付・時間用のトークン、場合によっては導入段落や箇条書き用のトークンを必ず確認してください。何かが完了していない、かつ情報が無い場合は、ビジネスオーナーに完了を依頼してください。
* CTA がセンテンスケースであることを確認します。例: Register now（Register Now ではない）
* {{my.landingpageURL}} トークンを確認し、`page.gitlab.com` アドレスへ誘導している場合は URL の末尾に `/` が **ない** ことを確認してください。`about.gitlab.com` へ誘導している場合は、URL の末尾に `/` が必要です。例えば、トークンは次のようになります（https:// なし）: `about.gitlab.com/sixteen/` または `page.gitlab.com/sixteen`。
* メールエディタ内で、各リンクが `https://` でハードコードされていることを確認します。Marketo のトラッキングが [正しく機能しない](https://web.archive.org/web/20231207132114/https://nation.marketo.com/t5/knowledgebase/how-to-track-tokenized-links-in-email-assets/ta-p/254486) ため、これをトークンに含めることはできません。メールエディタ内のリンクは次のようになっているはずです: `https://{{my.LandingpageURL}}?{{my.utm}}`
* ページ内のアンカー位置にリンクする場合、UTM はアンカーの前に配置する必要があります。そうしないとリンクが壊れます。正しいフォーマット: `https://{{my.landingpageurl}}?{{my.utm}}#{{my.anchor}}`
* エディタでメールのテキストバージョンをクリックします。コンテンツは HTML からコピーされているはずですが、再フォーマットする必要があります。最初にコピーをコピーした後、必ず「Copy from HTML」ボックスのチェックを外してください。段落間に適切なスペースを設け、日時情報が読みやすくなるようメールをフォーマットします。
* テキストバージョンでは、コンテンツ内にインラインでリンクを含めないでください。リンクは段落の末尾、または別の箇条書きに移動してください。メールの上部と下部に「Register now」リンクを配置してください。テキストバージョンのリンクが（上記のとおり）適切にフォーマットされていることを確認します。
* テキストバージョンでは、配信停止テキストは必須ではありません。Marketo がない場合は自動的に追加するためです。あれば、削除する必要はありません。例外は、`Localized email footer` スニペットを使用している場合です。これがテキストバージョンに表示されていることを確認する必要があります。
* メール用の動的コンテンツやスニペットを意図していない場合、動的コンテンツが使用されていないことを確認してください。メールエディタの「コンテンツ」セクションの下にある「Dynamic」をクリックします。これが空白の場合、動的コンテンツは使用されていません。空白でない場合、使用中のセグメントをクリックすると、メール内で強調表示されます。これが意図的でない場合は、（使用中の動的コンテンツのタイプに応じて）「Make Static」または「Replace with Rich Text」を選択してください。
* 動的コンテンツやスニペットを使用している場合は、「Preview」をクリックします。`View by` を「Segmentation」に変更します。セグメンテーションを選択し、それから各セグメンテーションオプションでメールをプレビューして、期待通りに表示されることを確認します。希望すれば、各セグメンテーションを使ってサンプルを自分宛に送信することもできます。各セグメントで使用されているコンテンツをビジネスオーナーがレビューできるよう、スクリーンショットまたはサンプルを提供する必要があります。
* カスタムヘッダー画像: ヘッダー画像を変更しない標準テンプレートを使用している場合は、このステップをスキップできます。カスタムヘッダー画像を使用している場合（例えば大規模な自社所有イベントの場合）は、使用された画像が透過画像であることを確認する必要があります。これはデザイン Issue を確認し、デザインチームから依頼・提供された画像が透過であることを確認することで行えます。大規模なイベントメール（10 万人以上に送信）に取り組んでいる場合は、[Litmus](/handbook/marketing/marketing-operations/litmus/#steps-to-test-an-email) でもメールの QA を実施する必要があります。
* `Preview` でメールを確認します。トークン化されたセクションがすべて適切に埋まり、イベント名、日付、時間が正しく表示されていることを確認します。
* `Preview` で、メール内の各リンクにホバーし、完全な URL が正しい UTM 値で正確になっていることを確認します。これらに誤りがある場合は、https:// がハードコードされているか、{{my.landingpageURL}} トークン、{{my.utm}} トークンを確認します。必要な変更を加えた後、再度メールをプレビューします。
* `Preview` で確認した後、ヘッダーのテキストが大きすぎる場合は、改行が意味を成し、テキストが圧迫感を与えないように小さくサイズ変更します。
* 自分宛にサンプルを送信します。メール内の **すべてのリンクをクリック** し、期待した先に遷移することを確認します。メール内のリンクには Marketo のトラッキングコードが付与されているはずなので、ブラウザで URL に到達した後、UTM を含む完全な URL が正確であることを確認します。リンクが `about.gitlab.com` ページに誘導する場合は、フォームに記入し、レスポンスが Marketo にキャプチャされることを確認することを推奨します。
* 自分宛に送信したサンプルで、トークン化されたセクションがすべて適切に埋まっていることを確認します。メールのフォーマットと画像を確認します。
* メール本文とリンクをモバイルフォンでも必ず確認してください。
* QA が完了したら、レビューのためにビジネスオーナーにサンプルを送信します。

### メール QA チェックリスト - ビジネスオーナー

以下は、依頼者（ビルダーではない）がメールを承認する前に完了すべきビジネスオーナー QA の概要です。

依頼者/ビジネスオーナーとして、コンテンツ、スペル、文法、日時、リンクの QA に責任があります。メールが見栄えよく、私たちのメールベストプラクティスに沿ってユーザーにとって読みやすいものであることを確認する責任を、メールビルダーと共同で持ちます。

* メールをクリックする前に、プリヘッダー情報を確認します。
* HTML バージョンでは:
  * 件名、宛先、送信元の詳細を確認します。
  * 日時、イベント名/ヘッダーを確認します。
  * 件名とメールにスペルミスや文法ミスがないか確認します。コンテンツが正確であることを確認します。
  * メールに含まれている場所、アジェンダ、その他の詳細をレビューします。
  * メール内の **すべてのリンク** をクリックします。リンクは Marketo のトラッキング用にコード化されているため、クリックするまで URL を表示しません。すべてのリンクが期待した先に遷移することを確認します。utm（特に utm campaign 値）が正確であることも確認する必要があります。
  * ヘッダーのレイアウトとテキストサイズが期待通りであることを確認します。
* メールのテキストバージョンも受け取ります。このメールは HTML とは別に構築されているため、こちらでもレビューを繰り返す必要があります。
  * 日時、イベント名/ヘッダーを確認します。
  * メールにスペルミスや文法ミスがないか確認します。コンテンツが正確であることを確認します。
  * メールに含まれている場所、アジェンダ、その他の詳細をレビューします。
  * メール内のすべてのリンクをクリックします。リンクは Marketo のトラッキング用にコード化されているため、クリックするまで URL を表示しません。すべてのリンクが期待した先に遷移することを確認します。utm（特に utm campaign 値）が正確であることも確認する必要があります。
  * メール本文とリンクをモバイルフォンでも必ず確認してください。
* 動的コンテンツを依頼した場合、またはメールがローカライズされている場合、複数バージョンのメールを受け取る可能性があります。各バージョンで上記のチェックを繰り返し、動的コンテンツが期待通りに表示されていることを確認します。
* ローカライズされたメールについては、メールフッターが依頼した言語で表示されていることを確認してください。このスニペットはユーザーの言語の好みに基づいて表示され、ファイルに言語が登録されていない場合のデフォルトは英語です。

## メールレビュープロトコル
<!-- DO NOT CHANGE THIS ANCHOR -->

ブランドの一貫性とメールプログラムの品質を確保するため、すべての Campaign Manager およびレビュアーは、送信されるすべてのマーケティングメールについて以下のプロトコルを遵守する必要があります。メールのオーナーがメールをレビューすべきですが、メールテンプレートに記載されている対応する Lifecycle Marketing Manager にもメールをアサインする必要があります。

Marketo は、すべてのマーケティングメールおよび定期的なセキュリティアップデートのための主要システムです。Iterable または Marketo は、gitlab.com ユーザー向けのメールに使用すべきです（これらのユーザーは、コンテンツに登録していない限り、私たちのマーケティングシステム内に存在しないため）。

オペレーショナルメールを送信するには、Issue を記入し、[こちら](/handbook/marketing/marketing-operations/email-management/operational-email-sends/#customer-or-user-comms-email-including-breaking-changes) のプロトコルに従ってください。

## Marketo の Sales Nominated フロー

イベントの招待をより具体的にする必要がある場合、Sales Nominated フローを使用して、招待を受け取る相手をセールスが指名できるようにします。

注意: 指名されても、（配信停止、無効なメールアドレス、ハードバウンスにより）メール送信できない場合、招待は届きません。

### Marketo で Sales Nominated フローをアクティベートする

Sales Nominated 自動化スマートリストは、Sales Nominated フローが関連する Marketo プログラムテンプレートに適用されます。

**メールをレビュー**:

プログラムの DRI（例: ワークショップオーナー）にサンプルを送信します。この担当者がメールのテストと QA に責任を持ちます。メールはプログラムの `Assets` フォルダにあります。一部のプログラムでは、メールセットアップを効率化するため、Sales Nominated 招待状に Marketo My Tokens が含まれています。

**スマートリストをレビューし、メール送信の繰り返しをスケジュールする:**

* スマートリスト（フィルター）:
  * Member of Program: （現在のプログラム、registered ステータス）
  * Not Was Sent Email: （このイベントの過去のメールのいずれか）過去 7 日間
  * Subscription Filters（ここでのフィルターはプログラムタイプに依存し、変更される可能性があるため、すべての詳細は追加していません）
* フロー
  * Send email: プログラム内の Sales Nominated メール
* スケジュール
  * `Schedule Recurrence` を選択
  * Schedule: Daily
  * First Run: 次の関連する送信日（例: 利用可能な次の営業日）。イベントのタイムゾーンに関連する時刻を選択します。
  * Repeat Every: Weekday (M-F)
  * End On: イベントの当日

### Sales Nominated のスケジュール済みデプロイメントを削除する

スケジュール済みの Sales Nominated デプロイメントの特定の繰り返しを削除できます。フィールドマーケティングアクティビティについてはこの変更は FMC が、デマンドジェネレーションアクティビティについては Campaign Manager が責任を負います。

送信をキャンセルするには、[これらの手順](/handbook/marketing/marketing-operations/campaigns-and-programs/#canceling-an-email-send) に従ってください。

#### A/B テストナーチャーメールの追加

私たちのナーチャーはプログラムを呼び出す形でセットアップされているため、Marketo の Champion/Challenger を使ってメールの A/B テストを行うことができません。

代わりに、以下の手順を取るべきです:

1. 2 つ目のメールを構築し、名前に変更内容の説明を加えます（例: "Subject line test version"、もしくはテスト内容を直接記載）
2. 以下のフローのとおり、送信コントローラーにランダムサンプルとして追加します（2 バージョンの場合は 50%、それ以上のバージョンに分割する場合は合計 100% で配分します）:

    ![email-ab-test](/images/marketing/lifecycle-marketing/emails-nurture/image-4.png)

3. メールレポートで結果をモニタリングします
4. [A/B testing tracker](https://docs.google.com/spreadsheets/d/1BaGJbiYIG8187nnXXy2tvNtJyKXLV4CenCAZMYJbmeI/edit#gid=2079991889) に結果をドキュメント化します

A/B テストのベストプラクティスについては、下記の [A/B テストセクション](/handbook/marketing/lifecycle-marketing/email-best-practices/#ab-testing-best-practices) を参照してください。

## ニュースレター
<!-- DO NOT CHANGE THIS ANCHOR -->

### 月次ニュースレターのプロセス
<!-- DO NOT CHANGE THIS ANCHOR -->

[ニュースレター依頼テンプレート](https://gitlab.com/gitlab-com/marketing/lifecycle-marketing/-/issues/new?issuable_template=request-email-newsletter) を使用して Issue を作成し、Issue タイトルにニュースレターの送信日を含めます。

**[過去および今後のニュースレターのエピック](https://gitlab.com/groups/gitlab-com/marketing/-/epics/179)**

### Marketo でのニュースレター作成
<!-- DO NOT CHANGE THIS ANCHOR -->

Issue の期限日の 1〜2 日前に、ニュースレターのドラフトを作成します。Marketo で前回のニュースレターをクローンするのが最も簡単です:

1. Marketing Activities > Master Setup > Outreach > Newsletter & Security Release に移動します
1. ニュースレタープログラムテンプレート `[YYY.MM.DD] - New blog newsletter template` を選択し、右クリックして `Clone` を選択します。
1. `A Campaign Folder` にクローンします。
1. `Name` フィールドに、ニュースレターテンプレートの命名フォーマット `YYYYMMDD_Newsletter Name` に従った名前を入力します。
1. `Folder` フィールドで `Newsletter & Security Release` を選択します。説明を入力する必要はありません。
1. クローンが完了したら、新しいニュースレター項目を適切なサブフォルダ（`Bi-weekly Newsletters`、`Monthly Newsletters`、`Quarterly Newsletters`）にドラッグ＆ドロップする必要があります。
1. 新しいニュースレター項目の左にある + 記号をクリックし、`Newsletter` を選択します。
1. 画面上部に表示されるメニューバーで、`Edit draft` を選択します。

### Marketo でのニュースレター編集
<!-- DO NOT CHANGE THIS ANCHOR -->

1. 件名を必ず更新します。
1. 既存のボックスを編集して（ダブルクリックで入る）、ニュースレター項目を追加します。フォーマットを誤って失わないために、メニューバーで `HTML` ボタンを選択し、HTML を編集するのが最善です。
1. リンクの UTM パラメータの日付の更新（上部のバナー、および「We're hiring」ボタンなどすべてのデフォルト項目を含む）を忘れないでください。

### Marketo からのニュースレターテスト/サンプル送信
<!-- DO NOT CHANGE THIS ANCHOR -->

1. 準備ができたら、上部のメニューから `Email actions` を選択し、`Send sample` を選択してプレビューします。
1. `Person` フィールドにあなたのメールアドレスを入力し、`Send to` でプレビューを送りたい他のメールアドレスを追加できます。最終承認のために、ニュースレター依頼者（マーケティングニュースレターの場合はコンテンツチームの rebecca@）にサンプルを送ることをおすすめします。
1. ニュースレターに満足したら、`Email actions` メニューから `Approve and close` を選択します。

### ニュースレターの送信
<!-- DO NOT CHANGE THIS ANCHOR -->

1. 編集ビューが閉じたら、左側のカラムでメインのニュースレター項目をクリックします。
1. 送信予定の受信者が 25 万人を超える場合、Marketing Operations に [キャンペーン制限](/handbook/marketing/marketing-operations/marketo/#campaign-limits) を一時的に解除するよう依頼する必要があります。そうしないとメールが送信されません。
1. `Schedule` ボックスで、送信日を入力し、`Recipient time zone` オプションが利用可能であれば選択します。
1. `Head start` もチェックしていることを確認してください。
1. `Approval` ボックスで、`Approve program` をクリックします。
1. ニュースレター Issue に戻り、すべてが正しくセットアップされているか再確認するよう依頼者にコメントを残します。これが確認されたら Issue をクローズします。

## プロモーションイベント用 Issue の一括アップロードのテンプレートとプロセス
<!-- DO NOT CHANGE THIS ANCHOR -->

1. [スプレッドシート](https://docs.google.com/spreadsheets/d/1NW9KSx_lP-1mrx1Iidfgi42rXx1BMYFbNPVQKZmcxGE/edit?usp=sharing) を複製します
      Simple = メール 2 通、未参加者と参加者のフォローアップ、オーディエンスサイジング
      Complex = 複数メールとフォローアップ、オーディエンスサイジング（Commit を想像してください）
2. 1 列目で Issue タイトルを更新します
3. 3 列目で期限日を更新します
4. EPICNAME を検索（「Command/CTRL F」）して、そして横の 3 ドットを使ってお使いのエピック名に置き換えることで、テンプレートにエピックを反映させます。

以下については、1 つの Issue を更新してから下にドラッグできます（少なくともメールの説明については）:
5. Issue の下部に追加の担当者を追加します。自動的にあなたにアサインされます
6. 追加したいラベルを選択し、`/label ~"labelname"` を使って Issue の下部に追加します
7. オーディエンスやメール名に必要な調整を加えます
8. インポートボタンを使用して Issue を Campaigns プロジェクトにアップロードします。https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/uploads/c644b04f8460d6f1007e731093ff16fc/Screen_Shot_2022-08-11_at_2.10.56_PM.png
9. Issue が正しくアップロードされ、適切なエピックに含まれていることを確認します！

## サードパーティツールを使用せずにメールに「カレンダーに追加」リンクを付ける
<!-- DO NOT CHANGE THIS ANCHOR -->
例:

[Google カレンダーに追加](https://gitlab.com/) | [他のカレンダーに追加](https://gitlab.com/)

**注意:** Litmus アナリティクスのピクセルデータによると、私たちの送信の大半は Gmail の受信トレイに届きます。Outlook は受信者の 3〜15% を占めます。Litmus が行ったことはまさに以下のとおりです:

利用可能なすべてのカレンダーアプリケーションをサポートすることは事実上不可能です。どのカレンダーツールに焦点を当てるべきかを把握するために、Email Analytics データを確認しました。購読者が使用する最も人気のあるメールクライアントは Apple Mail、Gmail、Outlook です。このデータを使用して、私たちは iCalendar、Google カレンダー、Outlook カレンダーと互換性のある「カレンダーに追加」ボタンの作成に注力しました。
[詳細はこちら](https://www.litmus.com/blog/how-to-create-an-add-to-calendar-link-for-your-emails)

### メールに「カレンダーに追加」リンクを手動で作成する手順
<!-- DO NOT CHANGE THIS ANCHOR -->
* イベント用の Google カレンダーリンクを作成します
  * このツールを使ってイベント情報を生成します: [https://kalinka.tardate.com/](https://kalinka.tardate.com/)
  * Marketo から上記のツールにイベント情報をコピー＆ペーストする必要があります。これには約 2 分かかります。
    * Google カレンダー招待で住所として表示されるよう、Location は次のようにフォーマットしてください:

      **747 Howard St, San Francisco, CA 94103, USA**
    * タイムゾーンが正しいことを確認してください

  * リンクを作成します（[こちらの例](https://www.google.com/calendar/event?action=TEMPLATE&dates=20200406T150000Z%2F20200409T030000Z&text=Google%20Next%202020&location=747%20Howard%20St%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA&details=https%3A%2F%2Fcloud.withgoogle.com%2Fnext%2Fsf%2F)）。次のように Marketo の正しいテンプレートにペーストします:

    ```html
    <a href="https://www.google.com/calendar/event?action=TEMPLATE&dates=20200206T035000Z%2F20200206T065000Z&text=Nouts%20test%20event&location=5107%20Oakbrook%20Drive%2C%20Durham%2C%20NC&details=nout's%20test%20event%20">Add to Google calendar</a>
    ```

* その他のカレンダー（主に Outlook と Apple）用に ICS ファイルを作成します
  * Marketo は ICS ファイルを作成できます
  * ローカルトークンセクションに「Calendar File」トークンを追加します
  * 必要な情報をすべて貼り付けます（上記と同じ）
  * 次のようにメールにトークンを追加します:

      `<a href="link goes here">Add to other calendar</a>`

### 「カレンダーに追加」の追加オプション: API
<!-- DO NOT CHANGE THIS ANCHOR -->
* AddEvent API を使用します（年間請求で月 19 ドル、月 50 イベントまで利用可能）。

  [https://www.addevent.com/c/plans-and-pricing](https://www.addevent.com/c/plans-and-pricing)
* Marketo で Eventable を使用します（価格不明）

  [https://www.eventable.com/info/add-to-calendar-marketo/](https://www.eventable.com/info/add-to-calendar-marketo/)

## アクションストリーム

現在利用可能なアクションストリームです。Marketo の `{{my.Action Stream}}` トークンに以下の値を埋めるために使用してください。これらは正確に以下のとおりに記載する必要があります:

* Security
* Compliance

アクションストリームへのルーティング手順は [Campaigns & Programs](/handbook/marketing/marketing-operations/campaigns-and-programs/) ページで確認できます。[動画による手順](https://drive.google.com/file/d/1hBuYcScoJGVo8VUhKbiwToSE1g4Kr8Tl/view?usp=sharing)。
