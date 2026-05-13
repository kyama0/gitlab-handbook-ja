---
title: ナビゲーションインベントリ
summary: GitLab プロダクトナビゲーションの完全なインベントリ
upstream_path: /handbook/product/ux/navigation/inventory/
upstream_sha: 1e195b58b9f249ff10bd0e705106c320fee86141
translated_at: "2026-05-13T12:00:00Z"
translator: claude
stale: false
---

<!--more-->

## このドキュメントの読み方

このドキュメントには、`gitlab-org/gitlab` リポジトリから動的に生成された、GitLab プロダクトナビゲーションの網羅的なインベントリが含まれています。主要なプロダクトコンテキストはそれぞれのセクションで提示されます。一部のメニュー項目は特定の環境でのみ表示される点に注意してください。これらのエントリは次のラベルでタグ付けされています。

| | |
| --- | --- |
| {{< label name="ff" >}} | フィーチャーフラグの背後 |
| {{< label name="sm" >}} | Self-managed インストールのみ |
| {{< label name="dotcom" >}} | SaaS インスタンスのみ |

## プロダクトコンテキスト

{{% product/navigation-inventory %}}

## ナビゲーション項目が見当たらないですか？

[gitlab-org/gitlab](https://gitlab.com/gitlab-org/gitlab) で、欠けている項目のコンテキスト、グループ、名前を記載した Issue を開いてください。ナビゲーションでその項目を有効化する方法（例: X インテグレーションをセットアップする、または Y 設定を有効化する）の手順を含めてください。{{< label name="group::personal productivity" color="#A8D695" light="true" >}} ラベルを追加していただければ、次の Issue トリアージサイクルで取り上げます。

## このページの更新

1. `gitlab-org/gitlab` リポジトリから最新のナビゲーション情報を生成します。手順は [Development Rake tasks](https://docs.gitlab.com/development/rake_tasks/#output-current-navigation-structure-to-yaml) を参照してください。
1. 生成された `navigation.yml` を `handbook/data/navigation.yml` にコピーします
1. （オプション）[ハンドブックをローカルでリビルドして](http://handbook.gitlab.com/docs/development/)このページの出力を確認します
1. 更新された `navigation.yml` コンテンツで MR を開きます。@jtucker_gl にアサインしてください。
