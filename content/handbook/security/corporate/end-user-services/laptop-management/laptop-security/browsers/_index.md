---
title: ラップトップの Web ブラウザ
upstream_path: /handbook/security/corporate/end-user-services/laptop-management/laptop-security/browsers/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-06-26T03:27:50+00:00"
---

## 概要

私たちは、コラボレーションおよびセキュリティツールの多くが Google とネイティブに統合されているため、Google Chrome を主要な Web ブラウザとして使用しています。

私たちは、Firefox や Safari などの他のブラウザの使用を推奨も、サポートもしていません。代替ブラウザが必要となるシナリオがあることは認識していますが、最終的に GitLab リソースへのすべてのアクセスには Google Chrome が必要となります。

## 設定手順

- [ベンダードキュメント - Chrome のインストール](https://support.google.com/chrome/answer/95346?hl=en&co=GENIE.Platform%3DDesktop&oco=0#zippy=%2Cmac)
- [ベンダードキュメント - Chrome プロファイル](https://support.google.com/chrome/answer/185277?hl=en&ref_topic=7439538&sjid=3263200837792153330-NC)

## エンタープライズブラウザ管理

[Chrome Enterprise Browser Management](https://chromeenterprise.google/browser/management/) は、Corporate Security のシステム管理者が以下のメリットを得られるサービスです。

- 効果的な管理およびセキュリティレポート
- ユーザー体験の向上と、標準化された設定の実装
- 古い、または脆弱な Chrome バージョンに対する迅速かつ効果的なパッチ適用の実装
- 許可リストおよびブロックリストを含む、Chrome 拡張機能とバージョンの管理
- [Chrome ポリシー](https://chromeenterprise.google/policies/)の実装

変更は標準的な[変更管理 (Change Management)](https://gitlab.com/gitlab-com/business-technology/change-management) プロセスを使用して管理され、組織全体への展開前のフィードバックのため、指定されたアルファおよびベータテストユーザーでのテストも含まれます。重要な変更はすべて、全社チャネルで告知されます。

## パスワード管理

Chrome、Safari、Firefox の Web ブラウザにパスワードを保存させないでください。仕事の認証情報を保存するために、個人のパスワードマネージャー (Bitwarden、LastPass など) や個人の 1Password アカウントを使用しないでください。これは不必要なリスクをもたらします。

私たちは、すべてのパスワード、パスキー、2FA ワンタイムパスワード (OTP) コードの保存および自動入力に [1Password Business](https://1password.com/business-security) と [1Password Chrome 拡張機能](https://chromewebstore.google.com/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=en&pli=1) を使用しています。

- [1Password セットアップガイド](/handbook/security/corporate/systems/1password/setup)

## 個人利用

- [個人利用ポリシー](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/personal)

- 個人の Google Chrome プロファイルを使用して GitLab.com の Google リソースにログインすることを防ぐ設定が施されています。これらの制御は GitLab 発行のラップトップにのみ影響します。
