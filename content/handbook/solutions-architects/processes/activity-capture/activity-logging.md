---
title: ソリューションアーキテクチャの活動ロギング
description: >-
  ソリューションアーキテクトはすべての顧客・見込み顧客の活動を記録します。これは正確なキャプチャを導くための活動説明です。
upstream_path: /handbook/solutions-architects/processes/activity-capture/activity-logging/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-09T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-03-19T15:48:52+08:00"
---

ソリューションアーキテクトは、**結果** と **効率** を促進するために、正確な活動タイプですべての顧客・見込み顧客の活動を記録します。見込み顧客や顧客に対する活動を一貫して正確にキャプチャすることで、レポーティング向けの分析を行い、GitLab のビジネスにとって **効率** 的な意思決定を確立できます。

## なぜ顧客活動を記録するのか

1. **透明性** SA 活動を定期的にレポートすることで、他のチームメンバーがすべての SA 活動の概要を簡単に確認でき、私たちの行動を問うこと、説明責任を高めることが可能になります。透明性はまた、見込み顧客や顧客とのインタラクションの可視性を高めることで、価値あるコラボレーションを促進します。
1. **コラボレーション** 顧客 / 見込み顧客の活動概要を読むことで、タイムリーなフィードバックを提供できます。チームメンバーは類似の顧客状況を経験している可能性があり、非同期コメントとして別の視点やガイダンスを提供できます。また、現在の活動をレビューすることで、私たちのプレイ全体でパターンマッチングを行うのも容易になります。最後に、これは仕事を手伝ってくれた人に感謝し、よくやった仕事への認識を受ける優れた手段でもあります。
1. **効率** チームメンバーが特定のアカウント活動がどのように進んだかについて質問があるとき、アカウントチームメンバーを探すのではなく、活動の更新を読むことができます。リーダーシップはまた、見込み顧客や顧客に対する活動の分析を通じて、私たちのビジネスを運営する方法に関する重要な決定を行うことができ、最終的には望ましいビジネス **結果** を推進します。

## Rattle で活動を記録する

SA の見込み顧客 / 顧客活動は、`Opportunity` の `Log a Call` アクションに基づいて Salesforce 内の `Task` オブジェクトに記録されます。ただし、SA が Salesforce をナビゲートする手間を軽減するため、Slack を介して必須およびオプションフィールドのキャプチャを簡素化するために [Rattle](https://gorattle.com) が活用されています。

### Rattle のセットアップ

- Rattle アカウントをセットアップし、Slack、Salesforce、Google カレンダーに接続します。
  - [Rattle セットアップビデオ](https://www.youtube.com/watch?v=pW_fHzx7h2Y)
  - GitLab 入社時に Rattle への招待を受け取らなかった場合は、Access Request を提出してください。

### 活動のロギング {#logging-an-activity}

- Rattle で活動をロギングする方法は複数あります（[活動ロギングビデオ](https://www.youtube.com/watch?v=zRxUJSjujUk&feature=youtu.be)）
  - 見込み顧客 / 顧客との会議の前または後に、Slack の Rattle アプリケーションで活動の `Log a Call` を促されます（最も簡単な方法）。通知を受け取るタイミングは Rattle の [会議向け詳細設定](https://app.gorattle.com/meetings/advance-settings) で設定できます。
  - オンデマンドで、Slack で `/rattle-create` と入力し、`Create Task` ボタンをクリックします
  - 活動はアカウントレベルではなく、関連する **opportunity** に対してロギングする必要があります。これは、エンゲージメントモデルの正確なレポーティングと分析を確保するためです。
- Rattle がオプションとマークしているかどうかにかかわらず、_入力が必須となる最小限のフィールドセット_ があります。
  - **Related To** - 活動に関連する Salesforce の `Opportunity` を検索して設定します。
  - **Name** - `Name` フィールドを、活動の一部であった Salesforce 内の見込み顧客 / 顧客の連絡先で検索して入力してください。<i>`Name` は現在シングルセレクトフィールドです。可能であれば、会議に参加した連絡先のいずれかを選択してください。将来的には、複数の連絡先を選択できるようになる可能性があります。</i>
  - **Subject** - 活動のハイレベルな説明。通常、この活動のカレンダーイベントの件名が適切です。
  - **[SA] Activity Type** - この顧客 / 見込み顧客とのインタラクションのための活動タイプを選択します（つまり Demo、POV Related、Presentation/Pitch）。各活動タイプの説明は、以下の [Enterprise および Commercial SA 活動タイプ](#enterprise-and-commercial-sa-activity-types) セクションを参照してください。
  - **Products Positioned**（オプション） - デモ、ピッチで直接ポジショニングされた、またはクロージングプラン内の製品機能に整合させた製品を選択します。コールがディスカバリーコールであった場合は、将来のコールでどの製品がベストポジショニングされるかを選択してください。
  - **Persona Levels**（不明な場合はオプション） - この活動の顧客 / 見込み顧客参加者のレベルを選択します。現在のオプションは: `Individual Contributor, Manager/Director, Executive` _注: Executive は VP、C レベル、またはエコノミックバイヤーに使用すべきです_
  - **Persona Functions**（不明な場合はオプション） - 活動中に代表された顧客 / 見込み顧客の機能を選択します（つまり Development、Security、DevOps）
  - **Description** - インタラクションの概要を入力します。通常2〜3文で十分ですが、より詳細でも構いません。会議の意図、進行状況（成果や顧客 / 見込み顧客の感情）、見込み顧客 / 顧客が認識した次のステップをキャプチャするように努めてください。会議のより詳細なノートへのリンクを提供することを強くお勧めします。[Google ドキュメントのブックマーク](https://support.google.com/docs/answer/45893) を使用してこれを行うことができます。
  - **Customer Interaction Sentiment** - 他の会議や全体的な商談の感情のステータスとは独立して、この会議がどのように進んだかを選択します。このフィールドのオプションは厳密に「Positive」、「Neutral」、「Negative」です

#### 活動タイプの説明

すべての活動は、以下の [Enterprise および Commercial SA 活動タイプ](#enterprise-and-commercial-sa-activity-types) で説明されているカテゴリーのいずれかに分類されるべきです。

#### 活動説明の例

```markdown
We provided a SCM and CI/CD demo for the head of application development, Peter Floss, that was well-received.  His team is responsible for building a suite of catalog services and API for their partner merchants.  They are using Spring Boot to develop microservices and struggling with deployment consistency and complexity.  As a next step, we are scheduling a review of their current path to production.
More detailed notes are here: <link to notes document bookmark>
```

### 更新へのコラボレーション

誰かが活動をログすると、Rattle はチームの Slack チャンネルに更新を提供します。SA 組織のすべてのメンバー、および任意の GitLab チームメンバーが、私たちのビジネスをより理解するため、また **コラボレーション** の価値を実践するために、更新をレビューする時間を取ることを強くお勧めします。更新をレビューする際には、商談を支援できる関連業務や知識を共有することで、チームメンバーに **効率** を提供する機会を探してください。また、チームメンバーが何をしているかを理解する素晴らしい方法でもあり、将来彼らの経験を活用できます。励ましとお祝いの言葉も奨励されます。

#### チーム活動 Slack チャンネル

すべての Rattle 活動更新チャンネルは `#rattle-activities-<region or segment name>` の形式です:

- `#rattle-activities-apj-cs`
- `#rattle-activities-channels-and-alliances-sa`
- `#rattle-activities-commercial-sa`
- `#rattle-activities-east-sa`
- `#rattle-activities-emea-sa`
- `#rattle-activities-west-sa`
- `#public-sector-rattle-activities`

_ヒント:_ Rattle 関連のすべてのチャンネル用に専用の Slack セクションを作成できます。これにより、チーム横断のコラボレーションのために更新に簡単にアクセスできるようになります。

### Rattle アラートのセットアップ

Rattle アラートは Slack 内の Rattle アプリケーションから送信されるメッセージで、特定のアクションが発生したときに通知します。すべてのユーザーがワークフローを作成できます。

この [チュートリアル](https://help.gorattle.com/en/collections/3196824-workflows) で、利用可能なオプションとセットアップ方法が説明されています。

## 活動キャプチャ - タイプ

### Enterprise および Commercial SA 活動タイプ {#enterprise-and-commercial-sa-activity-types}

Enterprise および Commercial SA チームによる活動をキャプチャする際には、これらのタイプを選択します。

- **Customer No Show** - SA は、顧客が出席しなかった予定された顧客会議について活動をログする機会があります。SAE/AE/Channels Manager と協力して、SA は顧客の不在の根本的な理由を理解しようとし、[SA] Activity Description に記録すべきです。
- **Customer Strategy Plan Review** - （注: この活動タイプは依然としてレガシー名「Customer Strategy Plan」を使用していますが、Customer Success Plan の活動を指します）ビジネスステークホルダー、影響度の高い戦略要件と主要技術、彼らの技術エコシステムの現状、現在および望ましい能力、戦略目的との運用整合、そして現在の能力における認識されたギャップと欠陥を特定して文書化する SA と顧客の協働セッション。詳細は [カスタマーサクセスプラン](/handbook/solutions-architects/processes/activity-capture/customer-success-plans) を参照してください。この活動を報告する際には、最新のカスタマーサクセスプランへのリンクを含める必要があります。
- **Demo** - SA は、計画された GitLab 製品デモが顧客に提供されたときに活動を記録できます。Rattle の [SA] Activity Description フィールドで、SA はデモの目的と製品ウォークスルーの領域に関する洞察も参照すべきです。オプションは、フルでハイレベルなエンドツーエンドの GitLab 概要、特定の GitLab ステージのデモ、部分的な GitLab プラットフォーム概要、または製品への非常に特定の技術ディープダイブが考えられます。
- **Discovery Session** - SA は、顧客との初回ディスカバリーセッション中の主要な洞察を記録する機会があります。SA は、現在の環境がプロジェクトの成果物の制限となっているかどうか、または既存のプラットフォームを当社の提供で拡張する必要があるかどうかを理解するため、顧客と協働できます。カテゴリ化されたディスカバリーセッションの例:
  - DevOps ディスカバリーディスカッション
  - 継続的インテグレーションディスカッション
  - デプロイメント環境ディスカッション
  - アプリケーションフロントエンド・バックエンドディスカッション
  - クラウドジャーニーと戦略のディスカッション
- **Other** - SA は、オプションのドロップダウンリストにリストされていない活動を記録するためにこの [SA] Activity タイプを利用すべきで、想定外のすべてのタイプの SA サービスのために予約されています。この活動タイプを使用するときは、Rattle の [SA] Activity Description フィールドで活動の詳細を記録するために正確であることが不可欠です。
- **Post-sales technical account management** - SA は、CSM の対象とならないアカウントの技術アカウントマネジメント業務、および販売後ケイデンスコールの一部としての CSM とのコラボレーションを記録するためにこのタイプを使用します。ケイデンスコールを使用してアカウントを拡大する成長商談については、他の適切なタイプで活動をログしてください。
- **PoV related activity** - クライアントによる PoV および / または Technical Evaluation の意向は、Discovery セッションまたは別の [SA] Activity 中に共有されることが想定され、PoV 関連活動は SA が PoV または Technical Evaluation の準備、実行、完了に関連する活動記録として使用されます。PoV 関連活動の例:
  - PoV/Technical Evaluation スコーピング: SA は、要件を理解するためにクライアントとエンゲージし、評価のタイプ [PoV または Technical Evaluation] とスコープ内の成功基準について合意するために協働する活動を記録する機会があります。クライアントは一方で、ハイタッチかライトタッチの PoV が必要かを定義する機会があります。オプションとして、クライアントは自己管理型の Technical Evaluation で十分で、SA がアドホックに支援することを決定することを好むかもしれません。
  - Technical Evaluation ケイデンス: SA は、Technical Evaluation に関連するクライアント特有の活動を記録する機会があります。プラン、特定の要件、成功の定義に同意した上で、SA は顧客との協働により定期的または不定期のケイデンスを設定することがあります。
  - PoV ケイデンス: SA は多くの場合 PoV プラン、期間、スコープ内の PoV 成功基準のサインオフに同意し、定期的なケイデンス [週次、隔週、複数週] でクライアントと協働します。この [SA] Activity は、PoV の頻度と進捗をキャプチャする機会です。SA は、評価の最終完了のサインオフに同意するためにクライアントとの最終ケイデンスセッションをホストすることを検討すべきです。
- **Presentation / pitch** - SA は、クライアントへのプレゼンテーションの準備と実際の提供を記録する機会があります。SA なしでクライアントとの大幅な議論があったため、SAE/AE からピッチがリクエストされることがあり、これは完全に許容されます。このタイプの [SA] activity の検討事項:
  - SA がクライアントとの最初の Technical Discovery セッションに参加し、最初の要件が SA と明確に協働され、プレゼンテーションの準備のためにイニシアチブを取った。
  - SA が SAE/AE/Channels Manager と内部でデブリーフし、クライアントとの初回 SA 接続の要件と最初のプレゼンテーション / ピッチへの期待を理解した
- **Ride Along** - この活動タイプは、ある SA が別の SA をシャドーイングして商談をサポートし、メインのソリューションアーキテクトへのフィードバックを提供し、メインのソリューションアーキテクトの仕事方法を学ぶときに使用されます。Ride Along の動作の詳細については、[Ride Along](/handbook/solutions-architects/sa-practices/ride-alongs/) ハンドブックページを活用してください。この活動はアカウントレベルで記録します。アカウントレベルでの記録が必要なのは、セグメント間または地域間の Ride Along では、ライダーが商談にアクセスできないためです。
- **Guided Trial** - この活動タイプは、見込み顧客または既存顧客が GitLab Free trial 提供を使用した自己評価中に SA からのサポートを必要とする場合に使用されます。
- **Security Questionnaire / RFP** - SA は、セキュリティアセスメントの完了や入札プロセスを通じた商談の進行に関連するアクションを記録するためにこの活動タイプを使用すべきです。このカテゴリに該当する活動の例:
  - Security Assessment: 技術的には入札プロセスの一部ですが、Security Assessment は通常 SA が GitLab の管理部門と連携して、正確性と法的応答を確保するためにエンゲージします。そのため、SA はそれらのセキュリティ固有の要件に対処するために GitLab の部門と内部でエンゲージしますが、プロセスに先立って、SA はクエリへの最初の試みとして対応する責任があります。
  - Procurement / Tender process（RFx - RFP, RFQ, RFI, FRB, RFT - Request for Anything）: SA はクライアントとエンゲージし、その組織が公的入札プロセスを実施することが示されました。入札プロセスは、提案、見積もり、情報、関心の表明をリクエストする可能性があり、通常はリクエストの一部として GitLab プラットフォームの機能要件と非機能要件への応答を SA に求めます。多くの場合、入札プロセスは早期に示され、市場へのアプローチで公平に共有され、書面によるアーティファクトの形で技術的なものに対処する SA を含む正式なプロセスを必要とします。
- **Technical Deep Dive** - SA はテクノロジーと GitLab 機能の詳細なレビュー、およびクライアントソリューションの作成に関するクライアントセッションを記録すべきです。
- **Technical Support** - SA はアカウントチームとして、また GitLab Support と協力して特定の技術 Issue や課題のトラブルシューティングと対処に関する技術サポートセッションを実施します。
- **Positioned Professional Services** - この活動タイプは、[Solution Architects プロセス](/handbook/solutions-architects/processes/#positioning-professional-services) の一部としてプロフェッショナルサービスをポジショニングしたときに使用すべきです。
- **Professional Service Support** - SA はクライアントの利用可能な内部スキルと能力を明確に理解し、スキルギャップが特定された場合に、より迅速に成功する方法でクライアントを支援します。その結果、GitLab プロフェッショナルサービスのサポートは、リスクを軽減し成功への速度を加速するために顧客価値を追加します。SA は、ここで概説されている当社の顧客のための GitLab の ProServ 部門の開始を所有しているため、地域の顧客への SA サービスとして、相当量のフォローアップとケイデンスが期待されます。
- **SA Assistance - Subject Matter** - 特定のエンゲージメントや商談を所有することなく、特定の主題における高度な知識と理解で別の GitLab チームメンバーをサポートすることを [SA] にリクエストされます。

- **SA Assistance - Manager** - 顧客エンゲージメントを支援する場合に [SA] Manager によって使用されます。

### Strategic Field SA 活動タイプ

Strategic Field チームによる活動をキャプチャする際にこれらの [SA] Activity タイプを選択しますが、Enterprise の他の活動タイプも使用できます。

- **SA Assistance - Strategic Field** - エンタープライズ DevOps 戦略と、デジタルやクラウド変革などの全社的なイニシアチブとの整合をレビューするためのクライアントの管理職や経営陣とのコール。
- **Executive Solution Plan** - 組織全体の変革のための DevOps ソリューションを議論、戦略化、レビューするクライアントの管理職や経営陣とのコール。業界のソートリーダーシップとの信頼できるアドバイザリ関係を構築し、ベストプラクティスでの DevOps 採用に向けてエンタープライズを導きます。

### Ecosystem SA 活動タイプ

Ecosystem チームによる活動をキャプチャする際にこれらの [SA] Activity タイプを選択しますが、Enterprise の他の活動タイプも使用できます。価値の高い活動が最も上 / 最初に、最も低い / 最後にリストされる暗黙の優先順位があります。

単一の活動に複数の活動タイプを使用できますが、行われた最も価値の高い単一の活動のみをタグ付けするようにしてください。たとえば、コールを **Partner Enablement** の実施に活用した場合、**Partner Cadence Call** を追加しないでください。

ある活動が MBO の1つにカウントされることを提案する場合は、その活動にオーバーレイタグとして MBO 関連活動タイプを **必ず追加してください**。MBO タイプを使用するときは、Activity Description にドキュメント、Issue へのリンク、または根拠となるコンテンツを配置してください。

:movie_camera: ビデオ: [How to quickly Log, Classify and Triage lots of Rattle Entries for the busy Solutions Architect 9:17, Highspot.](https://gitlab.highspot.com/items/67be46c991e055ef7c36de79?lfrm=shp.0) 以下のテキストを補完します。

- **ESA MBO Strategic** - _Strategic Partner Activation_ - 合意されたタイムラインに対する相互パートナー技術関係目標を推進するための Partner Activation Plan。PAP を活用して、パートナーの能力、チャンピオン、人材リソース、活性化成果を追跡します。
- **ESA MBO Contribution** - _Partner Contribution to Pipeline_ - 適格パイプラインと収益貢献を生成する PAP で定義された構造化された準備プログラムを通じて、パートナーの技術プリセールス能力を高めます。
- **ESA MBO Capability** - _Ecosystem Services Capability_ - 顧客アカウント関係でのサービス提供の統合を通じて、顧客のオンボーディングと採用を加速します。
- **ESA MBO Commitment** - _Commitment and Advocacy_ - GitLab Champions プログラムを活用して、パートナー技術リソースからの価値の高い技術投資とアドボカシーを推進します。

さらに、各 Rattle 活動には、以下のいずれか1つ（そして1つだけ）の Rattle タグをタグ付けしてください。Partner Opportunity :money_with_wings: :money_with_wings: :money_with_wings: :money_with_wings: :money_with_wings: が最も価値の高い活動で、Partner Cadence Calls が最も価値の低い活動です。

- **Partner Opportunity** - :money_with_wings: :money_with_wings: :money_with_wings: :money_with_wings: :money_with_wings: パートナーが関与する特定のセールス商談で、フィールド SA とともに整合した Sales opportunity # アライン業務。これには、パートナーテクノロジーと GitLab とのジョイント価値提案のオーバーレイ SME であること、および / またはチャネル / サービスパートナーがジョイント顧客で成功するのを支援することが含まれます。
- **Partner Assisted Demand Gen** - :money_with_wings: :money_with_wings: :money_with_wings: :money_with_wings: 需要創出 / リード創出に焦点を当て、パートナーと協働して顧客向けのウェビナー、ワークショップ、ロードショー、類似の活動を提供または開発すること。
- **Partner VSA Enablement** - Value Stream Assessment および類似のプリセールス価値販売モーションをピッチまたは実行するためのパートナーのイネーブルメントを含む活動。
- **Partner Technical Evangelism** - :money_with_wings: :money_with_wings: :money_with_wings: パートナーの内部カンファレンス、ミートアップ、ウェビナー、オープン招待ブートキャンプ、ブログ、カスタマーサクセスストーリーなど、パートナー向け（顧客向けではない）のイベントとエバンジェリズムの提供または開発。
- **Internal Enablement and SME Assistance** - :money_with_wings: :money_with_wings: パートナープロモーションと GitLab フィールドチーム支援のための GitLab 向けの内部コール、会議、ウェビナー。
- **Partner Solutioning** - :money_with_wings: :money_with_wings: パートナーソリューションを定義・開発し、GitLab との統合を行うソリューションアーキテクチャ業務。特定のセールス商談で行われる業務については「Partner Opportunity」を検討してください。
- **Partner Services Attach** - :money_with_wings: :money_with_wings: 将来のサービスエンゲージメント向けにパートナーサービスカタログと / または SoW を開発する。
- **Partner Enablement** - :money_with_wings: GitLab 製品とプリセールスでパートナーチャンピオンをイネーブルするための準備業務を含む、パートナー向けのコール、会議、ワークショップ、ウェビナー。
- **Partner Cadence calls** - パートナーシップ構築と顧客商談やアカウント戦略におけるプリセールス活動のためのパートナーとのケイデンスコール。

### Value Stream ワークショップ（アセスメント）活動タイプ

**注:** これらのオプションは依然として「VSA」の旧名称を参照していますが、データ追跡が継続している理由により、選択を更新できません。これにご注意ください。

- **VSA Pitch** - 顧客 / 見込み顧客への最初の VSW ピッチで、彼らの賛同を得て、次のステップを議論し、VSW 計画会議の前にフォローアップを送信します。
- **VSA Execution** - VSW 計画、VSW ワークショップ、VSW エグゼクティブプレゼンテーションのための外部の顧客 / 見込み顧客とのコール。

## Rattle ワークフロー

透明性と認識のため、ソリューションアーキテクト固有の Rattle 活動を以下にリストします。

| 名前                                                         | 説明                                                  | Slack 通知                                           | 受信者                                         | リファレンス |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------- | --------- |
| Log a meeting                                                | SA が顧客コールをログするためのリマインダー通知      | `You just had a meeting - Please provide us with information on this activity. (wf-1)` | Rattle DM                                         | `wf-01`   |
| New call logged (wf-2) (region)                              | Rattle が SA のコール概要を地域チャンネルに投稿する | `Task: Assigned To just logged an activity regarding Task: Related To.  (wf-2)` | Rattle 地域チームの活動チャンネル            | `wf-02`   |
| Tech Eval Start Date Changed                                 | SA が Tech Evaluation の開始日を更新すると、商談情報がチャンネルに投稿される | `Opportunity: Primary Solution Architect just updated the Tech Evaluation Start Date (wf-3)` | #sa-tech-eval-start                               | `wf-03`   |
| Tech Eval End Date Changed                                   | SA が Tech Eval の終了日を更新すると、商談情報がチャンネルに投稿される | `Opportunity: Primary Solution Architect just updated the Tech Evaluation End Date and/or Close Status (wf-4)` | #sa-tech-eval-end                                 | `wf-04`   |
| Missing End Date                                             | 商談が（1）ステージ3を超え、（2）tech eval 開始日があり、（3）tech eval 終了日がないとき、Primary SA に完了するようアラートする | These opportunities are missing a Tech Evaluation End Date and have moved past Stage 3 -- Please add an End Date and work with your counterpart (wf-06) | Rattle DM                                         | `wf-06`   |
| Alert Primary SA - Opp Stage 3 seven days ago and no SA Start Date | 商談が「ステージ3」に7日前に移行し、20k+ IACV であり、Tech Eval が正式に開始されていない場合（`SA Tech Eval Start Date`）、ソリューションアーキテクトに通知する | This is to notify the SA Manager in the regional channel if a Oppty has moved to "Stage 3" seven days ago, has no `Primary SA`, is 20k+ IACV, and the Tech Eval has not formally started (`SA Tech Eval Start Date`) | Rattle DM                                         | `wf-07`   |
| Opp is in Stage 2                                            | セールス商談がステージ2に移行し、20k IACV を超える場合、`stage move 2` チャンネルに投稿し、来たる商談についてチームにアラートする | Opportunity: Owner just moved  Opportunity: Name to  Opportunity: Stage | #stage-move-02                                    | `wf-08`   |
| Chorus call                                                  | Chorus コールの録音をチャンネルに投稿する。注: これらは SA がログした活動の重複である可能性があるため、レポートから除外されています | Task: `Assigned To` had a Chorus Call with  Task: `Related To` (wf-09) | #rattle-chorus-calls                              | `wf-09`   |
| PS Opp without Primary SA                                    | プロフェッショナルサービス商談がステージ3+ で `Primary SA` がない場合、Rattle は地域チームのチャンネルに通知を投稿し、`Primary SA` フィールドが入力されることを確実にする | Opportunity: Primary Solution Architect field is blank. Don't miss out on a potential PS SPIFF! (wf-10) | Rattle 地域チームの活動チャンネル            | `wf-10`   |
| Task Due (wf-11)                                             | Rattle タスクが完了していない場合、Rattle は現地時間の午後4時に個人に DM を送信し、タスクを完了するよう促す | Hi 👋- Here are your tasks that are due today. Please review if any need more information (wf-11) | Rattle DM                                         | `wf-11`   |
| Oppty Stage 3 seven days ago and no SA Start Date            | 商談が「ステージ3」に7日前に移行し、`Primary SA` がなく、20k+ IACV で、Tech Eval が正式に開始されていない場合（`SA Tech Eval Start Date`）、地域チャンネルの SA Manager に通知する | `Opportunity Name` was moved to Stage 3 on  `Opportunity: 3-Technical Evaluation Date` and does not have an SA Validated Start Date. If there is meaningful SA activity on a technical evaluation, please populate this field. (wf-12) | Rattle 地域チームの活動チャンネル; 毎日午前8時 | `wf-12`   |
| IACV Opps without Primary SA                                 | ステージ3+ かつ 10k+ IACV のあらゆる商談に `Primary SA` がない場合、SA Manager に通知する | `Opportunity: Primary Solution Architect` field is blank. Please update (wf-13) | Rattle 地域チームの活動チャンネル            | `wf-13`   |
| Primary SA Field Has Changed                                 | ステージ2または3で `Primary SA` フィールドが変更されたときに SA Manager に通知する | The Primary Solution Architect has changed on  Opportunity: Name (wf-14) | #rattle-primary-sa-change                         | `wf-14`   |
| Missing Close Status and Stage 4                             | 商談がステージ4-7 に移行し、`SA Validated Tech Eval Start Date` が設定され、`End Date` **または** `Close Status` が空の場合、Rattle は Primary SA に商談データを完了するよう DM でリマインドする | `Opportunity: Name` has moved to stage  `Opportunity: Stage` and is missing Tech Eval close data (wf-15) | Rattle DM                                         | `wf-15`   |
