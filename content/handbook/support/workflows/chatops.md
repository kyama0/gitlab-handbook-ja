---
title: GitLab.com 向け ChatOps コマンド
category: GitLab.com
description: "Support Engineering が使用する一般的な ChatOps コマンドのガイド"
upstream_path: /handbook/support/workflows/chatops/
upstream_sha: a2c133ac0b90478eaeb060e8ad64034a95cee1b8
translated_at: "2026-11-06T21:04:26.963167+00:00"
translator: claude
stale: false
lastmod: "2026-11-05T16:58:28-05:00"
---

## 概要 {#overview}

[ChatOps](https://gitlab.com/gitlab-com/chatops/) コマンドは、GitLab.com のサポートリクエストに対応するために使用でき、特に管理者アクセス権を持っていない場合に便利です。情報源を一元化するため、ChatOps の組み込み「help」コマンドを使用して利用可能なコマンドを確認するか、[コード自体を確認する](https://gitlab.com/gitlab-com/chatops/-/tree/master/lib/chatops/commands) ことを推奨します。

**注意**: ChatOps を使用する前に、[アクセス権をリクエスト](https://docs.gitlab.com/development/chatops_on_gitlabcom/#requesting-access) する必要があります。

ChatOps コマンドは `#production` Slack チャンネルで実行できます。

## ネームスペース {#namespace}

ネームスペースを管理するために GitLab API を使用します。

`/chatops gitlab run namespace --help`

> **注意:**
トップレベルのグループではなくサブグループを検索しようとする場合は、スラッシュ `/` を `%2F` にエンコードする必要があります。たとえば、サブグループ `gitlab-com/support` のパスは `gitlab-com%2Fsupport` として入力する必要があります。

### ネームスペースに分単位のクォータを設定する {#setting-minutes-quota-for-a-namespace}

関連する手順については、[コンピューティング時間とストレージ](/handbook/support/license-and-renewals/workflows/saas/compute_minutes_and_storage/#process-for-authorising-additional-compute-minutes-for-customers-as-an-act-of-goodwill)を参照してください。

`/chatops gitlab run namespace minutes cutecat 10000`

使用する数値は、完了時に `extra_shared_runners_minutes_limit` であるべき合計値です。たとえば、`extra_shared_runners_minutes_limit` の値が 1,337 で、ネームスペース `cutecat` に追加で 1,000 分を加えたい場合、完了時に `extra_shared_runners_minutes_limit` の値が 2,337 になるようにします。コマンドは次のようになります。

`/chatops gitlab run namespace minutes cutecat 2337`

## ユーザー {#user}

ユーザーを管理するために GitLab API を使用します。

`/chatops gitlab run user --help`

## フィーチャーフラグ {#feature-flags}

- 特定のフィーチャーフラグが GitLab.com で有効になっているかどうかを確認するために使用します。
- プロジェクトまたはグループ上でフィーチャーフラグを有効化するために使用します。

`/chatops gitlab run feature --help`
