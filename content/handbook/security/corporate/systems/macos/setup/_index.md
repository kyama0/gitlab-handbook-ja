---
title: Apple macOS セットアップガイド
upstream_path: /handbook/security/corporate/systems/macos/setup/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-06-26T03:27:50+00:00"
---

## 概要

MacBook を初めて起動すると、セットアップアシスタントが、新しい Mac の使用を開始するために必要な簡単な手順を案内します。以下の[オペレーティングシステムのインストール](#os-steps)および[アプリケーションのインストールと設定](#apps-steps)の手順を参照してください。

<!-- TODO: Add step-by-step guide for latest MacOS before reaching the desktop -->

## Mac を初めて使う方へ

Mac の使用が初めての場合（例: 以前 Windows を使用していた場合）は、ベンダーのドキュメントやトレーニングが役立つ場合があります。

* [ベンダードキュメント - macOS ユーザーガイド](https://support.apple.com/guide/mac-help/welcome/14.0/mac)
* [ベンダードキュメント - Mac で始める](https://support.apple.com/guide/mac-help/get-started-with-your-mac-mchl3a2c2cb0/mac)
* [ベンダー 101 トレーニングウェビナー - Mac の使用が初めての方へ](https://events.apple.com/content/events/pst/us/en/default.html?token=xww6uj7woR0X9A3Y9qIMRkNVdH60MurN7MAvJSY75sHQxWqaTEhMjEmalXqC7MMJuZhb5dzJ1P9mLUXaAAfCMipX6qVTaNqFY_njjpamZQfrSbMYEpe-edwBN1r5nI4t-GCxEY8&a=1&l=e)

## セキュリティポリシー

進める前に、[セキュリティ標準](/handbook/security/corporate/end-user-services/laptop-management/laptop-security)ページを通読し、GitLab 固有の構成要件や推奨事項について学んでください。

* [仕事用 Apple ID](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/appleid)
* [バックアップ](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/backups)
* [ディスク暗号化](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/encryption)
* [ファイアウォール](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/firewall)
* [ホスト名とユーザー名（内部）](https://internal.gitlab.com/handbook/security/corporate/tooling/jamf/endpoint_naming_convention/)
* [iCloud Drive](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/icloud)
* [離席時のロック](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/unattended)
* [リモート管理](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/management)
* [Touch ID（生体認証パスワードと 2FA）](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/touchid/)
* [ワイヤレスネットワーク](/handbook/security/corporate/end-user-services/laptop-management/laptop-security/networks)

## OS の手順 {#os-steps}

**個人のメールアドレスの Apple ID を使用しないでください。** 個人と仕事のデータを分離するため、`{handle}@gitlab.com` 業務用メールアドレスを使って新しい Apple ID を作成してください。

<!-- TODO -->

## アプリの手順 {#apps-steps}

<!-- TODO -->

これはプレースホルダーです。

### Mac からの情報の転送

新しい GitLab チームメンバーの場合は、`Don't transfer any information now` オプションを選択してください。個人の Mac や前職のコンピューターから情報を転送しようとしないでください。

GitLab から代替のラップトップを受け取った場合は、古い MacBook から情報を転送するか、まっさらな状態から始めるかを選択できます。**Migration Assistant は使用しないでください** - Migration Assistant には問題があり、使用がブロックされています。

* [Airdrop](https://support.apple.com/guide/mac-help/use-airdrop-to-send-items-to-nearby-devices-mh35868)
* [Google Drive](/handbook/tools-and-tips/#adding-google-drive-to-your-mac)

### Siri

**ほとんどのチームメンバーは、業務用 Mac で Siri を使用していません。** 必要があれば、後でいつでもオンにできます。

ご希望であれば Siri を使用できます。Siri は仕事用の Apple ID に紐づいており、スマートホームデバイスにアクセスや制御をしたり、個人の電話やデバイス上の連絡先にメッセージを送ったりすることはできない点を覚えておいてください。

## Mac チートシート

MacBook の使用が初めての方や、Windows などの他の OS から切り替えた方は、これらの便利なショートカットやオプションをチェックしてみてください。

![mactips2.png](/images/security/corporate/systems/macos/setup/mactips2.png)

![mactips1.png](/images/security/corporate/systems/macos/setup/mactips1.png)
