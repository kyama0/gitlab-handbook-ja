---
title: SME プログラムの構造、役割と責任

description: SME プログラムの構造、役割と責任について詳細を記載します。

upstream_path: /handbook/solutions-architects/sa-practices/subject-matter-experts/sme-program/
upstream_sha: "fa96dbec1adcd6457e8819e6bd3d28fddfdddf4f"
lastmod: "2026-09-16T23:38:14-04:00"
translated_at: "2026-09-20T03:15:52+00:00"
translator: claude
stale: false
---

## SME プログラムの構造 {#sme-program-structure}

SME プログラムは、全体を統括する **SME Program Lead** が主宰・主導します。SME Program Lead は、すべての SME プロセスを確立し、各 SME 領域で遵守されるようにする責任を負います。

SME プログラムは、1 つ以上の [SME 専門領域](/handbook/solutions-architects/sa-practices/subject-matter-experts/#areas-of-expertise)で構成されます。
各 SME 領域は、2 名の **SME Area Lead／DRI** が代表を務め、SA 組織から 1 名、CS 組織から 1 名が担当します。両者は各領域の適切な運営に責任を負います。

各 SME 領域には、少なくとも 1 名の Product Manager および／または Engineering Manager の代表者がサポートとしてつくべきです。

合計すると、各 SME 領域は次の構成となります。

1. SME Area Lead または DRI 2 名 - SA 代表者と CS 代表者
2. Product Manager および／または Engineering Manager の代表者を少なくとも 1 名
3. 少なくとも 3 名の SME。それぞれ次の地域から選出されます： EMEA NEUR、EMEA SEUR、DACH/META、APAC、US East、US West、Commercial、Partners/Pub Sec。

SA 組織については、各 SME 専門領域につき、1 地域に 1 名の Subject Matter Expert (SME) 代表者のみを推奨します。これは、各領域に 1 名の SME がいて、SME プログラムを適切に運営するための責任とタスクを意欲的に遂行することを保証するためです。

したがって、SA と CS 両方の Area Lead と、すべての SA と CS の SME を含む各 SME 領域は、SME 領域 Pod と呼ぶことができます。各 Pod は独自の[ケイデンスミーティング](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-cadences/#sme-area-pod-cadence)を持ちます。SA と CSM の両方が同じ Pod ミーティングに参加できます。

| SA SME Program Lead | CS SME Program Lead |
| :---- | :---- |

| SME 領域 Pod | |
| :---- | :---- |
| SA SME Area Lead | CS SME Area Lead |
| SA 地域 SME 1 | CS SME 1 |
| SA 地域 SME 2 | CS SME 2 |
| SA 地域 SME 3 | CS SME 3 |

各領域・地域につき 1 名の SA SME のみとすることを強く推奨しますが、他の Subject Matter Expert (SME) または SME Associate が存在することもあり得ます。ただし、各領域につき 1 名の SA を地域 SME として指名し、その SA は SME プログラムにおいて DRI としての責任を引き受けます。これには、コラテラルの維持、顧客からのフィードバック収集、Product Management との関わりが含まれます。

[各領域の SME 一覧](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/cs-subject-matter-experts/-/tree/main#who-are-the-current-smes-and-what-areas-are-they-focused-on)はこちらです。

## SME の役割 {#sme-roles}

### **SME Associate** {#sme-associates}

SME は一般に、次の 2 つの主要な責任を果たすことが期待されます。

* それぞれの領域、職務、ドメインの専門家であり、高い水準の専門性を維持すること
* SME プログラムに関連するさまざまな側面（コラテラルの維持、顧客フィードバックの収集、Product Management との関わりなど）を主導・指揮する DRI かつ責任者であること

ただし、キャリア開発の一環として、SME プログラムで DRI として参加することを望まない、またはまだ準備ができていないものの、SE 領域の 1 つ（AI、App Security、Agile Planning、Dedicated、CI & Runners、Metrics と Observability）に技術的に深く関心を寄せたい SA（や CSM）も多く存在します。

SME Associate は、こうした「将来の SME」と捉えてください。技能を高め、一人前になることを目指して、専攻を宣言する人たちです。

これらは、SME プログラムのさまざまな側面を主導・指揮する責任を負う地域 SME 代表者ではありません。

これは SME Associate です。任意の SME 領域でエキスパートになることに関心を表明できる SA の人数に制限はありません。SME Area Lead は、自身のコラボレーションプロジェクトを使用して Associate のリストを追跡します。

例として、SA Manager は、地理またはリージョンの全 SA チームメンバーに対して、成長の一環として 1 つ以上の重点領域に関心を表明し、その領域の技能を向上させるように促すことができます。

SME Associate は、それぞれの地域 SME のメンタリングを受けることができます。

SME Associate は、特定の領域の次期地域 SME を選出する際の候補者プールを形成できます。

SME Associate は、SME になるために必要なスキルにマッピングしたコントリビューションリストを使って、自身の進捗を積極的に追跡します。必要なスキルは SME 領域によって異なります。

この役割と他の [SME の役割の責任については、こちらに詳しく記載しています](\#sme-responsibilities)。

### **SME（各 SME 領域の地域 SA 代表者）** {#smes-regional-sa-representative-for-each-sme-area}

SME とは、専攻を宣言し、認知される専門知識を獲得しただけでなく、特定の SME 領域における地域代表として正式に選出された SA および CSM です。

SME は、自身の地域における専門領域と、SME プログラムの円滑な運営に責任を負います。

SME は、プログラム在任期間中、指定された[時間的コミットメント](/handbook/solutions-architects/sa-practices/subject-matter-experts/#time-commitment)を引き受ける意欲が必要です。

この役割と他の [SME の役割の責任については、こちらに詳しく記載しています](\#sme-responsibilities)。

### **SME Area Lead／DRI** {#sme-area-lead-dri}

SME Area Lead／DRI は、それぞれの専門領域と SME チームのリードに責任を負います。各自の SME 領域のプロジェクトマネージャーを務めます。

次の責任を負います。

* 各領域の SME 通話のカレンダーを設定・維持すること
* SME 領域 Pod との定期的なケイデンスを持つこと
* Product Management とのケイデンスを維持し、関わること
* SME の名簿を維持し、SME Associate を追跡すること。この名簿が本ハンドブックと Stack OverFlow に維持されていることを確認する
* 領域内のすべての Google グループと [SME Slack チャンネル](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-request/#sme-slack)のメンバーシップを維持すること

この役割と他の [SME の役割の責任については、こちらに詳しく記載しています](\#sme-responsibilities)。

### **SME Program Lead** {#sme-program-lead}

SME Program Lead は次の責任を負います。

* SME プログラムのケイデンスが実施されていることを保証する
* SME Area Lead が ARR Driver Meeting で代表されていることを保証する
* SME Area Lead の任命とローテーションを保証する
* 顧客フィードバックフレームワーク、テンプレート、優先順位付けプロセスにおいて必要な調整を行う
* SME に関わるためのプロセスを維持する
* SME の利用率と影響度の指標を追跡する
* PM との関係を維持する
* SME Area Lead のローテーションと選定プロセスを支援する
* 新しい SME プログラムのオンボーディングを支援する

## SME の責任 {#sme-responsibilities}

| 主な責任 | SME Associate | SME | SME Area Lead | SME Program Lead |
| :---- | :---- | :---- | :---- | :---- |
| **技術的ガイダンスと専門性** | -商談の相談 <p>-デモまたはプレゼンテーションのレビュー <br>-顧客通話 <br>-イネーブルメントセッションへの参加 <br>-意図的な練習  | <br>- 自身の専門領域における最新トレンドへのキャッチアップ <br>- 地域コール中の "SME Corner" において SA と CSM への最新情報提供 <br>- SA からの自身の専門領域に関する質問への回答。 <br>- 他の SA や CSM をイネーブルメントするオフィスアワー <br>- [Technical Skills Exchange](https://gitlab.com/gitlab-com/sales-team/field-operations/enablement/-/issues/2800)のようなフィールドイネーブルメント活動への参加 <br>- [Customer Success Plan](/handbook/solutions-architects/processes/customer-success-plan/)のレビュー <br>- [意図的な練習](/handbook/solutions-architects/sa-practices/deliberate-practice/) <br>- 同じトピックの SME 同士、また同僚 SA と一緒に[コミュニティ・オブ・プラクティス](/handbook/solutions-architects/sa-practices/communities-of-practice/)を形成し、チームの知識を育てる |  |  |
| **コラテラルの維持** |  | <br>-SA がディスカバリープロセスで使用するディスカバリー質問のリスト作成 <br>-カテゴリごとに顧客がよくする質問の作成 <br>-Highspot 内の各領域の録画イネーブルメントセッション一覧の維持 <br>-FAQ ゴールデン[デモ](/handbook/solutions-architects/demonstrations/)について PM と協働する <br>-[ハンズオンワークショップ](/handbook/solutions-architects/tools-and-resources/workshop/) <br>-技術評価ガイドライン <br>-[POV](/handbook/solutions-architects/playbooks/pov/) テンプレート <br>-一般的な概念アーキテクチャ図 <br>-競合インテリジェンス | <br>- SME（StackOverFlow にも）と SME Associate のリストを維持 <br>- 自身の専門領域に関するトレーニング資料の開発・配信 <br>- SA がディスカバリープロセスで使用するディスカバリー質問のリスト作成 <br>- カテゴリごとに顧客がよくする質問の作成 <br>- 録画イネーブルメントセッションの収集とカテゴリ分け <br>- 各領域の FAQ を維持するために PM と協働する <br>- ゴールデン[デモ](/handbook/solutions-architects/demonstrations/)の作成 <br>- [ハンズオンワークショップ](/handbook/solutions-architects/tools-and-resources/workshop/) <br>- 技術評価ガイドライン <br>- [POV](/handbook/solutions-architects/playbooks/pov/) テンプレート <br>- 一般的な概念アーキテクチャ図 <br>- 競合インテリジェンス <br>- Enablement と協働し、SA SME オンボーディングが更新されていることを保証する。SA が特定の領域の専門性を獲得できるタスクのシーケンスをまとめる。 |  |
| **顧客フィードバック／PM との関わり** |  |  <br>- 対応する[プロダクトグループ](/handbook/product/categories/#devops-stages)の Product Manager のカウンターパートとなる <br>- PM とコミュニケーションを取り、共有のコミュニケーション媒体を通じてフィールドに最新情報を提供する <br>- SA が PM レビュー用に顧客フィードバックを提出していることを保証する <br>- 提出物をレビュー・分析してパターンを把握し、SA からさらにコンテキストを得る <br>- SME Area Lead と月に最低 1 回非同期で会合し、提出物の調整、優先順位付け、PM へ提示するためのナラティブの準備を行う <br>- 顧客フィードバックと PM ステータスの Issue ボードを維持 <br>- 月に 1 回 PM と会合し、優先度の高い提出物をレビューする <br>- PM から進行中の作業の最新情報を得る <br>- 提出物が更新されていることを保証する <br>- プロダクトドキュメントへのコントリビューション | <br>-提出物のレビューとパターン分析を主導する <br>-SA からさらにコンテキストを得る <br>-**提出物が正しいテーマで適切にタグ付けされていることを保証する** <br>-**SME Area Lead とのグローバルなミーティングを月に最低 1 回非同期で設定・主導する**。提出物の調整、優先順位付け、PM へ提示するためのナラティブの準備を行う <br>-顧客フィードバックと PM ステータスの Issue ボードの維持を主導する <br>-**月に 1 回 PM とのミーティングを設定・主導する**。優先度の高い提出物をレビューする <br>-PM から進行中の作業の最新情報を得る <br>-提出物が更新されていることを保証する <br>-**PM との関係性とコラボレーションを維持する** <br>-**収益を促進する顧客フィードバックを選定し、四半期に 1 回 ARR Driver Meeting で他の SME Area Lead と会う** <br>-PM が SA をイネーブルメントできるように手配する <br>-Beta 機能などへのアクセスを得る <br>-プロダクトドキュメントへのコントリビューション |  |
| **SME プログラムの管理** |  |  |  | <br>-SME プログラムのケイデンスが実施されていることを保証する <br>-すべての領域の SME 通話のカレンダーを維持する <br>-SME Area Lead が ARR Driver Meeting で代表されていることを保証する<br>-SME Area Lead の任命とローテーションを保証する <br>-顧客フィードバックフレームワーク、テンプレート、優先順位付けプロセスにおいて必要な調整を行う <br>-SME に関わるためのプロセスを維持する <br>-SME 利用率と影響度の指標を追跡する <br>-PM との関係を維持する <br>-SME Area Lead のローテーションと選定プロセスを支援する <br>-新しい SME プログラムのオンボーディングを支援する  |

|  |
| :---- |

## SME の選出、指名、ローテーション {#sme-selection}

### **SME Associate** {#sme-associates-1}

SA と CSM は、1on1 プロセス、中間レビュー、Individual Growth Plan の一環として、GitLab Platform の特定の領域にフォーカスしたい意向を示すべきです。

SA Manager は、これを地域の SME に伝えるべきです。

SME と SA Manager は、この関心を表明した SA が必要な専門性を獲得するためのプログラムに従うことを確認すべきです。これは、メンターシップ、オフィスアワー、認定資格、所定のトレーニング、動画、デモ、ワークショップやフィールドイベントへのサポートの形を取ることができます。

### **SME（地域）** {#smes-regional}

1. SME は、最低 1 年から最大 2 年間その役割を担う準備が必要です。
2. 自身の地域を代表することに関心を持つ SME SA Associate は、その意向を SA Manager に伝えるべきです。
3. 地域や地理的エリア内の SA Manager は協力して、専門領域と関連経験をレビューし、地域を代表する SME を選出すべきです。
4. 地域の SME に変更がある場合は、SME Area Lead に通知してください。

### **SME Area Lead と SA Program Lead** {#sme-area-leads-and-sa-program-lead}

SME Area Lead の指名と選定プロセスは次のとおりです。

1. SME Area Lead は、最低 1 年から最大 2 年間その役割を担う準備が必要です。
2. SME Program Lead は、最低 18 か月から最大 3 年間その役割を担う準備が必要です。
3. オープンな応募募集： SME Area Lead になることに関心を持つ SA や既存の SME は、自身の専門領域と関連経験を提出して応募できます。Product Management チームも候補者を推薦するよう招待されます。
4. 応募のレビュー： シニア SA とリーダーシップで構成されるパネルが応募をレビューします。
5. 選定： パネルは専門領域と関連経験に基づいて SME Area Lead を選定します。
6. オンボーディング： 選ばれた SME Area Lead は、新しい責任と期待に慣れるための簡単なオンボーディングプロセスを受けます。

## SME トレーニング {#sme-training}

SME になるためのトレーニングは、メンターシップ、オフィスアワー、認定資格、所定のトレーニング、動画、デモ、ワークショップとフィールドイベントへのサポートの形を取ることができます。各 SME 領域は、新しい SME の必要なトレーニングパスを決定します。例えば、この [Issue](https://gitlab.com/gitlab-com/customer-success/csmerm/cross-collaboration/subject-matter-experts/sa-sme-team-dedicated/-/issues/6)は、Dedicated SME として顧客対応可能になるために期待されるスキルレベルと関連スキルを記述しています。

加えて、SME にはカンファレンスに参加し、自身の専門領域で GitLab を代表してスピーチする機会が与えられるべきです。

将来的に Shadow a PM プログラムを提供する予定です。

現在、CSM SME は各 SME 領域のリソースと資料を集めています。これらは Highspot の [CS SME Hub of content](https://gitlab.highspot.com/items/667095b95cc9b08c87d40b68?lfrm=srp.0)で維持されています。

将来的な目標は、SME Associate が SME になるための専門性を獲得できるよう、所定の方法でコンテンツを整理することです。

## SME オンボーディング {#sme-onboarding}

各領域の新しい SME が選出された際には、次の手順を行います。

1. SME は、自身の地域の SME プログラムに参加することについて、直属のマネージャーから承認を受けます。
2. 新しい SME は、SME 領域に必要なオンボーディングを完了します。必要なオンボーディングは各領域によって決定されます。例： [Embedded](https://gitlab.com/gitlab-com/customer-success/csmerm/cross-collaboration/subject-matter-experts/embedded-devops-sme/-/blob/main/.gitlab/issue_templates/Embedded_DevOps_SME_Candidate_Onboarding.md)と [Dedicated](https://gitlab.com/gitlab-com/customer-success/csmerm/cross-collaboration/subject-matter-experts/sa-sme-team-dedicated/-/blob/main/.gitlab/issue_templates/New%20Dedicated%20SME%20Onboarding.md)のオンボーディング Issue テンプレート。
3. SME を、専門領域に対応する Google グループおよび Slack グループに追加します。これにより、SME はその領域のすべてのケイデンスコールに自動的に追加されます。
4. 質問に答え始めるために、SME を適切な Stack OverFlow チームエリアに追加します。
5. SME を適切な [SME Slack チャンネル](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-request/#sme-slack)に追加します。
6. 新しい SME として、新しいヘルプリクエスト、共有コンテンツのレビュー、Stack Overflow の質問、その他の有益な取り組みにコントリビュートすることを目指してください。
