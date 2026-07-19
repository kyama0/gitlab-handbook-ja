---
title: 'プロジェクトミラーリング'
description: 'プロジェクトミラーリングのドキュメント'
upstream_path: "/handbook/eta/css/gitlab/mirroring/"
upstream_sha: "1c5f183add4a3220f2aa77e0c98565c4fad645e2"
translated_at: "2026-07-18T06:43:41+09:00"
translator: codex
stale: false
lastmod: "2026-07-14T15:22:25-05:00"
---

このガイドでは、Customer Support Systems プロジェクト向けの GitLab リポジトリミラーリングの設定について説明します。ミラーリングはソースリポジトリからターゲットリポジトリへ変更を自動同期し、自動バックアップと複数リポジトリのワークフローを可能にします。

## ミラーリングを理解する

### ミラーリングとは

このガイドでは、Customer Support Systems プロジェクト向けの GitLab リポジトリミラーリングの設定について説明します。ミラーリングはソースリポジトリからターゲットリポジトリへ変更を自動同期し、自動バックアップと複数リポジトリのワークフローを可能にします。

## セットアップ

Customer Support Systems チームでは、次の手順でミラーリングを設定します。

1. `gl-support-bot` ユーザーとしてログインします（ミラー用のサービスアカウントとして使用するため）
1. ソースプロジェクトに移動する
1. 新しいミラーを追加する
   - Git リポジトリ URL: `ssh://gitlab.com/full/path/to/project.git`
   - ミラーの方向: `Push`
   - 認証方法: `SSH public key`
   - ユーザー名: `git`
   - 分岐した参照を維持: オフ
   - ミラーブランチ: `Mirror only protected branches`
1. 新しいミラーから SSH 公開鍵をコピーする
1. ターゲットプロジェクトに移動する
1. `Settings > Repository > Deploy Keys` で新しいデプロイキーを追加する
   - タイトル: `full/path/to/project`
   - キー: 手順 4 でコピーした値
   - このキーに書き込み権限を付与: オン
   - 有効期限（任意）: 空白のままにする
1. ソースプロジェクトに移動する
1. `Settings > Repository > Mirroring repositories` でミラーを強制更新する

## よくある問題とトラブルシューティング

これは必要に応じて項目を追加する、生きたセクションです。
