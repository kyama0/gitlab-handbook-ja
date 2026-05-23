---
title: Dedicated Migration チーム
description: Geo マイグレーションを Dedicated へスムーズに進めることに注力するチーム。ツール、プロセス、エンジニアリングを担当します
upstream_path: /handbook/engineering/infrastructure-platforms/gitlab-dedicated/dedicated-migration/
upstream_sha: eff3a749f8927544a08073e8f660283a5d80478b
lastmod: "2026-05-22T10:54:17+00:00"
translated_at: "2026-05-22T12:00:00Z"
translator: claude
stale: false
---

[[_TOC_]]

## チームのミッション

フィールド、お客様、エンジニアリングと連携し、シームレスで高速かつ信頼性の高いマイグレーションを提供します。チームは、不確実性を排除するためのプロセスを実行・改善し、Geo ベースの Dedicated マイグレーションにおけるカットオーバーへの準備態勢を確保します。

### 優先事項

* 私たち自身と顧客双方のために Geo Dedicated マイグレーションをよりスムーズにする、ドキュメント、テンプレート、トークトラック、ツールを含むツールキットを提供および洗練する
* セルフサービスの顧客マイグレーションを可能にする機能について、エンジニアリングの同僚と協力する
* 進行中の Geo マイグレーション案件をデリバリーする
* PS の同僚が Geo マイグレーション案件をスケールアップ／スケールアウトしてデリバリーできるよう支援する
* プリセールスプロセスにおいて、フィールド向けのスコープ算定とサイジングをより迅速に行えるツールとプロセスを提供する

### チームメンバー

| Name          | Role                                 |
|---------------|--------------------------------------|
| Eren Akca     | Staff Migration Engineer             |
| Petar Prokić  | Staff Migration Engineer             |
| Jessykah Bird | Senior Migration Engineer            |
| Glen Miller   | Senior Manager, Software Engineering |

### 役割と責任

このチームは：

Dedicated 案件の Geo マイグレーション部分において、チームは以下の責任を持ちます。

* フィールドおよびお客様と直接連携し、技術的ディスカバリー、データの検証、ターゲットインスタンスのキャパシティプランニングのための自動化されたソリューションを提供する  
* コミュニケーションを所有し、計画、ステータス、タイミングについて社内外のアライメントを提供する  
* お客様の Project Planning Office との Project Management のアライメントを所有し、アクティビティ、コミュニケーション、タイムライン、責任を明確に同期させる  
* リスクを最小化し、最大限の速度でプロダクション切り替えを確実に行えるようにする  

### 運営原則

#### お客様中心のエクセレンス

* **Clear Expectations First**: すべての案件は、マイグレーションの頻度、プラットフォーム能力、サービスモデルの境界に関する明示的なアライメントから始まります  
* **Consultative Partnership**: 私たちは注文を受けるだけの存在ではなく、信頼されるアドバイザーとして行動し、たとえ難しい状況でも正直なガイダンスを提供します  
* **Transparent Communication**: 定期的で構造化された更新を行い、サプライズなし \- お客様は常に自分たちの立ち位置を把握できます

#### 技術的な厳密さ

* **Discovery Before Design**: 包括的な技術および事業のディスカバリーがすべてのソリューションアプローチを駆動します  
* **Validation at Every Step**: 多層的な検証により、プロダクション変更前に正確性を確保します  
* **Automation Where Possible**: 標準化された反復可能なプロセスがリスクを削減し、一貫性を改善します

#### 構造化されたデリバリー

* **Milestone-Driven Progress**: お客様のサインオフ付きの明確なチェックポイントが、スコープクリープや認識ズレを防ぎます  
* **Risk-First Planning**: 期待頼みではなく、リスクを早期に特定して軽減します  
* **Documentation as Code**: 反復可能性と知識の伝達のために、すべてのプロセス、決定、成果物を文書化します

#### 継続的改善

* **Learning Organization**: すべてのプロジェクトが改善されたプロセス、ツール、方法論に貢献します  
* **Cross-Functional Collaboration**: Engineering、Product、Customer Success の各チームとの定期的なフィードバックループを持ちます  
* **Scalable Solutions**: 将来のセルフサービスと自動化を可能にする能力を構築します

#### 社内アライメント

* **One Team Approach**: 柔軟な分野横断的なコラボレーションを伴った、明確な役割定義  
* **Shared Accountability**: 成功は個人の貢献ではなく、チームレベルで測定されます  
* **Proactive Communication**: 社内のステークホルダーは、お客様へのコミットメント前に情報共有とアライメントが行われます

#### 成功指標

* より広いチームのメトリクスとのアライメントは進行中

## プロセス

### 他チームとの連携

#### Dedicated マイグレーションにおける Geo エンゲージメントモデル

##### プリプロダクションカットオーバーおよび 2 週間のプロダクションサポートウィンドウ外のリクエスト

プロダクションカットオーバーウィンドウ外の期間でサポートが必要な場合は、RFH を提出してください（下記参照）。**これにはプリプロダクションカットオーバーも含まれます。プリプロダクションには Geo エンジニアの割り当ては行われません。** お客様からの通話リクエストは個別の対応として扱われ、チームの空き状況に基づき Engineering Manager Lucie Zhao の承認が必要です。

##### プロダクションカットオーバーおよびプロダクションサポートウィンドウ

各プロダクションマイグレーション前後の 2 週間ウィンドウ（マイグレーション 1 週間前、マイグレーション週末、マイグレーション 1 週間後）について、Geo DRI が割り当てられます。DRI はプリ／ポストの週には Slack 経由でマイグレーション問題に完全にコミットし、マイグレーション週末そのものでは PagerDuty 経由で営業時間（自タイムゾーンの 9:00 〜 17:00）に対応します。問題が発生しなければ、DRI は通常の Geo 業務に戻れます。

###### マイグレーション週末の責任

Geo チームには、カットオーバーに備えて状況を把握している誰かが必要であり、Project Manager とタイミングを調整し、完全データ同期後のお客様インスタンスのカットオーバー中に発生する問題のトラブルシューティングに備えなければなりません。

##### RFH プロセス

プロダクションカットオーバーウィンドウ外の同期問題については、チームは [Geo Support Request](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Geo) を提出し、優先度（P1-P3）、同期開始時刻、カットオーバー期限、テナント、リクエスト内容を示します。これらは週次の顧客サポート DRI によってトリアージされます。Geo エンジニアは、効果的にサポートするために Opensearch、Grafana、理想的にはブレークグラスアクセスへのアクセスが必要です。

| Priority | Description |
|----------|-------------|
| 1        | データ同期またはプリプロダクションカットオーバーへの即時のブロッカー。修正なしには進めない |
| 2        | プリプロダクションカットオーバーフェーズの終了前に解決が必要だが、開始時のブロッカーではない |
| 3        | プロダクションカットオーバー前に解決が必要。プロダクションカットオーバーのサポートウィンドウ内で対応可能 |

#### Dedicated マイグレーションにおける SRE エンゲージメントモデル

##### プリプロダクションカットオーバー

ローテーションする SRE チームがプリプロダクションカットオーバーに割り当てられます。一般的に、プロダクションカットオーバーをサポートするのと同じチームです。プリプロダクションカットオーバーは多くの場合、複数日にわたって実行される、より計測されたプロセスです。これは、プロダクションカットオーバーで起こりうる問題をマッピングする場面です。チームは通話ブリッジに参加することは必須ではありません。実行、コミュニケーション、引き継ぎは #g_dedicated-migrations チャンネルおよび [Dedicated Migrations](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group/dedicated-migrations) プロジェクト内の案件 issue で調整できます。

##### プロダクションカットオーバーおよびプロダクションサポートウィンドウ

各マイグレーション前後の 2 週間ウィンドウ（1 週間前、マイグレーション週末、1 週間後）について、SRE のチームが割り当てられます。一般的にプリプロダクションカットオーバーをサポートしたチームと同じです。割り当てられた SRE は、プリ／ポストの週ですべてのマイグレーション問題を Priority 1 として扱います。コミュニケーションは #g_dedicated-migrations チャンネルおよび [Dedicated Migrations](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group/dedicated-migrations) プロジェクト内の案件 issue で行えます。

###### マイグレーション週末の責任

割り当てられた SRE は、プリ／ポストの週には Slack 経由でマイグレーション問題に完全にコミットし、カットオーバー週末には所在地／タイムゾーンに基づき業務を交代します。SRE チームは Dedicated Migrations チームの権限フレームワーク外のスクリプトを実行する責任を持ち、インフラストラクチャ（ネットワーキング、ノード、構成）の懸念事項のトラブルシューティングを支援します。

**注**

多くのお客様はポストサポートウィンドウで GitLab の「キャッチアップ」アップグレードを実施する必要があります。Dedicated Migrations チームは、SRE チームの支援を受けつつ、お客様との調整、スケジューリング、これらのアップグレードの実行に責任を持つべきです。

##### 2 週間ウィンドウ外

サポートは主に Request for Help (RFH) チケットを通じて非同期で行われます。`@fviegas` によれば、すべての Dedicated Migrations RFH は priority 1 と見なされます。同期的なお客様通話は個別の対応として扱われ、チームの空き状況に基づき Steve Denham または Oriol Lluch Parellada のいずれかの承認が必要です。

##### RFH プロセス

専用ウィンドウ外の同期問題については、チームは [Dedicated Support Request](https://gitlab.com/gitlab-com/request-for-help/-/work_items/new?description_template=SupportRequestTemplate-GitLabDedicated) を提出し、テナントとリクエスト内容を示します。

#### スケジューリング

##### SRE と Geo のカバレッジ

Engineering Manager がカットオーバーウィンドウの適切なリソースを見つけるよう調整します。PM がカットオーバーの日付と時刻を確定し、カバレッジ確認が必要な場合、@glen_miller に連絡することで、他の EM との調整を行えます。EM は各カットオーバースロットのカバレッジを追跡するために単一のエピックを使用します。

* [FY27](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group/-/work_items/179)

##### カットオーバースロット

Geo マイグレーションのカットオーバースロットは現在限られたリソースです。利用可能なスロットは[こちら](https://docs.google.com/spreadsheets/d/1KRDNw2mXOSAc4DE1hceAWZTRqDGkoV-t5yNymKyXSIo/edit?gid=2116571451#gid=2116571451)で参照できます。これらのスロットの確立はプリセールスプロセスの一部であるべきです。スロットを予約するには、Dedicated PM および EM と連携してください。

###### カットオーバースロットのスケジューリング

カットオーバースロットをスケジュールする際には、以下のガイドラインが適用されます。

* カットオーバースロットは先着順でスケジュールされる
* スロットは通常、お客様への影響を最小化するため週末に提供される
* スロットは案件クローズ時に設定すべきです。そうでない場合は、スロット日の遅くとも 14 週間前までに確定すべきです。
* スロットは、それぞれの EM により SRE と Geo のカバレッジが確認された後にのみ確定される

### Dedicated Migration チームの休暇

Dedicated Migration チームは [GitLab の有給休暇ポリシー](/handbook/people-group/time-off-and-absence/) に従います。
私たちは、毎日お客様にサポートを提供する必要性とのバランスを取っています。
このページは、必要かつ希望に応じて全員が休みを取れるようにしながら、チームとしてお客様への提供を継続するために必要なことの理解を提供することを目的としています。

#### 一度だけ行うセットアップ作業

##### Dedicated Migration チームカレンダー

1. [**Dedicated Migrations Team Calendar**](https://calendar.google.com/calendar/embed?src=c_fb53e24f590edfb8f313253126123e48d57254dd73266fae6547a2a4890b0c82%40group.calendar.google.com&ctz=America%2FVancouver)
team calendar にアクセスできることを確認してください。
   1. アクセスできない場合、Dedicated Migrations Team（`dedicated-migrations-team@`）に所属しているか確認し、所属していない場合は Access Request 経由で追加を依頼してください。

1. Time Off by Deel との Google Calendar 統合をセットアップし、個人と「Dedicated Migrations Team」カレンダーを手動で入力する必要がないようにしてください。
   1. Slack で、左サイドバー下部の 'Apps' の横にある `+` 記号をクリックします
   1. 'Time Off by Deel' を検索し 'View' をクリックします
   1. 'Home' の下で 'Your Events' をクリックしてドロップダウンを表示します
   1. Settings の区切りの下で 'Calendar Sync' をクリックします
   1. 'Connect your Calendar' をクリックして Time Off by Deel にカレンダーを同期するアクションを完了します
      * 'Success! Your calendar has been connected.' というメッセージが表示され、
        Slack 上の Time Off by Deel 内の 'Your synced calendar' にカレンダーが表示されます
   1. 個人カレンダーがリンクされたら、'Additional calendars to include?' の下にある
   'Add calendar' をクリックします。'Dedicated Migrations Team Calendar' のカレンダー ID は
   `c_fb53e24f590edfb8f313253126123e48d57254dd73266fae6547a2a4890b0c82@group.calendar.google.com` です

#### 休暇の選択と記録

必要なときはいつでも休みを取ってください。

全員のちょっとした配慮が、全員が希望する休みを取れるようにするうえで大きく役立ちます。休暇を計画する際は、以下を行ってください。

* [全社的な有給休暇ガイドライン](/handbook/people-group/time-off-and-absence/time-away-philosophy/) を理解していることを確認する
* カレンダーを確認し、稼働率が低い日について十分なカバーがあるようにチームと調整する
* 可能な限り早く休暇をスケジュールする
* 上記のような手順で予定の休暇を取れることを確認するまで、返金不可の旅行計画にコミットしない
* 可能であれば、混乱を避けるよう休暇を計画する

#### カバレッジ Issue を通じて連携する

5 日を超える PTO については、[coverage issue](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group/pto-coverage/-/issues/new?description_template=pto_coverage) を作成してください。一部の Division では他のガイダンスがある場合があります（たとえば [Engineering PTO Coverage](/handbook/engineering/#taking-time-off)）。競合がある場合は自分の Division の手順に従い、チームに周知してください。

#### PTO 後

[returning from pto](/handbook/people-group/time-off-and-absence/time-away-philosophy/#transitioning-back-mindfully) を参照してください。

## リソース

* [GitLab group](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group)
* [GitLab project](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/dedicated-migrations-group/dedicated-migrations)
* [Migrating Customers to Dedicated internal documentation](https://internal.gitlab.com/handbook/engineering/dedicated/migrating-customers-to-dedicated/)
* [Cutover Cancellation Impact](https://drive.google.com/drive/folders/12GInLFxnT5BPbPJh1JsemUE089-Ctj0e)
