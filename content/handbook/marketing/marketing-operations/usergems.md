---
title: "UserGems"
description: "UserGems はジョブチェンジ追跡ツールで、シグナルを収集・統合することで、私たちのチームが最良のバイヤーを特定し、アプローチする説得力ある理由を持ち、自動化によってそのインサイトに基づいて行動できるよう支援します"
upstream_path: /handbook/marketing/marketing-operations/usergems/
upstream_sha: 945c1a5211612e55d2a9e0b08b59ebb80548de60
translated_at: "2026-09-21T23:30:42+00:00"
translator: claude
stale: false
lastmod: "2026-09-21T08:44:54Z"
---

### UserGems データへのアクセス方法

Initial Source を参照することで、UserGems が作成したリードを識別できます。

UserGems は、追跡する施策または機能（Contact Tracking、Target Account Tracking、Meeting Assistant）に応じて、わずかに異なる 3 種類の Initial Source を持つリードを作成します。UserGems が作成したリードに表示される 3 種類の Initial Source は次のとおりです:

- UserGems Contact Tracking
- UserGems - New Hires & Promotions
- UserGems - Meeting Assistant — 詳細については、以下の [UserGems Meeting Assistant](/handbook/marketing/marketing-operations/usergems/#usergems-meeting-assistant) セクションを参照してください。

### UserGems Contact Tracking

UserGems は、慎重に選定されたコホートのコンタクトを GitLab が追跡し、関連するジョブチェンジや関係性のシグナルを把握できるよう支援します。

1. [CW Opp Associated Contacts (Large)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006Rs2T2AS/view)
2. [CW Opp Associated Contacts (Mid-Market)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006Rs8v2AC/view)
3. [CW Opp Associated Contacts (PubSec)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006RsC92AK/view)
4. [CW Opp Contacts (SMB, by Titles)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006ZDi62AG/view)
5. [Contacts associated with Open Opp (Large)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006RsFN2A0/view)
6. [Contacts associated with Open Opp (Mid-Market)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006RsGz2AK/view)
7. [Contacts associated with Open Opp (PubSec)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006RsLp2AK/view)
8. [Paid Contacts w Admin Role](https://gitlab.lightning.force.com/lightning/_classic/%2F00OQq000003D7gHMAS)
9. [Contacts associated with Closed Lost Opportunities](https://gitlab.my.salesforce.com/00OPL000006MXuj2AG)

### UserGems Target Account Tracking

コンタクトトラッキングとは別の施策として、UserGems は追跡対象アカウントでの **新規入社者と昇進者 (New Hires & Promotions)** の特定も支援します。

現在のターゲットアカウントの一覧は以下のとおりです:

1. [Actively Working Accounts](https://gitlab.my.salesforce.com/00OQq000005jJBhMAM)
2. [6Sense 6QA Accounts](https://gitlab.lightning.force.com/lightning/_classic/%2F00OQq000003Gf77MAC)
3. [SMB Accounts](https://gitlab.lightning.force.com/lightning/r/Report/00OPL00000CI2Np2AL/view)
4. [AMER COMM East MM Customers](https://gitlab.lightning.force.com/lightning/r/Report/00OQq000003FJILMA4/view)
5. [Domestic First Order Available](https://gitlab.lightning.force.com/lightning/r/Report/00OPL00000EtAcz2AF/view)
6. [Open Opp Accounts] - 自動的に追跡されるコホート
7. [Revive Closed Lost Accounts] - 自動的に追跡されるコホート

### UserGems がジョブチェンジを検知すると何が起きるか

上記で追跡されているコンタクトコホートに対してジョブチェンジ（またはターゲットアカウントへの新規入社／昇進）が検知されると、UserGems は次の処理を実行します。

- 最新のアカウント／会社情報を持つ完全に新しいリードを作成する
- 既存のコンタクトを **UG - No Longer at Company** チェックボックスフィールドを使って「No Longer at Company」としてマークする
- ステータスを **Disqualified** に更新する
- **Disqualified Reasons** を **No Longer at Company** に設定する

### UserGems で利用可能なフィールド

レポート、またはリード／コンタクト／UserGems オブジェクト上で、UserGems によって入力されるいくつかのフィールドを参照できます。最も重要なフィールドのいくつかは以下のとおりです。

- *[UG] Company Country*; - フィールド名のとおり、現在の会社の国を表します
- *[UG] Person Country*; - フィールド名のとおり、現在の人物の国を表します
- *[UG] Company State*; - フィールド名のとおり、現在の会社の州を表します
- *[UG] Person State*; - フィールド名のとおり、現在の人物の州を表します
- *[UG] Person LinkedIn URL*; - 現在の個人の LinkedIn URL です
- *[UG] - Is Target Company*; - アカウントが UG で追跡しているターゲットアカウントのリストに含まれている場合にチェックされます
- *[UG] - No Longer At Company*; - UserGems が当該コンタクトのジョブチェンジを検知した場合に、コンタクトオブジェクト上でチェックされます
- *UG - Is Customer Company*; - アカウントが UG と共有された顧客アカウントのリストに含まれている場合にチェックされます
- *UG - Job Started Date*; - リードレコードに更新され、入社日が格納されるフィールドです
- *UG - Past Account*; - UG が作成した新規リードに更新され、関連するコンタクトに紐づくアカウントへのリンクが格納されます
- *UG - Past Contact*; - UG が作成した新規リードに更新され、ジョブチェンジが特定された前任のコンタクトへのリンクが格納されます
- *UG - Past Title*; - UG が作成した新規リードに更新され、ジョブチェンジ前のコンタクトの肩書が格納されます

### UserGems キャンペーン概要

| キャンペーン名 | 目的 | ユースケース | シグナル | Initial Source | ステータス |
|---------------|---------|----------|---------|----------------|--------|
| [FY27 UG Contact Tracking - Past Champions](https://gitlab.lightning.force.com/lightning/r/Campaign/701Qq00001J3p2YIAR/view) | 会社を変えた GitLab チャンピオンを追跡 | チャンピオンが新しいアカウントに移動した際に即座にアクション - 既存のリレーションシップを活用 | Past Champion | UserGems Contact Tracking | アクティブ - 2026 年 9 月 21 日に本稼働 |
| [FY27 UG Contact Tracking - Re-Engagement](https://gitlab.lightning.force.com/lightning/r/Campaign/701Qq00001J3Y0AIAV/view) | PipeGenDays イベントの参加者を追跡 | エンゲージしたイベント参加者にディスカッションと次のステップに関するフォローアップを実施 | N/A | UserGems | 非アクティブ |
| [FY27 New Hires & Promotions](https://gitlab.lightning.force.com/lightning/r/701PL00000MTkJ0YAL/view) | 追跡対象アカウントでのジョブチェンジを監視 | キーアカウントの新しい意思決定者または昇格したコンタクトとエンゲージ | New Hires, Promotions | UserGems - New Hires & Promotions | 非アクティブ |

### UserGems Past Champions（Contact Tracking）リード対応ガイドライン {#usergems-past-champions-contact-tracking-lead-handling-guidelines}

#### 目的 {#purpose}

このドキュメントでは、UserGems Past Champion リードが Past Champion の施策に入ってから、MQL 処理、所有者の割り当て、Relevance AI によるエンリッチメント、優先順位付け、Outreach への登録まで、SDR/BDR がどのように対応すべきかを説明します。

#### 対象読者 {#audience}

このガイダンスは、UserGems Past Champion リードを受け取る、または対応する可能性のある SDR/BDR を対象としています。

#### 対象範囲 {#scope}

このドキュメントでは、以下を扱います:

- Past Champion リードがプロセスに入る仕組み
- Past Champion リードが MQL になる仕組み
- 標準の MQL 所有者割り当ての仕組み
- Relevance AI フィールドに値が入力されるタイミング
- SDR/BDR による Relevance AI フィールドの活用方法
- Past Champion の優先順位付け、フォローアップ、Outreach への登録

このドキュメントでは、以下のワークフローは扱いません:

- New Hires & Promotions
- Re-Engagement
- Revive Closed Lost
- Meeting Assistant
- その他の UserGems 施策

#### 再開の状況 {#relaunch-status}

Past Champions の再開は、2026 年 9 月 21 日に本稼働しました。

再開後は、標準の MQL プロセスと現在の Past Champion 所有者割り当てプロセスを使用します。

#### 1. Past Champion フローの仕組み {#1-how-the-past-champion-flow-works}

プロセスは次の手順で進みます:

1. UserGems が追跡対象の Past Champion を特定し、承認済みの Past Champion キャンペーンにリードを追加します。
2. キャンペーンへの所属によって、Past Champion 施策の対象であることを識別します。
3. リードは自動的に MQL プロセスに移されます。
4. 通常の MQL ルーティングプロセスを通じて、各要因に基づく標準の MQL 所有者割り当てが行われます。
5. リードのステータスが MQL になり、割り当てタイプが BDR または SDR になると、Relevance AI ワークフローがそのリードを処理対象にします。
6. Relevance AI が Salesforce のリードレコードにある専用フィールドに値を入力します。
7. 割り当てられた SDR/BDR は、リード、Relevance フィールド、アカウントの状況、推奨される次のアクションを確認します。
8. SDR/BDR は、必要な確認を完了した後、承認済みの [Past Champion Outreach シーケンス](https://web.outreach.io/sequences/2513/overview)にリードを手動で追加します。

#### 2. Past Champion リードがプロセスに入るきっかけ {#2-what-causes-a-past-champion-lead-to-enter-the-process}

キャンペーンへの所属が、Past Champion を識別する主要なシグナルです。

補足的な UserGems 情報には、以下が含まれます:

- Initial Source が UserGems Contact Tracking であること
- Created By が UserGems Integration であること
- Past Contact
- Past Account
- Past Title
- UserGems の入社情報
- 現在の会社、肩書、国、LinkedIn 情報
- Interesting Moment および Last Interesting Moments（LIMs）

補足フィールドは、SDR/BDR がリードを理解して対応するうえで役立ちます。これらは、施策を識別する主要なシグナルである、承認済みの Past Champion キャンペーンへの所属に代わるものではありません。

#### 3. Past Champion リードが MQL になる仕組み {#3-how-past-champion-leads-become-mqls}

Past Champion リードは、Past Champion プロセスを通じて自動的に MQL になります。SDR/BDR がこれらのリードを手動で MQL にする必要はありません。

リードが MQL になると、各要因に基づく標準の MQL 所有者割り当てプロセスに進みます。最終的な所有者は、該当する Salesforce とアカウントの要因によって決まり、以下が含まれる場合があります:

- 一致したアカウント
- アカウントのステータスと顧客のステータス
- セグメント
- アカウントの担当体制
- BDR または SDR が対応可能かどうか
- 希望言語と地理情報
- オープン商談の状況
- その他の標準的な MQL 割り当てルール

SDR/BDR は、Salesforce レコードに表示される所有者と割り当てに従ってリードに対応してください。すべての Past Champion が SDR または BDR に割り当てられると考えないでください。

#### 4. Relevance AI フィールドに値が入力される仕組み {#4-how-the-relevance-ai-fields-are-populated}

Relevance AI の ワークフォース は、以下の両方の条件が成立すると起動します:

- Salesforce の Lead Status = `MQL`
- Assignment Type = `BDR` または `SDR`

MQL ステータスだけでは不十分です。ワークフォース がリードを処理するには、割り当てタイプも BDR または SDR である必要があります。

ワークフォース はリードを処理した後、以下の Salesforce フィールドに値を入力します:

| フィールド | 含まれる内容 | SDR/BDR による活用方法 |
| --- | --- | --- |
| `Relevance_Priority__c` | `High \| UG Past Champions` などの優先度レベルとソースの分類 | リードに推奨される優先度を理解するために使用します。 |
| `Relevance_Summary__c` | 主要なトリアージのシグナルと簡潔な要約 | 最初にこれを読み、リードが有望である理由と重要なシグナルを理解します。 |
| `Relevance_Next_Action__c` | 推奨される次のアクション 1 つ | 次のステップの出発点として使用し、Salesforce とアカウントの状況に照らして検証します。 |
| `Relevance_Research__c` | 調査全体と裏付けとなる詳細情報のブロック | 優先順位付けやパーソナライズのために、より詳しい背景情報が必要な場合に使用します。 |
| `Relevance_Last_Updated__c` | Relevance フィールドの最終更新日時を示すタイムスタンプ | 出力が最新かどうかを判断するために使用します。 |

Relevance フィールドは、Salesforce のリードレコードに書き込まれます。SDR/BDR は、リードが MQL になり、BDR または SDR の割り当てタイプを受け取る前に、これらのフィールドに値が入力されると期待しないでください。

#### 5. Relevance フィールドに値が入力されたときに SDR/BDR が行うこと {#5-what-sdrsbdrs-should-do-when-the-relevance-fields-are-populated}

フィールドを利用できるようになったら:

1. `Relevance_Priority__c` を確認し、推奨される優先度を理解します。
2. `Relevance_Summary__c` を読み、主要なシグナルを理解します。
3. `Relevance_Research__c` で裏付けとなる詳細情報を確認します。
4. 推奨される出発点として `Relevance_Next_Action__c` に従います。
5. 現在の Salesforce レコード、アカウント、商談、所有者の状況に照らして推奨内容を検証します。
6. 関連する UserGems と LIMs の情報を使用して、最初の接触をパーソナライズします。
7. 登録前の確認が完了したら、その人物を[承認済みの Past Champion シーケンス](https://web.outreach.io/sequences/2513/overview)に手動で追加します。

Relevance AI が提供するのは推奨内容です。レコードを確認し、推奨されたアクションが適切かどうかを判断する責任は、引き続き SDR/BDR にあります。

#### 6. Relevance フィールドが空欄の場合の確認事項 {#6-what-to-check-when-the-relevance-fields-are-blank}

Relevance フィールドが空欄の場合は、システム障害として扱う前に以下を確認してください:

- Lead Status は `MQL` に設定されていますか？
- リードの Assignment Type は `BDR` または `SDR` ですか？
- リードは AE または他の所有者タイプのみに割り当てられているのではなく、BDR または SDR に割り当てられていますか？
- ワークフォース が処理する前に、リードが対象外、リサイクル、またはその他の理由で MQL 以外の状態になっていませんか？
- Relevance Last Updated フィールドが空欄、または古い日時になっていませんか？
- UserGems のキャンペーンとリードのフィールドに、想定どおり値が入力されていますか？

MQL だった期間が短いリードや、BDR または SDR の割り当てを受ける前に対象外になったリードは、ワークフォース によって処理対象とされない場合があります。

リードが起動条件を満たしているにもかかわらずフィールドが空欄のままの場合は、リードについて記録し、Marketing Operations と Relevance AI のサポート担当者に問題をエスカレーションしてください。

#### 7. MQL になった後の所有者割り当ての仕組み {#7-how-ownership-assignment-works-after-mql}

Past Champion プロセスでは、UserGems を通じてすべてのリードを SDR/BDR に直接割り当てるわけではありません。

順序は次のとおりです:

1. Past Champion キャンペーンへの所属によって、施策の対象であることを識別します。
2. リードが MQL になります。
3. 標準の MQL 所有者割り当てロジックがリードを評価します。
4. 該当するアカウント、セグメント、言語、担当体制、その他の MQL 要因に従ってリードが割り当てられます。
5. 割り当てタイプが BDR または SDR の場合にのみ、Relevance AI がリードを処理します。

リードが AE に割り当てられている場合や、BDR または SDR の割り当てタイプを持たない場合、Relevance フィールドに値が入力されないことがあります。Relevance AI に処理させることだけを目的として、所有者を手動で変更しないでください。所有者に関する質問は、通常の Marketing Operations または Sales Development のプロセスを通じてエスカレーションしてください。

#### 8. Past Champion の優先順位付け {#8-past-champion-prioritization}

どのくらい早く対応するかを決める際には、以下の要因を考慮してください:

- 過去の GitLab との関係の強さと関連性
- 現在の会社またはアカウントの関連性
- UserGems のジョブチェンジシグナルの新しさ
- Relevance AI の優先度
- 関連する LIMs またはアカウントのアクティビティの有無
- アカウントの担当体制とオープン商談の状況

最近、適合度の高いアカウントに転職した Past Champion には、一般に、背景情報が限られている、または古いリードよりも早く対応してください。

#### 9. Past Champion を Outreach に登録する {#9-enqueue-past-champions-in-outreach}

このプロセスでは、Past Champion が Outreach シーケンスに自動的に追加されることはありません。SDR/BDR は、Salesforce レコードを確認し、所有者とシーケンスの確認を終えた後、適格なリードを手動で追加する責任を負います。

##### SDR/BDR の登録プロセス {#sdrbdr-enrollment-process}

1. Salesforce のリードレコードを開きます。
2. リードが Past Champion であり、想定されるキャンペーンに所属していることを確認します。
3. 現在の所有者と割り当てタイプを確認します。
4. Relevance Priority、Summary、Next Action、Research、Last Updated の各フィールドを確認します。
5. Outreach にすでに登録されていないか確認します。
6. 重複登録しないでください。
7. 承認済みの Past Champion シーケンスを選択します:
   - Past Champion シーケンス: **[[SD IB HT GEM-E PAST CHAMPIONS - Sept26](https://web.outreach.io/sequences/2513/overview)]**
   - 該当する場合は言語別シーケンス: **[[SD IB HT GEM-E PAST CHAMPIONS LANGUAGES - Sept26](https://web.outreach.io/sequences/2514)]**
8. その人物をシーケンスに手動で追加します。
9. 過去の GitLab との関係、現在の役割、アカウントの状況、関連する LIMs を使用して、最初の接触をパーソナライズします。
10. 適切なアクティビティ、処理結果、またはフォローアップの結果を記録します。

##### 登録時の遵守事項 {#enrollment-guardrails}

- Outreach シーケンスですでにアクティブなリードを登録しないでください。
- New Hires & Promotions、Re-Engagement、または別の UserGems 施策向けのシーケンスを使用しないでください。
- 所有者とアカウントの状況を確認する前に、リードを登録しないでください。
- Relevance Next Action を、Salesforce の確認に代わるものとして扱わないでください。
- 推奨される次のアクションが現在のレコードと矛盾する場合は、いったん停止し、連絡する前に矛盾を解消してください。

#### 10. メッセージの伝え方 {#10-messaging-approach}

Past Champion への連絡では、以下を心がけてください:

- 適切な場合は、過去の GitLab との関係に言及する
- 相手の現在の役割や会社に結び付けて連絡する
- Relevance Summary、Research、LIMs を使用して、メッセージを具体的にする
- 過度に自動化された、または一般的な文面に聞こえないようにする
- 次のステップを明確にする

推奨するメッセージの構成:

1. 過去の GitLab との関係に言及します。
2. 現在の役割や会社の状況にメッセージを結び付けます。
3. 有用であれば、関連するアカウントのシグナルや LIM を追加します。
4. 提供する価値を明確に伝えます。
5. 簡単な次のステップを依頼します。

シーケンスまたはレコードで UG AI が生成した件名や本文を利用できる場合は、ドラフトとして扱ってください。送信する前に確認し、編集してください。

#### 信頼できる唯一の情報源に関する宣言 {#source-of-truth-statement}

このドキュメントは、MQL プロセス、所有者の割り当て、Relevance AI フィールドの解釈、優先順位付け、Outreach への登録を含む、SDR/BDR による UserGems Past Champion リードへの対応方法についての信頼できる唯一の情報源です。

### UserGems Meeting Assistant {#usergems-meeting-assistant}

UserGems Meeting Assistant は、UG のスタンドアロン機能で、SDR/BDR の Google カレンダーと同期し、ミーティングに含まれるサードパーティのコンタクトデータをキャプチャしてエンリッチします。このコンタクトデータが必要な条件をすべて満たす場合、SFDC インスタンスにコンタクトとして追加されます。

SFDC でコンタクトが作成されるために満たす必要がある条件は次のとおりです。

- 関連するアカウント／会社が SFDC 環境に存在する
- 関連するアカウント／会社が設定されたペルソナに合致する
- コンタクトが LinkedIn プロフィールを持っている
- コンタクトのメールドメインが「無料メールプロバイダー」と一致しない

別途、コンタクトの会社にオープンな商談 (open opportunity) も存在する場合、コンタクトはそのオープン商談のコンタクトロールとしても追加されます。

私たちは Meeting Assistant の活用を、12 月 12 日に 6 名の営業担当グループ向けのパイロットとして開始しています。2025 年 1 月中旬から下旬にかけて、Sales Development 組織全体への完全展開を予定しています。

このツールはサードパーティのデータのみを処理し、データ主体の権利はそのサードパーティのコンタクトからチームメンバーに帰属することはありません。チームメンバーが業務用カレンダーで友人とのミーティングをスケジュールした場合でも、そのコンタクトは個人ドメインの除外により省略されます。

### ダイナミックレイアウト

リードオブジェクトとコンタクトオブジェクトの両方で、画面右上に、これが UserGems Lead または UserGems Past Contact である場合、関連する情報（Current Lead Link、Past Contact Link、Current Account、Current Account Type、Current Title、Current Email など）を一目で参照できます。
