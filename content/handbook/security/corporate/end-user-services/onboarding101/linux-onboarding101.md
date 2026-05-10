---
title: "GitLab Linux オンボーディング 101"
upstream_path: /handbook/security/corporate/end-user-services/onboarding101/linux-onboarding101/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
---

## GitLab Linux コミュニティへようこそ

Linux は macOS の代替として利用可能ですが、サポートが限定的なため推奨はされていません。Linux を選択する場合、自分の環境を維持する完全な責任を引き受け、IT がサポートを提供しないことを理解する必要があります。

私たちは Linux ユーザーがプラットフォームに精通し、当社のセキュリティポリシーを遵守しながら作業環境を自力でセットアップできることを期待しています。このガイドでは、新しいマシンをセットアップする際によく遭遇する問題を取り上げます。

>**注**: Linux に関する詳細な技術サポートは提供しませんが、Okta ログインの問題についてはサポート可能です。#linux Slack チャンネルでは Tips やコツの交換ができますが、公式のヘルプデスクリソースではありません。

## 目次

1. [始める前に](#before-you-begin)
1. [セキュリティ要件](#security-requirements)
1. [初期インストールとディスク暗号化](#initial-installation-and-disk-encryption)
1. [初回 Okta ログイン](#initial-okta-login)
1. [デバイス管理とエンドポイントセキュリティ](#device-management-and-endpoint-security)
   1. [SentinelOne インストール - ドイツ、オランダ、イタリア、オーストリアのみ](#sentinelone-installation---germany-the-netherlands-italy-and-austria-only)
1. [追加リソース](#additional-resources)

## 始める前に

新しい Linux ノートパソコンをセットアップするには、以下のものが必要です。

1. GitLab から提供された Dell ノートパソコン
1. ブート可能な USB ドライブ（最低 8GB）
1. カメラ付きの最新版 iOS または Android デバイス、もしくは YubiKey
1. 初日に個人メールに送信された Okta アクティベーションメール

## セキュリティ要件

>**注**: Ubuntu LTS（最新版）が唯一承認された Linux ディストリビューションです。これにより GitLab はすべての規制およびコンプライアンス基準を満たすことができ、Ubuntu は必要なセキュリティツールを実行する上で非常に信頼性が高いことが実証されています。

Okta にログインできるようにする前に、以下のセキュリティ要件を満たす必要があります。

1. **フルディスク暗号化:** LUKS 暗号化を有効にする必要があります
1. **ホスト名:** ノートパソコンのホスト名が当社の標準命名規則に一致している必要があります
1. **Fleet:** デバイス管理がインストールされている必要があります
1. **EDR:** CrowdStrike Falcon または SentinelOne（ドイツ、オランダ、イタリア、オーストリアのみ）がインストールされている必要があります

## 初期インストールとディスク暗号化

Dell のノートパソコンに同梱されているデフォルト版の Ubuntu は、ディスク暗号化が有効になっていません。OS インストール後にディスクを暗号化することは推奨されておらず、問題が発生する可能性があります。暗号化を有効にして OS を再インストールする必要があります。

1. 最新版の Ubuntu LTS リリースを[こちら](https://ubuntu.com/download/desktop)からダウンロード
1. [balenaEtcher](https://etcher.balena.io/) などを使用してブート可能な USB ドライブを作成
1. [このガイド](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview)に従ってディスクを消去し、Ubuntu をクリーンインストール
   1. グラフィックスと Wi-Fi 用にサードパーティをインストール
   1. **プロンプトが表示されたら必ず `Use LVM and encryption` を選択してください**
   1. インストールを完了し、デスクトップを起動
1. ファイアウォールを有効化:
   1. ターミナルを開き、`sudo ufw status` を実行
   1. レスポンスが `Status: inactive` の場合、`sudo ufw enable` を実行
   1. ufw がインストールされていない場合は、まず `sudo apt install ufw` を実行してください
1. システムを更新:
   1. ターミナルを開き、`sudo apt update && sudo apt upgrade` を実行
1. 高速ログインのために指紋認証を有効化 - [指紋でログイン](https://help.ubuntu.com/stable/ubuntu-help/session-fingerprint.html.en)
   1. 追加リソース: [fprint](https://fprint.freedesktop.org/)

## 初回 Okta ログイン

>**重要**: 新規入社者として、すべてのセキュリティ要件を満たしていなくても初回 Okta ログインを行うことができます。ただし、必須のすべてのステップを初日に完了しなければならず、そうしないと以降ログインできなくなります。

続行する前に、必須のすべてのステップを[こちら](/handbook/security/corporate/end-user-services/onboarding101/#laptop-setup-linux)で完了してください。

## デバイス管理とエンドポイントセキュリティ

すべての Linux デバイスを管理するために Fleet を活用しています。Fleet を使うと Okta にアクセスでき、最もよく使用するアプリケーション（例: Zoom）の中央リポジトリが提供されます。また、ノートパソコン上で発生する可能性のあるセキュリティ問題を通知してくれます。

インストールファイルおよびガイドについては、[このページ](https://internal.gitlab.com/handbook/security/corporate/tooling/fleet/#enrolling-in-fleet)を参照してください。

ノートパソコンを Fleet に登録すると、ドイツ、オランダ、イタリア、オーストリアにいない場合は CrowdStrike Falcon も自動的にインストールされます。

### SentinelOne インストール - ドイツ、オランダ、イタリア、オーストリアのみ

CrowdStrike が上記地域でまだ承認されていないため、これらの地域のユーザーは Fleet に加えて SentinelOne エンドポイントセキュリティを手動でインストールする必要があります。

必要なファイルとセットアップ手順については、[こちら](/handbook/security/corporate/systems/sentinelone/setup/)をクリックしてください。

## 追加リソース

- [Linux のツールと Tips](/handbook/tools-and-tips/linux/)
- [CrowdStrike - エンドポイント検出と応答](https://internal.gitlab.com/handbook/security/corporate/tooling/crowdstrike/)
- [YubiKey セルフサービス購入ガイド](/handbook/security/corporate/systems/yubikey/purchasing/)
- [1Password for Linux](https://1password.com/downloads/linux)
- 質問や議論用の Slack #linux

## ヘルプが必要な場合

ノートパソコンのセットアップでさらなるサポートが必要な場合は、毎週火曜日に予定されているオンボーディングコールに参加するか（カレンダーをご確認ください！）、Slack の #it_help チャンネルもしくは it-help@gitlab.com からご連絡ください。
