---
title: 離席時のラップトップロック
upstream_path: /handbook/security/corporate/end-user-services/laptop-management/laptop-security/unattended/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-06-26T03:27:50+00:00"
---

## 概要

GitLab のすべてのチームメンバーは、**クリーンデスク／クリアスクリーン**の原則に従い、コンピューターを使用していないときはロックする必要があります。また、共有スペースや公共のスペースで作業する場合、機密性のある GitLab の情報は使用していないときに保管・保護する必要があります。

つまり…

- ロックを解除したコンピューターを離席時にそのまま放置しないでください。
- スクリーンセーバーを起動するか、デスクトップをロックするか、ふたを閉じてください。
- 可能な場合は、作業終了後に Web ブラウザのアクティブなセッションからサインアウトするか、セッションを閉じてください。
- 公衆[ワイヤレスネットワーク](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/networks)を使用する場合は、ネットワークトラフィックの傍受を避けるため、使用していないときや移動中はラップトップの WiFi を無効にするか、Nordlayer VPN を使用してください。

## スクリーンセーバーとパスワードロック

> **アクション不要:** これは [Jamf](/handbook/security/corporate/systems/jamf) によって自動的に設定されていますが、確認することをおすすめします。

- ラップトップにスクリーンセーバーとパスワードロックを設定し、タイムアウトを 15 分以下にしてください。
- スクリーンセーバー開始から 5 秒以内（またはそれ以下）でパスワードを要求するように設定してください。
- パスワードヒントを無効にしてください。
- ログインウィンドウでは、最後にサインインしたユーザーではなく、ユーザー一覧を表示するように設定してください。

[ベンダードキュメント](https://support.apple.com/guide/mac-help/change-lock-screen-settings-on-mac-mh11784/mac)
