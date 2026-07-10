---
title: ノートパソコンソフトウェア更新
upstream_path: /handbook/security/corporate/end-user-services/laptop-management/laptop-security/updates/
upstream_sha: 6eef8dbb6a0d15167aa5378f476b04cd38b78675
translated_at: "2026-07-10T06:32:43+09:00"
translator: claude
stale: false
lastmod: "2026-06-30T11:20:04-07:00"
---

## 概要

私たちは、悪用可能な脆弱性のリスクを軽減するため、すべてのエンドポイントオペレーティングシステムとインストール済みソフトウェアでセキュリティパッチを最新の状態に保つことを信条としています。

## 想定される事項

新しい macOS バージョンがリリースされると、まず Security のベータテスターが検証してから、フリート全体にロールアウトします。アップデートが Mac に届くと、標準のアップデート通知が表示され、期限までに再起動してインストールを完了する必要があります。都合のよいタイミングで早めにインストールすると、常によりスムーズに進められます。

ソフトウェア更新には 30〜60 分かかることを見込んでください。再起動する前に作業を保存し、アプリケーションウィンドウを閉じられるよう、勤務日または勤務週の終わり頃に実施するのが最も簡単です。

GitLab チームメンバーは、バージョン要件や適用スケジュールを含む macOS 更新ポリシーの詳細について、社内ハンドブックページの [Approved Team Member Endpoint Operating Systems](https://internal.gitlab.com/handbook/security/corporate/operating-systems)を参照してください。

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
