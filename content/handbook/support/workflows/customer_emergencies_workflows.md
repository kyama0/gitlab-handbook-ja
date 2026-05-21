---
title: 顧客緊急対応業務の遂行方法
category: On-call
description: "サポートエンジニアリングにおける顧客緊急対応ローテーションの役割と責任の説明"
upstream_path: /handbook/support/workflows/customer_emergencies_workflows/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T20:30:00Z"
translator: claude
stale: false
lastmod: "2026-03-16T15:45:23+11:00"
---

## はじめに

顧客緊急対応ローテーションのサポートエンジニアは、GitLab 顧客からの運用上の緊急対応を調整します。

顧客緊急対応ローテーションは、[GitLab サポートオンコール](/handbook/support/on-call/) を構成するローテーションの 1 つです。

## 知っておくべきこと

開始前に、以下のセクションをレビューすることを検討するか、ワークフローに直接入る場合は [自己管理型緊急対応の処理](#handling-self-managed-emergencies) セクションから始めてください。

### 顧客緊急対応 PagerDuty ローテーションへの追加方法

顧客緊急オンコールローテーションに追加されるには、まず [顧客緊急オンコールトレーニングモジュール](https://gitlab.com/gitlab-com/support/support-training/-/issues/new) を完了し、その後マネージャーと合意したうえで、Support-Ops チームに対して該当する Pager Duty ローテーションへの追加をリクエストする新しい [Pager Duty Issue](https://gitlab.com/gitlab-com/support/support-ops/other-software/pagerduty/-/issues) を作成する必要があります。

#### AMER における考慮事項

顧客緊急シフトは 6 時間の重複するシフトです。

同時に発生する緊急対応の増加に伴い、AMER シフトを 8 時間の AMER オンコールウィンドウをカバーする 6 時間長の 3 つの重複するスケジュールに分割しました。スケジュールは、エンジニアが自分の業務時間に最も近い時間をカバーできるように分割されています。

- AMER 1 時間: 12:00 PM 〜 6:00 PM EDT (16:00 〜 22:00 UTC)
- AMER 2 時間: 1:00 PM 〜 7:00 PM EDT (17:00 〜 23:00 UTC)
- AMER 3 時間: 2:00 PM 〜 8:00 PM EDT (18:00 〜 24:00 UTC)

これにより、AMER オンコールウィンドウの最初と最後の時間は、1 人のエンジニアのみがオンコールとなります。これらの時間に複数の緊急対応が入ってきた場合は、[複数の同時緊急対応の処理](/handbook/support/workflows/customer_emergencies_workflows#handling-multiple-simultaneous-emergencies) ワークフローに従ってください。

各グループは、シフトの DRI 役割を調整することが推奨されます。DRI は最初の緊急対応への割り当てを担当します。非 DRI は同時に入ってくる緊急対応を担当します。

DRI スケジュールの例は以下のとおりです。AMER 2 はシフトのすべての時間で AMER 1 または AMER 3 と重複するため、30 分長く DRI を担当することに注意してください。

- AMER 1 DRI: 12:00pm 〜 14:30pm EDT
- AMER 2 DRI: 14:30pm 〜 17:30pm EDT
- AMER 3 DRI: 17:30pm 〜 20:00 EDT

### 緊急対応

緊急対応は、GitLab 顧客から報告される、GitLab サポートからの即時支援が必要な重大な本番環境の Issue です。これらは、顧客の GitLab インスタンスが深刻な低下や完全な障害を経験しているか、GitLab で発生した問題のために重要なビジネスプロセスが停止している、顧客起点のリクエストです。GitLab 顧客は、[緊急サポートフォーム](https://about.gitlab.com/support/#how-to-engage-emergency-support) で、以下のその他 [緊急対応の形態](#other-forms-of-emergencies) のレポートを送信できます:

- [自己管理型緊急対応](#handling-self-managed-emergencies)
- [ライセンス緊急対応](#license-emergencies)
- [SaaS (GitLab.com) 緊急対応](#saas-emergencies)
- [GitLab Dedicated 緊急対応](#gitlab-dedicated-emergencies)
- [Advanced または Signature Success Tier の緊急対応](#supporting-247-coverage-for-customers-on-the-advanced-or-signature-success-tier----phase-1)

### インシデント

インシデントは、GitLab.com または GitLab Dedicated インフラストラクチャに影響を与える、計画外のサービス中断または劣化であり、GitLab の社内チームによって検出および管理されます。これらは、GitLab.com または GitLab Dedicated インスタンスの複数のユーザーに影響を与えるプラットフォーム全体の Issue です。場合によっては、顧客から報告された緊急対応が、より広範なプラットフォームの Issue を明らかにし、インシデントを引き起こすことがあります。インシデントの DRI は以下のとおりです:

- [Communications Manager on Call (CMOC)](/handbook/support/workflows/cmoc_workflows.md) - GitLab.com インシデント
- [GitLab Dedicated Communications Manager on Call (GDCMOC)](/handbook/support/workflows/dedicated_cmoc.md) - GitLab Dedicated インシデント

### PagerDuty

GitLab 顧客が発生させた緊急対応を追跡するために、PagerDuty を使用します。[顧客緊急対応](#emergencies) があった場合、`#support_self-managed` で通知を受け取ります。

### PagerDuty ステータス

- **Triggered** - "顧客がオンコールエンジニアの注意を要求しました"
- **Acknowledged** - "ページを確認し、チケットをレビューしています"
- **Resolved** - "緊急チケットへの返信を送信して顧客と関わりました"

**注:** PagerDuty の "Resolved" は、根本的な Issue が解決されたことを意味するわけではありません。

### Slack ハンドル

割り当てられた CEOC エンジニアに連絡するために、以下の Slack ハンドルを使用できます。

- **@ceoc** - 現在のオンコールエンジニアに連絡する必要がある場合。
- **@ceoc-next** - 次のオンコールエンジニアに連絡する必要がある場合。これは、ウォームハンドオーバーなど、事前のコミュニケーションが有益なシナリオで便利です。

## 顧客緊急オンコールの主要な責任

顧客緊急オンコール (CEOC) エンジニアとしての役務を果たす際は、明確な所有権と説明責任を確保するために、以下の主要な原則に従ってください:

1. **割り当てを引き受ける**: 確認して作業を開始する緊急チケットには、すぐに自分自身を割り当ててください。これにより、あなたが Directly Responsible Individual (DRI) として確立され、緊急対応プロセス全体を通じて明確な所有権が確保されます。

2. **すべてを文書化する**: 透明性、再現性を維持し、非同期コラボレーションを可能にするため、Slack スレッドとチケットの両方で詳細なメモを保持してください。

3. **ステータスを伝える**: ステークホルダーに進捗と、シフト終了時に必要な引き継ぎを継続的に通知してください。

4. **やり遂げる**: 緊急対応が解決されるまで、または次の CEOC に適切に引き継がれるまで、DRI であり続けてください。

これらの原則は、すべての緊急対応に明確な所有権と説明責任があることを保証しながら、効率を維持するのに役立ちます。DRI であるということは、緊急対応を解決に導くことに対して説明責任を持つ唯一の人物であることを意味します。他の人と協力したり、シフト変更時にチケットを引き継ぐ必要があるかもしれませんが、緊急チケットに現在誰が責任を持っているかについて曖昧さがあってはなりません。

### 顧客緊急対応ローテーションのサポートエンジニアへの期待

#### オンコール前

- 🎫 前の週は通常のワークロードを維持してください。
- 📅 週の終わり近く (木曜〜金曜) には、自分のキューを確認してください:
  - [引き継ぐ](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6371) 必要があるチケット (高優先度のチケット、ハイタッチチケット、STAR されたまたはエスカレーションされた顧客のチケット) を特定します
    - 自分が受け取りたいサマリーを残します
    - これらのチケットの担当者を見つけるために、ネットワーク／同僚／サポートポッドと協力します
- オンコール前の週、引き継ぐ必要があるチケットについてマネージャーと議論してください。これらのチケットをマネージャーに割り当てて DRI を確保し、必要に応じて次のステップを話し合ってください。(マネージャーがチケット作業の担当者を見つけるのを手伝うことが期待されます。)
  - 🔎 オンコール週中に合理的に保持できるチケットを特定してください
    - 📉 オンコール週には AQC ベースラインの約 20% 少ない状態で入るようにしてください。(現在: 22)
NOTE: 💡 緊急チケットの解決は AQC にカウントされます
- オンコールスケジュール中の今後のイベントやアクティビティについて最新情報を入手するため、[顧客イベントカレンダー](#customer-events-calendar) に注目してください。

#### オンコール中

- シフトが始まったらすぐに対応可能になってください。
- シフト中いつでも顧客通話ができるよう、物理的な環境を整理してください。
- リージョン間ハンドオーバーのために、シフト終了後に追加で 15〜30 分の予定を入れてください。
- 前のシフトから現在進行中の緊急対応を確認することから 1 日を始めてください。デエスカレーションまたは解決されていない緊急チケットの DRI になる (または交代の DRI を見つける) ことが期待されます。これにより、すべてのチームメンバーがシフト終了後すぐに離れることができます。
- 緊急対応は予測不可能なので、今週のメインの目的は CEOC に連絡してきた顧客に成果を届けることだということを覚えておいてください。
- 別の GitLab チーム (SIRT チームなど) の代わりに GitLab ユーザーに連絡を取る必要がある場合があります。これらのリクエストにアクションを取るには、[通知の送信ワークフロー](/handbook/support/workflows/sending_notices) に従ってください。
- 🔥 割り当てられたチケットの 1 つがホットになった場合、[チケットを STAR する](/handbook/support/internal-support/support-ticket-attention-requests.md) か、助けてくれるサポートリーダーに注目を引くことができます。
- できるだけグローバルキューの手伝いをしてください
  - 簡単に解決できるチケット (2FA、低優先度、無料ユーザーチケットなど) を、できるときに引き受けてください
  - 担当を引き受けられない場合は、チケットに次のステップの内部ノートを残してください
  - できるときはサポートポッドのセッションでペアになって参加してください
- 🧠 覚えておいてください: 今週のあなたの目標は、CEOC をページする顧客のケアです

#### オンコール後の週

- その週末や前の週がどうだったかに基づいて、必要に応じて休暇を取ってください
  - 休暇を取る予定がある場合は、保留中のチケットが良好な状態で引き継がれるよう、追加の手順を必ず完了してください 🫶
- オンコール中に後回しにしたものがあった場合 — 今やってください
- 通常の AQC まで合理的にできるだけ早く立ち上げてください

### 反復的で長期にわたる緊急対応の処理

最善の判断を使って、緊急対応がこのカテゴリーに該当するかを判断してください。例としては、同じ顧客からの緊急対応で、3 つの主要なリージョンで繰り返し発生し、複数日にまたがるものです。このプロセスは、反復的な作業を減らし、調整を改善するためのコラボレーションを促進します。

どのエンジニアもこのプロセスを開始できます。
これらのケースでは、以下を検討してください:

- コラボレーションに使用される専用の `#support-escalation-<org>` Slack チャンネルを作成する。
- Pairify を使用して、過去の顧客緊急対応 Slack スレッドの会話をまとめ、新しい専用 Slack チャンネルに追加する。
- 平日 24 時間体制で緊急対応に集中するため、これまでに関与したサポートエンジニアを追加する。
- 緊急対応が金曜日にもまだ続いている場合、すべてのリージョンの週末オンコールエンジニアにサマリーに目を通してもらうために事前通知する。
- 緊急対応に関与した場合は、エンジニアリングチームメンバーを追加する。
- シフト終了時に詳細なチケット更新と Slack サマリーを残し、次のリージョンのチームへのウォームハンドオーバーを実施する
- 単一の信頼できる情報源を確保するために、主要な顧客チケットを重要な進展で更新し続ける。

## クイックリンク

### CEOC ハンドオーバースケジュール

- [AMER グループ 1 スケジュール](https://gitlab.pagerduty.com/schedules#PBLAHV7)
- [AMER グループ 2 スケジュール](https://gitlab.pagerduty.com/schedules#P9FKYZC)
- [AMER グループ 3 スケジュール](https://gitlab.pagerduty.com/schedules#PP28N7L)
- [APAC グループ 1 スケジュール](https://gitlab.pagerduty.com/schedules#PQB9Q6K)
- [APAC グループ 2 スケジュール](https://gitlab.pagerduty.com/schedules#PKPXM8K)
- [EMEA グループ 1 スケジュール](https://gitlab.pagerduty.com/schedules#P9SV029)
- [EMEA グループ 2 スケジュール](https://gitlab.pagerduty.com/schedules#P7ML12U)

### サポートマネージャーオンコールスケジュール

- [Support Manager AMER Schedule](https://gitlab.pagerduty.com/schedules/PTI56V1)
- [Support Manager APAC Schedule](https://gitlab.pagerduty.com/schedules/PWBXTYX)
- [Support Manager EMEA Schedule](https://gitlab.pagerduty.com/schedules/PXQ2ZAZ)

### 顧客イベントカレンダー

- [顧客イベントカレンダー](https://calendar.google.com/calendar/u/0/embed?src=c_8d5a8e9b8c3fc74901bad1799b18e8eafc9e499f7805f9c82f79f9d1e1f9ac4b@group.calendar.google.com)

### Engineering Directory

- [Engineering Directory](https://gitlab-com.gitlab.io/support/toolbox/engineering-directory)

## 自己管理型緊急対応の処理

CEOC として、緊急対応を以下の段階で解決するために、顧客と他のサポートエンジニアと一緒に作業します:

1. ステージ 1: Acknowledge (確認)
1. ステージ 2: Evaluate (評価)
1. ステージ 3: Engage (関与)
1. ステージ 4: Resolve (解決)
1. ステージ 5: Close (クローズ)

### ステージ 1: Acknowledge

1. 緊急対応がトリガーされると、PD からアラートを受け取ります。これは、テキスト、電話、メール、Slack メッセージ、またはこれらの組み合わせの可能性があります (PagerDuty の通知設定によります)。
1. PagerDuty または Slack でアラートを Acknowledge します。これは、緊急ページを受け取り、対応プロセスを開始することを意味します。
1. **オプション:** 顧客緊急チケットの緊急対応プロセスをガイドする新しい Issue を作成します。以下のいずれかのツールを使用できます:
   1. [Emergency Runbook Issue Template](https://gitlab.com/gitlab-com/support/emergency-runbook/-/issues/new)
   1. [Fieldnote の緊急テンプレート](https://gitlab.com/gitlab-com/support/fieldnotes/-/issues/new?description_template=Emergency%20-%20Self-Managed)
1. Zendesk チケットを開きます。Directly Responsible Individual (DRI) として自分自身を確立するためにチケットの所有者として割り当てます。これにより、緊急対応に関する混乱が防止され、一貫した顧客コミュニケーションが確保され、解決または適切なハンドオフまでフォロースルーの説明責任が確立されます。
   1. ほとんどの PagerDuty 通知形式は、チケットへの直接リンクを提供します。
   1. または、Zendesk 検索で `priority: urgent` という用語を使ってチケットを見つけます。

### ステージ 2: Evaluate

1. リクエスタが Premium レベル以上のアクティブなサブスクリプションを持っているかを確認し、緊急サポートを受ける権利があるかを確認します。そうでない場合は、チケットの優先度を下げ、顧客のサブスクリプションには緊急サポートが含まれていないことを丁寧に顧客に通知します。
1. まず、緊急リクエストを [トリアージ](#triage-the-emergency-request) します。必要に応じて、オンコールサポートマネージャーが常に協力可能です。
   1. チケットに公開コメントを作成して、緊急リクエストの受領を確認し、受け入れ判断に従ってコミュニケーションを取ります。チケットの SLA を「リセット」するために、対応するサポートエンジニアが公開コメントを追加する必要があることに注意してください。
1. 状況がダウングレードできると判断した場合は、[緊急レポートのダウングレード](#handling-an-emergency-downgrade) に進みます。

### ステージ 3: Engage

1. SLA 内にチケットで顧客に連絡を取り、以下のいずれかを行います:
   1. チケットを確認し、緊急対応に積極的に取り組んでいることを顧客に伝えます
      - 何をしているかを必ず伝えてください
      - 特定の短い時間内にあなたから連絡があるという明確な期待を必ず設定してください
   1. 報告された状況に応じて適切な場合は、顧客に [通話](#taking-an-emergency-customer-call) を提案します。たとえば、ステータスページで公開されているインシデントに関連する SaaS 緊急対応の場合は、通話は必要ありません。
      - 通話なしで解決された自己管理型緊急チケットの例: <https://gitlab.zendesk.com/agent/tickets/148028>
1. 顧客に連絡を取った *後* にのみ、PagerDuty アラートを Resolve してください。これは、現在緊急対応に積極的に取り組んでおり、最後まで見届けることを意味します。
1. `#support_self-managed` または `#support_gitlab-com` の PagerDuty メッセージを使用して、Slack スレッドを開始します。これにより、議論に参加するすべての人が、対応する緊急チケットを簡単に特定できます。
1. 他の人がフォローしやすく、また通話後のフォローアップにも役立つように、Slack でメモを取り始めます。
1. 思考のスニペットではなく、完全なアイデアを伝えるよう試みてください。通話中の何かに対する応答として「それは良くない」というよりも、「gitaly のタイミングが本当に高い」のような方が役立ちます。
1. 顧客が見せている有用な情報のスクリーンショットを取得して共有します。機密のものを共有していないことを確認してください。スクリーンショットを取っていることを顧客に伝えてください: 「ここで一旦止めてもらえますか？ チームと共有するためにこの部分のスクリーンショットを撮りたいです」。
1. 15 分後、最初の連絡に顧客が応答していない場合、以下のポイントをカバーするフォローアップメッセージを送信します:
   - 緊急対応のために作成されたブリッジ。
   - 顧客がすぐに参加できない場合、別の手配ができること。
   - さらに 15 分応答がない場合、ブリッジは閉じられ、チケットは `HIGH` 優先度に割り当てられます。
   - 必要が生じれば、新しい緊急リクエストを開いてかまいません。
1. 進行中の緊急対応に取り組んでいる間に別の緊急対応が入ってきた場合は、[複数の同時緊急対応の処理](#handling-multiple-simultaneous-emergencies) に従ってください。
1. 緊急対応が GitLab.com インシデントによって発生した場合、[GitLab インシデントによってトリガーされた顧客緊急対応](#customer-emergencies-are-triggered-by-a-gitlab-incident) に従ってください。
1. 緊急対応に積極的に参加しているサポートエンジニアの数をモニターします。複数のサポートエンジニアが支援のために通話に参加した場合、すべてが解決に積極的に貢献しているかを評価します。DRI として、そのメンバーの入力が現在不要であれば、同僚に積極的な参加から退いてもらうことを躊躇しないでください - 状況が変われば、受動的にモニタリングして再関与できます。[顧客緊急対応をシャドーイングしている](#customer-emergency-shadow-pagerduty-schedule) サポートエンジニアは、学習プロセスの一部として観察を続けるべきであることに注意してください。

**注:** 現在のオンコールエンジニアに連絡する必要があり、Slack でアクセスできない場合 (たとえば週末やシフト終了の場合)、[PagerDuty インシデントを手動でトリガー](https://support.pagerduty.com/main/docs/incidents#trigger-an-incident) して注意を引くことができます。**Customer Support** を Impacted Service として選択し、関連するサポートエンジニアに割り当てます。

### ステージ 4: Resolve

1. 通話で顧客と作業し、以下によって Issue を特定します:
   - ログを収集し、エラーを検索する。
   - 設定ファイルを確認する。
   - 最近の主要な変更をレビューする。
   - 環境設定とバージョンに影響する潜在的な既知の Issue を探す。
1. 以下のような前進への道を特定して、顧客が緊急対応を処理するのを助けます:
   - バックアップを復元して以前の状態にロールバックする。
   - パッチを適用したり、スタックしたマイグレーションをスキップしたりしてロールフォワードする。
   - 既知の Issue の回避策を適用する。
   - 設定ミスを修正してサービスを復元する。

### ステージ 5: Close

1. 顧客と作業した後、進捗に基づいて以下を行えます:
   - Issue が [解決](#when-the-customer-emergency-is-resolved) した場合、緊急対応を閉じる。
   - Issue が解決せず、追加の情報やリソースが必要な場合は、後で再開し、顧客に [フォローアップ緊急対応](#when-the-customer-emergency-is-not-resolved) を発生させるよう依頼する。
   - [何をすべきか分からない場合は助けを求める](#what-to-do-if-you-dont-know-what-to-do)。
2. 一部の緊急対応では、Issue が解決された後に [レトロスペクティブ](/handbook/support/workflows/customer-emergency-retro) を実施することが有益です。これは、サポートエンジニアが改善できる領域を特定してイテレーションするのに役立ちます。
3. 有効な緊急対応では、緊急対応後に関連情報を捕捉するのに役立つ [Pairify](https://gitlab.com/gitlab-com/support/toolbox/pairify) の使用を検討してください。
   これには、GitLab URL、Zendesk URL、Slack ハンドル、Slack 会話が含まれます。これにより、何も失われないようにすることができます。
   ![Pairify emoji](/images/support/workflows/assets/pairify.png "Pairify emoji") (`:pairify:`) を使用してこれをスケジュールできます。

#### 緊急リクエストのトリアージ

私たちの最初のタスクは、緊急リクエストの正しい前進方法を **すばやく** 判断することです。ほとんどの場合、それは通話を提案するか、顧客が提供した通話に参加することを意味します。そうでない場合もあります。

**ほとんどの場合、私たちは [良い意図を仮定](/handbook/values/#assume-positive-intent) し、[顧客の成果](/handbook/values/#results) を優先するため、リクエストを受け入れます**

- ただチケットを処理しているのではなく、人をサポートしていることを覚えておいてください: リクエストの背後にいる個人と顧客のニーズに焦点を当てましょう
- 顧客の視点を考慮してください: もし自分が顧客の立場にいたら、この状況をどう体験するかを振り返ってください
- 各リクエストには、それが正当であるという推定でアプローチしてください: 顧客と顧客の判断への信頼の場所から始めましょう
- 不適格化ではなく適格化に焦点を当ててください: 拒否する理由を見つけるよりも、状況を理解することにエネルギーを向けてください
- ビジネス影響の理解を優先してください: 顧客のビジネスニーズを評価と意思決定の中心にしてください

この判断を行うために、以下の質問を評価してください:

1. リクエストが [Severity 1 の定義](https://support.gitlab.com/hc/en-us/articles/11626416629660-Definitions#severity-1--urgent) と非常によく一致しており、明らかに緊急対応であるか？
   - その定義の核心は、「本番環境の GitLab サーバーまたはクラスタが利用できない、または使用できない状態である」という記述です
1. リクエストは [例外条件](/handbook/support/workflows/emergency_exception_workflow#exception-criteria) のいずれかに当てはまるか？
1. 問題は顧客のビジネスに重大な影響を与えているか？
   - この質問は意図的に柔軟性を持たせています
   - すべての可能な緊急シナリオを予測できないため、顧客の状況を理解し、真の共感を持って行動することにオープンであり続けます

最後に、単純に「この顧客にとって正しいことは何か？」を考えてください。
この質問のみに基づいて判断することになっても、大丈夫でしょう。

顧客が緊急リクエストを送信するとき、顧客はおそらく何らかのパニックや危機感を感じていることを覚えておいてください。顧客はストレスにさらされ、計り知れないプレッシャーを受けている可能性が高いです。あなたの落ち着き、共感、寛大さを使って、危機から顧客を優しく導いてください。

その後、危機の後で、チケットが本当に緊急対応を提示していなかったと判断した場合、CSM またはサポートマネージャーが、緊急サービスをより適切に使用する方法について顧客と議論できます。

| リクエストが…と判断したら | …Zendesk マクロを適用 | そして顧客に伝える… |
| ------------------------------ | ------------------------------- | ---------------------------------- |
| …[Severity 1 の定義](https://support.gitlab.com/hc/en-us/articles/11626416629660-Definitions#severity-1--urgent) を満たす | `General::Emergency::Strict Definition` | …緊急対応に取り組む計画。 |
| …私たちの [例外条件](/handbook/support/workflows/emergency_exception_workflow#exception-criteria) のいずれかに合致する | `General::Emergency::Exception` | …緊急対応に取り組む計画。 |
| …正しい前進方法を判断するためにより多くの情報が必要 | `General::Emergency::Needs more info` | …現時点で [非同期に進めること](#communicating-that-you-need-more-info)。 |
| …明らかに緊急対応が必要ない | `General::Emergency::Not an Emergency` および `Downgrade emergency ticket` | …顧客の状況は緊急サービスの対象ではないこと。[緊急対応のダウングレードの処理](#handling-an-emergency-downgrade) セクションに従ってください。 |

#### より多くの情報が必要であることを伝える

緊急リクエストチケットに、適切な前進方法を判断するための十分な情報が含まれていない場合、チケット経由で顧客にメッセージを送信します:

1. 状況を正しく分類するために、顧客の作業能力やビジネス目標達成への影響について、より理解したいと説明します (*これが* ビジネス影響です)
1. 顧客が直面している問題と必要な助けを理解するために必要な、特定の追加コンテキストを尋ねます

判断を下すための十分な情報を得たら、最終的な資格判断でチケットにタグを付けるために他のマクロのいずれかを使用します。`Needs more info` タグは意図的に添付されたままになることに注意してください。

#### 緊急対応のダウングレードの処理

##### 「Downgrade emergency ticket」マクロを適用する

マクロを適用すると、以下の変更が行われます:

- フォームが Self-Managed に設定されます。
- 優先度が High に設定されます。
- チケットステージが NRT に設定されます。

チケットタイプに応じてフォームを調整し、[サポート影響度の定義](https://about.gitlab.com/support/definitions/#definitions-of-support-impact) に基づいて優先度を設定します。
顧客が既存のチケットに関連して緊急リクエストを送信した場合、ダウングレードメッセージを配信する際に緊急チケットを閉じ、既存のチケットが選択した優先度を持っていることを確認してください。

##### 緊急対応のダウングレードを伝える

ダウングレードメッセージはできるだけ慎重かつ思慮深く配信することが重要です。緊急リクエストを送信する顧客は、すでにパニック、高ストレス、高プレッシャー、またはこれらの組み合わせの状態にあることがよくあります。顧客にメッセージを配信することに快適さを感じる場合は、そうすることが推奨されます。マネージャーの支援を希望する場合は、[オンコールサポートマネージャーに連絡](#optional-contact-the-on-call-support-manager) してください。

メッセージに含める重要な詳細は以下のとおりです:

1. 私たちが [緊急の状況](https://support.gitlab.com/hc/en-us/articles/11626416629660-Definitions#severity-1--urgent) をどう定義しているか
1. 顧客のチケットをどの重大度レベルにリセットするか、そしてその理由 ([サポート影響度の定義](https://about.gitlab.com/support/definitions/#definitions-of-support-impact) を参照)
1. 既存のチケットがある場合、緊急チケットを閉じて既存のチケットで作業を続けることを示す
1. それから、チケットの作業開始についてどんな対応を期待すべきか
   - 顧客の状況が [緊急対応とまではいかないがすぐにそうなる可能性がある場合](#situations-that-might-or-might-not-be-emergencies) は、サポートエンジニアが高優先度ですぐにチケットの作業を開始することを示します
   - そうでない場合は、サポートエンジニアが通常の非緊急 SLA に従って応答することを示します
1. 非緊急の作業はどのチケットで進行するか

##### (オプション) オンコールサポートマネージャーに連絡する

いつでも、追加サポートを見つけるためのアドバイスや助けがほしい場合は、[オンコールサポートマネージャーに連絡](/handbook/support/on-call/#engaging-the-on-call-manager) してください。オンコールマネージャーはあなたをサポートするためにいます。顧客は必要に応じて追加のサポートエンジニアを見つけることができます。これにより、複数の人を通話に参加させることで複雑な緊急対応を扱いやすくし、責任を共有できます (たとえば、1 人が Slack でメモを取り、もう 1 人が通話で口頭でコミュニケーションを取る)。マネージャーは週末もオンコールしているため、いつでも助けを求めることができます。

#### 複数の同時緊急対応の処理

まれに、オンコールエンジニアは別々の顧客から発生する同時緊急対応を経験することがあります。これがあなたに起こった場合、あなたは一人ではないことを覚えておいてください。各緊急対応の適切な関与と解決を確保するためには、以下のプロセスの最初のステップを取るだけで済みます:

1. **あなた**: 新しい入ってくる緊急対応について知らせるために、[オンコールサポートマネージャーに連絡](/handbook/support/on-call/#engaging-the-on-call-manager) します。サポートマネージャーは、新しい緊急ページを所有するエンジニアを見つける責任があります。
1. **サポートマネージャー**: Slack で、地域のサポートグループ (*たとえば* `@support-team-americas`) に ping し、新しい入ってくる緊急ケースを支援できる人に支援を要請します。
1. **2 人目のサポートエンジニア**: 緊急ページを Acknowledge して Resolve し、ケースで顧客を支援していることを示します。

#### 顧客緊急対応が GitLab インシデントによってトリガーされた場合

GitLab インシデントが顧客緊急対応の原因である場合、CMOC とオンコールサポートマネージャーに [サポート対応](/handbook/support/workflows/cmoc_workflows.md#about-coordinating-a-support-response) が関連するかをチェックインしてください。インシデントがサポートからの非標準ワークフローまたはコミュニケーションを必要とする場合、[サポート対応 Issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/blob/master/.gitlab/issue_templates/Support%20Response.md) が作成されます。緊急対応に取り組む際にこの Issue をガイドとして使用してください。ワークフローで協力したり、関連するチケットの処理にサポートエンジニアの役に立つ情報を共有したりすることもできます。

#### APAC の週末バックアップエンジニア

同時緊急対応は週末により頻繁になることが予想されます。APAC マネージャーと次のイテレーションの緊急対応カバレッジについて活発な議論があります。当面の解決策として、APAC サポートチームには、必要な場合に同時緊急対応を支援するためにオンコールマネージャーがページできるサポートエンジニアのバックアッププールがあります。

バックアッププールに参加するサポートエンジニアは **バックアップエンジニア** と呼ばれ、厳密にボランティアベースです。

このプールは、概説のとおり、PagerDuty の既存のエスカレーションポリシーから独立しています:

```text
Pool 1: On call engineer -> Support Manager on call -> Directors
Pool 2: Backup engineers
```

バックアップポリシーへの変更 (メンバーの追加／削除を含む) は、[既存のエスカレーションポリシーを編集](https://gitlab.com/gitlab-com/support/support-ops/other-software/pagerduty/-/blob/master/.gitlab/issue_templates/Edit%20an%20existing%20escalation%20policy.md?ref_type=heads) Issue テンプレートを使用して PagerDuty プロジェクト内に Issue を作成することで、サポートマネージャーとサポートエンジニアによって行うことができます。

*詳細については、[STM#4583](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/4583) を参照してください。*

##### バックアップエンジニアへのページを開始するためにエスカレートする

現在の緊急対応に取り組んでいる間に同時緊急対応が入ってきた場合:

1. **あなた**: ページを Acknowledge／Resolve するのではなく、**Escalate** します。サポートマネージャーは、新しい緊急ページを所有するエンジニアを見つける責任があります。
1. **サポートマネージャー**: 状況を評価します。状況が必要とする場合、[バックアッププールへのページを開始](/handbook/support/workflows/support_manager-on-call) して、バックアップエンジニアからの支援を要請することが可能です。
1. **バックアップサポートエンジニア**: 緊急ページを Acknowledge して Resolve し、ケースで顧客を支援していることを示します。

### 緊急対応かもしれない、そうでないかもしれない状況

時に、緊急対応とまではいかないがすぐにそうなる可能性のある状況に対して緊急ページが入ってくることがあります。この状況では、状況が緊急になるのを防ぐために顧客を支援したいと考えます。

平日にこの状況が発生した場合:

- オンコールサポートマネージャーに支援をリクエストします。顧客は、即時の応答が必要な `high` 優先度のチケットとしてチケットを処理する別のサポートエンジニアを見つけるために働きます。

週末にこの状況が発生した場合:

- 即時の応答が必要な `high` 優先度のチケットとしてページを処理します。緊急になる前に Issue を解決または軽減するために顧客と作業します。
- 別の緊急対応に積極的に取り組んでいる場合は、[オンコールサポートマネージャーに連絡](/handbook/support/on-call/#engaging-the-on-call-manager) して支援を要請してください。顧客は顧客を支援するか、即時の応答が必要な `high` 優先度のチケットとしてチケットを処理する別のサポートエンジニアを見つけるために働きます。

[緊急対応かもしれない状況](/handbook/support/workflows/emergency_exception_workflow#examples-of-situations-that-might-or-might-not-qualify-for-an-exception) と [緊急対応でない状況](/handbook/support/workflows/emergency_exception_workflow#situations-that-are-not-emergencies) のさらなる例を参照してください。

### 緊急顧客通話の対応

緊急通話の対応は、以下の 2 つのユニークなポイント以外、通常の通話と大きく違いません:

- 通話の主題について、(おそらく) ほとんど事前通知がない
- 望ましい最終状態は、機能するシステムである

通話に同伴する同僚を見つけるよう試みてください。通話の 2 人目はメモを取り、解決策を検索し、Slack で追加の助けを求め、システムやネットワーク関連の問題があった場合に共同ホストの役割を引き受けることができます。Slack であなたとアイデアを議論して確認することもできます。

通話中、顧客との関係を確立しようとしてください。顧客の状況に共感し、協力的なトーンを設定してください。

できるだけ早く、自分の選択肢を判断してください。場合によっては、最良の選択肢は変更やアップグレードのロールバックかもしれません。最良の選択肢が、本番データの一部の損失を伴う場合もあります。これらのいずれかが当てはまる場合は、その計画を実行する前に、顧客に他の選択肢が見えるかを尋ねてもよいでしょう。

### 通話後

緊急顧客通話を終了する前に、フォローアップが必要な場合に何をすべきか、フォローアップが必要な場合に誰が対応可能かを顧客に伝えてください。

例:

> ここで根本問題は解決したように見えますが、何か助けが必要な場合は、これから 2 時間オンコールしています。**新しい緊急チケットを開いて** いただければ、すぐに通話に戻ります。2 時間以降の場合は、同僚の Francesca が応答します。一日の業務を終える前に、彼女が状況の背景を把握できるようにします。

通話が終了したら:

1. チケットへの公開返信で、顧客に関連する通話後のメモを書きます (マクロ [`Support::Customer Calls::Call Completed - Summary`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360028010274) を使用)。
1. すべての関連する内部専用情報を、チケットの内部ノートとして追加します。
1. 緊急対応の Slack スレッドで次のオンコールエンジニアにタグ付けします。
1. 一般的な [オンコール - シフト終了](/handbook/support/on-call/#ending-your-on-call-shift) セクションのガイダンスをレビューし、関連するステップに従ってください。

DRI として、以下の条件のいずれかが満たされるまでチケットの所有権を維持することを覚えておいてください:

- 緊急対応が解決され、チケットが閉じられる
- 顧客が、もはや緊急支援が必要ないことを確認する
- シフト変更時に DRI 責任を別のエンジニアに適切に引き継いだ
- フォローアップのために新しい緊急チケットが作成された (この場合、チケットをリンクし、新しいチケットに DRI が割り当てられていることを確認します)

#### 顧客緊急対応が解決されない場合

顧客緊急対応が解決されていないが、休息のために夜通しなど、長時間離れる必要がある状況が発生する場合があります。この状況で通話を終了する前に、フォローアップのために *新しい* 緊急対応を作成する必要があることを顧客に説明してください。新しい緊急対応を作成することで、顧客が再び対応可能になったときに DRI がいることを確保します。

例:

> 今日は解決には至らず、明日朝まで離れることを理解しました。これに戻ってきて何か助けが必要な場合、これから 2 時間オンコールしています。**新しい緊急チケットを開いて** いただければ、すぐに通話に戻ります。2 時間以降の場合は、同僚の Francesca が応答します。一日の業務を終える前に、彼女が状況の背景を把握できるようにします。

通話が終了したら:

1. チケットへの公開返信で、顧客に関連する通話後のメモを書きます (マクロ [`Support::Customer Calls::Call Completed - Summary`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360028010274) を使用)。
1. すべての関連する内部専用情報を、チケットの内部ノートとして追加します。
1. 緊急対応の Slack スレッドで次のオンコールエンジニアにタグ付けします。
1. 非緊急チケットにマージして、すべてを統合してリンクします。

#### 顧客緊急対応が解決された場合

顧客緊急対応が解決されたらすぐに、緊急チケットを solved としてマークします。内部コメントで緊急対応のサマリーを追加する必要があるかを検討します。フォローアップ作業は **別のチケットで** 行うべきです — 緊急チケット内で作業を継続 **しないで** ください。

- **オプション 1: 関連するチケットがすでに存在する:**
  1. (解決済みの) 緊急チケットへのリンクを内部コメントに追加します。
  1. 緊急チケットに、このチケットをフォローアップチケットとしてリンクする内部コメントを追加します。
  1. フォローアップチケットの優先度が適切かを確認します。
  1. フォローアップチケットへの公開返信で、顧客に関連する通話後のメモを書きます (マクロ [`Support::Customer Calls::Call Completed - Summary`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360028010274) を使用)。
  - フォローアップ作業がこのチケットで続行されることを必ず顧客に伝えてください。

- **オプション 2: 関連するチケットがない:**
  1. このドキュメント [顧客の代わりに新しいチケットを開くにはどうすればよいですか？](/handbook/support/workflows/working-on-tickets/#how-can-i-open-a-new-ticket-on-behalf-of-a-customer) で提供される手順に従って、新しいチケットを作成します。
  1. このチケットでフォローアップ作業が続行されることを、チケットの説明で顧客に伝えます。
  1. (閉じられた) 緊急チケットへのリンクを内部コメントに追加します。
  1. 緊急チケットに、このチケットをフォローアップチケットとしてリンクする内部コメントを追加します。
  1. オプションで、緊急対応に関与したエンジニアがチケットの所有権を引き受けることもできます。

なぜ別のチケットでフォローアップ作業を行うのでしょうか？

- 元の担当者のシフトが終了した後にチケットに入る顧客の応答を見逃すリスクがあります。
- 緊急チケットには、迅速な対応を促すためにより短い内部 NRT SLO があります。
- 緊急チケットは私たちの統計で異なるカウントになります。

#### オプション: ペアリング Issue を作成する

もう 1 つ検討すべきオプションは、緊急対応中に支援を提供してくれたサポートエンジニアを含めて、`pairing-customer_emergency` ラベル付きで [ペアリング Issue](https://gitlab.com/gitlab-com/support/support-pairing/-/issues/new?issue%5Btitle%5D=[Emergency%20collaboration]&issuable_template=Ticket%20Pairing%20-%20Emergencies) を作成することです。キャパシティが限られている場合は、緊急対応に関与した任意のエンジニアにあなたに代わってペアリング Issue を作成するよう要請できます。これにより、必要なコラボレーションの努力が追跡されることを確保できます。

## 何をすべきか分からない場合

まず、あなたの主な役割は緊急対応管理であることを覚えておいてください。すべての答えを個人的にすぐに持っていることは期待されていません。

あなたの主な仕事は緊急対応を調整することです。それは以下を意味する可能性があります:

- 顧客に特定のアクションを取るよう指示する
- 関連するドキュメントを見つけたり、問題に関するその他の調査を行う
- 既知のバグや回帰を特定し、回避策を提供する
- ログデータを分析する

それは *同様に* 以下を意味する可能性もあります:

- 上記を行うのを助けてくれる、サポートチームの [他の専門家](/handbook/support/workflows/how-to-get-help#expand-to-support-pods-and-other-subject-matter-experts) を特定する
- subject matter expert (SME) を見つけるために [開発チームに連絡する](/handbook/support/workflows/how-to-get-help#how-to-find-the-correct-development-section-and-group-to-reach-out-for-help)
- 顧客側の追加の専門家に連絡することを提案する (たとえば、問題が遅いストレージである場合、顧客のストレージチームから誰かを連れてくることを提案するかもしれません)

顧客の助けになり、顧客の問題の解決を担当する人としてのあなたへの顧客の信頼を維持することのみを言うようにしてください。何をすべきか分からない場合、何を言うべきかも分からないかもしれません。役立ちそうなフレーズをいくつか紹介します:

- *これを解決するために、これまで何を試しましたか？*
- *それについてドキュメントをチェックする数分間ください。*
- *その答えを見つけるためにいくつか調査をしています。数分ください。*
- *この分野に特定の専門知識を持つ人を見つけるための作業をしています。*
- *まだ答えはわかりませんが、私はあなたのためにここにいて、これを解決するために自分の自由になるすべてのリソースを使用します。*

進められない週末の SaaS 緊急対応に遭遇した場合、[CMOC エンジニアオンコール](https://gitlab.pagerduty.com/escalation_policies#PNH1Z1L) が助けやガイダンスを提供できるかチェックすることを検討してください。

それでも行き詰まっていて *かつ* 助けを見つけるのが困難な場合は、[マネージャーオンコールに連絡](/handbook/support/on-call/#engaging-the-on-call-manager) してください。

### 開発者エスカレーションのトリガー

まれに、あなたとマネージャーオンコールが、subject matter expert からの必要な開発者の入力を得るために [Tier 2 オンコールプログラム](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/) にエスカレートすることが必要だと判断する場合があります。専門的な専門知識があっても、緊急対応の焦点となっている GitLab の特定の側面についてオンコールエンジニアが追いつくのに時間がかかる可能性があることに留意してください。

Subject Matter Expert (SME) にエスカレートするには、Slack で `/inc escalate` コマンドを使用し、"Oncall team" ドロップダウンリストから適切なチームを選択します。適切なチームと [エスカレーション基準](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/#escalation-criteria) については、[Tier 2 オンコールプログラム](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/) を参照してください。Tier 2 オンコールにページする際は、顧客はこれをインシデントだと推定することを覚えておいてください。`Notification Message` フィールドで、ページが Sev 1 self-managed 顧客緊急対応のためであることを明確に述べ、関連する Zendesk チケットと進行中の self-managed CEOC スレッドの両方へのリンクを含めてください。

通知メッセージの例:

> Sev-1 Self-Managed Customer Emergency regarding `$issue` https://gitlab.slack.com/archives/.../... https://gitlab.zendesk.com/agent/tickets/...

ほとんどの Tier 2 SME ローテーションは 24x5 カバレッジ (月曜〜金曜) を提供します。週末のエスカレーションは可用性が限られる場合があります。エスカレートする前に、必ず特定のチームの [カバレッジ](/handbook/engineering/infrastructure-platforms/incident-management/on-call/tier-2/#active-tier-2-rotations) の詳細を確認してください。

SME にエスカレートする際、状況が進化するにつれて、顧客の継続的な積極的参加が必要かどうかをモニターしてください。Issue が顧客の専門領域から離れた場合、必要に応じて再度関与できる状態を保ちながら、積極的な参加から離脱できるか積極的に尋ねてください。これにより、顧客とサポートの両方にとっての集中を維持し、ノイズを減らすことができます。

ヘルプが必要な機能や対象領域の責任者である関連チームを特定するのに役立つ [Engineering Directory](#engineering-directory) を参照することもできます。

## その他の緊急対応の形態

カスタマーサポートは、GitLab の Advanced および Signature Success Tier に加入している顧客に 24/7 のカバレッジを提供します。これらのプレミアムティアには [Customer Success Architect (CSA)](/handbook/customer-success/csm/segment/csa/) へのアクセスが含まれており、Severity 2 の Issue (Zendesk で High Priority チケットとしてラベル付け) には継続的なサポートとより速い応答時間が必要です。

| Success Tier | カバレッジ                                   |
| ------------ | ------------------------------------------ |
| Advanced     | - 24/7 High Priority カバレッジ              |
| Signature    | - 24/7 High Priority カバレッジ<br>- 2hr SLA |

### 週末カバレッジ

8 月開始で、シフトエンジニアはすべてのリージョンで土曜日に作業を開始してカバレッジを提供します。
既存のオンコールローテーションスケジュールで管理される `@CEOC` は、シフトエンジニアがまだオンボードされていない、または PTO 中の日に、これらのチケットの週末カバレッジを一時的に担当します。リージョン別の現在のカバレッジ:

|      | 土曜日 | 日曜日  |
| ---- | -------- | ------- |
| APAC | :white_check_mark: シフト  | CEOC    |
| EMEA | :white_check_mark: シフト  | :white_check_mark: シフト |
| AMER | :white_check_mark: シフト  | CEOC    |

これは、土曜日にはすべてのリージョンでカバレッジがありますが、日曜日にはないことを意味します。
これは、[STM#6743 24/7 シフトの役割とその実装](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6743) でさらに詳述されている 3 段階アプローチのフェーズ 2 です。

### PagerDuty アラート

2025-05-01 から、2 つの success tier のいずれかを持つ顧客から受信した High Priority チケットの PagerDuty アラートが週末にトリガーされます。シフトエンジニアまたは一時的に [CEOC](#key-responsibilities-for-customer-emergency-on-call) は、Zendesk で明確に記載される顧客の権利に応じて、上記の SLA 内にこのチケットにアクションを取る必要があります。

### チケットの割り当てと処理

会社として、特に Success Tier の顧客からの High Priority チケットを緊急性とアクションを持って扱いたいと考えています。

1. シフトを開始するときは、注意が必要な、退出するシフトエンジニアまたは CEOC からの緊急対応または High priority チケットを引き継いでください。
1. High priority チケットでページされた場合は、チケットの優先度を下げる方向に作業することで、チケットを高優先度にしている部分の解決に取り組んで顧客と一緒に作業します。
1. 週末にチケットの割り当てを解除する必要はありません。継続的な注意が必要なチケットは、[PD アラート](/handbook/support/on-call/#engaging-the-next-on-call-support-engineer) を使用して入ってくるシフトエンジニアまたは CEOC に引き継ぎ、安全な状態のチケットは退出するシフトエンジニアまたは CEOC に割り当てたままにしておくべきです。

#### Assigned Support Engineer (ASE) を持つ顧客

以下のケース:

- [assigned support engineer](/handbook/support/enhanced-support-offerings/offering-assigned-support-engineer/) が顧客のチケットを自動的に自分自身に割り当てるようオプトインしている、かつ
- 顧客が週末に Severity 2 チケットを作成する。

これにより:

1. チケットの CEOC ページが生成され、かつ
1. ASE がチケットに割り当てられます。

シフトエンジニアまたは CEOC は、ASE に割り当てられているかもしれませんが、そのようなチケットに応答する必要があります。Success Tier 顧客のすべての未解決、High Priority チケットは、レポート: *All Success Tier Customers' Unsolved Severity 2/High Tickets* で [24-7 Success Tier Coverage](https://gitlab.zendesk.com/explore/studio#/dashboards/06E115D8E3D0A86B89012F8C2FF9C3713331EF2CA24A3B7677CB8B355D061ACE) Zendesk Explore ダッシュボードで表示できます。

顧客チケットがデエスカレートされ、Severity 2/High Priority Issue でなくなったら、[チケットの優先度をリセット](/handbook/support/workflows/setting_ticket_priority/#resetting-ticket-priority) し、標準の業務時間中に引き続き作業を行うことを顧客に伝えます。

サポートマネージャーオンコールは常にあなたを支援するために対応可能です。[これらのステップ](/handbook/support/on-call/#engaging-the-on-call-manager) に従って [サポートマネージャーオンコール](/handbook/support/workflows/support_manager-on-call) を支援に関与させてください。

### ロールアウトとモニタリング

フェーズ 2 の推定タイムライン: チケット数、顧客の採用、私たちのオンボーディングに応じて 2〜3 か月。

**Zendesk Explore ダッシュボード:** [24-7 Success Tier Coverage](https://gitlab.zendesk.com/explore/studio#/dashboards/06E115D8E3D0A86B89012F8C2FF9C3713331EF2CA24A3B7677CB8B355D061ACE)

これは Zendesk ダッシュボード [24-7 Success Tier Coverage](https://gitlab.zendesk.com/explore/studio#/dashboards/06E115D8E3D0A86B89012F8C2FF9C3713331EF2CA24A3B7677CB8B355D061ACE) でマネージャー DRI (@erikamiklos (EMEA)、@ralfaro (AMER)、@kslaats (APAC)) によって綿密にモニターされています。

## ライセンス緊急対応

### 平日

平日のライセンス緊急対応では、[`#support_licensing-subscription`](https://gitlab.slack.com/archives/C018C623KBJ) に連絡を取り、そこの専門家にケースを処理するよう依頼してください。確実に取り上げられるよう、リクエストで現在の [サポートマネージャーオンコール](/handbook/support/workflows/support_manager-on-call) に ping してください。ping されたら、サポートマネージャーオンコールが緊急対応が処理されることを保証する DRI となります。

期限切れのライセンスのために顧客のインスタンスが使用できなくなり、L&R チームやオンコールマネージャーに連絡できない場合は、[トライアルライセンスを生成](/handbook/support/license-and-renewals/workflows/self-managed/license_for_weekend_emergencies/#step-2-generate-the-trial-license) してください。

#### 週末

##### 自己管理型サブスクリプション緊急対応

時に、顧客のサブスクリプションが **週末に** 期限切れになり、新しいサブスクリプションが生成されるまでインスタンスが使用できなくなることがあります。

非トライアルサブスクリプションの場合、インスタンスが稼働していればライセンスを追加する必要はないことを顧客に思い出させることができます。顧客のリクエストが通常の業務時間中に標準の L&R ケースとして処理されることを丁寧にユーザーに知らせてください。緊急チケットを閉じ、まだ存在しない場合は [新しい L&R チケット](https://support.gitlab.com/hc/en-us/requests/new?ticket_form_id=360000071293) を開くよう顧客に依頼してください。

そうでない場合は、[Self-Managed 週末緊急対応 - ライセンスリクエスト](/handbook/support/license-and-renewals/workflows/self-managed/license_for_weekend_emergencies/) ワークフローに従ってください。

##### SaaS サブスクリプション緊急対応

###### サブスクリプションの有効期限が切れて Free にダウングレードされた

顧客は、ライセンスの有効期限切れや更新の適用怠慢のために、ブロックされる可能性があります。これが週末に発生した場合:

1. [chatops](/handbook/support/workflows/chatops#namespace) または GitLab.com 管理者アカウントで namespaces API (https://gitlab.com/api/v4/namespaces/<NAMESPACE>) を使用して、namespace 詳細を検索します
1. `Trial ends on` の日付を確認します。
   - 日付がある場合、次のステップで `Subscription Name` を提供する必要はありません。ステップ 3 に進んでください。
   - 空または null **かつ namespace が Free プランの場合**、Settings -> Billing ページに移動して `Start a Free Ultimate trial` をクリックするよう顧客を導きます。
1. チケットで `Trial Subscription - Exclusions Sign Off` マクロを適用し、生成されたメッセージを顧客に送信します。顧客がトライアルサブスクリプションの除外事項を理解したことを確認する **書面** での応答を提供するまで、それ以上進めないでください。
1. `CustomersDot Support Admin Tools` にアクセスし、`Trial changes (SaaS)` オプションを使用して状況を解決します。
   - namespace ID を検索します。
   - 鉛筆アイコンを選択してトライアルを編集します。
   - 顧客が最初に購入したプランを選択するか、この情報がない場合は `Ultimate` を使用します。
   - 終了日を 10 日後に設定します。
   - 関連する Zendesk チケットリンクを `Zendesk ticket link` フィールドに追加します
   - `Save` をクリックします。
1. 顧客が確認したら、緊急チケットを閉じます。
1. フォローアップのためにチケットへのリンクを使って [`#support_licensing-subscription`](https://gitlab.slack.com/archives/C018C623KBJ) にアラートします。

###### マルチイヤーサブスクリプション

- **注:** Self Managed ライセンスについては [マルチイヤーサブスクリプションの処理](/handbook/support/license-and-renewals/workflows/self-managed/handling_multi-years_subscription/) を参照してください。

レガシータイプのサブスクリプションの中には「マルチイヤー」と呼ばれるものがありますが、実際にはマルチイヤー期間をカバーするために前払いで売られた、複数の別々のサブスクリプションです。顧客がこのような契約を持っている場合、更新の各記念日には次のサブスクリプションが関連付けられる必要があり、そうでないと顧客の namespace は `Free` に戻ることがあります。これが発生した場合、以下のステップを顧客に送信してください。

1. サブスクリプション管理のために、[Customers Portal](https://docs.gitlab.com/subscriptions/customers_portal/) (https://customers.gitlab.com/customers/sign_in) にログインするよう顧客に依頼します。
1. [GitLab.com アカウントがリンクされていることを確認するためのこれらのステップ](https://docs.gitlab.com/subscriptions/customers_portal/#change-the-linked-account) に従います。
1. [リンクされた namespace を更新するためのこれらのステップ](https://docs.gitlab.com/subscriptions/gitlab_com/#change-the-linked-namespace) に従います。

顧客の CustomersDot アカウントが GitLab.com アカウントにリンクされていない (CustomersDot アカウントの `uid` と `Gitlab user` が空) 場合、顧客に代わってアクションを取る必要があるなら、回避策として [サブスクリプションの強制関連付け](/handbook/support/license-and-renewals/workflows/customersdot/support_tools#force-associate) を試すことができます。

これらのいずれも顧客の Issue を解決しない場合、[オンコールサポートマネージャーに連絡](#optional-contact-the-on-call-support-manager) してさらなるガイダンスを要請してください。

### SaaS 緊急対応

これらの通話のワークフローは、self-managed 緊急対応と同じです: 成功とは、顧客のブロックが解除されることを意味します。場合によっては、顧客の問題を完全に解決できることさえあります。

SaaS 緊急対応に直面している顧客に対しては、承認を最初に得ることなく、ブロックを解除するために必要な任意の [二方向のドア](/handbook/values/#make-two-way-door-decisions) アクションを実行する権限を与えられています。

例:

- 手動でサブスクリプションレベルを設定する
- 追加のストレージを追加する
- 追加のコンピュート分を追加する
- フィーチャーフラグを切り替える

SaaS 緊急対応中、顧客が直面している問題に対する追加の可視性があります。

レビュー:

- [Kibana の使用](/handbook/support/workflows/kibana) - GitLab.com のログファイルを探索して、顧客が遭遇しているエラーを見つけます。
- [Sentry の使用](/handbook/support/workflows/sentry) - 顧客が遭遇しているエラーの完全なスタックトレースへのアクセスを取得します。

私たちは、緊急対応が大まかに 5 つのカテゴリのいずれかに該当することを期待しています:

- **GitLab.com に push された回帰による機能の破損**
  - 成功とは: 再現、特定、またはバグレポートの作成と、パッチが作成されデプロイされるためのエスカレーションを意味するかもしれません。
- **顧客固有のデータの不整合による機能の破損**、たとえば: グループ名は以前は特殊文字を持つことができたが、グループ名に特殊文字があるために何かが壊れた。
  - 成功とは、エラーを再現し、Sentry/Kibana で特定し、特定のデータを修正するためのエスカレーション (および私たちのコードがより良くなるためのバグレポートの作成) を意味するかもしれません
- **GitLab.com のアクセスまたは「パフォーマンス」の使用不能なレベルへの低下**、たとえば: 地理的エリアでのアクセス不能、CI ジョブがディスパッチされない。これは最も難しいクラスですが、一般的に運用上の緊急対応となります。
  - ここでの成功とは、上位 2 つの 1 つでないことを確認してから、[インシデントを宣言](/handbook/engineering/infrastructure-platforms/incident-management/#report-an-incident-via-slack) し、SRE チームが根本原因を診断して修正できるようにすることを意味します。

- **ライセンス／消費の問題が製品へのアクセスを妨げている**
  - ここでの成功とは、顧客のブロックが解除された状態にすることと、ライセンスチームが引き継ぎを取れるよう装備されていることを確保することを意味します。
- **広範囲のインシデントが複数の連続する PagerDuty アラートを引き起こす**
  - ここでの成功とは、[GitLab.com Status Page](https://status.gitlab.com) と本番 Issue を指す Issue にタグを付けて一括応答することを意味します。

#### 機能の破損

顧客が動作が最近変更されたと報告している場合、まず進行中のインシデントについて [GitLab.com Status](https://status.gitlab.com) と `#incidents` をチェックしてください。既知のインシデントがない場合:

1. 顧客との通話を開始します。具体的には以下を求めています:
   - 壊れた動作を観察する。
   - 既知の Issue、バグレポート、または同様の動作を報告している他の顧客がいるかを判断する。
   - 最近オンになったフィーチャーフラグがあるかを確認する ([GitLab.com のフィーチャーフラグの有効化](https://docs.gitlab.com/development/feature_flags/controls/#enabling-a-feature-for-gitlabcom) を参照)
   - 既存のバグレポートがない場合は、バグレポートを構築するために、顧客データを含まない再現手順を見つける／構築する。

##### 回帰またはフィーチャーフラグによる機能の破損

1. `~"type::bug"` Issue を作成し、顧客にレビューしてもらいます。
1. `~"type::bug"` Issue をエスカレートします
   - 新しいバグ、または [S1/S2 重大度](/handbook/product-development/how-we-work/issue-triage/#severity) のバグの場合、[InfraDev エスカレーションプロセス](/handbook/engineering/workflow/development-processes/infra-dev-escalation/) を使用してエスカレートします。ほとんどの場合、ロールバックパッチを生成して GitLab.com に適用します。
   - フィーチャーフラグの場合は、それをオンにした人と協力して [ChatOps を介して無効化](https://docs.gitlab.com/development/feature_flags/controls/#disabling-feature-flags) します。場合によっては、開発者を上げるために [InfraDev エスカレーションプロセス](/handbook/engineering/workflow/development-processes/infra-dev-escalation/) を使用する必要があります。
1. これが複数の顧客に影響している場合、[インシデントを宣言](/handbook/engineering/infrastructure-platforms/incident-management/#report-an-incident-via-slack) して、ステータスページを更新するインシデント対応チームを関与させます。
1. 元の機能が復元されたら、顧客に更新を通知します。

##### 顧客固有の何かによる機能の破損

1. 顧客のブロック解除のための最善の方法をレビューするために [サポートマネージャーオンコールにページ](/handbook/support/on-call/#engaging-the-on-call-manager) します。完全に調査／解決するには .com コンソールアクセスを持つ人が必要かもしれません。

##### インシデントによる機能の破損

既知のインシデントがある場合、公開ステータスページと関連するインシデント Issue へのリンクは許容されます。[`Support::SaaS::Gitlab.com::Incident First Response`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Incident%20First%20Response.md?ref_type=heads) の使用を検討してください。

##### チケット例

- [フィーチャーフラグが以前に動作していた動作を壊した](https://gitlab.zendesk.com/agent/tickets/204073): 解決策はフィーチャーフラグをオフにすることでした。
- [GitLab.com の回帰が以前に動作していたパイプラインを壊した](https://gitlab.zendesk.com/agent/tickets/147266): 解決策は最近デプロイされた MR を元に戻すことでした。
- [顧客が SAML 設定を変更してグループから自分自身を締め出した](https://gitlab.zendesk.com/agent/tickets/146611)

#### 消費の問題

##### コンピュート分のクォータが本番デプロイをブロックしている

顧客はコンピュート分を使い果たしたためにブロックされる可能性があります。

1. 追加のコンピュート分を購入するか、個別のランナーをセットアップするようアドバイスします。
1. あなたの裁量で、サービスとして、[ChatOps を介して namespace に追加の 1000 コンピュート分を設定](/handbook/support/workflows/chatops#setting-minutes-quota-for-a-namespace) します

##### 顧客がストレージクォータを超過した

顧客はストレージクォータを超過したためにブロックされる可能性があります。

1. 追加のストレージを購入するようアドバイスします
1. 欠陥や障害のために顧客が購入を完了できない場合、サービスとして、GitLab.com 管理者を持つ人がグループのストレージ制限を上書きできます。

#### 広範囲のインシデントが複数の連続する PagerDuty アラートを引き起こす

GitLab.com でインシデントが発生し、ステータスページに掲載されていない場合、SaaS 顧客が一括して緊急対応を発生させる可能性があります。
そのような状況での成功は二つあります:

1. インシデントを報告している顧客を、私たちのステータスページ、Twitter の `@gitlabstatus`、本番インシデント Issue にルーティングします。
1. アラートを整理して、進行中のインシデントとは無関係に発生した緊急対応がないことを確認します。

これが発生した場合:

1. 慌てないでください！ Slack と PD アラートが速く、頻繁に来る可能性があります。両方を一時的にサイレンスにして ZD に集中することを検討してください。
1. [インシデントが宣言されている](/handbook/support/workflows/cmoc_workflows/#how-incidents-are-declared) こと、およびインシデントが積極的に作業されていることを確認します。
1. ステータスページにまだ更新がない場合は、[CMOC](/handbook/support/workflows/cmoc_workflows/#how-incidents-are-declared) に緊急性を提唱します。
1. チケットの特定に役立つユニークなタグを選びます。インシデント番号の使用が一般的です。たとえば: `incident-12345`
1. ステータスページのインシデント、Twitter の `@gitlabstatus`、本番 Issue を指す一括応答を作成します。これらのいずれかがまだ利用できない場合、顧客に情報を伝えるためにそれなしで応答を送信できます。それらは将来の更新に含めることができます。
   - ドラフトした応答を `#support_gitlab-com` および最初の応答を提供している他の人と共有またはコーディネートします。インシデントについて非緊急のチケットも発生している可能性があります。同じ応答を使用することで、私たち全員が問題に関する顧客の問い合わせに応答する効率が向上します。
1. 少なくとも **1 つ** のチケットのタグフィールドに入力して送信することでタグを作成します。これを行わないと、Zendesk の一括編集ビューで利用可能として表示されません。
1. Zendesk 検索を使用して顧客が発生させた緊急対応を特定します:
   - [`priority:urgent order_by:created_at sort:desc`](https://gitlab.zendesk.com/agent/search/1?type=ticket&q=priority%3Aurgent%20order_by%3Acreated_at%20sort%3Adesc) はすべての緊急チケットを最近開かれた順に表示します
   - [`priority:urgent order_by:created_at sort:desc status:new`](https://gitlab.zendesk.com/agent/search/1?type=ticket&q=priority%3Aurgent%20order_by%3Acreated_at%20sort%3Adesc%20status%3Anew) はすべての **新しい** 緊急対応を表示します
   - **注意**: 各チケットがインシデントに関連していることを確認してください - そうでない場合は、[複数の同時緊急対応の処理](#handling-multiple-simultaneous-emergencies) に従ってください
1. すべてのオープンなチケットに応答するために、[Zendesk 一括更新](#using-zendesk-bulk-update) を使用します。

任意の時点で、PD アラートを ack/resolve できます。PagerDuty Web インターフェース経由でそれを行う方が速い場合があります。

インシデント中:

- *リンクする本番 Issue がまだない場合*: 問題に積極的に対処していること、および追跡 Issue が作成されたらすぐにそれへのリンクを提供してフォローアップすることを顧客に通知します。チケットを **Open** に設定します。Issue が利用可能になったら、顧客が Issue でフォローし、私たちがチケットを **Solved** とマークしていることを伝えるフォローアップノートを送信します。本番 Issue が閉じられた／インシデントが解決と宣言された後に問題が続く場合は返信するようにというノートを含めます。
- *リンクする本番 Issue がある場合*: 問題に積極的に対処していること、Issue でフォローすべきこと、私たちがチケットを **Solved** とマークしていること、および本番 Issue が閉じられた／インシデントが解決と宣言された後に問題が続く場合は返信するべきであることを顧客に通知します。

##### Zendesk 一括更新の使用

[Zendesk Bulk Update](https://support.zendesk.com/hc/en-us/articles/4408886890906-Managing-tickets-in-bulk#topic_oth_lkp_gk) は、チケットを一括編集して応答する方法です。インシデント中、それを使用して以下のことができます:

- チケットを自動的にタグ付けする
- 一括応答を送信する
- ステータスを *まとめて* 設定する

以下の手順でチケットを一括編集できます:

1. Zendesk 検索から 1 つ以上のチェックボックスをクリックします
1. 右上の "Edit `n` tickets" をクリックします
1. 更新したいチケットのプロパティを編集します。インシデント中は、おそらくこうなります:

- 公開返信
- チケットタグ

1. 適切なステータス変更で Submit をクリックします

![ZD Bulk Update View](/images/support/zd-bulk-update.png)

### US Government オンコール

US Government オンコールサポートは、12x5 US Gov サポートを購入した premium および ultimate 顧客で発生する [severity one](https://support.gitlab.com/hc/en-us/articles/11626416629660-Definitions#severity-1--urgent) Issue について、太平洋時間の 0500 〜 1700 の時間に週 7 日提供されます。high と緊急のカバレッジに 24x7 ultimate を選択した顧客は、いつでもページできます。

現在のオンコールスケジュールは [PagerDuty](https://gitlab.pagerduty.com/schedules#P89ZYHZ)(内部リンク) で表示できます。スケジュールは現在 3 つの 8 時間シフトに分割されており、これらはおおよそデイシフト、夕方、深夜のチームメンバーの時間と相関しています:

- デイシフト: 05:00 〜 13:00 PT
- 夕方: 13:00 〜 21:00 PT
- 深夜: 21:00 〜 05:00 PT

顧客は、メールまたは US Government サポートポータルの緊急フォームを使用して緊急対応を送信することが許可されています。

#### US Government におけるオンコールシフトカバレッジ

サポートエンジニアがスケジュールされたオンコールシフトのカバレッジが必要な場合、`us-gov-oncall-coverage` テンプレートを使用して Support Team Meta で Issue を開いてください。

**休日でない平日** にカバレッジが必要なデイシフトエンジニアは、シフトを Support Bot に与えることができます。これを行うには、`us-gov-oncall-coverage` テンプレートを使用して Support Team Meta で Issue を開き、レビューのためにマネージャーをメンションします。問題のシフトが週末や休日に該当しないことを確認した後、PagerDuty で自分のシフトのオーバーライドを削除し、bot ユーザーにフォールバックすることを確認します。

#### オンコール時間外の緊急対応

24x7 対応外の顧客が [Government Support の業務時間](https://about.gitlab.com/support/us-government-support/#hours-of-operation) 外に緊急ケースを送信した場合、以下が発生します:

- #spt_us-government チャンネルで Slack 通知がトリガーされ、業務時間外の緊急対応をチームに通知し、業務時間開始時にフォローアップが必要であることを示します
- `Off hours emergency request` トリガーは、チケット送信者に時間外であることを知らせ、Global support で緊急ケースを作成するか、次の業務時間開始時に US Government サポートのフォローアップを待つかのオプションを与えます

##### 時間外緊急対応への対応

12x5 時間外に作業しているチームメンバーは、エンジニア自身の裁量で、本番緊急事態にある顧客にサポートを提供することを選択できます。これらに対処する際は、以下の点を顧客と明確にすることが重要です:

- 顧客はサブスクリプションに基づいて 24x7 サポートの権利がない
- 緊急サポートはエンジニアの可用性に基づく一回限りの例外として提供されており、将来の時間外サポートは保証されない

応答するエンジニアはまた、自分のマネージャーをフォロワーとして追加し、時間外サポートが提供されていることを内部ノートで示すべきです。これは、適切なフォローアップが顧客のアカウントチームと一緒に確実に行われるのに役立ちます。

#### Global の US Gov 緊急対応

12x5 サポートパッケージを持つ US Government 顧客は、組織のポリシーが米国市民でない人とのやり取りや情報共有を許可している場合、時間外の緊急対応のためにグローバルサポートポータルを使用することが許可されます。US Gov サポートチームは、特定のケースが US Government サポートの権利を持つユーザーまたは組織に属するかどうかを **確認も否定もできません**。グローバルサポートポータルで提出された緊急対応に応答できる人に関する要件や制限はありません。ユーザーが米国市民を求める場合は、米国市民権が保証されないグローバルサポートポータルを使用していることを思い出させ、それが要件である場合は今後のコミュニケーションのために US Government Support ポータルを使用すべきであることを伝えてください。

### GitLab Dedicated 緊急対応

[GitLab Dedicated](https://docs.gitlab.com/subscriptions/gitlab_dedicated/) からの緊急対応は、顧客緊急オンコールローテーションを通じて来ます。適切なエスカレーションとハンドオフを確保するために、このワークフローに従うことができます:

#### 評価

1. 緊急対応を Acknowledge し、自分自身を DRI として割り当てます
1. Issue の性質 (インフラストラクチャ、可用性、パフォーマンス低下) を評価します
1. [GitLab Dedicated ハンドブック](/handbook/support/workflows/dedicated) を [ログでの作業](/handbook/support/workflows/dedicated_logs) と [可観測性ダッシュボードの表示](/handbook/support/workflows/dedicated_instance_health/) に関する情報を確認します
1. 顧客のトラブルシューティング手順で Issue を解決できるか、または Dedicated SRE の専門知識が必要かを判断します。追加の支援のために GitLab Dedicated に焦点を当てている GitLab サポートチームのメンバーに ping するために、`@spt_focus-dedicated` Slack ハンドルの使用を検討してください

#### Dedicated チームの関与

1. Issue が Dedicated SRE の関与を必要とする場合、[エスカレーションプロセス](/handbook/support/workflows/dedicated#raise-a-dedicated-incident) に従って、Site Reliability Engineer (SRE) オンコールを関与させます
1. SRE に以下を提供します:
   - 顧客の Issue と影響の明確な説明
   - 収集したログ、スクリーンショット、または診断情報
   - 顧客の現在のステータスと期待

#### GDCMOC へのハンドオフ

1. Dedicated SRE チームが積極的に関与し、インシデントの所有権を取った後:
   - SRE が必要なすべての情報を持っていることを確認します
   - 顧客の [コミュニケーション](/handbook/support/workflows/dedicated_cmoc#modes-of-communication) が必要な場合、[GitLab Dedicated Communications Manager on Call (GDCMOC)](/handbook/support/workflows/dedicated_cmoc#engaging-the-gdcmoc) に通知します
   - すでに顧客との通話中の場合、通話を終了することと、必要に応じて GDCMOC が非同期でさらなる更新を提供することを伝えます
   - 内部ノートでチケット内のハンドオフを文書化します
1. SRE がアクティブな DRI であることを確認したら、緊急チケットを閉じます
1. GDCMOC が以下に責任を持ちます:
   - 進捗について顧客に情報を提供し続ける
   - Switchboard または Zendesk 経由でステータス更新を送信する
   - SRE チームが解決に取り組んでいる間、顧客とのコミュニケーションを管理する

### Advanced または Signature Success Tier の顧客への 24/7 カバレッジのサポート - フェーズ 1

カスタマーサポートは、GitLab の Advanced および Signature Success Tier に加入している顧客に 24/7 のカバレッジを提供します。これらのプレミアムティアには [Customer Success Architect (CSA)](/handbook/customer-success/csm/segment/csa/) へのアクセスが含まれており、Severity 2 の Issue (Zendesk で High Priority チケットとしてラベル付け) には継続的なサポートとより速い応答時間が必要です。

| Success Tier | カバレッジ                                   |
| ------------ | ------------------------------------------ |
| Advanced     | - 24/7 High Priority カバレッジ              |
| Signature    | - 24/7 High Priority カバレッジ<br>- 2hr SLA |

#### 週末カバレッジ

2025 年 5 月開始で、既存のオンコールローテーションスケジュールで管理される `@ceoc` は、これらのチケットの週末カバレッジを一時的に担当します。これは、私たちが最初の応答を提供し、週末に顧客が重大なシナリオに陥らないようにする必要があることを意味します。永続的な 24/7 役割のために雇用された専任エンジニアのチームは、この期間をオンボーディングとトレーニングに使用します。これは、[STM#6743 24/7 シフトの役割とその実装](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6743) でさらに詳述されている 3 段階アプローチのフェーズ 1 です。

#### PagerDuty アラート

2025-05-01 から、2 つの success tier のいずれかを持つ顧客から受信した High Priority チケットの PagerDuty アラートが週末にトリガーされます。[CEOC](#key-responsibilities-for-customer-emergency-on-call) は、Zendesk で明確に記載される顧客の権利に応じて、上記の SLA 内にこのチケットにアクションを取る必要があります。

#### チケットの割り当てと処理

会社として、特に Success Tier の顧客からの High Priority チケットを緊急性とアクションを持って扱いたいと考えています。

1. シフトを開始するときは、注意が必要な、退出する CEOC からの緊急対応または High priority チケットを引き継いでください。
1. High priority チケットでページされた場合は、チケットの優先度を下げる方向に作業することで、チケットを高優先度にしている部分の解決に取り組んで顧客と一緒に作業します。
1. 週末にチケットの割り当てを解除する必要はありません。継続的な注意が必要なチケットは、[PD アラート](/handbook/support/on-call/#engaging-the-next-on-call-support-engineer) を使用して入ってくる CEOC に引き継ぎ、安全な状態のチケットは退出する CEOC に割り当てたままにしておくべきです。

##### Assigned Support Engineer (ASE) を持つ顧客

以下のケース:

- [assigned support engineer](/handbook/support/enhanced-support-offerings/offering-assigned-support-engineer/) が顧客のチケットを自動的に自分自身に割り当てるようオプトインしている、かつ
- 顧客が週末に "Sev 2" (Severity 2) チケットを作成する。

これにより:

1. チケットの CEOC ページが生成され、かつ
1. ASE がチケットに割り当てられます。

CEOC は、ASE に割り当てられているかもしれませんが、そのようなチケットに応答する必要があります。Success Tier 顧客のすべての未解決、High Priority チケットは、レポート: *All Success Tier Customers' Unsolved Severity 2/High Tickets* で [24-7 Success Tier Coverage](https://gitlab.zendesk.com/explore/studio#/dashboards/06E115D8E3D0A86B89012F8C2FF9C3713331EF2CA24A3B7677CB8B355D061ACE) Zendesk Explore ダッシュボードで表示できます。

顧客チケットがデエスカレートされ、Severity 2/High Priority Issue でなくなったら、[チケットの優先度をリセット](/handbook/support/workflows/setting_ticket_priority/#resetting-ticket-priority) し、標準の業務時間中に引き続き作業を行うことを顧客に伝えます。

サポートマネージャーオンコールは常にあなたを支援するために対応可能です。[これらのステップ](/handbook/support/on-call/#engaging-the-on-call-manager) に従って [サポートマネージャーオンコール](/handbook/support/workflows/support_manager-on-call) を支援に関与させてください。

#### ロールアウトとモニタリング

フェーズ 1 の推定タイムライン: チケット数と顧客の採用に応じて 1〜2 か月。

**Zendesk Explore ダッシュボード:** [24-7 Success Tier Coverage](https://gitlab.zendesk.com/explore/studio#/dashboards/06E115D8E3D0A86B89012F8C2FF9C3713331EF2CA24A3B7677CB8B355D061ACE)

これは Zendesk ダッシュボード [24-7 Success Tier Coverage](https://gitlab.zendesk.com/explore/studio#/dashboards/06E115D8E3D0A86B89012F8C2FF9C3713331EF2CA24A3B7677CB8B355D061ACE) でマネージャー DRI (@erikamiklos (EMEA)、@ralfaro (AMER)、@kslaats (APAC)) によって綿密にモニターされています。

### SIRT 緊急対応

侵害された self-managed インスタンスや GitLab.com グループに関する緊急対応が発生した場合、以下のいずれかのワークフローに従って SIRT チームを関与させることができます。

#### GitLab.com SIRT 緊急対応

GitLab.com 関連の SIRT 緊急対応については、この [ワークフロー](../../security/customer-requests.md) に従って直接 SIRT インシデントを発生させることができます。[このプロセス](../../security/customer-requests.md#process-outline) の一環として、これは SIRT で Issue を作成します。

SIRT Issue が作成されたら、[優先順位付け SLA](https://internal.gitlab.com/handbook/security/security_operations/sirt/operations/incident_response/customer_incident_response/#prioritisation) を確認し、ログを期待できる時期を顧客に通知します。

顧客が SIRT からのログを緊急に必要とする場合、[サポートマネージャーオンコールを関与させ](../on-call.md#engaging-the-on-call-manager) て、Issue を SIRT でエスカレートすべきかを判断します。

#### Self-managed SIRT 緊急対応

Self-managed SIRT 緊急対応については、Issue を軽減し、フォレンジックデータを収集するために、以下のステップに従うよう顧客に依頼してください。

1. インスタンスをすぐにシャットダウンします。
1. 同じバージョンで新しいインスタンスを作成し、最新のバックアップをそれに復元します。
   - 新しいインスタンスをインターネットに露出することを避けてください
   - `gitlab-secrets.json` のコピーがない、または利用可能なバックアップが `/var/opt/gitlab/backups` のみに保存されている場合、侵害されたインスタンスのボリュームをマウントしてそれを取得します。
1. 新しいインスタンスのシークレットをローテーションします:
   - `gitlab.rb` 内のすべてのシークレット (LDAP/メールパスワードなど)
   - API キーやリモートサーバー認証情報など、CI ジョブのすべてのシークレット
   - GitLab Runner 登録トークンと Runner 環境変数
1. このインスタンスを侵害するために使用されたエクスプロイトが既知の場合は、その修正が含まれるバージョンに **新しいインスタンス** をアップグレードするか、既知のパッチ／回避策を適用します。
   - 組織が公開アクセスを必要とする場合は、新しいインスタンスが適切に保護された後にネットワークアクセス制限を削除します。
1. フォレンジックと追加のデータ復旧のために侵害されたインスタンスを保持します。
1. 潜在的な緊急対応について [サポートマネージャーオンコールに通知](../on-call.md#engaging-the-on-call-manager) し、ログ分析、コンサルティング、フォレンジック分析、インシデント対応、検出エンジニアリングのために [SIRT インシデント](https://internal.gitlab.com/handbook/security/cross_functional_runbooks/customer_security_incidents/#runbook) を発生させるべきかを評価します。

サポートマネージャーオンコールに連絡を取らずに通話を提案したり参加したりしないでください。チケットを通じて顧客と一致して期待値を設定するためです。

### 特別な処理に関する注意

特別な処理が必要なケースがいくつかあります。緊急ページがこれらのカテゴリのいずれかに該当する場合は、これらの特別な処理手順に従ってください。緊急対応が特別だと思うが下記に挙げられていない場合は、最善のアプローチについて助けを得るためにサポートマネージャーオンコールにつながってください。

#### 同日購入の単一ユーザー

緊急対応を発生させるためだけに単一ユーザーの GitLab ライセンスを購入するという、文書化されたケースがいくつかあります。そのようなケースに遭遇した場合、通話を提案する前にサポートマネージャーオンコールを関与させてください。

### 顧客緊急オンコールトレーニングリソース

#### 顧客緊急シャドー PagerDuty スケジュール

[顧客緊急シャドースケジュール](https://gitlab.pagerduty.com/schedules#PLNQAAB) は、顧客緊急オンコールになる前に学ぶために顧客緊急対応をシャドーイングしたい人なら誰でも使用できます。シャドーローテーションに自分を追加するには、マネージャーに相談してください。ローテーションスケジュールを変更するには、マネージャーに相談してください。短期間シャドーするには、*Schedule an Override* をクリックし、*Custom duration* をクリックし、タイムゾーンと開始・終了の日付・時刻を選択し、*Create Override* ボタンをクリックして変更を保存します。オーバーライドを削除するには、画面右側の **Upcoming Overrides** リストで削除するオーバーライドの **x** をクリックします。
