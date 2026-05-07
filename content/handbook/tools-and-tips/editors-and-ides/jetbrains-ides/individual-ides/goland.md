---
title: "GoLand"
upstream_path: /handbook/tools-and-tips/editors-and-ides/jetbrains-ides/individual-ides/goland/
upstream_sha: 6f672d050777a6a6cb33fc5f31ccf71ebdd5b812
translated_at: "2026-05-08T00:00:00Z"
translator: claude
stale: false
---

## 概要

ウェブサイト: <https://www.jetbrains.com/go/>

最適な用途: 主に Go で書かれたアプリケーション。

## JetBrains 共通のセットアップと設定

JetBrains の IDE は標準化されているため、セットアップと設定情報の多くはすべての IDE に共通して適用され、[JetBrains 共通のセットアップと設定](../setup-and-config/_index.md) で確認できます。

GoLand 固有の設定は、以下のセクションを参照してください。

## GoLand 固有のセットアップと設定

### GoLand の設定

- ここでは [mise](https://gitlab-org.gitlab.io/gitlab-development-kit/howto/mise/) 経由で `go` をインストール済みであることを前提としています。
- `Go` セクションの設定:
  - `GOROOT`
    - `+` を押して `$HOME/.local/share/mise/installs/go/latest` を追加します
    - 追加後、それを選択します。
