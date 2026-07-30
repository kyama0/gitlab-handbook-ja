---
title: 米国政府向けオンコールシフトの準備
category: Handling tickets
description: "米国政府向けオンコールシフトの準備手順を解説するサポートエンジニアリングのワークフロー"
upstream_path: /handbook/support/workflows/usgovernment_oncall_checklist/
upstream_sha: a6d55368c73e5825dab217629d9ddb5d23a5fb53
translated_at: "2026-07-30T06:31:24+09:00"
translator: codex
stale: false
lastmod: "2026-07-29T12:39:09-04:00"
---

米国政府向けサポートのオンコールシフトを開始する前に、特に初回のシフトやデバイスを変更したあとは、緊急ケースの受信、確認、対応のためのインテグレーションとアクセスが正しく構成されていることを確認してください。

## PagerDuty

オンコールシフトが始まる前の業務週中に:

- [PagerDuty](https://gitlab.pagerduty.com/) にログインします。プロフィール内の Notification Rules を確認し、自分に確実に通知が届くよう適切に設定されていることを確かめます。
- スマートフォンの PagerDuty アプリにログインします。
- Manually Trigger an Incident の手順に従って自分宛にテストページを送信します。

### PagerDuty 通知のテスト

別の SE に PagerDuty でインシデントを手動でトリガーするよう依頼します。

[gitlab.pagerduty.com](https://gitlab.pagerduty.com) にログインし、右上の **+ New Incident** を選択します。フォームには以下を入力します:

- **Title**: Test Page for $you
- **Impacted Service**: Customer Support Operations
- **Urgency**: High
- **Assignee**: $you

それ以外のフィールドは入力不要なので、**Create Incident** をクリックします。

## 政府専用

[FedRAMP Okta](https://gitlabus.okta.com/) からロックアウトされた場合、ロック解除のプロセスにはある程度の時間がかかることがあります。オンコールシフトが始まる前の週の早い段階で必ずこれを試しておきましょう。

- [FedRAMP Okta](https://gitlabus.okta.com/) にログインします。
- その Okta から [CompSecGov](https://compsecgov.gitlab-dedicated.us/) にログインします。
- AppGuard VPN に接続します。まだ設定したことがない場合は、[Support Materials](https://compsecgov.gitlab-dedicated.us/gov-support/support-materials) プロジェクトに手順があります。
- 1Password で OpenSearch または Grafana インスタンスのいずれかの認証情報を見つけ、接続できることを確認します。

注意: AppGuard VPN に接続している間、`/etc/hosts` を調整しないと CompSecGov にアクセスできません。
