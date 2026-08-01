---
title: "無人時のラップトップのロック"
aliases:
  - /handbook/security/corporate/end-user-services/laptop-management/laptop-security/unattended/
upstream_path: /handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/unattended/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:32:14+09:00"
translator: codex
stale: false
---

## 概要

すべての GitLab チームメンバーは、**クリーンデスク / クリアスクリーン**の原則に従い、コンピューターを使用していないときは常にロック状態に保つ必要があります。また、共有スペースまたは公共スペースで作業する場合、使用していない機密性の高い GitLab 情報を保存して保護する必要があります。

言い換えると...

- ロック解除したコンピューターを放置しないでください。
- スクリーンセーバーを有効にし、デスクトップをロックするか、蓋を閉じます。
- 可能な場合は、完了時にアクティブな Web ブラウザセッションからサインアウトするか閉じます。
- 公共の[ワイヤレスネットワーク](/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/networks)を使用する場合は、ネットワークトラフィックの傍受を避けるため、未使用時または旅行中にラップトップの WiFi を無効にするか、NordLayer VPN を使用してください。

## スクリーンセーバーとパスワードロック

> **対応は不要です:** これは [Jamf](/handbook/security/corporate/systems/jamf)によって自動的に構成されていますが、確認することを推奨します。

- タイムアウトを 15 分（またはそれ以下）にして、ラップトップにパスワードロック付きのスクリーンセーバーを設定します。
- スクリーンセーバー開始後 5 秒（またはそれ以下）でパスワードを要求します。
- パスワードのヒントを無効にします
- ログインウィンドウを構成して、最後にサインインしたユーザーではなくユーザー一覧を表示します

[ベンダードキュメント](https://support.apple.com/guide/mac-help/change-lock-screen-settings-on-mac-mh11784/mac)
