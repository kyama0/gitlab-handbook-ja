---
title: "CSM として Calendly を活用する"
description: "Customer Success Manager が Calendly を使用して顧客からのミーティングリクエストを管理するためのベストプラクティスとセットアップガイドです。"
upstream_path: /handbook/customer-success/csm/calendly/
upstream_sha: b4eeb07f0d5f46e2fc5f8572be1a2547261aed89
translated_at: "2026-04-26T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-07-28T09:37:14+01:00"
---

追加の CSM 関連ハンドブックページについては、[CSM ハンドブックホームページ](/handbook/customer-success/csm/)をご覧ください。

---

*ミーティングの録音に使用するツール Chorus の概要については、[Gainsight 概要ページ](/handbook/sales/field-operations/sales-operations/go-to-market/chorus/)をご参照ください。*

## Customer Success Manager/Engineer 向け Calendly のセットアップ

CSM と CSE は Calendly を使用して、顧客からのアドホックなミーティング予約リクエストを効率的に管理します。

### スタティックリンクのための Chorus 初期セットアップ

Calendly が GDPR および類似のプライバシー法に準拠して設定されていることを確認するため、Chorus でレコーダーライセンスを持つすべてのチームメンバーは、Calendly を通じてスケジュールされた顧客とのミーティングを整理する際に Chorus Scheduler という機能を使用する必要があります。Calendly 経由で予約されたイベントに Chorus Scheduler を使用するために必要な手順は以下のとおりです。

- Chorus Scheduler からスタティックリンクを作成する方法については、[Chorus.ai の使い方を学ぶ](/handbook/sales/field-operations/sales-operations/go-to-market/chorus/#chorus-scheduler)をご覧ください。
- スタティックリンクを作成/確認するには:
  - Chorus Scheduler の設定で [Zoom PMI](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0066271) をリンクする（一度だけ）
  - 次に、Google カレンダーでテストイベントを作成し、「ビデオ会議を追加」をクリックし、「Chorus ミーティング」を選択します。その後、Chorus Go のスタティックリンク（ドメイン: go.chorus.ai）を確認できます。
  - ![static-chorus-go-link](/images/customer-success/csm/calendly/grab-static-chorus-go-link.png)

### Calendly イベントタイプの作成

顧客がミーティングの適切な時間の長さや特定のトピック/焦点領域を選択できるよう、Calendly に複数のイベントタイプを作成することをお勧めします。以下は、異なるイベントタイプを持つ CSE の Calendly ホームページの例です。

![calendly-home-example](/images/customer-success/csm/calendly/calendly-home-example.png)

#### Calendly イベントの作成手順

- Calendly にログインし、すべてのイベントタイプをここで確認します: https://calendly.com/event_types/user/me
  - [新しいイベントタイプ作成ボタン](https://calendly.com/event_types/new)をクリックし、「1 対 1」を選択する
  - *イベント名*: 時間の長さや特定のトピック/フォーカスに基づいてイベントに名前を付ける（例: 新規顧客: オンボーディングコール）
  - *場所*: カスタム（Zoom PMI から生成された Chorus Scheduler のスタティックリンクを使用）
    - 次に、Calendly のイベント設定の「場所」フィールドに go.chorus.ai リンクを追加します。
      - *重要な注意事項*: Calendly 経由で予約した場合、ミーティングごとに自動生成される固有のミーティング ID の代わりに、予約者は全員同じ場所リンクを使用します。Zoom 個人ミーティングが GitLab の[プライバシーとセキュリティ](/handbook/security/corporate/end-user-services/supported-apps/zoom/zoom-security)のベストプラクティスに従っていることを確認してください。

      - 確認後にのみ場所を表示するを選択してください。
      - ![calendly-location](/images/customer-success/csm/calendly/calendly-location-chorus-go.jpeg)

- *説明/インストラクション*（以下の推奨テキストを追加）

  > **この対面ミーティングは録画される場合があります。このミーティング招待にアクセスするにはブラウザが必要です。ブラウザにアクセスできない場合は、ミーティング主催者にご連絡ください。**
  >
  > Chorus.ai 経由で Zoom ミーティングに参加します。
  >
  > `_______________________________`
  >
  > 録音に関する免責事項: このミーティングは [Chorus.ai](https://www.chorus.ai) で録音されます。このミーティング招待を承諾するか、ミーティングルームに参加することで、録音に同意したものとみなされます。

- *このイベントをいつ予約できますか？*
  - 日付範囲: 60
    - *ベストプラクティス*: PTO、祝日、ビジーブロックを含めてカレンダーが常に最新の状態に保たれ、個人の時間/集中時間が確保されていることを確認してください。
  - 時間: イベントタイプに希望する会議時間の長さ
    - ベストプラクティスのメモ: [スピーディーなミーティングを推奨する](/handbook/communication/#scheduling-meetings)ため、例えば 15、25、50 分を会議時間の長さとして使用してください。
  - このイベントタイプの利用可能時間をどのように提供しますか？
    - 既存のスケジュールを使用する
    - このイベントタイプにはどのスケジュールを使用しますか？
      - [就業時間](https://help.calendly.com/hc/en-us/articles/360055073694-How-to-set-up-and-edit-your-available-hours-)
- イベントの前後に時間を追加しますか？
  - イベント前: 15 分
- （追加の利用可能時間ルールのセクション/リンクを展開）
  - 開始時間の増分: 30 分（顧客が予約できるオプションをより多くする）
  - スケジュール条件
    - 招待者はイベント開始時間の 2 日以内に予約できない:
      - ベストプラクティスのメモ: ロールに新しい/オンボーディングから出てきた場合、2 日間は顧客を調査し、サポートチケットや GitLab の Issue を確認し、必要に応じてアカウントチームと同期するのに十分な時間があります。また、顧客が週末に時間を予約しても月曜日の朝一番からコールが入らないようにするためのバッファー時間にもなります。
      - 変更メモ: ロールに慣れ、十分な経験を積んだら、より多くの顧客予約を促進するために条件を 2 日から 1 日に短縮することを検討してください。
  - このタイプのイベントの 1 日あたりの最大許容イベント数: 2
    - ベストプラクティスのメモ: メモ/録音を確認してフォローアップ対応の調査を開始する時間とスペースを確保できるほか、CSM/CSE としての他の職務（ウェビナー Q&A のサポート、専門的開発、内部ミーティング、集中時間など）も処理できます。
  - タイムゾーンの表示: 自動検出
  - シークレットイベント: チェックなし/無効
