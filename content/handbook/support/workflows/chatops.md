---
title: GitLab.com 向けChatOps コマンド
category: GitLab.com
description: "Support Engineering が使用する一般的なChatOps コマンドのガイド"
upstream_path: /handbook/support/workflows/chatops/
upstream_sha: 0353e616a41b1d1664a95cc83c80b01f990a912f
translated_at: "2026-05-08T20:14:55Z"
translator: claude
stale: false
lastmod: "2025-03-17T22:13:57+00:00"
---

## 概要

[ChatOps](https://gitlab.com/gitlab-com/chatops/) コマンドは、GitLab.com のサポートリクエストに対応するために使用でき、特に管理者アクセス権を持っていない場合に便利です。情報源を一元化するため、ChatOps の組み込み「help」コマンドを使用して利用可能なコマンドを確認するか、[コード自体を確認する](https://gitlab.com/gitlab-com/chatops/-/tree/master/lib/chatops/commands) ことを推奨します。

**注意**: ChatOps を使用する前に、[アクセス権をリクエスト](https://docs.gitlab.com/development/chatops_on_gitlabcom/#requesting-access) する必要があります。

## Namespace

ネームスペースを管理するためにGitLab API を使用します。

`/chatops run namespace --help`

> **注意:**
トップレベルのグループではなくサブグループを検索しようとする場合は、スラッシュ `/` を `%2F` にエンコードする必要があります。たとえば、サブグループ `gitlab-com/support` のパスは `gitlab-com%2Fsupport` として入力する必要があります。

### ネームスペースに分単位のクォータを設定する

`/chatops run namespace minutes cutecat 10000`

使用する数値は、完了時に `extra_shared_runners_minutes_limit` であるべき合計値です。たとえば、`extra_shared_runners_minutes_limit` の値が 1,337 で、ネームスペース `cutecat` に追加で 1,000 分を加えたい場合、完了時に `extra_shared_runners_minutes_limit` の値が 2,337 になるようにします。コマンドは次のようになります。

`/chatops run namespace minutes cutecat 2337`

## User

ユーザーを管理するためにGitLab API を使用します。

`/chatops run user --help`

## Feature Flags

- 特定のフィーチャーフラグがGitLab.com で有効になっているかどうかを確認するために使用します。
- プロジェクトまたはグループ上でフィーチャーフラグを有効化するために使用します。

`/chatops run feature --help`
