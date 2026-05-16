---
title: "Workspaces ADR 010: Workspaces 向け GitLab VS Code フォークの拡張機能マーケットプレイス"
upstream_path: /handbook/engineering/architecture/design-documents/workspaces/decisions/010_extensions_marketplace_for_vscode/
upstream_sha: 3480299851f7e2243d4f08b75dac452f89929636
translated_at: "2026-04-27T00:00:00Z"
translator: claude
stale: false
lastmod: "2025-03-19T23:08:59-07:00"
---

## コンテキスト

各ワークスペースには Workspaces 向け GitLab VS Code フォークが注入されています。VS Code のエコシステムは機能を実現するために拡張機能に大きく依存しています。ユーザーが何らかの VS Code 拡張機能マーケットプレイスに接続できる方法を提供する必要があります。

## 決定事項

Workspaces 向け GitLab VS Code フォークを [Open VSX Registry](https://open-vsx.org/) に接続することを決定しました。Open VSX Registry は Eclipse のオープンソースプロジェクトであり、[Visual Studio Marketplace](https://marketplace.visualstudio.com/) の代替として機能します。

詳細は[こちら](https://gitlab.com/gitlab-org/gitlab/-/issues/436398)および[こちら](https://gitlab.com/groups/gitlab-org/-/epics/12443)をご参照ください。

## 影響

ワークスペースの起動時、Workspaces 向け GitLab VS Code フォークは IDE の拡張機能を提供するためにサードパーティ（Open VSX Registry）に接続します。セキュリティや法的な理由から、これを望まないユーザーや、接続する拡張機能マーケットプレイスを制御したいユーザーもいるかもしれません。

ユーザーのフィードバックに基づいてこれらの制御を追加できるため、現時点ではこれで問題ありません。

## 代替案

git リポジトリをバックエンドとした独自のカスタム拡張機能マーケットプレイスを構築することを簡単に検討しましたが、Open VSX Registry より優れている理由が見当たりませんでした。
