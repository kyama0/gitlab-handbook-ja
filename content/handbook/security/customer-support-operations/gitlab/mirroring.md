---
title: 'プロジェクトミラーリング'
description: 'プロジェクトミラーリングに関するドキュメント'
date: 2026-01-13
upstream_path: /handbook/security/customer-support-operations/gitlab/mirroring/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-10T00:00:00Z"
translator: claude
stale: false
lastmod: "2026-02-12T20:47:52+00:00"
---

このガイドでは、Customer Support Operations のプロジェクトに対する GitLab リポジトリミラーリングのセットアップ方法を説明します。ミラーリングはソースリポジトリからターゲットリポジトリへ変更を自動的に同期し、自動バックアップやマルチリポジトリのワークフローを実現します。

## ミラーリングについて

### ミラーリングとは

このガイドでは、Customer Support Operations のプロジェクトに対する GitLab リポジトリミラーリングのセットアップ方法を説明します。ミラーリングはソースリポジトリからターゲットリポジトリへ変更を自動的に同期し、自動バックアップやマルチリポジトリのワークフローを実現します。

## セットアップ

Customer Support Operations チームでは、以下の手順でミラーリングをセットアップします。

1. `gl-support-bot` ユーザーとしてログインする（このユーザーがミラー用のサービスアカウントとして使われているため）
1. ソースプロジェクトに移動する
1. 新規ミラーを追加する
   - Git リポジトリ URL: `ssh://gitlab.com/full/path/to/project.git`
   - ミラー方向: `Push`
   - 認証方法: `SSH public key`
   - ユーザー名: `git`
   - 分岐した参照を保持: チェックなし
   - ミラーするブランチ: `Mirror only protected branches`
1. 新しいミラーから SSH 公開鍵をコピーする
1. ターゲットプロジェクトに移動する
1. 新しいデプロイキーを追加する（`Settings > Repository > Deploy Keys`）
   - タイトル: `full/path/to/project`
   - キー: 手順 4 でコピーした値
   - このキーに書き込み権限を付与: チェックあり
   - 有効期限（任意）: 空欄のまま
1. ソースプロジェクトに移動する
1. ミラーの強制更新を実行する（`Settings > Repository > Mirroring repositories`）

## よくある問題とトラブルシューティング

このセクションは生きたセクションであり、必要に応じて項目が追加されていきます。
