---
title: "Workspaces ADR 001: 使用する設定フォーマット"
upstream_path: /handbook/engineering/architecture/design-documents/workspaces/decisions/001_configuration_format_to_use/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-03-19T23:08:59-07:00"
---

## コンテキスト

再現可能かつエフェメラルな開発環境を提供するために、ユーザーは設定フォーマットで環境を定義できる必要があります。既存の開発環境設定フォーマットを採用するか、独自のものを定義するかを選択できます。

## 決定

設定性が高く、統合を容易にするツールが揃っているため（例: devfile-library が devfile を Kubernetes リソースに変換する）、[devfile](https://devfile.io/) 設定フォーマットを使用することにしました。

まず devfile から始め、フィードバックを受けながら最終的に他の設定フォーマット（例: [devcontainer](https://containers.dev/)）のサポートを追加していきます。

## 結果

devfile を使用することは Kubernetes に重点を置くことを意味します。
現在のアーキテクチャがそれを利用しているため、これは現時点では許容範囲です。

## 代替案

詳細な比較については、[devfile と devcontainer の比較](https://gitlab.com/gitlab-org/gitlab/-/issues/366935) をご覧ください。

新しい設定フォーマットの追加は検討しませんでした。開発段階が初期すぎて要件がどのようなものになるか分からず、この時点で標準を定義することは時期尚早だと判断したためです。
