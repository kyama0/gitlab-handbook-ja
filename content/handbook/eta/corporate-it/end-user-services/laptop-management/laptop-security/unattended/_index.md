---
title: "無人時のラップトップのロック"
aliases:
  - /handbook/security/corporate/end-user-services/laptop-management/laptop-security/unattended/
upstream_path: /handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/unattended/
upstream_sha: "c9949657c5872e30f062664ae031e45198aa8562"
lastmod: "2026-10-23T12:38:14-05:00"
translated_at: "2026-10-23T21:06:59+00:00"
translator: codex
stale: false
---

## 概要 {#overview}

すべての GitLab チームメンバーは、**クリーンデスク / クリアスクリーン**の原則に従い、コンピューターを使用していないときは常にロック状態に保つ必要があります。また、共有スペースまたは公共スペースで作業する場合、使用していない機密性の高い GitLab 情報を保存して保護する必要があります。

言い換えると...

- ロック解除したコンピューターを放置しないでください。
- スクリーンセーバーを有効にし、デスクトップをロックするか、蓋を閉じます。
- 可能な場合は、完了時にアクティブな Web ブラウザセッションからサインアウトするか閉じます。
- 公共の[ワイヤレスネットワーク](/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/networks)を使用する場合は、ネットワークトラフィックの傍受を避けるため、未使用時または旅行中にラップトップの WiFi を無効にするか、NordLayer VPN を使用してください。

## スクリーンセーバーとパスワードロック {#screen-saver-and-password-lock}

> **対応は不要です：** これは [Fleet](/handbook/security/corporate/systems/macos/)によって自動的に構成されていますが、確認することを推奨します。

- タイムアウトを 15 分（またはそれ以下）にして、ラップトップにパスワードロック付きのスクリーンセーバーを設定します。
- スクリーンセーバー開始後 5 秒（またはそれ以下）でパスワードを要求します。
- パスワードのヒントを無効にします
- ログインウィンドウを構成して、最後にサインインしたユーザーではなくユーザー一覧を表示します

[ベンダードキュメント](https://support.apple.com/guide/mac-help/change-lock-screen-settings-on-mac-mh11784/mac)
