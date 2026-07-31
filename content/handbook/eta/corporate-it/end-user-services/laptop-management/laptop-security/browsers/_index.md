---
title: "ラップトップの Web ブラウザ"
upstream_path: /handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/browsers/
upstream_sha: "c75ccd81af7d76262c8cb188bf7e7e2a7f838894"
lastmod: "2026-07-28T15:04:15+01:00"
translated_at: "2026-07-31T07:37:15+09:00"
translator: codex
stale: false
---

## 概要

コラボレーションおよびセキュリティツールの多くが Google とネイティブ統合されているため、主要な Web ブラウザとして Google Chrome を使用しています。

Firefox、Safari などの他のブラウザの使用は推奨もサポートもしません。代替ブラウザが必要となるシナリオがあることは認識していますが、最終的には GitLab リソースへのすべてのアクセスで Google Chrome が必要になります。

## 構成手順

- [ベンダードキュメント - Chrome をインストールする](https://support.google.com/chrome/answer/95346?hl=en&co=GENIE.Platform%3DDesktop&oco=0#zippy=%2Cmac)
- [ベンダードキュメント - Chrome プロファイル](https://support.google.com/chrome/answer/185277?hl=en&ref_topic=7439538&sjid=3263200837792153330-NC)

## エンタープライズブラウザ管理

[Chrome Enterprise Browser Management](https://chromeenterprise.google/browser/management/)は、Corporate Security システム管理者が次の利点を得られるようにするサービスです:

- 効果的な管理とセキュリティレポート
- ユーザー体験を改善し、標準化された構成を実装する
- 古いまたは脆弱な Chrome バージョンに対する迅速かつ効果的なパッチ適用を実装する
- 許可リストとブロックリストを含む Chrome 拡張機能およびバージョンの管理
- [Chrome ポリシー](https://chromeenterprise.google/policies/)の実装

変更は、組織への展開前にフィードバック用の指定されたアルファおよびベータテストユーザーによるテストを含む、標準の [Change Management](https://gitlab.com/gitlab-com/business-technology/change-management)プロセスを使用して管理されます。すべての重要な変更は、全社チャンネルで告知されます。

## パスワード管理

Chrome、Safari、Firefox Web ブラウザにパスワードを保存させないでください。業務用認証情報の保存に、個人用パスワードマネージャー（Bitwarden、LastPass など）または個人用 1Password アカウントを使用しないでください。これは不要なリスクをもたらします。

すべてのパスワード、パスキー、2FA One Time Password (OTP) コードの保存と自動入力には、[1Password Business](https://1password.com/business-security)および [1Password Chrome Extension](https://chromewebstore.google.com/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=en&pli=1)を使用します。

- [1Password セットアップガイド](/handbook/security/corporate/systems/1password/setup)

## 個人利用

- [個人利用ポリシー](/handbook/eta/corporate-it/end-user-services/laptop-management/laptop-security/personal)

- GitLab.com の Google リソースへのログインに個人用 Google Chrome プロファイルを使用できないようにする構成が導入されています。これらの制御は GitLab 支給ラップトップにのみ影響します。
