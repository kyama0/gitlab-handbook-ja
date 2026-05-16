---
title: コミットの調査
description: "誤った、または不明なメールアドレスに紐づけられた gitlab.com のコミットの原因を特定するためのワークフロー"
category: GitLab.com
subcategory: Security
upstream_path: /handbook/support/workflows/investigate_commits/
upstream_sha: 5b8afe7d206f5c195e463506206021ee3c9a4491
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-02-04T16:44:03+00:00"
---

## 概要

ユーザーから、誤った、もしくは不明なユーザーやメールアドレスからのコミットがあるとの問い合わせが時々あります。

これが（よくある）設定ミスによるものか、本当のセキュリティインシデントなのかを特定することは Support の責務の一部です。

## コミットしたユーザーを見つける

Kibana の使い方全般については、[500 エラーのワークフロー](/handbook/support/workflows/500_errors/) を参照してください。

コミットを行ったユーザーを見つけるには:

1. sidekiq ログを開きます。
1. コミット SHA を検索します。
1. オプションで、プロジェクトパスを `json.meta.project` として追加します。
1. `insertId` と `json.args` の下に SHA があるエントリを探します。
1. `json.meta.user` がコミットを push した GitLab ユーザー名を示しています。

ログが Kibana で利用できない場合（7 日より古い）、プロジェクトのアクティビティページで SHA を検索してみてください。それでも見つからない場合は、サポートを得るために Slack の #security に投稿してください。

## 認可の確認

検索結果に基づいて、ユーザーがプロジェクトへのアクセス権を持っているかを確認します。

権限を持っている場合は、コミットしたユーザーが誰かをお客様に明確に伝え、ユーザーに `gitconfig` の名前とメールアドレスを再確認してもらうよう返答します。

権限を持っていない場合は、さらなる調査のために [secops の Issue](https://gitlab.com/gitlab-com/gl-security/secops/operations/-/issues) を作成してください。
