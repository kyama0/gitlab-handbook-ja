---
title: "UserGems"
description: "UserGems はジョブチェンジ追跡ツールで、シグナルを収集・統合することで、私たちのチームが最良のバイヤーを特定し、アプローチする説得力ある理由を持ち、自動化によってそのインサイトに基づいて行動できるよう支援します"
upstream_path: /handbook/marketing/marketing-operations/usergems/
upstream_sha: eb9c7122b4259a2111ed65628e5384768922a597
translated_at: "2026-05-01T01:10:00Z"
translator: claude
stale: false
---

### UserGems データへのアクセス方法

UserGems データは SFDC 内に格納されており、すべてのユーザーがリードオブジェクト、コンタクトオブジェクト、およびカスタムの UserGems オブジェクト上で確認できます。UserGems リードを表示するには、Salesforce Lightning の App Launcher にアクセスし、UserGems を選択してください。そこから All UserGems / My UserGems のリストビューを参照できます。

リードが UserGems によって作成されたものかどうかは、Initial Source を参照することでわかります。UserGems は、追跡の 2 つの方法（**Contact Tracking / Target Account Tracking**）に基づいて、わずかに異なる 2 種類の Initial Source を持つリードを作成します。

UserGems が作成したリードに表示される 2 種類の Initial Source は次のとおりです。

- **UserGems Contact Tracking**
- **UserGems - New Hires & Promotions**

### UserGems Contact Tracking

UserGems は、慎重に選定された複数のコホートから、最大 5 万件のマッチしたコンタクトを GitLab が追跡できるように支援します。コホートは以下のとおりです。

- [CW Opp Associated Contacts (Large)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006Rs2T2AS/view);
- [CW Opp Associated Contacts (Mid-Market)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006Rs8v2AC/view);
- [CW Opp Associated Contacts (PubSec)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006RsC92AK/view);
- [CW Opp Contacts (SMB, by Titles)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006ZDi62AG/view);
- [Contacts associated with Open Opp (Large)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006RsFN2A0/view);
- [Contacts associated with Open Opp (Mid-Market)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006RsGz2AK/view);
- [Contacts associated with Open Opp (PubSec)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006RsLp2AK/view).

### UserGems Target Account Tracking

コンタクトトラッキングとは別の動きとして、UserGems はターゲットアカウントへの **新規入社者と昇進者 (New Hires & Promotions)** の特定も支援します。

UserGems が GitLab のために追跡している現在のターゲットアカウントの一覧は以下のとおりです。

1. [Compensation Target Prospect Accounts](https://gitlab.lightning.force.com/lightning/r/Report/00OPL0000044fjp/view)
2. [6Sense 6QA Accounts](https://gitlab.lightning.force.com/lightning/r/Report/00OQq000003Gf77MAC/view)
3. [Base Accounts](https://gitlab.lightning.force.com/lightning/r/Report/00OPL00000EtAcz2AF/view)

### UserGems がジョブチェンジを検知すると何が起きるか

上記で追跡されているコンタクトコホートに対してジョブチェンジ（またはターゲットアカウントへの新規入社／昇進）が検知されると、UserGems は次の処理を実行します。

- 最新のアカウント／会社情報を持つ完全に新しいリードを作成する
- 既存のコンタクトを **UG - No Longer at Company** チェックボックスフィールドを使って「No Longer at Company」としてマークする
- ステータスを **Disqualified** に更新する
- **Disqualified Reasons** を **No Longer at Company** に設定する

### UserGems Contact Tracking の新規リード作成頻度

UserGems は追跡対象の 5 万件のコンタクトを 2 つの Tier バケットに分割しています。

- **Tier 1 コンタクト (1,000 件のコンタクトレコード)**: 最上位コホート (Large セグメント内の CW Opp Associated Contacts) のもの。これらのコンタクトのジョブチェンジは追跡され、検知された場合は *毎週* 火曜日に SFDC に新規リードが作成されます。
- **Tier 2 コンタクト (49,000 件のコンタクトレコード)**: UserGems Contact Tracking セクションに記載されている残りのコンタクトレコード。これらのコンタクトのジョブチェンジは追跡され、検知された場合は *毎月* 火曜日に SFDC に新規リードが作成されます。

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
| [UG Contact Tracking](https://gitlab.lightning.force.com/lightning/r/701PL00000MTSqnYAH/view) | 会社を変えた GitLab チャンピオンを追跡 | チャンピオンが新しいアカウントに移動した際に即座にアクション - 既存のリレーションシップを活用 | Past Champion | UserGems Contact Tracking | 非アクティブ |
| [UG New Hires & Promos](https://gitlab.lightning.force.com/lightning/r/701PL00000MTkJ0YAL/view) | 追跡対象アカウントでのジョブチェンジを監視 | キーアカウントの新しい意思決定者または昇格したコンタクトとエンゲージ | New Hires, Promotions | UserGems - New Hires & Promotions | 非アクティブ |
| [UG - PipeGenDays - 7/23](https://gitlab.lightning.force.com/lightning/r/701Qq00000h0qbGIAQ/view) | PipeGenDays イベントの参加者を追跡 | エンゲージしたイベント参加者にディスカッションと次のステップに関するフォローアップを実施 | N/A | UserGems | 非アクティブ |
| [UG - Engage Past Champions at ICP Companies](https://gitlab.lightning.force.com/lightning/r/701PL00000h1b4rYAA/view) | 現在 ICP アカウントにいる元チャンピオンと再エンゲージ | 新しい高価値アカウントでの過去のポジティブな経験を活用したウォームアウトリーチ | Past Champion | UserGems | アクティブ |
| [UG - Multithread Other Decision Makers Past Champions](https://gitlab.lightning.force.com/lightning/r/701PL00000h1gNrYAI/view) | 既存のチャンピオンがいるアカウントでリレーションシップを拡大 | 単一のチャンピオンコンタクトを超えた、より広範なリレーションシップを構築 | New Hires, Promotions, Multi-thread | UserGems - New Hires & Promotions | アクティブ |
| [UG - Re-Engage Past Champions at ICP Companies](https://gitlab.lightning.force.com/lightning/r/701PL00000h1SrvYAE/view) | ICP アカウントにいる休眠中のチャンピオンとのリレーションシップを復活 | 高ポテンシャルアカウントでの貴重なリレーションシップ再活性化を優先 | Multi-thread, Past Champions, New Hires, Revive Closed Lost | UserGems | アクティブ |
| [UG - Revive Closed Lost Opps: Re-Engage Past Evaluators](https://gitlab.lightning.force.com/lightning/r/701Qq00000lOVsPIAW/view) | 失注機会のコンタクトに再アプローチ | 時間の経過と状況の変化を踏まえて会話を再開 | Revive Closed Lost | UserGems | アクティブ |
| [UG - Revive Closed Lost Opps: Engage Newly Joined Decision Makers](https://gitlab.lightning.force.com/lightning/r/701Qq00000lOOkqIAG/view) | 過去の失注機会のあるアカウントの新しい意思決定者をターゲットに | 以前の評価に関わっていなかった新しいステークホルダーへの新鮮なアウトリーチアングル | New Hires, Promotions | UserGems - New Hires & Promotions | アクティブ |

### UserGems Meeting Assistant

UserGems Meeting Assistant は、UG のスタンドアロン機能で、SDR/BDR の Google カレンダーと同期し、ミーティングに含まれるサードパーティのコンタクトデータをキャプチャしてエンリッチします。このコンタクトデータが必要な条件をすべて満たす場合、SFDC インスタンスにコンタクトとして追加されます。

SFDC でコンタクトが作成されるために満たす必要がある条件は次のとおりです。

- 関連するアカウント／会社が SFDC 環境に存在する
- 関連するアカウント／会社が設定されたペルソナに合致する
- コンタクトが LinkedIn プロフィールを持っている
- コンタクトのメールドメインが「無料メールプロバイダー」と一致しない

別途、コンタクトの会社にオープンな商談 (open opportunity) も存在する場合、コンタクトはそのオープン商談のコンタクトロールとしても追加されます。

私たちは Meeting Assistant の活用を、12 月 12 日に 6 名の営業担当グループ向けのパイロットとして開始しています。2025 年 1 月中旬から下旬にかけて、Sales Development 組織全体への完全展開を予定しています。

このツールはサードパーティのデータのみを処理し、データ主体の権利はそのサードパーティのコンタクトからチームメンバーに帰属することはありません。チームメンバーが業務用カレンダーで友人とのミーティングをスケジュールした場合でも、そのコンタクトは個人ドメインの除外により省略されます。

### リードルーティングと通知

Traction Complete は UserGems によって作成されたリードのルーティング、ならびに BDR/SDR/AE への通知（メール、Slack、またはその両方による）に使用されます。通知は週次で（水曜日に）実行され、これは UserGems データが Salesforce に同期される（火曜日）翌日です。通知をトリガーするためにスケジュールフローを使用しています。

- 1 A/B/C/D 通知は次の場合にトリガーされます: `LeadSource = 'UserGems Contact Tracking' AND CreatedDate = YESTERDAY`
- 3 A/B 通知は次の場合にトリガーされます: `UserGem__NoLongerAtCompany__c =true AND Status = 'Disqualified' AND Unqualified_Reasons__c = 'No Longer At Company' AND Unqualified_DateTime__c = YESTERDAY`

リードのボリュームが高いため、遡及作成されたリードについては通知をオフにしている点に留意してください。最初のバッチが完了した後で通知を再度オンにします。

UserGems のリードは、`UserGems Lead` という高優先度理由 (high priority reason) で高優先度としてマークされ、これにより作成時にリードの割り当てが可能になります。リードは、BDR が割り当てられている場合、かつ以下のいずれかの基準を満たす場合に BDR に割り当てられます。

1. Actively Working
2. PubSec、FINS、Telco、BASE、または APJ

これに該当しない場合、SDR に割り当てられます。

| 通知                                                                                                                                | 関連オブジェクト | 受信者 | フィルター                                                                                                                                                                                                                   | ステータス |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| 1A. 新しいビジネスに参加した追跡対象コンタクト（オープン商談なし、3 か月未満）                                                           | Lead           | BDR/SDR    | Source = UserGems Contact Tracking<br>Count of Open Opps = 0<br>UG - Started Within the Last 3 month = Yes                                                                                                               | 非アクティブ |
| 1B. 新しいビジネスに参加した追跡対象コンタクト（オープン商談なし、3 か月以上）                                                           | Lead           | BDR/SDR    | Source = UserGems Contact Tracking<br>Count of Open Opps = 0<br>UG - Started Within the Last 3 month = No                                                                                                              | 非アクティブ |
| 1C. ステージ 3 以降のオープン商談がある企業に参加した追跡対象コンタクト                                                  | Lead           | AE および Renewal Manager        | Source = UserGems Contact Tracking<br>Count of Open Opps GREATER THAN 0<br>Stage != 0-Pending Acceptance,1-Discovery,2-Scoping<br>UG - Started Within the Last 6 month = Yes                                             | アクティブ |
| 1D. ステージ 0、1、または 2 のオープン商談がある企業、もしくはオープン更新商談がある顧客アカウントに参加した追跡対象コンタクト | Lead           | BDR、AE、および Renewal Manager  | Source = UserGems Contact Tracking<br>Count of Open Opps GREATER THAN 0<br>Stage = 0-Pending Acceptance,1-Discovery,2-Scoping<br>Count of Open Renewal Opps GREATER THAN 0<br>UG - Started Within the Last 6 month = Yes | アクティブ |
| 3A. ステージ 3 以降の商談がある状態でコンタクトが会社を離れた場合                                                                         | Contact        | AE および Renewal Manager         | UG - No Longer at Company = True<br>Count of Open Opps GREATER THAN 0<br>Stage != 0-Pending Acceptance,1-Discovery,2-Scoping                                                                                             | アクティブ |
| 3B. ステージ 1 または 2 の商談がある状態でコンタクトが会社を離れた場合                                                                              | Contact        | AE および Renewal Manager  | UG - No Longer at Company = True<br>Count of Open Opps GREATER THAN 0<br>Stage = 0-Pending Acceptance,1-Discovery,2-Scoping                                                                                              | アクティブ |

#### UserGems リードルーティング

- **概要**
  - UserGems は、限定されたパイロットコホート（インテグレーションユーザーが所有するリード）に対してのみリードを割り当て／再割り当てでき、既存の "Do not route" ロジックを尊重しなければならず、Gillian の承認がある場合にのみ有効化／変更できます。

- **所有権の制約**
  - UserGems は、**現在の所有者が以下の場合にのみリードを割り当て／再割り当てできます**:
    - `Marketo Integration` (または同等の Marketo インテグレーションユーザー)
    - `UserGems Integration` ユーザー
    - キュー所有のリード
  - UserGems は、**既に名前付きの担当者または非インテグレーションユーザーが所有しているリードの所有権を変更してはなりません**。

- **"Do Not Route" 保護**
  - **既存の "Do not route" ロジックは、すべての UG ワークフローで尊重しなければなりません**。
  - リードが "Do not route"（または同等のフィールド／フラグ）でマークされている場合、**UserGems はそのレコードを割り当て／再割り当てしてはなりません**。
  - ルーティングワークフローは、UG 駆動の割り当ての前に必ずこのフラグを明示的にチェックしなければなりません。

- **承認とガバナンス**
  - 以下の前には **Gillian の承認が必要** です:
    - 本番環境で UG によるリード割り当て／再割り当てを有効化すること
    - UG ルーティングを新たなセグメントやオブジェクトに拡大すること
  - UG ルーティングロジックへの変更は、デプロイ前にドキュメント化し、Gillian と Marketing Ops に共有しなければなりません。

- **UG ルーティングのスコープ**
  - UG ルーティングは、**UserGems を起点とする、または UserGems が管理するコホート** (例: UG キャンペーン／シグナル) に対してのみ使用されます。すべてのリードルーティングのグローバルな置き換えとしては使用されません。

### ダイナミックレイアウト

リードオブジェクトとコンタクトオブジェクトの両方で、画面右上に、これが UserGems Lead または UserGems Past Contact である場合、関連する情報（Current Lead Link、Past Contact Link、Current Account、Current Account Type、Current Title、Current Email など）を一目で参照できます。

### セールスイネーブルメント

SDR/BDR 向けのトレーニングは 2024/09/19 に実施され、録画は[こちら](https://zoom.us/recording/detail?meeting_id=%2F%2Fw2nDCsSKq0S1Z%2FcjwZ1Q%3D%3D)から視聴できます。UserGems に関する質問があれば、Marketing Operations または Sales Development までお気軽にお問い合わせください。

### Sales Dev Plays

UserGems が作成したリードに対するさまざまなプレイの詳細については、[Sales Development ハンドブックの UserGems エントリ](/handbook/marketing/sales-development/#usergems)をご覧ください。
