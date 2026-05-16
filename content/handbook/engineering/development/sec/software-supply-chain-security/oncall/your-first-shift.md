---
title: 初めてのシフト
upstream_path: /handbook/engineering/development/sec/software-supply-chain-security/oncall/your-first-shift/
upstream_sha: 8e5460327d5f02f1967a05539db73f8e5cfebbb3
translated_at: "2026-04-28T09:42:29Z"
translator: claude
stale: false
lastmod: "2026-02-09T20:42:10+00:00"
---

初めてのオンコールローテーションに向けた準備をしていますか？以下に必要な手順をまとめました。

## シフト開始前の準備

### 1. ツールをセットアップする

以下がすべてインストールおよび設定されていることを確認してください:

- スマートフォンに **Incident.io** アプリをインストールする（任意ですが推奨）
- インシデントチャンネルを確認して通知を受け取れるよう **Slack** を開いておく

### 2. 基本事項を学ぶ

以下をざっと読んでおいてください:

- [オンコールプロセスとポリシー](/handbook/engineering/infrastructure-platforms/incident-management/on-call/)
- [Tier 2 On Call Level Up Channel](https://levelup.edcast.com/pathways/ECL-123259b5-e469-485e-a0fe-4be27ee118b3)
- [Incident.io - オンコール対応者としての入門](https://help.incident.io/articles/3472064049-get-started-as-an-on-call-responder)

完璧に理解する必要はありません。一晩でエキスパートになるのではなく、慣れ親しむことが目的です。

### 3. 連絡先を把握しておく

ページを受信したときに何をすべきか分からない場合、誰に連絡すればよいですか？

- インシデントローテーションリーダーのオンコール担当に連絡する
- SSCS チームの Slack チャンネルで相談する
- 必要に応じてエンジニアリングマネージャーにエスカレートする

監視すべき Slack チャンネルは何ですか？

- [tier2-sme-rollout](https://gitlab.enterprise.slack.com/archives/C089VUTQLV6)
- [#sscs-tier2-rotation-coordination](https://gitlab.enterprise.slack.com/archives/C09R509V25V)
- チーム固有のチャンネル:
  - Authentication チームチャンネル: #g_sscs_authentication/#authentication_lounge
  - Authorization チームチャンネル: #g_sscs_authorization
  - Pipeline Security チームチャンネル: #g_sscs_pipeline-security

## シフト前夜の確認事項

- **スケジュールを確認する** — Incident.io で開始時刻を正確に把握しておく
- **スマートフォンを充電しておく** — 通知がオンになっていることを確認する
- **スマートフォンで Incident.io をテストする** — アプリが正常に動作するか確認する

## 初めてのページ受信

ページを受信しても慌てないでください。以下の手順で対応します:

### 直ちに行うこと

1. Incident.io で **アラートを承認する**（通常5分以内）
2. **アラートの詳細を読む** — どのサービスか？どのメトリクスか？しきい値はいくつか？
3. Slack の **インシデントチャンネルに参加する**（ページにリンクが含まれているはずです）

### 次にすること

1. **挨拶をする** — 調査していることをメンバーに知らせる:「対応します」
2. **ダッシュボードを確認する** — 監視プラットフォームで何が起きているかを把握する
3. このアラートに対するランブックが存在する場合は **ランブックを読む**
4. **不明な点がある場合** — 質問する。「何を試しましたか？」「顧客への影響はありますか？」
5. **継続的に報告する** — 5〜10分ごとに Slack のインシデントチャンネルに進捗を更新する

### 行き詰まった場合

- Slack で助けを求める
- そのドメインに不慣れな場合は、ドメイン固有の Slack チャンネルにページを送る
- 30分間沈黙したまま調査を続けないこと — 早めにエスカレートする

## オンコール初経験のエンジニアがよく質問すること

**「調査中に何かを壊してしまったら？」**

- 大丈夫です。調査ツール（ログの確認、ダッシュボードのチェック）は何も変更しません。変更が必要な場合は、安全に実施するための手順書（ランブック）が用意されています。

**「解決できなかったら？」**

- エスカレートしてください。あなたの役割はスーパーヒーローになることではなく、対応可能な状態で積極的に関与することです。より経験豊富な人へのエスカレーションは、まさにあなたがすべきことです。

**「同時に複数のページを受け取ったら？」**

- 一つずつ対処してください。取り組んでいる内容と優先順位をチームに伝えてください。追加サポートを集めてもらえるよう、ローテーションリーダーにも状況を報告してください。

**「シフト終了時にまだインシデントが続いていたら？」**

- 試みたことと分かったことを明確に記したノートを添えて、次のオンコールエンジニアに引き継いでください。引き継ぎの詳細は後ほど説明します。

**「問題が自分の SSCS ドメイン外にあった場合は？」**

- それでも最初の窓口はあなたです。初期トリアージを実施した後、見つけた内容のコンテキストを添えて適切なチーム（Authentication、Authorization、または Pipeline Security）にエスカレートしてください。

### 関連ページ

- [基本事項の理解](/handbook/engineering/development/sec/software-supply-chain-security/oncall/understanding-the-basics) — オンコール初心者はここから始める
- [ツールとアクセス](/handbook/engineering/development/sec/software-supply-chain-security/oncall/tools-and-access) — シフト前にツールをセットアップする
- [コミュニケーションとカルチャー](/handbook/engineering/development/sec/software-supply-chain-security/oncall/communication-and-culture) — ページ受信時のコミュニケーション方法を確認する
