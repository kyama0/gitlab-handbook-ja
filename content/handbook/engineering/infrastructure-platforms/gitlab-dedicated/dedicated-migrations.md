---
title: Dedicated Migration Team
description: Geo から Dedicated への移行をスムーズに進めることに注力するチーム。ツール、プロセス、エンジニアリングを担当します
upstream_path: /handbook/engineering/infrastructure-platforms/gitlab-dedicated/dedicated-migrations/
upstream_sha: 78b430bc8e2a925f210024d512218ce1d8d42106
lastmod: "2026-05-26T08:36:55-07:00"
translated_at: "2026-05-28T00:00:00Z"
translator: claude
stale: false
---

[[_TOC_]]

## チームのミッション

フィールド、顧客、エンジニアリングと連携し、シームレスかつ高速で信頼性の高い移行を提供します。このチームは、不確実性を排除するためのプロセスを実行・改善し、Geo ベースの Dedicated 移行におけるカットオーバーの準備が整っていることを確保します。

### 優先事項

* 自分たち自身と顧客にとって Geo Dedicated の移行をよりスムーズにするためのドキュメント、テンプレート、トークトラック、ツールを含むツールキットを提供・改良します
* セルフサービスでの顧客移行を可能にする機能について、エンジニアリングの仲間と協働します
* 進行中の Geo 移行案件を提供します
* PS の仲間が Geo 移行案件をスケールアップ・スケールアウトして提供できるようにします
* プリセールスプロセスにおいて、フィールドがより迅速にスコープとサイジングを行えるようにするツールとプロセスを提供します

### チームメンバー

| 名前          | 役割                                 |
|---------------|--------------------------------------|
| Eren Akca     | Staff Migration Engineer             |
| Petar Prokić  | Staff Migration Engineer             |
| Jessykah Bird | Senior Migration Engineer            |
| Glen Miller   | Senior Manager, Software Engineering |

### 役割と責任

このチームは:

Dedicated 案件の Geo 移行部分において、このチームは以下の責任を負います:

* フィールドおよび顧客と直接協働し、技術的なディスカバリー、データの検証、対象インスタンスのキャパシティプランニングのための自動化ソリューションを作成します  
* コミュニケーションを担当し、計画・ステータス・タイミングについて社内外の足並みを揃えます  
* 顧客の Project Planning Office とのプロジェクトマネジメントの調整を担当し、アクティビティ・コミュニケーション・タイムライン・責任を明確に同期させます  
* 最小のリスクと最大の速度で、確信を持った本番切り替えを可能にします  

### 運営原則

#### 顧客中心のエクセレンス

* **明確な期待値の共有を最優先**: すべての案件は、移行のケイデンス、プラットフォームの機能、サービスモデルの境界について明確に足並みを揃えることから始まります  
* **コンサルティング的なパートナーシップ**: 私たちは単なる御用聞きではなく信頼されるアドバイザーとして行動し、困難なときでも誠実なガイダンスを提供します  
* **透明性のあるコミュニケーション**: 定期的かつ構造化されたアップデートにより、サプライズはありません。顧客は常に自分たちの状況を把握できます

#### 技術的な厳密さ

* **設計の前にディスカバリー**: 包括的な技術的・ビジネス的ディスカバリーが、すべてのソリューションアプローチを推進します  
* **あらゆるステップでの検証**: 多層的な検証により、本番環境への変更を行う前に正確性を確保します  
* **可能な限り自動化**: 標準化され繰り返し可能なプロセスにより、リスクを低減し一貫性を向上させます

#### 構造化されたデリバリー

* **マイルストーン主導の進行**: 顧客の承認を伴う明確なチェックポイントにより、スコープクリープと認識のずれを防止します  
* **リスクファーストの計画**: 楽観的な期待に頼るのではなく、リスクを早期に特定し軽減します  
* **コードとしてのドキュメント**: すべてのプロセス、意思決定、成果物を、再現性と知識移転のためにドキュメント化します

#### 継続的な改善

* **学習する組織**: すべてのプロジェクトが、プロセス、ツール、方法論の改善に貢献します  
* **クロスファンクショナルなコラボレーション**: Engineering、Product、Customer Success の各チームとの定期的なフィードバックループ  
* **スケーラブルなソリューション**: 将来のセルフサービスと自動化を可能にする能力を構築します

#### 社内の足並みの統一

* **ワンチームのアプローチ**: 各分野を横断する柔軟な協働を伴った明確な役割定義  
* **共有された説明責任**: 成功は個人の貢献ではなくチームレベルで測定されます  
* **プロアクティブなコミュニケーション**: 顧客へのコミットメントの前に、社内のステークホルダーに情報が共有され足並みが揃っています

#### 成功指標

* より大きなチームのメトリクスとの調整を進行中

## プロセス

### 他者との連携

#### Dedicated 移行のための Geo エンゲージメントモデル

##### プリプロダクションカットオーバーおよび 2 週間の本番サポートウィンドウ外のリクエスト

本番カットオーバーウィンドウ外の期間中のサポートについては、RFH を起票してください（下記参照）。**これにはプリプロダクションのカットオーバーが含まれます。プリプロダクションには Geo エンジニアはアサインされません**。顧客からのコール要求は、チームの稼働状況に応じて Engineering Manager の Lucie Zhao の承認が必要となり、ケースバイケースでアドホックに対応します。 

##### 本番カットオーバーおよび本番サポートウィンドウ

各本番移行の前後 2 週間のウィンドウ（前 1 週間、移行の週末、後 1 週間）に Geo DRI がアサインされます。DRI は前後の週には Slack を通じて移行 Issue に完全にコミットし、移行の週末そのものには営業時間中（各自のタイムゾーンで午前 9 時〜午後 5 時）PagerDuty 経由で対応可能な状態にあります。問題が発生しなければ、DRI は通常の Geo 業務を再開できます。

###### 移行週末の責任

Geo チームは、カットオーバーに備え把握している担当者を確保し、Project Manager とタイミングを調整し、完全なデータ同期後の顧客インスタンスのカットオーバー中に発生するあらゆる問題のトラブルシューティングに対応できる態勢を整えていなければなりません。

##### RFH プロセス

本番カットオーバーウィンドウ外の同期に関する問題については、各チームは [Geo Support Request](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Geo) を提出し、優先度（P1〜P3）、同期開始時刻、カットオーバー期限、テナント、リクエスト内容を記載します。これらは週次の顧客サポート DRI によってトリアージされます。Geo エンジニアは効果的にサポートするために、Opensearch、Grafana、そして理想的には break glass アクセスへのアクセスが必要です。

| 優先度 | 説明 |
|----------|-------------|
| 1        | データ同期またはプリプロダクションカットオーバーに対する即時のブロッカー。修正なしには進められない |
| 2        | プリプロダクションカットオーバーフェーズの終了前に解決する必要があるが、開始のブロッカーではない |
| 3        | 本番カットオーバーの前に解決する必要がある。本番カットオーバーサポートウィンドウ内で対応可能 |

#### Dedicated 移行のための SRE エンゲージメントモデル

##### プリプロダクションカットオーバー

ローテーション制の SRE チームがプリプロダクションカットオーバーにアサインされます。これは一般的に、本番カットオーバーをサポートするのと同じチームです。プリプロダクションカットオーバーは多くの場合より慎重なプロセスであり、複数日にわたって実施されることがよくあります。ここで本番カットオーバーに関する潜在的な問題を洗い出します。各チームはコールブリッジに参加する必要はありません。実行、コミュニケーション、引き継ぎは #g_dedicated-migrations チャンネルおよび [Dedicated Migrations](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group/dedicated-migrations) プロジェクト内の各案件の Issue で調整できます

##### 本番カットオーバーおよび本番サポートウィンドウ

各移行の前後 2 週間のウィンドウ（前 1 週間、移行の週末、後 1 週間）に SRE チームがアサインされます。これは一般的に、プリプロダクションカットオーバーをサポートしたのと同じチームです。アサインされた SRE は、前後の週にはすべての移行 Issue を Priority 1 として扱います。コミュニケーションは #g_dedicated-migrations チャンネルおよび [Dedicated Migrations](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group/dedicated-migrations) プロジェクト内の各案件の Issue で行えます

###### 移行週末の責任

アサインされた SRE は、前後の週には Slack を通じて移行 Issue に完全にコミットし、カットオーバーの週末には各自の所在地／タイムゾーンに基づいて交代で業務を担当します。SRE チームは、Dedicated Migrations チームの権限フレームワーク外でのスクリプト実行、およびインフラストラクチャ（ネットワーキング、ノード、設定）に関する懸念のトラブルシューティングの支援を担当します。

**注記** 

多くの顧客は、ポストサポートウィンドウ中に「キャッチアップ」GitLab アップグレードを実施する必要があります。Dedicated Migrations チームは、SRE チームのサポートを受けながら、これらのアップグレードについて顧客との調整、スケジューリング、および実行を担当する必要があります。

##### 2 週間ウィンドウ外

サポートは主に Request for Help（RFH）チケットを通じて非同期で行われます。`@fviegas` によると、すべての Dedicated Migrations RFH は Priority 1 とみなされます。同期的な顧客コールは、チームの稼働状況に応じて Steve Denham／Oriol Lluch Parellada のいずれかの承認が必要となり、ケースバイケースでアドホックに対応します。

##### RFH プロセス

専用ウィンドウ外の同期に関する問題については、各チームは [Dedicated Support Request](https://gitlab.com/gitlab-com/request-for-help/-/work_items/new?description_template=SupportRequestTemplate-GitLabDedicated) を提出し、テナントとリクエスト内容を記載します。

#### スケジューリング

##### SRE と Geo のカバレッジ

Engineering Manager がカットオーバーウィンドウのための適切なリソースの確保を調整します。PM がカットオーバーの日時を確定し、カバレッジの確認が必要な場合は、@glen_miller に連絡して他の EM との調整を行えます。EM は単一のエピックを使用して、各カットオーバースロットのカバレッジを追跡します。

* [FY27](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group/-/work_items/179)

##### カットオーバースロット

Geo 移行のカットオーバースロットは現在、限られたリソースです。利用可能なスロットは[こちら](https://docs.google.com/spreadsheets/d/1KRDNw2mXOSAc4DE1hceAWZTRqDGkoV-t5yNymKyXSIo/edit?gid=2116571451#gid=2116571451)で参照できます。これらのスロットの確保は、プリセールスプロセスの一部であるべきです。Dedicated PM および EM と協働してスロットを予約してください。

###### カットオーバースロットのスケジューリング

カットオーバースロットをスケジューリングする際は、以下のガイドラインが適用されます:

* カットオーバースロットは先着順でスケジューリングされます
* スロットは通常、顧客への影響を最小限に抑えるため週末に利用可能です
* スロットは取引成立の時点で設定すべきです。そうでない場合は、遅くともスロット日の 14 週間前までに確定すべきです。
* スロットは、それぞれの EM によって SRE および Geo のカバレッジが確認された後にのみ確定されます

### Dedicated Migration チームの休暇

Dedicated Migration チームは [GitLab の有給休暇ポリシー](/handbook/people-group/time-off-and-absence/)に従います。
私たちはそれを、毎日顧客にサポートを提供する必要性とバランスさせています。
このページは、そのバランスを達成するために私たちが行うべきことを理解できるようにすることを目的としており、チームとして顧客に提供し続けながら、全員が必要かつ希望に応じて休暇を取得できるようにします。

#### 一度だけ行うセットアップ作業

##### Dedicated Migration チームのカレンダー

1. [**Dedicated Migrations Team Calendar**](https://calendar.google.com/calendar/embed?src=c_fb53e24f590edfb8f313253126123e48d57254dd73266fae6547a2a4890b0c82%40group.calendar.google.com&ctz=America%2FVancouver) のチームカレンダーへのアクセス権があることを確認してください。
   1. アクセス権がない場合は、自分が Dedicated Migrations Team（`dedicated-migrations-team@`）の一員かどうかを確認してください。一員でない場合は、Access Request を通じて追加を依頼してください。

1. Google カレンダーと Time Off by Deel の連携を設定し、自分の個人カレンダーと「Dedicated Migrations Team」カレンダーを手動で入力する必要がないようにします。
   1. Slack で、左サイドバー下部の「Apps」の横にある `+` サインをクリックします
   1. 「Time Off by Deel」を検索し、「View」をクリックします
   1. 「Home」の下で「Your Events」をクリックしてドロップダウンを表示します
   1. Settings 区切りの下にある「Calendar Sync」をクリックします
   1. 「Connect your Calendar」をクリックし、カレンダーを Time Off by Deel に同期するためのアクションを完了します
      * 「Success! Your calendar has been connected.」というメッセージが表示され、
        Slack の Time Off by Deel で「Your synced calendar」の下にカレンダーが一覧表示されます
   1. 個人カレンダーがリンクされたら、
   「Additional calendars to include?」の下にある「Add calendar」をクリックします。「Dedicated Migrations Team Calendar」カレンダーの ID は
   `c_fb53e24f590edfb8f313253126123e48d57254dd73266fae6547a2a4890b0c82@group.calendar.google.com` です

#### 休暇の選択と記録

必要なときはいつでも休暇を取得してください。

全員が少し配慮することで、誰もが希望する休暇を取得できるようになります。休暇を計画する際は、以下を行ってください:

* [全社的な有給休暇ガイドライン](/handbook/people-group/time-off-and-absence/time-away-philosophy/)を把握していることを確認する
* カレンダーを確認し、稼働できる人員が少ない日に十分なカバーが確保できるようチームと調整する
* できる限り早めに休暇をスケジュールする
* 上記のようなステップを踏んで予定の休暇を確実に取得できるようにする前に、払い戻し不可の旅行日程を確定しない
* 可能であれば、混乱を避けるように休暇を計画する

#### カバレッジ Issue を通じたコミュニケーション

5 日を超える PTO については、[coverage issue](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group/pto-coverage/-/issues/new?description_template=pto_coverage) をまとめてください。一部の Division には別のガイダンスがある場合があります（例: [Engineering PTO Coverage](/handbook/engineering/#taking-time-off)）。矛盾がある場合は所属 Division の手順に従い、チームに周知してください。

#### PTO の後

[PTO から戻る](/handbook/people-group/time-off-and-absence/time-away-philosophy/#transitioning-back-mindfully) を参照してください。

## リソース

* [GitLab group](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group)
* [GitLab project](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group/dedicated-migrations)
* [Migrating Customers to Dedicated internal documentation](https://internal.gitlab.com/handbook/engineering/dedicated/migrating-customers-to-dedicated/)
* [Cutover Cancellation Impact](https://drive.google.com/drive/folders/12GInLFxnT5BPbPJh1JsemUE089-Ctj0e)
