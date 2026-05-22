---
title: "CSM として Calendly を活用する"
description: "Customer Success Manager が Calendly を使って顧客からのミーティングリクエストを管理するためのベストプラクティスとセットアップガイド。"
upstream_path: /handbook/customer-success/csm/calendly/
upstream_sha: eff3a749f8927544a08073e8f660283a5d80478b
translated_at: "2026-05-22T21:55:06Z"
translator: claude
stale: false
lastmod: "2026-05-22T18:37:20+00:00"
---

CSM 関連のほかのハンドブックページについては、[CSM ハンドブックホームページ](/handbook/customer-success/csm/) を参照してください。

---

*ミーティングの録画に使うツール Chorus の概要は、[Gainsight 概要ページ](/handbook/sales/field-operations/sales-operations/go-to-market/chorus/) を参照してください。*

## Customer Success Manager 向け Calendly のセットアップ

CSM は、アドホックなミーティング予約に関する顧客からのリクエストを効率的にさばくために Calendly を利用しています。

### 静的リンクのための Chorus 初期セットアップ

Calendly が GDPR やそれに類するプライバシー法に準拠するように、Chorus の Recorder ライセンスを持つすべてのチームメンバーは、顧客とのミーティングを設定する際に Chorus Scheduler という機能を使う必要があります。Calendly 経由で予約されるイベントで Chorus Scheduler を使うために必要な手順は以下のとおりです。

- 静的リンクを Chorus Scheduler から作成する方法については、[Chorus.ai の使い方](/handbook/sales/field-operations/sales-operations/go-to-market/chorus/#chorus-scheduler) を参照してください。
- 静的リンクの作成・確認手順
  - [Zoom PMI](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0066271) を Chorus Scheduler 設定でリンクします（1 回のみ）
  - 次に、Google カレンダーでテストイベントを作成し、「ビデオ会議を追加」をクリックして Chorus Meeting を選択します。これで Chorus Go の静的リンク（ドメイン: go.chorus.ai）を確認できます。
  - ![static-chorus-go-link](/images/customer-success/csm/calendly/grab-static-chorus-go-link.png)

### Calendly イベントタイプの作成

顧客がミーティングに適した時間の長さやトピック・フォーカス領域を選べるよう、Calendly には複数のイベントタイプを作成することを推奨します。以下は、複数のイベントタイプを持つ CSE の Calendly ホームページの例です。

![calendly-home-example](/images/customer-success/csm/calendly/calendly-home-example.png)

#### Calendly イベントの作成手順

- Calendly にログインし、すべてのイベントタイプを確認します: https://calendly.com/event_types/user/me
  - [Create New Event Type ボタン](https://calendly.com/event_types/new) をクリックし、One-on-One を選択します
  - *イベント名*: 時間の長さや特定のトピック・フォーカスに基づいて名前を付けます（例: New Customer: Onboarding Call）
  - *場所*: Custom（Zoom PMI から生成した Chorus Scheduler の静的リンクを使用）
    - 次に、Calendly イベント設定の Location フィールドに go.chorus.ai のリンクを追加します。
      - *重要*: Calendly 経由で予約する人は、ミーティングごとに自動生成されるユニークなミーティング ID ではなく、同じ場所のリンクを使ってイベントを予約することになります。Zoom Personal Meeting が GitLab の [プライバシー・セキュリティ](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-security) ベストプラクティスに従っていることを必ず確認してください。

      - 確認後にのみ場所を表示するオプションを必ず選択してください
      - ![calendly-location](/images/customer-success/csm/calendly/calendly-location-chorus-go.jpeg)

- *説明・指示*（以下の推奨テキストを追加してください）

  > **このフェイス・トゥ・フェイスのミーティングは録画される場合があります。このミーティング招待にアクセスするにはブラウザが必要です。ブラウザにアクセスできない場合は、ミーティング主催者にご連絡ください。
  >
  > Chorus.ai 経由で Zoom ミーティングに参加します
  >
  > `_______________________________`
  >
  > 録画に関する免責事項: このミーティングは [Chorus.ai](https://www.chorus.ai) によって録画されます。このミーティング招待を承諾するか、ミーティングルームに参加することで、録画に同意したものとみなされます。

- *このイベントはいつ予約できますか?*
  - 日付範囲: 60
    - *ベストプラクティス*: 自分の個人的な時間や集中時間を守るため、PTO、休日、ビジータイムでカレンダーを常に最新にしておいてください。
  - 所要時間: 各イベントタイプで希望するミーティングの長さ
    - ベストプラクティス: [スピーディなミーティングを推奨](/handbook/communication/#scheduling-meetings) しているので、例えば 15 分、25 分、50 分を使ってください。
  - このイベントタイプの予約可能枠をどのように提供しますか?
    - 既存のスケジュールを使用
    - このイベントタイプにどのスケジュールを使用しますか?
      - [Working hours](https://help.calendly.com/hc/en-us/articles/360055073694-How-to-set-up-and-edit-your-available-hours-)
- イベントの前後に時間を追加しますか?
  - イベント前: 15 分
- (Additional rules for your availability セクション・リンクを展開)
  - 開始時刻の刻み: 30 分（顧客に予約オプションを多く提供できます）
  - スケジューリング条件
    - 招待者がイベント開始時刻の 2 日以内には予約できないように設定
      - ベストプラクティス: 新入社員やオンボーディングを終えたばかりの場合、2 日あれば顧客のリサーチ、サポートチケットや GitLab Issue のレビュー、必要に応じたアカウントチームとのすり合わせに十分な時間が取れます。また、顧客が週末に時間を予約しても、例えば月曜日の朝一番にコールが入らないようバッファを確保できます。
      - 変更時のメモ: ロールに慣れて十分な経験を積んだら、予約をより多く促すために、2 日を 1 日に短縮することを検討してください。
  - このイベントタイプで 1 日に許可するイベント数の上限: 2
    - ベストプラクティス: メモや録画のレビュー、フォローアップのリサーチ開始、そして CSM としてのほかの業務（ウェビナーの Q&A 支援、専門的な成長、社内ミーティング、集中時間など）に必要な時間と余裕を確保できます。
  - タイムゾーン表示: 自動検出
  - シークレットイベント: 無効
