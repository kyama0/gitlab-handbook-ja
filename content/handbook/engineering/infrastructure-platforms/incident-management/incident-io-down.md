---
title: "incident.io がダウンしている場合の対処方法"
upstream_path: "/handbook/engineering/infrastructure-platforms/incident-management/incident-io-down/"
upstream_sha: "0e6f01390a34aeb6706ace17d8d3c50e74e82d0d"
translated_at: "2026-04-28T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-12-18T14:22:34-05:00"
---

## 概要

incident.io が利用不可またはアクセスできない状態になった場合、インシデント管理の継続性を維持するために以下の手順に従ってください。

## ログインの問題（CF または Okta の障害）

Cloudflare（CF）または Okta の認証の問題で incident.io にアクセスできない場合：

- incident.io の管理者（#g_networking_and_incident_management またはインフラストラクチャリーダーシップ）に連絡して、[incident.io 権限設定](https://app.incident.io/gitlab/settings/permissions/account)の Standard ロールに対して「Bypass SAML Login」の権限を一時的に付与してもらう。
- これにより SAML 認証なしの一時的なアクセスが可能になります。

## アクション

1. **コミュニケーションの集約**：インシデント専用の Slack チャンネルを作成する（例：`#incident-io-outage` または `#incident-[日付]`）。

   - このチャンネルをすべてのインシデント更新の単一の情報源として使用する。
   - 関連するすべてのステークホルダーが招待されていることを確認する。

2. **Google Doc の作成**：[このテンプレート](https://docs.google.com/document/d/1tFcU5tIpUin_3O50QpEMrhB_KA1vU-PgnI1fRT-xlBE/edit?usp=sharing)を使用して共有 Google Doc を開始し、以下を追跡する：

   - インシデントのタイムラインと主要なイベント
   - アクションアイテムとオーナー
   - ステータス更新
   - 解決手順

3. **アクセスの共有**：Google Doc が GitLab 内のすべての人がアクセスできることを確認する。

## 通常業務への復旧

incident.io が復旧したら：

- [incident.io ダッシュボード](https://app.incident.io/gitlab/dashboard)から「Retrospective incident」を作成する。
- Google Doc から重要な情報を incident.io に移行する。
- 一時的な Slack チャンネルをクローズするか、参照用にアーカイブする。
- 障害から学んだ教訓をドキュメント化する。
