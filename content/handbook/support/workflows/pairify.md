---
title: Pairify
description: "このドキュメントでは、Pairify とは何か、ペアリングセッションを記録するためにどのように使うかを説明します。"
category: References
upstream_path: /handbook/support/workflows/pairify/
upstream_sha: 5b8afe7d206f5c195e463506206021ee3c9a4491
translated_at: "2026-05-08T01:46:59Z"
translator: claude
stale: false
lastmod: "2025-09-25T10:42:45+12:00"
---

## 概要

このドキュメントでは、Pairify とは何か、[ペアリングセッション](pairing-sessions.md) を記録するためにどのように使うかを説明します。

## Pairify とは？

[Pairify](https://gitlab.com/gitlab-com/support/toolbox/pairify) は Slack ボットアプリケーションで、監視対象の Slack チャンネルを定期的にスキャンし、![Pairify emoji](/images/support/workflows/assets/pairify.png "Pairify emoji") (`:pairify:`) のリアクションが付けられた会話を探します。

その後、Zendesk URL、GitLab URL（エピック、Issue、マージリクエスト、ハンドブック、ドキュメント）、Slack の参加者／メンションをすべて抽出し、抽出した URL や参加者（GitLab.com のユーザー名に変換済み）を含むペアリング Issue を自動的に作成して、その Issue をクローズします。生の Slack スレッドも Issue にキャプチャされますが、添付ファイルは Slack 上に残ります。

![Pairify demo](/images/support/workflows/assets/pairify_demo.gif)

## Pairify の使い方

**注意**: Pairify が Slack ユーザーを GitLab.com ユーザーに正しくマッピングするためには、Slack プロフィールの **GitLab.com profile** フィールドを設定する必要があります。詳細は [プロフィールを編集する](https://slack.com/intl/en-gb/help/articles/204092246-Edit-your-profile) を参照してください。

Pairify をペアリングセッションのワークフローに組み込むには:

1. [サポート対象チャンネル](#channels-monitored-by-pairify) のいずれかでスレッドを作成し、同僚とペアリングしましょう！

1. スレッドの会話に以下の情報が含まれていることを確認してください:

   a. 対象としたすべての Zendesk チケット URL

   b. ペアリングセッションのすべての参加者がスレッドにコメントするか、スレッド内で `@slack_username` でメンションされていること

1. 任意。[ペアリングセッションタイプを指定する](#specifying-the-pairing-session-type)。

1. **ペアリングが完了したら**、スレッドに ![Pairify emoji](/images/support/workflows/assets/pairify.png "Pairify emoji") (`:pairify:`) 絵文字でリアクションを付けて、Pairify が処理する会話としてマークします。

その後は、[Pairify の動作の仕組み](#how-pairify-works) で説明している、次にスケジュール実行されるタイミングを待つ必要があります。

## Pairify の動作の仕組み {#how-pairify-works}

Pairify は [スケジュールパイプライン](https://gitlab.com/gitlab-com/support/toolbox/pairify#production) によって 30 分ごとに実行されます。パイプラインが開始すると、Pairify は [すべての監視対象チャンネル](#channels-monitored-by-pairify) を検索し、過去 12 時間以内に作成され ![Pairify emoji](/images/support/workflows/assets/pairify.png "Pairify emoji") (`:pairify:`) リアクションが付いている会話を探します。

その後、Pairify は次の処理を行います:

1. 会話内の Zendesk URL、参加者、メンションを抽出する
1. 生の Slack 会話（添付ファイルを除く）を抽出する
1. すべての Slack ユーザーを対応する GitLab.com ユーザーに変換する
1. 抽出した詳細を含む GitLab Issue を [Support Pairing](https://gitlab.com/gitlab-com/support/support-pairing) プロジェクトに作成する。`pairify` ラベルが Issue に自動的に適用され、処理中に判定されたその他のラベルも併せて付与されます。
1. 会話のスレッドにメッセージを作成し、会話が処理されたことを通知する。レスポンスには作成された Issue へのリンクも含まれます。
1. 会話に ![Issue created emoji](/images/support/workflows/assets/pairify_issue-created.png "Issue created emoji") (`:issue-created:`) 絵文字でリアクションを付け、以降の実行で再度処理されないようにする。

## ペアリングセッションタイプの指定 {#specifying-the-pairing-session-type}

Pairify は、追加の絵文字でリアクションすることで、ペアリングセッションタイプを示す追加のラベルをペアリング Issue に適用できます。

これらのリアクションは相互に排他的です。複数のリアクションが見つかった場合、Pairify は会話に最初に追加されたリアクションのみを処理します。

詳細は [ペアリング Issue タイプの指定](https://gitlab.com/gitlab-com/support/toolbox/pairify#specifying-the-pairing-session-type) を参照してください。

## 自動ラベル

Pairify はペアリングセッションの内容と文脈に基づいて、特定のラベルを自動的に適用します。自動ラベルの完全なリストは、[automatic labels](https://gitlab.com/gitlab-com/support/toolbox/pairify#automatic-labels) を参照してください。

## リマインダー

Pairify は放置されたスレッドに対して自動リマインダーメッセージを送信することもできます。詳細は [reminders](https://gitlab.com/gitlab-com/support/toolbox/pairify#reminders) を参照してください。

## Pairify の監視対象チャンネル {#channels-monitored-by-pairify}

Pairify が監視しているチャンネルのリストについては、[`.settings.production.yml`](https://gitlab.com/gitlab-com/support/toolbox/pairify/-/blob/main/config/.settings.production.yml) ファイルを参照してください。

## トラブルシューティング

- Pairify プロジェクトの [troubleshooting](https://gitlab.com/gitlab-com/support/toolbox/pairify#troubleshooting) セクションを参照してください。
- 既知の Issue に該当する可能性があるため、[Issue トラッカー](https://gitlab.com/gitlab-com/support/toolbox/pairify/-/issues) も確認してください。
