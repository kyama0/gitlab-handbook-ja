---
title: "マーケティング - 緊急対応"
description: "GitLab のマーケティング緊急時におけるメール対応プロセス"
upstream_path: /handbook/marketing/emergency-response/
upstream_sha: 2d678e92f3fbc59843a2973bbfa95041c6aef07f
translated_at: "2026-05-01T12:25:17Z"
translator: claude
stale: false
---

## マーケティングの緊急対応

GitLab は時として「破壊的」な変更や、優先度の高い緊急パッチに関する詳細を伝える必要があります。これらのメールはトランザクション性が高く、影響を受ける対象者に的確にターゲティングされます。

**緊急ではない場合:** 重要な計画済みのカスタマーコミュニケーションについては、緊急リクエストの切迫感なくチームが連携して計画できるよう、[カスタマーアップデート/アナウンスプロセス](/handbook/marketing/marketing-operations/email-management/operational-email-sends/#customer-or-user-comms-email-including-breaking-changes)を利用してください。

**緊急コミュニケーションが認識されたら、リクエストするチームは速やかに以下を実施しなければなりません:**

1. **[インシデントコミュニケーションリクエスト](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=incident_communications)** を作成する
1. 以下の S1 カバレッジマトリクスを確認し、`#mktgops` Slack チャンネル上で、自分のタイムゾーンに最も近いカバレッジオーナーをアサインしてタグ付けする。
1. Slack で適時に応答がない場合は、カバレッジオーナーの Slack プロフィールを確認し、すぐに通話やテキストで連絡を取ってください。それでも応答がない場合は `#mktgops` Slack チャンネル内で `@mktg-ops` をタグ付けするか、以下のエスカレーションパスを使用してください。
1. テンプレート内で、リクエストするチームは CTA、メール本文、送信日、**リストを含む Google スプレッドシートへのリンク** などの詳細を含めます。
1. セキュリティ関連の場合は、必ず[手順](/handbook/security/security-operations/sirt/security-incident-communication-plan/#roles-and-responsibilities-in-a-security-incident)に従ってください。

### カバレッジマトリクス

連絡先を判断する際は、自分のタイムゾーンに最も近いカバレッジオーナーを確認してください。

| MOPs チームカバレッジ                          | PT / ET 対応可能時間                 | カバレッジオーナー: 月曜〜金曜 | バックアップ: 月曜〜金曜 | カバレッジオーナーの GEO 時間 |
|---------------------------------------------|-------------------------------|---------------------------|----------------------|-------------------|
| UTC (EMEA 業務時間)                          | 23時 - 3時 PT / 2時 - 6時 ET  | Mihai Conteanu            | Gillian Murphy       | 9時 - 13時 EET     |
| UTC (EMEA 業務時間)                          | 3時 - 7時 PT / 6時 - 10時 ET  | Gillian Murphy            | Mihai Conteanu       | 11時 - 15時 UK     |
| UTC (AMER-午前)                              | 7時 - 11時 PT / 10時 - 14時 ET | Bryce Weatherford         | Jameson Burton       | 10時 - 14時 ET     |
| UTC (AMER-午後)                              | 11時 - 15時 PT / 14時 - 18時 ET  | Bryce Weatherford         | Jenny Tiemann        | 11時 - 15時 PT     |
| UTC (AMER-夕方)                              | 15時 - 18時 PT / 18時 - 21時 ET   | Bryce Weatherford         | Amy Waller           | 15時 - 18時 PT      |

**チームの代表的なタイムゾーン:**

* Amy: PST 太平洋標準時 UTC:-8:00
* Jenny: PST 太平洋標準時 UTC:-8:00
* Nikki: MST 山岳部時間 UTC:-7:00
* Bryce: MST 山岳部時間 UTC:-7:00
* Jameson: MST 山岳部時間 UTC: -5:00
* Gillian: GMT グリニッジ標準時 UTC: +1:00
* Mihai: EET 東欧時間 UTC: +2:00

[タイムゾーン変換ツール](https://dateful.com/time-zone-converter)

**エスカレーションパス:**

通常の業務時間外には「オンコール」体制を設けていないため、上記マトリクスの誰にも連絡が取れない場合は、以下のエスカレーションパスに従ってください。

* `#mktgops`
* マネージャー (Amy Waller)
* それでも応答がない場合は、Amy の Slack プロフィールに記載された電話番号を使い、テキストまたは WhatsApp で連絡してください。連絡が取れない場合は、上記マトリクスから自分のタイムゾーンに合うメンバーへ連絡を試みてください。

## 役割と責任

### リクエスト元の責任

* **メール送信の可能性があることを (実際には実行されない場合でも) できるだけ早期にメールチームへ警告すること**
* メール、ランディングページ、フォームコピー、自動応答コピーなどの最終版を提供すること
  * 注: 各項目を追加するごとにスコープが拡大し、アナウンスが遅れる可能性があります
* Marketing Strategy & Analytics チームへ[ターゲットリストをリクエストする](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/issues/new?issuable_template=list-request)
* [メールリクエスト Issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=incident_communications) を作成する
* 承認者リストとメールに最終承認をする人物を提供する
  * 法務、カスタマーサービス VP、コミュニケーションを発信する機能の VP (Security、Engineering、Infrastructure など) の承認が必須です
* [影響を受けるフィールドチームへの通知](/handbook/security/security-operations/sirt/security-incident-communication-plan/#communicating-internally) (Customer Success、CSM、SAE/AE、SA、Professional Services)
  * メール送信前に `#sales` および `#customer-success` への通知も忘れずに行ってください
* テストメールを承認する
* テストメールへの修正点を提供する
* 送信日時を提供する
* その他すべての素材とワークフロー (ランディングページ、フォーム、完了アクション) を承認する

### メールチームの責任

* リクエストに基づいたタイムラインを提供する
* エピックといくつかの Issue を作成する (ターゲットリストとメールリクエスト Issue 以外すべて)
* Marketo (または選択した送信プラットフォーム) でメールプログラムと実際のメールを構築する
* Marketo (または選択した送信プラットフォーム) にターゲットリストをアップロードする
* 承認用のテストメールをリクエスト元へ送信する
* メールに 1 ラウンドの修正を行う
* フォームと Marketo ランディングページを作成する (必要な場合)
* フォーム完了アクション用のワークフローを構築する
* メールをデプロイする
* メールパフォーマンスレポート、メールリンククリックレポート、フォーム/ランディングページレポートを提供する
* 必要に応じて SFDC キャンペーンを作成する (必要な場合)
* SDR ルーティングニーズを Marketing Ops と調整する

## 標準プロセス

これは、マーケティング Ops チームによって送信される必要のある緊急アナウンスがあるときに従うプロセスです。マーケティング Ops チームは、提供される情報 (タイミング、リストサイズ、深刻度など) に基づいて、使用するプラットフォームを決定します。

1. **リクエスト元チームが緊急コミュニケーションが必要であることを通知する**

   * 直ちに `#mktgops` に Slack で連絡し、インシデント Issue とインシデント Slack チャンネルを含めます。迅速な応答がない場合は、オンコール手順に従ってください。

2. **Issue 作成**

   * Marketing Operations プロジェクトの [Incident Communications テンプレート](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=incident_communications) を使って Issue をリクエストします。
   * 入手可能な情報をできるだけ多く埋めてください - Issue テンプレートが必要な事項をガイドします。役立つと思われる追加のコンテキストは自由に追記してください。すべての情報が揃っていなくても問題ありません。状況は変動するものと理解しています。
   * 期限 (またはおおよその目安) を追加します
   * 空白でも構いませんので、コピードキュメントの Google ドキュメントを含めます。[このテンプレート](https://docs.google.com/document/d/1J_prQ8rXRqEcPWxKd1YH4ANGP5UjMPoAfnjpY8ty0XE/edit) を使用してください。
        * コピーに [RED Data](/handbook/support/workflows/sending_notices) が含まれていないか必ず確認してください。
   * リストのおおよそのサイズを含めてください - これはどのメールプラットフォームを使用するかを決定するため、計画上非常に重要です。不確かな場合は多めに見積もってください。
   * リストをリクエストする場合は、Marketing Strategy チームと [Issue](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/issues/new?issuable_template=list-request) を作成し、いま作成した Issue と関連付けてください。
   * メール内の `mail-merge` で必要となるカスタムフィールドを含めてください。フィールドの最大文字数 (またはおおよその目安) も含めてください。Mktops は既存のフィールドを使えるかどうかを判断します。
   * リンクを追跡しない設定にする場合は明記してください。

3. **Issue 進行中**

   * マーケティングチームは、コミュニケーション計画とケイデンスを策定するために密接に連携します。情報を入手し次第追記し、Slack や Issue で過剰なほど共有してください。
   * リストサイズと複雑さによって、使用すべき[メールプラットフォーム](/handbook/marketing/emergency-response/#email-platform-to-use)が決まります。

4. **承認**

   コピーとリストサイズについて、以下の承認者が必要です:

   * カスタマーサクセス担当バイスプレジデント
   * コミュニケーションを発信する機能の担当バイスプレジデント (Security、Engineering、Infrastructure など)
   * 法務 (コピーのみ)
   * Customer Comms と PR
   * Marketing Operations Manager
   * コミュニケーションを受け取る顧客のスコープに基づいた、適切なフィールドチーム (SAE/AE、SA、CSM、Professional Services)
   * コミュニケーション内に Support に問い合わせる CTA がある場合は Support

5. **メールデプロイ準備完了**

   * メールチームはサンプルをリクエスト元と承認者に送信し、レビューを依頼します - 送信サイズ、変数フィールド、メールコピー、送信時刻をダブルチェックするため、可能であれば短時間の Zoom 同期を行うのが望ましいです。
   * メールが送信される前に、リクエスト元と承認者は Issue 内で承認しなければなりません。
   * リクエスト元は Slack の `#sales` と `#customer-success` にアラートを送信します

6. **メール配信**

   * メールチームは配信開始の数分後に統計情報を提供し、その後はアナウンスチームが必要と判断したケイデンスで提供します。
         - 注: 完全なメール統計は 48 時間で確定します。
   * 受信箱の監視は、特に指定がない限りリクエスト元チームが行います。

## リスト

1. ほとんどの緊急コミュニケーションでは、リクエスト元チームが Issue リクエスト内で Google スプレッドシートとしてリストを提供する必要があります。
     * 必要に応じて Marketing Strategy and Performance チームがユーザーテーブルからリストを抽出できます。彼らに [Issue を作成](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/issues/new?issuable_template=list-request)してください。
     * 多くの場合、これは DBT の [Marketing Contact Mart](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.mart_marketing_contact) を使って行われます。このマートには、SFDC で GitLab Admins、CustomerDB Owners、Zoura Admins としてマークされた人物のフィールドがあります。
1. 一般的なセキュリティアラートには、すでに Marketo にディストリビューションリストが構築されています。
1. まれに、マーケティングデータベース内のパラメータを使って Salesforce や Marketo でリストを作成する必要があります。
     * Marketo と Salesforce には、ユーザーテーブル内の **すべての** レコードが含まれているわけではありません

### リスト作成上の考慮事項

* 20k を超えるリストロードには時間がかかります。100k 以上の場合、数時間/数日かかることがあります。
* 各プラットフォームには、アップロードできる CSV のサイズに独自の制限があります。
* 100k を超えるリストは、当社の送信レピュテーションを危険にさらさないため、検証の対象となる場合があります。
* `mail-merge` フィールドに [RED Data](/handbook/support/workflows/sending_notices) を記載することは避けてください。

## リクエスト元へのその他の考慮事項と質問

* 送信元/返信先メールアドレス
  * 自動応答はあるべきか?
  * 誰かがそのメールアドレスを監視するか?
  * 監視されない場合、メール内でその旨を述べているか?

## 使用するメールプラットフォーム

Marketing Operations は、最適なメール送信プラットフォームを決定します。決定は多くの要因に基づいています。

* [Marketo](/handbook/marketing/marketing-operations/marketo/)
* [Gainsight](/handbook/sales/field-operations/customer-success-operations/gainsight/gainsight-gtm/#gainsight)

## Marketing Operations のセットアップ

* [インシデントテンプレート](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/EBP9730A1) からクローン
  * 処理リクエストを `Do not Route` 実行可能キャンペーンに設定する
  * 新規リードの `Person source` を `GitLab DataMart` としてマークする
  * 空欄の場合 `Person Status` は `Raw` に設定する
  * 処理キャンペーンはリストサイズに応じてトリガーまたはバッチとして設定可能
* メールプログラムのデフォルトを使用しない場合はレポートを設定
* インシデント Issue テンプレートの残りのステップに従う

## 大規模送信のための Mops 手順とチェックリスト

Marketo から 100k を超える送信を行う場合、特に新規リードが大半を占めるアップロードでは、処理時間を短縮するためにいくつかのステップに従ってください。

1. リストを確認し、制裁対象国や GitLab メールアドレスを除外する
1. 処理キャンペーンに対してリスト抑制フィルターを更新する。これらは `person created` をトリガーにしているため処理時間を大幅に遅延させ、(このプログラム外の) 他のすべての Marketo キャンペーンプロセスを停滞させます。
     1. [Generic Email Trigger](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC45139B2ZN19)
     1. [OP-Generic Email Address Scoring](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC3441A1ZN)
     1. [OptOuts after 9.10 - Trigger](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#SC17036A1ZN)
     1. [01a ZoomInfo Enrich - non API leads](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC39715D4ZN19)
     1. [Add to nurture](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC21890A1ZN19)
     1. [Spam catcher](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC2929A1)
     1. [OP-Level/Seniority Segment Scoring](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC48252A1ZN19)
     1. [OP-Role/Function Segment Scoring](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC48153A1ZN19)
     1. [Generic Email Trigger 2023](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC45139A1ZN19)
     1. [OP-Lead Classification - Created/Ongoing](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC46997A1ZN19)
     1. [Populate Generic Email Checking Field](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC45140B2ZN19)
1. 送信速度を向上させるために優先送信コントローラーキャンペーンをセットアップする
1. 送信リストが 250,000 を超える場合は、[スマートキャンペーン上限](/handbook/marketing/marketing-operations/marketo/#campaign-limits)を更新する必要があります。
1. メールを operational としてマークすることを確認してください。そうでない場合は、[メールコミュニケーション制限](/handbook/marketing/marketing-operations/email-management/#send-frequency)を更新する必要があるかもしれません。
1. 送信後、不要なレコードを Marketo から削除するため法務と相談してください。

### 一般的なトラブルシューティング

1. メールが送信されない
   * スマートキャンペーン上限を確認 - 送信が上限を超えていませんか?
   * メールが operational としてマークされていない場合は、メールコミュニケーション制限を更新するか、メールを operational としてマークする必要があります (この場合、フィルターを必ず再確認してください)
1. メールを 15 分以内に送信する必要がある
   * メールプログラムのデフォルト設定を使うのではなく、スマートキャンペーンを設定してメールを送信してください
