---
title: "Chorus.ai の使い方"
upstream_path: /handbook/sales/field-operations/sales-operations/go-to-market/chorus/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-12T00:00:00Z"
translator: claude
stale: false
---

Chorus の使い方に戸惑っていますか？この重要なセールスツールを最大限に活用する方法については、以下の手順とリンクをご確認ください。

## Chorus とは

[Chorus](https://www.chorus.ai/) は、顧客対応チームメンバー向けの通話・デモ録画ソフトウェアです。このツールはキーワードを追跡し、分析を提供し、通話を Salesforce と Outreach の両方に文字起こしします。Chorus は、新規チームメンバーのオンボーディング、既存チームメンバーへの継続的なトレーニングと能力開発、Sales 以外の従業員へのセールスコールへのアクセス提供、顧客対応チームメンバーが通話やデモの特定のポイントを思い出すために使用されます。

## Chorus へのログイン

Chorus にログインするには、[Okta ダッシュボード](https://gitlab.okta.com/app/UserHome) で Chorus SSO タイルをクリックしてください。ログインできない場合は、サポートを受けるために #chorus-users Slack チャンネルに投稿してください。

## Chorus トレーニング & イネーブルメント

- Chorus を利用する前に、[GitLab の SAFE フレームワーク](/handbook/legal/safe-framework/) に慣れておいてください。

- すべての ROW チームメンバーは、Recorder アクセスを付与されるために [Chorus GDPR トレーニング](https://gitlab.edcast.com/insights/chorus-ai-compliance) を完了する必要があります。マネージャーが [Baseline Role-Based Entitlement](https://internal.gitlab.com/handbook/security/corporate/end-user-services/access-request/baseline-entitlements/) を提出すると、SalesOps はチームメンバーに EdCast の Chorus トレーニングのリンクを提供します。

  - チームメンバーがトレーニングを完了したら、Chorus 内のライセンスを Recorder ライセンスに更新するように SalesOps に通知します。
  - SalesOps は [EdCast レポート](https://edcast-536.domo.com/page/1681897168/kpis/details/58622395) を通じてコース完了を確認します。

### Chorus Scheduler

GDPR や同様のプライバシー法に準拠するため、Chorus で Recorder ライセンスを持つすべてのチームメンバーは、顧客とのミーティングを設定する際に Chorus Scheduler という機能を使用する必要があります。Chorus Scheduler は Go-Link を作成し、参加者を所在地に応じたコンプライアンス取得用の指定ランディングページにルーティングします。これにより、ミーティングホストはミーティング録画について参加者から明示的な同意を得ることができます。ミーティングホストが顧客とのミーティングに Chorus Scheduler を使用しない場合、Chorus はそのミーティングを録画しません。Chorus Scheduler の使い方の手順については、[この 3 分のデモ](https://drive.google.com/file/d/1toKxvu2DKqxF9Oo_8eogTZgPRUSAyIIp/view?usp=sharing) を視聴し、追加情報については [Call Compliance with Chorus Schedulers のデック](https://drive.google.com/file/d/1U7VCxuQk1MtLTZ88XLdQt7y1_VBMYe8d/view?usp=sharing) を参照してください。

- 顧客から Zoom や Google Meet 以外の会議プラットフォームの使用を求められた場合は、[Call Compliance with Chorus Schedulers のデック](https://drive.google.com/file/d/1U7VCxuQk1MtLTZ88XLdQt7y1_VBMYe8d/view?usp=sharing) の Static Link Flow スライドの指示に従ってください。

- ご自身がミーティングの参加者で録画を行いたい場合は、[Chorus App for Zoom](https://university.zoominfo.com/chorus-zoom-integration-made-easy) をダウンロードできます。このアプリを使えば、Zoom を離れることなく、進行中の通話に Chorus を追加してミーティングを録画し、メモを取ることができます。現地のプライバシー法を遵守するために、録画前に顧客から口頭で同意を得る必要があります。顧客が録画に同意しない場合、ミーティングを録画することはできません。

  Chorus App for Zoom のトラブルシューティングについては、以下の手順に従ってください。

  1. [Okta](https://gitlab.okta.com/app/UserHome?iss=https%3A%2F%2Fgitlab.okta.com) 経由で Zoom SSO を開く
  2. Settings をクリックして Zoom Apps をクリック
  3. "Zoom Apps Quick Launch Button" がオンになっていることを確認
  4. デスクトップアプリで Zoom ミーティングを開く
  5. これで Chorus App が表示され、ツールを利用できるはずです

## セキュリティとプライバシー管理

Chorus に録画された通話のデータ保持ポリシーは、2022 年 9 月 27 日時点で 365 日です。

365 日のデータ保持ポリシーを回避することになるアクションは、GitLab の Legal チームの承認が必要です。これには以下を含みますが、これらに限定されません。

- LevelUp に録画のスニペットを無期限で保存する
- 録画をダウンロードする
- 365 日のデータ保持期間を超えて録画を保持する

**365 日を超えて録画を保持する必要がある特別な事情がある場合は、[`Legal Issue - Chorus_Approval template`](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues/new) を提出し、指示に従ってください。365 日後に削除される通話に関する自動リマインダーは届かないため、できるだけ早く保存のための Legal Issue を提出することがベストプラクティスです。**

**承認をリクエストする際は、以下の点に注意してください。**

- 録画を保持するリクエストは、*365 日の保持期間終了の 15 日前まで*に Legal に到達する必要があります。たとえば、5 月 1 日に作成された録画が 365 日後に自動的に削除される場合、保持リクエストは 4 月 15 日までに Legal に到達する必要があります。保持期間終了の 14 日以内に提出されたリクエストは、時間内にレビューされず承認されない可能性があることに注意してください。
- プレイリストに保存されたスニペットは保持されます。
- 通話自体に保存されたスニペットは、保持ポリシーに従って削除されます。

その他の注目すべき項目:

- Chorus リンクを共有する場合は、パスワードを必須とするか、リンクが期限切れになるよう設定する必要があります。各ユーザーは個別にこのアクションを完了する必要があります。
- ベストプラクティスとして、Issue に Chorus 録画や顧客情報を含める必要がある場合は、まず Issue を `Confidential` としてマークしてください。
  - 詳細については、[この Issue](https://gitlab.com/gitlab-com/gl-security/security-operations/sirt/operations/-/issues/1560#note_702890753) を参照してください。
- [Chorus コンプライアンスリソース](https://help.zoominfo.com/s/article/Chorus-Compliance-Center-Explained)

## Chorus Tracker とは何か、どうやって作成するか

Tracker は、セールス会話全体でハイライトしたいキーワードやフレーズです。これらは、たとえば競合の言及や顧客フィードバックの追跡に使用できます。

マネージャーは、Chorus Tracker Request テンプレートを使用して [Sales Operations プロジェクト](https://gitlab.com/gitlab-com/sales-team/field-operations/sales-operations/-/issues/new?issue%5Bmilestone_id%5D=#) に Issue を提出することで、Chorus Tracker の作成を依頼できます。Chorus Tracker を作成してほしい個人コントリビューターは、マネージャーと連携してマネージャーにリクエストを提出してもらえます。

## Swim レーン

### Recorder アクセス

- US SAE および AE
- US CSM および SA
- [Chorus GDPR トレーニング](https://university.gitlab.com/learn/course/chorusai-recording-compliance-training-1/chorusai/overview?client=internal-team-members) を完了した ROW の SAE、AE、CSM、SA

### Listener アクセス

- すべての SDR/BDR チームメンバー
- すべての Public Sector チームメンバー
- Operations 担当、および所属組織を問わずすべてのマネージャーを含む、顧客対応以外の役割のすべての GitLab チームメンバー
- GitLab チームメンバーは、[アクセスリクエスト](/handbook/security/corporate/end-user-services/access-requests/access-requests/#how-do-i-choose-which-template-to-use) を通じて Listener アクセスを要求でき、ケースバイケースで付与される場合があります。

## なぜミーティングが「Livestreamed」されるのか？

![live-on-zoom](/images/sales/field-operations/sales-operations/go-to-market/chorus/live-on-zoom.png)

"Live on Zoom with Chorus.ai" のバナーは Zoom によって制御・設定されているため、Chorus も GitLab もテキストを変更することはできません。

- このバナーは、ミーティングが Chorus.ai によってアクティブに録画されており、GitLab の Chorus.ai 用データ保持ポリシーに従って 90 日間 Chorus.ai プラットフォーム内に保存されることを意味します。
- ミーティングの録画をいつでも停止するには、"Live on Zoom with Chorus.ai" の隣のドロップダウンをクリックし、"Stop Live Stream" を選択してください。次に四角い停止記号をクリックして録画を完全に停止します。

## ブレイクアウトルームでの録画

- Chorus はブレイクアウトルームを取得せず、メインの Zoom ミーティングのみが取得されます。
- 注意: デフォルトで Chorus は通話中の沈黙に関するルールを持っています。参加者が通話の途中で 5 分以上ブレイクアウトルームに入った場合、Chorus はミーティングが終了したと判断し、沈黙を理由に通話から離脱します。

## Chorus.ai の基本

- [Chorus の Personal Settings](https://chorus.ai/settings/personal-settings) でメールコミュニケーションの設定を更新する
- [Getting Started with Chorus](https://university.zoominfo.com/getting-started-with-chorus)
- [Chorus Set Up Made Easy](https://university.zoominfo.com/chorus-set-up-made-easy)
- [Chorus Best Practices: Deals & Momentum](https://university.zoominfo.com/chorus-best-practices-deals-momentum)

## Chorus.ai のリソース

- [ミーティングから Chorus を削除する方法](https://www.loom.com/share/a6513ac235ae4eb9acaaeb167d7583ce)
- [Livestream & Recording Notifications](https://drive.google.com/file/d/135LWz_6u6vgJPVriIoEa3qOYOa4YkM_b/view)
  - Chorus がそこにいる理由、なぜ録画しているのかを説明する方法
- [セキュリティ & コンプライアンス](https://www.chorus.ai/trust)
  - 必要に応じて顧客と共有
- [Chorus FAQs](https://help.zoominfo.com/s/)
- [Chorus YouTube チャンネル](https://www.youtube.com/c/Chorus_ai/videos)

## Chorus.ai の高度な利用方法

- Chorus Release Notes（現在は利用不可）
- [Chorus Integrations](https://help.zoominfo.com/s/article/Overview-of-Chorus-Screen-Share-Providers)

Chorus に関する追加のサポートが必要な場合は、#chorus-users Slack チャンネルにお問い合わせください。
