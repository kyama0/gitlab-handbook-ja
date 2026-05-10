---
title: ノートパソコンソフトウェア更新
upstream_path: /handbook/security/corporate/end-user-services/laptop-management/laptop-security/updates/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-11T00:00:00Z"
translator: claude
stale: false
---

## 概要

私たちは、悪用可能な脆弱性のリスクを軽減するため、すべてのエンドポイントオペレーティングシステムとインストール済みソフトウェアでセキュリティパッチを最新の状態に保つことを信条としています。

## 想定される事項

2〜3 週間ごとに 30〜60 分間ソフトウェア更新を実行する計画を立ててください。これは、ノートパソコンを再起動する前に作業を保存しアプリケーションウィンドウを閉じることができるよう、勤務日の終わりや勤務週の終わりに向けて計画を立てるのが最も簡単です。

新しい macOS バージョンがリリースされると、当社のセキュリティベータテスターが最新バージョンでテストを実行し、生産性に影響を与える破壊的変更がなくアップグレードがスムーズに進むことを確認します。1〜3 週間のテスト後（重大な脆弱性を除く）、[Jamf](/handbook/security/corporate/systems/jamf) と [Nudge](#nudge-for-macos-updates) を使用してデスクトップポップアップ通知を送信し、チームメンバーに次の数日以内の都合の良いタイミングでオペレーティングシステムを更新するよう促します。

## 構成手順

セキュリティパッチの自動ソフトウェア更新を実行するように macOS が構成されていることを確認する必要があります。

すべてのアプリケーションは、メニューバー左上のアプリケーション名に移動し、`About` または `Check for Updates` オプションを選択することで（アプリケーションによって異なります）、定期的に更新を確認する必要があります。

`brew` またはパッケージマネージャーを使用している場合、[ソフトウェアを自動的に更新](https://docs.brew.sh/FAQ#how-do-i-update-my-local-packages) し続けることができます。

- [ベンダードキュメント - Apple MacOS](https://support.apple.com/guide/mac-help/keep-your-mac-up-to-date-mchlpx1065/mac)
- [ベンダードキュメント - Brew Packages](https://docs.brew.sh/FAQ#how-do-i-update-my-local-packages)
- [ベンダードキュメント - 1Password](https://support.1password.com/update-1password/)
- [ベンダードキュメント - Chrome](https://support.google.com/chrome/answer/95414?hl=en&co=GENIE.Platform%3DDesktop)
- [ベンダードキュメント - Slack](https://slack.com/help/articles/360048367814-Update-the-Slack-desktop-app)
- [ベンダードキュメント - VS Code](https://code.visualstudio.com/docs/setup/setup-overview#_update-cadence)
- [ベンダードキュメント - Zoom](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060716)

## macOS 更新のための Nudge {#nudge-for-macos-updates}

これはプレースホルダーです。

## サードパーティソフトウェアのデプロイとパッチ適用

### 新規システムデプロイ

新しい macOS デバイスが登録を完了すると、[Installomator](https://github.com/Installomator/Installomator) を介して最もよく使用されるアプリケーションを自動的にデプロイします。このプロセスは、チームメンバーが初めてデスクトップに到達してから 5 分以内に開始されるはずです。

### プロセスの詳細

1. チームメンバーは、Okta ログインと、位置情報サービス、アクセシビリティ、Touch ID 登録、Light/Dark 外観選択を含む選択された Setup Assistant ペインを介して、初期アカウントセットアップを完了します。
1. デスクトップへの初回アクセス時に、Installomator が 5 分以内に自動的に起動するはずです。
1. Installomator は 2 つの主要な機能を実行します:
   1. 最もよく使用されるアプリケーション（1Password、Google Chrome、Slack、Zoom）をインストール
   1. Dock 構成を最適化
1. Installomator がインストールプロセスを完了すると、ユーザーは Installomator インターフェースで「Done」をクリックして終了します。
1. システムはチームメンバーにログアウトを促し、その後自動再起動を開始します。
1. 再起動により、FileVault を有効にするようチームメンバーに促すことを含むセットアッププロセスが完了します。

<img src="/images/security/corporate/services/laptops/security/updates/installomator-onboarding.png" alt="Installomator 通知" width="400">

この自動化されたアプローチにより、手動介入を最小限に抑えながら、新しく登録されたすべての macOS デバイスで一貫したアプリケーションデプロイが確保されます。

## Jamf App Installers

特定のサードパーティソフトウェアは、Jamf の [app installers](https://learn.jamf.com/en-US/bundle/jamf-pro-documentation-current/page/App_Installers.html) を使用して自動的にパッチが適用されます。定期的にユーザーは画面の右上に通知を受信し、更新を開始します。ユーザーはソフトウェアを終了して完了後に再度開くか、コンピューターを再起動して更新を完了させることができます。更新は通常 1 分未満で完了します。

<img src="/images/security/corporate/services/laptops/security/updates/app-installer-example.png" alt="App Installer 通知" width="400">

## Jamf App Installers のトラブルシューティング

### アプリを終了しても更新通知が続けて表示される

アプリを終了して再度開いても更新通知が表示される場合は、コンピューターを再起動するか、時計の隣のタスクバーなど、アプリケーションがまだ開いている場所を探してみてください。

<img src="/images/security/corporate/services/laptops/security/updates/1password-taskbar-quit.png" alt="1password タスクバー終了" width="400">
