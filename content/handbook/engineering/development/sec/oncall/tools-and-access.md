---
title: ツールとアクセス
upstream_path: /handbook/engineering/development/sec/oncall/tools-and-access/
upstream_sha: c649549e971e74175edf1d5bc1190fcc86e359e6
translated_at: "2026-08-14T09:43:00+09:00"
translator: codex
stale: false
lastmod: "2026-08-13T15:10:33+03:00"
---

オンコールに入る前に、適切なツールと権限が必要です。このページでは必要なものとセットアップ方法を説明します。

## 必要なコアツール

### 1. Incident.io（オンコールプラットフォーム）

**概要：** オンコールスケジュールの管理、呼び出し通知の受信、インシデント対応の調整のための中央システム。

**行うこと：**

- すでに招待を受けているはずです
- 携帯電話（iOS または Android）にインストールする
- 呼び出し通知が届くことをテストする

### 2. モニタリングプラットフォームへのアクセス

チームは以下のうち 1 つ以上を使用します：

- **Grafana** — [ダッシュボードとメトリクス](/handbook/engineering/monitoring/#monitoring-infrastructure)
- **ログ** — [ログ](/handbook/engineering/monitoring/#logs)
- **Sentry** — [エラートラッキング](/handbook/engineering/monitoring/#sentry)

**行うこと：**

- マネージャーにチームが使用しているものを確認する
- 各プラットフォームに追加してもらう
- 認証、認可、パイプラインセキュリティの重要なダッシュボードをブックマークする
- 勤務時間中にアクセスをテストする

### 3. ログとオブザーバビリティへのアクセス

**概要：** サービスのログ、トレース、メトリクスを検索する機能。

**行うこと：**

- チームに使用しているログシステムを確認する
- SSCS サービスの本番ログへのアクセスを確保する
- ドメインの一般的なログクエリに慣れる

### 4. ランブックとドキュメント

- [ランブック](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs)
- SSCS 固有のランブック（ローテーションの成熟に伴い開発予定）

**行うこと：**

- メインのランブックページをブックマークする
- ドメインのコアランブック 3 〜 5 個に慣れる
- 担当したインシデントに基づいてランブック作成に貢献する

## コミュニケーションツール

### Slack

すでに利用しているはずですが、以下の Slack チャンネルに参加していることを確認してください：

- [tier2-sme-rollout](https://gitlab.enterprise.slack.com/archives/C089VUTQLV6)
- [#sscs-tier2-rotation-coordination](https://gitlab.enterprise.slack.com/archives/C09R509V25V)
- チーム固有のチャンネル：
  - 認証チームチャンネル：#g_sscs_authentication/#authentication_lounge
  - 認可チームチャンネル：#g_sscs_authorization
  - パイプラインセキュリティチームチャンネル：#g_sscs_pipeline-security

さらに以下を確認してください：

- インシデントチャンネルに参加している（動的に追加されます）
- メンションが届くよう通知をオンにしている

### 電話番号

電話番号は：

- Incident.io に登録されている（呼び出し通知用）
- 最新で機能している
- シフト中に通話可能な状態

### メール

業務メールが機能しており、インシデント通知を受け取れることを確認してください。

## SSCS 固有のアクセス

ドメインによって以下が必要になる場合があります：

### 認証チーム

- 認証サービスのログとメトリクスへのアクセス
- SAML/OAuth デバッグツール
- セッション管理ダッシュボード

### 認可チーム

- 認可サービスのログとメトリクスへのアクセス
- 権限デバッグツール
- ロールとポリシー管理ダッシュボード

### パイプラインセキュリティチーム

- CI/CD パイプラインのログとメトリクスへのアクセス
- セキュリティスキャニングサービスのダッシュボード
- アーティファクトと依存関係スキャンツール

## シフト前チェックリストの作成

オンコールに入る前に以下をテストしてください：

- [ ] 携帯電話の Incident.io アプリから通知が届く
- [ ] ドメインの本番ログにアクセスできる
- [ ] チームのドキュメントとランブックを読める
- [ ] Slack の通知が機能している
- [ ] 電話番号が最新の状態
- [ ] モニタリングダッシュボードへのアクセス方法を知っている

### 関連ページ

- [初めてのシフト](/handbook/engineering/development/sec/oncall/your-first-shift) — 最初のシフト前にツールをセットアップする
- [引き継ぎと継続性](/handbook/engineering/development/sec/oncall/handoff-and-continuity) — 引き継ぎ時にこれらのツールを使用する
- [コミュニケーションと文化](/handbook/engineering/development/sec/oncall/communication-and-culture) — Slack などのツールを通じてコミュニケーションする
