---
title: Dedicated Migration Team
description: Geo から Dedicated へのマイグレーションの道のりをスムーズにすることに注力するチーム。ツール、プロセス、エンジニアリングを担当します
upstream_path: /handbook/engineering/infrastructure-platforms/gitlab-dedicated/dedicated-migrations/
upstream_sha: 7405b4b85e7e4a5d61d4eff68e49976463e3dada
translated_at: "2026-05-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-05-26T08:36:55-07:00"
---

[[_TOC_]]

## Team Mission

フィールド、顧客、エンジニアリングと協力し、シームレスで、高速かつ信頼性の高いマイグレーションを提供します。チームは、不確実性を排除するためのプロセスを実行・改善し、Geo ベースの Dedicated マイグレーションにおけるカットオーバーの準備を確実にします。

### Priorities

* ドキュメント、テンプレート、トークトラック、ツールを含むツールキットを提供・改善し、私たち自身と顧客にとって Geo Dedicated マイグレーションをよりスムーズにする
* セルフサービスでの顧客マイグレーションを可能にする機能について、エンジニアリングの仲間と協力する
* 進行中の Geo マイグレーションのエンゲージメントを提供する
* PS の仲間がスケールアップ・スケールアウトしながら Geo マイグレーションのエンゲージメントを提供できるようにする
* プリセールスプロセスにおけるフィールドのスコーピングとサイジングを迅速化するためのツールとプロセスを提供する

### Team members

| Name          | Role                                 |
|---------------|--------------------------------------|
| Eren Akca     | Staff Migration Engineer             |
| Petar Prokić  | Staff Migration Engineer             |
| Jessykah Bird | Senior Migration Engineer            |
| Glen Miller   | Senior Manager, Software Engineering |

### Roles & Responsibilities

チームは:

Dedicated エンゲージメントの Geo マイグレーション部分において、チームは次の責任を負います:

* フィールドおよび顧客と直接協力し、技術的な調査、データの検証、ターゲットインスタンスのキャパシティプランニングのための自動化されたソリューションを生み出す  
* コミュニケーションを所有し、計画、ステータス、タイミングについて社内外の足並みを揃える  
* 顧客の Project Planning Office とのプロジェクトマネジメントの整合を所有し、アクティビティ、コミュニケーション、タイムライン、責任を明確に同期させる  
* リスクを最小限に、スピードを最大限にして、自信を持ってプロダクションへの切り替えを可能にする  

### Operating Principles

#### Customer-Centric Excellence

* **Clear Expectations First**: すべてのエンゲージメントは、マイグレーションのケイデンス、プラットフォームの能力、サービスモデルの境界について明示的に足並みを揃えることから始まる  
* **Consultative Partnership**: 私たちは注文を受けるだけの存在ではなく、信頼されるアドバイザーとして行動し、たとえ困難であっても誠実なガイダンスを提供する  
* **Transparent Communication**: 定期的で構造化された更新により、サプライズがない \- 顧客は常に自分たちの状況を把握できる

#### Technical Rigor

* **Discovery Before Design**: 包括的な技術的・ビジネス的な調査が、すべてのソリューションアプローチを推進する  
* **Validation at Every Step**: 多層的な検証により、プロダクションへの変更を行う前に正確性を確保する  
* **Automation Where Possible**: 標準化され、繰り返し可能なプロセスにより、リスクを低減し、一貫性を向上させる

#### Structured Delivery

* **Milestone-Driven Progress**: 顧客の承認を伴う明確なチェックポイントにより、スコープクリープと不整合を防ぐ  
* **Risk-First Planning**: うまくいくことを祈るのではなく、リスクを早期に特定して軽減する  
* **Documentation as Code**: すべてのプロセス、意思決定、成果物を、再現性と知識移転のために文書化する

#### Continuous Improvement

* **Learning Organization**: すべてのプロジェクトが、プロセス、ツール、メソドロジーの改善に貢献する  
* **Cross-Functional Collaboration**: Engineering、Product、Customer Success チームとの定期的なフィードバックループ  
* **Scalable Solutions**: 将来のセルフサービスと自動化を可能にする能力を構築する

#### Internal Alignment

* **One Team Approach**: 専門分野を横断した柔軟なコラボレーションを伴う、明確な役割定義  
* **Shared Accountability**: 成功は個人の貢献ではなく、チームレベルで測定される  
* **Proactive Communication**: 顧客へのコミットメントの前に、社内のステークホルダーに情報が共有され、足並みが揃っている

#### Success Metrics

* より大きなチームのメトリクスに合わせて調整中

## Process

### Engaging with Others

#### Geo Engagement Model For Dedicated Migrations

##### Pre-production Cutover and Requests Outside the 2-Week Production Support Window

プロダクションカットオーバーウィンドウ外の期間中のサポートについては、RFH を起票してください (下記参照)。**これにはプリプロダクションカットオーバーが含まれます。プリプロダクションには Geo エンジニアがアサインされません**。顧客からのコール依頼は、チームの空き状況に基づき、Engineering Manager である Lucie Zhao の承認を必要として、その都度ケースバイケースで対応します。

##### Production Cutover and Production Support Window

各プロダクションマイグレーションの前後 2 週間のウィンドウ (前 1 週間、マイグレーションの週末、後 1 週間) に Geo DRI がアサインされます。DRI は、前後の週には Slack を通じてマイグレーションの Issue に専念し、マイグレーションの週末そのものには営業時間中 (各自のタイムゾーンで午前 9 時〜午後 5 時) に PagerDuty を通じて対応可能です。Issue が発生しない場合、DRI は通常の Geo 業務を再開できます。

###### Migration Weekend Responsibilities

Geo チームは、カットオーバーに備えて状況を把握しているメンバーを確保し、Project Manager とタイミングを調整し、フルデータ同期後の顧客インスタンスのカットオーバー中に発生するあらゆる Issue のトラブルシューティングに備える必要があります。

##### RFH Process

プロダクションカットオーバーウィンドウ外の同期 Issue については、チームは優先度 (P1〜P3)、同期開始時刻、カットオーバー期限、テナント、依頼内容を示した [Geo Support Request](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Geo) を提出します。これらは週次の顧客サポート DRI がトリアージします。Geo エンジニアが効果的にサポートするには、Opensearch、Grafana へのアクセス、そして理想的にはブレイクグラスアクセスが必要です。

| Priority | Description |
|----------|-------------|
| 1        | データ同期またはプリプロダクションカットオーバーに対する即時のブロッカー。修正なしには進められない |
| 2        | プリプロダクションカットオーバーフェーズの終了前に解決する必要があるが、開始のブロッカーではない |
| 3        | プロダクションカットオーバーの前に解決する必要がある。プロダクションカットオーバーのサポートウィンドウ内で対応可能 |

#### SRE Engagement Model for Dedicated Migrations

##### Pre-production Cutover

ローテーションする SRE チームがプリプロダクションカットオーバーにアサインされます。これは一般的に、プロダクションカットオーバーをサポートするのと同じチームです。プリプロダクションカットオーバーは多くの場合より慎重なプロセスであり、しばしば複数日にわたって行われます。ここで、プロダクションカットオーバーに関する潜在的な Issue を洗い出します。チームはコールブリッジに参加する必要はありません。実行、コミュニケーション、引き継ぎは、#g_dedicated-migrations チャンネルおよび [Dedicated Migrations](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group/dedicated-migrations) プロジェクトのエンゲージメントの Issue で調整できます

##### Production Cutover and Production Support Window

各マイグレーションの前後 2 週間のウィンドウ (前 1 週間、マイグレーションの週末、後 1 週間) に SRE チームがアサインされます。これは一般的に、プリプロダクションカットオーバーをサポートしたのと同じチームです。アサインされた SRE は、前後の週中、すべてのマイグレーション Issue を Priority 1 として扱います。コミュニケーションは、#g_dedicated-migrations チャンネルおよび [Dedicated Migrations](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group/dedicated-migrations) プロジェクトのエンゲージメントの Issue で行えます

###### Migration Weekend Responsibilities

アサインされた SRE は、前後の週中、Slack を通じてマイグレーションの Issue に専念し、カットオーバーの週末中は各自のロケーション/タイムゾーンに基づいて業務を交代します。SRE チームは、Dedicated Migrations チームの権限フレームワーク外のスクリプトの実行、およびインフラストラクチャ (ネットワーキング、ノード、設定) に関する懸念事項のトラブルシューティングの支援を担当します。

**Note** 

多くの顧客は、ポストサポートウィンドウ中に「キャッチアップ」のための GitLab アップグレードを実行する必要があります。Dedicated Migrations チームは、SRE チームのサポートを受けながら、これらのアップグレードについて顧客との調整、スケジューリング、実行を担当する必要があります。

##### Outside the 2-Week Window

サポートは主に Request for Help (RFH) チケットを通じて非同期で行われます。`@fviegas` によると、すべての Dedicated Migrations RFH は priority 1 とみなされます。同期的な顧客コールは、チームの空き状況に基づき、Steve Denham/Oriol Lluch Parellada のいずれかの承認を必要として、その都度ケースバイケースで対応します。

##### RFH Process

専用ウィンドウ外の同期 Issue については、チームはテナントと依頼内容を示した [Dedicated Support Request](https://gitlab.com/gitlab-com/request-for-help/-/work_items/new?description_template=SupportRequestTemplate-GitLabDedicated) を提出します。

#### Scheduling

##### SRE and Geo Coverage

Engineering Manager は、カットオーバーウィンドウのための適切なリソースを見つける調整を行います。PM がカットオーバーの日時を確定し、カバレッジの確認が必要になったら、@glen_miller に連絡して他の EM と調整できます。EM は、各カットオーバースロットのカバレッジを追跡するために単一の epic を使用します。

* [FY27](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group/-/work_items/179)

##### Cutover Slots

Geo マイグレーションのカットオーバースロットは、現在限られたリソースです。利用可能なスロットは[こちら](https://docs.google.com/spreadsheets/d/1KRDNw2mXOSAc4DE1hceAWZTRqDGkoV-t5yNymKyXSIo/edit?gid=2116571451#gid=2116571451)で参照できます。これらのスロットの確保はプリセールスプロセスの一部であるべきです。Dedicated PM および EM と協力してスロットを予約してください。

###### Scheduling Cutover Slots

カットオーバースロットをスケジュールする際は、次のガイドラインが適用されます:

* カットオーバースロットは先着順でスケジュールされます
* スロットは通常、顧客への影響を最小限に抑えるため週末に利用可能です
* スロットは取引成立時に設定されるべきです。そうでない場合は、遅くともスロット日の 14 週間前までに確定する必要があります。
* スロットは、それぞれの EM が SRE と Geo のカバレッジを確認した後にのみ確定されます

### Dedicated Migration Team Time Off

Dedicated Migration チームは [GitLab の有給休暇ポリシー](/handbook/people-group/time-off-and-absence/)に従います。
私たちは、それと、毎日顧客にサポートを提供する必要性とのバランスを取ります。
このページは、そのバランスを達成するために私たちが何をする必要があるかを理解してもらうことを目的としており、チームとして顧客に対して提供し続けながら、全員が必要なときや望むときに休暇を取れるようにします。

#### One-time setup actions

##### Dedicated Migration Team calendar

1. [**Dedicated Migrations Team Calendar**](https://calendar.google.com/calendar/embed?src=c_fb53e24f590edfb8f313253126123e48d57254dd73266fae6547a2a4890b0c82%40group.calendar.google.com&ctz=America%2FVancouver)
チームカレンダーにアクセスできることを確認してください。
   1. 持っていない場合は、自分が Dedicated Migrations Team (`dedicated-migrations-team@`) のメンバーかどうかを確認し、メンバーでない場合は Access Request 経由で追加を依頼してください。

1. Time Off by Deel との Google Calendar 連携を設定し、個人および「Dedicated Migrations Team」のカレンダーを手動で入力する必要がないようにします。
   1. Slack で、左サイドバー下部の「Apps」の隣にある `+` 記号をクリックします
   1. 「Time Off by Deel」を検索し、「View」をクリックします
   1. 「Home」の下で、「Your Events」をクリックしてドロップダウンを表示します
   1. Settings の区切りの下にある「Calendar Sync」をクリックします
   1. 「Connect your Calendar」をクリックし、カレンダーを Time Off by Deel に同期するアクションを完了します
      * 「Success! Your calendar has been connected.」というメッセージが表示され、
        Slack の Time Off by Deel で「Your synced calendar」の下にカレンダーがリストされます
   1. 個人カレンダーがリンクされたら、
   「Additional calendars to include?」の下にある「Add calendar」をクリックします。「Dedicated Migrations Team Calendar」のカレンダー ID は
   `c_fb53e24f590edfb8f313253126123e48d57254dd73266fae6547a2a4890b0c82@group.calendar.google.com` です

#### Choosing and recording time off

必要なときはいつでも休暇を取ってください。

全員が少し配慮するだけで、みんなが望む休暇を取れるようにすることに大いに役立ちます。休暇を計画する際は、次のことを行ってください:

* [全社的な有給休暇ガイドライン](/handbook/people-group/time-off-and-absence/time-away-philosophy/)を理解していることを確認する
* カレンダーを確認し、空き状況が少ない日に十分なカバーがあることを確実にするためにチームと調整する
* できる限り早めに休暇をスケジュールする
* 計画した休暇を確実に取れるよう上記のようなステップを踏む前に、返金不可の旅行日程に自分を縛り付けない
* 可能であれば、混乱を避けるように休暇を計画する

#### Communicate through a coverage issue

5 日を超える PTO については、[coverage issue](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group/pto-coverage/-/issues/new?description_template=pto_coverage) をまとめてください。一部の Division には別のガイダンスがあるかもしれません (例: [Engineering PTO Coverage](/handbook/engineering/#taking-time-off))。矛盾がある場合は自分の Division の手順に従い、チームに共有してください。

#### After PTO

[returning from pto](/handbook/people-group/time-off-and-absence/time-away-philosophy/#transitioning-back-mindfully) を参照してください。

## Resources

* [GitLab group](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group)
* [GitLab project](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group/dedicated-migrations)
* [Migrating Customers to Dedicated internal documentation](https://internal.gitlab.com/handbook/engineering/dedicated/migrating-customers-to-dedicated/)
* [Cutover Cancellation Impact](https://drive.google.com/drive/folders/12GInLFxnT5BPbPJh1JsemUE089-Ctj0e)
